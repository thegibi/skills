---
name: roas
description: Calculate Return on Ad Spend (ROAS). Use when the user wants to compare attributed revenue with advertising spend for a campaign or channel.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# roas

## Objective

Provide a deterministic, narrowly scoped marketing or funnel calculation.

## Inputs

- attributed revenue
- ad spend

Never invent missing inputs.

## Formula

- `ROAS = Attributed Revenue / Ad Spend`

## Workflow

1. Confirm period, currency, attribution, and stage definitions when relevant.
2. Validate numerator and denominator compatibility.
3. Calculate using full precision.
4. Round only for presentation.
5. Interpret the result in business context.
6. State assumptions and data-quality limitations.

## Guardrails

- Do not calculate when ad spend is zero.
- State the attribution model or source of attributed revenue.
- ROAS does not account for gross margin, overhead, retention, or cash payback.

## Output

```text
Result:
Formula:
Calculation:
Interpretation:
Assumptions / caveats:
```

## Related skills

- `roi`
- `channel-attribution`
- `channel-performance`
- `gross-margin`
