#!/usr/bin/env node

import { spawnSync } from 'node:child_process';

const [recommendedCommand = 'system:full'] = process.argv.slice(2);
const [command, ...args] = recommendedCommand.split(' ');

const result = spawnSync('npm', ['run', command, '--', ...args], {
  stdio: 'inherit',
  shell: process.platform === 'win32',
});

process.exit(typeof result.status === 'number' ? result.status : 1);