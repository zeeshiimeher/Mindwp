export type StaticPage = {
  name: string;
  url: string;
  /** Whether this page should appear in the human-friendly /sitemap page. */
  showOnHumanSitemap?: boolean;
};

export type StaticRouteDefinition = {
  key: string;
  path: string;
  name: string;
  title: string;
  description: string;
  includeInRouteInventory?: boolean;
  indexable?: boolean;
  follow?: boolean;
  showOnHumanSitemap?: boolean;
};

/**
 * Canonical static route inventory.
 *
 * Used by:
 * - Route inventory + sitemap generation
 * - Human sitemap consumers
 */
export const STATIC_ROUTE_DEFINITIONS: StaticRouteDefinition[] = [
  {
    key: 'static:home',
    path: '/',
    name: 'Homepage',
    title: 'MindWP',
    description:
      'Systems-first digital infrastructure for service businesses that need websites, CRM, automation, and authority to work together.',
  },
  {
    key: 'static:about',
    path: '/about',
    name: 'About Us',
    title: 'About MindWP',
    description:
      'Learn how MindWP designs systems-first digital infrastructure for service businesses.',
  },
  {
    key: 'static:blog',
    path: '/blog',
    name: 'Blog',
    title: 'MindWP Blog',
    description:
      'Technical insights on websites, CRM automation, local authority, and revenue systems for service businesses.',
  },
  {
    key: 'static:case-studies',
    path: '/case-studies',
    name: 'Case Studies',
    title: 'MindWP Case Studies',
    description:
      'Proof-of-results case studies showing how service businesses improve visibility, lead handling, and revenue systems.',
  },
  {
    key: 'static:contact',
    path: '/contact',
    name: 'Contact Us',
    title: 'Contact MindWP',
    description:
      'Start a systems-first conversation about websites, automation, CRM, and authority infrastructure.',
  },
  {
    key: 'static:conversation',
    path: '/conversation',
    name: 'Start a Conversation',
    title: 'Start a Conversation',
    description:
      'Redirect entrypoint into the canonical MindWP contact flow with preserved system and source context.',
    indexable: false,
  },
  {
    key: 'static:cookies',
    path: '/cookies',
    name: 'Cookie Policy',
    title: 'Cookie Policy',
    description: 'Read the MindWP cookie policy and understand how site data is used.',
    showOnHumanSitemap: false,
  },
  {
    key: 'static:faq',
    path: '/faq',
    name: 'FAQ',
    title: 'MindWP FAQ',
    description:
      'Answers to common questions about systems-first websites, CRM automation, and implementation.',
  },
  {
    key: 'static:features',
    path: '/features',
    name: 'Features Overview',
    title: 'MindWP Features',
    description:
      'Explore the structured feature layers that support lead handling, CRM, booking, and reputation systems.',
  },
  {
    key: 'static:industries',
    path: '/industries',
    name: 'Industries Overview',
    title: 'MindWP Industries',
    description:
      'Industry-specific infrastructure for roofing, HVAC, salons, clinics, legal, automotive, and more.',
  },
  {
    key: 'static:privacy',
    path: '/privacy',
    name: 'Privacy Policy',
    title: 'Privacy Policy',
    description: 'Read the MindWP privacy policy and data handling commitments.',
  },
  {
    key: 'static:resources',
    path: '/resources',
    name: 'Resources',
    title: 'MindWP Resources',
    description:
      'Guides and frameworks for websites, CRM automation, revenue visibility, and local authority systems.',
  },
  {
    key: 'static:services',
    path: '/services',
    name: 'Services Overview',
    title: 'MindWP Services',
    description:
      'Structured services for smart websites, automation, CRM, reputation, and growth systems.',
  },
  {
    key: 'static:terms',
    path: '/terms',
    name: 'Terms',
    title: 'Terms of Service',
    description: 'Read the MindWP terms of service and engagement expectations.',
    showOnHumanSitemap: false,
  },
  {
    key: 'static:components',
    path: '/components',
    name: 'Components Reference',
    title: 'Components Reference',
    description: 'Internal component reference for the production design system.',
    indexable: false,
    showOnHumanSitemap: false,
  },
  {
    key: 'static:system-dashboard',
    path: '/dev/system-dashboard',
    name: 'System Dashboard',
    title: 'System Dashboard',
    description:
      'Unified internal control plane for system health, issue diagnostics, topic authority, and inventory visibility.',
    indexable: false,
    showOnHumanSitemap: false,
  },
  {
    key: 'static:system-dashboard-alias',
    path: '/system-dashboard',
    name: 'System Dashboard Alias',
    title: 'System Dashboard Alias',
    description:
      'Alias route for the unified internal control plane for system health, issue diagnostics, topic authority, and inventory visibility.',
    indexable: false,
    showOnHumanSitemap: false,
  },
  {
    key: 'static:client-dashboard',
    path: '/dashboard',
    name: 'Performance Dashboard',
    title: 'Performance Dashboard',
    description:
      'Client-facing performance dashboard showing system health, prioritized improvements, and page-level progress in business language.',
    indexable: false,
    showOnHumanSitemap: false,
  },
  {
    key: 'static:authority-dashboard',
    path: '/dev/authority-dashboard',
    name: 'Authority Dashboard Redirect',
    title: 'Authority Dashboard Redirect',
    description:
      'Legacy internal authority dashboard route that redirects to the system dashboard control plane.',
    indexable: false,
    showOnHumanSitemap: false,
  },
  {
    key: 'static:cta-label-contract',
    path: '/dev/cta-label-contract',
    name: 'CTA Label Contract',
    title: 'CTA Label Contract',
    description: 'Internal SmartCTA contract surface for deterministic label and href validation.',
    indexable: false,
    showOnHumanSitemap: false,
  },
  {
    key: 'static:image-dashboard',
    path: '/image-dashboard',
    name: 'Image Dashboard',
    title: 'Image Dashboard',
    description:
      'Internal image-system dashboard for generation scores, operational issues, and image learning memory.',
    indexable: false,
    showOnHumanSitemap: false,
  },
  {
    key: 'static:sitemap-xml',
    path: '/sitemap.xml',
    name: 'Sitemap XML',
    title: 'Sitemap XML',
    description: 'Machine-readable sitemap for the canonical MindWP route inventory.',
    includeInRouteInventory: false,
  },
];

export const STATIC_PAGES: StaticPage[] = STATIC_ROUTE_DEFINITIONS.map(route => ({
  name: route.name,
  url: route.path,
  ...(route.showOnHumanSitemap !== undefined
    ? { showOnHumanSitemap: route.showOnHumanSitemap }
    : {}),
}));
