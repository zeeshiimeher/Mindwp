// @vitest-environment node

import { describe, expect, test } from 'vitest';

import { renderAlternatingSection } from '@/domains/services/renderers/renderAlternatingSection';

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
});