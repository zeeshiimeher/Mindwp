import type { ReactNode } from 'react';

import { cn } from '@/components/ui/utils';

const RATIO_MAP = {
  '50/50': 'l-grid-2',
  '60/40': 'l-split-60-40',
  '40/60': 'l-split-40-60',
  '50/70': 'l-split-50-70',
} as const;

const GAP_MAP = {
  0: '',
  6: 'l-gap-6',
  8: 'l-gap-8',
  12: 'l-gap-12',
} as const;

const ALIGN_MAP = {
  start: 'l-items-start',
  center: 'l-items-center',
  stretch: 'l-items-stretch',
} as const;

export interface SplitLayoutProps {
  /** Column ratio at desktop. @default '50/50' */
  ratio?: keyof typeof RATIO_MAP;
  /** Gap between columns. @default 8 */
  gap?: keyof typeof GAP_MAP;
  /** Breakpoint at which the split activates. @default 'md' */
  breakpoint?: 'md' | 'lg';
  /** Vertical alignment. @default 'start' */
  align?: keyof typeof ALIGN_MAP;
  /** Reverse column order on desktop. @default false */
  reverse?: boolean;
  /** Additive className */
  className?: string;
  /** Expects exactly 2 children */
  children: ReactNode;
}

export function SplitLayout({
  ratio = '50/50',
  gap = 8,
  breakpoint = 'md',
  align = 'start',
  reverse = false,
  className = '',
  children,
}: SplitLayoutProps) {
  return (
    <div
      className={cn(
        'l-grid',
        GAP_MAP[gap],
        `${breakpoint}:${RATIO_MAP[ratio]}`,
        ALIGN_MAP[align],
        reverse && 'l-split-reverse',
        className
      )}
    >
      {children}
    </div>
  );
}
