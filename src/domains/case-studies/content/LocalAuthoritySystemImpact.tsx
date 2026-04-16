import type { CaseStudyContent, CaseStudyTemplateSection } from '@/domains/case-studies/templates';

import type { CaseStudyData } from '../types';

function buildLocalAuthoritySystemImpact(): CaseStudyData {
  const heroIntroHtml = (
    <>
      Brookfield Electrical is an independent electrician based in Oxford, running a three-person
      team that handles domestic rewires, consumer unit upgrades, and commercial fit-outs. The
      business had relied entirely on word of mouth and a single Google Ads campaign for new client
      acquisition. Despite strong technical reputation, the company was virtually invisible in
      organic local search. Searching for &quot;electrician Oxford&quot; returned the Google
      Business Profile on page 2 of map results, and the website didn&apos;t appear in the first 50
      organic results for any target keyword. The business had no review strategy, no local content,
      and no citations beyond the initial Google Business Profile created 4 years ago.
    </>
  );

  const keyMetrics: CaseStudyContent['keyMetrics'] = [
    {
      label: 'Map Ranking',
      value: 'Page 2 → Top 3',
      icon: 'MapPin',
      color: 'case-study-accent--success',
    },
    {
      label: 'Organic Leads',
      value: '2 → 17/mo',
      icon: 'TrendingUp',
      color: 'case-study-accent--primary',
    },
    {
      label: 'Review Count',
      value: '11 → 58',
      icon: 'Star',
      color: 'case-study-accent--amber',
    },
    {
      label: 'Ad Dependency',
      value: '91% → 44%',
      icon: 'PieChart',
      color: 'case-study-accent--purple',
    },
  ];

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading: 'The Problem: Invisible in Local Search Despite Strong Service Quality',
    problemDescription: [
      'Brookfield Electrical had been trading for 9 years with an excellent track record — zero complaints, consistent 5-star feedback from clients who found them through referrals. But the digital presence told a different story: 11 Google reviews (the most recent 14 months old), a website with no structured service pages, and a Google Business Profile that hadn\u2019t been updated since creation.',
      'The business generated 91% of its new clients through Google Ads at an average cost of £65 per lead. When the owner paused ads for a test month, enquiries dropped to 2 — both from word of mouth. The business had no organic visibility whatsoever. Local competitors with lower service quality but active local SEO profiles were capturing the majority of organic and map-pack leads. The owner was effectively paying a monthly tax to Google Ads because there was no organic foundation.',
    ],
    painPoints: [
      'Google Business Profile on page 2 of local map results',
      'Zero organic visibility for any target keyword',
      'Only 11 reviews — most recent 14 months old',
      '91% of new clients came from Google Ads at £65/lead',
      'Pausing ads dropped enquiries to near zero',
      'Website had no structured service pages targeting local terms',
      'No local citations beyond the original GBP listing',
      'Competitors with weaker service capturing organic leads',
    ],
  };

  const deliverablesSection: CaseStudyTemplateSection = {
    type: 'deliverables',
    badge: 'Deliverables',
    title: 'What Was Built',
    description:
      'A complete local authority ecosystem — Google Business Profile, automated review generation, service-area content, and citation consistency across local directories.',
    items: [
      'Google Business Profile optimisation with full attributes and regular posts',
      'Automated post-job review requests via GoHighLevel CRM',
      'Service-specific pages targeting local search terms with schema markup',
      'Citation building across 35+ local and industry directories',
      'Sentiment pre-check before Google Review redirect',
      'Map ranking and keyword position monitoring dashboard',
      'Monthly local authority health reporting',
    ],
    columns: 2,
  };

  const processSection: CaseStudyTemplateSection = {
    type: 'process',
    howWeDidIt: [
      {
        phase: 'Phase 1',
        title: 'Local Visibility Audit',
        description:
          'Audited the Google Business Profile, website SEO, review profile, and citation landscape. Benchmarked against the top 5 competitors for "electrician Oxford".',
        duration: '1 week',
      },
      {
        phase: 'Phase 2',
        title: 'Foundation Build',
        description:
          'Optimised the GBP listing, built local service pages on the website, created schema markup, and submitted to 35+ directories.',
        duration: '3 weeks',
      },
      {
        phase: 'Phase 3',
        title: 'Review Generation Launch',
        description:
          'Connected GoHighLevel CRM to the review request workflow and activated post-job review requests for all completed work.',
        duration: '1 week',
      },
      {
        phase: 'Phase 4',
        title: 'Authority Building & Monitoring',
        description:
          'Maintained regular GBP posts, monitored ranking changes, tracked review velocity, and measured organic lead growth over 16 weeks.',
        duration: '16 weeks',
      },
    ],
  };

  const resultsSection: CaseStudyTemplateSection = {
    type: 'results',
    results: [
      {
        metric: 'Google Map Ranking',
        before: 'Page 2 of local map results for "electrician Oxford"',
        after: 'Top 3 map pack for "electrician Oxford" and 6 related terms',
        improvement: 'Map pack visibility achieved',
        description:
          'The combination of GBP optimisation, review velocity, citations, and local content pushed the listing from page 2 into the visible map pack — the first 3 results shown to searchers.',
      },
      {
        metric: 'Monthly Organic Leads',
        before: '2 organic leads per month (word of mouth only)',
        after: '17 organic leads per month from search and map listings',
        improvement: '750% increase',
        description:
          'The local authority foundation created a steady organic lead channel that had simply never existed before — reducing reliance on paid ads.',
      },
      {
        metric: 'Google Review Count',
        before: '11 reviews — most recent 14 months old',
        after: '58 reviews — 47 new reviews in 16 weeks (average 4.9 stars)',
        improvement: '+427% review growth',
        description:
          'The automated post-job review system generated consistent fresh reviews, signalling active engagement to Google\u2019s local ranking algorithm.',
      },
      {
        metric: 'Google Ads Dependency',
        before: '91% of new clients via ads — near-total dependency',
        after: '44% via ads, 56% via organic and referral channels',
        improvement: 'Ad dependency halved',
        description:
          'With organic leads now contributing more than half of new business, the owner could reduce ad spend without losing revenue — or maintain spend for growth.',
      },
    ],
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'Invisible in Local Search?',
    body: 'Book a free 20-minute call and we\u2019ll show you how a local authority system could reduce your ad dependency and build organic lead flow.',
  };

  const sections: CaseStudyTemplateSection[] = [
    { type: 'hero', introHtml: heroIntroHtml },
    problemSection,
    deliverablesSection,
    processSection,
    resultsSection,
    { type: 'more' },
    ctaSection,
  ];

  return {
    slug: 'local-authority-system-impact',
    title: 'Local Authority System Impact',
    metaTitle: 'Local SEO System | Page 2 to Top 3 in Google Maps',
    metaDescription:
      'How an Oxford electrician went from page 2 of Google Maps to the top 3, grew from 2 to 17 organic leads per month, and halved Google Ads dependency.',
    industryCategory: 'home-services',
    industryLabel: 'Home Services',
    industries: ['roofing'],
    systems: ['local-seo-authority'],
    topics: [
      'local-seo',
      'local-visibility',
      'google-business-profile',
      'review-generation',
      'local-authority',
    ],
    publishDate: '2026-07-01',
    client: 'Brookfield Electrical',
    location: 'Oxford, UK',
    business: 'Brookfield Electrical',
    duration: '21 weeks',
    completedDate: 'July 2026',
    heroHeadline:
      'How an Electrician Went From Page 2 to Top 3 in Google Maps and Halved Ad Dependency',
    keyMetrics: keyMetrics.map(metric => ({
      value: metric.value,
      label: metric.label,
      ...(metric.color ? { color: metric.color } : {}),
    })),
    tags: ['Local SEO', 'Google Maps', 'Review Generation', 'Local Authority', 'Home Services'],
    seo: {
      canonical: '/case-study/local-authority-system-impact',
      openGraph: {
        title: 'Why Service Businesses Stay Invisible in Local Search | MindWP Case Study',
        description:
          'How an Oxford electrician went from page 2 to top 3 in Google Maps and grew organic leads from 2 to 17 per month.',
      },
    },
    sections,
    templateOverrides: {
      hero: { scenarioBadgeLabel: 'System Implementation' },
      problem: { challengeBadgeLabel: 'The Visibility Problem' },
      deliverables: { deliverablesBadgeLabel: 'Deliverables' },
      process: {
        implementationBadgeLabel: 'Implementation',
        implementationSectionTitle: 'How the System Was Built',
        implementationSectionSubtitle: 'From invisible to map pack in 21 weeks',
      },
      results: {
        detailedResultsBadgeLabel: 'Measured Results',
        detailedResultsSectionTitle: 'Before & After: Local Visibility',
      },
      cta: {
        metaItems: [
          { text: 'Free 20-minute call' },
          { text: 'No contracts' },
          { text: 'Works for any local business' },
        ],
      },
    },
  };
}

export const localAuthoritySystemImpact: CaseStudyData = buildLocalAuthoritySystemImpact();
