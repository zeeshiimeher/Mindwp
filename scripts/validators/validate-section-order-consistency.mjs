#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { ensureGraphInitialized } from '../../src/domains/init/ensureGraphInitialized.ts';
import { getStructuredContentGraph } from '../../src/lib/content-graph/registry';
import { collectSystemInvariantFindings } from '../../src/lib/system/invariants';

import { resolveLoggingMode } from '../../config/loggingConfig.mjs';
import { systemEnv } from '../../config/systemEnv.mjs';
import { createLogger } from '../../lib/logger/index.mjs';

const args = new Set(process.argv.slice(2));
const root = process.cwd();
const reportPath = path.join(root, 'reports', 'section-order-consistency-report.json');
const logger = createLogger({
  label: 'validate-section-order-consistency',
  mode: resolveLoggingMode(process.argv.slice(2), systemEnv),
  rootDir: root,
});

const SECTION_ORDER_CODES = new Set([
  'render_order_mismatch',
  'silent_section_drop',
  'unexpected_rendered_sections',
  'missing_cta',
]);

async function main() {
  await ensureGraphInitialized();

  const graphNodes = getStructuredContentGraph().nodes;
  const { entries, issues } = collectSystemInvariantFindings(graphNodes);
  const sectionOrderIssues = issues.filter(issue => SECTION_ORDER_CODES.has(issue.code));

  const report = {
    generatedAt: new Date().toISOString(),
    passed: sectionOrderIssues.length === 0,
    entryCount: entries.length,
    issueCount: sectionOrderIssues.length,
    summary: {
      renderOrderConsistency:
        sectionOrderIssues.filter(issue => issue.code === 'render_order_mismatch').length === 0,
      noSilentDrops:
        sectionOrderIssues.filter(issue => issue.code === 'silent_section_drop').length === 0,
      noInjectedSections:
        sectionOrderIssues.filter(issue => issue.code === 'unexpected_rendered_sections').length ===
        0,
      ctaPresence: sectionOrderIssues.filter(issue => issue.code === 'missing_cta').length === 0,
    },
    issues: sectionOrderIssues,
  };

  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  logger.writeReport(reportPath, report);

  if (args.has('--report-json')) {
    logger.printSummary('report-json flag active; full payload preserved in file output');
  }

  if (sectionOrderIssues.length > 0) {
    logger.printErrors(
      sectionOrderIssues.map(issue => issue.message),
      'violations',
      20
    );
    process.exit(1);
  }

  logger.printSummary(`passed (${entries.length} entries checked)`);
}

await main();
