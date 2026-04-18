// @vitest-environment node

import { describe, expect, test } from 'vitest';

import { SERVICE_ENTRY_BY_SLUG } from '@/domains/services/config';

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

function asArray(value: unknown): unknown[] {
  return Array.isArray(value) ? value : [];
}

describe('integration: service conversion contracts', () => {
  test('service pages keep the minimum conversion content contract', () => {
    for (const [slug, entry] of Object.entries(SERVICE_ENTRY_BY_SLUG)) {
      const data = entry.data as Record<string, any>;
      const sections = (data.sections ?? {}) as Record<string, any>;
      const qualification = sections.qualification as Record<string, any> | undefined;
      const proof = sections.proof as Record<string, any> | undefined;
      const transformationProof = data.transformationProof as Record<string, any> | undefined;

      expect(isNonEmptyString(data.hero?.title), `${slug} must define hero.title`).toBe(true);
      expect(isNonEmptyString(data.hero?.description), `${slug} must define hero.description`).toBe(true);

      expect(isNonEmptyString(data.cta?.title), `${slug} must define cta.title`).toBe(true);
      expect(isNonEmptyString(data.cta?.description), `${slug} must define cta.description`).toBe(true);

      if (data.inlineCta) {
        expect(isNonEmptyString(data.inlineCta.title), `${slug} inlineCta.title must be non-empty`).toBe(
          true
        );
        expect(
          isNonEmptyString(data.inlineCta.description),
          `${slug} inlineCta.description must be non-empty`
        ).toBe(true);
      }

      if (qualification) {
        const strongFitItems = asArray(qualification.strongFitItems ?? qualification.strongFit);
        const notFitItems = asArray(qualification.notDesignedItems ?? qualification.notFor);
        const qualificationTitle = qualification.title ?? qualification.header?.title;
        const qualificationDescription = qualification.description ?? qualification.header?.description;

        expect(isNonEmptyString(qualificationTitle), `${slug} qualification.title must be non-empty`).toBe(true);
        expect(
          isNonEmptyString(qualificationDescription),
          `${slug} qualification.description must be non-empty`
        ).toBe(true);
        expect(
          isNonEmptyString(qualification.strongFitTitle),
          `${slug} qualification.strongFitTitle must be non-empty`
        ).toBe(true);
        expect(
          isNonEmptyString(qualification.notDesignedTitle) || isNonEmptyString(qualification.notForTitle),
          `${slug} qualification must define a non-empty not-fit title`
        ).toBe(true);
        expect(strongFitItems.length > 0, `${slug} qualification must include strong-fit items`).toBe(true);
        expect(notFitItems.length > 0, `${slug} qualification must include not-fit items`).toBe(true);
      }

      if (proof) {
        const proofItems = proof.cards ?? proof.items;

        expect(isNonEmptyString(proof.header?.title), `${slug} proof.header.title must be non-empty`).toBe(
          true
        );
        expect(
          isNonEmptyString(proof.header?.description),
          `${slug} proof.header.description must be non-empty`
        ).toBe(true);
        expect(Boolean(proofItems), `${slug} proof must include cards or items`).toBe(true);
      }

      if (transformationProof) {
        expect(
          isNonEmptyString(transformationProof.before?.title),
          `${slug} transformationProof.before.title must be non-empty`
        ).toBe(true);
        expect(
          asArray(transformationProof.before?.points).length > 0,
          `${slug} transformationProof.before.points must include at least one item`
        ).toBe(true);
        expect(
          isNonEmptyString(transformationProof.build?.title),
          `${slug} transformationProof.build.title must be non-empty`
        ).toBe(true);
        expect(
          isNonEmptyString(transformationProof.build?.description),
          `${slug} transformationProof.build.description must be non-empty`
        ).toBe(true);
        expect(
          asArray(transformationProof.build?.highlights).length > 0,
          `${slug} transformationProof.build.highlights must include at least one item`
        ).toBe(true);
        expect(
          isNonEmptyString(transformationProof.after?.title),
          `${slug} transformationProof.after.title must be non-empty`
        ).toBe(true);
        expect(
          asArray(transformationProof.after?.results).length > 0,
          `${slug} transformationProof.after.results must include at least one item`
        ).toBe(true);
      }
    }
  });
});