// @vitest-environment node

import { execFileSync } from 'node:child_process';
import path from 'node:path';

import { describe, expect, test } from 'vitest';

const rootDir = path.resolve(__dirname, '../..');
const rules = [
    'hero-list-length',
    'heading-hierarchy',
    'seo-position',
    'faq-position',
    'button-rule',
    'badge-length',
] as const;

describe('system: content enforcement validators stay green', () => {
    for (const rule of rules) {
        test(`${rule} passes`, () => {
            expect(() => {
                execFileSync(
                    'node',
                    [
                        '--import',
                        'tsx/esm',
                        'scripts/validators/validate-content-enforcement.ts',
                        `--rule=${rule}`,
                        '--report-json',
                    ],
                    {
                        cwd: rootDir,
                        stdio: 'pipe',
                    }
                );
            }).not.toThrow();
        });
    }
});