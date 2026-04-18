#!/usr/bin/env node
/* eslint-disable no-console */

/**
 * Unified Validation Runner
 *
 * Runs all active validators through one entrypoint, writes a machine-readable
 * validation snapshot, and exits non-zero only on blocking validator failures.
 *
 * Usage:
 *   node scripts/core/validate-all.mjs
 *   node scripts/core/validate-all.mjs --report-json
 */

import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const args = new Set(process.argv.slice(2));
const reportJson = args.has('--report-json');

const root = process.cwd();
const reportPath = path.join(root, 'reports', 'validation-results.json');

/**
 * @typedef {{ name: string; command: string; args: string[]; blocking: boolean }} Validator
 * @typedef {{ name: string; command: string; args: string[]; status: 'pass' | 'fail'; duration: number; output: string }} ValidatorResult
 */

/** @type {Validator[]} */
const validators = [
  {
    name: 'check-generated',
    command: 'node',
    args: ['scripts/core/check-generated.mjs'],
    blocking: true,
  },
  { name: 'typecheck', command: 'npx', args: ['tsc', '--noEmit'], blocking: true },
  { name: 'lint', command: 'node', args: ['scripts/runners/run-eslint.mjs'], blocking: false },
  {
    name: 'validate-content-contract',
    command: 'npx',
    args: ['tsx', 'scripts/validators/validate-content-contract.mjs', '--report-json'],
    blocking: true,
  },
  {
    name: 'validate-content-quality',
    command: 'npx',
    args: ['tsx', 'scripts/validators/validate-content-quality.mjs', '--report-json'],
    blocking: true,
  },
  {
    name: 'validate-domain-structure',
    command: 'npx',
    args: ['tsx', 'scripts/validators/validate-domain-structure.mjs', '--report-json'],
    blocking: true,
  },
  {
    name: 'validate-cta-label-contract',
    command: 'npx',
    args: ['tsx', 'scripts/validators/validate-cta-label-contract.mjs', '--report-json'],
    blocking: true,
  },
  {
    name: 'validate-conversion-contract',
    command: 'npx',
    args: ['tsx', 'scripts/validators/validate-conversion-contract.mjs', '--report-json'],
    blocking: true,
  },
  {
    name: 'validate-template-payload-sufficiency',
    command: 'npx',
    args: ['tsx', 'scripts/validators/validate-template-payload-sufficiency.mjs', '--report-json'],
    blocking: true,
  },
  {
    name: 'validate-section-structure',
    command: 'npx',
    args: ['tsx', 'scripts/validators/validate-section-structure.mjs', '--report-json'],
    blocking: true,
  },
  {
    name: 'validate-design-system',
    command: 'node',
    args: ['scripts/validators/validate-design-system.cjs', '--report-json'],
    blocking: true,
  },
  {
    name: 'validate-graph',
    command: 'npx',
    args: ['tsx', 'scripts/validators/validate-graph.ts', '--report-json'],
    blocking: true,
  },
  {
    name: 'validate-internal-links',
    command: 'npx',
    args: ['tsx', 'scripts/validators/validate-internal-links.ts'],
    blocking: true,
  },
  {
    name: 'validate-cta-violations',
    command: 'npx',
    args: ['tsx', 'scripts/validators/validate-cta-violations.ts'],
    blocking: true,
  },
  {
    name: 'validate-related-duplication',
    command: 'npx',
    args: ['tsx', 'scripts/validators/validate-related-duplication.ts'],
    blocking: true,
  },
  {
    name: 'validate-inline-link-misuse',
    command: 'npx',
    args: ['tsx', 'scripts/validators/validate-inline-link-misuse.ts'],
    blocking: true,
  },
  {
    name: 'generate-proof-coverage',
    command: 'npx',
    args: ['tsx', 'scripts/validators/generate-proof-coverage.ts'],
    blocking: false,
  },
  {
    name: 'validate-tokens',
    command: 'node',
    args: ['scripts/validators/validate-tokens.mjs', '--report-json'],
    blocking: true,
  },
  {
    name: 'validate-inline-styles',
    command: 'node',
    args: ['scripts/validators/validate-inline-styles.mjs', '--report-json'],
    blocking: true,
  },
  {
    name: 'validate-docs',
    command: 'node',
    args: ['scripts/validators/validate-docs.mjs', '--report-json'],
    blocking: false,
  },
  {
    name: 'validate-vocabulary',
    command: 'node',
    args: ['scripts/validators/validate-vocabulary.mjs', '--report-json'],
    blocking: false,
  },
  {
    name: 'validate-checklist',
    command: 'node',
    args: ['scripts/validators/validate-checklist.mjs'],
    blocking: false,
  },
  {
    name: 'validate-reports-structure',
    command: 'node',
    args: ['scripts/validators/validate-reports-structure.mjs'],
    blocking: false,
  },
];

