import React, { type ReactNode } from 'react';
import { ArrowRight, type LucideIcon } from 'lucide-react';

import { cn } from '@/components/ui/utils';

const BLOCK = 'btn';

function hasRenderableContent(value: ReactNode | undefined): boolean {
  if (value === null || value === undefined || typeof value === 'boolean') {
    return false;
  }

  if (typeof value === 'string') {
    return value.trim().length > 0;
  }

  if (Array.isArray(value)) {
    return value.some(item => hasRenderableContent(item));
  }

  return true;
}

export interface ButtonProps {
  children?: ReactNode;
  label?: ReactNode;
  text?: ReactNode;
  href?: string;
  variant?: 'primary' | 'outline' | 'outline-light' | 'secondary' | 'white' | 'link';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  iconClassName?: string;
  showDefaultIcon?: boolean;
  cssPrefix?: string;
  onClick?: () => void;
  target?: React.AnchorHTMLAttributes<HTMLAnchorElement>['target'];
  rel?: React.AnchorHTMLAttributes<HTMLAnchorElement>['rel'];
  ariaLabel?: string;
  as?: 'auto' | 'span';
}

export function Button({
  children,
  label,
  text,
  href,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  iconClassName = '',
  showDefaultIcon = true,
  cssPrefix = '',
  onClick,
  target,
  rel,
  ariaLabel,
  as = 'auto',
}: ButtonProps) {
  const providedContentSources = [
    ['children', children],
    ['label', label],
    ['text', text],
  ];
  const renderableContentSources: Array<[string, ReactNode | undefined]> = [];

  for (const source of providedContentSources as Array<[string, ReactNode | undefined]>) {
    if (hasRenderableContent(source[1])) {
      renderableContentSources.push(source);
    }
  }

  if (renderableContentSources.length === 0) {
    throw new Error('Button requires non-empty content via children, label, or text.');
  }

  if (renderableContentSources.length > 1) {
    throw new Error('Button accepts only one content source: children, label, or text.');
  }

  if (href && onClick) {
    throw new Error('Button cannot receive both href and onClick. Use one interaction model.');
  }

  if ((target || rel) && !href) {
    throw new Error('Button target and rel require href.');
  }

  if (as === 'span' && (href || onClick)) {
    throw new Error('Button rendered as span cannot receive interactive href or onClick props.');
  }

  const defaultIcon =
    showDefaultIcon && (variant === 'primary' || variant === 'secondary' || variant === 'white')
      ? ArrowRight
      : undefined;
  const finalIcon = Icon || defaultIcon;
  const sizeModifier = `${BLOCK}--${size}`;
  const resolvedContent = children ?? label ?? text;

  const content = (
    <>
      {finalIcon &&
        iconPosition === 'left' &&
        React.createElement(finalIcon, {
          className: cn(`${BLOCK}__icon`, iconClassName),
          'aria-hidden': 'true',
        })}
      {resolvedContent}
      {finalIcon &&
        iconPosition === 'right' &&
        React.createElement(finalIcon, {
          className: cn(`${BLOCK}__icon`, iconClassName),
          'aria-hidden': 'true',
        })}
    </>
  );

  const className = cn(BLOCK, sizeModifier, `${BLOCK}-${variant}`, cssPrefix);
  const resolvedAriaLabel =
    ariaLabel ??
    (typeof resolvedContent === 'string'
      ? resolvedContent
      : typeof label === 'string'
        ? label
        : undefined);

  if (as === 'span') {
    return (
      <span className={className} aria-label={resolvedAriaLabel}>
        {content}
      </span>
    );
  }

  if (href) {
    return (
      <a href={href} className={className} aria-label={resolvedAriaLabel} target={target} rel={rel}>
        {content}
      </a>
    );
  }

  return (
    <button type='button' className={className} onClick={onClick} aria-label={resolvedAriaLabel}>
      {content}
    </button>
  );
}
