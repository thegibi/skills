---
name: items-per-order
description: Calculate average items per ecommerce order. Use when the user wants to understand basket depth, bundles, or cross-sell performance.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# items-per-order

## Objective

Provide a deterministic ecommerce calculation for funnel, basket, retention, or profitability analysis.

## Inputs

- units sold
- orders

Never invent missing inputs.

## Formula

- `Items per Order = Units Sold / Orders`

## Workflow

1. Confirm period and denominator definitions.
2. Validate input compatibility.
3. Calculate using full precision.
4. Round only for presentation.
5. Interpret in ecommerce context.
6. State material limitations.

## Guardrails

- Do not calculate when orders are zero.
- Use fulfilled/ordered units consistently.

## Output

```text
Result:
Formula:
Calculation:
Interpretation:
Assumptions / caveats:
```

## Related skills

- `aov`
- `product-performance`
- `promotion-analysis`
