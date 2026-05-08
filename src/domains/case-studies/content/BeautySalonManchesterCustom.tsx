import type { CaseStudyTemplateSection } from '@/domains/case-studies/templates';

import type { CaseStudyData } from '../types';

function buildBeautySalonManchesterCustom(): CaseStudyData {
  const heroIntroHtml = (
    <>
      Velvet &amp; Co. is a busy hair and beauty salon in the Northern Quarter of Manchester. A
      strong base of regular clients, two full-time stylists, and a steady weekly diary. The owner
      kept noticing the same thing month after month. Takings were respectable. They were also
      almost identical to last year. Nothing was going wrong. Nothing was actually moving forward
      either.
    </>
  );

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading: 'They had steady clients. Growth had completely stalled',
    problemDescription: [
      'The salon was busy on the days you would expect. Saturday was always full. Tuesday was always quiet. New clients trickled in, mostly through word of mouth. Older clients drifted out at about the same pace. The numbers held flat.',
      'There was no obvious thing to fix. The work was good. The space looked nice. The team was friendly. But the things that might actually grow the salon, getting new clients to rebook, filling quiet days, bringing back people who had stopped coming, were happening by chance, if at all.',
    ],
    painPoints: [
      'New clients rarely rebooked after their first visit',
      'Quiet days stayed quiet because nothing was filling them',
      'Past clients who had drifted away were never being contacted',
      'Reviews and word of mouth were the only growth lever in play',
      'The owner could feel the plateau but had no time to fix it personally',
    ],
  };

  const processSection: CaseStudyTemplateSection = {
    type: 'process',
    howWeDidIt: [
      {
        phase: 'Week 1',
        title: 'A proper look at the diary',
        description:
          'Two of us sat with the owner for an afternoon and looked at the last six months of bookings. New clients, rebookings, gaps, drifted regulars. The picture made the leaks obvious.',
        duration: 'Half a day on site',
      },
      {
        phase: 'Weeks 2-3',
        title: 'The first-visit nudge',
        description:
          'A calm, warm message went out a few days after every new client\u2019s first visit, with a soft suggestion to book the next one before life got in the way. That alone shifted the rebook rate.',
        duration: 'Two weeks to land',
      },
      {
        phase: 'Weeks 4-5',
        title: 'Filling the midweek gap',
        description:
          'When the diary genuinely needed it, regulars who lived locally got a small midweek nudge. Not constant. Just enough that Tuesdays and Wednesdays stopped feeling like dead time.',
        duration: 'A fortnight of tuning',
      },
      {
        phase: 'Weeks 6-7',
        title: 'Reaching the drifted ones',
        description:
          'Anyone who had not been in for a few months got a single friendly message. No guilt-trip. Just a reminder the salon was there. A surprising number of them booked back in.',
        duration: 'Two weeks',
      },
      {
        phase: 'Week 8',
        title: 'A monthly view for the owner',
        description:
          'A short monthly summary showed who had rebooked, who had drifted, and which days were filling early or late. The picture replaced the guesswork.',
        duration: 'A few hours to set up',
      },
    ],
  };

  const testimonialSection: CaseStudyTemplateSection = {
    type: 'testimonial',
    testimonial: {
      quote:
        'I\u2019d been telling myself for two years that we were doing fine. We were, but we weren\u2019t actually growing. Now my Tuesdays look different, new clients keep coming back, and I stopped feeling guilty about the drifted ones because they were getting reached anyway. It just feels like a salon that\u2019s alive again.',
      author: 'Saskia Brennan',
      role: 'Owner, Velvet & Co.',
    },
  };

  const resultsSection: CaseStudyTemplateSection = {
    type: 'results',
    results: [
      {
        title: 'New clients started becoming regulars',
        improvement: 'A clear lift in first-visit rebookings',
        description:
          'The single biggest change was the rebook rate after a first appointment. The same number of new clients walked in. More of them turned into people the salon would see again.',
      },
      {
        title: 'Midweek days stopped feeling like dead time',
        improvement: 'Tuesdays and Wednesdays held a meaningfully better fill',
        description:
          'The quiet days never became Saturday, and they were not meant to. They just stopped being almost empty. That extra middle-of-the-week chair time was pure additional revenue without any extra cost.',
      },
      {
        title: 'The plateau actually lifted',
        improvement: 'Steady, repeatable growth instead of flat months',
        description:
          'The salon stopped looking the same as last year. The owner felt it in the diary before she saw it in the bank account, but both numbers eventually moved. Growth went from accidental to repeatable.',
      },
    ],
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'Salon doing fine but stuck on a plateau?',
    body: 'Book a free 20-minute call. We can look at where the small leaks are in your salon\u2019s month and what is most worth fixing first.',
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
      title: 'Manchester salon case study: lifting a steady salon out of a plateau',
      description:
        'How a busy Manchester salon stopped repeating last year\u2019s numbers and started seeing real, repeatable growth without working any harder.',
      canonical: '/case-studies/manchester-salon-steady-clients-growth-stalled',
      openGraph: {
        title: 'Manchester salon case study: lifting a steady salon out of a plateau',
        description: 'How a busy Manchester salon stopped repeating last year\u2019s numbers.',
      },
    },
    slug: 'manchester-salon-steady-clients-growth-stalled',
    title: 'They had steady clients. Growth had completely stalled',
    industryCategory: 'beauty-personal-care',
    industryLabel: 'Beauty & Personal Care',
    industries: ['hair-salon'],
    systems: ['revenue-growth'],
    topics: ['customer-lifetime-value', 'booking-systems', 'client-reactivation'],
    publishDate: '2025-12-20',
    client: 'Velvet & Co.',
    location: 'Manchester, UK',
    business: 'Velvet & Co.',
    duration: '8 weeks',
    completedDate: 'December 2025',
    heroHeadline: 'They had steady clients. Growth had completely stalled',
    keyMetrics: [],
    tags: ['Salon', 'Retention', 'Rebooking', 'Manchester'],
    sections,
    templateOverrides: {
      hero: { scenarioBadgeLabel: 'Plateau' },
      problem: { challengeBadgeLabel: 'What was happening' },
      results: {
        detailedResultsBadgeLabel: 'What improved',
        detailedResultsSectionTitle: 'What changed once the small leaks were closed',
      },
      cta: {
        metaItems: [
          { text: 'Free 20-minute call' },
          { text: 'No pressure' },
          { text: 'Useful for established salons' },
        ],
      },
    },
  };
}

export const beautySalonManchesterCustom: CaseStudyData = buildBeautySalonManchesterCustom();
