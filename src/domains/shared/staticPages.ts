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

export const STATIC_ROUTE_CONTENT: StaticRouteDefinition[] = [
  {
    key: 'static:home',
    path: '/',
    name: 'Homepage',
    title: 'Stop Losing Enquiries. Catch Calls, Follow Up, Win More Work.',
    description:
      'For service businesses and specialist clinics where calls get missed, enquiries sit unread, and good leads quietly disappear. The website, handling, follow-up, and visibility are structured so the work already coming in actually turns into work.',
  },
  {
    key: 'static:about',
    path: '/about',
    name: 'About Us',
    title: 'About The System',
    description:
      'This system fixes the gap between an enquiry and the next step for service businesses and specialist clinics — websites, follow-up, visibility, and proof, joined up so good leads stop slipping through.',
  },
  {
    key: 'static:blog',
    path: '/blog',
    name: 'Blog',
    title: 'Blog',
    description:
      'Practical articles on website clarity, local visibility, lead response, follow-up, and proof for service businesses.',
  },
  {
    key: 'static:case-studies',
    path: '/case-studies',
    name: 'Case Studies',
    title: 'Case Studies',
    description:
      'Case studies, scenarios, and website-system examples showing how service businesses and specialist clinics improve visibility, handling, and proof.',
  },
  {
    key: 'static:contact',
    path: '/contact',
    name: 'Request a System Review',
    title: 'Contact',
    description:
      'Request a practical system review for website clarity, local visibility, missed calls or messages, follow-up visibility, and reviews or proof.',
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
      'Explore supporting modules for response, booking, follow-up, inbox handling, and reviews.',
  },
  {
    key: 'static:industries',
    path: '/industries',
    name: 'Industries Overview',
    title: 'Industries',
    description:
      'Industry pages for Home Services and Healthcare Practices, focused on the calls, follow-ups, consultation requests, bookings, reviews, and proof that shape real enquiries.',
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
      'Guides and frameworks for website clarity, local visibility, enquiry response, follow-up, reviews, and implementation paths.',
  },
  {
    key: 'static:services',
    path: '/services',
    name: 'Services Overview',
    title: 'Services',
    description:
      'Conversion-focused website systems with connected handling for service businesses and specialist clinics, plus implementation pathways under Smart Website Systems.',
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
    key: 'static:sitemap-xml',
    path: '/sitemap.xml',
    name: 'Sitemap XML',
    title: 'Sitemap XML',
    description: 'Machine-readable sitemap for the canonical route inventory.',
    includeInRouteInventory: false,
  },
];
