import type { CTAIntent, CTAPosition, PageType } from '@/lib/page/pageIdentity';

/**
 * Section Intelligence Mapping.
 *
 * Defines expected structure for each domain type:
 * - Allowed sections per domain
 * - Purpose of each section
 * - Writing style per section
 *
 * Used by validators and content-aware tools. Pure config — no logic.
 *
 * Source: SYSTEM.md + CONTENT.md
 * Governance: CONTENT.md (Domain Behavior Rules + Section Behavior Rules)
 */

// ---------------------------------------------------------------------------
// Blog domain — sections identified by `type` string in content arrays
// ---------------------------------------------------------------------------
export const BLOG_SECTIONS = {
  introduction: {
    purpose: 'Set context and identify the problem the post addresses',
    style: 'Conversational, problem-first, no hype',
  },
  content: {
    purpose: 'Main body content explaining the topic',
    style: 'Clear, practical, outcome-focused',
  },
  image: {
    purpose: 'Visual illustration supporting the content',
    style: 'Descriptive alt text, no marketing language',
  },
  quote: {
    purpose: 'Supporting evidence or client perspective',
    style: 'Authentic, grounded — no fabricated claims',
  },
  checklist: {
    purpose: 'Actionable takeaways the reader can apply',
    style: 'Short, direct, imperative',
  },
  takeaways: {
    purpose: 'Summary of key points from the post',
    style: 'Concise bullet points, outcome-focused',
  },
  steps: {
    purpose: 'Step-by-step guide or process',
    style: 'Numbered, clear, one action per step',
  },
  cta: {
    purpose: 'Call to action — must be final section',
    style: 'Low-pressure, consultative',
  },
} as const;

// ---------------------------------------------------------------------------
// Resources domain — sections identified by `type` string in content arrays
// ---------------------------------------------------------------------------
export const RESOURCE_SECTIONS = {
  hero: {
    purpose: 'Introduce the resource topic and value',
    style: 'Clear, benefit-focused, no hype',
  },
  takeaways: {
    purpose: 'Key points the reader will learn',
    style: 'Concise bullet points',
  },
  problem: {
    purpose: 'Describe the operational problem this resource addresses',
    style: 'Problem-first, relatable, specific',
  },
  'business-costs': {
    purpose: 'Quantify the cost of inaction',
    style: 'Factual, grounded — no fabricated statistics',
  },
  diy: {
    purpose: 'What the reader can do themselves',
    style: 'Practical, empowering',
  },
  checklist: {
    purpose: 'Actionable checklist for the reader',
    style: 'Short, direct, imperative',
  },
  faq: {
    purpose: 'Common questions about the topic',
    style: 'Conversational, concise answers',
  },
  case: {
    purpose: 'Brief case reference supporting the resource',
    style: 'Factual, outcome-focused — no unsupported claims',
  },
  comparison: {
    purpose: 'Compare approaches or solutions',
    style: 'Objective, balanced',
  },
  'solution-cards': {
    purpose: 'Summarise solution options',
    style: 'Clear, outcome-focused',
  },
  templates: {
    purpose: 'Downloadable or reusable templates',
    style: 'Descriptive, practical',
  },
  cta: {
    purpose: 'Call to action',
    style: 'Low-pressure, consultative',
  },
  'related-resources': {
    purpose: 'Links to related content (allowed after CTA)',
    style: 'Brief, descriptive',
  },
} as const;

