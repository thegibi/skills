---
name: ecommerce-funnel
description: Monitor and diagnose the ecommerce sales funnel from sessions and product views through add-to-cart, checkout, purchase, and repeat purchase. Use when the user wants to find ecommerce conversion leaks or understand where sales are being lost.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# Ecommerce Funnel

## Canonical funnel

```text
Sessions
→ Product Views
→ Add to Cart
→ Checkout Started
→ Purchase
→ Repeat Purchase
```

Optional detail:

```text
Landing Page View
→ Product View
→ Add to Cart
→ Cart
→ Checkout Started
→ Payment Attempt
→ Purchase
→ Refund / Return
→ Repeat Purchase
```

## Core metrics

- `conversion-rate`
- `purchase-conversion-rate`
- `add-to-cart-rate`
- `checkout-conversion`
- `cart-abandonment-rate`
- `aov`
- `revenue-per-visitor`
- `gross-profit-per-visitor`
- `repeat-purchase-rate`

## Workflow

1. Validate event definitions.
2. Calculate stage-to-stage conversion.
3. Quantify drop-off by stage.
4. Estimate revenue and gross-profit impact.
5. Segment by channel, campaign, device, landing page, and product.
6. Distinguish tracking loss from real behavioral loss.
7. Prioritize the largest economically relevant leak.
8. Recommend up to three experiments.

## Output

| Stage | Volume | Conversion from previous | Drop-off | Economic note |
|---|---:|---:|---:|---|

Then:
- primary bottleneck;
- evidence;
- relevant segments;
- estimated opportunity;
- top experiments.
