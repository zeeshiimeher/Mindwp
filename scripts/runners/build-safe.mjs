#!/usr/bin/env node

import { spawnSync } from 'node:child_process';

if (process.env.SYSTEM_ENABLED === 'true') {
    console.warn('[build-safe] WARNING: building with system enabled');
}

if (process.env.NODE_ENV === 'production' && process.env.SYSTEM_ENABLED === 'true') {
    throw new Error('SYSTEM must be disabled in production build');
}

const commands = [
    ['npm', ['run', '-s', 'system:full']],
    [process.execPath, ['scripts/runners/run-next.mjs', 'build']],
];

for (const [command, args] of commands) {
    const result = spawnSync(command, args, {
        stdio: 'inherit',
        env: process.env,
    });

    if ((result.status ?? 1) !== 0) {
        process.exit(result.status ?? 1);
    }
}