import { PrimaryCTASection } from '@/components/sections/PrimaryCTASection';
import { buildContactHref } from '@/lib/contact/contactHref';

/**
 * Domain wrapper for PrimaryCTASection with the existing industry CTA prop shape.
 * Keeps industry page composition naming consistent.
 */

export interface IndustryPrimaryCTASectionProps {
  heading: {
    title: string;
    description: string;
  };
  slug: string;
}

export function IndustryPrimaryCTASection({ heading, slug }: IndustryPrimaryCTASectionProps) {
  if (!heading.title || !heading.description) {
    throw new Error('IndustryPrimaryCTASection: heading.title and heading.description are required');
  }
  // Use the industry slug for both system and slug as fallback
  return (
    <PrimaryCTASection
      heading={heading}
      actions={[
        {
          label: 'Get Started',
          href: buildContactHref({ system: slug, sourceType: 'industry', slug }),
        },
      ]}
    />
  );
}
