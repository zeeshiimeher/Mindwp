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
    const trimmedLine = line.trim();

    if (
      trimmedLine.length === 0 ||
      trimmedLine.startsWith('//') ||
      trimmedLine.startsWith('/*') ||
      trimmedLine.startsWith('*') ||
      trimmedLine.startsWith('*/')
    ) {
      return;
    }

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

    if (/from\s+['"]@\/lib\/seo\/(seo|resolveMetadata)['"]/.test(line)) {
      pushViolation(
        relativePath,
        index + 1,
        'UI_SEO_IMPORT',
        'Production UI and renderer modules must not import SEO composition helpers.'
      );
    }

    if (/\bSITE_NAME\b|\bbuildSEO\b|\bopenGraph\b|\bcanonical\s*:/.test(line)) {
      pushViolation(
        relativePath,
        index + 1,
        'UI_SEO_LOGIC',
        'Production UI components must not define or compose SEO metadata directly.'
      );
    }

    if (
      /(title|seo|meta|heading)/i.test(line) &&
      (/\+\s*['"][^'"]*\|[^'"]*['"]/.test(line) ||
        /['"][^'"]*\|[^'"]*['"]\s*\+/.test(line) ||
        /`[^`]*\$\{[^}]+\}[^`]*\|[^`]*`/.test(line) ||
        /`[^`]*\|[^`]*\$\{[^}]+\}[^`]*`/.test(line))
    ) {
      pushViolation(
        relativePath,
        index + 1,
        'UI_TITLE_COMPOSITION',
        'Production UI components must not compose branded or SEO titles inline.'
      );
    }
  });
}

const rendererRoots = [path.join(root, 'src', 'domains')];

for (const filePath of rendererRoots.flatMap(listFiles).filter(file => /Renderer\.tsx$/.test(file))) {
  const relativePath = path.relative(root, filePath).replaceAll(path.sep, '/');
  const lines = fs.readFileSync(filePath, 'utf8').split('\n');

  lines.forEach((line, index) => {
    const trimmedLine = line.trim();

    if (
      trimmedLine.length === 0 ||
      trimmedLine.startsWith('//') ||
      trimmedLine.startsWith('/*') ||
      trimmedLine.startsWith('*') ||
      trimmedLine.startsWith('*/')
    ) {
      return;
    }

    if (/from\s+['"]@\/lib\/seo\/(seo|resolveMetadata)['"]/.test(line)) {
      pushViolation(
        relativePath,
        index + 1,
        'RENDERER_SEO_IMPORT',
        'Renderers must not import SEO composition helpers.'
      );
    }

    if (/\bSITE_NAME\b|\bbuildSEO\b|\bopenGraph\b|\bcanonical\s*:/.test(line)) {
      pushViolation(
        relativePath,
        index + 1,
        'RENDERER_SEO_LOGIC',
        'Renderers must not define or compose SEO metadata directly.'
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
