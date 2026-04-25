// @vitest-environment node

import fs from 'node:fs';
import path from 'node:path';

import { describe, expect, test } from 'vitest';

import {
    APPROVED_CTA_LABELS,
    buildGlobalPrimaryCtaAction,
    buildPrimaryCtaAction,
    getPrimaryCTA,
    getSecondaryCTA,
} from '@/lib/cta/primaryAction';
import {
    scanPrimaryCtaUsageFile,
    validateCorePrimaryCtaSources,
} from '@/../scripts/validators/validate-primary-cta';

const root = process.cwd();
const primaryCtaSectionPath = path.join(root, 'src', 'components', 'system', 'PrimaryCTASection.tsx');

describe('system simulation: CTA lock', () => {
    test('shared CTA helpers only emit approved labels', () => {
        const labels = [
            getPrimaryCTA(),
            getSecondaryCTA(true),
            buildPrimaryCtaAction({
                system: 'smart-website-systems',
                slug: 'smart-website-systems',
                sourceType: 'service',
            }).label,
            buildGlobalPrimaryCtaAction().label,
        ];

        for (const label of labels) {
            expect(APPROVED_CTA_LABELS).toContain(label);
        }
    });

    test('shared CTA helpers stay contact-only for primary actions', () => {
        const action = buildPrimaryCtaAction({
            system: 'smart-website-systems',
            slug: 'crm-infrastructure-implementation',
            sourceType: 'service',
        });

        expect(action.href.startsWith('/contact')).toBe(true);
        expect(APPROVED_CTA_LABELS).toContain(action.label);
    });

    test('primary CTA helper fails loud when contact context is incomplete', () => {
        expect(() =>
            buildPrimaryCtaAction({
                system: 'smart-website-systems',
                slug: '',
                sourceType: 'service',
            } as never)
        ).toThrow('buildPrimaryCtaAction requires system and slug.');
    });

    test('global primary CTA stays on the locked approved label', () => {
        const action = buildGlobalPrimaryCtaAction();

        expect(action.label).toBe('Start a Conversation');
        expect(APPROVED_CTA_LABELS).toContain(action.label);
        expect(action.href.startsWith('/contact')).toBe(true);
    });

    test('PrimaryCTASection contains the locked secondary CTA gate and no legacy resolver', () => {
        const source = fs.readFileSync(primaryCtaSectionPath, 'utf8');

        expect(source.includes('resolveCtaLabel(')).toBe(false);
        expect(source.includes('return null')).toBe(false);
        expect(source.includes('getSecondaryCTA(allowSecondaryCTA)')).toBe(true);
    });

    test('validator rejects PrimaryCTASection usages missing required content props', () => {
        const issues = scanPrimaryCtaUsageFile(
            'fixture.tsx',
            `<PrimaryCTASection description='Missing title' />\n<PrimaryCTASection title='Missing description' />`
        );

        expect(issues.some(issue => issue.code === 'missing_cta_title')).toBe(true);
        expect(issues.some(issue => issue.code === 'missing_cta_description')).toBe(true);
    });

    test('validator rejects more than one full CTA block in a file', () => {
        const issues = scanPrimaryCtaUsageFile(
            'src/screens/fixture.tsx',
            `<PrimaryCTASection title='One' description='First' />\n<PrimaryCTASection title='Two' description='Second' />`
        );

        expect(issues.some(issue => issue.code === 'invalid_primary_cta_count')).toBe(true);
    });

    test('validator rejects actions-only mode on PrimaryCTASection', () => {
        const issues = scanPrimaryCtaUsageFile(
            'src/screens/fixture.tsx',
            `<PrimaryCTASection title='One' description='First' mode='actions-only' />`
        );

        expect(issues.some(issue => issue.code === 'primary_cta_section_cannot_be_actions_only')).toBe(true);
    });

    test('validator rejects inline hardcoded CTA button labels', () => {
        const issues = scanPrimaryCtaUsageFile(
            'src/screens/fixture.tsx',
            `<Button>Start a Conversation</Button>`
        );

        expect(issues.some(issue => issue.code === 'hardcoded_cta_label')).toBe(true);
    });

    test('core contract validation fails if PrimaryCTASection loses its hard guards', () => {
        const issues = validateCorePrimaryCtaSources(
            'export interface PrimaryCTASectionProps {}',
            "export const PRIMARY_CTA_LABEL = 'Start a Conversation';",
            'PrimaryCTASection.tsx',
            'primaryAction.ts'
        );

        expect(issues.some(issue => issue.code === 'missing_required_cta_guard')).toBe(true);
        expect(issues.some(issue => issue.code === 'secondary_cta_flag_not_explicit')).toBe(true);
        expect(issues.some(issue => issue.code === 'missing_secondary_guard')).toBe(true);
        expect(issues.some(issue => issue.code === 'missing_approved_label')).toBe(true);
    });
});