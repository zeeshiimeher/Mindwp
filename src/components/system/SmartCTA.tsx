import { CheckCircle2 } from 'lucide-react';
import type { ReactNode } from 'react';

import { Button, type ButtonProps } from '@/components/reusable/single/Button';
import { resolveCtaLabel } from '@/config/cta-labels';
import { buildContactHref } from '@/lib/contact/contactHref';

const BLOCK = 'cta-section';

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
  system?: string;
  source: string;
  backgroundColor?: string;
  cssPrefix?: string;
  title?: string;
  description?: string;
  badge?: {
    text: string;
    icon?: ReactNode;
    className?: string;
  };
  headingLevel?: 'h2' | 'h3';
  primaryActionVariant?: ButtonProps['variant'];
  secondaryAction?: ButtonProps;
  metaItems?: Array<{ text: string }>;
  wrapper?: 'section' | 'none';
  includeContainer?: boolean;
}

export function deriveSmartCtaContextFromHref(href?: string) {
  if (!href) {
    return {
      system: 'smart-website-systems',
      source: 'global/navigation',
    };
  }

  try {
    const url = new URL(href, 'https://mindwp.local');
    const system = url.searchParams.get('system') ?? 'smart-website-systems';
    const source = url.searchParams.get('source') ?? 'global/navigation';

    return { system, source };
  } catch {
    return {
      system: 'smart-website-systems',
      source: 'global/navigation',
    };
  }
}

export function SmartCTA({
  system,
  source,
  backgroundColor = '',
  cssPrefix = '',
  title,
  description,
  badge,
  headingLevel = 'h2',
  primaryActionVariant = 'white',
  secondaryAction,
  metaItems = [],
  wrapper = 'section',
  includeContainer = true,
}: SmartCTAProps) {
  const resolvedSystem = system ?? 'smart-website-systems';
  const resolvedTitle = title ?? 'Start a Conversation';
  const primaryAction: ButtonProps = {
    variant: primaryActionVariant,
    label: resolveCtaLabel(resolvedSystem),
    href: buildContactHref({
      system: resolvedSystem,
      source,
    }),
  };

  if (resolvedTitle.trim().length === 0) {
    throw new Error('SmartCTA requires a non-empty title.');
  }

  if (!isActionableButton(primaryAction) && !isActionableButton(secondaryAction)) {
    throw new Error('SmartCTA requires at least one actionable primary or secondary action.');
  }

  const HeadingTag = headingLevel;
  const rootClassName = [BLOCK, 'cta', cssPrefix].filter(Boolean).join(' ');
  const panelClassName = [
    'cta__panel',
    'cta__content',
    backgroundColor,
    wrapper === 'none' && !includeContainer ? rootClassName : '',
  ]
    .filter(Boolean)
    .join(' ');

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

  return <section className={rootClassName}>{content}</section>;
}
