import { SectionWrapper } from '@/components/reusable/primitives/SectionWrapper';
import { Card } from '@/components/reusable/single/Card';
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
    metric?: string;
    before?: string;
    after?: string;
    improvement?: string;
    title?: string;
    description: string;
  }[];
}

function hasComparisonFields(result: CaseStudyResultsSectionProps['results'][number]) {
  return Boolean(result.metric && result.before && result.after && result.improvement);
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
        {results.map((result, index) => {
          if (hasComparisonFields(result)) {
            return (
              <BeforeAfterMetricCard
                key={`${result.metric}-${result.improvement}`}
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
            );
          }

          return (
            <Card key={result.title ?? result.metric ?? `narrative-result-${index}`}>
              {result.title || result.metric ? (
                <h3 className='results-comparison-card__metric-value'>
                  {result.title ?? result.metric}
                </h3>
              ) : null}
              {result.improvement ? (
                <p className='results-comparison-card__improvement-value'>{result.improvement}</p>
              ) : null}
              <p className='results-comparison-card__description'>{result.description}</p>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
