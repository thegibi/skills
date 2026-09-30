---
name: runway
description: Calculate and interpret cash runway. Use when the user wants to know how many months a company can operate before exhausting available cash or wants to analyze cash survival under current burn.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# runway

## Objective

Estimate how long current cash lasts at the observed net burn rate.

## Inputs

- available cash
- cash inflows
- cash outflows
- monthly period or normalized monthly burn

Ask only for inputs required to answer the user's question. Never invent missing values.

## Formula

- `Net Burn = Cash Outflows - Cash Inflows`
- `Runway (months) = Available Cash / Monthly Net Burn`

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

- Only calculate finite runway when Net Burn is positive.
- Do not confuse EBITDA, profit, revenue or receivables with available cash.
- Prefer a 3-6 month average burn when volatility is material.

## Output

Return:

- net burn
- runway in months when applicable
- cash assumptions
- scenario notes

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
