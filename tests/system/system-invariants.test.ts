// @vitest-environment node

import { beforeAll, describe, expect, test } from 'vitest';

import { getBlogRenderedSectionTypes } from '@/domains/blog/templates/BlogPostTemplate';
import { getCaseStudyRenderedSectionTypes } from '@/domains/case-studies/templates/CaseStudyTemplate';
import { getResourceRenderedSectionTypes } from '@/domains/resources/templates/ResourcePageTemplate';
import { collectSystemInvariantFindings, getSystemInvariantEntries } from '@/lib/system/invariants';

import { getGraphNodes, initRuntime } from './runtime';

describe('system invariant: global guarantees stay locked', () => {
    beforeAll(async () => {
        await initRuntime();
    });

    test('slugs stay unique within their owning domain', () => {
        const entries = getSystemInvariantEntries();
        const scopedSlugs = entries.map(entry => `${entry.domain}:${entry.slug}`);

        expect(new Set(scopedSlugs).size).toBe(scopedSlugs.length);
    });

    test('registry entries stay complete', () => {
        for (const entry of getSystemInvariantEntries()) {
            expect(entry.slug).toBeTruthy();
            expect(entry.title).toBeTruthy();
            expect(entry.seo).toBeTruthy();
        }
    });

    test('graph stays aligned with registry authority', () => {
        const graphNodes = getGraphNodes();
        const { issues } = collectSystemInvariantFindings(graphNodes);

        expect(
            issues.filter(issue =>
                ['missing_graph_node', 'graph_slug_mismatch', 'graph_path_mismatch', 'orphan_graph_node'].includes(issue.code)
            )
        ).toEqual([]);
    });

    test('canonical paths stay deterministic', () => {
        const graphNodes = getGraphNodes();
        const { issues } = collectSystemInvariantFindings(graphNodes);

        expect(issues.filter(issue => issue.code === 'canonical_mismatch')).toEqual([]);
    });

    test('rendered section order matches authored section order wherever sections are ordered arrays', () => {
        const graphNodes = getGraphNodes();
        const { issues } = collectSystemInvariantFindings(graphNodes);

        expect(
            issues.filter(issue => ['render_order_mismatch', 'silent_section_drop', 'unexpected_rendered_sections'].includes(issue.code))
        ).toEqual([]);
    });

    test('publishable array-driven domains keep an authored CTA section', () => {
        const graphNodes = getGraphNodes();
        const { issues } = collectSystemInvariantFindings(graphNodes);

        expect(issues.filter(issue => issue.code === 'missing_cta')).toEqual([]);
    });

    test('unknown section types are not treated as renderable by ordered-array templates', () => {
        expect(getBlogRenderedSectionTypes([{ type: 'random-block' } as never])).toEqual([]);
        expect(getResourceRenderedSectionTypes([{ type: 'random-block' } as never])).toEqual([]);
        expect(getCaseStudyRenderedSectionTypes([{ type: 'random-block' } as never])).toEqual([]);
    });
});