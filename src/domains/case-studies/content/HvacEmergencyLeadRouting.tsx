import type { CaseStudyContent, CaseStudyTemplateSection } from '@/domains/case-studies/templates';

import type { CaseStudyData } from '../types';

function buildHvacEmergencyLeadRouting(): CaseStudyData {
  const heroIntroHtml = (
    <>
      Thermal Comfort Services handles emergency heating and cooling work across Manchester. The
      calls that mattered most often came after the office had shut. A boiler failed in the evening.
      A unit gave up during a hot spell. Someone got home from work and realised it could not wait
      until tomorrow. Too many of those calls were hitting voicemail and going cold before anybody
      could do anything useful with them.
    </>
  );

  const keyMetrics: CaseStudyContent['keyMetrics'] = [
    {
      label: 'After-hours calls kept in play',
      value: 'Most of them',
      icon: 'ShieldCheck',
      color: 'case-study-accent--success',
    },
    {
      label: 'Evening reply speed',
      value: 'Same evening for urgent jobs',
      icon: 'Clock',
      color: 'case-study-accent--primary',
    },
    {
      label: 'Voicemail dead ends',
      value: 'Far fewer',
      icon: 'PhoneOff',
      color: 'case-study-accent--purple',
    },
    {
      label: 'Emergency work kept',
      value: 'Around GBP5k-GBP7k a month',
      icon: 'TrendingUp',
      color: 'case-study-accent--amber',
    },
  ];

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading: 'Emergency calls kept coming in after the office had closed',
    problemDescription: [
      'The office shut, but the urgent work did not. Evening breakdown calls were common, especially when the weather turned sharp one way or the other.',
      'Voicemail was not really a handoff. It was mostly a delay. Some people left a message. Plenty did not. A few tried again. Others moved on before the team even knew they had called.',
    ],
    painPoints: [
      'Urgent calls peaked when the office was already closed',
      'Voicemail was doing very little to hold those enquiries',
      'The team could not see clearly how many evening calls were being lost',
      'On-call capacity existed, but it was not connected to the call at the right moment',
      'Not every issue needed the same response, but everything arrived the same way',
    ],
  };

  const solutionSection: CaseStudyTemplateSection = {
    type: 'solution',
    solutionHeading: 'They changed what happened the moment an evening call was missed',
    solutionDescription:
      'Instead of leaving the caller at a dead end, the business put a simple evening handoff in place. Urgent jobs could be picked up quickly, and the rest could wait until the next morning without disappearing.',
    whatWeDid: [
      {
        title: 'Evening call detection',
        description:
          'Calls outside office hours were treated differently instead of being dumped into the same generic voicemail.',
        icon: 'Phone',
      },
      {
        title: 'A short text back to the caller',
        description:
          'People got a quick message asking what had gone wrong, which made it easier to tell what was urgent and what could wait.',
        icon: 'MessageSquare',
      },
      {
        title: 'Clearer handoff to the on-call engineer',
        description:
          'If it looked urgent, the details reached the on-call engineer while the job still mattered.',
        icon: 'MapPin',
      },
      {
        title: 'A proper record of what came in',
        description:
          'The team could finally see evening call volume instead of guessing from memory and scraps of voicemail.',
        icon: 'Database',
      },
    ],
  };

  const resultsSection: CaseStudyTemplateSection = {
    type: 'results',
    results: [
      {
        title: 'Far fewer evening calls disappeared straight away',
        improvement: 'Most urgent callers were kept in play instead of being left at voicemail',
        description:
          'The biggest change was not that every caller converted. It was that far fewer of them vanished in the first minute. The business had a real chance to respond while the problem was still urgent.',
      },
      {
        title: 'Urgent jobs were being picked up the same evening',
        improvement: 'Quick enough to matter',
        description:
          'When the issue was clearly urgent, the team could move on it that night instead of waiting until the office reopened. Not every caller answered the text back, but enough did to change the shape of the evening work.',
      },
      {
        title: 'The recovered work showed up in the month, not just in theory',
        improvement: 'Around GBP5k-GBP7k a month stayed in reach',
        description:
          'It was not perfect every week. Some callers still dropped off, and some issues turned out not to be real emergencies. But the business was keeping work it had been handing away before.',
      },
    ],
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'Do evening emergency calls keep going cold?',
    body: 'Book a free 20-minute call and we can look at what happens after your office shuts and where urgent calls are dropping away.',
  };

  const sections: CaseStudyTemplateSection[] = [
    { type: 'hero', introHtml: heroIntroHtml },
    problemSection,
    solutionSection,
    resultsSection,
    { type: 'more' },
    ctaSection,
  ];

  return {
    seo: {
      title: 'HVAC after-hours call case study: more emergency jobs captured',
      description:
        'How a Manchester HVAC company stopped losing so many after-hours emergency calls and kept more urgent work in play on the same evening.',
      canonical: '/case-studies/hvac-after-hours-calls-going-cold',
      openGraph: {
        title: 'HVAC after-hours call case study: more emergency jobs captured',
        description:
          'How a Manchester HVAC company stopped losing so many evening emergency calls and kept more urgent work in play.',
      },
    },
    slug: 'hvac-after-hours-calls-going-cold',
    title: 'Emergency calls kept coming in after the office had closed',
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
    heroHeadline: 'Emergency calls kept coming in after the office had closed',
    keyMetrics: keyMetrics.map(metric => ({
      value: metric.value,
      label: metric.label,
      ...(metric.color ? { color: metric.color } : {}),
    })),
    tags: ['Emergency Routing', 'After-Hours Leads', 'HVAC', 'Call Triage', 'Lead Recovery'],
    sections,
    templateOverrides: {
      hero: { scenarioBadgeLabel: 'After Hours' },
      problem: { challengeBadgeLabel: 'What Was Happening' },
      solution: { solutionBadgeLabel: 'What They Changed' },
      results: {
        detailedResultsBadgeLabel: 'What Improved',
        detailedResultsSectionTitle: 'What Changed Once Evening Calls Were Handled Better',
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
