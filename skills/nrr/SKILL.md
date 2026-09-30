---
name: nrr
description: Calculate and interpret Net Revenue Retention (NRR). Use when the user asks for net dollar retention, revenue retention from an existing customer base, expansion versus churn, or SaaS retention quality.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# nrr

## Objective

Measure how recurring revenue from the opening customer base changes after expansion, contraction and churn.

## Inputs

- Beginning MRR from existing customers
- Expansion MRR
- Contraction MRR
- Churned MRR
- period

Ask only for inputs required to answer the user's question. Never invent missing values.

## Formula

- `NRR (%) = (Beginning MRR + Expansion MRR - Contraction MRR - Churned MRR) / Beginning MRR × 100`

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

- Exclude New MRR from customers acquired during the period.
- Do not calculate when Beginning MRR is zero.
- Use only for recurring-revenue models.

## Output

Return:

- NRR percentage
- base revenue bridge
- expansion contribution
- contraction/churn drag
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
