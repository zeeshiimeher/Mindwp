// ─── Image Relevance Scoring Engine ─────────────────────────────────
// Multi-factor scoring to select the best image from candidates

import { SCORING_WEIGHTS } from '../config';
import type {
  ContentDomain,
  ContentMetadata,
  ImageIntelligenceResult,
  ProviderImage,
  RelevanceScoreFactors,
  ScoredImage,
} from '../types';

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

const GENERIC_OFFICE_TERMS = [
  'office',
  'meeting',
  'conference',
  'coworking',
  'boardroom',
  'corporate',
  'headset',
  'call center',
  'desk job',
];

const FIELD_SERVICE_TERMS = [
  'technician',
  'repair',
  'service van',
  'job site',
  'uniform',
  'equipment',
  'tools',
  'customer home',
  'air conditioning',
  'hvac',
  'salon',
  'stylist',
  'barber',
  'plumber',
  'electrician',
  'roof',
];

const RESOURCE_OPERATION_TERMS = [
  'schedule',
  'calendar',
  'dispatch',
  'review',
  'customer',
  'phone',
  'appointment',
  'notebook',
  'planning',
  'workflow',
  'service business',
];

function extractIntentTerms(metadata: ContentMetadata): string[] {
  return [
    metadata.summary,
    metadata.title,
    ...metadata.topics,
    ...metadata.systems,
    ...metadata.tags,
    ...metadata.sectionHeadings,
  ]
    .join(' ')
    .toLowerCase()
    .split(/\s+/)
    .map(term => term.replace(/[^a-z0-9-]/g, ''))
    .filter(term => term.length > 3);
}

function imageMatchesIntent(
  image: ProviderImage,
  metadata: ContentMetadata,
  domain: ContentDomain
): boolean {
  const imageTerms = [image.description, ...image.tags].join(' ').toLowerCase();
  if (NEGATIVE_TERMS.some(term => imageTerms.includes(term))) return false;

  const intentTerms = extractIntentTerms(metadata);
  const directMatches = intentTerms.filter(term => imageTerms.includes(term)).length;
  if (directMatches > 0) return true;

  if (domain === 'resources' || domain === 'industries') {
    return false;
  }

  const businessContext = ['business', 'service', 'customer', 'client', 'office', 'professional'];
  return businessContext.some(term => imageTerms.includes(term));
}

function scoreDomainFit(image: ProviderImage, domain: ContentDomain): number {
  const imageTerms = [image.description, ...image.tags].join(' ').toLowerCase();
  const genericOfficeHits = GENERIC_OFFICE_TERMS.filter(term => imageTerms.includes(term)).length;

  if (domain === 'industries') {
    const fieldHits = FIELD_SERVICE_TERMS.filter(term => imageTerms.includes(term)).length;
    let score = 50 + fieldHits * 12 - genericOfficeHits * 18;
    if (fieldHits === 0) score -= 20;
    return Math.max(0, Math.min(100, score));
  }

  if (domain === 'resources') {
    const operationHits = RESOURCE_OPERATION_TERMS.filter(term => imageTerms.includes(term)).length;
    let score = 50 + operationHits * 10 - genericOfficeHits * 16;
    if (operationHits === 0 && genericOfficeHits > 0) score -= 14;
    return Math.max(0, Math.min(100, score));
  }

  return 50;
}

/** Calculate how relevant an image is to the article topic */
function scoreSubjectRelevance(
  image: ProviderImage,
  metadata: ContentMetadata,
  domain: ContentDomain
): number {
  if (!imageMatchesIntent(image, metadata, domain)) {
    return 0;
  }

  const searchTerms = [
    metadata.summary,
    ...metadata.topics,
    ...metadata.systems,
    ...metadata.tags,
  ]
    .map(t => t.toLowerCase())
    .filter(Boolean);

  const imageTerms = [image.description, ...image.tags].join(' ').toLowerCase();

  let matches = 0;
  for (const term of searchTerms) {
    const words = term.split(/\s+/);
    for (const word of words) {
      if (word.length > 3 && imageTerms.includes(word)) {
        matches++;
      }
    }
  }

  return Math.min(100, matches * 15);
}

