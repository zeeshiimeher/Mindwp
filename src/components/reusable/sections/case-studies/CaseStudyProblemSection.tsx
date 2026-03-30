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

  const parts = [painPoint.title, painPoint.before, painPoint.after, painPoint.description].filter(
    (value): value is string => typeof value === 'string' && value.trim().length > 0
  );

  return parts.join(' — ');
}

export function CaseStudyProblemSection({
  challengeBadgeLabel,
  problemHeading,
  problemDescription,
  painPoints,
}: CaseStudyProblemSectionProps) {
  return (
    <section className='case-study-detail-problem'>
      <div className='l-container'>
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
      </div>
    </section>
  );
}
