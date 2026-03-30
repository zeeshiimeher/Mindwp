#!/usr/bin/env node
/* eslint-disable no-console */

/**
 * Unified Validation Runner
 *
 * Runs ALL validators, aggregates results, outputs summary.
 * Exits with code 1 if ANY validator fails.
 *
 * Usage:
 *   node scripts/validate-all.mjs
 *   node scripts/validate-all.mjs --report-json
 */

import { execFileSync } from 'node:child_process';
import path from 'node:path';

const args = new Set(process.argv.slice(2));
const reportJson = args.has('--report-json');

const root = process.cwd();

/**
 * @typedef {{ name: string; command: string; args: string[]; status: 'pass' | 'fail' | 'skipped'; duration: number; output: string }} ValidatorResult
 */

/** @type {Array<{ name: string; command: string; args: string[] }>} */
const validators = [
  // Type checking and lint
  { name: 'typecheck', command: 'npx', args: ['tsc', '--noEmit'] },
  { name: 'lint', command: 'node', args: ['scripts/run-eslint.mjs'] },

  // Documentation
  { name: 'validate-docs', command: 'node', args: ['scripts/validate-docs.mjs'] },

  // Domain structure validators
  { name: 'validate-blog', command: 'node', args: ['scripts/validate-blog.mjs'] },
  { name: 'validate-resources', command: 'node', args: ['scripts/validate-resources.mjs'] },
  { name: 'validate-case-study-structure', command: 'node', args: ['scripts/validate-case-study-structure.mjs'] },
  { name: 'validate-service-structure', command: 'node', args: ['scripts/validate-service-structure.mjs'] },
  { name: 'validate-feature-structure', command: 'node', args: ['scripts/validate-feature-structure.mjs'] },
  { name: 'validate-home-structure', command: 'node', args: ['scripts/validate-home-structure.mjs'] },
  { name: 'validate-industry-structure', command: 'node', args: ['scripts/validate-industry-structure.mjs'] },

  // Design system
  { name: 'validate-design-system', command: 'node', args: ['scripts/validate-design-system.cjs'] },

  // Content graph
  { name: 'validate-graph', command: 'npx', args: ['tsx', 'scripts/validate-graph.ts'] },

  // Rule-based validators
  { name: 'validate-metadata', command: 'npx', args: ['tsx', 'scripts/validation/validate-metadata.mjs'] },
  { name: 'validate-metadata-completeness', command: 'node', args: ['scripts/validation/validate-metadata-completeness.mjs'] },
  { name: 'validate-cta', command: 'node', args: ['scripts/validation/validate-cta.mjs'] },
  { name: 'validate-vocabulary', command: 'node', args: ['scripts/validation/validate-vocabulary.mjs'] },
  { name: 'validate-structure', command: 'node', args: ['scripts/validation/validate-structure.mjs'] },
  { name: 'validate-internal-links', command: 'npx', args: ['tsx', 'scripts/validation/validate-internal-links.ts'] },

  // Generated file freshness guard
  { name: 'check-generated', command: 'node', args: ['scripts/check-generated.mjs'] },

  // Conversion audit (warnings only — never fails build)
  { name: 'validate-conversion', command: 'npx', args: ['tsx', 'scripts/validation/validate-conversion.ts'] },

  // System documentation drift check (warnings only — never fails build)
  { name: 'validate-system-docs', command: 'node', args: ['scripts/validation/validate-system-docs.mjs'] },

  // Conversion intelligence validators (warnings only — never fail build)
  { name: 'validate-readable-report', command: 'node', args: ['scripts/validation/validate-readable-report.mjs'] },
  { name: 'validate-rewrite-engine', command: 'node', args: ['scripts/validation/validate-rewrite-engine.mjs'] },
  { name: 'validate-checklist', command: 'node', args: ['scripts/validation/validate-checklist.mjs'] },
  { name: 'validate-session-log', command: 'node', args: ['scripts/validation/validate-session-log.mjs'] },
];

/**
 * @param {{ name: string; command: string; args: string[] }} validator
 * @returns {ValidatorResult}
 */
function runValidator(validator) {
  const start = Date.now();
  let output = '';
  let status = 'pass';

  try {
    const result = execFileSync(validator.command, validator.args, {
      cwd: root,
      encoding: 'utf8',
      stdio: ['pipe', 'pipe', 'pipe'],
      timeout: 120_000,
    });
    output = result || '';
  } catch (err) {
    status = 'fail';
    output = [err.stdout, err.stderr].filter(Boolean).join('\n');
  }

  const duration = Date.now() - start;

  return { name: validator.name, command: validator.command, args: validator.args, status, duration, output };
}

function main() {
  console.log('[validate-all] Running all validators...\n');

  /** @type {ValidatorResult[]} */
  const results = [];

  for (const validator of validators) {
    process.stdout.write(`  ${validator.name} ... `);
    const result = runValidator(validator);
    results.push(result);

    if (result.status === 'pass') {
      console.log(`\u2713 (${result.duration}ms)`);
    } else {
      console.log(`\u2717 FAILED (${result.duration}ms)`);
    }
  }

  const passed = results.filter(r => r.status === 'pass');
  const failed = results.filter(r => r.status === 'fail');

  console.log('');
  console.log('='.repeat(60));
  console.log(`[validate-all] Results: ${passed.length} passed, ${failed.length} failed (${results.length} total)`);
  console.log('='.repeat(60));

  if (failed.length > 0) {
    console.log('\nFailed validators:\n');
    for (const f of failed) {
      console.log(`  \u2717 ${f.name}`);
      if (f.output) {
        const lines = f.output.split('\n').slice(0, 20);
        for (const line of lines) {
          console.log(`    ${line}`);
        }
        if (f.output.split('\n').length > 20) {
          console.log(`    ... (truncated)`);
        }
      }
      console.log('');
    }
  }

  if (reportJson) {
    const report = {
      generatedAt: new Date().toISOString(),
      validators: results.map(r => ({
        name: r.name,
        status: r.status,
        duration: r.duration,
      })),
      total: {
        passed: passed.length,
        failed: failed.length,
        total: results.length,
      },
      errors: failed.map(f => ({
        validator: f.name,
        output: f.output,
      })),
    };

    console.log('\n' + JSON.stringify(report, null, 2));
  }

  if (failed.length > 0) {
    process.exitCode = 1;
  } else {
    console.log('\n[validate-all] All validators passed.');
  }
}

main();
