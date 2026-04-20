import { AlertCircle } from 'lucide-react';

import { SectionWrapper } from '@/components/reusable/primitives';
import { AlertCard } from '@/components/reusable/single/AlertCard';
import { cn } from '@/components/ui/utils';

import { ResourceSectionHeader } from './ResourceSectionHeader';

const BLOCK = 'business-costs-section';

export interface ResourceBusinessCostsSectionProps {
  heading: string;
  subheading?: string;
  items: string[];
  className?: string;
}

export function ResourceBusinessCostsSection({
  heading,
  subheading,
  items,
  className = '',
}: ResourceBusinessCostsSectionProps) {
  return (
    <SectionWrapper padding='none' container='none' className={cn(BLOCK, className)}>
      <ResourceSectionHeader
        icon={AlertCircle}
        title={heading}
        {...(subheading !== undefined && { subtitle: subheading })}
        variant='business-costs'
      />

      <div className={`${BLOCK}__grid`}>
        {items.map((cost, index) => (
          <AlertCard key={index}>
            <p className={`${BLOCK}__item-text`}>{cost}</p>
          </AlertCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
