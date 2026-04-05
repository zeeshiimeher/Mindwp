import fs from 'node:fs';
import path from 'node:path';
import { spawnSync, spawn } from 'node:child_process';

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

function writeFilteredStderr(chunk) {
  const text = chunk.toString();
  const lines = text.split(/(?<=\n)/);
  let suppressStack = false;

  for (const line of lines) {
    const normalizedLine = line.replace(/\r?\n$/, '');

    if (normalizedLine.includes('Error: Internal: NoFallbackError')) {
      suppressStack = true;
      continue;
    }

    if (suppressStack) {
      if (/^\s+at\s/.test(normalizedLine)) {
        continue;
      }

      if (normalizedLine.trim().length === 0) {
        continue;
      }

      suppressStack = false;
    }

    process.stderr.write(line);
  }
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

  const rawArgs = process.argv.slice(2);
  const filterIndex = rawArgs.findIndex(a => a === '--filter');
  const useFilter = filterIndex !== -1;
  if (useFilter) rawArgs.splice(filterIndex, 1);

  const [command, ...rest] = rawArgs;
  if (!command) {
    throw new Error('Usage: node scripts/runners/run-next.mjs <dev|build|start|lint> [--filter] [-- <args...>]');
  }

  const forwardedArgs = rest[0] === '--' ? rest.slice(1) : rest;

  if (useFilter) {
    const child = spawn(nextBin, [command, ...forwardedArgs], {
      cwd: appRoot,
      env: process.env,
      stdio: ['inherit', 'pipe', 'pipe'],
    });

    child.stdout.on('data', chunk => {
      process.stdout.write(chunk);
    });

    child.stderr.on('data', chunk => {
      writeFilteredStderr(chunk);
    });

    child.on('exit', code => {
      process.exitCode = code ?? 1;
    });

    child.on('error', err => {
      console.error(`[run-next] ${err instanceof Error ? err.message : String(err)}`);
      process.exitCode = 1;
    });
  } else {
    const result = spawnSync(nextBin, [command, ...forwardedArgs], {
      cwd: appRoot,
      stdio: 'inherit',
    });

    process.exitCode = typeof result.status === 'number' ? result.status : 1;
  }
} catch (err) {
  // eslint-disable-next-line no-console
  console.error(`[run-next] ${err instanceof Error ? err.message : String(err)}`);
  process.exitCode = 1;
}