import type { CaseStudyContent, CaseStudyTemplateSection } from '@/domains/case-studies/templates';

import type { CaseStudyData } from '../types';

function buildLocalAuthoritySystemImpact(): CaseStudyData {
  const heroIntroHtml = (
    <>
      They were doing the work. Google barely showed it. Brookfield Electrical in Oxford had the
      kind of reputation people talked about once they had used them, but that did not help much
      when a homeowner searched for an electrician and stopped at whichever profile looked active,
      nearby, and recently trusted.
    </>
  );

  const keyMetrics: CaseStudyContent['keyMetrics'] = [
    {
      label: 'Maps visibility',
      value: 'From buried to often seen',
      icon: 'MapPin',
      color: 'case-study-accent--success',
    },
    {
      label: 'Organic enquiries',
      value: 'Steadily up',
      icon: 'TrendingUp',
      color: 'case-study-accent--primary',
    },
    {
      label: 'Fresh reviews',
      value: 'Coming in regularly',
      icon: 'Star',
      color: 'case-study-accent--amber',
    },
    {
      label: 'Ads doing less of the heavy lifting',
      value: 'Noticeably less',
      icon: 'PieChart',
      color: 'case-study-accent--purple',
    },
  ];

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading: 'The better-known online firms were getting the first look',
    problemDescription: [
      'Brookfield Electrical had years of solid work behind them, but that was not what a local searcher saw. The profile looked quiet, the review count looked old, and the website gave Google very little to work with.',
      'That left the business leaning hard on paid traffic. If ads slowed down, the enquiry flow slowed with them. The awkward part was that the work quality was not the issue. The business just was not showing up where local trust now gets judged.',
    ],
    painPoints: [
      'Map results barely surfaced the business where local searchers were looking first',
      'Old reviews made the profile feel quieter than the real workload',
      'The website gave weak local signals for the jobs and areas that mattered most',
      'Paid traffic was carrying too much of the month',
      'Rankings moved unevenly across service areas before they settled',
    ],
  };

  const whatChangedSection: CaseStudyTemplateSection = {
    type: 'solution',
    solutionHeading: 'What started showing up properly',
    solutionDescription:
      'The business did not need a louder story. It needed its local proof to stop looking neglected and start matching the work it was already doing.',
    whatWeDid: [
      {
        title: 'The profile stopped looking abandoned',
        description:
          'Core details, service signals, and regular activity were brought back into shape so the listing looked current instead of forgotten.',
        icon: 'MapPin',
      },
      {
        title: 'Finished jobs finally turned into fresh reviews',
        description:
          'Review requests started going out at the right moment, which gave Google and searchers a steadier sign that the business was active.',
        icon: 'Star',
      },
      {
        title: 'The website got clearer local intent',
        description:
          'Service pages were tightened around the jobs and places the team actually wanted, instead of leaving everything vague and broad.',
        icon: 'Search',
      },
      {
        title: 'Listings stopped contradicting each other',
        description:
          'Local mentions were cleaned up so the business looked more consistent wherever people found it.',
        icon: 'CheckCircle2',
      },
    ],
  };

  const resultsSection: CaseStudyTemplateSection = {
    type: 'results',
    results: [
      {
        title: 'The business started getting seen in the places that decide the first click',
        improvement: 'More often in the map pack and local search',
        description:
          'The shift was not perfectly even across every postcode at once, but the profile was showing up far more often where it had barely been visible before.',
      },
      {
        title: 'Organic enquiries stopped feeling accidental',
        improvement: 'A steadier stream without leaning so hard on ads',
        description:
          'Instead of treating unpaid enquiries like the occasional bonus, the business started seeing local search bring in a real share of new work.',
      },
      {
        title: 'The online proof began to resemble the actual reputation',
        improvement: 'More fresh reviews and a stronger first impression',
        description:
          'That mattered because people were no longer weighing the firm against older, quieter signals. They were seeing recent trust, recent activity, and a business that looked alive.',
      },
    ],
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'Doing good work but still hard to find locally?',
    body: 'Book a free 20-minute call and we can look at where your local proof is thinning out before the right searchers ever reach you.',
  };

  const sections: CaseStudyTemplateSection[] = [
    { type: 'hero', introHtml: heroIntroHtml },
    problemSection,
    whatChangedSection,
    resultsSection,
    { type: 'more' },
    ctaSection,
  ];

  return {
    slug: 'electrician-not-showing-up-where-locals-search',
    title: 'They were doing the work. Google barely showed it.',
    industryCategory: 'home-services',
    industryLabel: 'Home Services',
    industries: ['roofing'],
    systems: ['local-seo-authority'],
    topics: [
      'local-seo',
      'local-visibility',
      'google-business-profile',
      'review-generation',
      'local-authority',
    ],
    publishDate: '2026-07-01',
    client: 'Brookfield Electrical',
    location: 'Oxford, UK',
    business: 'Brookfield Electrical',
    duration: '21 weeks',
    completedDate: 'July 2026',
    heroHeadline: 'They were doing the work. Google barely showed it.',
    keyMetrics: keyMetrics.map(metric => ({
      value: metric.value,
      label: metric.label,
      ...(metric.color ? { color: metric.color } : {}),
    })),
    tags: ['Local SEO', 'Google Maps', 'Electrical', 'Review Growth', 'Home Services'],
    seo: {
      title: 'Electrician local visibility case study: found more often in Google Maps',
      description:
      'How an Oxford electrician started showing up far more often in local search and relied less on ads to keep enquiries moving.',
      canonical: '/case-studies/electrician-not-showing-up-where-locals-search',
      openGraph: {
        title: 'Electrician local visibility case study: found more often in Google Maps',
        description:
          'How an Oxford electrician started showing up far more often in local search and relied less on ads to keep enquiries moving.',
      },
    },
    sections,
    templateOverrides: {
      hero: { scenarioBadgeLabel: 'Local Search' },
      problem: { challengeBadgeLabel: 'What Was Happening' },
      solution: { solutionBadgeLabel: 'What Changed' },
      results: {
        detailedResultsBadgeLabel: 'What Changed',
        detailedResultsSectionTitle: 'What Changed Once Local Trust Started Showing Up Properly',
      },
      cta: {
        metaItems: [
          { text: 'Free 20-minute call' },
          { text: 'No pressure' },
          { text: 'Useful for local trades' },
        ],
      },
    },
  };
}

export const localAuthoritySystemImpact: CaseStudyData = buildLocalAuthoritySystemImpact();
