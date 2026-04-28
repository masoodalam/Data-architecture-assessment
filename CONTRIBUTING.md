# Contributing to the Data Architecture Maturity Assessment Tool

Thank you for taking the time to contribute. This is an open-source project and improvements from the community are very welcome.

All contributions must follow our [Code of Conduct](CODE_OF_CONDUCT.md).

---

## Ways to contribute

| Type | How |
|------|-----|
| Suggest a question | Open an issue using the **Suggest a question** template |
| Suggest a tool | Open an issue using the **Suggest a tool** template |
| Report a bug | Open an issue using the **Bug report** template |
| Fix a bug or improve docs | Open a pull request (see below) |
| Add a question / tool / recommendation | Edit the relevant JSON file and open a PR |
| Improve narrative text | Edit `content/narrative-snippets.json` |
| Translate | Open an issue first to coordinate |

---

## Development setup

No build toolchain is required.

```bash
git clone https://github.com/masoodalam/Data-architecture-assessment.git
cd Data-architecture-assessment
python3 -m http.server 8080
# open http://localhost:8080
```

The tool uses `fetch()` to load JSON files, so an HTTP server is required. Opening `index.html` directly via `file://` will show an error.

All JavaScript uses ES modules (`import`/`export`). No transpilation, bundling, or `node_modules` are involved.

---

## Editing JSON content

All assessment content lives in `content/`. These files follow strict JSON Schemas in `content/schemas/`. You do not need to run a validator locally — just follow the examples already in the file.

### Adding a question

See [docs/adding-questions.md](docs/adding-questions.md) for the full step-by-step guide, including the five-level option writing guidelines.

### Adding a tool to the catalogue

Open `content/tools-catalogue.json` and add an entry following this structure:

```json
{
  "id": "mytool",
  "name": "My Tool",
  "category": "orchestration",
  "licence": "Apache 2.0",
  "type": "open_source",
  "deployment": ["self_hosted"],
  "good_for": ["small", "medium"],
  "constraints": ["Requires Kubernetes for production deployments"],
  "url": "https://example.com/mytool",
  "one_line": "Lightweight workflow orchestration built for data teams"
}
```

Allowed values:
- `type`: `open_source`, `commercial`, `managed_service`, `source_available`
- `deployment`: `self_hosted`, `managed`, `saas`, `embedded`
- `good_for`: `small`, `medium`, `large`, `enterprise`
- `category`: see existing categories in the file

### Adding a recommendation

Open `content/recommendations.json` and add an entry following this structure:

```json
{
  "id": "unique_rec_id",
  "title": "Concise action title",
  "dimension": "governance",
  "trigger": { "maxLevel": 2 },
  "priority": "foundational",
  "effort": "M",
  "horizon": "next_6_months",
  "primary_tool": "tool_id",
  "alternative_tools": ["other_tool_id"],
  "rationale": "One paragraph explaining why this matters.",
  "first_steps": [
    "First concrete action",
    "Second concrete action",
    "Third concrete action"
  ]
}
```

Allowed values:
- `priority`: `quick_win`, `foundational`, `strategic`
- `effort`: `S` (days), `M` (weeks), `L` (months)
- `horizon`: `do_now`, `next_6_months`, `strategic`
- `dimension`: one of the 8 dimension IDs, or `cross_cutting`

---

## JSON Schema references

Schemas are in `content/schemas/`. Each content file has a matching schema:

| Content file | Schema |
|-------------|--------|
| `questions.json` | `schemas/questions.schema.json` |
| `recommendations.json` | `schemas/recommendations.schema.json` |
| `tools-catalogue.json` | `schemas/tools-catalogue.schema.json` |
| `narrative-snippets.json` | `schemas/narrative-snippets.schema.json` |
| `dimensions.json` | `schemas/dimensions.schema.json` |
| `context-questions.json` | `schemas/context-questions.schema.json` |
| `maturity-levels.json` | `schemas/maturity-levels.schema.json` |

---

## Style guide for questions

Write every question so it describes an **observable, verifiable state**, not an aspiration.

**Good:** "Data quality rules are defined, documented, and enforced automatically in our pipelines."

**Avoid:** "We care about data quality."

Each level option should represent a **meaningfully different maturity state**, not just a slightly better version of the one below it. Level 5 should describe something genuinely excellent, not merely "Level 4 with better documentation."

Use plain English. Avoid acronyms without expansion. Avoid vendor-specific terminology.

---

## Style guide for recommendations

- Write the `title` as an imperative action: "Establish a data ownership policy", not "Data ownership policy".
- Keep `rationale` to one focused paragraph. Explain the risk of *not* acting, not just the benefit of acting.
- `first_steps` should be concrete enough that a practitioner can start without further Googling. Three steps is the target; four is the maximum.
- Prefer open-source-first tooling in `primary_tool`. Commercial tools belong in `alternative_tools` unless there is a compelling reason.

---

## PR review criteria

Reviewers will check:

- [ ] JSON is valid (parseable, no trailing commas)
- [ ] All required fields are present
- [ ] No fields violate the schema enum constraints
- [ ] Question options genuinely represent five distinct maturity levels
- [ ] Language is plain, jargon-free, and accessible to a non-specialist
- [ ] Rationale is specific to this recommendation, not generic
- [ ] No vendor bias — open-source tools are preferred; if a commercial tool is included, the reason is stated
- [ ] No references to specific organisations or proprietary internal tools

---

## Code contributions

For JavaScript changes:

- No build step — keep the code runnable without transpilation
- ES modules only — no CommonJS `require()`
- No new dependencies — all libraries must be loadable via CDN and declared in `index.html`
- Follow the existing module structure: `state.js`, `scoring.js`, `recommendations.js`, `narrative.js`, `chart.js`, `report.js`, `app.js`
- Accessibility: all interactive elements must be keyboard-navigable and have appropriate ARIA labels. Test with a screen reader if possible.

---

## Commit message format

```
Phase N: short description of what changed

Optional longer description if the change is non-obvious.
```

For content-only changes:
```
content: add 3 governance questions (gov_006–gov_008)
content: add Apache Iceberg to tools catalogue
```

---

## Licence

By submitting a pull request you agree that your contribution will be licensed under the [Apache 2.0 licence](LICENSE).
