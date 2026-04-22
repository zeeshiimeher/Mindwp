// ─── Content Analyzer ───────────────────────────────────────────────
// Extracts metadata signals from content for query generation and placement

import type { ContentMetadata } from '../types';

/** Extract ContentMetadata from a blog post data object */
export function extractBlogMetadata(post: {
  title: string;
  slug: string;
  primaryKeyword: string;
  topics: string[];
  systems: string[];
  tags: string[];
  sections: Array<{ type: string; heading?: string }>;
}): ContentMetadata {
  const sectionHeadings = post.sections
    .filter(
      (s): s is typeof s & { heading: string } => 'heading' in s && typeof s.heading === 'string'
    )
    .map(s => s.heading);

  return {
    title: post.title,
    primaryKeyword: post.primaryKeyword,
    topics: post.topics,
    systems: post.systems,
    tags: post.tags,
    sectionHeadings,
    slug: post.slug,
  };
}

/** Extract ContentMetadata from a resource data object */
export function extractResourceMetadata(resource: {
  title: string;
  slug: string;
  primaryKeyword?: string;
  topics?: string[];
  systems?: string[];
  tags?: string[];
  sections?: Array<{ type: string; heading?: string }>;
}): ContentMetadata {
  const sectionHeadings = (resource.sections ?? [])
    .filter(
      (s): s is typeof s & { heading: string } => 'heading' in s && typeof s.heading === 'string'
    )
    .map(s => s.heading);

  return {
    title: resource.title,
    primaryKeyword: resource.primaryKeyword ?? '',
    topics: resource.topics ?? [],
    systems: resource.systems ?? [],
    tags: resource.tags ?? [],
    sectionHeadings,
    slug: resource.slug,
  };
}

/** Extract ContentMetadata from a case study data object */
export function extractCaseStudyMetadata(caseStudy: {
  title: string;
  slug: string;
  seo?: { keywords?: string[] };
  tags?: string[];
  sections?: Array<{ type: string; heading?: string }>;
}): ContentMetadata {
  const sectionHeadings = (caseStudy.sections ?? [])
    .filter(
      (s): s is typeof s & { heading: string } => 'heading' in s && typeof s.heading === 'string'
    )
    .map(s => s.heading);

  return {
    title: caseStudy.title,
    primaryKeyword: caseStudy.seo?.keywords?.[0] ?? '',
    topics: [],
    systems: [],
    tags: caseStudy.tags ?? [],
    sectionHeadings,
    slug: caseStudy.slug,
  };
}

/** Extract repeated meaningful nouns from text sections */
export function extractRepeatedNouns(sections: Array<{ content?: string | string[] }>): string[] {
  const allText = sections
    .map(s => {
      if (typeof s.content === 'string') return s.content;
      if (Array.isArray(s.content)) return s.content.join(' ');
      return '';
    })
    .join(' ')
    .toLowerCase();

  const words = allText.split(/\s+/).filter(w => w.length > 4);
  const counts = new Map<string, number>();

  for (const word of words) {
    const clean = word.replace(/[^a-z]/g, '');
    if (clean.length > 4) {
      counts.set(clean, (counts.get(clean) ?? 0) + 1);
    }
  }

  return [...counts.entries()]
    .filter(([, count]) => count >= 3)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([word]) => word);
}
