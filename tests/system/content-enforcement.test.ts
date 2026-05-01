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
    'no-hardcoded-content',
    'variant-required-data',
] as const;

describe('system: content enforcement validators stay green', () => {
    for (const rule of rules) {
        test(
            `${rule} passes`,
            {
                timeout: 20_000,
            },
            () => {
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
            }
        );
    }
});

describe('system: CTA contract validator stays green', () => {
    test(
        'validate-primary-cta passes',
        {
            timeout: 20_000,
        },
        () => {
            expect(() => {
                execFileSync(
                    'node',
                    [
                        '--import',
                        'tsx/esm',
                        'scripts/validators/validate-primary-cta.ts',
                        '--report-json',
                    ],
                    {
                        cwd: rootDir,
                        stdio: 'pipe',
                    }
                );
            }).not.toThrow();
        }
    );
});