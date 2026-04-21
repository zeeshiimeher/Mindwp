#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { listFilesRecursive } from '../lib/validator-helpers.mjs';

const args = new Set(process.argv.slice(2));
const shouldReportJson = args.has('--report-json');

const root = process.cwd();
const reportPath = path.join(root, 'reports', 'conversion-contract-report.json');

const DATA_DIRS = [
  'src/components',
  'src/config',
  'src/domains/blog/templates',
  'src/domains/case-studies/content',
  'src/domains/case-studies/templates',
  'src/domains/features/data',
  'src/domains/features/pages',
  'src/domains/features/renderers',
  'src/domains/home/data',
  'src/domains/industries/pages',
  'src/domains/industries/templates',
  'src/domains/resources/data',
  'src/domains/resources/pages',
  'src/domains/resources/templates',
  'src/domains/services/data',
  'src/domains/services/pages',
  'src/global',
  'src/screens',
];

function findFiles() {
  return DATA_DIRS.flatMap(relDir =>
    listFilesRecursive(path.join(root, relDir), {
      exts: ['.ts', '.tsx'],
      ignoreDirNames: ['dev', 'node_modules'],
    })
  );
}

function lineOfIndex(text, index) {
  let line = 1;
  for (let cursor = 0; cursor < index && cursor < text.length; cursor++) {
    if (text[cursor] === '\n') line++;
  }
  return line;
}

function pushMatches(pattern, text, rel, issues, code, messageFactory) {
  let match;
  while ((match = pattern.exec(text)) !== null) {
    issues.push({
      severity: 'error',
      file: rel,
      line: lineOfIndex(text, match.index),
      code,
      message: messageFactory(match),
    });
  }
}

function scanFile(filePath, issues, warnings) {
  const rel = path.relative(root, filePath);
  const text = fs.readFileSync(filePath, 'utf8');

  pushMatches(
    /['"]\/contact(?:\?[^'"]*)?['"]/g,
    text,
    rel,
    issues,
    'hardcoded_contact_href',
    () => 'Contact URLs must be generated via buildContactHref(), not hardcoded as string literals.'
  );

  pushMatches(
    /buildContactHref\(\s*['"]\/contact['"]/g,
    text,
    rel,
    issues,
    'hardcoded_contact_base',
    () =>
      'buildContactHref() must be called with canonical options only, not a raw /contact base string.'
  );

  pushMatches(
    /\bsource\s*:\s*[`'"]/g,
    text,
    rel,
    issues,
    'manual_source_string',
    () =>
      'Manual source strings are not allowed. Use buildContactHref({ system, sourceType, slug }).'
  );

  pushMatches(
    /source=[a-z-]+\/[a-z0-9-]+/g,
    text,
    rel,
    issues,
    'manual_source_query',
    match => `Manual source query detected (${match[0]}). Use buildContactHref() instead.`
  );

  if (rel === 'src/screens/Contact.tsx') {
    if (!text.includes("name='system'") && !text.includes('name="system"')) {
      issues.push({
        severity: 'error',
        file: rel,
        line: 1,
        code: 'missing_contact_system_field',
        message: 'Contact form must preserve the hidden system field.',
      });
    }

    if (!text.includes("name='source'") && !text.includes('name="source"')) {
      issues.push({
        severity: 'error',
        file: rel,
        line: 1,
        code: 'missing_contact_source_field',
        message: 'Contact form must preserve the hidden source field.',
      });
    }

    if (text.includes("name='intent'") || text.includes('name="intent"')) {
      issues.push({
        severity: 'error',
        file: rel,
        line: 1,
        code: 'legacy_contact_intent_field',
        message: 'Contact form must not include a hidden intent field.',
      });
    }
  }
}

async function main() {
  const issues = [];
  const warnings = [];

  for (const filePath of findFiles()) {
    scanFile(filePath, issues, warnings);
  }

  const report = {
    generatedAt: new Date().toISOString(),
    passed: issues.length === 0,
    issueCount: issues.length,
    warningCount: warnings.length,
    issues,
    warnings,
  };

  if (shouldReportJson) {
    fs.mkdirSync(path.dirname(reportPath), { recursive: true });
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2) + '\n');
  }

  if (warnings.length > 0) {
    console.warn(`⚠ Conversion contract validation: ${warnings.length} warning(s):`);
    for (const warning of warnings) {
      console.warn(`  - ${warning.message}`);
    }
    console.warn('');
  }

  if (issues.length === 0) {
    console.log('✓ Conversion contract validation passed.');
    return;
  }

  console.error(`✗ Conversion contract validation found ${issues.length} issue(s):`);
  for (const issue of issues) {
    console.error(`  - ${issue.message}`);
  }
  process.exitCode = 1;
}

main().catch(err => {
  console.error(
    `[validate-conversion-contract] ${err instanceof Error ? err.message : String(err)}`
  );
  process.exitCode = 1;
});
