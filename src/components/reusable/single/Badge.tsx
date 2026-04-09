import { ReactNode } from 'react';

import { cn } from '@/components/ui/utils';

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
   * - "alert": Info background with primary border
   * - "outline-white": Transparent with white border (dark backgrounds)
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'alert' | 'outline-white';

  /**
   * Size variant affecting padding and text size
   * @default "md"
   * - "sm": Compact size (text-xs, small padding)
   * - "md": Standard size (text-sm, medium padding)
   * - "lg": Large size (text-base, generous padding)
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Contextual size/spacing modifier for specific layout positions.
   * - "meta": Compact meta labels (blog cards, resource cards)
   * - "hero": Larger hero section badges
   * - "section": Section header badges with letter-spacing
   * - "card": Card-level badges
   */
  context?: 'meta' | 'hero' | 'section' | 'card';

  /**
   * Additional class(es) for the badge root element.
   *
   * RULE: cssPrefix is ONLY for contextual styling (layout/spacing)
   * and CSS-class composition (e.g. resource-badge classes).
   * It MUST NOT override color, size, or variant system.
   * Use `variant` for color and `context` for sizing modifiers.
   */
  cssPrefix?: string;
}

export function Badge({
  children,
  variant = 'secondary',
  size = 'md',
  context,
  cssPrefix = '',
}: BadgeProps) {
  const sizeModifier = `${BLOCK}--${size}`;
  const contextModifier = context ? `${BLOCK}--${context}` : '';

  return (
    <span className={cn(BLOCK, sizeModifier, contextModifier, `badge-${variant}`, cssPrefix)}>
      {children}
    </span>
  );
}
