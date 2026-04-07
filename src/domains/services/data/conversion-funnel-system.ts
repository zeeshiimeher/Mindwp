import {
  BarChart3,
  FileText,
  LayoutTemplate,
  ListOrdered,
  MousePointerClick,
  Search,
  Waypoints,
  Workflow,
} from 'lucide-react';

import type { ServicePageData } from '../types';

export const conversionFunnelSystemPage = {
  slug: 'conversion-funnel-system',
  systems: ['revenue-growth'],
  topics: ['conversion-optimization', 'lead-capture'],
  keywords: [
    'conversion funnel system',
    'service business funnel optimization',
    'lead conversion workflow',
    'enquiry conversion system',
    'service page conversion improvements',
  ],
  badge: 'Conversion Funnel System',
  category: 'Conversion Clarity Systems',
  seo: {
    title: 'Conversion Funnel System | Clearer page flow, offer structure, and enquiry handoff',
    description:
      'Conversion funnel systems for service businesses that need clearer page-to-enquiry journeys, fewer drop-offs, better offer structure, and more measurable funnel stages.',
    canonical: '/services/conversion-funnel-system',
    schema: {
      service: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Conversion funnel system for service businesses',
        description:
          'A structured conversion funnel system covering page flow, offer clarity, call-to-action logic, and handoff between traffic, enquiry, and sales action.',
        provider: {
          '@type': 'Organization',
          name: 'MindWP',
        },
        areaServed: 'UK',
        url: '/services/conversion-funnel-system',
      },
    },
  },
  hero: {
    badge: 'Page-Flow & Offer Layer',
    title:
      'Most conversion problems are not traffic problems. They are clarity problems between the page and the next step.',
    description:
      'This service focuses on the conversion path itself — page flow, offer structure, and the handoff between attention, enquiry, and action. When those are clearer, fewer good prospects disappear in the middle.',
    primaryAction: {
      label: 'Start a Conversation',
      href: '/contact?system=revenue-growth&source=service/conversion-funnel-system',
    },
    list: [
      'Clearer page-to-enquiry journeys',
      'Stronger offer structure and decision flow',
      'Less drop-off between traffic and action',
    ],
    cssPrefix: 'conversion-funnel-hero',
    backgroundColor: 'bg-gradient-surface-muted',
  },
  sections: {
    foundation: {
      badge: 'Where conversion gets lost',
      title:
        'People leave when the page makes them work too hard to understand the offer or find the next step',
      description:
        'Conversion friction usually appears when the visitor reaches the page but still has to piece the offer together, build trust on their own, or guess what to do next.',
      painPoints: [
        {
          before:
            'Traffic arrives, but the page does not make the offer or next step obvious enough to act on.',
          after:
            'The page helps the visitor understand what is relevant, why it matters, and what to do next.',
        },
        {
          before:
            'The business mixes too many messages, services, or CTAs into one path, so decision flow weakens.',
          after:
            'The funnel is easier to follow because the page and CTA structure are more deliberate.',
        },
        {
          before: 'An enquiry can happen, but what comes after is vague, slow, or disconnected.',
          after:
            'The journey from page to enquiry to next action becomes more continuous and easier to measure.',
        },
      ],
    },
    funnelBreakpoints: {
      badge: 'Typical conversion weak points',
      title: 'Most funnel problems appear at a few predictable places',
      description:
        'The goal is not to make the funnel complicated. It is to remove the parts that make a good prospect hesitate, drift, or lose confidence.',
      items: [
        {
          icon: LayoutTemplate,
          badge: 'Page clarity',
          title: 'The page says too much before it says the right thing',
          description:
            'The visitor arrives, but the offer, relevance, and next step are buried under noise or weak structure.',
          solution:
            'Rebuild the page flow so the offer, context, proof, and action sequence are easier to follow.',
        },
        {
          icon: MousePointerClick,
          badge: 'CTA friction',
          title: 'The next step feels vague or not worth taking yet',
          description:
            'The page may hold attention, but the CTA does not match the buyer stage so interest stops short of action.',
          solution:
            'Reshape the CTA so the action feels more natural, lower-friction, and tied to what the page actually promised.',
        },
        {
          icon: Workflow,
          badge: 'Handoff gap',
          title: 'The funnel ends at the form instead of continuing into a clear next step',
          description:
            'Even when someone enquires, the path after submission may feel unclear, delayed, or disconnected.',
          solution:
            'Define what happens after conversion so the page, form, follow-up, and booking step behave like one system.',
        },
      ],
    },
    comparisonMetrics: {
      badge: 'What stronger funnel structure changes',
      title: 'Cleaner movement from attention to action',
      description: 'These are the kinds of differences a better conversion path usually creates.',
      metricLabel: 'Area',
      beforeLabel: 'Before',
      afterLabel: 'After',
      improvementLabel: 'Effect',
      items: [
        {
          metric: 'Offer clarity',
          before: 'Mixed',
          after: 'Focused',
          improvement: 'Clearer first impression',
          description:
            'Visitors can understand the main value and relevance faster instead of piecing the offer together themselves.',
        },
        {
          metric: 'Decision path',
          before: 'Fragmented',
          after: 'Sequential',
          improvement: 'Less hesitation',
          description:
            'The page gives the prospect a more natural order for understanding, trusting, and acting.',
        },
        {
          metric: 'Next-step continuity',
          before: 'Weak',
          after: 'Connected',
          improvement: 'Fewer drop-offs',
          description:
            'The handoff from page visit to enquiry and the next response step becomes easier to follow and measure.',
        },
      ],
    },
    processSection: {
      badge: 'Funnel review sequence',
      title: 'How the conversion work usually moves forward',
      description:
        'The details depend on the business, but the work follows a clear sequence so the page journey improves deliberately rather than by guesswork.',
      steps: [
        {
          number: '1',
          title: 'Review the page path',
          description:
            'Look at where traffic lands, what the visitor sees first, and where clarity starts to break down.',
        },
        {
          number: '2',
          title: 'Tighten the offer and CTA logic',
          description:
            'Align the proposition, proof, and action step with the buyer stage and page intent.',
        },
        {
          number: '3',
          title: 'Fix the enquiry handoff',
          description:
            'Make sure the conversion point leads into a visible next action instead of ending in ambiguity.',
        },
        {
          number: '4',
          title: 'Measure where momentum improves',
          description:
            'Use the refined funnel to see where drop-off reduces and where further refinement is still needed.',
        },
      ],
    },
    funnelLevers: {
      badge: 'What the work usually touches',
      title: 'Conversion work improves several connected parts at once',
      description:
        'This is not only about page design. It is about the structure of the decision path and how the next step carries through.',
      items: [
        {
          icon: Waypoints,
          title: 'Page flow and sequencing',
          description:
            'Clarify what the visitor should understand first, what should support it, and when the action step should appear.',
        },
        {
          icon: FileText,
          title: 'Offer and message structure',
          description:
            'Make the promise, relevance, and commercial framing easier to understand without overloading the page.',
        },
        {
          icon: MousePointerClick,
          title: 'CTA fit and action design',
          description:
            'Use a next step that matches intent instead of pushing the same action at every stage of attention.',
        },
        {
          icon: BarChart3,
          title: 'Measurement and stage clarity',
          description:
            'Create clearer visibility into where attention turns into enquiries and where momentum is still being lost.',
        },
        {
          icon: Search,
          title: 'Traffic-to-page relevance',
          description:
            'Check whether the landing context and page message actually match the intent of the visitor arriving there.',
        },
        {
          icon: ListOrdered,
          title: 'Handoff after conversion',
          description:
            'Make sure the form, reply, booking, or follow-up path supports the action instead of weakening it afterwards.',
        },
      ],
    },
    qualification: {
      title: 'Who this is designed for',
      description:
        'This works best where traffic exists or is building, but the page journey between attention, understanding, enquiry, and action still feels weak or inconsistent.',
      strongFitTitle: 'Strong fit',
      notDesignedTitle: 'Not designed for',
      strongFitItems: [
        {
          title: 'Businesses with traffic but weak page conversion',
          description:
            'A strong fit when people are arriving but too many of them fail to move into a meaningful next step.',
        },
        {
          title: 'Teams with unclear offer or CTA structure',
          description:
            'Useful when the service is real, but the page path still makes prospects work too hard to understand or act.',
        },
        {
          title: 'Businesses needing better enquiry continuity',
          description:
            'Especially useful when the conversion point exists, but the handoff into follow-up, booking, or sales action still leaks momentum.',
        },
      ],
      notDesignedItems: [
        {
          title: 'Businesses with almost no relevant traffic or demand',
          description:
            'If the main issue is being found at all, Local SEO or broader visibility work may need to lead before funnel refinement matters.',
        },
        {
          title: 'Teams looking for cosmetic page tweaks only',
          description:
            'This page is about conversion structure, not surface edits with no change to the actual decision flow.',
        },
        {
          title: 'Cases where response handling is the bigger problem',
          description:
            'If the real leak happens after contact through missed calls, slow replies, or weak routing, another Tier 2 page may be the better entry point.',
        },
      ],
    },
    faqSection: {
      badge: 'FAQ',
      title: 'Common questions about conversion funnel work',
      description:
        'Questions that usually come up when a business realises traffic and page performance are not the same thing.',
      faqs: [
        {
          question: 'Does this include landing page work?',
          answer:
            'It can. Landing pages are often part of the funnel path. The broader point is making sure the message, CTA, and next-step structure work properly together.',
        },
        {
          question: 'Can this connect to CRM or booking later?',
          answer:
            'Yes. Funnel work often becomes more valuable when the enquiry handoff connects into CRM, booking, or structured follow-up rather than stopping at the form submission.',
        },
        {
          question: 'Is this mainly for paid traffic?',
          answer:
            'No. It can help paid traffic, organic traffic, local landing pages, and service pages. The key issue is the quality of the decision path after someone arrives.',
        },
      ],
      cssPrefix: 'conversion-funnel-faq',
    },
  },
  related: {
    variant: 'domain-only',
    title: 'Related page-flow and growth pages',
    description:
      'Conversion funnel work usually connects with Smart Website structure, growth diagnosis, and booking or follow-up continuity.',
  },
  cta: {
    title: 'Turn more attention into clearer next steps',
    description:
      'If traffic is arriving but the page journey still weakens conversion, we can help define a stronger funnel path.',
    buttonText: 'Start a Conversation',
    buttonHref: '/contact?system=revenue-growth&source=service/conversion-funnel-system',
  },
} satisfies ServicePageData;
