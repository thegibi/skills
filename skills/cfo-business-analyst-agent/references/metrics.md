# Metrics Reference

Detailed definitions and formulas used by `cfo-business-analyst-agent`.

## ROI

```text
ROI (%) = ((Return - Investment Cost) / Investment Cost) × 100
```

Validate:

- attribution method;
- period;
- direct and indirect costs;
- timing of return;
- recurrence and scalability.

A positive ROI does not automatically imply that the investment should be scaled.

## CAC

```text
CAC = Total Marketing and Sales Acquisition Cost / New Customers Acquired
```

Possible cost components:

- paid media;
- acquisition-related payroll;
- commissions;
- agencies;
- tools;
- creative production;
- events;
- acquisition infrastructure.

Analyze CAC with margin, retention, LTV when calculable, and payback.

For long sales cycles, use cohorts or attribution windows rather than blindly dividing same-month spend by same-month customers.

## AOV

```text
AOV = Total Revenue / Number of Orders
```

Orders are not customers.

Useful decomposition:

```text
Revenue ≈ Traffic × Conversion Rate × AOV
```

A higher AOV may come from price, more items, upsell, cross-sell, bundles, discounts, or product mix. Interpret with margin and conversion.

## Runway

```text
Net Burn = Cash Outflows - Cash Inflows
Runway = Available Cash / Monthly Net Burn
```

Only produce a finite runway when net burn is positive.

If inflows are equal to or greater than outflows, state that the operation is not consuming net cash at the current rate.

Prefer a 3-6 month average burn when monthly volatility is high.

Do not confuse:

```text
Profit != Cash
EBITDA != Cash
Revenue != Same-period Cash Inflow
```

## Churn

Customer churn:

```text
Churn (%) = Customers Lost During Period / Customers at Start of Period × 100
```

Define what "lost" means before calculating.

Examples:

- subscription: cancellation;
- recurring service: contract ended;
- ecommerce: an explicit inactivity rule.

Segment churn by cohort, channel, plan, product, region, seller, profile, or ticket when useful.

## MRR

MRR is normalized monthly recurring revenue.

Prefer:

```text
MRR = Sum of normalized recurring monthly revenue from active customers
```

Do not include one-time setup, implementation, consulting, or other non-recurring charges.

Movement:

```text
Ending MRR =
Beginning MRR
+ New MRR
+ Expansion MRR
- Contraction MRR
- Churned MRR
```

Growth:

```text
MRR Growth (%) = (Current MRR - Previous MRR) / Previous MRR × 100
```

NRR when applicable:

```text
NRR (%) =
(Beginning MRR - Churned MRR - Contraction MRR + Expansion MRR)
/
Beginning MRR
× 100
```

Do not use MRR or NRR for non-recurring business models.

## EBITDA

From net income:

```text
EBITDA =
Net Income
+ Interest
+ Income Taxes
+ Depreciation
+ Amortization
```

Margin:

```text
EBITDA Margin (%) = EBITDA / Net Revenue × 100
```

Do not indiscriminately add every tax in the business.

Do not confuse:

```text
EBITDA != Net Income
EBITDA != Cash Flow
EBITDA != Cash Balance
```

If presenting adjusted EBITDA, list every adjustment separately and do not invent adjustments merely to improve the metric.
