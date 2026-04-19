#!/usr/bin/env node

import { spawnSync } from 'node:child_process';

const args = process.argv.slice(2);

const result = spawnSync(process.execPath, ['scripts/core/system-report.mjs', ...args], {
  stdio: 'inherit',
  env: {
    ...process.env,
    SYSTEM_MODE: 'production',
    SYSTEM_EXECUTION_LOCK: 'system:full',
    SYSTEM_ALLOW_REPORT_EXPORT: '1',
    SYSTEM_DISABLE_DEBUG_LOGS: '1',
    PROFILE_GRAPH: 'false',
  },
});

process.exit(result.status ?? 1);