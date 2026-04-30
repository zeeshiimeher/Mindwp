#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { ensureGraphInitialized } from '@/domains/init/ensureGraphInitialized';
import { getStructuredContentGraph } from '../../src/lib/content-graph/registry';
import { collectSystemInvariantFindings } from '../../src/lib/system/invariants';

import { resolveLoggingMode } from '../../config/loggingConfig.mjs';
import { systemEnv } from '../../config/systemEnv.mjs';
import { createLogger } from '../../lib/logger/index.mjs';

const args = new Set(process.argv.slice(2));
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const reportPath = path.join(root, 'reports', 'system-invariants-report.json');
const logger = createLogger({
  label: 'validate-system-invariants',
  mode: resolveLoggingMode(process.argv.slice(2), systemEnv),
  rootDir: root,
});

async function main() {
  await ensureGraphInitialized();

  const graphNodes = getStructuredContentGraph().nodes;
  const { entries, issues, warnings } = collectSystemInvariantFindings(graphNodes);

  const report = {
    generatedAt: new Date().toISOString(),
    passed: issues.length === 0,
    entryCount: entries.length,
    graphNodeCount: graphNodes.length,
    issueCount: issues.length,
    warningCount: warnings.length,
    summary: {
      uniqueSlugs: issues.filter(issue => issue.code === 'duplicate_slug').length === 0,
      uniqueIds:
        issues.filter(issue => issue.code === 'duplicate_id' || issue.code === 'duplicate_graph_id')
          .length === 0,
      canonicalConsistency:
        issues.filter(issue => issue.code === 'canonical_mismatch').length === 0,
      renderOrderConsistency:
        issues.filter(issue => issue.code === 'render_order_mismatch').length === 0,
      graphAlignment:
        issues.filter(issue =>
          [
            'missing_graph_node',
            'graph_slug_mismatch',
            'graph_path_mismatch',
            'orphan_graph_node',
          ].includes(issue.code)
        ).length === 0,
    },
    issues,
    warnings,
  };

  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  logger.writeReport(reportPath, report);

  if (args.has('--report-json')) {
    logger.printSummary('report-json flag active; full payload preserved in file output');
  }

  if (warnings.length > 0) {
    logger.printErrors(
      warnings.map(warning => warning.message),
      'warnings',
      20
    );
  }

  if (issues.length > 0) {
    logger.printErrors(
      issues.map(issue => issue.message),
      'violations',
      20
    );
    process.exit(1);
  }

  logger.printSummary(`passed (${entries.length} entries checked)`);
}

await main();
