---
name: mrr
description: Calculate and reconcile Monthly Recurring Revenue (MRR). Use when the user asks about monthly recurring revenue, New MRR, Expansion MRR, Contraction MRR, Churned MRR, or SaaS recurring revenue movement.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# mrr

## Objective

Measure normalized recurring monthly revenue and explain its movement.

## Inputs

- active recurring contracts or subscriptions
- monthly normalized recurring amounts
- New MRR
- Expansion MRR
- Contraction MRR
- Churned MRR

Ask only for inputs required to answer the user's question. Never invent missing values.

## Formula

- `MRR = Sum of normalized monthly recurring revenue`
- `Ending MRR = Beginning MRR + New MRR + Expansion MRR - Contraction MRR - Churned MRR`
- `MRR Growth (%) = (Current MRR - Previous MRR) / Previous MRR × 100`

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

- Exclude one-time setup, implementation and other non-recurring revenue.
- Normalize annual contracts to monthly equivalents.
- Do not use MRR for non-recurring business models.

## Output

Return:

- MRR
- MRR movement
- MRR growth
- recurring revenue exclusions
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
