---
name: gross-profit-per-order
description: Calculate ecommerce gross profit per order. Use when comparing product mix, promotions, channels, or customer segments based on profit per transaction.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# gross-profit-per-order

## Objective

Provide a deterministic ecommerce calculation for funnel, basket, retention, or profitability analysis.

## Inputs

- gross profit
- orders

Never invent missing inputs.

## Formula

- `Gross Profit per Order = Gross Profit / Orders`

## Workflow

1. Confirm period and denominator definitions.
2. Validate input compatibility.
3. Calculate using full precision.
4. Round only for presentation.
5. Interpret in ecommerce context.
6. State material limitations.

## Guardrails

- Use a consistent gross profit definition.
- Do not calculate when orders are zero.

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
- `gross-margin`
- `product-performance`
