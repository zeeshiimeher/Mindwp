import { FEATURE_REGISTRY } from '@/domains/features/registry';
import { INDUSTRY_REGISTRY } from '@/domains/industries/registry';
import { resources as resourcePages } from '@/domains/resources/api';
import { SERVICE_REGISTRY } from '@/domains/services/registry';
import { validateInlineLinkTarget } from '@/lib/graph/query';
import {
  buildLinkMap,
  createInlineLinkTracker,
  extractInternalLinks as _extract,
  type ExtractInternalLinksOptions,
  type InlineLinkTracker,
  type LinkMapEntry,
} from '@/lib/seo/inlineLinking';

let _cached: LinkMapEntry[] | null = null;

function getLinkMap(): LinkMapEntry[] {
  if (_cached) return _cached;
  _cached = buildLinkMap({
    services: Object.values(SERVICE_REGISTRY).map(s => ({
      slug: s.slug,
      badge: s.badge,
      title: s.title,
      path: s.path,
    })),
    features: FEATURE_REGISTRY.map(f => ({
      slug: f.slug,
      title: f.title,
      path: f.path,
    })),
    industries: Object.values(INDUSTRY_REGISTRY)
      .filter(i => i.hero?.title && i.seo?.canonical)
      .map(i => ({
        title: i.hero.title,
        canonicalUrl: i.seo.canonical,
      })),
    resources: resourcePages
      .filter(resource => resource.title && resource.seo?.canonical)
      .map(resource => ({
        slug: resource.slug,
        title: resource.title,
        path: resource.seo.canonical,
      })),
  });
  return _cached;
}

export { createInlineLinkTracker };
export type { InlineLinkTracker };

type DomainExtractInternalLinksOptions = Omit<ExtractInternalLinksOptions, 'validateEntry'> & {
  sourcePath?: string;
};

export function extractInternalLinks(
  text: string,
  options: string[] | DomainExtractInternalLinksOptions = {}
) {
  const normalizedOptions = Array.isArray(options) ? { excludePaths: options } : options;
  const sourcePath = normalizedOptions.sourcePath ?? normalizedOptions.excludePaths?.[0];

  return _extract(text, getLinkMap(), {
    ...normalizedOptions,
    bestEffort: true,
    validateEntry: entry => {
      if (!sourcePath) {
        return {
          valid: false,
          reason: 'missing-source-path',
        };
      }

      return validateInlineLinkTarget(sourcePath, entry.path);
    },
  });
}
