# AI Agent Skills

A composable Agent Skills library for business analysis, finance, SaaS metrics, and reusable AI workflows.

Designed for Codex, Claude Code, Cursor, VS Code agent workflows, and other environments that consume Markdown-based skills.

## Architecture

```text
                         business-context
                                │
                                ▼
                      .agents/business.md
                                │
             ┌──────────────────┼──────────────────┐
             ▼                  ▼                  ▼
        Atomic Metrics      SaaS Metrics     Financial Health
             │                  │                  │
             └──────────────┬───┴──────────────┬───┘
                            ▼                  ▼
                    CFO / Business Analyst
                            │
                            ▼
                  Monthly Business Review
```

See `docs/ARCHITECTURE.md` for the design model.

## Current library

### Context
- `business-context`

### Orchestrators
- `cfo-business-analyst-agent`
- `saas-metrics`
- `financial-health`

### Workflows
- `monthly-business-review`

### Channel intelligence
- `channel-performance`
- `lead-source-quality`
- `channel-attribution`
- `channel-budget-allocation`
- `growth-channel-strategy`

### Acquisition metrics
- `ctr`
- `cpc`
- `cpl`
- `cpql`
- `conversion-rate`
- `roas`
- `revenue-per-lead`
- `gross-profit-per-lead`

### Acquisition & unit economics
- `cac`
- `ltv`
- `ltv-cac`
- `cac-payback`
- `arpu`
- `roi`

### Recurring revenue & retention
- `mrr`
- `arr`
- `churn`
- `retention-rate`
- `nrr`
- `grr`
- `quick-ratio`

### Growth efficiency
- `revenue-growth`
- `magic-number`
- `rule-of-40`

### Profitability & cash
- `gross-margin`
- `contribution-margin`
- `ebitda`
- `burn-rate`
- `runway`
- `break-even`
- `cash-conversion-cycle`

### Commerce & risk
- `aov`
- `customer-concentration`

## Skill structure

```text
skills/<skill-name>/
├── SKILL.md
├── references/   # optional
├── scripts/      # optional
└── assets/       # optional
```

Atomic skills own narrowly scoped knowledge. Orchestrators combine them. Workflows solve recurring management jobs.

## Shared context

`business-context` creates:

```text
.agents/business.md
```

Skills should reuse that context rather than repeatedly asking the user for the same company information.

## Machine-readable registry

```text
registry/skills.json
```

contains skill type, category, version, path, and dependencies.

## Deterministic calculations

A reusable calculator is included:

```bash
node scripts/metric-calculator.mjs nrr '{"beginningMrr":100000,"expansionMrr":10000,"contractionMrr":5000,"churnedMrr":10000}'
```

## Quality checks

```bash
npm run validate
npm test
npm run check
```

GitHub Actions runs these checks automatically.

## Create a new skill

Start from:

```text
templates/skill/SKILL.md
```

Then:

1. add the skill under `skills/`;
2. add it to `registry/skills.json`;
3. add deterministic calculation support when relevant;
4. add eval cases;
5. connect it to an orchestrator;
6. update `VERSIONS.md`.

See `CONTRIBUTING.md` and `AGENTS.md`.

## Legacy

The original root-level `cfo-business-analyst-agent/` directory is retained temporarily for backward compatibility. New integrations should use `skills/cfo-business-analyst-agent/`.

## Language

Business-facing skill content is primarily pt-BR. Skill identifiers and machine-readable metadata use stable English names for cross-agent compatibility.


## Channel intelligence

The growth-channel layer is designed to compare sources such as Instagram, Facebook, Google, WhatsApp, email, paid media, organic, and referrals using downstream economics rather than lead volume alone.

Canonical schemas live in:

```text
references/channel-data-schema.md
```

The key decision flow is:

```text
Attribution → Channel Performance → Lead Quality → Budget Allocation → Growth Strategy
```
