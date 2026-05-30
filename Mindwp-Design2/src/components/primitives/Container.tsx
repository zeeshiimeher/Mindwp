import type { ElementType, ReactNode } from 'react';

import { cn } from '@/lib/cn';

/** Page-width wrapper. Uses the .container rule from theme.css (max 1366px). */
export function Container({
  as: Tag = 'div',
  className,
  children,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  return <Tag className={cn('container', className)}>{children}</Tag>;
}
