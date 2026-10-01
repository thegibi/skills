---
name: purchase-conversion-rate
description: Calculate ecommerce purchase conversion rate from sessions or visitors to completed purchases. Use when the user wants to measure store conversion efficiency.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# purchase-conversion-rate

## Objective

Provide a deterministic ecommerce calculation for funnel, basket, retention, or profitability analysis.

## Inputs

- purchases
- sessions or visitors
- period

Never invent missing inputs.

## Formula

- `Purchase Conversion Rate (%) = Purchases / Sessions × 100`

## Workflow

1. Confirm period and denominator definitions.
2. Validate input compatibility.
3. Calculate using full precision.
4. Round only for presentation.
5. Interpret in ecommerce context.
6. State material limitations.

## Guardrails

- State whether the denominator is sessions or unique visitors.
- Do not calculate when denominator is zero.
- Use consistent analytics definitions across periods.

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
- `conversion-rate`
- `aov`
