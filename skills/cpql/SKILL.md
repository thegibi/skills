---
name: cpql
description: Calculate Cost Per Qualified Lead (CPQL). Use when the user wants to compare acquisition cost per qualified lead across channels, campaigns, or sources.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# cpql

## Objective

Provide a deterministic, narrowly scoped marketing or funnel calculation.

## Inputs

- spend
- qualified leads

Never invent missing inputs.

## Formula

- `CPQL = Spend / Qualified Leads`

## Workflow

1. Confirm period, currency, attribution, and stage definitions when relevant.
2. Validate numerator and denominator compatibility.
3. Calculate using full precision.
4. Round only for presentation.
5. Interpret the result in business context.
6. State assumptions and data-quality limitations.

## Guardrails

- Do not calculate when qualified leads are zero.
- Use a consistent qualification definition across channels.

## Output

```text
Result:
Formula:
Calculation:
Interpretation:
Assumptions / caveats:
```

## Related skills

- `cpl`
- `cac`
- `lead-source-quality`
