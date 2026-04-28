# Adding Questions

A step-by-step guide for contributors who want to add or edit questions in the assessment question bank.

---

## Before you start

**Read the existing questions first.** Open `content/questions.json` and read several questions in the dimension you want to contribute to. Your new question should:

- Cover an aspect of maturity not already covered by the existing five
- Be answerable by a data architect, data engineer, or senior data practitioner without needing to consult multiple teams
- Describe an **observable, verifiable state** — not an aspiration or an intention

If you're unsure whether a question fills a gap, open a **Suggest a question** issue first so maintainers can confirm the gap before you invest time writing options.

---

## Step 1 — Choose your dimension

The eight dimension IDs are:

| ID | Label |
|----|-------|
| `governance` | Data Governance |
| `metadata` | Metadata Management |
| `quality` | Data Quality |
| `storage` | Storage & Platforms |
| `pipelines` | Data Pipelines |
| `analytics` | Analytics & Reporting |
| `security` | Security & Compliance |
| `skills` | Skills & Organisation |

---

## Step 2 — Assign a question ID

Question IDs follow the pattern `{prefix}_{nnn}` where prefix is 2–8 lowercase letters derived from the dimension ID and `nnn` is a zero-padded three-digit integer.

| Dimension | Prefix | Example |
|-----------|--------|---------|
| governance | `gov` | `gov_006` |
| metadata | `met` | `met_006` |
| quality | `qual` | `qual_006` |
| storage | `sto` | `sto_006` |
| pipelines | `pip` | `pip_006` |
| analytics | `ana` | `ana_006` |
| security | `sec` | `sec_006` |
| skills | `ski` | `ski_006` |

The next available ID is the highest existing ID in that dimension + 1. Check `content/questions.json` before assigning.

---

## Step 3 — Write the question text

The question text is the `question` field. It should:

- Be a complete sentence or noun phrase that clearly states what is being assessed
- Start with a capital letter and end without a full stop (the options complete the thought)
- Be unambiguous — there should be one clear interpretation

**Examples of good question text:**
- "How are data quality rules defined and enforced in your pipelines?"
- "What level of lineage tracking exists for your data assets?"
- "How is access to sensitive data controlled and audited?"

**Avoid:**
- Questions that could apply equally to Level 1 and Level 5 depending on interpretation
- Questions containing "we" (the tool doesn't know who "we" is)
- Questions that are really two questions joined with "and"

---

## Step 4 — Write the help text

The `help_text` field (optional but strongly recommended) provides a one-sentence clarification shown below the question. It should resolve the most likely ambiguity in the question.

**Example:**
- Question: "How are data quality rules defined and enforced in your pipelines?"
- Help text: "Consider rules such as null checks, referential integrity, format validation, and statistical anomaly detection."

---

## Step 5 — Write five level options

Each question must have exactly five options, one per maturity level (Level 1 through Level 5). This is the hardest part of writing a good question.

### The five-level ladder

Each option should describe a state that is **meaningfully better** than the one below it — not just slightly more documented or slightly more consistent. The jump from Level 2 to Level 3 should feel substantively different.

| Level | Character | Pattern |
|-------|-----------|---------|
| 1 – Initial | Absent, ad-hoc, reactive | "There are no…", "We have not…", "It depends on the individual" |
| 2 – Repeatable | Emerging, recognised, but inconsistent | "Some teams…", "In places…", "Informally…" |
| 3 – Defined | Documented, standardised, consistent | "Defined and documented…", "Applied consistently…", "All teams…" |
| 4 – Managed | Measured, monitored, enforced | "Measured and tracked…", "Quantitative targets…", "Reported on regularly…" |
| 5 – Optimised | Self-improving, predictive, excellent | "Continuously improved…", "Proactively…", "Feedback loops…", "Industry-leading…" |

### Calibration checklist

Before finalising your options, check:

- [ ] Could a senior practitioner easily distinguish between Level 3 and Level 4 in your organisation's context?
- [ ] Is Level 5 genuinely aspirational — not just "Level 4 with better tooling"?
- [ ] Is Level 1 clearly the worst realistic state — not a hypothetical "no data management at all"?
- [ ] Do adjacent levels differ on **what is done**, not just on **how well it is done**?
- [ ] Is each option answerable in under 10 seconds of reflection (not requiring research)?

---

## Step 6 — Decide whether to allow "I don't know"

Set `allow_unknown: true` if:

- The question concerns infrastructure specifics that a respondent above the practitioner level might genuinely not know (e.g. specific encryption standards, monitoring tooling version)
- The question could legitimately be "not applicable" for certain organisation types

Set `allow_unknown: false` (or omit) if:

- The question is about organisational practices that a senior practitioner should know whether their organisation does or doesn't
- "I don't know" would most likely indicate Level 1 maturity rather than genuine ignorance

---

## Step 7 — Add the question to `questions.json`

The full question schema:

```json
{
  "id": "gov_006",
  "dimension": "governance",
  "question": "How are data ownership responsibilities assigned and enforced across your organisation?",
  "help_text": "Consider whether ownership is defined per dataset, per domain, or at a higher level, and whether it is documented and actively maintained.",
  "weight": 1,
  "options": [
    {
      "level": 1,
      "label": "Data ownership is not defined. No one is clearly accountable for any dataset."
    },
    {
      "level": 2,
      "label": "Some datasets have informal owners, typically the team that created them, but this is undocumented and inconsistently applied."
    },
    {
      "level": 3,
      "label": "Data ownership is defined per domain or dataset, documented in a central catalogue, and communicated to stakeholders."
    },
    {
      "level": 4,
      "label": "Data ownership is formally assigned, regularly reviewed, and owners are accountable for quality and access decisions with supporting metrics."
    },
    {
      "level": 5,
      "label": "Ownership is embedded in our operating model. Owners proactively improve data quality, lineage, and discoverability, and their performance is measured against data health KPIs."
    }
  ],
  "allow_unknown": false
}
```

Add the new object to the `questions` array. Maintain the existing ordering: all questions for a dimension together, in ID order.

---

## Step 8 — Test your question locally

1. Start a local server: `python3 -m http.server 8080`
2. Open `http://localhost:8080`
3. Work through the assessment to the dimension containing your new question
4. Verify:
   - The question text renders correctly
   - The help text appears below the question
   - All five options display without layout issues on a narrow viewport
   - If `allow_unknown: true`, the "I don't know" option appears
   - Selecting an option and navigating away then back restores the selection

---

## Step 9 — Open a pull request

Use the pull request template. In the PR description, include:

- The dimension your question covers
- What aspect of maturity it measures that isn't already covered
- Any calibration notes (e.g. "Level 3 and 4 are deliberately close because the key differentiator is measurement vs. documentation")

A maintainer will review the five-level ladder against the calibration checklist above before merging.

---

## Frequently asked questions

**Can I add more than five options?**
No. The DAMA-DMBOK model has five levels and the scoring model depends on exactly five numeric answers (1–5). The "I don't know" option is a sixth option that carries no score.

**Can I add a sixth question to a dimension?**
Yes. There is no hard limit of five questions per dimension; five is the current default. Additional questions will automatically be included in the dimension score calculation.

**Can I change an existing question?**
Substantive changes to question wording or options will change assessment scores for all future users, making pre-change and post-change reports incompatible. Discuss the proposed change in an issue first. The maintainers may require a version bump.

**Can I change question weights?**
The `weight` field exists in the schema but is currently ignored in scoring (all questions are weighted equally within a dimension). Support for per-question weighting is planned for a future version.
