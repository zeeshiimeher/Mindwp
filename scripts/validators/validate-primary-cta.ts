#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { APPROVED_CTA_LABELS } from '../../src/lib/cta/primaryAction.ts';
import { listFilesRecursive } from '../lib/validator-helpers.mjs';

type Issue = {
  severity: 'error';
  code: string;
  file: string;
  line: number;
  message: string;
};

const args = new Set(process.argv.slice(2));
const shouldReportJson = args.has('--report-json');
const root = process.cwd();
const reportPath = path.join(root, 'reports', 'cta-contract-report.json');

const CTA_SOURCE_DIRS = ['src/components', 'src/domains', 'src/global', 'src/screens'];

const DATA_DIRS = [
  'src/domains/features/data',
  'src/domains/home/data',
  'src/domains/services/data',
];

const FULL_CTA_COUNT_SURFACE_PATTERNS = ['/renderers/', '/templates/', '/pages/', 'src/screens/'];

const allowedHardcodedLabelFiles = new Set([
  'src/components/sections/PrimaryCTASection.tsx',
  'src/lib/cta/primaryAction.ts',
  'scripts/validators/validate-primary-cta.ts',
  'scripts/validators/validate-cta-label-contract.mjs',
  'tests/system/cta-simulation.test.ts',
]);

function lineOfIndex(text: string, index: number) {
  let line = 1;
  for (let cursor = 0; cursor < index && cursor < text.length; cursor++) {
    if (text[cursor] === '\n') {
      line += 1;
    }
  }
  return line;
}

function normalizeRelative(filePath: string) {
  return path.relative(root, filePath).replaceAll(path.sep, '/');
}

function collectFiles(relativeDirs: string[]) {
  const allowedExtensions = new Set(['.ts', '.tsx']);
  const ignoredSegments = ['/__tests__/', '/dev/', '/node_modules/'];

  return relativeDirs.flatMap(relativeDir =>
    listFilesRecursive(path.join(root, relativeDir)).filter((filePath: string) => {
      const normalizedPath = filePath.replaceAll(path.sep, '/');
      return (
        allowedExtensions.has(path.extname(filePath)) &&
        !ignoredSegments.some(segment => normalizedPath.includes(segment))
      );
    })
  );
}



function extractCtaBlocks(source: string) {
  // Match only PrimaryCTASection (self-closing or with children)
  const primary = [...source.matchAll(/<PrimaryCTASection\b[\s\S]*?\/>/g)];
  return { primary };
}


