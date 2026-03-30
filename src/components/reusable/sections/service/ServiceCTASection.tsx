import React from 'react';

import { CTASection } from '@/components/reusable/single/CTASection';

/**
 * Domain wrapper for `CTASection` with unchanged props.
 * Keeps service page composition naming consistent.
 */
export type ServiceCTASectionProps = React.ComponentProps<typeof CTASection>;

export function ServiceCTASection(props: ServiceCTASectionProps) {
  return <CTASection {...props} />;
}
