import type { PrimaryCTASectionProps } from '@/components/sections/PrimaryCTASection';
import { PrimaryCTASection } from '@/components/sections/PrimaryCTASection';
import { buildContactHref } from '@/lib/contact/contactHref';

/**
 * Domain wrapper for PrimaryCTASection that keeps service page composition naming consistent.
 */
export interface ServicePrimaryCTASectionProps {
  title: string;
  description?: string;
  slug: string;
}

export function ServicePrimaryCTASection({ title, description, slug }: ServicePrimaryCTASectionProps) {
  // Fallback to canonical system and provided slug
  const system = 'smart-website-systems';
  return (
    <PrimaryCTASection
      heading={{ title, description }}
      actions={[
        {
          label: 'Get Started',
          href: buildContactHref({ system, sourceType: 'service', slug }),
        },
      ]}
    />
  );
}
