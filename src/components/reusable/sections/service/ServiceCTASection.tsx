import { PrimaryCTASection } from '@/components/sections/PrimaryCTASection';
import { buildContactHref } from '@/lib/contact/contactHref';

/**
 * Domain wrapper for PrimaryCTASection that keeps service page composition naming consistent.
 */

export interface ServicePrimaryCTASectionProps {
  heading: {
    title: string;
    description: string;
  };
  slug: string;
}

export function ServicePrimaryCTASection({ heading, slug }: ServicePrimaryCTASectionProps) {
  if (!heading.title || !heading.description) {
    throw new Error('ServicePrimaryCTASection: heading.title and heading.description are required');
  }
  // Fallback to canonical system and provided slug
  const system = 'smart-website-systems';
  return (
    <PrimaryCTASection
      heading={heading}
      actions={[
        {
          label: 'Get Started',
          href: buildContactHref({ system, sourceType: 'service', slug }),
          primary: true,
        },
      ]}
    />
  );
}
