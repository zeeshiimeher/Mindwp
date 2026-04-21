#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const args = new Set(process.argv.slice(2));
const shouldReportJson = args.has('--report-json');
const reportPath = path.join(root, 'reports', 'ui-purity-report.json');

const violations = [];

function listFiles(dirPath) {
  return fs.readdirSync(dirPath, { withFileTypes: true }).flatMap(entry => {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      return listFiles(fullPath);
    }

    return [fullPath];
  });
}

function pushViolation(file, line, rule, message) {
  violations.push({ file, line, rule, message });
}

const uiRoots = [path.join(root, 'src', 'components'), path.join(root, 'src', 'global')];

for (const filePath of uiRoots.flatMap(listFiles).filter(file => file.endsWith('.tsx'))) {
  const relativePath = path.relative(root, filePath).replaceAll(path.sep, '/');
  const lines = fs.readFileSync(filePath, 'utf8').split('\n');

  lines.forEach((line, index) => {
    if (/\b(Math\.random|localStorage|sessionStorage)\b/.test(line)) {
      pushViolation(
        relativePath,
        index + 1,
        'NON_DETERMINISTIC_UI',
        'Production UI components must not use Math.random(), localStorage, or sessionStorage.'
      );
    }

    if (/^import\s+(?!type\b).+from\s+['"]@\/domains\/.*\/data\//.test(line)) {
      pushViolation(
        relativePath,
        index + 1,
        'UI_DOMAIN_DATA_IMPORT',
        'Production UI components must not import directly from domain data files.'
      );
    }

    if (/^import\s+(?!type\b).+from\s+['"]@\/lib\/content-graph(?!\/types['"])/.test(line)) {
      pushViolation(
        relativePath,
        index + 1,
        'UI_GRAPH_IMPORT',
        'Production UI components must not import runtime content-graph modules.'
      );
    }
  });
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
  console.error(`✗ UI purity validation found ${violations.length} issue(s):`);
  for (const violation of violations) {
    console.error(
      `  [${violation.file}:${violation.line}] [${violation.rule}] ${violation.message}`
    );
  }
  process.exitCode = 1;
} else {
  console.log('✓ UI purity validation passed.');
}
