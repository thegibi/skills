---
name: saas-metrics
description: Orchestrate SaaS metric analysis across MRR, ARR, NRR, GRR, churn, retention, ARPU, CAC, LTV, LTV:CAC, CAC Payback, Quick Ratio, Magic Number, Rule of 40, and revenue growth. Use for SaaS KPI reviews, unit economics, recurring revenue quality, and growth-efficiency analysis.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# SaaS Metrics

## Objective

Coordinate the right SaaS metric skills for the user's question without duplicating their formulas.

## Before starting

Read `.agents/business.md` when available.

Confirm that the business actually has recurring revenue before applying SaaS-specific metrics.

## Metric groups

### Recurring revenue
- `mrr`
- `arr`
- `revenue-growth`

### Retention
- `churn`
- `retention-rate`
- `nrr`
- `grr`

### Unit economics
- `cac`
- `arpu`
- `ltv`
- `ltv-cac`
- `cac-payback`
- `gross-margin`
- `contribution-margin`

### Growth efficiency
- `quick-ratio`
- `magic-number`
- `rule-of-40`

## Workflow

1. Identify the user's decision question.
2. Select only the metrics that can materially answer it.
3. Validate periods and recurring-revenue definitions.
4. Delegate calculations to the atomic metric skills.
5. Compare current vs previous period where valid.
6. Cross-check revenue growth with retention and acquisition efficiency.
7. Separate facts, hypotheses, and actions.

## Common analysis paths

### Revenue quality
```text
MRR → ARR → Revenue Growth → NRR → GRR
```

### Retention quality
```text
Churn → Retention Rate → NRR → GRR
```

### Unit economics
```text
CAC → ARPU → Gross Margin → LTV → LTV:CAC → CAC Payback
```

### Growth efficiency
```text
MRR Growth → Quick Ratio → Magic Number → Rule of 40
```

## Output

Return:

1. Executive summary
2. Metrics used
3. Facts
4. Cross-metric diagnosis
5. Risks/opportunities
6. Top 3 next actions
7. Missing data

Do not force every SaaS metric into every analysis.
