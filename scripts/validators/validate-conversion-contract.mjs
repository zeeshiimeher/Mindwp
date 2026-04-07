#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { listFilesRecursive } from '../lib/validator-helpers.mjs';
import {
  buildSlugIndex,
  buildTsProject,
  loadCanonicalSets,
  loadStructuredGraphNodes,
  normalizeIntent,
} from '../lib/contract-validator-helpers.mjs';

const args = new Set(process.argv.slice(2));
const shouldReportJson = args.has('--report-json');

const root = process.cwd();
const reportPath = path.join(root, 'reports', 'conversion-contract-report.json');

const DATA_DIRS = [
  'src/domains/services/data',
  'src/domains/features/data',
  'src/domains/resources/data',
  'src/domains/industries/data',
  'src/domains/case-studies/data',
  'src/domains/blog/data',
  'src/domains/blog/content',
  'src/domains/resources/content',
  'src/domains/case-studies/content',
  'src/domains/blog/templates',
  'src/domains/resources/templates',
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

function validateHrefLiteral(href, context, canonicalSystems, slugIndex, issues, warnings) {
  if (!href.startsWith('/contact')) return;

  const url = new URL(href, 'https://mindwp.local');
  if (url.pathname !== '/contact') {
    issues.push({
      severity: 'error',
      code: 'invalid_cta_path',
      ...context,
      message: `CTA must point to /contact (found ${url.pathname})`,
    });
  }

  const system = url.searchParams.get('system');
  const source = url.searchParams.get('source');

  if (!system) {
    warnings.push({
      severity: 'warning',
      code: 'missing_system_param',
      ...context,
      message: 'CTA is missing the system query param; fallback behavior is allowed but should be explicit.',
    });
  } else if (!canonicalSystems.has(system)) {
    issues.push({
      severity: 'error',
      code: 'invalid_system_param',
      ...context,
      message: `CTA system param "${system}" is not canonical.`,
    });
  }

  if (!source) {
    warnings.push({
      severity: 'warning',
      code: 'missing_source_param',
      ...context,
      message: 'CTA is missing the source query param; fallback behavior is allowed but should be explicit.',
    });
    return;
  }

  if (!/^[a-z-]+\/[a-z0-9-]+$/.test(source)) {
    issues.push({
      severity: 'error',
      code: 'invalid_source_format',
      ...context,
      message: `CTA source param must match {type}/{slug} (found ${source}).`,
    });
    return;
  }

  if (!slugIndex.has(source)) {
    warnings.push({
      severity: 'warning',
      code: 'unknown_source_slug',
      ...context,
      message: `CTA source "${source}" does not currently map to a structured content node.`,
    });
  }
}

function scanFile(filePath, canonicalSystems, slugIndex, issues, warnings) {
  const rel = path.relative(root, filePath);
  const text = fs.readFileSync(filePath, 'utf8');

  const hrefPatterns = [
    /(buttonHref|buttonUrl|href)\s*:\s*['"]([^'"]+)['"]/g,
    /href=['"]([^'"]+)['"]/g,
  ];

  for (const pattern of hrefPatterns) {
    let match;
    while ((match = pattern.exec(text)) !== null) {
      const href = match[2] ?? match[1];
      validateHrefLiteral(href, { file: rel, line: lineOfIndex(text, match.index) }, canonicalSystems, slugIndex, issues, warnings);
    }
  }

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

    if (!text.includes("name='intent'") && !text.includes('name="intent"')) {
      warnings.push({
        severity: 'warning',
        file: rel,
        line: 1,
        code: 'missing_contact_intent_field',
        message: 'Contact form does not yet include a hidden intent field; keep this ready for future payload validation.',
      });
    }
  }
}

async function main() {
  const project = buildTsProject(root);
  const canonical = loadCanonicalSets(project, root);
  const nodes = await loadStructuredGraphNodes();
  const slugIndex = buildSlugIndex(nodes);
  const issues = [];
  const warnings = [];

  for (const node of nodes) {
    const intent = normalizeIntent(node.intent, node.type);
    if (intent.kind === 'invalid') {
      issues.push({
        severity: 'error',
        file: `${node.type}/${node.slug}`,
        line: 0,
        code: 'invalid_intent',
        message: `${node.type}/${node.slug} has unmapped intent "${node.intent}".`,
      });
    }

    if (intent.kind === 'legacy') {
      warnings.push({
        severity: 'warning',
        file: `${node.type}/${node.slug}`,
        line: 0,
        code: 'legacy_intent',
        message: `${node.type}/${node.slug} uses legacy intent "${node.intent}"; normalized to "${intent.normalized}" for conversion checks.`,
      });
    }
  }

  for (const filePath of findFiles()) {
    scanFile(filePath, canonical.systems, slugIndex, issues, warnings);
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
  console.error(`[validate-conversion-contract] ${err instanceof Error ? err.message : String(err)}`);
  process.exitCode = 1;
});