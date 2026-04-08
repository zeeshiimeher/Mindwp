import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');

function collectModuleFiles(dirPath) {
  if (!fs.existsSync(dirPath)) {
    return [];
  }

  const files = [];

  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const absolutePath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      files.push(...collectModuleFiles(absolutePath));
      continue;
    }

    if (!/\.(ts|tsx)$/.test(entry.name) || entry.name.endsWith('.d.ts')) {
      continue;
    }

    files.push(absolutePath);
  }

  return files.sort((left, right) => left.localeCompare(right));
}

async function loadValues(relativeDir, predicate) {
  const files = collectModuleFiles(path.join(root, relativeDir));
  const values = [];

  for (const file of files) {
    const module = await import(pathToFileURL(file).href);
    for (const value of Object.values(module)) {
      if (predicate(value)) {
        values.push(value);
      }
    }
  }

  return values;
}

export function hasText(value) {
  if (typeof value === 'string') {
    return value.trim().length > 0;
  }

  if (Array.isArray(value)) {
    return value.some(item => hasText(item));
  }

  return Boolean(value);
}

export function hasActionLabel(action) {
  return hasText(action?.children) || hasText(action?.label) || hasText(action?.text);
}

export function isActionableButton(action) {
  return Boolean(action && (action.href || action.onClick) && hasActionLabel(action));
}

export function isServicePageData(value) {
  return Boolean(
    value &&
      typeof value === 'object' &&
      typeof value.slug === 'string' &&
      typeof value.hero?.title === 'string' &&
      typeof value.hero?.description === 'string' &&
      typeof value.seo?.canonical === 'string' &&
      value.seo.canonical.startsWith('/services/') &&
      value.sections &&
      typeof value.sections === 'object'
  );
}

export function isFeaturePageData(value) {
  return Boolean(
    value &&
      typeof value === 'object' &&
      typeof value.slug === 'string' &&
      typeof value.hero?.title === 'string' &&
      typeof value.hero?.description === 'string' &&
      typeof value.seo?.canonical === 'string' &&
      value.seo.canonical.startsWith('/features/') &&
      value.sections &&
      typeof value.sections === 'object'
  );
}

export function isIndustryPageData(value) {
  return Boolean(
    value &&
      typeof value === 'object' &&
      typeof value.slug === 'string' &&
      (value.type === 'category' || value.type === 'detail') &&
      typeof value.hero?.title === 'string' &&
      typeof value.hero?.description === 'string' &&
      value.cta &&
      typeof value.seo?.canonical === 'string' &&
      value.seo.canonical.startsWith('/industries/')
  );
}

export function loadServicePages() {
  return loadValues('src/domains/services/data', isServicePageData);
}

export function loadFeaturePages() {
  return loadValues('src/domains/features/data', isFeaturePageData);
}

export function loadIndustryPages() {
  return loadValues('src/domains/industries/pages', isIndustryPageData);
}