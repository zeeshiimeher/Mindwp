import { LucideIcon } from 'lucide-react';

import { cn } from '@/components/ui/utils';
import { getIconStyles, type IconType } from '@/lib/ui/iconStyles';

const BLOCK = 'business-use-case-card';

/**
 * IconTextCard - Business use case card component
 *
 * Displays a business use case with an icon, title, and description.
 * Used for showcasing how a service supports different business scenarios.
 */
export interface IconTextCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  /**
   * Icon color variant. @default "primary"
   */
  iconType?: IconType;
  /**
   * Additional class(es) for the root element.
   *
   * Note: The component always applies its internal BEM block class (`business-use-case-card`).
   * This prop is additive and will not change the BEM base.
   */
  cssPrefix?: string;
}

export function IconTextCard({
  icon: Icon,
  title,
  description,
  iconType = 'primary',
  cssPrefix = '',
}: IconTextCardProps) {
  const { bg, text } = getIconStyles(iconType);

  return (
    <div className={cn(BLOCK, cssPrefix)}>
      <div className={cn(`${BLOCK}__icon`, 'icon-container-md', bg)}>
        <Icon className={cn(`${BLOCK}__icon-svg`, text)} aria-hidden='true' />
      </div>
      <h3 className={`${BLOCK}__heading`}>{title}</h3>
      <p className={`${BLOCK}__text`}>{description}</p>
    </div>
  );
}
