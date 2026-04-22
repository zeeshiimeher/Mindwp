import React from 'react';

import { Card } from '@/components/reusable/single/Card';
import { cn } from '@/components/ui/utils';

const BLOCK = 'solution-card';

export interface SolutionCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  className?: string;
}

export function SolutionDetailCard({
  title,
  description,
  icon: Icon,
  className = '',
}: SolutionCardProps) {
  return (
    <Card className={cn(BLOCK, className)}>
      <div className={cn(`${BLOCK}__icon`, 'icon-container-md', 'icon-bg-primary')}>
        <Icon className='icon-text-primary' aria-hidden='true' />
      </div>
      <h3 className={`${BLOCK}__title`}>{title}</h3>
      <p className={`${BLOCK}__desc`}>{description}</p>
    </Card>
  );
}
