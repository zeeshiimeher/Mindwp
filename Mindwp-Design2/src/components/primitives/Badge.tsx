import type { ReactNode } from 'react';

import { cn } from '@/lib/cn';

/** Small uppercase kicker / pill label. */
export function Badge({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-[#e6eef3] bg-[#f6fafc] px-3 py-1 uppercase tracking-[0.14em] text-[#4c5e6f]',
        className
      )}
      style={{ fontSize: '10.5px', fontWeight: 700 }}
    >
      {children}
    </span>
  );
}
