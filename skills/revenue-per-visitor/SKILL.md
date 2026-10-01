---
name: revenue-per-visitor
description: Calculate ecommerce revenue per visitor or session. Use when comparing traffic quality, landing pages, products, campaigns, or channels.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# revenue-per-visitor

## Objective

Provide a deterministic ecommerce calculation for funnel, basket, retention, or profitability analysis.

## Inputs

- revenue
- visitors or sessions
- denominator definition

Never invent missing inputs.

## Formula

- `Revenue per Visitor = Revenue / Visitors`

## Workflow

1. Confirm period and denominator definitions.
2. Validate input compatibility.
3. Calculate using full precision.
4. Round only for presentation.
5. Interpret in ecommerce context.
6. State material limitations.

## Guardrails

- State whether denominator is sessions or unique visitors.
- Use the same period and attribution basis.
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

- `purchase-conversion-rate`
- `aov`
- `channel-performance`
