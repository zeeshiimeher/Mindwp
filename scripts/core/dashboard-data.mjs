#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { createLogger } from '../../lib/logger/index.mjs';
import {
  buildDashboardData,
  DASHBOARD_REPORT_FILES as REQUIRED_DASHBOARD_REPORT_FILES,
} from '../lib/dashboard-data.mjs';

export const DASHBOARD_REPORT_FILES = REQUIRED_DASHBOARD_REPORT_FILES;

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const logger = createLogger({ label: 'dashboard-data', mode: 'summary', rootDir: root });

export function buildAndValidateDashboardData(
  targetRoot = root,
  sourceCommand = 'npm run system:full'
) {
  buildDashboardData(targetRoot, sourceCommand);

  const dashboardDir = path.join(targetRoot, 'reports', 'dashboard');
  const missing = DASHBOARD_REPORT_FILES.filter(
    fileName => !fs.existsSync(path.join(dashboardDir, fileName))
  );

  if (missing.length > 0) {
    throw new Error(`Missing dashboard reports: ${missing.join(', ')}`);
  }

  return {
    dashboardDir,
    files: [...DASHBOARD_REPORT_FILES],
    missing,
  };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  try {
    logger.step('dashboard:data');
    const result = buildAndValidateDashboardData();
    logger.printSummary(`dashboard data -> ${logger.relativePath(result.dashboardDir)}`);
  } catch (error) {
    logger.error(error instanceof Error ? error.message : String(error));
    process.exit(1);
  }
}
