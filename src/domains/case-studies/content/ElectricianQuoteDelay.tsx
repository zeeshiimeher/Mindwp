import type { CaseStudyTemplateSection } from '@/domains/case-studies/templates';

import type { CaseStudyData } from '../types';

function buildElectricianQuoteDelay(): CaseStudyData {
  const heroIntroHtml = (
    <>
      Westridge Electrical is a small domestic and light-commercial electrician based in Cardiff.
      Three engineers, one part-time office. Quotes were the lifeblood. Quotes were also the thing
      that quietly slipped through the week when the diary got busy on site.
    </>
  );

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading: 'People were asking for quotes. Replies were taking too long',
    problemDescription: [
      'A homeowner would ring or fill in the form on Tuesday. The site visit might happen on Friday. The actual quote often did not land back with them until the following week, and sometimes longer when the team had a heavy job on.',
      'By the time the quote arrived, two other electricians had already replied to the same homeowner. The reply was not bad. It was just late.',
    ],
    painPoints: [
      'Quote replies were arriving days after the enquiry',
      'Engineers on site had no easy way to send anything quickly',
      'Quotes that did go out had no follow-up if the customer went quiet',
      'Smaller jobs were being lost to whoever replied first',
      'The team had no view of which quotes were still live',
    ],
  };

  const workflowsSection: CaseStudyTemplateSection = {
    type: 'workflows',
    title: 'How quote replies actually started moving',
    description:
      'The work itself stayed the same. What changed was what happened in the gap between an enquiry coming in and a real quote going out.',
    workflows: [
      {
        trigger: 'A new quote enquiry arrives by phone or form',
        actions: [
          'A short reply goes out within minutes acknowledging the enquiry',
          'The customer is told roughly when to expect a site visit or a price',
          'The enquiry lands in a single list the office actually looks at, not buried in email',
        ],
      },
      {
        trigger: 'A site visit has just been completed',
        actions: [
          'The engineer captures a few notes from the van before driving off',
          'A draft of the quote is started while the visit is still fresh, not three days later',
          'The customer gets a short message saying the quote is on its way and roughly when',
        ],
      },
      {
        trigger: 'A quote has been sent and a few days have passed with no reply',
        actions: [
          'A calm follow-up message goes out asking if there are any questions',
          'The customer is given an easy way to reply yes, no, or not yet',
          'The quote is marked clearly as still live, declined, or won, so nothing sits in limbo',
        ],
      },
    ],
  };

  const resultsSection: CaseStudyTemplateSection = {
    type: 'results',
    results: [
      {
        title: 'Quotes started landing while the customer was still deciding',
        improvement: 'A clear lift in the share of jobs being won outright',
        description:
          'Replying first does not always win the work. Replying late almost always loses it. Once the gap between enquiry and reply tightened, the team stopped being the third quote in someone\u2019s inbox.',
      },
      {
        title: 'Smaller jobs stopped getting handed away by accident',
        improvement: 'A real share of the smaller domestic work came back into the diary',
        description:
          'Smaller jobs were the ones the team used to lose to whoever replied first. Once those replies got faster, that work stayed. It added up to a meaningful chunk of monthly revenue without any new marketing.',
      },
      {
        title: 'The office stopped wondering which quotes were still live',
        improvement: 'A clear picture of what was open, what was won, and what was gone',
        description:
          'Quotes stopped sitting in inbox limbo for weeks. Each one had a status the team trusted, and the office could give the owner a real answer about the live pipeline at any moment.',
      },
    ],
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'Quotes taking too long and customers going elsewhere?',
    body: 'Book a free 20-minute call. We can look at where your quote replies are slipping and how to keep more of that work in play.',
  };

  const sections: CaseStudyTemplateSection[] = [
    { type: 'hero', introHtml: heroIntroHtml },
    problemSection,
    workflowsSection,
    resultsSection,
    ctaSection,
  ];

  return {
    seo: {
      title: 'Electrician quote case study: faster replies, more jobs won',
      description:
        'How a Cardiff electrician closed the gap between enquiry and quote reply, and stopped losing smaller jobs to whoever happened to answer first.',
      canonical: '/case-studies/electrician-quote-replies-too-slow',
      openGraph: {
        title: 'Electrician quote case study: faster replies, more jobs won',
        description: 'How a Cardiff electrician closed the gap between enquiry and quote reply.',
      },
    },
    slug: 'electrician-quote-replies-too-slow',
    title: 'People were asking for quotes. Replies were taking too long',
    industryCategory: 'home-services',
    industryLabel: 'Home Services',
    industries: ['electrical'],
    systems: ['revenue-growth'],
    topics: ['lead-response-time', 'follow-up', 'conversion-optimization'],
    publishDate: '2026-01-12',
    client: 'Westridge Electrical',
    location: 'Cardiff, UK',
    business: 'Westridge Electrical',
    duration: '6 weeks',
    completedDate: 'January 2026',
    heroHeadline: 'People were asking for quotes. Replies were taking too long',
    keyMetrics: [],
    tags: ['Electrician', 'Quotes', 'Response Time', 'Follow-Up'],
    sections,
    templateOverrides: {
      hero: { scenarioBadgeLabel: 'Quote Speed' },
      problem: { challengeBadgeLabel: 'What was happening' },
      results: {
        detailedResultsBadgeLabel: 'What improved',
        detailedResultsSectionTitle: 'What changed once quotes moved at the right speed',
      },
      cta: {
        metaItems: [
          { text: 'Free 20-minute call' },
          { text: 'No pressure' },
          { text: 'Useful for electrical contractors' },
        ],
      },
    },
  };
}

export const electricianQuoteDelay: CaseStudyData = buildElectricianQuoteDelay();
