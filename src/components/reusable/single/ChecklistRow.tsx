import { CheckCircle2, X } from 'lucide-react';

import { cn } from '@/components/ui/utils';

const BLOCK = 'checklist-simple';

/**
 * ChecklistRow - Lightweight checklist item component with checkmark or cross icon
 *
 * Renders a single checklist item with either a green checkmark icon (for positive items)
 * or a red cross icon (for negative items) and text content.
 * Designed for simple, clean lists where each item represents a feature, benefit,
 * or completed task. Commonly used in unordered lists within service descriptions.
 *
 * @example
 * ```tsx
 * <ul className="l-stack">
 *   <ChecklistRow variant="check">
 *     WordPress-specific plugin recommendations
 *   </ChecklistRow>
 *   <ChecklistRow variant="cross">
 *     Avoid generic templates
 *   </ChecklistRow>
 *   <ChecklistRow>
 *     Database cleanup guidance
 *   </ChecklistRow>
 * </ul>
 * ```
 *
 * @example
 * ```tsx
 * // Optional additive className overrides
 * <ChecklistRow variant="cross" iconSize="custom-size" color="custom-color">
 *   Custom sized checklist item
 * </ChecklistRow>
 * ```
 */
export interface ChecklistRowProps {
  /** The text content to display next to the icon */
  children: string;

  /**
   * Icon variant to display
   * @default "check"
   */
  variant?: 'check' | 'cross';

  /**
   * Optional icon color override (treated as additive className).
   * If omitted, the component uses its default colors defined in CSS.
   */
  color?: string;

  /**
   * Optional icon size override (treated as additive className).
   * If omitted, the component uses its default size defined in CSS.
   */
  iconSize?: string;
}

export function ChecklistRow({ children, variant = 'check', color, iconSize }: ChecklistRowProps) {
  const IconComponent = variant === 'check' ? CheckCircle2 : X;

  return (
    <li className={cn(BLOCK, `${BLOCK}--${variant}`)}>
      <IconComponent className={cn(`${BLOCK}__icon`, iconSize, color)} aria-hidden='true' />
      <span className={`${BLOCK}__text`}>{children}</span>
    </li>
  );
}
