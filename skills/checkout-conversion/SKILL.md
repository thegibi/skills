---
name: checkout-conversion
description: Calculate checkout conversion rate from checkout starts to completed purchases. Use when the user wants to diagnose checkout efficiency.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# checkout-conversion

## Objective

Provide a deterministic ecommerce calculation for funnel, basket, retention, or profitability analysis.

## Inputs

- purchases
- checkout starts

Never invent missing inputs.

## Formula

- `Checkout Conversion (%) = Purchases / Checkout Starts × 100`

## Workflow

1. Confirm period and denominator definitions.
2. Validate input compatibility.
3. Calculate using full precision.
4. Round only for presentation.
5. Interpret in ecommerce context.
6. State material limitations.

## Guardrails

- Do not calculate when checkout starts are zero.
- Keep purchase and checkout event definitions consistent.

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
- `cart-abandonment-rate`
