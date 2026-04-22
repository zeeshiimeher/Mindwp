import fs from 'node:fs';
import path from 'node:path';

import { describe, expect, it } from 'vitest';
import { systemManifest } from '@/system/manifest';

import {
  assertDashboardBundle,
  assertPipelineCoverage,
  normalizeReportForSnapshot,
  validateReportShape,
} from '../helpers/reportAssertions';

const root = process.cwd();

function readJson(fileName: string) {
  return JSON.parse(fs.readFileSync(path.join(root, 'reports', fileName), 'utf8'));
}

describe('report contracts', () => {
  it('system health exposes deterministic structure', () => {
    const report = readJson('system-health.json');
    const normalized = validateReportShape(report);

    expect(normalized.meta.name).toBe('system-health');
    expect(normalized.data.status).toBeDefined();
    expect(typeof normalized.data.coverage.validators).toBe('string');
    expect(typeof normalized.data.coverage.analyzers).toBe('string');
    expect(typeof normalized.data.drift).toBe('boolean');
  });

  it('pipeline report exposes step trace without snapshotting payloads', () => {
    const report = readJson('pipeline-report.json');
    const normalized = assertPipelineCoverage(report);
    const steps = normalized.data.steps;

    expect(normalized.meta.name).toBe('pipeline-report');
    expect(Array.isArray(steps)).toBe(true);
  });

  it('dashboard pipeline report keeps structure-only coverage data', () => {
    const report = JSON.parse(
      fs.readFileSync(path.join(root, 'reports', 'dashboard', 'pipeline.json'), 'utf8')
    );
    const normalized = assertDashboardBundle(report);

    expect(normalized.meta.name).toBe('dashboard-pipeline');
    expect(Array.isArray(normalized.data.timelineSteps)).toBe(true);
    expect(Array.isArray(normalized.data.analyzerCoverage)).toBe(true);
  });

  it('locked reports match snapshots', () => {
    const reportFiles = [
      'system-report.json',
      'pipeline-report.json',
      ...systemManifest.dashboardReports,
    ];

    for (const fileName of reportFiles) {
      const absolutePath = path.join(root, 'reports', fileName);
      const report = JSON.parse(fs.readFileSync(absolutePath, 'utf8'));

      expect(normalizeReportForSnapshot(report)).toMatchSnapshot(fileName);
    }
  });
});
