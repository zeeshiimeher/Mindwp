#!/usr/bin/env node

import path from 'node:path';

import { createLogger } from '../../lib/logger/index.mjs';
import { buildRouteInventory } from '../../src/lib/content-quality/inventory';
import {
  buildOGInputFromRoute,
  resolveOGEntityFromPath,
  resolveOGImagePathForRoute,
} from '../../src/lib/seo/og/contract';
import { createReportSchema } from '../lib/report-schema.mjs';

type RuleName = 'og-image-required' | 'no-manual-og-image' | 'og-input-valid';

type Issue = {
  rule: RuleName;
  path: string;
  code: string;
  message: string;
};

const root = process.cwd();
const args = new Set(process.argv.slice(2));
const ruleArg = process.argv.slice(2).find(arg => arg.startsWith('--rule='));
const reportJson = args.has('--report-json');
const rule = (ruleArg?.slice('--rule='.length) ?? '') as RuleName;
const logger = createLogger({
  label: 'validate-og-image-rules',
  mode: 'summary',
  rootDir: root,
});

const REPORT_FILE_BY_RULE: Record<RuleName, string> = {
  'og-image-required': 'og-image-required-report.json',
  'no-manual-og-image': 'no-manual-og-image-report.json',
  'og-input-valid': 'og-input-valid-report.json',
};

const SOURCE_COMMAND_BY_RULE: Record<RuleName, string> = {
  'og-image-required':
    'node --import tsx/esm scripts/validators/validate-og-image-rules.ts --rule=og-image-required',
  'no-manual-og-image':
    'node --import tsx/esm scripts/validators/validate-og-image-rules.ts --rule=no-manual-og-image',
  'og-input-valid':
    'node --import tsx/esm scripts/validators/validate-og-image-rules.ts --rule=og-input-valid',
};

function pushIssue(issues: Issue[], issue: Issue) {
  issues.push(issue);
}

async function collectOgImageRequiredIssues() {
  const issues: Issue[] = [];
  const inventory = await buildRouteInventory();

  for (const entry of inventory) {
    if (!entry.indexable) {
      continue;
    }

    const images = entry.openGraph.images.filter(
      image => typeof image === 'string' && image.length > 0
    );
    const expectedImage = resolveOGImagePathForRoute(entry.path);

    if (images.length === 0) {
      pushIssue(issues, {
        rule: 'og-image-required',
        path: entry.path,
        code: 'missing_og_image',
        message: `${entry.path} is indexable but has no Open Graph image.`,
      });
      continue;
    }

    if (!images.includes(expectedImage)) {
      pushIssue(issues, {
        rule: 'og-image-required',
        path: entry.path,
        code: 'missing_deterministic_og_image',
        message: `${entry.path} is missing its deterministic Open Graph image ${expectedImage}.`,
      });
    }
  }

  return issues;
}

async function collectNoManualOgImageIssues() {
  const issues: Issue[] = [];
  const inventory = await buildRouteInventory();

  for (const entry of inventory) {
    if (!entry.indexable) {
      continue;
    }

    const expectedImage = resolveOGImagePathForRoute(entry.path);
    const images = entry.openGraph.images.filter(
      image => typeof image === 'string' && image.length > 0
    );

    if (images.length !== 1 || images[0] !== expectedImage) {
      pushIssue(issues, {
        rule: 'no-manual-og-image',
        path: entry.path,
        code: 'manual_og_image_detected',
        message: `${entry.path} must resolve exactly one manifest-owned Open Graph image (${expectedImage}).`,
      });
    }
  }

  return issues;
}

async function collectOgInputValidIssues() {
  const issues: Issue[] = [];
  const inventory = await buildRouteInventory();

  for (const entry of inventory) {
    if (!entry.indexable) {
      continue;
    }

    const input = buildOGInputFromRoute({
      path: entry.path,
      title: entry.title,
      description: entry.description,
      openGraph: {
        title: entry.openGraph.title,
        description: entry.openGraph.description,
      },
    });
    const entity = resolveOGEntityFromPath(entry.path);

    if (input.title.trim().length === 0) {
      pushIssue(issues, {
        rule: 'og-input-valid',
        path: entry.path,
        code: 'missing_og_title',
        message: `${entry.path} resolved an empty OG title.`,
      });
    }

    if (entity && input.type !== entity.type) {
      pushIssue(issues, {
        rule: 'og-input-valid',
        path: entry.path,
        code: 'og_type_mismatch',
        message: `${entry.path} resolved OG type ${input.type} but expected ${entity.type}.`,
      });
    }

    if (!input.eyebrow || input.eyebrow.trim().length === 0) {
      pushIssue(issues, {
        rule: 'og-input-valid',
        path: entry.path,
        code: 'missing_og_eyebrow',
        message: `${entry.path} resolved an OG input without an eyebrow.`,
      });
    }
  }

  return issues;
}

async function collectIssues(activeRule: RuleName) {
  switch (activeRule) {
    case 'og-image-required':
      return collectOgImageRequiredIssues();
    case 'no-manual-og-image':
      return collectNoManualOgImageIssues();
    case 'og-input-valid':
      return collectOgInputValidIssues();
    default:
      throw new Error(`Unsupported rule: ${activeRule}`);
  }
}

async function main() {
  if (!(rule in REPORT_FILE_BY_RULE)) {
    throw new Error(`Missing or unsupported --rule value: ${rule}`);
  }

  const issues = await collectIssues(rule);
  const report = createReportSchema({
    name: rule,
    status: issues.length === 0 ? 'PASS' : 'FAIL',
    summary: {
      total: issues.length,
      passed: issues.length === 0 ? 1 : 0,
      failed: issues.length,
      warnings: 0,
    },
    issues,
    data: {
      rule,
      issueCount: issues.length,
    },
    generatedAt: new Date().toISOString(),
    sourceCommand: SOURCE_COMMAND_BY_RULE[rule],
  });
  const reportPath = path.join(root, 'reports', REPORT_FILE_BY_RULE[rule]);

  logger.writeReport(reportPath, report);

  if (reportJson) {
    logger.printSummary(`report-json flag active; report -> ${logger.relativePath(reportPath)}`);
  }

  if (issues.length > 0) {
    logger.printErrors(
      issues.map(issue => `${issue.path}: ${issue.message}`),
      'violations',
      50
    );
    process.exitCode = 1;
    return;
  }

  logger.printSummary(`passed (${rule})`);
}

await main();
