import { ArrowRight, type LucideIcon } from 'lucide-react';

import { Button } from '@/components/reusable/single/Button';
import { cn } from '@/components/ui/utils';
import { getVariantStyles, type VariantType } from '@/lib/ui/variantStyles';

const BLOCK = 'benefit-card';

/**
 * IconBenefitCard - Versatile benefit/feature card component with colored icons
 *
 * Displays a service benefit or feature with a prominent colored icon, title, and description.
 * Supports multiple layout variants: centered (icon on top) and left-aligned (icon on left).
 * Features hover effects and consistent spacing, commonly used in grids to showcase
 * advantages, deliverables, or key features of a service offering.
 * Optional button/link support for navigation or calls-to-action with two link styles:
 * - "button": Shows a CTA button at the bottom
 * - "link": Makes entire card clickable with footer link (like LinkCard)
 * Link variants support primary (default) or secondary color theming.
 *
 * @example
 * ```tsx
 * // Centered layout (default)
 * <IconBenefitCard
 *   icon={FileText}
 *   title="Detailed Audit Report"
 *   description="A clear PDF report..."
 *   iconType="primary"
 * />
 *
 * // Left-aligned layout with button
 * <IconBenefitCard
 *   icon={Settings}
 *   title="Website SEO Foundation"
 *   description="We ensure your website..."
 *   iconType="primary"
 *   variant="left"
 *   href="/services/local-seo-authority"
 *   buttonText="Get Started"
 *   linkVariant="link"
 *   linkColor="secondary"
 * />
 * ```
 */

/**
 * Service benefit item data structure
 * Exported for reuse across components that need similar data structures
 */
export interface ServiceBenefitItem {
  /**
   * Lucide React icon component (e.g., FileText, BarChart3, Settings)
   * Should be a valid React component that accepts className prop
   */
  icon: LucideIcon;

  /** Main heading for the benefit/feature */
  title: string;

  /** Descriptive text explaining the benefit */
  description: string;

  /** Color theme for the icon background and text */
  iconType?: VariantType;

  /**
   * Optional points or additional information displayed below description
   * Rendered as a bullet/stacked list in smaller text
   */
  points?: string[];

  /**
   * Optional benefit statement displayed prominently above description
   * Rendered in bold text as a key value proposition
   */
  benefit?: string;
}

interface IconBenefitCardProps {
  /** Optional Lucide icon component */
  icon?: LucideIcon;

  /** Main heading for the benefit/feature */
  title: string;

  /** Descriptive text explaining the benefit */
  description: string;

  /** Color theme for the icon background and text */
  iconType?: VariantType;

  /** Optional points or additional information displayed below description */
  points?: string[];

  /** Optional benefit statement displayed prominently above description */
  benefit?: string;

  /**
   * Layout variant for the card
   * - "centered": Icon on top, title and description below (default)
   * - "left": Icon on left, title and description on right
   * @default "left"
   */
  variant?: 'centered' | 'left';

  /**
   * Additional class(es) for the card root.
   *
   * Note: The component always applies its internal BEM block class (`benefit-card`).
   * This prop is additive and will not change the BEM base.
   */
  cssPrefix?: string;

  /**
   * Heading level for the title
   * - "h3": Default heading level
   * - "h4": Smaller heading level
   * @default "h3"
   */
  headingLevel?: 'h3' | 'h4';

  /**
   * Description font size
   * - "default": Normal font size
   * - "sm": Smaller font size (text-sm)
   * @default "default"
   */
  descriptionSize?: 'default' | 'sm';

  /**
   * Border radius for icon containers
   * - "none": No border radius
   * - "lg": Large border radius (rounded-lg)
   * - "xl": Extra large border radius (rounded-xl)
   * @default "none"
   */
  borderRadius?: 'none' | 'lg' | 'xl';

  /** Optional link URL for navigation or calls-to-action */
  href?: string;

  /** Optional button text (defaults to "Learn More") */
  buttonText?: string;

  /**
   * Button style variant for CTA buttons
   * @default "primary"
   */
  buttonVariant?: 'primary' | 'secondary' | 'outline';

  /** Show arrow icon on button/link (defaults to true) */
  showArrow?: boolean;

  /**
   * Link style variant - "button" shows CTA button, "link" shows footer link like LinkCard
   * @default "button"
   */
  linkVariant?: 'button' | 'link';

  /** Link color for link variants (defaults to "primary") */
  linkColor?: 'primary' | 'secondary';
}

