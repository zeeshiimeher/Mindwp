import {
  ArrowRight,
  Bot,
  Briefcase,
  Calendar,
  ChartNoAxesCombined,
  Globe,
  MessageSquare,
  Search,
  Settings,
  ShieldCheck,
  Workflow,
} from 'lucide-react';
import type { ComponentType } from 'react';

import { CardGrid, SectionWrapper } from '@/components/reusable/primitives';
import { LinkCard, SectionIntro } from '@/components/reusable/single';
import { Button } from '@/components/reusable/single/Button';
import { Card } from '@/components/reusable/single/Card';
import { cn } from '@/components/ui/utils';

const BLOCK = 'c-related-cards-section';
const EXPLORE_BLOCK = 'c-explore-cards-section';
const STYLE1_GRADIENT_SEQUENCE = ['blue', 'teal', 'purple'] as const;

const FALLBACK_ICON_SEQUENCE: Array<ComponentType<{ className?: string }>> = [
  Globe,
  Workflow,
  Search,
  MessageSquare,
  Calendar,
  Bot,
  ChartNoAxesCombined,
  ShieldCheck,
  Settings,
  Briefcase,
];

type IconRule = {
  icon: ComponentType<{ className?: string }>;
  keywords: string[];
};

const ICON_RULES: IconRule[] = [
  { icon: Search, keywords: ['seo', 'search', 'ranking', 'visibility', 'local seo'] },
  { icon: Bot, keywords: ['ai', 'chatbot', 'assistant', 'automation', 'agent'] },
  { icon: Workflow, keywords: ['workflow', 'process', 'pipeline', 'system', 'operations'] },
  { icon: Calendar, keywords: ['calendar', 'booking', 'appointment', 'schedule'] },
  { icon: MessageSquare, keywords: ['inbox', 'message', 'chat', 'conversation', 'reply'] },
  { icon: ChartNoAxesCombined, keywords: ['growth', 'performance', 'analytics', 'revenue'] },
  { icon: ShieldCheck, keywords: ['audit', 'security', 'compliance', 'quality'] },
  { icon: Briefcase, keywords: ['service', 'business', 'industry', 'case study'] },
];

/**
 * Visual variants for related cards.
 *
 * - `default`: standard LinkCard-based related cards UI.
 * - `style1`: same title/description structure as default, with gradient
 *   background treatment and a stronger CTA button style.
 * - `session-auto`: resolved externally (client-side) to `default` or `style1`.
 *
 * Typical usage:
 * - Fixed style per page:
 *   `<RelatedCardsSection styleVariant='default' ... />`
 *   `<RelatedCardsSection styleVariant='style1' ... />`
 * - Per-session style switching:
 *   use `AutoRelatedContentCardsSection` (client wrapper) and provide
 *   a page-specific `sessionVariantKey` when you want independent behavior per page.
 */
export type RelatedCardsStyleVariant = 'default' | 'style1' | 'session-auto';

interface RelatedCardItem {
  title: string;
  desc?: string;
  description?: string;
  href?: string;
  icon?: ComponentType<{ className?: string }>;
  gradient?: string;
  iconBg?: string;
}

