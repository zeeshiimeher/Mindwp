import type { CaseStudyTemplateSection } from '@/domains/case-studies/templates';

import type { CaseStudyData } from '../types';

function buildAutoRepairMissedCallRecovery(): CaseStudyData {
  const heroIntroHtml = (
    <>
      Premier Auto Care is a busy independent garage in Leicester. Mornings ran the same way most
      days. MOTs being dropped off at the counter. Keys handed across. Someone already half under a
      bonnet. And the phone, of course, going while every pair of hands was already on a car.
    </>
  );

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading: 'The phone kept ringing while they were under the hood',
    problemDescription: [
      'On paper the diary looked fine. In practice, the loudest hours of the day were also the hours nobody could pick up. A few callers tried again later. Most just moved on.',
      'Voicemails got listened to once the front desk had a breather. By then the urgent ones had usually already rung the next garage on the list.',
    ],
    painPoints: [
      'Drop-off hours doubled as the busiest call window',
      'Voicemail felt like a dead end to anyone who needed help that day',
      'Nobody actually knew how many callers they were losing',
      'Urgent jobs and routine MOT bookings hit the same silence',
    ],
  };

  const workflowsSection: CaseStudyTemplateSection = {
    type: 'workflows',
    title: 'What started happening when the phone went unanswered',
    description:
      'They stopped letting missed calls disappear into the morning rush. A small handoff sat behind every call so the garage could still recover the conversation.',
    workflows: [
      {
        trigger: 'Caller rings during a busy ramp hour and nobody picks up',
        actions: [
          'A short text goes back to the caller saying the garage saw the call',
          'The caller can text back what the issue is or when they need it in',
          'The missed call lands in one shared callback list with the context attached',
        ],
      },
      {
        trigger: 'Caller mentions a breakdown, warning light, or urgent fault',
        actions: [
          'The front desk sees it flagged at the top of the callback list',
          'Whoever is free rings them back first, before the routine bookings',
          'If they are still on the road, the garage can fit them in the same morning',
        ],
      },
      {
        trigger: 'Morning rush settles down around half past ten',
        actions: [
          'The team works through the callback list in order',
          'Every caller has been at least acknowledged, no more starting from voicemail',
          'Anything that still feels off goes on a follow-up note for the next day',
        ],
      },
    ],
  };

  const resultsSection: CaseStudyTemplateSection = {
    type: 'results',
    results: [
      {
        title: 'Missed callers stopped going completely silent',
        improvement: 'Most of the people they would have lost were at least reached',
        description:
          'A missed call no longer meant the caller heard nothing back. The garage had a real chance to save the conversation while the job still mattered.',
      },
      {
        title: 'Replies happened while the job was still live',
        improvement: 'Quick enough to matter that morning',
        description:
          'They were getting back to people much sooner than before. Not in seconds every time, but usually fast enough that the caller had not yet rung somewhere else.',
      },
      {
        title: 'The recovered work showed up in the diary',
        improvement: 'Around eight to ten extra jobs in a normal week',
        description:
          'Some callers still never replied. Some texts came back about issues that turned out not to be urgent. But enough work came back that it was obvious in the workshop diary and at the end of the month.',
      },
    ],
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'Missing calls during the busiest part of the day?',
    body: 'Book a free 20-minute call. We can look at what happens when your phone rings at the wrong moment and where those callers are going.',
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
      title: 'Garage missed call case study: more enquiries recovered',
      description:
        'How a Leicester garage stopped losing so many callers during the morning rush and recovered work that had been quietly slipping away.',
      canonical: '/case-studies/garage-morning-rush-missed-calls',
      openGraph: {
        title: 'Garage missed call case study: more enquiries recovered',
        description:
          'How a Leicester garage stopped losing so many callers during the morning rush.',
      },
    },
    slug: 'garage-morning-rush-missed-calls',
    title: 'The phone kept ringing while they were under the hood',
    industryCategory: 'automotive',
    industryLabel: 'Automotive',
    industries: ['auto-repair'],
    primarySystem: 'lead-response-handling',
    topics: ['missed-calls', 'lead-response-time', 'lead-capture'],
    publishDate: '2026-02-01',
    client: 'Premier Auto Care',
    location: 'Leicester, UK',
    business: 'Premier Auto Care',
    duration: '9 weeks',
    completedDate: 'February 2026',
    heroHeadline: 'The phone kept ringing while they were under the hood',
    keyMetrics: [],
    tags: ['Missed Calls', 'Auto Repair', 'Lead Recovery', 'Garage', 'Morning Rush'],
    sections,
    templateOverrides: {
      hero: { scenarioBadgeLabel: 'Morning Rush' },
      problem: { challengeBadgeLabel: 'What was happening' },
      results: {
        detailedResultsBadgeLabel: 'What improved',
        detailedResultsSectionTitle: 'What changed once missed calls were handled properly',
      },
      cta: {
        metaItems: [
          { text: 'Free 20-minute call' },
          { text: 'No pressure' },
          { text: 'Useful for busy garages' },
        ],
      },
    },
  };
}

export const autoRepairMissedCallRecovery: CaseStudyData = buildAutoRepairMissedCallRecovery();
