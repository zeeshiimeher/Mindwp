// ─── Semantic Query Generator ───────────────────────────────────────
// Maps content metadata to visual search queries grounded in the MindWP business:
// Conversion-focused website systems with connected handling for service businesses
// and specialist clinics in the approved Home Services and Healthcare Practices lanes.
//
// Images should show REAL service professionals, workplaces, and operations —
// not abstract dashboards, generic tech screens, or corporate stock photos.

import { DOMAIN_CATEGORIES, DOMAIN_STYLES } from '../config';
import type { ContentDomain, ContentMetadata, SemanticQuery } from '../types';

// ─── Industry Detection ─────────────────────────────────────────────
// Detect which industry a piece of content is about so we can search
// for imagery of THAT specific trade/profession

const INDUSTRY_KEYWORDS: Record<string, string[]> = {
  hvac: ['hvac', 'heating', 'air conditioning', 'cooling', 'furnace', 'ventilation'],
  plumbing: ['plumb', 'pipe', 'drain', 'water heater', 'leak'],
  roofing: ['roof', 'shingle', 'gutter', 'storm damage'],
  foundation: ['foundation', 'structural repair', 'basement repair'],
  septic: ['septic', 'wastewater', 'tank service'],
  tree: ['tree service', 'arborist', 'tree removal'],
  dental: ['dental', 'dentist', 'dental implant', 'clinic'],
  orthodontic: ['orthodontic', 'orthodontist', 'braces', 'aligners'],
  dermatology: ['dermatology', 'skin clinic', 'dermatologist'],
  'ent-sinus': ['ent', 'sinus', 'ear nose throat'],
  podiatry: ['podiatry', 'foot clinic', 'podiatrist'],
  hearing: ['hearing aid', 'audiology', 'hearing clinic'],
  physiotherapy: ['physiotherapy', 'physical therapy', 'rehab clinic'],
  optometry: ['optometry', 'eye clinic', 'optometrist'],
  orthopedic: ['orthopedic', 'orthopaedic', 'sports injury clinic'],
};

const SLUG_INDUSTRY_HINTS: Record<string, string> = {
  plumbing: 'plumbing',
  plumber: 'plumbing',
  dental: 'dental',
  dentist: 'dental',
  orthodontic: 'orthodontic',
  dermatology: 'dermatology',
  sinus: 'ent-sinus',
  podiatry: 'podiatry',
  hearing: 'hearing',
  physiotherapy: 'physiotherapy',
  optometry: 'optometry',
  orthopedic: 'orthopedic',
  roofing: 'roofing',
  roofer: 'roofing',
  hvac: 'hvac',
  foundation: 'foundation',
  septic: 'septic',
  arborist: 'tree',
};

// Visual search terms for each detected industry — these produce RELEVANT stock photos
const INDUSTRY_VISUALS: Record<string, string[]> = {
  hvac: [
    'hvac technician repairing air conditioning unit',
    'heating engineer working on boiler',
    'air conditioning installer residential',
    'hvac service van parked outside house',
  ],
  plumbing: [
    'plumber repairing pipes under sink',
    'professional plumber at work residential',
    'plumbing service tools',
    'plumber fixing bathroom plumbing',
  ],
  roofing: [
    'roofer working on residential roof',
    'roofing contractor inspecting house roof',
    'roof repair team working',
    'professional roofer installing shingles',
  ],
  foundation: [
    'foundation repair specialist inspecting basement wall',
    'foundation repair contractor reviewing home exterior',
    'structural repair team inspecting residential foundation',
  ],
  septic: [
    'septic service technician at residential property',
    'septic maintenance truck outside home',
    'septic service professional reviewing system access',
  ],
  tree: [
    'tree service crew assessing residential tree',
    'arborist consulting homeowner outside',
    'tree care professional inspecting property',
  ],
  dental: [
    'modern dental practice reception area',
    'dental office patient consultation',
    'dentist office front desk welcoming patient',
    'dental hygienist with patient',
  ],
  orthodontic: [
    'orthodontic clinic consultation room',
    'orthodontist discussing treatment with patient',
    'modern orthodontic practice reception',
  ],
  dermatology: [
    'dermatology clinic reception area',
    'dermatologist consulting patient in clinic',
    'skin clinic front desk',
  ],
  'ent-sinus': [
    'ENT clinic consultation room',
    'ear nose throat clinic reception',
    'specialist clinic consultation with patient',
  ],
  podiatry: [
    'podiatry clinic reception area',
    'podiatrist consulting patient',
    'foot clinic treatment room',
  ],
  hearing: [
    'hearing aid clinic consultation',
    'audiology clinic reception area',
    'hearing specialist consulting patient',
  ],
  physiotherapy: [
    'physiotherapy clinic treatment area',
    'physical therapist consulting patient',
    'rehab clinic reception area',
  ],
  optometry: [
    'optometry clinic reception area',
    'optometrist consulting patient',
    'eye clinic front desk',
  ],
  orthopedic: [
    'orthopedic clinic consultation room',
    'orthopedic specialist consulting patient',
    'sports injury clinic reception area',
  ],
};

