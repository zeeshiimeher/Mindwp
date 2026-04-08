// ─── Overlay Design System ──────────────────────────────────────────
// Intelligent, content-aware design system for featured image overlays
// Resolves visual variant, icon, badge, and color palette from metadata

import { tokens } from '../render/design-system/tokens';
import type {
  BrightnessResult,
  ColorPalette,
  ContentDomain,
  ContentMetadata,
  IllustrationVariant,
  LayoutVariant,
  OverlayDesignContext,
  OverlayVariant,
  TextStyle,
  VisualMode,
  VisualTreatment,
} from '../types';

// ─── Variant Resolution ─────────────────────────────────────────────

const SYSTEM_KEYWORDS = ['system', 'workflow', 'pipeline', 'automation', 'integration', 'ai-lead'];
const ANALYTICAL_KEYWORDS = [
  'metrics',
  'conversion',
  'roi',
  'performance',
  'analytics',
  'tracking',
  'data',
  'authority',
];
const LOCAL_INDUSTRY_KEYWORDS = [
  'plumbing',
  'hvac',
  'salon',
  'roofing',
  'dental',
  'cleaning',
  'landscaping',
  'electrical',
  'painting',
  'pest',
  'locksmith',
  'carpet',
  'moving',
  'towing',
  'spa',
  'beauty',
];

/** Resolve overlay variant from content metadata and domain */
export function resolveOverlayVariant(
  metadata: ContentMetadata,
  domain: ContentDomain
): OverlayVariant {
  if (domain === 'case-studies') return 'results';

  const allText = [
    metadata.title,
    metadata.primaryKeyword,
    ...metadata.topics,
    ...metadata.tags,
    ...metadata.systems,
  ].map(t => t.toLowerCase());

  if (allText.some(t => SYSTEM_KEYWORDS.some(k => t.includes(k)))) return 'system';
  if (allText.some(t => ANALYTICAL_KEYWORDS.some(k => t.includes(k)))) return 'analytical';
  if (allText.some(t => LOCAL_INDUSTRY_KEYWORDS.some(k => t.includes(k)))) return 'local';

  return 'editorial';
}

// ─── Icon Engine ────────────────────────────────────────────────────
// 16×16 SVG path fragments (fill-only) rendered inline beside the label

const ICON_PATHS: Record<string, string> = {
  lightning: 'M9 1L4 8h3.5L5 15l7-8.5H8.5L11 1z',
  calendar:
    'M5 0a1 1 0 00-1 1v1H2.5A1.5 1.5 0 001 3.5v10A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-10A1.5 1.5 0 0013.5 2H12V1a1 1 0 00-2 0v1H6V1a1 1 0 00-1-1zM2.5 6h11v7.5a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5V6z',
  star: 'M8 0l2.5 5 5.5.8-4 3.9.9 5.3L8 12.5 3.1 15l.9-5.3-4-3.9L5.5 5z',
  chart: 'M1 14V9h3v5H1zm5 0V4h3v10H6zm5 0V7h3v7h-3z',
  gear: 'M8 5a3 3 0 100 6 3 3 0 000-6zm5.7 1.7l1.1-1-1-1.8-1.5.6a5.2 5.2 0 00-1.4-1l-.3-1.5H8.4L8.1 3.5a5.2 5.2 0 00-1.4 1l-1.5-.6-1 1.8 1.1 1A5 5 0 005 8c0 .5.1 1 .3 1.3l-1.1 1 1 1.8 1.5-.6c.4.4.9.7 1.4 1l.3 1.5h2.2l.3-1.5c.5-.3 1-.6 1.4-1l1.5.6 1-1.8-1.1-1c.2-.4.3-.8.3-1.3s-.1-1-.3-1.3z',
  search:
    'M6.5 1a5.5 5.5 0 014 9.3l3.1 3.1a.8.8 0 01-1.1 1.1l-3.1-3.1A5.5 5.5 0 116.5 1zm0 1.5a4 4 0 100 8 4 4 0 000-8z',
};

