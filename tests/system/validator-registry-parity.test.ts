// @vitest-environment node

import { describe, expect, test } from 'vitest';

import { validators } from '../../scripts/core/validator-manifest.mjs';
import { systemManifest } from '@/system/manifest';

describe('system invariant: validator registry parity', () => {
    test('active validator manifest matches the unified system manifest', () => {
        const activeValidatorNames = validators
            .map(validator => validator.name)
            .sort((left, right) => left.localeCompare(right));
        const trackedValidatorNames = [...systemManifest.validatorNames]
            .sort((left, right) => left.localeCompare(right));

        expect(activeValidatorNames).toEqual(trackedValidatorNames);
    });
});