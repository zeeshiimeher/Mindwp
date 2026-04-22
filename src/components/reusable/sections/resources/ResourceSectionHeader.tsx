import React from 'react';

import { cn } from '@/components/ui/utils';
import { getVariantStyles, type VariantType } from '@/lib/ui/variantStyles';

const BLOCK = 'resource-section-header';

/**
 * ResourceSectionHeader - Standardized header for resource page sections
 *
 * Provides consistent styling and icon handling for resource page sections.
 * Uses design system color classes instead of inline styles for better maintainability.
 *
 * @example
 * ```tsx
 * <ResourceSectionHeader
 *   icon={AlertCircle}
 *   title="The Problem"
 *   subtitle="Why this matters for your business"
 *   variant="problem"
 * />
 * ```
 */

export interface ResourceSectionHeaderProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle?: string;
  variant:
    | 'problem'
    | 'solution'
    | 'case'
    | 'diy'
    | 'business-costs'
    | 'faq'
    | 'takeaways'
    | 'comparison'
    | 'templates'
    | 'checklist';
  className?: string;
}

const variantToIconType: Record<string, VariantType> = {
  problem: 'warning',
  solution: 'success',
  case: 'primary',
  diy: 'accent',
  'business-costs': 'secondary',
  faq: 'primary',
  takeaways: 'accent',
  comparison: 'secondary',
  templates: 'primary',
  checklist: 'success',
};

export function ResourceSectionHeader({
  icon: Icon,
  title,
  subtitle,
  variant,
  className = '',
}: ResourceSectionHeaderProps) {
  const iconType = variantToIconType[variant] ?? 'primary';
  const styles = getVariantStyles(iconType).icon;

  return (
    <div className={cn(BLOCK, `${BLOCK}__row`, className)}>
      <div className={cn(`${BLOCK}__icon`, 'icon-container-md', styles.bg)}>
        <Icon className={cn(styles.text)} aria-hidden='true' />
      </div>
      <div>
        <h2 className={`${BLOCK}__title`}>{title}</h2>
        {subtitle && <p className={`${BLOCK}__subtitle`}>{subtitle}</p>}
      </div>
    </div>
  );
}
