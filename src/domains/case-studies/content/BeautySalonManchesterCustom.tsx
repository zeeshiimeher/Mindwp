import {
  type CaseStudyContent,
  type CaseStudyTemplateSection,
} from '@/domains/case-studies/templates';
import { buildContactHref } from '@/lib/contact/contactHref';

import type { CaseStudyData } from '../types';

function buildBeautySalonManchesterCustom(): CaseStudyData {
  const heroIntroHtml = (
    <>
      The Glow Room is a small independent beauty salon in Manchester city centre. Despite having a
      loyal client base, the business was difficult to find through Google search and Maps when
      people searched for local beauty services. Appointments were handled manually by phone during
      opening hours, leading to frequent interruptions during treatments, missed enquiries outside
      business hours, and a growing amount of time spent managing reminders and follow-ups.
    </>
  );

  const heroOverrides = {
    scenarioBadgeLabel: 'Custom Implementation Scenario',
  };

  const keyMetrics: CaseStudyContent['keyMetrics'] = [
    {
      label: 'Local Visibility',
      value: 'Improved',
      icon: 'MapPin',
      color: 'case-study-accent--primary',
    },
    {
      label: 'Booking Consistency',
      value: 'More stable',
      icon: 'TrendingUp',
      color: 'case-study-accent--success',
    },
    {
      label: 'Missed Appointments',
      value: 'Reduced',
      icon: 'CheckCircle2',
      color: 'case-study-accent--purple',
    },
    {
      label: 'Client Feedback',
      value: 'More recent',
      icon: 'Star',
      color: 'case-study-accent--amber',
    },
  ];

  const problemSection: CaseStudyTemplateSection = {
    type: 'problem',
    problemHeading: 'The Challenge: Limited Online Visibility and Manual Scheduling',
    problemDescription: [
      'The Glow Room is a small independent beauty salon in Manchester city centre. Despite having a loyal client base, the business was difficult to find through Google search and Maps when people searched for local beauty services.',
      'Appointments were handled manually by phone during opening hours. This led to frequent interruptions during treatments, missed enquiries outside business hours, and a growing amount of time spent managing reminders and follow-ups.',
    ],
    painPoints: [
      'Low visibility in Google Maps for local beauty searches',
      'A small number of reviews compared to nearby competitors',
      'Phone calls interrupting treatments throughout the day',
      'Missed enquiries outside normal opening hours',
      'Manual appointment management consuming valuable time',
      'No automated reminders or follow-up system',
    ],
  };

  const problemOverrides = {
    challengeBadgeLabel: 'The Beauty Salon Challenge',
  };

  const deliverablesSection: CaseStudyTemplateSection = {
    type: 'deliverables',
    badge: 'Deliverables',
    title: 'What Was Built',
    description:
      'A comprehensive digital transformation combining website, CRM automation, and local SEO to replace manual processes.',
    items: [
      'Professional WordPress website with integrated booking system',
      'GoHighLevel CRM with automated scheduling and reminders',
      'Google Maps and local search visibility optimisation',
      'Automated review collection and response system',
      'Online payment integration and client portal',
      'SMS notifications and email campaign automation',
    ],
    columns: 2,
  };

  const deliverablesOverrides = {
    deliverablesBadgeLabel: 'What Was Delivered',
  };

  const processSection: CaseStudyTemplateSection = {
    type: 'process',
    howWeDidIt: [
      {
        phase: 'Phase 1',
        title: 'Discovery & Planning',
        description: 'Analyzed current processes and identified automation opportunities',
        duration: '1 week',
      },
      {
        phase: 'Phase 2',
        title: 'Website & CRM Setup',
        description: 'Built WordPress site and configured GoHighLevel automation',
        duration: '2 weeks',
      },
      {
        phase: 'Phase 3',
        title: 'Local SEO Implementation',
        description: 'Optimized Google My Business and local search presence',
        duration: '1 week',
      },
      {
        phase: 'Phase 4',
        title: 'Testing & Launch',
        description: 'Comprehensive testing and client training',
        duration: '1 week',
      },
    ],
  };

  const processOverrides = {
    implementationBadgeLabel: 'Project Timeline',
    implementationSectionTitle: 'How We Transformed Their Business',
    implementationSectionSubtitle: '4-week implementation with measurable results',
  };

  const resultsSection: CaseStudyTemplateSection = {
    type: 'results',
    results: [
      {
        metric: 'Online Bookings',
        before: '0%',
        after: '85%',
        improvement: '+85%',
        description: 'Shifted from phone-only to mostly online bookings',
      },
      {
        metric: 'Google Maps Visibility',
        before: 'Page 3-5',
        after: 'Page 1',
        improvement: 'Top 3 results',
        description: 'Improved local search ranking significantly',
      },
      {
        metric: 'Client Reviews',
        before: '12 reviews',
        after: '47 reviews',
        improvement: '+292%',
        description: 'Automated review collection increased social proof',
      },
      {
        metric: 'Time Saved Weekly',
        before: '8 hours',
        after: '2 hours',
        improvement: '75% reduction',
        description: 'Administrative time reduced dramatically',
      },
      {
        metric: 'Missed Appointments',
        before: '15%',
        after: '3%',
        improvement: '80% reduction',
        description: 'Automated reminders improved reliability',
      },
    ],
  };

  const resultsOverrides = {
    detailedResultsBadgeLabel: 'Complete Before/After Analysis',
    detailedResultsSectionTitle: 'Measurable Results & ROI',
  };

  const ctaHeading = 'Want Results Like The Glow Room Beauty Salon?';
  const ctaBody =
    "Book a free 20-minute strategy call and we'll show you exactly how we can help your beauty & personal care business get more leads, save time, and grow revenue—with WordPress, GoHighLevel automation, and smart local SEO.";

  const ctaOverrides = {
    primaryButtonLabel: 'Get Your Free Beauty Salon Strategy Call',
    primaryButtonHref: buildContactHref({
      system: 'local-seo-authority',
      sourceType: 'case-study',
      slug: 'beauty-salon-online-booking-local-seo-manchester-custom',
    }),
    metaItems: [
      { text: 'Free 20-minute strategy call' },
      { text: 'Custom beauty salon solutions' },
      { text: 'No long-term contracts' },
      { text: 'Results within 30 days' },
    ],
  };

  const sections: CaseStudyTemplateSection[] = [
    { type: 'hero', introHtml: heroIntroHtml },
    problemSection,
    deliverablesSection,
    processSection,
    resultsSection,
    { type: 'more' },
    {
      type: 'cta',
      heading: ctaHeading,
      body: ctaBody,
    },
  ];

  return {
    slug: 'beauty-salon-online-booking-local-seo-manchester-custom',
    title: 'Custom Beauty Salon Case Study - Demonstrating Template Flexibility',
    metaTitle: 'Custom Beauty Salon Case Study with Flexible Labels | Manchester',
    metaDescription:
      'Demonstration case study showing how the template system allows complete customization of section labels, badges, and content while maintaining consistent structure.',
    industryCategory: 'beauty-personal-care',
    industryLabel: 'Beauty & Personal Care',
    industries: ['hair-salon'],
    systems: ['local-seo-authority', 'smart-website-systems', 'reputation-review'],
    topics: ['booking-automation', 'review-generation'],
    publishDate: '2024-12-01',
    client: 'The Glow Room Beauty Salon (Custom Demo)',
    location: 'Manchester, UK',
    business: 'The Glow Room Beauty Salon',
    duration: '3 months',
    completedDate: 'December 2024',
    heroHeadline: 'Custom Beauty Salon Case Study - Template Flexibility Demo',
    keyMetrics: keyMetrics.map(metric => ({
      value: metric.value,
      label: metric.label,
      ...(metric.color ? { color: metric.color } : {}),
    })),
    tags: ['Local SEO', 'Online Booking', 'Beauty Salon', 'Manchester', 'Custom Template'],
    seo: {
      canonical: '/case-study/beauty-salon-online-booking-local-seo-manchester-custom',
      openGraph: {
        title: 'Custom Beauty Salon Case Study with Flexible Labels | Manchester',
        description:
          'Demonstration case study showing how the template system allows complete customization of section labels, badges, and content while maintaining consistent structure.',
      },
    },
    sections,
    templateOverrides: {
      hero: heroOverrides,
      problem: problemOverrides,
      deliverables: deliverablesOverrides,
      process: processOverrides,
      results: resultsOverrides,
      cta: ctaOverrides,
    },
  };
}

export const beautySalonManchesterCustom: CaseStudyData = buildBeautySalonManchesterCustom();
