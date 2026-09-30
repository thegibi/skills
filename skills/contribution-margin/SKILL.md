---
name: contribution-margin
description: Calculate and interpret Contribution Margin. Use when the user asks how much revenue remains after variable costs, wants unit economics, break-even analysis inputs, or CAC payback based on contribution profit.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# contribution-margin

## Objective

Measure revenue remaining after variable costs to cover fixed costs and profit.

## Inputs

- revenue
- variable costs

Ask only for inputs required to answer the user's question. Never invent missing values.

## Formula

- `Contribution Margin = Revenue - Variable Costs`
- `Contribution Margin (%) = Contribution Margin / Revenue × 100`

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

- Define variable costs consistently.
- Do not mix fixed costs into variable costs without stating it.
- Do not confuse contribution margin with gross margin when cost definitions differ.

## Output

Return:

- contribution margin
- contribution margin percentage
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
