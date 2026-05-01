import {
  INTERNAL_STATIC_ROUTE_PATHS,
  STATIC_ROUTE_CONTENT,
  type StaticPage,
  type StaticRouteDefinition,
} from '@/domains/shared/staticPages';
import { getIsSystemEnabled } from '@/system/isSystemEnabled';

export const STATIC_ROUTE_DEFINITIONS: StaticRouteDefinition[] = STATIC_ROUTE_CONTENT.filter(
  route => getIsSystemEnabled() || !INTERNAL_STATIC_ROUTE_PATHS.has(route.path)
);

export const STATIC_PAGES: StaticPage[] = STATIC_ROUTE_DEFINITIONS.map(route => ({
  name: route.name,
  url: route.path,
  ...(route.showOnHumanSitemap !== undefined
    ? { showOnHumanSitemap: route.showOnHumanSitemap }
    : {}),
}));
