/**
 * ANCHOR TEXT SYSTEM
 *
 * Purpose:
 * Generates and matches anchor text for internal links.
 * Uses real content titles — never keyword-stuffed phrases.
 *
 * Rules:
 * - Anchor text = content title (no manipulation)
 * - Matching supports strict (full title) and partial (≥70% words)
 * - Case-insensitive normalization for all comparisons
 */

export function buildAnchor(text: string): string {
  return text;
}

export function normalize(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, '');
}

// --- Anchor Matching ---
// Strict: full normalized title found in sentence.
// Partial: ≥70% of anchor words present (handles natural text variation).
export function isAnchorMatch(sentence: string, anchor: string): boolean {
  const s = normalize(sentence);
  const a = normalize(anchor);

  // strict match
  if (s.includes(a)) return true;

  // partial match (70% words)
  const words = a.split(/\s+/).filter(w => w.length > 0);
  if (words.length === 0) return false;
  const matched = words.filter(w => s.includes(w));

  return matched.length / words.length >= 0.7;
}
