import React from 'react';

import { SectionWrapper } from '@/components/reusable/primitives/SectionWrapper';
import { Badge } from '@/components/reusable/single/Badge';
import { SectionIntro } from '@/components/reusable/single/SectionIntro';
import { SmartCTA, type SmartCTAProps } from '@/components/system/SmartCTA';
import { cn } from '@/components/ui/utils';

const BLOCK = 'feature-hero';

/**
 * SplitHeroSection - Advanced hero section with 2-column layout
 *
 * Creates a 2-column hero section with SectionIntro on the left,
 * optional stats grid, and custom visual content on the right.
 * Perfect for pages that need to showcase interactive demos
 * or visual interfaces alongside feature descriptions.
 *
 * @example
 * ```tsx
 * <SplitHeroSection
 *   badge="Calendars Feature"
 *   badgeIcon={Calendar}
 *   title="Online Appointment Booking"
 *   description="Book appointments online with automated reminders"
 *   stats={[
 *     { value: "Online", label: "Booking" },
 *     { value: "Automated", label: "Reminders" }
 *   ]}
 *   primaryAction={{ label: "Start a Conversation", href: "/services" }}
 *   visualContent={<BookingInterface />}
 *   cssPrefix="calendars-hero"
 * />
 * ```
 */
export interface SplitHeroSectionProps {
  /**
   * Badge text displayed above the title
   * Can be a string or custom React element (e.g., with icon)
   */
  badge: string | React.ReactElement;

  /**
   * Icon component for the badge
   * Should be a Lucide React icon component
   */
  badgeIcon: React.ComponentType<{ className?: string }>;

  /** Main hero heading - the primary message */
  title: string;

  /** Optional heading tag for title semantics. @default 'h1' */
  headingTag?: 'h1' | 'h2' | 'h3';

  /** Descriptive text explaining the feature value proposition */
  description: string;

  /**
   * Optional stats grid displayed below the description
   * Array of stat objects with value and label
   */
  stats?: Array<{
    value: string;
    label: string;
  }>;

  /** SmartCTA ownership context for page hero CTAs */
  smartCta: Pick<
    SmartCTAProps,
    | 'system'
    | 'pageType'
    | 'slug'
    | 'primaryActionVariant'
    | 'primaryButtonCssPrefix'
    | 'secondaryButtonCssPrefix'
  >;

  /**
   * Custom visual content for the right column
   * Can be any React component (charts, interfaces, demos, etc.)
   */
  visualContent: React.ReactNode;

  /**
   * Additional class(es) for the root element.
   *
   * Note: The component always applies its internal BEM block class (`feature-hero`).
   * This prop is additive and will not change the BEM base.
   */
  cssPrefix?: string;

  /**
   * Background color/styling for the section
   *
   * @default "default"
   * Accepts additive className strings
   */
  backgroundColor?: string;

  /**
   * Decorative background elements
   * Array of objects defining blur circles for visual interest
   */
  decorations?: Array<{
    position: 'top-right' | 'bottom-left' | 'top-left' | 'bottom-right';
    color: string;
    size?: string;
  }>;
}

export function SplitHeroSection({
  badge,
  badgeIcon: BadgeIcon,
  title,
  headingTag = 'h1',
  description,
  stats,
  smartCta,
  visualContent,
  cssPrefix = '',
  backgroundColor = '',
  decorations = [
    { position: 'top-right', color: 'blue', size: 'lg' },
    { position: 'bottom-left', color: 'purple', size: 'lg' },
  ],
}: SplitHeroSectionProps) {
  const getDecorationColorClass = (color: string) => {
    if (color === 'blue' || color === 'bg-blue-200') return `${BLOCK}__decoration--blue`;
    if (color === 'purple' || color === 'bg-purple-200') return `${BLOCK}__decoration--purple`;
    return color;
  };

  const getDecorationSizeClass = (size: string | undefined) => {
    if (!size || size === 'lg') return `${BLOCK}__decoration--lg`;
    if (size === 'md') return `${BLOCK}__decoration--md`;
    if (size === 'sm') return `${BLOCK}__decoration--sm`;
    return `${BLOCK}__decoration--lg`;
  };

  if (!smartCta) {
    throw new Error('SplitHeroSection requires smartCta for CTA rendering.');
  }

  return (
    <SectionWrapper className={cn(BLOCK, backgroundColor, cssPrefix)}>
      {/* Background decorations */}
      {decorations.map((decoration, index) => (
        <div
          key={index}
          className={cn(
            `${BLOCK}__decoration`,
            `${BLOCK}__decoration--${decoration.position}`,
            getDecorationColorClass(decoration.color),
            getDecorationSizeClass(decoration.size)
          )}
          aria-hidden='true'
        />
      ))}

      <div className={`${BLOCK}__container`}>
        <div className={`${BLOCK}__grid`}>
          {/* Left: Content */}
          <div className={`${BLOCK}__content`}>
            <SectionIntro
              badge={
                <Badge variant='outline' context='section' cssPrefix='feature-hero__badge'>
                  <BadgeIcon className='badge__icon' />
                  {badge}
                </Badge>
              }
              title={title}
              headingLevel={headingTag}
              description={description}
              className={`${BLOCK}__header`}
              alignment='left'
              marginBottom={false}
            />

            {/* Stats Grid */}
            {stats && stats.length > 0 && (
              <div className={`${BLOCK}__stats`}>
                {stats.map((stat, index) => (
                  <div key={index} className={`${BLOCK}__stat`}>
                    <div className={`${BLOCK}__stat-value`}>{stat.value}</div>
                    <div className={`${BLOCK}__stat-label`}>{stat.label}</div>
                  </div>
                ))}
              </div>
            )}

            <div className={`${BLOCK}__buttons`}>
              <SmartCTA
                system={smartCta.system}
                pageType={smartCta.pageType}
                slug={smartCta.slug}
                primaryActionVariant={smartCta.primaryActionVariant}
                primaryButtonCssPrefix={cn(
                  `${BLOCK}__primary-cta`,
                  smartCta.primaryButtonCssPrefix
                )}
                secondaryButtonCssPrefix={cn(
                  `${BLOCK}__secondary-cta`,
                  smartCta.secondaryButtonCssPrefix
                )}
                mode='actions-only'
                actionClassName='feature-hero__buttons-smart'
              />
            </div>
          </div>

          {/* Right: Visual Content */}
          <div className={`${BLOCK}__visual`}>{visualContent}</div>
        </div>
      </div>
    </SectionWrapper>
  );
}
