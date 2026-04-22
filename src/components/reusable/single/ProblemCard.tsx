import { Card } from '@/components/reusable/single/Card';
import { cn } from '@/components/ui/utils';

const BLOCK = 'pain-point-card';

/**
 * ProblemCard - Card for a single pain point or problem statement
 *
 * Displays text with a visual negative marker for problem-focused sections.
 */
export interface ProblemCardProps {
  /** The pain point text to display */
  children: string;

  /**
   * Additional class(es) for the root element.
   *
   * Note: The component always applies its internal BEM block class (`pain-point-card`).
   * This prop is additive and will not change the BEM base.
   */
  cssPrefix?: string;
}

export function ProblemCard({ children, cssPrefix = '' }: ProblemCardProps) {
  return (
    <Card className={cn(BLOCK, cssPrefix)}>
      <div className={`${BLOCK}__content`}>
        <div className={`${BLOCK}__icon`}>
          <span className={`${BLOCK}__icon-text`}>✗</span>
        </div>
        <span className={`${BLOCK}__text`}>{children}</span>
      </div>
    </Card>
  );
}
