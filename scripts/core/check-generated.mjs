import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { createLogger } from '../../lib/logger/index.mjs';
import { buildAuthorityMapArtifacts } from '../generators/generate-authority-map.ts';
import { buildContentRegistryOutputs } from '../generators/generate-content-registries.mjs';

const root = process.cwd();
const logger = createLogger({ label: 'check-generated', mode: 'summary', rootDir: root });

const REQUIRED_GENERATED_FILES = [
  'src/domains/blog/registry.ts',
  'src/domains/resources/generatedRegistry.ts',
  'src/domains/case-studies/registry.ts',
  'src/lib/authority/generated/authorityMap.ts',
];
const GENERATED_FILES = [...REQUIRED_GENERATED_FILES];

async function main() {
  const expectedByFile = new Map();

  for (const output of buildContentRegistryOutputs()) {
    const relativePath = output.filePath.replace(`${root}/`, '');
    expectedByFile.set(relativePath, output.content);
  }

  const authorityMap = await buildAuthorityMapArtifacts();
  expectedByFile.set(
    'src/lib/authority/generated/authorityMap.ts',
    authorityMap.formattedAuthorityMap
  );

  const changed = [];
  for (const rel of GENERATED_FILES) {
    const abs = resolve(root, rel);
    const before = readFileSync(abs, 'utf8');
    const expected = expectedByFile.get(rel);
    if (expected === undefined || before !== expected) {
      changed.push(rel);
    }
  }

  if (changed.length > 0) {
    logger.error(`generated outputs are out of date: ${changed.join(', ')}`);
    logger.error('run: npm run -s generate:core');
    process.exitCode = 1;
  }
}

main().catch(err => {
  throw err;
});
