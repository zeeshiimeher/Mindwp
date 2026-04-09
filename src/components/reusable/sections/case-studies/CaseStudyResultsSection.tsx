import { SectionWrapper } from '@/components/reusable/primitives/SectionWrapper';
import { BeforeAfterMetricCard, SectionIntro } from '@/components/reusable/single';

const DEFAULT_LABELS = {
  metric: 'Metric',
  before: 'Before',
  after: 'After',
  improvement: 'Improvement',
} as const;

export interface CaseStudyResultsSectionProps {
  detailedResultsBadgeLabel: string;
  detailedResultsSectionTitle: string;
  results: {
    metric: string;
    before: string;
    after: string;
    improvement: string;
    description: string;
  }[];
}

export function CaseStudyResultsSection({
  detailedResultsBadgeLabel,
  detailedResultsSectionTitle,
  results,
}: CaseStudyResultsSectionProps) {
  return (
    <SectionWrapper padding='none' className='case-study-detail-results'>
      <SectionIntro
        badge={detailedResultsBadgeLabel}
        title={detailedResultsSectionTitle}
        cssPrefix='case-study-detail-results-header'
      />

      <div className='case-study-detail-results__stack'>
        {results.map((result, index) => (
          <BeforeAfterMetricCard
            key={index}
            metric={result.metric}
            before={result.before}
            after={result.after}
            improvement={result.improvement}
            description={result.description}
            metricLabel={DEFAULT_LABELS.metric}
            beforeLabel={DEFAULT_LABELS.before}
            afterLabel={DEFAULT_LABELS.after}
            improvementLabel={DEFAULT_LABELS.improvement}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
