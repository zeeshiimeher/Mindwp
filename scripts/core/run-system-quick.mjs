#!/usr/bin/env node

import { spawnSync } from 'node:child_process';

import { resolveLoggingMode, stripLoggingModeArgs } from '../../config/loggingConfig.mjs';
import { buildSystemProcessEnv, systemEnv } from '../../config/systemEnv.mjs';
import { getQuickValidatorNames } from './system-manifest.mjs';

const rawArgs = process.argv.slice(2);
const loggingMode = resolveLoggingMode(rawArgs, systemEnv);
const passthroughArgs = stripLoggingModeArgs(rawArgs).filter(arg => arg !== '--skip-tests');
const validators = getQuickValidatorNames().join(',');

const result = spawnSync(
    process.execPath,
    [
        'scripts/core/validate-all.mjs',
        `--only=${validators}`,
        '--skip-snapshot-build',
        ...passthroughArgs,
    ],
    {
        stdio: 'inherit',
        env: buildSystemProcessEnv({
            SYSTEM_ENTRY_COMMAND: 'npm run system:quick',
            SYSTEM_LOGGING_MODE: loggingMode,
            SYSTEM_MODE: 'production',
            SYSTEM_EXECUTION_LOCK: 'system:quick',
            PROFILE_GRAPH: 'false',
        }),
    }
);

process.exit(result.status ?? 1);