import type { ReactNode } from 'react';

import { SectionWrapper } from '@/components/reusable/primitives';
import { cn } from '@/components/ui/utils';
import { bem } from '@/lib/ui/bem';

import { ResourceSectionHeader, type ResourceSectionHeaderProps } from './ResourceSectionHeader';

type ResourceSectionShellProps = {
  block: string;
  icon: ResourceSectionHeaderProps['icon'];
  title: string;
  variant: ResourceSectionHeaderProps['variant'];
  className?: string;
  subtitle?: string;
  content?: string[];
  renderParagraph?: (paragraph: string, index: number, className: string) => ReactNode;
  children: ReactNode;
};

export function ResourceSectionShell({
  block,
  icon,
  title,
  variant,
  className = '',
  subtitle,
  content,
  renderParagraph,
  children,
}: ResourceSectionShellProps) {
  const b = bem(block);
  const resolvedSubtitle = subtitle ?? content?.[0];
  const paragraphs = content?.slice(1) ?? [];

  return (
    <SectionWrapper padding='none' container='none' className={cn(block, className)}>
      <ResourceSectionHeader
        icon={icon}
        title={title}
        variant={variant}
        {...(resolvedSubtitle ? { subtitle: resolvedSubtitle } : {})}
      />

      {paragraphs.length > 0 && (
        <div className={b('description')}>
          {paragraphs.map((paragraph, index) => {
            const paragraphIndex = index + 1;

            return renderParagraph ? (
              renderParagraph(paragraph, paragraphIndex, b('paragraph'))
            ) : (
              <p key={paragraphIndex} className={b('paragraph')}>
                {paragraph}
              </p>
            );
          })}
        </div>
      )}

      {children}
    </SectionWrapper>
  );
}
