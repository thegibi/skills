---
name: ecommerce-context
description: Build or update shared ecommerce context for products, customers, offers, margins, logistics, seasonality, acquisition channels, customer objections, growth goals, and operating constraints. Use before ecommerce marketing, ads, retention, content, or capital-allocation work.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# Ecommerce Context

## Objective

Create and maintain:

```text
.agents/ecommerce.md
```

This file is the shared ecommerce source of truth.

## Workflow

1. Check whether `.agents/ecommerce.md` exists.
2. Reuse valid information already captured.
3. Ask only for missing information that materially affects a decision.
4. Separate known facts, assumptions, and unknowns.
5. Update the document when pricing, product mix, margins, channels, logistics, or goals materially change.

## Context structure

```markdown
# Ecommerce Context

## Brand
- Name:
- Positioning:
- Geography:
- Brand voice:

## Products
- Hero products:
- Categories:
- Price points:
- Main differentiators:
- Products with best margin:
- Products with strongest repeat purchase:

## Customer
- ICP:
- Main personas:
- Jobs to be done:
- Problems:
- Desires:
- Objections:
- Purchase triggers:
- Words customers use:

## Offer
- Core offer:
- Bundles:
- Discounts:
- Free shipping:
- Guarantees:
- Seasonal offers:

## Economics
- Gross margin:
- Contribution margin:
- Average order value:
- CAC:
- Repeat purchase:
- LTV:
- Refund/return notes:

## Acquisition
- Current channels:
- Paid channels:
- Organic channels:
- Lead sources:
- Attribution model:
- Monthly marketing budget:

## Lifecycle
- Email:
- WhatsApp:
- Loyalty/referral:
- Post-purchase:
- Win-back:

## Operations
- Inventory constraints:
- Fulfillment:
- Shipping:
- Return policy:
- Payment methods:
- Working capital constraints:

## Goals
- 30-day:
- 90-day:
- 12-month:
- Revenue target:
- Profit target:

## Open Questions
- ...
```

## Related skills

- `ecommerce-growth`
- `customer-research`
- `ecommerce-marketing-plan`
- `capital-allocation`
