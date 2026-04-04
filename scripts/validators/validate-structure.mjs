#!/usr/bin/env node
/**
 * Rule-based structure validator.
 *
 * Validates that domain data files contain required top-level sections
 * based on content type. This is a lightweight complement to the
 * domain-specific validators — it enforces section presence without
 * needing ts-morph AST parsing.
 */

import fs from 'node:fs';
import path from 'node:path';

const args = new Set(process.argv.slice(2));
const shouldReportJson = args.has('--report-json');

const root = process.cwd();
const reportPath = path.join(root, 'reports', 'structure-report.json');

/**
 * Required exported keys per domain, checked via simple text matching
 * on the data file source.
 */
const DOMAIN_RULES = [
  {
    label: 'services',
    glob: 'src/domains/services/data/*.ts',
    dir: 'src/domains/services/data',
    requiredKeys: ['seo', 'hero', 'sections'],
  },
  {
    label: 'features',
    glob: 'src/domains/features/data/*.ts',
    dir: 'src/domains/features/data',
    requiredKeys: ['slug', 'seo', 'hero', 'sections', 'cta'],
  },
  {
    label: 'industries',
    glob: 'src/domains/industries/data/**/*.ts',
    dir: 'src/domains/industries/data',
    requiredKeys: ['slug', 'type', 'seo', 'hero', 'cta'],
  },
];

/**
 * CTA placement rules per domain content type.
 * Blog: CTA must be the last section.
 * Resources: CTA must exist; only related-resources / sidebar-cta may follow it.
 * Governance: CONTENT-GOVERNANCE.md §4 Section Behavior Rules (CTA)
 */
const CTA_PLACEMENT_RULES = [
  {
    label: 'blog',
    dir: 'src/domains/blog/content',
    ext: '.tsx',
    // CTA must be the very last type in the sections array.
    allowedAfterCta: [],
  },
  {
    label: 'resources',
    dir: 'src/domains/resources/content',
    ext: '.tsx',
    // Navigation/sidebar sections are allowed after CTA per CONTENT-BLUEPRINT-SYSTEM.
    allowedAfterCta: ['related-resources', 'sidebar-cta'],
  },
];

/**
 * Hype words banned from headings.
 * Source: FOUNDATION-AND-POSITIONING.md §2 rule + §10 self-check #7.
 * Governance: CONTENT-GOVERNANCE.md §4 Section Behavior Rules (headings)
 */
const HEADING_BANNED_WORDS = [
  'dominate', 'dominates', 'explode', 'explosive', 'disrupt', 'disruptive',
  'revolutionary', 'guaranteed', 'guarantees', 'hyper-growth', 'skyrocket',
  'game-changer', 'transform', 'unlock', 'proven',
];

const HEADING_PATTERNS = HEADING_BANNED_WORDS.map(
  (w) => ({ word: w, pattern: new RegExp(`\\b${w}\\b`, 'i') })
);

/**
 * Directories scanned for heading vocabulary enforcement.
 */
const HEADING_SCAN_DIRS = [
  { label: 'services', dir: 'src/domains/services/data', ext: '.ts' },
  { label: 'features', dir: 'src/domains/features/data', ext: '.ts' },
  { label: 'industries', dir: 'src/domains/industries/data', ext: '.ts' },
  { label: 'blog', dir: 'src/domains/blog/data', ext: '.ts' },
  { label: 'resources', dir: 'src/domains/resources/data', ext: '.ts' },
  { label: 'case-studies', dir: 'src/domains/case-studies/data', ext: '.ts' },
];

/**
 * Directories with hero blocks to check for hype in descriptions.
 */
const HERO_SCAN_DIRS = [
  { label: 'services', dir: 'src/domains/services/data', ext: '.ts' },
  { label: 'features', dir: 'src/domains/features/data', ext: '.ts' },
  { label: 'industries', dir: 'src/domains/industries/data', ext: '.ts' },
];

/**
 * Domain tone rules: domains where hype words are errors.
 * Source: FOUNDATION-AND-POSITIONING.md §7 (calm/consultative), §10 self-check.
 * Governance: CONTENT-GOVERNANCE.md §3 Domain Behavior Rules (Case Studies)
 */
const TONE_RESTRICTED_DIRS = [
  { label: 'case-studies', dir: 'src/domains/case-studies/data', ext: '.ts' },
  { label: 'case-studies-content', dir: 'src/domains/case-studies/content', ext: '.tsx' },
];

