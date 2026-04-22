import type { ReactNode } from 'react';

import { CardGrid, type CardGridProps, SectionWrapper } from '@/components/reusable/primitives';
import { SectionIntro } from '@/components/reusable/single';
import { cn } from '@/components/ui/utils';
import { bem } from '@/lib/ui/bem';

type CardsSectionShellProps = {
  block: string;
  badge?: string;
  title?: string;
  description?: string;
  backgroundColor?: string;
  cssPrefix?: string;
  columns?: 1 | 2 | 3 | 4;
  gap?: CardGridProps['gap'];
  children: ReactNode;
};

export function CardsSectionShell({
  block,
  badge,
  title,
  description,
  backgroundColor = '',
  cssPrefix = '',
  columns = 3,
  gap,
  children,
}: CardsSectionShellProps) {
  const b = bem(block);

  return (
    <SectionWrapper background={backgroundColor} className={cn(block, cssPrefix)}>
      {(badge || title || description) && (
        <SectionIntro
          {...(badge !== undefined && { badge })}
          title={title || ''}
          {...(description !== undefined && { description })}
          className={b('header')}
        />
      )}

      <CardGrid columns={columns} mode='controlled' {...(gap !== undefined ? { gap } : {})}>
        {children}
      </CardGrid>
    </SectionWrapper>
  );
}
