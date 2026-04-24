// @vitest-environment node

import fs from 'node:fs';
import path from 'node:path';

import { describe, expect, test } from 'vitest';

import { APPROVED_CTA_LABELS, resolveCtaLabel } from '@/config/ctaLabels';
import {
    resolveGlobalPrimaryCtaAction,
    resolvePrimaryCtaAction,
} from '@/lib/cta/primaryAction';

const root = process.cwd();
const smartCtaPath = path.join(root, 'src', 'components', 'system', 'SmartCTA.tsx');

describe('system simulation: CTA lock', () => {
    test('shared CTA resolvers only emit approved labels', () => {
        const labels = [
            resolveCtaLabel({ system: 'smart-website-systems', pageType: 'service', intent: 'entry' }),
            resolveCtaLabel({
                system: 'smart-website-systems',
                pageType: 'service',
                intent: 'diagnostic',
            }),
            resolveCtaLabel({ system: 'ai-lead-handling', pageType: 'feature', intent: 'comparison' }),
            resolveCtaLabel({ system: 'smart-website-systems', pageType: 'page', intent: 'conversion' }),
            resolvePrimaryCtaAction({
                system: 'smart-website-systems',
                slug: 'smart-website-systems',
                pageType: 'service',
            }).label,
            resolveGlobalPrimaryCtaAction().label,
        ];

        for (const label of labels) {
            expect(APPROVED_CTA_LABELS).toContain(label);
        }
    });

    test('shared CTA resolvers stay contact-only for primary actions', () => {
        const action = resolvePrimaryCtaAction({
            system: 'smart-website-systems',
            slug: 'crm-infrastructure-implementation',
            pageType: 'service',
            intent: 'diagnostic',
        });

        expect(action.href.startsWith('/contact')).toBe(true);
        expect(APPROVED_CTA_LABELS).toContain(action.label);
    });

    test('primary CTA resolution fails loud when page identity is incomplete', () => {
        expect(() =>
            resolvePrimaryCtaAction({
                system: 'smart-website-systems',
                slug: 'smart-website-systems',
            } as never)
        ).toThrow('resolvePrimaryCtaAction requires pageType or sourceType.');
    });

    test('global primary CTA stays on the default approved label even for comparison intent', () => {
        const action = resolveGlobalPrimaryCtaAction({
            pageType: 'feature',
            intent: 'comparison',
        });

        expect(action.label).toBe('Start a Conversation');
        expect(APPROVED_CTA_LABELS).toContain(action.label);
        expect(action.href.startsWith('/contact')).toBe(true);
    });

    test('SmartCTA does not contain implicit secondary CTA resolution', () => {
        const source = fs.readFileSync(smartCtaPath, 'utf8');

        expect(source.includes('resolveSecondaryCta(')).toBe(false);
        expect(source.includes('secondaryAction && <Button')).toBe(false);
        expect(source.includes('Discuss Your Project')).toBe(false);
    });
});