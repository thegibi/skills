---
name: burn-rate
description: Calculate Gross Burn and Net Burn Rate. Use when the user asks how much cash a company is consuming per month, wants to analyze cash burn, or needs an input for runway.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# burn-rate

## Objective

Measure monthly cash consumption.

## Inputs

- cash outflows
- cash inflows
- period

Ask only for inputs required to answer the user's question. Never invent missing values.

## Formula

- `Gross Burn = Cash Outflows`
- `Net Burn = Cash Outflows - Cash Inflows`

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

- Use actual cash movements.
- Do not substitute accounting expenses for cash outflows without reconciliation.
- Normalize to a monthly basis when used with runway.

## Output

Return:

- gross burn
- net burn
- time basis
- trend notes
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
