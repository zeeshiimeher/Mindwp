import type { CaseStudyTemplateSection } from '@/domains/case-studies/templates';

import type { CaseStudyData } from '../types';

function buildLocksmithLateNightMissedLeads(): CaseStudyData {
  const heroIntroHtml = (
    <>
      Northgate Locksmiths covers Newcastle and the surrounding suburbs. A small two-person
      operation, mostly mobile. The bulk of the urgent work, the lockouts, the snapped keys, the
      jobs people actually pay good money to have sorted right now, came in late evening or in the
      small hours. A lot of those calls never reached anyone.
    </>
  );

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading: 'Calls were coming in late. Most went unanswered',
    problemDescription: [
      'It is half past eleven on a Thursday. Someone is locked out of their flat in the cold. They ring three numbers in quick succession. Whoever picks up first gets the call. The rest get nothing.',
      'Northgate were often the rest. Not because they were not willing to go out, but because the call hit a phone that was not always to hand. By the morning the customer was already sorted, and the work had quietly gone to a competitor.',
    ],
    painPoints: [
      'Late-night calls hit a phone that was not always answered immediately',
      'Voicemail was almost never used by people in a panic',
      'Customers rang three or four numbers and went with the first answer',
      'The team had no record of how many late calls had been missed',
      'Lost work was not loud, it just quietly never showed up',
    ],
  };

  const resultsSection: CaseStudyTemplateSection = {
    type: 'results',
    results: [
      {
        title: 'Late-night callers stopped giving up so quickly',
        improvement: 'A reply went out within seconds of any unanswered call',
        description:
          'When the line was missed, the caller now received a short, calm text saying the team had seen them and would be in touch with an ETA. That single touch was enough for most callers to hold off ringing the next firm.',
      },
      {
        title: 'Real call-outs surfaced fast enough to act on',
        improvement: 'The on-call locksmith could move on a job within minutes of being notified',
        description:
          'A short text exchange surfaced enough to know whether the job was a true lockout or something that could be booked for the morning. The team stopped scrambling and started routing properly.',
      },
      {
        title: 'The owner finally saw the lost work honestly',
        improvement: 'A real number replaced the vague suspicion of slipping calls',
        description:
          'For the first time the owner could see how many calls had come in after hours, how many had been recovered, and what the recovered work was actually worth. It made the case for keeping the after-hours service going easy to defend.',
      },
    ],
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'Late-night calls slipping through to whoever answers first?',
    body: 'Book a free 20-minute call. We can look at how to hold onto more of those calls without anyone in the team needing to stare at a phone all night.',
  };

  const sections: CaseStudyTemplateSection[] = [
    { type: 'hero', introHtml: heroIntroHtml },
    problemSection,
    resultsSection,
    ctaSection,
  ];

  return {
    seo: {
      title: 'Locksmith case study: holding onto more late-night call-outs',
      description:
        'How a Newcastle locksmith stopped losing late-night call-outs to whoever happened to answer first and finally saw the real cost of the missed calls.',
      canonical: '/case-studies/locksmith-late-night-calls-missed',
      openGraph: {
        title: 'Locksmith case study: holding onto more late-night call-outs',
        description: 'How a Newcastle locksmith stopped losing late-night call-outs.',
      },
    },
    slug: 'locksmith-late-night-calls-missed',
    title: 'Calls were coming in late. Most went unanswered',
    industryCategory: 'home-services',
    industryLabel: 'Home Services',
    industries: ['plumbing'],
    systems: ['ai-lead-handling'],
    topics: ['missed-calls', 'emergency-handling', 'lead-response-time'],
    publishDate: '2026-02-05',
    client: 'Northgate Locksmiths',
    location: 'Newcastle, UK',
    business: 'Northgate Locksmiths',
    duration: '4 weeks',
    completedDate: 'February 2026',
    heroHeadline: 'Calls were coming in late. Most went unanswered',
    keyMetrics: [],
    tags: ['Locksmith', 'After-Hours', 'Missed Calls', 'Emergency'],
    sections,
    templateOverrides: {
      hero: { scenarioBadgeLabel: 'After Hours' },
      problem: { challengeBadgeLabel: 'What was happening' },
      results: {
        detailedResultsBadgeLabel: 'What improved',
        detailedResultsSectionTitle: 'What changed once late calls had a reply',
      },
      cta: {
        metaItems: [
          { text: 'Free 20-minute call' },
          { text: 'No pressure' },
          { text: 'Useful for after-hours trades' },
        ],
      },
    },
  };
}

export const locksmithLateNightMissedLeads: CaseStudyData = buildLocksmithLateNightMissedLeads();
