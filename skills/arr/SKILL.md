---
name: arr
description: Calculate and interpret Annual Recurring Revenue (ARR). Use when the user asks for annualized recurring revenue, ARR growth, or wants to convert recurring monthly revenue into an annual run rate.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# arr

## Objective

Express recurring revenue on an annualized basis.

## Inputs

- MRR or normalized annual recurring contracts

Ask only for inputs required to answer the user's question. Never invent missing values.

## Formula

- `ARR = MRR × 12`

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

- Do not annualize one-time revenue.
- ARR is a run-rate metric, not necessarily recognized annual revenue.
- Use consistent recurring-revenue definitions with MRR.

## Output

Return:

- ARR
- source MRR or contract basis
- interpretation
- limitations

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
