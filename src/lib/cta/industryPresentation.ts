import type { ComponentProps } from 'react';

import { RelatedCardsSection } from '@/components/reusable/sections/core/RelatedCardsSection';
import { IndustryPathwaysSection } from '@/components/reusable/sections/industries';
import type { IndustryCategory } from '@/domains/industries/catalog';
import { IndustryExploreSection } from '@/domains/industries/components/IndustryExploreSection';
import { buildContactHref } from '@/lib/contact/contactHref';

const INDUSTRY_PATHWAY_BUTTON_LABELS = [
  'Talk Through Scope',
  'See the Setup',
  'Request Details',
] as const;

export function resolveIndustryPathwaySection(
  section: ComponentProps<typeof IndustryPathwaysSection> | undefined,
  system: string,
  slug: string
) {
  if (!section) {
    return undefined;
  }

  return {
    ...section,
    packages: section.packages.map((pkg, index) => ({
      ...pkg,
      buttonText: INDUSTRY_PATHWAY_BUTTON_LABELS[index] ?? 'Request Details',
      buttonHref: buildContactHref({
        system,
        sourceType: 'industry',
        slug,
      }),
    })),
  };
}

export function resolveIndustryCategoryDetailRoutes(
  section: ComponentProps<typeof RelatedCardsSection> | undefined,
  category: IndustryCategory
) {
  if (!section) {
    return undefined;
  }

  let label = 'View Workflow';

  if (category === 'home-services' || category === 'beauty-personal-care') {
    label = 'View Page';
  } else if (category === 'automotive-services') {
    label = 'Discuss Workflow';
  }

  return {
    ...section,
    ctaLabel: label,
  };
}

export function resolveIndustryDetailExplore(
  section: Omit<ComponentProps<typeof IndustryExploreSection>, 'title'> | undefined
) {
  if (!section) {
    return undefined;
  }

  return {
    ...section,
    ctaLabel: 'View Service',
  };
}