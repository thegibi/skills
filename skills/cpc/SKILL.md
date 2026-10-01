---
name: cpc
description: Calculate Cost Per Click (CPC). Use when the user wants to know paid media cost per click or compare click acquisition efficiency across campaigns or channels.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# cpc

## Objective

Provide a deterministic, narrowly scoped marketing or funnel calculation.

## Inputs

- spend
- clicks

Never invent missing inputs.

## Formula

- `CPC = Spend / Clicks`

## Workflow

1. Confirm period, currency, attribution, and stage definitions when relevant.
2. Validate numerator and denominator compatibility.
3. Calculate using full precision.
4. Round only for presentation.
5. Interpret the result in business context.
6. State assumptions and data-quality limitations.

## Guardrails

- Do not calculate when clicks are zero.
- Use the same currency and period.

## Output

```text
Result:
Formula:
Calculation:
Interpretation:
Assumptions / caveats:
```

## Related skills

- `ctr`
- `cpl`
- `channel-performance`
