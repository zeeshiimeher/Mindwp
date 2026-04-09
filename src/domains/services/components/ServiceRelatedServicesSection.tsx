import { RelatedCardsSection } from '@/components/reusable/sections/core/RelatedCardsSection';
import { RelatedSectionCTA } from '@/components/reusable/single/RelatedSectionCTA';

type ServiceRelatedServicesSectionProps = {
  items: Array<{
    title: string;
    desc: string;
    href: string;
  }>;
  cssPrefix?: string;
};

export function ServiceRelatedServicesSection({
  items,
  cssPrefix = 'service-related-insights',
}: ServiceRelatedServicesSectionProps) {
  if (items.length === 0) return null;

  return (
    <>
      <RelatedCardsSection
        title='Systems That Work Together'
        description='Related services that support this system and connect to your wider operational structure.'
        items={items}
        cssPrefix={cssPrefix}
        showArrows
      />
      <RelatedSectionCTA />
    </>
  );
}
