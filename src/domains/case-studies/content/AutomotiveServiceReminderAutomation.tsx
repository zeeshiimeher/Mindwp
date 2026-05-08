import type { CaseStudyTemplateSection } from '@/domains/case-studies/templates';

import type { CaseStudyData } from '../types';

function buildAutomotiveServiceReminderAutomation(): CaseStudyData {
  const heroIntroHtml = (
    <>
      Halton Motor Works is an independent garage in Sheffield. The work was good and the regulars
      liked them. The problem was harder to see at first. Plenty of customers came through the door
      once for a service or an MOT, were happy with it, and never came back. Not because anything
      went wrong. They simply forgot.
    </>
  );

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading: 'Customers came once. Then disappeared',
    problemDescription: [
      'A car would come in, the job would go well, the customer would pay and drive off. Twelve months later their MOT was due and they would book it in wherever was convenient that week. Sometimes Halton, often not.',
      'The garage had no easy way of telling who was due back. The information was buried inside the booking software, and pulling lists was something nobody had time to actually do. Most past customers just slipped away quietly.',
    ],
    painPoints: [
      'Customers were not being reminded when their MOT was due',
      'Service intervals went by without a single nudge',
      'The garage had the data but nobody was acting on it',
      'Repeat business happened by chance, not by design',
      'New marketing was needed to replace customers they already had',
    ],
  };

  const solutionSection: CaseStudyTemplateSection = {
    type: 'solution',
    solutionHeading: 'They started reminding customers at the right time, every time',
    solutionDescription:
      'Rather than leaving repeat work to chance, the garage gave each customer a calm, well-timed reminder before their MOT or service was due, in a way that felt helpful rather than pushy.',
    whatWeDid: [
      {
        title: 'A friendly heads-up before the MOT was due',
        description:
          'Customers got a short message a few weeks before their MOT expired with a couple of slot suggestions, before the panic of the last-minute search.',
        icon: 'Calendar',
      },
      {
        title: 'A reminder when the next service window opened',
        description:
          'When a service was coming due based on time or mileage estimates, the customer got a gentle nudge with the option to book.',
        icon: 'Bell',
      },
      {
        title: 'A real picture of who was due back and when',
        description:
          'The garage could finally see, in one place, who was due back this month, who was overdue, and who had drifted too far to chase.',
        icon: 'ClipboardList',
      },
    ],
  };

  const businessImpactSection: CaseStudyTemplateSection = {
    type: 'business-impact',
    title: 'What this changed for how the garage made money',
    description:
      'The reminders themselves were simple. The shape of the diary, the spend on new leads, and the calmness of the team all moved together once they were in.',
    impacts: [
      'A real share of past customers booked their next MOT or service through the reminder',
      'The diary filled out earlier in the month instead of lurching from quiet to overflowing',
      'A bigger share of revenue came from people who already knew the garage',
      'Less spend was needed each month to chase brand-new customers',
      'The team could plan the week ahead instead of reacting to it',
      'Repeat work stopped feeling like luck and started feeling like a habit',
    ],
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'Customers coming once and not coming back?',
    body: 'Book a free 20-minute call. We can look at how to bring more of your past customers in for their next MOT or service without anyone having to chase.',
  };

  const sections: CaseStudyTemplateSection[] = [
    { type: 'hero', introHtml: heroIntroHtml },
    problemSection,
    solutionSection,
    businessImpactSection,
    ctaSection,
  ];

  return {
    seo: {
      title: 'Garage service reminder case study: more repeat MOT and service bookings',
      description:
        'How a Sheffield independent garage stopped letting one-off customers drift away and started seeing real repeat work from people who already trusted them.',
      canonical: '/case-studies/garage-customers-came-once-then-disappeared',
      openGraph: {
        title: 'Garage service reminder case study: more repeat MOT and service bookings',
        description: 'How a Sheffield garage stopped letting one-off customers drift away.',
      },
    },
    slug: 'garage-customers-came-once-then-disappeared',
    title: 'Customers came once. Then disappeared',
    industryCategory: 'automotive',
    industryLabel: 'Automotive',
    industries: ['auto-repair'],
    systems: ['revenue-growth'],
    topics: ['client-reactivation', 'customer-lifetime-value', 'service-reminders'],
    publishDate: '2025-12-15',
    client: 'Halton Motor Works',
    location: 'Sheffield, UK',
    business: 'Halton Motor Works',
    duration: '6 weeks',
    completedDate: 'December 2025',
    heroHeadline: 'Customers came once. Then disappeared',
    keyMetrics: [],
    tags: ['Garage', 'MOT', 'Service Reminders', 'Retention'],
    sections,
    templateOverrides: {
      hero: { scenarioBadgeLabel: 'Retention' },
      problem: { challengeBadgeLabel: 'What was happening' },
      solution: { solutionBadgeLabel: 'What changed' },
      cta: {
        metaItems: [
          { text: 'Free 20-minute call' },
          { text: 'No pressure' },
          { text: 'Useful for repair shops' },
        ],
      },
    },
  };
}

export const automotiveServiceReminderAutomation: CaseStudyData =
  buildAutomotiveServiceReminderAutomation();
