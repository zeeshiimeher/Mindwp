import { Card } from '@/components/reusable/single/Card';
import { cn } from '@/components/ui/utils';

const BLOCK = 'diy-step-card';

export interface ActionStepCardProps {
  step: number;
  title: string;
  action: string;
  expectedResult: string;
  actionLabel?: string;
  expectedResultLabel?: string;
  className?: string;
}

export function ActionStepCard({
  step,
  title,
  action,
  expectedResult,
  actionLabel = 'Action:',
  expectedResultLabel = 'Expected Result:',
  className = '',
}: ActionStepCardProps) {
  return (
    <Card className={cn(BLOCK, className)}>
      <div className={`${BLOCK}__row`}>
        <div className={`${BLOCK}__step`}>{step}</div>

        <div className={`${BLOCK}__content`}>
          <h3 className={`${BLOCK}__title`}>{title}</h3>

          <div className={`${BLOCK}__details`}>
            <div className={`${BLOCK}__detail`}>
              <span className={`${BLOCK}__label ${BLOCK}__label--action`}>{actionLabel}</span>
              <p className={`${BLOCK}__text`}>{action}</p>
            </div>

            <div className={`${BLOCK}__detail`}>
              <span className={`${BLOCK}__label ${BLOCK}__label--result`}>
                {expectedResultLabel}
              </span>
              <p className={`${BLOCK}__text`}>{expectedResult}</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
