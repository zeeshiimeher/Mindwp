#!/usr/bin/env node
/**
 * Content consistency audit.
 *
 * Scans domain data/content files and reports inconsistencies in:
 * - CTA labels and hrefs
 * - Banned vocabulary presence
 * - Hype word density per domain
 * - Missing CTA sections
 *
 * Output: reports/content-consistency-audit.json (report only, no fixes).
 */

import fs from 'node:fs';
import path from 'node:path';

import { systemEnv } from '../../config/systemEnv.mjs';
import { resolveLoggingMode } from '../../config/loggingConfig.mjs';
import { createLogger } from '../../lib/logger/index.mjs';
import { isApprovedCtaLabel } from '../../src/config/ctaLabels.ts';
import { createReportSchema } from '../lib/report-schema.mjs';

const root = process.cwd();
const reportPath = path.join(root, 'reports', 'content-consistency-audit.json');
const sourceCommand = 'node --import tsx/esm scripts/analyzers/audit-content-consistency.mjs';
const logger = createLogger({
  label: 'content-consistency',
  mode: resolveLoggingMode(process.argv.slice(2), systemEnv),
  rootDir: root,
});

const DOMAINS = [
  { label: 'services', dirs: ['src/domains/services/data'], exts: ['.ts'] },
  {
    label: 'blog',
    dirs: ['src/domains/blog/data', 'src/domains/blog/content'],
    exts: ['.ts', '.tsx'],
  },
  {
    label: 'resources',
    dirs: ['src/domains/resources/data', 'src/domains/resources/content'],
    exts: ['.ts', '.tsx'],
  },
  {
    label: 'case-studies',
    dirs: ['src/domains/case-studies/data', 'src/domains/case-studies/content'],
    exts: ['.ts', '.tsx'],
  },
];

const HYPE_WORDS = [
  'dominate',
  'dominates',
  'explode',
  'explosive',
  'disrupt',
  'disruptive',
  'revolutionary',
  'guaranteed',
  'guarantees',
  'hyper-growth',
  'skyrocket',
  'proven',
  'transform',
  'transformed',
  'game-changer',
  'at scale',
  'unlock',
  'unlocked',
];

const HYPE_PATTERNS = HYPE_WORDS.map(w => ({
  word: w,
  pattern: new RegExp(`\\b${w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi'),
}));

const BANNED_PHRASES = [
  'enquiry routing',
  'operational flow',
  'operational integration',
  'infrastructure layer',
  'entry points',
  'intentional entry points',
  'refinement capability',
  'deliberate implementation',
  'structural visibility',
  'visibility alignment',
  'connected architecture',
  'core operational components',
  'operational cadence',
  'service hierarchy',
  'system chain',
  'routing',
  'configured',
  'enables',
  'facilitates',
];

const BANNED_PATTERNS = BANNED_PHRASES.map(w => ({
  phrase: w,
  pattern: new RegExp(`\\b${w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi'),
}));

const APPROVED_CTA_HREF = '/contact';

function walkFiles(dir, exts) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walkFiles(full, exts));
    else if (entry.isFile() && exts.some(e => entry.name.endsWith(e))) out.push(full);
  }
  return out;
}

function countMatches(text, patterns) {
  let count = 0;
  for (const { pattern } of patterns) {
    pattern.lastIndex = 0;
    const matches = text.match(pattern);
    if (matches) count += matches.length;
  }
  return count;
}

function extractCtaValues(text) {
  const labels = [];
  const hrefs = [];
  // Match only actionLabel (CTA-specific label property)
  const labelRe = /actionLabel\s*:\s*['"]([^'"]+)['"]/g;
  let m;
  while ((m = labelRe.exec(text)) !== null) labels.push(m[1]);
  // Match only actionHref (CTA-specific href property)
  const hrefRe = /actionHref\s*:\s*['"]([^'"]+)['"]/g;
  while ((m = hrefRe.exec(text)) !== null) hrefs.push(m[1]);
  return { labels, hrefs };
}

function main() {
  const audit = {
    domains: {},
    summary: { totalFiles: 0, totalHypeWords: 0, totalBannedPhrases: 0, ctaMismatches: 0 },
  };

  for (const domain of DOMAINS) {
    const domainResult = {
      files: 0,
      hypeWordCount: 0,
      bannedPhraseCount: 0,
      ctaIssues: [],
      hypeDetails: [],
      bannedDetails: [],
    };

    for (const relDir of domain.dirs) {
      const absDir = path.join(root, relDir);
      const files = walkFiles(absDir, domain.exts);

      for (const filePath of files) {
        const rel = path.relative(root, filePath);
        const text = fs.readFileSync(filePath, 'utf8');
        domainResult.files++;

        // Hype word count
        const hypeCount = countMatches(text, HYPE_PATTERNS);
        if (hypeCount > 0) {
          domainResult.hypeWordCount += hypeCount;
          domainResult.hypeDetails.push({ file: rel, count: hypeCount });
        }

        // Banned phrase count
        const bannedCount = countMatches(text, BANNED_PATTERNS);
        if (bannedCount > 0) {
          domainResult.bannedPhraseCount += bannedCount;
          domainResult.bannedDetails.push({ file: rel, count: bannedCount });
        }

        // CTA consistency
        const { labels, hrefs } = extractCtaValues(text);
        for (const label of labels) {
          if (!isApprovedCtaLabel(label)) {
            domainResult.ctaIssues.push({ file: rel, type: 'label', value: label });
          }
        }
        for (const href of hrefs) {
          // Skip internal section links (anchors) and service/page links
          if (
            href.startsWith('#') ||
            href.startsWith('/services/') ||
            href.startsWith('/features/') ||
            href.startsWith('/industries/') ||
            href.startsWith('/blog/') ||
            href.startsWith('/resources/')
          )
            continue;
          if (href !== APPROVED_CTA_HREF && href !== '/') {
            domainResult.ctaIssues.push({ file: rel, type: 'href', value: href });
          }
        }
      }
    }

    audit.domains[domain.label] = domainResult;
    audit.summary.totalFiles += domainResult.files;
    audit.summary.totalHypeWords += domainResult.hypeWordCount;
    audit.summary.totalBannedPhrases += domainResult.bannedPhraseCount;
    audit.summary.ctaMismatches += domainResult.ctaIssues.length;
  }

  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  const warningCount =
    audit.summary.totalHypeWords + audit.summary.totalBannedPhrases + audit.summary.ctaMismatches;
  const report = createReportSchema({
    name: 'content-consistency-audit',
    status: warningCount > 0 ? 'WARN' : 'PASS',
    summary: {
      total: audit.summary.totalFiles,
      passed: Math.max(audit.summary.totalFiles - audit.summary.ctaMismatches, 0),
      failed: 0,
      warnings: warningCount,
    },
    issues: Object.values(audit.domains).flatMap(domain => domain.ctaIssues),
    data: audit,
    sourceCommand,
  });
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2) + '\n');

  logger.printTotals({
    files: audit.summary.totalFiles,
    hypeWords: audit.summary.totalHypeWords,
    bannedPhrases: audit.summary.totalBannedPhrases,
    ctaMismatches: audit.summary.ctaMismatches,
  });
  logger.printSummary(`report -> ${logger.relativePath(reportPath)}`);
}

main();
