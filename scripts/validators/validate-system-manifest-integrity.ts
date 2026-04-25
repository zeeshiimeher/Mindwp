#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { createLogger } from '../../lib/logger/index.mjs';
import {
  getReportFiles,
  getTransientReportFiles,
  getValidatorDefinitions,
  systemManifest,
} from '../core/system-manifest.mjs';
import { createReportSchema } from '../lib/report-schema.mjs';

const root = process.cwd();
const reportsDir = path.join(root, 'reports');
const legacyScriptRegistryPath = path.join(root, 'scripts', 'system', 'script-registry.json');
const sourceCommand =
  'node --import tsx/esm scripts/validators/validate-system-manifest-integrity.ts';
const logger = createLogger({
  label: 'validate-system-manifest-integrity',
  mode: 'summary',
  rootDir: root,
});
const MANIFEST_VALIDATOR_ALIASES: Record<string, string[]> = {
  'validate-content-enforcement': [
    'validate-hero-list-length',
    'validate-heading-hierarchy',
    'validate-seo-position',
    'validate-faq-position',
    'validate-button-rule',
    'validate-badge-length',
  ],
  'validate-cta-label-contract': ['validate-cta-labels'],
};

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

function expandValidatorAliases(actualNames: string[]) {
  const actualSet = new Set(actualNames);

  for (const [fileName, aliases] of Object.entries(MANIFEST_VALIDATOR_ALIASES)) {
    if (!actualSet.has(fileName)) {
      continue;
    }

    for (const alias of aliases) {
      actualSet.add(alias);
    }

    actualSet.delete(fileName);
  }

  return [...actualSet].sort((left, right) => left.localeCompare(right));
}

function writeReport(report: unknown) {
  const reportPath = path.join(reportsDir, 'system-manifest-integrity-report.json');
  logger.writeReport(reportPath, report);
  return reportPath;
}

function main() {
  logger.step('validate-system-manifest-integrity');

  const validatorDefinitions = getValidatorDefinitions();
  const manifestValidatorNames = validatorDefinitions.map(validator => validator.name).sort();
  const validatorFiles = expandValidatorAliases([
    ...listNames(path.join(root, 'scripts', 'validators'), ['lib']),
    'check-generated',
    'validate-env',
    'typecheck',
    'lint',
  ]);
  const manifestReportFiles = getReportFiles().sort((left, right) => left.localeCompare(right));
  const transientReportFiles = [...getTransientReportFiles(), 'domain-structure-report.json'].sort(
    (left, right) => left.localeCompare(right)
  );
  const actualReportFiles = fs.existsSync(reportsDir)
    ? [...listReportFiles(reportsDir), 'system-manifest-integrity-report.json'].sort(
        (left, right) => left.localeCompare(right)
      )
    : ['system-manifest-integrity-report.json'];
  const allowedReportFiles = [
    ...new Set([
      ...manifestReportFiles,
      ...transientReportFiles,
      ...validatorDefinitions.map(validator => validator.reportFile),
      'system-manifest-integrity-report.json',
    ]),
  ].sort((left, right) => left.localeCompare(right));
  const analyzerFiles = listNames(path.join(root, 'scripts', 'analyzers'), ['README.md']);

  const validatorDiff = diff(manifestValidatorNames, validatorFiles);
  const reportDiff = diff(allowedReportFiles, actualReportFiles);
  const analyzerDiff = diff(
    [...systemManifest.analyzers, ...systemManifest.analyzerTools].sort(),
    analyzerFiles
  );
  const duplicateReports = allowedReportFiles.filter(
    (reportFile, index, files) => files.indexOf(reportFile) !== index
  );
  const duplicateValidators = manifestValidatorNames.filter(
    (validatorName, index, names) => names.indexOf(validatorName) !== index
  );
  const legacyArtifacts = fs.existsSync(legacyScriptRegistryPath)
    ? [{ area: 'commands', type: 'legacy', name: 'scripts/system/script-registry.json' }]
    : [];

  const issues = [
    ...legacyArtifacts,
    ...duplicateValidators.map(name => ({ area: 'validators', type: 'duplicate', name })),
    ...duplicateReports.map(name => ({ area: 'reports', type: 'duplicate', name })),
    ...validatorDiff.missing.map(name => ({ area: 'validators', type: 'missing', name })),
    ...validatorDiff.unexpected.map(name => ({ area: 'validators', type: 'orphaned', name })),
    ...reportDiff.missing.map(name => ({ area: 'reports', type: 'missing', name })),
    ...reportDiff.unexpected.map(name => ({ area: 'reports', type: 'orphaned', name })),
    ...analyzerDiff.missing.map(name => ({ area: 'analyzers', type: 'missing', name })),
    ...analyzerDiff.unexpected.map(name => ({ area: 'analyzers', type: 'orphaned', name })),
  ];

  const report = createReportSchema({
    name: 'system-manifest-integrity-report',
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
        expected: manifestValidatorNames,
        actual: validatorFiles,
        ...validatorDiff,
      },
      reports: {
        expected: allowedReportFiles,
        actual: actualReportFiles,
        ...reportDiff,
      },
      transientReports: transientReportFiles,
      analyzers: {
        expected: [...systemManifest.analyzers, ...systemManifest.analyzerTools],
        actual: analyzerFiles,
        ...analyzerDiff,
      },
      duplicates: {
        validators: duplicateValidators,
        reports: duplicateReports,
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
      'manifest drift',
      12
    );
    process.exitCode = 1;
    return;
  }

  logger.printSummary('system manifest matches validators, analyzers, and report outputs');
}

main();
