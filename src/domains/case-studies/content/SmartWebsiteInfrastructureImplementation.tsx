import type { CaseStudyContent, CaseStudyTemplateSection } from '@/domains/case-studies/templates';

import type { CaseStudyData } from '../types';

function buildSmartWebsiteInfrastructureImplementation(): CaseStudyData {
  const heroIntroHtml = (
    <>
      Harwood Plumbing & Heating is a 6-person plumbing and heating company in Leeds. The business
      had operated for 11 years with a basic brochure website built on a free website builder. The
      site listed services and a phone number, but had no contact forms, no booking capability, no
      CRM connection, and no tracking of any kind. Despite investing £800/month in Google Ads, the
      owner had no idea how many leads the website generated because there was no way to measure
      conversions. The website loaded slowly on mobile, had no SSL certificate, and wasn&apos;t
      indexed for several key service pages. It was a digital presence in name only.
    </>
  );

  const keyMetrics: CaseStudyContent['keyMetrics'] = [
    {
      label: 'Monthly Leads',
      value: '4 → 31',
      icon: 'UserPlus',
      color: 'case-study-accent--success',
    },
    {
      label: 'Form Conversion',
      value: '0.6% → 5.8%',
      icon: 'TrendingUp',
      color: 'case-study-accent--primary',
    },
    {
      label: 'Mobile Speed',
      value: '8.2s → 2.1s',
      icon: 'Zap',
      color: 'case-study-accent--amber',
    },
    {
      label: 'Cost Per Lead',
      value: '£200 → £38',
      icon: 'PoundSterling',
      color: 'case-study-accent--purple',
    },
  ];

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading:
      'The Problem: A Website That Existed But Didn\u2019t Function as Infrastructure',
    problemDescription: [
      'Harwood\u2019s website had been built 7 years ago on a free website builder and had not been meaningfully updated since. It loaded in 8.2 seconds on mobile, had no SSL certificate (showing "Not Secure" in browsers), and several service pages had been deindexed by Google due to thin content. The site averaged 380 monthly visitors but generated fewer than 4 identifiable leads per month.',
      'The owner was spending £800/month on Google Ads driving traffic to the site, but with no conversion tracking, no contact forms on service pages, and no CRM connection, there was no way to measure ROI. The effective cost per lead was over £200 — and even that figure was estimated from phone calls that might or might not have come from the website. The site was not connected to any business system: no booking calendar, no CRM, no chat, no lead notification.',
    ],
    painPoints: [
      'Website generated fewer than 4 identifiable leads per month',
      '8.2-second mobile load time — well below Google performance thresholds',
      'No SSL certificate — browser displayed "Not Secure" warning',
      'No contact forms on service pages — only a phone number',
      '£800/month Google Ads spend with no conversion tracking',
      'Effective cost per lead over £200',
      'No CRM, no booking, no chat, no lead notification — zero system integration',
      'Several service pages deindexed by Google',
    ],
  };

  const solutionSection: CaseStudyTemplateSection = {
    type: 'solution',
    solutionHeading:
      'The System: WordPress Infrastructure Rebuild With CRM, Tracking, and Conversion Architecture',
    solutionDescription:
      'The solution replaced the brochure website with a systems-first WordPress site designed as operational infrastructure — connecting the website to a CRM, adding conversion paths to every service page, enabling booking, and implementing full tracking.',
    whatWeDid: [
      {
        title: 'WordPress Rebuild',
        description:
          'Built a new WordPress site with proper hosting, SSL, performance optimisation, and structured service pages targeting local search terms.',
        icon: 'Globe',
      },
      {
        title: 'Conversion Architecture',
        description:
          'Added contact forms, click-to-call tracking, and booking widgets to every service page — creating multiple conversion paths matched to visitor intent.',
        icon: 'Target',
      },
      {
        title: 'CRM Connection',
        description:
          'Connected every form submission, booking, and tracked call to GoHighLevel CRM for instant lead capture, notification, and pipeline tracking.',
        icon: 'Database',
      },
      {
        title: 'Performance & SEO Foundation',
        description:
          'Optimised mobile load speed from 8.2s to under 2.5s, implemented schema markup, and rebuilt service pages with targeted local content that Google indexed within 2 weeks.',
        icon: 'Zap',
      },
      {
        title: 'Conversion Tracking',
        description:
          'Implemented Google Ads conversion tracking, Google Analytics 4, and CRM attribution so every lead could be traced to its source and the true cost per lead was visible.',
        icon: 'BarChart3',
      },
    ],
  };

  const resultsSection: CaseStudyTemplateSection = {
    type: 'results',
    results: [
      {
        metric: 'Monthly Lead Volume',
        before: 'Fewer than 4 identifiable leads per month',
        after: '31 tracked leads per month within 10 weeks',
        improvement: '675% increase',
        description:
          'With contact forms on every page, click-to-call tracking, and booking widgets, the site converted visitors who previously had no clear path to enquire.',
      },
      {
        metric: 'Form Conversion Rate',
        before: '0.6% — only a phone number available, most visitors left without acting',
        after: '5.8% — multiple conversion paths matched to visitor intent',
        improvement: '+5.2 percentage points',
        description:
          'Service page forms with contextual CTAs captured visitors at the moment of interest rather than asking them to navigate to a separate contact page.',
      },
      {
        metric: 'Mobile Load Speed',
        before: '8.2 seconds — well below acceptable performance thresholds',
        after: '2.1 seconds — exceeding Core Web Vitals targets',
        improvement: '74% faster',
        description:
          'Proper hosting, image optimisation, and clean code brought mobile performance from unusable to excellent, reducing bounce rate from 71% to 34%.',
      },
      {
        metric: 'Cost Per Lead',
        before: '£200+ per lead (estimated — no actual tracking)',
        after: '£38 per lead (tracked with conversion attribution)',
        improvement: '81% reduction',
        description:
          'The same £800/month Google Ads spend now generated 21 tracked ad leads instead of an estimated 4 — and the true cost per lead was visible for the first time.',
      },
    ],
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'Is Your Website Just a Brochure?',
    body: 'Book a free 20-minute call and we\u2019ll show you how a systems-first website rebuild could turn your site into lead-generating infrastructure.',
  };

  const sections: CaseStudyTemplateSection[] = [
    { type: 'hero', introHtml: heroIntroHtml },
    { type: 'metrics', keyMetrics },
    problemSection,
    solutionSection,
    resultsSection,
    { type: 'more' },
    ctaSection,
  ];

  return {
    slug: 'smart-website-infrastructure-implementation',
    title: 'Smart Website Infrastructure Implementation',
    metaTitle: 'Systems-First Website Rebuild | 4 to 31 Monthly Leads',
    metaDescription:
      'How a Leeds plumbing company went from 4 leads per month to 31 by rebuilding their website as systems-first infrastructure with CRM, tracking, and booking.',
    industryCategory: 'home-services',
    industryLabel: 'Home Services',
    industries: ['hvac'],
    systems: ['smart-website-systems', 'revenue-growth'],
    topics: [
      'website-infrastructure',
      'systems-first-websites',
      'conversion-optimization',
      'conversion-tracking',
    ],
    publishDate: '2026-06-15',
    client: 'Harwood Plumbing & Heating',
    location: 'Leeds, UK',
    business: 'Harwood Plumbing & Heating',
    duration: '15 weeks',
    completedDate: 'June 2026',
    heroHeadline:
      'How a Plumbing Company Went From 4 Leads Per Month to 31 by Rebuilding Their Website as Infrastructure',
    keyMetrics: keyMetrics.map(metric => ({
      value: metric.value,
      label: metric.label,
      ...(metric.color ? { color: metric.color } : {}),
    })),
    tags: [
      'Website Infrastructure',
      'Systems-First',
      'WordPress Rebuild',
      'CRM Integration',
      'Conversion Tracking',
    ],
    seo: {
      canonical: '/case-studies/smart-website-infrastructure-implementation',
      openGraph: {
        title: 'Why Service Business Websites Fail | MindWP Case Study',
        description:
          'How a plumbing company went from 4 to 31 leads per month with a systems-first website rebuild.',
      },
    },
    sections,
    templateOverrides: {
      hero: { scenarioBadgeLabel: 'System Implementation' },
      metrics: { resultsSectionTitle: 'Key Outcomes' },
      problem: { challengeBadgeLabel: 'The Website Problem' },
      solution: { solutionBadgeLabel: 'System Architecture' },
      results: {
        detailedResultsBadgeLabel: 'Measured Results',
        detailedResultsSectionTitle: 'Before & After: Website Performance',
      },
      cta: {
        metaItems: [
          { text: 'Free 20-minute call' },
          { text: 'No contracts' },
          { text: 'Works for any service business' },
        ],
      },
    },
  };
}

export const smartWebsiteInfrastructureImplementation: CaseStudyData =
  buildSmartWebsiteInfrastructureImplementation();
