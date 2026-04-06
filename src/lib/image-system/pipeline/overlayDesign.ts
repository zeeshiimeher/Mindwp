// ─── Overlay Design System ──────────────────────────────────────────
// Intelligent, content-aware design system for featured image overlays
// Resolves visual variant, icon, badge, and color palette from metadata

import { OVERLAY_CONFIG } from '../config';
import type {
  BrightnessResult,
  ColorPalette,
  ContentDomain,
  ContentMetadata,
  LayoutVariant,
  OverlayDesignContext,
  OverlayVariant,
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
export function extractBadgeText(
  metadata: ContentMetadata,
  domain: ContentDomain
): string | null {
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
  let accent = DOMAIN_ACCENTS[domain];

  const allText = [metadata.title, metadata.primaryKeyword, ...metadata.topics, ...metadata.tags]
    .join(' ')
    .toLowerCase();

  for (const ip of INDUSTRY_PALETTES) {
    if (ip.keywords.some(k => allText.includes(k))) {
      accent = ip.accent;
      break;
    }
  }

  // Brightness-aware overlay gradient
  const avg = brightness.average;
  let overlayStart: number;
  let overlayEnd: number;

  if (avg >= OVERLAY_CONFIG.brightThreshold) {
    // Bright image: strong dark overlay for text contrast
    overlayStart = 0.88;
    overlayEnd = 0.2;
  } else if (avg <= OVERLAY_CONFIG.darkThreshold) {
    // Dark image: light overlay to avoid crushing the photo
    overlayStart = 0.55;
    overlayEnd = 0.05;
  } else {
    // Mid-range: linear interpolation
    const t =
      (avg - OVERLAY_CONFIG.darkThreshold) /
      (OVERLAY_CONFIG.brightThreshold - OVERLAY_CONFIG.darkThreshold);
    overlayStart = 0.55 + t * (0.88 - 0.55);
    overlayEnd = 0.05 + t * (0.2 - 0.05);
  }

  // Compute depth variants from accent
  const ar = parseInt(accent.slice(1, 3), 16);
  const ag = parseInt(accent.slice(3, 5), 16);
  const ab = parseInt(accent.slice(5, 7), 16);

  const lighten = (c: number) => Math.min(255, Math.round(c + (255 - c) * 0.35));
  const darken = (c: number) => Math.round(c * 0.6);

  const toHex = (r: number, g: number, b: number) =>
    `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;

  const accentLight = toHex(lighten(ar), lighten(ag), lighten(ab));
  const accentDark = toHex(darken(ar), darken(ag), darken(ab));

  return { accent, accentLight, accentDark, text: '#ffffff', overlayStart, overlayEnd };
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

// ─── Design Context Builder ─────────────────────────────────────────

/** Build the complete overlay design context from content, domain, and brightness */
export function buildDesignContext(
  metadata: ContentMetadata,
  domain: ContentDomain,
  brightness: BrightnessResult
): OverlayDesignContext {
  const variant = resolveOverlayVariant(metadata, domain);
  const layout = resolveLayoutVariant(metadata.slug);
  const icon = resolveIcon(metadata);
  const badge = extractBadgeText(metadata, domain);
  const palette = resolveColorPalette(metadata, domain, brightness);

  // Variant-specific palette adjustments
  if (variant === 'local') {
    // Softer gradient for local/industry content
    palette.overlayStart *= 0.9;
    palette.overlayEnd *= 0.8;
  } else if (variant === 'results') {
    // Stronger contrast for case study results
    palette.overlayStart = Math.min(palette.overlayStart * 1.08, 0.92);
  }

  return { variant, layout, icon, badge, palette };
}
