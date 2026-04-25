#!/usr/bin/env node

import { spawnSync } from 'node:child_process';

if (process.env.SYSTEM_ENABLED === 'true') {
  process.stderr.write('[build-safe] WARNING: building with system enabled\n');
}

if (process.env.NODE_ENV === 'production' && process.env.SYSTEM_ENABLED === 'true') {
  throw new Error('SYSTEM must be disabled in production build');
}

const commands = [
  {
    command: 'npm',
    args: ['run', '-s', 'system:full'],
    env: process.env,
  },
  {
    command: process.execPath,
    args: ['scripts/runners/run-next.mjs', 'build'],
    env: {
      ...process.env,
      NODE_ENV: 'production',
    },
  },
];

for (const { command, args, env } of commands) {
  const result = spawnSync(command, args, {
    stdio: 'inherit',
    env,
  });

  if ((result.status ?? 1) !== 0) {
    process.exit(result.status ?? 1);
  }
}
