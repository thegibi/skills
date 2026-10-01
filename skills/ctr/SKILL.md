---
name: ctr
description: Calculate Click-Through Rate (CTR). Use when the user wants to measure how often impressions generate clicks for ads, posts, emails, or other campaign surfaces.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# ctr

## Objective

Provide a deterministic, narrowly scoped marketing or funnel calculation.

## Inputs

- clicks
- impressions

Never invent missing inputs.

## Formula

- `CTR (%) = Clicks / Impressions × 100`

## Workflow

1. Confirm period, currency, attribution, and stage definitions when relevant.
2. Validate numerator and denominator compatibility.
3. Calculate using full precision.
4. Round only for presentation.
5. Interpret the result in business context.
6. State assumptions and data-quality limitations.

## Guardrails

- Do not calculate when impressions are zero.
- Use comparable delivery units and periods.

## Output

```text
Result:
Formula:
Calculation:
Interpretation:
Assumptions / caveats:
```

## Related skills

- `cpc`
- `channel-performance`
