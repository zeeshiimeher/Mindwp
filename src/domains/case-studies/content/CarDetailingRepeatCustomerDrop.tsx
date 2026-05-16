import type { CaseStudyTemplateSection } from '@/domains/case-studies/templates';

import type { CaseStudyData } from '../types';

function buildCarDetailingRepeatCustomerDrop(): CaseStudyData {
  const heroIntroHtml = (
    <>
      Apex Auto Detailing is a single-bay detailing studio in Coventry. The work is meticulous, the
      regulars are loyal, and most first-time customers walk away genuinely happy. Then most of them
      never come back. Not because they were unimpressed. They simply forget, or wait until the car
      is filthy again and book whoever pops up first on Google.
    </>
  );

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading: 'Customers came once. Then never returned',
    problemDescription: [
      'A customer would book a full detail. They would pay, drive off looking pleased, and that would be the end of the relationship. Six months later their car was a state again and there was no good reason for them to specifically remember Apex.',
      'The owner had been trying to fix it personally. A reminder text here, a chase there, but it was never consistent. On a busy week the reminders just did not happen, and another batch of one-off customers drifted out of mind.',
    ],
    painPoints: [
      'Most one-off customers were never contacted again',
      'Reminders were sent manually and inconsistently',
      'The owner had no real list of who was due for a refresh',
      'Repeat work depended on whether the customer happened to remember',
      'New marketing was being used to win customers the studio had already had once',
    ],
  };

  const solutionSection: CaseStudyTemplateSection = {
    type: 'solution',
    solutionHeading: 'They started reaching out at the right moment, every time',
    solutionDescription:
      'Instead of relying on the owner remembering, the studio gave each past customer a calm, well-timed nudge based on what they had had done and when, in a way that felt useful rather than pushy.',
    whatWeDid: [
      {
        title: 'A friendly thank-you after the first detail',
        description:
          'A short, warm message went out a couple of days after the appointment, thanking them and quietly setting expectations for when their car would benefit from another look.',
        icon: 'Heart',
      },
      {
        title: 'A nudge before the right window',
        description:
          'Based on what was done last time, a gentle reminder went out at roughly the right interval, with a couple of suggested slots and an easy way to book.',
        icon: 'Calendar',
      },
      {
        title: 'A second touch for the people who did not reply',
        description:
          'A single calm follow-up went out a fortnight later for anyone who had not booked, with no pressure if it was the wrong time.',
        icon: 'MessageSquare',
      },
      {
        title: 'A real list of who was due back when',
        description:
          'The owner could finally see, in one place, who was due back this month, who was overdue, and who had drifted too far to chase. The conversation about the diary became based on something real.',
        icon: 'ClipboardList',
      },
    ],
  };

  const resultsSection: CaseStudyTemplateSection = {
    type: 'results',
    results: [
      {
        title: 'Repeat customers actually started repeating',
        improvement: 'A real share of past customers booked a second detail through the reminder',
        description:
          'Most replies were short. People said they had been meaning to book and were glad someone had reminded them. The reminder did the work no marketing campaign would have done as cleanly.',
      },
      {
        title: 'The diary stopped being so feast-or-famine',
        improvement: 'Quieter weeks were filled by reactivated customers, not by new ads',
        description:
          'The studio used to lurch between fully booked and worryingly quiet. Once past customers were being brought back at the right interval, the quieter weeks stopped feeling so quiet.',
      },
      {
        title: 'Less spend was needed on chasing brand-new customers',
        improvement: 'A bigger share of revenue came from people who already knew the studio',
        description:
          'Reactivating an existing customer was always cheaper than winning a stranger. The proportion of repeat work climbed in a way the owner could feel in the bank account, not just in the diary.',
      },
    ],
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'Customers coming once and not coming back?',
    body: 'Book a free 20-minute call. We can look at how to bring more of your past customers in for their next service without anyone having to chase.',
  };

  const sections: CaseStudyTemplateSection[] = [
    { type: 'hero', introHtml: heroIntroHtml },
    problemSection,
    solutionSection,
    resultsSection,
    ctaSection,
  ];

  return {
    seo: {
      title: 'Car detailing case study: more past customers booking again',
      description:
        'How a Coventry car detailing studio stopped letting one-off customers drift away and started seeing real repeat revenue from people who already knew the work.',
      canonical: '/case-studies/car-detailing-customers-not-coming-back',
      openGraph: {
        title: 'Car detailing case study: more past customers booking again',
        description:
          'How a Coventry car detailing studio stopped letting one-off customers drift away.',
      },
    },
    slug: 'car-detailing-customers-not-coming-back',
    title: 'Customers came once. Then never returned',
    industryCategory: 'automotive',
    industryLabel: 'Automotive',
    industries: ['car-detailing'],
    primarySystem: 'follow-up-crm',
    topics: ['client-reactivation', 'customer-lifetime-value', 'service-reminders'],
    publishDate: '2026-02-08',
    client: 'Apex Auto Detailing',
    location: 'Coventry, UK',
    business: 'Apex Auto Detailing',
    duration: '5 weeks',
    completedDate: 'February 2026',
    heroHeadline: 'Customers came once. Then never returned',
    keyMetrics: [],
    tags: ['Car Detailing', 'Retention', 'Reactivation', 'Repeat Customers'],
    sections,
    templateOverrides: {
      hero: { scenarioBadgeLabel: 'Retention' },
      problem: { challengeBadgeLabel: 'What was happening' },
      solution: { solutionBadgeLabel: 'What changed' },
      results: {
        detailedResultsBadgeLabel: 'What improved',
        detailedResultsSectionTitle: 'What changed once past customers were brought back properly',
      },
      cta: {
        metaItems: [
          { text: 'Free 20-minute call' },
          { text: 'No pressure' },
          { text: 'Useful for detail studios' },
        ],
      },
    },
  };
}

export const carDetailingRepeatCustomerDrop: CaseStudyData = buildCarDetailingRepeatCustomerDrop();
