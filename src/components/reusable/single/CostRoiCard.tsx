import { Card } from '@/components/reusable/single/Card';
import { cn } from '@/components/ui/utils';

const BLOCK = 'investment-comparison-card';

/**
 * CostRoiCard - Card component for displaying investment costs and ROI
 *
 * Supports two variants: cost breakdown rows or ROI summary content.
 */
export interface InvestmentItem {
  /** Label for the item */
  label: string;
  /** Value to display */
  value: string;
}

export interface CostRoiCardProps {
  /** Card title */
  title: string;

  /** Card variant */
  variant: 'cost' | 'roi';

  /** Items for cost variant */
  items?: InvestmentItem[];

  /** Summary text for ROI variant */
  summary?: string;

  /** Summary label for ROI variant */
  summaryLabel?: string;

  /**
   * Additional class(es) for the root element.
   *
   * Note: The component always applies its internal BEM block class (`investment-comparison-card`).
   * This prop is additive and will not change the BEM base.
   */
  cssPrefix?: string;
}

export function CostRoiCard({
  title,
  variant,
  items = [],
  summary,
  summaryLabel,
  cssPrefix = '',
}: CostRoiCardProps) {
  const rootClassName = cn(BLOCK, variant === 'roi' && `${BLOCK}--roi`, cssPrefix);

  if (variant === 'cost') {
    return (
      <Card className={rootClassName}>
        <h4 className={`${BLOCK}__title`}>{title}</h4>
        <div className={`${BLOCK}__items`}>
          {items.map((item, index) => (
            <div key={index} className={`${BLOCK}__item`}>
              <span className={`${BLOCK}__label`}>{item.label}</span>
              <span className={`${BLOCK}__value`}>{item.value}</span>
            </div>
          ))}
        </div>
      </Card>
    );
  }

  return (
    <Card className={rootClassName}>
      <h4 className={`${BLOCK}__title`}>{title}</h4>
      <div className={`${BLOCK}__summary`}>
        {summaryLabel && <p className={`${BLOCK}__summary-label`}>{summaryLabel}</p>}
        {summary && <p className={`${BLOCK}__summary-value`}>{summary}</p>}
      </div>
    </Card>
  );
}
