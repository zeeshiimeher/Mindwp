#!/usr/bin/env node
/**
 * Rule-based CTA validator.
 *
 * Scans all domain data files and page files for CTA objects and enforces:
 * - Primary CTAs must link to /contact
 * - Primary CTA labels must be "Start a Conversation"
 * - Banned CTA labels are rejected
 *
 * Source: FOUNDATION-AND-POSITIONING.md §5 CTA Language Standards
 * Governance: CONTENT-GOVERNANCE.md §4 Section Behavior Rules (CTA contracts)
 */

import fs from 'node:fs';
import path from 'node:path';

const args = new Set(process.argv.slice(2));
const shouldReportJson = args.has('--report-json');

const root = process.cwd();
const reportPath = path.join(root, 'reports', 'cta-report.json');

const REQUIRED_PRIMARY_HREF = '/contact';
const REQUIRED_PRIMARY_LABEL = 'Start a Conversation';

const BANNED_CTA_LABELS = [
  'Book a Call',
  'Get Started Now',
  'Claim Your Free Audit',
  'Schedule a Demo',
  'Unlock Your Growth',
];

const BANNED_CTA_PATTERN = new RegExp(
  BANNED_CTA_LABELS.map((label) => label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'),
  'i'
);

const SCAN_DIRS = [
  // Data directories — full CTA checks (href + label + banned)
  'src/domains/services/data',
  'src/domains/features/data',
  'src/domains/resources/data',
  'src/domains/industries/data',
  'src/domains/case-studies/data',
  'src/domains/blog/data',
];

// Page directories — href-only checks (tier card labels intentionally vary per tier)
const PAGE_DIRS = [
  'src/domains/industries/pages',
  'src/domains/services/pages',
];

function walkFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walkFiles(full));
    else if (entry.isFile() && /\.(ts|tsx)$/.test(entry.name)) out.push(full);
  }
  return out;
}

function scanFile(filePath, rel, issues, hrefOnly) {
  const text = fs.readFileSync(filePath, 'utf8');

  if (!hrefOnly) {
    // Check for banned CTA labels anywhere in the file
    const bannedMatch = text.match(BANNED_CTA_PATTERN);
    if (bannedMatch) {
      issues.push({
        file: rel,
        code: 'banned_cta_label',
        message: `Banned CTA label found: "${bannedMatch[0]}"`,
      });
    }
  }

  // Check buttonHref on CTA objects (service/feature/tier pattern)
  const buttonHrefMatches = [...text.matchAll(/buttonHref\s*:\s*['"]([^'"]+)['"]/g)];
  for (const match of buttonHrefMatches) {
    if (match[1] !== REQUIRED_PRIMARY_HREF) {
      issues.push({
        file: rel,
        code: 'wrong_primary_cta_href',
        message: `CTA buttonHref "${match[1]}" must be "${REQUIRED_PRIMARY_HREF}"`,
      });
    }
  }

  if (!hrefOnly) {
    // Check buttonText on CTA objects (service/feature pattern — primary CTAs only)
    const buttonTextMatches = [...text.matchAll(/buttonText\s*:\s*['"]([^'"]+)['"]/g)];
    for (const match of buttonTextMatches) {
      if (match[1] !== REQUIRED_PRIMARY_LABEL) {
        issues.push({
          file: rel,
          code: 'wrong_primary_cta_label',
          message: `Primary CTA buttonText "${match[1]}" must be "${REQUIRED_PRIMARY_LABEL}"`,
        });
      }
    }

    // Check primaryAction pattern (resource pattern) — only inside cta blocks
    const ctaBlockMatches = [...text.matchAll(/\bcta\s*:\s*\{[^}]*(?:\{[^}]*\}[^}]*)*\}/gs)];
    for (const ctaBlock of ctaBlockMatches) {
      const block = ctaBlock[0];
      const labelMatch = block.match(/primaryAction\s*:\s*\{[^}]*label\s*:\s*['"]([^'"]+)['"]/);
      if (labelMatch && labelMatch[1] !== REQUIRED_PRIMARY_LABEL) {
        issues.push({
          file: rel,
          code: 'wrong_primary_cta_label',
          message: `primaryAction label "${labelMatch[1]}" must be "${REQUIRED_PRIMARY_LABEL}"`,
        });
      }

      const hrefMatch = block.match(/primaryAction\s*:\s*\{[^}]*href\s*:\s*['"]([^'"]+)['"]/);
      if (hrefMatch && hrefMatch[1] !== REQUIRED_PRIMARY_HREF) {
        issues.push({
          file: rel,
          code: 'wrong_primary_cta_href',
          message: `primaryAction href "${hrefMatch[1]}" must be "${REQUIRED_PRIMARY_HREF}"`,
        });
      }
    }
  }
}

function main() {
  const issues = [];
  let scannedFiles = 0;

  // Full CTA checks on data directories
  for (const relDir of SCAN_DIRS) {
    const absDir = path.join(root, relDir);
    const files = walkFiles(absDir);
    for (const filePath of files) {
      const rel = path.relative(root, filePath);
      scannedFiles++;
      scanFile(filePath, rel, issues, false);
    }
  }

  // Href-only checks on page directories (tier card labels intentionally vary)
  for (const relDir of PAGE_DIRS) {
    const absDir = path.join(root, relDir);
    const files = walkFiles(absDir);
    for (const filePath of files) {
      const rel = path.relative(root, filePath);
      scannedFiles++;
      scanFile(filePath, rel, issues, true);
    }
  }

  if (shouldReportJson) {
    fs.mkdirSync(path.dirname(reportPath), { recursive: true });
    fs.writeFileSync(
      reportPath,
      JSON.stringify({ generatedAt: new Date().toISOString(), passed: issues.length === 0, scannedFiles, issueCount: issues.length, issues }, null, 2)
    );
  }

  if (issues.length === 0) {
    console.log(`✓ CTA validation passed (${scannedFiles} files scanned).`);
    return;
  }

  console.error(`✗ CTA validation found ${issues.length} issue(s):`);
  for (const issue of issues) {
    console.error(`- [${issue.file}] ${issue.message}`);
  }
  process.exitCode = 1;
}

main();
