#!/usr/bin/env tsx
/* eslint-disable no-console */

import fs from 'node:fs';
import path from 'node:path';

type Rule = {
  name: string;
  appliesTo?: (relativePath: string) => boolean;
  isAllowed?: (relativePath: string) => boolean;
  patterns: RegExp[];
};

type Violation = {
  rule: string;
  file: string;
  line: number;
  context: string;
};

const root = process.cwd();

const scanRoots = [
  'src',
  'docs',
  '.claude',
  'CLAUDE.md',
  'README.md',
  'package.json',
  'src/index.css',
].filter(item => fs.existsSync(path.join(root, item)));

const allowedExtensions = new Set(['.ts', '.tsx', '.js', '.jsx', '.md', '.mdx', '.css', '.json']);

const excludedDirNames = new Set([
  'node_modules',
  '.next',
  'dist',
  'build',
  'coverage',
  '.git',
  'Mindwp-Design',
]);

const relatedSectionBlockedPrefixes = [
  'src/screens/',
  'src/domains/services/renderers/',
  'src/domains/features/renderers/',
  'src/domains/resources/',
  'src/domains/blog/',
  'src/domains/case-studies/',
];

const smartWebsiteHelperNames = [
  'SmartWebsiteHero',
  'SmartWebsiteSignalPanel',
  'SmartWebsiteRecognitionSection',
  'SmartWebsiteFAQ',
  'SmartWebsiteDecisionPanel',
];

const smartWebsiteRegistryNames = ['smartWebsiteSystemsPage', 'SmartWebsiteSystemsRenderer'];

const smartWebsiteRegistryAllowedFiles = new Set([
  'src/domains/services/data/smart-website-systems.ts',
  'src/domains/services/renderers/SmartWebsiteSystemsRenderer.tsx',
  'src/domains/services/pageData.ts',
  'src/domains/services/pages/smart-website-systems/index.tsx',
]);

const rules: Rule[] = [
  {
    name: 'deleted component imports',
    patterns: [
      /@\/components\/reusable/g,
      /@\/components\/sections/g,
      /components\/reusable/g,
      /components\/sections/g,
    ],
  },
  {
    name: 'old CTA wrapper',
    patterns: [/PrimaryCTASection/g],
  },
  {
    name: 'loose type escape hatch',
    patterns: [
      /\bDesignModeValue\b/g,
      /@ts-nocheck/g,
      /eslint-disable\s+@typescript-eslint\/no-explicit-any/g,
      /Record<string,\s*any>/g,
      /Array<any>/g,
      /\[key:\s*string\]:\s*any\b/g,
    ],
  },
  {
    name: 'features borrowing service pageData',
    appliesTo: relativePath => relativePath.startsWith('src/domains/features/'),
    patterns: [/ServicePageDataBySlug/g, /@\/domains\/services\/pageData/g],
  },
  {
    name: 'manual RelatedSection in page bodies/renderers',
    appliesTo: relativePath =>
      relatedSectionBlockedPrefixes.some(prefix => relativePath.startsWith(prefix)),
    isAllowed: relativePath => relativePath === 'src/components/navigation/RelatedSection.tsx',
    patterns: [/\bRelatedSection\b/g],
  },
  {
    // Code-symbol rule: prevents copying SmartWebsite* helper component names
    // into other source files. Doc references (planning notes, briefs,
    // SYSTEM-ARCHITECTURE.md, skills) name these files legitimately and must
    // not be flagged.
    name: 'copied Smart Website helper names',
    appliesTo: relativePath => relativePath.startsWith('src/'),
    isAllowed: relativePath =>
      relativePath === 'src/domains/services/renderers/SmartWebsiteSystemsRenderer.tsx',
    patterns: smartWebsiteHelperNames.map(name => new RegExp(`\\b${name}\\b`, 'g')),
  },
  {
    // Same scope rationale as above: code-symbol duplication guard for src/.
    name: 'copied Smart Website registry names',
    appliesTo: relativePath => relativePath.startsWith('src/'),
    isAllowed: relativePath => smartWebsiteRegistryAllowedFiles.has(relativePath),
    patterns: smartWebsiteRegistryNames.map(name => new RegExp(`\\b${name}\\b`, 'g')),
  },
  {
    name: 'old category color/badge helpers',
    patterns: [
      /\bgetCategoryColors\b/g,
      /\bbadgeClass\b/g,
      /resource-badge/g,
      /blog-category-bg/g,
      /blog-category-text/g,
    ],
  },
  {
    name: 'rd utility residue',
    patterns: [/\.rd-/g, /className\s*=\s*["'][^"']*\brd-/g, /className\s*=\s*`[^`]*\brd-/g],
  },
];

function toRelative(filePath: string) {
  return path.relative(root, filePath).replaceAll(path.sep, '/');
}

function shouldSkipDir(name: string) {
  return excludedDirNames.has(name);
}

function isScannableFile(filePath: string) {
  return allowedExtensions.has(path.extname(filePath));
}

function walk(entryPath: string, files: string[] = []) {
  const stat = fs.statSync(entryPath);

  if (stat.isDirectory()) {
    for (const entry of fs.readdirSync(entryPath, { withFileTypes: true })) {
      if (entry.isDirectory() && shouldSkipDir(entry.name)) {
        continue;
      }

      walk(path.join(entryPath, entry.name), files);
    }

    return files;
  }

  if (stat.isFile() && isScannableFile(entryPath)) {
    files.push(entryPath);
  }

  return files;
}

function lineNumberForIndex(text: string, index: number) {
  let line = 1;

  for (let cursor = 0; cursor < index; cursor += 1) {
    if (text.charCodeAt(cursor) === 10) {
      line += 1;
    }
  }

  return line;
}

function lineContext(text: string, line: number) {
  return text.split(/\r?\n/)[line - 1]?.trim() ?? '';
}

const violations: Violation[] = [];

for (const scanRoot of scanRoots) {
  const absoluteScanRoot = path.join(root, scanRoot);

  for (const filePath of walk(absoluteScanRoot)) {
    const relativePath = toRelative(filePath);
    const text = fs.readFileSync(filePath, 'utf8');

    for (const rule of rules) {
      if (rule.appliesTo && !rule.appliesTo(relativePath)) {
        continue;
      }

      if (rule.isAllowed?.(relativePath)) {
        continue;
      }

      for (const pattern of rule.patterns) {
        pattern.lastIndex = 0;

        let match: RegExpExecArray | null;
        while ((match = pattern.exec(text)) !== null) {
          const line = lineNumberForIndex(text, match.index);

          violations.push({
            rule: rule.name,
            file: relativePath,
            line,
            context: lineContext(text, line),
          });

          if (match[0].length === 0) {
            pattern.lastIndex += 1;
          }
        }
      }
    }
  }
}

if (violations.length === 0) {
  console.log('check:clean-base passed (0 violations).');
  process.exit(0);
}

console.warn(`check:clean-base — ${violations.length} warning(s) (non-blocking):\n`);
for (const violation of violations) {
  console.warn(`${violation.rule}`);
  console.warn(`${violation.file}:${violation.line}`);
  console.warn(`  ${violation.context}\n`);
}

process.exit(0);