/**
 * @param {Validator} validator
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

  return {
    name: validator.name,
    command: validator.command,
    args: validator.args,
    status,
    duration: Date.now() - start,
    output,
  };
}

function buildReport(results) {
  const passed = results.filter(result => result.status === 'pass');
  const failed = results.filter(result => result.status === 'fail');
  const blockingFailed = failed.filter(
    result => validators.find(validator => validator.name === result.name)?.blocking !== false
  );
  const advisoryFailed = failed.filter(
    result => validators.find(validator => validator.name === result.name)?.blocking === false
  );

  const contentQualityReport = readJson('content-quality-report.json');

  return {
    generatedAt: new Date().toISOString(),
    total: {
      passed: passed.length,
      failed: failed.length,
      blockingFailed: blockingFailed.length,
      advisoryFailed: advisoryFailed.length,
      total: results.length,
    },
    validators: results.map(result => {
      const validator = validators.find(entry => entry.name === result.name);
      return {
        name: result.name,
        status: result.status,
        duration: result.duration,
        blocking: validator?.blocking !== false,
      };
    }),
    errors: failed.map(result => {
      const validator = validators.find(entry => entry.name === result.name);
      return {
        validator: result.name,
        blocking: validator?.blocking !== false,
        output: result.output,
      };
    }),
    seo: contentQualityReport?.summary?.seo ?? null,
    content: contentQualityReport?.summary?.content ?? null,
    authority: contentQualityReport?.summary?.authority ?? null,
  };
}

function readJson(fileName) {
  const filePath = path.join(root, 'reports', fileName);

  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch {
    return null;
  }
}

function main() {
  console.log('[validate-all] Running all validators...\n');

  /** @type {ValidatorResult[]} */
  const results = [];

  for (const validator of validators) {
    process.stdout.write(`  ${validator.name}${validator.blocking ? '' : ' [advisory]'} ... `);
    const result = runValidator(validator);
    results.push(result);

    if (result.status === 'pass') {
      console.log(`\u2713 (${result.duration}ms)`);
    } else {
      console.log(`\u2717 FAILED (${result.duration}ms)`);
    }
  }

  const report = buildReport(results);

  console.log('');
  console.log('='.repeat(60));
  console.log(
    `[validate-all] Results: ${report.total.passed} passed, ${report.total.blockingFailed} blocking failed, ${report.total.advisoryFailed} advisory failed (${report.total.total} total)`
  );
  console.log('='.repeat(60));

  if (report.errors.length > 0) {
    console.log('\nFailed validators:\n');
    for (const failure of report.errors) {
      console.log(`  \u2717 ${failure.validator}`);
      console.log(`    type: ${failure.blocking ? 'blocking' : 'advisory'}`);
      if (failure.output) {
        const lines = failure.output.split('\n').slice(0, 20);
        for (const line of lines) {
          console.log(`    ${line}`);
        }
        if (failure.output.split('\n').length > 20) {
          console.log('    ... (truncated)');
        }
      }
      console.log('');
    }
  }

  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2) + '\n');
  console.log(`[validate-all] Wrote ${path.relative(root, reportPath)}`);

  if (reportJson) {
    console.log('\n' + JSON.stringify(report, null, 2));
  }

  if (report.total.blockingFailed > 0) {
    process.exitCode = 1;
  } else {
    console.log('\n[validate-all] All blocking validators passed.');
  }
}

main();
