#!/usr/bin/env tsx
/* eslint-disable no-console */

import fs from 'node:fs';
import path from 'node:path';

type WarningItem = {
  file: string;
  line: number;
  context: string;
};

type StyleRule = {
  name: string;
  patterns: RegExp[];
};

const root = process.cwd();

const scanRoots = [
  'src/screens',
  'src/domains/services',
  'src/domains/features',
  'src/domains/resources',
  'src/domains/blog',
  'src/domains/case-studies',
];

const excludedPathPrefixes = [
  'src/components/ui/',
  'src/components/layout/',
  'src/components/conversion/',
  'src/components/content/',
  'src/components/primitives/',
  'src/styles/',
];

const publicTokenClasses = [
  'bg-primary',
  'bg-secondary',
  'bg-background',
  'bg-card',
  'text-foreground',
  'text-muted-foreground',
  'border-border',
];

const oldPagePrefixes = [
  'home-',
  'sws-',
  'lsa-',
  'rep-',
  'aih-',
  'blog-category__',
  'blog-landing__',
  'case-study-detail',
  'resource-card',
];

const headingSizeClasses =
  '(?:text-xs|text-sm|text-base|text-lg|text-xl|text-2xl|text-3xl|text-4xl|text-5xl|text-6xl|text-7xl)';
const headingWeightClasses = '(?:font-bold|font-semibold|font-medium)';

function headingClassPattern(tokenPattern: string): RegExp {
  return new RegExp(
    '<h[123][^>]*className=(?:"[^"]*\\b' +
      tokenPattern +
      '\\b[^"]*"|\'[^\']*\\b' +
      tokenPattern +
      "\\b[^']*'|\\{`[^`]*\\b" +
      tokenPattern +
      '\\b[^`]*`\\})',
    'g',
  );
}

function classNamePrefixPattern(prefix: string): RegExp {
  const escapedPrefix = escapeRegExp(prefix);

  return new RegExp(
    'className=(?:"[^"]*\\b' +
      escapedPrefix +
      "|'[^']*\\b" +
      escapedPrefix +
      '|\\{`[^`]*\\b' +
      escapedPrefix +
      ')',
    'g',
  );
}

const rules: StyleRule[] = [
  {
    name: 'Raw hex color in JSX',
    patterns: [/#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\b/g],
  },
  {
    name: 'Old shadcn/default token class in page JSX',
    patterns: publicTokenClasses.map(token => new RegExp(`\\b${token}\\b`, 'g')),
  },
  {
    name: 'Typography over-control on heading',
    patterns: [
      headingClassPattern(headingSizeClasses),
      headingClassPattern(headingWeightClasses),
    ],
  },
  {
    name: 'Inline visual style object',
    patterns: [/style=\{\{/g],
  },
  {
    name: 'Old migrated page-specific class prefix',
    patterns: oldPagePrefixes.map(prefix => classNamePrefixPattern(prefix)),
  },
  {
    name: 'Raw arbitrary Tailwind color',
    patterns: [/\b(?:bg|text|border)-\[#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\]/g],
  },
];

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function toRelative(filePath: string) {
  return path.relative(root, filePath).replaceAll(path.sep, '/');
}

function shouldSkip(relativePath: string) {
  return excludedPathPrefixes.some(prefix => relativePath.startsWith(prefix));
}

function walk(dirPath: string, files: string[] = []) {
  if (!fs.existsSync(dirPath)) return files;

  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      walk(fullPath, files);
      continue;
    }

    if (entry.isFile() && path.extname(entry.name) === '.tsx') {
      const relativePath = toRelative(fullPath);
      if (!shouldSkip(relativePath)) {
        files.push(fullPath);
      }
    }
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

const warningsByRule = new Map<string, WarningItem[]>();
const files = scanRoots.flatMap(scanRoot => walk(path.join(root, scanRoot)));

for (const filePath of files) {
  const relativePath = toRelative(filePath);
  const text = fs.readFileSync(filePath, 'utf8');

  for (const rule of rules) {
    const warnings = warningsByRule.get(rule.name) ?? [];

    for (const pattern of rule.patterns) {
      pattern.lastIndex = 0;

      let match: RegExpExecArray | null;
      while ((match = pattern.exec(text)) !== null) {
        const line = lineNumberForIndex(text, match.index);
        warnings.push({
          file: relativePath,
          line,
          context: lineContext(text, line),
        });

        if (match[0].length === 0) {
          pattern.lastIndex += 1;
        }
      }
    }

    if (warnings.length > 0) {
      warningsByRule.set(rule.name, warnings);
    }
  }
}

const warningCount = [...warningsByRule.values()].reduce((count, items) => count + items.length, 0);

if (warningCount === 0) {
  console.log('check:style-guidance passed with 0 warnings.');
  process.exit(0);
}

console.warn(`check:style-guidance completed with ${warningCount} warning(s).\n`);

for (const [ruleName, warnings] of warningsByRule.entries()) {
  console.warn(`${ruleName} (${warnings.length}):`);
  for (const warning of warnings) {
    console.warn(`- ${warning.file}:${warning.line}`);
    console.warn(`  ${warning.context}`);
  }
  console.warn('');
}

process.exit(0);