// ---------------------------------------------------------------------------
// Case Studies domain — sections identified by `type` string
// ---------------------------------------------------------------------------
export const CASE_STUDY_SECTIONS = {
  hero: {
    purpose: 'Introduce the client and challenge',
    style: 'Calm, factual, consultative',
  },
  problem: {
    purpose: 'Describe the operational problem before engagement',
    style: 'Specific, grounded in real operations',
  },
  solution: {
    purpose: 'What was built or delivered',
    style: 'Clear, implementation-focused',
  },
  results: {
    purpose: 'Measurable outcomes from the engagement',
    style: 'Factual, no exaggeration — only verified claims',
  },
  metrics: {
    purpose: 'Key performance indicators',
    style: 'Numbers-first, concise labels',
  },
  deliverables: {
    purpose: 'List of what was delivered',
    style: 'Direct, descriptive',
  },
  process: {
    purpose: 'How the work was carried out',
    style: 'Step-by-step, practical',
  },
  workflows: {
    purpose: 'Workflow changes or automations delivered',
    style: 'Implementation-focused, clear',
  },
  more: {
    purpose: 'Additional context or follow-up',
    style: 'Brief, relevant',
  },
  cta: {
    purpose: 'Call to action',
    style: 'Low-pressure, consultative',
  },
} as const;

// ---------------------------------------------------------------------------
// Services domain — sections are keyed objects, type inferred from properties
// ---------------------------------------------------------------------------
export const SERVICE_SECTION_TYPES = {
  painPoints: {
    purpose: 'Before/after comparison showing operational shift',
    style: 'Problem-first, outcome-focused, no feature lists',
    identifiedBy: 'painPoints array with before/after',
  },
  cards: {
    purpose: 'Feature or capability cards',
    style: 'Concise, benefit-focused, no hype',
    identifiedBy: 'cards array with title, description, points',
  },
  featureCategories: {
    purpose: 'Grouped feature categories',
    style: 'Organised, descriptive',
    identifiedBy: 'columns, variant, features list',
  },
  visualFlow: {
    purpose: 'Visual representation of a workflow or process',
    style: 'Clear labels, action-oriented',
    identifiedBy: 'triggerTitle, triggerSubtitle, actions',
  },
  structured: {
    purpose: 'General content section with badge/title/description',
    style: 'Clear, outcome-focused',
    identifiedBy: 'badge, title, description (basic pattern)',
  },
} as const;

// ---------------------------------------------------------------------------
// Required top-level keys per domain
// ---------------------------------------------------------------------------
export const DOMAIN_REQUIRED_KEYS = {
  services: ['seo', 'hero', 'sections'],
  features: ['slug', 'seo', 'hero', 'sections', 'cta'],
  industries: ['slug', 'type', 'seo', 'hero', 'cta'],
  blog: ['slug', 'title', 'description', 'topics'],
  resources: ['slug', 'title', 'description', 'systems', 'topics'],
  'case-studies': ['slug', 'title', 'description', 'industries', 'systems'],
} as const;

// ---------------------------------------------------------------------------
// Domain-level tone rules
// ---------------------------------------------------------------------------
export const DOMAIN_TONE = {
  services: 'Calm, consultative, problem-first, solution-second',
  features: 'Clear, descriptive, outcome-focused',
  industries: 'Calm, consultative, industry-aware, problem-first',
  blog: 'Conversational, practical, no hype',
  resources: 'Educational, practical, grounded',
  'case-studies': 'Factual, calm, no exaggeration, no hype',
} as const;

// ---------------------------------------------------------------------------
// Section behavior rules — controls what each zone is allowed to render
// ---------------------------------------------------------------------------

export interface SectionBehavior {
  allowLinks: boolean;
  allowCTA: boolean;
  allowProof: boolean;
}

export const SECTION_BEHAVIOR: Record<string, SectionBehavior> = {
  hero: {
    allowLinks: false,
    allowCTA: true,
    allowProof: false,
  },
  introduction: {
    allowLinks: false,
    allowCTA: false,
    allowProof: false,
  },
  content: {
    allowLinks: true,
    allowCTA: false,
    allowProof: false,
  },
  body: {
    allowLinks: true,
    allowCTA: false,
    allowProof: false,
  },
  problem: {
    allowLinks: false,
    allowCTA: false,
    allowProof: true,
  },
  solution: {
    allowLinks: true,
    allowCTA: false,
    allowProof: true,
  },
  results: {
    allowLinks: false,
    allowCTA: false,
    allowProof: true,
  },
  metrics: {
    allowLinks: false,
    allowCTA: false,
    allowProof: true,
  },
  cta: {
    allowLinks: false,
    allowCTA: true,
    allowProof: false,
  },
  faq: {
    allowLinks: true,
    allowCTA: false,
    allowProof: false,
  },
  checklist: {
    allowLinks: false,
    allowCTA: false,
    allowProof: false,
  },
  takeaways: {
    allowLinks: false,
    allowCTA: false,
    allowProof: false,
  },
  'related-resources': {
    allowLinks: true,
    allowCTA: false,
    allowProof: false,
  },
} as const;

