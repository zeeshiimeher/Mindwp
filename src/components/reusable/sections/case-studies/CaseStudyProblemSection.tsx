import { SectionWrapper } from '@/components/reusable/primitives/SectionWrapper';
import { ProblemCard, SectionIntro } from '@/components/reusable/single';

export interface CaseStudyProblemSectionProps {
  challengeBadgeLabel: string;
  problemHeading: string;
  problemDescription: string[];
  painPoints: Array<
    | string
    | {
        before?: string;
        after?: string;
        title?: string;
        description?: string;
      }
  >;
}

function normalizePainPoint(
  painPoint:
    | string
    | {
        before?: string;
        after?: string;
        title?: string;
        description?: string;
      }
): string {
  if (typeof painPoint === 'string') return painPoint;

  const parts: string[] = [];

  for (const value of [painPoint.title, painPoint.before, painPoint.after, painPoint.description]) {
    if (typeof value === 'string' && value.trim().length > 0) {
      parts.push(value);
    }
  }

  return parts.join(' — ');
}

export function CaseStudyProblemSection({
  challengeBadgeLabel,
  problemHeading,
  problemDescription,
  painPoints,
}: CaseStudyProblemSectionProps) {
  return (
    <SectionWrapper padding='none' className='case-study-detail-problem'>
      <SectionIntro
        badge={challengeBadgeLabel}
        title={problemHeading}
        description={problemDescription.join('\n\n')}
        cssPrefix='case-study-detail-problem-header'
      />

      <div className='case-study-detail-problem__content'>
        <h3 className='case-study-detail-problem__heading'>Key Pain Points:</h3>
        <div className='case-study-detail-problem__grid'>
          {painPoints.map((point, index) => (
            <ProblemCard key={index}>{normalizePainPoint(point)}</ProblemCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
