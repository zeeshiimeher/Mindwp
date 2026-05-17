#!/usr/bin/env node
/* eslint-disable no-console */

import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const scanRoots = ['src', 'app', 'content', 'data']
  .map(dir => path.join(root, dir))
  .filter(dir => fs.existsSync(dir));

const skippedDirNames = new Set([
  '.git',
  '.next',
  'node_modules',
  'reports',
  'generated',
  'dist',
  'build',
  'coverage',
  'test-results',
]);

const skippedPathParts = [
  ['src', 'app', 'dev'],
  ['src', 'app', 'dashboard'],
  ['src', 'app', 'image-dashboard'],
];

const allowedExtensions = new Set([
  '.css',
  '.html',
  '.js',
  '.jsx',
  '.json',
  '.md',
  '.mdx',
  '.mjs',
  '.ts',
  '.tsx',
  '.txt',
]);

const forbiddenPatterns = [
  { label: 'GoHighLevel', pattern: /\bGoHighLevel\b/g },
  { label: 'HighLevel', pattern: /\bHighLevel\b/g },
  { label: 'GHL', pattern: /\bGHL\b/g },
  {
    label: 'removed service id',
    pattern:
      /\b(?:ai-lead-handling|crm-automation|revenue-growth|growth-revenue-systems|conversion-layer|lead-reactivation-system|missed-call-recovery-system|unified-communication-system|system-migration-platform-consolidation|conversion-funnel-system-vs-landing-page-development|service-pages-vs-one-generic-services-page|website-crm-integration-vs-manual-lead-handling)\b/g,
  },
  {
    label: 'removed service label',
    pattern: /\b(?:AI Lead Handling|CRM & Automation|Revenue Growth Systems|Revenue Growth)\b/g,
  },
  { label: 'removed systems route', pattern: /\/systems(?:\/|\b)/g },
  {
    label: 'removed broad metadata field',
    pattern: /\bsystems(?:\?: string\[\]|: string\[\]|: \[|\[\])/g,
  },
  {
    label: 'removed six-system language',
    pattern: /\bsix (?:systems|connected systems|canonical systems)|six-system model/gi,
  },
  { label: 'removed positioning phrase', pattern: /\bdigital infrastructure consultancy\b/gi },
];

function toRelative(filePath) {
  return path.relative(root, filePath).replaceAll(path.sep, '/');
}

function shouldSkipPath(filePath) {
  const relativeParts = path.relative(root, filePath).split(path.sep);

  return skippedPathParts.some(parts =>
    parts.every((part, index) => relativeParts[index] === part)
  );
}

function walk(dirPath, files = []) {
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    if (skippedDirNames.has(entry.name)) {
      continue;
    }

    const fullPath = path.join(dirPath, entry.name);

    if (shouldSkipPath(fullPath)) {
      continue;
    }

    if (entry.isDirectory()) {
      walk(fullPath, files);
      continue;
    }

    if (!entry.isFile()) {
      continue;
    }

    if (
      entry.name.endsWith('-lock.yaml') ||
      entry.name === 'package-lock.json' ||
      entry.name === 'pnpm-lock.yaml' ||
      entry.name === 'yarn.lock'
    ) {
      continue;
    }

    if (!allowedExtensions.has(path.extname(entry.name))) {
      continue;
    }

    files.push(fullPath);
  }

  return files;
}

function lineAndColumnForIndex(text, index) {
  let line = 1;
  let column = 1;

  for (let cursor = 0; cursor < index; cursor += 1) {
    if (text.charCodeAt(cursor) === 10) {
      line += 1;
      column = 1;
    } else {
      column += 1;
    }
  }

  return { line, column };
}

const matches = [];

for (const scanRoot of scanRoots) {
  for (const filePath of walk(scanRoot)) {
    const text = fs.readFileSync(filePath, 'utf8');

    for (const { label, pattern } of forbiddenPatterns) {
      pattern.lastIndex = 0;
      let match;

      while ((match = pattern.exec(text)) !== null) {
        const { line, column } = lineAndColumnForIndex(text, match.index);
        matches.push({
          file: toRelative(filePath),
          line,
          column,
          match: label,
        });
      }
    }
  }
}

if (matches.length === 0) {
  console.log('check:names passed (0 internal tool names found).');
  process.exit(0);
}

console.error('check:names failed. Internal tool names found in public source/content:\n');
for (const item of matches) {
  console.error(`${item.file}:${item.line}:${item.column} ${item.match}`);
}

process.exit(1);
