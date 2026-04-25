#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import {
  APPROVED_CTA_LABELS,
  buildGlobalPrimaryCtaAction,
  getPrimaryCTA,
  getSecondaryCTA,
  isApprovedCtaLabel,
} from '../../src/lib/cta/primaryAction.ts';
import { CANONICAL_SYSTEMS } from '../../src/lib/content-graph/canonical.ts';
import { listFilesRecursive } from '../lib/validator-helpers.mjs';

const args = new Set(process.argv.slice(2));
const shouldReportJson = args.has('--report-json');

const root = process.cwd();
const reportPath = path.join(root, 'reports', 'cta-label-contract-report.json');
const primaryCtaSectionPath = path.join(root, 'src', 'components', 'system', 'PrimaryCTASection.tsx');
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
  'src/components/reusable/sections/core/TierCardsSection.tsx',
  'src/lib/cta/primaryAction.ts',
  'src/components/system/PrimaryCTASection.tsx',
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

  if (getPrimaryCTA() !== 'Start a Conversation') {
    issues.push({
      code: 'invalid_unknown_system_fallback',
      message: 'getPrimaryCTA() must return the locked primary CTA label.',
    });
  }

  if (getSecondaryCTA(true) !== 'Discuss Your Project') {
    issues.push({
      code: 'invalid_empty_system_fallback',
      message: 'getSecondaryCTA(true) must return the locked secondary CTA label.',
    });
  }

  const primaryCtaSectionSource = fs.readFileSync(primaryCtaSectionPath, 'utf8');
  if (primaryCtaSectionSource.includes('resolveCtaLabel(')) {
    issues.push({
      code: 'cta_label_resolver_still_present',
      message: 'PrimaryCTASection must not use resolveCtaLabel.',
    });
  }

  if (primaryCtaSectionSource.includes('return null')) {
    issues.push({
      code: 'smart_cta_return_null',
      message: 'PrimaryCTASection must not return null for CTA contract failures.',
    });
  }

  if (!primaryCtaSectionSource.includes('PrimaryCTASection requires title and description')) {
    issues.push({
      code: 'missing_cta_required_guard',
      message: 'PrimaryCTASection must throw when title or description is missing.',
    });
  }

  if (!primaryCtaSectionSource.includes('allowSecondaryCTA?: true;')) {
    issues.push({
      code: 'missing_allow_secondary_guard_prop',
      message: 'PrimaryCTASection must expose allowSecondaryCTA as an explicit opt-in.',
    });
  }

  if (!primaryCtaSectionSource.includes('getSecondaryCTA(allowSecondaryCTA)')) {
    issues.push({
      code: 'missing_secondary_cta_gate',
      message: 'PrimaryCTASection must gate the secondary CTA through allowSecondaryCTA.',
    });
  }

  const tierCardsSource = fs.readFileSync(tierCardsPath, 'utf8');
  if (!tierCardsSource.includes('getPrimaryCTA')) {
    issues.push({
      code: 'missing_tier_card_label_resolver',
      message: 'TierCardsSection must use the locked primary CTA label for contact actions.',
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
    !primaryCtaSectionSource.includes(
      "pageIdentity.primarySystem ?? 'smart-website-systems'"
    ) ||
    !primaryCtaSectionSource.includes('system: primarySystem')
  ) {
    issues.push({
      code: 'missing_locked_contact_system_usage',
      message:
        "PrimaryCTASection href generation must derive system from pageIdentity.primarySystem with the 'smart-website-systems' fallback.",
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
    globalPrimaryAction: buildGlobalPrimaryCtaAction(),
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
