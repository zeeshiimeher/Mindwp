import { AlertCircle } from 'lucide-react';

import { AlertList } from '@/components/reusable/single/AlertList';
import { cn } from '@/components/ui/utils';

import { ResourceSectionHeader } from './ResourceSectionHeader';

export interface ResourceProblemSectionProps {
  heading: string;
  description: string[];
  causes?: string[];
  causesHeading?: string;
  className?: string;
}

export function ResourceProblemSection({
  heading,
  description,
  causes,
  causesHeading = 'Common Causes:',
  className = '',
}: ResourceProblemSectionProps) {
  const BLOCK = 'infrastructure-gaps';

  return (
    <section className={cn(BLOCK, className)}>
      <ResourceSectionHeader icon={AlertCircle} title={heading} variant='problem' />

      <div className={`${BLOCK}__description`}>
        {description.map((paragraph, index) => (
          <p key={index} className={`${BLOCK}__paragraph`}>
            {paragraph}
          </p>
        ))}
      </div>

      {causes && causes.length > 0 && (
        <div className={`${BLOCK}__causes`}>
          <AlertList title={causesHeading} items={causes} />
        </div>
      )}
    </section>
  );
}
