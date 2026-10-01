# Canonical Channel Data Schema

Use this schema across channel-performance, attribution, lead-quality, and budget-allocation workflows.

## Channel-period dataset

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

## Lead-level dataset

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
conversion_source
self_reported_source
qualified_at
opportunity_at
customer_at
revenue
gross_profit
retained
ltv
```

## Recommended taxonomy

Examples:

```text
instagram / organic
instagram / paid_social
facebook / paid_social
google / cpc
google / organic
newsletter / email
whatsapp / messaging
referral / referral
```

Do not mix aliases such as:

```text
instagram
insta
ig
meta_instagram
instagram_ads
```

Normalize source and medium before analysis.

## UTM conventions

Prefer lowercase.

```text
utm_source
utm_medium
utm_campaign
utm_content
utm_term
```

Campaign names should be stable enough to compare over time.
