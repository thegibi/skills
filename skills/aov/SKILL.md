---
name: aov
description: Calculate and interpret Average Order Value (AOV). Use when the user asks for ticket médio, average order value, monetization per order, or wants to understand changes in revenue per order.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# aov

## Objective

Measure average revenue generated per order.

## Inputs

- total revenue
- number of orders
- period

Ask only for inputs required to answer the user's question. Never invent missing values.

## Formula

- `AOV = Total Revenue / Number of Orders`

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

- Orders are not customers.
- Do not calculate when order count is zero.
- Higher AOV is not automatically better; inspect margin, discounts and conversion.

## Output

Return:

- AOV
- period
- drivers that may explain change
- relevant cross-checks

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
