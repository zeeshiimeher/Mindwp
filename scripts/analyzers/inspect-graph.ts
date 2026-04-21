#!/usr/bin/env node
/**
 * Graph-derived summary report.
 * Usage: npm run graph:inspect
 */

import fs from 'node:fs';
import path from 'node:path';

import { systemEnv, withSystemEnvOverrides } from '../../config/systemEnv.mjs';
import { resolveLoggingMode } from '../../config/loggingConfig.mjs';
import { createLogger } from '../../lib/logger/index.mjs';
import { ensureGraphInitialized } from '../../src/domains/init/ensureGraphInitialized';
import { computeAuthorityScores } from '../../src/lib/authority/authorityScore';
import { getStructuredContentGraph } from '../../src/lib/content-graph/registry';
import { createReportSchema } from '../../lib/reports/reportSchema';

const root = process.cwd();
const reportPath = path.join(root, 'reports', 'graph-derived-summary.json');
const sourceCommand = 'node --import tsx/esm scripts/analyzers/inspect-graph.ts';
const logger = createLogger({
  label: 'inspect-graph',
  mode: resolveLoggingMode(process.argv.slice(2), systemEnv),
  rootDir: root,
});

async function main() {
  await withSystemEnvOverrides({ NODE_ENV: 'development' }, async () => {
    await ensureGraphInitialized();
  });

  const graph = getStructuredContentGraph();
  const scores = computeAuthorityScores();
  const typeCounts: Record<string, number> = {};
  let totalEdges = 0;
  let totalDerivedEdges = 0;
  const nodes = graph.nodes.map(node => {
    typeCounts[node.type] = (typeCounts[node.type] ?? 0) + 1;
    const relatesTo = node.relatesTo ?? [];
    const supports = node.supports ?? [];
    const validates = node.validates ?? [];
    const derivedEdges = [...relatesTo, ...supports, ...validates].filter(
      edge => edge.source === 'derived'
    ).length;
    const edgeCount = relatesTo.length + supports.length + validates.length;
    totalEdges += edgeCount;
    totalDerivedEdges += derivedEdges;

    return {
      slug: node.slug,
      type: node.type,
      path: node.path,
      edgeCount,
      derivedEdges,
      authority: Math.round((scores[node.slug] ?? 0) * 100) / 100,
    };
  });

  const strongest = [...nodes].sort((left, right) => right.authority - left.authority).slice(0, 10);
  const orphanNodes = nodes.filter(node => node.edgeCount === 0);
  const report = createReportSchema({
    name: 'graph-derived-summary',
    status: orphanNodes.length > 0 ? 'WARN' : 'PASS',
    summary: {
      total: nodes.length,
      passed: nodes.length - orphanNodes.length,
      failed: 0,
      warnings: orphanNodes.length,
    },
    issues: orphanNodes,
    data: {
      totalNodes: nodes.length,
      totalEdges,
      totalDerivedEdges,
      typeCounts,
      strongest,
      orphanNodes,
      nodes,
    },
    sourceCommand,
  });

  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2) + '\n');

  logger.printTotals({
    nodes: nodes.length,
    edges: totalEdges,
    derivedEdges: totalDerivedEdges,
    orphans: orphanNodes.length,
  });
  logger.printSummary(`report -> ${logger.relativePath(reportPath)}`);
}

main().catch(error => {
  logger.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
