// @vitest-environment node

import { describe, expect, test } from 'vitest';

import { renderServiceSkeletonPage } from '@/domains/services/renderers/ServiceSkeletonRenderer';
import type { ServicePageData } from '@/domains/services/types';

const baseData = {
    seo: {
        title: 'Simulation Service',
        description: 'Simulation service data for system tests.',
        canonical: '/services/simulation-service',
    },
    slug: 'simulation-service',
    badge: 'Simulation',
    category: 'System Test',
    systems: ['smart-website-systems'],
    topics: ['website-infrastructure'],
    hero: {
        badge: 'Simulation',
        title: 'Simulation Service',
        description: 'A small service payload used to verify skeleton renderer behavior.',
        list: ['One', 'Two'],
    },
    sections: {
        firstSection: {
            header: {
                kicker: 'First',
                title: 'First section',
                description: 'A valid skeleton section.',
            },
        },
        faq: {
            header: {
                kicker: 'Questions',
                title: 'Simulation questions',
                description: 'A valid FAQ section.',
            },
            items: [
                {
                    id: 'simulation-faq',
                    question: 'Does this render?',
                    answer: 'Yes. The test only verifies the skeleton contract.',
                },
            ],
        },
    },
    cta: {
        heading: {
            kicker: 'Next Step',
            title: 'Check the simulation.',
            description: 'A valid CTA for the skeleton renderer.',
        },
        actions: [
            {
                label: 'Start a Conversation',
                href: '/contact?system=smart-website-systems&source=service/simulation-service',
                primary: true,
            },
        ],
    },
} satisfies ServicePageData<Record<string, unknown>>;

describe('system simulation: service skeleton rendering', () => {
    test('service skeleton renderer fails fast when section data is missing', () => {
        expect(() =>
            renderServiceSkeletonPage({
                data: baseData,
                prefix: 'simulation',
                sections: [{ key: 'missingSection' }],
            })
        ).toThrow('[simulation-service] Missing skeleton section: missingSection');
    });

    test('service skeleton renderer returns a page element when section data is present', () => {
        const rendered = renderServiceSkeletonPage({
            data: baseData,
            prefix: 'simulation',
            sections: [{ key: 'firstSection' }],
        });

        expect(rendered).toBeTruthy();
    });

    test('service skeleton renderer can include FAQ when FAQ data is present', () => {
        const rendered = renderServiceSkeletonPage({
            data: baseData,
            prefix: 'simulation',
            sections: [{ key: 'firstSection' }],
            faq: true,
        });

        expect(rendered).toBeTruthy();
    });
});
