# AI Agent Skills

A reusable Agent Skills library for business, finance, software engineering, product, marketing, and domain-specific workflows.

The repository is designed to work across agentic environments such as Codex, Claude Code, Cursor, and other tools that support Markdown-based Agent Skills.

## Architecture

```text
skills/
├── business-context/
│   └── SKILL.md
└── cfo-business-analyst-agent/
    ├── SKILL.md
    └── references/
        ├── metrics.md
        └── diagnostics.md

AGENTS.md
CONTRIBUTING.md
VERSIONS.md
```

## Shared business context

`business-context` is the foundational skill.

It creates or maintains:

```text
.agents/business.md
```

Other business-oriented skills can read this file before working so that company context does not need to be repeated in every prompt.

## Available skills

### business-context

Builds and updates reusable business context including:

- business model;
- product;
- customers;
- pricing;
- channels;
- costs;
- KPIs;
- competitors;
- goals;
- constraints;
- technology.

Path:

```text
skills/business-context/SKILL.md
```

### cfo-business-analyst-agent

Analyzes business and financial performance using:

- ROI;
- CAC;
- AOV;
- Runway;
- Churn;
- MRR;
- EBITDA;
- related unit-economics and retention metrics when applicable.

The skill separates workflow from domain knowledge:

```text
skills/cfo-business-analyst-agent/
├── SKILL.md
└── references/
    ├── metrics.md
    └── diagnostics.md
```

Path:

```text
skills/cfo-business-analyst-agent/SKILL.md
```

## Skill conventions

Every skill should use:

```text
skills/<skill-name>/
├── SKILL.md
├── references/   # optional
├── scripts/      # optional
└── assets/       # optional
```

The main `SKILL.md` should focus on workflow and decision rules. Detailed knowledge belongs in `references/`.

See:

- `AGENTS.md` for agent behavior and repository conventions;
- `CONTRIBUTING.md` for creating new skills;
- `VERSIONS.md` for skill versions.

## Legacy path

The original directory:

```text
cfo-business-analyst-agent/
```

is temporarily retained for compatibility.

New integrations should use:

```text
skills/cfo-business-analyst-agent/
```

## Language

Current business skills are written primarily in Brazilian Portuguese with English-compatible metadata and naming.
