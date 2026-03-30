import { LucideIcon } from 'lucide-react';

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
  iconType?: 'primary' | 'secondary' | 'accent' | 'purple' | 'teal' | 'amber' | 'dark';
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
  const getIconClasses = (iconType: string) => {
    const classes = {
      primary: 'business-use-case-card__icon--primary',
      secondary: 'business-use-case-card__icon--secondary',
      accent: 'business-use-case-card__icon--accent',
      purple: 'business-use-case-card__icon--purple',
      teal: 'business-use-case-card__icon--teal',
      amber: 'business-use-case-card__icon--amber',
      dark: 'business-use-case-card__icon--dark',
    };
    return classes[iconType as keyof typeof classes] || classes.primary;
  };

  return (
    <div className={[BLOCK, cssPrefix].filter(Boolean).join(' ')}>
      <Icon className={`${BLOCK}__icon ${getIconClasses(iconType)}`} />
      <h3 className={`${BLOCK}__heading`}>{title}</h3>
      <p className={`${BLOCK}__text`}>{description}</p>
    </div>
  );
}
