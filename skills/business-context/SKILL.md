---
name: business-context
description: Build or update a reusable company context file for AI agents. Use when a user wants agents to understand a business, product, customers, pricing, costs, KPIs, competitors, goals, constraints, or tech stack across multiple tasks.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# Business Context

## Objective

Create a reusable source of business context at:

```text
.agents/business.md
```

Other skills can read this file before performing analysis so the user does not need to repeatedly explain the same company.

## When to use

Use this skill when:

- starting work on a new business or product;
- repeated tasks depend on the same company context;
- financial, product, engineering, or marketing analysis lacks shared assumptions;
- the user asks to create or update business context.

Do not use it for a one-off factual question that does not depend on company-specific context.

## Workflow

### 1. Check for existing context

Look for:

```text
.agents/business.md
```

If it exists:

- read it;
- preserve still-valid information;
- update only what changed;
- mark uncertain or stale information explicitly.

### 2. Gather only material context

Capture information that can materially affect future decisions:

- company and business model;
- product or service;
- target customer and ICP;
- revenue model;
- pricing;
- acquisition channels;
- sales cycle;
- retention model;
- major costs;
- core KPIs;
- competitors;
- current goals;
- constraints;
- relevant technology stack.

Do not force the user to provide fields that are irrelevant.

### 3. Distinguish fact from assumption

Use:

```text
Known:
Assumption:
Unknown:
```

Never silently fill missing company information.

### 4. Write the context file

Use this structure:

```markdown
# Business Context

## Company
- Name:
- Industry:
- Business model:
- Geography:

## Product
- Product/service:
- Main problem solved:
- Core value proposition:

## Customers
- ICP:
- Buyer:
- User:
- Main jobs-to-be-done:

## Revenue Model
- Revenue type:
- Pricing:
- Billing frequency:
- Primary revenue drivers:

## Acquisition & Sales
- Main channels:
- Sales cycle:
- Conversion model:

## Retention
- Retention model:
- Renewal/repeat behavior:
- Main churn risks:

## Economics
- Major variable costs:
- Major fixed costs:
- Margin notes:
- Cash constraints:

## KPIs
- Primary KPIs:
- Targets:
- Reporting cadence:

## Competitors
- Direct:
- Alternatives:

## Current Goals
- 30-90 day goals:
- Long-term goals:

## Constraints
- Budget:
- Team:
- Regulation/compliance:
- Other:

## Technology
- Stack:
- Data sources:
- Analytics:

## Open Questions
- ...
```

## Maintenance

Treat `.agents/business.md` as living context.

Update it when there are material changes to:

- pricing;
- customer segment;
- business model;
- product;
- major goals;
- unit economics;
- technical architecture.

Do not turn the file into a historical log. Keep current context concise and decision-relevant.

## Related skills

- `cfo-business-analyst-agent` for financial and operating analysis.
