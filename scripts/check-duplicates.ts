#!/usr/bin/env tsx
/* eslint-disable no-console */

import fs from 'node:fs';
import path from 'node:path';

type WarningGroup = {
  title: string;
  items: Array<{
    files: string[];
    value: string;
  }>;
};

const root = process.cwd();

const dataDirs = ['src/domains/services/data', 'src/domains/features/data'];
const rendererDirs = ['src/domains/services/renderers', 'src/domains/features/renderers'];

const ignoredLiteralValues = new Set([
  'FAQ',
  'Next step',
  'Start a Conversation',
  'Read more',
  'Learn More',
  'Live',
  'No commitment needed.',
  'Direct review',
]);

function toRelative(filePath: string) {
  return path.relative(root, filePath).replaceAll(path.sep, '/');
}

function listFiles(dirs: string[], extensions: string[]) {
  return dirs.flatMap(dir => {
    const absoluteDir = path.join(root, dir);
    if (!fs.existsSync(absoluteDir)) return [];

    return fs
      .readdirSync(absoluteDir, { withFileTypes: true })
      .filter(entry => entry.isFile())
      .map(entry => path.join(absoluteDir, entry.name))
      .filter(filePath => extensions.includes(path.extname(filePath)));
  });
}

function normalizeValue(value: string) {
  return value
    .replace(/\\'/g, "'")
    .replace(/\\"/g, '"')
    .replace(/\\`/g, '`')
    .replace(/\s+/g, ' ')
    .trim();
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function firstStringAfter(text: string, marker: string, property: string) {
  const markerIndex = text.indexOf(marker);
  if (markerIndex === -1) return undefined;

  const rest = text.slice(markerIndex);
  const match = new RegExp(`${escapeRegExp(property)}\\s*:\\s*(['"\`])([\\s\\S]*?)\\1`).exec(rest);
  return match?.[2] ? normalizeValue(match[2]) : undefined;
}

function stringPropertyInBlock(text: string, blockName: string, property: string) {
  return firstStringAfter(text, `${blockName}:`, property);
}

function collectDuplicateValues(
  label: string,
  fileValues: Array<{ file: string; value?: string }>
): WarningGroup {
  const byValue = new Map<string, Set<string>>();

  for (const { file, value } of fileValues) {
    if (!value || ignoredLiteralValues.has(value)) continue;
    const files = byValue.get(value) ?? new Set<string>();
    files.add(file);
    byValue.set(value, files);
  }

  return {
    title: label,
    items: [...byValue.entries()]
      .filter(([, files]) => files.size > 1)
      .map(([value, files]) => ({ value, files: [...files].sort() })),
  };
}

function extractQuestionSet(text: string) {
  const questions = [...text.matchAll(/\bquestion\s*:\s*(['"`])([\s\S]*?)\1/g)]
    .map(match => normalizeValue(match[2] ?? ''))
    .filter(Boolean);

  if (questions.length === 0) return undefined;
  return questions.join(' | ');
}

function extractLargeLiteralStrings(text: string) {
  return [...text.matchAll(/(['"`])((?:\\.|(?!\1)[\s\S])*?)\1/g)]
    .filter(match => match[1] !== '`' || !(match[2] ?? '').includes('${'))
    .map(match => normalizeValue(match[2] ?? ''))
    .filter(value => value.length > 80)
    .filter(value => !ignoredLiteralValues.has(value));
}

function rendererPrefix(filePath: string) {
  const baseName = path.basename(filePath, path.extname(filePath));
  return baseName.replace(/Renderer$/, '');
}

function extractHelperNames(text: string) {
  return [...text.matchAll(/\bfunction\s+([A-Z][A-Za-z0-9]+)\s*\(/g)]
    .map(match => match[1])
    .filter((name): name is string => Boolean(name));
}

const dataFiles = listFiles(dataDirs, ['.ts']);
const rendererFiles = listFiles(rendererDirs, ['.tsx']);

const dataTexts = dataFiles.map(filePath => ({
  file: toRelative(filePath),
  text: fs.readFileSync(filePath, 'utf8'),
}));

const warningGroups: WarningGroup[] = [
  collectDuplicateValues(
    'Possible duplicate seo.title',
    dataTexts.map(({ file, text }) => ({ file, value: stringPropertyInBlock(text, 'seo', 'title') }))
  ),
  collectDuplicateValues(
    'Possible duplicate hero.title',
    dataTexts.map(({ file, text }) => ({ file, value: stringPropertyInBlock(text, 'hero', 'title') }))
  ),
  collectDuplicateValues(
    'Possible duplicate hero.description',
    dataTexts.map(({ file, text }) => ({
      file,
      value: stringPropertyInBlock(text, 'hero', 'description'),
    }))
  ),
  collectDuplicateValues(
    'Possible duplicate CTA heading/title',
    dataTexts.map(({ file, text }) => ({
      file,
      value: firstStringAfter(text, 'cta:', 'title'),
    }))
  ),
  collectDuplicateValues(
    'Possible duplicate FAQ question set',
    dataTexts.map(({ file, text }) => ({ file, value: extractQuestionSet(text) }))
  ),
];

const literalFilesByValue = new Map<string, Set<string>>();
for (const { file, text } of dataTexts) {
  for (const value of extractLargeLiteralStrings(text)) {
    const files = literalFilesByValue.get(value) ?? new Set<string>();
    files.add(file);
    literalFilesByValue.set(value, files);
  }
}

warningGroups.push({
  title: 'Possible duplicate large literal string',
  items: [...literalFilesByValue.entries()]
    .filter(([, files]) => files.size > 1)
    .map(([value, files]) => ({ value, files: [...files].sort() })),
});

const helperFilesByName = new Map<string, Set<string>>();
const mismatchedHelpers: Array<{ files: string[]; value: string }> = [];

for (const filePath of rendererFiles) {
  const file = toRelative(filePath);
  const prefix = rendererPrefix(filePath);
  const text = fs.readFileSync(filePath, 'utf8');

  for (const helperName of extractHelperNames(text)) {
    const files = helperFilesByName.get(helperName) ?? new Set<string>();
    files.add(file);
    helperFilesByName.set(helperName, files);

    if (helperName.endsWith('Renderer')) {
      continue;
    }

    const isAllowedSmartWebsiteHelper =
      file.endsWith('SmartWebsiteSystemsRenderer.tsx') &&
      helperName.startsWith('SmartWebsite');

    if (!helperName.startsWith(prefix) && !isAllowedSmartWebsiteHelper) {
      mismatchedHelpers.push({
        files: [file],
        value: `${helperName} does not match renderer prefix ${prefix}`,
      });
    }
  }
}

warningGroups.push({
  title: 'Possible duplicate renderer helper name',
  items: [...helperFilesByName.entries()]
    .filter(([, files]) => files.size > 1)
    .map(([value, files]) => ({ value, files: [...files].sort() })),
});

warningGroups.push({
  title: 'Renderer helper name does not match file prefix',
  items: mismatchedHelpers,
});

const nonEmptyGroups = warningGroups.filter(group => group.items.length > 0);
const warningCount = nonEmptyGroups.reduce((count, group) => count + group.items.length, 0);

if (warningCount === 0) {
  console.log('check:duplicates passed with 0 warnings.');
  process.exit(0);
}

console.warn(`check:duplicates completed with ${warningCount} warning(s).\n`);

for (const group of nonEmptyGroups) {
  console.warn(`${group.title}:`);
  for (const item of group.items) {
    for (const file of item.files) {
      console.warn(`- ${file}`);
    }
    console.warn(`value: "${item.value}"\n`);
  }
}

process.exit(0);
