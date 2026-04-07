#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const reportsDir = path.join(root, 'reports');

const ignoredDirs = new Set([
  '.git',
  '.next',
  '.next-audit',
  '_workspace',
  'node_modules',
  'Mindwp-Docs',
  'scripts',
  'src',
  'tests',
  'public',
  'archive',
  'archive-reference',
]);

const disallowedTopLevelFiles = new Set(['.DS_Store', 'fix-log.md', 'visual-audit.json', 'visual-audit.md']);
const disallowedReportDirs = new Set(['history', 'phase7-audit copy']);
const allowedNestedReportDirs = new Set(['visual-audit']);

const reportLikePatterns = [
  /report/i,
  /audit/i,
  /system-state\.json$/i,
  /system-drift\.json$/i,
  /validation-results\.json$/i,
  /authority-map\.(json|dot|svg)$/i,
  /content-gaps\.(json|md)$/i,
  /content-intelligence\.json$/i,
  /content-score\.json$/i,
  /page-priorities\.json$/i,
  /topic-authority-scores\.(json|md)$/i,
  /fix-log\.json$/i,
  /session-log\.json$/i,
  /token-v2-baseline\.json$/i,
  /visual-audit\.(json|md)$/i,
];

function walk(dirPath, callback) {
  if (!fs.existsSync(dirPath)) {
    return;
  }

  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const absolutePath = path.join(dirPath, entry.name);
    const shouldDescend = callback(absolutePath, entry);

    if (entry.isDirectory() && shouldDescend !== false) {
      walk(absolutePath, callback);
    }
  }
}

function isReportLike(filePath) {
  const normalized = filePath.replaceAll(path.sep, '/');
  return reportLikePatterns.some(pattern => pattern.test(normalized));
}

function relative(filePath) {
  return path.relative(root, filePath).replaceAll(path.sep, '/');
}

function main() {
  const violations = [];

  if (!fs.existsSync(reportsDir)) {
    violations.push('reports/ directory does not exist.');
  }

  if (fs.existsSync(reportsDir)) {
    const topLevelEntries = fs.readdirSync(reportsDir, { withFileTypes: true });

    for (const entry of topLevelEntries) {
      if (entry.isFile() && disallowedTopLevelFiles.has(entry.name)) {
        violations.push(`Disallowed top-level report file: reports/${entry.name}`);
      }

      if (entry.isDirectory() && disallowedReportDirs.has(entry.name)) {
        violations.push(`Disallowed report directory: reports/${entry.name}`);
      }

      if (entry.isDirectory() && !allowedNestedReportDirs.has(entry.name)) {
        violations.push(`Unexpected nested report directory: reports/${entry.name}`);
      }
    }

    const currentReports = topLevelEntries.filter(
      entry => entry.isFile() && entry.name !== '.DS_Store'
    );
    const basenameMap = new Map();

    for (const entry of currentReports) {
      const basename = entry.name.replace(path.extname(entry.name), '');
      const extensions = basenameMap.get(basename) ?? new Set();
      extensions.add(path.extname(entry.name));
      basenameMap.set(basename, extensions);
    }

    for (const [basename, extensions] of basenameMap.entries()) {
      if (extensions.size > 2) {
        violations.push(`Duplicate current report variants detected for reports/${basename}`);
      }
    }

    walk(reportsDir, (absolutePath, entry) => {
      if (entry.isFile() && entry.name === '.DS_Store') {
        violations.push(`Disallowed file in reports tree: ${relative(absolutePath)}`);
      }
    });
  }

  walk(root, (absolutePath, entry) => {
    const relPath = relative(absolutePath);
    const topSegment = relPath.split('/')[0];

    if (entry.isDirectory() && ignoredDirs.has(topSegment)) {
      return false;
    }

    if (!entry.isFile()) {
      return true;
    }

    if (relPath.startsWith('reports/')) {
      return true;
    }

    if (ignoredDirs.has(topSegment)) {
      return true;
    }

    if (isReportLike(relPath)) {
      violations.push(`Report-like file exists outside reports/: ${relPath}`);
    }

    return true;
  });

  if (violations.length > 0) {
    console.warn(`⚠ Reports structure validation found ${violations.length} warning(s):`);
    for (const violation of violations) {
      console.warn(`- ${violation}`);
    }
    return;
  }

  console.log('✓ Reports structure validation passed.');
}

main();
