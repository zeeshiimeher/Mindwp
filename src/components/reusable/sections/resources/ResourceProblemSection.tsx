import { type ReactNode } from 'react';
import { AlertCircle } from 'lucide-react';

import { SectionWrapper } from '@/components/reusable/primitives';
import { AlertList } from '@/components/reusable/single/AlertList';
import { cn } from '@/components/ui/utils';

import { ResourceSectionHeader } from './ResourceSectionHeader';

export interface ResourceProblemSectionProps {
  heading: string;
  description: string[];
  causes?: string[];
  causesHeading?: string;
  className?: string;
  renderParagraph?: (paragraph: string, index: number, className: string) => ReactNode;
}

export function ResourceProblemSection({
  heading,
  description,
  causes,
  causesHeading = 'Common Causes:',
  className = '',
  renderParagraph,
}: ResourceProblemSectionProps) {
  const BLOCK = 'infrastructure-gaps';

  return (
    <SectionWrapper padding='none' container='none' className={cn(BLOCK, className)}>
      <ResourceSectionHeader icon={AlertCircle} title={heading} variant='problem' />

      <div className={`${BLOCK}__description`}>
        {description.map((paragraph, index) =>
          renderParagraph ? (
            renderParagraph(paragraph, index, `${BLOCK}__paragraph`)
          ) : (
            <p key={index} className={`${BLOCK}__paragraph`}>
              {paragraph}
            </p>
          )
        )}
      </div>

      {causes && causes.length > 0 && (
        <div className={`${BLOCK}__causes`}>
          <AlertList title={causesHeading} items={causes} />
        </div>
      )}
    </SectionWrapper>
  );
}
