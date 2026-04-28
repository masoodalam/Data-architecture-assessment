// Assessment version — increment when saved-state format changes incompatibly
export const VERSION = '1.0.0';

const STORAGE_KEY = 'dama_assessment_v1';

// Content is bundled as JavaScript modules so the site works in any
// environment (file://, GitHub Pages, any static host) with no fetch.
import dimensions      from './content/dimensions.js';
import maturityLevels  from './content/maturity-levels.js';
import contextQuestions from './content/context-questions.js';
import questionsData   from './content/questions.js';
import recommendationsData from './content/recommendations.js';
import toolsData       from './content/tools-catalogue.js';
import narrative       from './content/narrative-snippets.js';

// ─── Content loading ──────────────────────────────────────────────────────────

export async function loadContent() {
  return {
    dimensions,
    maturityLevels,
    contextQuestions,
    questions:       questionsData?.questions ?? questionsData,
    recommendations: recommendationsData?.recommendations ?? recommendationsData,
    tools:           toolsData?.tools ?? toolsData,
    narrative,
  };
}

// ─── State ────────────────────────────────────────────────────────────────────

export function emptyState() {
  return {
    version:         VERSION,
    screen:          'landing',
    contextAnswers:  {},
    questionAnswers: {},
    currentDimIdx:   0,
    currentQIdx:     0,
    completedAt:     null,
  };
}

// ─── Persistence ─────────────────────────────────────────────────────────────

export function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch { /* quota exceeded or private browsing */ }
}

export function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed.version !== VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function clearState() {
  try { localStorage.removeItem(STORAGE_KEY); } catch { /* ignore */ }
}

export function hasSavedState() {
  return loadState() !== null;
}
