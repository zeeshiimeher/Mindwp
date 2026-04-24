#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import {
  APPROVED_CTA_LABELS,
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
const tierCardsPath = path.join(
  root,
  'src',
  'components',
  'reusable',
  'sections',
  'core',
  'TierCardsSection.tsx'
);
const canonicalSystems = new Set(CANONICAL_SYSTEMS);
const globalPrimaryCtaSurfaceChecks = [
  'src/global/Header.tsx',
  'src/global/Footer.tsx',
  'src/global/HeaderMobileMenuIsland.tsx',
];
const allowedHardcodedLabelFiles = new Set([
  'src/config/ctaLabels.ts',
  'src/components/reusable/sections/core/TierCardsSection.tsx',
  'src/lib/cta/primaryAction.ts',
  'src/components/system/SmartCTA.tsx',
  'src/app/dev/cta-label-contract/page.tsx',
]);
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

  if (
    !smartCtaSource.includes('resolveCtaLabel({') ||
    !smartCtaSource.includes('system: resolvedSystem')
  ) {
    issues.push({
      code: 'missing_resolver_label_usage',
      message: 'SmartCTA must resolve CTA labels from the normalized resolvedSystem value.',
    });
  }

  if (smartCtaSource.includes('resolveSecondaryCta(')) {
    issues.push({
      code: 'implicit_secondary_cta_present',
      message: 'SmartCTA must not use implicit secondary CTA resolution.',
    });
  }

  if (!smartCtaSource.includes('allowSecondaryCTA?: true;')) {
    issues.push({
      code: 'missing_allow_secondary_guard_prop',
      message: 'SmartCTA must expose allowSecondaryCTA as an explicit opt-in.',
    });
  }

  if (smartCtaSource.includes('secondaryAction && <Button')) {
    issues.push({
      code: 'implicit_secondary_button_rendering',
      message: 'SmartCTA must not auto-render a secondary CTA button.',
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
      message:
        'Tier card default CTA label must be included in the shared approved CTA label list.',
    });
  }

  if (!APPROVED_CTA_LABELS.every(label => isApprovedCtaLabel(label))) {
    issues.push({
      code: 'invalid_approved_cta_labels_export',
      message:
        'Approved CTA labels export must stay self-consistent with the shared approval helper.',
    });
  }

  if (
    !smartCtaSource.includes('system: resolvedSystem') ||
    !smartCtaSource.includes('sourceType: pageType')
  ) {
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

  const usedSystems = collectUsedCanonicalSystems();

  const buttonLabelPatterns = [
    /label\s*=\s*['"](Start a Conversation|Discuss Your Project)['"]/g,
    /buttonText\s*:\s*['"](Start a Conversation|Discuss Your Project)['"]/g,
    />\s*(Start a Conversation|Discuss Your Project)\s*</g,
  ];

  for (const filePath of collectRepoFiles()) {
    const relativePath = path.relative(root, filePath).replaceAll(path.sep, '/');
    if (allowedHardcodedLabelFiles.has(relativePath)) {
      continue;
    }

    const source = fs.readFileSync(filePath, 'utf8');
    for (const pattern of buttonLabelPatterns) {
      for (const match of source.matchAll(pattern)) {
        issues.push({
          code: 'hardcoded_cta_label',
          message: `${relativePath} hardcodes approved CTA label "${match[1]}" outside the CTA system.`,
          file: relativePath,
        });
      }
    }
  }

  const report = {
    generatedAt: new Date().toISOString(),
    passed: issues.length === 0,
    issueCount: issues.length,
    warningCount: warnings.length,
    usedSystems,
    approvedLabels: [...APPROVED_CTA_LABELS],
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
