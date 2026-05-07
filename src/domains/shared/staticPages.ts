export type StaticPage = {
  name: string;
  url: string;
  showOnHumanSitemap?: boolean;
};

export type StaticRouteDefinition = {
  key: string;
  path: string;
  name: string;
  title: string;
  description: string;
  includeInRouteInventory?: boolean;
  showOnHumanSitemap?: boolean;
};

export const INTERNAL_STATIC_ROUTE_PATHS = new Set([
  '/components',
  '/dev/system-dashboard',
  '/system-dashboard',
  '/dev/system-dashboard/reports/system-report',
  '/dev/system-dashboard/reports/pipeline-report',
  '/dev/system-dashboard/reports/validation-report',
  '/dashboard',
  '/dev/authority-dashboard',
  '/dev/cta-label-contract',
  '/image-dashboard',
]);

export const STATIC_ROUTE_CONTENT: StaticRouteDefinition[] = [
  {
    key: 'static:home',
    path: '/',
    name: 'Homepage',
    title: 'Stop Losing Enquiries. Catch Calls, Follow Up, Win More Work.',
    description:
      'For service businesses where calls get missed, enquiries sit unread, and good leads quietly disappear. The routing, follow-up, and visibility are structured so the work already coming in actually turns into work.',
  },
  {
    key: 'static:about',
    path: '/about',
    name: 'About Us',
    title: 'About The System',
    description:
      'This system fixes the gap between an enquiry and a paying customer for service businesses — websites, follow-up, visibility, and proof, joined up so good leads stop slipping through.',
  },
  {
    key: 'static:blog',
    path: '/blog',
    name: 'Blog',
    title: 'Blog',
    description:
      'Technical insights on websites, CRM automation, local authority, and revenue systems for service businesses.',
  },
  {
    key: 'static:case-studies',
    path: '/case-studies',
    name: 'Case Studies',
    title: 'Case Studies',
    description:
      'Proof-of-results case studies showing how service businesses improve visibility, lead handling, and revenue systems.',
  },
  {
    key: 'static:contact',
    path: '/contact',
    name: 'Start a Conversation',
    title: 'Contact',
    description:
      'Tell us where things are slipping — missed calls, slow follow-up, leads going cold. We read every message and reply with the right next step within one working day.',
  },
  {
    key: 'static:cookies',
    path: '/cookies',
    name: 'Cookie Policy',
    title: 'Cookie Policy',
    description: 'Read the cookie policy and understand how site data is used.',
    showOnHumanSitemap: false,
  },
  {
    key: 'static:features',
    path: '/features',
    name: 'Features Overview',
    title: 'Features',
    description:
      'Explore the structured feature layers that support lead handling, CRM, booking, and reputation systems.',
  },
  {
    key: 'static:industries',
    path: '/industries',
    name: 'Industries Overview',
    title: 'Industries',
    description:
      'Industry pages for service businesses — roofing, HVAC, salons, clinics, legal, automotive — focused on the calls, follow-ups, and bookings that actually decide revenue.',
  },
  {
    key: 'static:privacy',
    path: '/privacy',
    name: 'Privacy Policy',
    title: 'Privacy Policy',
    description:
      'Read the privacy policy to understand what data is collected, how it is handled, and the commitments in place to protect it.',
  },
  {
    key: 'static:resources',
    path: '/resources',
    name: 'Resources',
    title: 'Resources',
    description:
      'Guides and frameworks for websites, CRM automation, revenue visibility, and local authority systems.',
  },
  {
    key: 'static:services',
    path: '/services',
    name: 'Services Overview',
    title: 'Services',
    description:
      'Structured services for smart websites, automation, CRM, reputation, and growth systems.',
  },
  {
    key: 'static:terms',
    path: '/terms',
    name: 'Terms',
    title: 'Terms of Service',
    description:
      'Read the terms of service covering engagement expectations, delivery boundaries, and the responsibilities attached to using this site.',
    showOnHumanSitemap: false,
  },
  {
    key: 'static:components',
    path: '/components',
    name: 'Components Reference',
    title: 'Components Reference',
    description: 'Internal component reference for the production design system.',
    showOnHumanSitemap: false,
  },
  {
    key: 'static:system-dashboard',
    path: '/dev/system-dashboard',
    name: 'System Dashboard',
    title: 'System Dashboard',
    description:
      'Unified internal control plane for system health, issue diagnostics, topic authority, and inventory visibility.',
    showOnHumanSitemap: false,
  },
  {
    key: 'static:system-dashboard-alias',
    path: '/system-dashboard',
    name: 'System Dashboard Alias',
    title: 'System Dashboard Alias',
    description:
      'Legacy alias route that redirects to the unified internal control plane at /dev/system-dashboard.',
    showOnHumanSitemap: false,
  },
  {
    key: 'static:system-dashboard-system-report',
    path: '/dev/system-dashboard/reports/system-report',
    name: 'System Dashboard System Report',
    title: 'System Report Viewer',
    description: 'Internal raw report viewer for the system-report artifact.',
    showOnHumanSitemap: false,
  },
  {
    key: 'static:system-dashboard-pipeline-report',
    path: '/dev/system-dashboard/reports/pipeline-report',
    name: 'System Dashboard Pipeline Report',
    title: 'Pipeline Report Viewer',
    description: 'Internal raw report viewer for the pipeline-report artifact.',
    showOnHumanSitemap: false,
  },
  {
    key: 'static:system-dashboard-validation-report',
    path: '/dev/system-dashboard/reports/validation-report',
    name: 'System Dashboard Validation Report',
    title: 'Validation Report Viewer',
    description: 'Internal raw report viewer for the validation-report artifact.',
    showOnHumanSitemap: false,
  },
  {
    key: 'static:client-dashboard',
    path: '/dashboard',
    name: 'Performance Dashboard',
    title: 'Performance Dashboard',
    description:
      'Client-facing performance dashboard showing system health, prioritized improvements, and page-level progress in business language.',
    showOnHumanSitemap: false,
  },
  {
    key: 'static:authority-dashboard',
    path: '/dev/authority-dashboard',
    name: 'Authority Dashboard Redirect',
    title: 'Authority Dashboard Redirect',
    description:
      'Legacy internal authority dashboard route that redirects to the system dashboard control plane.',
    showOnHumanSitemap: false,
  },
  {
    key: 'static:cta-label-contract',
    path: '/dev/cta-label-contract',
    name: 'CTA Label Contract',
    title: 'CTA Label Contract',
    description:
      'Internal PrimaryCTASection contract surface for deterministic label and href validation.',
    showOnHumanSitemap: false,
  },
  {
    key: 'static:image-dashboard',
    path: '/image-dashboard',
    name: 'Image Dashboard',
    title: 'Image Dashboard',
    description:
      'Internal image-system dashboard for generation scores, operational issues, and image learning memory.',
    showOnHumanSitemap: false,
  },
  {
    key: 'static:sitemap-xml',
    path: '/sitemap.xml',
    name: 'Sitemap XML',
    title: 'Sitemap XML',
    description: 'Machine-readable sitemap for the canonical route inventory.',
    includeInRouteInventory: false,
  },
];
