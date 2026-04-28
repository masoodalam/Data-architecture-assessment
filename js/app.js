// Main controller — routes between screens, wires up all modules.

import { loadContent, emptyState, saveState, loadState, clearState, hasSavedState } from './state.js';
import { scoreAll } from './scoring.js';
import { filterRecommendations } from './recommendations.js';
import { buildNarrative } from './narrative.js';
import { renderReport, printReport, downloadMarkdown } from './report.js';

// ─── App state ────────────────────────────────────────────────────────────────

let content = null;   // loaded JSON content
let state   = null;   // current assessment state

// Questions grouped by dimension for assessment navigation
let dimGroups = [];   // [{ dimension, questions: [] }]

// ─── Boot ─────────────────────────────────────────────────────────────────────

export async function init() {
  showLoadingOverlay('Loading assessment…');

  try {
    content = await loadContent();
  } catch (err) {
    showFatalError(err.message);
    return;
  }

  // Group questions by dimension order
  const dimOrder = content.dimensions.map(d => d.id);
  dimGroups = dimOrder.map(id => ({
    dimension: content.dimensions.find(d => d.id === id),
    questions: content.questions.filter(q => q.dimension === id),
  }));

  // Restore or start fresh
  state = loadState() ?? emptyState();

  hideLoadingOverlay();
  showScreen(state.screen);
  wireGlobalEvents();
}

// ─── Screen routing ───────────────────────────────────────────────────────────

export function showScreen(name) {
  state.screen = name;
  saveState(state);

  document.querySelectorAll('[data-screen]').forEach(el => {
    el.hidden = el.dataset.screen !== name;
  });

  // Scroll to top on every screen change
  window.scrollTo({ top: 0, behavior: 'instant' });

  if (name === 'landing')    renderLanding();
  if (name === 'context')    renderContext();
  if (name === 'assessment') renderAssessment();
  if (name === 'report')     renderReportScreen();
}

// ─── Landing ──────────────────────────────────────────────────────────────────

function renderLanding() {
  const resumeBtn = document.getElementById('btn-resume');
  if (resumeBtn) {
    resumeBtn.hidden = !hasSavedState();
  }
}

// ─── Context questions ────────────────────────────────────────────────────────

function renderContext() {
  const form = document.getElementById('context-form');
  if (!form) return;
  form.innerHTML = '';

  for (const q of content.contextQuestions) {
    form.appendChild(buildContextField(q));
  }

  // Restore saved answers
  form.querySelectorAll('[data-qid]').forEach(el => {
    const saved = state.contextAnswers[el.dataset.qid];
    if (saved !== undefined) el.value = saved;
  });

  updateContextProgress();
}

function buildContextField(q) {
  const wrapper = document.createElement('div');
  wrapper.className = 'context-field';

  const labelEl = document.createElement('label');
  labelEl.setAttribute('for', `ctx-${q.id}`);
  labelEl.className = 'field-label';
  labelEl.textContent = q.label;
  wrapper.appendChild(labelEl);

  if (q.hint) {
    const hint = document.createElement('p');
    hint.className = 'field-hint';
    hint.id = `ctx-${q.id}-hint`;
    hint.textContent = q.hint;
    wrapper.appendChild(hint);
  }

  let input;
  if (q.type === 'text') {
    input = document.createElement('input');
    input.type = 'text';
    input.placeholder = q.placeholder ?? '';
    input.className = 'field-input';
  } else {
    input = document.createElement('select');
    input.className = 'field-select';
    const blank = document.createElement('option');
    blank.value = '';
    blank.textContent = '— Select —';
    blank.disabled = true;
    blank.selected = true;
    input.appendChild(blank);
    for (const opt of q.options ?? []) {
      const o = document.createElement('option');
      o.value = opt.value;
      o.textContent = opt.label;
      input.appendChild(o);
    }
  }

  input.id = `ctx-${q.id}`;
  input.dataset.qid = q.id;
  if (q.hint) input.setAttribute('aria-describedby', `ctx-${q.id}-hint`);
  if (q.required) input.required = true;

  input.addEventListener('change', () => {
    state.contextAnswers[q.id] = input.value;
    saveState(state);
    updateContextProgress();
  });

  wrapper.appendChild(input);
  return wrapper;
}

