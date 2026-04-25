import type { CaseStudyTemplateSection } from '@/domains/case-studies/templates';

import type { CaseStudyData } from '../types';

function buildHvacMaintenancePlanReactivation(): CaseStudyData {
  const heroIntroHtml = (
    <>
      Briarwood Heating &amp; Cooling has been looking after homes around Leeds for over a decade.
      They had thousands of past customers on the books, most of whom had been into a maintenance
      plan at one point or another. The trouble was, by the time anyone needed the boiler looked at
      again, those customers were no longer treating Briarwood as their first call.
    </>
  );

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading: 'They had past customers. Almost none came back',
    problemDescription: [
      'A homeowner would have a service done one autumn, then go quiet. Twelve months later they would either ring whoever\u2019s leaflet had come through the door or whichever company they remembered an advert from. Briarwood was rarely that company anymore.',
      'The records were all there. Names, addresses, what had been fitted, when it had last been serviced. The records just sat in a folder. Nobody had time to phone every lapsed customer one by one, so almost nobody got reminded.',
    ],
    painPoints: [
      'Most past customers never heard from the business between visits',
      'Maintenance plans lapsed without anyone noticing',
      'When boilers needed work, customers rang whoever they thought of first',
      'Records existed but nobody was acting on them',
      'New leads were costing money to win that old customers were ready to give',
    ],
  };

  const solutionSection: CaseStudyTemplateSection = {
    type: 'solution',
    solutionHeading: 'They started reaching out to past customers at the right moment',
    solutionDescription:
      'Instead of leaving lapsed customers to remember, the team gave each one a calm, well-timed reason to come back, before the season turned and they needed the work doing.',
    whatWeDid: [
      {
        title: 'A friendly note before the cold weather',
        description:
          'Past customers received a short, calm message in early autumn offering a service slot ahead of winter, before everyone else started thinking about it.',
        icon: 'Bell',
      },
      {
        title: 'A reminder when their plan was due',
        description:
          'Customers whose maintenance plan was about to lapse got a quiet heads-up before the renewal date, with the option to keep going in one tap.',
        icon: 'Calendar',
      },
      {
        title: 'A second touch for the people who paused',
        description:
          'A short follow-up went out to anyone who had not replied, with no pressure but a clear way to come back.',
        icon: 'MessageSquare',
      },
      {
        title: 'A real list of who was due for what',
        description:
          'The office could finally see, at a glance, which customers were due a service, which were lapsing, and which had been gone too long.',
        icon: 'ClipboardList',
      },
    ],
  };

  const resultsSection: CaseStudyTemplateSection = {
    type: 'results',
    results: [
      {
        title: 'Old customers actually started coming back',
        improvement:
          'A meaningful slice of lapsed customers booked a service or restarted their plan',
        description:
          'Most of the responses were the same. People said they had been meaning to book and were glad someone had reminded them. The reminder did most of the work that an entire marketing campaign would have done.',
      },
      {
        title: 'The autumn rush stopped feeling so frantic',
        improvement: 'Services were spread out instead of all crammed into October',
        description:
          'When customers booked early instead of waiting for the first cold week, the team was able to space the work properly. The on-call engineers had a calmer winter as a result.',
      },
      {
        title: 'Less reliance on chasing brand-new leads',
        improvement: 'A real chunk of revenue came from customers who already knew the business',
        description:
          'Acquiring a new customer is always going to cost more than reactivating one. The proportion of work coming from people the business already knew started to climb in a way that was easy to feel.',
      },
    ],
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'A list of past customers nobody is reaching?',
    body: 'Book a free 20-minute call. We can look at how to bring more of those customers back without anyone having to pick up the phone.',
  };

  const sections: CaseStudyTemplateSection[] = [
    { type: 'hero', introHtml: heroIntroHtml },
    problemSection,
    solutionSection,
    resultsSection,
    { type: 'more' },
    ctaSection,
  ];

  return {
    seo: {
      title: 'HVAC reactivation case study: more past customers booking again',
      description:
        'How a Leeds heating and cooling business stopped letting past customers drift away and started seeing real revenue from people who already knew them.',
      canonical: '/case-studies/hvac-past-customers-not-coming-back',
      openGraph: {
        title: 'HVAC reactivation case study: more past customers booking again',
        description:
          'How a Leeds heating and cooling business stopped letting past customers drift away.',
      },
    },
    slug: 'hvac-past-customers-not-coming-back',
    title: 'They had past customers. Almost none came back',
    industryCategory: 'home-services',
    industryLabel: 'Home Services',
    industries: ['hvac'],
    systems: ['revenue-growth'],
    topics: ['client-reactivation', 'customer-lifetime-value', 'service-reminders'],
    publishDate: '2025-12-10',
    client: 'Briarwood Heating & Cooling',
    location: 'Leeds, UK',
    business: 'Briarwood Heating & Cooling',
    duration: '8 weeks',
    completedDate: 'December 2025',
    heroHeadline: 'They had past customers. Almost none came back',
    keyMetrics: [],
    tags: ['HVAC', 'Reactivation', 'Retention', 'Maintenance Plans'],
    sections,
    templateOverrides: {
      hero: { scenarioBadgeLabel: 'Reactivation' },
      problem: { challengeBadgeLabel: 'What was happening' },
      solution: { solutionBadgeLabel: 'What changed' },
      results: {
        detailedResultsBadgeLabel: 'What improved',
        detailedResultsSectionTitle: 'What changed once past customers were reached again',
      },
      cta: {
        metaItems: [
          { text: 'Free 20-minute call' },
          { text: 'No pressure' },
          { text: 'Useful for service trades' },
        ],
      },
    },
  };
}

export const hvacMaintenancePlanReactivation: CaseStudyData =
  buildHvacMaintenancePlanReactivation();
