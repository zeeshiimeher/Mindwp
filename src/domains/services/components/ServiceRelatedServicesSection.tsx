import { RelatedCardsSection } from '@/components/reusable/sections/core/RelatedCardsSection';
import { RelatedSectionCTA } from '@/components/reusable/single/RelatedSectionCTA';
import { getRelatedContent } from '@/lib/graph/query';

type ServiceRelatedServicesSectionProps = {
  serviceSlug: string;
  cssPrefix?: string;
};

export function ServiceRelatedServicesSection({
  serviceSlug,
  cssPrefix = 'service-related-insights',
}: ServiceRelatedServicesSectionProps) {
  const relatedServices = getRelatedContent(serviceSlug, 'service').services;

  if (relatedServices.length === 0) return null;

  return (
    <>
      <RelatedCardsSection
        title='Systems That Work Together'
        description='Related services that support this system and connect to your wider operational structure.'
        items={relatedServices.map(item => ({
          title: item.title,
          desc: item.description,
          href: item.path,
        }))}
        cssPrefix={cssPrefix}
        showArrows
      />
      <RelatedSectionCTA />
    </>
  );
}
