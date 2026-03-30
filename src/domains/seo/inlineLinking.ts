import { FEATURE_REGISTRY } from '@/domains/features/registry';
import { INDUSTRY_REGISTRY } from '@/domains/industries/registry';
import { SERVICE_REGISTRY } from '@/domains/services/registry';
import {
  buildLinkMap,
  extractInternalLinks as _extract,
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
  });
  return _cached;
}

export function extractInternalLinks(text: string, excludePaths?: string[]) {
  return _extract(text, getLinkMap(), excludePaths);
}
