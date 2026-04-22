import { ReactNode } from 'react';

import { cn } from '@/components/ui/utils';

export interface CalloutProps {
  children: ReactNode;
  type?: 'info' | 'success' | 'warning' | 'error';
  className?: string;
}

export function Callout({ children, type = 'info', className = '' }: CalloutProps) {
  return <div className={cn('callout', `callout--${type}`, className)}>{children}</div>;
}
