# Ecommerce Data Schema

Canonical fields and events for ecommerce funnel, product, channel, and retention analysis.

## Core funnel events

Use stable event names:

```text
session_started
product_viewed
add_to_cart
cart_viewed
checkout_started
payment_attempted
purchase_completed
refund_issued
return_created
repeat_purchase_completed
```

## Session / traffic fields

```text
session_id
user_id
customer_id
occurred_at
source
medium
campaign
ad
landing_page
device
country
region
```

## Product fields

```text
product_id
sku
product_name
category
brand
unit_price
discount_amount
quantity
cogs
gross_profit
```

## Order fields

```text
order_id
customer_id
created_at
currency
subtotal
discount_total
shipping_revenue
shipping_cost
tax
revenue
cogs
gross_profit
items_count
is_first_order
coupon
promotion_id
```

## Customer fields

```text
customer_id
first_order_at
last_order_at
orders_count
revenue_lifetime
gross_profit_lifetime
acquisition_source
acquisition_medium
acquisition_campaign
```

## Funnel dataset

At minimum:

```text
date
sessions
product_views
add_to_cart
checkout_started
purchases
repeat_purchases
revenue
gross_profit
```

## Product dataset

```text
date
product_id
product_name
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
```

## Channel-product join

For advanced analysis, preserve both channel and product:

```text
date
source
medium
campaign
product_id
spend
sessions
product_views
add_to_cart
purchases
customers
revenue
gross_profit
```

This enables analysis such as:

```text
Google Search × Product A
Meta Ads × Product B
Instagram Organic × Product C
```

## Data-quality rules

- Stable event names.
- Stable source/medium taxonomy.
- Same currency for comparisons.
- Preserve order-level and product-level grain.
- Do not treat refunds/returns as if they happened on the original purchase date without documenting the accounting convention.
- Use mature cohorts for repeat purchase and LTV analysis.
