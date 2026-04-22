import { IndustryExploreSection } from '@/components/reusable/sections/industries';
import { getCategoryIndexPage, type IndustryCategory } from '@/domains/industries/catalog';
import { getSubIndustryCardsForCategory } from '@/domains/industries/utils';

type Props = {
  category: IndustryCategory;
  cssPrefix?: string;
  description?: string;
};

export function IndustrySubIndustriesSection({ category, cssPrefix, description }: Props) {
  const cards = getSubIndustryCardsForCategory(category, { iconStrategy: 'category' });
  if (cards.length === 0) return null;

  const columns = Math.min(3, cards.length) as 1 | 2 | 3;
  const categoryIndex = getCategoryIndexPage(category);
  const categoryName = categoryIndex?.name ?? category;
  const categoryLandingSubtitle = categoryIndex?.landingSubtitle?.trim();
  const title = `${categoryName} ${cards.length === 1 ? 'Sub-Industry' : 'Sub-Industries'}`;
  const computedDescription =
    description ??
    (categoryLandingSubtitle
      ? `Explore ${categoryLandingSubtitle}. Browse ${cards.length} ${cards.length === 1 ? 'page' : 'pages'} in this category.`
      : `Browse ${cards.length} ${cards.length === 1 ? 'page' : 'pages'} in this category.`);

  return (
    <IndustryExploreSection
      badge='Browse Pages'
      title={title}
      description={computedDescription}
      cards={cards}
      backgroundColor='bg-muted/20'
      cssPrefix={cssPrefix ?? `${category}-subindustries`}
      columns={columns}
      ctaLabel='View Page'
    />
  );
}
