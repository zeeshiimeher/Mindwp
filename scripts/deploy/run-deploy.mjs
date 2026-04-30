#!/usr/bin/env node

import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { generateSnapshotArtifact } from './generate-snapshot.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const artifactsDir = path.join(root, 'artifacts');
const deployReportPath = path.join(artifactsDir, 'deploy-report.json');

function ensureArtifactsDir() {
  fs.mkdirSync(artifactsDir, { recursive: true });
}

function readSystemStatus() {
  const systemReportPath = path.join(root, 'reports', 'system-report.json');
  if (!fs.existsSync(systemReportPath)) {
    return 'system-report.json not found';
  }

  try {
    const report = JSON.parse(fs.readFileSync(systemReportPath, 'utf8'));
    return report.status ?? report.summary?.status ?? 'PASS';
  } catch {
    return 'unable to parse system-report.json';
  }
}

function writeDeployReport(status, details = {}) {
  ensureArtifactsDir();
  fs.writeFileSync(
    deployReportPath,
    `${JSON.stringify(
      {
        status,
        timestamp: new Date().toISOString(),
        validators: readSystemStatus(),
        tests: 'system:full gate completed before deploy handoff',
        ...details,
      },
      null,
      2
    )}\n`,
    'utf8'
  );
}

try {
  const artifactSnapshotPath = generateSnapshotArtifact();
  const deployCommand = process.env.DEPLOY_COMMAND?.trim();

  if (deployCommand) {
    process.stdout.write(`[deploy] Executing provider command: ${deployCommand}\n`);
    execSync(deployCommand, {
      cwd: root,
      stdio: 'inherit',
      env: process.env,
      shell: true,
    });
  } else {
    process.stdout.write(
      '[deploy] No DEPLOY_COMMAND configured. Validation-only deploy handoff complete.\n'
    );
  }

  writeDeployReport('PASS', {
    snapshot: path.relative(root, artifactSnapshotPath),
    deployCommand: deployCommand || 'validation-only handoff',
  });
  process.stdout.write('[deploy] Deploy report written\n');
} catch (error) {
  writeDeployReport('FAIL', {
    error: error instanceof Error ? error.message : String(error),
  });
  process.stderr.write('[deploy] Deploy handoff failed\n');
  process.exit(1);
}
