---
name: repeat-purchase-rate
description: Calculate ecommerce repeat purchase rate. Use when the user wants to know what percentage of customers purchase more than once within a defined observation window.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# repeat-purchase-rate

## Objective

Provide a deterministic ecommerce calculation for funnel, basket, retention, or profitability analysis.

## Inputs

- repeat customers
- eligible customers or customers in cohort
- observation window

Never invent missing inputs.

## Formula

- `Repeat Purchase Rate (%) = Repeat Customers / Eligible Customers × 100`

## Workflow

1. Confirm period and denominator definitions.
2. Validate input compatibility.
3. Calculate using full precision.
4. Round only for presentation.
5. Interpret in ecommerce context.
6. State material limitations.

## Guardrails

- Define the observation window.
- Do not compare cohorts with different maturity.
- State what qualifies as a repeat purchase.

## Output

```text
Result:
Formula:
Calculation:
Interpretation:
Assumptions / caveats:
```

## Related skills

- `ecommerce-growth`
- `ltv`
- `purchase-frequency`
