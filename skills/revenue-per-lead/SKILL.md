---
name: revenue-per-lead
description: Calculate Revenue per Lead. Use when the user wants to compare how much revenue each lead source or campaign generates on average.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# revenue-per-lead

## Objective

Provide a deterministic, narrowly scoped marketing or funnel calculation.

## Inputs

- attributed revenue
- leads

Never invent missing inputs.

## Formula

- `Revenue per Lead = Revenue / Leads`

## Workflow

1. Confirm period, currency, attribution, and stage definitions when relevant.
2. Validate numerator and denominator compatibility.
3. Calculate using full precision.
4. Round only for presentation.
5. Interpret the result in business context.
6. State assumptions and data-quality limitations.

## Guardrails

- Do not calculate when leads are zero.
- Use cohort-compatible revenue when sales cycles are long.
- State the attribution basis.

## Output

```text
Result:
Formula:
Calculation:
Interpretation:
Assumptions / caveats:
```

## Related skills

- `lead-source-quality`
- `channel-attribution`
