import { ROUTES } from '@/config/routes';

/**
 * Navigation source of truth. Feeds the header dropdowns, mobile menu,
 * and footer columns. Industries / Resources groups are intentionally
 * deferred until those pages exist.
 */

export type NavItem = {
  label: string;
  href: string;
  note?: string;
};

export type NavGroup = {
  label: string;
  items: NavItem[];
};

export const SERVICES_NAV: NavItem[] = [
  {
    label: 'Smart Website Systems',
    href: ROUTES.services.smartWebsiteSystems,
    note: 'Enquiry capture & conversion structure',
  },
  {
    label: 'Local SEO Authority',
    href: ROUTES.services.localSeoAuthority,
    note: 'Local visibility & authority signals',
  },
  {
    label: 'Lead Response & Handling',
    href: ROUTES.services.leadResponseHandling,
    note: 'First response & missed-call recovery',
  },
  {
    label: 'Follow-Up & CRM',
    href: ROUTES.services.followUpCrm,
    note: 'Owned next step, scheduled follow-up',
  },
  {
    label: 'Reputation & Review Systems',
    href: ROUTES.services.reputationReviewSystems,
    note: 'Review generation & monitoring',
  },
];

export const BUILD_PATHS_NAV: NavItem[] = [
  {
    label: 'WordPress Development',
    href: ROUTES.implementation.wordpressDevelopment,
    note: 'The base. The website system on top.',
  },
  {
    label: 'Elementor',
    href: ROUTES.implementation.elementor,
    note: 'Built with structure, not just style.',
  },
  {
    label: 'Bricks Builder',
    href: ROUTES.implementation.bricksBuilder,
    note: 'Performance-aware page craft.',
  },
  {
    label: 'Divi 5',
    href: ROUTES.implementation.divi5,
    note: 'Modernise without leaving Divi.',
  },
  {
    label: 'Website Rebuild',
    href: ROUTES.implementation.websiteRedesignSystemRebuild,
    note: 'Fixes more than how it looks.',
  },
  {
    label: 'WooCommerce',
    href: ROUTES.implementation.woocommerce,
    note: 'Built for the buying decision.',
  },
];

/** Header dropdown groups. */
export const HEADER_GROUPS: NavGroup[] = [
  { label: 'Services', items: SERVICES_NAV },
  { label: 'Build paths', items: BUILD_PATHS_NAV },
];

/** Footer columns. */
export const FOOTER_COLUMNS: NavGroup[] = [
  { label: 'Services', items: SERVICES_NAV },
  { label: 'Build paths', items: BUILD_PATHS_NAV },
  {
    label: 'Company',
    items: [{ label: 'Request a Website Review', href: ROUTES.contact }],
  },
];
