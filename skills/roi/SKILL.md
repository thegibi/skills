---
name: roi
description: Calculate and interpret Return on Investment (ROI). Use when the user wants to compare return against investment cost, evaluate campaign or project efficiency, or calculate ROI percentage.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# roi

## Objective

Measure the return generated relative to the cost of an investment.

## Inputs

- investment cost
- return attributable to the investment
- analysis period
- attribution rule when relevant

Ask only for inputs required to answer the user's question. Never invent missing values.

## Formula

- `Net Return = Return - Investment Cost`
- `ROI (%) = (Net Return / Investment Cost) × 100`

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

- Do not calculate when investment cost is zero.
- Do not assume attribution is valid; flag weak attribution.
- Positive ROI does not automatically mean the investment should be scaled.

## Output

Return:

- ROI percentage
- absolute net return
- assumptions
- interpretation
- missing data or attribution risks

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