// ─── Topic-to-Visual Mapping ────────────────────────────────────────
// Maps abstract business/tech topics to real-world visual scenes that
// represent those concepts through the lens of service businesses

const TOPIC_VISUALS: Record<string, string[]> = {
  // Lead handling & response
  'lead response': [
    'small business owner answering phone',
    'service business receptionist taking phone call',
    'tradesperson checking phone for new enquiry',
  ],
  'lead handling': [
    'business owner reviewing phone messages',
    'receptionist answering business phone',
    'service professional on phone with customer',
  ],
  'missed call': [
    'business phone ringing on desk',
    'mobile phone notification new customer enquiry',
    'small business owner checking missed calls',
  ],
  // CRM & pipeline
  crm: [
    'small business owner at laptop reviewing customer list',
    'business person using tablet for customer management',
    'service team in office discussing customer schedule',
  ],
  pipeline: [
    'whiteboard with customer handling notes',
    'team planning customer jobs on schedule board',
    'small business owner organizing daily schedule',
  ],
  // Booking & scheduling
  booking: [
    'customer booking appointment on phone',
    'receptionist scheduling appointment for client',
    'service business online booking calendar',
  ],
  scheduling: [
    'appointment calendar on desk in professional office',
    'business scheduling system on tablet',
    'receptionist managing appointment book',
  ],
  // Reviews & reputation
  review: [
    'happy customer leaving business review on phone',
    'five star customer review on smartphone screen',
    'business owner reading positive customer feedback',
  ],
  reputation: [
    'satisfied customer shaking hands with service professional',
    'local business with positive reviews displayed',
    'customer testimonial trust concept',
  ],
  // SEO & visibility
  seo: [
    'local business storefront on high street',
    'small business appearing in local search on phone',
    'google maps local business listing on mobile',
  ],
  'local search': [
    'person searching local business on mobile phone',
    'map showing local service businesses',
    'customer finding local service provider on phone',
  ],
  authority: [
    'established local service business exterior',
    'trusted local business with signage',
    'professional service business building exterior',
  ],
  visibility: [
    'local business storefront prominent signage',
    'small business attracting customers on busy street',
    'service van with company branding parked',
  ],
  // Website & digital
  website: [
    'professional service business website on laptop',
    'business owner reviewing company website on computer',
    'customer browsing local service business website on phone',
  ],
  conversion: [
    'customer filling in contact form on website',
    'business enquiry form on laptop screen',
    'new customer enquiry notification on phone',
  ],
  // Handling paths and systems
  automation: [
    'business owner working through customer follow up on laptop',
    'service business team planning next steps in morning briefing',
    'organized professional workspace with laptop and phone',
  ],
  system: [
    'organized enquiry handling desk',
    'service professional reviewing next steps',
    'business owner checking customer messages and notes',
  ],
  // Follow-up & outreach
  'follow up': [
    'business sending follow up email to customer',
    'service professional calling customer back',
    'customer communication text message on phone',
  ],
  reactivation: [
    'business reaching out to past customers',
    'direct mail marketing materials on desk',
    'customer loyalty outreach concept',
  ],
  // General business operations
  'service business': [
    'local service business team in workplace',
    'small business owner at shop front',
    'service professional greeting customer',
  ],
  'small business': [
    'small business owner at counter',
    'local business team in uniform',
    'friendly small business storefront',
  ],
};

