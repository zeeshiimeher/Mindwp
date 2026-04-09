import React from 'react';
import { CheckCircle2 } from 'lucide-react';

import { Card } from '@/components/reusable/single/Card';
import { cn } from '@/components/ui/utils';
import { getIconStyles, type IconType } from '@/lib/ui/iconStyles';

const BLOCK = 'audit-card';

/**
 * AuditChecklistCard - Specialized card component for displaying audit areas with checklists
 *
 * Renders a comprehensive audit area card featuring a colored icon, title, description,
 * and a truncated checklist of up to 4 items. Designed specifically for technical audit
 * sections to showcase coverage areas with visual hierarchy and consistent styling.
 *
 * @example
 * ```tsx
 * import { Code, Zap } from "lucide-react";
 *
 * const auditAreas = [
 *   {
 *     icon: Code,
 *     title: "Technical SEO Analysis",
 *     description: "Complete technical evaluation of your site's SEO health",
 *     checks: [
 *       "Crawlability & indexability issues",
 *       "XML sitemap validation",
 *       "Robots.txt configuration"
 *     ],
 *     iconType: "primary" as const
 *   }
 * ];
 *
 * <AuditChecklistCard {...auditAreas[0]} />
 * ```
 */
interface AuditChecklistCardProps {
  /**
   * Lucide React icon component to display (e.g., Code, Zap, Shield)
   * Should be a valid React component that accepts className prop
   */
  icon: React.ComponentType<{ className?: string }>;

  /** Main heading for the audit area */
  title: string;

  /** Descriptive text explaining what this audit area covers */
  description: string;

  /**
   * Array of checklist items to display
   * Only the first 4 items will be shown to maintain consistent card height
   */
  checks: string[];

  /**
   * Color theme for the icon background and text
   * - "primary": Blue theme (default brand color)
   * - "secondary": Gray theme
   * - "accent": Orange/amber theme
   */
  iconType: IconType;

  /**
   * Additional class(es) for the root element.
   *
   * Note: The component always applies its internal BEM block class (`audit-card`).
   * This prop is additive and will not change the BEM base.
   */
  cssPrefix?: string;
}

export function AuditChecklistCard({
  icon: Icon,
  title,
  description,
  checks,
  iconType,
  cssPrefix = '',
}: AuditChecklistCardProps) {
  const { bg: iconBg, text: iconText } = getIconStyles(iconType);

  return (
    <Card className={cn(BLOCK, cssPrefix)}>
      <div className={cn(`${BLOCK}__icon`, 'icon-container-md', iconBg)}>
        <Icon className={cn(`${BLOCK}__icon-svg`, iconText)} />
      </div>
      <h4 className={`${BLOCK}__title`}>{title}</h4>
      <p className={`${BLOCK}__desc`}>{description}</p>
      <ul className={`${BLOCK}__list`}>
        {checks.map((check, checkIndex) => {
          if (checkIndex >= 4) return null;
          return (
            <li key={checkIndex} className={`${BLOCK}__item`}>
              <CheckCircle2
                className={cn(`${BLOCK}__item-icon`, 'icon-text-accent')}
                aria-hidden='true'
              />
              {check}
            </li>
          );
        })}
      </ul>
    </Card>
  );
}
