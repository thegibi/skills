---
name: ecommerce-growth
description: Orchestrate ecommerce growth analysis across acquisition channels, funnel conversion, product performance, checkout, AOV, gross margin, repeat purchase, LTV, promotions, attribution, and budget allocation. Use when the user wants to grow ecommerce revenue profitably or diagnose ecommerce performance.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# Ecommerce Growth

## Objective

Identify the highest-leverage path to profitable ecommerce growth.

## Core equation

```text
Revenue ≈ Traffic × Purchase Conversion Rate × AOV
```

Growth decisions must also consider:

- gross margin;
- CAC;
- gross profit per visitor;
- repeat purchase;
- LTV;
- refunds and returns;
- inventory and fulfillment capacity;
- cash constraints.

## Ecommerce dependencies

- `business-context`
- `channel-attribution`
- `channel-performance`
- `ecommerce-funnel`
- `product-performance`
- `aov`
- `purchase-conversion-rate`
- `revenue-per-visitor`
- `gross-profit-per-visitor`
- `gross-profit-per-order`
- `repeat-purchase-rate`
- `purchase-frequency`
- `discount-analysis`
- `promotion-analysis`
- `cac`
- `ltv`
- `gross-margin`
- `channel-budget-allocation`

## Workflow

1. Read business context.
2. Define the ecommerce growth target.
3. Diagnose acquisition quality.
4. Diagnose the ecommerce funnel.
5. Diagnose product performance and product mix.
6. Diagnose margin and promotion dependency.
7. Diagnose repeat purchase and customer value.
8. Check inventory, fulfillment, and cash constraints.
9. Select the primary growth constraint.
10. Create a 30/60/90-day action plan.

## Decision hierarchy

Prefer:

1. fix broken measurement;
2. fix major funnel leaks;
3. improve product economics;
4. improve repeat purchase;
5. scale acquisition;
6. expand into new channels.

Do not recommend more media spend when checkout, margin, or repeat-purchase economics are weak.

## Output

### Executive summary
### Revenue equation
### Funnel diagnosis
### Channel diagnosis
### Product diagnosis
### Margin diagnosis
### Repeat-purchase diagnosis
### Main constraint
### 30-day actions
### 60-day scale tests
### 90-day strategic bets

## Domain boundary

This skill is for ecommerce.

For recurring-subscription SaaS metrics such as MRR, ARR, NRR, GRR, Magic Number, and Rule of 40, use `saas-metrics` instead.
