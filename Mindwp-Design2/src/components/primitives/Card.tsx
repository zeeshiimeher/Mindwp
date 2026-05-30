import type { ReactNode } from 'react';

import { cn } from '@/lib/cn';

/** Soft white card with an optional colored top border accent. */
export function Card({
  topBorder,
  className,
  children,
}: {
  topBorder?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-[#e6eef3] bg-white p-6 shadow-[0_8px_24px_rgba(8,17,31,0.06)]',
        className
      )}
      style={topBorder ? { borderTop: `3px solid ${topBorder}` } : undefined}
    >
      {children}
    </div>
  );
}
