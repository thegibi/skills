---
name: cart-abandonment-rate
description: Calculate ecommerce cart abandonment rate. Use when the user wants to measure the share of carts or checkout starts that do not become purchases.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# cart-abandonment-rate

## Objective

Provide a deterministic ecommerce calculation for funnel, basket, retention, or profitability analysis.

## Inputs

- cart or checkout starts
- completed purchases
- stage definition

Never invent missing inputs.

## Formula

- `Abandonment Rate (%) = (Starts - Purchases) / Starts × 100`

## Workflow

1. Confirm period and denominator definitions.
2. Validate input compatibility.
3. Calculate using full precision.
4. Round only for presentation.
5. Interpret in ecommerce context.
6. State material limitations.

## Guardrails

- State whether this is cart abandonment or checkout abandonment.
- Do not calculate when starts are zero.
- Use the same cohort/window for starts and purchases.

## Output

```text
Result:
Formula:
Calculation:
Interpretation:
Assumptions / caveats:
```

## Related skills

- `checkout-conversion`
- `ecommerce-funnel`
