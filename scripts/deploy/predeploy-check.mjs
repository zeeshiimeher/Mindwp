#!/usr/bin/env node

import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const artifactsDir = path.join(root, 'artifacts');
const deployReportPath = path.join(artifactsDir, 'deploy-report.json');

function ensureArtifactsDir() {
    fs.mkdirSync(artifactsDir, { recursive: true });
}

function writeDeployReport(status, details = {}) {
    ensureArtifactsDir();
    fs.writeFileSync(
        deployReportPath,
        `${JSON.stringify(
            {
                status,
                timestamp: new Date().toISOString(),
                validators: 'npm run build + npm run system:full',
                tests: 'validated via system:full build gate',
                ...details,
            },
            null,
            2
        )}\n`,
        'utf8'
    );
}

function run(command) {
    execSync(command, {
        cwd: root,
        stdio: 'inherit',
        env: process.env,
    });
}

try {
    process.stdout.write('[deploy] Validating system...\n');
    run('npm run build');
    run('npm run system:full');
    writeDeployReport('PASS', {
        stage: 'predeploy-check',
    });
    process.stdout.write('[deploy] Safe to deploy\n');
} catch (error) {
    writeDeployReport('FAIL', {
        stage: 'predeploy-check',
        error: error instanceof Error ? error.message : String(error),
    });
    process.stderr.write('[deploy] Deployment blocked\n');
    process.exit(1);
}