const ICON_RULES: Array<{ keywords: string[]; icon: string }> = [
  { keywords: ['response', 'speed', 'time', 'fast', 'quick', 'lead', 'missed'], icon: 'lightning' },
  { keywords: ['booking', 'appointment', 'schedule', 'calendar'], icon: 'calendar' },
  { keywords: ['review', 'rating', 'testimonial', 'reputation'], icon: 'star' },
  { keywords: ['analytics', 'data', 'metrics', 'tracking', 'authority', 'signals'], icon: 'chart' },
  { keywords: ['automation', 'system', 'workflow', 'pipeline'], icon: 'gear' },
  { keywords: ['seo', 'search', 'ranking', 'visibility'], icon: 'search' },
];

/** Resolve a single inline SVG icon path from content metadata, or null */
export function resolveIcon(metadata: ContentMetadata): string | null {
  const allText = [metadata.title, metadata.primaryKeyword, ...metadata.topics, ...metadata.tags]
    .join(' ')
    .toLowerCase();

  for (const rule of ICON_RULES) {
    if (rule.keywords.some(k => allText.includes(k))) {
      return ICON_PATHS[rule.icon] ?? null;
    }
  }

  return null;
}

// ─── Badge Extraction ───────────────────────────────────────────────

const METRIC_KEYWORDS = [
  'bookings',
  'conversion',
  'revenue',
  'leads',
  'calls',
  'traffic',
  'reviews',
  'appointments',
  'growth',
  'sales',
];

/** Extract a badge string from content metadata (e.g. "+32% BOOKINGS"), or null */
export function extractBadgeText(metadata: ContentMetadata, domain: ContentDomain): string | null {
  const allText = [metadata.title, ...metadata.topics, ...metadata.tags].join(' ');

  // Detect percentage patterns: +32%, 45%, etc.
  const percentMatch = allText.match(/([+]?\d{1,3})\s*%/);
  if (percentMatch) {
    const pct = percentMatch[1].startsWith('+') ? percentMatch[1] : `+${percentMatch[1]}`;
    const lower = allText.toLowerCase();
    const metric = METRIC_KEYWORDS.find(k => lower.includes(k));
    return metric ? `${pct}% ${metric.toUpperCase()}` : `${pct}% GROWTH`;
  }

  // Case study fallback
  if (domain === 'case-studies') {
    return 'CASE STUDY';
  }

  return null;
}

// ─── Color Palette ──────────────────────────────────────────────────

const DOMAIN_ACCENTS: Record<ContentDomain, string> = {
  blog: '#ffffff',
  resources: '#3b82f6',
  'case-studies': '#22c55e',
  industries: '#f59e0b',
  features: '#8b5cf6',
  services: '#06b6d4',
};

const INDUSTRY_PALETTES: Array<{ keywords: string[]; accent: string }> = [
  { keywords: ['plumbing', 'hvac', 'electrical', 'roofing'], accent: '#3b82f6' },
  { keywords: ['salon', 'beauty', 'spa', 'massage'], accent: '#a855f7' },
  { keywords: ['legal', 'finance', 'accounting', 'insurance'], accent: '#94a3b8' },
  { keywords: ['dental', 'medical', 'health', 'chiropractic'], accent: '#06b6d4' },
  { keywords: ['cleaning', 'landscaping', 'pest'], accent: '#22c55e' },
];

/** Resolve a brightness-aware color palette from metadata and domain */
export function resolveColorPalette(
  metadata: ContentMetadata,
  domain: ContentDomain,
  brightness: BrightnessResult
): ColorPalette {
  void metadata;
  void domain;
  void brightness;

  return {
    accent: tokens.colors.accent,
    accentLight: '#A78BFA',
    accentDark: '#6D28D9',
    text: tokens.colors.lightText,
    overlayStart: 0.84,
    overlayEnd: 0.22,
  };
}

