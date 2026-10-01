---
name: channel-attribution
description: Analyze and reconcile customer acquisition attribution across first touch, lead source, last touch, assisted channels, self-reported source, and conversion source. Use when Instagram, Google, Facebook, WhatsApp, email, paid ads, CRM, and analytics disagree about which channel generated a lead or customer.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# Channel Attribution

## Objective

Create a defensible view of which channels create, assist, and close demand.

Attribution is a model, not perfect causal truth.

## Recommended lead/customer fields

```text
lead_id
customer_id
first_touch_source
first_touch_medium
first_touch_campaign
lead_source
lead_medium
lead_campaign
last_touch_source
conversion_source
self_reported_source
customer_at
revenue
```

## Attribution views

At minimum, preserve:

- First touch
- Lead source
- Last touch
- Conversion source
- Self-reported source

When possible also track assisted touches.

## Interpretation

Examples:

```text
Instagram → Google → WhatsApp → Customer
```

Possible interpretation:

- Instagram created awareness;
- Google captured active demand;
- WhatsApp closed the sale.

Do not automatically assign 100% acquisition credit to WhatsApp just because the transaction closed there.

## Workflow

1. Validate source/medium taxonomy.
2. Reconcile platform, analytics, CRM, and self-reported data.
3. Compare first-touch and last-touch views.
4. Identify channels frequently acting as assists.
5. Identify unattributed/direct traffic.
6. Quantify disagreement between attribution systems.
7. Pass the cleaned attribution view to `channel-performance`.

## Guardrails

- Avoid declaring one model as objective truth.
- Do not sum platform-reported conversions as if each were unique.
- Distinguish tracking gaps from true direct demand.
- Use consistent lookback windows when comparing sources.

## Output

### Attribution summary

| Channel | First Touch Customers | Lead Source Customers | Last Touch Customers | Assisted | Revenue |
|---|---:|---:|---:|---:|---:|

### Attribution gaps
- duplicated credit;
- missing source;
- direct/unknown;
- CRM mismatch;
- self-reported mismatch.

### Recommendation
State the most defensible decision view and its limitations.

## Related skills

- `analytics`
- `channel-performance`
- `lead-source-quality`
- `channel-budget-allocation`
