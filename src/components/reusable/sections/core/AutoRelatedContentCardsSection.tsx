import type { RelatedCardsSectionProps } from '@/components/reusable/sections/core/RelatedCardsSection';
import { RelatedCardsSection } from '@/components/reusable/sections/core/RelatedCardsSection';

type AutoRelatedContentCardsSectionProps = Omit<RelatedCardsSectionProps, 'styleVariant'>;

export function AutoRelatedContentCardsSection(props: AutoRelatedContentCardsSectionProps) {
  return <RelatedCardsSection {...props} styleVariant='default' />;
}
