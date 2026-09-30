---
name: cac
description: Calculate and interpret Customer Acquisition Cost (CAC). Use when the user wants to know how much it costs to acquire a new customer, compare acquisition channels, or diagnose acquisition efficiency.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# cac

## Objective

Measure acquisition cost per new customer.

## Inputs

- marketing acquisition costs
- sales acquisition costs
- new customers acquired
- period or cohort
- channel when segmented

Ask only for inputs required to answer the user's question. Never invent missing values.

## Formula

- `CAC = Total Acquisition Cost / New Customers Acquired`

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

- Do not divide spend from one period by customers from an incompatible period when the sales cycle is long.
- Include acquisition-related costs consistently.
- Interpret CAC with margin, retention, LTV and payback when available.

## Output

Return:

- CAC
- cost scope used
- period/cohort
- interpretation
- recommended segmentation

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
