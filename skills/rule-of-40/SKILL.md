---
name: rule-of-40
description: Calculate and interpret the Rule of 40 for software or SaaS companies. Use when the user wants to combine revenue growth and profitability margin into one operating tradeoff metric.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# rule-of-40

## Objective

Combine a defined annual growth rate with a defined profitability margin.

## Inputs

- annual revenue or ARR growth percentage
- profitability margin percentage, commonly EBITDA margin or free-cash-flow margin
- definition of each component

Never invent missing inputs.

## Formula

- `Rule of 40 = Growth Rate (%) + Profitability Margin (%)`

## Workflow

1. Confirm period, currency, units, and definitions.
2. Validate input compatibility.
3. Calculate using full precision.
4. Round only for presentation.
5. Explain the business meaning of the result.
6. State assumptions and material limitations.
7. Suggest a related metric only when it would materially improve the diagnosis.

## Guardrails

- Always state which revenue growth definition and which profitability margin are used.
- Do not mix incompatible periods.
- Treat 40 as a heuristic, not a universal pass/fail threshold.
- Do not use for businesses where the growth/profitability tradeoff is not meaningful.

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

- `revenue-growth`
- `ebitda`
- `arr`
- `mrr`
