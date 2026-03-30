import type { LucideIcon } from 'lucide-react';

import { Card } from '@/components/reusable/single/Card';
import { cn } from '@/components/ui/utils';

const BLOCK = 'process-step';

/**
 * ProcessStepCard - Individual numbered process step component
 *
 * Displays a single step in a process workflow with a prominent numbered badge,
 * title, and description. Features a card layout with shadow and border styling,
 * designed to be used in responsive grids for process visualization.
 *
 * @example
 * ```tsx
 * const steps = [
 *   {
 *     number: "1",
 *     title: "Site Analysis",
 *     description: "We crawl and analyze your entire WordPress site"
 *   },
 *   {
 *     number: "2",
 *     title: "Manual Review",
 *     description: "WordPress specialists manually test functionality"
 *   }
 * ];
 *
 * <ProcessStepCard {...steps[0]} />
 * ```
 */

/**
 * Process step data structure
 * Exported for reuse across components that display process steps
 */
export interface ProcessStep {
  /**
   * Step number as a string (e.g., "1", "2", "01", "02")
   * Displayed prominently in a circular badge
   */
  number: string;

  /** Step title/heading */
  title: string;

  /** Detailed description of what happens in this step */
  description: string;

  /**
   * Optional icon component to display instead of the number
   * When provided, the icon will be shown in the circular badge
   */
  icon?: LucideIcon;

  /**
   * Optional icon type for different color schemes
   * @default "default"
   * - "default": Uses foreground/background colors (current behavior)
   * - "primary": Uses primary color scheme
   * - "secondary": Uses secondary color scheme
   * - "accent": Uses accent color scheme
   */
  iconType?: 'default' | 'primary' | 'secondary' | 'accent';
}

interface StepCardProps extends ProcessStep {
  /**
   * Additional class(es) for the root element.
   *
   * Note: The component always applies its internal BEM block class (`process-step`).
   * This prop is additive and will not change the BEM base.
   */
  cssPrefix?: string;
}

export function ProcessStepCard({
  number,
  title,
  description,
  icon,
  iconType = 'default',
  cssPrefix = '',
}: StepCardProps) {
  const badgeVariantClassName = `${BLOCK}__badge--${iconType}`;
  const iconVariantClassName = `${BLOCK}__icon--${iconType}`;

  const IconComponent = icon;

  return (
    <Card className={cn(BLOCK, cssPrefix)}>
      <div className={cn(`${BLOCK}__badge`, badgeVariantClassName)} aria-label={`Step ${number}`}>
        {number}
      </div>
      <div className={`${BLOCK}__content`}>
        {IconComponent && (
          <div className={cn(`${BLOCK}__icon`, iconVariantClassName)}>
            <IconComponent className={`${BLOCK}__icon-svg`} aria-hidden='true' />
          </div>
        )}
        <h4 className={`${BLOCK}__title`}>{title}</h4>
        <p className={`${BLOCK}__description`}>{description}</p>
      </div>
    </Card>
  );
}
