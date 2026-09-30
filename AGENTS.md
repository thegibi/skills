# AGENTS.md

Guidelines for AI agents working in this repository.

## Repository purpose

This repository contains reusable Agent Skills for business, finance, software engineering, product, marketing, and domain-specific workflows.

Skills should follow the Agent Skills specification and remain cross-agent compatible whenever possible.

## Repository structure

```text
skills/
├── business-context/
│   └── SKILL.md
└── cfo-business-analyst-agent/
    ├── SKILL.md
    └── references/
        ├── metrics.md
        └── diagnostics.md
```

Each skill may contain:

- `SKILL.md` — required; workflow and agent instructions.
- `references/` — detailed domain knowledge loaded on demand.
- `scripts/` — deterministic calculations or automation.
- `assets/` — reusable templates, data, and other supporting files.

## Skill requirements

Every `SKILL.md` must begin with YAML frontmatter:

```yaml
---
name: skill-name
description: Describe what the skill does and when the agent should use it.
metadata:
  author: gibi
  version: 1.0.0
---
```

Rules:

- `name` must match the parent directory.
- Use lowercase letters, numbers, and hyphens only.
- Keep the description trigger-oriented and specific.
- Prefer `SKILL.md` under 500 lines.
- Move deep explanations, formulas, checklists, and examples to `references/`.
- Keep provider-specific instructions out of shared skills unless they are essential to the capability.

## Shared context

The foundational skill is `business-context`.

When a task depends on company-specific context, skills should first look for:

```text
.agents/business.md
```

If it exists, use it as shared context. If it does not exist and missing context would materially affect the answer, run or recommend the `business-context` workflow.

Do not invent missing company information.

## Writing principles

- Separate fact, hypothesis, validation, and recommendation.
- Prefer explicit assumptions over silent assumptions.
- Use deterministic scripts for calculations when repeatability matters.
- Avoid unnecessary duplication between skills.
- Cross-reference related skills when useful.
- Keep instructions tool-agnostic unless a task specifically requires a tool.

## Versioning

Each skill has a version in `metadata.version`.

- Patch: clarification or fix.
- Minor: new capability or meaningful workflow expansion.
- Major: breaking workflow or structure change.

Update `VERSIONS.md` whenever a skill version changes.

## Git conventions

Suggested commit prefixes:

- `feat:` new skill or capability
- `fix:` correction
- `docs:` documentation
- `refactor:` structural improvement


## Architecture layers

Use these layers deliberately:

1. **Context** — persistent reusable business/project knowledge.
2. **Atomic skill** — one calculation or narrowly scoped capability.
3. **Orchestrator** — selects and combines atomic skills without duplicating formulas.
4. **Workflow** — coordinates orchestrators around a recurring job.

## Registry

Every shipped skill must be listed in:

```text
registry/skills.json
```

Keep its version synchronized with `metadata.version`.

## Deterministic calculations and evals

When a skill contains arithmetic that should produce repeatable results, prefer adding support to `scripts/metric-calculator.mjs`.

Add or update cases in `evals/cases.json`.

Before considering a change complete, run:

```bash
npm run check
```

The GitHub Actions workflow enforces these checks on pull requests and main.
