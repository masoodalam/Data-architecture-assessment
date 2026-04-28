// Auto-generated from content/tools-catalogue.json. Do not edit directly.
export default {
  "_comment": "Open-source-first catalogue of data tooling, organised by category. Used to populate recommendation alternative_tools lists. See content/schemas/tools-catalogue.schema.json for the full schema.",
  "tools": [
    {
      "id": "datahub",
      "name": "DataHub",
      "category": "metadata_catalogue",
      "licence": "Apache 2.0",
      "type": "open_source",
      "deployment": [
        "self_hosted",
        "managed_acryl"
      ],
      "good_for": [
        "medium_org",
        "large_org",
        "public_sector",
        "regulated_private"
      ],
      "constraints": [
        "requires Kubernetes or equivalent to self-host reliably",
        "moderate ops overhead",
        "onboarding takes several weeks for full coverage"
      ],
      "url": "https://datahubproject.io",
      "one_line": "LinkedIn-originated metadata platform with strong lineage, schema history, and governance features — powerful but demands real infrastructure commitment."
    },
    {
      "id": "openmetadata",
      "name": "OpenMetadata",
      "category": "metadata_catalogue",
      "licence": "Apache 2.0",
      "type": "open_source",
      "deployment": [
        "self_hosted",
        "managed_saas"
      ],
      "good_for": [
        "medium_org",
        "large_org",
        "public_sector"
      ],
      "constraints": [
        "self-hosted deployment requires Docker Compose or Kubernetes",
        "smaller community than DataHub"
      ],
      "url": "https://open-metadata.org",
      "one_line": "Full-featured open-source catalogue with built-in data quality, lineage, and a clean UI — a strong DataHub alternative with a more approachable setup."
    },
    {
      "id": "amundsen",
      "name": "Amundsen",
      "category": "metadata_catalogue",
      "licence": "Apache 2.0",
      "type": "open_source",
      "deployment": [
        "self_hosted"
      ],
      "good_for": [
        "medium_org",
        "large_org"
      ],
      "constraints": [
        "requires Neo4j or Atlas as the metadata graph backend",
        "development pace has slowed since Lyft open-sourced it",
        "UI is functional but dated"
      ],
      "url": "https://www.amundsen.io",
      "one_line": "Lyft's search-first data discovery tool built on a graph model — good for discovery but less capable on lineage and governance than newer alternatives."
    },
    {
      "id": "atlan",
      "name": "Atlan",
      "category": "metadata_catalogue",
      "licence": "Commercial",
      "type": "commercial",
      "deployment": [
        "managed_saas"
      ],
      "good_for": [
        "medium_org",
        "large_org",
        "regulated_private"
      ],
      "constraints": [
        "SaaS-only — data about your data assets leaves your environment",
        "pricing scales with assets and users"
      ],
      "url": "https://atlan.com",
      "one_line": "Modern commercial catalogue with strong UX, Slack-style collaboration, and broad connector coverage — aimed at teams who want fast time-to-value without self-hosting."
    },
    {
      "id": "collibra",
      "name": "Collibra",
      "category": "metadata_catalogue",
      "licence": "Commercial",
      "type": "commercial",
      "deployment": [
        "managed_saas",
        "self_hosted"
      ],
      "good_for": [
        "large_org",
        "regulated_private",
        "public_sector"
      ],
      "constraints": [
        "enterprise pricing — significant budget required",
        "implementation typically requires a partner or dedicated internal resource",
        "complex to configure for smaller teams"
      ],
      "url": "https://www.collibra.com",
      "one_line": "Enterprise governance and catalogue platform with deep workflow and policy capabilities — justified for large regulated organisations with complex compliance needs."
    },
    {
      "id": "great_expectations",
      "name": "Great Expectations",
      "category": "data_quality",
      "licence": "Apache 2.0",
      "type": "open_source",
      "deployment": [
        "self_hosted",
        "managed_saas"
      ],
      "good_for": [
        "medium_org",
        "large_org",
        "public_sector",
        "regulated_private"
      ],
      "constraints": [
        "Python-centric — less accessible to SQL-only teams",
        "configuration can be verbose",
        "managed cloud offering (GX Cloud) is commercial"
      ],
      "url": "https://greatexpectations.io",
      "one_line": "The most established open-source data quality framework — define expectations as code, run them in pipelines, and generate human-readable documentation of your data contracts."
    },
    {
      "id": "soda_core",
      "name": "Soda Core",
      "category": "data_quality",
      "licence": "Apache 2.0",
      "type": "open_source",
      "deployment": [
        "self_hosted",
        "managed_saas"
      ],
      "good_for": [
        "small_org",
        "medium_org",
        "large_org"
      ],
      "constraints": [
        "Soda Cloud (managed monitoring UI) is commercial",
        "community support only for Core"
      ],
      "url": "https://www.soda.io/core",
      "one_line": "YAML-based quality checks that run against databases directly — lower barrier to entry than Great Expectations, especially for SQL-fluent teams."
    },
    {
      "id": "dbt_tests",
      "name": "dbt Tests",
      "category": "data_quality",
      "licence": "Apache 2.0",
      "type": "open_source",
      "deployment": [
        "embedded"
      ],
      "good_for": [
        "small_org",
        "medium_org",
        "large_org",
        "low_ops_overhead"
      ],
      "constraints": [
        "only applicable if you are already using dbt for transformation",
        "limited to testing at transformation layer — not raw ingestion"
      ],
      "url": "https://docs.getdbt.com/docs/build/data-tests",
      "one_line": "Built-in quality tests in dbt Core — if you are already using dbt, this is zero-cost quality coverage with no extra tooling required."
    },
    {
      "id": "elementary",
      "name": "Elementary",
      "category": "data_quality",
      "licence": "Apache 2.0",
      "type": "open_source",
      "deployment": [
        "self_hosted",
        "managed_saas"
      ],
      "good_for": [
        "small_org",
        "medium_org"
      ],
      "constraints": [
        "designed as a dbt add-on — limited value outside a dbt workflow",
        "anomaly detection quality improves with data volume and history"
      ],
      "url": "https://www.elementary-data.com",
      "one_line": "Data observability layer that extends dbt — adds anomaly detection, lineage, and a monitoring UI on top of your existing dbt tests with minimal configuration."
    },
    {
      "id": "monte_carlo",
      "name": "Monte Carlo",
      "category": "data_quality",
      "licence": "Commercial",
      "type": "commercial",
      "deployment": [
        "managed_saas"
      ],
      "good_for": [
        "large_org",
        "regulated_private"
      ],
      "constraints": [
        "SaaS only — metadata about your tables and pipelines is sent to Monte Carlo's platform",
        "pricing reflects enterprise positioning"
      ],
      "url": "https://www.montecarlodata.com",
      "one_line": "End-to-end data observability platform with ML-powered anomaly detection — strong on automated monitoring without requiring manual rule writing."
    },
    {
      "id": "bigeye",
      "name": "Bigeye",
      "category": "data_quality",
      "licence": "Commercial",
      "type": "commercial",
      "deployment": [
        "managed_saas"
      ],
      "good_for": [
        "medium_org",
        "large_org"
      ],
      "constraints": [
        "SaaS only",
        "focuses on monitoring rather than pipeline-embedded testing"
      ],
      "url": "https://www.bigeye.com",
      "one_line": "Automated data quality monitoring that infers rules from historical patterns — reduces manual rule-writing effort but requires existing data history to be effective."
    },
    {
      "id": "postgresql",
      "name": "PostgreSQL",
      "category": "oltp_database",
      "licence": "PostgreSQL Licence (permissive, MIT-like)",
      "type": "open_source",
      "deployment": [
        "self_hosted",
        "aws_marketplace",
        "azure_marketplace",
        "gcp_marketplace"
      ],
      "good_for": [
        "small_org",
        "medium_org",
        "large_org",
        "on_prem",
        "public_sector"
      ],
      "constraints": [
        "operational database — not designed for large-scale analytical queries",
        "self-managed replication and HA (high availability) require operational effort"
      ],
      "url": "https://www.postgresql.org",
      "one_line": "The default choice for open-source relational data storage — mature, reliable, and extensible, with managed offerings on every major cloud."
    },
    {
      "id": "mariadb",
      "name": "MariaDB",
      "category": "oltp_database",
      "licence": "GPL 2.0",
      "type": "open_source",
      "deployment": [
        "self_hosted",
        "aws_marketplace",
        "azure_marketplace"
      ],
      "good_for": [
        "small_org",
        "medium_org",
        "on_prem"
      ],
      "constraints": [
        "GPL licence has copyleft implications for embedded use",
        "smaller ecosystem than PostgreSQL for analytical extensions",
        "MariaDB Corporation's commercial backing has changed ownership twice"
      ],
      "url": "https://mariadb.org",
      "one_line": "MySQL-compatible open-source database that forked from MySQL after Oracle's acquisition — solid operational database with broad hosting support."
    },
    {
      "id": "aws_rds",
      "name": "Amazon RDS",
      "category": "oltp_database",
      "licence": "Commercial managed service",
      "type": "managed_service",
      "deployment": [
        "aws_marketplace"
      ],
      "good_for": [
        "small_org",
        "medium_org",
        "large_org",
        "aws"
      ],
      "constraints": [
        "AWS-only",
        "managed overhead removed but AWS lock-in introduced",
        "costs add up at scale — especially Multi-AZ and read replicas"
      ],
      "url": "https://aws.amazon.com/rds/",
      "one_line": "AWS-managed relational database supporting PostgreSQL, MySQL, MariaDB, and others — removes operational overhead at the cost of cloud lock-in."
    },
    {
      "id": "azure_db_postgresql",
      "name": "Azure Database for PostgreSQL",
      "category": "oltp_database",
      "licence": "Commercial managed service",
      "type": "managed_service",
      "deployment": [
        "azure_marketplace"
      ],
      "good_for": [
        "small_org",
        "medium_org",
        "large_org",
        "azure",
        "public_sector"
      ],
      "constraints": [
        "Azure-only",
        "Flexible Server is the current recommended SKU — Hyperscale (Citus) has a separate pricing model"
      ],
      "url": "https://azure.microsoft.com/en-us/products/postgresql/",
      "one_line": "Microsoft's managed PostgreSQL offering — the natural choice for Azure-primary organisations, with UK public sector pricing via Crown Commercial Service."
    },
    {
      "id": "cloud_sql",
      "name": "Cloud SQL",
      "category": "oltp_database",
      "licence": "Commercial managed service",
      "type": "managed_service",
      "deployment": [
        "gcp_marketplace"
      ],
      "good_for": [
        "small_org",
        "medium_org",
        "large_org",
        "gcp"
      ],
      "constraints": [
        "GCP-only",
        "AlloyDB is Google's higher-performance PostgreSQL-compatible alternative for larger workloads"
      ],
      "url": "https://cloud.google.com/sql",
      "one_line": "Google Cloud's managed database service supporting PostgreSQL, MySQL, and SQL Server — the default choice for GCP-primary teams."
    },
    {
      "id": "duckdb",
      "name": "DuckDB",
      "category": "olap_database",
      "licence": "MIT",
      "type": "open_source",
      "deployment": [
        "embedded",
        "self_hosted"
      ],
      "good_for": [
        "small_org",
        "medium_org",
        "low_ops_overhead"
      ],
      "constraints": [
        "single-node only — not designed for concurrent multi-user workloads",
        "no built-in access control — not suitable as a shared multi-tenant store"
      ],
      "url": "https://duckdb.org",
      "one_line": "Embedded columnar analytical database that runs in-process — extraordinary performance for single-analyst or small-team workloads, with zero infrastructure to manage."
    },
    {
      "id": "clickhouse",
      "name": "ClickHouse",
      "category": "olap_database",
      "licence": "Apache 2.0",
      "type": "open_source",
      "deployment": [
        "self_hosted",
        "managed_saas",
        "aws_marketplace",
        "azure_marketplace",
        "gcp_marketplace"
      ],
      "good_for": [
        "medium_org",
        "large_org",
        "high_data_volume"
      ],
      "constraints": [
        "optimised for append-heavy workloads — updates and deletes are expensive",
        "SQL dialect has quirks that differ from ANSI SQL",
        "operational complexity when self-hosting at scale"
      ],
      "url": "https://clickhouse.com",
      "one_line": "Exceptionally fast columnar OLAP database designed for real-time analytics at high volume — strong choice when query latency matters and data is largely immutable."
    },
    {
      "id": "apache_druid",
      "name": "Apache Druid",
      "category": "olap_database",
      "licence": "Apache 2.0",
      "type": "open_source",
      "deployment": [
        "self_hosted"
      ],
      "good_for": [
        "large_org",
        "high_data_volume"
      ],
      "constraints": [
        "operationally complex — requires multiple node types (historical, broker, coordinator)",
        "steep learning curve",
        "best suited to time-series event analytics"
      ],
      "url": "https://druid.apache.org",
      "one_line": "High-throughput real-time OLAP store originally built for time-series event data — powerful at scale but carries significant operational complexity."
    },
    {
      "id": "starrocks",
      "name": "StarRocks",
      "category": "olap_database",
      "licence": "Apache 2.0",
      "type": "open_source",
      "deployment": [
        "self_hosted",
        "managed_saas"
      ],
      "good_for": [
        "medium_org",
        "large_org",
        "high_data_volume"
      ],
      "constraints": [
        "younger project than ClickHouse or Druid — ecosystem still maturing",
        "managed cloud offering (CelerData) is commercial"
      ],
      "url": "https://www.starrocks.io",
      "one_line": "Fast open-source OLAP database that supports both batch and real-time ingestion — competitive with ClickHouse and gaining traction as a Druid alternative."
    },
    {
      "id": "snowflake",
      "name": "Snowflake",
      "category": "olap_database",
      "licence": "Commercial",
      "type": "commercial",
      "deployment": [
        "managed_saas"
      ],
      "good_for": [
        "medium_org",
        "large_org",
        "regulated_private",
        "high_data_volume"
      ],
      "constraints": [
        "per-second compute pricing can escalate unexpectedly",
        "data stored in Snowflake's proprietary format — egress costs apply",
        "SaaS-only, no on-premises option"
      ],
      "url": "https://www.snowflake.com",
      "one_line": "Market-leading cloud data warehouse with near-zero operational overhead, strong governance features, and a large ecosystem — expensive at scale but genuinely easy to operate."
    },
    {
      "id": "databricks_sql",
      "name": "Databricks SQL",
      "category": "olap_database",
      "licence": "Commercial",
      "type": "commercial",
      "deployment": [
        "aws_marketplace",
        "azure_marketplace",
        "gcp_marketplace"
      ],
      "good_for": [
        "large_org",
        "high_data_volume",
        "regulated_private"
      ],
      "constraints": [
        "complex pricing combining compute, DBUs (Databricks Units), and cloud storage",
        "requires comfort with the broader Databricks platform",
        "overkill for organisations without ML or large-scale Spark workloads"
      ],
      "url": "https://www.databricks.com/product/databricks-sql",
      "one_line": "SQL analytics layer on the Databricks Lakehouse platform — the right choice if you are already using Databricks for ML and want unified compute."
    },
    {
      "id": "bigquery",
      "name": "BigQuery",
      "category": "olap_database",
      "licence": "Commercial managed service",
      "type": "managed_service",
      "deployment": [
        "gcp_marketplace"
      ],
      "good_for": [
        "medium_org",
        "large_org",
        "gcp",
        "high_data_volume"
      ],
      "constraints": [
        "GCP-only",
        "on-demand pricing ($6.25/TB scanned) can surprise teams not using slot reservations",
        "data stored in Google's infrastructure"
      ],
      "url": "https://cloud.google.com/bigquery",
      "one_line": "Google's serverless analytical database — no infrastructure to manage, scales to petabytes, and deeply integrated with the GCP ecosystem."
    },
    {
      "id": "apache_iceberg",
      "name": "Apache Iceberg",
      "category": "lakehouse_table_format",
      "licence": "Apache 2.0",
      "type": "open_source",
      "deployment": [
        "self_hosted",
        "aws_marketplace",
        "azure_marketplace",
        "gcp_marketplace"
      ],
      "good_for": [
        "medium_org",
        "large_org",
        "high_data_volume",
        "aws",
        "azure",
        "gcp"
      ],
      "constraints": [
        "a table format, not a storage system — requires an object store (S3, ADLS, GCS) and a query engine (Trino, Spark, DuckDB)",
        "catalogue integration (Hive, Glue, Nessie, REST) adds configuration complexity"
      ],
      "url": "https://iceberg.apache.org",
      "one_line": "The leading open table format for lakehouse architectures — provides ACID transactions, time travel, and schema evolution on top of object storage."
    },
    {
      "id": "delta_lake",
      "name": "Delta Lake",
      "category": "lakehouse_table_format",
      "licence": "Apache 2.0",
      "type": "open_source",
      "deployment": [
        "self_hosted",
        "aws_marketplace",
        "azure_marketplace",
        "gcp_marketplace"
      ],
      "good_for": [
        "medium_org",
        "large_org",
        "high_data_volume"
      ],
      "constraints": [
        "originated in Databricks — deepest integration is with Spark and Databricks SQL",
        "Delta Sharing is a separate commercial feature in some contexts",
        "interoperability with non-Spark engines has improved but Iceberg has broader ecosystem support"
      ],
      "url": "https://delta.io",
      "one_line": "Databricks-originated open table format with strong Spark integration — ACID, time travel, and schema evolution, with the richest ecosystem if you are already on Spark."
    },
    {
      "id": "apache_hudi",
      "name": "Apache Hudi",
      "category": "lakehouse_table_format",
      "licence": "Apache 2.0",
      "type": "open_source",
      "deployment": [
        "self_hosted",
        "aws_marketplace"
      ],
      "good_for": [
        "large_org",
        "high_data_volume",
        "aws"
      ],
      "constraints": [
        "strongest on AWS (originated at Uber, adopted heavily by Amazon EMR)",
        "more operationally complex than Iceberg for simple use cases",
        "smaller ecosystem than Iceberg or Delta Lake"
      ],
      "url": "https://hudi.apache.org",
      "one_line": "Open table format built for record-level upserts and incremental processing — best suited to change data capture (CDC) workloads where frequent updates are the norm."
    },
    {
      "id": "minio",
      "name": "MinIO",
      "category": "lakehouse_table_format",
      "licence": "AGPL 3.0 (open source) — commercial licence available for proprietary use",
      "type": "open_source",
      "deployment": [
        "self_hosted"
      ],
      "good_for": [
        "medium_org",
        "large_org",
        "on_prem"
      ],
      "constraints": [
        "AGPL 3.0 licence requires open-sourcing code that links to it — commercial licence needed for proprietary embedding",
        "object storage only, not a table format — used as the storage layer beneath Iceberg/Delta/Hudi"
      ],
      "url": "https://min.io",
      "one_line": "S3-compatible object storage you can self-host — the standard choice for building an on-premises lakehouse storage layer without cloud vendor dependency."
    },
    {
      "id": "airbyte",
      "name": "Airbyte",
      "category": "ingestion",
      "licence": "Elastic Licence 2.0 (ELv2) — source available but NOT OSI-approved open source; cannot be offered as a managed service by third parties",
      "type": "source_available",
      "deployment": [
        "self_hosted",
        "managed_saas"
      ],
      "good_for": [
        "small_org",
        "medium_org",
        "large_org"
      ],
      "constraints": [
        "ELv2 licence prohibits offering Airbyte as a managed service — check licence compatibility before commercial embedding",
        "Airbyte Cloud is the managed offering from Airbyte Inc",
        "connector quality varies — community connectors may be unmaintained"
      ],
      "url": "https://airbyte.com",
      "one_line": "The widest connector library in the ingestion space (700+ connectors) — note the ELv2 licence is not open source and restricts hosting it as a service."
    },
    {
      "id": "meltano",
      "name": "Meltano",
      "category": "ingestion",
      "licence": "MIT",
      "type": "open_source",
      "deployment": [
        "self_hosted"
      ],
      "good_for": [
        "small_org",
        "medium_org"
      ],
      "constraints": [
        "primarily a CLI and orchestration wrapper around Singer taps — connector ecosystem depends on Singer community maintenance",
        "less polish than Airbyte's UI-driven approach"
      ],
      "url": "https://meltano.com",
      "one_line": "True MIT-licensed ETL tool built on the Singer protocol — the right choice when open-source licensing matters and you prefer code-first pipeline configuration."
    },
    {
      "id": "dlt",
      "name": "dlt (data load tool)",
      "category": "ingestion",
      "licence": "Apache 2.0",
      "type": "open_source",
      "deployment": [
        "self_hosted",
        "embedded"
      ],
      "good_for": [
        "small_org",
        "medium_org",
        "low_ops_overhead"
      ],
      "constraints": [
        "Python library — requires Python pipeline code rather than a UI-driven connector approach",
        "younger project — ecosystem still growing"
      ],
      "url": "https://dlthub.com",
      "one_line": "Python library for building self-normalising data pipelines — exceptionally low setup overhead and a natural fit for data engineers who want pipelines as code without a heavy platform."
    },
    {
      "id": "debezium",
      "name": "Debezium",
      "category": "ingestion",
      "licence": "Apache 2.0",
      "type": "open_source",
      "deployment": [
        "self_hosted"
      ],
      "good_for": [
        "medium_org",
        "large_org",
        "high_data_volume"
      ],
      "constraints": [
        "CDC (change data capture) specialist — not a general-purpose ETL tool",
        "requires Kafka or a Kafka-compatible broker as the event bus",
        "database source configuration (log-based CDC) requires DBA-level access"
      ],
      "url": "https://debezium.io",
      "one_line": "The standard open-source CDC tool — streams row-level changes from databases (PostgreSQL, MySQL, Oracle, MongoDB) into Kafka topics in near real-time."
    },
    {
      "id": "apache_nifi",
      "name": "Apache NiFi",
      "category": "ingestion",
      "licence": "Apache 2.0",
      "type": "open_source",
      "deployment": [
        "self_hosted"
      ],
      "good_for": [
        "large_org",
        "public_sector",
        "on_prem"
      ],
      "constraints": [
        "heavy Java-based system with significant infrastructure requirements",
        "UI-based flow design does not translate well to version control",
        "best suited to complex, heterogeneous data routing rather than simple ELT"
      ],
      "url": "https://nifi.apache.org",
      "one_line": "Mature, visual data routing and transformation platform — strong in public sector and government contexts for regulated, heterogeneous data flows; heavy to operate."
    },
    {
      "id": "fivetran",
      "name": "Fivetran",
      "category": "ingestion",
      "licence": "Commercial",
      "type": "commercial",
      "deployment": [
        "managed_saas"
      ],
      "good_for": [
        "medium_org",
        "large_org"
      ],
      "constraints": [
        "per-connector or MAR (monthly active rows) pricing can become expensive as data volumes grow",
        "limited customisation — connectors do what they do, difficult to extend",
        "SaaS-only"
      ],
      "url": "https://www.fivetran.com",
      "one_line": "Fully managed connector platform with high connector reliability and zero operational overhead — worth the cost for teams where data engineering time is more expensive than SaaS fees."
    },
    {
      "id": "dbt_core",
      "name": "dbt Core",
      "category": "transformation",
      "licence": "Apache 2.0",
      "type": "open_source",
      "deployment": [
        "self_hosted",
        "embedded"
      ],
      "good_for": [
        "small_org",
        "medium_org",
        "large_org",
        "low_ops_overhead"
      ],
      "constraints": [
        "SQL-first — limited support for non-SQL transformations (Python models exist but are constrained by warehouse execution)",
        "dbt Cloud (managed orchestration and IDE) is commercial; dbt Core requires your own scheduler"
      ],
      "url": "https://www.getdbt.com/product/dbt-core",
      "one_line": "The de facto standard for SQL-based data transformation — version-controlled models, built-in testing, and automatic documentation make it the obvious default for most teams."
    },
    {
      "id": "sqlmesh",
      "name": "SQLMesh",
      "category": "transformation",
      "licence": "Apache 2.0",
      "type": "open_source",
      "deployment": [
        "self_hosted",
        "managed_saas"
      ],
      "good_for": [
        "medium_org",
        "large_org"
      ],
      "constraints": [
        "younger than dbt — smaller community and fewer third-party integrations",
        "more opinionated about project structure than dbt",
        "requires learning SQLMesh's specific model evaluation and state management concepts"
      ],
      "url": "https://sqlmesh.com",
      "one_line": "A dbt alternative with first-class virtual environments, semantic understanding of SQL changes, and built-in CI/CD — worth evaluating if dbt's deployment model frustrates you."
    },
    {
      "id": "apache_spark",
      "name": "Apache Spark",
      "category": "transformation",
      "licence": "Apache 2.0",
      "type": "open_source",
      "deployment": [
        "self_hosted",
        "aws_marketplace",
        "azure_marketplace",
        "gcp_marketplace"
      ],
      "good_for": [
        "large_org",
        "high_data_volume"
      ],
      "constraints": [
        "significant operational complexity to self-host at scale",
        "overkill for most organisations below 10TB of analytical data",
        "Python (PySpark) and Scala APIs — not SQL-native, though Spark SQL exists"
      ],
      "url": "https://spark.apache.org",
      "one_line": "The dominant distributed processing engine for large-scale transformation — necessary when data volumes exceed what a single-node SQL engine can handle."
    },
    {
      "id": "apache_airflow",
      "name": "Apache Airflow",
      "category": "orchestration",
      "licence": "Apache 2.0",
      "type": "open_source",
      "deployment": [
        "self_hosted",
        "managed_saas",
        "aws_marketplace",
        "azure_marketplace",
        "gcp_marketplace"
      ],
      "good_for": [
        "medium_org",
        "large_org"
      ],
      "constraints": [
        "Python DAGs (directed acyclic graphs) require developer maintenance — not low-code",
        "self-hosted Airflow carries meaningful operational overhead (scheduler, workers, metadata DB)",
        "dynamic DAGs and data-aware scheduling are more complex than in newer alternatives"
      ],
      "url": "https://airflow.apache.org",
      "one_line": "The most widely deployed open-source workflow orchestrator — vast ecosystem and managed offerings on every cloud, but carries more operational weight than newer alternatives."
    },
    {
      "id": "dagster",
      "name": "Dagster",
      "category": "orchestration",
      "licence": "Apache 2.0",
      "type": "open_source",
      "deployment": [
        "self_hosted",
        "managed_saas"
      ],
      "good_for": [
        "medium_org",
        "large_org"
      ],
      "constraints": [
        "steeper learning curve than Airflow for teams new to asset-based orchestration",
        "Dagster+ (managed cloud) is commercial",
        "smaller ecosystem than Airflow for third-party integrations"
      ],
      "url": "https://dagster.io",
      "one_line": "Asset-oriented orchestrator that models pipelines around data assets rather than tasks — strong on observability and testability, increasingly popular for modern data platforms."
    },
    {
      "id": "prefect",
      "name": "Prefect",
      "category": "orchestration",
      "licence": "Apache 2.0",
      "type": "open_source",
      "deployment": [
        "self_hosted",
        "managed_saas"
      ],
      "good_for": [
        "small_org",
        "medium_org",
        "large_org"
      ],
      "constraints": [
        "Prefect Cloud (managed server) is commercial — self-hosting the server is possible but requires effort",
        "Python-only"
      ],
      "url": "https://www.prefect.io",
      "one_line": "Python-native orchestrator with a low barrier to entry and a clean API — easier to adopt than Airflow for pure Python workflows, with a generous managed free tier."
    },
    {
      "id": "argo_workflows",
      "name": "Argo Workflows",
      "category": "orchestration",
      "licence": "Apache 2.0",
      "type": "open_source",
      "deployment": [
        "self_hosted"
      ],
      "good_for": [
        "large_org",
        "public_sector"
      ],
      "constraints": [
        "Kubernetes-native — not appropriate for teams without Kubernetes infrastructure",
        "YAML-heavy workflow definitions",
        "more suited to container-based tasks than SQL/Python data pipelines"
      ],
      "url": "https://argoproj.github.io/workflows/",
      "one_line": "Kubernetes-native workflow engine — the right choice when you already run Kubernetes and want workload scheduling tightly integrated with your container platform."
    },
    {
      "id": "apache_kafka",
      "name": "Apache Kafka",
      "category": "streaming",
      "licence": "Apache 2.0",
      "type": "open_source",
      "deployment": [
        "self_hosted",
        "managed_saas",
        "aws_marketplace",
        "azure_marketplace",
        "gcp_marketplace"
      ],
      "good_for": [
        "large_org",
        "high_data_volume",
        "regulated_private"
      ],
      "constraints": [
        "significant operational complexity to self-host (ZooKeeper or KRaft, broker tuning, replication)",
        "managed offerings (Confluent, MSK, Aiven) reduce ops burden at commercial cost",
        "overkill for organisations without genuine high-throughput event streaming needs"
      ],
      "url": "https://kafka.apache.org",
      "one_line": "The standard for high-throughput distributed event streaming — dominant in large-scale architectures, with a mature ecosystem and managed offerings on every major cloud."
    },
    {
      "id": "redpanda",
      "name": "Redpanda",
      "category": "streaming",
      "licence": "BSL 1.1 — converts to Apache 2.0 after 4 years; use as a managed service requires a commercial licence from Redpanda Inc",
      "type": "source_available",
      "deployment": [
        "self_hosted",
        "managed_saas"
      ],
      "good_for": [
        "medium_org",
        "large_org",
        "high_data_volume"
      ],
      "constraints": [
        "BSL 1.1 is not OSI-approved open source — check licence if deploying as a service",
        "ecosystem is Kafka-compatible but not identical — some Kafka tooling has edge-case incompatibilities"
      ],
      "url": "https://www.redpanda.com",
      "one_line": "Kafka-compatible streaming broker written in C++ — lower latency and simpler operations than Kafka (no ZooKeeper/JVM), with BSL licence caveats to note."
    },
    {
      "id": "apache_flink",
      "name": "Apache Flink",
      "category": "streaming",
      "licence": "Apache 2.0",
      "type": "open_source",
      "deployment": [
        "self_hosted",
        "managed_saas",
        "aws_marketplace",
        "azure_marketplace"
      ],
      "good_for": [
        "large_org",
        "high_data_volume"
      ],
      "constraints": [
        "stateful stream processing is complex to operate — checkpointing, state backends, and fault tolerance require expertise",
        "managed offerings (Confluent, Kinesis Data Analytics, Ververica) reduce operational overhead at cost"
      ],
      "url": "https://flink.apache.org",
      "one_line": "The leading engine for stateful stream processing — the right choice when you need complex event processing, windowing, or joins across real-time streams."
    },
    {
      "id": "materialize",
      "name": "Materialize",
      "category": "streaming",
      "licence": "BSL 1.1 — converts to Apache 2.0 after 4 years; managed service use requires a commercial licence from Materialize Inc",
      "type": "source_available",
      "deployment": [
        "self_hosted",
        "managed_saas"
      ],
      "good_for": [
        "medium_org",
        "large_org",
        "high_data_volume"
      ],
      "constraints": [
        "BSL 1.1 is not OSI-approved open source",
        "primarily a managed cloud product — self-hosting is possible but not the intended deployment path"
      ],
      "url": "https://materialize.com",
      "one_line": "Streaming SQL database that maintains incrementally updated views over live data — lets you write standard SQL against streaming data without learning a stream processing framework."
    },
    {
      "id": "apache_superset",
      "name": "Apache Superset",
      "category": "bi_analytics",
      "licence": "Apache 2.0",
      "type": "open_source",
      "deployment": [
        "self_hosted",
        "managed_saas"
      ],
      "good_for": [
        "small_org",
        "medium_org",
        "large_org",
        "public_sector"
      ],
      "constraints": [
        "self-hosting requires operational effort (Redis, Celery workers, database)",
        "row-level security configuration is complex",
        "no native scheduling of email/Slack report delivery without additional setup"
      ],
      "url": "https://superset.apache.org",
      "one_line": "The leading open-source BI platform — broad database support, capable dashboards, and an active Apache community; operationally heavier than Metabase but more powerful."
    },
    {
      "id": "metabase",
      "name": "Metabase",
      "category": "bi_analytics",
      "licence": "AGPL 3.0 (open-source edition) / Commercial licence for embedding or removing copyleft obligations",
      "type": "open_source",
      "deployment": [
        "self_hosted",
        "managed_saas"
      ],
      "good_for": [
        "small_org",
        "medium_org",
        "low_ops_overhead"
      ],
      "constraints": [
        "AGPL 3.0 copyleft applies to the open-source edition — embedding in proprietary software requires a commercial licence",
        "advanced features (SSO, sandboxing, serialisation) are Pro/Enterprise only"
      ],
      "url": "https://www.metabase.com",
      "one_line": "The easiest self-hostable BI tool to get started with — intuitive question-builder for non-technical users, with AGPL/commercial licence split worth understanding before embedding."
    },
    {
      "id": "lightdash",
      "name": "Lightdash",
      "category": "bi_analytics",
      "licence": "MIT",
      "type": "open_source",
      "deployment": [
        "self_hosted",
        "managed_saas"
      ],
      "good_for": [
        "small_org",
        "medium_org"
      ],
      "constraints": [
        "requires dbt — Lightdash reads your dbt project directly and is not useful without it",
        "younger product — some features still maturing"
      ],
      "url": "https://www.lightdash.com",
      "one_line": "BI tool built on top of dbt — exposes your dbt models and metrics directly to business users without re-defining logic, eliminating metric duplication by design."
    },
    {
      "id": "evidence",
      "name": "Evidence",
      "category": "bi_analytics",
      "licence": "MIT",
      "type": "open_source",
      "deployment": [
        "self_hosted"
      ],
      "good_for": [
        "small_org",
        "medium_org"
      ],
      "constraints": [
        "Markdown-and-SQL report authoring — requires developer involvement for report creation, not self-service for non-technical users",
        "static site output — live filtering and exploration are limited compared to full BI tools"
      ],
      "url": "https://evidence.dev",
      "one_line": "Code-first reporting tool that generates fast, beautiful data reports from SQL and Markdown — ideal for data teams who want version-controlled reports as code."
    },
    {
      "id": "grafana",
      "name": "Grafana",
      "category": "bi_analytics",
      "licence": "AGPL 3.0 (Grafana OSS) / Commercial (Grafana Enterprise)",
      "type": "open_source",
      "deployment": [
        "self_hosted",
        "managed_saas"
      ],
      "good_for": [
        "medium_org",
        "large_org",
        "public_sector"
      ],
      "constraints": [
        "designed primarily for time-series and operational metrics — less suited to ad hoc business analytics than Superset or Metabase",
        "AGPL 3.0 licence applies to OSS edition"
      ],
      "url": "https://grafana.com",
      "one_line": "The standard for operational and infrastructure dashboards — excellent for time-series monitoring and metrics, less ideal for business intelligence reporting on tabular data."
    },
    {
      "id": "power_bi",
      "name": "Power BI",
      "category": "bi_analytics",
      "licence": "Commercial (Microsoft 365 / Power BI Pro / Premium)",
      "type": "commercial",
      "deployment": [
        "managed_saas",
        "self_hosted"
      ],
      "good_for": [
        "medium_org",
        "large_org",
        "public_sector",
        "azure"
      ],
      "constraints": [
        "deep Microsoft ecosystem integration — best value if already in Microsoft 365",
        "Power BI Desktop is Windows-only",
        "data capacity limits at lower licence tiers",
        "Report Server (on-premises) is a separate, limited product"
      ],
      "url": "https://powerbi.microsoft.com",
      "one_line": "Microsoft's BI platform — dominant in organisations already using Microsoft 365, with strong self-service capability and tight Azure integration."
    },
    {
      "id": "tableau",
      "name": "Tableau",
      "category": "bi_analytics",
      "licence": "Commercial (Salesforce)",
      "type": "commercial",
      "deployment": [
        "managed_saas",
        "self_hosted"
      ],
      "good_for": [
        "large_org",
        "regulated_private"
      ],
      "constraints": [
        "premium commercial pricing — one of the more expensive BI options",
        "Salesforce acquisition has influenced roadmap direction",
        "Tableau Public is free but publishes data publicly"
      ],
      "url": "https://www.tableau.com",
      "one_line": "Premium BI platform with outstanding visualisation capabilities and a mature enterprise feature set — the benchmark for visual analytics, but priced accordingly."
    },
    {
      "id": "cube",
      "name": "Cube",
      "category": "semantic_layer",
      "licence": "MIT (Cube Core) / Commercial (Cube Cloud)",
      "type": "open_source",
      "deployment": [
        "self_hosted",
        "managed_saas"
      ],
      "good_for": [
        "medium_org",
        "large_org"
      ],
      "constraints": [
        "requires a separate API layer in front of your data warehouse — adds infrastructure to maintain",
        "JavaScript/TypeScript schema definition — not purely SQL",
        "Cube Cloud is the managed offering; self-hosting the full stack requires effort"
      ],
      "url": "https://cube.dev",
      "one_line": "Semantic layer and API gateway for analytical data — exposes consistent metric definitions to BI tools, notebooks, and applications through a single governed API."
    },
    {
      "id": "dbt_semantic_layer",
      "name": "dbt Semantic Layer",
      "category": "semantic_layer",
      "licence": "Commercial (requires dbt Cloud — not available in dbt Core)",
      "type": "commercial",
      "deployment": [
        "managed_saas"
      ],
      "good_for": [
        "medium_org",
        "large_org"
      ],
      "constraints": [
        "dbt Cloud subscription required — not available in the open-source dbt Core",
        "BI tool integration requires MetricFlow-compatible connectors — adoption still growing"
      ],
      "url": "https://docs.getdbt.com/docs/use-dbt-semantic-layer/dbt-sl",
      "one_line": "Metric definitions in dbt models surfaced to BI tools via a governed API — the cleanest path to a semantic layer if you are already on dbt Cloud."
    },
    {
      "id": "malloy",
      "name": "Malloy",
      "category": "semantic_layer",
      "licence": "MIT",
      "type": "open_source",
      "deployment": [
        "self_hosted",
        "embedded"
      ],
      "good_for": [
        "small_org",
        "medium_org"
      ],
      "constraints": [
        "new language to learn — Malloy is not SQL and has a learning curve",
        "small community and ecosystem — limited third-party integrations",
        "primarily a Google/Looker project — community adoption is still early"
      ],
      "url": "https://www.malloydata.dev",
      "one_line": "Open-source analytical language and semantic model from Google — an interesting alternative to SQL for composable metric definitions, but early-stage adoption."
    },
    {
      "id": "apache_ranger",
      "name": "Apache Ranger",
      "category": "security_access",
      "licence": "Apache 2.0",
      "type": "open_source",
      "deployment": [
        "self_hosted"
      ],
      "good_for": [
        "large_org",
        "public_sector",
        "on_prem"
      ],
      "constraints": [
        "primarily designed for Hadoop ecosystem (HDFS, Hive, HBase) — integration with modern lakehouse platforms requires configuration effort",
        "complex to set up and administer",
        "lighter-touch alternatives exist for non-Hadoop environments"
      ],
      "url": "https://ranger.apache.org",
      "one_line": "Centralised access control and auditing for Hadoop ecosystem components — the established choice for large on-premises data platforms, but heavy outside that context."
    },
    {
      "id": "openfga",
      "name": "OpenFGA",
      "category": "security_access",
      "licence": "Apache 2.0",
      "type": "open_source",
      "deployment": [
        "self_hosted",
        "managed_saas"
      ],
      "good_for": [
        "medium_org",
        "large_org"
      ],
      "constraints": [
        "a fine-grained authorisation engine, not a data platform access control tool per se — requires integration with your application or data platform APIs",
        "requires development effort to implement the authorisation model"
      ],
      "url": "https://openfga.dev",
      "one_line": "CNCF-hosted fine-grained authorisation engine (originated at Auth0) — implements relationship-based access control (ReBAC) as a service, useful for attribute-based data access control."
    },
    {
      "id": "hashicorp_vault",
      "name": "HashiCorp Vault Community",
      "category": "security_access",
      "licence": "BSL 1.1 (since August 2023) — was MPL 2.0; OpenBao is the MPL 2.0 community fork",
      "type": "source_available",
      "deployment": [
        "self_hosted",
        "managed_saas"
      ],
      "good_for": [
        "medium_org",
        "large_org",
        "regulated_private"
      ],
      "constraints": [
        "BSL 1.1 change in 2023 — if OSI-approved open source matters, consider OpenBao (MPL 2.0 fork)",
        "significant operational complexity to run in HA (high-availability) mode",
        "primarily a secrets manager, not a data access control platform"
      ],
      "url": "https://www.vaultproject.io",
      "one_line": "The standard secrets management platform for storing credentials, API keys, and certificates — essential infrastructure for any organisation handling sensitive connection strings and service tokens."
    },
    {
      "id": "keycloak",
      "name": "Keycloak",
      "category": "security_access",
      "licence": "Apache 2.0",
      "type": "open_source",
      "deployment": [
        "self_hosted",
        "managed_saas"
      ],
      "good_for": [
        "medium_org",
        "large_org",
        "public_sector",
        "on_prem"
      ],
      "constraints": [
        "identity and access management (IAM) platform — provides authentication/SSO, not fine-grained data access control",
        "operationally complex to run in production with HA"
      ],
      "url": "https://www.keycloak.org",
      "one_line": "Open-source identity and access management — the standard self-hosted alternative to Okta or Azure AD for SSO, OAuth2, and OIDC integration across your data platform."
    },
    {
      "id": "microsoft_presidio",
      "name": "Microsoft Presidio",
      "category": "data_privacy",
      "licence": "MIT",
      "type": "open_source",
      "deployment": [
        "self_hosted",
        "embedded"
      ],
      "good_for": [
        "medium_org",
        "large_org",
        "public_sector",
        "regulated_private"
      ],
      "constraints": [
        "NLP-based PII detection — detection quality depends on model quality and language support",
        "requires Python integration into your pipeline",
        "false positive/negative rates need tuning for domain-specific data"
      ],
      "url": "https://microsoft.github.io/presidio/",
      "one_line": "Microsoft's open-source PII detection and anonymisation library — integrates into data pipelines to identify and redact personal data at ingestion or transformation time."
    },
    {
      "id": "apache_atlas",
      "name": "Apache Atlas",
      "category": "data_privacy",
      "licence": "Apache 2.0",
      "type": "open_source",
      "deployment": [
        "self_hosted"
      ],
      "good_for": [
        "large_org",
        "public_sector",
        "on_prem"
      ],
      "constraints": [
        "primarily a Hadoop-ecosystem metadata and governance platform — less relevant outside HDP/CDH environments",
        "heavy to operate; development has slowed relative to newer catalogue tools",
        "overlaps significantly with metadata catalogue tools — consider DataHub or OpenMetadata instead for modern architectures"
      ],
      "url": "https://atlas.apache.org",
      "one_line": "Apache's metadata governance and classification platform for the Hadoop ecosystem — useful for tagging sensitive data in HDFS and Hive, but largely superseded by modern catalogues for new architectures."
    },
    {
      "id": "mlflow",
      "name": "MLflow",
      "category": "ml_platform",
      "licence": "Apache 2.0",
      "type": "open_source",
      "deployment": [
        "self_hosted",
        "managed_saas",
        "aws_marketplace",
        "azure_marketplace"
      ],
      "good_for": [
        "medium_org",
        "large_org"
      ],
      "constraints": [
        "experiment tracking and model registry focus — not a full ML platform (no feature store, no serving infrastructure without extensions)",
        "managed offerings (Databricks Managed MLflow, Azure ML MLflow integration) are commercial"
      ],
      "url": "https://mlflow.org",
      "one_line": "The standard open-source ML experiment tracking and model registry — lightweight to adopt, integrates with most ML frameworks, and the default starting point for teams building machine learning workflows."
    },
    {
      "id": "kubeflow",
      "name": "Kubeflow",
      "category": "ml_platform",
      "licence": "Apache 2.0",
      "type": "open_source",
      "deployment": [
        "self_hosted"
      ],
      "good_for": [
        "large_org"
      ],
      "constraints": [
        "Kubernetes-native — requires a mature Kubernetes platform to operate",
        "high operational complexity — running Kubeflow in production requires dedicated platform engineering effort",
        "overkill for teams not running ML at significant scale"
      ],
      "url": "https://www.kubeflow.org",
      "one_line": "CNCF ML platform for running end-to-end ML pipelines on Kubernetes — the right choice for large organisations with Kubernetes expertise and genuine ML at scale; not for early-stage ML teams."
    }
  ]
};
