---
name: conversion-rate
description: Calculate a funnel conversion rate between any two stages. Use for visitor-to-lead, lead-to-qualified, lead-to-customer, trial-to-paid, checkout completion, or other stage-to-stage conversion analysis.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# conversion-rate

## Objective

Provide a deterministic, narrowly scoped marketing or funnel calculation.

## Inputs

- conversions
- starting population
- stage definitions
- period

Never invent missing inputs.

## Formula

- `Conversion Rate (%) = Conversions / Starting Population × 100`

## Workflow

1. Confirm period, currency, attribution, and stage definitions when relevant.
2. Validate numerator and denominator compatibility.
3. Calculate using full precision.
4. Round only for presentation.
5. Interpret the result in business context.
6. State assumptions and data-quality limitations.

## Guardrails

- Do not calculate when the starting population is zero.
- State the numerator and denominator stages explicitly.
- Use compatible cohorts when time-to-convert is material.

## Output

```text
Result:
Formula:
Calculation:
Interpretation:
Assumptions / caveats:
```

## Related skills

- `channel-performance`
- `lead-source-quality`
- `churn`
- `retention-rate`
