---
name: purchase-frequency
description: Calculate average ecommerce purchase frequency. Use when the user wants to know how many orders each customer places during a defined period.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# purchase-frequency

## Objective

Provide a deterministic ecommerce calculation for funnel, basket, retention, or profitability analysis.

## Inputs

- orders
- unique customers
- period

Never invent missing inputs.

## Formula

- `Purchase Frequency = Orders / Unique Customers`

## Workflow

1. Confirm period and denominator definitions.
2. Validate input compatibility.
3. Calculate using full precision.
4. Round only for presentation.
5. Interpret in ecommerce context.
6. State material limitations.

## Guardrails

- Do not calculate when customer count is zero.
- Use a consistent period.
- Do not confuse purchase frequency with repeat purchase rate.

## Output

```text
Result:
Formula:
Calculation:
Interpretation:
Assumptions / caveats:
```

## Related skills

- `repeat-purchase-rate`
- `ltv`
- `aov`
