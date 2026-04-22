/**
 * BulletList - Inline bullet-separated list component
 *
 * Renders an array of text items as an inline paragraph with bullet separators.
 * Perfect for displaying short lists of features, highlights, or key points
 * in a compact, readable format without taking up vertical space.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <BulletList items={["Fast", "Reliable", "Secure"]} />
 * // Output: "Fast • Reliable • Secure"
 * ```
 *
 * @example
 * ```tsx
 * // Custom separator
 * <BulletList
 *   items={["WordPress", "Shopify", "Custom CMS"]}
 *   separator=" | "
 * />
 * // Output: "WordPress | Shopify | Custom CMS"
 * ```
 *
 * @example
 * ```tsx
 * // With custom styling
 * <BulletList
 *   items={["Plugin Optimization", "Theme Updates", "Security Hardening"]}
 *   cssPrefix="feature-highlights"
 * />
 * ```
 */
import { cn } from '@/components/ui/utils';

export interface BulletListProps {
  /** Array of text items to display */
  items: string[];

  /**
   * Separator string between items
   * @default " • "
   * Common alternatives: " | ", " · ", " ◦ "
   */
  separator?: string;

  /**
   * Additional class(es) for the root element.
   *
   * Note: The component always applies its internal BEM block class (`bullet-list`).
   * This prop is additive and will not change the BEM base.
   */
  cssPrefix?: string;
}

const BLOCK = 'bullet-list';

export function BulletList({ items, separator = ' • ', cssPrefix = '' }: BulletListProps) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <p className={cn(BLOCK, cssPrefix)}>
      {items.map((item, index) => (
        <span key={item}>
          {item}
          {index < items.length - 1 && separator}
        </span>
      ))}
    </p>
  );
}
