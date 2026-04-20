#!/usr/bin/env node
/**
 * High-impact page detection.
 *
 * Tags each content page with a priority level based on deterministic rules:
 * - high: service pages, homepage, core feature pages
 * - medium: industry pages, resource pages, case study pages
 * - low: blog posts
 *
 * Output: reports/page-priorities.json
 *
 * Constraint: deterministic only. Priority is based on domain type,
 * not traffic data or subjective importance.
 */

import fs from 'node:fs';
import path from 'node:path';

import { resolveLoggingMode } from '../../config/loggingConfig.mjs';
import { createLogger } from '../../lib/logger/index.mjs';
import { ensureGraphInitialized } from '../../src/domains/init/ensureGraphInitialized.ts';
import { resolveConversionPriorityTier } from '../../src/lib/content-graph/conversionGoals.ts';
import { getStructuredContentGraph } from '../../src/lib/content-graph/registry.ts';
import { createReportSchema } from '../lib/report-schema.mjs';

const root = process.cwd();
const reportPath = path.join(root, 'reports', 'page-priorities.json');
const sourceCommand = 'node --import tsx/esm scripts/analyzers/detect-page-priorities.mjs';
const logger = createLogger({
  label: 'page-priorities',
  mode: resolveLoggingMode(process.argv.slice(2), process.env),
  rootDir: root,
});

async function main() {
  await ensureGraphInitialized();

  const pages = getStructuredContentGraph()
    .nodes
    .map(node => ({
      slug: node.slug,
      path: node.path,
      domain: node.type,
      priority: resolveConversionPriorityTier(node.type),
    }))
    .sort((left, right) => left.path.localeCompare(right.path));

  const prioritySummary = {
    high: pages.filter((p) => p.priority === 'high').length,
    medium: pages.filter((p) => p.priority === 'medium').length,
    low: pages.filter((p) => p.priority === 'low').length,
  };
  const report = createReportSchema({
    name: 'page-priorities',
    status: 'PASS',
    summary: {
      total: pages.length,
      passed: pages.length,
      failed: 0,
      warnings: 0,
    },
    data: {
      totalPages: pages.length,
      prioritySummary,
      pages,
    },
    sourceCommand,
  });

  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2) + '\n');

  logger.printTotals({
    total: pages.length,
    high: prioritySummary.high,
    medium: prioritySummary.medium,
    low: prioritySummary.low,
  });
  logger.printSummary(`report -> ${logger.relativePath(reportPath)}`);
}

main();
