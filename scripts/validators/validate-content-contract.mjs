#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { resolveConversionGoal } from '../../src/lib/content-graph/conversionGoals.ts';
import {
  getAdvisoryMetadataKeys,
  getBlockingMetadataKeys,
  buildTsProject,
  getPrimarySystem,
  loadCanonicalSets,
  loadStructuredGraphNodes,
  validateCanonicalValues,
} from '../lib/contract-validator-helpers.mjs';
import { createSystemIssue } from '../lib/system-issues.mjs';

const args = new Set(process.argv.slice(2));
const shouldReportJson = args.has('--report-json');

const root = process.cwd();
const reportPath = path.join(root, 'reports', 'content-contract-report.json');

function buildContractIssue({
  node,
  severity,
  code,
  metadataKey,
  title,
  description,
  impact,
  fix,
}) {
  return {
    node: `${node.type}/${node.slug}`,
    severity,
    code,
    ...(metadataKey ? { metadataKey } : {}),
    message: description,
    ...createSystemIssue({
      source: 'validate-content-contract',
      code,
      idParts: ['validate-content-contract', code, node.type, node.slug, metadataKey ?? title],
      severity,
      category: 'content',
      entityType: node.type,
      slug: node.slug,
      title,
      description,
      impact,
      fix,
      autoFixable: false,
      path: node.path ?? null,
    }),
  };
}

function hasValue(node, key) {
  const value = node[key];

  if (Array.isArray(value)) return value.length > 0;
  if (typeof value === 'string') return value.trim().length > 0;
  return value != null;
}

function isTopicsRequired(nodeType) {
  return nodeType === 'blog' || nodeType === 'resource';
}

function isIndustriesRequired(nodeType) {
  return nodeType === 'case-study' || nodeType === 'industry-detail';
}

