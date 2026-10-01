---
name: lead-source-quality
description: Evaluate lead quality by source, medium, campaign, and channel using qualification, opportunity, customer, revenue, margin, retention, and lifetime-value outcomes. Use when the user wants to know which lead sources produce better customers rather than just cheaper leads.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# Lead Source Quality

## Objective

Determine which sources generate leads that become valuable customers.

## Recommended lead-level fields

```text
lead_id
created_at
first_touch_source
first_touch_medium
first_touch_campaign
lead_source
lead_medium
lead_campaign
last_touch_source
qualified_at
opportunity_at
customer_at
revenue
gross_profit
retained
ltv
```

## Core quality measures

```text
Lead Qualification Rate = Qualified Leads / Leads
Opportunity Rate = Opportunities / Leads
Lead-to-Customer Rate = Customers / Leads
Qualified-to-Customer Rate = Customers / Qualified Leads
Revenue per Lead = Revenue / Leads
Gross Profit per Lead = Gross Profit / Leads
Average LTV by Source = Sum LTV / Customers
```

Use cohort-compatible periods when evaluating retention or LTV.

## Workflow

1. Group leads by first-touch source and lead source.
2. Compare quantity with downstream quality.
3. Separate sources that create demand from channels that merely close or assist.
4. Segment by campaign when sample size permits.
5. Identify sources with:
   - cheap but low-quality leads;
   - expensive but high-value leads;
   - high volume but poor economics;
   - low volume but exceptional economics.
6. Surface sample-size limitations.

## Guardrails

- Do not rank channels using CPL alone.
- Do not compare immature cohorts with mature cohorts on LTV or retention.
- Do not credit a closing channel as acquisition without attribution evidence.
- Do not overreact to small samples.

## Output

| Source | Leads | Qualified % | Customer % | Revenue/Lead | Gross Profit/Lead | Avg LTV | Notes |
|---|---:|---:|---:|---:|---:|---:|---|

Then provide:
- best quality source;
- biggest quality leak;
- source requiring attribution review;
- source worth testing with more budget.

## Related skills

- `channel-performance`
- `channel-attribution`
- `ltv`
- `cac`
- `retention-rate`