export interface RelatedCardsSectionProps {
  badge?: string;
  title: string;
  description?: string;
  primaryAction?: {
    label?: string;
    text?: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryAction?: {
    label?: string;
    text?: string;
    href?: string;
    onClick?: () => void;
  };
  items: RelatedCardItem[];
  backgroundColor?: string;
  /** Additional class(es) for the root element (additive only). */
  cssPrefix?: string;
  showArrows?: boolean;
  /**
   * Controls which visual style to render.
   *
   * Notes:
   * - Prefer `default` or `style1` for explicit per-page control.
   * - `session-auto` requires a resolved variant from client context.
   */
  styleVariant?: RelatedCardsStyleVariant;
  ctaLabel?: string;
  /**
   * Required only when `styleVariant='session-auto'`.
   *
   * This should be passed by a client wrapper (for example
   * `AutoRelatedContentCardsSection`) after reading/writing sessionStorage.
   */
  sessionResolvedVariant?: 'default' | 'style1';
}

export function RelatedCardsSection({
  badge,
  title,
  description,
  primaryAction,
  secondaryAction,
  items,
  backgroundColor = '',
  cssPrefix = '',
  showArrows = true,
  styleVariant = 'default',
  ctaLabel = 'Learn More',
  sessionResolvedVariant,
}: RelatedCardsSectionProps) {
  // Server-safe resolution: `session-auto` falls back to `default` unless a
  // client wrapper provides `sessionResolvedVariant`.
  const resolvedVariant =
    styleVariant === 'session-auto' ? (sessionResolvedVariant ?? 'default') : styleVariant;

  const isStyle1 = resolvedVariant === 'style1';
  const activeBlock = isStyle1 ? EXPLORE_BLOCK : BLOCK;

  const getGradientVariantByIndex = (index: number) => {
    return STYLE1_GRADIENT_SEQUENCE[index % STYLE1_GRADIENT_SEQUENCE.length];
  };

  const getIconToneClass = (index: number) => {
    const variant = getGradientVariantByIndex(index);
    if (variant === 'blue') return `${activeBlock}__icon--blue`;
    if (variant === 'teal') return `${activeBlock}__icon--teal`;
    return `${activeBlock}__icon--purple`;
  };

  const hashString = (value: string) => {
    let hash = 0;
    for (let index = 0; index < value.length; index += 1) {
      hash = (hash * 31 + value.charCodeAt(index)) >>> 0;
    }
    return hash;
  };

  const getDefaultIconForItem = (item: RelatedCardItem, index: number) => {
    const searchableText = `${item.title} ${item.description ?? item.desc ?? ''}`.toLowerCase();

    let bestIcon: ComponentType<{ className?: string }> | null = null;
    let bestScore = 0;

    for (const rule of ICON_RULES) {
      let score = 0;
      for (const keyword of rule.keywords) {
        if (searchableText.includes(keyword)) {
          score += keyword.length;
        }
      }

      if (score > bestScore) {
        bestScore = score;
        bestIcon = rule.icon;
      }
    }

    if (bestIcon) return bestIcon;

    const fallbackKey = `${item.title}:${index}`;
    const fallbackIndex = hashString(fallbackKey) % FALLBACK_ICON_SEQUENCE.length;
    return FALLBACK_ICON_SEQUENCE[fallbackIndex];
  };

  const getStyle1GradientClass = (index: number) => {
    const variant = getGradientVariantByIndex(index);
    return `${activeBlock}__card--gradient-${variant}`;
  };

  return (
    <SectionWrapper background={backgroundColor} className={cn(activeBlock, cssPrefix)}>
      <SectionIntro
        {...(badge !== undefined && { badge })}
        title={title}
        {...(description !== undefined && { description })}
        className={`${activeBlock}__header`}
        {...(primaryAction !== undefined && { primaryAction })}
        {...(secondaryAction !== undefined && { secondaryAction })}
      />
      {isStyle1 ? (
        <CardGrid columns={1} gap={6} mode='controlled' className='lg:l-grid-3'>
          {items.map((item, index) => {
            const style1GradientClass = getStyle1GradientClass(index);
            const Icon = item.icon ?? getDefaultIconForItem(item, index);
            const iconToneClass = getIconToneClass(index);

            return (
              <Card
                key={`${item.href ?? item.title}-${index}`}
                className={cn('card-style-link', `${activeBlock}__card`, style1GradientClass)}
              >
                <div className='card-style-link__inner'>
                  <div className='card-style-link__body'>
                    <div className={cn(`${activeBlock}__icon`, iconToneClass)}>
                      <Icon className={`${activeBlock}__icon-svg`} />
                    </div>
                    <h3 className='card-style-link__title'>{item.title}</h3>
                    <p className='card-style-link__desc'>{item.description ?? item.desc ?? ''}</p>
                  </div>

                  {item.href ? (
                    <div className='card-style-link__footer'>
                      <div className='card-style-link__footer-row'>
                        <Button
                          href={item.href}
                          variant='link'
                          label={ctaLabel}
                          icon={ArrowRight}
                          showDefaultIcon
                          cssPrefix={`${activeBlock}__cta`}
                          iconClassName={`${activeBlock}__cta-icon`}
                        />
                      </div>
                    </div>
                  ) : null}
                </div>
              </Card>
            );
          })}
        </CardGrid>
      ) : (
        <CardGrid columns={1} gap={6} mode='controlled' className='lg:l-grid-3'>
          {items.map((item, index) => (
            <LinkCard
              key={index}
              title={item.title}
              desc={item.desc ?? item.description ?? ''}
              {...(item.href !== undefined && { href: item.href })}
              showArrow={showArrows}
              cssPrefix='related-card'
            />
          ))}
        </CardGrid>
      )}
    </SectionWrapper>
  );
}
