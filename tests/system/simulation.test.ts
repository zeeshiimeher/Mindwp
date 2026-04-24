// @vitest-environment node

import { describe, expect, test } from 'vitest';

import {
    normalizeAlternatingItems,
    normalizePoints,
    renderAlternatingSection,
} from '@/domains/services/renderers/renderAlternatingSection';

describe('system simulation: fallback-free rendering', () => {
    test('alternating section renderer fails fast when section data is missing', () => {
        expect(() => renderAlternatingSection(undefined, null)).toThrow(
            'renderAlternatingSection requires section data.'
        );
    });

    test('alternating section renderer returns a section when authored items are valid', () => {
        const rendered = renderAlternatingSection(
            {
                title: 'Structured Flow',
                description: 'Authored alternating section content.',
                alternatingItems: [
                    {
                        title: 'Capture enquiries consistently',
                        description: 'Route the right next step without silent fallback.',
                        points: ['Lead context captured correctly', 'Routing rules stay deterministic'],
                    },
                ],
            },
            null
        );

        expect(rendered).toBeTruthy();
    });

    test('alternating section renderer returns the provided fallback when authored items collapse', () => {
        const fallback = 'FALLBACK_SECTION';
        const rendered = renderAlternatingSection(
            {
                title: 'Broken Flow',
                alternatingItems: [
                    {
                        title: 'Only one useful point survives',
                        description: 'Same sentence repeated.',
                        points: ['Same sentence repeated.', 'Same sentence repeated.'],
                    },
                ],
            },
            fallback
        );

        expect(rendered).toBe(fallback);
    });

    test('alternating item normalization removes duplicate and description-matching points', () => {
        const items = normalizeAlternatingItems([
            {
                title: 'The long title should normalize down to the meaningful part only',
                description: 'Keep the routing visible.',
                points: [
                    'Keep the routing visible.',
                    'Keep the routing visible.',
                    'Route the next step to the right owner every single time without silent fallback.',
                    'Route the next step to the right owner every single time without silent fallback.',
                    'Preserve context for the handoff.',
                ],
            },
        ]);

        expect(items).toHaveLength(1);
        expect(items[0].title.split(' ').length).toBeLessThanOrEqual(7);
        expect(items[0].points).toEqual([
            'Route the next step to the right owner every single time without',
            'Preserve context for the handoff',
        ]);
    });

    test('point normalization caps list length deterministically', () => {
        const points = normalizePoints([
            'One',
            'Two',
            'Three',
            'Four',
            'Five',
            'Six',
        ]);

        expect(points).toEqual(['One', 'Two', 'Three', 'Four', 'Five']);
    });
});