import React from 'react';

import { cn } from '@/components/ui/utils';

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

const variantConfig = {
  problem: {
    bgClass: 'icon-bg-error',
    textClass: 'icon-text-error',
  },
  solution: {
    bgClass: 'icon-bg-success',
    textClass: 'icon-text-success',
  },
  case: {
    bgClass: 'icon-bg-primary',
    textClass: 'icon-text-primary',
  },
  diy: {
    bgClass: 'icon-bg-accent',
    textClass: 'icon-text-accent',
  },
  'business-costs': {
    bgClass: 'icon-bg-secondary',
    textClass: 'icon-text-secondary',
  },
  faq: {
    bgClass: 'icon-bg-primary',
    textClass: 'icon-text-primary',
  },
  takeaways: {
    bgClass: 'icon-bg-accent',
    textClass: 'icon-text-accent',
  },
  comparison: {
    bgClass: 'icon-bg-secondary',
    textClass: 'icon-text-secondary',
  },
  templates: {
    bgClass: 'icon-bg-primary',
    textClass: 'icon-text-primary',
  },
  checklist: {
    bgClass: 'icon-bg-success',
    textClass: 'icon-text-success',
  },
};

export function ResourceSectionHeader({
  icon: Icon,
  title,
  subtitle,
  variant,
  className = '',
}: ResourceSectionHeaderProps) {
  const config = variantConfig[variant];

  return (
    <div className={cn(BLOCK, `${BLOCK}__row`, className)}>
      <div className={cn(`${BLOCK}__icon`, 'icon-container-md', config.bgClass)}>
        <Icon className={cn(config.textClass)} aria-hidden='true' />
      </div>
      <div>
        <h2 className={`${BLOCK}__title`}>{title}</h2>
        {subtitle && <p className={`${BLOCK}__subtitle`}>{subtitle}</p>}
      </div>
    </div>
  );
}