function updateContextProgress() {
  const required = content.contextQuestions.filter(q => q.required);
  const answered = required.filter(q => state.contextAnswers[q.id]);
  const pct = required.length > 0 ? Math.round((answered.length / required.length) * 100) : 0;

  const bar = document.getElementById('context-progress-bar');
  if (bar) { bar.style.width = `${pct}%`; bar.setAttribute('aria-valuenow', pct); }

  const nextBtn = document.getElementById('btn-context-next');
  if (nextBtn) nextBtn.disabled = answered.length < required.length;
}

// ─── Assessment ───────────────────────────────────────────────────────────────

function renderAssessment() {
  renderDimProgress();
  renderCurrentQuestion();
}

function renderDimProgress() {
  const nav = document.getElementById('dim-nav');
  if (!nav) return;
  nav.innerHTML = '';

  dimGroups.forEach((group, idx) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `dim-nav-btn${idx === state.currentDimIdx ? ' active' : ''}`;
    btn.textContent = group.dimension.shortLabel;
    btn.setAttribute('aria-current', idx === state.currentDimIdx ? 'true' : 'false');
    btn.addEventListener('click', () => {
      state.currentDimIdx = idx;
      state.currentQIdx   = 0;
      saveState(state);
      renderAssessment();
    });
    nav.appendChild(btn);
  });

  // Overall progress bar
  const total    = content.questions.length;
  const answered = Object.keys(state.questionAnswers).length;
  const pct = total > 0 ? Math.round((answered / total) * 100) : 0;
  const bar = document.getElementById('assessment-progress-bar');
  if (bar) { bar.style.width = `${pct}%`; bar.setAttribute('aria-valuenow', pct); }
  const label = document.getElementById('assessment-progress-label');
  if (label) label.textContent = `${answered} of ${total} questions answered`;
}

function renderCurrentQuestion() {
  const group = dimGroups[state.currentDimIdx];
  if (!group) return;

  const q = group.questions[state.currentQIdx];
  if (!q) return;

  const container = document.getElementById('question-container');
  if (!container) return;

  const dimLabel = document.getElementById('current-dim-label');
  if (dimLabel) dimLabel.textContent = group.dimension.label;

  const qCounter = document.getElementById('q-counter');
  if (qCounter) qCounter.textContent =
    `Question ${state.currentQIdx + 1} of ${group.questions.length}`;

  container.innerHTML = buildQuestionHTML(q);

  // Restore selection
  const saved = state.questionAnswers[q.id];
  if (saved !== undefined) {
    const radio = container.querySelector(`input[value="${saved}"]`);
    if (radio) radio.checked = true;
  }

  // Wire up answer selection
  container.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', () => {
      state.questionAnswers[q.id] = radio.value;
      saveState(state);
      renderDimProgress();
      updateNavButtons();
    });
  });

  updateNavButtons();
}

function buildQuestionHTML(q) {
  const opts = q.options.map(opt => `
    <li>
      <label class="option-label">
        <input type="radio" name="q_${q.id}" value="${opt.level}" class="option-radio"
               aria-describedby="q-help-${q.id}">
        <span class="option-text">
          <span class="option-level">Level ${opt.level}</span>
          ${escHtml(opt.label)}
        </span>
      </label>
    </li>`).join('');

  const unknownOpt = q.allow_unknown ? `
    <li>
      <label class="option-label option-unknown">
        <input type="radio" name="q_${q.id}" value="unknown" class="option-radio">
        <span class="option-text">I don't know / not applicable</span>
      </label>
    </li>` : '';

  const helpText = q.help_text ? `
    <p class="question-help" id="q-help-${q.id}">${escHtml(q.help_text)}</p>` : '';

  return `
    <fieldset class="question-fieldset">
      <legend class="question-text">${escHtml(q.question)}</legend>
      ${helpText}
      <ul class="options-list" role="list">
        ${opts}
        ${unknownOpt}
      </ul>
    </fieldset>`;
}

