---
name: churn
description: Calculate and interpret customer churn. Use when the user asks for churn rate, customer loss rate, cancellations, retention deterioration, or cohort loss analysis.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# churn

## Objective

Measure the percentage of the starting customer base lost during a period.

## Inputs

- customers at start of period
- customers lost during period
- definition of lost customer
- period

Ask only for inputs required to answer the user's question. Never invent missing values.

## Formula

- `Customer Churn (%) = Customers Lost / Customers at Start × 100`

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

- Define what counts as a lost customer before calculating.
- Do not use ending customers as the denominator.
- New customers do not cancel out churn from the opening base.

## Output

Return:

- customer churn percentage
- loss definition
- period
- segmentation ideas
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
