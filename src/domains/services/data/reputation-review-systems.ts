import { AlertTriangle, Bell, GitBranch, MessageSquare, Search, Star } from 'lucide-react';


import { buildServiceSeo } from '../seo';
import type { ServicePageData } from '../types';

const slug = 'reputation-review-systems';

export const reputationReviewSystemsPage = {
  slug,
  systems: ['reputation-review'],
  topics: [
    'review-generation',
    'review-automation',
    'reputation-monitoring',
    'customer-feedback',
    'negative-reviews',
    'feedback-loops',
  ],
  keywords: [
    'reputation management system for service businesses',
    'online review management for contractors',
    'automated review request system',
    'google review generation system',
    'customer feedback automation system',
  ],
  badge: 'Reputation & Review Systems',
  category: 'Trust Systems',
  seo: buildServiceSeo({
    slug,
    title: 'Reputation & Review Systems for Service Businesses | MindWP',
    description:
      'Turn customer satisfaction into visible trust. Automated review requests, negative feedback routing, and reputation monitoring that builds credibility consistently.',
    schemaName: 'Reputation and review systems for service businesses',
    schemaDescription:
      'Review-generation and reputation-management systems for service businesses, including request timing, feedback routing, monitoring, and trust-building workflows.',
  }),
  hero: {
    badge: 'Reputation & Review Systems',
      title: 'Build Local Trust Before One Bad Review Wins',
    description:
      'Most service businesses do good work but have weak reviews. Happy customers forget to leave feedback. Unhappy ones post publicly before you know there is a problem. A structured reputation system fixes both.',
    list: [
        'Review Requests',
        'Feedback Routing',
        'Trust Signals',
    ],
    cssPrefix: 'reputation-review-hero',
    backgroundColor: 'bg-gradient-surface-muted',
  },
  sections: {
    foundation: {
      badge: 'Why review efforts stall',
      title: 'The real reason your reviews are not growing',
      description:
        'The issue is rarely about asking more often. It is about timing, ownership, and having a clear path for both good feedback and complaints.',
      painPoints: [
        {
          before:
            'Reviews are requested only when someone remembers, so results stay inconsistent.',
          after:
            'Requests go out at the right moment with clear timing and follow-through.',
        },
        {
          before: 'Negative feedback appears publicly because there is no internal routing.',
          after:
            'Feedback is captured and routed internally before it becomes a public trust problem.',
        },
        {
          before:
            'The business wants more trust online but there is no logic behind requests or responses.',
          after:
            'Reviews, responses, and monitoring work together as a system that builds credibility over time.',
        },
      ],
    },
    reviewSystem: {
      badge: 'Core system layers',
      title: 'How the reputation system works',
      description:
        'The right setup depends on how customers interact with the business, when trust is earned, and how feedback should be handled before it becomes a public problem.',
      cards: [
        {
          title: 'Automated review request workflow',
          description:
            'Customers are asked for feedback at the right stage after service delivery — automatically, without your team remembering to send it.',
          points: [
            'Timing rules based on service completion',
            'Channel choice based on customer behaviour',
            'Follow-up logic without over-messaging',
          ],
          featured: true,
        },
        {
          title: 'Negative feedback routing',
          description:
            'Unhappy responses are caught and routed to the right person internally before they become unmanaged public reviews.',
          points: [
            'Internal escalation paths for complaints',
            'Clear response ownership',
            'Consistent handling of issues',
          ],
        },
        {
          title: 'Monitoring and trust upkeep',
          description:
            'A regular process for tracking review signals, spotting patterns, and maintaining credibility across platforms.',
          points: [
            'Review visibility tracking across platforms',
            'Response discipline and consistency',
            'Trust signals connected to local presence and conversions',
          ],
        },
      ],
    },
    positioning: {
      badge: 'What changes',
      title: 'What changes when trust is managed deliberately',
      description:
        'This is not about increasing star ratings. It is about making trust more consistent through better timing, better routing, and better response discipline.',
      tagline: 'Trust should be managed deliberately, not left to chance.',
      narrativeTitle: 'For many businesses, trust is the real conversion bottleneck',
      narrativeParagraphs: [
        'Some businesses mainly need a clear website and reliable trust signals. If people already find the business but hesitate because reviews are weak, inconsistent, or unmanaged, reputation work has immediate commercial value.',
        'Review strength supports local SEO, conversion confidence, and repeat business — but only when it is tied to real operational moments and real customer journeys.',
      ],
      features: [
        {
          title: 'Better review velocity',
          description:
            'More customers asked at the right time instead of relying on manual memory. Reviews grow consistently.',
          icon: Star,
        },
        {
          title: 'Cleaner issue handling',
          description:
            'Negative experiences routed properly so the team can act before trust damage spreads.',
          icon: AlertTriangle,
        },
        {
          title: 'Stronger local trust signals',
          description:
            'Review quality, recency, and response discipline reinforce credibility when prospects compare providers.',
          icon: Search,
        },
      ],
    },
    processSection: {
      badge: 'How it works',
      title: 'How a reputation system gets built',
      description:
        'Every business has different trust gaps. The process below adapts to your situation, but the structure stays consistent.',
      steps: [
        {
          number: '1',
          title: 'Map the trust moments',
          description:
            'We identify the exact points after service where a request makes sense — before the customer forgets or moves on.',
        },
        {
          number: '2',
          title: 'Build request and routing logic',
          description:
            'Positive experiences get directed toward reviews. Negative feedback gets routed to your team before it goes public.',
        },
        {
          number: '3',
          title: 'Set monitoring and response ownership',
          description:
            'Someone is responsible for what shows up publicly. Review responses happen consistently instead of when someone remembers.',
        },
        {
          number: '4',
          title: 'Review and tighten over time',
          description:
            'We look at what is working, what is being ignored, and where trust signals are weakening — then adjust.',
        },
      ],
    },
    capabilitySection: {
      badge: 'What is included',
      title: 'What a reputation system typically covers',
      description:
        'Not every business needs every piece, but these are the layers that matter when trust is directly affecting whether people enquire.',
      services: [
        {
          title: 'Request and follow-up workflows',
          icon: Bell,
          items: [
            'Automated review request timing after service delivery',
            'Channel-specific request flows (SMS, email, in-person prompts)',
            'Follow-up sequences that do not over-message',
            'Segmentation by customer type or service category',
          ],
        },
        {
          title: 'Feedback routing and escalation',
          icon: GitBranch,
          items: [
            'Negative feedback caught and routed before public posting',
            'Clear escalation ownership so nothing gets ignored',
            'Issue-handling steps that protect reputation proactively',
            'Internal visibility on trust risks across the team',
          ],
        },
        {
          title: 'Monitoring and response discipline',
          icon: MessageSquare,
          items: [
            'Regular monitoring across Google, directories, and platforms',
            'Response standards so public replies are consistent and professional',
            'Trust-signal maintenance as part of ongoing operations',
            'Connection to local SEO and conversion goals where relevant',
          ],
        },
      ],
    },
    qualification: {
      title: 'Is this the right fit for your business?',
      description:
        'This works well for businesses where trust, reviews, and customer perception are directly affecting enquiries and conversions.',
      strongFitTitle: 'Strong fit if',
      notDesignedTitle: 'Not the right fit if',
      strongFitItems: [
        {
          title: 'Your reviews are weak or inconsistent despite good work',
          description:
            'You do good work but your review profile does not reflect that. Customers leave happy but rarely leave feedback.',
        },
        {
          title: 'Trust is the main reason prospects hesitate',
          description:
            'People find your business but choose competitors with more reviews or better ratings.',
        },
        {
          title: 'You want a system, not just more review requests',
          description:
            'You want timing, routing, and monitoring handled together — not just another email asking for a review.',
        },
      ],
      notDesignedItems: [
        {
          title: 'You want fake or manipulative review tactics',
          description:
            'This is about structured trust-building, not shortcuts or artificial reputation inflation.',
        },
        {
          title: 'Your team is not willing to address customer experience issues',
          description:
            'The system can route and surface feedback, but it cannot replace operational accountability.',
        },
        {
          title: 'Visibility is the bigger problem',
          description:
            'If the business is not being found in the first place, local visibility and website work may need attention first.',
        },
      ],
    },
    comparison: {
      header: {
        title: 'Manual review management vs a structured reputation system',
        description:
          'Most businesses rely on memory and good intentions to manage their reputation. Here is what that costs compared to a structured approach.',
      },
      items: [
        {
          type: 'before' as const,
          title: 'Manual review management',
          items: [
            'Review requests sent only when someone remembers — weeks after service',
            'Negative feedback appears publicly with no warning or internal routing',
            'No consistent monitoring of review platforms or trust signals',
            'Responses to reviews are sporadic or non-existent',
            'Team has no visibility into overall reputation health',
          ],
        },
        {
          type: 'after' as const,
          title: 'Structured reputation system',
          items: [
            'Automated requests sent at the right moment after service completion',
            'Negative feedback caught and routed internally before it becomes public',
            'Regular monitoring across Google, directories, and review platforms',
            'Response discipline maintained with clear ownership and consistency',
            'Team can see review trends, response rates, and trust signal health',
          ],
        },
      ],
    },
    proof: {
      header: {
        title: 'What this looks like when it is running',
        description:
          'A home services business had strong customer satisfaction but a weak review profile. Competitors with worse service ranked higher because they had more reviews.',
      },
      cards: [
        {
          title: 'Before: happy customers, almost no reviews',
          description: 'The business completed hundreds of jobs per year with high satisfaction. But review requests were manual and inconsistent. Their Google profile had a handful of reviews while competitors had hundreds.',
          points: [
            'Fewer than 20 Google reviews after years in business',
            'No structured process for requesting feedback',
            'Negative experiences occasionally appeared publicly without warning',
          ],
        },
        {
          title: 'What we built: automated review requests with feedback routing',
          description: 'We set up automated review requests triggered after job completion, negative feedback routing to the team before it went public, and monitoring across review platforms.',
          points: [
            'Review requests sent automatically after service delivery',
            'Negative feedback routed internally before public posting',
            'Review monitoring configured across Google and directories',
          ],
          featured: true,
        },
        {
          title: 'After: consistent review growth and earlier issue resolution',
          description: 'Within three months, review volume grew significantly. The team caught and resolved complaints before they became public problems. The business started appearing more prominently in local searches.',
          points: [
            'Review count grew consistently month over month',
            'Negative feedback caught earlier — fewer public complaints',
            'Improved local search visibility as review signals strengthened',
          ],
        },
      ],
    },
    faqSection: {
      badge: 'FAQ',
      title: 'Common questions about reputation systems',
      description:
        'Practical questions that come up when businesses realise trust is becoming a growth constraint.',
      faqs: [
        {
          question: 'Can this work without changing our whole website?',
          answer:
            'Yes. A business can improve trust with a reputation system even before larger website work happens. The best results come when website clarity and reputation signals support each other.',
        },
        {
          question: 'Will this help us get more Google reviews?',
          answer:
            'Yes, that is a typical outcome. But the real goal is a repeatable system that improves review consistency, issue handling, and public trust over time.',
        },
        {
          question: 'Do you help with responding to reviews?',
          answer:
            'Yes. Response discipline is part of reputation management because public replies shape trust just as much as the rating itself.',
        },
        {
          question: 'Is this a standalone service or part of a wider system?',
          answer:
            'It can be either. Some businesses need this as a focused trust layer first. Others use it alongside local SEO, website improvements, or CRM follow-up.',
        },
      ],
      cssPrefix: 'reputation-review-faq',
    },
  },
  inlineCta: {
    title: 'Not sure if weak reviews are costing you business?',
    description:
      'Tell us about your current review situation. We will show you where trust gaps are affecting your enquiries and what a structured reputation system would change.',
  },
  cta: {
    title: 'Make trust part of the system instead of leaving it to chance',
    description:
      'Tell us how reviews and feedback are handled now. We will show you how to collect more proof, catch issues earlier, and build credibility that converts.',
  },
} satisfies ServicePageData;
