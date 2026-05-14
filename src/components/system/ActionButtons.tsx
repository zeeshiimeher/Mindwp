'use client';

import type { ReactNode } from 'react';

import { Button, type ButtonProps } from '@/components/primitives/Button';
import { usePageIdentity } from '@/components/system/PageEnforcement';
import { cn } from '@/components/ui/utils';
import { buildContactHref, type ContactSourceType } from '@/lib/contact/contactHref';
import { getPrimaryCTA, getSecondaryCTA } from '@/lib/cta/primaryAction';
import { toContactSourceType } from '@/lib/page/pageIdentity';

function hasRenderableText(value: ReactNode | undefined): boolean {
  if (value === null || value === undefined || typeof value === 'boolean') {
    return false;
  }

  if (typeof value === 'string') {
    return value.trim().length > 0;
  }

  if (Array.isArray(value)) {
    return value.some(item => hasRenderableText(item));
  }

  return true;
}

function isActionableButton(action?: ButtonProps): boolean {
  if (!action) {
    return false;
  }

  return (
    Boolean(action.href || action.onClick) &&
    (hasRenderableText(action.children) ||
      hasRenderableText(action.label) ||
      hasRenderableText(action.text))
  );
}

export interface ActionButtonsProps {
  className?: string;
  allowSecondaryAction?: true;
  primaryActionVariant?: ButtonProps['variant'];
  primaryButtonCssPrefix?: string;
}

export function ActionButtons({
  className,
  allowSecondaryAction,
  primaryActionVariant = 'white',
  primaryButtonCssPrefix,
}: ActionButtonsProps) {
  const pageIdentity = usePageIdentity();

  if (!pageIdentity) {
    throw new Error('ActionButtons requires page identity at the template level.');
  }

  const slug = pageIdentity.pageId.split(':').slice(1).join(':').trim();

  if (!slug) {
    throw new Error('ActionButtons requires a page identity slug.');
  }

  const pageTypeForHref: ContactSourceType = toContactSourceType(pageIdentity.pageType);
  if (!pageIdentity.primarySystem) {
    throw new Error('ActionButtons requires an explicit primarySystem.');
  }

  const primarySystem = pageIdentity.primarySystem;
  const primaryAction: ButtonProps = {
    variant: primaryActionVariant,
    label: getPrimaryCTA(),
    ...(primaryButtonCssPrefix ? { cssPrefix: primaryButtonCssPrefix } : {}),
    href: buildContactHref({
      system: primarySystem,
      sourceType: pageTypeForHref,
      slug,
    }),
  };

  const secondaryActionLabel = getSecondaryCTA(allowSecondaryAction);
  const secondaryAction: ButtonProps | undefined = secondaryActionLabel
    ? {
        variant: 'outline',
        label: secondaryActionLabel,
        href: buildContactHref({
          system: primarySystem,
          sourceType: pageTypeForHref,
          slug,
        }),
      }
    : undefined;

  if (!isActionableButton(primaryAction)) {
    throw new Error('ActionButtons requires an actionable primary action.');
  }

  if (secondaryAction && !allowSecondaryAction) {
    throw new Error('Secondary action requires allowSecondaryAction: true');
  }

  return (
    <div className={cn('flex flex-col gap-4 sm:flex-row sm:flex-wrap', className)}>
      <Button {...primaryAction} />
      {secondaryAction ? <Button {...secondaryAction} /> : null}
    </div>
  );
}
