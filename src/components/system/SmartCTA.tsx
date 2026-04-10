import { CheckCircle2 } from 'lucide-react';
import type { ReactNode } from 'react';

import { SectionWrapper } from '@/components/reusable/primitives';
import { Button, type ButtonProps } from '@/components/reusable/single/Button';
import { cn } from '@/components/ui/utils';
import { DEFAULT_CTA_LABEL, inferIntent, resolveCtaLabel, type CtaTone } from '@/config/ctaLabels';
import { buildContactHref, type ContactSourceType } from '@/lib/contact/contactHref';

const BLOCK = 'cta-section';
const ALLOW_SECONDARY_BY_PAGE_TYPE: Record<ContactSourceType, boolean> = {
  blog: false,
  'case-study': false,
  feature: true,
  global: false,
  industry: true,
  page: false,
  resource: false,
  service: false,
};

const SECONDARY_CTA_MAP: Partial<Record<ContactSourceType, { label: string; href: (slug: string) => string }>> = {
  feature: {
    label: 'See How It Works',
    href: slug => `/features/${slug}`,
  },
  industry: {
    label: 'See How This Applies to Your Business',
    href: slug => `/industries/${slug}`,
  },
};

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

export interface SmartCTAProps {
  system: string;
  pageType: ContactSourceType;
  slug: string;
  mode?: 'full' | 'actions-only';
  backgroundColor?: string;
  cssPrefix?: string;
  actionClassName?: string;
  primaryButtonCssPrefix?: string;
  title?: string;
  description?: string;
  badge?: {
    text: string;
    icon?: ReactNode;
    className?: string;
  };
  headingLevel?: 'h2' | 'h3';
  primaryActionVariant?: ButtonProps['variant'];
  tone?: CtaTone;
  secondaryButtonCssPrefix?: string;
  metaItems?: Array<{ text: string }>;
  wrapper?: 'section' | 'none';
  includeContainer?: boolean;
}

export function SmartCTA({
  system,
  pageType,
  slug,
  mode = 'full',
  backgroundColor = '',
  cssPrefix = '',
  actionClassName = '',
  primaryButtonCssPrefix,
  title,
  description,
  badge,
  headingLevel = 'h2',
  primaryActionVariant = 'white',
  tone = 'descriptive',
  secondaryButtonCssPrefix,
  metaItems = [],
  wrapper = 'section',
  includeContainer = true,
}: SmartCTAProps) {
  const resolvedTitle = title ?? DEFAULT_CTA_LABEL;

  if (!system || !pageType || !slug) {
    throw new Error('SmartCTA requires system, pageType, and slug');
  }

  const label = resolveCtaLabel({
    system,
    pageType,
    intent: inferIntent(pageType),
    tone,
  });
  const allowSecondary = ALLOW_SECONDARY_BY_PAGE_TYPE[pageType];
  const secondaryConfig = allowSecondary ? SECONDARY_CTA_MAP[pageType] : undefined;

  const primaryAction: ButtonProps = {
    variant: primaryActionVariant,
    label,
    ...(primaryButtonCssPrefix ? { cssPrefix: primaryButtonCssPrefix } : {}),
    href: buildContactHref({
      system,
      source: `${pageType}/${slug}`,
    }),
  };
  const secondaryAction: ButtonProps | undefined = secondaryConfig
    ? {
        variant: 'outline-light',
        label: secondaryConfig.label,
        ...(secondaryButtonCssPrefix ? { cssPrefix: secondaryButtonCssPrefix } : {}),
        href: secondaryConfig.href(slug),
      }
    : undefined;

  if (mode === 'full' && resolvedTitle.trim().length === 0) {
    throw new Error('SmartCTA requires a non-empty title.');
  }

  if (!isActionableButton(primaryAction) && !isActionableButton(secondaryAction)) {
    throw new Error('SmartCTA requires at least one actionable primary or secondary action.');
  }

  if (mode === 'actions-only') {
    return (
      <div className={cn('cta__actions', actionClassName)}>
        <Button {...primaryAction} />
      </div>
    );
  }

  const HeadingTag = headingLevel;
  const rootClassName = cn(BLOCK, 'cta', cssPrefix);
  const panelClassName = cn(
    'cta__panel',
    'cta__content',
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
        <HeadingTag className='cta-heading'>{resolvedTitle}</HeadingTag>
      </div>

      {description && <p className='cta__text'>{description}</p>}

      <div className='cta__actions'>
        <Button {...primaryAction} />
        {secondaryAction && <Button {...{ variant: 'outline-light', ...secondaryAction }} />}
      </div>

      {metaItems.length > 0 && (
        <div className='cta__meta'>
          {metaItems.map((item, index) => (
            <div key={index} className='cta__meta-item'>
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
