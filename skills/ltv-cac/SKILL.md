---
name: ltv-cac
description: Calculate and interpret the LTV:CAC ratio. Use when the user wants to compare customer lifetime value with acquisition cost or evaluate acquisition unit economics.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# ltv-cac

## Objective

Compare lifetime customer value with the cost to acquire that customer.

## Inputs

- LTV
- CAC

Ask only for inputs required to answer the user's question. Never invent missing values.

## Formula

- `LTV:CAC = LTV / CAC`

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

- Do not calculate when CAC is zero.
- The ratio inherits all assumptions and weaknesses in the LTV and CAC calculations.
- Do not use a generic benchmark as an absolute rule.

## Output

Return:

- LTV:CAC ratio
- underlying LTV and CAC
- assumption warnings
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
