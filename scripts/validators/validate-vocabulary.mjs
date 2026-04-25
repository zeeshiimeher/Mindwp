#!/usr/bin/env node
/**
 * Rule-based vocabulary validator.
 *
 * Scans domain data files and content for banned vocabulary defined in
 * SYSTEM.md. These terms must be replaced with
 * approved alternatives per CONTENT.md (context-aware,
 * no mechanical find-and-replace).
 */

import fs from 'node:fs';
import path from 'node:path';

import { createLogger } from '../../lib/logger/index.mjs';
import { loadVocabularyRules } from '../lib/contract-validator-helpers.mjs';

const args = new Set(process.argv.slice(2));
const shouldReportJson = args.has('--report-json');

const root = process.cwd();
const reportPath = path.join(root, 'reports', 'vocabulary-report.json');
const logger = createLogger({ label: 'validate-vocabulary', mode: 'summary', rootDir: root });

const vocabularyRules = loadVocabularyRules(root);
const ALL_BANNED = [...vocabularyRules.bannedVocabulary, ...vocabularyRules.antiHypeVocabulary];

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
            message: replacement
              ? `Banned phrase "${banned}" found. Replace with: "${replacement}"`
              : `Banned phrase "${banned}" found. Rewrite in calmer language.`,
          });
        }
      }
    }
  }

  if (shouldReportJson) {
    logger.writeReport(reportPath, {
      generatedAt: new Date().toISOString(),
      passed: issues.length === 0,
      scannedFiles,
      issueCount: issues.length,
      issues,
      sourceCommand: 'node scripts/validators/validate-vocabulary.mjs --report-json',
    });
  }

  if (issues.length === 0) {
    console.log(`✓ Vocabulary validation passed (${scannedFiles} files scanned).`);
    return;
  }

  // Warn mode: log violations but do NOT fail the build.
  console.warn(
    `⚠ Vocabulary validation: ${issues.length} warning(s) across ${scannedFiles} files:`
  );
  for (const issue of issues) {
    console.warn(`  - [${issue.file}] ${issue.message}`);
  }
}

main();
