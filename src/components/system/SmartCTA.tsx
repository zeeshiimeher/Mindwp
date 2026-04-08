/**
 * SmartCTA
 *
 * Graph-aware CTA that adjusts CTA intensity by page type only.
 * Primary config comes from CTA_CONFIG and contact routing comes only from buildContactHref.
 */

import { CTASection } from '@/components/reusable/single/CTASection';
import { resolveCtaLabel } from '@/config/cta-labels';
import { CTA_CONFIG, type CTAIntensity } from '@/config/ui-intelligence';
import { buildContactHref, type ContactSourceType } from '@/lib/contact/contactHref';
import type { ContentNodeType } from '@/lib/content-graph/types';

// ── Types ────────────────────────────────────────────────────────────

interface SmartCTAProps {
  pageType: ContentNodeType;
  /** Primary system key — appended to /contact as ?system= */
  system?: string;
  /** Content slug — used for full source path (e.g. blog/my-post) */
  slug?: string;
  /** Override the background color (Tailwind class) */
  backgroundColor?: string;
  /** Override the CTA title */
  title?: string;
  /** Override the CTA description */
  description?: string;
}

// ── Intensity → Visual Mapping ───────────────────────────────────────

const INTENSITY_STYLES: Record<CTAIntensity, { backgroundColor: string; cssPrefix: string }> = {
  soft: { backgroundColor: 'blog-surface--muted', cssPrefix: 'cta-soft' },
  mid: { backgroundColor: 'bg-gradient-primary', cssPrefix: 'cta-mid' },
  strong: { backgroundColor: 'bg-gradient-secondary', cssPrefix: 'cta-strong' },
};

function getContactSourceType(pageType: ContentNodeType): ContactSourceType {
  if (pageType === 'industry-detail' || pageType === 'industry-category') {
    return 'industry';
  }

  return pageType;
}

// ── Component ────────────────────────────────────────────────────────

export function SmartCTA({
  pageType,
  system,
  slug,
  backgroundColor: bgOverride,
  title: titleOverride,
  description: descOverride,
}: SmartCTAProps) {
  const config = CTA_CONFIG[pageType];
  const style = INTENSITY_STYLES[config.intensity];
  const resolvedSystem = system ?? 'smart-website-systems';

  return (
    <CTASection
      title={titleOverride ?? config.title}
      description={descOverride ?? config.description}
      primaryAction={{
        label: resolveCtaLabel(resolvedSystem),
        href: buildContactHref({
          system: resolvedSystem,
          sourceType: getContactSourceType(pageType),
          slug: slug ?? 'index',
        }),
      }}
      backgroundColor={bgOverride ?? style.backgroundColor}
      cssPrefix={style.cssPrefix}
    />
  );
}