async function main() {
  const project = buildTsProject(root);
  const canonical = loadCanonicalSets(project, root);
  const nodes = await loadStructuredGraphNodes();

  const issues = [];
  const warnings = [];

  for (const node of nodes) {
    const label = `${node.type}/${node.slug}`;

    for (const key of getBlockingMetadataKeys(node.type)) {
      if (!hasValue(node, key)) {
        issues.push(
          buildContractIssue({
            node,
            severity: 'critical',
            code: 'missing_required_metadata',
            metadataKey: key,
            title: `Missing required metadata: ${key}`,
            description: `${label} is missing required metadata key "${key}".`,
            impact: 'The node fails the contract surface and can break downstream reporting or deterministic routing.',
            fix: `Populate the "${key}" metadata on ${label}.`,
          })
        );
      }
    }

    for (const key of getAdvisoryMetadataKeys(node.type)) {
      if (!hasValue(node, key)) {
        warnings.push(
          buildContractIssue({
            node,
            severity: 'warning',
            code: 'missing_advisory_metadata',
            metadataKey: key,
            title: `Missing recommended metadata: ${key}`,
            description: `${label} is missing recommended metadata key "${key}".`,
            impact: 'The node remains valid but becomes less self-explaining in reports and inventory-driven analysis.',
            fix: `Populate the recommended "${key}" metadata on ${label}.`,
          })
        );
      }
    }

    const systemErrors = validateCanonicalValues(node.systems, canonical.systems);
    for (const value of systemErrors) {
      issues.push(
        buildContractIssue({
          node,
          severity: 'critical',
          code: 'invalid_system',
          title: 'Invalid system identifier',
          description: `${label} uses unknown system "${value}".`,
          impact: 'The node is outside the canonical system registry and will drift from deterministic grouping.',
          fix: `Replace "${value}" with a canonical system identifier on ${label}.`,
        })
      );
    }

    const topicErrors = validateCanonicalValues(node.topics, canonical.topics);
    for (const value of topicErrors) {
      issues.push(
        buildContractIssue({
          node,
          severity: 'critical',
          code: 'invalid_topic',
          title: 'Invalid topic identifier',
          description: `${label} uses unknown topic "${value}".`,
          impact: 'The node will fall out of canonical topic coverage, authority scoring, and issue aggregation.',
          fix: `Replace "${value}" with a canonical topic identifier on ${label}.`,
        })
      );
    }

    const industryErrors = validateCanonicalValues(node.industries, canonical.industries);
    for (const value of industryErrors) {
      issues.push(
        buildContractIssue({
          node,
          severity: 'critical',
          code: 'invalid_industry',
          title: 'Invalid industry identifier',
          description: `${label} uses unknown industry "${value}".`,
          impact: 'The node will not align to canonical industry slices in the deterministic graph.',
          fix: `Replace "${value}" with a canonical industry identifier on ${label}.`,
        })
      );
    }

    if (isTopicsRequired(node.type) && (!Array.isArray(node.topics) || node.topics.length === 0)) {
      issues.push(
        buildContractIssue({
          node,
          severity: 'critical',
          code: 'missing_topics',
          title: 'Missing topics metadata',
          description: `${label} requires topics metadata.`,
          impact: 'The node cannot participate in canonical topic coverage or authority scoring.',
          fix: `Add one or more canonical topics to ${label}.`,
        })
      );
    }

    if (isIndustriesRequired(node.type) && (!Array.isArray(node.industries) || node.industries.length === 0)) {
      issues.push(
        buildContractIssue({
          node,
          severity: 'critical',
          code: 'missing_industries',
          title: 'Missing industries metadata',
          description: `${label} requires industries metadata.`,
          impact: 'The node cannot align to industry slices or deterministic coverage analysis.',
          fix: `Add one or more canonical industries to ${label}.`,
        })
      );
    }

    const { primarySystem, systems, hasMultiple } = getPrimarySystem(node.systems);
    if (!primarySystem) {
      issues.push(
        buildContractIssue({
          node,
          severity: 'critical',
          code: 'missing_primary_system',
          title: 'Missing primary system',
          description: `${label} requires at least one canonical system.`,
          impact: 'The node cannot be routed into deterministic system-level reporting.',
          fix: `Assign a canonical system to ${label}.`,
        })
      );
    }

    if (node.type === 'service' && hasMultiple) {
      warnings.push(
        buildContractIssue({
          node,
          severity: 'warning',
          code: 'multiple_systems',
          title: 'Multiple systems declared',
          description: `${label} exposes multiple systems; conversion will use "${systems[0]}" as primary.`,
          impact: 'The node remains valid, but primary-system behavior may be less obvious to operators.',
          fix: `Reduce ${label} to one primary system or accept the deterministic primary of "${systems[0]}".`,
        })
      );
    }

    const expectedConversion = resolveConversionGoal(node.type);

    if (node.conversionGoal !== expectedConversion.conversionGoal) {
      issues.push(
        buildContractIssue({
          node,
          severity: 'critical',
          code: 'invalid_conversion_goal',
          title: 'Invalid conversion goal',
          description: `${label} must resolve conversionGoal "${expectedConversion.conversionGoal}" for node type "${node.type}".`,
          impact: 'Priority-aware analysis and conversion reporting drift when node conversion goals stop matching their shared type contract.',
          fix: `Restore the shared conversionGoal mapping for ${label}.`,
        })
      );
    }

    if (node.conversionPriority !== expectedConversion.conversionPriority) {
      issues.push(
        buildContractIssue({
          node,
          severity: 'critical',
          code: 'invalid_conversion_priority',
          title: 'Invalid conversion priority',
          description: `${label} must resolve conversionPriority ${expectedConversion.conversionPriority} for node type "${node.type}".`,
          impact: 'Priority-aware analysis and release gating drift when node conversion priority stops matching the shared type contract.',
          fix: `Restore the shared conversionPriority mapping for ${label}.`,
        })
      );
    }

  }

  const report = {
    generatedAt: new Date().toISOString(),
    scannedNodes: nodes.length,
    passed: issues.length === 0,
    issueCount: issues.length,
    warningCount: warnings.length,
    summary: {
      missingSystem: issues.filter(issue => issue.code === 'missing_required_metadata' && issue.metadataKey === 'systems').length,
      missingMetadata: [...issues, ...warnings].filter(item => item.code === 'missing_required_metadata' || item.code === 'missing_advisory_metadata').length,
    },
    issues,
    warnings,
  };

  if (shouldReportJson) {
    fs.mkdirSync(path.dirname(reportPath), { recursive: true });
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2) + '\n');
  }

  if (warnings.length > 0) {
    console.warn(`⚠ Content contract validation: ${warnings.length} warning(s):`);
    for (const warning of warnings) {
      console.warn(`  - ${warning.message}`);
    }
    console.warn('');
  }

  if (issues.length === 0) {
    console.log(`✓ Content contract validation passed (${nodes.length} nodes scanned).`);
    return;
  }

  console.error(`✗ Content contract validation found ${issues.length} issue(s):`);
  for (const issue of issues) {
    console.error(`  - ${issue.message}`);
  }
  process.exitCode = 1;
}

main().catch(err => {
  console.error(`[validate-content-contract] ${err instanceof Error ? err.message : String(err)}`);
  process.exitCode = 1;
});