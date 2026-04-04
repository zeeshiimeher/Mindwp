import type { ReactNode } from 'react';

import { cn } from '@/components/ui/utils';

const GAP_MAP = {
  2: 'l-gap-2',
  3: 'l-gap-3',
  4: 'l-gap-4',
  6: 'l-gap-6',
  8: 'l-gap-8',
} as const;

export interface StackProps {
  /** Vertical gap between children. @default 4 */
  gap?: keyof typeof GAP_MAP;
  /** Additive className */
  className?: string;
  children: ReactNode;
}

export function Stack({ gap = 4, className = '', children }: StackProps) {
  return <div className={cn('l-stack-flex', GAP_MAP[gap], className)}>{children}</div>;
}
