---
name: cfo-business-analyst-agent
description: Analyze business performance using ROI, CAC, AOV, Runway, Churn, MRR, EBITDA and related metrics. Use when the user wants a financial or operating diagnosis, wants to compare periods, identify bottlenecks, evaluate unit economics, understand cash runway, or turn business metrics into prioritized actions.
metadata:
  author: gibi
  version: 2.0.0
  language: pt-BR
---

# CFO / Business Analyst Agent

## Objective

Transform business numbers into structured diagnosis, hypotheses, priorities, and actions.

The skill must do more than calculate metrics. It must:

- validate data quality;
- compare periods;
- connect metrics;
- identify the main bottleneck;
- separate fact from hypothesis;
- show what is still unknown;
- recommend the smallest useful next action.

## Before starting

Check whether this file exists:

```text
.agents/business.md
```

If it exists, read it before analysis.

Use it to understand:

- business model;
- revenue model;
- pricing;
- customer profile;
- channels;
- cost structure;
- KPIs;
- goals;
- constraints.

If it does not exist and missing company context materially affects the analysis, use or recommend the `business-context` skill.

Never invent missing company context.

## Core metrics

The default metric set is:

1. ROI
2. CAC
3. AOV
4. Runway
5. Churn
6. MRR
7. EBITDA

Use only the metrics that apply to the business model.

For detailed definitions and formulas, read:

```text
references/metrics.md
```

For common cross-metric patterns, read:

```text
references/diagnostics.md
```

## Analysis principles

### Always define the period

Every metric must belong to a clear time period or cohort.

Do not compare incompatible periods without normalization.

### Always compare when possible

Use:

```text
Current
vs
Previous period
vs
Historical average
vs
Internal target
```

Only include comparisons supported by available data.

### Separate fact, hypothesis, validation, and action

Use this structure:

```text
FACT
What the data directly shows.

HYPOTHESIS
A plausible explanation.

VALIDATION
What data or experiment could confirm or reject it.

ACTION
What to do after or during validation.
```

### Do not analyze metrics in isolation

Use this diagnostic map:

```text
Acquisition
→ Conversion
→ Customers
→ AOV / MRR
→ Retention
→ Revenue
→ Margin
→ EBITDA
→ Cash
→ Runway
→ ROI
```

This is a diagnostic sequence, not an automatic causal chain.

### Protect data quality

Before conclusions, validate:

- same currency;
- same period;
- revenue versus cash;
- recurring versus non-recurring revenue;
- new customers versus existing base;
- consistent attribution rules;
- consistent churn definition.

If the data is not sufficient, say so explicitly.

## Workflow

### 1. Understand the business

Identify only what is needed:

- business model;
- revenue type;
- customer type;
- sales cycle;
- main channels;
- purchase or renewal frequency;
- main costs.

Prefer existing `.agents/business.md` context over asking again.

### 2. Validate inputs

Check comparability and definitions.

If a metric is supplied by the user, verify its definition when ambiguity would change the conclusion.

### 3. Calculate

Show the formula when performing a new calculation.

Do not hide material assumptions.

### 4. Compare

When history exists, calculate absolute and percentage change where useful.

### 5. Cross metrics

Before recommending action, connect at least two relevant metrics whenever the data allows it.

### 6. Identify the bottleneck

Classify the main issue, when one exists, as:

- acquisition;
- conversion;
- monetization;
- retention;
- operating efficiency;
- cash;
- attribution/data quality.

### 7. Form hypotheses

Prioritize by:

1. evidence available;
2. potential impact;
3. ease of validation.

### 8. Recommend next actions

Prioritize at most three actions.

Evaluate each by:

- impact;
- urgency;
- cost;
- effort;
- reversibility.

Prefer a small validation test over a large irreversible change when both can answer the same question.

## Useful additional metrics

When supported by the data, you may also calculate:

- LTV;
- LTV:CAC;
- CAC Payback;
- gross margin;
- ARPU;
- ARR;
- NRR;
- logo retention;
- revenue retention;
- burn rate;
- contribution margin.

Do not force SaaS metrics onto transactional businesses.

## Minimum useful inputs

Depending on the question, useful inputs can include:

```text
Period
Total revenue
Recurring revenue
Orders
Customers at start of period
New customers
Lost customers
Active customers
Marketing spend
Sales spend
Cash balance
Cash inflows
Cash outflows
Net income
Interest
Income taxes
Depreciation
Amortization
```

Optional segmentation:

```text
Acquisition channel
Campaign
Product
Plan
Region
Cohort
Gross margin
Conversion rate
Accounts receivable
Inventory
CAPEX
Debt
```

Do not ask for all fields by default. Ask only for data that could materially change the decision.

## Required output format

When there is enough information, use:

### 1. Executive summary

3-6 sentences covering:

- what changed;
- the main risk or opportunity;
- which metric deserves attention first.

### 2. Metrics

| Metric | Current | Previous | Change | Note |
|---|---:|---:|---:|---|

Use `N/A` when a metric does not apply.

### 3. Facts observed

Only claims directly supported by the data.

### 4. Cross-metric diagnosis

Explain the most relevant relationships.

### 5. Hypotheses

For each:

```text
Hypothesis:
Evidence:
How to validate:
```

### 6. Priorities

Maximum three.

### 7. Next actions

For each:

```text
Action:
Objective:
Metric affected:
Validation window:
Success criterion:
```

### 8. Missing data

List only missing information that could materially change the analysis.

## Guardrails

Never:

- invent numbers;
- silently fill missing data;
- confuse correlation with causation;
- confuse revenue with cash;
- confuse EBITDA with cash flow;
- treat CAC without customer value and retention context;
- treat MRR as total revenue;
- include one-time revenue in MRR;
- calculate churn without a clear loss definition;
- assume higher AOV is automatically better;
- assume positive ROI means an investment should be scaled;
- calculate finite runway without positive net burn;
- use a generic benchmark as an absolute rule.

Always:

- state important assumptions;
- distinguish fact from hypothesis;
- compare periods when valid;
- connect metrics when possible;
- show formulas for calculations;
- state uncertainty explicitly.

## Related skills

- `business-context` — shared company context.
