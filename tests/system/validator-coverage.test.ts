// @vitest-environment node

import { describe, expect, test } from 'vitest';

import {
    getCtaReportValidatorNames,
    getQuickValidatorNames,
    getReportFiles,
    getValidatorDefinitions,
} from '../../scripts/core/system-manifest.mjs';

describe('system simulation: validator coverage', () => {
    test('validator names stay unique and include the CTA label lock', () => {
        const validators = getValidatorDefinitions();
        const validatorNames = validators.map(validator => validator.name);

        expect(new Set(validatorNames).size).toBe(validatorNames.length);
        expect(validatorNames).toContain('validate-cta-labels');
        expect(validatorNames).not.toContain('validate-cta-label-contract');
    });

    test('every validator report file is tracked by the system manifest', () => {
        const reportFiles = new Set(getReportFiles());

        for (const validator of getValidatorDefinitions()) {
            expect(reportFiles.has(validator.reportFile), validator.name).toBe(true);
        }
    });

    test('quick and CTA validator groups remain subsets of the full validator list', () => {
        const validatorNames = new Set(getValidatorDefinitions().map(validator => validator.name));

        for (const name of getQuickValidatorNames()) {
            expect(validatorNames.has(name), `Missing quick validator ${name}`).toBe(true);
        }

        for (const name of getCtaReportValidatorNames()) {
            expect(validatorNames.has(name), `Missing CTA validator ${name}`).toBe(true);
        }
    });

    test('render alignment and system topic integrity stay as blocking manifest validators', () => {
        const validators = getValidatorDefinitions();
        const validatorMap = new Map(validators.map(validator => [validator.name, validator]));

        expect(validatorMap.get('validate-render-alignment')).toMatchObject({
            blocking: true,
            reportFile: 'render-alignment-report.json',
        });
        expect(validatorMap.get('validate-render-alignment')?.args).toContain('--report-json');

        expect(validatorMap.get('validate-system-topic-integrity')).toMatchObject({
            blocking: true,
            reportFile: 'system-topic-integrity-report.json',
        });
        expect(validatorMap.get('validate-system-topic-integrity')?.args).toContain('--report-json');
    });

    test('validator report files remain unique across the full manifest', () => {
        const reportFiles = getValidatorDefinitions().map(validator => validator.reportFile);

        expect(new Set(reportFiles).size).toBe(reportFiles.length);
    });
});