function updateNavButtons() {
  const group = dimGroups[state.currentDimIdx];
  const isFirstQ    = state.currentQIdx === 0;
  const isFirstDim  = state.currentDimIdx === 0;
  const isLastQ     = state.currentQIdx === (group?.questions.length ?? 1) - 1;
  const isLastDim   = state.currentDimIdx === dimGroups.length - 1;

  const backBtn   = document.getElementById('btn-q-back');
  const nextBtn   = document.getElementById('btn-q-next');
  const finishBtn = document.getElementById('btn-finish');

  if (backBtn)   backBtn.disabled   = isFirstQ && isFirstDim;
  if (nextBtn)   nextBtn.hidden     = isLastQ && isLastDim;
  if (finishBtn) finishBtn.hidden   = !(isLastQ && isLastDim);
}

// ─── Report ───────────────────────────────────────────────────────────────────

function renderReportScreen() {
  const scores = scoreAll(content.dimensions, content.questions, state.questionAnswers);
  const grouped = filterRecommendations(
    content.recommendations,
    scores.dimensions,
    scores.overall,
    state.contextAnswers,
    content.tools
  );
  const narrative = buildNarrative(scores, state.contextAnswers, content.dimensions, content.narrative);

  const container = document.getElementById('report-container');
  if (!container) return;

  renderReport(container, {
    scores,
    recommendations: grouped,
    narrative,
    dimensions:      content.dimensions,
    maturityLevels:  content.maturityLevels,
    content,
    contextAnswers:  state.contextAnswers,
  });

  // Wire export buttons
  const printBtn = document.getElementById('btn-print');
  if (printBtn) printBtn.onclick = printReport;

  const mdBtn = document.getElementById('btn-download-md');
  if (mdBtn) mdBtn.onclick = () => downloadMarkdown({
    scores, recommendations: grouped, narrative,
    dimensions: content.dimensions, maturityLevels: content.maturityLevels,
    contextAnswers: state.contextAnswers,
  });
}

// ─── Global event wiring ──────────────────────────────────────────────────────

function wireGlobalEvents() {
  // Landing screen
  on('btn-start', 'click', () => {
    state = emptyState();
    showScreen('context');
  });
  on('btn-resume', 'click', () => {
    state = loadState() ?? emptyState();
    showScreen(state.screen === 'landing' ? 'context' : state.screen);
  });

  // Context
  on('btn-context-next', 'click', () => showScreen('assessment'));
  on('btn-context-back', 'click', () => showScreen('landing'));

  // Assessment navigation
  on('btn-q-back', 'click', () => {
    if (state.currentQIdx > 0) {
      state.currentQIdx--;
    } else if (state.currentDimIdx > 0) {
      state.currentDimIdx--;
      state.currentQIdx = dimGroups[state.currentDimIdx].questions.length - 1;
    }
    saveState(state);
    renderAssessment();
  });

  on('btn-q-next', 'click', () => {
    const group = dimGroups[state.currentDimIdx];
    if (state.currentQIdx < group.questions.length - 1) {
      state.currentQIdx++;
    } else if (state.currentDimIdx < dimGroups.length - 1) {
      state.currentDimIdx++;
      state.currentQIdx = 0;
    }
    saveState(state);
    renderAssessment();
  });

  on('btn-finish', 'click', () => {
    state.completedAt = new Date().toISOString();
    saveState(state);
    showScreen('report');
  });

  on('btn-report-restart', 'click', () => {
    clearState();
    state = emptyState();
    showScreen('landing');
  });

  // "Clear my answers" always available
  on('btn-clear', 'click', () => {
    if (confirm('Clear all your answers and start again? This cannot be undone.')) {
      clearState();
      state = emptyState();
      showScreen('landing');
    }
  });
}

function on(id, event, handler) {
  const el = document.getElementById(id);
  if (el) el.addEventListener(event, handler);
}

// ─── Loading overlay ─────────────────────────────────────────────────────────

function showLoadingOverlay(msg) {
  const overlay = document.getElementById('loading-overlay');
  if (overlay) { overlay.hidden = false; overlay.querySelector('p').textContent = msg; }
}

function hideLoadingOverlay() {
  const overlay = document.getElementById('loading-overlay');
  if (overlay) overlay.hidden = true;
}

function showFatalError(msg) {
  hideLoadingOverlay();
  const container = document.getElementById('error-container');
  if (container) {
    container.hidden = false;
    const pre = container.querySelector('pre');
    if (pre) pre.textContent = msg;
  }
}

function escHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
