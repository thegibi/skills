---
name: ebitda
description: Calculate and interpret EBITDA and EBITDA Margin. Use when the user asks for operating profitability before interest, income taxes, depreciation and amortization.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# ebitda

## Objective

Measure operating earnings before financing, income taxes, depreciation and amortization.

## Inputs

- net income
- interest
- income taxes
- depreciation
- amortization
- net revenue for margin

Ask only for inputs required to answer the user's question. Never invent missing values.

## Formula

- `EBITDA = Net Income + Interest + Income Taxes + Depreciation + Amortization`
- `EBITDA Margin (%) = EBITDA / Net Revenue × 100`

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

- Do not add every operating tax indiscriminately.
- EBITDA is not cash flow.
- List any adjusted-EBITDA adjustments explicitly.
- Do not calculate margin when net revenue is zero.

## Output

Return:

- EBITDA
- EBITDA margin when possible
- adjustments if any
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
