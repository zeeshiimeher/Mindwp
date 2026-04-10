import type { ComponentProps } from 'react';

import { RelatedCardsSection } from '@/components/reusable/sections/core/RelatedCardsSection';
import { IndustryPathwaysSection } from '@/components/reusable/sections/industries';
import type { IndustryCategory } from '@/domains/industries/catalog';
import { IndustryExploreSection } from '@/domains/industries/components/IndustryExploreSection';

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
    smartCta: {
      system,
      pageType: 'industry' as const,
      slug,
    },
    packages: section.packages.map((pkg, index) => ({
      ...pkg,
      ctaVariant: index === 1 || pkg.popular ? 'primary' : 'outline',
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