export function scanPrimaryCtaUsageFile(relativePath: string, source: string): Issue[] {
  const issues: Issue[] = [];

  const { primary } = extractCtaBlocks(source);
  const allBlocks = [...primary];
  const fullBlocks = allBlocks.filter(match => !/mode\s*=\s*['"]actions-only['"]/.test(match[0]));

  // Accept exactly one PrimaryCTASection per page
  if (
    allBlocks.length > 0 &&
    fullBlocks.length !== 1 &&
    FULL_CTA_COUNT_SURFACE_PATTERNS.some(pattern => relativePath.includes(pattern))
  ) {
    issues.push({
      severity: 'error',
      code: 'invalid_primary_cta_count',
      file: relativePath,
      line: lineOfIndex(source, allBlocks[0]?.index ?? 0),
      message: 'Exactly ONE PrimaryCTASection required per page.',
    });
  }

  for (const block of allBlocks) {
    const snippet = block[0];
    const line = lineOfIndex(source, block.index ?? 0);
    const usesSpread = /\{\.\.\.[^}]+\}/.test(snippet);
    const isActionsOnly = /mode\s*=\s*['"]actions-only['"]/.test(snippet);

    if (isActionsOnly && /PrimaryCTASection/.test(snippet)) {
      issues.push({
        severity: 'error',
        code: 'primary_cta_section_cannot_be_actions_only',
        file: relativePath,
        line,
        message:
          'PrimaryCTASection must not be used for action buttons. Use HeroActions or ActionButtons instead.',
      });
    }

    // Only enforce title/description/legacy prop checks for PrimaryCTASection
    if (/PrimaryCTASection/.test(snippet)) {
      if (!usesSpread && !/\btitle\s*=/.test(snippet)) {
        issues.push({
          severity: 'error',
          code: 'missing_cta_title',
          file: relativePath,
          line,
          message: 'Every PrimaryCTASection usage must provide a title prop.',
        });
      }
      if (!usesSpread && !/\bdescription\s*=/.test(snippet)) {
        issues.push({
          severity: 'error',
          code: 'missing_cta_description',
          file: relativePath,
          line,
          message: 'Every PrimaryCTASection usage must provide a description prop.',
        });
      }
      for (const legacyProp of [
        'system',
        'pageType',
        'slug',
        'intent',
        'position',
        'secondaryButtonCssPrefix',
      ]) {
        if (new RegExp(`\b${legacyProp}\s*=`).test(snippet)) {
          issues.push({
            severity: 'error',
            code: 'legacy_cta_prop',
            file: relativePath,
            line,
            message: `PrimaryCTASection must not receive legacy prop "${legacyProp}".`,
          });
        }
      }
    }
  }

  if (
    relativePath !== 'src/components/sections/PrimaryCTASection.tsx' &&
    /className\s*=\s*['"][^'"]*(cta__panel|cta__content|cta__actions)[^'"]*['"]/.test(source)
  ) {
    const match = source.match(
      /className\s*=\s*['"][^'"]*(cta__panel|cta__content|cta__actions)[^'"]*['"]/
    );
    issues.push({
      severity: 'error',
      code: 'custom_cta_wrapper_ui',
      file: relativePath,
      line: lineOfIndex(source, match?.index ?? 0),
      message: 'Custom CTA wrapper UI is not allowed. Use PrimaryCTASection or CTASection directly.',
    });
  }

  if (source.includes('CTA_LABEL_MAP')) {
    issues.push({
      severity: 'error',
      code: 'legacy_cta_label_map',
      file: relativePath,
      line: lineOfIndex(source, source.indexOf('CTA_LABEL_MAP')),
      message: 'CTA_LABEL_MAP is no longer allowed in the deterministic CTA system.',
    });
  }

  issues.push(...scanHardcodedApprovedLabels(relativePath, source));

  return issues;
}

export function scanDataFile(relativePath: string, source: string): Issue[] {
  const issues: Issue[] = [];

  for (const invalidKey of ['cta1', 'cta2']) {
    const invalidIndex = source.indexOf(`${invalidKey}:`);
    if (invalidIndex >= 0) {
      issues.push({
        severity: 'error',
        code: 'multiple_cta_data_blocks',
        file: relativePath,
        line: lineOfIndex(source, invalidIndex),
        message: 'CTA data must use a single cta block. cta1/cta2 are not allowed.',
      });
    }
  }

  const ctaBlocks = [...source.matchAll(/\bcta\s*:\s*\{[\s\S]*?\n\s*\}/g)];

  for (const block of ctaBlocks) {
    const snippet = block[0];
    const line = lineOfIndex(source, block.index ?? 0);
    if (!/\btitle\s*:/.test(snippet)) {
      issues.push({
        severity: 'error',
        code: 'invalid_cta_data_shape',
        file: relativePath,
        line,
        message: 'CTA data blocks must include a title field.',
      });
    }
    if (!/\bdescription\s*:/.test(snippet)) {
      issues.push({
        severity: 'error',
        code: 'invalid_cta_data_shape',
        file: relativePath,
        line,
        message: 'CTA data blocks must include a description field.',
      });
    }
  }

  return issues;
}

export function validateCorePrimaryCtaSources(
  primaryCtaSectionSource: string,
  primaryActionSource: string,
  relativePrimaryCtaSectionPath: string,
  relativePrimaryActionPath: string
): Issue[] {
  const issues: Issue[] = [];

  if (!primaryCtaSectionSource.includes('PrimaryCTASection requires title and description')) {
    issues.push({
      severity: 'error',
      code: 'missing_required_cta_guard',
      file: relativePrimaryCtaSectionPath,
      line: 1,
      message: 'PrimaryCTASection must throw when title or description is missing.',
    });
  }

  if (primaryCtaSectionSource.includes('return null')) {
    issues.push({
      severity: 'error',
      code: 'smart_cta_returns_null',
      file: relativePrimaryCtaSectionPath,
      line: 1,
      message: 'PrimaryCTASection must not return null.',
    });
  }

  if (!primaryCtaSectionSource.includes('allowSecondaryCTA?: true;')) {
    issues.push({
      severity: 'error',
      code: 'secondary_cta_flag_not_explicit',
      file: relativePrimaryCtaSectionPath,
      line: 1,
      message:
        'PrimaryCTASection secondary actions must remain an explicit allowSecondaryCTA opt-in.',
    });
  }

  if (!primaryCtaSectionSource.includes('Secondary CTA requires allowSecondaryCTA: true')) {
    issues.push({
      severity: 'error',
      code: 'missing_secondary_guard',
      file: relativePrimaryCtaSectionPath,
      line: 1,
      message:
        'PrimaryCTASection must fail loud when a secondary CTA is attempted without allowSecondaryCTA.',
    });
  }

  for (const label of APPROVED_CTA_LABELS) {
    if (!primaryActionSource.includes(label)) {
      issues.push({
        severity: 'error',
        code: 'missing_approved_label',
        file: relativePrimaryActionPath,
        line: 1,
        message: `primaryAction.ts must export the approved CTA label "${label}".`,
      });
    }
  }

  return issues;
}

function scanHardcodedApprovedLabels(relativePath: string, source: string): Issue[] {
  if (allowedHardcodedLabelFiles.has(relativePath)) {
    return [];
  }

  const issues: Issue[] = [];
  const escapedLabels = APPROVED_CTA_LABELS.map(label =>
    label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  );
  const patterns = [
    new RegExp(`label\\s*=\\s*['"](${escapedLabels.join('|')})['"]`, 'g'),
    new RegExp(`buttonText\\s*:\\s*['"](${escapedLabels.join('|')})['"]`, 'g'),
    new RegExp(`>\\s*(${escapedLabels.join('|')})\\s*<`, 'g'),
  ];

  for (const pattern of patterns) {
    for (const match of source.matchAll(pattern)) {
      issues.push({
        severity: 'error',
        code: 'hardcoded_cta_label',
        file: relativePath,
        line: lineOfIndex(source, match.index ?? 0),
        message: `Approved CTA label "${match[1]}" must not be hardcoded into buttons or inline UI. Use the shared CTA layer or ActionButtons/HeroActions instead.`,
      });
    }
  }
  return issues;
}

export function collectCtaContractIssues() {
  const issues: Issue[] = [];
  const codeFiles = collectFiles(CTA_SOURCE_DIRS);
  const dataFiles = collectFiles(DATA_DIRS);
  const primaryCtaSectionPath = path.join(root, 'src/components/sections/PrimaryCTASection.tsx');
  const primaryActionPath = path.join(root, 'src/lib/cta/primaryAction.ts');
  const primaryCtaSectionSource = fs.readFileSync(primaryCtaSectionPath, 'utf8');
  const primaryActionSource = fs.readFileSync(primaryActionPath, 'utf8');

  issues.push(
    ...validateCorePrimaryCtaSources(
      primaryCtaSectionSource,
      primaryActionSource,
      'src/components/sections/PrimaryCTASection.tsx',
      'src/lib/cta/primaryAction.ts'
    )
  );

  for (const filePath of codeFiles) {
    const relativePath = normalizeRelative(filePath);
    const source = fs.readFileSync(filePath, 'utf8');
    issues.push(...scanPrimaryCtaUsageFile(relativePath, source));
  }

  for (const filePath of dataFiles) {
    const relativePath = normalizeRelative(filePath);
    const source = fs.readFileSync(filePath, 'utf8');
    issues.push(...scanDataFile(relativePath, source));
  }

  return issues;
}

async function main() {
  const issues = collectCtaContractIssues();
  const report = {
    generatedAt: new Date().toISOString(),
    passed: issues.length === 0,
    issueCount: issues.length,
    issues,
  };

  if (shouldReportJson) {
    fs.mkdirSync(path.dirname(reportPath), { recursive: true });
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2) + '\n');
  }

  if (issues.length === 0) {
    console.log('✓ CTA contract validation passed.');
    return;
  }

  console.error(`✗ CTA contract validation found ${issues.length} issue(s):`);
  for (const issue of issues) {
    console.error(`  - [${issue.file}:${issue.line}] ${issue.message}`);
  }
  process.exitCode = 1;
}

const isDirectRun = process.argv[1]
  ? path.resolve(process.argv[1]) === path.resolve(new URL(import.meta.url).pathname)
  : false;

if (isDirectRun) {
  main().catch(error => {
    console.error(
      `[validate-primary-cta] ${error instanceof Error ? error.message : String(error)}`
    );
    process.exitCode = 1;
  });
}
