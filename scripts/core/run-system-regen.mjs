#!/usr/bin/env node

import { spawnSync } from 'node:child_process';

import { resolveLoggingMode, stripLoggingModeArgs } from '../../config/loggingConfig.mjs';
import { buildSystemProcessEnv, systemEnv } from '../../config/systemEnv.mjs';

const rawArgs = process.argv.slice(2);
const loggingMode = resolveLoggingMode(rawArgs, systemEnv);
const passthroughArgs = stripLoggingModeArgs(rawArgs);
const env = buildSystemProcessEnv({
    SYSTEM_ENTRY_COMMAND: 'npm run system:regen',
    SYSTEM_LOGGING_MODE: loggingMode,
    SYSTEM_MODE: 'production',
    SYSTEM_EXECUTION_LOCK: 'system:regen',
    SYSTEM_ALLOW_REPORT_EXPORT: '1',
    PROFILE_GRAPH: 'false',
});

for (const command of [
    [process.execPath, ['--import', 'tsx/esm', 'scripts/core/build-system-snapshot.mjs']],
    [process.execPath, ['--import', 'tsx/esm', 'scripts/analyzers/export-reports.mjs', ...passthroughArgs]],
]) {
    const result = spawnSync(command[0], command[1], {
        stdio: 'inherit',
        env,
    });

    if ((result.status ?? 1) !== 0) {
        process.exit(result.status ?? 1);
    }
}