/** Detect which industry the content relates to */
function detectIndustry(metadata: ContentMetadata): string | null {
  const text = [
    metadata.title,
    metadata.summary,
    ...metadata.topics,
    ...metadata.activeSystems,
    ...metadata.tags,
    ...metadata.sectionHeadings,
  ]
    .join(' ')
    .toLowerCase();

  for (const [industry, keywords] of Object.entries(INDUSTRY_KEYWORDS)) {
    if (keywords.some(kw => text.includes(kw))) {
      return industry;
    }
  }
  return null;
}

/** Find matching topic visuals from the content */
function findTopicVisuals(metadata: ContentMetadata): string[] {
  const text = [
    metadata.title,
    metadata.summary,
    ...metadata.topics,
    ...metadata.activeSystems,
    ...metadata.tags,
  ]
    .join(' ')
    .toLowerCase();

  const matched: string[] = [];
  for (const [topic, visuals] of Object.entries(TOPIC_VISUALS)) {
    if (text.includes(topic)) {
      matched.push(...visuals);
    }
  }
  return [...new Set(matched)];
}

// ─── Intent Extraction ──────────────────────────────────────────────
// Extract structured intent from title for smarter query building

interface ContentIntent {
  industry: string | null;
  intent: string;
  emotion: string;
  subject: string;
}

const INTENT_KEYWORDS: Record<string, string> = {
  pipeline: 'customer path',
  automation: 'follow-up ownership',
  crm: 'customer management',
  booking: 'scheduling',
  scheduling: 'scheduling',
  review: 'reputation',
  reputation: 'trust',
  seo: 'visibility',
  'local search': 'visibility',
  authority: 'credibility',
  lead: 'engagement',
  'follow up': 'outreach',
  conversion: 'results',
  website: 'digital presence',
  reactivation: 'growth',
};

const EMOTION_MAP: Record<string, string> = {
  'customer path': 'clarity',
  'follow-up ownership': 'control',
  workflow: 'clarity',
  efficiency: 'control',
  scheduling: 'organization',
  trust: 'confidence',
  visibility: 'growth',
  engagement: 'connection',
  results: 'success',
  growth: 'momentum',
};

const SUBJECT_MAP: Record<string, string> = {
  dental: 'dental receptionist',
  plumbing: 'plumber workshop',
  hvac: 'hvac technician',
  roofing: 'construction worker rooftop',
  foundation: 'foundation repair specialist',
  septic: 'septic service technician',
  tree: 'arborist with homeowner',
  orthodontic: 'orthodontic clinic receptionist',
  dermatology: 'dermatology clinic receptionist',
  'ent-sinus': 'ENT clinic specialist',
  podiatry: 'podiatry clinic receptionist',
  hearing: 'audiology clinic specialist',
  physiotherapy: 'physiotherapy clinic team',
  optometry: 'optometry clinic receptionist',
  orthopedic: 'orthopedic clinic specialist',
};

/** Human-priority keywords to boost people-focused results */
const HUMAN_PRIORITY = ['person', 'professional', 'team', 'customer', 'worker'];

/** Negative filter terms to avoid in results (appended as context, not literal filter) */
const NEGATIVE_TERMS = [
  'illustration',
  'vector',
  'cartoon',
  'clipart',
  '3d render',
  'cgi',
  'abstract',
  'mockup',
  'template',
];

function getQueryContextSuffix(domain: ContentDomain): string {
  if (domain === 'industries') {
    return 'real service professional job site tools equipment customer location natural lighting';
  }

  if (domain === 'resources') {
    return 'real service business operations planning desk phone paperwork natural lighting';
  }

  return 'real business professional natural lighting working environment';
}

function detectIndustryFromSlug(slug: string): string | null {
  const normalized = slug.toLowerCase();
  for (const [hint, industry] of Object.entries(SLUG_INDUSTRY_HINTS)) {
    if (normalized.includes(hint)) {
      return industry;
    }
  }
  return null;
}

function enrichQuery(query: string, domain: ContentDomain): string {
  const categories = DOMAIN_CATEGORIES[domain] ?? [];
  const combined = [query, ...categories, getQueryContextSuffix(domain)]
    .join(' ')
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);

  const deduped: string[] = [];
  const seen = new Set<string>();
  for (const token of combined) {
    if (seen.has(token)) continue;
    seen.add(token);
    deduped.push(token);
  }

  return deduped.join(' ');
}

