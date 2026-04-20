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
import fs from 'node:fs';
import path from 'node:path';

import { resolveLoggingMode } from '../../config/loggingConfig.mjs';
import { createLogger } from '../../lib/logger/index.mjs';
import { readReportJson } from '../lib/report-json.mjs';
import { createReportSchema, unwrapReportData } from '../lib/report-schema.mjs';

const args = new Set(process.argv.slice(2));
const reportJson = args.has('--report-json');

const root = process.cwd();
const reportPath = path.join(root, 'reports', 'validation-results.json');
const validationReportPath = path.join(root, 'reports', 'validation-report.json');
const loggingMode = resolveLoggingMode(process.argv.slice(2), process.env);
const logger = createLogger({ label: 'validate-all', mode: loggingMode, rootDir: root });

/**
 * @typedef {{ name: string; command: string; args: string[]; blocking: boolean; reportFile: string; syntheticReport?: boolean }} Validator
 * @typedef {{ name: string; command: string; args: string[]; status: 'pass' | 'fail'; duration: number; output: string; reportFile: string; reportMissing?: boolean }} ValidatorResult
 */

/** @type {Validator[]} */
const validators = [
  {
    name: 'check-generated',
    command: 'node',
    args: ['scripts/core/check-generated.mjs'],
    blocking: true,
    reportFile: 'check-generated-report.json',
    syntheticReport: true,
  },
  { name: 'typecheck', command: 'npx', args: ['tsc', '--noEmit'], blocking: true, reportFile: 'typecheck-report.json', syntheticReport: true },
  { name: 'lint', command: 'node', args: ['scripts/runners/run-eslint.mjs'], blocking: false, reportFile: 'lint-report.json', syntheticReport: true },
  {
    name: 'validate-content-contract',
    command: 'npx',
    args: ['tsx', 'scripts/validators/validate-content-contract.mjs', '--report-json'],
    blocking: true,
    reportFile: 'content-contract-report.json',
  },
  {
    name: 'validate-content-quality',
    command: 'npx',
    args: ['tsx', 'scripts/validators/validate-content-quality.mjs', '--report-json'],
    blocking: true,
    reportFile: 'content-quality-report.json',
  },
  {
    name: 'validate-domain-structure',
    command: 'npx',
    args: ['tsx', 'scripts/validators/validate-domain-structure.mjs', '--report-json'],
    blocking: true,
    reportFile: 'domain-structure-report.json',
  },
  {
    name: 'validate-cta-label-contract',
    command: 'npx',
    args: ['tsx', 'scripts/validators/validate-cta-label-contract.mjs', '--report-json'],
    blocking: true,
    reportFile: 'cta-label-contract-report.json',
  },
  {
    name: 'validate-cta-resolver-integrity',
    command: 'node',
    args: ['scripts/validators/validate-cta-resolver-integrity.mjs', '--report-json'],
    blocking: true,
    reportFile: 'cta-resolver-integrity-report.json',
  },
  {
    name: 'validate-conversion-contract',
    command: 'npx',
    args: ['tsx', 'scripts/validators/validate-conversion-contract.mjs', '--report-json'],
    blocking: true,
    reportFile: 'conversion-contract-report.json',
  },
  {
    name: 'validate-template-payload-sufficiency',
    command: 'npx',
    args: ['tsx', 'scripts/validators/validate-template-payload-sufficiency.mjs', '--report-json'],
    blocking: true,
    reportFile: 'template-payload-report.json',
  },
  {
    name: 'validate-section-structure',
    command: 'npx',
    args: ['tsx', 'scripts/validators/validate-section-structure.mjs', '--report-json'],
    blocking: true,
    reportFile: 'section-structure-report.json',
  },
  {
    name: 'validate-section-shell-integrity',
    command: 'node',
    args: ['scripts/validators/validate-section-shell-integrity.mjs', '--report-json'],
    blocking: true,
    reportFile: 'section-shell-integrity-report.json',
  },
  {
    name: 'validate-design-system',
    command: 'node',
    args: ['scripts/validators/validate-design-system.cjs', '--report-json'],
    blocking: true,
    reportFile: 'design-system-report.json',
  },
  {
    name: 'validate-ui-purity',
    command: 'node',
    args: ['scripts/validators/validate-ui-purity.mjs', '--report-json'],
    blocking: true,
    reportFile: 'ui-purity-report.json',
  },
  {
    name: 'validate-graph',
    command: 'npx',
    args: ['tsx', 'scripts/validators/validate-graph.ts', '--report-json'],
    blocking: true,
    reportFile: 'graph-report.json',
  },
  {
    name: 'validate-internal-links',
    command: 'npx',
    args: ['tsx', 'scripts/validators/validate-internal-links.ts'],
    blocking: true,
    reportFile: 'internal-links-report.json',
  },
  {
    name: 'validate-cta-violations',
    command: 'npx',
    args: ['tsx', 'scripts/validators/validate-cta-violations.ts'],
    blocking: true,
    reportFile: 'cta-violation-scan.json',
  },
  {
    name: 'validate-related-duplication',
    command: 'npx',
    args: ['tsx', 'scripts/validators/validate-related-duplication.ts'],
    blocking: true,
    reportFile: 'related-duplication-scan.json',
  },
  {
    name: 'validate-production-contracts',
    command: 'npx',
    args: ['tsx', 'scripts/validators/validate-production-contracts.ts', '--report-json'],
    blocking: true,
    reportFile: 'production-contract-report.json',
  },
  {
    name: 'validate-inline-link-misuse',
    command: 'npx',
    args: ['tsx', 'scripts/validators/validate-inline-link-misuse.ts'],
    blocking: true,
    reportFile: 'inline-link-misuse-scan.json',
  },
  {
    name: 'generate-proof-coverage',
    command: 'npx',
    args: ['tsx', 'scripts/validators/generate-proof-coverage.ts'],
    blocking: false,
    reportFile: 'proof-coverage.json',
  },
  {
    name: 'validate-tokens',
    command: 'node',
    args: ['scripts/validators/validate-tokens.mjs', '--report-json'],
    blocking: true,
    reportFile: 'token-report.json',
  },
  {
    name: 'validate-inline-styles',
    command: 'node',
    args: ['scripts/validators/validate-inline-styles.mjs', '--report-json'],
    blocking: true,
    reportFile: 'inline-style-report.json',
  },
  {
    name: 'validate-docs',
    command: 'node',
    args: ['scripts/validators/validate-docs.mjs', '--report-json'],
    blocking: false,
    reportFile: 'docs-report.json',
  },
  {
    name: 'validate-vocabulary',
    command: 'node',
    args: ['scripts/validators/validate-vocabulary.mjs', '--report-json'],
    blocking: false,
    reportFile: 'vocabulary-report.json',
  },
];

