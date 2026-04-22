import { ReactNode } from 'react';
import { AlertCircle } from 'lucide-react';

import { Card } from '@/components/reusable/single/Card';
import { cn } from '@/components/ui/utils';

const BLOCK = 'error-card';

export interface AlertCardProps {
  children: ReactNode;
  className?: string;
}

export function AlertCard({ children, className = '' }: AlertCardProps) {
  return (
    <Card className={cn(BLOCK, className)}>
      <div className={`${BLOCK}__row`}>
        <AlertCircle className={`${BLOCK}__icon`} aria-hidden='true' />
        {children}
      </div>
    </Card>
  );
}
