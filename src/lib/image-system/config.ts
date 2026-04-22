// ─── Image System Configuration ─────────────────────────────────────
// Constants and configuration for the MindWP image pipeline

import { env } from '@/env';

import type { ContentDomain, DomainStyleRule, ProviderName } from './types';

// ─── API Keys (loaded from environment) ─────────────────────────────

export function getProviderKeys() {
  return {
    unsplash: env.UNSPLASH_ACCESS_KEY,
    pexels: env.PEXELS_API_KEY,
    pixabay: env.PIXABAY_API_KEY,
  };
}

// ─── Rate Limits ────────────────────────────────────────────────────

export const RATE_LIMIT = {
  maxDownloadsPerHour: 50,
  batchPauseMs: 2000,
};

// ─── Image Dimensions ───────────────────────────────────────────────

export const IMAGE_SIZES = {
  featured: { width: 1200, height: 630 },
  content: { width: 1200, height: 700 },
} as const;

// ─── Provider Priority Order ────────────────────────────────────────

export const DEFAULT_PROVIDER_ORDER: ProviderName[] = ['unsplash', 'pexels', 'pixabay'];

// ─── Provider API Endpoints ─────────────────────────────────────────

export const PROVIDER_ENDPOINTS = {
  unsplash: 'https://api.unsplash.com',
  pexels: 'https://api.pexels.com/v1',
  pixabay: 'https://pixabay.com/api',
} as const;

// ─── Image Rules Per Domain ─────────────────────────────────────────

export const DOMAIN_IMAGE_RULES: Record<
  ContentDomain,
  {
    featuredRequired: boolean;
    contentAllowed: boolean;
    maxContentImages: number;
  }
> = {
  blog: {
    featuredRequired: true,
    contentAllowed: true,
    maxContentImages: 1,
  },
  resources: {
    featuredRequired: true,
    contentAllowed: true,
    maxContentImages: 2,
  },
  industries: {
    featuredRequired: true,
    contentAllowed: false,
    maxContentImages: 0,
  },
  'case-studies': {
    featuredRequired: true,
    contentAllowed: true,
    maxContentImages: 1,
  },
  features: {
    featuredRequired: true,
    contentAllowed: false,
    maxContentImages: 0,
  },
  services: {
    featuredRequired: true,
    contentAllowed: false,
    maxContentImages: 0,
  },
};

// ─── Domain Style Rules ─────────────────────────────────────────────

export const DOMAIN_STYLES: Record<ContentDomain, DomainStyleRule> = {
  blog: {
    preferredScenes: [
      'service professional helping customer',
      'small business owner at work',
      'tradesperson on job site',
      'local business daily operations',
      'business team morning briefing',
    ],
    avoidScenes: [
      'abstract tech graphics',
      'generic handshake stock photos',
      'unrealistic corporate imagery',
      'illustrations',
      'text-based posters',
      'dashboard screenshots',
      'neon tech startup imagery',
    ],
    description: 'real service business operations and people at work',
  },
  resources: {
    preferredScenes: [
      'service business owner reviewing jobs and customer messages',
      'dispatch desk with schedule board and laptop',
      'business owner planning field operations with notes and phone',
      'service manager reviewing customer reviews and appointments',
      'operator workspace with calendar phone and paperwork',
    ],
    avoidScenes: [
      'abstract art',
      'random lifestyle photos',
      'generic tech screens with no context',
      'neon or Silicon Valley startup imagery',
      'generic office meeting',
      'coworking space team photo',
      'boardroom presentation',
    ],
    description:
      'practical service-business planning, scheduling, and customer-management environments',
  },
  industries: {
    preferredScenes: [
      'technician or tradesperson working on site',
      'service professional in uniform at job',
      'workshop or job site with tools and equipment',
      'service van arriving at customer location',
      'professional greeting customer at door',
    ],
    avoidScenes: [
      'corporate office scenes',
      'abstract graphics',
      'generic stock photos',
      'Silicon Valley tech imagery',
      'coworking office',
      'call center headsets',
      'conference room',
    ],
    description: 'authentic tradespeople and service professionals in their environment',
  },
  'case-studies': {
    preferredScenes: [
      'business transformation before and after',
      'thriving local business with customers',
      'service team celebrating or collaborating',
      'successful small business exterior',
      'business owner satisfied at organized desk',
    ],
    avoidScenes: [
      'generic stock photos',
      'abstract imagery',
      'illustrations',
      'corporate boardroom meetings',
    ],
    description: 'real results and operational transformation for service businesses',
  },
  features: {
    preferredScenes: [
      'professional using business software on laptop',
      'clean modern workspace with technology',
      'business person reviewing dashboard on screen',
      'organized desk with laptop and notebook',
      'professional focused on computer screen',
    ],
    avoidScenes: [
      'abstract illustrations',
      'generic stock photos',
      'cartoon or flat design',
      'crowded group photos',
    ],
    description: 'clean professional technology in real workspace environments',
  },
  services: {
    preferredScenes: [
      'service professional helping customer in person',
      'business consultant working with client',
      'professional team collaborating on project',
      'service expert explaining solution to client',
      'business professional in action at workplace',
    ],
    avoidScenes: [
      'abstract imagery',
      'illustrations',
      'empty offices',
      'generic corporate settings',
    ],
    description: 'human-centric service delivery and professional consultation',
  },
};

