---
name: gross-margin
description: Calculate and interpret Gross Margin. Use when the user asks for gross profit, gross margin percentage, product economics, or wants to understand how direct costs affect revenue quality.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# gross-margin

## Objective

Measure revenue remaining after direct cost of goods or services.

## Inputs

- net revenue
- COGS or direct costs

Ask only for inputs required to answer the user's question. Never invent missing values.

## Formula

- `Gross Profit = Net Revenue - COGS`
- `Gross Margin (%) = Gross Profit / Net Revenue × 100`

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

- Define which costs are included in COGS consistently.
- Do not calculate percentage when net revenue is zero.
- Do not confuse gross margin with EBITDA margin or contribution margin.

## Output

Return:

- gross profit
- gross margin percentage
- cost definition
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
