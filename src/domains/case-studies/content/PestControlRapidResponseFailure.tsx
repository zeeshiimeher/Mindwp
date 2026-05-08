import type { CaseStudyTemplateSection } from '@/domains/case-studies/templates';

import type { CaseStudyData } from '../types';

function buildPestControlRapidResponseFailure(): CaseStudyData {
  const heroIntroHtml = (
    <>
      Sentinel Pest Control covers Birmingham and the surrounding towns. Two technicians on the
      road, one on the office line. The calls that came in were almost always urgent. Rats in a
      restaurant kitchen at lunchtime. Wasps in a nursery. Bedbugs in a hotel turning rooms over.
      None of those callers were going to wait for a callback tomorrow.
    </>
  );

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading: 'People needed help urgently. They couldn\u2019t get through',
    problemDescription: [
      'The phone in the office was busy a lot of the day. The owner was often on a job. When a new caller hit voicemail, they did not leave one. They rang the next number on Google.',
      'The team knew they were losing work. They had no real picture of how much. The week ended, the diary was full anyway, and the lost calls quietly piled up unseen.',
    ],
    painPoints: [
      'Urgent callers refused to wait for a callback',
      'The office line was often busy at the worst times',
      'Voicemail was almost never used by people in a hurry',
      'The team had no record of which calls had been lost',
      'Repeat callers gave up after one busy tone',
    ],
  };

  const processSection: CaseStudyTemplateSection = {
    type: 'process',
    howWeDidIt: [
      {
        phase: 'Week 1',
        title: 'A real look at where calls were being lost',
        description:
          'We sat with the owner and pulled the call log for the previous month. The picture was uncomfortable. A meaningful share of urgent calls were not even leaving a voicemail. The team had a real number to work from for the first time.',
        duration: 'A morning on site',
      },
      {
        phase: 'Weeks 2-3',
        title: 'A reply for every missed call',
        description:
          'When a call hit a busy line or went unanswered, the caller got a quick text within seconds saying the team had seen them and asking what they needed help with. Most callers replied straight away.',
        duration: 'Two weeks to settle',
      },
      {
        phase: 'Weeks 4-5',
        title: 'A clear urgency triage',
        description:
          'A short text exchange asked enough questions to tell the team which calls were a same-day emergency and which could be booked for the next day. Real emergencies stopped being buried under routine ones.',
        duration: 'A fortnight',
      },
      {
        phase: 'Week 6',
        title: 'A weekly recovered-calls view',
        description:
          'A short weekly summary showed how many calls had been missed, how many had been recovered, and which call patterns kept repeating. The owner could finally see what the firm was holding onto and what it was still losing.',
        duration: 'A few hours to set up',
      },
    ],
  };

  const testimonialSection: CaseStudyTemplateSection = {
    type: 'testimonial',
    testimonial: {
      quote:
        'I had no idea how many calls we were losing until we actually had a number for it. The text-back changed the game. People who used to ring the next firm in the list now wait for us, because at least someone has said hello.',
      author: 'Marcus Caine',
      role: 'Owner, Sentinel Pest Control',
    },
  };

  const resultsSection: CaseStudyTemplateSection = {
    type: 'results',
    results: [
      {
        title: 'Most missed calls stayed in the conversation',
        improvement: 'A clear majority of unanswered callers responded to the text reply',
        description:
          'The change was not in how fast the team picked up the phone. It was in what happened when they could not. A short reply within seconds was enough for most callers to wait instead of dialling the next number.',
      },
      {
        title: 'Real emergencies got handled first',
        improvement: 'Same-day emergencies were spotted within minutes',
        description:
          'The triage by text meant the team could see at a glance which calls had to be slotted in today and which could be booked for tomorrow. Less juggling on the road, fewer angry callers later.',
      },
      {
        title: 'The owner saw the lost work honestly',
        improvement: 'A real weekly number replaced the vague feeling of slipping calls',
        description:
          'Once the recovered calls were on a single screen, decisions about hiring, hours, and routing got easier. The conversation moved from worry to something measurable.',
      },
    ],
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'Urgent calls reaching voicemail and never coming back?',
    body: 'Book a free 20-minute call. We can look at how many calls you are quietly losing and what to do about it.',
  };

  const sections: CaseStudyTemplateSection[] = [
    { type: 'hero', introHtml: heroIntroHtml },
    problemSection,
    processSection,
    testimonialSection,
    resultsSection,
    ctaSection,
  ];

  return {
    seo: {
      title: 'Pest control case study: keeping urgent callers in the conversation',
      description:
        'How a Birmingham pest control firm stopped losing urgent calls to voicemail and built a real picture of recovered work each week.',
      canonical: '/case-studies/pest-control-urgent-calls-cant-get-through',
      openGraph: {
        title: 'Pest control case study: keeping urgent callers in the conversation',
        description: 'How a Birmingham pest control firm stopped losing urgent calls to voicemail.',
      },
    },
    slug: 'pest-control-urgent-calls-cant-get-through',
    title: 'People needed help urgently. They couldn\u2019t get through',
    industryCategory: 'home-services',
    industryLabel: 'Home Services',
    industries: ['roofing'],
    systems: ['ai-lead-handling'],
    topics: ['missed-calls', 'emergency-handling', 'lead-response-time'],
    publishDate: '2026-02-02',
    client: 'Sentinel Pest Control',
    location: 'Birmingham, UK',
    business: 'Sentinel Pest Control',
    duration: '6 weeks',
    completedDate: 'February 2026',
    heroHeadline: 'People needed help urgently. They couldn\u2019t get through',
    keyMetrics: [],
    tags: ['Pest Control', 'Missed Calls', 'Emergency', 'Response'],
    sections,
    templateOverrides: {
      hero: { scenarioBadgeLabel: 'Missed Calls' },
      problem: { challengeBadgeLabel: 'What was happening' },
      results: {
        detailedResultsBadgeLabel: 'What improved',
        detailedResultsSectionTitle: 'What changed once missed calls had a real reply',
      },
      cta: {
        metaItems: [
          { text: 'Free 20-minute call' },
          { text: 'No pressure' },
          { text: 'Useful for urgent-call trades' },
        ],
      },
    },
  };
}

export const pestControlRapidResponseFailure: CaseStudyData =
  buildPestControlRapidResponseFailure();
