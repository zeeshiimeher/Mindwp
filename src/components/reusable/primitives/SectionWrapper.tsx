import type { ReactNode } from 'react';

import { cn } from '@/components/ui/utils';

const PADDING_MAP = {
  default: 'l-section',
  compact: 'l-section--compact',
  spacious: 'l-section--spacious',
  none: '',
} as const;

const CONTAINER_MAP = {
  default: 'l-container',
  narrow: 'l-container l-container--narrow',
  wide: 'l-container l-container--wide',
  none: '',
} as const;

export interface SectionWrapperProps {
  /** HTML element tag. @default 'section' */
  as?: 'section' | 'div';
  /** Anchor id for navigation */
  id?: string;
  /** Section vertical padding variant. @default 'default' */
  padding?: keyof typeof PADDING_MAP;
  /** Container width variant. @default 'default' */
  container?: keyof typeof CONTAINER_MAP;
  /** Background class (e.g. 'bg-muted/30'). @default '' */
  background?: string;
  /** Additive className on the outer element */
  className?: string;
  children: ReactNode;
}

export function SectionWrapper({
  as: Tag = 'section',
  id,
  padding = 'default',
  container = 'default',
  background = '',
  className = '',
  children,
}: SectionWrapperProps) {
  const containerClass = CONTAINER_MAP[container];

  return (
    <Tag
      {...(id !== undefined && { id })}
      className={cn(PADDING_MAP[padding], background, className)}
    >
      {containerClass ? <div className={containerClass}>{children}</div> : children}
    </Tag>
  );
}
