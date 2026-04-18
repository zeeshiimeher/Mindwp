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

import { ensureGraphInitialized } from '../../src/domains/init/ensureGraphInitialized.ts';
import { resolveConversionPriorityTier } from '../../src/lib/content-graph/conversionGoals.ts';
import { getStructuredContentGraph } from '../../src/lib/content-graph/registry.ts';

const root = process.cwd();
const reportPath = path.join(root, 'reports', 'page-priorities.json');
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

  const report = {
    generatedAt: new Date().toISOString(),
    totalPages: pages.length,
    summary: {
      high: pages.filter((p) => p.priority === 'high').length,
      medium: pages.filter((p) => p.priority === 'medium').length,
      low: pages.filter((p) => p.priority === 'low').length,
    },
    pages,
  };

  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2) + '\n');

  console.log('Page priority detection complete.');
  console.log(`  Total pages: ${report.totalPages}`);
  console.log(`  High priority: ${report.summary.high}`);
  console.log(`  Medium priority: ${report.summary.medium}`);
  console.log(`  Low priority: ${report.summary.low}`);
  console.log(`  Report: reports/page-priorities.json`);
}

main();
