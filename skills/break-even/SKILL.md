---
name: break-even
description: Calculate break-even revenue or units. Use when the user asks how much must be sold to cover fixed costs, when a business becomes economically neutral, or wants contribution-margin-based break-even analysis.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# break-even

## Objective

Estimate the sales level required for contribution margin to cover fixed costs.

## Inputs

- fixed costs
- unit selling price and unit variable cost, or contribution margin percentage

Never invent missing inputs.

## Formula

- `Break-even Units = Fixed Costs / Contribution Margin per Unit`
- `Break-even Revenue = Fixed Costs / Contribution Margin %`

## Workflow

1. Confirm period, currency, units, and definitions.
2. Validate input compatibility.
3. Calculate using full precision.
4. Round only for presentation.
5. Explain the business meaning of the result.
6. State assumptions and material limitations.
7. Suggest a related metric only when it would materially improve the diagnosis.

## Guardrails

- Do not mix fixed and variable costs.
- Do not calculate when contribution margin is zero or negative.
- State whether the result is units or revenue and the period used.

## Output

```text
Result:
Formula:
Calculation:
Interpretation:
Assumptions / caveats:
Related metric to inspect next:
```

## Shared business context

If `.agents/business.md` exists and interpretation depends on business model, read it before drawing conclusions.

## Related skills

- `contribution-margin`
- `gross-margin`
- `ebitda`
