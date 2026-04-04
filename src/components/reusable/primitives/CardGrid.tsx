import type { ReactNode } from 'react';

import { cn } from '@/components/ui/utils';

const GAP_MAP = {
  4: 'l-gap-4',
  6: 'l-gap-6',
  8: 'l-gap-8',
} as const;

/**
 * Responsive column breakpoint strategy:
 * - 1 col: always 1
 * - 2 col: 1 → md:2
 * - 3 col: 1 → md:3
 * - 4 col: 1 → md:2 → lg:4
 * - 6 col: 1 → sm:2 → md:3 → lg:6
 */
const COLUMN_CLASSES = {
  1: '',
  2: 'md:l-grid-2',
  3: 'md:l-grid-3',
  4: 'md:l-grid-2 lg:l-grid-4',
  6: 'sm:l-grid-2 md:l-grid-3 lg:l-grid-6',
} as const;

export interface CardGridProps {
  /** Number of columns at the widest applicable breakpoint. @default 3 */
  columns?: keyof typeof COLUMN_CLASSES;
  /** Gap between grid items. @default 6 */
  gap?: keyof typeof GAP_MAP;
  /**
   * Layout control mode.
   * - `passthrough` — primitives emit layout classes alongside BEM (dual control, BEM wins by cascade).
   * - `controlled` — primitives are the sole source of layout truth; BEM grid classes should be removed.
   * @default 'passthrough'
   */
  mode?: 'passthrough' | 'controlled';
  /** Additive className */
  className?: string;
  children: ReactNode;
}

export function CardGrid({
  columns = 3,
  gap = 6,
  mode = 'passthrough',
  className = '',
  children,
}: CardGridProps) {
  return (
    <div
      className={cn('l-grid', GAP_MAP[gap], COLUMN_CLASSES[columns], className)}
      data-layout-mode={mode}
    >
      {children}
    </div>
  );
}
