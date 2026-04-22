import type { LucideIcon } from 'lucide-react';
import { CheckCircle2 } from 'lucide-react';
import type { ElementType, ReactNode } from 'react';

import { cn } from '@/components/ui/utils';

const BLOCK = 'icon-row';

export interface IconRowProps {
  children: ReactNode;
  icon?: LucideIcon;
  as?: ElementType;
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}

export function IconRow({
  children,
  icon: Icon = CheckCircle2,
  as: Component = 'div',
  className,
  iconClassName,
  textClassName,
}: IconRowProps) {
  return (
    <Component className={cn(BLOCK, className)}>
      <Icon className={cn(`${BLOCK}__icon`, iconClassName)} aria-hidden='true' />
      <span className={cn(`${BLOCK}__text`, textClassName)}>{children}</span>
    </Component>
  );
}
