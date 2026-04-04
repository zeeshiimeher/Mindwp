import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const repoRoot = process.cwd();

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
  const sourceRoot = resolveSourceRoot();
  const shouldFix = process.argv.includes('--fix');

  const args = [sourceRoot, '--ext', '.ts,.tsx'];
  if (shouldFix) args.push('--fix');

  const result = spawnSync(eslintBin, args, {
    cwd: repoRoot,
    stdio: 'inherit',
  });

  process.exitCode = typeof result.status === 'number' ? result.status : 1;
} catch (err) {
  // eslint-disable-next-line no-console
  console.error(`[run-eslint] ${err instanceof Error ? err.message : String(err)}`);
  process.exitCode = 1;
}