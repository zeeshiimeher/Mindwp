import type { CaseStudyContent, CaseStudyTemplateSection } from '@/domains/case-studies/templates';

import type { CaseStudyData } from '../types';

function buildSalonReviewGenerationAutomation(): CaseStudyData {
  const heroIntroHtml = (
    <>
      Halo Hair & Beauty is an independent salon in Cardiff with five stylists. The business had
      been trading for six years and maintained a strong local reputation through word of mouth.
      However, the Google Business Profile showed only 23 reviews {'\u2014'} most from the first two
      years of operation. The most recent review was over five months old. Three competing salons
      within a one-mile radius had 87, 112, and 148 reviews respectively, all with recent activity.
      When potential clients searched for hair salons in the Cardiff area, Halo consistently
      appeared below these competitors in Google Maps despite maintaining a higher average star
      rating. The salon had no process for requesting reviews. Staff occasionally asked in person
      but felt uncomfortable doing so, and the request was forgotten more often than not.
    </>
  );

  const keyMetrics: CaseStudyContent['keyMetrics'] = [
    {
      label: 'Review Count',
      value: '23 \u2192 67',
      icon: 'Star',
      color: 'case-study-accent--amber',
    },
    {
      label: 'Avg Rating',
      value: '4.9',
      icon: 'Award',
      color: 'case-study-accent--success',
    },
    {
      label: 'Review Velocity',
      value: '4.2/week',
      icon: 'TrendingUp',
      color: 'case-study-accent--primary',
    },
    {
      label: 'Map Ranking',
      value: 'Top 3',
      icon: 'MapPin',
      color: 'case-study-accent--purple',
    },
  ];

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading:
      'The Problem: A Six-Year Business With 23 Reviews and Declining Local Visibility',
    problemDescription: [
      'Halo Hair & Beauty had accumulated 23 Google reviews over six years \u2014 fewer than 4 per year on average. The majority dated from 2019\u20132020, and the profile had been essentially dormant for five months. Google\u2019s local ranking algorithm weights review recency and velocity alongside total volume, meaning the stale profile actively suppressed the salon\u2019s visibility in map results.',
      'The three nearest competitors held 87, 112, and 148 reviews respectively, all with activity within the past month. Halo appeared below all three in local search results for terms like \u201Chair salon Cardiff\u201D despite a higher average rating. Clients regularly praised the service in person but did not translate that into public reviews. The team had no structured review request process and relied entirely on clients volunteering feedback unprompted.',
    ],
    painPoints: [
      '23 reviews accumulated over 6 years \u2014 fewer than 4 per year',
      'Most recent review over 5 months old \u2014 profile effectively dormant',
      'Competitors with 87\u2013148 reviews ranked above in local map results',
      'No review request process \u2014 relied entirely on unsolicited feedback',
      'Staff felt uncomfortable asking clients for reviews face-to-face',
      'High in-person satisfaction not reflected in public review profile',
      'Local map visibility declining despite consistent service quality',
    ],
  };

  const solutionSection: CaseStudyTemplateSection = {
    type: 'solution',
    solutionHeading:
      'The System: Automated Post-Appointment Review Requests With Sentiment Routing',
    solutionDescription:
      'An automated review request system was configured within GoHighLevel CRM to trigger a personalised SMS 2 hours after each completed appointment. A sentiment pre-check routed satisfied clients to a one-tap Google Review link and directed dissatisfied clients to a private feedback form, keeping the public review stream consistently positive.',
    whatWeDid: [
      {
        title: 'Post-Appointment Trigger',
        description:
          'Configured an automated SMS sent 2 hours after each appointment completion, timed to reach clients while their experience was still fresh and before they moved on with their day.',
        icon: 'Timer',
      },
      {
        title: 'Personalised Review Message',
        description:
          'Each message included the client\u2019s first name and their stylist\u2019s name, making the request feel individual rather than mass-generated. Open rates were significantly higher than generic templates.',
        icon: 'MessageSquare',
      },
      {
        title: 'Sentiment Pre-Check and Routing',
        description:
          'Before directing to Google, clients answered a simple satisfaction question. Positive responses received a one-tap Google Review link. Negative responses were routed to a private feedback form for internal follow-up.',
        icon: 'ThumbsUp',
      },
      {
        title: 'Review Monitoring Dashboard',
        description:
          'Built a dashboard tracking total review count, average rating, weekly velocity, and sentiment distribution so the team could see progress and identify patterns in real time.',
        icon: 'BarChart3',
      },
    ],
  };

  const resultsSection: CaseStudyTemplateSection = {
    type: 'results',
    results: [
      {
        metric: 'Total Review Count',
        before: '23 reviews accumulated over 6 years',
        after: '67 reviews \u2014 44 new reviews collected in 10 weeks',
        improvement: '+191% total growth',
        description:
          'The automated system collected more reviews in 10 weeks than the salon had accumulated in its entire trading history.',
      },
      {
        metric: 'Review Velocity',
        before: 'Fewer than 4 reviews per year (0.08/week)',
        after: '4.2 reviews per week average',
        improvement: '52\u00d7 faster collection',
        description:
          'Consistent post-appointment requests produced a steady stream of fresh reviews, signalling active engagement to Google\u2019s local ranking algorithm.',
      },
      {
        metric: 'Average Star Rating',
        before: '4.7 stars across 23 reviews \u2014 some older and lower-rated',
        after: '4.9 stars across 67 reviews \u2014 recent reviews consistently 5-star',
        improvement: '+0.2 stars',
        description:
          'The sentiment pre-check routed dissatisfied clients to private feedback, ensuring only genuinely satisfied clients reached the public review page.',
      },
      {
        metric: 'Local Map Ranking',
        before: 'Below 3 competitors with higher review volumes and recent activity',
        after: 'Top 3 for \u201Chair salon Cardiff\u201D and related local searches',
        improvement: 'Overtook 2 of 3 competitors',
        description:
          'The combination of review velocity, recency, and maintained high rating pushed the salon above competitors who had more total reviews but lower recent activity.',
      },
      {
        metric: 'Staff Involvement',
        before: 'Staff needed to remember to ask each client individually',
        after: 'Zero manual effort \u2014 review requests fully automated post-appointment',
        improvement: 'Fully automated',
        description:
          'The system removed the face-to-face review request from the stylist\u2019s workflow entirely. Reviews arrived without anyone on the team needing to take action.',
      },
    ],
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'Struggling to Get Reviews?',
    body: 'Book a free 20-minute call to discuss how an automated review system could build your Google profile without adding work for your team.',
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
      title: 'Salon Review Automation | 23 to 67 Google Reviews',
      description:
        'How a Cardiff hair salon grew from 23 to 67 Google reviews in 10 weeks using automated post-appointment review requests with sentiment routing.',
      canonical: '/case-studies/salon-review-generation-automation',
      openGraph: {
        title: 'Why Salons Struggle to Get Reviews | MindWP Case Study',
        description:
          'How a Cardiff hair salon grew from 23 to 67 Google reviews in 10 weeks with automated review requests.',
      },
    },
    slug: 'salon-review-generation-automation',
    title: 'Salon Review Generation Automation',
    industryCategory: 'beauty-personal-care',
    industryLabel: 'Beauty & Personal Care',
    industries: ['hair-salon'],
    systems: ['reputation-review'],
    topics: [
      'review-generation',
      'review-automation',
      'feedback-loops',
      'negative-review-response',
      'reputation-monitoring',
      'customer-feedback',
      'negative-reviews',
    ],
    publishDate: '2026-01-15',
    client: 'Halo Hair & Beauty',
    location: 'Cardiff, UK',
    business: 'Halo Hair & Beauty',
    duration: '12 weeks',
    completedDate: 'January 2026',
    heroHeadline:
      'How a Hair Salon Grew From 23 to 67 Google Reviews in 10 Weeks With Automated Requests',
    keyMetrics: keyMetrics.map(metric => ({
      value: metric.value,
      label: metric.label,
      ...(metric.color ? { color: metric.color } : {}),
    })),
    tags: ['Review Generation', 'Hair Salon', 'Google Reviews', 'Reputation System', 'Local SEO'],
    sections,
    templateOverrides: {
      hero: { scenarioBadgeLabel: 'System Implementation' },
      problem: { challengeBadgeLabel: 'The Review Gap' },
      solution: { solutionBadgeLabel: 'System Implementation' },
      results: {
        detailedResultsBadgeLabel: 'Measured Results',
        detailedResultsSectionTitle: 'Before & After: Review Profile Performance',
      },
      cta: {
        metaItems: [
          { text: 'Free 20-minute call' },
          { text: 'No contracts' },
          { text: 'Built for salons' },
        ],
      },
    },
  };
}

export const salonReviewGenerationAutomation: CaseStudyData =
  buildSalonReviewGenerationAutomation();