function extractIntent(metadata: ContentMetadata, industry: string | null): ContentIntent {
  const titleLower = metadata.title.toLowerCase();

  // Detect intent from title
  let intent = 'professional workplace';
  for (const [keyword, intentValue] of Object.entries(INTENT_KEYWORDS)) {
    if (titleLower.includes(keyword)) {
      intent = intentValue;
      break;
    }
  }

  // Map intent to emotion
  const emotion = EMOTION_MAP[intent] ?? 'professionalism';

  // Map industry to subject
  const subject = industry
    ? (SUBJECT_MAP[industry] ?? 'service professional')
    : 'business professional';

  return { industry, intent, emotion, subject };
}

// ─── Context Enrichment Map ─────────────────────────────────────────
// Maps abstract topic intents to concrete visual scene words

const CONTEXT_MAP: Record<string, string[]> = {
  'customer management': ['customer messages', 'dispatch desk', 'customer service'],
  'customer path': ['schedule board', 'customer handling notes', 'service operations'],
  'follow-up ownership': ['phone', 'customer notes', 'next step list'],
  workflow: ['schedule board', 'customer handling notes', 'service operations'],
  efficiency: ['laptop', 'customer handling notes', 'service workspace'],
  scheduling: ['calendar', 'appointment book', 'reception desk'],
  reputation: ['happy customer', 'handshake', 'storefront'],
  visibility: ['storefront', 'signage', 'street'],
  engagement: ['answering phone', 'customer service', 'front desk'],
  outreach: ['phone call', 'email', 'customer follow up'],
  results: ['celebrating', 'success', 'team meeting'],
  'digital presence': ['laptop', 'website', 'business workspace'],
  growth: ['graph', 'planning board', 'service operations'],
  credibility: ['established business', 'awards', 'professional environment'],
  'professional workplace': ['service workspace', 'desk', 'real business'],
};

/** Build an intent-driven search query from extracted content signals */
function buildIntentQuery(
  intent: ContentIntent,
  metadata: ContentMetadata,
  domain: ContentDomain
): string {
  const parts: string[] = [];

  // Industry keyword
  if (intent.industry) {
    parts.push(intent.industry.replace(/-/g, ' '));
  }

  // Subject keyword (person-focused)
  parts.push(intent.subject);

  // Context enrichment — add scene/environment words from intent
  const contextWords = CONTEXT_MAP[intent.intent] ??
    CONTEXT_MAP['professional workplace'] ?? ['service workspace'];
  parts.push(contextWords[0]);

  // Context from primary keyword
  const kwWords = metadata.summary
    .replace(/-/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 3)
    .slice(0, 2);
  if (kwWords.length > 0) parts.push(kwWords.join(' '));

  // Enforce human/person presence (FIX 4 — faces = CTR boost)
  const queryText = parts.join(' ').toLowerCase();
  const hasHuman = HUMAN_PRIORITY.some(h => queryText.includes(h));
  if (!hasHuman) {
    parts.push('person');
  }

  // Brand consistency — enforce real-world professional aesthetic
  parts.push('natural lighting');

  if (domain === 'industries') {
    parts.push('on site');
    parts.push('tools');
  }

  if (domain === 'resources') {
    parts.push('service business');
    parts.push('planning');
  }

  return parts.join(' ');
}

