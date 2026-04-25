#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { createLogger } from '../../lib/logger/index.mjs';

const args = new Set(process.argv.slice(2));
const shouldReportJson = args.has('--report-json');
const root = process.cwd();
const targetPath = path.join(root, 'src', 'lib', 'cta', 'primaryAction.ts');
const reportPath = path.join(root, 'reports', 'cta-resolver-integrity-report.json');
const logger = createLogger({ label: 'validate-cta-resolver-integrity', mode: 'summary', rootDir: root });

const ALLOWED_FUNCTION_EXPORTS = new Set([
  'getPrimaryCTA',
  'getSecondaryCTA',
  'buildPrimaryCtaAction',
  'buildGlobalPrimaryCtaAction',
  'buildGlobalPrimaryCtaLinks',
]);

function lineNumberForIndex(text, index) {
  return text.slice(0, index).split('\n').length;
}

function buildIssue(code, message, line) {
  return {
    code,
    file: path.relative(root, targetPath).replaceAll(path.sep, '/'),
    line,
    message,
  };
}

function main() {
  const source = fs.readFileSync(targetPath, 'utf8');
  const issues = [];

  for (const match of source.matchAll(/export function\s+(\w+)\s*\(/g)) {
    const name = match[1];

    if (/PrimaryCta/i.test(name) && !ALLOWED_FUNCTION_EXPORTS.has(name)) {
      issues.push(
        buildIssue(
          'unexpected_cta_resolver_export',
          `Unexpected CTA resolver export \"${name}\" in the canonical CTA layer. Keep a single approved resolver surface in src/lib/cta/primaryAction.ts.`,
          lineNumberForIndex(source, match.index ?? 0)
        )
      );
    }
  }

  for (const match of source.matchAll(/export const\s+(\w+)\s*=/g)) {
    const name = match[1];

    if (/PrimaryCta|GLOBAL_PRIMARY_CTA_DEFAULTS/i.test(name)) {
      issues.push(
        buildIssue(
          'unexpected_cta_helper_export',
          `Unexpected CTA helper export \"${name}\" in the canonical CTA layer. Keep helper ownership internal and singular in src/lib/cta/primaryAction.ts.`,
          lineNumberForIndex(source, match.index ?? 0)
        )
      );
    }
  }

  const globalDefaultMatches = [
    ...source.matchAll(
      /system:\s*'smart-website-systems'[\s\S]{0,160}?sourceType:\s*'global'[\s\S]{0,160}?slug:\s*'navigation'/g
    ),
  ];

  if (globalDefaultMatches.length !== 1) {
    issues.push(
      buildIssue(
        'duplicate_global_cta_defaults',
        `Expected exactly one global CTA defaults definition shape in src/lib/cta/primaryAction.ts, found ${globalDefaultMatches.length}.`,
        globalDefaultMatches[1] ? lineNumberForIndex(source, globalDefaultMatches[1].index ?? 0) : 1
      )
    );
  }

  const report = {
    generatedAt: new Date().toISOString(),
    passed: issues.length === 0,
    issueCount: issues.length,
    issues,
  };

  if (shouldReportJson) {
    logger.writeReport(reportPath, report);
  }

  if (issues.length === 0) {
    console.log('✓ CTA resolver integrity validation passed.');
    return;
  }

  console.error(`✗ CTA resolver integrity validation found ${issues.length} issue(s):`);
  for (const issue of issues) {
    console.error(`  - [${issue.file}:${issue.line}] ${issue.message}`);
  }
  process.exit(1);
}

main();