function walkFiles(dir, ext = '.ts') {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walkFiles(full, ext));
    else if (entry.isFile() && entry.name.endsWith(ext)) out.push(full);
  }
  return out;
}

/**
 * Extract ordered section types from a content file by matching `type: '...'` patterns.
 */
function extractSectionTypes(text) {
  const regex = /type:\s*'([^']+)'/g;
  const types = [];
  let m;
  while ((m = regex.exec(text)) !== null) {
    types.push(m[1]);
  }
  return types;
}

/**
 * Check CTA placement rules for blog and resource content files.
 */
function checkCtaPlacement() {
  const issues = [];
  let scannedFiles = 0;

  for (const rule of CTA_PLACEMENT_RULES) {
    const absDir = path.join(root, rule.dir);
    const files = walkFiles(absDir, rule.ext);

    for (const filePath of files) {
      const rel = path.relative(root, filePath);
      const text = fs.readFileSync(filePath, 'utf8');
      scannedFiles++;

      const types = extractSectionTypes(text);
      if (types.length === 0) continue;

      const ctaIndex = types.lastIndexOf('cta');

      if (ctaIndex === -1) {
        issues.push({
          file: rel,
          domain: rule.label,
          code: 'missing_cta_section',
          message: `Missing CTA section in ${rule.label} content file`,
        });
        continue;
      }

      // Check sections after CTA
      const afterCta = types.slice(ctaIndex + 1);
      const disallowed = afterCta.filter((t) => !rule.allowedAfterCta.includes(t));
      if (disallowed.length > 0) {
        issues.push({
          file: rel,
          domain: rule.label,
          code: 'cta_not_terminal',
          message: `CTA must be the final section (found "${disallowed.join(', ')}" after CTA)`,
        });
      }
    }
  }

  return { issues, scannedFiles };
}

/**
 * Extract heading-like string values (title, heading, label) from data files.
 * Matches patterns like: title: 'Some Text' or title: "Some Text"
 */
function extractHeadingValues(text) {
  const regex = /(?:title|heading|label)\s*:\s*['"]([^'"]+)['"]/g;
  const values = [];
  let m;
  while ((m = regex.exec(text)) !== null) {
    values.push(m[1]);
  }
  return values;
}

/**
 * Check heading/title/label values for hype vocabulary.
 * Headings must be in plain English per FOUNDATION §2 rule and §10 self-check #7.
 */
function checkHeadingVocabulary() {
  const issues = [];
  let scannedFiles = 0;

  for (const rule of HEADING_SCAN_DIRS) {
    const absDir = path.join(root, rule.dir);
    const files = walkFiles(absDir, rule.ext);

    for (const filePath of files) {
      const rel = path.relative(root, filePath);
      const text = fs.readFileSync(filePath, 'utf8');
      scannedFiles++;

      const headings = extractHeadingValues(text);
      for (const heading of headings) {
        for (const { word, pattern } of HEADING_PATTERNS) {
          if (pattern.test(heading)) {
            issues.push({
              file: rel,
              domain: rule.label,
              code: 'heading_hype_word',
              message: `Heading contains banned hype word "${word}": "${heading}"`,
            });
          }
        }
      }
    }
  }

  return { issues, scannedFiles };
}

/**
 * Check tone-restricted domains for hype vocabulary anywhere in text.
 * Case studies must maintain calm, consultative tone per FOUNDATION §7.
 */
function checkDomainTone() {
  const issues = [];
  let scannedFiles = 0;

  for (const rule of TONE_RESTRICTED_DIRS) {
    const absDir = path.join(root, rule.dir);
    const files = walkFiles(absDir, rule.ext);

    for (const filePath of files) {
      const rel = path.relative(root, filePath);
      const text = fs.readFileSync(filePath, 'utf8');
      scannedFiles++;

      for (const { word, pattern } of HEADING_PATTERNS) {
        if (pattern.test(text)) {
          issues.push({
            file: rel,
            domain: rule.label,
            code: 'tone_hype_word',
            message: `Hype word "${word}" found in tone-restricted domain (${rule.label})`,
          });
        }
      }
    }
  }

  return { issues, scannedFiles };
}

