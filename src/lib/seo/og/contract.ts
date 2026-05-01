import { normalizePath } from '@/lib/seo/config';

export type OGType = 'service' | 'feature' | 'industry' | 'resource' | 'blog' | 'case-study';

export type OGLayout = 'standard-content' | 'service-system' | 'industry-local';

export type OGInput = {
  type: OGType;
  title: string;
  subtitle?: string;
  eyebrow?: string;
  image?: string;
};

export type OGEntityDescriptor = {
  type: OGType;
  slug: string;
};

type OGRouteInput = {
  path: string;
  title: string;
  description: string;
  openGraph?: {
    title?: string;
    description?: string;
  };
};

const TYPE_TO_LAYOUT: Record<OGType, OGLayout> = {
  service: 'service-system',
  feature: 'service-system',
  blog: 'standard-content',
  resource: 'standard-content',
  'case-study': 'standard-content',
  industry: 'industry-local',
};

const TYPE_TO_EYEBROW: Record<OGType, string> = {
  service: 'SERVICE SYSTEM',
  feature: 'FEATURE MODULE',
  blog: 'INSIGHT ARTICLE',
  resource: 'RESOURCE GUIDE',
  'case-study': 'CASE STUDY',
  industry: 'LOCAL INDUSTRY',
};

function truncateText(value: string, maxLength: number) {
  const normalized = value.replace(/\s+/g, ' ').trim();
  if (normalized.length <= maxLength) {
    return normalized;
  }

  return `${normalized.slice(0, Math.max(0, maxLength - 1)).trimEnd()}…`;
}

function encodeRoutePath(routePath: string) {
  return encodeURIComponent(normalizePath(routePath));
}

function getPathSegments(routePath: string) {
  return normalizePath(routePath).split('/').filter(Boolean);
}

export function isOGType(value: string): value is OGType {
  return value in TYPE_TO_LAYOUT;
}

export function getOGLayout(type: OGType): OGLayout {
  return TYPE_TO_LAYOUT[type];
}

export function buildOGImagePath(descriptor: OGEntityDescriptor | { path: string }) {
  if ('path' in descriptor) {
    return `/api/og?path=${encodeRoutePath(descriptor.path)}`;
  }

  return `/api/og?type=${descriptor.type}&slug=${encodeURIComponent(descriptor.slug)}`;
}

export function resolveOGEntityFromPath(routePath: string): OGEntityDescriptor | null {
  const segments = getPathSegments(routePath);

  if (segments.length < 2) {
    return null;
  }

  const slug = segments.at(-1);
  if (!slug) {
    return null;
  }

  switch (segments[0]) {
    case 'services':
      return { type: 'service', slug };
    case 'features':
      return { type: 'feature', slug };
    case 'industries':
      return { type: 'industry', slug };
    case 'resources':
      if (segments[1] === 'category') {
        return null;
      }
      return { type: 'resource', slug };
    case 'blog':
      if (segments[1] === 'category' || segments[1] === 'topic') {
        return null;
      }
      return { type: 'blog', slug };
    case 'case-studies':
      return { type: 'case-study', slug };
    default:
      return null;
  }
}

export function resolveOGRenderTypeFromPath(routePath: string): OGType {
  const entity = resolveOGEntityFromPath(routePath);
  if (entity) {
    return entity.type;
  }

  const [rootSegment] = getPathSegments(routePath);
  switch (rootSegment) {
    case 'services':
      return 'service';
    case 'features':
      return 'feature';
    case 'industries':
      return 'industry';
    case 'blog':
      return 'blog';
    case 'case-studies':
      return 'case-study';
    default:
      return 'resource';
  }
}

export function resolveOGImagePathForRoute(routePath: string) {
  const entity = resolveOGEntityFromPath(routePath);
  return buildOGImagePath(entity ?? { path: routePath });
}

export function buildOGInputFromRoute(input: OGRouteInput): OGInput {
  const type = resolveOGRenderTypeFromPath(input.path);
  const title = truncateText(input.openGraph?.title ?? input.title, 88);
  const subtitleSource = input.openGraph?.description ?? input.description;
  const subtitle = truncateText(subtitleSource, 148);

  return {
    type,
    title,
    subtitle: subtitle.length > 0 ? subtitle : undefined,
    eyebrow: TYPE_TO_EYEBROW[type],
  };
}
