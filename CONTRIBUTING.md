# Contributing

This repository is designed as a reusable Agent Skills library.

## Add a skill

Create:

```text
skills/<skill-name>/SKILL.md
```

Use this frontmatter:

```yaml
---
name: skill-name
description: Explain what the skill does and when it should be used.
metadata:
  author: gibi
  version: 1.0.0
---
```

## Naming

- lowercase only
- hyphens between words
- directory name must match the `name` field
- avoid vague names such as `helper` or `general`

## Structure

Use supporting directories when needed:

```text
skills/skill-name/
├── SKILL.md
├── references/
├── scripts/
└── assets/
```

Keep the main skill focused on:

1. when to use it;
2. what context to load;
3. workflow;
4. decision rules;
5. output format;
6. safety and quality guardrails.

Put long explanations, formula catalogs, examples, and domain background in `references/`.

## Quality checklist

Before shipping:

- [ ] YAML frontmatter is valid.
- [ ] Name matches directory.
- [ ] Description contains useful activation triggers.
- [ ] No credentials or secrets.
- [ ] Missing information is never silently invented.
- [ ] Related skills are referenced where appropriate.
- [ ] `metadata.version` was updated.
- [ ] `VERSIONS.md` was updated.
