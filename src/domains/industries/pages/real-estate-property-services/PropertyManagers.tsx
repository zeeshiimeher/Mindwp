import type { IndustryDetailPageData } from '@/domains/industries/types';

export const propertyManagersIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Property Managers — Tenant, Owner, and Maintenance Systems',
    description:
      'How property managers hold tenant requests, owner reporting, and maintenance dispatch on one operating layer.',
    canonical: '/industries/real-estate-property-services/property-managers',
    openGraph: {
      title: 'Property Managers — Tenant, Owner, and Maintenance Systems',
      description: 'Tenants, owners, and maintenance on one operating layer.',
    },
  },
  slug: 'property-managers',
  type: 'detail',
  parentSlug: 'real-estate-property-services',
  hero: {
    badge: 'Property · Manager Firms',
    title: 'A leak at unit 14. [[muted:And no one routed the trade yet.]]',
    description:
      'Property managers hold three audiences: tenants, owners, and trades. The leakage lives between request and resolution.',
    list: [
      'Tenant requests acknowledged with status and ETA',
      'Maintenance dispatched and tracked to completion',
      'Owners receive structured updates without manual prep',
    ],
  },
  industries: ['property-management'],
  systems: ['ai-lead-handling', 'crm-automation', 'reputation-review', 'smart-website-systems'],
  topics: ['lead-management', 'follow-up'],
  faq: {
    header: {
      kicker: 'Honest questions',
      title: 'What property managers usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'tools',
        question: 'We use property-management software. Do we drop it?',
        answer: 'No. The operating layer sits beside it.',
      },
      {
        id: 'trade',
        question: 'Can it work with our existing trade list?',
        answer: 'Yes. The board respects your dispatch rules.',
      },
      {
        id: 'owner',
        question: 'Are owner updates automated?',
        answer: 'They are structured digests — generated automatically, sent on schedule.',
      },
      {
        id: 'price',
        question: 'How is this priced?',
        answer: 'Per build. We tell you when a smaller build (or none yet) is the right move.',
      },
    ],
  },
  cta: {
    heading: {
      kicker: 'Next step',
      title: 'Show us where the portfolio actually leaks',
      description:
        'Tell us about a typical week. We will read it back and name the first system to fix.',
    },
    expectations: [
      {
        num: '1',
        text: 'A short read of where tenant requests, dispatch, and owner updates sit today',
      },
      { num: '2', text: 'The system most likely to hold the worst gap first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to a working property manager.',
    },
  },
};
