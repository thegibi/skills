---
name: quick-ratio
description: Calculate and interpret the SaaS Quick Ratio. Use when the user wants to compare recurring revenue gains against recurring revenue losses using New MRR, Expansion MRR, Contraction MRR, and Churned MRR.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# quick-ratio

## Objective

Compare recurring revenue added during a period with recurring revenue lost during that same period.

## Inputs

- New MRR
- Expansion MRR
- Contraction MRR
- Churned MRR
- period

Never invent missing inputs.

## Formula

- `SaaS Quick Ratio = (New MRR + Expansion MRR) / (Contraction MRR + Churned MRR)`

## Workflow

1. Confirm period, currency, units, and definitions.
2. Validate input compatibility.
3. Calculate using full precision.
4. Round only for presentation.
5. Explain the business meaning of the result.
6. State assumptions and material limitations.
7. Suggest a related metric only when it would materially improve the diagnosis.

## Guardrails

- Do not calculate a finite ratio when total losses are zero; report that no recurring revenue loss occurred in the denominator period.
- Use consistent periods and recurring-revenue definitions.
- Do not treat a benchmark as a universal rule.

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
- `nrr`
- `grr`
- `revenue-growth`
