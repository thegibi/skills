---
name: product-performance
description: Analyze ecommerce product and SKU performance using views, carts, purchases, revenue, gross profit, margin, refunds, repeat purchase, and customer value. Use when deciding which products deserve more traffic, promotion, bundling, or merchandising.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# Product Performance

## Objective

Identify products that create profitable demand and valuable customers.

## Recommended fields

```text
product_id
product_name
category
product_views
add_to_cart
orders
units_sold
revenue
discounts
cogs
gross_profit
refunds
returns
new_customers
repeat_customers
attributed_spend
```

## Product roles

Classify products when evidence supports it:

- traffic product;
- conversion product;
- margin product;
- acquisition product;
- retention product;
- bundle anchor;
- underperformer.

## Core analysis

Compare:

- Product View → Add to Cart;
- Product View → Purchase;
- Revenue per Product View;
- Gross Profit per Product View;
- gross margin;
- refund / return rate;
- new-customer share;
- repeat-purchase contribution;
- CAC by product when attribution is reliable.

## Guardrails

Do not rank products by revenue alone.

A high-revenue SKU with weak margin, high returns, and low repeat purchase may be less valuable than a smaller but more profitable SKU.
