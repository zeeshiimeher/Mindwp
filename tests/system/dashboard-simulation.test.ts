// @vitest-environment node

import fs from 'node:fs';
import path from 'node:path';

import { describe, expect, test } from 'vitest';

import { systemManifest } from '@/system/manifest';

const root = process.cwd();

function readJson(relativePath: string) {
    return JSON.parse(fs.readFileSync(path.join(root, 'reports', relativePath), 'utf8'));
}

describe('system simulation: dashboard integrity', () => {
    test('dashboard report list stays unique and tracked by the manifest report set', () => {
        expect(new Set(systemManifest.dashboardReports).size).toBe(systemManifest.dashboardReports.length);

        for (const reportPath of systemManifest.dashboardReports) {
            expect(systemManifest.reports).toContain(reportPath);
        }
    });

    test('all manifest-tracked dashboard reports exist and expose deterministic top-level structure', () => {
        for (const reportPath of systemManifest.dashboardReports) {
            const absolutePath = path.join(root, 'reports', reportPath);

            expect(fs.existsSync(absolutePath), reportPath).toBe(true);

            const report = readJson(reportPath);
            expect(report).toHaveProperty('meta');
            expect(typeof report.meta.name).toBe('string');
            expect(report.meta.name.length).toBeGreaterThan(0);
            expect(report).toHaveProperty('data');
        }
    });

    test('client dashboard stays present alongside dashboard bundles', () => {
        const report = readJson('client-dashboard.json');

        expect(typeof report.sourceCommand).toBe('string');
        expect(typeof report.status).toBe('string');
        expect(report).toHaveProperty('summary');
        expect(typeof report.summary.systemHealth).toBe('string');
        expect(typeof report.summary.issues).toBe('number');
    });
});