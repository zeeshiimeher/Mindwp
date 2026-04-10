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

const root = process.cwd();
const reportPath = path.join(root, 'reports', 'page-priorities.json');

/**
 * Priority rules per domain.
 * Source: SYSTEM.md — Smart Website is the core framework,
 * services are the primary revenue pages, features and industries support them.
 * Governance: CONTENT.md (Controlled Rewrite System, priority ordering)
 */
const PRIORITY_RULES = [
  { label: 'services', dir: 'src/domains/services/data', ext: '.ts', priority: 'high' },
  { label: 'features', dir: 'src/domains/features/data', ext: '.ts', priority: 'high' },
  { label: 'industries', dir: 'src/domains/industries/data', ext: '.ts', priority: 'medium' },
  { label: 'resources-data', dir: 'src/domains/resources/data', ext: '.ts', priority: 'medium' },
  { label: 'resources-content', dir: 'src/domains/resources/content', ext: '.tsx', priority: 'medium' },
  { label: 'case-studies-data', dir: 'src/domains/case-studies/data', ext: '.ts', priority: 'medium' },
  { label: 'case-studies-content', dir: 'src/domains/case-studies/content', ext: '.tsx', priority: 'medium' },
  { label: 'blog-data', dir: 'src/domains/blog/data', ext: '.ts', priority: 'low' },
  { label: 'blog-content', dir: 'src/domains/blog/content', ext: '.tsx', priority: 'low' },
];

function walkFiles(dir, ext) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walkFiles(full, ext));
    else if (entry.isFile() && entry.name.endsWith(ext)) out.push(full);
  }
  return out;
}

function main() {
  const pages = [];

  for (const rule of PRIORITY_RULES) {
    const absDir = path.join(root, rule.dir);
    const files = walkFiles(absDir, rule.ext);

    for (const filePath of files) {
      const rel = path.relative(root, filePath);
      const slug = path.basename(filePath, path.extname(filePath));
      pages.push({
        file: rel,
        slug,
        domain: rule.label.replace(/-data$/, '').replace(/-content$/, ''),
        priority: rule.priority,
      });
    }
  }

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
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

  console.log('Page priority detection complete.');
  console.log(`  Total pages: ${report.totalPages}`);
  console.log(`  High priority: ${report.summary.high}`);
  console.log(`  Medium priority: ${report.summary.medium}`);
  console.log(`  Low priority: ${report.summary.low}`);
  console.log(`  Report: reports/page-priorities.json`);
}

main();
