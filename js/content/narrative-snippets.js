// Auto-generated from content/narrative-snippets.json. Do not edit directly.
export default {
  "_comment": "Templated narrative for the generated report. Structured by section (executive_summary, dimension_summaries, context_observations, closing_remarks). Multiple variants per band allow variety across different users with similar scores. See content/schemas/narrative-snippets.schema.json for the full schema.",
  "executive_summary": {
    "1-2": [
      "Your organisation is at the start of its data architecture journey. The scores across most dimensions reflect a common situation for organisations that have grown their data capability organically — doing what was needed to get by, without yet having the capacity or mandate to build deliberate foundations. This is not a criticism: most organisations at this stage are here because their energy has rightly been elsewhere. The path forward is clear, and the good news is that moving from level 1 to level 3 in most dimensions is achievable without a major technology investment.",
      "The assessment shows an estate that is largely informal and reactive across most areas. Data is used, and value is being extracted — but the way it is done depends heavily on specific individuals and is fragile to change. The priority at this stage is not to fix everything at once, but to identify the two or three areas where investment will compound most quickly. Governance and pipeline reliability are usually the right starting points, because they unblock everything else.",
      "These results reflect the position of many honest, well-run organisations that simply have not yet had the space to focus on data infrastructure. The gaps are significant but not unusual, and the trajectory matters more than the starting point. The recommendations in this report are prioritised for exactly this stage — foundational investments that create durable value rather than sophisticated capabilities that require foundations you do not yet have."
    ],
    "2-3": [
      "Your organisation has established meaningful foundations in several dimensions but progress is uneven. Some areas are approaching good practice while others remain largely informal. This pattern is typical of organisations that have invested in specific initiatives — a data warehouse here, a BI tool there — without yet having a coherent strategy tying the dimensions together. The opportunity now is to fill the gaps between your strongest areas and lift the weaker ones to a consistent baseline.",
      "The results show an organisation in the process of building its data capability deliberately, with some clear wins to acknowledge and some significant gaps to address. At this stage, the risk is investing in advanced capabilities in strong areas while neglecting weak foundations elsewhere — a data quality framework without governance, or a self-service BI tool without trusted underlying data. The recommendations focus on achieving a more consistent baseline before pushing further ahead in any single dimension.",
      "These scores reflect an organisation that understands the value of data and has begun to invest in it seriously. The foundations are present in several key areas. What the assessment reveals is that the dependencies between dimensions — governance enabling quality, quality enabling trust, trust enabling self-service adoption — mean that uneven maturity creates blockers that limit the value of the strongest areas. Addressing those blockages is the priority."
    ],
    "3-4": [
      "Your organisation has achieved a solid baseline across most dimensions and has moved well beyond purely reactive data management. The score reflects real investment that has produced real outcomes. At this level, the challenge shifts from 'building the basics' to 'making the basics reliable and scalable'. The recommendations in this report focus on hardening what works, closing the remaining gaps, and beginning to move the strongest areas towards genuinely advanced practice.",
      "This is a strong result that reflects sustained, deliberate investment in data capability. Most dimensions are in a state where the data team can work effectively and deliver value reliably. The gaps that remain are typically in the harder, longer-term challenges: automation of governance, end-to-end lineage, organisation-wide data literacy. These are meaningful improvements that require strategic commitment rather than tactical effort, and they are the right problems to be focused on at this maturity level.",
      "The assessment reflects an organisation that has moved from building data capability to operating it as a managed service. That is a significant achievement. The next frontier — visible in the distance but not yet reached — is moving from managed to optimised: where quality is continuous rather than checked, governance is embedded rather than enforced, and the data team's primary output is enabling others rather than producing outputs themselves."
    ],
    "4-5": [
      "Your organisation is operating at the advanced end of the data maturity spectrum. The scores reflect deep investment across multiple dimensions and a data function that is genuinely enabling the organisation's work rather than merely supporting it. At this level, the useful question is not 'what are we missing?' but 'where can we push the boundary?' — and the answer is usually automation, measurement of measurement, and broader organisational capability rather than additional tooling.",
      "These results place your organisation in the top tier for data architecture maturity. The foundations are solid, the practices are measured, and the data team is operating with real strategic influence. The recommendations here are not about fixing gaps — the gaps are small — but about optimising what you have, sharing what you have learned, and ensuring that the maturity you have built in the data function is spreading to the wider organisation through literacy and self-service capability.",
      "A score at this level is rare and reflects years of consistent investment and cultural commitment to data-informed working. The challenge at this stage is often maintenance and momentum: sustaining a high standard as the organisation grows and changes, keeping governance current as the data estate evolves, and avoiding the complacency that high maturity scores can sometimes breed. The most valuable investment now is often external — contributing to communities, publishing your approaches, and ensuring that the knowledge you have built is not fragile to leadership change."
    ]
  },
  "dimension_summaries": {
    "governance": {
      "1": [
        "Data governance in your organisation is currently ad hoc. Decisions about data are made informally and accountability is unclear — when something goes wrong, it can be genuinely difficult to know who should fix it. This is not unusual for organisations at this stage, and it does not reflect a lack of care — it reflects a lack of structure. The good news is that even basic governance improvements have a disproportionate impact on everything else.",
        "There is currently little formal structure around how data decisions are made or who is accountable for data assets. Data ownership is effectively whoever happens to have built something or knows about it, which creates fragility and inconsistency. Governance at this level is typically the first area to prioritise because its absence is a ceiling on progress in quality, security, and analytics.",
        "Your governance score reflects a starting point that is common for growing organisations that have focused their energy on delivering outcomes rather than building structure around data. The priority now is to make existing accountability explicit rather than adding new complexity — naming domain owners and writing down what the key rules are is enough to begin."
      ],
      "2": [
        "Some governance structures exist in your organisation — policies have been written, and some people have informal stewardship roles — but these are not consistently applied or recognised. This is a transitional stage: better than nothing, but fragile. A compliance deadline or audit may have prompted the initial documentation, but the day-to-day practice of governance has not yet taken hold.",
        "Your governance dimension shows the pattern of an organisation that has taken some first steps — perhaps written a data policy or assigned informal stewards — but has not yet built the habits and structures needed to make governance routine. The risk at this stage is that the documentation drifts from reality, leaving you with governance that exists on paper but not in practice.",
        "Governance is present but inconsistent. The foundations are there — some policies, some informal ownership — but they need to be formalised and made visible to be effective. The next step is converting informal practice into documented roles with real accountability, and ensuring governance decisions are made by a group rather than individuals."
      ],
      "3": [
        "Your organisation has established a functioning governance framework. Data policies exist, are accessible, and are applied consistently in core areas. Domain ownership is documented for your most important data assets. A governance forum or committee meets with real decision-making capability. This is a meaningful achievement and reflects deliberate investment in doing data management properly.",
        "Governance at level 3 means you have the essential structures in place and they are working. The framework exists, people know where to find policies, and ownership is assigned for the data that matters most. What distinguishes level 3 from level 4 is consistency across the full estate and measurement — you are applying governance well in core areas but there are gaps, and you are not yet systematically measuring compliance.",
        "The governance practices evident in your score reflect a team and organisation that takes data seriously. Policies are documented and followed, ownership is clear for critical domains, and there is a mechanism for resolving data disputes. The next challenge is broadening coverage to the full estate, reducing the manual effort of compliance monitoring, and building governance into tooling rather than relying on process."
      ],
      "4": [
        "Your organisation is operating a mature governance framework. Data ownership is broadly assigned and audited, policies are reviewed on schedule, and compliance is measured. The governance council has real authority and is producing real decisions. This is the level at which governance begins to compound — the effort invested starts to reduce rather than increase as automation and culture take hold.",
        "Governance at level 4 reflects an organisation that has moved beyond establishing governance to managing it continuously. Metrics exist, non-compliance has a defined resolution path, and the governance body has a visible record of decisions made. The remaining work is primarily in automation — reducing the manual monitoring burden and embedding policy enforcement into tooling rather than process.",
        "The governance score reflects a well-run data function that takes accountability seriously. The framework is comprehensive, measured, and reviewed. At this level, governance is no longer the main bottleneck — the focus shifts to making it more efficient through automation, and to ensuring it keeps pace with the data estate as it grows and changes."
      ],
      "5": [
        "Your governance dimension score reflects a genuinely advanced capability. Governance is not just a framework — it is embedded in tooling, workflows, and culture. Policy compliance is monitored continuously rather than audited periodically. New datasets are automatically assigned to domains. The governance function is optimising rather than building. This is a rare level of maturity.",
        "Operating at level 5 in governance means governance is largely self-sustaining. Automation handles the routine enforcement, the framework evolves based on data rather than intuition, and the governance body is focused on strategy rather than administration. The discipline you have built in this dimension is a genuine competitive and operational advantage.",
        "Governance at this level is a model worth sharing. The practices your organisation has built — automated compliance monitoring, lifecycle-managed policy, data-product-oriented ownership — are what most organisations are working towards. At this point the useful question is whether governance is keeping pace with organisational change and whether the model scales to any new domains being added."
      ]
    },
    "metadata": {
      "1": [
        "Data discovery in your organisation currently depends on asking the right person. There is no catalogue, no consistent documentation, and no shared starting point for finding out what data exists. This creates a real cost — new starters spend weeks just learning the landscape, and experienced people spend significant time answering 'where does this data come from?' questions instead of using data.",
        "Metadata management is at the starting point. Data assets are undocumented or documented only in personal notes and emails, and there is no reliable way to discover what data exists without tribal knowledge. This is a high-cost situation that gets worse as teams grow and rotate. Addressing it does not require sophisticated tooling — a well-maintained spreadsheet is a meaningful improvement at this stage.",
        "Your metadata score reflects an organisation where the data landscape is opaque to anyone who was not involved in building it. The information about data — what it means, who owns it, where it came from — lives in individuals' heads rather than in shared, accessible documentation. This is the starting point for most organisations and the first thing to invest in."
      ],
      "2": [
        "Some teams have begun documenting their data assets — wikis, spreadsheets, README files — but there is no central point of discovery and documentation quality varies significantly between teams. The result is a patchwork of information that is better than nothing but does not solve the core problem: someone new to the organisation still cannot reliably find data without asking for help.",
        "Metadata management is improving but inconsistent. Some data assets are documented and some teams maintain local inventories, but there is no shared catalogue and what documentation exists goes stale quickly. The effort invested in documentation is losing the race against the rate of change — a structured approach and some tooling would make that effort stick.",
        "Your metadata position reflects the halfway point between purely tribal knowledge and a functional discovery capability. Some investment has been made — documentation exists for some datasets — but it has not yet been centralised, and the coverage and quality are uneven enough that it is not reliably useful. The priority is consolidating what exists into a single accessible place."
      ],
      "3": [
        "Your organisation has deployed a metadata catalogue and it covers your core datasets. Data discovery is possible for most critical data assets without having to ask a colleague. A business glossary is in progress. This is a meaningful improvement over the starting point and is already paying dividends in reduced time spent on data discovery and more consistent use of agreed definitions.",
        "The metadata dimension shows an organisation that has invested in making data findable. A catalogue exists, core datasets are documented, and the business glossary is helping align definitions across teams. The gaps at level 3 are typically coverage — the catalogue covers important data well but has incomplete coverage of the full estate — and lineage, which is documented for some pipelines but not systematically.",
        "At level 3, your catalogue is a working tool that people actually use. That is a significant achievement — many organisations deploy catalogues that nobody uses. The next challenge is keeping coverage current as the estate grows, building lineage for the pipelines that feed your most critical reporting, and extending the business glossary to cover the full vocabulary of your organisation's data."
      ],
      "4": [
        "Metadata management at level 4 means the catalogue is a genuine operational tool rather than a documentation project. Coverage is broad, content is kept current through automated syncing, and lineage is tracked for key pipelines. Business users are contributing as well as consuming. This is the level at which the catalogue starts to reduce the data team's support burden — people can find answers themselves.",
        "Your metadata score reflects a catalogue that has reached critical mass — it covers enough of the estate and is maintained well enough that it is the reliable first stop for data discovery. Lineage is tracked and is being used for impact analysis and incident response. The glossary is mature enough to prevent most definition disputes. The next step is making the catalogue self-updating and extending lineage to column level.",
        "The investment in metadata management is clearly paying off at this level. Catalogue coverage is broad, content is trustworthy, and business users are engaged rather than passive. The remaining opportunity is in automation — reducing the manual effort of keeping metadata current — and in making lineage more granular and complete."
      ],
      "5": [
        "Your metadata capability is at the frontier of what organisations achieve. Every pipeline automatically populates catalogue entries and lineage as a side-effect of publishing. The business glossary links to physical assets. Metadata quality is a team metric. This is metadata management as a first-class engineering discipline — and it is enabling analytics and governance capabilities that would be impossible without it.",
        "Operating at level 5 in metadata means the catalogue is live, comprehensive, and self-maintaining. Nobody manually updates documentation because the tooling does it. Lineage is end-to-end and column-level. Business users curate their own domains. The catalogue is not a project that needs maintenance — it is an output of the engineering process.",
        "Metadata at this level is a platform capability, not a data management task. The investment you have made in making metadata a first-class concern has compounded into a significant operational advantage: faster incident response through lineage, reliable discovery that reduces time-to-insight for new projects, and a business glossary that prevents metric disputes before they start."
      ]
    },
    "quality": {
      "1": [
        "Data quality in your organisation is currently discovered by end users — when a dashboard looks wrong, when a report produces a number that raises eyebrows, or when a downstream system processes incorrect data and something breaks. This is a reactive and expensive way to manage quality, and the same issues tend to recur because root causes are not addressed. Most organisations find this painful to acknowledge, but it is where most start.",
        "Quality management is at the starting point: no systematic checks, no formal process, and quality that depends on individual vigilance rather than automated safeguards. The risk is not just operational — repeated quality failures erode trust in data, and once business users stop trusting data, it is very difficult to rebuild that trust. Investment in even basic quality checks delivers an outsized return at this stage.",
        "Your quality score reflects an organisation where data problems surface only when they cause visible pain. This is normal for organisations that have not yet had the capacity to invest in quality infrastructure. The good news is that basic quality improvements — checking for nulls, verifying row counts, alerting on anomalies — are inexpensive to implement and immediately reduce the frequency of quality incidents."
      ],
      "2": [
        "Some quality checking is happening — spot checks before key reports, occasional SQL queries to verify data — but it is manual, inconsistent, and depends on specific individuals. Quality is managed at the end of the process rather than the beginning, which means problems that could have been caught in the pipeline reach consumers before they are detected.",
        "Your quality dimension shows the beginning of intentional quality management. Manual checks exist for some datasets and some processes, but coverage is patchy and automation is minimal. The bottleneck is that quality checking requires analyst time that is always in competition with producing actual insights. Automation is the answer — moving checks into the pipeline rather than applying them after the fact.",
        "Quality management at level 2 means you are aware of the problem and have begun to address it, but the approach is not yet systematic. Ad hoc checks catch some issues, but others pass through undetected. The investment needed is not large — dbt tests or Soda Core checks can be added to existing pipelines with relatively modest effort, and the impact on trust is immediate."
      ],
      "3": [
        "Your organisation has established a data quality framework with defined dimensions and automated checks on its most critical datasets. Quality failures trigger alerts and there is a process for responding to them. This is a meaningful level of quality management — most quality problems are now caught before consumers see them, and when they do surface, there is a clear path to resolution.",
        "Quality at level 3 means the key datasets that the organisation depends on are monitored automatically. The checks run on every pipeline execution, failures are alerted, and incidents have a structured response process. The gaps are in coverage — checks exist for critical data but not for the full estate — and in reporting, where quality metrics are known but not routinely shared with business stakeholders.",
        "The quality framework evident in your score reflects a data team that has moved from reactive firefighting to managed monitoring. Automated checks are running, thresholds are defined, and the incident process is working. The next steps are broadening coverage to the full data estate, beginning to track quality metrics over time, and reporting them to stakeholders as evidence that the investment is working."
      ],
      "4": [
        "Quality at level 4 is managed with rigor. SLAs exist for critical data products, quality metrics are tracked and reported, and root cause analysis is performed for recurring incidents. Quality debt is visible and prioritised. Business stakeholders receive regular quality reporting. This is the level at which quality management stops being seen as a cost and starts being seen as a feature.",
        "Your quality score reflects a team that has built quality into the delivery process rather than bolted it on afterwards. Tests exist across most pipelines, incidents are logged and trended, and the failure rate is demonstrably improving. SLAs create accountability and shared expectations with data consumers. The remaining opportunity is in anomaly detection — catching the quality issues that no rule was written to detect.",
        "Operating at level 4 in data quality means your data products have defined and measured reliability. Quality is a first-class concern in your engineering process, your consumers know what to expect, and when something goes wrong there is a clear path to resolution. The frontier from here is automated observability — moving from checking what you know to look for, to detecting what you did not know to expect."
      ],
      "5": [
        "Your data quality capability is at the advanced end of the spectrum. Quality checks are embedded at every pipeline stage, anomaly detection surfaces issues proactively, and the defect rate is continuously improving. Quality is a shared metric owned by both engineering and business teams. This represents data quality as a genuine engineering discipline — not a quality gate, but a continuous feedback loop.",
        "Level 5 quality management means quality is continuous rather than periodic, automated rather than manual, and predictive rather than reactive. The investment in building this capability is now returning in the form of reduced incident burden, high consumer trust, and a data estate that can be expanded with confidence because quality is structural rather than situational.",
        "Quality at this level is a platform capability. The checks run, the anomalies are detected, the incidents are handled, and the process improves itself. The most meaningful thing your organisation can do at this point is ensure quality remains a shared priority as the team grows — and consider contributing your quality patterns back to the open-source tools you depend on."
      ]
    },
    "storage": {
      "1": [
        "Your storage architecture is currently unplanned — data lives where it landed, typically in the systems that originally collected it, with reporting running directly against production databases. This creates a compounding set of problems: analytical queries slow down operations, operational load makes analytics unreliable, and storage costs are opaque because nobody has separated what is happening. The separation of analytical and operational workloads is the single highest-leverage architectural change at this stage.",
        "Storage at level 1 means there is no deliberate architecture — data is in production systems, spreadsheets, and file shares, accessed by whoever needs it however they can reach it. This is unsustainable as data volumes and user numbers grow, and the cost of not changing it rises every year. The good news is that even a modest investment in a separate analytical layer delivers an immediate and visible improvement.",
        "Your storage score reflects a situation where the architecture is defined by what was convenient rather than what was appropriate. Production databases serve both operational and analytical queries, storage costs are unknown, and there is no common model for how data is organised. Addressing this does not require a wholesale replatforming — a read replica or a modest warehouse is enough to begin separating concerns."
      ],
      "2": [
        "Some analytical infrastructure exists — perhaps a data warehouse that was set up for a specific project, or copies of key datasets exported to a shared drive — but it is not coherent. Different teams have built their own analytical solutions and they do not connect. The architecture, such as it is, is a patchwork rather than a plan. The opportunity is to rationalise what exists and build towards a deliberate model.",
        "Your storage architecture shows the pattern of organic growth: a warehouse here, some flat files there, a few analysts working directly off production for the data that has not been moved yet. This is better than nothing but creates duplication, inconsistency, and unnecessary operational overhead. The next step is to decide what the target architecture should be and migrate towards it, rather than continuing to add to the patchwork.",
        "Storage at level 2 means some separation exists but it is inconsistent. Some data has moved to a proper analytical store, but coverage is incomplete and different teams have different approaches. The work now is to establish the standard architectural pattern and apply it consistently — defining which store is for what, how data gets there, and what the rules are."
      ],
      "3": [
        "Your storage architecture is deliberate and documented. A dedicated analytical store is in use for most reporting, separate from production systems. Table formats and partitioning strategies are defined and applied. Storage tiers are understood. This is a solid foundation — analytical performance is predictable, operational systems are not burdened by analytical queries, and the architecture can be explained to a new joiner from the documentation.",
        "At level 3, the analytical estate is organised and intentional. A clear separation exists between operational and analytical workloads, the architecture is documented, and the main design decisions have been made consistently. The gaps are typically in the edges — some reporting still hits production, cost visibility is incomplete, or query performance tuning is reactive rather than proactive.",
        "Your storage score reflects a team that has made good architectural decisions and applied them consistently to the core of the estate. The analytical layer is working and the architecture is documented. The next step is operational maturity: monitoring query performance and costs, applying tiering policies, and beginning to think about whether the current architecture will scale to the next order of magnitude of data volume."
      ],
      "4": [
        "Storage management at level 4 is active and measured. Performance and cost are monitored. Tiering policies move ageing data automatically. Query performance is tracked and optimised. The architecture is reviewed against workload growth on a regular cadence. This is storage management as an ongoing engineering discipline rather than a set of one-time decisions.",
        "Your storage dimension reflects a team that is managing its infrastructure as a product — with metrics, reviews, and a continuous improvement mindset. Storage costs are visible and allocated. Performance is tracked and optimised. The architecture is reviewed against the needs of the workloads it serves. The remaining opportunity is usually in advanced tooling: open table formats for better format flexibility, or automated compaction and tiering.",
        "At level 4, your storage architecture is a managed platform rather than a static design. The operational rhythm of reviewing costs, tuning performance, and evolving the architecture as requirements change is established. The next frontier is greater automation — lifecycle policies that manage themselves, format choices that are driven by workload analysis, and cost attribution that guides team behaviour."
      ],
      "5": [
        "Your storage architecture operates at the frontier of modern practice. Scaling is elastic, format management and compaction are automated, cost per query and cost per gigabyte are optimised metrics, and the architecture evolves continuously based on workload analysis. Open table formats are in use where appropriate, delivering format portability and performance without sacrificing governance.",
        "Level 5 storage management means the infrastructure manages itself at the routine level, and engineering effort goes into optimisation and evaluation rather than maintenance. The estate is instrumented, the costs are allocated and managed, and the architecture is always being assessed against emerging patterns. This is rare and reflects a genuine engineering maturity.",
        "Your storage score reflects an organisation that has built data infrastructure as a platform discipline. The architecture is documented, measured, automated, and continuously improved. The most valuable work at this level is sharing what you have learned — publishing your architecture decisions, contributing to the open tools you use, and helping the community solve the problems you have already solved."
      ]
    },
    "pipelines": {
      "1": [
        "Data movement in your organisation is largely manual. Exports, uploads, hand-cranked scripts — these are the mechanisms by which data gets where it needs to go. When they break, only the person who built them knows how to fix them, and breaks are discovered by consumers rather than monitoring. This is not sustainable as data volumes and the number of consumers grow, and the cost of each failure compounds.",
        "Pipelines at level 1 are fragile and person-dependent. Automated jobs exist but are bespoke, undocumented, and unmonitored. The data estate is as reliable as the individuals maintaining it — which means reliability is low and unpredictable. Any investment in pipeline reliability and automation will deliver immediate and visible returns.",
        "Your pipeline score reflects an estate where data movement has grown organically to meet needs as they arose, without an engineering discipline to make it reliable and maintainable. Cron jobs, manual scripts, and one-off exports are the mechanisms. They work until they do not, and when they do not, the failure is invisible until a consumer raises an issue."
      ],
      "2": [
        "Some automation exists — scheduled jobs, basic ETL scripts — but it is inconsistent, poorly monitored, and fragile. Pipeline failures are discovered late and the response is ad hoc. Version control may exist for some pipelines but not others. This is the stage at which the accumulated technical debt of organic growth becomes visible as a recurring operational cost.",
        "Pipeline management at level 2 means some automation is in place but it is not reliable. Scheduled jobs exist, but without monitoring they are effectively fire-and-forget — nobody knows if they worked until something downstream fails. The investment needed is not primarily more automation but better observability and reliability for what already exists.",
        "Your pipeline score shows an organisation that has moved beyond purely manual data movement but has not yet built the engineering discipline that makes pipelines reliable. Failures happen regularly, root causes are unclear, and the same problems recur because there is no systematic approach to either preventing or resolving them."
      ],
      "3": [
        "Your pipelines are built on a consistent framework and managed through an orchestration tool. Version control is in place, failures are alerted automatically, and documentation exists for the most important pipelines. This is a solid operational baseline — the data team knows when pipelines fail, and consumers are rarely the first to find out. New pipelines follow a defined pattern that makes them easier to maintain.",
        "At level 3, pipeline management is systematic. An orchestrator handles scheduling and dependencies. Failures are visible and alerted. Code is in version control and goes through a review process. This is the baseline of professional data engineering, and it enables a much higher level of reliability than what came before. The gaps are typically in testing coverage and in the coverage of freshness SLAs.",
        "Pipeline reliability at this level reflects a team that has invested in the plumbing as well as the analytics. The orchestration layer works, monitoring is in place, and the pipeline estate is documented. The next investments are in testing — making sure changes do not break existing pipelines — and in establishing and tracking freshness guarantees for the consumers who depend on the data."
      ],
      "4": [
        "Pipeline management at level 4 is a measured engineering discipline. Reliability is tracked with SLAs, freshness and latency are monitored as operational metrics, and the pipeline estate is documented and audited for redundancy. Change data capture (CDC) is in use where it reduces load and latency. Pipeline failures are rare events that trigger a structured response rather than a scramble.",
        "Your pipeline score reflects a high level of operational maturity. The estate is well-instrumented, SLAs are defined and tracked, and quality gates are embedded in the deployment process. The engineering discipline around pipelines means new capabilities can be delivered reliably and existing ones degrade gracefully when something goes wrong. The remaining work is in the edges: testing coverage, end-to-end lineage, and new-source onboarding processes.",
        "At level 4, pipelines are managed as a service — with defined reliability expectations, measured performance, and a continuous improvement process. The team is spending less time firefighting and more time improving. The next step is moving towards fully declarative, self-healing pipelines and ensuring that every new source onboarding follows a streamlined, documented process."
      ],
      "5": [
        "Your pipeline capability is at the advanced end of the spectrum. Pipelines are declaratively defined, self-healing where possible, and covered by automated test suites. Lineage is captured end-to-end. New source onboarding is a documented, repeatable process. This is pipeline management as a platform engineering discipline — the infrastructure is reliable enough that the data team can focus on building new capabilities rather than maintaining existing ones.",
        "Level 5 pipeline management means the pipeline estate is a reliable, well-tested platform. Failures are rare and self-healing where they occur. Testing coverage is measured and improving. Lineage is comprehensive. The team's energy goes into advancing the platform rather than maintaining it. This is what data engineering looks like at scale, done well.",
        "Your pipeline score reflects years of investment in engineering discipline. The estate is reliable, observable, and continuously improving. The most useful work at this level is hardening the new-source onboarding process to keep pace with organisational growth, and ensuring that the testing and observability discipline is maintained as the team grows and changes."
      ]
    },
    "analytics": {
      "1": [
        "Analytics delivery in your organisation means Excel and ad hoc SQL. Different people maintain their own versions of key metrics and leadership meetings are regularly disrupted by conflicting numbers. Report requests are a bottleneck on specific individuals. This is a common starting point and it reflects not a lack of data ambition but a lack of shared infrastructure for delivering on that ambition.",
        "Your analytics score reflects an organisation where insight delivery is limited by the absence of shared, trusted infrastructure. Reports are built independently, definitions are not agreed, and the analytical function is primarily reactive — producing outputs on demand rather than building assets that compound in value. This stage is costly because every new report recreates the same logic with subtle variations.",
        "Analytics at level 1 means the organisation's analytical capability is the sum of its individual analysts' personal outputs. There is no shared foundation — no agreed metrics, no trusted reports, no common tooling — and the result is inconsistency that undermines trust. The investment needed is not in more analysis but in shared infrastructure that makes the analysis everyone produces trustworthy and comparable."
      ],
      "2": [
        "A BI tool is in use but deployed inconsistently. Core reports exist but are often duplicated with slight variations. Business users need technical help for most analytical questions. Different dashboards show different numbers for the same KPI. This is the most common position for organisations that have deployed analytics tooling without the governance and data quality foundations to make it reliable.",
        "Analytics at level 2 means the tooling exists but trust in it is low. There are too many reports, they are not consistent with each other, and business users have learned to verify numbers rather than rely on them. This erodes the value of every analytical investment — the tool is there but the output is not trusted. Resolving this requires tackling the underlying data quality and definition problems, not deploying more tooling.",
        "Your analytics score shows an organisation that has invested in BI capability but not yet in the governance and data quality that makes that capability reliable. The result is dashboard sprawl and metric inconsistency. The path forward is to start small — identify ten trusted reports covering the most important KPIs, get agreement on their definitions, and make those the authoritative source — rather than fixing every existing report."
      ],
      "3": [
        "A curated set of trusted reports exists for core metrics with agreed definitions. A semantic or metric layer is in use for key KPIs. Self-service analytics is available for a defined user group. Reports are version-controlled and managed. This is a meaningful capability — business users can get answers to common questions reliably and there is a shared starting point for more complex analysis.",
        "Analytics at level 3 means the analytical function has moved from a report factory to a managed service. The most important metrics are defined, trusted, and consistently delivered. Self-service is available for users who have been trained to use it. The remaining gaps are in coverage — some areas of the business are still underserved — and in the governance of the report estate, where sprawl is beginning to accumulate.",
        "Your analytics score reflects a team that has built the foundations of a reliable analytical capability. Trusted reports, agreed definitions, and a functional self-service environment represent a genuine improvement over the status quo. The next challenge is scale — maintaining consistency as the report estate grows, managing the lifecycle of reports that are no longer needed, and extending self-service to more of the organisation."
      ],
      "4": [
        "Analytics delivery at level 4 is a managed product. Usage is tracked, adoption is measured, and underperforming reports are retired. The semantic layer provides consistent metric definitions across BI tools, notebooks, and APIs. Business users can answer most common questions without analyst support. The data team is focused on building and improving infrastructure rather than producing individual reports.",
        "At level 4, your analytics function operates with a product mindset. Reports have owners, SLAs, and lifecycle management. The semantic layer ensures that wherever a metric is consumed, it means the same thing. Self-service adoption is measured and growing. The analytical estate is a curated product rather than an accumulating heap, and the team's time reflects that — less production, more enablement.",
        "Your analytics score reflects a team that has successfully transitioned from a report factory to a data product team. The infrastructure is governed, the metrics are trusted, and self-service is reducing the demand on analyst time for routine questions. The next frontier is moving the most advanced analytical capabilities — predictive models, operational analytics, real-time insights — into production."
      ],
      "5": [
        "Analytics at level 5 means the infrastructure is a strategic asset. The semantic layer is the single source of truth for all metric definitions, spanning BI, notebooks, and APIs. Self-service adoption is high and measured. Advanced analytics are embedded in operational workflows. The analytics infrastructure is treated as a product with a roadmap, SLAs, and stakeholder engagement. This is rare.",
        "Operating at level 5 in analytics means the data function has achieved what most organisations aspire to: business users who can answer their own questions confidently, metrics that mean the same thing everywhere, and analytical infrastructure that enables rather than limits. The team's contribution is strategic — building the capabilities that make the rest of the organisation more effective — rather than operational.",
        "Your analytics score reflects the result of sustained investment in both the technical and human dimensions of analytics delivery. The infrastructure is excellent, the adoption is real, and the metrics are trusted. The most valuable work at this level is ensuring the capability scales with the organisation — onboarding new business areas into the self-service model, keeping the semantic layer current with changing business definitions, and maintaining the product discipline that got you here."
      ]
    },
    "security": {
      "1": [
        "Data security and privacy in your organisation are at a reactive baseline. Access to data is broadly permissive, PII (Personally Identifiable Information) has not been systematically identified, and compliance is addressed when an audit or incident requires it rather than proactively. This creates real regulatory risk — particularly under UK GDPR — and operational risk when sensitive data is accessed or shared inappropriately.",
        "Your security score reflects the position of many organisations that have focused on getting value from data before building controls around it. The risk accumulates invisibly: data is being collected and retained without a full understanding of what it contains or who can see it. The priority is not to lock everything down but to understand the landscape — what personal data exists, where it lives, who can access it.",
        "Security and compliance at level 1 means the controls that exist are default and incidental rather than deliberate. Access permissions reflect who asked for access rather than who needs it. Retention is indefinite unless someone manually deletes data. Privacy obligations exist in a policy document that few people have read. This is a fragile position that becomes more fragile as data volumes and regulatory scrutiny grow."
      ],
      "2": [
        "Basic security controls are in place — database permissions, folder access controls — but they are not consistently managed or reviewed. PII is partially identified in key systems. A retention policy exists but is inconsistently enforced. This is better than nothing but it is the minimum — and the minimum is not enough for most regulated sectors or for organisations handling significant personal data.",
        "Your security dimension shows the beginning of intentional security management. Some controls exist, some PII has been identified, and a retention policy has been written. The gap is in enforcement and consistency — controls are applied in some places and not others, the retention policy is not reliably actioned, and access reviews happen only when something goes wrong.",
        "Security at level 2 means you have the documents but not yet the practice. Policies exist, some controls are in place, but the connection between policy and daily operational reality is weak. The most important next steps are audit — find out who actually has access to what — and enforcement — apply the retention policy that already exists."
      ],
      "3": [
        "A data classification scheme is in use, PII is catalogued across core systems, access is granted on a least-privilege basis, and security reviews are part of the project delivery process. This is a functioning security posture — not perfect, but deliberate and improving. Most compliance obligations can be evidenced, and the organisation understands where its most significant data risks lie.",
        "Security at level 3 means the essential controls are in place and working. Access is managed with intent, personal data is identified and protected, and new projects go through a privacy review. The gaps are typically in the edges — not all systems are included in the PII inventory, access reviews are manual and infrequent, and audit trails exist but are not monitored actively.",
        "Your security score reflects a team and organisation that takes data protection seriously. The framework is in place, the most sensitive data is identified and controlled, and there is a process for managing new risks as they arise. The next investments are in automation — making enforcement more reliable — and in monitoring — catching access anomalies before they become incidents."
      ],
      "4": [
        "Security and privacy management at level 4 is proactive and measured. Access rights are audited regularly, stale access is automatically flagged and revoked, PII detection is active, and privacy impact assessments are completed for new data processing activities. Compliance evidence can be generated systematically rather than assembled for each audit. This is a mature security posture.",
        "At level 4, your security dimension reflects an organisation that has moved from controls to managed risk. Access is not just restricted — it is continuously reviewed and adjusted. PII is not just identified — it is tracked and protected at every stage of its lifecycle. Incidents are tracked and trended. The organisation can demonstrate compliance continuously, not just when an auditor asks.",
        "Your security score reflects sustained investment in data protection as an engineering and governance discipline. The controls are comprehensive, the practices are measured, and the compliance story is strong. The next frontier is automation — fine-grained access control enforced by tooling rather than policy, automated PII detection at ingestion, and compliance evidence generated without manual effort."
      ],
      "5": [
        "Security at level 5 means privacy and compliance are embedded in the data platform itself. Fine-grained, attribute-based access control is enforced at column and row level. PII detection is automated at ingestion. Privacy by design is part of every data product's development lifecycle. Compliance evidence is generated automatically. This is security as a platform capability — not a process applied on top of the platform.",
        "Operating at level 5 in security means the controls are structural rather than procedural. The platform enforces privacy — you cannot accidentally expose personal data because the platform prevents it. Compliance is evidenced automatically, access is dynamically controlled, and the organisation's data protection posture is as strong as its engineering. This is rare and reflects years of deliberate investment.",
        "Your security score reflects an organisation where data protection is taken seriously at every level — governance, engineering, and culture. The result is a posture that regulatory scrutiny would be unlikely to find fault with, and a data estate that is genuinely trustworthy. The challenge at this level is maintaining this standard as the organisation grows and the regulatory landscape continues to evolve."
      ]
    },
    "skills": {
      "1": [
        "Data work in your organisation is done by people for whom it is not their primary role. No dedicated data function exists and data knowledge is concentrated in a small number of individuals. When those individuals are unavailable, the organisation's data capability effectively disappears. This is the highest bus-factor risk of any dimension — and it is also the one with the clearest path forward.",
        "Your skills score reflects an organisation at the beginning of building a data capability. Data work is happening — but it is happening in the gaps between other priorities, by people who are doing it because they can, not because it is their defined role. This creates quality and consistency problems that compound over time, and a knowledge concentration risk that a single resignation can expose.",
        "Skills and operating model at level 1 means data capability is informal and individual-dependent. The organisation values data in principle but has not yet invested in the team and structure needed to deliver it reliably. The gap between aspiration and capability is visible and growing as demand for data outpaces the informal capacity to supply it."
      ],
      "2": [
        "Some analytical roles exist — data analysts, BI developers — but the team is small and primarily reactive. Most data work is report production rather than insight generation. No data engineering role exists. External consultants fill capability gaps. This is a team that is overwhelmed by demand and has no capacity to invest in building better infrastructure.",
        "Your skills dimension shows a team that has been established but is under capacity. Roles exist but the team is too small and too reactive to do anything other than respond to requests. The operating model, if it exists, is informal — whoever asks loudest gets the next report. This stage is characterised by high analyst burn-out risk and limited impact despite significant effort.",
        "Data capability at level 2 means the data function exists as a recognisable team but is not yet operating effectively. The skills exist but the operating model does not — requests are unmanaged, priorities are unclear, and the team has no time to build the infrastructure that would make them more effective. Fixing the operating model often delivers more immediate value than adding headcount."
      ],
      "3": [
        "A data team exists with defined roles covering engineering, analysis, and governance. Responsibilities are documented. A training budget and basic onboarding programme exist. The team operates with a managed backlog and defined stakeholder interface. This is a functioning data team — not yet at scale, but delivering value reliably and building capability over time.",
        "Skills and operating model at level 3 means the team is properly structured and is operating with a product mindset. Roles are clear, the backlog is managed, and stakeholders know how to engage. Training is happening and onboarding is documented. This is the baseline of a professional data function, and it enables a level of reliability and quality that informal arrangements cannot sustain.",
        "Your skills score reflects a team that has been properly resourced and structured. The roles are defined, the operating model is working, and the team is developing its capability over time. The gaps at level 3 are typically in data literacy across the wider organisation — the data team is professional, but its consumers are not yet well-equipped to use what it produces — and in the strategic influence of the data function."
      ],
      "4": [
        "The data team at level 4 is operating with strategic influence as well as delivery capability. Skills gaps are assessed and addressed. Engineering and analytical skills coexist in a structured team. Data literacy is being actively developed across the wider organisation. The team's retrospectives and continuous improvement practices reflect a mature operating model.",
        "Your skills dimension reflects a team that has moved from delivery to enablement. The operating model is structured, the team has the right skills mix, and the data literacy investment means business users are becoming more capable at using what the team produces. The team runs its own improvement process and the relationship with stakeholders is collaborative rather than transactional.",
        "At level 4, the data function is a recognised strategic partner in the organisation. The team has depth and breadth of skills, the operating model is well-defined, and the investment in data literacy is paying off in more sophisticated stakeholder conversations. The next step is ensuring this capability scales — that knowledge is distributed rather than concentrated, and that the team can absorb growth without losing quality."
      ],
      "5": [
        "Data capability at level 5 is embedded across the organisation, not concentrated in a team. Data literacy programmes reach all staff. The data function influences strategy and has senior representation in leadership. The team contributes to open-source tools it depends on. Knowledge sharing is systematic and external-facing. This is data capability as an organisational property, not just a departmental one.",
        "Operating at level 5 in skills means the data function has succeeded in its most strategic objective: distributing its capability across the organisation. Analysts are embedded in business teams with platform support. Data literacy is a core competency. The central data function is a centre of excellence rather than a bottleneck. This is genuinely rare and represents years of sustained investment in people as well as technology.",
        "Your skills score reflects an organisation where data capability is a genuine competitive advantage. The team is expert, the organisation is literate, and the relationship between the data function and the business is strategic. The challenge at this level is sustaining the culture and investment that produced these results as leadership changes and organisational priorities shift."
      ]
    }
  },
  "context_observations": [
    {
      "id": "obs_small_org_low_overall",
      "condition": {
        "org_size": "small",
        "overallMaxLevel": 2
      },
      "text": "As a small organisation, you have an advantage that larger organisations do not: the ability to move quickly and adopt modern, lightweight tooling without the overhead of enterprise procurement cycles. Many of the most capable open-source data tools have been designed precisely for teams of your size. The priority is to choose tools that are simple to operate, not tools that would impress a large enterprise."
    },
    {
      "id": "obs_small_org_no_team",
      "condition": {
        "org_size": "small",
        "team_maturity": "no_data_team"
      },
      "text": "Without a dedicated data team, the most impactful first step is often not a tool purchase but a role definition. One well-placed data generalist — someone who can build simple pipelines and produce trusted reports — will deliver more value than any technology investment made without someone to own it. Define the role before the platform."
    },
    {
      "id": "obs_public_sector_governance",
      "condition": {
        "sector": "public_sector",
        "dimension": "governance",
        "maxLevel": 2
      },
      "text": "Public sector organisations face specific governance obligations that private sector organisations do not — including transparency requirements, Freedom of Information obligations, and sector-specific data standards. The governance gaps in this assessment carry regulatory as well as operational risk. Prioritising governance investment above other dimensions is the right sequencing for public sector organisations."
    },
    {
      "id": "obs_regulated_security_gap",
      "condition": {
        "sector": "regulated_private",
        "dimension": "security",
        "maxLevel": 2
      },
      "text": "Regulated sector organisations with low security and compliance scores face material risk. Regulatory consequences in financial services, utilities, health, and education for data protection failures include financial penalties, operational restrictions, and reputational damage. The security recommendations in this report should be treated as the highest priority, ahead of capability improvements in other dimensions."
    },
    {
      "id": "obs_oss_preferred_strategy",
      "condition": {
        "budget_posture": "oss_preferred"
      },
      "text": "An open-source-first strategy is achievable across all eight dimensions assessed here. The tools catalogue in this report covers open-source options for every category — from metadata management to analytics to security. Where licence caveats apply (particularly Airbyte's Elastic Licence, Redpanda's BSL, and Metabase's AGPL split), these are clearly flagged. You do not need commercial tools to build a mature data architecture."
    },
    {
      "id": "obs_large_org_high_volume",
      "condition": {
        "org_size": "large",
        "data_volume": "large"
      },
      "text": "Organisations of your scale with large data volumes face engineering challenges that smaller organisations do not encounter. Query performance management, storage cost optimisation, and pipeline reliability at scale require deliberate investment in platform engineering — not just data engineering. Ensuring the storage and pipelines dimensions are prioritised is important at this scale."
    },
    {
      "id": "obs_no_cloud_strategy",
      "condition": {
        "cloud_posture": "undecided"
      },
      "text": "Without a clear cloud strategy, tool recommendations in this report have been kept cloud-agnostic. When you resolve your cloud direction, revisit the tooling recommendations — each major cloud has native services that integrate with existing identity and security infrastructure, which can significantly reduce operational overhead compared to self-hosting everything."
    },
    {
      "id": "obs_on_prem_constraints",
      "condition": {
        "cloud_posture": "on_prem"
      },
      "text": "Operating on-premises constrains your tooling options but does not prevent building a mature data architecture. All the open-source tools recommended in this report can be self-hosted. The trade-off is operational overhead — you will need to manage infrastructure that cloud users get as a service. Prioritising tools with low operational complexity (DuckDB, dbt Core, Metabase) reduces this burden."
    },
    {
      "id": "obs_platform_team_advanced",
      "condition": {
        "team_maturity": "platform_team"
      },
      "text": "With a data platform team in place, you have the organisational capability to tackle the advanced recommendations in this report. The challenge for teams at this maturity level is often strategic rather than technical: ensuring the platform team's output is aligned with business priorities, that data literacy in consuming teams keeps pace with platform capability, and that the team is focused on enabling others rather than building for its own satisfaction."
    },
    {
      "id": "obs_embedded_analysts_bottleneck",
      "condition": {
        "team_maturity": "embedded_analysts"
      },
      "text": "Embedded analysts provide excellent business alignment but often lack the engineering support to build reliable data infrastructure. The most common gap in this model is data engineering capability — without engineers to build and maintain pipelines, analysts spend time on data wrangling that they should spend on analysis. Prioritising pipeline investment or adding a central engineering resource will have the highest impact on analyst productivity."
    }
  ],
  "closing_remarks": [
    "Data architecture maturity is not a destination — it is an ongoing practice. The organisations that do this best treat it as a continuous improvement discipline rather than a one-time transformation. The recommendations in this report are a starting point, not a complete roadmap. Revisit this assessment in six to twelve months to measure progress and reprioritise based on what has changed. The trajectory matters as much as the current score.",
    "The most important insight from this assessment is not any individual score but the pattern of scores across dimensions. Maturity in one dimension is limited by gaps in others: governance without quality, or analytics without trusted pipelines, both create ceilings on impact. The recommendations have been prioritised with this interdependence in mind — addressing foundational gaps first unlocks progress across multiple dimensions simultaneously.",
    "Building data capability takes longer than most organisations expect and costs less than most fear. The open-source tools available today are genuinely excellent — the barrier to a world-class data architecture is not budget, it is consistent attention and a clear direction. The organisations that make the most progress are those that make data a leadership priority and invest in it steadily, rather than in occasional bursts."
  ]
};
