---
name: retention-rate
description: Calculate and interpret customer retention rate. Use when the user asks what percentage of an opening customer base remained through a period or wants a retention complement to customer churn.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# retention-rate

## Objective

Measure the share of the opening customer base retained through a period.

## Inputs

- customers at start
- customers lost from that starting base
- period
- retention definition

Ask only for inputs required to answer the user's question. Never invent missing values.

## Formula

- `Retention Rate (%) = (Customers at Start - Customers Lost) / Customers at Start × 100`

Show the formula and substituted values when performing a calculation.

## Workflow

1. Confirm the period, unit, currency, and metric definitions when relevant.
2. Validate that the inputs are compatible.
3. Calculate deterministically.
4. Round only at the final presentation step unless the user requests otherwise.
5. Explain what the result means in the context of the business.
6. State assumptions, limitations, and material missing data.
7. When useful, suggest related metrics that would materially improve the diagnosis.

## Guardrails

- Do not count newly acquired customers as retained opening customers.
- Define pauses, reactivations and inactive customers consistently.
- Do not calculate when starting customers are zero.

## Output

Return:

- retention percentage
- definition
- period
- interpretation

Prefer a concise structure:

```text
Result:
Formula:
Calculation:
Interpretation:
Assumptions / caveats:
Related metric to inspect next:
```

## Shared business context

If `.agents/business.md` exists and the interpretation depends on business model, pricing, customers, costs, or goals, read it before interpreting the result.

## Related skills

Use related atomic metric skills rather than duplicating their formulas.
