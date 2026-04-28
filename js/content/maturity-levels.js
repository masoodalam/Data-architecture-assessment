// Auto-generated from content/maturity-levels.json. Do not edit directly.
export default {
  "levels": [
    {
      "level": 1,
      "label": "Initial",
      "colour": "#DC2626",
      "summary": "Ad hoc, reactive, undocumented, person-dependent"
    },
    {
      "level": 2,
      "label": "Repeatable",
      "colour": "#EA580C",
      "summary": "Some processes exist but inconsistent across teams"
    },
    {
      "level": 3,
      "label": "Defined",
      "colour": "#CA8A04",
      "summary": "Documented standards applied consistently in core areas"
    },
    {
      "level": 4,
      "label": "Managed",
      "colour": "#16A34A",
      "summary": "Measured, monitored, with quality metrics and accountability"
    },
    {
      "level": 5,
      "label": "Optimised",
      "colour": "#0891B2",
      "summary": "Continuously improved, automated, predictive"
    }
  ],
  "dimensions": {
    "governance": [
      {
        "level": 1,
        "description": "No named data owners exist for any domain. Decisions about data are made informally by whoever happens to be available. There are no documented data policies. When something goes wrong, accountability is unclear."
      },
      {
        "level": 2,
        "description": "Some teams have informal data stewards but the role is unrecognised and unresourced. A basic data policy document may exist but few people have read it. Governance is driven by compliance deadlines rather than proactive management."
      },
      {
        "level": 3,
        "description": "A data governance framework has been formally adopted. Key domains have named owners with documented responsibilities. Policies covering access, retention, and quality are written and applied consistently in core systems, though gaps remain."
      },
      {
        "level": 4,
        "description": "A governance council meets regularly with real decision-making authority. Domain ownership is tracked and audited. Policy compliance is measured with metrics. Exceptions are logged and resolved. The framework is reviewed on a scheduled cadence."
      },
      {
        "level": 5,
        "description": "Governance is embedded in tooling and workflows — policy enforcement is largely automated. New datasets are automatically assigned to domains. The framework evolves based on usage data and incident retrospectives. Governance costs are visible and optimised."
      }
    ],
    "metadata": [
      {
        "level": 1,
        "description": "No catalogue exists. Discovery depends entirely on asking the right person. Documentation lives in personal spreadsheets or emails, if at all. New starters routinely spend weeks just finding out what data exists."
      },
      {
        "level": 2,
        "description": "Some teams maintain informal wikis or spreadsheets listing their main datasets. This is not consistently updated and goes stale quickly. There is no central discovery point and metadata quality varies widely between teams."
      },
      {
        "level": 3,
        "description": "A metadata catalogue tool is deployed and covers core datasets. Datasets have documented owners, descriptions, and refresh cadences. Discovery is possible without asking a person for most critical data assets. A business glossary is being built."
      },
      {
        "level": 4,
        "description": "The catalogue has broad coverage and is kept current through automated syncing. Data lineage is tracked for key pipelines. Catalogue entry quality is measured and reported. Business users actively use and contribute to the catalogue."
      },
      {
        "level": 5,
        "description": "Metadata is a first-class product. Every pipeline automatically populates catalogue entries and lineage. AI-assisted tagging reduces manual effort. The business glossary links to physical assets. Metadata quality feeds into team performance objectives."
      }
    ],
    "quality": [
      {
        "level": 1,
        "description": "Data quality issues are discovered by end users when something breaks or a report looks wrong. No systematic approach to measuring quality exists. Fixes are reactive and the same issues recur repeatedly."
      },
      {
        "level": 2,
        "description": "Some teams run ad hoc quality checks — typically SQL scripts or manual spot checks before key reports are published. Quality checking is informal, inconsistent, and not automated. Incidents are handled when surfaced but root causes are rarely addressed."
      },
      {
        "level": 3,
        "description": "A data quality framework with defined dimensions (completeness, accuracy, timeliness, consistency) is in place. Automated checks run on the most critical datasets. Quality failures trigger alerts. A defined process exists for triaging and resolving quality incidents."
      },
      {
        "level": 4,
        "description": "Quality metrics are tracked over time and reported to stakeholders. SLAs exist for critical data products. Quality scores are visible in the catalogue. Root cause analysis is performed for recurring issues. Quality debt is managed as a backlog."
      },
      {
        "level": 5,
        "description": "Quality checks are embedded at every pipeline stage. Anomaly detection surfaces issues before downstream consumers notice. Quality is a shared metric across engineering and business teams. Continuous improvement reduces the defect rate quarter-on-quarter."
      }
    ],
    "storage": [
      {
        "level": 1,
        "description": "Data lives in operational databases, spreadsheets, and file shares with no analytical layer. Reporting queries production systems directly, causing performance problems. There is no separation of operational and analytical workloads. Storage costs are opaque."
      },
      {
        "level": 2,
        "description": "Some analytical copies of data exist but are built ad hoc. No consistent storage architecture. Different teams use different tools, making cross-domain analysis hard. Data duplication is common and costly."
      },
      {
        "level": 3,
        "description": "A deliberate storage architecture exists — typically a data warehouse or lakehouse for analytics, separate from operational systems. Storage tiers are defined. Table formats and partitioning strategies are documented and consistently applied in core domains."
      },
      {
        "level": 4,
        "description": "Storage performance and cost are continuously monitored. Tiering policies automatically move data to cheaper storage as it ages. Query performance is measured and optimised. The architecture is reviewed against workload growth regularly."
      },
      {
        "level": 5,
        "description": "Storage is fully elastically scaled. Format and compaction are automated. Cost per query and cost per GB are optimised metrics. The architecture evolves with workload — new storage formats (e.g. open table formats) are actively evaluated and adopted when justified."
      }
    ],
    "pipelines": [
      {
        "level": 1,
        "description": "Data movement is largely manual — export CSVs, upload to a shared drive, import elsewhere. Any automated pipelines are bespoke scripts with no error handling or monitoring. When they break, only the original author knows how to fix them."
      },
      {
        "level": 2,
        "description": "Some scheduled automation exists (cron jobs, basic ETL) but it is fragile and poorly monitored. Pipelines are not version-controlled. Failures are discovered when downstream consumers raise issues. No standard approach exists for building or testing pipelines."
      },
      {
        "level": 3,
        "description": "Pipelines are built using a consistent framework and version-controlled. An orchestrator manages scheduling and dependencies. Failures trigger alerts. Pipelines are documented. New pipelines follow a defined pattern and go through a basic review process."
      },
      {
        "level": 4,
        "description": "Pipeline reliability is measured with SLAs. Freshness, latency, and error rates are tracked as operational metrics. Change data capture reduces load and latency where appropriate. The pipeline estate is documented and regularly audited for redundancy."
      },
      {
        "level": 5,
        "description": "Pipelines are declaratively defined and self-healing where possible. Automated testing covers ingestion, transformation, and loading. Lineage is captured end-to-end. New source onboarding follows a streamlined, repeatable process."
      }
    ],
    "analytics": [
      {
        "level": 1,
        "description": "Reporting is done in Excel or ad hoc SQL queries. Each analyst maintains their own version of key metrics, leading to conflicting numbers in leadership meetings. Dashboard requests are bottlenecked on one or two individuals."
      },
      {
        "level": 2,
        "description": "A BI tool is deployed but used inconsistently. Core reports exist but are often duplicated with slight variations. Business users need technical help for most queries. Different dashboards show different numbers for the same KPI."
      },
      {
        "level": 3,
        "description": "A curated set of trusted reports exists for core metrics with agreed definitions. A semantic or metric layer is in place for key KPIs. Self-service analytics is possible for a defined user group. Reports are version-controlled and change-managed."
      },
      {
        "level": 4,
        "description": "Analytics usage is measured — dashboards are tracked for adoption and freshness. The report estate is actively governed: low-usage dashboards are deprecated. A product mindset applies to analytics delivery. Business users can answer most questions without analyst time."
      },
      {
        "level": 5,
        "description": "The semantic layer provides a consistent, governed metric definition spanning BI, notebooks, and APIs. Self-service adoption is high. Advanced analytics are embedded in operational workflows. Analytics infrastructure is treated as a product with roadmap and SLAs."
      }
    ],
    "security": [
      {
        "level": 1,
        "description": "Access to data is broadly permissive — most people have access to most things. PII (Personally Identifiable Information) is not systematically identified or tagged. No formal data retention policy exists. Compliance is handled reactively when an audit occurs."
      },
      {
        "level": 2,
        "description": "Basic access controls exist (database permissions, folder ACLs) but are not consistently managed or reviewed. PII is partially identified in key systems. A retention policy exists but is not reliably enforced. Compliance activities are periodic rather than continuous."
      },
      {
        "level": 3,
        "description": "A data classification scheme exists (e.g. public, internal, confidential, sensitive personal). PII is catalogued across core systems. Access is granted on a least-privilege basis with a formal request process. Security reviews are part of the project delivery lifecycle."
      },
      {
        "level": 4,
        "description": "Access rights are audited regularly and stale access is revoked automatically. Data masking or anonymisation is applied in non-production environments. Privacy impact assessments are completed for new data processing activities. Security incidents are tracked and trend-reported."
      },
      {
        "level": 5,
        "description": "Fine-grained, attribute-based access control is enforced at column and row level across the analytical estate. PII detection is automated at ingestion. Privacy by design is embedded in the data product development lifecycle. Compliance evidence is automatically generated."
      }
    ],
    "skills": [
      {
        "level": 1,
        "description": "No dedicated data function exists. Data work is done by whoever has time — usually a technically capable person alongside their primary role. Knowledge is concentrated in one or two individuals. No data career path or training programme exists."
      },
      {
        "level": 2,
        "description": "Some analytical roles exist (data analysts, BI developers) but the team is small and reactive — mostly responding to report requests. No data engineering role exists. External consultants are regularly brought in for data projects."
      },
      {
        "level": 3,
        "description": "A data team exists with defined roles covering engineering, analysis, and governance. Responsibilities are documented. A training budget and basic onboarding programme exist. The team operates with a product or service model with a managed backlog."
      },
      {
        "level": 4,
        "description": "The data team has a structured operating model with clear stakeholder interfaces. Skills gaps are assessed and addressed. Engineering and analytical skills coexist. The team runs its own retrospectives. Data literacy is actively promoted across the wider organisation."
      },
      {
        "level": 5,
        "description": "Data capability is embedded across the organisation. Data literacy programmes reach all staff. The data function influences strategy and has senior representation in leadership. The team contributes to open-source tools it depends on. Knowledge sharing is systematic and external-facing."
      }
    ]
  }
};
