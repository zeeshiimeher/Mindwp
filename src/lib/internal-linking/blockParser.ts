/**
 * CONTENT BLOCK PARSER
 *
 * Purpose:
 * Splits page content into zones (intro / body / conclusion)
 * for the placement engine. Zone boundaries determine where
 * each link category can be injected.
 *
 * Zone allocation:
 * - Intro: first 1–2 paragraphs
 * - Body: middle paragraphs
 * - Conclusion: final paragraph
 */

export interface ContentBlocks {
  intro: string[];
  body: string[];
  conclusion: string[];
}

export function splitContentBlocks(text: string): ContentBlocks {
  const paragraphs = text.split('\n\n').filter(p => p.trim().length > 0);

  if (paragraphs.length <= 2) {
    return {
      intro: paragraphs.slice(0, 1),
      body: [],
      conclusion: paragraphs.slice(-1),
    };
  }

  return {
    intro: paragraphs.slice(0, 2),
    body: paragraphs.slice(2, -1),
    conclusion: paragraphs.slice(-1),
  };
}
