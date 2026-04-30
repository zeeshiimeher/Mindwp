import {
  PrimaryCTASection,
  type PrimaryCTASectionProps,
} from '@/components/sections/PrimaryCTASection';
import { buildContactHref } from '@/lib/contact/contactHref';

/**
 * Domain wrapper for PrimaryCTASection with the existing industry CTA prop shape.
 * Keeps industry page composition naming consistent.
 */
export interface IndustryPrimaryCTASectionProps {
  title: string;
  description?: string;
  slug: string;
}

export function IndustryPrimaryCTASection({ title, description, slug }: IndustryPrimaryCTASectionProps) {
  // Use the industry slug for both system and slug as fallback
  return (
    <PrimaryCTASection
      heading={{ title, description }}
      actions={[
        {
          label: 'Get Started',
          href: buildContactHref({ system: slug, sourceType: 'industry', slug }),
        },
      ]}
    />
  );
}
