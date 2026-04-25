import type { CaseStudyTemplateSection } from '@/domains/case-studies/templates';

import type { CaseStudyData } from '../types';

function buildConstructionLeadTrackingChaos(): CaseStudyData {
  const heroIntroHtml = (
    <>
      Pendle Construction is a small build firm operating out of Preston. House extensions, loft
      conversions, and the occasional small commercial fit-out. Enquiries came from Houzz, Google, a
      referral form on the website, two estimators\u2019 mobiles, and the occasional walk-up
      conversation on a current site. Plenty of leads. Almost no way to keep track of them.
    </>
  );

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading: 'Leads were coming from everywhere. Nobody could track them',
    problemDescription: [
      'A homeowner would enquire about a loft conversion. The office would mean to follow up. Three weeks later the same homeowner would call and ask whether anyone had picked up their enquiry. Half the time the answer was no. The other half it was buried in someone\u2019s inbox.',
      'The owner had a vague feeling that the firm was sitting on a real backlog of warm leads, but nobody could actually see it. Every Monday meeting started with the same question: who has spoken to whom?',
    ],
    painPoints: [
      'Enquiries came in through five different channels with no shared home',
      'Estimators kept lead notes in their own phones and notebooks',
      'Big jobs were going un-followed-up for weeks',
      'Homeowners chasing for an update got vague answers',
      'Nobody could put a real number on the live pipeline at any moment',
    ],
  };

  const solutionSection: CaseStudyTemplateSection = {
    type: 'solution',
    solutionHeading: 'They put every lead in one place with a clear stage',
    solutionDescription:
      'The work itself stayed the same. What changed was that every enquiry, no matter how it came in, ended up in the same list with the same status, so the firm could finally see what it actually had on the table.',
    whatWeDid: [
      {
        title: 'One front door for every enquiry',
        description:
          'Houzz, the website, the office line, the estimators\u2019 mobiles \u2014 all enquiries fed into a single shared list with the same first response.',
        icon: 'Inbox',
      },
      {
        title: 'A stage for every opportunity',
        description:
          'Each lead moved through a small set of stages: new, qualified, surveyed, quoted, chasing, won, lost. Nothing got to live in a vague middle.',
        icon: 'Layers',
      },
      {
        title: 'A clean handoff between estimator and office',
        description:
          'When an estimator picked up a site visit, the office could see exactly where the lead was without having to ring them on the road.',
        icon: 'Users',
      },
      {
        title: 'A weekly view for the owner',
        description:
          'Every Monday the owner had a single screen showing what was open, what was at risk of going cold, and what had moved forward in the last seven days.',
        icon: 'BarChart3',
      },
    ],
  };

  const businessImpactSection: CaseStudyTemplateSection = {
    type: 'business-impact',
    title: 'What this changed for how the firm actually ran',
    description:
      'The bigger shift was felt in the meetings, the planning, and the conversations with homeowners chasing for an update. The technical change was small. The cultural one was not.',
    impacts: [
      'Homeowners chasing for updates got real answers on the first call',
      'Big jobs that would have gone cold were spotted and chased in time',
      'A meaningful chunk of the warm backlog turned into actual work',
      'The Monday meeting moved from a guessing game to a status review',
      'The owner could give the bank or any partner an honest pipeline number',
      'Estimators stopped being the only people who knew where each job stood',
    ],
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'Leads coming from everywhere with no shared view?',
    body: 'Book a free 20-minute call. We can look at how to bring every enquiry into one place without your team having to learn new tools.',
  };

  const sections: CaseStudyTemplateSection[] = [
    { type: 'hero', introHtml: heroIntroHtml },
    problemSection,
    solutionSection,
    businessImpactSection,
    { type: 'more' },
    ctaSection,
  ];

  return {
    seo: {
      title: 'Construction firm case study: one shared view of every live lead',
      description:
        'How a Preston construction firm pulled enquiries from five channels into one shared list and stopped losing track of warm leads.',
      canonical: '/case-studies/construction-leads-everywhere-untracked',
      openGraph: {
        title: 'Construction firm case study: one shared view of every live lead',
        description: 'How a Preston construction firm stopped losing track of warm leads.',
      },
    },
    slug: 'construction-leads-everywhere-untracked',
    title: 'Leads were coming from everywhere. Nobody could track them',
    industryCategory: 'home-services',
    industryLabel: 'Home Services',
    industries: ['roofing'],
    systems: ['crm-automation'],
    topics: ['crm-visibility', 'pipeline-visibility', 'lead-management'],
    publishDate: '2026-01-26',
    client: 'Pendle Construction',
    location: 'Preston, UK',
    business: 'Pendle Construction',
    duration: '9 weeks',
    completedDate: 'January 2026',
    heroHeadline: 'Leads were coming from everywhere. Nobody could track them',
    keyMetrics: [],
    tags: ['Construction', 'Lead Tracking', 'Pipeline', 'Visibility'],
    sections,
    templateOverrides: {
      hero: { scenarioBadgeLabel: 'Lead Visibility' },
      problem: { challengeBadgeLabel: 'What was happening' },
      solution: { solutionBadgeLabel: 'What changed' },
      cta: {
        metaItems: [
          { text: 'Free 20-minute call' },
          { text: 'No pressure' },
          { text: 'Useful for build firms' },
        ],
      },
    },
  };
}

export const constructionLeadTrackingChaos: CaseStudyData = buildConstructionLeadTrackingChaos();
