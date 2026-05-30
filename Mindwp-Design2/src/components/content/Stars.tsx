import { Star } from 'lucide-react';

import { cn } from '@/lib/cn';

/**
 * Illustrative review stars. Decorative only — never paired with a fake
 * rating number or review count. Used beside placeholder "recent verified
 * reviews" labels to show WHERE proof sits on a page, not to claim a score.
 */
export function Stars({
  size = 13,
  color = '#f4b740',
  className,
}: {
  size?: number;
  color?: string;
  className?: string;
}) {
  return (
    <span className={cn('inline-flex items-center gap-0.5', className)} aria-hidden='true'>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={size} fill={color} stroke={color} />
      ))}
    </span>
  );
}