/** Score visual clarity based on resolution and metadata */
function scoreVisualClarity(image: ProviderImage, intelligence: ImageIntelligenceResult): number {
  let score = 50;

  // Resolution bonus
  if (image.width >= 2400) score += 20;
  else if (image.width >= 1600) score += 10;

  // Contrast bonus
  if (!intelligence.contrast.isLowContrast) score += 15;

  // Brightness in good range (not too dark, not too bright)
  const avg = intelligence.brightness.average;
  if (avg >= 60 && avg <= 200) score += 15;

  return Math.min(100, score);
}

/** Score composition quality */
function scoreComposition(intelligence: ImageIntelligenceResult): number {
  let score = 50;

  // Subject not centered is better for overlays
  if (!intelligence.subjectPosition.isCentered) score += 25;

  // Subject on right is ideal — keeps left zone clean for text overlay
  if (intelligence.subjectPosition.region === 'right') score += 10;

  // Landscape orientation preferred
  if (intelligence.orientation.isLandscape) score += 15;

  // No text is better
  if (!intelligence.textDetection.hasText) score += 10;

  return Math.min(100, score);
}

/** Score overlay compatibility — can we put text over this image? */
function scoreOverlayCompatibility(intelligence: ImageIntelligenceResult): number {
  let score = 50;

  // Low center edge density = clean area for text
  const centerDensity = intelligence.subjectPosition.edgeDensityCenter;
  if (centerDensity < 0.3) score += 25;
  else if (centerDensity < 0.4) score += 10;

  // Clean left zone = ideal for text overlay (text renders left-of-center)
  const leftDensity = intelligence.subjectPosition.edgeDensityLeft;
  if (leftDensity < 0.25) score += 15;
  else if (leftDensity < 0.35) score += 5;

  // Good contrast makes overlays work better
  if (!intelligence.contrast.isLowContrast) score += 15;

  // Not centered subject means center is free for text
  if (!intelligence.subjectPosition.isCentered) score += 10;

  return Math.min(100, score);
}

/** Score resolution quality */
function scoreResolution(image: ProviderImage): number {
  if (image.width >= 2400 && image.height >= 1350) return 100;
  if (image.width >= 1600 && image.height >= 900) return 80;
  if (image.width >= 1200) return 50;
  return 20;
}

/** Calculate total relevance score for a candidate image */
export function scoreImage(
  image: ProviderImage,
  intelligence: ImageIntelligenceResult,
  metadata: ContentMetadata,
  domain: ContentDomain
): ScoredImage {
  const factors: RelevanceScoreFactors = {
    subjectRelevance: Math.round(
      domain === 'resources'
        ? scoreSubjectRelevance(image, metadata, domain) * 0.55 +
            scoreDomainFit(image, domain) * 0.45
        : scoreSubjectRelevance(image, metadata, domain) * 0.7 + scoreDomainFit(image, domain) * 0.3
    ),
    visualClarity: scoreVisualClarity(image, intelligence),
    compositionQuality: scoreComposition(intelligence),
    overlayCompatibility: scoreOverlayCompatibility(intelligence),
    resolutionQuality: scoreResolution(image),
  };

  const relevanceScore =
    factors.subjectRelevance * SCORING_WEIGHTS.subjectRelevance +
    factors.visualClarity * SCORING_WEIGHTS.visualClarity +
    factors.compositionQuality * SCORING_WEIGHTS.compositionQuality +
    factors.overlayCompatibility * SCORING_WEIGHTS.overlayCompatibility +
    factors.resolutionQuality * SCORING_WEIGHTS.resolutionQuality;

  return {
    image,
    intelligence,
    relevanceScore: Math.round(relevanceScore),
    factors,
  };
}

/** Rank a list of scored images — highest score first */
export function rankImages(scoredImages: ScoredImage[]): ScoredImage[] {
  return [...scoredImages].sort((a, b) => b.relevanceScore - a.relevanceScore);
}
