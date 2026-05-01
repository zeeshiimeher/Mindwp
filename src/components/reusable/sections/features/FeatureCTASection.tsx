import { PrimaryCTASection } from '@/components/sections/PrimaryCTASection';
/**
 * Domain wrapper that preserves the existing feature CTA prop shape while routing
 * rendering through PrimaryCTASection.
 */
import { getFeaturePageDataBySlug } from '@/domains/features/registry';
import { buildContactHref } from '@/lib/contact/contactHref';

export interface FeaturePrimaryCTASectionProps {
  heading: {
    title: string;
    description: string;
  };
  slug: string;
}

export function FeaturePrimaryCTASection({ heading, slug }: FeaturePrimaryCTASectionProps) {
  if (!heading.title || !heading.description) {
    throw new Error('FeaturePrimaryCTASection: heading.title and heading.description are required');
  }
  const featureData = getFeaturePageDataBySlug(slug);
  const system = featureData?.systems?.[0] ?? 'smart-website-systems';
  return (
    <PrimaryCTASection
      heading={heading}
      actions={[
        {
          label: 'Get Started',
          href: buildContactHref({ system, sourceType: 'feature', slug }),
          primary: true,
        },
      ]}
    />
  );
}
