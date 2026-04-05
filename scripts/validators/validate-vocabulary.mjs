#!/usr/bin/env node
/**
 * Rule-based vocabulary validator.
 *
 * Scans domain data files and content for banned vocabulary defined in
 * FOUNDATION-AND-POSITIONING.md. These terms must be replaced with
 * approved alternatives per CONTENT-GOVERNANCE.md §5 (context-aware,
 * no mechanical find-and-replace).
 */

import fs from 'node:fs';
import path from 'node:path';

const args = new Set(process.argv.slice(2));
const shouldReportJson = args.has('--report-json');

const root = process.cwd();
const reportPath = path.join(root, 'reports', 'vocabulary-report.json');

/**
 * Banned phrases mapped to their approved replacement.
 * Source: FOUNDATION-AND-POSITIONING.md §2 Banned Vocabulary
 * Enforcement rules: CONTENT-GOVERNANCE.md §5 Vocabulary Rules
 */
const BANNED_VOCABULARY = [
  { banned: 'enquiry routing', replacement: 'sent to the right person' },
  { banned: 'operational flow', replacement: 'how enquiries flow' },
  { banned: 'operational integration', replacement: 'fits your process' },
  { banned: 'infrastructure layer', replacement: 'foundation' },
  { banned: 'entry points', replacement: 'clear ways to get in touch' },
  { banned: 'intentional entry points', replacement: 'clear ways to get in touch' },
  { banned: 'refinement capability', replacement: 'easy to improve over time' },
  { banned: 'deliberate implementation', replacement: 'calm, careful delivery' },
  { banned: 'structural visibility', replacement: 'pages search engines can understand' },
  { banned: 'visibility alignment', replacement: 'search and discovery' },
  { banned: 'connected architecture', replacement: 'clear structure' },
  { banned: 'core operational components', replacement: 'what is inside a Smart Website' },
  { banned: 'operational cadence', replacement: 'day to day' },
  { banned: 'service hierarchy', replacement: 'how your services are organised' },
  { banned: 'system chain', replacement: 'how everything connects' },
  { banned: 'routing', replacement: 'sent to the right person' },
  { banned: 'configured', replacement: 'set up' },
  { banned: 'enables', replacement: 'supports' },
  { banned: 'facilitates', replacement: 'handles' },
];

/**
 * Anti-hype words banned across all content.
 * Source: FOUNDATION-AND-POSITIONING.md §Anti-hype language discipline
 * Enforcement rules: CONTENT-GOVERNANCE.md §5 Vocabulary Rules
 */
const ANTI_HYPE_VOCABULARY = [
  { banned: 'dominate', replacement: 'leads' },
  { banned: 'dominates', replacement: 'leads' },
  { banned: 'explode', replacement: 'grow' },
  { banned: 'explosive', replacement: 'significant' },
  { banned: 'disrupt', replacement: 'change' },
  { banned: 'disruptive', replacement: 'new' },
  { banned: 'revolutionary', replacement: 'effective' },
  { banned: 'guaranteed', replacement: 'expected' },
  { banned: 'guarantees', replacement: 'supports' },
  { banned: 'hyper-growth', replacement: 'steady growth' },
  { banned: 'skyrocket', replacement: 'increase' },
  { banned: 'proven', replacement: 'tested' },
  { banned: 'transform', replacement: 'improve' },
  { banned: 'transformed', replacement: 'improved' },
  { banned: 'game-changer', replacement: 'effective approach' },
  { banned: 'at scale', replacement: 'as the business grows' },
  { banned: 'unlock', replacement: 'open' },
  { banned: 'unlocked', replacement: 'opened' },
];

const ALL_BANNED = [...BANNED_VOCABULARY, ...ANTI_HYPE_VOCABULARY];

const BANNED_PATTERNS = ALL_BANNED.map(({ banned, replacement }) => ({
  pattern: new RegExp(`\\b${banned.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi'),
  banned,
  replacement,
}));

const SCAN_DIRS = [
  'src/domains/services/data',
  'src/domains/features/data',
  'src/domains/resources/data',
  'src/domains/industries/data',
  'src/domains/case-studies/data',
  'src/domains/blog/data',
  'src/domains/blog/content',
  'src/domains/resources/content',
  'src/domains/case-studies/content',
];

function walkFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walkFiles(full));
    else if (entry.isFile() && /\.(ts|tsx|md|mdx)$/.test(entry.name)) out.push(full);
  }
  return out;
}

function main() {
  const issues = [];
  let scannedFiles = 0;

  for (const relDir of SCAN_DIRS) {
    const absDir = path.join(root, relDir);
    const files = walkFiles(absDir);

    for (const filePath of files) {
      const rel = path.relative(root, filePath);
      const text = fs.readFileSync(filePath, 'utf8');
      scannedFiles++;

      for (const { pattern, banned, replacement } of BANNED_PATTERNS) {
        pattern.lastIndex = 0;
        const match = pattern.exec(text);
        if (match) {
          issues.push({
            file: rel,
            code: 'banned_vocabulary',
            message: `Banned phrase "${banned}" found. Replace with: "${replacement}"`,
          });
        }
      }
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
    console.log(`✓ Vocabulary validation passed (${scannedFiles} files scanned).`);
    return;
  }

  // Warn mode: log violations but do NOT fail the build.
  console.warn(`⚠ Vocabulary validation: ${issues.length} warning(s) across ${scannedFiles} files:`);
  for (const issue of issues) {
    console.warn(`  - [${issue.file}] ${issue.message}`);
  }
}

main();
