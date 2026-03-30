import { ReactNode } from 'react';
import { AlertCircle } from 'lucide-react';

import { Card } from '@/components/reusable/single/Card';
import { cn } from '@/components/ui/utils';

export interface AlertCardProps {
  children: ReactNode;
  className?: string;
}

export function AlertCard({ children, className = '' }: AlertCardProps) {
  const BLOCK = 'error-card';

  return (
    <Card className={cn(BLOCK, className)}>
      <div className={`${BLOCK}__row`}>
        <AlertCircle className={`${BLOCK}__icon`} aria-hidden='true' />
        {children}
      </div>
    </Card>
  );
}
