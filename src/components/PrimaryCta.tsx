import React from 'react';
import { ArrowRight } from 'lucide-react';

import { primaryCta } from '@/config/primaryCta';

export interface PrimaryCtaProps {
  className?: string;
  linkProps?: Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    'href' | 'className' | 'children'
  >;
  buttonProps?: Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    'type' | 'className' | 'children'
  >;
  onChatTrigger?: () => void;
  endIcon?: React.ReactNode;
  /** Opt-in to mimic `Button` default ArrowRight icon without changing existing usages. */
  showDefaultEndIcon?: boolean;
}

export function PrimaryCta({
  className,
  linkProps,
  buttonProps,
  onChatTrigger,
  endIcon,
  showDefaultEndIcon = false,
}: PrimaryCtaProps) {
  const resolvedClassName = className ?? 'btn btn-primary';
  const resolvedEndIcon =
    endIcon ??
    (showDefaultEndIcon ? <ArrowRight className='btn__icon' aria-hidden='true' /> : undefined);

  if (primaryCta.type === 'external') {
    return (
      <a
        href={primaryCta.href}
        className={resolvedClassName}
        target='_blank'
        rel='noopener noreferrer'
        {...linkProps}
      >
        {primaryCta.label}
        {resolvedEndIcon}
      </a>
    );
  }

  if (primaryCta.type === 'chat') {
    return (
      <button
        type='button'
        className={resolvedClassName}
        onClick={onChatTrigger ?? (() => {})}
        {...buttonProps}
      >
        {primaryCta.label}
        {resolvedEndIcon}
      </button>
    );
  }

  return (
    <a href={primaryCta.href} className={resolvedClassName} {...linkProps}>
      {primaryCta.label}
      {resolvedEndIcon}
    </a>
  );
}
