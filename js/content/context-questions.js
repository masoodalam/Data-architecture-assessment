// Auto-generated from content/context-questions.json. Do not edit directly.
export default [
  {
    "id": "org_name",
    "type": "text",
    "label": "Organisation name",
    "placeholder": "e.g. Highlands Council, NHS Tayside",
    "hint": "Used only in your downloaded report — never sent anywhere.",
    "required": false,
    "storeAs": "org_name"
  },
  {
    "id": "org_size",
    "type": "select",
    "label": "How many people work in your organisation?",
    "hint": "This helps calibrate the scale of recommended tooling and governance structures.",
    "required": true,
    "storeAs": "org_size",
    "options": [
      {
        "value": "small",
        "label": "Up to 50 people"
      },
      {
        "value": "medium",
        "label": "51 – 500 people"
      },
      {
        "value": "large",
        "label": "More than 500 people"
      }
    ]
  },
  {
    "id": "sector",
    "type": "select",
    "label": "Which sector best describes your organisation?",
    "hint": "Sector shapes regulatory obligations and available procurement routes.",
    "required": true,
    "storeAs": "sector",
    "options": [
      {
        "value": "public_sector",
        "label": "Public sector (government, NHS, local authority, arm's-length body)"
      },
      {
        "value": "regulated_private",
        "label": "Regulated private sector (financial services, utilities, health, education)"
      },
      {
        "value": "other_private",
        "label": "Other private sector"
      },
      {
        "value": "non_profit",
        "label": "Non-profit / third sector"
      }
    ]
  },
  {
    "id": "cloud_posture",
    "type": "select",
    "label": "What is your current cloud posture?",
    "hint": "We use this to suggest tooling that fits your hosting environment.",
    "required": true,
    "storeAs": "cloud_posture",
    "options": [
      {
        "value": "aws",
        "label": "Primarily AWS"
      },
      {
        "value": "azure",
        "label": "Primarily Azure"
      },
      {
        "value": "gcp",
        "label": "Primarily Google Cloud (GCP)"
      },
      {
        "value": "multicloud",
        "label": "Multi-cloud"
      },
      {
        "value": "on_prem",
        "label": "Primarily on-premises / private data centre"
      },
      {
        "value": "undecided",
        "label": "Not decided yet / hybrid / varies by system"
      }
    ]
  },
  {
    "id": "data_volume",
    "type": "select",
    "label": "Roughly how much data does your analytical estate contain?",
    "hint": "An order-of-magnitude estimate is fine. This guides storage and compute recommendations.",
    "required": true,
    "storeAs": "data_volume",
    "options": [
      {
        "value": "small",
        "label": "Less than 100 GB"
      },
      {
        "value": "medium",
        "label": "100 GB – 10 TB"
      },
      {
        "value": "large",
        "label": "More than 10 TB"
      }
    ]
  },
  {
    "id": "team_maturity",
    "type": "select",
    "label": "What best describes your current data team?",
    "hint": "Helps gauge what operational complexity is realistic to recommend.",
    "required": true,
    "storeAs": "team_maturity",
    "options": [
      {
        "value": "no_data_team",
        "label": "No dedicated data team — data work is done by others alongside their main role"
      },
      {
        "value": "embedded_analysts",
        "label": "Embedded analysts or BI developers across business teams"
      },
      {
        "value": "dedicated_team",
        "label": "A dedicated central data team (analysts and/or engineers)"
      },
      {
        "value": "platform_team",
        "label": "A data platform team with engineering, analytics, and governance roles"
      }
    ]
  },
  {
    "id": "budget_posture",
    "type": "select",
    "label": "What is your budget posture for data tooling?",
    "hint": "We default to open-source recommendations but can suggest commercial alternatives where appropriate.",
    "required": true,
    "storeAs": "budget_posture",
    "options": [
      {
        "value": "oss_preferred",
        "label": "Open source strongly preferred — commercial tooling needs strong justification"
      },
      {
        "value": "mixed",
        "label": "Mixed — open source where possible, commercial where it saves significant time"
      },
      {
        "value": "commercial_ok",
        "label": "Commercial procurement available — total cost of ownership matters more than licence type"
      }
    ]
  }
];
