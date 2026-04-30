import {
  PrimaryCTASection,
  type PrimaryCTASectionProps,
} from '@/components/sections/PrimaryCTASection';
import { buildContactHref } from '@/lib/contact/contactHref';

/**
 * Domain wrapper that preserves the existing feature CTA prop shape while routing
 * rendering through PrimaryCTASection.
 */
import { getFeaturePageDataBySlug } from '@/domains/features/registry';

export interface FeaturePrimaryCTASectionProps {
  title: string;
  description?: string;
  slug: string;
}

export function FeaturePrimaryCTASection({ title, description, slug }: FeaturePrimaryCTASectionProps) {
  const featureData = getFeaturePageDataBySlug(slug);
  const system = featureData?.systems?.[0] ?? 'smart-website-systems';
  return (
    <PrimaryCTASection
      heading={{ title, description }}
      actions={[
        {
          label: 'Get Started',
          href: buildContactHref({ system, sourceType: 'feature', slug }),
        },
      ]}
    />
  );
}
