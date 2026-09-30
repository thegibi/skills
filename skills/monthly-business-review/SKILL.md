---
name: monthly-business-review
description: Run a structured monthly business review using business context, SaaS or operating metrics, financial health, trends, risks, priorities, and next actions. Use for monthly KPI reviews, founder reviews, board-style operating reviews, or recurring management analysis.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# Monthly Business Review

## Objective

Turn one month of operating data into a concise management review focused on what changed, why it matters, and what to do next.

## Dependencies

Use:
- `business-context`
- `saas-metrics` when recurring revenue applies
- `financial-health`
- `cfo-business-analyst-agent`

## Workflow

### 1. Load context

Read `.agents/business.md` if available.

### 2. Establish comparison

Prefer:
- current month;
- previous month;
- same month last year when available;
- internal target.

### 3. Review growth

Use relevant metrics such as:
- revenue growth;
- MRR/ARR;
- AOV;
- customer growth.

### 4. Review retention

For recurring models:
- churn;
- retention;
- NRR;
- GRR.

### 5. Review acquisition

- CAC;
- channel-level CAC;
- LTV;
- LTV:CAC;
- CAC Payback.

### 6. Review profitability

- gross margin;
- contribution margin;
- EBITDA;
- break-even.

### 7. Review cash

- burn rate;
- runway;
- cash conversion cycle.

### 8. Review risk

- customer concentration;
- data quality;
- unusual one-offs;
- material operational dependencies.

### 9. Decide priorities

Choose at most three priorities based on:
- evidence;
- expected impact;
- urgency;
- reversibility.

## Output template

# Monthly Business Review — <period>

## Executive Summary

## Scorecard

| Area | Metric | Current | Previous | Change | Target | Note |
|---|---|---:|---:|---:|---:|---|

## What improved

## What deteriorated

## Cross-metric diagnosis

## Risks

## Opportunities

## Top 3 priorities

## Actions for next month

## Missing / unreliable data

Do not fill missing metrics with estimates unless the user explicitly asks for scenarios.
