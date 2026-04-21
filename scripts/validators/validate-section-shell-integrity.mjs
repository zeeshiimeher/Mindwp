#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const args = new Set(process.argv.slice(2));
const shouldReportJson = args.has('--report-json');
const reportPath = path.join(root, 'reports', 'section-shell-integrity-report.json');
const resourceSectionsDir = path.join(
  root,
  'src',
  'components',
  'reusable',
  'sections',
  'resources'
);
const shellBackedResourceSections = new Set([
  'ResourceChecklistSection.tsx',
  'ResourceComparisonSection.tsx',
  'ResourceTakeawaysSection.tsx',
  'ResourceTemplatesSection.tsx',
]);

function listFiles(dirPath) {
  return fs.readdirSync(dirPath, { withFileTypes: true }).flatMap(entry => {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      return listFiles(fullPath);
    }

    return [fullPath];
  });
}

function toRel(filePath) {
  return path.relative(root, filePath).replaceAll(path.sep, '/');
}

const violations = [];

for (const filePath of listFiles(resourceSectionsDir)) {
  const fileName = path.basename(filePath);
  if (!fileName.endsWith('.tsx') || !shellBackedResourceSections.has(fileName)) {
    continue;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  if (!/<ResourceSectionShell\b/.test(content)) {
    violations.push({
      file: toRel(filePath),
      shell: 'ResourceSectionShell',
      message:
        'Reusable resource section components must compose through ResourceSectionShell instead of copying the wrapper/header structure inline.',
    });
  }
}

if (shouldReportJson) {
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(
    reportPath,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        passed: violations.length === 0,
        violationCount: violations.length,
        violations,
      },
      null,
      2
    ) + '\n'
  );
}

if (violations.length > 0) {
  console.error(`✗ Section shell integrity validation found ${violations.length} issue(s):`);
  for (const violation of violations) {
    console.error(`  [${violation.file}] ${violation.message}`);
  }
  process.exitCode = 1;
} else {
  console.log('✓ Section shell integrity validation passed.');
}
