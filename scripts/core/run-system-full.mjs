#!/usr/bin/env node

import { spawnSync } from 'node:child_process';

import { resolveLoggingMode, stripLoggingModeArgs } from '../../config/loggingConfig.mjs';
import { buildSystemProcessEnv, systemEnv } from '../../config/systemEnv.mjs';

const rawArgs = process.argv.slice(2);
const loggingMode = resolveLoggingMode(rawArgs, systemEnv);
const args = stripLoggingModeArgs(rawArgs);
const entryCommand = args.includes('--skip-tests') ? 'npm run system:quick' : 'npm run system:full';

const result = spawnSync(process.execPath, ['scripts/core/system-report.mjs', ...args], {
  stdio: 'inherit',
  env: buildSystemProcessEnv({
    SYSTEM_ENTRY_COMMAND: entryCommand,
    SYSTEM_LOGGING_MODE: loggingMode,
    SYSTEM_MODE: 'production',
    SYSTEM_EXECUTION_LOCK: 'system:full',
    SYSTEM_ALLOW_REPORT_EXPORT: '1',
    PROFILE_GRAPH: 'false',
  }),
});

process.exit(result.status ?? 1);
