# Data Architecture Maturity Assessment Tool

<p align="center">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40" width="90" height="60">
    <rect width="60" height="40" fill="#0065BD" rx="2"/>
    <line x1="0" y1="0" x2="60" y2="40" stroke="white" stroke-width="8"/>
    <line x1="60" y1="0" x2="0" y2="40" stroke="white" stroke-width="8"/>
  </svg>
</p>

> A **free, open-source, browser-based** tool for assessing your organisation's data architecture maturity against the DAMA-DMBOK framework. No data leaves your browser.

[![Apache 2.0](https://img.shields.io/badge/licence-Apache%202.0-blue.svg)](LICENSE)
[![No tracking](https://img.shields.io/badge/tracking-none-green.svg)](#privacy)
[![Client-side only](https://img.shields.io/badge/backend-none-lightgrey.svg)](#how-it-works)

---

## Try it now

**[→ Launch the assessment](https://masoodalam.github.io/Data-architecture-assessment/)**

The tool works entirely in your browser. No login, no account, no data collection.

---

## What it assesses

The tool scores your organisation across **8 DAMA-DMBOK dimensions**, each on a 1–5 maturity scale:

| Dimension | What it covers |
|-----------|----------------|
| **Governance** | Policies, ownership, stewardship, data cataloguing |
| **Metadata** | Lineage, business glossary, schema management |
| **Quality** | Profiling, validation, SLAs, ownership of quality |
| **Storage** | Platform choices, scalability, cost management, lake/warehouse maturity |
| **Pipelines** | Orchestration, observability, CI/CD, data contracts |
| **Analytics** | Self-service, semantic layer, ML/AI readiness |
| **Security** | Classification, access control, encryption, audit logging |
| **Skills** | Team structure, training, hiring, tooling literacy |

---

## How it works

1. **Context questions (6)** — captures your organisation's size, sector, cloud posture, and budget stance. These tailor your recommendations; they do not affect your maturity scores.
2. **Maturity questions (40)** — five questions per dimension, each offering five levels (Initial → Optimised) plus an optional "I don't know / not applicable" answer.
3. **Scored report** — weighted average per dimension and an overall score. The report includes a radar chart, dimension summaries, and a prioritised recommendation backlog.
4. **Export** — download as Markdown or print/save as PDF.

---

## Privacy

- **All computation happens in your browser.** No answers, scores, or report content are ever transmitted to any server.
- The only storage used is **`localStorage`** — local to your browser. You can clear it at any time using the "Clear my answers" button.
- There are **no cookies, no analytics, no tracking pixels** of any kind.
- The tool loads Tailwind CSS and Chart.js from public CDNs on first load. After that, the cached files mean the tool works offline.

---

## Methodology

See [docs/methodology.md](docs/methodology.md) for the full scoring methodology, DAMA-DMBOK alignment, dimension rationale, and how "I don't know" answers are handled.

---

## Run locally

The tool uses `fetch()` to load JSON content files, which requires an HTTP server. Opening `index.html` directly via `file://` will not work.

**Zero-install option — Python (macOS / Linux):**

```bash
git clone https://github.com/masoodalam/Data-architecture-assessment.git
cd Data-architecture-assessment
python3 -m http.server 8080
# then open http://localhost:8080 in your browser
```

**Node.js option:**

```bash
npx serve .
# then open the printed URL
```

**VS Code:** Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension and click "Go Live" in the status bar.

---

## Deploy your own copy

### GitHub Pages (recommended)

1. Fork this repository.
2. Go to **Settings → Pages**.
3. Set Source to **Deploy from a branch** → `main` → `/ (root)`.
4. Your fork will be live at `https://<your-username>.github.io/Data-architecture-assessment/`.

No build step is required. The site is pure HTML/CSS/JS.

### Any static host

Upload the entire repository to any static host (Netlify, Vercel, Cloudflare Pages, S3 + CloudFront, etc.). There are no server-side requirements.

---

## Customise for your context

All assessment content — questions, recommendations, tools, narrative text — lives in the `content/` directory as plain JSON files. Non-developers can contribute by editing JSON in the GitHub UI and opening a pull request.

| File | What to edit |
|------|-------------|
| `content/questions.json` | The 40 assessment questions |
| `content/recommendations.json` | The recommendation backlog |
| `content/tools-catalogue.json` | The open-source tooling catalogue |
| `content/narrative-snippets.json` | Executive summary and dimension narrative text |
| `content/context-questions.json` | The 6 context questions and their options |

See [docs/adding-questions.md](docs/adding-questions.md) for a step-by-step contributor guide.

---

## Contributing

Contributions are very welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for how to:

- Suggest a new question
- Add a tool to the catalogue
- Write a new recommendation
- Improve the narrative text
- Report a bug or accessibility issue

---

## Roadmap

### v1 (current)
- 40 questions across 8 dimensions
- DAMA-DMBOK 5-level scoring
- Radar chart + dimension detail
- Prioritised recommendation backlog with open-source tool suggestions
- Markdown + PDF export
- WCAG 2.2 AA accessibility
- localStorage persistence

### Planned for v1.1
- JSON Schema validation in CI (GitHub Actions)
- Per-dimension question weighting (currently uniform within each dimension)
- Comparison mode: load a previous export and overlay scores
- Additional sector-specific question sets (contributed by the community)

---

## Limitations

- **Self-assessed:** Scores reflect self-reported answers, not an independent audit. Organisations can inadvertently over- or under-score themselves.
- **Uniform question weighting:** Within each dimension, all five questions carry equal weight. Some aspects of maturity may deserve higher weight; this is a known simplification.
- **Point-in-time snapshot:** The report reflects your organisation's state at the time of completion. Data architecture matures (or regresses) continuously.
- **No LLM:** Narrative text is drawn from pre-written templates. It is tailored by score and context but not generated dynamically. See [DECISIONS.md](DECISIONS.md) for the rationale.
- **English only:** The tool is currently English-only. Translation contributions are welcome.

---

## Licence

Apache 2.0 — see [LICENSE](LICENSE).

You are free to use, copy, modify, and distribute this tool for any purpose, including commercially, provided you retain the licence notice.

---

## Acknowledgements

- **DAMA International** — the DAMA-DMBOK framework underpins the maturity model used here.
- **Tailwind CSS** — utility-first CSS framework loaded via CDN.
- **Chart.js** — radar chart visualisation.
- All contributors who have suggested questions, tools, and improvements via pull requests.
