/**
 * Canonical route paths. Single source of truth for hrefs so links,
 * sitemap, and metadata canonicals never drift.
 *
 * Slugs use production-canonical names only (no banned legacy slugs).
 */

export const ROUTES = {
  home: '/',
  contact: '/contact',
  services: {
    smartWebsiteSystems: '/services/smart-website-systems',
    localSeoAuthority: '/services/local-seo-authority',
    leadResponseHandling: '/services/lead-response-handling',
    followUpCrm: '/services/follow-up-crm',
    reputationReviewSystems: '/services/reputation-review-systems',
  },
  implementation: {
    wordpressDevelopment: '/services/implementation/wordpress-development',
    elementor: '/services/implementation/elementor',
    bricksBuilder: '/services/implementation/bricks-builder',
    divi5: '/services/implementation/divi5',
    websiteRedesignSystemRebuild:
      '/services/implementation/website-redesign-system-rebuild',
    woocommerce: '/services/implementation/woocommerce',
  },
} as const;

/**
 * Routes that are actually built and live in this base pass. Sitemap and
 * smoke checks read from here so we never list a route that 404s.
 */
export const LIVE_ROUTES: string[] = [
  ROUTES.home,
  ROUTES.services.smartWebsiteSystems,
  ROUTES.contact,
];
