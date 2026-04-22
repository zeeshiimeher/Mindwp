import fs from 'node:fs';
import path from 'node:path';

import { createReportSchema } from '../lib/report-schema.mjs';
import { getRequiredCommands } from '../core/system-manifest.mjs';

const root = process.cwd();
const packageJsonPath = path.join(root, 'package.json');
const reportPath = path.join(root, 'reports', 'command-integrity-report.json');

type Issue = { command?: string; message: string };

function main() {
    const generatedAt = new Date().toISOString();
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8')) as {
        scripts?: Record<string, string>;
        systemCommands?: Record<string, string>;
    };
    const scripts = packageJson.scripts ?? {};
    const scriptMetadata = packageJson.systemCommands ?? {};
    const requiredCommands = getRequiredCommands();
    const issues: Issue[] = [];

    for (const command of requiredCommands) {
        if (typeof scripts[command.name] !== 'string' || scripts[command.name].trim().length === 0) {
            issues.push({ command: command.name, message: 'missing package.json script' });
        }

        if (scriptMetadata[command.name] !== command.description) {
            issues.push({ command: command.name, message: 'missing or stale systemCommands metadata' });
        }
    }

    if (scripts['system:quick'] === scripts['system:full']) {
        issues.push({
            command: 'system:quick',
            message: 'system:quick must not alias system:full',
        });
    }

    if ((scripts['system:regen'] ?? '').includes('system:full')) {
        issues.push({
            command: 'system:regen',
            message: 'system:regen must not run the full gate',
        });
    }

    for (const scriptName of Object.keys(scripts)) {
        if (/^phase\d+(?::|$)/i.test(scriptName)) {
            issues.push({
                command: scriptName,
                message: 'legacy phase-based package scripts are not allowed',
            });
        }
    }

    const report = createReportSchema({
        name: 'validate-command-integrity',
        status: issues.length === 0 ? 'PASS' : 'FAIL',
        generatedAt,
        summary: {
            total: requiredCommands.length,
            passed: issues.length === 0 ? requiredCommands.length : 0,
            failed: issues.length === 0 ? 0 : issues.length,
            warnings: 0,
        },
        issues,
        data: {
            requiredCommands,
            scripts: Object.fromEntries(requiredCommands.map(command => [command.name, scripts[command.name] ?? null])),
            metadata: Object.fromEntries(requiredCommands.map(command => [command.name, scriptMetadata[command.name] ?? null])),
        },
        sourceCommand: 'node --import tsx/esm scripts/validators/validate-command-integrity.ts',
    });

    fs.mkdirSync(path.dirname(reportPath), { recursive: true });
    fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8');

    if (issues.length > 0) {
        process.exitCode = 1;
    }
}

main();