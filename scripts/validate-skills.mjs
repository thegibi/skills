#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const registry = JSON.parse(fs.readFileSync(path.join(root,'registry','skills.json'),'utf8'));
const errors = [];

for (const skill of registry.skills) {
  const full = path.join(root, skill.path);
  if (!fs.existsSync(full)) {
    errors.push(`Missing SKILL.md: ${skill.path}`);
    continue;
  }
  const text = fs.readFileSync(full,'utf8');
  const name = text.match(/^name:\s*(.+)$/m)?.[1]?.trim();
  const description = text.match(/^description:\s*(.+)$/m)?.[1]?.trim();
  const version = text.match(/^\s*version:\s*(.+)$/m)?.[1]?.trim();
  const dir = path.basename(path.dirname(full));

  if (name !== dir) errors.push(`${skill.path}: name "${name}" must match directory "${dir}"`);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(name || '')) errors.push(`${skill.path}: invalid skill name`);
  if (!description) errors.push(`${skill.path}: missing description`);
  if (version !== skill.version) errors.push(`${skill.path}: registry version ${skill.version} != metadata.version ${version}`);

  for (const dep of skill.depends_on || []) {
    if (!registry.skills.some(s => s.name === dep)) errors.push(`${skill.name}: unknown dependency ${dep}`);
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`Validated ${registry.skills.length} skills.`);
