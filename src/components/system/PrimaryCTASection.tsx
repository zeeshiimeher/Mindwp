'use client';

import { useEffect, useId } from 'react';
import { CheckCircle2 } from 'lucide-react';
import type { ReactNode } from 'react';

import { SectionWrapper } from '@/components/reusable/primitives';
import { Button, type ButtonProps } from '@/components/reusable/single/Button';
import { useCTARegistry, usePageIdentity } from '@/components/system/PageEnforcement';
import { cn } from '@/components/ui/utils';
import { buildContactHref, type ContactSourceType } from '@/lib/contact/contactHref';
import { registerCTA, unregisterCTA } from '@/lib/cta/ctaRegistry';
import { getPrimaryCTA, getSecondaryCTA } from '@/lib/cta/primaryAction';
import { toContactSourceType } from '@/lib/page/pageIdentity';

const BLOCK = 'primary-cta-section';

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

export interface PrimaryCTASectionProps {
  title: string;
  description: string;
  backgroundColor?: string;
  cssPrefix?: string;
  primaryButtonCssPrefix?: string;
  badge?: {
    text: string;
    icon?: ReactNode;
    className?: string;
  };
  headingLevel?: 'h2' | 'h3';
  primaryActionVariant?: ButtonProps['variant'];
  allowSecondaryCTA?: true;
  metaItems?: Array<{ text: string }>;
  wrapper?: 'section' | 'none';
  includeContainer?: boolean;
}

export function PrimaryCTASection({
  backgroundColor = '',
  cssPrefix = '',
  primaryButtonCssPrefix,
  title,
  description,
  badge,
  headingLevel = 'h2',
  primaryActionVariant = 'white',
  allowSecondaryCTA,
  metaItems = [],
  wrapper = 'section',
  includeContainer = true,
}: PrimaryCTASectionProps) {
  const instanceId = useId();
  const pageIdentity = usePageIdentity();
  const activeRegistry = useCTARegistry();

  if (!title.trim() || !description.trim()) {
    throw new Error('PrimaryCTASection requires title and description');
  }

  if (!pageIdentity || !activeRegistry) {
    throw new Error('PrimaryCTASection requires CTARegistryProvider at the template level.');
  }
  const registry = activeRegistry;
  const slug = pageIdentity.pageId.split(':').slice(1).join(':').trim();

  if (!slug) {
    throw new Error('PrimaryCTASection requires a page identity slug.');
  }

  const pageTypeForHref: ContactSourceType = toContactSourceType(pageIdentity.pageType);
  const primarySystem = pageIdentity.primarySystem ?? 'smart-website-systems';
  const primaryLabel = getPrimaryCTA();
  const secondaryLabel = getSecondaryCTA(allowSecondaryCTA);

  if (!allowSecondaryCTA && secondaryLabel) {
    throw new Error('Secondary CTA requires allowSecondaryCTA: true');
  }

  useEffect(() => {
    registerCTA(registry, {
      instanceId,
      pageId: pageIdentity.pageId,
      pageType: pageIdentity.pageType,
      intent: 'conversion',
      position: 'footer',
    });

    return () => {
      unregisterCTA(registry, instanceId);
    };
  }, [instanceId, pageIdentity.pageId, pageIdentity.pageType, registry]);

  const primaryButtonAction: ButtonProps = {
    variant: primaryActionVariant,
    label: primaryLabel,
    ...(primaryButtonCssPrefix ? { cssPrefix: primaryButtonCssPrefix } : {}),
    href: buildContactHref({
      system: primarySystem,
      sourceType: pageTypeForHref,
      slug,
    }),
  };

  const secondaryButtonAction: ButtonProps | undefined = secondaryLabel
    ? {
        variant: 'outline',
        label: secondaryLabel,
        href: buildContactHref({
          system: primarySystem,
          sourceType: pageTypeForHref,
          slug,
        }),
      }
    : undefined;

  if (!isActionableButton(primaryButtonAction)) {
    throw new Error('PrimaryCTASection requires an actionable primary action.');
  }

  if (secondaryButtonAction && !allowSecondaryCTA) {
    throw new Error('Secondary CTA requires allowSecondaryCTA: true');
  }

  const HeadingTag = headingLevel;
  const rootClassName = cn(BLOCK, cssPrefix);
  const panelClassName = cn(
    `${BLOCK}__panel`,
    backgroundColor,
    wrapper === 'none' && !includeContainer ? rootClassName : ''
  );

  const panel = (
    <div className={panelClassName}>
      {badge && (
        <div className='cta__animate-in'>
          <span className={badge.className ?? 'badge badge-outline-white cta__badge'}>
            {badge.icon}
            <span>{badge.text}</span>
          </span>
        </div>
      )}

      <div className='cta__animate-in'>
        <HeadingTag className='cta-heading'>{title}</HeadingTag>
      </div>

      {description && <p className='cta__text'>{description}</p>}

      <div className={`${BLOCK}__actions`}>
        <Button {...primaryButtonAction} />
        {secondaryButtonAction ? <Button {...secondaryButtonAction} /> : null}
      </div>

      {metaItems.length > 0 && (
        <div className='cta__meta'>
          {metaItems.map(item => (
            <div key={item.text} className='cta__meta-item'>
              <CheckCircle2 className='cta__icon' />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const content = includeContainer ? (
    <div className={wrapper === 'none' ? ['l-container', rootClassName].join(' ') : 'l-container'}>
      {panel}
    </div>
  ) : (
    panel
  );

  if (wrapper === 'none') {
    return content;
  }

  return (
    <SectionWrapper padding='none' container='none' className={rootClassName}>
      {content}
    </SectionWrapper>
  );
}
