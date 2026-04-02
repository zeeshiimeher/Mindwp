#!/usr/bin/env node
/**
 * Rule-based CTA validator.
 *
 * Scans all domain data files, page files, and system source files for CTA
 * objects and enforces:
 * - Primary CTAs must link to /contact
 * - Primary CTA labels must be "Start a Conversation"
 * - Banned CTA labels are rejected
 * - CTA labels MUST ONLY come from CTA_CONFIG or page data (SR1)
 * - No file outside allowed sources may define CTA labels (SR6)
 *
 * Source: FOUNDATION-AND-POSITIONING.md §5 CTA Language Standards
 * Governance: CONTENT-GOVERNANCE.md §4 Section Behavior Rules (CTA contracts)
 * System rules: SR1 (CTA label source), SR6 (CTA validator scope)
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

/**
 * SR1 — Patterns that indicate ad-hoc CTA label definitions outside CTA_CONFIG.
 * These catch hardcoded CTA-style strings in lib/config/system files.
 */
const ROGUE_CTA_LABEL_PATTERNS = [
  /['"]Book a\b/i,
  /['"]Get a\b/i,
  /['"]Start your\b/i,
  /['"]Schedule a\b/i,
  /['"]Claim your\b/i,
  /['"]Unlock your\b/i,
  /['"]Request a\b/i,
];

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

// SR6 — Additional source directories to scan for rogue CTA label definitions.
// CTA labels MUST ONLY come from CTA_CONFIG (ui-intelligence.ts) or page data files.
const SYSTEM_SCAN_DIRS = [
  'src/lib',
  'src/config',
  'src/components/system',
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
  const lines = text.split('\n');

  if (!hrefOnly) {
    // Check for banned CTA labels anywhere in the file
    for (let i = 0; i < lines.length; i++) {
      const bannedMatch = lines[i].match(BANNED_CTA_PATTERN);
      if (bannedMatch) {
        issues.push({
          file: rel,
          line: i + 1,
          code: 'banned_cta_label',
          message: `Banned CTA label found: "${bannedMatch[0]}"`,
        });
      }
    }
  }

  // Check buttonHref on CTA objects (service/feature/tier pattern)
  const buttonHrefMatches = [...text.matchAll(/buttonHref\s*:\s*['"]([^'"]+)['"]/g)];
  for (const match of buttonHrefMatches) {
    if (match[1] !== REQUIRED_PRIMARY_HREF) {
      issues.push({
        file: rel,
        line: lineOfIndex(text, match.index),
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
          line: lineOfIndex(text, match.index),
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
          line: lineOfIndex(text, ctaBlock.index),
          code: 'wrong_primary_cta_label',
          message: `primaryAction label "${labelMatch[1]}" must be "${REQUIRED_PRIMARY_LABEL}"`,
        });
      }

      const hrefMatch = block.match(/primaryAction\s*:\s*\{[^}]*href\s*:\s*['"]([^'"]+)['"]/);
      if (hrefMatch && hrefMatch[1] !== REQUIRED_PRIMARY_HREF) {
        issues.push({
          file: rel,
          line: lineOfIndex(text, ctaBlock.index),
          code: 'wrong_primary_cta_href',
          message: `primaryAction href "${hrefMatch[1]}" must be "${REQUIRED_PRIMARY_HREF}"`,
        });
      }
    }
  }
}

/**
 * SR1 + SR6 — Scan system source files for rogue CTA label definitions.
 * CTA labels MUST come ONLY from CTA_CONFIG (ui-intelligence.ts) or page data files.
 * Any file in src/lib/, src/config/, or src/components/system/ that defines
 * CTA-style label strings is a violation.
 */
function scanSystemFile(filePath, rel, issues) {
  // ui-intelligence.ts is the canonical CTA_CONFIG source — skip it
  if (rel.includes('ui-intelligence')) return;

  const text = fs.readFileSync(filePath, 'utf8');
  const lines = text.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Skip comments
    if (line.trimStart().startsWith('//') || line.trimStart().startsWith('*')) continue;

    for (const pattern of ROGUE_CTA_LABEL_PATTERNS) {
      const match = line.match(pattern);
      if (match) {
        issues.push({
          file: rel,
          line: i + 1,
          code: 'rogue_cta_label',
          message: `SR1 violation: CTA-style label "${match[0]}" found outside CTA_CONFIG. Labels must come ONLY from CTA_CONFIG or page data.`,
        });
      }
    }

    // Also check for banned labels in system files
    const bannedMatch = line.match(BANNED_CTA_PATTERN);
    if (bannedMatch) {
      issues.push({
        file: rel,
        line: i + 1,
        code: 'banned_cta_label_system',
        message: `SR6 violation: Banned CTA label "${bannedMatch[0]}" found in system source file.`,
      });
    }
  }
}

function lineOfIndex(text, index) {
  let line = 1;
  for (let i = 0; i < index && i < text.length; i++) {
    if (text[i] === '\n') line++;
  }
  return line;
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

  // SR6 — Scan system source directories for rogue CTA label definitions
  for (const relDir of SYSTEM_SCAN_DIRS) {
    const absDir = path.join(root, relDir);
    const files = walkFiles(absDir);
    for (const filePath of files) {
      const rel = path.relative(root, filePath);
      scannedFiles++;
      scanSystemFile(filePath, rel, issues);
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
    const loc = issue.line ? `${issue.file}:${issue.line}` : issue.file;
    console.error(`- [${loc}] [${issue.code}] ${issue.message}`);
  }
  process.exitCode = 1;
}

main();
