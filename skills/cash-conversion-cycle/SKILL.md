---
name: cash-conversion-cycle
description: Calculate and interpret the Cash Conversion Cycle (CCC). Use when the user wants to understand working-capital timing across inventory, receivables, and payables.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# cash-conversion-cycle

## Objective

Estimate the number of days cash is tied up in the operating cycle.

## Inputs

- Days Inventory Outstanding (DIO)
- Days Sales Outstanding (DSO)
- Days Payables Outstanding (DPO)

Never invent missing inputs.

## Formula

- `Cash Conversion Cycle = DIO + DSO - DPO`

## Workflow

1. Confirm period, currency, units, and definitions.
2. Validate input compatibility.
3. Calculate using full precision.
4. Round only for presentation.
5. Explain the business meaning of the result.
6. State assumptions and material limitations.
7. Suggest a related metric only when it would materially improve the diagnosis.

## Guardrails

- Use compatible periods and accounting definitions.
- A negative CCC is not automatically good or bad; interpret by business model.
- Do not substitute cash runway for CCC.

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

- `runway`
- `burn-rate`
- `business-context`
