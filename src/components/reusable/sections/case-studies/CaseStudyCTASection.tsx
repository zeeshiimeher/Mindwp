import React from 'react';

import { CTASection } from '@/components/reusable/single/CTASection';

/**
 * Domain wrapper for `CTASection` with unchanged props.
 * Keeps case-study page composition naming consistent.
 */
export type CaseStudyCTASectionProps = React.ComponentProps<typeof CTASection>;

export function CaseStudyCTASection(props: CaseStudyCTASectionProps) {
  return <CTASection {...props} />;
}
