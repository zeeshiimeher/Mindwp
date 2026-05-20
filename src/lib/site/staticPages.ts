import {
  STATIC_ROUTE_CONTENT,
  type StaticPage,
  type StaticRouteDefinition,
} from '@/domains/shared/staticPages';

export const STATIC_ROUTE_DEFINITIONS: StaticRouteDefinition[] = STATIC_ROUTE_CONTENT;

export const STATIC_PAGES: StaticPage[] = STATIC_ROUTE_DEFINITIONS.map(route => ({
  name: route.name,
  url: route.path,
  ...(route.showOnHumanSitemap !== undefined
    ? { showOnHumanSitemap: route.showOnHumanSitemap }
    : {}),
}));
