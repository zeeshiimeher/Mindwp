import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

import { Button } from '@/components/reusable/single/Button';
import { cn } from '@/components/ui/utils';
import { getVariantStyles, type VariantType } from '@/lib/ui/variantStyles';

const BLOCK = 'feature-card';

/**
 * FeatureChecklistCard - Individual feature category card component
 *
 * Displays a single feature category with icon, title, description, and feature list.
 * Supports two layout variants: default (icon left) and stacked (icon top, left-aligned by default).
 * Optional button/link support for navigation or calls-to-action with two link styles:
 * - "button": Shows a CTA button at the bottom
 * - "link": Makes entire card clickable with footer link (like LinkCard)
 * Link variants support primary (default) or secondary color theming.
 * Used in loops within service sections to showcase feature categories.
 */
export interface FeatureCategory {
  title: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
  features: string[];
  label?: string;
  iconType?: VariantType;
}

interface FeatureCardProps extends FeatureCategory {
  variant?: 'default' | 'stacked';
  align?: 'left' | 'center';
  href?: string;
  buttonText?: string;
  buttonVariant?: 'primary' | 'secondary' | 'outline';
  showArrow?: boolean;
  linkVariant?: 'button' | 'link';
  linkColor?: 'primary' | 'secondary';
  /**
   * Additional class(es) for the card root.
   *
   * Note: The component always applies its internal BEM block class (`feature-card`).
   * This prop is additive and will not change the BEM base.
   */
  cssPrefix?: string;

  iconContainerShape?: 'square' | 'circle';
  iconContainerClassName?: string;
  iconClassName?: string;
}

export function FeatureChecklistCard({
  title,
  description,
  icon: Icon,
  features,
  label,
  iconType = 'primary',
  variant = 'stacked',
  align,
  href,
  buttonText = 'Learn More',
  buttonVariant = 'primary',
  showArrow = true,
  linkVariant = 'button',
  linkColor = 'primary',
  cssPrefix = '',
  iconContainerShape = 'square',
  iconContainerClassName,
  iconClassName,
}: FeatureCardProps) {
  const defaultAlign: 'left' | 'center' = 'left';
  const finalAlign = align || defaultAlign;

  const styles = getVariantStyles(iconType);
  const iconClasses = styles.icon;

  const renderButton = () => {
    if (!href) return null;

    if (linkVariant === 'link') {
      const linkColorClass =
        linkColor === 'secondary' ? `${BLOCK}__link--secondary` : `${BLOCK}__link--primary`;
      return (
        <div className={`${BLOCK}__footer`}>
          <div className={`${BLOCK}__footer-row`}>
            <Button
              as='span'
              variant='link'
              label='Learn more'
              cssPrefix={`${BLOCK}__link ${linkColorClass}`}
              {...(showArrow && { icon: ArrowRight })}
              iconClassName={`${BLOCK}__arrow ${linkColorClass}`}
              showDefaultIcon={showArrow}
            />
          </div>
        </div>
      );
    }

    return (
      <div className={`${BLOCK}__button-row`}>
        <Button
          href={href}
          size='sm'
          variant={buttonVariant}
          label={buttonText}
          ariaLabel={`Learn more about ${title}`}
          {...(showArrow && { icon: ArrowRight })}
          iconClassName={`${BLOCK}__button-icon`}
          showDefaultIcon={showArrow}
        />
      </div>
    );
  };

  const iconRounded =
    iconContainerShape === 'circle' ? `${BLOCK}__icon-wrap--circle` : `${BLOCK}__icon-wrap--square`;
  const rootClasses = [
    BLOCK,
    variant === 'stacked' ? `${BLOCK}--stacked` : `${BLOCK}--default`,
    finalAlign === 'center' ? `${BLOCK}--center` : `${BLOCK}--left`,
  ]
    .filter(Boolean)
    .join(' ');

  if (variant === 'stacked') {
    const card = (
      <div className={[rootClasses, cssPrefix].filter(Boolean).join(' ')}>
        {Icon && (
          <div
            className={cn(
              `${BLOCK}__icon-wrap ${iconRounded} ${iconClasses.bg}`,
              finalAlign === 'center' ? `${BLOCK}__icon-wrap--center` : '',
              iconContainerClassName
            )}
          >
            <Icon
              className={cn(`${BLOCK}__icon ${iconClasses.text}`, iconClassName)}
              aria-hidden='true'
            />
          </div>
        )}
        <h3 className={`${BLOCK}__title`}>{title}</h3>
        {description && <p className={`${BLOCK}__desc`}>{description}</p>}
        {label && <div className={`${BLOCK}__label`}>{label}</div>}
        <ul className={`${BLOCK}__list`}>
          {features.map((item, itemIndex) => (
            <li key={itemIndex} className={`${BLOCK}__item`}>
              <CheckCircle2 className={`${BLOCK}__check icon-text-accent`} aria-hidden='true' />
              {item}
            </li>
          ))}
        </ul>
        {renderButton()}
      </div>
    );

    if (href && linkVariant === 'link') {
      return (
        <a
          href={href}
          className={[`${BLOCK}__linkwrap`, cssPrefix].filter(Boolean).join(' ')}
          aria-label={`Learn more about ${title}`}
        >
          {card}
        </a>
      );
    }

    return card;
  }

  const card = (
    <div className={[rootClasses, cssPrefix].filter(Boolean).join(' ')}>
      <div
        className={`${BLOCK}__head ${finalAlign === 'center' ? `${BLOCK}__head--center` : `${BLOCK}__head--left`}`}
      >
        {Icon && (
          <div
            className={cn(
              `${BLOCK}__icon-wrap ${BLOCK}__icon-wrap--sm ${iconRounded} ${iconClasses.bg}`,
              iconContainerClassName
            )}
          >
            <Icon
              className={cn(`${BLOCK}__icon ${BLOCK}__icon--sm ${iconClasses.text}`, iconClassName)}
              aria-hidden='true'
            />
          </div>
        )}
        <div>
          <h4 className={`${BLOCK}__title-sm`}>{title}</h4>
          {description && <p className={`${BLOCK}__desc-sm`}>{description}</p>}
        </div>
      </div>
      {label && <div className={`${BLOCK}__label ${BLOCK}__label--sm`}>{label}</div>}
      <ul className={`${BLOCK}__list`}>
        {features.map((item, itemIndex) => (
          <li key={itemIndex} className={`${BLOCK}__item`}>
            <CheckCircle2 className={`${BLOCK}__check icon-text-accent`} aria-hidden='true' />
            {item}
          </li>
        ))}
      </ul>
      {renderButton()}
    </div>
  );

  if (href && linkVariant === 'link') {
    return (
      <a
        href={href}
        className={[`${BLOCK}__linkwrap`, cssPrefix].filter(Boolean).join(' ')}
        aria-label={`Learn more about ${title}`}
      >
        {card}
      </a>
    );
  }

  return card;
}
