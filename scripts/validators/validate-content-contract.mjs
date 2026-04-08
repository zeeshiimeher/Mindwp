#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import {
  getAdvisoryMetadataKeys,
  getBlockingMetadataKeys,
  buildTsProject,
  getPrimarySystem,
  loadCanonicalSets,
  loadStructuredGraphNodes,
  validateCanonicalValues,
} from '../lib/contract-validator-helpers.mjs';

const args = new Set(process.argv.slice(2));
const shouldReportJson = args.has('--report-json');

const root = process.cwd();
const reportPath = path.join(root, 'reports', 'content-contract-report.json');

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
        issues.push({
          node: label,
          severity: 'error',
          code: 'missing_required_metadata',
          metadataKey: key,
          message: `${label} missing required metadata key "${key}"`,
        });
      }
    }

    for (const key of getAdvisoryMetadataKeys(node.type)) {
      if (!hasValue(node, key)) {
        warnings.push({
          node: label,
          severity: 'warning',
          code: 'missing_advisory_metadata',
          metadataKey: key,
          message: `${label} is missing recommended metadata key "${key}"`,
        });
      }
    }

    const systemErrors = validateCanonicalValues(node.systems, canonical.systems);
    for (const value of systemErrors) {
      issues.push({
        node: label,
        severity: 'error',
        code: 'invalid_system',
        message: `${label} uses unknown system "${value}"`,
      });
    }

    const topicErrors = validateCanonicalValues(node.topics, canonical.topics);
    for (const value of topicErrors) {
      issues.push({
        node: label,
        severity: 'error',
        code: 'invalid_topic',
        message: `${label} uses unknown topic "${value}"`,
      });
    }

    const industryErrors = validateCanonicalValues(node.industries, canonical.industries);
    for (const value of industryErrors) {
      issues.push({
        node: label,
        severity: 'error',
        code: 'invalid_industry',
        message: `${label} uses unknown industry "${value}"`,
      });
    }

    if (isTopicsRequired(node.type) && (!Array.isArray(node.topics) || node.topics.length === 0)) {
      issues.push({
        node: label,
        severity: 'error',
        code: 'missing_topics',
        message: `${label} requires topics metadata`,
      });
    }

    if (isIndustriesRequired(node.type) && (!Array.isArray(node.industries) || node.industries.length === 0)) {
      issues.push({
        node: label,
        severity: 'error',
        code: 'missing_industries',
        message: `${label} requires industries metadata`,
      });
    }

    const { primarySystem, systems, hasMultiple } = getPrimarySystem(node.systems);
    if (!primarySystem) {
      issues.push({
        node: label,
        severity: 'error',
        code: 'missing_primary_system',
        message: `${label} requires at least one canonical system`,
      });
    }

    if (node.type === 'service' && hasMultiple) {
      warnings.push({
        node: label,
        severity: 'warning',
        code: 'multiple_systems',
        message: `${label} exposes multiple systems; conversion will use "${systems[0]}" as primary`,
      });
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