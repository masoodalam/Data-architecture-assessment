// Pure scoring functions — no DOM, no I/O, fully deterministic.

/**
 * Score a single question answer.
 * Returns the numeric level (1-5) or null if the answer is 'unknown' or missing.
 */
export function scoreQuestion(answer) {
  if (answer === null || answer === undefined || answer === 'unknown') return null;
  const level = Number(answer);
  if (!Number.isInteger(level) || level < 1 || level > 5) return null;
  return level;
}

/**
 * Score a single dimension given its questions and the full answers map.
 *
 * @param {Array}  dimQuestions  - question objects for this dimension
 * @param {Object} answers       - { questionId: level|'unknown' }
 * @returns {{ score: number|null, level: number|null, insufficientData: boolean, answeredCount: number, totalCount: number }}
 */
export function scoreDimension(dimQuestions, answers) {
  const totalCount = dimQuestions.length;
  let weightedSum = 0;
  let totalWeight = 0;
  let answeredCount = 0;

  for (const q of dimQuestions) {
    const raw = answers[q.id];
    const level = scoreQuestion(raw);
    if (level === null) continue; // unknown or unanswered — exclude from scoring
    const weight = typeof q.weight === 'number' ? q.weight : 1;
    weightedSum += level * weight;
    totalWeight += weight;
    answeredCount++;
  }

  // Flag as insufficient if more than half the questions were skipped/unknown
  const insufficientData = answeredCount < Math.ceil(totalCount / 2);

  if (totalWeight === 0) {
    return { score: null, level: null, insufficientData: true, answeredCount, totalCount };
  }

  const score = weightedSum / totalWeight;
  const level = Math.round(score);

  return { score, level, insufficientData, answeredCount, totalCount };
}

/**
 * Score all dimensions and produce an overall score.
 *
 * @param {Array}  dimensions   - dimension objects (with id and weight)
 * @param {Array}  questions    - all question objects
 * @param {Object} answers      - { questionId: level|'unknown' }
 * @returns {{ dimensions: Object, overall: { score, level } }}
 */
export function scoreAll(dimensions, questions, answers) {
  // Group questions by dimension
  const byDimension = {};
  for (const q of questions) {
    if (!byDimension[q.dimension]) byDimension[q.dimension] = [];
    byDimension[q.dimension].push(q);
  }

  // Score each dimension
  const dimensionResults = {};
  let overallWeightedSum = 0;
  let overallTotalWeight = 0;

  for (const dim of dimensions) {
    const dimQuestions = byDimension[dim.id] || [];
    const result = scoreDimension(dimQuestions, answers);
    dimensionResults[dim.id] = result;

    if (result.score !== null && !result.insufficientData) {
      const dimWeight = typeof dim.weight === 'number' ? dim.weight : 1;
      overallWeightedSum += result.score * dimWeight;
      overallTotalWeight += dimWeight;
    }
  }

  const overallScore = overallTotalWeight > 0 ? overallWeightedSum / overallTotalWeight : null;
  const overallLevel = overallScore !== null ? Math.round(overallScore) : null;

  return {
    dimensions: dimensionResults,
    overall: { score: overallScore, level: overallLevel },
  };
}

/**
 * Return the score band string used to key into narrative snippets.
 * e.g. score 1.7 → '1-2', score 3.4 → '3-4'
 */
export function scoreBand(score) {
  if (score === null) return '1-2';
  if (score < 2) return '1-2';
  if (score < 3) return '2-3';
  if (score < 4) return '3-4';
  return '4-5';
}

/**
 * Return a formatted score string rounded to 1 decimal place.
 */
export function formatScore(score) {
  if (score === null) return '—';
  return score.toFixed(1);
}
