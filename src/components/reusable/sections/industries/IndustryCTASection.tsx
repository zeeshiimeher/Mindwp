import React from 'react';

import { CTASection } from '@/components/reusable/single/CTASection';

/**
 * Domain wrapper for `CTASection` with unchanged props.
 * Keeps industry page composition naming consistent.
 */
export type IndustryCTASectionProps = React.ComponentProps<typeof CTASection>;

export function IndustryCTASection(props: IndustryCTASectionProps) {
  return <CTASection {...props} />;
}
