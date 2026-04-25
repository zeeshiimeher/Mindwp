import type { CaseStudyContent, CaseStudyTemplateSection } from '@/domains/case-studies/templates';

import type { CaseStudyData } from '../types';

function buildSmartWebsiteInfrastructureImplementation(): CaseStudyData {
  const heroIntroHtml = (
    <>
      The website was live. The phone still stayed quiet. Harwood Plumbing & Heating in Leeds had a
      site that looked finished from a distance, but once somebody tried to use it properly, the
      weak spots showed up fast: slow pages, vague service paths, and not much of a clean next step
      when a visitor was ready to enquire.
    </>
  );

  const keyMetrics: CaseStudyContent['keyMetrics'] = [
    {
      label: 'Tracked leads',
      value: 'A lot more of them',
      icon: 'UserPlus',
      color: 'case-study-accent--success',
    },
    {
      label: 'Pages doing useful work',
      value: 'Far better',
      icon: 'TrendingUp',
      color: 'case-study-accent--primary',
    },
    {
      label: 'Mobile speed',
      value: 'Much quicker',
      icon: 'Zap',
      color: 'case-study-accent--amber',
    },
    {
      label: 'Ad spend going further',
      value: 'Clearly further',
      icon: 'PoundSterling',
      color: 'case-study-accent--purple',
    },
  ];

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading: 'It looked like a website until someone actually needed it to pull its weight',
    problemDescription: [
      'The old site gave people very few clean ways to act. Some pages loaded slowly, some service paths were thin, and much of the paid traffic landed on a website that did not make the next step obvious.',
      'That meant the owner was spending money to send visitors somewhere that was hard to trust, hard to measure, and easy to abandon on mobile. The awkward part was that the business already had demand. The site just was not helping much once that demand arrived.',
    ],
    painPoints: [
      'Paid traffic was landing on pages that did not do enough to convert interest',
      'Mobile visitors were getting a slower and shakier experience than they should have',
      'Too much of the enquiry path depended on somebody deciding to call anyway',
      'The owner had weak visibility into what the site was really producing',
      'Some page-flow issues only became obvious after real traffic started hitting the rebuilt site',
    ],
  };

  const resultsSection: CaseStudyTemplateSection = {
    type: 'results',
    results: [
      {
        title: 'The same traffic started producing more real enquiries',
        improvement: 'Far more visitors turned into tracked leads',
        description:
          'Once the pages were clearer, quicker, and easier to act on, the site stopped behaving like an online brochure and started helping the business catch intent while it was there.',
      },
      {
        title: 'Mobile users had fewer reasons to give up halfway through',
        improvement: 'Better speed and a cleaner path to enquire',
        description:
          'This mattered because a large share of the traffic was already mobile. The rebuilt site did not just look cleaner. It removed some of the small frictions that had been costing enquiries quietly.',
      },
      {
        title: 'The owner could finally see what the site was actually doing',
        improvement: 'A clearer view of where leads were coming from',
        description:
          'That did not solve everything on day one. A few page details still needed tightening once real usage data came in. But the business had moved from guesswork to a website that was plainly doing more of the job.',
      },
    ],
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'Does your website look fine but pull very little weight?',
    body: 'Book a free 20-minute call and we can look at where your site is leaking intent once people land on it and what would make it easier for them to act.',
  };

  const sections: CaseStudyTemplateSection[] = [
    { type: 'hero', introHtml: heroIntroHtml },
    problemSection,
    resultsSection,
    { type: 'more' },
    ctaSection,
  ];

  return {
    seo: {
      title: 'Plumbing website case study: more leads from the same traffic',
      description:
        'How a Leeds plumbing company turned a site that looked finished but underperformed into one that produced far more usable enquiries from the same traffic.',
      canonical: '/case-studies/plumbing-website-looked-fine-but-underperformed',
      openGraph: {
        title: 'Plumbing website case study: more leads from the same traffic',
        description:
          'How a Leeds plumbing company turned a site that looked finished but underperformed into one that produced far more usable enquiries from the same traffic.',
      },
    },
    slug: 'plumbing-website-looked-fine-but-underperformed',
    title: 'The website was live. The phone still stayed quiet.',
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
    heroHeadline: 'The website was live. The phone still stayed quiet.',
    keyMetrics: keyMetrics.map(metric => ({
      value: metric.value,
      label: metric.label,
      ...(metric.color ? { color: metric.color } : {}),
    })),
    tags: ['Website Rebuild', 'Plumbing', 'Lead Capture', 'Tracking', 'Home Services'],
    sections,
    templateOverrides: {
      hero: { scenarioBadgeLabel: 'Website Reality' },
      problem: { challengeBadgeLabel: 'What Was Happening' },
      results: {
        detailedResultsBadgeLabel: 'What Changed',
        detailedResultsSectionTitle: 'What Changed Once the Site Started Pulling Its Weight',
      },
      cta: {
        metaItems: [
          { text: 'Free 20-minute call' },
          { text: 'No pressure' },
          { text: 'Useful for service sites' },
        ],
      },
    },
  };
}

export const smartWebsiteInfrastructureImplementation: CaseStudyData =
  buildSmartWebsiteInfrastructureImplementation();
