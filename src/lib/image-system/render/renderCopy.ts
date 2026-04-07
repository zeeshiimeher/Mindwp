import type { OverlayDesignContext } from '../types';

export interface RenderCopy {
  title: string;
  subtitle: string | null;
}

const SERVICE_COPY_BY_SLUG: Record<string, RenderCopy> = {
  'growth-revenue-systems': {
    title: 'Revenue Growth Systems',
    subtitle: 'Find and fix the points where leads and conversion slow down.',
  },
  'smart-website-systems': {
    title: 'Smart Website Systems',
    subtitle: 'Structured websites built for enquiries, automation, and SEO.',
  },
};

const FEATURE_COPY_BY_SLUG: Record<string, RenderCopy> = {
  calendars: {
    title: 'Online Booking',
    subtitle: 'Structured booking flows connected to your operating system.',
  },
  workflows: {
    title: 'Workflow Automation',
    subtitle: 'Automated follow-up and task movement without losing control.',
  },
};

function normalize(text: string): string {
  return text.replace(/\s+/g, ' ').trim();
}

function splitForQualifier(title: string): RenderCopy | null {
  const match = normalize(title).match(/^(.+?)\s+for\s+(.+)$/i);
  if (!match) return null;

  return {
    title: match[1].trim(),
    subtitle: `For ${match[2].trim()}`,
  };
}

function splitLeadingWords(title: string, wordCount: number): RenderCopy {
  const words = normalize(title).split(' ');

  if (words.length <= wordCount) {
    return { title: normalize(title), subtitle: null };
  }

  return {
    title: words.slice(0, wordCount).join(' '),
    subtitle: words.slice(wordCount).join(' '),
  };
}

function resolveServiceCopy(title: string, slug: string): RenderCopy {
  if (SERVICE_COPY_BY_SLUG[slug]) return SERVICE_COPY_BY_SLUG[slug];

  const words = normalize(title).split(' ');
  const titleWordCount = Math.min(Math.max(2, Math.min(words.length, 4)), 4);
  return splitLeadingWords(title, titleWordCount);
}

function resolveFeatureCopy(title: string, slug: string): RenderCopy {
  if (FEATURE_COPY_BY_SLUG[slug]) return FEATURE_COPY_BY_SLUG[slug];

  return splitLeadingWords(title, Math.min(3, normalize(title).split(' ').length));
}

function resolveBlogCopy(title: string): RenderCopy {
  return splitForQualifier(title) ?? { title: normalize(title), subtitle: null };
}

function resolveCaseStudyCopy(title: string): RenderCopy {
  return splitLeadingWords(title, 2);
}

function resolveResourceCopy(title: string): RenderCopy {
  return { title: normalize(title), subtitle: null };
}

export function resolveRenderCopy(title: string, design: OverlayDesignContext): RenderCopy {
  switch (design.domain) {
    case 'services':
      return resolveServiceCopy(title, design.slug);
    case 'features':
      return resolveFeatureCopy(title, design.slug);
    case 'blog':
      return resolveBlogCopy(title);
    case 'case-studies':
      return resolveCaseStudyCopy(title);
    case 'resources':
      return resolveResourceCopy(title);
    default:
      return { title: normalize(title), subtitle: null };
  }
}