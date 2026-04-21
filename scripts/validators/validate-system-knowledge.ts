#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { createLogger } from '../../lib/logger/index.mjs';
import { systemKnowledge } from '../../src/system/knowledge';
import { validators as activeValidators } from '../core/validator-manifest.mjs';
import { createReportSchema } from '../lib/report-schema.mjs';

const root = process.cwd();
const reportsDir = path.join(root, 'reports');
const sourceCommand = 'node --import tsx/esm scripts/validators/validate-system-knowledge.ts';
const logger = createLogger({ label: 'validate-system-knowledge', mode: 'summary', rootDir: root });
const syntheticValidators = ['check-generated', 'validate-env', 'typecheck', 'lint', 'report-size-guard'];

function toName(fileName: string) {
  return fileName.replace(/\.(mjs|cjs|js|ts)$/i, '');
}

function listNames(dirPath: string, ignored: string[] = []) {
  return fs
    .readdirSync(dirPath)
    .filter(name => !ignored.includes(name))
    .filter(name => /\.(mjs|cjs|js|ts)$/i.test(name))
    .map(toName)
    .sort((left, right) => left.localeCompare(right));
}

function listReportFiles(baseDir: string, prefix = ''): string[] {
  const entries = fs.readdirSync(baseDir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    if (
      entry.name === '.system-full' ||
      entry.name === 'system-snapshots' ||
      entry.name === 'visual-audit'
    ) {
      continue;
    }

    const relativePath = prefix ? `${prefix}/${entry.name}` : entry.name;
    const absolutePath = path.join(baseDir, entry.name);

    if (entry.isDirectory()) {
      files.push(...listReportFiles(absolutePath, relativePath));
      continue;
    }

    if (/\.(json|md)$/i.test(entry.name)) {
      files.push(relativePath);
    }
  }

  return files.sort((left, right) => left.localeCompare(right));
}

function diff(expected: readonly string[], actual: string[]) {
  return {
    missing: expected.filter(item => !actual.includes(item)),
    unexpected: actual.filter(item => !expected.includes(item)),
  };
}

function writeReport(report: unknown) {
  const reportPath = path.join(reportsDir, 'system-knowledge-report.json');
  fs.mkdirSync(reportsDir, { recursive: true });
  fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8');
  return reportPath;
}

function main() {
  logger.step('validate-system-knowledge');

  const trackedActiveValidators = [...systemKnowledge.validators]
    .filter(name => name !== 'report-size-guard')
    .sort((left, right) => left.localeCompare(right));
  const activeValidatorNames = activeValidators
    .map(validator => validator.name)
    .sort((left, right) => left.localeCompare(right));
  const validatorFiles = [
    ...syntheticValidators,
    ...listNames(path.join(root, 'scripts', 'validators')),
  ].sort((left, right) => left.localeCompare(right));
  const analyzerFiles = listNames(path.join(root, 'scripts', 'analyzers'), ['README.md']);
  const reportFiles = [...listReportFiles(reportsDir), 'system-knowledge-report.json'].sort(
    (left, right) => left.localeCompare(right)
  );

  const validatorDiff = diff([...systemKnowledge.validators].sort(), validatorFiles);
  const activeValidatorDiff = diff(trackedActiveValidators, activeValidatorNames);
  const analyzerDiff = diff([...systemKnowledge.analyzers].sort(), analyzerFiles);
  const reportDiff = diff([...systemKnowledge.reports].sort(), reportFiles);

  const issues = [
    ...validatorDiff.missing.map(name => ({ area: 'validators', type: 'missing', name })),
    ...validatorDiff.unexpected.map(name => ({ area: 'validators', type: 'orphaned', name })),
    ...activeValidatorDiff.missing.map(name => ({ area: 'active-validators', type: 'missing', name })),
    ...activeValidatorDiff.unexpected.map(name => ({ area: 'active-validators', type: 'orphaned', name })),
    ...analyzerDiff.missing.map(name => ({ area: 'analyzers', type: 'missing', name })),
    ...analyzerDiff.unexpected.map(name => ({ area: 'analyzers', type: 'orphaned', name })),
    ...reportDiff.missing.map(name => ({ area: 'reports', type: 'missing', name })),
    ...reportDiff.unexpected.map(name => ({ area: 'reports', type: 'orphaned', name })),
  ];

  const report = createReportSchema({
    name: 'system-knowledge-report',
    status: issues.length > 0 ? 'FAIL' : 'PASS',
    summary: {
      total: issues.length,
      passed: issues.length === 0 ? 1 : 0,
      failed: issues.length,
      warnings: 0,
    },
    issues,
    data: {
      validators: {
        expected: systemKnowledge.validators,
        actual: validatorFiles,
        ...validatorDiff,
      },
      activeValidators: {
        expected: trackedActiveValidators,
        actual: activeValidatorNames,
        ...activeValidatorDiff,
      },
      analyzers: { expected: systemKnowledge.analyzers, actual: analyzerFiles, ...analyzerDiff },
      reports: { expected: systemKnowledge.reports, actual: reportFiles, ...reportDiff },
      coverage: {
        validatorCoverage:
          validatorDiff.missing.length === 0 && validatorDiff.unexpected.length === 0,
        activeValidatorCoverage:
          activeValidatorDiff.missing.length === 0 && activeValidatorDiff.unexpected.length === 0,
        analyzerCoverage: analyzerDiff.missing.length === 0 && analyzerDiff.unexpected.length === 0,
        reportCoverage: reportDiff.missing.length === 0 && reportDiff.unexpected.length === 0,
      },
    },
    generatedAt: new Date().toISOString(),
    sourceCommand,
  });

  const reportPath = writeReport(report);
  logger.printSummary(`report -> ${logger.relativePath(reportPath)}`);

  if (issues.length > 0) {
    logger.printErrors(
      issues.map(issue => `${issue.area}:${issue.type}:${issue.name}`),
      'knowledge drift',
      12
    );
    process.exitCode = 1;
    return;
  }

  logger.printSummary('system knowledge matches validators, analyzers, and generated reports');
}

main();
