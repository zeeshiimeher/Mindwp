import { ReactNode } from 'react';
import { Check, LucideIcon } from 'lucide-react';

import { cn } from '@/components/ui/utils';

const BLOCK = 'checklist-item';

export interface ChecklistItemProps {
  children: ReactNode;
  icon?: LucideIcon;
  iconSize?: 'sm' | 'md' | 'lg';
  className?: string;
  textClassName?: string;
}

export function ChecklistItem({
  children,
  icon: Icon = Check,
  iconSize = 'sm',
  className = '',
  textClassName = '',
}: ChecklistItemProps) {
  return (
    <li className={cn(BLOCK, className)}>
      <div className={cn(`${BLOCK}__icon-wrap`, 'icon-container-sm icon-bg-accent')}>
        <Icon
          className={cn(`${BLOCK}__icon`, `${BLOCK}__icon--${iconSize}`, 'icon-text-accent')}
          aria-hidden='true'
        />
      </div>
      <span className={cn(`${BLOCK}__text`, textClassName)}>{children}</span>
    </li>
  );
}
