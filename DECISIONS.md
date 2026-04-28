# Architecture Decision Log

This file records significant design and architecture decisions made during the development of this tool. Each entry explains the decision and the reasoning behind it.

---

## Decision log

### v1 — Static narrative templates, not runtime LLM

**Decision:** Report narrative is generated from static, pre-written templates in `content/narrative-snippets.json`, not via a runtime LLM call.

**Reasoning:** The tool is designed to be client-side-only with no backend, no API keys, and no external requests during the assessment. An LLM runtime call would require a backend proxy (to protect API keys), introduce latency, add cost, and create a hard dependency on a third-party service. Static templates are deterministic, free to run, work offline after initial CDN load, and keep all assessment data in the browser. The trade-off is that narrative quality depends on the template authors rather than an adaptive model — this is acceptable for v1 and will be reviewed for future versions.

---
