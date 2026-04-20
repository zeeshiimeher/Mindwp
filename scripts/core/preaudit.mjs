#!/usr/bin/env node

import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { readSystemEnv } from '../../config/systemEnv.mjs';
import { createLogger } from '../../lib/logger/index.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const logger = createLogger({ label: 'preaudit', mode: 'summary', rootDir: root });
const requiredReports = [
  'reports/system-report.json',
  'reports/system-health.json',
  'reports/pipeline-report.json',
  'reports/validation-results.json',
  'reports/dashboard/system.json',
  'reports/dashboard/validators.json',
  'reports/dashboard/pipeline.json',
];

function fail(message) {
  logger.error(message);
  process.exit(1);
}

function checkGitClean() {
  const result = spawnSync('git', ['status', '--porcelain'], {
    cwd: root,
    encoding: 'utf8',
  });

  if (result.status !== 0) {
    fail(result.stderr?.trim() || 'unable to read git status');
  }

  if (result.stdout.trim().length > 0) {
    fail('git worktree is dirty; commit or stash changes before audit');
  }
}

function checkNodeVersion() {
  const major = Number(process.versions.node.split('.')[0] || '0');
  if (major !== 20) {
    fail(`node version mismatch: expected 20.x, received ${process.versions.node}`);
  }
}

function checkNpmVersion() {
  const result = spawnSync('npm', ['--version'], {
    cwd: root,
    encoding: 'utf8',
  });

  if (result.status !== 0) {
    fail(result.stderr?.trim() || 'unable to read npm version');
  }

  const major = Number(String(result.stdout).trim().split('.')[0] || '0');
  if (major !== 11) {
    fail(`npm version mismatch: expected 11.x, received ${String(result.stdout).trim()}`);
  }
}

function checkEnv() {
  readSystemEnv();
}

function checkReports() {
  const missing = requiredReports.filter(
    relativePath => !fs.existsSync(path.join(root, relativePath))
  );
  if (missing.length > 0) {
    fail(`missing required audit reports: ${missing.join(', ')}`);
  }
}

function main() {
  logger.step('preaudit');
  checkGitClean();
  checkNodeVersion();
  checkNpmVersion();
  checkEnv();
  checkReports();
  logger.printSummary('preaudit checks passed');
}

main();
