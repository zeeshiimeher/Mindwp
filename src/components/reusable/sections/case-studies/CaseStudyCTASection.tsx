import { PrimaryCTASection } from '@/components/sections/PrimaryCTASection';
/**
 * Domain wrapper for PrimaryCTASection with the existing case-study CTA prop shape.
 * Keeps case-study page composition naming consistent.
 */
import { CASE_STUDY_REGISTRY } from '@/domains/case-studies/registry';
import { buildContactHref } from '@/lib/contact/contactHref';

export interface CaseStudyPrimaryCTASectionProps {
  heading: {
    title: string;
    description: string;
  };
  slug: string;
}

export function CaseStudyPrimaryCTASection({ heading, slug }: CaseStudyPrimaryCTASectionProps) {
  if (!heading.title || !heading.description) {
    throw new Error('CaseStudyPrimaryCTASection: heading.title and heading.description are required');
  }
  const caseStudy = CASE_STUDY_REGISTRY[slug];
  const system = caseStudy?.systems?.[0] ?? 'smart-website-systems';
  return (
    <PrimaryCTASection
      heading={heading}
      actions={[
        {
          label: 'Get Started',
          href: buildContactHref({ system, sourceType: 'case-study', slug }),
        },
      ]}
    />
  );
}
