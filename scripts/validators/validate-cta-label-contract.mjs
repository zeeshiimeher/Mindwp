#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import {
  APPROVED_CTA_LABELS,
  CTA_LABEL_MAP,
  DEFAULT_CTA_LABEL,
  DEFAULT_TIER_CARD_CTA_LABEL,
  isApprovedCtaLabel,
  resolveCtaLabel,
} from '../../src/config/ctaLabels.ts';
import { CANONICAL_SYSTEMS } from '../../src/lib/content-graph/canonical.ts';
import { listFilesRecursive } from '../lib/validator-helpers.mjs';

const args = new Set(process.argv.slice(2));
const shouldReportJson = args.has('--report-json');

const root = process.cwd();
const reportPath = path.join(root, 'reports', 'cta-label-contract-report.json');
const smartCtaPath = path.join(root, 'src', 'components', 'system', 'SmartCTA.tsx');
const tierCardsPath = path.join(root, 'src', 'components', 'reusable', 'sections', 'core', 'TierCardsSection.tsx');
const canonicalSystems = new Set(CANONICAL_SYSTEMS);
const globalPrimaryCtaSurfaceChecks = [
  'src/global/Header.tsx',
  'src/global/Footer.tsx',
  'src/global/HeaderMobileMenuIsland.tsx',
];
const repoSystemDirs = [
  'src/app',
  'src/components',
  'src/config',
  'src/domains',
  'src/global',
  'src/screens',
];

function collectRepoFiles() {
  return repoSystemDirs.flatMap(relDir =>
    listFilesRecursive(path.join(root, relDir), {
      exts: ['.ts', '.tsx'],
      ignoreDirNames: ['dev', 'node_modules'],
    })
  );
}

function collectUsedCanonicalSystems() {
  const systems = new Set();
  const pattern = /system:\s*['"]([^'"]+)['"]/g;

  for (const filePath of collectRepoFiles()) {
    const text = fs.readFileSync(filePath, 'utf8');
    let match;
    while ((match = pattern.exec(text)) !== null) {
      const system = match[1];
      if (canonicalSystems.has(system)) {
        systems.add(system);
      }
    }
  }

  return [...systems].sort();
}

function main() {
  const issues = [];
  const warnings = [];

  if (resolveCtaLabel('unknown-system') !== DEFAULT_CTA_LABEL) {
    issues.push({
      code: 'invalid_unknown_system_fallback',
      message: 'resolveCtaLabel("unknown-system") must return the safe fallback label.',
    });
  }

  if (resolveCtaLabel('') !== DEFAULT_CTA_LABEL) {
    issues.push({
      code: 'invalid_empty_system_fallback',
      message: 'resolveCtaLabel("") must return the safe fallback label.',
    });
  }

  const smartCtaSource = fs.readFileSync(smartCtaPath, 'utf8');
  if (!smartCtaSource.includes("const resolvedSystem = system ?? 'smart-website-systems'")) {
    issues.push({
      code: 'missing_resolved_system_guard',
      message: 'SmartCTA must normalize system through a single resolvedSystem variable.',
    });
  }

  if (!smartCtaSource.includes('resolveCtaLabel({') || !smartCtaSource.includes('system: resolvedSystem')) {
    issues.push({
      code: 'missing_resolver_label_usage',
      message: 'SmartCTA must resolve CTA labels from the normalized resolvedSystem value.',
    });
  }

  if (!smartCtaSource.includes('resolveSecondaryCta(pageTypeForHref, slug)')) {
    issues.push({
      code: 'missing_centralized_secondary_cta_usage',
      message: 'SmartCTA secondary CTA policy must resolve from the shared CTA config.',
    });
  }

  const tierCardsSource = fs.readFileSync(tierCardsPath, 'utf8');
  if (!tierCardsSource.includes('resolveTierCardCtaLabel')) {
    issues.push({
      code: 'missing_tier_card_label_resolver',
      message: 'TierCardsSection must resolve contact CTA labels from the shared CTA config.',
    });
  }

  if (!isApprovedCtaLabel(DEFAULT_TIER_CARD_CTA_LABEL)) {
    issues.push({
      code: 'invalid_tier_card_default_label',
      message: 'Tier card default CTA label must be included in the shared approved CTA label list.',
    });
  }

  if (!APPROVED_CTA_LABELS.every(label => isApprovedCtaLabel(label))) {
    issues.push({
      code: 'invalid_approved_cta_labels_export',
      message: 'Approved CTA labels export must stay self-consistent with the shared approval helper.',
    });
  }

  if (!smartCtaSource.includes('system: resolvedSystem') || !smartCtaSource.includes('sourceType: pageType')) {
    issues.push({
      code: 'missing_resolved_system_href_usage',
      message:
        'SmartCTA href generation must use resolvedSystem with sourceType and slug when building contact hrefs.',
    });
  }

  for (const relativePath of globalPrimaryCtaSurfaceChecks) {
    const absolutePath = path.join(root, relativePath);
    const surfaceSource = fs.readFileSync(absolutePath, 'utf8');

    if (!surfaceSource.includes('{primaryAction.label}')) {
      issues.push({
        code: 'missing_shared_global_cta_label_usage',
        message: `${relativePath} must render the shared primaryAction.label value instead of hardcoding a CTA label.`,
        file: relativePath,
      });
    }
  }

  const mappedSystems = new Set(Object.keys(CTA_LABEL_MAP));
  const usedSystems = collectUsedCanonicalSystems();
  const missingSystems = usedSystems.filter(system => !mappedSystems.has(system));

  for (const system of missingSystems) {
    issues.push({
      code: 'missing_cta_label_map_entry',
      message: `CTA_LABEL_MAP is missing a label for repo-used system "${system}".`,
      system,
    });
  }

  const report = {
    generatedAt: new Date().toISOString(),
    passed: issues.length === 0,
    issueCount: issues.length,
    warningCount: warnings.length,
    usedSystems,
    mappedSystems: [...mappedSystems].sort(),
    issues,
    warnings,
  };

  if (shouldReportJson) {
    fs.mkdirSync(path.dirname(reportPath), { recursive: true });
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2) + '\n');
  }

  if (issues.length === 0) {
    console.log('✓ CTA label contract validation passed.');
    return;
  }

  console.error(`✗ CTA label contract validation found ${issues.length} issue(s):`);
  for (const issue of issues) {
    console.error(`  - ${issue.message}`);
  }
  process.exitCode = 1;
}

main();
