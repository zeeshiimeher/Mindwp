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
    'negative-review-response',
  ],
  keywords: [
    'reputation management system for service businesses',
    'online review management for contractors',
    'review automation system',
    'automated review request system',
    'google review request automation',
    'google review generation system',
    'customer feedback automation system',
  ],
  badge: 'Reputation & Review Systems',
  category: 'Trust Systems',
  seo: buildServiceSeo({
    slug,
    title: 'Reputation & Review Management for Service Businesses | MindWP',
    description:
      "Your customers are happy. Your reviews don't show it. Timed review requests, complaint routing, and monitoring that turns real satisfaction into visible proof.",
    schemaName: 'Reputation and review management for service businesses',
    schemaDescription:
      'Review collection, feedback routing, and reputation monitoring for service businesses where trust directly affects whether people enquire.',
  }),
  hero: {
    badge: 'Reputation & Reviews',
    title: 'Happy Customers Walk Out. Say Nothing.',
    description:
      'A hundred jobs last quarter. Good ones. Customers thanked you on the way out. Four left a review. Competitor with half your skill has three times your proof.',
    list: ['Happy. Silent.', 'Competitors look more trustworthy'],
    cssPrefix: 'reputation-review-hero',
    backgroundColor: 'bg-gradient-surface-muted',
  },
  sections: {
    foundation: {
      badge: 'Why your reviews are stuck',
      title: 'Not about asking more. About asking when it counts.',
      description:
        "Customer leaves happy. Two weeks pass. Forgotten the business name. That five-star review? Doesn't exist.",
      painPoints: [
        {
          before:
            "Someone has to remember to ask. They don't. Review count hasn't moved in months.",
          after:
            'Request goes out after the job. Right timing. Reviews grow without anyone chasing.',
        },
        {
          before: "One-star notification. That's how you find out someone's unhappy.",
          after:
            'Feedback gets routed to the team first. Complaint handled before it goes permanent.',
        },
        {
          before: 'Google, directories, social \u2014 nobody checks. Trust erodes quietly.',
          after: 'Monitoring catches it. Replies go out. Profile stays managed.',
        },
      ],
    },
    reviewSystem: {
      badge: 'How it works',
      title: 'What it actually does when reviews are working',
      description:
        "Depends on your business. When customers are happiest, how they communicate, what to do when someone's unhappy. Three parts.",
      cards: [
        {
          title: 'Ask at the right moment',
          description:
            "Not two weeks after the job. Right after the handshake. When they're still feeling it.",
          points: ['Request sent the same day', 'Via the channel the customer actually checks'],
          featured: true,
        },
        {
          title: 'Catch complaints before they go public',
          description:
            'Unhappy feedback gets flagged internally. Not buried. Not ignored. Handled before it turns into a permanent one-star that sits at the top of the profile for months.',
          points: [
            'Complaints sent straight to the person who can fix it',
            'Named owner — not a shared inbox',
            "Resolved before it becomes someone's first impression of your business",
          ],
        },
        {
          title: "Keep an eye on what's out there",
          description:
            "Google, directories, social. Reviews come in. Some are fair. Some aren't. Responses go out either way.",
          points: [
            'Monitoring across the platforms that actually matter for your trade',
            'Replies that show the business is awake',
          ],
        },
      ],
    },
    positioning: {
      badge: 'What shifts',
      title: 'When trust stops being accidental',
      description:
        'Not about chasing five stars. About making sure the good work you already do shows up where people look before they call.',
      tagline: 'Turn real work into visible proof.',
      narrativeTitle: 'For some businesses, trust is the real bottleneck',
      narrativeParagraphs: [
        "People find you. Look at the reviews. Twelve total, one from 2022. Competitor has eighty. They get the call. Not because they're better.",
        'When collection, complaint handling, and response all run, the gap closes. Steadily. And it feeds back into whether people bother reaching out at all.',
      ],
      features: [
        {
          title: 'Reviews actually grow',
          description:
            'Customers asked at the right time, in the right way. Count moves up month after month without anyone chasing.',
          icon: Star,
        },
        {
          title: 'Problems caught early',
          description:
            "Complaints routed internally before they're posted publicly. The team gets a chance to fix it.",
          icon: AlertTriangle,
        },
        {
          title: 'Prospects see a business that cares',
          description:
            'Recent reviews. Thoughtful replies. A profile that says this business is active, real, and responsive.',
          icon: Search,
        },
      ],
    },
    processSection: {
      badge: 'How it gets built',
      title: 'Steps. Not guesswork.',
      description:
        'Different businesses have different trust gaps. The build adapts. The structure stays the same.',
      steps: [
        {
          number: '1',
          title: 'Find when customers are happiest',
          description:
            "Identify when satisfaction peaks \u2014 right after the service, right after the result. That's when the ask lands.",
        },
        {
          number: '2',
          title: 'Build the request and routing rules',
          description:
            'Happy feedback aimed at a review. Unhappy feedback aimed at your team. Each goes where it should.',
        },
        {
          number: '3',
          title: 'Set up monitoring and response ownership',
          description:
            "Someone owns what's public. Replies happen consistently. Nothing sits there unanswered for weeks.",
        },
        {
          number: '4',
          title: 'Refine from real results',
          description:
            "Track what's working, where trust is still weak. Adjust. Gets sharper over time.",
        },
      ],
    },
    capabilitySection: {
      badge: "What's included",
      title: 'The parts that matter when trust drives enquiries',
      description: 'Not every business needs all of this. Depends on where your trust gap is.',
      services: [
        {
          title: 'Review request and follow-up',
          icon: Bell,
          items: [
            'Timed requests after each job — sent when satisfaction is highest',
            'SMS, email, or in-person prompt depending on how the customer communicates',
            'Follow-up if no response, without overdoing it',
            'Different handling for different service types if needed',
          ],
        },
        {
          title: 'Complaint routing and escalation',
          icon: GitBranch,
          items: [
            'Unhappy responses caught and sent to the right person before they go public',
            'Named ownership — someone is responsible for handling it',
            'Steps for resolving the issue before it becomes a permanent review',
            'Visibility across the team so nothing gets buried',
          ],
        },
        {
          title: 'Monitoring and public response',
          icon: MessageSquare,
          items: [
            'Regular checks across Google, directories, and relevant platforms',
            'Public replies that are consistent, professional, and timely',
            'Trust health tracked over time — not just star count',
            'Ties into local visibility and conversion work where it helps',
          ],
        },
      ],
    },
    qualification: {
      title: 'Is this right for your business?',
      description:
        'Works when trust is the thing between you and more work. If people find you but hesitate, this is probably why.',
      strongFitTitle: 'Strong fit if',
      notDesignedTitle: 'Not the right fit if',
      strongFitItems: [
        {
          title: "You do good work but your reviews don't show it",
          description:
            'Customers leave happy. Evidence never shows up online. Competitors with worse service look more credible because they have more proof.',
        },
        {
          title: 'People find you but choose someone else',
          description:
            'They check reviews before calling. Yours are thin, old, or inconsistent. The business with eighty recent reviews gets the job.',
        },
        {
          title: 'You want this handled, not hacked together',
          description:
            'Not a manual email blast. Timing, routing, monitoring, and responses running together. Managed, not improvised.',
        },
      ],
      notDesignedItems: [
        {
          title: 'You want fake or inflated reviews',
          description:
            "This builds real trust from real customers. If you want fabricated ratings, this isn't the right service.",
        },
        {
          title: "The team won't act on complaints",
          description:
            'Routing feedback to your team only works if someone actually addresses it. If complaints will be ignored either way, the routing changes nothing.',
        },
        {
          title: "Nobody's finding your business yet",
          description:
            "If the issue is visibility, not trust, reviews alone won't fix it. Get found first. Then make sure what people see looks right.",
        },
      ],
    },
    comparison: {
      header: {
        title: 'Leaving it to chance vs managing it properly',
        description:
          "Most businesses rely on memory and good intentions. Here's what that looks like next to a business that actually manages its reputation.",
      },
      items: [
        {
          type: 'before' as const,
          title: 'Left to chance',
          items: [
            "Reviews requested when someone remembers. Weeks after the job. The customer's already forgotten the company name.",
            'A one-star review appears. No warning. No chance to fix it first. Hundreds of prospects see it before anyone on the team does.',
            "No idea what's being said across Google, directories, or social. Trust quietly eroding.",
            "Public replies are sporadic or missing entirely. To a prospect, it looks like the business doesn't care.",
            'No view of reputation health. Problems compound in silence until enquiries dry up.',
          ],
        },
        {
          type: 'after' as const,
          title: 'Managed deliberately',
          items: [
            'Requests go out at the right moment. Customers asked while satisfaction is highest. Reviews grow month over month.',
            'Complaints caught and routed to the team before they go public. Problems resolved, not broadcast.',
            'Google, directories, and platforms monitored regularly. Nothing surfaces without the team knowing.',
            'Public replies consistent, professional, and timely. Prospects see a business that pays attention.',
            'Trust visible. Review trends, response rates, and profile strength tracked.',
          ],
        },
      ],
    },
    proof: {
      header: {
        title: 'What happened at an auto repair garage',
        description:
          'Good mechanics. Loyal regulars. Twelve Google reviews after four years in business. The shop down the road had ninety.',
      },
      cards: [
        {
          title: 'Before: great work, invisible online',
          description:
            'Hundreds of jobs a year. Customers came back. But the review profile was almost empty. Nobody ever asked. The occasional text went out when the owner remembered. Usually too late.',
          points: [
            'Twelve reviews in four years. Customers were happy. Just never bothered.',
            'One bad review from a misunderstanding sat at the top. No reply. That was the first thing anyone saw.',
          ],
        },
        {
          title: 'What we set up: timed requests with complaint routing',
          description:
            'Review request sent after every completed job. Simple rating step — happy customers directed to Google, unhappy responses sent straight to the owner.',
          points: [
            "SMS request goes out the same day the car is picked up. That's when satisfaction peaks.",
            'Negative feedback routed to the owner privately. Handled before it becomes permanent.',
            'Google profile monitored. Public replies posted within the day.',
          ],
          featured: true,
        },
        {
          title: 'After: reviews growing, complaints caught',
          description:
            "Three months in, over fifty new reviews. The bad one was buried. Two complaints caught privately that would've gone public.",
          points: [
            "Fifty-odd new reviews. All real. All from that week's customers.",
            "Two complaints caught privately. Would've been one-stars. Weren't.",
            "Started getting calls from people they'd never spoken to. The profile was doing the work before anyone picked up the phone.",
          ],
        },
      ],
    },
    faqSection: {
      badge: 'FAQ',
      title: 'Questions about reputation and reviews',
      description: 'What people ask before they start.',
      faqs: [
        {
          question: 'Can we start this without changing the website?',
          answer:
            'Yes. Review collection and feedback routing work independently. Best results come when the website and trust signals support each other, but you can start here.',
        },
        {
          question: 'Will this actually get us more reviews?',
          answer:
            "Typically, yes. But the point isn't just volume. It's consistent collection, complaint handling, and a profile that looks like a business worth trusting.",
        },
        {
          question: 'Do you help with responding to reviews?',
          answer:
            'Yes. How you respond publicly matters as much as the rating. We set response standards and make sure replies go out consistently.',
        },
        {
          question: 'Is this standalone or part of something bigger?',
          answer:
            'Either. Some businesses need trust fixed first. Others use it alongside local visibility, website work, or follow-up improvements.',
        },
      ],
      cssPrefix: 'reputation-review-faq',
    },
  },
  inlineCta: {
    title: 'How do your reviews compare to the competition?',
    description: 'Your review profile vs theirs. Where trust is thin. What to fix first.',
  },
  cta: {
    title: 'See how you look next to your competitors',
    description:
      "Your reviews, their reviews. Where you're losing trust. What fixing it looks like.",
  },
} satisfies ServicePageData;