export const DOMAIN_CATEGORIES: Record<ContentDomain, string[]> = {
  blog: ['business', 'service', 'customer interaction'],
  resources: [
    'service operations',
    'dispatch',
    'reviews',
    'appointments',
    'customer communication',
  ],
  'case-studies': ['real business', 'client interaction', 'service delivery'],
  industries: ['field service', 'technician', 'tools', 'equipment', 'customer location'],
  features: ['software usage', 'dashboard', 'workflow'],
  services: ['consultation', 'teamwork', 'business discussion'],
};

// ─── Title Layout Configuration ─────────────────────────────────────

export const TITLE_LAYOUT = {
  maxLines: 2,
  maxFontSize: 52,
  minFontSize: 24,
  /** Default pixel cap — overridden per layout variant */
  maxTextWidthPx: 860,
  textWidthPercent: 0.65,
  horizontalPaddingPx: 100,
  safePaddingPercent: 0.15,
  /** Top/bottom safe margin in px */
  safeMarginY: 120,
  fontFamily: 'Inter, Arial, sans-serif',
} as const;

// ─── Overlay Configuration ──────────────────────────────────────────

export const OVERLAY_CONFIG = {
  // Min overlay opacity to guarantee WCAG AA (4.5:1) white text contrast
  minOverlayOpacity: 0.45,
  maxOverlayOpacity: 0.7,
  // Brightness boundaries for overlay scaling
  brightThreshold: 160,
  darkThreshold: 70,
} as const;

// ─── Intelligence Thresholds ────────────────────────────────────────

export const INTELLIGENCE_THRESHOLDS = {
  minContrast: 30,
  maxEdgeDensityForText: 0.15,
  minResolutionWidth: 1600,
  maxSimilarityDistance: 5,
  centerRegionPercent: 0.33,
} as const;

// ─── Scoring Weights ────────────────────────────────────────────────

export const SCORING_WEIGHTS = {
  subjectRelevance: 0.4,
  visualClarity: 0.2,
  compositionQuality: 0.15,
  overlayCompatibility: 0.15,
  resolutionQuality: 0.1,
} as const;

// ─── File Paths ─────────────────────────────────────────────────────

export const DATA_DIR = 'src/lib/image-system/data';

export const DATA_FILES = {
  imageIndex: `${DATA_DIR}/imageIndex.json`,
  contextMemory: `${DATA_DIR}/contextMemory.json`,
  providerScores: `${DATA_DIR}/providerScores.json`,
  imageQueue: `${DATA_DIR}/imageQueue.json`,
} as const;

export const IMAGE_OUTPUT_DIR = 'public/images';

export function getImageOutputPath(
  domain: ContentDomain,
  slug: string,
  imageType: string,
  ext = 'webp'
) {
  // Flat domain folder: {slug}.webp (overlay), {slug}-raw.webp (clean)
  const seoName =
    imageType === 'featured-overlay'
      ? slug
      : imageType === 'featured-clean'
        ? `${slug}-raw`
        : `${slug}-content`;
  return `${IMAGE_OUTPUT_DIR}/${domain}/${seoName}.${ext}`;
}

// ─── Placement Configuration ────────────────────────────────────────

export const PLACEMENT_CONFIG = {
  minSectionWordsForImage: 300,
  blogPlacementAfterSection: 2,
  blogMinWordsForContent: 350,
  triggerKeywords: ['framework', 'workflow', 'architecture', 'process', 'pipeline', 'system'],
} as const;

// ─── Diagram Configuration ──────────────────────────────────────────

export const DIAGRAM_CONFIG = {
  maxDiagrams: 2,
  preferredDiagrams: 1,
  nodeWidth: 220,
  nodeHeight: 48,
  nodePadding: 24,
  arrowLength: 32,
  fontSize: 14,
  cornerRadius: 8,
  bgColor: '#f8fafc',
  nodeColor: '#1e293b',
  nodeTextColor: '#ffffff',
  arrowColor: '#94a3b8',
} as const;

// ─── Chart Configuration ────────────────────────────────────────────

export const CHART_CONFIG = {
  maxCharts: 2,
  preferredCharts: 1,
  width: 600,
  height: 400,
  barColor: '#3b82f6',
  lineColor: '#3b82f6',
  axisColor: '#64748b',
  bgColor: '#f8fafc',
  labelColor: '#1e293b',
  fontSize: 12,
  padding: 60,
} as const;
