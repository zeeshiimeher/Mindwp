import type { CaseStudyTemplateSection } from '@/domains/case-studies/templates';

import type { CaseStudyData } from '../types';

function buildPlumberEmergencyCallMissed(): CaseStudyData {
  const heroIntroHtml = (
    <>
      Daley &amp; Sons is a small plumbing firm covering the south side of Glasgow. Two engineers on
      the road, one person in the office most days, and a phone that did not stop in the mornings.
      The work was good, the regulars were loyal, and a fair number of new callers simply never got
      through.
    </>
  );

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading: 'They were getting emergency calls. Most never got answered',
    problemDescription: [
      'A burst pipe at half eight in the morning is not a call you wait around for. The caller would try once, hit a busy line, try a second time, and then dial whoever came up next on the search results. By the time the office sat down at the end of the week, nobody could even tell how many calls had been missed.',
      'The team was not slow. They were on calls already. The problem was that nothing happened when the line was busy, and the urgency of a plumbing emergency does not give callers a reason to wait.',
    ],
    painPoints: [
      'Morning peak calls hit a busy line constantly',
      'No follow-up went to anyone who could not get through',
      'The office had no record of how many calls had been missed',
      'Urgent and routine calls vanished into the same silence',
      'Repeat callers gave up and tried the next firm in the list',
    ],
  };

  const resultsSection: CaseStudyTemplateSection = {
    type: 'results',
    results: [
      {
        title: 'Missed callers stopped just disappearing',
        improvement: 'A reply went out within seconds of any call the team could not answer',
        description:
          'The caller got a short message confirming the office had seen them and would be in touch. That single change kept most callers in the conversation long enough for a real callback to land.',
      },
      {
        title: 'Real emergencies surfaced quickly',
        improvement: 'The office could tell within minutes which jobs could not wait',
        description:
          'A short text reply gave the team enough information to spot a no-water or burst-pipe job and route it ahead of routine enquiries. The day stopped running on guesswork.',
      },
      {
        title: 'The owner finally saw the missed call problem honestly',
        improvement: 'Real numbers replaced the vague feeling that calls were being lost',
        description:
          'For the first time the office could see how many calls had come in, how many had been answered first time, and how many had been recovered. The conversation about hiring or rotas became based on something real.',
      },
    ],
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'Phone too busy to catch the morning rush?',
    body: 'Book a free 20-minute call. We can look at how many calls you are quietly losing in the first hour of the day, and what to do about it.',
  };

  const sections: CaseStudyTemplateSection[] = [
    { type: 'hero', introHtml: heroIntroHtml },
    problemSection,
    resultsSection,
    ctaSection,
  ];

  return {
    seo: {
      title: 'Plumber missed call case study: keeping morning emergencies in play',
      description:
        'How a Glasgow plumbing firm stopped losing the morning rush of emergency calls and made sure urgent jobs were spotted within minutes.',
      canonical: '/case-studies/plumber-emergency-calls-mostly-missed',
      openGraph: {
        title: 'Plumber missed call case study: keeping morning emergencies in play',
        description: 'How a Glasgow plumbing firm stopped losing the morning rush of calls.',
      },
    },
    slug: 'plumber-emergency-calls-mostly-missed',
    title: 'They were getting emergency calls. Most never got answered',
    industryCategory: 'home-services',
    industryLabel: 'Home Services',
    industries: ['plumbing'],
    primarySystem: 'lead-response-handling',
    topics: ['missed-calls', 'emergency-handling', 'lead-response-time'],
    publishDate: '2026-01-08',
    client: 'Daley & Sons Plumbing',
    location: 'Glasgow, UK',
    business: 'Daley & Sons Plumbing',
    duration: '5 weeks',
    completedDate: 'January 2026',
    heroHeadline: 'They were getting emergency calls. Most never got answered',
    keyMetrics: [],
    tags: ['Plumbing', 'Emergency Calls', 'Missed Calls', 'Response Time'],
    sections,
    templateOverrides: {
      hero: { scenarioBadgeLabel: 'Missed Calls' },
      problem: { challengeBadgeLabel: 'What was happening' },
      results: {
        detailedResultsBadgeLabel: 'What improved',
        detailedResultsSectionTitle: 'What changed once missed calls had a real handoff',
      },
      cta: {
        metaItems: [
          { text: 'Free 20-minute call' },
          { text: 'No pressure' },
          { text: 'Useful for plumbers' },
        ],
      },
    },
  };
}

export const plumberEmergencyCallMissed: CaseStudyData = buildPlumberEmergencyCallMissed();
