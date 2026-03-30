import React from 'react';

import { Badge } from './Badge';
import { Button, type ButtonProps } from './Button';

const BLOCK = 'section-header';

/**
 * SectionIntro - Flexible section header component with optional actions
 *
 * A comprehensive section header component that combines badge, title, description,
 * and action buttons in a responsive layout. Supports both centered and left-aligned
 * variants with consistent spacing and typography. Essential for creating visual
 * hierarchy and guiding users through page sections.
 *
 * @example
 * ```tsx
 * // Basic centered header
 * <SectionIntro
 *   badge="New Feature"
 *   title="Advanced Analytics"
 *   description="Get deep insights into your business performance"
 * />
 * ```
 */
export interface SectionIntroProps {
  /** Optional badge displayed above the title */
  badge?: string | React.ReactElement;

  /** Main heading text - required for all headers */
  title: string;

  /** Semantic heading level for the title. @default "h2" */
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4';

  /** Optional descriptive text below the title */
  description?: string;

  /** Optional extra classes for the description element */
  descriptionClassName?: string;

  /** Optional extra classes for the root container */
  className?: string;

  /**
   * Additional class(es) for the root container.
   *
   * Note: The component always applies its internal BEM block class (`section-header`).
   * This prop is additive and will not change the BEM base.
   */
  cssPrefix?: string;

  /** Text alignment for the header content. @default "center" */
  alignment?: 'center' | 'left';

  /** Primary call-to-action button configuration */
  primaryAction?: ButtonProps;

  /** Secondary call-to-action button configuration */
  secondaryAction?: ButtonProps;

  /** Whether to apply bottom margin. @default true */
  marginBottom?: boolean;
}

export function SectionIntro({
  badge,
  title,
  headingLevel = 'h2',
  description,
  descriptionClassName = '',
  cssPrefix = '',
  alignment = 'center',
  primaryAction,
  secondaryAction,
  marginBottom = true,
  className = '',
}: SectionIntroProps) {
  const HeadingTag = headingLevel;

  const rootClassName = [
    BLOCK,
    alignment === 'left' ? `${BLOCK}--left` : `${BLOCK}--center`,
    !marginBottom ? `${BLOCK}--no-margin` : '',
    cssPrefix,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={rootClassName}>
      {badge && (
        <div className={`${BLOCK}__badge`}>
          {typeof badge === 'string' ? (
            <Badge variant='secondary' size='sm' cssPrefix='badge--section'>
              {badge}
            </Badge>
          ) : (
            badge
          )}
        </div>
      )}

      <HeadingTag className={`${BLOCK}__title`}>{title}</HeadingTag>

      {description && (
        <p
          className={[
            `${BLOCK}__description`,
            description.includes('\n') ? `${BLOCK}__description--preline` : '',
            descriptionClassName,
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {description}
        </p>
      )}

      {(primaryAction || secondaryAction) && (
        <div className={`${BLOCK}__actions`}>
          {primaryAction && (
            <div className={`${BLOCK}__primary-action`}>
              <Button {...{ variant: 'primary', ...primaryAction }} />
            </div>
          )}
          {secondaryAction && (
            <div className={`${BLOCK}__secondary-action`}>
              <Button {...{ variant: 'outline', ...secondaryAction }} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
