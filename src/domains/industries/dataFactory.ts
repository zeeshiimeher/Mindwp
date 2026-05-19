import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

import type { IndustryCategory } from './catalog';
import type { IndustryCategoryPageData, IndustryDetailPageData } from './types';

type IndustrySystem = IndustryCategoryPageData['primarySystem'];

type CategoryInput = {
  slug: IndustryCategory;
  title: string;
  label: string;
  description: string;
  industries: string[];
  topics: string[];
  primarySystem?: IndustrySystem;
  supportingSystems?: IndustryCategoryPageData['supportingSystems'];
};

type DetailInput = {
  slug: string;
  parentSlug: IndustryCategory;
  title: string;
  label: string;
  description: string;
  industries: string[];
  topics: string[];
  primarySystem?: IndustrySystem;
  supportingSystems?: IndustryDetailPageData['supportingSystems'];
};

const defaultSupportingSystems: IndustryCategoryPageData['supportingSystems'] = [
  'smart-website-systems',
  'local-seo-authority',
  'lead-response-handling',
  'follow-up-crm',
  'reputation-review-systems',
];

export function createIndustryCategoryData(input: CategoryInput): IndustryCategoryPageData {
  const primarySystem = input.primarySystem ?? 'smart-website-systems';

  return {
    seo: {
      title: input.title,
      description: input.description,
      canonical: `/industries/${input.slug}`,
      openGraph: {
        title: input.title,
        description: input.description,
      },
    },
    slug: input.slug,
    type: 'category',
    category: input.slug,
    hero: {
      eyebrow: `Industries · ${input.label}`,
      title: `${input.label} Pages Are on a Clean Rebuild Base.`,
    },
    industries: input.industries,
    primarySystem,
    supportingSystems: input.supportingSystems ?? defaultSupportingSystems,
    topics: input.topics,
    decisionPanel: {
      heading: {
        eyebrow: 'Next step',
        title: `Review the ${input.label.toLowerCase()} website and handling path.`,
        description:
          'This reset page is ready for a future rebuild around the approved industry lane, buyer reality, and connected handling path.',
      },
      actions: [
        {
          label: PRIMARY_CTA_LABEL,
          href: buildIndustryContactHref({ system: primarySystem, slug: input.slug }),
          variant: 'primary',
        },
      ],
      expectations: [
        { num: '1', text: 'The current website, trust, and enquiry path' },
        { num: '2', text: 'Where response, follow-up, reviews, or proof are weak' },
        { num: '3', text: 'The first system that should be reviewed' },
      ],
      footer: {
        noSell: 'Reset inventory page. Not final copy.',
        tone: 'Clean rebuild base',
      },
    },
  };
}

export function createIndustryDetailData(input: DetailInput): IndustryDetailPageData {
  const primarySystem = input.primarySystem ?? 'smart-website-systems';

  return {
    seo: {
      title: input.title,
      description: input.description,
      canonical: `/industries/${input.parentSlug}/${input.slug}`,
      openGraph: {
        title: input.title,
        description: input.description,
      },
    },
    slug: input.slug,
    type: 'detail',
    parentSlug: input.parentSlug,
    hero: {
      eyebrow: input.label,
      title: `${input.label} Page Is on a Clean Rebuild Base.`,
    },
    industries: input.industries,
    primarySystem,
    supportingSystems: input.supportingSystems ?? defaultSupportingSystems,
    topics: input.topics,
    decisionPanel: {
      heading: {
        eyebrow: 'Next step',
        title: `Review the ${input.label.toLowerCase()} website and handling path.`,
        description:
          'This reset page is ready for a future rebuild around the approved industry, enquiry or booking path, trust signals, follow-up, reviews, and proof.',
      },
      actions: [
        {
          label: PRIMARY_CTA_LABEL,
          href: buildIndustryContactHref({ system: primarySystem, slug: input.slug }),
          variant: 'primary',
        },
      ],
      expectations: [
        { num: '1', text: 'The current service, treatment, or procedure clarity' },
        {
          num: '2',
          text: 'Where enquiries, bookings, consultation requests, or quote follow-up slip',
        },
        { num: '3', text: 'The first system that should be reviewed' },
      ],
      footer: {
        noSell: 'Reset inventory page. Not final copy.',
        tone: 'Clean rebuild base',
      },
    },
  };
}
