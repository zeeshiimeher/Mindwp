import React from 'react';
import { CheckCircle2 } from 'lucide-react';

import { Card } from '@/components/reusable/single/Card';
import { cn } from '@/components/ui/utils';

const BLOCK = 'highlight-card';

export interface HighlightCardProps {
  title: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
  className?: string;
}

export function HighlightCard({
  title,
  description,
  icon: Icon = CheckCircle2,
  className = '',
}: HighlightCardProps) {
  return (
    <Card className={cn(BLOCK, className)}>
      <div className={`${BLOCK}__row`}>
        <Icon className={`${BLOCK}__icon`} aria-hidden='true' />
        <div>
          <h3 className={`${BLOCK}__title`}>{title}</h3>
          <p className={`${BLOCK}__desc`}>{description}</p>
        </div>
      </div>
    </Card>
  );
}
