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
});