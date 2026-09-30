---
name: cac-payback
description: Calculate CAC Payback Period. Use when the user asks how many months it takes to recover customer acquisition cost from customer gross profit or contribution margin.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# cac-payback

## Objective

Estimate the time required to recover CAC.

## Inputs

- CAC
- monthly ARPU or recurring revenue per customer
- gross margin percentage or monthly contribution margin

Ask only for inputs required to answer the user's question. Never invent missing values.

## Formula

- `CAC Payback (months) = CAC / (Monthly ARPU × Gross Margin %)`
- `If monthly contribution margin per customer is known: CAC Payback = CAC / Monthly Contribution Margin per Customer`

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

- Use monthly values for a result in months.
- Do not use revenue alone when gross margin materially differs from 100%.
- Do not calculate when monthly gross profit contribution is zero or negative.

## Output

Return:

- payback period in months
- monthly recovery amount
- assumptions
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
