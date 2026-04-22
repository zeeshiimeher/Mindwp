import { Card } from '@/components/reusable/single/Card';
import { cn } from '@/components/ui/utils';

const BLOCK = 'results-comparison-card';

/**
 * BeforeAfterMetricCard - Card component for displaying before/after metrics comparison
 *
 * Displays one metric row with before/after values, improvement text, and description.
 */
export interface BeforeAfterMetricCardProps {
  /** The metric being measured */
  metric: string;

  /** Value before the improvement */
  before: string;

  /** Value after the improvement */
  after: string;

  /** Description of the improvement */
  improvement: string;

  /** Detailed explanation of the result */
  description: string;

  /** Label for the metric column */
  metricLabel: string;

  /** Label for the before column */
  beforeLabel: string;

  /** Label for the after column */
  afterLabel: string;

  /** Label for the improvement column */
  improvementLabel: string;

  /**
   * Additional class(es) for the root element.
   *
   * Note: The component always applies its internal BEM block class (`results-comparison-card`).
   * This prop is additive and will not change the BEM base.
   */
  cssPrefix?: string;
}

export function BeforeAfterMetricCard({
  metric,
  before,
  after,
  improvement,
  description,
  metricLabel,
  beforeLabel,
  afterLabel,
  improvementLabel,
  cssPrefix = '',
}: BeforeAfterMetricCardProps) {
  return (
    <Card className={cn(BLOCK, cssPrefix)}>
      <div className={`${BLOCK}__grid`}>
        <div className={`${BLOCK}__metric`}>
          <div className={`${BLOCK}__metric-label`}>{metricLabel}</div>
          <div className={`${BLOCK}__metric-value`}>{metric}</div>
        </div>
        <div className={`${BLOCK}__before`}>
          <div className={`${BLOCK}__before-label`}>{beforeLabel}</div>
          <div className={`${BLOCK}__before-value`}>{before}</div>
        </div>
        <div className={`${BLOCK}__after`}>
          <div className={`${BLOCK}__after-label`}>{afterLabel}</div>
          <div className={`${BLOCK}__after-value`}>{after}</div>
        </div>
        <div className={`${BLOCK}__improvement`}>
          <div className={`${BLOCK}__improvement-label`}>{improvementLabel}</div>
          <div className={`${BLOCK}__improvement-value`}>{improvement}</div>
        </div>
      </div>
      <p className={`${BLOCK}__description`}>{description}</p>
    </Card>
  );
}
