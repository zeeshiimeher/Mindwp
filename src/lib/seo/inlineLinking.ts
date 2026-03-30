// ─── Types ───────────────────────────────────────────────────────────────────

export interface LinkMapEntry {
  keyword: string;
  path: string;
  title: string;
}

export interface LinkMapInput {
  services: Array<{ slug: string; badge: string; title: string; path: string }>;
  features: Array<{ slug: string; title: string; path: string }>;
  industries: Array<{ title: string; canonicalUrl: string }>;
}

// ─── Keyword Map ─────────────────────────────────────────────────────────────

export function buildLinkMap(input: LinkMapInput): LinkMapEntry[] {
  const entries: LinkMapEntry[] = [];
  const seen = new Set<string>();

  const add = (keyword: string, path: string, title: string) => {
    const key = keyword.toLowerCase();
    if (key.length < 4 || seen.has(key)) return;
    seen.add(key);
    entries.push({ keyword: key, path, title });
  };

  // Services: use badge (short label) + title
  for (const service of input.services) {
    add(service.badge, service.path, service.title);
    add(service.title, service.path, service.title);
  }

  // Features: use title
  for (const feature of input.features) {
    add(feature.title, feature.path, feature.title);
  }

  // Industries: use title + canonicalUrl
  for (const industry of input.industries) {
    add(industry.title, industry.canonicalUrl, industry.title);
  }

  // Sort longest-first so longer phrases match before shorter substrings
  entries.sort((a, b) => b.keyword.length - a.keyword.length);

  return entries;
}

// ─── Public API ──────────────────────────────────────────────────────────────

const MAX_LINKS_PER_BLOCK = 3;

/**
 * Splits a plain-text string into segments that alternate between
 * plain text and internal link targets.
 *
 * Returns an array of segment objects:
 * - `{ type: 'text', value: string }` — plain text
 * - `{ type: 'link', value: string, href: string, title: string }` — linkable keyword
 *
 * Rules:
 * - Max 3 links per block
 * - Only first occurrence of each keyword is linked
 * - No duplicate link targets
 * - Case-insensitive matching
 */
export function extractInternalLinks(
  text: string,
  linkMap: LinkMapEntry[],
  excludePaths: string[] = []
): Array<
  { type: 'text'; value: string } | { type: 'link'; value: string; href: string; title: string }
> {
  if (!text || text.length === 0) return [{ type: 'text', value: text }];

  const excludeSet = new Set(excludePaths);

  // Find all keyword matches with positions
  interface Match {
    start: number;
    end: number;
    keyword: string;
    path: string;
    title: string;
  }

  const matches: Match[] = [];
  const usedPaths = new Set<string>();

  for (const entry of linkMap) {
    if (matches.length >= MAX_LINKS_PER_BLOCK) break;
    if (!entry.path || excludeSet.has(entry.path)) continue;
    if (usedPaths.has(entry.path)) continue;

    // Word-boundary match, case-insensitive
    const escaped = entry.keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\b(${escaped})\\b`, 'i');
    const match = regex.exec(text);

    if (match && match.index !== undefined) {
      // Check no overlap with existing matches
      const start = match.index;
      const end = start + match[0].length;
      const overlaps = matches.some(m => start < m.end && end > m.start);
      if (overlaps) continue;

      matches.push({ start, end, keyword: match[0], path: entry.path, title: entry.title });
      usedPaths.add(entry.path);
    }
  }

  if (matches.length === 0) return [{ type: 'text', value: text }];

  // Sort by position
  matches.sort((a, b) => a.start - b.start);

  // Build segments
  const segments: Array<
    { type: 'text'; value: string } | { type: 'link'; value: string; href: string; title: string }
  > = [];
  let cursor = 0;

  for (const m of matches) {
    if (m.start > cursor) {
      segments.push({ type: 'text', value: text.slice(cursor, m.start) });
    }
    segments.push({ type: 'link', value: m.keyword, href: m.path, title: m.title });
    cursor = m.end;
  }

  if (cursor < text.length) {
    segments.push({ type: 'text', value: text.slice(cursor) });
  }

  return segments;
}
