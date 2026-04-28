# Methodology

This document explains how the Data Architecture Maturity Assessment Tool calculates scores, how it maps to the DAMA-DMBOK framework, and the design decisions behind the scoring model.

---

## DAMA-DMBOK alignment

The assessment is structured around the **DAMA Data Management Body of Knowledge (DMBOK)** framework, second edition. DAMA-DMBOK defines data management as a set of interconnected knowledge areas, each with its own principles, activities, and practices.

This tool distils those knowledge areas into **8 practical dimensions** selected for relevance to data architecture specifically (as opposed to data management in its full breadth, which also encompasses data modelling, master data management, document management, and other areas not directly concerned with architectural maturity).

The 5-level maturity scale follows the **CMM-inspired levels** that DAMA-DMBOK references:

| Level | Label | Description |
|-------|-------|-------------|
| 1 | Initial | Ad-hoc, undocumented, reactive. Individuals work around the absence of process. |
| 2 | Repeatable | Key processes are recognised and repeated across projects, but not formally defined. |
| 3 | Defined | Processes are documented, standardised, and followed consistently across the organisation. |
| 4 | Managed | Processes are measured, monitored, and actively managed. Quantitative targets exist. |
| 5 | Optimised | Continuous improvement culture. Processes are refined based on measurement and feedback. |

---

## Dimension rationale

### Governance
Covers data ownership, stewardship, policy enforcement, and business glossary maturity. Governance is foundational: weaknesses here cascade into every other dimension. A Level 1 governance score almost always predicts low scores across quality, metadata, and security.

### Metadata
Covers business glossary, data lineage, schema cataloguing, and the discoverability of datasets. Metadata maturity determines how quickly analysts and engineers can understand data assets without needing a subject-matter expert on hand.

### Quality
Covers profiling, validation rules, quality SLAs, and the ownership of quality remediation. Quality issues are the most visible consequence of low data architecture maturity — this dimension captures both the technical practices and the organisational accountability structures.

### Storage
Covers platform selection rationale, data lake/warehouse maturity, cost management, scalability, and format choices. This dimension assesses whether the storage layer was chosen to meet current and projected needs, or inherited by accident.

### Pipelines
Covers orchestration, observability, data contracts, CI/CD for data, and recovery practices. A strong pipelines score indicates that data movement is predictable, testable, and recoverable — not artisanal.

### Analytics
Covers self-service capability, semantic layer maturity, BI tooling adoption, ML/AI readiness, and the breadth of users who can query data independently. This dimension reflects the return on investment that the rest of the data architecture delivers.

### Security
Covers data classification, access control, encryption at rest and in transit, audit logging, and compliance posture. Security maturity is often underrepresented in data architecture reviews; this dimension surfaces gaps before they become incidents.

### Skills
Covers team structure, role clarity, training investment, hiring practice, and tooling literacy. Architecture patterns are only as effective as the team's ability to implement and maintain them.

---

## Scoring

### Per-question scoring

Each question offers five options labelled Level 1 through Level 5. An answer of Level N earns a raw score of N. The optional "I don't know / not applicable" answer earns no score and is excluded from the dimension calculation.

### Per-dimension scoring

A dimension score is the **arithmetic mean** of the raw scores for all answered questions in that dimension.

```
dimension_score = sum(answered_question_scores) / count(answered_questions)
```

If fewer than **50%** of a dimension's questions are answered (including `unknown` responses), the dimension is flagged as **"Insufficient data"** and no numeric score is shown. This prevents misleading high scores from very sparse data.

The dimension **level** is the integer nearest to the dimension score, rounded down (floor). A score of 2.7 maps to Level 2.

### Overall score

The overall score is the **weighted mean** of dimension scores, using the `weight` field in `content/dimensions.json`. All dimensions currently carry equal weight (1.0), making the overall score the simple mean of all dimension scores. Weights can be adjusted by forking and editing `dimensions.json`.

```
overall_score = sum(dimension_score × dimension_weight) / sum(dimension_weights)
```

### Score bands

Scores are mapped to a narrative band for executive summary selection:

| Band | Score range |
|------|-------------|
| `1-2` | 1.0 – 2.4 |
| `2-3` | 2.5 – 3.4 |
| `3-4` | 3.5 – 4.4 |
| `4-5` | 4.5 – 5.0 |

---

## Handling "I don't know"

Questions marked `allow_unknown: true` in `questions.json` offer a "I don't know / not applicable" option. This is provided where genuine ignorance is a meaningful signal distinct from Level 1 maturity — for example, questions about encryption key management or specific pipeline monitoring tooling.

`unknown` answers are **excluded** from score calculations entirely — they neither raise nor lower a dimension score. If a respondent answers `unknown` to more than half of a dimension's questions, that dimension is flagged as "Insufficient data."

This approach is more informative than treating `unknown` as Level 1, which would systematically understate maturity for organisations that have a practice but whose representative simply didn't know the detail.

---

## Recommendation filtering

Recommendations in `content/recommendations.json` are filtered against the assessment output as follows:

1. **Trigger match:** Each recommendation defines a `trigger` with an optional `minLevel` and `maxLevel` for its dimension. Only recommendations whose trigger matches the assessed dimension score are shown.
2. **Context match:** An optional `context` block on each recommendation allows filtering by sector, cloud posture, org size, or budget posture drawn from the context questions. Recommendations with a `context.excludeIf` condition are suppressed when that condition is met.
3. **Horizon assignment:** Each recommendation is pre-assigned a `horizon` (`do_now`, `next_6_months`, `strategic`). Recommendations are grouped by horizon in the report.
4. **Sorting:** Within each horizon, recommendations are ordered: `quick_win` before `foundational` before `strategic`; within the same priority, lower effort before higher effort.

---

## Narrative generation

Report narrative (executive summary, dimension summaries, context observations, closing remark) is drawn from pre-written templates in `content/narrative-snippets.json`. Multiple variants exist for each score band and dimension level.

Variant selection is **deterministic**: a djb2 hash of the full answer set (sorted question IDs and their answers, concatenated) produces an index into the variant array. The same answers always produce the same report text. Different answers (even by one question) will typically produce different text.

This design ensures the report is reproducible and shareable, while providing textual variety across the user base.

---

## Limitations

- **Self-assessment bias:** Scores reflect the respondent's own view of their organisation. There is no external validation. Over-scoring is common in organisations where the respondent is close to the practices they are assessing; under-scoring is common where the respondent lacks visibility into practices managed by other teams.
- **Representative coverage:** A single respondent may not have visibility across all 8 dimensions. Where knowledge is limited, the `allow_unknown` option should be used; the resulting "Insufficient data" flag is more honest than a guessed level answer.
- **Uniform within-dimension weighting:** All five questions within a dimension carry equal weight. Some aspects of maturity may be more critical to an organisation's specific context; forking and adjusting weights is possible but requires code or content changes.
- **Binary tool catalogue:** Tool recommendations are drawn from a curated catalogue. The catalogue does not cover every tool and will become stale over time. Contributions to the catalogue via pull request are encouraged.

---

## Versioning policy

The assessment version is stored in `js/state.js` as `VERSION`. When breaking changes are made to the question set or scoring logic:

- The `VERSION` constant is incremented.
- Saved state from a previous version is detected on load and discarded (with a user-visible message), preventing scores from being calculated using mismatched question sets.

Additive changes (new recommendations, new tools, new narrative variants) do not require a version bump.
