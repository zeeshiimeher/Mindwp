import type { CaseStudyContent, CaseStudyTemplateSection } from '@/domains/case-studies/templates';

import type { CaseStudyData } from '../types';

function buildAutoRepairMissedCallRecovery(): CaseStudyData {
  const heroIntroHtml = (
    <>
      Premier Auto Care is a busy independent garage in Leicester. Most mornings start the same
      way: MOT drop-offs, keys changing hands, somebody asking for a quick look at a warning light,
      and the phone going again while the front desk is already tied up. That was the point where
      new enquiries kept slipping away. Not because the team did not care. They just could not pick
      up every time.
    </>
  );

  const keyMetrics: CaseStudyContent['keyMetrics'] = [
    {
      label: 'Missed callers reached later',
      value: 'Most of them',
      icon: 'Phone',
      color: 'case-study-accent--success',
    },
    {
      label: 'First reply speed',
      value: 'Much quicker',
      icon: 'Clock',
      color: 'case-study-accent--primary',
    },
    {
      label: 'Extra booked work',
      value: 'Around 8-10 jobs a week',
      icon: 'UserPlus',
      color: 'case-study-accent--purple',
    },
    {
      label: 'Recovered revenue',
      value: 'Around GBP3k-GBP4k a month',
      icon: 'TrendingUp',
      color: 'case-study-accent--amber',
    },
  ];

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading: 'The phone kept ringing while the ramps were full',
    problemDescription: [
      'The garage was strongest in the first two hours of the day and weakest at answering the phone in those same two hours. Cars were arriving, people wanted updates, and the front desk had one pair of hands.',
      'Some callers rang back. Plenty did not. A few left voicemails, but those often sat there until later on. By then the urgent ones had usually tried somewhere else.',
    ],
    painPoints: [
      'Morning drop-off was the main pressure point',
      'Missed calls were common, but nobody could see the full picture',
      'Voicemails were checked late when the desk calmed down',
      'Breakdown and urgent repair callers moved on quickly',
      'The team relied on memory more than a proper callback list',
    ],
  };

  const workflowsSection: CaseStudyTemplateSection = {
    type: 'workflows',
    badge: 'What Changed',
    title: 'Missed calls stopped disappearing into the morning rush',
    description:
      'Instead of a missed call turning into guesswork later, the garage had a simple way to respond while the desk was still busy.',
    workflows: [
      {
        trigger: 'A caller rang and nobody could answer',
        actions: [
          'A short text went out straight away saying the garage had seen the call',
          'The missed call landed in one place instead of being left to memory',
          'If the caller texted back with something urgent, it was easier to spot fast',
        ],
      },
      {
        trigger: 'The desk finally had breathing room',
        actions: [
          'The callback list was already there, in order, with context',
          'Staff could work through it without digging through voicemails',
          'A few callers still needed a second try, but far fewer were lost completely',
        ],
      },
    ],
  };

  const resultsSection: CaseStudyTemplateSection = {
    type: 'results',
    results: [
      {
        title: 'More missed callers actually came back into the conversation',
        improvement: 'Most of the ones they would have lost before were at least reached properly',
        description:
          'The biggest shift was simple: a missed call no longer meant silence. People got a quick acknowledgement, and the garage had a real callback trail instead of hoping someone remembered later.',
      },
      {
        title: 'Replies happened sooner, while the job was still live',
        improvement: 'Faster enough to matter',
        description:
          'They were getting back to people much quicker than before. Not instantly every single time, but usually fast enough that the enquiry was still warm and worth saving.',
      },
      {
        title: 'The extra work was noticeable without feeling exaggerated',
        improvement: 'Around GBP3k-GBP4k a month in recovered jobs',
        description:
          'It was not a perfect line upward every week. Some callers still never replied. But enough did that the recovered work was obvious in the workshop diary and in the month-end numbers.',
      },
    ],
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'Missing calls during the busy part of the day?',
    body: 'Book a free 20-minute call and we can look at what happens when your phone rings at the wrong moment and how to stop those enquiries going cold.',
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
        title: 'Garage missed call case study: more enquiries recovered',
        description:
        'How a Leicester garage stopped losing so many callers during the morning rush and recovered around GBP3k-GBP4k a month in work that had been slipping away.',
        canonical: '/case-studies/garage-morning-rush-missed-calls',
        openGraph: {
          title: 'Garage missed call case study: more enquiries recovered',
          description:
            'How a Leicester garage stopped losing so many callers during the morning rush and recovered work that had been slipping away.',
        },
      },
      slug: 'garage-morning-rush-missed-calls',
      title: 'The phone kept ringing while the ramps were full',
      industryCategory: 'automotive',
      industryLabel: 'Automotive',
      industries: ['auto-repair'],
      systems: ['ai-lead-handling'],
      topics: ['missed-calls', 'lead-response-time', 'lead-capture'],
      publishDate: '2026-02-01',
      client: 'Premier Auto Care',
      location: 'Leicester, UK',
      business: 'Premier Auto Care',
      duration: '9 weeks',
      completedDate: 'February 2026',
      heroHeadline: 'The phone kept ringing while the ramps were full',
      keyMetrics: keyMetrics.map(metric => ({
        value: metric.value,
        label: metric.label,
        ...(metric.color ? { color: metric.color } : {}),
      })),
      tags: ['Missed Call Recovery', 'Auto Repair', 'Lead Capture', 'SMS Follow-Up', 'Automotive'],
      sections,
      templateOverrides: {
        hero: { scenarioBadgeLabel: 'Morning Pressure Point' },
        problem: { challengeBadgeLabel: 'What Was Going Wrong' },
        workflows: { workflowsBadgeLabel: 'What Changed' },
        results: {
          detailedResultsBadgeLabel: 'What Improved',
          detailedResultsSectionTitle: 'What Changed Once Missed Calls Were Handled Better',
        },
        cta: {
          metaItems: [
            { text: 'Free 20-minute call' },
            { text: 'No pressure' },
            { text: 'Useful for busy garages' },
          ],
        },
      }
  };
}

export const autoRepairMissedCallRecovery: CaseStudyData = buildAutoRepairMissedCallRecovery();
