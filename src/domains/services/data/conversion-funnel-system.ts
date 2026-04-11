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


import { buildServiceSeo } from '../seo';
import type { ServicePageData } from '../types';

const slug = 'conversion-funnel-system';

export const conversionFunnelSystemPage = {
  slug,
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
  seo: buildServiceSeo({
    slug,
    title: 'Conversion Funnel System for Service Businesses | MindWP',
    description:
      'Stop losing visitors between the page and the enquiry. Structured conversion funnel systems that fix page flow, offer clarity, CTA logic, and enquiry handoff.',
    schemaName: 'Conversion funnel system for service businesses',
    schemaDescription:
      'A structured conversion funnel system covering page flow, offer clarity, call-to-action logic, and handoff between traffic, enquiry, and sales action.',
  }),
  hero: {
    badge: 'Conversion Funnel System',
      title: 'Conversion Funnels That Turn Traffic Into Enquiries',
    description:
      'Most conversion problems are not traffic problems. They are clarity problems — between the page, the offer, and the next step. This system fixes the funnel so fewer good prospects disappear in the middle.',
    list: [
        'Offer Clarity',
        'Better Flow',
        'Higher Intent',
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
      title: 'Most funnel problems appear at three predictable places',
      description:
        'The goal is not to make the funnel complicated. It is to remove the parts that make a good prospect hesitate or drift.',
      items: [
        {
          icon: LayoutTemplate,
          badge: 'Page clarity',
          title: 'The page says too much before it says the right thing',
          description:
            'The visitor arrives but the offer, relevance, and next step are buried under noise.',
          solution:
            'Rebuild the page flow so the offer, proof, and action sequence are easier to follow.',
        },
        {
          icon: MousePointerClick,
          badge: 'CTA friction',
          title: 'The next step feels vague or not worth taking',
          description:
            'The page holds attention, but the CTA does not match the buyer stage so interest stops short of action.',
          solution:
            'Reshape the CTA so the action feels natural, low-friction, and tied to what the page promised.',
        },
        {
          icon: Workflow,
          badge: 'Handoff gap',
          title: 'The funnel ends at the form instead of continuing into a clear next step',
          description:
            'Even when someone enquires, the path after submission is unclear, delayed, or disconnected.',
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
      title: 'How the conversion work moves forward',
      description:
        'The details depend on the business, but the work follows a clear sequence so improvements are deliberate, not guesswork.',
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
      title: 'Conversion work touches several connected layers',
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
      title: 'Is this the right fit for your business?',
      description:
        'This works best where traffic exists but the page journey between attention, understanding, and action still loses too many people.',
      strongFitTitle: 'Strong fit if',
      notDesignedTitle: 'Not the right fit if',
      strongFitItems: [
        {
          title: 'You have traffic but weak page conversion',
          description:
            'People are arriving but too many of them leave without moving into a meaningful next step.',
        },
        {
          title: 'Your offer or CTA structure is unclear',
          description:
            'The service is real, but the page makes prospects work too hard to understand or act.',
        },
        {
          title: 'Your enquiry handoff loses momentum',
          description:
            'The conversion point exists, but the handoff into follow-up, booking, or sales action still leaks.',
        },
      ],
      notDesignedItems: [
        {
          title: 'Your main problem is being found at all',
          description:
            'If the issue is no traffic or no demand, Local SEO or broader visibility work may need to lead first.',
        },
        {
          title: 'You want cosmetic page tweaks only',
          description:
            'This is about conversion structure, not surface edits with no change to the decision flow.',
        },
        {
          title: 'Response handling is the bigger leak',
          description:
            'If the real loss happens after contact through missed calls, slow replies, or weak routing, that may need fixing first.',
        },
      ],
    },
    faqSection: {
      badge: 'FAQ',
      title: 'Common questions about conversion funnel work',
      description:
        'Practical questions from businesses that realise traffic and page performance are not the same thing.',
      faqs: [
        {
          question: 'Does this include landing page work?',
          answer:
            'It can. Landing pages are often part of the funnel path. The broader point is making sure the message, CTA, and next-step structure work together.',
        },
        {
          question: 'Can this connect to CRM or booking systems?',
          answer:
            'Yes. Funnel work becomes more valuable when the enquiry handoff connects into CRM, booking, or structured follow-up rather than stopping at the form.',
        },
        {
          question: 'Is this mainly for paid traffic?',
          answer:
            'No. It helps paid traffic, organic traffic, local landing pages, and service pages. The issue is the quality of the decision path after someone arrives.',
        },
        {
          question: 'How is this different from a website redesign?',
          answer:
            'A redesign changes the whole site. Conversion funnel work focuses specifically on the path from attention to enquiry to action — the journey that turns visitors into leads.',
        },
      ],
      cssPrefix: 'conversion-funnel-faq',
    },
    comparison: {
      header: {
        title: 'Scattered page tweaks vs structured conversion system',
        description:
          'Most businesses try to fix conversion by changing buttons or headlines in isolation. Here is what that looks like compared to fixing the actual funnel structure.',
      },
      items: [
        {
          type: 'before' as const,
          title: 'Scattered page tweaks',
          items: [
            'Headlines and CTAs changed based on gut feeling',
            'Multiple services crammed onto one page with no decision flow',
            'Form submissions land in an inbox with no structured follow-up',
            'No visibility into where visitors drop off or why',
            'Each page redesign starts from scratch with no conversion framework',
          ],
        },
        {
          type: 'after' as const,
          title: 'Structured conversion system',
          items: [
            'Page flow follows a clear sequence: relevance, proof, action',
            'Each page has one focused offer with a deliberate CTA path',
            'Enquiry handoff connects into booking, CRM, or follow-up workflow',
            'Drop-off points visible and measured at each funnel stage',
            'Conversion framework improves over time with real data',
          ],
        },
      ],
    },
    proof: {
      header: {
        title: 'What this looks like when the funnel is fixed',
        description:
          'A service business had strong traffic but weak conversion. Visitors were reading the pages, but the offer, CTA, and follow-up path were too unclear to drive action.',
      },
      cards: [
        {
          title: 'Before: traffic arriving, nobody converting',
          description: 'The business had good search rankings and decent traffic, but the pages mixed too many services, the CTAs were generic, and the enquiry handoff was vague.',
          points: [
            'Service pages tried to cover too much at once',
            'CTAs were generic across every page',
            'Enquiry form led to a slow, unstructured follow-up process',
          ],
        },
        {
          title: 'What we built: focused funnel with clear handoff',
          description: 'We restructured the page flow so each service page had one focused offer, proof that matched the buyer stage, and a CTA connected to a real follow-up step.',
          points: [
            'Each service page focused on one clear offer',
            'CTAs matched the buyer stage and page intent',
            'Enquiry handoff connected into booking and CRM workflow',
          ],
          featured: true,
        },
        {
          title: 'After: same traffic, more enquiries moving forward',
          description: 'Without increasing traffic, the business saw more visitors completing the enquiry step and more of those enquiries turning into real conversations.',
          points: [
            'Enquiry rate improved with no change in traffic volume',
            'Follow-up happened faster because handoff was structured',
            'Drop-off points became visible and fixable over time',
          ],
        },
      ],
    },
  },
  inlineCta: {
    title: 'Where is your funnel losing people?',
    description:
      'Tell us about your traffic, pages, and conversion path. We will show you where the funnel is leaking and what to fix first.',
  },
  cta: {
    title: 'Turn more attention into real next steps',
    description:
      'Tell us about your traffic and page performance. We will show you where the conversion path is breaking and how to fix it.',
  },
} satisfies ServicePageData;
