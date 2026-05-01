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

const slug = 'conversion-layer';

export const conversionLayerPage = {
  slug,
  seo: buildServiceSeo({
    slug,
    title: 'Conversion Layer for Service Businesses | MindWP',
    description:
      "Visitors arrive interested. Then they can't figure out what to do next. Conversion work that fixes the gap between attention and action — offer clarity, CTA alignment, and enquiry follow-up.",
  }),
  systems: ['revenue-growth'],
  topics: ['conversion-optimization', 'lead-capture', 'service-page-architecture'],
  badge: 'Conversion Layer',
  category: 'Conversion Systems',
  hero: {
    badge: 'Conversion Layer',
    title: "Interested. Couldn't Figure Out What To Do.",
    description:
      "They clicked. Read half the content. Scrolled past three offers. Couldn't tell which was for them. Left. Traffic numbers looked fine.",
    list: ['Interested', 'Confused', 'Gone'],
    cssPrefix: 'conversion-funnel-hero',
    backgroundColor: 'bg-gradient-surface-muted',
  },
  sections: {
    foundation: {
      badge: 'Where it breaks',
      title: "Attention is there. The path after isn't.",
      description:
        "People arrive interested. Offer's buried. Next step's vague. What happens after they reach out? Nobody's sure.",
      painPoints: [
        {
          before:
            "Traffic lands. Ten seconds in, the visitor still can't tell what you do or why it matters to them.",
          after:
            "What's relevant, why it matters, and what to do next becomes obvious from the first scroll instead of being buried halfway down the page.",
        },
        {
          before:
            "Too many messages and CTAs crammed into one place. Nobody knows what's for them.",
          after:
            'One path, one offer, and one clear next step make it easier for the visitor to understand where they fit and act without hesitating.',
        },
        {
          before:
            'Form goes through. Then nothing. Slow reply. No confirmation. They wonder if anyone saw it.',
          after:
            "The moment after submit is handled. Confirmation, booking, follow-up. Momentum doesn't die at the button. And it connects into whatever handles the next step \u2014 CRM, routing, callback.",
        },
      ],
    },
    funnelBreakpoints: {
      badge: 'Three places it usually fails',
      title: 'Conversion breaks at predictable points',
      description:
        "Not about complicated funnels. It's about removing what makes someone hesitate when they're already interested.",
      items: [
        {
          icon: LayoutTemplate,
          badge: 'Offer clarity',
          title: 'Too much on the page before anything useful',
          description:
            'The visitor arrives interested. Offer, proof, and next step are buried under noise. They leave because finding the answer took too long.',
          solution:
            'Restructure what comes first, what supports it, and where the action step sits.',
        },
        {
          icon: MousePointerClick,
          badge: 'CTA mismatch',
          title: "The next step doesn't match what they just read",
          description:
            'Interest was there. CTA felt generic, disconnected, or too big a commitment. They hesitated. Drifted.',
          solution:
            "Match the action to the buyer's stage. Make it feel like a natural next step, not a leap.",
        },
        {
          icon: Workflow,
          badge: 'Momentum dies after the form',
          title: 'They enquired. Then silence.',
          description:
            "Form went through. No confirmation. No timeline. Nothing. They're wondering if it even worked.",
          solution:
            'Define what happens after submit. Confirmation, booking, or reply — the experience continues.',
        },
      ],
    },
    comparison: {
      header: {
        title: 'Random page tweaks vs structured conversion work',
        description:
          "Most businesses try to fix conversion by changing headlines or buttons in isolation. Here's what that looks like compared to fixing the actual path.",
      },
      items: [
        {
          type: 'before' as const,
          title: 'Random page tweaks',
          items: [
            'Headlines and CTAs changed on instinct. Feels productive. Conversion stays flat because nothing underneath changed.',
            "Multiple services crammed onto one page with no decision path. The visitor has to piece together what's relevant. Most don't bother.",
            'Form submissions land in an inbox with no follow-up plan. Even the leads that convert go cold waiting for a reply.',
            'No visibility into where visitors drop off or why. The next round of changes is another guess aimed at the wrong section.',
            'Every redesign starts from scratch. The business pays to rebuild instead of building on what already worked.',
          ],
        },
        {
          type: 'after' as const,
          title: 'Deliberate conversion work',
          items: [
            'Page follows a clear sequence: relevance, proof, action. The visitor knows what to do without figuring it out.',
            'Each page focuses on one offer with one clear next step. Decision friction drops.',
            'Enquiry follow-up connects into booking, CRM, or follow-up. What happens after the form is defined.',
            'Drop-off points visible at each stage. You know exactly where to improve next.',
          ],
        },
      ],
    },
    comparisonMetrics: {
      badge: 'What stronger conversion structure changes',
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
          after: 'Clear in the first screen',
          improvement: 'Clearer first impression',
          description:
            'Visitors understand the value faster instead of piecing the offer together themselves.',
        },
        {
          metric: 'Decision path',
          before: 'Fragmented',
          after: 'Visitor can follow the next step',
          improvement: 'Less hesitation',
          description:
            'The page moves from relevance to proof to action without forcing the visitor to guess what comes next.',
        },
        {
          metric: 'Next-step continuity',
          before: 'Weak',
          after: 'Response path stays visible',
          improvement: 'Fewer drop-offs',
          description:
            'The move from visit to enquiry to follow-up stays visible and measurable instead of ending at the form submit.',
        },
      ],
    },
    processSection: {
      badge: 'How the work runs',
      title: 'Four steps. Each one builds on the last.',
      description:
        'Every business is different, but the sequence stays the same. Diagnose first, fix next, connect the follow-up path, then measure.',
      steps: [
        {
          number: '1',
          title: 'Map the drop-off',
          description:
            "Look at where traffic lands, what the visitor sees, where attention dies. Start with what's happening, not assumptions.",
        },
        {
          number: '2',
          title: 'Tighten the offer and CTA',
          description:
            'Align message, proof, and next step with where the visitor is. The page should move them forward, not make them think.',
        },
        {
          number: '3',
          title: 'Fix what happens after the form',
          description:
            'Confirmation, booking link, follow-up. Whatever comes next, it happens fast enough that interest survives the gap.',
        },
        {
          number: '4',
          title: 'Measure and refine',
          description:
            "Track where drop-off reduced and where it didn't. Next round targets real weak points, not guesses.",
        },
      ],
    },
    funnelLevers: {
      badge: 'What the work covers',
      title: 'Six layers between interest and action',
      description:
        "Not just page design. It's the decision path itself \u2014 what visitors see, when they see it, and what happens after they act.",
      items: [
        {
          icon: Waypoints,
          title: 'Page flow and sequencing',
          description:
            'Decide what the visitor should understand first, what supports it, and where the action step sits.',
        },
        {
          icon: FileText,
          title: 'Offer structure',
          description:
            'Make the promise, relevance, and commercial framing clear enough that no one has to guess what you actually do.',
        },
        {
          icon: MousePointerClick,
          title: 'CTA fit',
          description:
            'Match the next step to the buyer\'s stage. A "book a call" button means nothing to someone still figuring out if you\'re relevant.',
        },
        {
          icon: BarChart3,
          title: 'Stage visibility',
          description:
            "Know where attention turns into enquiries and where it's still leaking. Fix based on evidence, not instinct.",
        },
        {
          icon: Search,
          title: 'Traffic-to-page match',
          description:
            'Check whether the page message matches what the visitor was looking for when they clicked. Misalignment kills conversion before the page loads.',
        },
        {
          icon: ListOrdered,
          title: 'Post-form handoff',
          description:
            "Define what happens after submit. Booking link, CRM entry, follow-up sequence — the action doesn't end at the form.",
        },
      ],
    },
    proof: {
      header: {
        title: 'A landscaping company that stopped losing visitors at the page',
        description:
          'Four-person crew. Good local rankings. Plenty of traffic. But the conversion rate was terrible. Visitors scrolled, read, and left — because the path from interest to enquiry was unclear.',
      },
      cards: [
        {
          title: 'Before: traffic but no enquiries',
          description:
            'The site ranked well for landscaping keywords. People landed. But service pages mixed paving, fencing, and garden design into one long scroll. Every CTA said the same thing.',
          points: [
            "Homeowner looking for patio work scrolled past fencing and turfing to find it. Most didn't.",
            'Every page: same "Get in touch" button. No context. No reason to think clicking it would go anywhere useful.',
          ],
        },
        {
          title: 'What changed: one offer per page, clear next step',
          description:
            'Each service got its own page. Patio work had its own proof, photos, CTA. Fencing the same. Enquiry form fed into a booking step with confirmation and follow-up text.',
          points: [
            'Each page: one service, matched photos, matched proof.',
            'CTAs matched the job: "Get a patio quote" not "Get in touch." Connected to what they just read.',
            'Form submit triggered confirmation text and a callback within four hours. No silence after the click.',
          ],
          featured: true,
        },
        {
          title: 'After: same traffic, three times the enquiries',
          description:
            'No new spend. Same visitors. Enquiries tripled in two months. Visitors who previously left confused now had a path.',
          points: [
            'Enquiry rate from under 1% to just over 3%. Same traffic.',
            'Reply time from two days to four hours. More of those enquiries turned into consultations because the gap between interest and response shrank.',
            'Owner started tracking which pages converted best. Patio led. That shaped where marketing went next.',
          ],
        },
      ],
    },
    qualification: {
      title: 'Is this the right fit?',
      description:
        'Best for businesses where traffic exists but the page journey between attention and action still loses too many people.',
      strongFitTitle: 'Strong fit if',
      notDesignedTitle: 'Not the right fit if',
      strongFitItems: [
        {
          title: 'Traffic arrives but few people take the next step',
          description:
            "Visitors land, read, and leave. The problem isn't the audience — it's the page. The offer isn't clear, the CTA doesn't match, or the next step disappears.",
        },
        {
          title: 'A specific offer needs its own focused path',
          description:
            'A broad services page dilutes the message. The campaign, service, or offer needs a tighter route from click to action without competing for attention.',
        },
        {
          title: 'Enquiries come in but stall immediately',
          description:
            'Leads convert on paper. Then they drift. Slow reply, no booking step, vague follow-up. Momentum dies before a conversation starts.',
        },
      ],
      notDesignedItems: [
        {
          title: "Nobody's arriving in the first place",
          description:
            'If the issue is no traffic or no demand, conversion work has nothing to work with. Visibility and local SEO come first.',
        },
        {
          title: 'You want cosmetic changes without structural work',
          description:
            'Changing a button colour without restructuring the decision path changes nothing. This addresses the conversion path, not the surface.',
        },
        {
          title: 'The bigger leak is after contact',
          description:
            'If the main loss happens after someone reaches out — missed calls, slow replies, no routing — fixing the page just sends more people into a broken follow-up path.',
        },
      ],
    },
    faqSection: {
      badge: 'FAQ',
      title: 'Questions about conversion-layer work',
      description:
        'Honest answers from businesses that realised traffic and page performance are different problems.',
      faqs: [
        {
          question: 'Does this include landing page work?',
          answer:
            'Often, yes. Landing pages and offer pages are usually part of the conversion layer. But the broader point is making sure message, CTA, and follow-up work together — not just that a page exists.',
        },
        {
          question: 'Can this connect to CRM or booking tools?',
          answer:
            'Yes. Conversion work becomes more useful when the enquiry follow-up feeds into CRM, booking, or a follow-up sequence instead of stopping at the form.',
        },
        {
          question: 'Is this mainly for paid traffic?',
          answer:
            'No. It applies to paid, organic, local, and referral traffic. The issue is what happens after someone arrives — not how they got there.',
        },
        {
          question: 'How is this different from a website redesign?',
          answer:
            'A redesign changes the whole site. Conversion-layer work targets the specific path from attention to enquiry to action — the journey that turns a visitor into a conversation.',
        },
      ],
      cssPrefix: 'conversion-funnel-faq',
    },
  },
  cta: {
    heading: {
      title: 'Get a clear priority map for the conversion leaks that matter most',
      description:
        'We review the offer path, action step, and post-submit handoff so you leave knowing which leak is hurting revenue most, what to tighten first, and whether a fuller rebuild is actually necessary.',
    },
    actions: [{ label: 'Get Started', href: '/contact', primary: true }],
  },
} satisfies ServicePageData;
