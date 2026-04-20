#!/usr/bin/env node

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

import { execFile, execFileSync } from 'node:child_process';
import path from 'node:path';

import { resolveLoggingMode } from '../../config/loggingConfig.mjs';
import { createLogger } from '../../lib/logger/index.mjs';
import { readReportJson } from '../lib/report-json.mjs';

const args = new Set(process.argv.slice(2));
const reportJson = args.has('--report-json');

const root = process.cwd();
const reportPath = path.join(root, 'reports', 'validation-results.json');
const validationReportPath = path.join(root, 'reports', 'validation-report.json');
const loggingMode = resolveLoggingMode(process.argv.slice(2), process.env);
const logger = createLogger({ label: 'validate-all', mode: loggingMode, rootDir: root });

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
    name: 'validate-cta-resolver-integrity',
    command: 'node',
    args: ['scripts/validators/validate-cta-resolver-integrity.mjs', '--report-json'],
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
    name: 'validate-section-shell-integrity',
    command: 'node',
    args: ['scripts/validators/validate-section-shell-integrity.mjs', '--report-json'],
    blocking: true,
  },
  {
    name: 'validate-design-system',
    command: 'node',
    args: ['scripts/validators/validate-design-system.cjs', '--report-json'],
    blocking: true,
  },
  {
    name: 'validate-ui-purity',
    command: 'node',
    args: ['scripts/validators/validate-ui-purity.mjs', '--report-json'],
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
    name: 'validate-production-contracts',
    command: 'npx',
    args: ['tsx', 'scripts/validators/validate-production-contracts.ts', '--report-json'],
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

function runValidatorAsync(validator) {
  const start = Date.now();

  return new Promise(resolve => {
    execFile(
      validator.command,
      validator.args,
      {
        cwd: root,
        encoding: 'utf8',
        stdio: ['pipe', 'pipe', 'pipe'],
        timeout: 120_000,
      },
      (error, stdout, stderr) => {
        resolve({
          name: validator.name,
          command: validator.command,
          args: validator.args,
          status: error ? 'fail' : 'pass',
          duration: Date.now() - start,
          output: error ? [stdout, stderr].filter(Boolean).join('\n') : stdout || '',
        });
      }
    );
  });
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

  const contentQualityReport = readReportJson(root, 'content-quality-report.json');

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

function logValidatorResult(result) {
  logger.printNodeLine(`${result.name} -> ${result.status === 'pass' ? 'PASS' : 'FAIL'} (${result.duration}ms)`);
}

async function main() {
  logger.printSection('running validators');

  /** @type {ValidatorResult[]} */
  const blockingResults = [];
  const advisoryValidators = [];

  for (const validator of validators) {
    if (validator.blocking === false) {
      advisoryValidators.push(validator);
      continue;
    }

    const result = runValidator(validator);
    blockingResults.push(result);
    logValidatorResult(result);
  }

  /** @type {ValidatorResult[]} */
  let advisoryResults = [];

  if (advisoryValidators.length > 0) {
    logger.printSection('running advisory validators');

    advisoryResults = await Promise.all(advisoryValidators.map(runValidatorAsync));

    for (const result of advisoryResults) {
      logValidatorResult(result);
    }
  }

  const resultByName = new Map([...blockingResults, ...advisoryResults].map(result => [result.name, result]));
  const results = validators.map(validator => resultByName.get(validator.name)).filter(Boolean);

  const report = buildReport(results);

  logger.printTotals({
    passed: report.total.passed,
    blockingFailed: report.total.blockingFailed,
    advisoryFailed: report.total.advisoryFailed,
    total: report.total.total,
  });

  if (report.errors.length > 0) {
    logger.printErrors(
      report.errors.map(failure => {
        const excerpt = failure.output
          ? failure.output
              .split('\n')
              .map(line => line.trim())
              .filter(Boolean)
              .slice(0, logger.isVerbose() ? 8 : 1)
              .join(' | ')
          : 'no output captured';
        return `${failure.validator} (${failure.blocking ? 'blocking' : 'advisory'}): ${excerpt}`;
      }),
      'failures',
      logger.isVerbose() ? 12 : 5
    );
  }

  const writtenReportPath = logger.writeReport(reportPath, report);
  logger.writeReport(validationReportPath, report);
  logger.printSummary(`report -> ${writtenReportPath}`);
  logger.printSummary(`report -> ${logger.relativePath(validationReportPath)}`);

  if (reportJson && logger.isVerbose()) {
    logger.printSummary('report-json flag active; full payload preserved in file output');
  }

  if (report.total.blockingFailed > 0) {
    process.exitCode = 1;
  } else {
    logger.printSummary('all blocking validators passed');
  }
}

main();
