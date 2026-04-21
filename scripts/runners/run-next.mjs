import { spawn, spawnSync } from 'node:child_process';
import fs from 'node:fs';
import net from 'node:net';
import path from 'node:path';

import { buildSystemProcessEnv } from '../../config/systemEnv.mjs';
import { createLogger } from '../../lib/logger/index.mjs';

const repoRoot = process.cwd();
const logger = createLogger({ label: 'run-next', mode: 'summary', rootDir: repoRoot });

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

function getRequestedPort(args) {
  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];

    if ((arg === '-p' || arg === '--port') && index + 1 < args.length) {
      const port = Number.parseInt(args[index + 1], 10);
      if (Number.isInteger(port) && port > 0) return port;
    }

    if (arg.startsWith('-p=')) {
      const port = Number.parseInt(arg.slice(3), 10);
      if (Number.isInteger(port) && port > 0) return port;
    }

    if (arg.startsWith('--port=')) {
      const port = Number.parseInt(arg.slice(7), 10);
      if (Number.isInteger(port) && port > 0) return port;
    }
  }

  return 3000;
}

function replacePortArg(args, port) {
  const nextArgs = [...args];

  for (let index = 0; index < nextArgs.length; index += 1) {
    const arg = nextArgs[index];

    if ((arg === '-p' || arg === '--port') && index + 1 < nextArgs.length) {
      nextArgs[index + 1] = String(port);
      return nextArgs;
    }

    if (arg.startsWith('-p=')) {
      nextArgs[index] = `-p=${port}`;
      return nextArgs;
    }

    if (arg.startsWith('--port=')) {
      nextArgs[index] = `--port=${port}`;
      return nextArgs;
    }
  }

  nextArgs.push('-p', String(port));
  return nextArgs;
}

function canListenOnPort(port) {
  return new Promise(resolve => {
    const server = net.createServer();

    server.unref();
    server.once('error', () => {
      resolve(false);
    });

    server.listen(port, () => {
      server.close(() => resolve(true));
    });
  });
}

async function resolveDevArgs(args) {
  const requestedPort = getRequestedPort(args);
  const requestedPortAvailable = await canListenOnPort(requestedPort);

  if (requestedPortAvailable) {
    return args;
  }

  for (
    let candidatePort = requestedPort + 1;
    candidatePort <= requestedPort + 10;
    candidatePort += 1
  ) {
    if (await canListenOnPort(candidatePort)) {
      logger.warn(
        `Port ${requestedPort} is in use. Starting Next dev server on port ${candidatePort}.`
      );
      return replacePortArg(args, candidatePort);
    }
  }

  throw new Error(
    `Port ${requestedPort} is in use and no free fallback port was found in the ${requestedPort + 1}-${requestedPort + 10} range.`
  );
}

const appRoot = resolveAppRoot();
const nextBin = path.join(
  appRoot,
  'node_modules',
  '.bin',
  process.platform === 'win32' ? 'next.cmd' : 'next'
);

function runStartupEnvValidation() {
  const result = spawnSync(
    process.execPath,
    ['--import', 'tsx/esm', 'scripts/validate-env.ts', '--target=runtime'],
    {
      cwd: appRoot,
      env: buildSystemProcessEnv(),
      stdio: 'inherit',
    }
  );

  if (typeof result.status === 'number' && result.status !== 0) {
    process.exit(result.status);
  }

  if (result.error) {
    throw result.error;
  }
}

async function main() {
  if (!fs.existsSync(nextBin)) {
    throw new Error(`Next binary not found at ${nextBin}. Run npm install in the runtime root.`);
  }

  const rawArgs = process.argv.slice(2);
  const filterIndex = rawArgs.findIndex(a => a === '--filter');
  const useFilter = filterIndex !== -1;
  if (useFilter) rawArgs.splice(filterIndex, 1);

  const [command, ...rest] = rawArgs;
  if (!command) {
    throw new Error(
      'Usage: node scripts/runners/run-next.mjs <dev|build|start|lint> [--filter] [-- <args...>]'
    );
  }

  const forwardedArgs = rest[0] === '--' ? rest.slice(1) : rest;
  const resolvedArgs = command === 'dev' ? await resolveDevArgs(forwardedArgs) : forwardedArgs;

  if (command === 'dev' || command === 'build' || command === 'start') {
    runStartupEnvValidation();
  }

  if (useFilter) {
    const child = spawn(nextBin, [command, ...resolvedArgs], {
      cwd: appRoot,
      env: buildSystemProcessEnv(),
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
      logger.error(err instanceof Error ? err.message : String(err));
      process.exitCode = 1;
    });
  } else {
    const result = spawnSync(nextBin, [command, ...resolvedArgs], {
      cwd: appRoot,
      env: buildSystemProcessEnv(),
      stdio: 'inherit',
    });

    process.exitCode = typeof result.status === 'number' ? result.status : 1;
  }
}

try {
  await main();
} catch (err) {
  logger.error(err instanceof Error ? err.message : String(err));
  process.exitCode = 1;
}
