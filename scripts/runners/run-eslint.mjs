import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

import { createLogger } from '../../lib/logger/index.mjs';

const repoRoot = process.cwd();
const logger = createLogger({ label: 'run-eslint', mode: 'summary', rootDir: repoRoot });

function resolveSourceRoot() {
  const rootSrc = path.join(repoRoot, 'src');
  if (fs.existsSync(rootSrc)) return rootSrc;

  throw new Error('Could not locate source root. Expected src/.');
}

const eslintBin = path.join(
  repoRoot,
  'node_modules',
  '.bin',
  process.platform === 'win32' ? 'eslint.cmd' : 'eslint'
);

if (!fs.existsSync(eslintBin)) {
  throw new Error(`ESLint binary not found at ${eslintBin}. Run npm install at repo root.`);
}

try {
  const shouldFix = process.argv.includes('--fix');
  const lintTargets = [
    resolveSourceRoot(),
    path.join(repoRoot, 'config'),
    path.join(repoRoot, 'lib'),
    path.join(repoRoot, 'scripts', 'runners'),
    path.join(repoRoot, 'scripts', 'check-names.mjs'),
    path.join(repoRoot, 'scripts', 'check-frontend.mjs'),
  ].filter(target => fs.existsSync(target));

  const args = [...lintTargets, '--ext', '.ts,.tsx,.mjs'];
  if (shouldFix) args.push('--fix');

  const result = spawnSync(eslintBin, args, {
    cwd: repoRoot,
    stdio: 'inherit',
  });

  process.exitCode = typeof result.status === 'number' ? result.status : 1;
} catch (err) {
  logger.error(err instanceof Error ? err.message : String(err));
  process.exitCode = 1;
}
