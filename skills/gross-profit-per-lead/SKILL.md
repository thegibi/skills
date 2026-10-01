---
name: gross-profit-per-lead
description: Calculate Gross Profit per Lead. Use when the user wants to compare lead sources using downstream gross profit instead of revenue alone.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# gross-profit-per-lead

## Objective

Provide a deterministic, narrowly scoped marketing or funnel calculation.

## Inputs

- gross profit
- leads

Never invent missing inputs.

## Formula

- `Gross Profit per Lead = Gross Profit / Leads`

## Workflow

1. Confirm period, currency, attribution, and stage definitions when relevant.
2. Validate numerator and denominator compatibility.
3. Calculate using full precision.
4. Round only for presentation.
5. Interpret the result in business context.
6. State assumptions and data-quality limitations.

## Guardrails

- Do not calculate when leads are zero.
- Use a consistent gross profit definition.
- Prefer mature cohorts when revenue recognition is delayed.

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
- `gross-margin`
- `channel-budget-allocation`
