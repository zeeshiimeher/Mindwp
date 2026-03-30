import type { ComponentType } from 'react';

import {
  getCategoryIndexPage,
  getIndustriesByCategory,
  type IndustryCategory,
} from '@/domains/industries/catalog';

type ExploreCard = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  href: string;
  gradient: string;
  iconBg: string;
};

const DEFAULT_CARD_STYLE = {
  gradient: 'from-background to-muted/40',
  iconBg: 'bg-primary',
};

const MIN_DESCRIPTION_LENGTH = 12;

type IconStrategy = 'subIndustry' | 'category';

type GetSubIndustryCardsOptions = {
  iconStrategy?: IconStrategy;
};

function getIndustryCardDescription(
  industry: {
    name: string;
    landingSubtitle?: string;
    description: string;
  },
  categoryName: string
): string {
  const candidate = (industry.landingSubtitle ?? industry.description).trim();

  if (candidate.length >= MIN_DESCRIPTION_LENGTH) return candidate;

  // Fallback to keep the grid complete even if copy is thin.
  return `Explore ${industry.name} within ${categoryName}.`;
}

export function getSubIndustryCardsForCategory(
  category: IndustryCategory,
  options: GetSubIndustryCardsOptions = {}
): ExploreCard[] {
  const iconStrategy: IconStrategy = options.iconStrategy ?? 'subIndustry';
  const categoryIndex = getCategoryIndexPage(category);
  const categoryIcon = categoryIndex?.icon;
  const categoryName = categoryIndex?.name ?? category;

  const subIndustries = getIndustriesByCategory(category)
    .filter(i => i.slug !== i.category)
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name));

  return subIndustries.map(industry => {
    if (import.meta.env?.DEV && !industry.href.startsWith('/industries/')) {
      // eslint-disable-next-line no-console
      console.warn(
        `[industries] sub-industry href should start with /industries/: ${industry.href} (${industry.slug})`
      );
    }

    const description = getIndustryCardDescription(industry, categoryName);
    return {
      icon: iconStrategy === 'category' && categoryIcon ? categoryIcon : industry.icon,
      title: industry.name,
      description,
      href: industry.href,
      ...DEFAULT_CARD_STYLE,
    };
  });
}
