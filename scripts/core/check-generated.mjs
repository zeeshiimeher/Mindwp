import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { createLogger } from '../../lib/logger/index.mjs';

const run = (cmd, args) => {
  execFileSync(cmd, args, { stdio: 'inherit' });
};

const root = process.cwd();
const logger = createLogger({ label: 'check-generated', mode: 'summary', rootDir: root });
const COMPONENT_DOCS_REL = 'src/utils/componentDocs.generated.ts';

const REQUIRED_GENERATED_FILES = [
  COMPONENT_DOCS_REL,
  'src/domains/blog/registry.ts',
  'src/domains/resources/generatedRegistry.ts',
  'src/domains/case-studies/registry.ts',
  'src/lib/authority/generated/authorityMap.ts',
];

const GENERATED_FILES = [...REQUIRED_GENERATED_FILES];

const snapshot = new Map();
for (const rel of GENERATED_FILES) {
  const abs = resolve(root, rel);
  snapshot.set(rel, readFileSync(abs, 'utf8'));
}

try {
  run('npm', ['run', '-s', 'generate:component-docs']);

  try {
    run('npm', ['run', '-s', 'generate:global-inventory']);
  } catch {
    logger.warn('generate:global-inventory skipped (optional dependency missing)');
  }

  run('npm', ['run', '-s', 'generate:content-registries']);
  run('npm', ['run', '-s', 'generate:authority-map']);

  const changed = [];
  for (const rel of GENERATED_FILES) {
    const abs = resolve(root, rel);
    const before = snapshot.get(rel);
    const after = readFileSync(abs, 'utf8');
    if (before !== after) changed.push(rel);
  }

  if (changed.length > 0) {
    // Restore original content so check mode doesn't dirty workspaces.
    for (const rel of changed) {
      writeFileSync(resolve(root, rel), snapshot.get(rel), 'utf8');
    }

    logger.error(`generated outputs are out of date: ${changed.join(', ')}`);
    logger.error(
      'run: npm run -s generate:component-docs && npm run -s generate:global-inventory && npm run -s generate:content-registries'
    );
    process.exitCode = 1;
  }
} catch (err) {
  // Best-effort restore on failure.
  for (const rel of GENERATED_FILES) {
    try {
      writeFileSync(resolve(root, rel), snapshot.get(rel), 'utf8');
    } catch {
      // ignore
    }
  }
  throw err;
}
