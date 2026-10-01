---
name: channel-budget-allocation
description: Allocate or reallocate marketing budget across channels using CAC, CPQL, conversion, LTV, LTV:CAC, CAC Payback, gross profit, attribution quality, volume, saturation, and marginal efficiency. Use when the user asks where to invest more, reduce spend, maintain spend, or test additional budget.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# Channel Budget Allocation

## Objective

Decide where the next unit of marketing budget should be tested or withheld.

The goal is not to maximize leads. The goal is to maximize profitable customer growth under cash and operational constraints.

## Required context

Prefer inputs from:

- `channel-performance`
- `lead-source-quality`
- `channel-attribution`
- `cac`
- `ltv-cac`
- `cac-payback`
- `gross-margin`
- `runway`

## Decision dimensions

For each channel evaluate:

- CAC;
- CPQL;
- Lead → Customer;
- gross profit per customer;
- LTV:CAC;
- CAC Payback;
- current spend and volume;
- evidence of saturation;
- attribution confidence;
- operational capacity;
- cash constraints.

## Marginal efficiency

Prefer marginal performance over blended averages when spend history is available.

Example:

```text
Spend 10k → CAC 150
Spend 20k → CAC 170
Spend 40k → CAC 290
```

The last increment may be uneconomic even when blended CAC still looks acceptable.

## Allocation states

Assign one of:

- **Scale test** — strong economics with room to test more spend.
- **Maintain** — healthy economics but insufficient proof of additional capacity.
- **Optimize before scaling** — channel works but funnel or creative efficiency needs improvement.
- **Reduce** — weak economics with sufficient evidence.
- **Fix measurement** — attribution/tracking too weak for capital allocation.
- **Explore** — promising but sample too small.

## Workflow

1. Define objective and budget increment.
2. Set economic constraints from business context.
3. Compare channels using downstream economics.
4. Check attribution confidence.
5. Check marginal CAC or efficiency trend where available.
6. Check cash/payback and operating capacity.
7. Propose a bounded allocation experiment.
8. Define stop conditions.

## Experiment template

```text
Channel:
Budget change:
Test period:
Primary metric:
Secondary metrics:
Stop condition:
Success condition:
Decision after test:
```

## Guardrails

- Do not recommend scaling solely from ROAS or CPL.
- Do not move large budget based on small samples.
- Do not ignore payback or cash runway.
- Do not treat historical blended CAC as marginal CAC.
- Do not allocate to channels with broken attribution without stating the risk.

## Related skills

- `growth-channel-strategy`
- `channel-performance`
- `experimentation`
- `cac-payback`
- `runway`
