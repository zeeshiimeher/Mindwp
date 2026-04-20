#!/usr/bin/env node

import { spawnSync } from 'node:child_process';

import { buildSystemProcessEnv, systemEnv } from '../../config/systemEnv.mjs';
import { resolveLoggingMode, stripLoggingModeArgs } from '../../config/loggingConfig.mjs';

const rawArgs = process.argv.slice(2);
const loggingMode = resolveLoggingMode(rawArgs, systemEnv);
const args = stripLoggingModeArgs(rawArgs);

const result = spawnSync(process.execPath, ['scripts/core/system-report.mjs', ...args], {
  stdio: 'inherit',
  env: buildSystemProcessEnv({
    SYSTEM_LOGGING_MODE: loggingMode,
    SYSTEM_MODE: 'production',
    SYSTEM_EXECUTION_LOCK: 'system:full',
    SYSTEM_ALLOW_REPORT_EXPORT: '1',
    SYSTEM_DISABLE_DEBUG_LOGS: '1',
    PROFILE_GRAPH: 'false',
  }),
});

process.exit(result.status ?? 1);