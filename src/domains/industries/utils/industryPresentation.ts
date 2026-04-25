import type { ComponentProps } from 'react';

import { RelatedCardsSection } from '@/components/reusable/sections/core/RelatedCardsSection';
import { IndustryPathwaysSection } from '@/components/reusable/sections/industries';
import type { IndustryCategory } from '@/domains/industries/catalog';
import { IndustryExploreSection } from '@/domains/industries/components/IndustryExploreSection';
import { INDUSTRY_REGISTRY } from '@/domains/industries/registry';

const toLabelFromSlug = (value: string) =>
  value
    .replace(/[-/]+/g, ' ')
    .trim()
    .replace(/\b\w/g, char => char.toUpperCase());

function resolveIndustryCategoryDetailRouteItems(
  category: IndustryCategory,
  existingItems: ComponentProps<typeof RelatedCardsSection>['items']
) {
  const existingItemByHref = new Map(
    existingItems
      .filter(item => typeof item.href === 'string' && item.href.length > 0)
      .map(item => [item.href as string, item])
  );

  const derivedItems = Object.values(INDUSTRY_REGISTRY)
    .filter(
      entry => entry.type === 'detail' && entry.parentSlug === category && !!entry.seo.canonical
    )
    .sort((left, right) => left.seo.canonical.localeCompare(right.seo.canonical))
    .map(entry => {
      const existingItem = existingItemByHref.get(entry.seo.canonical);

      return {
        ...existingItem,
        title: existingItem?.title ?? toLabelFromSlug(entry.slug),
        description:
          existingItem?.description ??
          existingItem?.desc ??
          entry.hero.description ??
          entry.seo.description,
        href: entry.seo.canonical,
      };
    });

  return derivedItems.length > 0 ? derivedItems : existingItems;
}

export function resolveIndustryPathwaySection(
  section: ComponentProps<typeof IndustryPathwaysSection> | undefined,
  system: string,
  slug: string,
  pageType: 'industry-detail' | 'industry-category'
) {
  if (!section) {
    return undefined;
  }

  return {
    ...section,
    heroActions: {
      system,
      pageType,
      slug,
      intent: 'comparison' as const,
      position: 'mid' as const,
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
    items: resolveIndustryCategoryDetailRouteItems(category, section.items),
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
