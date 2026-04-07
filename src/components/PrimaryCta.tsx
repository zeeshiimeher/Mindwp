import React from 'react';
import { ArrowRight } from 'lucide-react';

import { primaryCta } from '@/config/primaryCta';
import { buildGlobalContactHref } from '@/lib/contact/contactHref';

export interface PrimaryCtaProps {
  className?: string;
  hrefOverride?: string;
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
  hrefOverride,
  linkProps,
  buttonProps,
  onChatTrigger,
  endIcon,
  showDefaultEndIcon = false,
}: PrimaryCtaProps) {
  const resolvedClassName = className ?? 'btn btn-primary';
  const resolvedHref =
    hrefOverride ??
    (primaryCta.type === 'internal' && primaryCta.href === '/contact'
      ? buildGlobalContactHref(primaryCta.href)
      : primaryCta.href);
  const resolvedEndIcon =
    endIcon ??
    (showDefaultEndIcon ? <ArrowRight className='btn__icon' aria-hidden='true' /> : undefined);

  if (primaryCta.type === 'external') {
    return (
      <a
        href={resolvedHref}
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
    <a href={resolvedHref} className={resolvedClassName} {...linkProps}>
      {primaryCta.label}
      {resolvedEndIcon}
    </a>
  );
}
