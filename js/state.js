// Assessment version — increment when saved-state format changes incompatibly
export const VERSION = '1.0.0';

const STORAGE_KEY = 'dama_assessment_v1';

const CONTENT_FILES = {
  dimensions:       'content/dimensions.json',
  maturityLevels:   'content/maturity-levels.json',
  contextQuestions: 'content/context-questions.json',
  questions:        'content/questions.json',
  recommendations:  'content/recommendations.json',
  tools:            'content/tools-catalogue.json',
  narrative:        'content/narrative-snippets.json',
};

// ─── Content loading ──────────────────────────────────────────────────────────

export async function loadContent() {
  const entries = await Promise.all(
    Object.entries(CONTENT_FILES).map(async ([key, path]) => {
      let response;
      try {
        response = await fetch(path);
      } catch (err) {
        if (err instanceof TypeError) {
          throw new Error(
            'Cannot load content files from a file:// URL.\n\n' +
            'Start a local server instead:\n' +
            '  python3 -m http.server 8080\n' +
            'Then open: http://localhost:8080'
          );
        }
        throw err;
      }
      if (!response.ok) {
        throw new Error(`Failed to load ${path}: HTTP ${response.status}`);
      }
      let data;
      try {
        data = await response.json();
      } catch (err) {
        throw new Error(`Invalid JSON in ${path}: ${err.message}`);
      }
      return [key, data];
    })
  );

  const content = Object.fromEntries(entries);

  // Normalise wrapped arrays
  if (content.questions?.questions) content.questions = content.questions.questions;
  if (content.recommendations?.recommendations) content.recommendations = content.recommendations.recommendations;
  if (content.tools?.tools) content.tools = content.tools.tools;

  return content;
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
