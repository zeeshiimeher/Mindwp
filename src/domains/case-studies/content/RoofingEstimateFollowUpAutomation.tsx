import type { CaseStudyTemplateSection } from '@/domains/case-studies/templates';

import type { CaseStudyData } from '../types';

function buildRoofingEstimateFollowUpAutomation(): CaseStudyData {
  const heroIntroHtml = (
    <>
      Northwood Roofing covers Sheffield and the villages around it. The estimating side of the
      business worked hard. Surveys were getting done. Quotes were going out the same week. What
      kept slipping was everything that happened after the quote landed in the customer\u2019s
      inbox.
    </>
  );

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading: 'They were sending quotes. Nobody was following them up',
    problemDescription: [
      'A homeowner asks for a price. The quote goes out. Then nothing. The lead either books or quietly disappears, and most of them quietly disappeared.',
      'The team was busy with the next survey, the next visit, the next emergency. Going back through old quotes to see who had not replied was the kind of job that always got pushed to tomorrow.',
    ],
    painPoints: [
      'Quotes went out and were treated as done',
      'Nobody was checking in a few days later to see if there were questions',
      'Old quotes lived in email threads that were hard to dig back out',
      'Customers comparing two or three roofers usually picked whoever stayed in touch',
      'Nobody could see how many quotes were still alive at any one time',
    ],
  };

  const processSection: CaseStudyTemplateSection = {
    type: 'process',
    howWeDidIt: [
      {
        phase: 'Week 1',
        title: 'Sat with the surveyor for a morning',
        description:
          'Watched how quotes actually went out. Where they got stored. Who, if anyone, looked at them again. Most of the friction came from there being no obvious next step after the email was sent.',
        duration: '3 days',
      },
      {
        phase: 'Week 2',
        title: 'Drafted a follow-up rhythm in plain language',
        description:
          'Wrote three short messages with the office manager, in her voice, so the check-ins did not sound like marketing. Two days later, then a week later, then a friendlier nudge for the bigger jobs.',
        duration: '4 days',
      },
      {
        phase: 'Week 3',
        title: 'Built a single live-quotes view',
        description:
          'Pulled every active quote into one place so the team could see, at a glance, which ones were still warm, which had gone quiet, and which were getting close to being too old to chase.',
        duration: '1 week',
      },
      {
        phase: 'Weeks 4\u20136',
        title: 'Ran it on real quotes and tightened the timing',
        description:
          'The first version sent the second message too early for some jobs. We slid it back a few days and added a tiny escalation that flagged larger quotes for a real phone call before the lead went cold.',
        duration: '3 weeks',
      },
    ],
  };

  const resultsSection: CaseStudyTemplateSection = {
    type: 'results',
    results: [
      {
        title: 'More of those quotes actually turned into conversations',
        improvement: 'Customers started replying who would not have replied before',
        description:
          'A lot of the people who had gone quiet were not really gone. They had questions, or they were comparing prices, or life had got in the way. A second message brought a meaningful number of them back.',
      },
      {
        title: 'Fewer quotes ended in silence',
        improvement: 'The follow-up was happening every time, not when someone remembered',
        description:
          'The team stopped relying on memory to chase. Every quote got at least the same calm sequence, which evened out the months when the surveyor was too busy to look back.',
      },
      {
        title: 'A noticeable lift in jobs from quotes already sent',
        improvement: 'Real money that had been quietly leaking',
        description:
          'It was not every quote and it was not overnight. Over a couple of months the recovered work was clearly there in the diary, mostly from quotes the old way of working would have written off.',
      },
    ],
  };

  const testimonialSection: CaseStudyTemplateSection = {
    type: 'testimonial',
    testimonial: {
      quote:
        'Half of those follow-ups end up being a five-minute reply where the customer just had one question. We were leaving that money on the table for years.',
      author: 'Daniel Hughes',
      role: 'Owner, Northwood Roofing',
    },
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'Sending quotes that go quiet?',
    body: 'Book a free 20-minute call. We can look at where your quotes are dropping off and how to bring those conversations back without anyone having to remember.',
  };

  const sections: CaseStudyTemplateSection[] = [
    { type: 'hero', introHtml: heroIntroHtml },
    problemSection,
    processSection,
    resultsSection,
    testimonialSection,
    ctaSection,
  ];

  return {
    seo: {
      title: 'Roofing quote follow-up case study: more estimates becoming jobs',
      description:
        'How a Sheffield roofing company stopped letting quotes go cold and started winning more of the jobs that had already been priced.',
      canonical: '/case-studies/roofing-quotes-not-being-followed-up',
      openGraph: {
        title: 'Roofing quote follow-up case study: more estimates becoming jobs',
        description:
          'How a Sheffield roofing company stopped letting quotes go cold and started winning more of the jobs already priced.',
      },
    },
    slug: 'roofing-quotes-not-being-followed-up',
    title: 'They were sending quotes. Nobody was following them up',
    industryCategory: 'home-services',
    industryLabel: 'Home Services',
    industries: ['roofing'],
    systems: ['revenue-growth'],
    topics: ['follow-up', 'conversion-optimization', 'lead-management'],
    publishDate: '2026-01-20',
    client: 'Northwood Roofing',
    location: 'Sheffield, UK',
    business: 'Northwood Roofing',
    duration: '8 weeks',
    completedDate: 'January 2026',
    heroHeadline: 'They were sending quotes. Nobody was following them up',
    keyMetrics: [],
    tags: ['Roofing', 'Quote Follow-Up', 'Estimates'],
    sections,
    templateOverrides: {
      hero: { scenarioBadgeLabel: 'Quote Follow-Up' },
      problem: { challengeBadgeLabel: 'What was happening' },
      process: {
        implementationBadgeLabel: 'How it actually went',
        implementationSectionTitle: 'How the follow-up rhythm came together',
      },
      results: {
        detailedResultsBadgeLabel: 'What improved',
        detailedResultsSectionTitle: 'What changed once quotes were followed up properly',
      },
      cta: {
        metaItems: [
          { text: 'Free 20-minute call' },
          { text: 'No pressure' },
          { text: 'Useful for trade businesses' },
        ],
      },
    },
  };
}

export const roofingEstimateFollowUpAutomation: CaseStudyData =
  buildRoofingEstimateFollowUpAutomation();
