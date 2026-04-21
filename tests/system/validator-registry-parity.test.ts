// @vitest-environment node

import { describe, expect, test } from 'vitest';

import { validators } from '../../scripts/core/validator-manifest.mjs';
import { systemKnowledge } from '@/system/knowledge';

describe('system invariant: validator registry parity', () => {
    test('active validator manifest matches the tracked validator inventory', () => {
        const activeValidatorNames = validators
            .map(validator => validator.name)
            .sort((left, right) => left.localeCompare(right));
        const trackedValidatorNames = [...systemKnowledge.validators]
            .filter(name => name !== 'report-size-guard')
            .sort((left, right) => left.localeCompare(right));

        expect(activeValidatorNames).toEqual(trackedValidatorNames);
    });
});