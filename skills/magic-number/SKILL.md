---
name: magic-number
description: Calculate and interpret the SaaS Magic Number. Use when the user wants to evaluate sales and marketing efficiency relative to recurring revenue growth, especially quarter-over-quarter.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# magic-number

## Objective

Estimate how efficiently sales and marketing spend produces incremental recurring revenue.

## Inputs

- Current-quarter recurring revenue or ARR-equivalent
- Previous-quarter recurring revenue or ARR-equivalent
- Previous-quarter sales and marketing spend

Never invent missing inputs.

## Formula

- `Common quarterly form: Magic Number = ((Current Quarter Revenue - Previous Quarter Revenue) × 4) / Previous Quarter Sales & Marketing Spend`

## Workflow

1. Confirm period, currency, units, and definitions.
2. Validate input compatibility.
3. Calculate using full precision.
4. Round only for presentation.
5. Explain the business meaning of the result.
6. State assumptions and material limitations.
7. Suggest a related metric only when it would materially improve the diagnosis.

## Guardrails

- State the exact convention used because Magic Number definitions vary.
- Use consistent recurring revenue definitions and quarter boundaries.
- Do not calculate when prior-period sales and marketing spend is zero.
- Do not infer profitability from Magic Number alone.

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
- `cac`
- `cac-payback`
