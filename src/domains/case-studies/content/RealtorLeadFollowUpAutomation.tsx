import type { CaseStudyTemplateSection } from '@/domains/case-studies/templates';

import type { CaseStudyData } from '../types';

function buildRealtorLeadFollowUpAutomation(): CaseStudyData {
  const heroIntroHtml = (
    <>
      Ashford Residential is an independent estate agency in Bath. Portal traffic was steady. The
      website was getting filled-out forms most days. Buyers were asking for property details. From
      the outside the top of the funnel looked perfectly healthy. Inside, most of those
      conversations stopped after the first reply went out.
    </>
  );

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading: 'Enquiries were coming in. Conversations weren\u2019t happening',
    problemDescription: [
      'A buyer would ask about a property. The negotiator would send the brochure and the next viewing slot. If the buyer did not reply that day, the thread quietly died.',
      'There was no second touch and no third. People who needed a couple of days to talk it over with a partner, sort their finances, or just think about the area got nothing back. Most ended up walking into another agency that had stayed in contact.',
    ],
    painPoints: [
      'Most enquiries got one reply, then nothing',
      'Negotiators were juggling 15 to 20 active buyers from memory',
      'Spreadsheets were updated when someone had time, which was rarely',
      'Buyers in the thinking-it-over stage heard nothing for days',
      'Nobody could really tell which leads were still warm and which had gone cold',
    ],
  };

  const solutionSection: CaseStudyTemplateSection = {
    type: 'solution',
    solutionHeading: 'A calm follow-up rhythm so buyers stopped going quiet',
    solutionDescription:
      'Instead of leaving the next conversation to whoever happened to remember, the agency put a small structure around what happened in the days after the first reply.',
    whatWeDid: [
      {
        title: 'They started checking in a couple of days later',
        description:
          'A short message asking if the buyer had any questions about the property or wanted to arrange a viewing.',
        icon: 'MessageSquare',
      },
      {
        title: 'A lighter nudge a few days after that',
        description:
          'Something more conversational for buyers who had not replied yet, in case they were still talking it over at home.',
        icon: 'Mail',
      },
      {
        title: 'A short list of buyers worth a real call',
        description:
          'Negotiators started the day with the names of buyers who had opened a brochure or asked a question and were worth picking up the phone for.',
        icon: 'Phone',
      },
    ],
  };

  const businessImpactSection: CaseStudyTemplateSection = {
    type: 'business-impact',
    title: 'What it actually meant for the business over the next quarter',
    description:
      'The change was not dramatic week to week. It was the kind of thing that showed up clearly when the partners sat down with the quarterly numbers.',
    impacts: [
      'A noticeable lift in viewings booked from enquiries that the old way of working would have lost',
      'Negotiators stopped relying on memory \u2014 every buyer got at least the same calm sequence',
      'In-person calls were saved for buyers who really needed them, not for chasing dead threads',
      'Buyers who wanted a few days to think no longer drifted to whoever messaged them next',
      'Lost commission stopped feeling like the normal cost of doing business',
    ],
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'Buyers going quiet after the first reply?',
    body: 'Book a free 20-minute call. We can look at where your enquiries are stalling and how to keep more buyers in the conversation through to a viewing.',
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
      title: 'Estate agent follow-up case study: more viewings booked',
      description:
        'How a Bath estate agency stopped letting buyers go quiet after the first reply and started booking more viewings from the same enquiries.',
      canonical: '/case-studies/estate-agent-enquiries-not-becoming-conversations',
      openGraph: {
        title: 'Estate agent follow-up case study: more viewings booked',
        description:
          'How a Bath estate agency stopped letting buyers go quiet after the first reply.',
      },
    },
    slug: 'estate-agent-enquiries-not-becoming-conversations',
    title: 'Enquiries were coming in. Conversations weren\u2019t happening',
    industryCategory: 'real-estate',
    industryLabel: 'Real Estate',
    industries: ['realtor'],
    systems: ['revenue-growth'],
    topics: ['follow-up', 'lead-management', 'lead-response-time'],
    publishDate: '2026-03-15',
    client: 'Ashford Residential',
    location: 'Bath, UK',
    business: 'Ashford Residential',
    duration: '10 weeks',
    completedDate: 'March 2026',
    heroHeadline: 'Enquiries were coming in. Conversations weren\u2019t happening',
    keyMetrics: [],
    tags: ['Estate Agency', 'Lead Follow-Up', 'Real Estate', 'Buyer Conversion'],
    sections,
    templateOverrides: {
      hero: { scenarioBadgeLabel: 'Lead Follow-Up' },
      problem: { challengeBadgeLabel: 'What was happening' },
      solution: { solutionBadgeLabel: 'What changed' },
      cta: {
        metaItems: [
          { text: 'Free 20-minute call' },
          { text: 'No pressure' },
          { text: 'Useful for estate agents' },
        ],
      },
    },
  };
}

export const realtorLeadFollowUpAutomation: CaseStudyData = buildRealtorLeadFollowUpAutomation();
