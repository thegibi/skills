---
name: customer-concentration
description: Calculate and interpret customer revenue concentration. Use when the user wants to know dependence on top customers, revenue concentration risk, top-1/top-5/top-10 share, or customer diversification.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# customer-concentration

## Objective

Measure how much total revenue depends on the largest customers.

## Inputs

- revenue by customer for a defined period
- total revenue for the same period

Never invent missing inputs.

## Formula

- `Top-N Concentration (%) = Revenue from Top N Customers / Total Revenue × 100`

## Workflow

1. Confirm period, currency, units, and definitions.
2. Validate input compatibility.
3. Calculate using full precision.
4. Round only for presentation.
5. Explain the business meaning of the result.
6. State assumptions and material limitations.
7. Suggest a related metric only when it would materially improve the diagnosis.

## Guardrails

- Use the same period for customer and total revenue.
- Do not infer risk tolerance without business context.
- When customer-level revenue is unavailable, do not fabricate concentration.

## Output

```text
Result:
Formula:
Calculation:
Interpretation:
Assumptions / caveats:
Related metric to inspect next:
```

## Shared business context

If `.agents/business.md` exists and interpretation depends on business model, read it before drawing conclusions.

## Related skills

- `revenue-growth`
- `business-context`
