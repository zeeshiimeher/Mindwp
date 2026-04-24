import React from 'react';

import { cn } from '@/components/ui/utils';

import { Badge } from './Badge';
import { Button, type ButtonProps } from './Button';

const BLOCK = 'section-header';

function hasRenderableActionText(
  value: ButtonProps['children'] | ButtonProps['label'] | ButtonProps['text']
): boolean {
  if (value === null || value === undefined || typeof value === 'boolean') {
    return false;
  }

  if (typeof value === 'string') {
    return value.trim().length > 0;
  }

  if (Array.isArray(value)) {
    return value.some(item => hasRenderableActionText(item));
  }

  return true;
}

function isRenderableAction(action?: ButtonProps): boolean {
  if (!action) {
    return false;
  }

  const hasInteraction = Boolean(action.href || action.onClick);
  const hasContent =
    hasRenderableActionText(action.children) ||
    hasRenderableActionText(action.label) ||
    hasRenderableActionText(action.text);

  return hasInteraction && hasContent;
}

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

  /** Enables secondary CTA rendering when explicitly authored */
  allowSecondaryCTA?: true;

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
  allowSecondaryCTA,
  marginBottom = true,
  className = '',
}: SectionIntroProps) {
  if (title.trim().length === 0) {
    throw new Error('SectionIntro requires a non-empty title.');
  }

  const HeadingTag = headingLevel;
  const showPrimaryAction = isRenderableAction(primaryAction);
  const showSecondaryAction = allowSecondaryCTA === true && isRenderableAction(secondaryAction);

  const rootClassName = [
    BLOCK,
    alignment === 'left' ? `${BLOCK}--left` : `${BLOCK}--center`,
    !marginBottom ? `${BLOCK}--no-margin` : '',
    cssPrefix,
    className,
  ];

  return (
    <div className={cn(...rootClassName)}>
      {badge && (
        <div className={`${BLOCK}__badge`}>
          {typeof badge === 'string' ? (
            <Badge variant='secondary' size='sm' context='section'>
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
          className={cn(
            `${BLOCK}__description`,
            description.includes('\n') ? `${BLOCK}__description--preline` : '',
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}

      {(showPrimaryAction || showSecondaryAction) && (
        <div className={`${BLOCK}__actions`}>
          {showPrimaryAction && primaryAction && (
            <div className={`${BLOCK}__primary-action`}>
              <Button {...{ variant: 'primary', ...primaryAction }} />
            </div>
          )}
          {showSecondaryAction && secondaryAction && (
            <div className={`${BLOCK}__secondary-action`}>
              <Button {...{ variant: 'outline', ...secondaryAction }} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
