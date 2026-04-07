#!/usr/bin/env node
/**
 * Rule-based metadata validator.
 *
 * Validates that all content graph nodes have required metadata fields
 * based on their content type:
 * - blog: topics required
 * - resource: systems, topics required
 * - case-study: industries, systems required
 * - feature: systems required
 * - industry-detail: industries required
 * - service: must NOT have industries
 *
 * Contract: SYSTEM-CONTRACT.md §4 (data contract, validation rules)
 */

// TODO (Phase 2 — SYSTEM-CONTRACT enforcement):
// Enforce SYSTEM-CONTRACT.md §4 data contract rules:
// - system field must match canonical systems from canonical.ts
// - intent field must match locked intent enum (problem-aware, solution-aware, system-aware, decision-ready)
// - source field must follow {type}/{slug} format
// - Each node must have exactly 1 primary system for CTA use
// - Validate intent default mapping matches content type

import fs from 'node:fs';
import path from 'node:path';

const args = new Set(process.argv.slice(2));
const shouldReportJson = args.has('--report-json');

const root = process.cwd();
const reportPath = path.join(root, 'reports', 'metadata-report.json');

async function main() {
  const { ensureGraphInitialized } = await import('../../src/domains/init/ensureGraphInitialized.ts');
  await ensureGraphInitialized();
  const { getStructuredContentGraph } = await import('../../src/lib/content-graph/registry.ts');

  const nodes = getStructuredContentGraph().nodes;
  const issues = [];

  const uniqueValues = (values) =>
    [...new Set((values ?? []).map((v) => v.trim().toLowerCase()).filter(Boolean))];

  for (const node of nodes) {
    const desc = `${node.type}: ${node.slug}`;

    if (node.type === 'blog') {
      if (uniqueValues(node.topics).length === 0) {
        issues.push({ node: desc, code: 'missing_topics', message: `${desc} missing topics` });
      }
    }

    if (node.type === 'resource') {
      if (uniqueValues(node.systems).length === 0) {
        issues.push({ node: desc, code: 'missing_systems', message: `${desc} missing systems` });
      }
      if (uniqueValues(node.topics).length === 0) {
        issues.push({ node: desc, code: 'missing_topics', message: `${desc} missing topics` });
      }
    }

    if (node.type === 'case-study') {
      if (uniqueValues(node.industries).length === 0) {
        issues.push({ node: desc, code: 'missing_industries', message: `${desc} missing industries` });
      }
      if (uniqueValues(node.systems).length === 0) {
        issues.push({ node: desc, code: 'missing_systems', message: `${desc} missing systems` });
      }
    }

    if (node.type === 'feature') {
      if (uniqueValues(node.systems).length === 0) {
        issues.push({ node: desc, code: 'missing_systems', message: `${desc} missing systems` });
      }
    }

    if (node.type === 'industry-detail') {
      if (uniqueValues(node.industries).length === 0) {
        issues.push({ node: desc, code: 'missing_industries', message: `${desc} missing industries` });
      }
    }

    if (node.type === 'service') {
      if (uniqueValues(node.industries).length > 0) {
        issues.push({ node: desc, code: 'unexpected_industries', message: `${desc} must not declare industry metadata` });
      }
    }
  }

  if (shouldReportJson) {
    fs.mkdirSync(path.dirname(reportPath), { recursive: true });
    fs.writeFileSync(
      reportPath,
      JSON.stringify({ generatedAt: new Date().toISOString(), passed: issues.length === 0, issueCount: issues.length, issues }, null, 2)
    );
  }

  if (issues.length === 0) {
    console.log(`✓ Metadata validation passed (${nodes.length} nodes scanned).`);
    return;
  }

  console.error(`✗ Metadata validation found ${issues.length} issue(s):`);
  for (const issue of issues) {
    console.error(`- ${issue.message}`);
  }
  process.exitCode = 1;
}

main().catch((err) => {
  console.error(`[validate-metadata] ${err instanceof Error ? err.message : String(err)}`);
  process.exitCode = 1;
});
