# Architecture

## Design goals

This repository is organized around composable Agent Skills rather than large monolithic prompts.

The architecture has four layers:

```text
Context
  ↓
Atomic skills
  ↓
Orchestrators
  ↓
Workflows
```

## 1. Context skills

Context skills create reusable project knowledge.

Current foundation:

- `business-context` → `.agents/business.md`

## 2. Atomic skills

Atomic skills own one calculation or narrowly scoped capability.

Examples:

- `nrr`
- `grr`
- `cac`
- `ltv`
- `runway`

An atomic skill should own its formula, input validation, edge cases, and interpretation rules.

## 3. Orchestrators

Orchestrators select and combine atomic skills.

Examples:

- `saas-metrics`
- `financial-health`
- `cfo-business-analyst-agent`

They should not duplicate formulas.

## 4. Workflows

Workflows organize multiple orchestrators around a recurring management job.

Current example:

- `monthly-business-review`

## Deterministic calculations

Metric arithmetic is implemented in:

```text
scripts/metric-calculator.mjs
```

This keeps repeatable calculations outside natural-language reasoning.

## Registry

```text
registry/skills.json
```

is the machine-readable catalog for:

- name;
- path;
- type;
- category;
- version;
- dependencies.

This can later power a CLI, documentation generator, installer, or dependency resolver.

## Quality gates

```text
npm run validate
npm test
npm run check
```

GitHub Actions runs validation and evals automatically on pushes to `main` and pull requests.

## Adding a capability

Prefer this sequence:

1. create an atomic skill when the capability has independent rules;
2. add deterministic code if exact calculation matters;
3. add eval cases;
4. register the skill;
5. connect it to relevant orchestrators;
6. update versions and documentation.

Avoid adding logic directly to an orchestrator when it deserves its own reusable skill.


## Domain separation

SaaS and Ecommerce are separate domains.

### Ecommerce

The primary ecommerce orchestrator is `ecommerce-growth`.

Its operating loop is:

```text
Context → Research → Demand → Conversion → Purchase → Retention → Economics → Capital → New Tests
```

### SaaS

The primary SaaS metric orchestrator is `saas-metrics`.

SaaS-specific recurring-revenue concepts should not be forced into ecommerce analysis.

### Shared core

Both domains may reuse atomic capabilities such as CAC, LTV, ROI, Gross Margin, attribution, and financial health when applicable.
