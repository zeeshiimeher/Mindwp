import React from 'react';

import { SimpleHero, type SimpleHeroProps } from '@/components/reusable/single/SimpleHero';

/**
 * Domain wrapper for `SimpleHero` with unchanged props.
 * Keeps service page composition naming consistent.
 */
export type ServiceHeroSectionProps = SimpleHeroProps;

export function ServiceHeroSection(props: ServiceHeroSectionProps) {
  return <SimpleHero {...props} />;
}
