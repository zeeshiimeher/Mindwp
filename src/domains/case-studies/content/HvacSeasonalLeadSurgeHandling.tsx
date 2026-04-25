import type { CaseStudyTemplateSection } from '@/domains/case-studies/templates';

import type { CaseStudyData } from '../types';

function buildHvacSeasonalLeadSurgeHandling(): CaseStudyData {
  const heroIntroHtml = (
    <>
      AirFlow Mechanical is a residential heating and cooling business in Nottingham. Most of the
      year the volume of calls was steady and manageable. Then the first proper cold snap of autumn
      arrived, or the first week of summer heat, and the phone simply did not stop. The office of
      two could not pick up fast enough, and the work went to whoever could.
    </>
  );

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading: 'Peak season came. They couldn\u2019t keep up',
    problemDescription: [
      'Most weeks the team handled call volume comfortably. Twice a year, demand more than doubled in a few days. The phone rang while the team was already on a call, and a chunk of those callers did not leave a voicemail at all.',
      'The ones who did leave a message got chased back hours later. By then the urgency had moved on. People with no heating in October will not wait until tomorrow afternoon. The business felt those weeks not just in lost work but in pure frustration.',
    ],
    painPoints: [
      'Call volume doubled or tripled within days of a weather change',
      'The two-person office could not physically answer everything',
      'Voicemails got checked too late to be useful',
      'Urgent callers and routine callers landed in the same silence',
      'Nobody could see how many leads were being lost during the surge',
    ],
  };

  const resultsSection: CaseStudyTemplateSection = {
    type: 'results',
    results: [
      {
        title: 'Surge weeks stopped feeling like a write-off',
        improvement:
          'Most callers stayed in the conversation instead of moving on within the first hour',
        description:
          'When the line was busy, the caller now got a quick text saying the office had seen them and would be in touch with a callback time. That small reply changed the temperature of the whole week. Callers who would have hung up and tried the next number on the search results stuck around because someone had at least said hello.',
      },
      {
        title: 'Real emergencies got through faster',
        improvement: 'No-heat calls were spotted within minutes, not hours',
        description:
          'A short text exchange asked the caller a couple of questions, so the team knew which calls were a no-heat emergency and which could wait until later in the day. The urgent jobs floated to the top of the queue and got dealt with first instead of being buried in voicemail.',
      },
      {
        title: 'The team came out of peak weeks intact',
        improvement: 'Less burnout in the office, more steady response on the road',
        description:
          'A predictable list to work through is very different from a phone that will not stop. The same two people in the office could handle a much heavier week without the feeling of drowning, and the engineers stopped finishing the day already braced for tomorrow.',
      },
    ],
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'Peak season turning your phone into a problem?',
    body: 'Book a free 20-minute call. We can look at what your last surge actually cost and how to keep more of those calls in play next time.',
  };

  const sections: CaseStudyTemplateSection[] = [
    { type: 'hero', introHtml: heroIntroHtml },
    problemSection,
    resultsSection,
    { type: 'more' },
    ctaSection,
  ];

  return {
    seo: {
      title: 'HVAC peak season case study: more calls held in play during surges',
      description:
        'How a Nottingham heating and cooling business stopped losing calls during peak season and made surge weeks feel manageable for the office team.',
      canonical: '/case-studies/hvac-peak-season-couldnt-keep-up',
      openGraph: {
        title: 'HVAC peak season case study: more calls held in play during surges',
        description:
          'How a Nottingham heating and cooling business stopped losing calls during peak season.',
      },
    },
    slug: 'hvac-peak-season-couldnt-keep-up',
    title: 'Peak season came. They couldn\u2019t keep up',
    industryCategory: 'home-services',
    industryLabel: 'Home Services',
    industries: ['hvac'],
    systems: ['ai-lead-handling'],
    topics: ['emergency-handling', 'missed-calls', 'lead-capture'],
    publishDate: '2025-11-15',
    client: 'AirFlow Mechanical',
    location: 'Nottingham, UK',
    business: 'AirFlow Mechanical',
    duration: '7 weeks',
    completedDate: 'November 2025',
    heroHeadline: 'Peak season came. They couldn\u2019t keep up',
    keyMetrics: [],
    tags: ['HVAC', 'Peak Season', 'Surge', 'Missed Calls'],
    sections,
    templateOverrides: {
      hero: { scenarioBadgeLabel: 'Peak Season' },
      problem: { challengeBadgeLabel: 'What was happening' },
      results: {
        detailedResultsBadgeLabel: 'What improved',
        detailedResultsSectionTitle: 'What changed once the surge stopped running the office',
      },
      cta: {
        metaItems: [
          { text: 'Free 20-minute call' },
          { text: 'No pressure' },
          { text: 'Useful for seasonal trades' },
        ],
      },
    },
  };
}

export const hvacSeasonalLeadSurgeHandling: CaseStudyData = buildHvacSeasonalLeadSurgeHandling();
