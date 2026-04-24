import {
  Bell,
  FileText,
  Inbox,
  Mail,
  MessageSquare,
  Phone,
  Search,
  UserCheck,
  Workflow,
} from 'lucide-react';

import { buildServiceSeo } from '../seo';
import type { ServicePageData } from '../types';

const slug = 'unified-communication-system';

export const unifiedCommunicationSystemPage = {
  slug,
  systems: ['ai-lead-handling'],
  topics: ['lead-routing', 'lead-management'],
  badge: 'Unified Communication System',
  category: 'Communication Routing Systems',
  seo: buildServiceSeo({
    slug,
    title: 'Unified Communication System for Service Businesses | MindWP',
    description:
      'Enquiries arrive through calls, forms, chat, and email. Nobody sees the full picture. Unified communication with clear routing, ownership, and follow-up across every channel.',
  }),
  hero: {
    badge: 'Unified Communication System',
    title: "Five Channels. Three Inboxes. Nobody Knows What's Live.",
    description:
      'Call comes in. Form gets submitted. Someone messages on chat. Each one lands somewhere different. Which conversations are live? Who owns them? What happened before?',
    list: ['Calls in one place', 'Forms in another', 'Chat somewhere else'],
    cssPrefix: 'unified-communication-hero',
    backgroundColor: 'bg-gradient-surface-muted',
  },
  sections: {
    foundation: {
      badge: 'The fragmentation problem',
      title: 'Not a channel problem. A routing problem.',
      description:
        'Calls, forms, chat, email. They arrive. Land in different places. Get seen by different people. Thread dies.',
      painPoints: [
        {
          before:
            'Messages in five places. No single view of what came in, who replied, or what fell through.',
          after: 'Incoming conversations route through a shared layer. Nothing sits unseen.',
        },
        {
          before: 'Three people see the message. Nobody replies. Or two reply differently.',
          after: 'One owner per conversation. One person accountable.',
        },
        {
          before:
            'Someone calls, fills a form, sends a message. Three contacts. Treated like three cases.',
          after: 'Contact matching carries context forward. One response, not three.',
        },
      ],
    },
    channelSignals: {
      badge: 'Where the enquiries come from',
      title: 'More channels, more need for clear routing',
      description:
        "Each new channel adds value when routed properly. Without that, it's just more noise.",
      items: [
        {
          icon: Phone,
          title: 'Calls and missed calls',
          description:
            'Call enquiries carry strong intent, but routing and follow-up are often inconsistent. The call finishes and the next step disappears.',
          iconType: 'primary' as const,
        },
        {
          icon: FileText,
          title: 'Website forms and landing pages',
          description:
            'Form leads arrive in one place. Then ownership and next steps become unclear. The submission happened. What comes after is a guess.',
          iconType: 'secondary' as const,
        },
        {
          icon: MessageSquare,
          title: 'Chat and direct messaging',
          description:
            "Chat, SMS, and social messages create response gaps because the team can't see the full thread. Quick channels need quick routing.",
          iconType: 'accent' as const,
        },
        {
          icon: Mail,
          title: 'Email and ongoing threads',
          description:
            'Inbox traffic keeps growing but the team treats it as personal inbox work instead of a shared queue. Important replies get buried.',
          iconType: 'primary' as const,
        },
      ],
    },
    ownershipRisks: {
      badge: 'What usually goes wrong',
      title: 'These are routing problems, not technology problems',
      description:
        'Adding more tools to a broken model just spreads the mess. These are signs the business needs clearer rules \u2014 not another app.',
      lists: [
        {
          title: 'Ownership risks',
          issues: [
            {
              title: 'No one owns the next step',
              description: 'Message gets seen. What happens after? Nothing. Conversation stalls.',
            },
            {
              title: 'Two people respond differently',
              description:
                'The same enquiry gets conflicting answers because there is no single handling path.',
            },
            {
              title: 'Handling depends on who sees it first',
              description:
                'The process changes based on which person happens to be available, not a defined rule.',
            },
          ],
        },
        {
          title: 'Routing risks',
          issues: [
            {
              title: 'High-intent messages wait too long',
              description:
                'Urgent commercial enquiries are mixed with low-priority noise. The important ones do not surface fast enough.',
            },
            {
              title: 'Context dies between channels',
              description:
                'A person calls, then fills a form, then sends a chat message. The team treats each contact as a new case.',
            },
            {
              title: 'Follow-up falls apart after the first reply',
              description:
                'The initial response happens. Then the booking, quote, or callback path becomes unclear and momentum dies.',
            },
          ],
        },
      ],
    },
    workflowExamples: {
      badge: 'Routing in practice',
      title: 'What clearer routing actually looks like',
      description:
        'Details vary, but the benefit is the same: the business knows where each conversation should go and who owns it.',
      items: [
        {
          trigger: 'A prospect fills in a website form, then calls before anyone replies.',
          actions: [
            'Match the contact to the same conversation thread',
            'Route the case to the right owner with full context attached',
            'Prevent duplicate or conflicting replies',
            'Move the conversation toward a single clear next step',
          ],
        },
        {
          trigger: 'Messages arrive through chat, email, and SMS during a busy afternoon.',
          actions: [
            'Triage by urgency and commercial intent',
            'Assign clear ownership instead of leaving everything open',
            'Keep the team aware of what is live without checking five places',
            'Reduce the chance of a conversation dying in silence',
          ],
        },
        {
          trigger:
            'A missed call needs to become a tracked follow-up, not a voicemail nobody checks.',
          actions: [
            'Carry the call event into the routing layer',
            'Log the conversation where the team can see it',
            'Route it into callback, booking, or enquiry handling',
            'Make the handoff visible and accountable',
          ],
        },
      ],
    },
    operatingLayers: {
      badge: 'How it works',
      title: 'Three layers behind the communication flow',
      description:
        'Not just one inbox screen. Defines where messages go, who owns them, what happens next.',
      introBadge: 'Operating layers',
      introTitle: 'What sits inside the routing setup',
      introDescription:
        'These parts turn scattered inbox habits into something the team can actually work from.',
      columns: [
        {
          title: 'Intake and consolidation',
          icon: Inbox,
          features: [
            {
              icon: Inbox,
              name: 'Shared intake view',
              detail:
                'Calls, forms, chat, and email arrive in one visible layer instead of five separate places.',
            },
            {
              icon: Search,
              name: 'Conversation visibility',
              detail:
                'See which channel the message came from and what already happened before this touchpoint.',
            },
            {
              icon: Bell,
              name: 'Priority surfacing',
              detail:
                'Commercially important or urgent conversations surface faster than routine noise.',
            },
          ],
        },
        {
          title: 'Routing and ownership',
          icon: Workflow,
          features: [
            {
              icon: UserCheck,
              name: 'Named owner',
              detail:
                'Each conversation has one person who is responsible for the next step. No ambiguity.',
            },
            {
              icon: Workflow,
              name: 'Next-step rules',
              detail:
                'Defined paths by conversation type: booking, quote, support, or follow-up. Not improvised.',
            },
            {
              icon: MessageSquare,
              name: 'Context handoff',
              detail:
                'Previous conversation history carries forward. The customer does not restart on every channel.',
            },
          ],
        },
        {
          title: 'Continuity and follow-up',
          icon: Mail,
          features: [
            {
              icon: Mail,
              name: 'Thread visibility',
              detail:
                'Later replies, updates, and follow-up stay inside a visible conversation history. Nothing lost between exchanges.',
            },
            {
              icon: Phone,
              name: 'Callback support',
              detail:
                'Follow-up is easier when messages that need a human response have a clear path back to the right person.',
            },
            {
              icon: Bell,
              name: 'Fewer silent drops',
              detail:
                'Conversations are less likely to die because nobody saw or owned the next action.',
            },
          ],
        },
      ],
    },
    qualification: {
      title: 'Is this the right fit?',
      description:
        'Best for businesses where enquiries span several channels and the team needs clearer routing and ownership, not more notifications.',
      strongFitTitle: 'Strong fit if',
      notDesignedTitle: 'Not the right fit if',
      strongFitItems: [
        {
          title: 'Enquiries arrive through four or more channels',
          description:
            'Calls, forms, chat, email, and SMS all carry commercial weight. The team has no shared view across them and important messages get buried.',
        },
        {
          title: 'No one owns what happens after the first reply',
          description:
            'Multiple people see incoming messages. No one is accountable for the next step. Conversations stall because ownership is assumed, not assigned.',
        },
        {
          title: 'Conversations jump channels and lose context',
          description:
            'Someone calls, then fills a form, then sends a message. Each touchpoint gets treated like a new case. Nothing carries forward.',
        },
      ],
      notDesignedItems: [
        {
          title: 'You only have one enquiry channel',
          description:
            'If everything arrives through one path, routing adds complexity without solving a real problem. Keep it simple.',
        },
        {
          title: 'You expect tools to replace ownership decisions',
          description:
            'Routing tools move messages. Someone still needs to define who owns what and when. Rules come first, tools come second.',
        },
        {
          title: 'Traffic is the bottleneck, not handling',
          description:
            'If enquiry volume is too low, improving the routing will not create the conversations that are missing. Fix visibility first.',
        },
        {
          title: 'The team already works from one clear shared queue',
          description:
            'If every important conversation already lands in one visible place with named ownership and reliable follow-up, this is not the first problem to solve.',
        },
      ],
    },
    faqSection: {
      badge: 'FAQ',
      title: 'Questions about unified communication',
      description:
        'Honest answers from businesses that realised their communication problem was a routing problem.',
      faqs: [
        {
          question: 'Can this connect with missed call recovery and booking?',
          answer:
            'Yes. Works well alongside missed call recovery, booking, CRM, or AI lead handling. Routing helps those pieces connect instead of running in parallel.',
        },
        {
          question: 'Do all channels need to be handled the same way?',
          answer:
            'No. The point is not to force every message through an identical script. Each channel gets a clear route, a named owner, and a defined next action.',
        },
        {
          question: 'Is this useful for smaller teams?',
          answer:
            'Yes. Smaller teams feel the impact of fragmented communication more sharply. One missed response from a three-person team hits harder than from a thirty-person team. A simpler routing model still makes a meaningful difference.',
        },
        {
          question: 'How is this different from using a shared inbox?',
          answer:
            'A shared inbox is one tool. This decides who owns each conversation, what the next step is, and how context carries across channels. The inbox is where messages land. Routing decides what happens after.',
        },
      ],
      cssPrefix: 'unified-communication-faq',
    },
    comparison: {
      header: {
        title: 'Inbox chaos vs routing that works',
        description:
          "Most businesses add channels without fixing what's behind them. Here's what that costs.",
      },
      items: [
        {
          type: 'before' as const,
          title: 'Inbox chaos',
          items: [
            'Calls, forms, chat, and emails land in different places with no shared view. High-intent enquiries sit unseen.',
            'Nobody knows who should reply. Conversations stall until someone decides to act, and by then the prospect has moved on.',
            'The same enquiry gets answered twice or not at all. The team wastes effort or loses the lead entirely.',
            'Context lost every time the conversation moves to a different channel. The customer repeats themselves and trust drops.',
            'Follow-up depends on who happens to check first. Response quality changes with every shift.',
          ],
        },
        {
          type: 'after' as const,
          title: 'Routing that works',
          items: [
            'All channels route into one shared view with clear ownership. Every message has a visible path to the right person.',
            'Each conversation has a named owner and a defined next step. Nothing sits unowned or unanswered.',
            'Duplicate handling reduced by matching contacts across channels. The team responds once, not three times.',
            'Context carries forward between channels. The customer does not repeat themselves. The team picks up where it left off.',
            'Follow-up runs on routing rules. Response consistency stops depending on who checks their inbox first.',
          ],
        },
      ],
    },
    proof: {
      header: {
        title: 'An electrical contractor that stopped losing conversations between channels',
        description:
          'Six-person team. Three vans on the road. Enquiries coming through calls, website forms, WhatsApp, and email. Nobody had the full picture.',
      },
      cards: [
        {
          title: 'Before: five channels, no routing',
          description:
            "Calls went to the office phone. Forms to Gmail. WhatsApp to the owner's personal phone. Emails to whoever the customer last spoke to. No idea what was live.",
          points: [
            'Office manager handled calls. No visibility of WhatsApp or form leads. Jobs booked from calls while form enquiries waited days.',
            "WhatsApp sat on the owner's phone. Busy weeks, threads went cold. Same customer calling, emailing, messaging \u2014 treated as three separate people.",
          ],
        },
        {
          title: 'What changed: one shared routing layer across all channels',
          description:
            'Every inbound message now routes into one view. Named owner. Defined next step. One queue instead of five. Same approach whether it started as a missed call, a form, or a WhatsApp message.',
          points: [
            'Calls, forms, WhatsApp, and email feed into a single intake view. The office manager sees everything, not just phone calls.',
            'Each conversation is assigned to one person. The owner stops being the default handler for every WhatsApp thread.',
            'Contact matching links messages from the same person across channels. One customer, one thread, one response.',
          ],
          featured: true,
        },
        {
          title: 'After: fewer missed conversations, faster follow-up',
          description:
            'First month, missed conversations dropped. Response times improved. The owner got his evenings back because WhatsApp had a route.',
          points: [
            'Missed conversations roughly halved. Nothing changed except every message had a visible owner.',
            'First-response time from over a day to under four hours. Routing was the bottleneck. Not capacity.',
            'Owner off WhatsApp. Two team members managing all channels from one view. Urgent jobs escalated.',
          ],
        },
      ],
    },
  },
  inlineCta: {
    title: 'Which channel is dropping your live conversations?',
    description:
      'Fifteen minutes. Map your channels, see where context breaks, and identify where routing needs to change first.',
  },
  cta: {
    title: 'Find out where conversations are falling apart',
    description:
      'Quick list of how enquiries come in. Where the gaps are. What fixing the routing looks like.',
  },
} satisfies ServicePageData;
