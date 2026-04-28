# Architecture Decision Log

This file records significant design and architecture decisions made during the development of this tool. Each entry explains the decision, the alternatives considered, and the reasoning.

---

## ADR 1 — Static narrative templates, not runtime LLM

**Decision:** Report narrative is generated from static, pre-written templates in `content/narrative-snippets.json`, not via a runtime LLM call.

**Alternatives considered:** OpenAI API call at report generation time; a local WASM LLM.

**Reasoning:** The tool is designed to be client-side-only with no backend, no API keys, and no external requests during the assessment. An LLM runtime call would require a backend proxy (to protect API keys), introduce latency, add cost, and create a hard dependency on a third-party service. A local WASM LLM would be hundreds of megabytes in download weight — unacceptable for a lightweight tool. Static templates are deterministic, free to run, and keep all data in the browser. The trade-off is that narrative quality depends on the template authors rather than an adaptive model; this is acceptable for v1 and will be reviewed for future versions.

---

## ADR 2 — `label` / `shortLabel` rather than a single `name` field

**Decision:** Each dimension entry carries both `label` (full display text, e.g. "Data Governance") and `shortLabel` (compact version for radar chart axes, e.g. "Governance"), alongside `name` which mirrors `label` for schema compatibility.

**Alternatives considered:** A single `name` field with application-level truncation; a computed abbreviation.

**Reasoning:** The original spec defined a single `name` field, but the UI needs two display variants: a full label for headings and an abbreviated label for space-constrained contexts (radar chart point labels, mobile dimension nav). Keeping both in the data removes the need for application logic to truncate labels at runtime. `name` is retained as a schema field to ensure compatibility with tooling that validates against the spec literally.

---

## ADR 3 — Optional `org_name` text field in context questions

**Decision:** A seventh, optional context question (`org_name`) collects a free-text organisation name. It is marked `required: false`.

**Alternatives considered:** Skip organisation name entirely; derive from browser metadata.

**Reasoning:** The spec defined 6 context questions. An organisation name is collected solely to personalise the downloaded report header (e.g. "Acme Ltd — Data Architecture Maturity Report"). It is marked optional, never stored beyond localStorage, and does not affect scoring or recommendation logic. It is shown to the user as "this is for your report only."

---

## ADR 4 — `fetch()` for JSON loading; `file://` protocol not supported

**Decision:** All content JSON files are loaded via `fetch()`. Opening `index.html` directly from the filesystem (`file://` protocol) will fail with a CORS error and show a clear message directing the user to run a local HTTP server.

**Alternatives considered:** Inlining all JSON as JavaScript modules; bundling content at build time; using `<script type="application/json">` tags.

**Reasoning:** Keeping content in external JSON files allows non-developers to contribute via PR (editing JSON in the GitHub UI) without touching any JavaScript. Inlining content would require a build step or a non-standard loading pattern. The `file://` limitation is well-understood, consistently documented in the README and in the on-screen error message, and does not affect GitHub Pages, Netlify, or any HTTP deployment. The error message includes the exact `python3 -m http.server 8080` command to resolve it with zero dependencies.

---

## ADR 5 — Deterministic narrative variant selection via djb2 hash

**Decision:** When multiple narrative text variants exist for the same score band or dimension level, the variant is selected using a djb2 hash of the full answer set. The same inputs always produce the same variant.

**Alternatives considered:** Random selection on each render; user-controlled variant switching.

**Reasoning:** Random selection would produce different reports on page refresh, making it impossible to share a consistent report. User-controlled switching adds UI complexity. A deterministic hash means the report is reproducible: two users with identical answers see identical text, while users with different answers (even slightly) are likely to see different variants, adding variety across the user base. djb2 was chosen for its simplicity — it is implementable in three lines of JavaScript with no dependencies.

---

## ADR 6 — `allow_unknown` flag on selected questions

**Decision:** Some questions include a sixth option: "I don't know / not applicable." These questions are flagged with `allow_unknown: true` in `questions.json`.

**Alternatives considered:** Require all questions to be answered; treat "skip" as equivalent to Level 1.

**Reasoning:** For questions about infrastructure specifics (e.g. encryption at rest) or cloud-specific practices, a genuine "I don't know" is meaningfully different from a Level 1 answer. Forcing a choice between Level 1–5 when the answerer genuinely doesn't know introduces noise into the scores. Answers of `unknown` are excluded from the dimension score calculation; if more than 50% of questions in a dimension are unanswered or `unknown`, an "Insufficient data" flag is shown instead of a numeric score.

---

## ADR 7 — Single-page app; no router library

**Decision:** Screen state is managed by showing/hiding `[data-screen]` elements and by a plain `state.screen` string stored in localStorage. No client-side router library (e.g. Navigo, page.js) is used.

**Alternatives considered:** Hash-based URL routing; a full SPA framework.

**Reasoning:** The tool has exactly four screens (landing, context, assessment, report) with linear navigation. A router library would add weight, complexity, and a dependency for minimal gain. Hash routing would expose state in the URL and complicate the "no data leaves your browser" privacy guarantee. The current approach is simpler, easier to audit, and fully sufficient for this use case.
