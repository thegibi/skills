#!/usr/bin/env node
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const suite = JSON.parse(fs.readFileSync('evals/cases.json','utf8'));
let failed = 0;

const equal = (a,b) => JSON.stringify(a) === JSON.stringify(b);

for (const c of suite.cases) {
  try {
    const out = execFileSync(process.execPath, ['scripts/metric-calculator.mjs', c.metric, JSON.stringify(c.input)], {encoding:'utf8'});
    const actual = JSON.parse(out);
    if (!equal(actual,c.expected)) {
      failed++;
      console.error(`FAIL ${c.id}\n expected: ${JSON.stringify(c.expected)}\n actual:   ${JSON.stringify(actual)}`);
    } else {
      console.log(`PASS ${c.id}`);
    }
  } catch (e) {
    failed++;
    console.error(`FAIL ${c.id}: ${e.message}`);
  }
}
if (failed) process.exit(1);
console.log(`All ${suite.cases.length} evals passed.`);
