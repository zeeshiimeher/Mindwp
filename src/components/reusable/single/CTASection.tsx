import { type ReactNode } from 'react';
import { CheckCircle2 } from 'lucide-react';

import { Button, type ButtonProps } from './Button';

const BLOCK = 'cta-section';

/**
 * CTASection - Conversion-focused call-to-action section
 *
 * Creates a compelling final call-to-action section with title, description,
 * prominent button, and optional trust indicators. Designed for
 * service and feature page conversions with a clean, focused layout that drives action.
 *
 * @example
 * <CTASection
 *   title="Get Clarity on Your WordPress Site"
 *   description="Request a technical and SEO audit for your WordPress site. Gain understanding of technical factors and receive WordPress-specific recommendations."
 *   primaryAction={{
 *     label: "Request Audit Consultation",
 *     href: "/contact"
 *   }}
 *   metaItems={[
 *     { text: "WordPress specialists" },
 *     { text: "Diagnostic, not prescriptive" },
 *     { text: "Actionable, prioritized findings" }
 *   ]}
 *   cssPrefix="audit-cta"
 * />
 * ```
 */
export interface CTASectionProps {
  /** Main call-to-action heading */
  title: string;

  /** Descriptive text explaining the value proposition */
  description?: string;

  /** Optional badge displayed above the heading */
  badge?: {
    text: string;
    icon?: ReactNode;
    className?: string;
  };

  /** Heading element to use for the title */
  headingLevel?: 'h2' | 'h3';

  /** Primary call-to-action button configuration */
  primaryAction?: ButtonProps;

  /** Optional secondary call-to-action button configuration */
  secondaryAction?: ButtonProps;

  /**
   * Optional array of trust indicators or guarantees
   * Displayed as checkmark items below the main content
   * Perfect for highlighting credentials, guarantees, or key benefits
   */
  metaItems?: Array<{
    /** Text content for each meta item */
    text: string;
  }>;

  /**
   * Additional class(es) for the root element.
   *
   * Note: The component always applies its internal BEM block class (`cta-section`).
   * This prop is additive and will not change the BEM base.
   */
  cssPrefix?: string;

  /**
   * Background color/styling for the section
   * @default ""
   * Accepts any Tailwind CSS background classes
   * Often used for footer-cta styling
   */
  backgroundColor?: string;

  /**
   * Controls whether the component renders the outer <section> wrapper.
   * Use `wrapper="none"` when you need to place the CTA panel inside an existing section.
   * @default "section"
   */
  wrapper?: 'section' | 'none';

  /**
   * Controls whether the component wraps the CTA panel in `.l-container`.
   * Useful when you already have a container and want only the panel markup.
   * @default true
   */
  includeContainer?: boolean;
}

export function CTASection({
  title,
  description,
  badge,
  headingLevel = 'h2',
  primaryAction,
  secondaryAction,
  metaItems = [],
  cssPrefix = '',
  backgroundColor = '',
  wrapper = 'section',
  includeContainer = true,
}: CTASectionProps) {
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
        <HeadingTag className='cta-heading'>{title}</HeadingTag>
      </div>

      {description && <p className='cta__text'>{description}</p>}

      <div className='cta__actions'>
        {primaryAction && <Button {...{ variant: 'white', ...primaryAction }} />}
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

  if (wrapper === 'none') return content;

  return <section className={rootClassName}>{content}</section>;
}