/** Generate ranked semantic queries for image search */
export function generateSemanticQueries(
  metadata: ContentMetadata,
  domain: ContentDomain,
  maxQueries = 6
): SemanticQuery[] {
  const industry = detectIndustry(metadata) ?? detectIndustryFromSlug(metadata.slug);
  const topicVisuals = findTopicVisuals(metadata);
  const style = DOMAIN_STYLES[domain];
  const intent = extractIntent(metadata, industry);
  const candidates: SemanticQuery[] = [];

  // ── Strategy 1: Intent-driven primary query (score 6) ─────────────
  // Real scene, story-aligned — the best possible query
  const intentQuery = buildIntentQuery(intent, metadata, domain);
  candidates.push({ query: enrichQuery(intentQuery, domain), score: 6, source: 'intent' });

  // ── Service page boost: enforce person + action in queries ──
  if (domain === 'services') {
    candidates.push({
      query: enrichQuery(`professional person helping customer ${intent.subject}`, domain),
      score: 5.5,
      source: 'serviceAction',
    });
  }

  if (domain === 'resources') {
    const industryLabel = industry ? industry.replace(/-/g, ' ') : 'service business';
    const resourceText = [metadata.title, metadata.summary, ...metadata.topics, ...metadata.tags]
      .join(' ')
      .toLowerCase();
    candidates.push(
      {
        query: enrichQuery(`${industryLabel} owner reviewing customer reviews on phone`, domain),
        score: 5.7,
        source: 'resourceOps',
      },
      {
        query: enrichQuery(`${industryLabel} manager planning appointments and follow up`, domain),
        score: 5.4,
        source: 'resourceOps',
      }
    );

    if (resourceText.includes('review')) {
      candidates.push({
        query: enrichQuery(
          `${industryLabel} customer leaving five star review for service business`,
          domain
        ),
        score: 5.8,
        source: 'resourceReview',
      });
    }
  }

  // ── Strategy 2: Industry-specific visuals (score 5) ───────────────
  if (industry && INDUSTRY_VISUALS[industry]) {
    const visuals = INDUSTRY_VISUALS[industry];
    for (const visual of visuals.slice(0, 2)) {
      candidates.push({ query: enrichQuery(visual, domain), score: 5, source: 'industry' });
    }
  }

  // ── Strategy 3: Topic-mapped visuals (score 4) ─────────────────────
  for (const visual of topicVisuals.slice(0, 2)) {
    candidates.push({ query: enrichQuery(visual, domain), score: 4, source: 'topicVisual' });
  }

  // ── Strategy 4: Alternative angle — industry + different context (score 3.5)
  if (industry) {
    const industryLabel = industry.replace(/-/g, ' ');
    candidates.push({
      query: enrichQuery(
        `${industryLabel} professional at work customer location real business`,
        domain
      ),
      score: 3.5,
      source: 'alternative',
    });
  }

  // ── Strategy 5: Domain style scenes (score 3) ─────────────────────
  for (const scene of style.preferredScenes.slice(0, 2)) {
    candidates.push({ query: enrichQuery(scene, domain), score: 3, source: 'domainStyle' });
  }

  // ── Strategy 6: Industry + topic combination (score 3) ────────────
  if (industry) {
    const topicWords = metadata.topics[0]?.replace(/-/g, ' ') ?? '';
    if (topicWords) {
      const industryLabel = industry.replace(/-/g, ' ');
      candidates.push({
        query: enrichQuery(`${industryLabel} business ${topicWords}`, domain),
        score: 3,
        source: 'industryTopic',
      });
    }
  }

  // ── Strategy 7: Fallback — grounded service-business context (score 2) ───────────
  if (candidates.length < 3) {
    candidates.push(
      {
        query: enrichQuery('local service business professional at work', domain),
        score: 2,
        source: 'fallback',
      },
      {
        query: enrichQuery('small business owner helping customer', domain),
        score: 2,
        source: 'fallback',
      },
      {
        query: enrichQuery('service professional practical business environment', domain),
        score: 1.5,
        source: 'fallback',
      }
    );
  }

  // Deduplicate
  const seen = new Set<string>();
  const unique = candidates.filter(c => {
    const key = c.query.toLowerCase().trim();
    if (!key || seen.has(key)) return false;
    if (NEGATIVE_TERMS.some(term => key.includes(term))) return false;
    seen.add(key);
    return true;
  });

  // Sort by score, then shuffle within same-score tiers for variety across runs
  const sorted = unique.sort((a, b) => b.score - a.score);
  const seed = Date.now();
  const shuffled: SemanticQuery[] = [];
  let i = 0;
  while (i < sorted.length) {
    let j = i;
    while (j < sorted.length && sorted[j].score === sorted[i].score) j++;
    const tier = sorted.slice(i, j);
    // Fisher-Yates with deterministic-per-run seed
    for (let k = tier.length - 1; k > 0; k--) {
      const r = ((seed + k * 2654435761) >>> 0) % (k + 1);
      [tier[k], tier[r]] = [tier[r], tier[k]];
    }
    shuffled.push(...tier);
    i = j;
  }

  return shuffled.slice(0, maxQueries);
}
