# Architecture Decision Log

This file records significant design and architecture decisions made during the development of this tool. Each entry explains the decision and the reasoning behind it.

---

## Decision log

### v1 — Static narrative templates, not runtime LLM

**Decision:** Report narrative is generated from static, pre-written templates in `content/narrative-snippets.json`, not via a runtime LLM call.

**Reasoning:** The tool is designed to be client-side-only with no backend, no API keys, and no external requests during the assessment. An LLM runtime call would require a backend proxy (to protect API keys), introduce latency, add cost, and create a hard dependency on a third-party service. Static templates are deterministic, free to run, work offline after initial CDN load, and keep all assessment data in the browser. The trade-off is that narrative quality depends on the template authors rather than an adaptive model — this is acceptable for v1 and will be reviewed for future versions.

---

### v1 — dimensions.json uses `label`/`shortLabel` rather than a single `name` field

**Decision:** Each dimension entry carries both `label` (full display text) and `shortLabel` (compact version for radar chart axes and mobile), alongside `name` which mirrors `label` for schema compatibility.

**Reasoning:** The original spec defined a single `name` field, but the UI needs two display variants: a full label for headings and an abbreviated label for space-constrained contexts. Keeping both removes the need for application logic to truncate labels. `name` is retained as a schema field to ensure compatibility with any tooling that validates against the spec literally.

---

### v1 — context-questions.json includes an optional `org_name` text field

**Decision:** A seventh, optional context question (`org_name`) collects a free-text organisation name. It is not required.

**Reasoning:** The spec defined 6 context questions. An organisation name is collected to personalise the downloaded report header. It is marked `required: false`, never stored anywhere beyond localStorage, and explicitly shown to the user as report-only. It does not affect scoring or recommendation logic.

---
