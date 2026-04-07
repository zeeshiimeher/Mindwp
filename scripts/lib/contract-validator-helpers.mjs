import fs from 'node:fs';
import path from 'node:path';

import { Project } from 'ts-morph';

import { assert, getStringArrayDeclarationValues, listFilesRecursive } from './validator-helpers.mjs';

export const CONTRACT_INTENTS = new Set([
  'problem-aware',
  'solution-aware',
  'system-aware',
  'decision-ready',
]);

const LEGACY_INTENT_TO_CONTRACT = {
  PROBLEM: 'problem-aware',
  SYSTEM: 'system-aware',
  FRAMEWORK: 'system-aware',
  ACTIONABLE: 'system-aware',
  EDUCATIONAL: 'system-aware',
  EXAMPLE: 'solution-aware',
};

const DEFAULT_INTENT_BY_TYPE = {
  blog: 'problem-aware',
  resource: 'system-aware',
  'industry-detail': 'solution-aware',
  'industry-category': 'solution-aware',
  'case-study': 'solution-aware',
  service: 'decision-ready',
  feature: 'decision-ready',
};

const BLOCKING_METADATA_KEYS = {
  blog: ['slug', 'systems'],
  resource: ['slug', 'systems'],
  service: ['slug', 'systems'],
  feature: ['slug', 'systems'],
  'industry-detail': ['slug', 'type', 'systems'],
  'industry-category': ['slug', 'type', 'systems'],
  'case-study': ['slug', 'systems'],
};

const ADVISORY_METADATA_KEYS = {
  blog: ['title', 'intent'],
  resource: ['title', 'description', 'intent'],
  service: ['title'],
  feature: ['hero', 'cta'],
  'industry-detail': ['seo', 'hero', 'cta'],
  'industry-category': ['seo', 'hero', 'cta'],
  'case-study': ['seo'],
};

function uniqueNormalized(values) {
  return [...new Set((values ?? []).map(value => String(value).trim()).filter(Boolean))];
}

export function buildTsProject(root = process.cwd()) {
  return new Project({ tsConfigFilePath: path.join(root, 'tsconfig.json') });
}

export function loadCanonicalSets(project, root = process.cwd()) {
  const canonicalPath = path.join(root, 'src', 'lib', 'content-graph', 'canonical.ts');
  const canonicalSource = project.addSourceFileAtPathIfExists(canonicalPath);

  assert(canonicalSource, '[contract] unable to parse src/lib/content-graph/canonical.ts');

  return {
    systems: new Set(getStringArrayDeclarationValues(canonicalSource, 'CANONICAL_SYSTEMS')),
    industries: new Set(getStringArrayDeclarationValues(canonicalSource, 'CANONICAL_INDUSTRIES')),
    topics: new Set(getStringArrayDeclarationValues(canonicalSource, 'CANONICAL_TOPICS')),
  };
}

export function normalizeIntent(rawIntent, nodeType) {
  const value = typeof rawIntent === 'string' ? rawIntent.trim() : '';

  if (!value) {
    return {
      raw: value,
      normalized: DEFAULT_INTENT_BY_TYPE[nodeType] ?? 'system-aware',
      kind: 'missing',
    };
  }

  if (CONTRACT_INTENTS.has(value)) {
    return { raw: value, normalized: value, kind: 'contract' };
  }

  if (LEGACY_INTENT_TO_CONTRACT[value]) {
    return {
      raw: value,
      normalized: LEGACY_INTENT_TO_CONTRACT[value],
      kind: 'legacy',
    };
  }

  return {
    raw: value,
    normalized: null,
    kind: 'invalid',
  };
}

export function getBlockingMetadataKeys(nodeType) {
  return BLOCKING_METADATA_KEYS[nodeType] ?? ['slug'];
}

export function getAdvisoryMetadataKeys(nodeType) {
  return ADVISORY_METADATA_KEYS[nodeType] ?? [];
}

export function validateCanonicalValues(values, allowedSet) {
  return uniqueNormalized(values).filter(value => !allowedSet.has(value));
}

export function getPrimarySystem(values) {
  const systems = uniqueNormalized(values);
  return {
    primarySystem: systems[0] ?? null,
    systems,
    hasMultiple: systems.length > 1,
  };
}

export function loadStructuredGraphNodes() {
  return import('../../src/domains/init/ensureGraphInitialized.ts')
    .then(async ({ ensureGraphInitialized }) => {
      await ensureGraphInitialized();
      const { getStructuredContentGraph } = await import('../../src/lib/content-graph/registry.ts');
      return getStructuredContentGraph().nodes;
    });
}

export function buildSlugIndex(nodes) {
  const index = new Set();
  for (const node of nodes) {
    index.add(`${node.type}/${node.slug}`);
  }
  return index;
}

function parseBannedVocabularyTable(docText) {
  const rows = [];
  const match = docText.match(/\| Removed \| Replace With \| Reason \|([\s\S]*?)\n---/);
  const block = match?.[1] ?? '';
  const lines = block.split('\n').map(line => line.trim()).filter(Boolean);

  for (const line of lines) {
    if (!line.startsWith('|') || line.includes('---')) continue;
    const cells = line
      .split('|')
      .map(cell => cell.trim())
      .filter(Boolean);

    if (cells.length < 2) continue;

    const bannedValues = cells[0]
      .split('/')
      .map(value => value.trim())
      .filter(Boolean);

    for (const banned of bannedValues) {
      rows.push({ banned, replacement: cells[1] });
    }
  }

  return rows;
}

function parseAntiHypeWords(docText) {
  const match = docText.match(/Anti-hype language discipline:\s*Avoid words such as:\s*([\s\S]*?)\n\nAI sales guardrail:/);
  const raw = match?.[1] ?? '';
  return raw
    .split(',')
    .map(value => value.replace(/[.\n]/g, '').trim())
    .filter(Boolean)
    .map(word => ({ banned: word.toLowerCase(), replacement: null }));
}

export function loadVocabularyRules(root = process.cwd()) {
  const foundationPath = path.join(root, 'Mindwp-Docs', 'core', 'FOUNDATION-AND-POSITIONING.md');
  const text = fs.readFileSync(foundationPath, 'utf8');

  return {
    bannedVocabulary: parseBannedVocabularyTable(text),
    antiHypeVocabulary: parseAntiHypeWords(text),
  };
}

export function listProductionUiFiles(root = process.cwd()) {
  const targets = [
    path.join(root, 'src', 'app'),
    path.join(root, 'src', 'components'),
    path.join(root, 'src', 'global'),
    path.join(root, 'src', 'screens'),
  ];

  return targets
    .flatMap(target =>
      listFilesRecursive(target, {
        exts: ['.tsx'],
        ignoreDirNames: ['dev', 'scripts', 'node_modules'],
      })
    )
    .filter(filePath => {
      const normalized = filePath.replaceAll(path.sep, '/');
      return (
        !normalized.includes('/src/app/dev/') &&
        !normalized.includes('/src/app/image-dashboard/') &&
        !normalized.includes('/src/app/content-dashboard/') &&
        !normalized.includes('/debug/')
      );
    });
}