import type { CaseStudyTemplateSection } from '@/domains/case-studies/templates';

import type { CaseStudyData } from '../types';

function buildRealEstateInquiryRouting(): CaseStudyData {
  const heroIntroHtml = (
    <>
      Wessex Property Group runs three branches across Bristol and the surrounding towns. Sales,
      lettings, and a small commercial desk all shared one enquiry inbox and one main phone line.
      The business was getting plenty of contact. The contact just was not always reaching the right
      person. A landlord asking about lettings would land in the sales queue. A buyer for a Bristol
      flat ended up at the Bath branch. By the time someone forwarded the message on, the customer
      had usually waited a day, sometimes two, and a fair few of them never replied again.
    </>
  );

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading: 'The right enquiries were going to the wrong place',
    problemDescription: [
      'Sales enquiries went into the same inbox as lettings, which went into the same inbox as commercial. A few branches had their own forwarding rules, but most of those broke if the person who set them up was off that week.',
      'Whoever opened the email first ended up sorting it. Sometimes that took half an hour. Sometimes it took a day. The customer at the other end was just sitting there, waiting on a reply that should have been instant.',
    ],
    painPoints: [
      'Sales, lettings, and commercial enquiries all landed in the same inbox',
      'Branches had no clear handoff for enquiries from a different area',
      'Forwarding was manual and depended on whoever opened the email first',
      'Customers waited a day or more before hearing from the right person',
      'Nobody could really see how often enquiries were being misrouted',
    ],
  };

  const resultsSection: CaseStudyTemplateSection = {
    type: 'results',
    results: [
      {
        title: 'Replies started landing faster, in the right hands',
        improvement:
          'Most enquiries reached the right negotiator on the same morning instead of the next day',
        description:
          'Once enquiries stopped hopping between inboxes, the team could actually answer them properly. The first reply was both quicker and from somebody who knew the property or the market. We added a short triage question on the form and a routing layer behind it, so each enquiry started in the right place instead of being sorted by hand.',
      },
      {
        title: 'Fewer enquiries vanished in the gap',
        improvement: 'Less drop-off between first contact and a real conversation',
        description:
          'Customers who would previously have given up waiting to be forwarded now had a reason to stick around. Even the ones who took their time replied to the right person from the start. They also got a short acknowledgement message confirming where the enquiry had landed, which on its own kept a lot of conversations alive.',
      },
      {
        title: 'Branches stopped tripping over each other',
        improvement: 'Less time wasted on internal forwarding',
        description:
          'Negotiators stopped spending the first hour of the day sorting out other people\u2019s emails. The enquiries they did pick up were already theirs to work. The team could finally see when an enquiry still landed in the wrong place and tighten the rules instead of guessing.',
      },
    ],
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'Enquiries landing in the wrong place?',
    body: 'Book a free 20-minute call. We can look at how your enquiries flow today and where the wrong person is ending up with them.',
  };

  const sections: CaseStudyTemplateSection[] = [
    { type: 'hero', introHtml: heroIntroHtml },
    problemSection,
    resultsSection,
    ctaSection,
  ];

  return {
    seo: {
      title: 'Estate agent enquiry routing case study: faster, sharper replies',
      description:
        'How a Bristol estate agency stopped misrouting sales, lettings, and commercial enquiries and got the right person responding the same morning.',
      canonical: '/case-studies/estate-agent-enquiries-going-to-the-wrong-place',
      openGraph: {
        title: 'Estate agent enquiry routing case study: faster, sharper replies',
        description:
          'How a Bristol estate agency stopped misrouting sales, lettings, and commercial enquiries.',
      },
    },
    slug: 'estate-agent-enquiries-going-to-the-wrong-place',
    title: 'The right enquiries were going to the wrong place',
    industryCategory: 'real-estate',
    industryLabel: 'Real Estate',
    industries: ['realtor'],
    systems: ['ai-lead-handling'],
    topics: ['lead-routing', 'lead-management', 'lead-response-time'],
    publishDate: '2026-02-20',
    client: 'Wessex Property Group',
    location: 'Bristol, UK',
    business: 'Wessex Property Group',
    duration: '7 weeks',
    completedDate: 'February 2026',
    heroHeadline: 'The right enquiries were going to the wrong place',
    keyMetrics: [],
    tags: ['Estate Agency', 'Enquiry Routing', 'Real Estate'],
    sections,
    templateOverrides: {
      hero: { scenarioBadgeLabel: 'Enquiry Routing' },
      problem: { challengeBadgeLabel: 'What was happening' },
      results: {
        detailedResultsBadgeLabel: 'What improved',
        detailedResultsSectionTitle: 'What changed once enquiries reached the right desk',
      },
      cta: {
        metaItems: [
          { text: 'Free 20-minute call' },
          { text: 'No pressure' },
          { text: 'Useful for multi-branch agencies' },
        ],
      },
    },
  };
}

export const realEstateInquiryRouting: CaseStudyData = buildRealEstateInquiryRouting();
