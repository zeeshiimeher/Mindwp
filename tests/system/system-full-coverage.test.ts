// @vitest-environment node

import fs from 'node:fs';
import path from 'node:path';

import { describe, expect, test } from 'vitest';

import { getValidatorDefinitions } from '../../scripts/core/system-manifest.mjs';

const root = process.cwd();

function readText(relativePath: string) {
    return fs.readFileSync(path.join(root, relativePath), 'utf8');
}

function readJson(relativePath: string) {
    return JSON.parse(fs.readFileSync(path.join(root, relativePath), 'utf8'));
}

describe('system simulation: system full coverage', () => {
    test('system:full entrypoint hard-locks the execution mode', () => {
        const source = readText('scripts/core/run-system-full.mjs');

        expect(source.includes("SYSTEM_EXECUTION_LOCK: 'system:full'")).toBe(true);
        expect(source.includes("SYSTEM_ENTRY_COMMAND: entryCommand")).toBe(true);
    });

    test('system report derives required reports directly from the manifest', () => {
        const source = readText('scripts/core/system-report.mjs');

        expect(source.includes('const requiredReportFiles = new Set(getReportFiles());')).toBe(true);
    });

    test('validate-all marks reused validators as cached instead of skipped', () => {
        const source = readText('scripts/core/validate-all.mjs');

        expect(source.includes("executionStatus: 'CACHED'")).toBe(true);
        expect(source.includes("executionStatus: 'SKIPPED'")).toBe(false);
    });

    test('latest validation snapshot covers every manifest validator without skipped entries', () => {
        const validationResults = readJson('reports/validation-results.json');
        const expectedValidators = getValidatorDefinitions().map(validator => validator.name).sort();
        const actualValidators = validationResults.data.validators
            .map((validator: { name: string }) => validator.name)
            .sort();

        expect(actualValidators).toEqual(expectedValidators);
        expect(
            validationResults.data.validators.some(
                (validator: { executionStatus?: string }) => validator.executionStatus === 'SKIPPED'
            )
        ).toBe(false);
    });
});