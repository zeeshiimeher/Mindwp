/**
 * Centralized icon style resolver — SINGLE SOURCE OF TRUTH.
 *
 * Every component that renders an icon container MUST use
 * `getIconStyles()`. No BEM icon modifiers. No inline color logic.
 *
 * SEMANTIC TYPES (strict — no extensions):
 *   primary, secondary, accent, success, warning, info, neutral
 */

export type IconType =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'success'
  | 'warning'
  | 'info'
  | 'neutral';

interface IconStyleClasses {
  bg: string;
  text: string;
  combined: string;
}

/* ---------------------------------------------------------------
   ICON TYPE MAP — each type has a distinct visual identity
   --------------------------------------------------------------- */
const ICON_TYPE_MAP: Record<IconType, IconStyleClasses> = {
  primary: {
    bg: 'icon-bg-primary',
    text: 'icon-text-primary',
    combined: 'icon-bg-primary icon-text-primary',
  },
  secondary: {
    bg: 'icon-bg-secondary',
    text: 'icon-text-secondary',
    combined: 'icon-bg-secondary icon-text-secondary',
  },
  accent: {
    bg: 'icon-bg-accent',
    text: 'icon-text-accent',
    combined: 'icon-bg-accent icon-text-accent',
  },
  success: {
    bg: 'icon-bg-success',
    text: 'icon-text-success',
    combined: 'icon-bg-success icon-text-success',
  },
  warning: {
    bg: 'icon-bg-warning',
    text: 'icon-text-warning',
    combined: 'icon-bg-warning icon-text-warning',
  },
  info: { bg: 'icon-bg-info', text: 'icon-text-info', combined: 'icon-bg-info icon-text-info' },
  neutral: {
    bg: 'icon-bg-neutral',
    text: 'icon-text-neutral',
    combined: 'icon-bg-neutral icon-text-neutral',
  },
};

const DEFAULT_TYPE: IconType = 'primary';

/**
 * Deterministic icon type order for index-based cycling.
 * Usage: `ICON_ORDER[index % ICON_ORDER.length]`
 */
export const ICON_ORDER: IconType[] = [
  'primary',
  'secondary',
  'accent',
  'success',
  'warning',
  'info',
  'neutral',
];

/**
 * Returns the bg + text CSS classes for a given iconType.
 * Falls back to "primary" for unknown/undefined types.
 */
export function getIconStyles(iconType?: IconType | null): IconStyleClasses {
  if (!iconType) return ICON_TYPE_MAP[DEFAULT_TYPE];
  return ICON_TYPE_MAP[iconType] ?? ICON_TYPE_MAP[DEFAULT_TYPE];
}
