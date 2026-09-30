---
name: revenue-growth
description: Calculate and interpret revenue growth. Use when the user asks for month-over-month, quarter-over-quarter, year-over-year, MRR growth, ARR growth, or period-over-period revenue change.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# revenue-growth

## Objective

Measure absolute and percentage change in revenue between comparable periods.

## Inputs

- current-period revenue
- previous comparable-period revenue
- period definition

Never invent missing inputs.

## Formula

- `Absolute Growth = Current Revenue - Previous Revenue`
- `Growth (%) = (Current Revenue - Previous Revenue) / Previous Revenue × 100`

## Workflow

1. Confirm period, currency, units, and definitions.
2. Validate input compatibility.
3. Calculate using full precision.
4. Round only for presentation.
5. Explain the business meaning of the result.
6. State assumptions and material limitations.
7. Suggest a related metric only when it would materially improve the diagnosis.

## Guardrails

- Do not calculate percentage growth when previous revenue is zero; report the absolute change and explain the undefined percentage.
- Compare like-for-like periods.
- Separate recurring and non-recurring revenue when material.

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

- `mrr`
- `arr`
- `rule-of-40`
