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
  keywords: [
    'unified communication system',
    'lead routing communication system',
    'multi-channel enquiry handling',
    'business communication workflow',
    'centralised enquiry handling system',
  ],
  badge: 'Unified Communication System',
  category: 'Communication Routing Systems',
  seo: buildServiceSeo({
    slug,
    title: 'Unified Communication System for Service Businesses | MindWP',
    description:
      'Stop losing enquiries across calls, forms, chat, and inboxes. Unified communication systems with clear routing, ownership, and follow-up for every channel.',
    schemaName: 'Unified communication system for service businesses',
    schemaDescription:
      'A structured communication-routing system covering calls, forms, chat, email, and message handoff so service businesses can reduce missed conversations and improve ownership.',
  }),
  hero: {
    badge: 'Unified Communication System',
      title: 'Route Every Enquiry Through One Clear Communication System',
    description:
      'Calls, forms, chat, and inbox messages all need a clear path to the right person and the right next step. Without that, good conversations disappear in the noise.',
    list: [
        'Channel Routing',
        'Clear Ownership',
        'Faster Response',
    ],
    cssPrefix: 'unified-communication-hero',
    backgroundColor: 'bg-gradient-surface-muted',
  },
  sections: {
    foundation: {
      badge: 'Where communication breaks down',
      title: 'Messages get missed when there are many channels but no clear routing model',
      description:
        'The issue is not channel volume. It is that calls, forms, chat, and inbox replies arrive without one shared handling model behind them.',
      painPoints: [
        {
          before:
            'Calls, forms, chat, and inbox messages arrive in different places with no shared view.',
          after:
            'Incoming conversations are routed through a clearer communication structure.',
        },
        {
          before: 'Several people reply, nobody replies, or the handoff happens too late.',
          after: 'Ownership is explicit — each conversation has a clear path to action.',
        },
        {
          before: 'The same enquiry gets repeated across channels with no context carried forward.',
          after: 'Routing logic reduces duplicated effort and confusion.',
        },
      ],
    },
    channelSignals: {
      badge: 'Where the traffic comes from',
      title: 'The system matters most when enquiries come through multiple front doors',
      description:
        'The stronger the channel mix, the more valuable it is to have one clear routing model behind it.',
      items: [
        {
          icon: Phone,
          title: 'Calls and missed calls',
          description:
            'Useful when call enquiries still carry strong intent but routing and follow-up are inconsistent.',
          iconType: 'primary' as const,
        },
        {
          icon: FileText,
          title: 'Website forms and landing pages',
          description:
            'Useful when form leads arrive in one place but the ownership and next step remain unclear afterwards.',
          iconType: 'secondary' as const,
        },
        {
          icon: MessageSquare,
          title: 'Chat and direct messaging',
          description:
            'Useful when chat, SMS, or social messages create response gaps because nobody sees the full conversation clearly.',
          iconType: 'accent' as const,
        },
        {
          icon: Mail,
          title: 'Email and ongoing updates',
          description:
            'Useful when inbox traffic keeps growing but the team still treats it as individual inbox work instead of a shared workflow.',
          iconType: 'primary' as const,
        },
      ],
    },
    ownershipRisks: {
      badge: 'What usually goes wrong',
      title:
        'Communication issues show up as routing problems, not technology problems',
      description:
        'These are signs the business needs a clearer routing layer before adding more channels or automation.',
      lists: [
        {
          title: 'Ownership risks',
          issues: [
            {
              title: 'Nobody owns the next step',
              description:
                'A message is seen, but there is no named person responsible for what happens after that.',
            },
            {
              title: 'Two people respond differently',
              description:
                'The same enquiry gets inconsistent answers because the business lacks a single flow for handling it.',
            },
            {
              title: 'Messages depend on personal inbox habits',
              description:
                'The process changes based on who is available rather than a defined business rule.',
            },
          ],
        },
        {
          title: 'Routing risks',
          issues: [
            {
              title: 'Good enquiries wait too long',
              description:
                'High-intent messages are mixed with low-priority noise and do not reach the right person quickly enough.',
            },
            {
              title: 'Context gets lost between channels',
              description:
                'A person calls, then fills a form, then sends a message, but the team still treats each contact like a new case.',
            },
            {
              title: 'Follow-up becomes fragmented',
              description:
                'The initial message is answered, but the later booking, quote, or callback path becomes unclear.',
            },
          ],
        },
      ],
    },
    workflowExamples: {
      badge: 'Routing examples',
      title: 'A useful communication system makes the next action clearer across channels',
      description:
        'The details vary, but the practical benefit is simple: the business knows where each conversation should go next.',
      items: [
        {
          trigger: 'A prospect fills in a website form, then calls before anyone replies.',
          actions: [
            'Match the contact to the same conversation path',
            'Route the case to the right owner with context attached',
            'Prevent duplicate replies or conflicting follow-up',
            'Move the conversation toward the next action cleanly',
          ],
        },
        {
          trigger: 'Messages arrive through chat, email, and SMS during a busy service period.',
          actions: [
            'Triage the messages by urgency and commercial relevance',
            'Assign clear ownership instead of leaving everything open',
            'Keep updates visible across the team',
            'Reduce the chance of silent drop-off',
          ],
        },
        {
          trigger:
            'A missed call needs to become a tracked follow-up rather than just a voicemail note.',
          actions: [
            'Carry the call event into the communication workflow',
            'Log the conversation in the right visible place',
            'Route it into callback, booking, or enquiry handling',
            'Make the handoff clear for the team',
          ],
        },
      ],
    },
    operatingLayers: {
      badge: 'How the layer is usually structured',
      title: 'Three operating layers behind the communication flow',
      description:
        'This is about the routing model, not just one inbox screen or response tool.',
      introBadge: 'Operating layers',
      introTitle: 'What usually sits inside the communication-routing layer',
      introDescription:
        'These working parts help turn multi-channel communication into a clearer system instead of a set of disconnected inbox habits.',
      columns: [
        {
          title: 'Intake and consolidation',
          icon: Inbox,
          features: [
            {
              icon: Inbox,
              name: 'Shared intake view',
              detail: 'Bring calls, forms, chat, and inbox messages into a clearer operating view.',
            },
            {
              icon: Search,
              name: 'Conversation visibility',
              detail: 'See what channel the message came from and what already happened before.',
            },
            {
              icon: Bell,
              name: 'Priority awareness',
              detail: 'Separate urgent or commercially important conversations more quickly.',
            },
          ],
        },
        {
          title: 'Routing and ownership',
          icon: Workflow,
          features: [
            {
              icon: UserCheck,
              name: 'Assigned owner',
              detail:
                'Make it obvious who should reply, call back, or move the conversation forward.',
            },
            {
              icon: Workflow,
              name: 'Next-step rules',
              detail:
                'Define whether the conversation should lead to booking, quote, support, or follow-up.',
            },
            {
              icon: MessageSquare,
              name: 'Consistent handoff',
              detail:
                'Carry context forward so the customer does not need to start again on each channel.',
            },
          ],
        },
        {
          title: 'Continuity and follow-up',
          icon: Mail,
          features: [
            {
              icon: Mail,
              name: 'Ongoing thread visibility',
              detail:
                'Keep later replies, updates, and follow-up inside a visible communication history.',
            },
            {
              icon: Phone,
              name: 'Callback and response support',
              detail:
                'Make follow-up easier when messages need human response, not just initial capture.',
            },
            {
              icon: Bell,
              name: 'Fewer silent drops',
              detail:
                'Reduce the chance that a conversation fades because nobody saw or owned the next action.',
            },
          ],
        },
      ],
    },
    qualification: {
      title: 'Is this the right fit for your business?',
      description:
        'This works best where enquiry handling is spread across several channels and the business needs clearer routing and ownership, not just more notifications.',
      strongFitTitle: 'Strong fit if',
      notDesignedTitle: 'Not the right fit if',
      strongFitItems: [
        {
          title: 'You handle enquiries across multiple channels',
          description:
            'Calls, forms, chat, email, or SMS all matter commercially and the team struggles to keep them aligned.',
        },
        {
          title: 'Nobody clearly owns the next step',
          description:
            'Several people touch incoming messages but there is no clean system for who handles what.',
        },
        {
          title: 'Conversations shift channels and lose context',
          description:
            'Someone calls, then fills a form, then sends a message — and the team treats each one like a new case.',
        },
      ],
      notDesignedItems: [
        {
          title: 'You only have one simple enquiry channel',
          description:
            'If nearly all business arrives through one clear path already, a communication-routing layer may not be the priority.',
        },
        {
          title: 'You expect automation to fix unclear ownership',
          description:
            'Tools help, but the real improvement comes from defining routing rules and responsibility first.',
        },
        {
          title: 'Traffic or trust is the larger problem',
          description:
            'If not enough good enquiries are arriving at all, visibility or reputation work may need to lead.',
        },
      ],
    },
    faqSection: {
      badge: 'FAQ',
      title: 'Common questions about unified communication',
      description:
        'Practical questions from businesses that realise the communication problem is really a routing problem.',
      faqs: [
        {
          question: 'Can this connect with missed call recovery and booking?',
          answer:
            'Yes. It often works best when connected to missed call recovery, booking, CRM, or AI lead handling. The routing layer helps those systems work together more cleanly.',
        },
        {
          question: 'Do all channels need to be handled the same way?',
          answer:
            'No. The point is not to force every message into an identical script. It is to give each channel a clear route, owner, and next action.',
        },
        {
          question: 'Is this useful for smaller teams?',
          answer:
            'Yes. Smaller teams feel communication chaos more sharply because one missed or delayed response has a bigger impact. A simpler routing model still makes a meaningful difference.',
        },
        {
          question: 'How is this different from just using a shared inbox?',
          answer:
            'A shared inbox is one tool. This is a routing model — it defines who owns each conversation, what the next step is, and how context carries across channels.',
        },
      ],
      cssPrefix: 'unified-communication-faq',
    },
    comparison: {
      header: {
        title: 'Inbox chaos vs structured communication routing',
        description:
          'Most businesses add more channels without fixing the routing behind them. Here is what that costs compared to a structured communication layer.',
      },
      items: [
        {
          type: 'before' as const,
          title: 'Inbox chaos',
          items: [
            'Calls, forms, chat, and emails land in different places with no shared view',
            'Nobody knows who is supposed to reply to what',
            'Same enquiry gets answered twice or not at all',
            'Context lost every time the conversation moves to a different channel',
            'Follow-up depends on who happens to see the message first',
          ],
        },
        {
          type: 'after' as const,
          title: 'Structured communication routing',
          items: [
            'All channels route into a shared view with clear ownership',
            'Each conversation has a named owner and defined next step',
            'Duplicate handling is reduced by matching contacts across channels',
            'Context carries forward so the customer does not repeat themselves',
            'Follow-up runs on routing rules, not personal inbox habits',
          ],
        },
      ],
    },
    proof: {
      header: {
        title: 'What this looks like when routing is fixed',
        description:
          'A service business was losing conversations across calls, forms, and chat because nobody owned the routing between them.',
      },
      cards: [
        {
          title: 'Before: every channel was its own silo',
          description: 'The team handled calls in one place, forms in another, and chat was checked whenever someone remembered. Enquiries slipped through the gaps daily.',
          points: [
            'Calls, forms, and chat handled in three separate places',
            'No shared view of who was talking to whom',
            'Enquiries regularly fell through the cracks',
          ],
        },
        {
          title: 'What we built: unified routing with ownership rules',
          description: 'We built a routing layer that brought all channels into one view with clear ownership rules, priority logic, and defined next steps for each conversation type.',
          points: [
            'All channels routed into a shared view',
            'Each conversation assigned to a named owner',
            'Next-step rules defined by conversation type and urgency',
          ],
          featured: true,
        },
        {
          title: 'After: fewer missed conversations, faster follow-up',
          description: 'Missed conversations dropped significantly. The team responded faster because routing was automatic and ownership was clear from the first message.',
          points: [
            'Missed conversations dropped within the first month',
            'Response times improved without adding staff',
            'Team stopped duplicating effort across channels',
          ],
        },
      ],
    },
  },
  inlineCta: {
    title: 'How many conversations are you losing across channels?',
    description:
      'Tell us how your enquiries arrive and where they get lost. We will show you what a clearer routing model looks like for your setup.',
  },
  cta: {
    title: 'Stop losing conversations between channels',
    description:
      'Tell us about your enquiry flow. We will show you where the routing breaks and build a clearer communication layer.',
  },
} satisfies ServicePageData;
