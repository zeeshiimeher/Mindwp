// ─── Types ───────────────────────────────────────────────────────────────────

export interface LinkMapEntry {
  keyword: string;
  path: string;
  title: string;
}

export interface InlineLinkValidationResult {
  valid: boolean;
  reason: string;
  score?: number;
  relationType?: string;
}

export interface InlineLinkDebugEvent {
  keyword: string;
  path: string;
  outcome: 'selected' | 'rejected';
  reason: string;
  score?: number;
  relationType?: string;
}

export interface InlineLinkTracker {
  pagePath: string;
  selectedByDestination: Map<string, number>;
  debug: boolean;
  events: InlineLinkDebugEvent[];
}

export interface ExtractInternalLinksOptions {
  excludePaths?: string[];
  tracker?: InlineLinkTracker;
  validateEntry?: (entry: LinkMapEntry) => InlineLinkValidationResult;
}

export interface LinkMapInput {
  services: Array<{ slug: string; badge: string; title: string; path: string }>;
  features: Array<{ slug: string; title: string; path: string }>;
  industries: Array<{ title: string; canonicalUrl: string }>;
  resources?: Array<{ slug: string; title: string; path: string }>;
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

  // Resources: use title
  for (const resource of input.resources ?? []) {
    add(resource.title, resource.path, resource.title);
  }

  // Sort longest-first so longer phrases match before shorter substrings
  entries.sort((a, b) => b.keyword.length - a.keyword.length);

  return entries;
}

// ─── Public API ──────────────────────────────────────────────────────────────

const MAX_LINKS_PER_BLOCK = 1;
const MAX_LINKS_PER_DESTINATION_PER_PAGE = 2;

export function createInlineLinkTracker(options: {
  pagePath: string;
  debug?: boolean;
}): InlineLinkTracker {
  return {
    pagePath: options.pagePath,
    selectedByDestination: new Map(),
    debug: options.debug ?? false,
    events: [],
  };
}

function recordInlineLinkEvent(
  tracker: InlineLinkTracker | undefined,
  event: InlineLinkDebugEvent
) {
  if (!tracker?.debug) {
    return;
  }

  tracker.events.push(event);
}

/**
 * Splits a plain-text string into segments that alternate between
 * plain text and internal link targets.
 *
 * Returns an array of segment objects:
 * - `{ type: 'text', value: string }` — plain text
 * - `{ type: 'link', value: string, href: string, title: string }` — linkable keyword
 *
 * Rules:
 * - Max 1 link per block
 * - Only first occurrence of each keyword is linked
 * - No duplicate link targets
 * - Case-insensitive matching
 */
export function extractInternalLinks(
  text: string,
  linkMap: LinkMapEntry[],
  options: ExtractInternalLinksOptions = {}
): Array<
  { type: 'text'; value: string } | { type: 'link'; value: string; href: string; title: string }
> {
  if (!text || text.length === 0) return [{ type: 'text', value: text }];

  const excludePaths = options.excludePaths ?? [];
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
    if (!entry.path) {
      recordInlineLinkEvent(options.tracker, {
        keyword: entry.keyword,
        path: entry.path,
        outcome: 'rejected',
        reason: 'missing-path',
      });
      continue;
    }

    if (excludeSet.has(entry.path)) {
      recordInlineLinkEvent(options.tracker, {
        keyword: entry.keyword,
        path: entry.path,
        outcome: 'rejected',
        reason: 'excluded-path',
      });
      continue;
    }

    if (usedPaths.has(entry.path)) {
      recordInlineLinkEvent(options.tracker, {
        keyword: entry.keyword,
        path: entry.path,
        outcome: 'rejected',
        reason: 'duplicate-target-in-block',
      });
      continue;
    }

    const selectedCount = options.tracker?.selectedByDestination.get(entry.path) ?? 0;
    if (selectedCount >= MAX_LINKS_PER_DESTINATION_PER_PAGE) {
      recordInlineLinkEvent(options.tracker, {
        keyword: entry.keyword,
        path: entry.path,
        outcome: 'rejected',
        reason: 'destination-cap-reached',
      });
      continue;
    }

    const validation = options.validateEntry?.(entry);
    if (validation && !validation.valid) {
      recordInlineLinkEvent(options.tracker, {
        keyword: entry.keyword,
        path: entry.path,
        outcome: 'rejected',
        reason: validation.reason,
        score: validation.score,
        relationType: validation.relationType,
      });
      continue;
    }

    // Word-boundary match, case-insensitive
    const escaped = entry.keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\b(${escaped})\\b`, 'i');
    const match = regex.exec(text);

    if (match && match.index !== undefined) {
      // Check no overlap with existing matches
      const start = match.index;
      const end = start + match[0].length;
      const overlaps = matches.some(m => start < m.end && end > m.start);
      if (overlaps) {
        recordInlineLinkEvent(options.tracker, {
          keyword: entry.keyword,
          path: entry.path,
          outcome: 'rejected',
          reason: 'overlap',
        });
        continue;
      }

      matches.push({ start, end, keyword: match[0], path: entry.path, title: entry.title });
      usedPaths.add(entry.path);
      if (options.tracker) {
        options.tracker.selectedByDestination.set(entry.path, selectedCount + 1);
      }
      recordInlineLinkEvent(options.tracker, {
        keyword: entry.keyword,
        path: entry.path,
        outcome: 'selected',
        reason: 'selected',
        score: validation?.score,
        relationType: validation?.relationType,
      });
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
