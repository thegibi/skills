---
name: financial-health
description: Assess overall financial health using profitability, margins, cash burn, runway, break-even, working capital, customer concentration, and growth metrics. Use when the user asks whether a business is financially healthy, sustainable, efficient, or at risk.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# Financial Health

## Objective

Build a decision-oriented view of business financial health by combining operating performance, liquidity, efficiency, and concentration risk.

## Metric map

### Profitability
- `gross-margin`
- `contribution-margin`
- `ebitda`
- `break-even`

### Liquidity
- `burn-rate`
- `runway`
- `cash-conversion-cycle`

### Growth
- `revenue-growth`
- `roi`

### Customer economics
- `cac`
- `ltv`
- `ltv-cac`
- `cac-payback`

### Risk concentration
- `customer-concentration`

## Workflow

1. Read `.agents/business.md` if available.
2. Identify whether the main question is profitability, liquidity, growth, efficiency, or risk.
3. Delegate calculations to atomic metric skills.
4. Compare periods and identify trend direction.
5. Reconcile accounting performance with cash performance.
6. Identify the primary financial constraint.
7. Prioritize no more than three actions.

## Output

### Executive summary
### Profitability
### Liquidity
### Growth efficiency
### Customer/unit economics
### Risk concentration
### Primary constraint
### Top actions
### Missing data

Do not call a company healthy or unhealthy based on one metric.
