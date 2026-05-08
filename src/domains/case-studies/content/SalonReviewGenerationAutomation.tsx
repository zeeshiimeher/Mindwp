import type { CaseStudyTemplateSection } from '@/domains/case-studies/templates';

import type { CaseStudyData } from '../types';

function buildSalonReviewGenerationAutomation(): CaseStudyData {
  const heroIntroHtml = (
    <>
      Saint Avenue is a small hair and colour salon in Leeds. Chairs full most days. Regulars
      walking back in every six to eight weeks. The team had a real reputation among the people who
      had been in. None of that was visible to the people who had not. A new client searching for a
      salon nearby saw a Google profile with a handful of reviews, most of them old. Two of the
      bigger competitors looked busier and better-loved on the page, even though the work in the
      chair did not back that up.
    </>
  );

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading: 'They were doing great work. Nobody was seeing it',
    problemDescription: [
      'Reviews had become an accidental task. The team would mention it sometimes. The receptionist would mean to ask, the moment would pass. Happy clients walked out, paid, smiled, and went home. The rest of the world never heard about any of it.',
      'It was not a service problem. It was a quiet visibility problem, and quiet problems are the easiest ones to live with for years.',
    ],
    painPoints: [
      'New clients judged the salon by a quiet, dated Google profile',
      'Reviews depended on whoever happened to remember to ask',
      'The best moment to ask had already passed by the time the client paid',
      'Salons with weaker work were ranking better simply because they asked',
      'Nobody could really see how often clients were being asked at all',
    ],
  };

  const resultsSection: CaseStudyTemplateSection = {
    type: 'results',
    results: [
      {
        title: 'The Google profile started to look like the actual salon',
        improvement: 'A steady trickle of new, recent reviews instead of a handful of dated ones',
        description:
          'Once a calm, friendly ask started going out shortly after the appointment, with a direct link straight to the right place, the first thing a new client saw stopped lagging behind reality. The work that was already happening in the chair began to show up in public.',
      },
      {
        title: 'New clients started mentioning the reviews',
        improvement: 'The walk-in conversations felt warmer right from the door',
        description:
          'People who came in for the first time would say they had read good things, or had picked the salon over another after looking at the recent reviews. That was a conversation the team had not heard much before. A quiet heads-up went out if a client did not seem completely happy, so the salon usually heard about it first instead of finding out from a public review.',
      },
      {
        title: 'Asking stopped being awkward',
        improvement: 'The ask happened on its own, the team did not have to remember',
        description:
          'Reception got to focus on the people in front of them instead of trying to bring up reviews mid-checkout. The clients who wanted to leave a few words now had an easy way to do it from their sofa later that evening, not in front of the till with a queue behind them.',
      },
    ],
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'Doing great work but the Google page does not show it?',
    body: 'Book a free 20-minute call. We can look at how to get the right ask in front of your happy clients without it feeling like marketing.',
  };

  const sections: CaseStudyTemplateSection[] = [
    { type: 'hero', introHtml: heroIntroHtml },
    problemSection,
    resultsSection,
    ctaSection,
  ];

  return {
    seo: {
      title: 'Salon review case study: a Google profile that finally matches the salon',
      description:
        'How a Leeds hair salon stopped letting strong work go unseen on Google and built a steady stream of recent reviews from happy clients.',
      canonical: '/case-studies/salon-great-work-going-unseen',
      openGraph: {
        title: 'Salon review case study: a Google profile that finally matches the salon',
        description: 'How a Leeds hair salon stopped letting strong work go unseen on Google.',
      },
    },
    slug: 'salon-great-work-going-unseen',
    title: 'They were doing great work. Nobody was seeing it',
    industryCategory: 'beauty-personal-care',
    industryLabel: 'Beauty & Personal Care',
    industries: ['hair-salon'],
    systems: ['reputation-review'],
    topics: ['review-generation', 'google-business-profile', 'reputation-monitoring'],
    publishDate: '2026-02-05',
    client: 'Saint Avenue',
    location: 'Leeds, UK',
    business: 'Saint Avenue',
    duration: '5 weeks',
    completedDate: 'February 2026',
    heroHeadline: 'They were doing great work. Nobody was seeing it',
    keyMetrics: [],
    tags: ['Salon', 'Reviews', 'Reputation', 'Hair Salon'],
    sections,
    templateOverrides: {
      hero: { scenarioBadgeLabel: 'Reviews' },
      problem: { challengeBadgeLabel: 'What was happening' },
      results: {
        detailedResultsBadgeLabel: 'What improved',
        detailedResultsSectionTitle: 'What changed once the ask was in the right place',
      },
      cta: {
        metaItems: [
          { text: 'Free 20-minute call' },
          { text: 'No pressure' },
          { text: 'Useful for local salons' },
        ],
      },
    },
  };
}

export const salonReviewGenerationAutomation: CaseStudyData =
  buildSalonReviewGenerationAutomation();
