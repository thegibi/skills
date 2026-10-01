---
name: cpl
description: Calculate Cost Per Lead (CPL). Use when the user wants to measure marketing spend per generated lead or compare lead acquisition cost across channels.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# cpl

## Objective

Provide a deterministic, narrowly scoped marketing or funnel calculation.

## Inputs

- spend
- leads

Never invent missing inputs.

## Formula

- `CPL = Spend / Leads`

## Workflow

1. Confirm period, currency, attribution, and stage definitions when relevant.
2. Validate numerator and denominator compatibility.
3. Calculate using full precision.
4. Round only for presentation.
5. Interpret the result in business context.
6. State assumptions and data-quality limitations.

## Guardrails

- Do not calculate when leads are zero.
- Do not use CPL alone to decide budget allocation; evaluate downstream lead quality.

## Output

```text
Result:
Formula:
Calculation:
Interpretation:
Assumptions / caveats:
```

## Related skills

- `cpql`
- `cac`
- `lead-source-quality`
