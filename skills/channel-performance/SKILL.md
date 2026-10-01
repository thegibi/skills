---
name: channel-performance
description: Analyze marketing channel performance across spend, impressions, clicks, leads, qualified leads, customers, revenue, and gross profit. Use when the user wants to compare Instagram, Facebook, Google, WhatsApp, email, paid ads, organic, referral, or other acquisition channels and understand efficiency by channel.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# Channel Performance

## Objective

Measure and compare the economic performance of acquisition and conversion channels.

Do not optimize for cheap leads in isolation. Prefer downstream business outcomes.

## Recommended input schema

Per period and channel:

```text
date
channel
source
medium
campaign
ad
spend
impressions
clicks
visitors
leads
qualified_leads
opportunities
customers
revenue
gross_profit
```

Use only fields available and material to the decision.

## Core metrics

Delegate atomic calculations when available:

- `cac`
- `roi`
- `ltv`
- `ltv-cac`
- `cac-payback`
- `gross-margin`
- `conversion-rate` when available

Channel-specific derived metrics:

```text
CTR = Clicks / Impressions
CPC = Spend / Clicks
CPL = Spend / Leads
CPQL = Spend / Qualified Leads
Lead → Qualified Lead = Qualified Leads / Leads
Lead → Customer = Customers / Leads
Qualified Lead → Customer = Customers / Qualified Leads
Revenue per Lead = Revenue / Leads
Revenue per Customer = Revenue / Customers
ROAS = Revenue / Spend
```

## Workflow

1. Confirm period and channel taxonomy.
2. Normalize channel/source/medium naming before comparison.
3. Compute funnel and economic metrics.
4. Compare channel quality at lead, qualified-lead, customer, revenue, and margin levels.
5. Separate acquisition channels from assisted/conversion channels.
6. Identify scale candidates, optimization candidates, and channels that need more data.
7. Pass budget decisions to `channel-budget-allocation`.

## Interpretation rules

A channel with lower CPL is not necessarily better.

Prefer stronger downstream signals such as:

- CPQL;
- CAC;
- Lead → Customer;
- Gross Profit per Lead;
- LTV:CAC;
- CAC Payback.

Treat WhatsApp, email, branded search, and direct traffic carefully because they may be closing or assisting channels rather than true first-touch acquisition channels.

## Output

### Channel scorecard

| Channel | Spend | Leads | Qualified | Customers | CPL | CPQL | CAC | Revenue | ROAS | Gross Profit |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|

### Findings
- strongest acquisition channel;
- strongest lead-quality channel;
- strongest conversion channel;
- weak/failing channels;
- data-quality issues.

### Next step
Recommend either:
- scale test;
- optimization test;
- attribution fix;
- tracking fix;
- hold / insufficient evidence.

## Related skills

- `lead-source-quality`
- `channel-attribution`
- `channel-budget-allocation`
- `growth-channel-strategy`
- `cac`
- `ltv-cac`
- `cac-payback`
- `roi`
