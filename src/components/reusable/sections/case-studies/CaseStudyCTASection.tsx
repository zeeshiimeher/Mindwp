import {
  PrimaryCTASection,
  type PrimaryCTASectionProps,
} from '@/components/sections/PrimaryCTASection';
/**
 * Domain wrapper for PrimaryCTASection with the existing case-study CTA prop shape.
 * Keeps case-study page composition naming consistent.
 */
import { CASE_STUDY_REGISTRY } from '@/domains/case-studies/registry';
import { buildContactHref } from '@/lib/contact/contactHref';

export interface CaseStudyPrimaryCTASectionProps {
  title: string;
  description: string;
  slug: string;
}

export function CaseStudyPrimaryCTASection({
  title,
  description,
  slug,
}: CaseStudyPrimaryCTASectionProps) {
  const caseStudy = CASE_STUDY_REGISTRY[slug];
  const system = caseStudy?.systems?.[0] ?? 'smart-website-systems';
  return (
    <PrimaryCTASection
      heading={{ title, description }}
      actions={[
        {
          label: 'Get Started',
          href: buildContactHref({ system, sourceType: 'case-study', slug }),
        },
      ]}
    />
  );
}
