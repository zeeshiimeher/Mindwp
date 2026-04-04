import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const repoRoot = process.cwd();

function hasNextRuntimeRoot(baseDir) {
  return (
    fs.existsSync(path.join(baseDir, 'package.json')) &&
    fs.existsSync(path.join(baseDir, 'next.config.mjs')) &&
    fs.existsSync(path.join(baseDir, 'src', 'app'))
  );
}

function resolveAppRoot() {
  if (hasNextRuntimeRoot(repoRoot)) return repoRoot;
  throw new Error('Could not locate Next runtime root. Expected root/.');
}

const appRoot = resolveAppRoot();
const nextBin = path.join(
  appRoot,
  'node_modules',
  '.bin',
  process.platform === 'win32' ? 'next.cmd' : 'next'
);

try {
  if (!fs.existsSync(nextBin)) {
    throw new Error(`Next binary not found at ${nextBin}. Run npm install in the runtime root.`);
  }

  const [, , command, ...rest] = process.argv;
  if (!command) {
    throw new Error('Usage: node scripts/runners/run-next.mjs <dev|build|start|lint> [-- <args...>]');
  }

  const forwardedArgs = rest[0] === '--' ? rest.slice(1) : rest;
  const result = spawnSync(nextBin, [command, ...forwardedArgs], {
    cwd: appRoot,
    stdio: 'inherit',
  });

  process.exitCode = typeof result.status === 'number' ? result.status : 1;
} catch (err) {
  // eslint-disable-next-line no-console
  console.error(`[run-next] ${err instanceof Error ? err.message : String(err)}`);
  process.exitCode = 1;
}