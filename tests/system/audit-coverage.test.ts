// @vitest-environment node

import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';

import { describe, expect, test } from 'vitest';

const workspaceRoot = path.resolve(import.meta.dirname, '..', '..');

describe('system invariant: enforcement anchors', () => {
    test('keeps the critical enforcement anchors present in code and the system manifest', () => {
        const snippets = [
            {
                filePath: 'src/components/system/PageEnforcement.tsx',
                expected: 'throw error;',
            },
            {
                filePath: 'src/components/system/JsonLd.tsx',
                expected: 'JsonLd requires a non-empty @context.',
            },
            {
                filePath: 'src/components/sections/RelatedContentSection.tsx',
                expected: 'requires groups or an explicit empty state',
            },
            {
                filePath: 'src/lib/seo/seoResolver.ts',
                expected: 'incomplete metadata',
            },
            {
                filePath: 'src/lib/content-graph/registry.ts',
                expected: 'validateContentGraph(graph);',
            },
            {
                filePath: 'src/lib/content-graph/resolverIndexes.ts',
                expected: 'Resolver index collision',
            },
            {
                filePath: 'scripts/core/system-manifest.mjs',
                expected: 'validate-primary-cta',
            },
            {
                filePath: 'scripts/core/system-manifest.mjs',
                expected: 'validate-render-alignment',
            },
            {
                filePath: 'scripts/core/system-manifest.mjs',
                expected: 'validate-graph',
            },
        ];

        for (const { filePath, expected } of snippets) {
            const absolutePath = path.join(workspaceRoot, filePath);
            expect(existsSync(absolutePath), `Missing expected file: ${filePath}`).toBe(true);
            expect(readFileSync(absolutePath, 'utf8')).toContain(expected);
        }
    });
});