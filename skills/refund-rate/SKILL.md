---
name: refund-rate
description: Calculate ecommerce refund rate by orders or revenue. Use when the user wants to understand how refunds affect sales quality and profitability.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# refund-rate

## Objective

Provide a deterministic ecommerce calculation for funnel, basket, retention, or profitability analysis.

## Inputs

- refunded orders or refunded revenue
- orders or revenue
- definition

Never invent missing inputs.

## Formula

- `Order Refund Rate (%) = Refunded Orders / Orders × 100`
- `Revenue Refund Rate (%) = Refunded Revenue / Revenue × 100`

## Workflow

1. Confirm period and denominator definitions.
2. Validate input compatibility.
3. Calculate using full precision.
4. Round only for presentation.
5. Interpret in ecommerce context.
6. State material limitations.

## Guardrails

- State which definition is used.
- Use compatible periods and cohorts.
- Do not mix refunds and returns unless explicitly intended.

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
- `promotion-analysis`
- `gross-margin`
