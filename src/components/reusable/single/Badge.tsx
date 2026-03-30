import { ReactNode } from 'react';

const BLOCK = 'badge';

/**
 * Badge - Versatile badge component for labels and highlights
 *
 * Renders a small, styled badge for categorizing content, highlighting features,
 * or drawing attention to specific information. Supports multiple variants and sizes
 * with consistent typography and spacing. Commonly used above section headers or
 * alongside other content to provide context.
 *
 * @example
 * ```tsx
 * // Secondary badge (default)
 * <Badge>New Feature</Badge>
 *
 * // Primary badge for emphasis
 * <Badge variant="primary">Popular</Badge>
 *
 * // Small outline badge
 * <Badge variant="outline" size="sm">Beta</Badge>
 *
 * // Large primary badge
 * <Badge variant="primary" size="lg">Premium</Badge>
 * ```
 */
export interface BadgeProps {
  /** Badge content - text, icons, or React elements */
  children: ReactNode;

  /**
   * Visual style variant
   * @default "secondary"
   * - "primary": Blue background (brand color)
   * - "secondary": Gray background (most common)
   * - "outline": Transparent background with border
   */
  variant?: 'primary' | 'secondary' | 'outline';

  /**
   * Size variant affecting padding and text size
   * @default "md"
   * - "sm": Compact size (text-xs, small padding)
   * - "md": Standard size (text-sm, medium padding)
   * - "lg": Large size (text-base, generous padding)
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Additional class(es) for the badge root element.
   *
   * Note: The component always applies its internal BEM block class (`badge`).
   * This prop is additive and will not change the BEM base.
   */
  cssPrefix?: string;
}

export function Badge({
  children,
  variant = 'secondary',
  size = 'md',
  cssPrefix = '',
}: BadgeProps) {
  const sizeModifier = `${BLOCK}--${size}`;

  return (
    <span
      className={[BLOCK, sizeModifier, `badge-${variant}`, cssPrefix].filter(Boolean).join(' ')}
    >
      {children}
    </span>
  );
}
