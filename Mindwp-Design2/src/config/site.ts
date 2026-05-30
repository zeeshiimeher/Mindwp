/**
 * Site-wide constants. Single source for origin, brand name, and the
 * primary diagnostic CTA used across header, footer, and screens.
 */

const RAW_ORIGIN = process.env.NEXT_PUBLIC_SITE_URL || 'https://mindwp.com';

export const SITE = {
  name: 'MindWP',
  /** Absolute origin with no trailing slash. */
  origin: RAW_ORIGIN.replace(/\/+$/, ''),
  description:
    'Conversion-focused website systems with connected handling for established service businesses and specialist clinics.',
  /** Primary diagnostic CTA. */
  cta: {
    label: 'Request a Website Review',
    href: '/contact',
  },
} as const;

export type Site = typeof SITE;
