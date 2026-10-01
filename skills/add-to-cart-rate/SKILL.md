---
name: add-to-cart-rate
description: Calculate ecommerce add-to-cart rate. Use when the user wants to measure how often product views or sessions result in items being added to cart.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# add-to-cart-rate

## Objective

Provide a deterministic ecommerce calculation for funnel, basket, retention, or profitability analysis.

## Inputs

- add-to-cart events
- product views or sessions
- denominator definition

Never invent missing inputs.

## Formula

- `Add-to-Cart Rate (%) = Add-to-Cart / Product Views × 100`

## Workflow

1. Confirm period and denominator definitions.
2. Validate input compatibility.
3. Calculate using full precision.
4. Round only for presentation.
5. Interpret in ecommerce context.
6. State material limitations.

## Guardrails

- State denominator explicitly.
- Do not mix event counts and unique users silently.
- Do not calculate when denominator is zero.

## Output

```text
Result:
Formula:
Calculation:
Interpretation:
Assumptions / caveats:
```

## Related skills

- `ecommerce-funnel`
- `product-performance`
- `conversion-rate`
