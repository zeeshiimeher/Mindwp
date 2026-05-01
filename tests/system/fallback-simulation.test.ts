// @vitest-environment node

import { describe, expect, test } from 'vitest';

import VoiceCallsRenderer from '@/domains/features/renderers/VoiceCallsRenderer';
import { createResolver } from '@/lib/authority/resolver';
import { resolveMetadata } from '@/lib/seo/resolveMetadata';
import { scanPrimaryCtaUsageFile } from '@/../scripts/validators/validate-primary-cta';

describe('system simulation: fallback purge', () => {
    test('missing CTA fails validation', () => {
        const issues = scanPrimaryCtaUsageFile(
            'src/screens/fallback-fixture.tsx',
            `<PrimaryCTASection actions={[{ label: 'Go', href: '/contact', primary: true }]} />`
        );

        expect(issues.some(issue => issue.code === 'missing_cta_title')).toBe(true);
    });

    test('missing SEO fails loud', () => {
        expect(() => resolveMetadata({ seo: { title: 'Only title' } }, '/fallback')).toThrow(
            'Invalid SEO metadata'
        );
    });

    test('missing section data fails loud', () => {
        const data = {
            systems: ['smart-website-systems'],
            hero: {
                badge: 'Badge',
                title: 'Voice Calls',
                description: 'Description',
                stats: [],
            },
            sections: {
                process: { title: 'Process', description: 'Description', steps: [] },
                benefits: { title: 'Benefits', description: 'Description', benefits: [] },
                useCases: { title: 'Use cases', description: 'Description', cases: [] },
                capabilities: {
                    title: 'Capabilities',
                    description: 'Description',
                    featureCategories: [],
                    columns: 3,
                    variant: 'stacked',
                },
                faq: { badge: 'FAQ', title: 'FAQ', description: 'Description', items: [] },
                explore: { badge: 'Explore', title: 'Explore', description: 'Description', cards: [] },
            },
            cta: {
                heading: {
                    title: 'CTA',
                    description: 'CTA description',
                },
                actions: [{ label: 'Get Started', href: '/contact', primary: true }],
            },
        };

        expect(() => VoiceCallsRenderer({ data } as never)).toThrow('Missing section data');
    });

    test('broken authority copy fails loud', () => {
        const sourceNode = {
            id: 'service:source',
            slug: 'source',
            path: '/services/source',
            type: 'service',
            title: 'Source',
            description: 'Source description',
            relatesTo: [{ id: 'service:target', source: 'derived' }],
            supports: [],
            validates: [],
        };
        const targetNode = {
            id: 'service:target',
            slug: 'target',
            path: '/services/target',
            type: 'service',
            relatesTo: [],
            supports: [],
            validates: [],
        };

        const resolver = createResolver(
            {
                getServiceBySlug: () => undefined,
                features: [],
                industries: {},
                caseStudies: {},
            } as never,
            {
                nodeTypeSlugIndex: new Map<string, Map<string, typeof sourceNode>>([
                    ['service', new Map<string, typeof sourceNode>([['source', sourceNode]])],
                ]),
                nodeTypeBuckets: new Map<string, Array<typeof sourceNode | typeof targetNode>>([
                    ['service', [sourceNode, targetNode]],
                ]),
                nodeIdIndex: new Map<string, typeof sourceNode | typeof targetNode>([
                    ['service:source', sourceNode],
                    ['service:target', targetNode],
                ]),
                reverseRelationIndex: new Map(),
                blogSlugIndex: new Map(),
                resourceSlugIndex: new Map(),
            } as never
        );

        expect(() => resolver.getServiceSlots('source')).toThrow('Authority node missing content');
    });
});