// ─── Layout Variant ─────────────────────────────────────────────────

/** Deterministic layout variant from slug hash (1 | 2 | 3) */
export function resolveLayoutVariant(slug: string): LayoutVariant {
  let h = 0;
  for (let i = 0; i < slug.length; i++) {
    h = ((h << 5) - h + slug.charCodeAt(i)) | 0;
  }
  return ((Math.abs(h) % 3) + 1) as LayoutVariant;
}

function hashSlug(slug: string): number {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = ((hash << 5) - hash + slug.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

export function resolveVisualMode(
  metadata: ContentMetadata,
  domain: ContentDomain,
  variant: OverlayVariant
): VisualMode {
  void metadata;
  void variant;

  if (domain === 'case-studies') return 'illustration';
  if (domain === 'features' || domain === 'services') return 'illustration';
  return 'real';
}

export function resolveIllustrationVariant(metadata: ContentMetadata): IllustrationVariant {
  const text = [
    metadata.title,
    metadata.primaryKeyword,
    ...metadata.topics,
    ...metadata.tags,
    ...metadata.systems,
  ]
    .join(' ')
    .toLowerCase();

  if (['calendar', 'booking', 'appointment', 'schedule'].some(keyword => text.includes(keyword))) {
    return 'calendar';
  }

  if (['pipeline', 'routing', 'crm'].some(keyword => text.includes(keyword))) {
    return 'pipeline';
  }

  if (
    ['automation', 'workflow', 'sequence', 'process', 'trigger', 'action'].some(keyword =>
      text.includes(keyword)
    )
  ) {
    return 'flow';
  }

  if (
    [
      'review',
      'message',
      'messaging',
      'chat',
      'conversation',
      'inbox',
      'follow-up',
      'follow up',
      'reminder',
      'missed call',
    ].some(keyword => text.includes(keyword))
  ) {
    return 'chat';
  }

  return 'dashboard';
}

export function resolveTextStyle(metadata: ContentMetadata, domain: ContentDomain): TextStyle {
  if (domain === 'services' || domain === 'features') return 'saas';

  if (domain === 'blog') {
    const title = metadata.title.toLowerCase();
    const isProblemTitle = ['problem', 'mistake', 'slow', 'stuck', 'broken', 'leak', 'missed'].some(
      keyword => title.includes(keyword)
    );
    return isProblemTitle ? 'hook' : 'saas';
  }

  return 'saas';
}

export function resolveVisualTreatment(slug: string): VisualTreatment {
  const treatments: VisualTreatment[] = ['clean', 'highlight', 'frame', 'depth'];
  return treatments[hashSlug(slug) % treatments.length] ?? 'clean';
}

// ─── Design Context Builder ─────────────────────────────────────────

/** Build the complete overlay design context from content, domain, and brightness */
export function buildDesignContext(
  metadata: ContentMetadata,
  domain: ContentDomain,
  brightness: BrightnessResult
): OverlayDesignContext {
  const variant = resolveOverlayVariant(metadata, domain);
  const layoutByDomain: Record<ContentDomain, LayoutVariant> = {
    blog: 1,
    resources: 1,
    industries: 1,
    'case-studies': 1,
    features: 2,
    services: 2,
  };
  const layout = layoutByDomain[domain];
  const visualMode = resolveVisualMode(metadata, domain, variant);
  const illustration = resolveIllustrationVariant(metadata);
  const textStyle = resolveTextStyle(metadata, domain);
  const treatment: VisualTreatment = 'depth';
  const icon = resolveIcon(metadata);
  const badge = extractBadgeText(metadata, domain);
  const palette = resolveColorPalette(metadata, domain, brightness);

  return {
    slug: metadata.slug,
    domain,
    variant,
    layout,
    visualMode,
    illustration,
    textStyle,
    treatment,
    icon,
    badge,
    palette,
  };
}
