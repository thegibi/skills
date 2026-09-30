---
name: arpu
description: Calculate and interpret Average Revenue Per User or Customer (ARPU/ARPC). Use when the user asks for average recurring or total revenue per active customer/user for a defined period.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# arpu

## Objective

Measure average revenue generated per active user or customer.

## Inputs

- revenue for the period
- active users or customers
- period
- definition of active

Ask only for inputs required to answer the user's question. Never invent missing values.

## Formula

- `ARPU = Revenue / Active Users`
- `ARPC = Revenue / Active Customers`

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

- State whether the denominator is users or customers.
- Use a consistent active definition.
- Do not confuse ARPU with AOV.

## Output

Return:

- ARPU or ARPC
- denominator definition
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
