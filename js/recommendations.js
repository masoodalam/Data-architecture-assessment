// Recommendation filtering, sorting, and tool substitution.

const PRIORITY_ORDER = { quick_win: 0, foundational: 1, strategic: 2 };
const HORIZON_ORDER  = { do_now: 0, next_6_months: 1, strategic: 2 };

/**
 * Determine whether a recommendation's trigger conditions are met.
 * trigger: { minLevel?, maxLevel? } — both are inclusive.
 */
function triggerMatches(trigger, dimensionScore) {
  if (!trigger) return true;
  if (dimensionScore === null) return false;
  if (trigger.minLevel !== undefined && dimensionScore < trigger.minLevel) return false;
  if (trigger.maxLevel !== undefined && dimensionScore > trigger.maxLevel) return false;
  return true;
}

/**
 * Determine whether a recommendation's context conditions are met.
 * context: { anyOf?: string[], cloud?: string[], budget?: string[], excludeIf?: {} }
 */
function contextMatches(context, contextAnswers) {
  if (!context) return true;

  // excludeIf: suppress if context key equals given value
  if (context.excludeIf) {
    for (const [key, val] of Object.entries(context.excludeIf)) {
      if (contextAnswers[key] === val) return false;
    }
  }

  // anyOf: sector must match one of the listed values (if specified)
  if (context.anyOf && context.anyOf.length > 0) {
    const sector = contextAnswers.sector;
    const size   = contextAnswers.org_size;
    const team   = contextAnswers.team_maturity;
    const budget = contextAnswers.budget_posture;
    const matched = context.anyOf.some(v =>
      v === sector || v === size || v === team || v === budget
    );
    if (!matched) return false;
  }

  // cloud: cloud_posture must match
  if (context.cloud && context.cloud.length > 0) {
    if (!context.cloud.includes(contextAnswers.cloud_posture)) return false;
  }

  // budget: budget_posture must match
  if (context.budget && context.budget.length > 0) {
    if (!context.budget.includes(contextAnswers.budget_posture)) return false;
  }

  return true;
}

/**
 * Reorder alternative_tools based on cloud posture and budget posture.
 * AWS users see AWS-friendly tools first; OSS-preferred users see commercial tools deprioritised.
 */
function substituteTools(rec, contextAnswers, toolsById) {
  if (!rec.alternative_tools || rec.alternative_tools.length === 0) return rec;

  const cloud  = contextAnswers.cloud_posture;
  const budget = contextAnswers.budget_posture;

  // Score each alternative tool — lower = more preferred
  function toolScore(toolId) {
    const tool = toolsById[toolId];
    if (!tool) return 99;
    let score = 0;
    // Prefer tools good for the user's cloud
    if (cloud && tool.good_for?.includes(cloud)) score -= 2;
    // OSS-preferred: deprioritise commercial tools
    if (budget === 'oss_preferred' && tool.type === 'commercial') score += 5;
    if (budget === 'oss_preferred' && tool.type === 'source_available') score += 2;
    // On-prem: prefer self-hosted tools
    if (cloud === 'on_prem' && tool.deployment?.includes('self_hosted')) score -= 1;
    if (cloud === 'on_prem' && !tool.deployment?.includes('self_hosted')) score += 3;
    return score;
  }

  const sorted = [...rec.alternative_tools].sort((a, b) => toolScore(a) - toolScore(b));
  return { ...rec, alternative_tools: sorted };
}

/**
 * Filter and sort recommendations given dimension scores and context answers.
 *
 * @param {Array}  recommendations  - all recommendation objects
 * @param {Object} dimensionScores  - { dimensionId: { score, level } }
 * @param {Object} overallScore     - { score, level }
 * @param {Object} contextAnswers   - from state.contextAnswers
 * @param {Array}  tools            - tools catalogue array (for substitution)
 * @returns {Object} { do_now: [], next_6_months: [], strategic: [] }
 */
export function filterRecommendations(recommendations, dimensionScores, overallScore, contextAnswers, tools) {
  const toolsById = Object.fromEntries((tools || []).map(t => [t.id, t]));

  const matched = [];

  for (const rec of recommendations) {
    // Determine the score to test the trigger against
    let testScore;
    if (rec.dimension === 'cross_cutting') {
      testScore = overallScore?.score ?? null;
    } else {
      testScore = dimensionScores[rec.dimension]?.score ?? null;
    }

    if (!triggerMatches(rec.trigger, testScore)) continue;
    if (!contextMatches(rec.context, contextAnswers)) continue;

    matched.push(substituteTools(rec, contextAnswers, toolsById));
  }

  // Sort within each horizon by priority
  matched.sort((a, b) => {
    const hDiff = HORIZON_ORDER[a.horizon] - HORIZON_ORDER[b.horizon];
    if (hDiff !== 0) return hDiff;
    return PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority];
  });

  // Group by horizon
  const grouped = { do_now: [], next_6_months: [], strategic: [] };
  for (const rec of matched) {
    if (grouped[rec.horizon]) grouped[rec.horizon].push(rec);
  }

  return grouped;
}
