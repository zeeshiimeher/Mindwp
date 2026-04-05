/**
 * SmartCTA
 *
 * Graph-aware CTA that adjusts intensity based on page type and intent.
 * Primary config from CTA_CONFIG. Intent-based override from ctaResolver.
 *
 * Intensity levels:
 * - soft: learn intent (exploring, not ready to commit)
 * - mid: compare intent (planning, evaluating)
 * - strong: buy intent (ready to act)
 *
 * Data flow: pageType + intent → CTA_CONFIG (base) → ctaResolver (label override) → CTASection
 */

import { CTASection } from '@/components/reusable/single/CTASection';
import { CTA_CONFIG, type CTAIntensity } from '@/config/ui-intelligence';
import type { ContentNodeType } from '@/lib/content-graph/types';
import type { LinkIntent } from '@/lib/internal-linking/types';
import { resolveCTA } from '@/lib/ui/ctaResolver';

// ── Types ────────────────────────────────────────────────────────────

interface SmartCTAProps {
  pageType: ContentNodeType;
  /** Intent from internal linking system — overrides default intensity */
  intent?: LinkIntent;
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

// ── Component ────────────────────────────────────────────────────────

export function SmartCTA({
  pageType,
  intent,
  backgroundColor: bgOverride,
  title: titleOverride,
  description: descOverride,
}: SmartCTAProps) {
  const config = CTA_CONFIG[pageType];
  const resolved = resolveCTA({ pageType, intent });

  // Use intent-resolved intensity when intent is provided, otherwise use config default
  const intensity = intent ? resolved.level : config.intensity;
  const style = INTENSITY_STYLES[intensity];

  return (
    <CTASection
      title={titleOverride ?? config.title}
      description={descOverride ?? config.description}
      primaryAction={{
        label: config.actionLabel,
        href: config.actionHref,
      }}
      backgroundColor={bgOverride ?? style.backgroundColor}
      cssPrefix={style.cssPrefix}
    />
  );
}
