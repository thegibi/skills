---
name: your-skill-name
description: Explain what this skill does and when an agent should use it. Include concrete trigger language and scope boundaries.
metadata:
  author: gibi
  version: 1.0.0
  language: pt-BR
---

# Your Skill Name

## Objective

State the decision or task this skill helps complete.

## Inputs

- required input;
- optional input.

Never invent missing material inputs.

## Workflow

1. Validate context and definitions.
2. Perform the task.
3. State assumptions.
4. Return the requested output.
5. Suggest related skills only when they materially improve the result.

## Guardrails

- Add domain-specific failure modes.
- Separate facts from assumptions.
- Avoid duplicate logic that belongs to another atomic skill.

## Output

Define a stable response shape.

## Shared context

Read `.agents/business.md` when company-specific context materially changes the result.

## Related skills

- `business-context`
