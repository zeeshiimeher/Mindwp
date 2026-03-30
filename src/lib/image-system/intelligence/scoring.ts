// ─── Image Relevance Scoring Engine ─────────────────────────────────
// Multi-factor scoring to select the best image from candidates

import { SCORING_WEIGHTS } from '../config';
import type {
  ContentMetadata,
  ImageIntelligenceResult,
  ProviderImage,
  RelevanceScoreFactors,
  ScoredImage,
} from '../types';

/** Calculate how relevant an image is to the article topic */
function scoreSubjectRelevance(image: ProviderImage, metadata: ContentMetadata): number {
  const searchTerms = [
    metadata.primaryKeyword,
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
  metadata: ContentMetadata
): ScoredImage {
  const factors: RelevanceScoreFactors = {
    subjectRelevance: scoreSubjectRelevance(image, metadata),
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
