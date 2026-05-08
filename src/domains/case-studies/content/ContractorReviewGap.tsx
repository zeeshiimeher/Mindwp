import type { CaseStudyTemplateSection } from '@/domains/case-studies/templates';

import type { CaseStudyData } from '../types';

function buildContractorReviewGap(): CaseStudyData {
  const heroIntroHtml = (
    <>
      Brookhaven Electrical Contractors does small commercial fit-out and domestic rewires across
      Newcastle. The work was solid, the customers happy, and the quality of finish was a real
      strength. None of that showed up online. The Google profile had a thin handful of reviews,
      most of them years old, and a new prospect comparing options would never have guessed how good
      the work actually was.
    </>
  );

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading: 'They were doing solid work. Nobody was talking about it',
    problemDescription: [
      'When a job wrapped up, the customer paid, said thanks, and that was the last anyone heard from them. Reviews never came up. The owner felt awkward asking, and the engineers were on to the next job before they had time to think about it.',
      'Newer competitors with weaker work were ranking above them on local searches because they simply asked, often, every time. The reputation gap had nothing to do with quality. It was a quiet, year-long gap in the ask itself.',
    ],
    painPoints: [
      'Reviews were left to chance, which usually meant they did not happen',
      'The Google profile looked dated next to weaker competitors',
      'The owner felt awkward asking customers in person',
      'Engineers were on the next job before any ask could happen',
      'Word-of-mouth quality was not making it to the search results',
    ],
  };

  const resultsSection: CaseStudyTemplateSection = {
    type: 'results',
    results: [
      {
        title: 'A steady stream of recent reviews started appearing',
        improvement: 'A real, ongoing trickle of new five-star reviews instead of a stale list',
        description:
          'A short, calm message went out a day or two after each job wrapped, with a simple link straight to the review screen. Customers who would have happily said yes when asked finally got a chance to. The Google profile started looking like the actual business.',
      },
      {
        title: 'New prospects stopped passing the firm over',
        improvement: 'Quote enquiries from search began to feel warmer from the first call',
        description:
          'People comparing electricians on Google started picking up the phone with a different tone. Recent reviews carried weight in a way that older ones simply did not, and the firm stopped being filtered out before the conversation began.',
      },
      {
        title: 'Asking stopped being awkward',
        improvement: 'Reviews happened on their own without anyone having to think about it',
        description:
          'The owner no longer had to remember, the engineers no longer had to find a moment, and the customer got to leave a review from their sofa instead of in front of a clipboard. The whole thing finally fit how the business actually ran.',
      },
    ],
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'Doing solid work but the Google page does not show it?',
    body: 'Book a free 20-minute call. We can look at how to get the right ask in front of your happy customers without it feeling forced.',
  };

  const sections: CaseStudyTemplateSection[] = [
    { type: 'hero', introHtml: heroIntroHtml },
    problemSection,
    resultsSection,
    ctaSection,
  ];

  return {
    seo: {
      title: 'Electrical contractor case study: a Google profile that finally shows the work',
      description:
        'How a Newcastle electrical contractor stopped letting strong work go unseen and built a steady stream of recent reviews from happy customers.',
      canonical: '/case-studies/contractor-solid-work-no-reviews',
      openGraph: {
        title: 'Electrical contractor case study: a Google profile that finally shows the work',
        description: 'How a Newcastle electrical contractor stopped letting strong work go unseen.',
      },
    },
    slug: 'contractor-solid-work-no-reviews',
    title: 'They were doing solid work. Nobody was talking about it',
    industryCategory: 'home-services',
    industryLabel: 'Home Services',
    industries: ['electrical'],
    systems: ['reputation-review'],
    topics: ['review-generation', 'google-business-profile', 'reputation-monitoring'],
    publishDate: '2026-01-22',
    client: 'Brookhaven Electrical Contractors',
    location: 'Newcastle, UK',
    business: 'Brookhaven Electrical Contractors',
    duration: '5 weeks',
    completedDate: 'January 2026',
    heroHeadline: 'They were doing solid work. Nobody was talking about it',
    keyMetrics: [],
    tags: ['Electrical', 'Contractor', 'Reviews', 'Reputation'],
    sections,
    templateOverrides: {
      hero: { scenarioBadgeLabel: 'Reviews' },
      problem: { challengeBadgeLabel: 'What was happening' },
      results: {
        detailedResultsBadgeLabel: 'What improved',
        detailedResultsSectionTitle: 'What changed once the ask was in the right place',
      },
      cta: {
        metaItems: [
          { text: 'Free 20-minute call' },
          { text: 'No pressure' },
          { text: 'Useful for trade contractors' },
        ],
      },
    },
  };
}

export const contractorReviewGap: CaseStudyData = buildContractorReviewGap();
