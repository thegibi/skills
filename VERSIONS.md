# Skill Versions

Current versions of the reusable skills in this repository.

| Skill | Version | Type | Last Updated |
|---|---:|---|---|
| business-context | 1.0.0 | Context | 2026-09-30 |
| cfo-business-analyst-agent | 2.1.0 | Orchestrator | 2026-09-30 |
| saas-metrics | 1.0.0 | Orchestrator | 2026-09-30 |
| financial-health | 1.0.0 | Orchestrator | 2026-09-30 |
| monthly-business-review | 1.0.0 | Workflow | 2026-09-30 |
| channel-performance | 1.0.0 | Orchestrator | 2026-09-30 |
| lead-source-quality | 1.0.0 | Orchestrator | 2026-09-30 |
| channel-attribution | 1.0.0 | Orchestrator | 2026-09-30 |
| channel-budget-allocation | 1.0.0 | Orchestrator | 2026-09-30 |
| growth-channel-strategy | 1.0.0 | Workflow | 2026-09-30 |
| ctr | 1.0.0 | Metric | 2026-09-30 |
| cpc | 1.0.0 | Metric | 2026-09-30 |
| cpl | 1.0.0 | Metric | 2026-09-30 |
| cpql | 1.0.0 | Metric | 2026-09-30 |
| conversion-rate | 1.0.0 | Metric | 2026-09-30 |
| roas | 1.0.0 | Metric | 2026-09-30 |
| revenue-per-lead | 1.0.0 | Metric | 2026-09-30 |
| gross-profit-per-lead | 1.0.0 | Metric | 2026-09-30 |
| roi | 1.0.0 | Metric | 2026-09-30 |
| cac | 1.0.0 | Metric | 2026-09-30 |
| aov | 1.0.0 | Metric | 2026-09-30 |
| runway | 1.0.0 | Metric | 2026-09-30 |
| burn-rate | 1.0.0 | Metric | 2026-09-30 |
| churn | 1.0.0 | Metric | 2026-09-30 |
| retention-rate | 1.0.0 | Metric | 2026-09-30 |
| mrr | 1.0.0 | Metric | 2026-09-30 |
| arr | 1.0.0 | Metric | 2026-09-30 |
| nrr | 1.0.0 | Metric | 2026-09-30 |
| grr | 1.0.0 | Metric | 2026-09-30 |
| arpu | 1.0.0 | Metric | 2026-09-30 |
| ltv | 1.0.0 | Metric | 2026-09-30 |
| ltv-cac | 1.0.0 | Metric | 2026-09-30 |
| cac-payback | 1.0.0 | Metric | 2026-09-30 |
| gross-margin | 1.0.0 | Metric | 2026-09-30 |
| contribution-margin | 1.0.0 | Metric | 2026-09-30 |
| ebitda | 1.0.0 | Metric | 2026-09-30 |
| quick-ratio | 1.0.0 | Metric | 2026-09-30 |
| magic-number | 1.0.0 | Metric | 2026-09-30 |
| rule-of-40 | 1.0.0 | Metric | 2026-09-30 |
| revenue-growth | 1.0.0 | Metric | 2026-09-30 |
| break-even | 1.0.0 | Metric | 2026-09-30 |
| customer-concentration | 1.0.0 | Metric | 2026-09-30 |
| cash-conversion-cycle | 1.0.0 | Metric | 2026-09-30 |

## Recent changes

### 2026-09-30

- Added channel intelligence layer for channel performance, attribution, lead quality, budget allocation, and growth-channel strategy.
- Added atomic acquisition metrics: CTR, CPC, CPL, CPQL, conversion rate, ROAS, revenue per lead, and gross profit per lead.
- Added canonical channel and lead data schema for Instagram, Facebook, Google, WhatsApp, email, paid, organic, and referral analysis.

- Introduced a layered architecture: context → atomic skills → orchestrators → workflows.
- Added advanced SaaS metrics: GRR, Quick Ratio, Magic Number, Rule of 40, and Revenue Growth.
- Added Break-even, Customer Concentration, and Cash Conversion Cycle.
- Added `saas-metrics` and `financial-health` orchestrators.
- Added `monthly-business-review` workflow.
- Added machine-readable `registry/skills.json`.
- Added deterministic metric calculator.
- Added structural validator and eval suite.
- Added GitHub Actions quality gate.
