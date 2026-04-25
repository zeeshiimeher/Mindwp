import type { CaseStudyTemplateSection } from '@/domains/case-studies/templates';

import type { CaseStudyData } from '../types';

function buildHvacEmergencyLeadRouting(): CaseStudyData {
  const heroIntroHtml = (
    <>
      Thermal Comfort Services handles emergency heating and cooling work across Manchester. The
      calls that mattered most often came after the office had shut. A boiler failed in the evening.
      A unit gave up during a hot spell. Someone got home from work, realised it could not wait, and
      dialled. A lot of those calls hit voicemail and went cold before the morning.
    </>
  );

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading: 'Emergency calls were coming in. Most were missed',
    problemDescription: [
      'The office shut at five. The urgent work did not. Evening breakdown calls were common, especially when the weather turned sharp one way or the other.',
      'Voicemail was not really a handoff. Some people left a message. Plenty did not. A few tried again. Others moved on before anyone in the team even knew they had called.',
    ],
    painPoints: [
      'Urgent calls peaked when the office was already closed',
      'Voicemail was doing very little to hold those enquiries',
      'On-call engineers had capacity but were not connected to the call at the right moment',
      'Not every issue needed the same response, but everything arrived the same way',
      'The team could not see clearly how many evening calls were being lost',
    ],
  };

  const workflowsSection: CaseStudyTemplateSection = {
    type: 'workflows',
    title: 'What now happens after the office shuts',
    description:
      'The office still shuts at five. The handoff after that just stopped being a black hole.',
    workflows: [
      {
        trigger: 'A call comes in after the office has closed',
        actions: [
          'The caller hears a short, calm message instead of a generic voicemail',
          'A friendly text goes out within seconds asking what has gone wrong',
          'The caller can reply quickly without having to leave a long message',
        ],
      },
      {
        trigger: 'The reply suggests a real emergency',
        actions: [
          'The details land with the on-call engineer while the job still matters',
          'The engineer can ring back from the road, already knowing what the situation is',
          'The customer hears from a person, not a recording, within a sensible window',
        ],
      },
      {
        trigger: 'The reply suggests the issue can wait until morning',
        actions: [
          'The caller is told they have been seen and roughly when the office will be back in touch',
          'The enquiry is queued for first thing, with the context already attached',
          'No one wakes up an engineer for something that did not need it, and no caller is left wondering',
        ],
      },
    ],
  };

  const resultsSection: CaseStudyTemplateSection = {
    type: 'results',
    results: [
      {
        title: 'Far fewer evening calls vanished straight away',
        improvement: 'Most urgent callers stayed in play instead of being left at voicemail',
        description:
          'The biggest change was not that every caller converted. It was that far fewer of them disappeared in the first minute. The business had a real chance to respond while the problem was still urgent.',
      },
      {
        title: 'Urgent jobs got picked up the same evening',
        improvement: 'Quick enough to matter',
        description:
          'When the issue was clearly urgent, the team could move on it that night instead of waiting until the office reopened. Not every caller answered the text back, but enough did to change the shape of the evening work.',
      },
      {
        title: 'The recovered work showed up in the month',
        improvement: 'Real revenue that had been quietly handed away before',
        description:
          'It was not perfect every week. Some callers still dropped off, and some issues turned out not to be real emergencies. But the business was keeping work it had been losing for years.',
      },
    ],
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'Do evening emergency calls keep going cold?',
    body: 'Book a free 20-minute call. We can look at what happens after your office shuts and where urgent calls are dropping away.',
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
      title: 'HVAC after-hours call case study: more emergency jobs captured',
      description:
        'How a Manchester heating and cooling business stopped losing so many after-hours emergency calls and kept more urgent work in play on the same evening.',
      canonical: '/case-studies/hvac-after-hours-calls-going-cold',
      openGraph: {
        title: 'HVAC after-hours call case study: more emergency jobs captured',
        description:
          'How a Manchester heating and cooling business stopped losing evening emergency calls.',
      },
    },
    slug: 'hvac-after-hours-calls-going-cold',
    title: 'Emergency calls were coming in. Most were missed',
    industryCategory: 'home-services',
    industryLabel: 'Home Services',
    industries: ['hvac'],
    systems: ['ai-lead-handling'],
    topics: ['missed-calls', 'emergency-handling', 'lead-routing'],
    publishDate: '2025-11-01',
    client: 'Thermal Comfort Services',
    location: 'Manchester, UK',
    business: 'Thermal Comfort Services',
    duration: '6 weeks',
    completedDate: 'November 2025',
    heroHeadline: 'Emergency calls were coming in. Most were missed',
    keyMetrics: [],
    tags: ['HVAC', 'After-Hours', 'Emergency Routing', 'Missed Calls'],
    sections,
    templateOverrides: {
      hero: { scenarioBadgeLabel: 'After Hours' },
      problem: { challengeBadgeLabel: 'What was happening' },
      results: {
        detailedResultsBadgeLabel: 'What improved',
        detailedResultsSectionTitle: 'What changed once evening calls were handled properly',
      },
      cta: {
        metaItems: [
          { text: 'Free 20-minute call' },
          { text: 'No pressure' },
          { text: 'Useful for after-hours teams' },
        ],
      },
    },
  };
}

export const hvacEmergencyLeadRouting: CaseStudyData = buildHvacEmergencyLeadRouting();