export function IconBenefitCard({
  icon: Icon,
  title,
  description,
  iconType = 'primary',
  points,
  benefit,
  variant = 'centered',
  cssPrefix = '',
  headingLevel = 'h3',
  descriptionSize = 'default',
  borderRadius = 'none',
  href,
  buttonText = 'Learn More',
  buttonVariant = 'primary',
  showArrow = true,
  linkVariant = 'button',
  linkColor = 'primary',
}: IconBenefitCardProps) {
  const styles = getVariantStyles(iconType);
  const { bg: iconBg, text: iconText } = styles.icon;

  const buttonClassName =
    buttonVariant === 'outline'
      ? 'btn-outline'
      : buttonVariant === 'secondary'
        ? 'btn-secondary'
        : 'btn-primary';

  const renderButton = () => {
    if (!href) return null;

    if (linkVariant === 'link') {
      const linkColorClass =
        linkColor === 'secondary'
          ? `${BLOCK}__footer-link--secondary`
          : `${BLOCK}__footer-link--primary`;
      return (
        <div className={`${BLOCK}__footer`}>
          <div className={`${BLOCK}__footer-row`}>
            <Button
              as='span'
              variant='link'
              label='Learn more'
              cssPrefix={cn(`${BLOCK}__footer-link`, linkColorClass)}
              showDefaultIcon={showArrow}
              {...(showArrow && { icon: ArrowRight })}
              iconClassName={cn(`${BLOCK}__footer-arrow`, linkColorClass)}
            />
          </div>
        </div>
      );
    }

    return (
      <div className={`${BLOCK}__cta`}>
        <Button
          href={href}
          size='sm'
          variant={buttonVariant}
          label={buttonText}
          ariaLabel={`Learn more about ${title}`}
          cssPrefix={cn(`${BLOCK}__cta-btn`, buttonClassName)}
          showDefaultIcon={showArrow}
          {...(showArrow && { icon: ArrowRight })}
          iconClassName={`${BLOCK}__cta-arrow`}
        />
      </div>
    );
  };

  const HeadingComponent = headingLevel === 'h4' ? 'h4' : 'h3';
  const iconClasses = Icon ? { iconBg, iconText } : null;

  const rootClassName = cn(
    BLOCK,
    variant === 'left' ? `${BLOCK}--left` : `${BLOCK}--centered`,
    href && linkVariant === 'link' && `${BLOCK}--link`,
    headingLevel === 'h4' && `${BLOCK}--h4`,
    descriptionSize === 'sm' && `${BLOCK}--desc-sm`,
    borderRadius === 'lg' ? `${BLOCK}--r-lg` : borderRadius === 'xl' ? `${BLOCK}--r-xl` : null,
    cssPrefix
  );

  const cardInner = (
    <>
      {variant === 'left' ? (
        <div className={cn(`${BLOCK}__left-row`, Icon && `${BLOCK}__left-row--with-icon`)}>
          {Icon && iconClasses && (
            <div
              className={cn(
                `${BLOCK}__icon`,
                `${BLOCK}__icon--left`,
                'icon-container-lg',
                iconClasses.iconBg
              )}
            >
              <Icon
                className={cn(
                  `${BLOCK}__icon-svg`,
                  `${BLOCK}__icon-svg--left`,
                  iconClasses.iconText
                )}
                aria-hidden='true'
              />
            </div>
          )}
          <div className={`${BLOCK}__body`}>
            <HeadingComponent className={`${BLOCK}__title`}>{title}</HeadingComponent>
            {benefit && (
              <div className={`${BLOCK}__benefit`}>
                <strong>{benefit}</strong>
              </div>
            )}
            <p className={`${BLOCK}__desc`}>{description}</p>
            {points && points.length > 0 && (
              <ul className={`${BLOCK}__points`}>
                {points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ) : (
        <>
          {Icon && iconClasses && (
            <div
              className={cn(
                `${BLOCK}__icon`,
                `${BLOCK}__icon--centered`,
                'icon-container-xl',
                iconClasses.iconBg
              )}
            >
              <Icon
                className={cn(
                  `${BLOCK}__icon-svg`,
                  `${BLOCK}__icon-svg--centered`,
                  iconClasses.iconText
                )}
                aria-hidden='true'
              />
            </div>
          )}
          <HeadingComponent className={`${BLOCK}__title`}>{title}</HeadingComponent>
          {benefit && (
            <div className={`${BLOCK}__benefit`}>
              <strong>{benefit}</strong>
            </div>
          )}
          <p className={`${BLOCK}__desc`}>{description}</p>
          {points && points.length > 0 && (
            <ul className={`${BLOCK}__points`}>
              {points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          )}
        </>
      )}
      {renderButton()}
    </>
  );

  if (href && linkVariant === 'link') {
    return (
      <a href={href} className={rootClassName} aria-label={`Learn more about ${title}`}>
        {cardInner}
      </a>
    );
  }

  return <div className={rootClassName}>{cardInner}</div>;
}
