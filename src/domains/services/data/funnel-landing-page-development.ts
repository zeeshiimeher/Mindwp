import { Calendar, ShoppingBag, Target, Workflow } from 'lucide-react';


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
    title: 'Funnel & Landing Page Development for Service Businesses | MindWP',
    description:
      'Focused landing page and funnel page development for service businesses. Tighter offer pages, campaign journeys, booking pages, and clearer next-step implementation.',
    schemaName: 'Funnel and landing page development for service businesses',
    schemaDescription:
      'A focused implementation pathway for landing pages, offer pages, and conversion journeys that need tighter page flow, clearer next-step design, and measurable actions.',
  }),
  hero: {
    badge: 'Funnel & Landing Page Development',
      title: 'Landing Pages Built for One Clear Conversion Goal',
    description:
      'Focused landing pages and funnel pages for specific offers, campaigns, booking paths, or quote journeys. Tighter page flow, clearer next-step design, and stronger fit between intent and action.',
    list: [
        'Offer Pages',
        'Booking Pages',
        'Campaign Pages',
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
        'The main website still has value, but one offer or campaign needs a tighter message, tighter structure, and a clearer action path.',
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
      title: 'The work centres on a few focused page types',
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
      title: 'Landing pages underperform when treated like isolated design output',
      description:
        'These signs show the page may look focused but still lacks the implementation logic needed for real conversion support.',
      items: [
        'The page repeats generic site copy without matching the visitor intent more specifically.',
        'The CTA is present, but the form, booking path, or next-step flow is still vague underneath.',
        'Tracking, routing, or follow-up are missing, so the page cannot be measured or used properly after launch.',
      ],
    },
    implementationPaths: {
      badge: 'Where these pages usually point',
      title: 'A focused page should lead into a clear conversion path, not sit alone',
      description:
        'The page may differ by use case, but it needs a deliberate destination and workflow after the visitor decides to act.',
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
      title: 'How the development work is approached',
      description:
        'The useful part is not just building a page quickly. It is making sure the page matches the offer, visitor intent, and the system around it.',
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
      title: 'Is this the right fit for your business?',
      description:
        'This works best where the business knows it needs a more focused conversion asset for a specific offer, campaign, or next-step journey.',
      strongFitTitle: 'Strong fit if',
      notDesignedTitle: 'Not the right fit if',
      strongFitItems: [
        {
          title: 'You need a focused offer page for a specific audience',
          description:
            'A broad site page is not specific enough for one offer, one audience, or one conversion intent.',
        },
        {
          title: 'You are running campaigns or targeted traffic',
          description:
            'Paid traffic, local campaigns, or specific acquisition pushes need a tighter destination and cleaner action path.',
        },
        {
          title: 'You need implementation, not only diagnosis',
          description:
            'The conversion logic is clear enough — the next step is to build the right landing or funnel asset properly.',
        },
      ],
      notDesignedItems: [
        {
          title: 'You need broader conversion diagnosis first',
          description:
            'If the issue is unclear offer structure or weak funnel logic across the journey, Conversion Funnel System may fit better.',
        },
        {
          title: 'Your full site architecture is broken',
          description:
            'If the wider website no longer supports the business structurally, Website Redesign & System Rebuild may need to lead.',
        },
        {
          title: 'You expect one page to solve weak post-contact operations',
          description:
            'A landing page improves the front-end path, but booking, CRM, routing, and follow-up still need to work after the form.',
        },
      ],
    },
    faqSection: {
      badge: 'FAQ',
      title: 'Common questions about landing page development',
      description:
        'Practical questions from businesses that want a focused conversion asset without turning it into a full site project.',
      faqs: [
        {
          question: 'Can this be one page or several pages?',
          answer:
            'It can be either. Some cases need one focused landing page. Others need a small funnel path with multiple steps or page variants around one conversion journey.',
        },
        {
          question: 'Does this work only with paid campaigns?',
          answer:
            'No. It can support paid, organic, local, referral, booking, or quote-request traffic. The key is that the page has one clearer job than a broad site page.',
        },
        {
          question: 'How does this relate to Conversion Funnel System?',
          answer:
            'Conversion Funnel System clarifies the logic. Funnel & Landing Page Development implements the specific page or path that supports it.',
        },
        {
          question: 'Can the landing page connect to CRM or booking?',
          answer:
            'Yes. A well-built landing page should connect into whatever next step the business needs — booking, CRM, follow-up, or routing.',
        },
      ],
      cssPrefix: 'funnel-landing-development-faq',
    },
    comparison: {
      header: {
        title: 'Generic page vs focused landing page',
        description:
          'Most businesses point campaigns at their homepage or a busy service page. Here is what that costs compared to a page built for the job.',
      },
      items: [
        {
          type: 'before' as const,
          title: 'Generic page',
          items: [
            'Campaign traffic lands on a broad service page with mixed messages',
            'CTA competes with navigation, sidebars, and unrelated content',
            'No connection between the ad promise and the page offer',
            'Form submission leads to a shared inbox with no routing',
            'No way to measure what the page is actually producing',
          ],
        },
        {
          type: 'after' as const,
          title: 'Focused landing page',
          items: [
            'Traffic lands on a page built for one offer, one audience, one action',
            'CTA is the only logical next step on the page',
            'Message matches the campaign intent and visitor stage',
            'Form submission connects into booking, CRM, or follow-up workflow',
            'Page performance visible and measurable from day one',
          ],
        },
      ],
    },
    proof: {
      header: {
        title: 'What this looks like when the page is built for the job',
        description:
          'A service business was running paid campaigns but pointing all traffic at their generic service pages. Conversion was weak because the pages were not built for the campaign intent.',
      },
      cards: [
        {
          title: 'Before: campaign traffic landing on generic pages',
          description: 'Paid traffic arrived on broad service pages that mixed multiple offers, had distracting navigation, and ended at a generic contact form with no follow-up.',
          points: [
            'Campaign traffic landed on pages with mixed messaging',
            'CTA competed with navigation and unrelated content',
            'Form submissions went to a shared inbox with no routing',
          ],
        },
        {
          title: 'What we built: focused pages for each campaign',
          description: 'We built dedicated landing pages for the key campaigns — each with one focused offer, one clear CTA, and a form connected to the right follow-up workflow.',
          points: [
            'Each campaign got a page built for its specific offer',
            'CTAs matched the campaign promise and visitor intent',
            'Form submissions routed into CRM with automated follow-up',
          ],
          featured: true,
        },
        {
          title: 'After: same ad spend, more conversions',
          description: 'Without increasing ad spend, the business saw more enquiries and better quality conversations because the landing pages matched what visitors expected.',
          points: [
            'Enquiry rate improved without increasing ad budget',
            'Lead quality improved because page intent was clearer',
            'Follow-up happened faster because routing was built in',
          ],
        },
      ],
    },
  },
  inlineCta: {
    title: 'Need a page built for a specific conversion job?',
    description:
      'Tell us about the offer, campaign, or booking path. We will build a focused page that matches the intent and connects to the right next step.',
  },
  cta: {
    title: 'Build the right page for the job',
    description:
      'Tell us about the offer, campaign, or next step. We will implement a focused page that converts better than a generic site page.',
  },
} satisfies ServicePageData;
