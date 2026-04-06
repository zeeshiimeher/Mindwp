import type { OverlayDesignContext } from '../types';

export interface RenderCopy {
  title: string;
  subtitle: string | null;
}

const SERVICE_COPY_BY_SLUG: Record<string, RenderCopy> = {
  'growth-revenue-systems': {
    title: 'Revenue Growth Systems',
    subtitle: 'Find where leads and follow-up lose momentum.',
  },
  'smart-website-systems': {
    title: 'Smart Website Systems',
    subtitle: 'Structured websites built for enquiries, workflows, and SEO.',
  },
};

const FEATURE_COPY_BY_SLUG: Record<string, RenderCopy> = {
  calendars: {
    title: 'Online Booking Layer',
    subtitle: 'Structured booking integrated into your system.',
  },
  workflows: {
    title: 'Workflow Automation',
    subtitle: 'Automate follow-ups without losing control.',
  },
};

function compactSentence(text: string): string {
  const trimmed = text.replace(/\s+/g, ' ').trim();
  if (trimmed.length <= 64) return trimmed;

  const shortened = trimmed
    .replace(/^a\s+/i, '')
    .replace(/^the\s+/i, '')
    .replace(/\s+that\s+.*$/i, '')
    .replace(/\s+when\s+.*$/i, '')
    .trim();

  return shortened.length > 0 && shortened.length <= 48
    ? shortened
    : `${trimmed.slice(0, 61).trimEnd()}...`;
}

function fallbackServiceCopy(title: string): RenderCopy {
  const lower = title.toLowerCase();

  if (lower.includes('website')) {
    return {
      title: 'Smart Website Systems',
      subtitle: 'Structured websites that support enquiries and operations.',
    };
  }

  if (
    ['growth', 'revenue', 'lead', 'follow-up', 'pipeline', 'conversion'].some(keyword =>
      lower.includes(keyword)
    )
  ) {
    return {
      title: 'Revenue Growth Systems',
      subtitle: 'Fix the points where leads, follow-up, and conversion slow down.',
    };
  }

  return {
    title: compactSentence(title),
    subtitle: null,
  };
}

function fallbackBlogCopy(title: string): RenderCopy {
  const match = title.match(/^(.+?)\s+for\s+(.+)$/i);
  if (match && title.length > 28) {
    const mainTitle = match[1].trim();
    const qualifier = match[2].trim();

    return {
      title: mainTitle,
      subtitle: `For ${qualifier}`,
    };
  }

  return {
    title,
    subtitle: null,
  };
}

function fallbackResourceCopy(title: string): RenderCopy {
  return { title, subtitle: null };
}

function fallbackCaseStudyCopy(title: string): RenderCopy {
  return { title, subtitle: null };
}

export function resolveRenderCopy(title: string, design: OverlayDesignContext): RenderCopy {
  if (design.domain === 'services') {
    return SERVICE_COPY_BY_SLUG[design.slug] ?? fallbackServiceCopy(title);
  }

  if (design.domain === 'features') {
    return FEATURE_COPY_BY_SLUG[design.slug] ?? {
      title: compactSentence(title),
      subtitle: null,
    };
  }

  if (design.domain === 'blog') {
    return fallbackBlogCopy(title);
  }

  if (design.domain === 'resources') {
    return fallbackResourceCopy(title);
  }

  if (design.domain === 'case-studies') {
    return fallbackCaseStudyCopy(title);
  }

  return {
    title,
    subtitle: null,
  };
}