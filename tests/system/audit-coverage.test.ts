// @vitest-environment node

import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';

import { describe, expect, test } from 'vitest';

const workspaceRoot = path.resolve(import.meta.dirname, '..', '..');
const auditPath = path.join(workspaceRoot, 'docs/Planning/audit3.md');
const auditMarker = 'FINAL COVERAGE MAP - WAVE 4.5';

function parseFileEntries(source: string) {
    return [...source.matchAll(/^FILE:\s+(.+?)\s*$/gm)]
        .map(match => match[1].trim())
        .filter(filePath => filePath !== 'path/to/file');
}

function unique(values: string[]) {
    return [...new Set(values)];
}

function parseCoverageMap(source: string) {
    const pattern =
        /^FILE:\s+(.+?)\s*$\nFINAL STATUS:\s+(ENFORCED|DEFERRED)\nENFORCED VIA:\s+(.+?)\n(?:NOTES:\s+(.+?)|REASON:\s+([\s\S]+?)\nTRIGGER TO ENFORCE:\s+([\s\S]+?)\nRISK:\s+(.+?))$/gm;

    return [...source.matchAll(pattern)].map(match => ({
        filePath: match[1].trim(),
        status: match[2],
        enforcedVia: match[3].trim(),
        notes: match[4]?.trim() ?? '',
        reason: match[5]?.trim() ?? '',
        trigger: match[6]?.trim() ?? '',
        risk: match[7]?.trim() ?? '',
    }));
}

describe('system invariant: audit coverage map stays complete', () => {
    test('classifies every audited file exactly once in the Wave 4 appendix', () => {
        const audit = readFileSync(auditPath, 'utf8');
        const markerIndex = audit.indexOf(auditMarker);

        expect(markerIndex, 'Missing Wave 4 coverage appendix marker.').toBeGreaterThanOrEqual(0);

        const sourceSection = audit.slice(0, markerIndex);
        const appendixSection = audit.slice(markerIndex);
        const auditedFiles = unique(parseFileEntries(sourceSection));
        const coverageEntries = parseCoverageMap(appendixSection);
        const coverageFiles = coverageEntries.map(entry => entry.filePath);

        expect(unique(coverageFiles)).toEqual(coverageFiles);
        expect(coverageFiles).toEqual(auditedFiles);
        expect(coverageEntries.every(entry => entry.enforcedVia.length > 0)).toBe(true);
        expect(
            coverageEntries.every(entry =>
                entry.status === 'ENFORCED'
                    ? entry.notes.length > 0
                    : entry.reason.length > 0 && entry.trigger.length > 0 && entry.risk.length > 0
            )
        ).toBe(true);
    });

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
                filePath: 'src/components/system/RelatedContentSection.tsx',
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