// ---------------------------------------------------------------------------
// CTA Behavior — placement and intensity rules per page type
// ---------------------------------------------------------------------------

export interface CTABehavior {
  placement: 'end-only' | 'hero-and-end' | 'after-proof';
  intensity: 'soft' | 'mid' | 'strong';
  maxCTAs: number;
}

export const CTA_BEHAVIOR: Record<string, CTABehavior> = {
  blog: {
    placement: 'end-only',
    intensity: 'soft',
    maxCTAs: 1,
  },
  resource: {
    placement: 'end-only',
    intensity: 'soft',
    maxCTAs: 1,
  },
  'case-study': {
    placement: 'after-proof',
    intensity: 'mid',
    maxCTAs: 2,
  },
  service: {
    placement: 'hero-and-end',
    intensity: 'strong',
    maxCTAs: 2,
  },
  feature: {
    placement: 'hero-and-end',
    intensity: 'strong',
    maxCTAs: 2,
  },
  'industry-category': {
    placement: 'end-only',
    intensity: 'mid',
    maxCTAs: 1,
  },
  'industry-detail': {
    placement: 'hero-and-end',
    intensity: 'mid',
    maxCTAs: 2,
  },
} as const;

export interface CTAPageRule {
  maxPanels: number;
  allowedPositions: CTAPosition[];
  allowedNonConversionIntents: Array<Exclude<CTAIntent, 'conversion'>>;
  allowedConversionPositions: CTAPosition[];
}

export const CTA_RULES_BY_PAGE_TYPE: Record<PageType, CTAPageRule> = {
  service: {
    maxPanels: 3,
    allowedPositions: ['hero', 'mid', 'footer'],
    allowedNonConversionIntents: ['entry', 'diagnostic', 'comparison'],
    allowedConversionPositions: ['footer'],
  },
  feature: {
    maxPanels: 2,
    allowedPositions: ['hero', 'footer'],
    allowedNonConversionIntents: ['entry'],
    allowedConversionPositions: ['footer'],
  },
  blog: {
    maxPanels: 2,
    allowedPositions: ['sidebar', 'footer'],
    allowedNonConversionIntents: ['diagnostic'],
    allowedConversionPositions: ['footer'],
  },
  resource: {
    maxPanels: 3,
    allowedPositions: ['hero', 'sidebar', 'footer'],
    allowedNonConversionIntents: ['entry', 'diagnostic'],
    allowedConversionPositions: ['footer'],
  },
  'case-study': {
    maxPanels: 2,
    allowedPositions: ['mid', 'footer'],
    allowedNonConversionIntents: ['diagnostic', 'comparison'],
    allowedConversionPositions: ['footer'],
  },
  'industry-category': {
    maxPanels: 2,
    allowedPositions: ['hero', 'footer'],
    allowedNonConversionIntents: ['entry'],
    allowedConversionPositions: ['footer'],
  },
  'industry-detail': {
    maxPanels: 2,
    allowedPositions: ['hero', 'footer'],
    allowedNonConversionIntents: ['entry'],
    allowedConversionPositions: ['footer'],
  },
  page: {
    maxPanels: 2,
    allowedPositions: ['hero', 'footer'],
    allowedNonConversionIntents: ['entry'],
    allowedConversionPositions: ['footer'],
  },
};

export const MID_CTA_SECTION_TYPES_BY_PAGE_TYPE: Partial<Record<PageType, string[]>> = {
  service: ['comparison', 'solution', 'process'],
  'case-study': ['results', 'process'],
};
