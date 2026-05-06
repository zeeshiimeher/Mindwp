/**
 * Shared UI type definitions.
 *
 * These types are shared between page/domain data contracts and
 * primitive components. They must not import from any domain or page.
 *
 * Dependency direction:
 *   src/types/ui  →  used by primitives and domain data
 *   domain data   →  never imported by shared primitives
 */

/**
 * AccentKey — maps to CSS [data-accent] attribute values.
 * Resolved to signal color tokens in CSS via data attribute selectors.
 */
export type AccentKey = 'cyan' | 'teal' | 'green' | 'amber' | 'red' | 'purple';

/**
 * StatusTone — semantic operational status states.
 * Used by StatusBadge and any component displaying operational state.
 */
export type StatusTone = 'active' | 'unowned' | 'leaking' | 'handled' | 'scattered' | 'controlled';
