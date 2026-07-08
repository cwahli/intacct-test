import { IndustryInfo } from "./types";

export const INDUSTRIES_DATA: IndustryInfo[] = [
  {
    id: "saas",
    name: "SaaS & Software",
    tagline: "Automate subscription billing and ASC 606 revenue recognition",
    description: "Empower your software business to manage contracts, subscriptions, and usage pricing dynamically. Sage Intacct eliminates manual spreadsheets, automates deferred revenue schedules, and provides real-time SaaS metrics (MRR, Churn, CAC, LTV) in a single financial database.",
    metrics: [
      { label: "Annual Recurring Revenue (ARR)", value: "$28.4M", change: "+24.2% YoY", isPositive: true },
      { label: "LTV to CAC Ratio", value: "4.5x", change: "Target: >3x", isPositive: true },
      { label: "SaaS Rule of 40 Score", value: "48%", change: "+5.1% Q2", isPositive: true },
      { label: "Deferred Rev Compliance", value: "ASC 606", change: "100% Automated", isPositive: true }
    ],
    features: [
      "Dynamic subscription billing supports tiers, usage, and hybrids",
      "Unified billing and financial dimensions for instant MRR reporting",
      "Automated ASC 606 / IFRS 15 revenue recognition schedules",
      "Instant contract modification and amendment handling"
    ],
    charts: [
      { label: "Q1 25", value: 18.2 },
      { label: "Q2 25", value: 20.4 },
      { label: "Q3 25", value: 22.1 },
      { label: "Q4 25", value: 24.8 },
      { label: "Q1 26", value: 26.5 },
      { label: "Q2 26", value: 28.4 }
    ],
    quote: "Sage Intacct has been a game-changer for our subscription billing. We reduced our billing cycle from 5 days to 2 hours, and scaled from $10M to $50M ARR without adding finance headcount.",
    author: "Sarah Jenkins",
    role: "VP of Finance",
    company: "Lytx Inc."
  },
  {
    id: "nonprofit",
    name: "Nonprofit",
    tagline: "Achieve flawless stewardship with robust fund accounting",
    description: "Ensure complete transparency, manage restricted funding, and automate audit-ready FASB reporting. Sage Intacct enables non-profits to track grant funding down to individual transactions, calculate indirect cost recovery automatically, and improve board confidence with real-time impact dashboards.",
    metrics: [
      { label: "Total Grant Funding", value: "$18.2M", change: "42 Active Grants", isPositive: true },
      { label: "Program Efficiency %", value: "85.4%", change: "Target: >80.0%", isPositive: true },
      { label: "Indirect Cost Recovered", value: "$1.42M", change: "+14.3% YoY", isPositive: true },
      { label: "Internal Audit Status", value: "Clean", change: "FASB Compliant", isPositive: true }
    ],
    features: [
      "Automated multi-dimensional tracking (Grant, Program, Site, Task)",
      "Instant FASB 958 financial statements and compliance reporting",
      "Automatic indirect cost rate allocations across active programs",
      "Collaborative budgeting and grant spend-down speed limits"
    ],
    charts: [
      { label: "Program A", value: 35 },
      { label: "Program B", value: 25 },
      { label: "Program C", value: 18 },
      { label: "Program D", value: 12 },
      { label: "Admin", value: 6 },
      { label: "Fundraising", value: 4 }
    ],
    quote: "With Sage Intacct, we have real-time visibility across 14 global projects. We've reduced audit cycles by 40%, cut administrative overhead, and successfully redirected those resources to program delivery.",
    author: "Marcus Thornton",
    role: "CFO",
    company: "Room to Read"
  },
  {
    id: "healthcare",
    name: "Healthcare",
    tagline: "Unify multi-location clinical operations with HIPAA security",
    description: "Scale your medical network, manage multiple entities dynamically, and automate intercompany transactions. Sage Intacct provides enterprise healthcare operators with a secure, HIPAA-compliant financial environment to track costs-per-treatment, bed occupancy, and entity margins instantly.",
    metrics: [
      { label: "Operating Margin %", value: "18.2%", change: "+2.1% Q/Q", isPositive: true },
      { label: "Cost-Per-Treatment", value: "$1,380", change: "-5.4% YoY", isPositive: true },
      { label: "Intercompany Close Time", value: "4 hours", change: "Down from 5 days", isPositive: true },
      { label: "Security & HIPAA", value: "BAA Signed", change: "100% Compliant", isPositive: true }
    ],
    features: [
      "Certified HIPAA-compliant hosting environment with BAA agreement",
      "Automated intercompany transaction settlements and allocations",
      "Unified operational (occupancy, bed days) & financial data",
      "Instant consolidation across hundreds of medical entities"
    ],
    charts: [
      { label: "Clinic NW", value: 32 },
      { label: "Clinic NE", value: 28 },
      { label: "Clinic SW", value: 18 },
      { label: "Clinic SE", value: 14 },
      { label: "HQ Entity", value: 8 }
    ],
    quote: "Sage Intacct allowed us to grow our specialized clinical locations from 4 sites to 28 sites without adding any finance staff. It handles BAA, HIPAA, and instant clinic-by-clinic margins effortlessly.",
    author: "Dr. Evelyn Vance",
    role: "Executive Director",
    company: "Bay Area Care Clinics"
  },
  {
    id: "professional-services",
    name: "Professional Services",
    tagline: "Maximize consultant utilization and project profitability",
    description: "Bridge the gap between operational project management and core financial ledgers. Sage Intacct simplifies time & expense tracking, streamlines multi-structure billing (fixed-price, T&M, milestone), and gives project managers real-time visibility into project profitability and unbilled WIP.",
    metrics: [
      { label: "Billable Utilization %", value: "76.4%", change: "+4.1% over avg", isPositive: true },
      { label: "Project Gross Margin", value: "34.8%", change: "Target: 30%", isPositive: true },
      { label: "WIP Billing Backlog", value: "$320K", change: "-18.5% YoY", isPositive: true },
      { label: "Days Sales Outstanding", value: "31 Days", change: "-8 days faster", isPositive: true }
    ],
    features: [
      "Integrated time, expense, and resource scheduling workflows",
      "Automated complex billing rules (milestone, recurring, hybrid)",
      "Real-time visual project-by-project margin analytics",
      "Automated WIP postings to GL without manual imports"
    ],
    charts: [
      { label: "Advisory", value: 42 },
      { label: "Engineering", value: 28 },
      { label: "Consulting", value: 18 },
      { label: "DevOps", value: 12 }
    ],
    quote: "By migrating to Sage Intacct, we reduced our unbilled WIP backlog by 25% and accelerated our invoice cycle time by 8 days, significantly boosting our operational cash reserves.",
    author: "Derrick Vance",
    role: "Managing Partner",
    company: "Alpha Consulting Group"
  },
  {
    id: "financial-services",
    name: "Financial Services",
    tagline: "Consolidate complex funds and track performance dimensions",
    description: "Designed for wealth managers, asset management, private equity, and multi-asset family offices. Sage Intacct replaces weeks of spreadsheet mechanics with instant, continuous multi-currency consolidations and dimensional analysis across multiple funds and holding companies.",
    metrics: [
      { label: "Total Assets Under Mgt (AUM)", value: "$1.85B", change: "+16.5% YoY", isPositive: true },
      { label: "Fund Close Speed", value: "2 Days", change: "Down from 12 days", isPositive: true },
      { label: "Active Legal Entities", value: "62 Funds", change: "Continuous Auto-Close", isPositive: true },
      { label: "Auditor Access Speed", value: "SOC 1 / 2", change: "Audit-Ready Logs", isPositive: true }
    ],
    features: [
      "Instant global consolidations with automated currency adjustments",
      "Support for fractional, complex ownership and joint ventures",
      "Dynamic reporting across fund, portfolio, asset class, and coinvestor",
      "Continuous close capability with immediate audit trail access"
    ],
    charts: [
      { label: "Real Estate", value: 35 },
      { label: "Growth Equity", value: 30 },
      { label: "Tech Ventures", value: 20 },
      { label: "Liquid Debt", value: 15 }
    ],
    quote: "Consolidating 42 distinct funds used to consume two weeks of Excel nightmare every month. With Sage Intacct, we hit 'consolidate' and get audit-ready multi-currency dashboards in 4 minutes.",
    author: "Victoria Sterling",
    role: "Director of Portfolio Finance",
    company: "Sterling Capital Partners"
  }
];

export const TRUST_STATS = [
  { value: "79%", label: "Reduction in month-end close time" },
  { value: "40+", label: "Hours saved per week on reporting" },
  { value: "250%", label: "Average ROI achieved within 6 months" },
  { value: "#1", label: "Ranked in Customer Satisfaction by G2" }
];

export const CORE_FEATURES = [
  {
    title: "Continuous Consolidation",
    description: "Consolidate multi-entity, multi-location, and international financials with live currency exchange updates in real time — no manual spreadsheets required."
  },
  {
    title: "Dimensional General Ledger",
    description: "Track revenues, costs, and performance by location, department, grant, or customer without expanding your chart of accounts into a giant matrix."
  },
  {
    title: "Procure-to-Pay Automation",
    description: "Automate purchase requisitions, approvals, invoice matching, and electronic vendor payments inside a secure, paperless control framework."
  },
  {
    title: "Real-Time Visual Dashboards",
    description: "Role-based dashboards deliver immediate, actionable metrics, combining financial ledgers and operational KPIs in easy-to-read charts."
  }
];
