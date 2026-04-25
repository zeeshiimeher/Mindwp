import type { CaseStudyTemplateSection } from '@/domains/case-studies/templates';

import type { CaseStudyData } from '../types';

function buildCleaningBusinessLeadLoss(): CaseStudyData {
  const heroIntroHtml = (
    <>
      Brightside Domestic Cleaning is a small residential cleaning business in Reading. Two cleaning
      teams, one part-time office, and a steady stream of enquiries from the website, Facebook, and
      the occasional referral. Plenty of enquiries. Roughly half of them quietly went nowhere.
    </>
  );

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading: 'Enquiries were coming in. Half of them were getting lost',
    problemDescription: [
      'Someone would fill in the form on the website asking for a quote. The enquiry would land in an inbox that the office checked once or twice a day. By the time anyone replied, the customer had often already booked someone else.',
      'It was not that the team was bad at the work. The work was great. The issue was that the gap between someone asking and someone replying was big enough for the customer to move on, and nobody really knew how often it was happening.',
    ],
    painPoints: [
      'Form enquiries sat unread for hours during the day',
      'The team out cleaning could not respond to enquiries from the road',
      'Replies that did go out lacked the right next step',
      'Customers who went quiet were never followed up',
      'Nobody could tell which enquiries were actually turning into bookings',
    ],
  };

  const workflowsSection: CaseStudyTemplateSection = {
    type: 'workflows',
    title: 'How enquiries actually started turning into bookings',
    description:
      'Nothing changed about the cleaning. What changed was the small set of touches around each enquiry, in a way that did not depend on whoever happened to be near the inbox.',
    workflows: [
      {
        trigger: 'A new enquiry arrives from the website or social',
        actions: [
          'A short, friendly reply goes out within minutes acknowledging the enquiry',
          'The customer is told roughly when to expect a quote and what is needed for it',
          'The enquiry lands in a single shared list with a clear status of new',
        ],
      },
      {
        trigger: 'The quote has been sent',
        actions: [
          'The enquiry moves to a quoted status with a clear chase date',
          'The customer is asked an easy yes/no/not yet at the right moment',
          'No quote sits in inbox limbo for a fortnight without anyone knowing',
        ],
      },
      {
        trigger: 'A few days have passed with no reply to the quote',
        actions: [
          'A calm, low-pressure follow-up message goes out checking in',
          'The customer is reminded what they asked about, in case life has got in the way',
          'If they are no longer interested, the enquiry is closed cleanly so the team stops chasing it',
        ],
      },
    ],
  };

  const resultsSection: CaseStudyTemplateSection = {
    type: 'results',
    results: [
      {
        title: 'A real share of lost enquiries came back into play',
        improvement: 'The conversion from enquiry to booked clean climbed noticeably',
        description:
          'Most customers were not actually shopping around hard. They just needed someone to come back to them quickly and politely. Once that started happening, far fewer enquiries quietly disappeared.',
      },
      {
        title: 'The office stopped feeling reactive',
        improvement: 'Less scrambling, more steady response',
        description:
          'The part-time office no longer had to drop everything to chase replies. Each enquiry already had a status and a clear next step, so the working day stopped being driven by whatever email had arrived in the last ten minutes.',
      },
      {
        title: 'The owner finally saw the real numbers',
        improvement: 'A clear monthly view of enquiries, replies, and bookings',
        description:
          'Marketing decisions had been based on vibes. Now the owner could see exactly how many enquiries had come from the website, from social, and from referrals, and how many had actually become work.',
      },
    ],
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'Enquiries coming in but quietly going nowhere?',
    body: 'Book a free 20-minute call. We can look at where your enquiries are dropping off and what is most worth fixing first.',
  };

  const sections: CaseStudyTemplateSection[] = [
    { type: 'hero', introHtml: heroIntroHtml },
    problemSection,
    workflowsSection,
    resultsSection,
    { type: 'more' },
    ctaSection,
  ];

  return {
    seo: {
      title: 'Cleaning business case study: turning lost enquiries into booked cleans',
      description:
        'How a Reading domestic cleaning business closed the gap between enquiry and reply, and stopped letting half its leads quietly slip away.',
      canonical: '/case-studies/cleaning-enquiries-half-getting-lost',
      openGraph: {
        title: 'Cleaning business case study: turning lost enquiries into booked cleans',
        description:
          'How a Reading domestic cleaning business closed the gap between enquiry and reply.',
      },
    },
    slug: 'cleaning-enquiries-half-getting-lost',
    title: 'Enquiries were coming in. Half of them were getting lost',
    industryCategory: 'home-services',
    industryLabel: 'Home Services',
    industries: ['landscaping'],
    systems: ['ai-lead-handling'],
    topics: ['lead-response-time', 'follow-up', 'lead-capture'],
    publishDate: '2026-01-30',
    client: 'Brightside Domestic Cleaning',
    location: 'Reading, UK',
    business: 'Brightside Domestic Cleaning',
    duration: '5 weeks',
    completedDate: 'January 2026',
    heroHeadline: 'Enquiries were coming in. Half of them were getting lost',
    keyMetrics: [],
    tags: ['Cleaning', 'Lead Response', 'Follow-Up', 'Local Service'],
    sections,
    templateOverrides: {
      hero: { scenarioBadgeLabel: 'Lead Response' },
      problem: { challengeBadgeLabel: 'What was happening' },
      results: {
        detailedResultsBadgeLabel: 'What improved',
        detailedResultsSectionTitle: 'What changed once enquiries had a real path',
      },
      cta: {
        metaItems: [
          { text: 'Free 20-minute call' },
          { text: 'No pressure' },
          { text: 'Useful for local service businesses' },
        ],
      },
    },
  };
}

export const cleaningBusinessLeadLoss: CaseStudyData = buildCleaningBusinessLeadLoss();
