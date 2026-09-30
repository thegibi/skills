---
name: grr
description: Calculate and interpret Gross Revenue Retention (GRR). Use when the user wants to measure recurring revenue retained from the opening customer base excluding expansion revenue, compare GRR with NRR, or diagnose revenue leakage.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# grr

## Objective

Measure how much recurring revenue from the opening base remains after churn and contraction, without allowing expansion to hide losses.

## Inputs

- Beginning MRR from the existing customer base
- Contraction MRR
- Churned MRR
- period

Never invent missing inputs.

## Formula

- `GRR (%) = (Beginning MRR - Contraction MRR - Churned MRR) / Beginning MRR × 100`

## Workflow

1. Confirm period, currency, units, and definitions.
2. Validate input compatibility.
3. Calculate using full precision.
4. Round only for presentation.
5. Explain the business meaning of the result.
6. State assumptions and material limitations.
7. Suggest a related metric only when it would materially improve the diagnosis.

## Guardrails

- Exclude New MRR.
- Exclude Expansion MRR.
- Do not calculate when Beginning MRR is zero.
- Use only for recurring-revenue models.

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
- `churn`
- `retention-rate`
