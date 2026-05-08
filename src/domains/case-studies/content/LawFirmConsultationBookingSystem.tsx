import type { CaseStudyTemplateSection } from '@/domains/case-studies/templates';

import type { CaseStudyData } from '../types';

function buildLawFirmConsultationBookingSystem(): CaseStudyData {
  const heroIntroHtml = (
    <>
      Mercer Legal is a boutique family-law practice in Edinburgh. Most new matters started with a
      free 20-minute consultation. The diary was usually full a week or two ahead, which on the
      surface looked like a healthy pipeline of new business. The reality on a Monday morning was a
      lot of empty meeting rooms and a lot of unanswered follow-ups.
    </>
  );

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading: 'Consultations were booked. Most didn\u2019t turn into clients',
    problemDescription: [
      'Family-law enquiries are heavy. People book the call when something has just happened, then spend the next ten days second-guessing whether to actually have the conversation. By the day of the appointment, a lot of them had quietly cooled off.',
      'When the call did happen, the next step was a paid scoping meeting. That step often did not survive the gap between the consultation ending and the first follow-up. The same pattern was repeating most weeks: a busy diary, a quiet revenue line.',
    ],
    painPoints: [
      'Long gaps between booking and the consultation cooled people off',
      'No real preparation went out before the call, so it started cold',
      'After the call, the follow-up was inconsistent and often slow',
      'Clients felt they had explained everything, then heard nothing',
      'Solicitors had no view of which consultations were still warm',
    ],
  };

  const workflowsSection: CaseStudyTemplateSection = {
    type: 'workflows',
    title: 'What started happening around each consultation',
    description:
      'The first call was already strong. The work was in the days before and the days after \u2014 where most of the drop-off was happening. Each consultation now had a calm sequence sitting around it.',
    workflows: [
      {
        trigger: 'Consultation is booked through the website or by reception',
        actions: [
          'A short prep message goes out a few days before the call',
          'It explains what to bring, what will be discussed, and what the next step looks like',
          'The client is told who they will be speaking with and roughly how long the call will last',
        ],
      },
      {
        trigger: 'It is the day before the consultation',
        actions: [
          'A measured reminder goes out giving the client the option to confirm or move the slot',
          'If they confirm, the diary is marked accordingly so reception is not chasing',
          'If they need to move it, they can do so without ringing in and queuing on the line',
        ],
      },
      {
        trigger: 'Consultation has just finished',
        actions: [
          'The client receives a short, plain English note that evening or the following morning',
          'It summarises what was discussed and what the next step would look like',
          'A few days later a measured nudge goes out to anyone still thinking, with no pressure',
        ],
      },
    ],
  };

  const resultsSection: CaseStudyTemplateSection = {
    type: 'results',
    results: [
      {
        title: 'Fewer empty meeting rooms on a Monday',
        improvement:
          'Clients turned up for the call they had booked instead of quietly disappearing',
        description:
          'The reminders and the prep message did most of the work. People stopped feeling like they were going into something blind, and the no-show rate on consultations eased noticeably.',
      },
      {
        title: 'More consultations turning into instructed work',
        improvement: 'A meaningful lift in the call-to-client conversion',
        description:
          'The summary the same evening was the part that mattered most. Clients had the next step in their inbox before doubt set in, and a fair few moved forward who would have drifted away under the old pattern.',
      },
      {
        title: 'Solicitors stopped writing off the in-between days',
        improvement: 'The week between the call and the next decision stopped feeling like a gap',
        description:
          'It was not every consultation, and family law will always have people who decide it is not the right time. But the people who were ready stopped getting lost in the silence.',
      },
    ],
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'Lots of consultations, not enough instructions?',
    body: 'Book a free 20-minute call. We can look at where your consultations are losing momentum and how to keep more of them moving forward.',
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
      title: 'Law firm consultation case study: more calls becoming clients',
      description:
        'How an Edinburgh family-law firm tightened what happened around each free consultation and started losing fewer clients in the gap.',
      canonical: '/case-studies/law-firm-consultations-not-becoming-clients',
      openGraph: {
        title: 'Law firm consultation case study: more calls becoming clients',
        description:
          'How an Edinburgh family-law firm tightened what happened around each free consultation.',
      },
    },
    slug: 'law-firm-consultations-not-becoming-clients',
    title: 'Consultations were booked. Most didn\u2019t turn into clients',
    industryCategory: 'professional-services',
    industryLabel: 'Professional Services',
    industries: ['law-firm'],
    systems: ['smart-website-systems'],
    topics: ['booking-systems', 'follow-up', 'conversion-optimization'],
    publishDate: '2026-02-10',
    client: 'Mercer Legal',
    location: 'Edinburgh, UK',
    business: 'Mercer Legal',
    duration: '8 weeks',
    completedDate: 'February 2026',
    heroHeadline: 'Consultations were booked. Most didn\u2019t turn into clients',
    keyMetrics: [],
    tags: ['Law Firm', 'Consultations', 'Family Law', 'Client Conversion'],
    sections,
    templateOverrides: {
      hero: { scenarioBadgeLabel: 'Consultation Conversion' },
      problem: { challengeBadgeLabel: 'What was happening' },
      results: {
        detailedResultsBadgeLabel: 'What improved',
        detailedResultsSectionTitle: 'What changed once the gap around the call was filled',
      },
      cta: {
        metaItems: [
          { text: 'Free 20-minute call' },
          { text: 'No pressure' },
          { text: 'Useful for boutique law firms' },
        ],
      },
    },
  };
}

export const lawFirmConsultationBookingSystem: CaseStudyData =
  buildLawFirmConsultationBookingSystem();
