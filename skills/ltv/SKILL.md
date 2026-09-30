---
name: ltv
description: Calculate and interpret Customer Lifetime Value (LTV/CLV). Use when the user asks how much economic value a customer generates over their relationship, wants to compare LTV with CAC, or evaluate unit economics.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# ltv

## Objective

Estimate customer lifetime economic value using a formula appropriate to the business model.

## Inputs

- ARPU or revenue per customer
- gross margin when available
- customer churn or retention/lifetime
- time basis

Ask only for inputs required to answer the user's question. Never invent missing values.

## Formula

- `Simple recurring LTV = ARPU × Gross Margin % / Customer Churn Rate`
- `Alternative cohort LTV = Average contribution margin per customer × Average customer lifetime`

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

- Use compatible time bases for ARPU and churn.
- Do not use the simple churn formula when churn is unstable or the business is not subscription-like.
- Prefer realized cohort contribution margin when available.
- State the formula and assumptions explicitly.

## Output

Return:

- LTV estimate
- formula selected
- assumptions
- sensitivity or caveats
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
