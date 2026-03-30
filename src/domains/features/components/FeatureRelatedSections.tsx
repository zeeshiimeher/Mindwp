import { RelatedCardsSection } from '@/components/reusable/sections/core/RelatedCardsSection';
import { RelatedSectionCTA } from '@/components/reusable/single/RelatedSectionCTA';
import { getRelatedContent } from '@/lib/graph/query';

type FeatureRelatedSectionsProps = {
  featureSlug: string;
  cssPrefix?: string;
};

export function FeatureSupportingFrameworksSection({
  featureSlug: _featureSlug,
  cssPrefix: _cssPrefix,
}: FeatureRelatedSectionsProps) {
  return null;
}

export function FeatureImplementationServicesSection({
  featureSlug,
  cssPrefix,
}: FeatureRelatedSectionsProps) {
  const relatedServices = getRelatedContent(featureSlug, 'feature').services;

  if (relatedServices.length === 0) return null;

  return (
    <>
      <RelatedCardsSection
        title='Services That Implement This'
        description='Implementation services that bring this capability into your day-to-day operations.'
        items={relatedServices.map(item => ({
          title: item.title,
          desc: item.description,
          href: item.path,
        }))}
        cssPrefix={cssPrefix}
      />
      <RelatedSectionCTA />
    </>
  );
}
