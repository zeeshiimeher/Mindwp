#!/usr/bin/env node
/**
 * Content scoring system.
 *
 * Evaluates each content page across deterministic dimensions:
 * - hypeCount: number of hype/banned words found
 * - bannedPhraseCount: number of banned phrases found
 * - wordCount: total word count
 * - sentenceCount: total sentence count
 * - avgSentenceLength: average words per sentence
 * - hasCta: whether a CTA section/key exists
 * - ctaLabelApproved: whether CTA uses approved label
 *
 * Output: reports/content-score.json
 *
 * Constraint: deterministic only. No subjective scoring or NLP.
 *
 * Source: CONTENT.md (Edit Intensity Levels, scoring feeds priority)
 */

import fs from 'node:fs';
import path from 'node:path';

import { systemEnv } from '../../config/systemEnv.mjs';
import { resolveLoggingMode } from '../../config/loggingConfig.mjs';
import { createLogger } from '../../lib/logger/index.mjs';
import { isApprovedCtaLabel } from '../../src/config/ctaLabels.ts';
import { createReportSchema } from '../lib/report-schema.mjs';

const root = process.cwd();
const reportPath = path.join(root, 'reports', 'content-score.json');
const sourceCommand = 'node --import tsx/esm scripts/analyzers/score-content.mjs';
const logger = createLogger({
  label: 'content-score',
  mode: resolveLoggingMode(process.argv.slice(2), systemEnv),
  rootDir: root,
});

const DOMAINS = [
  { label: 'services', dirs: ['src/domains/services/data'], exts: ['.ts'] },
  { label: 'features', dirs: ['src/domains/features/data'], exts: ['.ts'] },
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
  { label: 'industries', dirs: ['src/domains/industries/data'], exts: ['.ts'] },
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

const HYPE_PATTERNS = HYPE_WORDS.map(
  w => new RegExp(`\\b${w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi')
);

const BANNED_PATTERNS = BANNED_PHRASES.map(
  w => new RegExp(`\\b${w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi')
);

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

/**
 * Extract only user-visible string content from a TS/TSX file.
 * Matches quoted string values (single, double, backtick).
 */
function extractTextContent(text) {
  const strings = [];
  const re = /['"`]([^'"`]{5,}?)['"`]/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    const val = m[1];
    // Skip imports, paths, slugs, and code-like values
    if (val.startsWith('/') || val.startsWith('http') || val.includes('import')) continue;
    if (/^[a-z-]+$/.test(val)) continue; // slug-like
    strings.push(val);
  }
  return strings.join(' ');
}

function countPatternMatches(text, patterns) {
  let count = 0;
  for (const p of patterns) {
    p.lastIndex = 0;
    const matches = text.match(p);
    if (matches) count += matches.length;
  }
  return count;
}

function scoreFile(filePath, label) {
  const text = fs.readFileSync(filePath, 'utf8');
  const content = extractTextContent(text);
  const words = content.split(/\s+/).filter(Boolean);
  const sentences = content.split(/[.!?]+/).filter(s => s.trim().length > 0);
  const wordCount = words.length;
  const sentenceCount = sentences.length;
  const avgSentenceLength = sentenceCount > 0 ? Math.round(wordCount / sentenceCount) : 0;

  const hypeCount = countPatternMatches(content, HYPE_PATTERNS);
  const bannedPhraseCount = countPatternMatches(content, BANNED_PATTERNS);

  // CTA detection
  const hasCta = /type:\s*['"]cta['"]/.test(text) || /\bcta\s*:/.test(text);
  const actionLabelMatch = text.match(/actionLabel\s*:\s*['"]([^'"]+)['"]/);
  const ctaLabelApproved = actionLabelMatch ? isApprovedCtaLabel(actionLabelMatch[1]) : null;

  // Improvement flags
  const flags = [];
  if (hypeCount > 0) flags.push('has-hype-words');
  if (bannedPhraseCount > 0) flags.push('has-banned-phrases');
  if (!hasCta) flags.push('missing-cta');
  if (ctaLabelApproved === false) flags.push('non-approved-cta-label');
  if (avgSentenceLength > 25) flags.push('long-sentences');

  return {
    file: path.relative(root, filePath),
    domain: label,
    wordCount,
    sentenceCount,
    avgSentenceLength,
    hypeCount,
    bannedPhraseCount,
    hasCta,
    ctaLabelApproved,
    flags,
  };
}

function main() {
  const scores = [];

  for (const domain of DOMAINS) {
    for (const relDir of domain.dirs) {
      const absDir = path.join(root, relDir);
      const files = walkFiles(absDir, domain.exts);
      for (const filePath of files) {
        scores.push(scoreFile(filePath, domain.label));
      }
    }
  }

  const summary = {
    filesWithHype: scores.filter(s => s.hypeCount > 0).length,
    filesWithBanned: scores.filter(s => s.bannedPhraseCount > 0).length,
    filesWithoutCta: scores.filter(s => !s.hasCta).length,
    filesWithFlags: scores.filter(s => s.flags.length > 0).length,
  };
  const report = createReportSchema({
    name: 'content-score',
    status: summary.filesWithFlags > 0 ? 'WARN' : 'PASS',
    summary: {
      total: scores.length,
      passed: scores.length - summary.filesWithFlags,
      failed: 0,
      warnings: summary.filesWithFlags,
    },
    issues: scores.filter(score => score.flags.length > 0),
    data: {
      totalFiles: scores.length,
      summary,
      scores,
    },
    sourceCommand,
  });

  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2) + '\n');

  logger.printTotals({
    files: scores.length,
    hype: summary.filesWithHype,
    banned: summary.filesWithBanned,
    missingCta: summary.filesWithoutCta,
    flagged: summary.filesWithFlags,
  });
  logger.printSummary(`report -> ${logger.relativePath(reportPath)}`);
}

main();
