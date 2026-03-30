// ─── Semantic Query Generator ───────────────────────────────────────
// Maps content metadata to visual search queries grounded in the MindWP business:
// a digital infrastructure consultancy for local service businesses
// (HVAC, plumbing, roofing, salons, dental, automotive, legal, real estate).
//
// Images should show REAL service professionals, workplaces, and operations —
// not abstract dashboards, generic tech screens, or corporate stock photos.

import { DOMAIN_STYLES } from '../config';
import type { ContentDomain, ContentMetadata, SemanticQuery } from '../types';

// ─── Industry Detection ─────────────────────────────────────────────
// Detect which industry a piece of content is about so we can search
// for imagery of THAT specific trade/profession

const INDUSTRY_KEYWORDS: Record<string, string[]> = {
  hvac: ['hvac', 'heating', 'air conditioning', 'cooling', 'furnace', 'ventilation'],
  plumbing: ['plumb', 'pipe', 'drain', 'water heater', 'leak'],
  roofing: ['roof', 'shingle', 'gutter', 'storm damage'],
  electrical: ['electric', 'wiring', 'circuit', 'panel'],
  landscaping: ['landscape', 'lawn', 'garden', 'outdoor'],
  salon: ['salon', 'hair', 'beauty', 'stylist', 'barber', 'nail', 'lash', 'spa', 'aesthetic'],
  dental: ['dental', 'dentist', 'orthodont', 'clinic'],
  automotive: ['auto', 'car', 'mechanic', 'vehicle', 'body shop', 'detailing'],
  'real-estate': ['real estate', 'realtor', 'property', 'mortgage', 'home inspector'],
  legal: ['law', 'legal', 'attorney', 'solicitor', 'lawyer'],
  healthcare: ['health', 'medical', 'clinic', 'patient', 'doctor'],
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
  electrical: [
    'electrician working on electrical panel',
    'electrical contractor residential wiring',
    'professional electrician tools',
  ],
  landscaping: [
    'professional landscaper maintaining garden',
    'landscaping team working residential yard',
    'lawn care professional mowing',
  ],
  salon: [
    'hair stylist working with client in salon',
    'modern hair salon interior',
    'beauty salon professional styling hair',
    'salon receptionist booking appointment',
  ],
  dental: [
    'modern dental practice reception area',
    'dental office patient consultation',
    'dentist office front desk welcoming patient',
    'dental hygienist with patient',
  ],
  automotive: [
    'auto mechanic working under car hood',
    'car repair shop professional mechanic',
    'automotive service center workshop',
    'mechanic inspecting car in garage',
  ],
  'real-estate': [
    'real estate agent showing house to couple',
    'realtor discussing property with clients',
    'property viewing open house',
  ],
  legal: [
    'lawyer consulting with client in office',
    'law firm office meeting room',
    'solicitor reviewing documents with client',
  ],
  healthcare: [
    'medical receptionist greeting patient',
    'healthcare clinic waiting room modern',
    'doctor consulting patient in office',
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
    'whiteboard with business workflow notes',
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
  // Automation & systems
  automation: [
    'business owner working efficiently on laptop',
    'service business team workflow morning briefing',
    'organized professional workspace with laptop and phone',
  ],
  system: [
    'well organized modern business workspace',
    'service professional with organized digital tools',
    'efficient business operations at desk',
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
    metadata.primaryKeyword,
    ...metadata.topics,
    ...metadata.systems,
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
    metadata.primaryKeyword,
    ...metadata.topics,
    ...metadata.systems,
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

/** Generate ranked semantic queries for image search */
export function generateSemanticQueries(
  metadata: ContentMetadata,
  domain: ContentDomain,
  maxQueries = 6
): SemanticQuery[] {
  const industry = detectIndustry(metadata);
  const topicVisuals = findTopicVisuals(metadata);
  const style = DOMAIN_STYLES[domain];
  const candidates: SemanticQuery[] = [];

  // ── Priority 1: Industry-specific visuals (score 5) ───────────────
  // If the content mentions a specific industry, those images are the most relevant
  if (industry && INDUSTRY_VISUALS[industry]) {
    const visuals = INDUSTRY_VISUALS[industry];
    // Pick top 2 industry visuals
    for (const visual of visuals.slice(0, 2)) {
      candidates.push({ query: visual, score: 5, source: 'industry' });
    }
  }

  // ── Priority 2: Topic-mapped visuals (score 4) ────────────────────
  // Abstract topics mapped to real-world visual scenes
  for (const visual of topicVisuals.slice(0, 2)) {
    candidates.push({ query: visual, score: 4, source: 'topicVisual' });
  }

  // ── Priority 3: Domain style scenes (score 3) ─────────────────────
  // Generic per-domain imagery (e.g. "service professional at work" for blog)
  for (const scene of style.preferredScenes.slice(0, 2)) {
    candidates.push({ query: scene, score: 3, source: 'domainStyle' });
  }

  // ── Priority 4: Industry + topic combination (score 3) ────────────
  if (industry) {
    const topicWords = metadata.topics[0]?.replace(/-/g, ' ') ?? '';
    if (topicWords) {
      const industryLabel = industry.replace(/-/g, ' ');
      candidates.push({
        query: `${industryLabel} business ${topicWords}`,
        score: 3,
        source: 'industryTopic',
      });
    }
  }

  // ── Priority 5: Fallback — general service business imagery (score 2)
  if (candidates.length < 3) {
    candidates.push(
      { query: 'local service business professional at work', score: 2, source: 'fallback' },
      { query: 'small business owner helping customer', score: 2, source: 'fallback' }
    );
  }

  // Deduplicate
  const seen = new Set<string>();
  const unique = candidates.filter(c => {
    const key = c.query.toLowerCase().trim();
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  return unique.sort((a, b) => b.score - a.score).slice(0, maxQueries);
}
