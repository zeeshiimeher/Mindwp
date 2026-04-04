import { Award } from 'lucide-react';

import { SectionWrapper } from '@/components/reusable/primitives';
import { Badge } from '@/components/reusable/single/Badge';
import { Card } from '@/components/reusable/single/Card';
import { cn } from '@/components/ui/utils';

import { ResourceSectionHeader } from './ResourceSectionHeader';

const BLOCK = 'case-section';

export interface CaseExample {
  businessType: string;
  problem: string;
  solution: string;
  result: string;
  stat?: string;
}

export interface ResourceCaseSectionProps {
  heading: string;
  subheading?: string;
  caseExample: CaseExample;
  challengeHeading?: string;
  solutionHeading?: string;
  resultHeading?: string;
  className?: string;
}

export function ResourceCaseSection({
  heading,
  subheading,
  caseExample,
  challengeHeading = 'The Challenge',
  solutionHeading = 'The Solution',
  resultHeading = 'The Result',
  className = '',
}: ResourceCaseSectionProps) {
  return (
    <SectionWrapper padding='none' container='none' className={cn(BLOCK, className)}>
      <ResourceSectionHeader
        icon={Award}
        title={heading}
        {...(subheading !== undefined && { subtitle: subheading })}
        variant='case'
      />

      <Card className={`${BLOCK}__card`}>
        <div className={`${BLOCK}__stack`}>
          <div>
            <div className={`${BLOCK}__badge`}>
              <Badge variant='primary'>{caseExample.businessType}</Badge>
            </div>
            <h3 className={`${BLOCK}__title`}>{challengeHeading}</h3>
            <p className={`${BLOCK}__text`}>{caseExample.problem}</p>
          </div>

          <div className={`${BLOCK}__divider`} />

          <div>
            <h3 className={`${BLOCK}__title`}>{solutionHeading}</h3>
            <p className={`${BLOCK}__text`}>{caseExample.solution}</p>
          </div>

          <div className={`${BLOCK}__divider`} />

          <div>
            <h3 className={`${BLOCK}__title`}>{resultHeading}</h3>
            <p className={`${BLOCK}__text ${BLOCK}__text--result`}>{caseExample.result}</p>
            {caseExample.stat && (
              <div className={`${BLOCK}__stat`}>
                <p className={`${BLOCK}__stat-text`}>{caseExample.stat}</p>
              </div>
            )}
          </div>
        </div>
      </Card>
    </SectionWrapper>
  );
}
