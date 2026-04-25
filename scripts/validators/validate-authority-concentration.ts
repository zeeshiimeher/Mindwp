#!/usr/bin/env node

/**
 * Authority Concentration Validator
 *
 * AUDIT 5 — Phase 1 Task 2 (Authority Map Fix).
 *
 * Guards the authority graph against the historical defect where every
 * authority edge was sourced from `service:smart-website-systems`.
 *
 * Failure modes detected:
 *   - all_edges_from_single_source: 100% of edges come from the same node id.
 *   - all_edges_from_single_system: 100% of edge source nodes belong to the
 *     same canonical system.
 *   - missing_system_lane: a canonical system has zero outgoing authority
 *     edges (every system in SYSTEM_TYPES must contribute at least one).
 *
 * Source of truth: `reports/.system-full/system-snapshot.json` (built by
 * `scripts/core/build-system-snapshot.mjs`). The published
 * `reports/authority-map.json` is a sanitized view truncated to
 * MAX_REPORT_ARRAY_ITEMS, so it cannot be used to reason about authority
 * concentration directly.
 *
 * The validator is structural — it does not invent authority, it asserts
 * the underlying graph stays diversified.
 */

import fs from 'node:fs';
import path from 'node:path';

// @ts-ignore - .mjs has no .d.ts and we only consume documented runtime API.
import { createLogger } from '../../lib/logger/index.mjs';
import {
  CANONICAL_SYSTEMS,
  type CanonicalSystem,
  SYSTEM_TYPES,
} from '../../src/lib/content-graph/canonical';

type AuthorityNode = {
  id: string;
  systems?: string[];
  relatesTo?: { id: string }[];
  supports?: { id: string }[];
  validates?: { id: string }[];
};
type AuthorityEdge = { source: string; target: string; relation: string };
type Issue = { code: string; message: string; system?: string };

const args = new Set(process.argv.slice(2));
const shouldReportJson = args.has('--report-json');

const root = process.cwd();
const snapshotPath =
  process.env.SYSTEM_SNAPSHOT_PATH ??
  path.join(root, 'reports', '.system-full', 'system-snapshot.json');
const outputPath = path.join(root, 'reports', 'authority-concentration-report.json');

const logger = createLogger({
  label: 'validate-authority-concentration',
  rootDir: root,
});

function readSnapshotNodes(): AuthorityNode[] {
  if (!fs.existsSync(snapshotPath)) {
    throw new Error(
      `system snapshot not found at ${snapshotPath}. Run \`node --import tsx/esm scripts/core/build-system-snapshot.mjs\` first.`
    );
  }
  const parsed = JSON.parse(fs.readFileSync(snapshotPath, 'utf8')) as {
    graph?: { nodes?: AuthorityNode[] };
  };
  return parsed.graph?.nodes ?? [];
}

function collectEdges(nodes: AuthorityNode[]): AuthorityEdge[] {
  const edges: AuthorityEdge[] = [];
  for (const node of nodes) {
    for (const e of node.relatesTo ?? []) {
      edges.push({ source: node.id, target: e.id, relation: 'relatesTo' });
    }
    for (const e of node.supports ?? []) {
      edges.push({ source: node.id, target: e.id, relation: 'supports' });
    }
    for (const e of node.validates ?? []) {
      edges.push({ source: node.id, target: e.id, relation: 'validates' });
    }
  }
  return edges;
}

function main(): void {
  const issues: Issue[] = [];
  const nodes = readSnapshotNodes();
  const edges = collectEdges(nodes);

  if (edges.length === 0) {
    issues.push({
      code: 'no_authority_edges',
      message:
        'system-snapshot graph contains zero authority edges; derived relationships did not run.',
    });
  }

  const nodeById = new Map<string, AuthorityNode>(nodes.map(node => [node.id, node]));

  const sourceCount = new Map<string, number>();
  for (const edge of edges) {
    sourceCount.set(edge.source, (sourceCount.get(edge.source) ?? 0) + 1);
  }

  if (sourceCount.size === 1 && edges.length > 0) {
    const [onlySource] = sourceCount.keys();
    issues.push({
      code: 'all_edges_from_single_source',
      message: `All ${edges.length} authority edges originate from "${onlySource}". Authority is concentrated on one node.`,
    });
  }

  const systemEdgeCount: Record<CanonicalSystem, number> = Object.fromEntries(
    CANONICAL_SYSTEMS.map(s => [s, 0])
  ) as Record<CanonicalSystem, number>;
  for (const edge of edges) {
    const sourceNode = nodeById.get(edge.source);
    const systems = sourceNode?.systems ?? [];
    for (const system of systems) {
      if ((CANONICAL_SYSTEMS as readonly string[]).includes(system)) {
        systemEdgeCount[system as CanonicalSystem] += 1;
      }
    }
  }

  const activeSystems = CANONICAL_SYSTEMS.filter(s => systemEdgeCount[s] > 0);
  if (edges.length > 0 && activeSystems.length === 1) {
    issues.push({
      code: 'all_edges_from_single_system',
      message: `Every authority edge comes from system "${activeSystems[0]}". The other ${CANONICAL_SYSTEMS.length - 1} canonical systems contribute zero edges.`,
    });
  }

  for (const system of CANONICAL_SYSTEMS) {
    if (systemEdgeCount[system] === 0) {
      issues.push({
        code: 'missing_system_lane',
        message: `Canonical system "${system}" (role: ${SYSTEM_TYPES[system]}) has zero authority edges. Every canonical system must contribute at least one source edge.`,
        system,
      });
    }
  }

  const report = {
    generatedAt: new Date().toISOString(),
    passed: issues.length === 0,
    issueCount: issues.length,
    totals: {
      edges: edges.length,
      sources: sourceCount.size,
      systems: activeSystems.length,
    },
    edgesBySystem: systemEdgeCount,
    issues,
  };

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  logger.writeReport(outputPath, report);

  if (shouldReportJson) {
    process.stdout.write(`${JSON.stringify(report)}\n`);
  }

  if (issues.length === 0) {
    process.stdout.write(
      `✓ Authority concentration validation passed: ${edges.length} edges across ${sourceCount.size} sources / ${activeSystems.length} systems.\n`
    );
    return;
  }

  process.stderr.write(
    `✗ Authority concentration validation found ${issues.length} issue(s):\n${issues
      .map(i => `  - ${i.message}`)
      .join('\n')}\n`
  );
  process.exit(1);
}

main();
