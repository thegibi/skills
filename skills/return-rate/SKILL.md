---
name: return-rate
description: Calculate ecommerce product return rate. Use when the user wants to understand product returns by units or orders.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# return-rate

## Objective

Provide a deterministic ecommerce calculation for funnel, basket, retention, or profitability analysis.

## Inputs

- returned units or orders
- sold units or orders
- definition

Never invent missing inputs.

## Formula

- `Return Rate (%) = Returns / Sales Base × 100`

## Workflow

1. Confirm period and denominator definitions.
2. Validate input compatibility.
3. Calculate using full precision.
4. Round only for presentation.
5. Interpret in ecommerce context.
6. State material limitations.

## Guardrails

- State whether units or orders are used.
- Use a sufficient lag window for returns.
- Do not compare immature cohorts with mature cohorts.

## Output

```text
Result:
Formula:
Calculation:
Interpretation:
Assumptions / caveats:
```

## Related skills

- `product-performance`
- `gross-margin`