/**
 * Extract description text from hero blocks in data files.
 * Matches: description: '...' or description:\n      '...'
 */
function extractHeroDescriptions(text) {
  const descs = [];
  // Find hero block start
  const heroIdx = text.indexOf('hero:');
  if (heroIdx === -1) return descs;
  // Extract text after hero: up to the next top-level key (line starting without indent)
  const heroBlock = text.slice(heroIdx, heroIdx + 2000);
  // Match description values (single or multi-line template literals or quoted strings)
  const descRe = /description\s*:\s*\n?\s*['"`]([^'"`]{1,500})/g;
  let m;
  while ((m = descRe.exec(heroBlock)) !== null) {
    descs.push(m[1]);
  }
  return descs;
}

/**
 * Check hero descriptions for hype vocabulary.
 * Hero is the most visible section — no hype words allowed.
 */
function checkHeroDescriptions() {
  const issues = [];
  let scannedFiles = 0;

  for (const rule of HERO_SCAN_DIRS) {
    const absDir = path.join(root, rule.dir);
    const files = walkFiles(absDir, rule.ext);

    for (const filePath of files) {
      const rel = path.relative(root, filePath);
      const text = fs.readFileSync(filePath, 'utf8');
      scannedFiles++;

      const descs = extractHeroDescriptions(text);
      for (const desc of descs) {
        for (const { word, pattern } of HEADING_PATTERNS) {
          if (pattern.test(desc)) {
            issues.push({
              file: rel,
              domain: rule.label,
              code: 'hero_hype_word',
              message: `Hero description contains hype word "${word}"`,
            });
          }
        }
      }
    }
  }

  return { issues, scannedFiles };
}

function main() {
  const issues = [];
  let scannedFiles = 0;

  for (const rule of DOMAIN_RULES) {
    const absDir = path.join(root, rule.dir);
    const files = walkFiles(absDir);

    for (const filePath of files) {
      const rel = path.relative(root, filePath);
      const text = fs.readFileSync(filePath, 'utf8');
      scannedFiles++;

      for (const key of rule.requiredKeys) {
        // Match key as an object property (e.g. `seo:` or `seo :`)
        const pattern = new RegExp(`\\b${key}\\s*:`);
        if (!pattern.test(text)) {
          issues.push({
            file: rel,
            domain: rule.label,
            code: 'missing_section',
            message: `Missing required section "${key}" in ${rule.label} data file`,
          });
        }
      }
    }
  }

  // CTA placement checks
  const ctaResult = checkCtaPlacement();
  issues.push(...ctaResult.issues);
  scannedFiles += ctaResult.scannedFiles;

  // Heading vocabulary checks (hype words in titles/headings/labels)
  const headingResult = checkHeadingVocabulary();
  issues.push(...headingResult.issues);
  scannedFiles += headingResult.scannedFiles;

  // Hero description checks (hype words in hero descriptions)
  const heroResult = checkHeroDescriptions();
  issues.push(...heroResult.issues);
  scannedFiles += heroResult.scannedFiles;

  // Domain tone checks (hype words in tone-restricted domains)
  const toneResult = checkDomainTone();
  // Tone violations are warnings (WARN mode) — log but don't fail
  const toneWarnings = toneResult.issues;
  scannedFiles += toneResult.scannedFiles;

  if (shouldReportJson) {
    fs.mkdirSync(path.dirname(reportPath), { recursive: true });
    fs.writeFileSync(
      reportPath,
      JSON.stringify({ generatedAt: new Date().toISOString(), passed: issues.length === 0, scannedFiles, issueCount: issues.length, issues, toneWarnings: toneWarnings.length, toneIssues: toneWarnings }, null, 2)
    );
  }

  // Log tone warnings (non-blocking)
  if (toneWarnings.length > 0) {
    console.warn(`⚠ Tone warnings: ${toneWarnings.length} hype word(s) in restricted domains:`);
    for (const w of toneWarnings) {
      console.warn(`  - [${w.file}] ${w.message}`);
    }
  }

  if (issues.length === 0) {
    console.log(`✓ Structure validation passed (${scannedFiles} files scanned).`);
    return;
  }

  console.error(`✗ Structure validation found ${issues.length} issue(s):`);
  for (const issue of issues) {
    console.error(`- [${issue.file}] ${issue.message}`);
  }
  process.exitCode = 1;
}

main();
