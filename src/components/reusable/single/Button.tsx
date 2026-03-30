import React, { type ReactNode } from 'react';
import { ArrowRight, type LucideIcon } from 'lucide-react';

const BLOCK = 'btn';

/**
 * Button - Versatile button component with multiple variants and behaviors
 *
 * A comprehensive button component that supports both link and button behaviors
 * with consistent styling across different variants. Features automatic icon
 * placement, size variants, and accessibility support. Can render as either
 * an anchor tag or button element based on the presence of href prop.
 *
 * @example
 * ```tsx
 * // Primary button (default)
 * <Button href="/contact">Get Started</Button>
 *
 * // Outline variant with custom icon
 * <Button variant="outline" icon={Mail} href="/newsletter">
 *   Subscribe
 * </Button>
 *
 * // Small secondary button
 * <Button variant="secondary" size="sm" onClick={handleClick}>
 *   Learn More
 * </Button>
 *
 * // White button for dark backgrounds
 * <Button variant="white" href="/conversation">
 *   Start a Conversation
 * </Button>
 * ```
 */
export interface ButtonProps {
  /** Button content - text, icons, or React elements */
  children?: ReactNode;

  /** Optional text label alias used by config-style action objects */
  label?: ReactNode;

  /** Optional text alias used by some content/config payloads */
  text?: ReactNode;

  /**
   * Optional URL for link behavior
   * When provided, renders as `<a>` tag instead of `<button>`
   */
  href?: string;

  /**
   * Visual style variant
   * @default "primary"
   * - "primary": Filled blue button (brand color)
   * - "secondary": Filled gray button
   * - "outline": Outlined button with border
   * - "outline-light": Light outlined button for dark backgrounds
   * - "white": White button for dark backgrounds
   */
  variant?: 'primary' | 'outline' | 'outline-light' | 'secondary' | 'white' | 'link';

  /**
   * Size variant affecting padding and text size
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Optional Lucide React icon component
   * When not provided, primary/secondary/white variants get ArrowRight by default
   */
  icon?: LucideIcon;

  /** Icon placement relative to text content. @default "right" */
  iconPosition?: 'left' | 'right';

  /** Additional class(es) applied to icon element. */
  iconClassName?: string;

  /**
   * Whether variant-based default icon should render when `icon` is not provided.
   * @default true
   */
  showDefaultIcon?: boolean;

  /**
   * Additional class(es) for the root element.
   *
   * Note: The component always applies its internal BEM block class (`btn`).
   * This prop is additive and will not change the BEM base.
   */
  cssPrefix?: string;

  /** Click handler (only when rendering a <button>) */
  onClick?: () => void;

  /** Optional target for anchor rendering */
  target?: React.AnchorHTMLAttributes<HTMLAnchorElement>['target'];

  /** Optional rel for anchor rendering */
  rel?: React.AnchorHTMLAttributes<HTMLAnchorElement>['rel'];

  /** Optional explicit aria-label override. */
  ariaLabel?: string;

  /** Optional forced element render mode; defaults to auto (href => anchor, else button). */
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
          className: [`${BLOCK}__icon`, iconClassName].filter(Boolean).join(' '),
          'aria-hidden': 'true',
        })}
      {resolvedContent}
      {finalIcon &&
        iconPosition === 'right' &&
        React.createElement(finalIcon, {
          className: [`${BLOCK}__icon`, iconClassName].filter(Boolean).join(' '),
          'aria-hidden': 'true',
        })}
    </>
  );

  const className = [BLOCK, sizeModifier, `${BLOCK}-${variant}`, cssPrefix]
    .filter(Boolean)
    .join(' ');
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
