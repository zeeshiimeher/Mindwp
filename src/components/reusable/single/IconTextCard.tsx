import { LucideIcon } from 'lucide-react';

import { getVariantStyles, type VariantType } from '@/lib/ui/variantStyles';

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
  iconType?: VariantType;
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
  const iconStyles = getVariantStyles(iconType).icon;

  return (
    <div className={[BLOCK, cssPrefix].filter(Boolean).join(' ')}>
      <Icon className={`${BLOCK}__icon ${iconStyles.text}`} />
      <h3 className={`${BLOCK}__heading`}>{title}</h3>
      <p className={`${BLOCK}__text`}>{description}</p>
    </div>
  );
}
