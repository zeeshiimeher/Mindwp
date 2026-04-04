/**
 * Unified variant style resolver.
 *
 * Extends the icon type system into a full variant system that controls:
 *   - Icon styles (bg + text)
 *   - Badge accent class
 *   - Card border accent class
 *   - Text color class
 *
 * SINGLE PROP drives all visual tone decisions:
 *   variant: VariantType
 *
 * VariantType is 1:1 with IconType by design.
 */

import { getIconStyles, ICON_ORDER, type IconType } from './iconStyles';

export type VariantType = IconType;

export { ICON_ORDER as VARIANT_ORDER };

interface VariantStyles {
  /** Icon bg + text classes */
  icon: {
    bg: string;
    text: string;
    combined: string;
  };
  /** Badge accent class (e.g. "variant-badge-primary") */
  badge: string;
  /** Card border/accent class (e.g. "variant-card-primary") */
  card: string;
  /** Text color class (e.g. "variant-text-primary") */
  text: string;
}

/* ---------------------------------------------------------------
   VARIANT MAP — composes icon + badge + card + text
   --------------------------------------------------------------- */
const VARIANT_MAP: Record<VariantType, VariantStyles> = {
  primary:   { icon: getIconStyles('primary'),   badge: 'variant-badge-primary',   card: 'variant-card-primary',   text: 'variant-text-primary' },
  secondary: { icon: getIconStyles('secondary'), badge: 'variant-badge-secondary', card: 'variant-card-secondary', text: 'variant-text-secondary' },
  accent:    { icon: getIconStyles('accent'),    badge: 'variant-badge-accent',    card: 'variant-card-accent',    text: 'variant-text-accent' },
  success:   { icon: getIconStyles('success'),   badge: 'variant-badge-success',   card: 'variant-card-success',   text: 'variant-text-success' },
  warning:   { icon: getIconStyles('warning'),   badge: 'variant-badge-warning',   card: 'variant-card-warning',   text: 'variant-text-warning' },
  info:      { icon: getIconStyles('info'),      badge: 'variant-badge-info',      card: 'variant-card-info',      text: 'variant-text-info' },
  neutral:   { icon: getIconStyles('neutral'),   badge: 'variant-badge-neutral',   card: 'variant-card-neutral',   text: 'variant-text-neutral' },
};

const DEFAULT_VARIANT: VariantType = 'primary';

/**
 * Returns icon + badge + card + text classes for a given variant.
 * Falls back to "primary" for unknown/undefined variants.
 */
export function getVariantStyles(variant?: VariantType | null): VariantStyles {
  if (!variant) return VARIANT_MAP[DEFAULT_VARIANT];
  return VARIANT_MAP[variant] ?? VARIANT_MAP[DEFAULT_VARIANT];
}
