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
import { CTA_CONFIG, CTA_INTENT_OVERRIDES, type CTAIntensity } from '@/config/ui-intelligence';
import type { ContentNodeType } from '@/lib/content-graph/types';
import type { ContentIntent } from '@/lib/ui/ctaEngine';
import { type LinkIntent, resolveCTA } from '@/lib/ui/ctaResolver';

// ── Types ────────────────────────────────────────────────────────────

interface SmartCTAProps {
  pageType: ContentNodeType;
  /** Intent — overrides default intensity */
  intent?: LinkIntent;
  /** Content-level intent (PROBLEM, SYSTEM, ACTIONABLE, etc.) for title/description override */
  contentIntent?: ContentIntent;
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

// ── Helpers ──────────────────────────────────────────────────────────

function buildContactHref(
  baseHref: string,
  pageType: ContentNodeType,
  system?: string,
  slug?: string
): string {
  if (baseHref !== '/contact') return baseHref;
  const params = new URLSearchParams();
  if (system) params.set('system', system);
  params.set('source', slug ? `${pageType}/${slug}` : pageType);
  const qs = params.toString();
  return qs ? `${baseHref}?${qs}` : baseHref;
}

// ── Component ────────────────────────────────────────────────────────

export function SmartCTA({
  pageType,
  intent,
  contentIntent,
  system,
  slug,
  backgroundColor: bgOverride,
  title: titleOverride,
  description: descOverride,
}: SmartCTAProps) {
  const config = CTA_CONFIG[pageType];
  const resolved = resolveCTA({ pageType, intent });

  // Use intent-resolved intensity when intent is provided, otherwise use config default
  const intensity = intent ? resolved.level : config.intensity;
  const style = INTENSITY_STYLES[intensity];

  // Resolve intent-based title/description overrides
  const intentKey = contentIntent ? `${pageType}:${contentIntent}` : undefined;
  const intentOverride = intentKey ? CTA_INTENT_OVERRIDES[intentKey] : undefined;

  return (
    <CTASection
      title={titleOverride ?? intentOverride?.title ?? config.title}
      description={descOverride ?? intentOverride?.description ?? config.description}
      primaryAction={{
        label: config.actionLabel,
        href: buildContactHref(config.actionHref, pageType, system, slug),
      }}
      backgroundColor={bgOverride ?? style.backgroundColor}
      cssPrefix={style.cssPrefix}
    />
  );
}
