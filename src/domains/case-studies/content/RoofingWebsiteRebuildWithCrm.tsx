import type { CaseStudyContent, CaseStudyTemplateSection } from '@/domains/case-studies/templates';

import type { CaseStudyData } from '../types';

function buildRoofingWebsiteRebuildWithCrm(): CaseStudyData {
  const heroIntroHtml = (
    <>
      Crestline Roofing is a family-run residential roofing contractor based in Bristol, operating
      across the South West. The business had a five-year-old WordPress website that functioned as a
      static brochure — three pages, no lead forms beyond a basic contact page, and no connection to
      any CRM or scheduling tool. Despite running paid ads and receiving steady organic traffic, the
      website averaged just 6 lead enquiries per week. The team knew traffic was arriving but had no
      way to convert or track it effectively.
    </>
  );

  const keyMetrics: CaseStudyContent['keyMetrics'] = [
    {
      label: 'Weekly Leads',
      value: '22',
      icon: 'Users',
      color: 'case-study-accent--success',
    },
    {
      label: 'Form Completion',
      value: '7.8%',
      icon: 'FileCheck',
      color: 'case-study-accent--primary',
    },
    {
      label: 'Lead-to-CRM',
      value: 'Instant',
      icon: 'Zap',
      color: 'case-study-accent--purple',
    },
    {
      label: 'Mobile Conversion',
      value: '6.2%',
      icon: 'Smartphone',
      color: 'case-study-accent--amber',
    },
  ];

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading: 'The Problem: A Website That Attracted Traffic but Captured Almost Nothing',
    problemDescription: [
      'Crestline Roofing\u2019s website received around 320 visits per week — a reasonable volume for a regional roofing contractor. But the site had a single generic contact page with a name-and-email form, no service-specific landing pages, and no connection to any backend system.',
      '72% of traffic arrived on mobile devices, but the site\u2019s layout was not built for mobile conversion. Buttons were small, load times exceeded 5 seconds, and the contact form required scrolling past three paragraphs of text. Leads that did submit the form arrived in a shared Gmail inbox with no tracking or follow-up process.',
    ],
    painPoints: [
      '320 weekly visitors but only 6 lead enquiries — a 1.9% form completion rate',
      'Single generic contact form with no service-specific context',
      '72% mobile traffic but poor mobile layout and 5+ second load times',
      'No CRM integration — leads arrived in a shared Gmail inbox',
      'No lead source tracking to measure which channels produced enquiries',
      'Paid ad spend generating clicks with no measurable conversion funnel',
      'No automated response — leads waited hours or days for a reply',
    ],
  };

  const deliverablesSection: CaseStudyTemplateSection = {
    type: 'deliverables',
    badge: 'Deliverables',
    title: 'What Was Built',
    description:
      'A systems-first website rebuild designed to capture and route leads, not just display information.',
    items: [
      'WordPress rebuild with mobile-first responsive design',
      'Service-specific landing pages (repairs, replacements, inspections, insurance)',
      'Inline lead capture forms on every service page',
      'GoHighLevel CRM integration with instant lead routing',
      'Automated email confirmation and SMS response on form submission',
      'Lead source tracking across organic, paid, and direct channels',
      'Page speed optimisation targeting sub-2-second mobile load',
      'Google Analytics 4 conversion tracking setup',
    ],
    columns: 2,
  };

  const processSection: CaseStudyTemplateSection = {
    type: 'process',
    howWeDidIt: [
      {
        phase: 'Phase 1',
        title: 'Conversion Audit',
        description:
          'Analysed the existing site\u2019s traffic patterns, form completion rates, mobile experience, and lead handling process. Identified 72% mobile traffic and 1.9% form rate as the critical bottlenecks.',
        duration: '1 week',
      },
      {
        phase: 'Phase 2',
        title: 'Architecture & CRM Design',
        description:
          'Designed the new site structure with service-specific pages and mapped the form-to-CRM pipeline. Built GoHighLevel pipelines for each service type.',
        duration: '1 week',
      },
      {
        phase: 'Phase 3',
        title: 'WordPress Build & Integration',
        description:
          'Built the new WordPress site with mobile-first templates, inline forms on every service page, and CRM integration. Optimised page speed to sub-2-second targets.',
        duration: '3 weeks',
      },
      {
        phase: 'Phase 4',
        title: 'Testing, Migration & Launch',
        description:
          'Ran form-to-CRM integration tests, migrated content with 301 redirects, configured conversion tracking, and launched with a 2-week monitoring period.',
        duration: '2 weeks',
      },
    ],
  };

  const resultsSection: CaseStudyTemplateSection = {
    type: 'results',
    results: [
      {
        metric: 'Weekly Lead Volume',
        before: '6 leads per week from 320 visits',
        after: '22 leads per week from 340 visits',
        improvement: '267% increase',
        description:
          'The same traffic volume produced nearly 4\u00d7 more leads once service-specific pages and contextual forms replaced the generic contact page.',
      },
      {
        metric: 'Form Completion Rate',
        before: '1.9% across all visitors',
        after: '7.8% on service-specific pages',
        improvement: '+5.9 percentage points',
        description:
          'Contextual forms that matched the visitor\u2019s intent (repairs, replacements, inspections) dramatically outperformed the generic contact form.',
      },
      {
        metric: 'Lead-to-CRM Time',
        before: 'Manual entry from Gmail — average 4 hours',
        after: 'Instant CRM creation on form submission',
        improvement: 'Eliminated manual delay',
        description:
          'Every lead was logged in the CRM pipeline within seconds of submission with full source attribution and service type tagging.',
      },
      {
        metric: 'Mobile Conversion Rate',
        before: '1.4% on mobile devices',
        after: '6.2% on mobile devices',
        improvement: '+4.8 percentage points',
        description:
          'Mobile-first design with faster load times and tap-friendly forms unlocked the 72% of traffic that was previously bouncing without converting.',
      },
      {
        metric: 'Paid Ad Efficiency',
        before: 'No conversion tracking — cost-per-lead unknown',
        after: 'Cost-per-lead visible by campaign, service type, and device',
        improvement: 'Full attribution clarity',
        description:
          'For the first time, the business could see which paid campaigns produced actual leads and adjust spend based on real conversion data.',
      },
    ],
  };

  const ctaSection: CaseStudyTemplateSection = {
    type: 'cta',
    heading: 'Is Your Website Converting Traffic Into Leads?',
    body: 'Book a free 20-minute call and we\u2019ll review your website\u2019s conversion performance and show you what a systems-first rebuild could look like for your roofing business.',
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
    slug: 'roofing-website-rebuild-with-crm',
    title: 'Roofing Website Rebuild With CRM',
    metaTitle:
      'Why Roofing Websites Fail to Convert Leads (And the Smart Website System That Fixed It)',
    metaDescription:
      'How a Bristol roofing contractor increased weekly leads from 6 to 22 by rebuilding their website with service-specific pages, CRM integration, and mobile-first design.',
    industryCategory: 'home-services',
    industryLabel: 'Home Services',
    industries: ['roofing'],
    systems: ['smart-website-systems'],
    topics: [
      'website-infrastructure',
      'systems-first-websites',
      'crm-integration',
      'conversion-optimization',
    ],
    publishDate: '2025-10-15',
    client: 'Crestline Roofing',
    location: 'Bristol, UK',
    business: 'Crestline Roofing',
    duration: '7 weeks',
    completedDate: 'October 2025',
    heroHeadline:
      'How a Roofing Contractor Went From 6 to 22 Weekly Leads With a Systems-First Website Rebuild',
    keyMetrics: keyMetrics.map(metric => ({
      value: metric.value,
      label: metric.label,
      ...(metric.color ? { color: metric.color } : {}),
    })),
    tags: [
      'Website Rebuild',
      'Smart Website Systems',
      'CRM Integration',
      'Roofing',
      'Conversion Optimisation',
    ],
    seo: {
      canonical: '/case-study/roofing-website-rebuild-with-crm',
      openGraph: {
        title: 'Why Roofing Websites Fail to Convert Leads | MindWP Case Study',
        description:
          'How a Bristol roofing contractor increased weekly leads from 6 to 22 by rebuilding their website with service-specific pages, CRM integration, and mobile-first design.',
      },
    },
    sections,
    templateOverrides: {
      hero: { scenarioBadgeLabel: 'System Implementation' },
      problem: { challengeBadgeLabel: 'The Conversion Problem' },
      deliverables: { deliverablesBadgeLabel: 'Deliverables' },
      process: {
        implementationBadgeLabel: 'Implementation',
        implementationSectionTitle: 'How the System Was Built',
        implementationSectionSubtitle:
          'A 7-week rebuild covering audit, architecture, build, and launch',
      },
      results: {
        detailedResultsBadgeLabel: 'Measured Results',
        detailedResultsSectionTitle: 'Before & After: Website Conversion Performance',
      },
      cta: {
        primaryButtonLabel: 'Book More Roofing Estimates',
        primaryButtonHref: '/contact',
        metaItems: [
          { text: 'Free 20-minute call' },
          { text: 'No contracts' },
          { text: 'Built for trades' },
        ],
      },
    },
  };
}

export const roofingWebsiteRebuildWithCrm: CaseStudyData = buildRoofingWebsiteRebuildWithCrm();
