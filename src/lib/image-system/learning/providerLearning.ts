// ─── Provider Quality Learning Engine ───────────────────────────────
// Tracks and learns which providers deliver best images per domain

import fs from 'fs';
import path from 'path';

import { DATA_FILES, DEFAULT_PROVIDER_ORDER } from '../config';
import type { ContentDomain, ProviderName, ProviderScores } from '../types';

/** Initialize default provider scores */
function createDefaultScores(): ProviderScores {
  const defaults: Record<ProviderName, number> = {
    unsplash: 0.7,
    pexels: 0.6,
    pixabay: 0.5,
  };

  return {
    blog: { ...defaults },
    resources: { ...defaults },
    industries: { ...defaults },
    'case-studies': { ...defaults },
    features: { ...defaults },
    services: { ...defaults },
  };
}

/** Load provider scores from disk */
export function loadProviderScores(): ProviderScores {
  const filePath = path.resolve(DATA_FILES.providerScores);
  if (fs.existsSync(filePath)) {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8')) as ProviderScores;
  }
  return createDefaultScores();
}

/** Save provider scores to disk */
export function saveProviderScores(scores: ProviderScores): void {
  const filePath = path.resolve(DATA_FILES.providerScores);
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(scores, null, 2));
}

/** Update provider score after an image is accepted or rejected */
export function updateProviderScore(
  domain: ContentDomain,
  provider: ProviderName,
  accepted: boolean,
  relevanceScore: number
): void {
  const scores = loadProviderScores();

  if (!scores[domain]) {
    scores[domain] = { unsplash: 0.7, pexels: 0.6, pixabay: 0.5 };
  }

  const current = scores[domain][provider] ?? 0.5;
  const normalizedScore = relevanceScore / 100;

  // Exponential moving average: slow adaptation
  const alpha = 0.1;
  const adjustment = accepted ? normalizedScore : normalizedScore * 0.5;
  scores[domain][provider] = current * (1 - alpha) + adjustment * alpha;

  // Clamp between 0.1 and 1.0
  scores[domain][provider] = Math.max(0.1, Math.min(1.0, scores[domain][provider]));

  saveProviderScores(scores);
}

/** Get providers ranked by quality for a domain */
export function getRankedProviders(domain: ContentDomain): ProviderName[] {
  const scores = loadProviderScores();
  const domainScores = scores[domain];

  if (!domainScores) return [...DEFAULT_PROVIDER_ORDER];

  return [...DEFAULT_PROVIDER_ORDER].sort(
    (a, b) => (domainScores[b] ?? 0) - (domainScores[a] ?? 0)
  );
}
