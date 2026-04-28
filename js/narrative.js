// Deterministic narrative selection from content/narrative-snippets.json.
// Same input always produces the same variant — but different users with
// similar scores get variety because the hash is seeded by their answers.

import { scoreBand } from './scoring.js';

/**
 * Simple deterministic hash of a string → integer.
 * djb2 variant — fast, good enough distribution for variant selection.
 */
function hash(str) {
  let h = 5381;
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) + h) ^ str.charCodeAt(i);
    h = h >>> 0; // keep as unsigned 32-bit
  }
  return h;
}

/**
 * Build a stable string key from scores + context to seed variant selection.
 */
function inputKey(scores, contextAnswers) {
  const dimScores = Object.entries(scores.dimensions)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([id, r]) => `${id}:${r.level ?? 0}`)
    .join(',');
  const ctx = Object.entries(contextAnswers)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([k, v]) => `${k}=${v}`)
    .join(',');
  return `${dimScores}|${ctx}`;
}

/**
 * Pick a variant from an array deterministically using a hash seed.
 */
function pickVariant(variants, seed) {
  if (!variants || variants.length === 0) return '';
  return variants[seed % variants.length];
}

/**
 * Get the executive summary paragraph for the given overall score.
 */
export function getExecutiveSummary(scores, contextAnswers, snippets) {
  const band = scoreBand(scores.overall.score);
  const variants = snippets.executive_summary?.[band] ?? [];
  const seed = hash(inputKey(scores, contextAnswers));
  return pickVariant(variants, seed);
}

/**
 * Get the dimension summary paragraph for a specific dimension and its score.
 */
export function getDimensionSummary(dimensionId, level, scores, contextAnswers, snippets) {
  const key = String(level ?? 1);
  const variants = snippets.dimension_summaries?.[dimensionId]?.[key] ?? [];
  const seed = hash(inputKey(scores, contextAnswers) + dimensionId);
  return pickVariant(variants, seed);
}

/**
 * Get all context observations that apply to the current scores and context.
 * Context conditions are evaluated loosely — the condition object keys are
 * matched against contextAnswers and dimension scores.
 */
export function getContextObservations(scores, contextAnswers, snippets) {
  const observations = snippets.context_observations ?? [];
  return observations.filter(obs => {
    const cond = obs.condition ?? {};
    return Object.entries(cond).every(([key, val]) => {
      // Match against context answers
      if (contextAnswers[key] !== undefined) return contextAnswers[key] === val;
      // Match numeric dimension level thresholds
      if (key === 'overallMaxLevel') return (scores.overall.level ?? 99) <= val;
      if (key === 'overallMinLevel') return (scores.overall.level ?? 0) >= val;
      // Loose match — if we cannot evaluate, skip
      return true;
    });
  }).map(obs => obs.text);
}

/**
 * Get a closing remark paragraph.
 */
export function getClosingRemark(scores, contextAnswers, snippets) {
  const variants = snippets.closing_remarks ?? [];
  const seed = hash(inputKey(scores, contextAnswers) + 'closing');
  return pickVariant(variants, seed);
}

/**
 * Assemble the full narrative object for the report.
 */
export function buildNarrative(scores, contextAnswers, dimensions, snippets) {
  return {
    executiveSummary: getExecutiveSummary(scores, contextAnswers, snippets),
    dimensionSummaries: Object.fromEntries(
      dimensions.map(dim => [
        dim.id,
        getDimensionSummary(
          dim.id,
          scores.dimensions[dim.id]?.level ?? 1,
          scores,
          contextAnswers,
          snippets
        )
      ])
    ),
    contextObservations: getContextObservations(scores, contextAnswers, snippets),
    closingRemark: getClosingRemark(scores, contextAnswers, snippets),
  };
}