function getReportAbsolutePath(fileName) {
  return path.join(root, 'reports', fileName);
}

function writeSyntheticValidatorReport(validator, result) {
  const reportPath = getReportAbsolutePath(validator.reportFile);
  const report = createReportSchema({
    name: validator.name,
    status: result.status === 'pass' ? 'PASS' : validator.blocking ? 'FAIL' : 'WARN',
    summary: {
      total: 1,
      passed: result.status === 'pass' ? 1 : 0,
      failed: result.status === 'fail' && validator.blocking ? 1 : 0,
      warnings: result.status === 'fail' && !validator.blocking ? 1 : 0,
    },
    issues: result.status === 'fail' ? [{ validator: validator.name, output: result.output || 'Validator failed.' }] : [],
    data: {
      validator: validator.name,
      blocking: validator.blocking,
      command: [validator.command, ...validator.args].join(' '),
      durationMs: result.duration,
    },
    sourceCommand: [validator.command, ...validator.args].join(' '),
  });

  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8');
}

function finalizeValidatorResult(validator, result) {
  if (validator.syntheticReport) {
    writeSyntheticValidatorReport(validator, result);
  }

  const reportPath = getReportAbsolutePath(validator.reportFile);
  const reportExists = fs.existsSync(reportPath);
  if (reportExists) {
    return {
      ...result,
      reportFile: validator.reportFile,
      reportMissing: false,
    };
  }

  return {
    ...result,
    status: 'fail',
    output: [result.output, `Missing required report file: reports/${validator.reportFile}`]
      .filter(Boolean)
      .join('\n'),
    reportFile: validator.reportFile,
    reportMissing: true,
  };
}

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
    reportFile: validator.reportFile,
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
          reportFile: validator.reportFile,
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

  const contentQualityReport = unwrapReportData(readReportJson(root, 'content-quality-report.json'));

  const payload = {
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
        reportFile: result.reportFile,
        reportMissing: result.reportMissing === true,
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

  return createReportSchema({
    name: 'validation-results',
    status: blockingFailed.length > 0 ? 'FAIL' : advisoryFailed.length > 0 ? 'WARN' : 'PASS',
    summary: {
      total: results.length,
      passed: passed.length,
      failed: blockingFailed.length,
      warnings: advisoryFailed.length,
    },
    issues: payload.errors,
    data: payload,
    sourceCommand: 'node scripts/core/validate-all.mjs --report-json',
  });
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

    const result = finalizeValidatorResult(validator, runValidator(validator));
    blockingResults.push(result);
    logValidatorResult(result);
  }

  /** @type {ValidatorResult[]} */
  let advisoryResults = [];

  if (advisoryValidators.length > 0) {
    logger.printSection('running advisory validators');

    advisoryResults = await Promise.all(
      advisoryValidators.map(async validator => finalizeValidatorResult(validator, await runValidatorAsync(validator)))
    );

    for (const result of advisoryResults) {
      logValidatorResult(result);
    }
  }

  const resultByName = new Map([...blockingResults, ...advisoryResults].map(result => [result.name, result]));
  const results = validators.map(validator => resultByName.get(validator.name)).filter(Boolean);

  const report = buildReport(results);

  logger.printTotals({
    passed: report.summary.passed,
    blockingFailed: report.data.total.blockingFailed,
    advisoryFailed: report.data.total.advisoryFailed,
    total: report.summary.total,
  });

  if ((report.issues ?? []).length > 0) {
    logger.printErrors(
      report.issues.map(failure => {
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

  if (report.data.total.blockingFailed > 0) {
    process.exitCode = 1;
  } else {
    logger.printSummary('all blocking validators passed');
  }
}

main();
