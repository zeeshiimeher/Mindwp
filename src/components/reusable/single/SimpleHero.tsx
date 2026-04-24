import { SectionWrapper } from '@/components/reusable/primitives/SectionWrapper';
import { SectionIntro } from '@/components/reusable/single/SectionIntro';
import { SmartCTA, type SmartCTAProps } from '@/components/system/SmartCTA';
import { cn } from '@/components/ui/utils';

import { BulletList } from './BulletList';

const BLOCK = 'hero-section';

/**
 * SimpleHero - Basic hero section component
 *
 * Creates an impactful hero section with flexible content options.
 * Combines badge, title, description, action buttons, and optional bullet
 * points in a centered layout with gradient background. Designed for maximum visual
 * impact and conversion optimization.
 *
 * @example
 * ```tsx
 * <SimpleHero
 *   badge="Technical & SEO Audit"
 *   title="WordPress Technical Audit"
 *   description="Uncover technical issues affecting your WordPress site's performance"
 *   primaryAction={{
 *     label: "Request Audit",
 *     href: "/services"
 *   }}
 *   list={[
 *     "WordPress specialists",
 *     "Actionable recommendations",
 *     "Priority-based roadmap"
 *   ]}
 *   backgroundColor="default"
 *   cssPrefix="audit-hero"
 * />
 * ```
 */
export interface SimpleHeroProps {
  /**
   * Optional badge text displayed prominently above the title
   * Uses secondary badge styling when provided
   */
  badge?: string;

  /** Main hero heading - the primary message */
  title: string;

  /** Optional heading tag for title semantics. @default 'h1' */
  headingTag?: 'h1' | 'h2' | 'h3';

  /** Descriptive text explaining the service value proposition */
  description: string;

  /** SmartCTA ownership context for page hero CTAs */
  smartCta?: Pick<
    SmartCTAProps,
    | 'system'
    | 'pageType'
    | 'slug'
    | 'allowSecondaryCTA'
    | 'primaryActionVariant'
    | 'primaryButtonCssPrefix'
    | 'secondaryButtonCssPrefix'
  >;

  /**
   * Additional class(es) for the root element.
   *
   * Note: The component always applies its internal BEM block class (`hero-section`).
   * This prop is additive and will not change the BEM base.
   */
  cssPrefix?: string;

  /**
   * Background color/styling for the section
   * @default default
   * Accepts additive className strings
   */
  backgroundColor?: string;

  /**
   * Optional array of bullet points displayed below the main content
   * Uses the BulletList component for consistent styling
   * Perfect for highlighting key benefits or features
   */
  list?: string[];
}

export function SimpleHero({
  badge,
  title,
  headingTag = 'h1',
  description,
  smartCta,
  cssPrefix = '',
  backgroundColor = '',
  list,
}: SimpleHeroProps) {
  return (
    <SectionWrapper padding='spacious' className={cn(BLOCK, backgroundColor, cssPrefix)}>
      <div
        className={cn(
          `${BLOCK}__container`,
          `${BLOCK}__content`,
          'l-container l-container--narrow',
          'l-stack l-stack--loose'
        )}
      >
        <SectionIntro
          {...(badge !== undefined && { badge })}
          title={title}
          headingLevel={headingTag}
          description={description}
          className={`${BLOCK}__header`}
          marginBottom={false}
        />

        {smartCta ? (
          <SmartCTA
            system={smartCta.system}
            pageType={smartCta.pageType}
            slug={smartCta.slug}
            intent='entry'
            position='hero'
            allowSecondaryCTA={smartCta.allowSecondaryCTA}
            primaryActionVariant={smartCta.primaryActionVariant}
            primaryButtonCssPrefix={smartCta.primaryButtonCssPrefix}
            secondaryButtonCssPrefix={smartCta.secondaryButtonCssPrefix}
            mode='actions-only'
          />
        ) : null}

        {list && list.length > 0 && <BulletList items={list} cssPrefix={`${BLOCK}__list`} />}
      </div>
    </SectionWrapper>
  );
}
