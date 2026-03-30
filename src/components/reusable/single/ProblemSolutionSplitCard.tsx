import React from 'react';
import { ArrowRight } from 'lucide-react';

import { Badge } from '@/components/reusable/single/Badge';
import { Card } from '@/components/reusable/single/Card';
import { cn } from '@/components/ui/utils';

const BLOCK = 'problem-solution';

interface ProblemSolutionCardProps {
  icon: React.ComponentType<{ className?: string }>;
  badge: string;
  title: string;
  description: string;
  solution: string;
  /**
   * Additional class(es) for the root element.
   *
   * Note: The component always applies its internal BEM block class (`problem-solution`).
   * This prop is additive and will not change the BEM base.
   */
  cssPrefix?: string;
}

export function ProblemSolutionSplitCard({
  icon: Icon,
  badge,
  title,
  description,
  solution,
  cssPrefix = '',
}: ProblemSolutionCardProps) {
  return (
    <Card className={cn(BLOCK, cssPrefix)}>
      <div className={`${BLOCK}__content`}>
        {/* Icon and Badge */}
        <div className={`${BLOCK}__head`}>
          <div className={`${BLOCK}__icon icon-container-lg icon-bg-primary`}>
            <Icon className={`${BLOCK}__icon-svg icon-text-primary`} />
          </div>
          <Badge cssPrefix='badge--card badge-alert'>{badge}</Badge>
        </div>

        {/* Title */}
        <h3 className={`${BLOCK}__heading`}>{title}</h3>

        {/* Description */}
        <p className={`${BLOCK}__text`}>{description}</p>

        {/* Solution */}
        <div className={`${BLOCK}__divider`}>
          <div className={`${BLOCK}__solution-row`}>
            <div className={`${BLOCK}__bullet icon-bg-accent`}>
              <ArrowRight className={`${BLOCK}__bullet-arrow icon-text-accent`} />
            </div>
            <p className={`${BLOCK}__solution`}>{solution}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
