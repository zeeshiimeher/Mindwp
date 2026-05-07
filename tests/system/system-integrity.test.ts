// @vitest-environment node

import { readFileSync } from 'node:fs';
import path from 'node:path';

import { describe, expect, test } from 'vitest';

import { getInitializedContentGraph } from '@/domains/init/ensureGraphInitialized';
import { getSystemInvariantEntries } from '@/lib/system/invariants';
import { resolveMetadata } from '@/lib/seo/resolveMetadata';

import { getValidatorDefinitions } from '@/../scripts/core/system-manifest.mjs';

const workspaceRoot = path.resolve(import.meta.dirname, '..', '..');
const integrityTargets = [
    'src/components/conversion/DecisionPanel.tsx',
    'src/components/navigation/RelatedSection.tsx',
    'src/lib/seo/schema.ts',
    'src/lib/content-graph/publishable.tsx',
    'scripts/core/system-report.mjs',
] as const;

describe('system invariant: closure lock', () => {
    test('critical closure files do not carry fallback markers or TODOs', () => {
        for (const relativePath of integrityTargets) {
            const source = readFileSync(path.join(workspaceRoot, relativePath), 'utf8');
            expect(source.includes('TODO')).toBe(false);
            expect(source.includes('fallbackTitle')).toBe(false);
            expect(source.includes('fallbackDescription')).toBe(false);
        }
    });

    test('required renderers do not silently return null', () => {
        const decisionPanel = readFileSync(
            path.join(workspaceRoot, 'src/components/conversion/DecisionPanel.tsx'),
            'utf8'
        );
        const relatedSection = readFileSync(
            path.join(workspaceRoot, 'src/components/navigation/RelatedSection.tsx'),
            'utf8'
        );

        expect(decisionPanel.includes('return null')).toBe(false);
        expect(relatedSection.includes('return null;')).toBe(false);
    });

    test('system invariants still resolve required SEO metadata for publishable entries', () => {
        for (const entry of getSystemInvariantEntries()) {
            const metadata = resolveMetadata(entry.data, entry.canonical);

            expect(metadata.title?.trim().length, `Missing title for ${entry.id}`).toBeGreaterThan(0);
            expect(metadata.description?.trim().length, `Missing description for ${entry.id}`).toBeGreaterThan(0);
            expect(metadata.canonical).toBe(entry.canonical);
        }
    });

    test('content graph stays duplicate-free', async () => {
        const graph = await getInitializedContentGraph();
        const nodes = Object.values(graph);
        const ids = nodes.map(node => node.id);
        const paths = nodes.map(node => node.path);

        expect(new Set(ids).size).toBe(ids.length);
        expect(new Set(paths).size).toBe(paths.length);
    });

    test('system report locks validator coverage against the manifest', () => {
        const source = readFileSync(path.join(workspaceRoot, 'scripts/core/system-report.mjs'), 'utf8');

        expect(source.includes('Validator coverage incomplete.')).toBe(true);
        expect(getValidatorDefinitions().length).toBeGreaterThan(0);
    });
});