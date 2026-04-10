import { Calendar, ShoppingBag, Target, Workflow } from 'lucide-react';

import { CTA_LABELS } from '@/config/ctaLabels';
import { buildServiceContactHref } from '@/lib/contact/contactHref';

import { buildServiceSeo } from '../seo';
import type { ServicePageData } from '../types';

const slug = 'funnel-landing-page-development';

export const funnelLandingPageDevelopmentPage = {
  slug,
  systems: ['revenue-growth'],
  topics: ['conversion-optimization', 'service-page-architecture'],
  keywords: [
    'landing page development for service business',
    'funnel page implementation',
    'conversion landing page system',
    'service offer landing page',
    'campaign landing page development',
  ],
  badge: 'Funnel & Landing Page Development',
  category: 'Implementation Pathway Services',
  seo: buildServiceSeo({
    slug,
    title: 'Landing Page Development | Focused Offer Pages',
    description:
      'Funnel and landing page development for service businesses that need focused offer pages, campaign journeys, booking pages, and clearer next-step implementation.',
    schemaName: 'Funnel and landing page development for service businesses',
    schemaDescription:
      'A focused implementation pathway for landing pages, offer pages, and conversion journeys that need tighter page flow, clearer next-step design, and measurable actions.',
  }),
  hero: {
    badge: 'Offer-Page Implementation Pathway',
    title:
      'Sometimes the business does not need a full site rebuild. It needs the right page built for a specific conversion job.',
    description:
      'This service implements focused landing pages and funnel pages for specific offers, campaigns, booking paths, or quote journeys. The goal is tighter page flow, clearer next-step design, and stronger fit between intent and action.',
    primaryAction: {
      label: CTA_LABELS.REVENUE_AUDIT,
      href: buildServiceContactHref({
        system: 'revenue-growth',
        slug: 'funnel-landing-page-development',
      }),
    },
    list: [
      'More focused conversion journeys',
      'Cleaner offer-page and landing-page structure',
      'Better fit between visitor intent and next-step action',
    ],
    cssPrefix: 'funnel-landing-development-hero',
    backgroundColor: 'bg-gradient-surface-muted',
  },
  sections: {
    foundation: {
      badge: 'When focused pages matter',
      title:
        'A focused page makes sense when the main site is too broad for a specific campaign, offer, or next step',
      description:
        'This is usually relevant when the main website still has value, but one offer or campaign needs a tighter message, tighter structure, and a clearer action path.',
      painPoints: [
        {
          before:
            'Traffic lands on a general page that does not match the specific offer or campaign intent closely enough.',
          after:
            'The landing page can be built around one offer, one audience, and one clearer next action.',
        },
        {
          before:
            'A general service page carries too many competing messages for a fast decision path.',
          after:
            'The page can connect more deliberately into the form, booking, or follow-up path it is meant to support.',
        },
      ],
    },
    pageTypes: {
      badge: 'What this often includes',
      title: 'The work usually centres on a few focused page types',
      description:
        'The emphasis is on the actual assets being built, not only the conversion theory behind them.',
      items: [
        {
          title: 'Offer landing pages',
          desc: 'Focused pages for one service, offer, or commercial angle where the main site feels too broad or diluted.',
        },
        {
          title: 'Booking and quote-request pages',
          desc: 'Pages designed to move someone cleanly into booking, consultation request, or quote submission without unnecessary distraction.',
        },
        {
          title: 'Campaign support pages',
          desc: 'Pages built for local campaigns, seasonal pushes, paid traffic, or targeted traffic sources that need a tighter journey.',
        },
        {
          title: 'Multi-step conversion paths',
          desc: 'Simple funnel-style page sequences where the visitor needs a more deliberate progression than one standard service page provides.',
        },
      ],
    },
    implementationAlerts: {
      badge: 'What weak implementation looks like',
      title: 'Landing page work underperforms when it is treated like isolated design output',
      description:
        'These warning signs usually show that the page may look focused on the surface but still lacks the implementation logic needed for real conversion support.',
      items: [
        'The page repeats generic site copy without matching the visitor intent more specifically.',
        'The CTA is present, but the form, booking path, or next-step flow is still vague underneath.',
        'Tracking, routing, or follow-up are missing, so the page cannot be measured or used properly after launch.',
      ],
    },
    implementationPaths: {
      badge: 'Where these pages usually point',
      title: 'A focused landing page should lead into a clear conversion path, not sit alone',
      description:
        'The page may differ by use case, but it usually needs a deliberate destination and workflow after the visitor decides to act.',
      items: [
        {
          icon: ShoppingBag,
          title: 'Offer-specific enquiries',
          description:
            'Useful when a visitor should contact the business about one focused service or package rather than a broad service category.',
        },
        {
          icon: Calendar,
          title: 'Booking and consultation requests',
          description:
            'Useful when the page should move the visitor directly into scheduling, appointment request, or consultation flow.',
        },
        {
          icon: Target,
          title: 'Campaign response pages',
          description:
            'Useful when paid traffic, local campaigns, or targeted channels need a more precise destination than the main website.',
        },
        {
          icon: Workflow,
          title: 'Connected conversion handoff',
          description:
            'Useful when the page needs to feed into CRM, booking, or follow-up systems rather than ending at a disconnected form.',
        },
      ],
    },
    processSection: {
      badge: 'Implementation sequence',
      title: 'How the development work is usually approached',
      description:
        'The useful part is not only building a page quickly. It is making sure the page matches the offer, visitor intent, and the system around it.',
      steps: [
        {
          number: '1',
          title: 'Define the page job',
          description:
            'Clarify what specific offer, audience, or campaign the page is meant to support and what action it should drive.',
        },
        {
          number: '2',
          title: 'Shape the page flow',
          description:
            'Build the message order, proof, CTA placement, and page structure around that one focused conversion job.',
        },
        {
          number: '3',
          title: 'Connect the conversion path',
          description:
            'Link the page into the right form, booking, CRM, or workflow handoff instead of leaving it as an isolated asset.',
        },
        {
          number: '4',
          title: 'Launch with measurement in place',
          description:
            'Make sure the page can be tracked and reviewed so the business can see what the implementation is actually doing.',
        },
      ],
    },
    qualification: {
      title: 'Who this is designed for',
      description:
        'This works best where the business already knows it needs a more focused conversion asset for a specific offer, campaign, or next-step journey.',
      strongFitTitle: 'Strong fit',
      notDesignedTitle: 'Not designed for',
      strongFitItems: [
        {
          title: 'Businesses needing a focused offer page',
          description:
            'A strong fit when a broad site page is not specific enough for one offer, one audience, or one conversion intent.',
        },
        {
          title: 'Teams running campaigns or targeted traffic',
          description:
            'Useful when paid traffic, local campaigns, or specific acquisition pushes need a tighter destination page and cleaner action path.',
        },
        {
          title: 'Businesses that need implementation, not only diagnosis',
          description:
            'Especially useful when the conversion logic is clear enough and the next step is to build the right landing or funnel asset properly.',
        },
      ],
      notDesignedItems: [
        {
          title: 'Businesses needing broader conversion diagnosis first',
          description:
            'If the main issue is unclear offer structure or weak funnel logic across the journey, Conversion Funnel System may be the better first page.',
        },
        {
          title: 'Cases where the full site architecture is broken',
          description:
            'If the wider website no longer supports the business structurally, Website Redesign & System Rebuild may need to lead instead.',
        },
        {
          title: 'Teams expecting one page to solve weak operations after contact',
          description:
            'A landing page can improve the front-end conversion path, but booking, CRM, routing, and follow-up still need to work after the form is submitted.',
        },
      ],
    },
    faqSection: {
      badge: 'FAQ',
      title: 'Common questions about landing page development',
      description:
        'Questions that come up when a business wants a more focused conversion asset without turning it into a full site project.',
      faqs: [
        {
          question: 'Can this be one page or several pages?',
          answer:
            'It can be either. Some cases need one focused landing page. Others need a small funnel path with multiple steps or page variants around one conversion journey.',
        },
        {
          question: 'Does this work only with paid campaigns?',
          answer:
            'No. It can support paid, organic, local, referral, booking, or quote-request traffic. The key point is that the page has one clearer job than a broad site page.',
        },
        {
          question: 'Can this connect with Conversion Funnel System?',
          answer:
            'Yes. Conversion Funnel System often clarifies the logic. Funnel & Landing Page Development then implements the specific page or path that supports that logic.',
        },
      ],
      cssPrefix: 'funnel-landing-development-faq',
    },
  },
  cta: {
    title: 'Build the right page for the job',
    description:
      'If a specific offer, campaign, or booking path needs a more focused landing page, we can help implement it properly.',
    buttonText: CTA_LABELS.REVENUE_AUDIT,
    buttonHref: buildServiceContactHref({
      system: 'revenue-growth',
      slug: 'funnel-landing-page-development',
    }),
  },
} satisfies ServicePageData;
