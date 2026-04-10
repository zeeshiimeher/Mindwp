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
    title: 'Unified Communication System | Multi-Channel Routing',
    description:
      'Unified communication systems for service businesses that need clearer message routing, fewer missed conversations, and better ownership across calls, forms, chat, and inboxes.',
    schemaName: 'Unified communication system for service businesses',
    schemaDescription:
      'A structured communication-routing system covering calls, forms, chat, email, and message handoff so service businesses can reduce missed conversations and improve ownership.',
  }),
  hero: {
    badge: 'Routing & Ownership Layer',
    title: 'When enquiries arrive from everywhere, the real problem is usually routing, not volume',
    description:
      'This service focuses on the communication layer between incoming messages and the right next action. It helps businesses handle calls, forms, chat, and inbox messages with less confusion, fewer missed conversations, and clearer ownership.',
    list: [
      'Clearer routing across calls, forms, chat, and inboxes',
      'Fewer missed conversations and less duplicate handling',
      'Better ownership from first message to next action',
    ],
    cssPrefix: 'unified-communication-hero',
    backgroundColor: 'bg-gradient-surface-muted',
  },
  sections: {
    foundation: {
      badge: 'Where communication breaks down',
      title: 'Messages get missed when the business uses many channels but no clear routing model',
      description:
        'The issue is not always channel volume. More often, calls, forms, chat, and inbox replies arrive without one shared handling model behind them.',
      painPoints: [
        {
          before:
            'Calls, forms, chat, and inbox messages all arrive in different places with no shared view.',
          after:
            'Incoming conversations are easier to route because the business has a clearer communication structure.',
        },
        {
          before: 'Several people reply, nobody replies, or the handoff happens too late.',
          after: 'Ownership becomes explicit so each conversation has a clearer path to action.',
        },
        {
          before: 'The same enquiry gets repeated across channels with no context carried forward.',
          after: 'Conversation history and routing logic reduce duplicated effort and confusion.',
        },
      ],
    },
    channelSignals: {
      badge: 'Where the traffic comes from',
      title: 'The system matters most when enquiries arrive across multiple front doors',
      description:
        'The stronger the channel mix becomes, the more valuable it is to have one clear routing model behind it.',
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
        'Communication issues normally show up as routing problems, not technology problems first',
      description:
        'These are common signs that the business needs a clearer communication-routing layer before it adds more channels or automation.',
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
      title: 'A unified communication setup depends on three practical operating layers',
      description:
        'This is about the routing model behind the communication flow, not just one inbox screen or response tool.',
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
      title: 'Who this is designed for',
      description:
        'This works best where enquiry handling is spread across several channels and the business needs a clearer routing and ownership model, not just more notifications.',
      strongFitTitle: 'Strong fit',
      notDesignedTitle: 'Not designed for',
      strongFitItems: [
        {
          title: 'Businesses with multi-channel enquiry flow',
          description:
            'A strong fit when calls, forms, chat, email, or SMS all matter commercially and the team struggles to keep them aligned.',
        },
        {
          title: 'Teams with ownership confusion',
          description:
            'Useful when several people touch incoming messages but nobody has a clean system for who handles what next.',
        },
        {
          title: 'Businesses that need cleaner communication continuity',
          description:
            'Especially useful when conversations shift across channels and the context keeps getting lost or repeated.',
        },
      ],
      notDesignedItems: [
        {
          title: 'Businesses with only one simple enquiry channel',
          description:
            'If nearly all new business arrives through one clear path already, another system may be more useful than a dedicated communication-routing layer.',
        },
        {
          title: 'Teams expecting automation to fix unclear ownership',
          description:
            'Tools can help, but the real improvement comes from defining routing rules and responsibility first.',
        },
        {
          title: 'Cases where traffic or trust is the larger problem',
          description:
            'If not enough good enquiries are arriving in the first place, Smart Website, Local SEO, or Reputation work may need to lead instead.',
        },
      ],
    },
    faqSection: {
      badge: 'FAQ',
      title: 'Common questions about unified communication',
      description:
        'Questions that come up when a business realises the communication problem is really a routing problem.',
      faqs: [
        {
          question: 'Can this connect with missed call recovery and booking later?',
          answer:
            'Yes. It often works best when it connects to missed call recovery, booking, CRM visibility, or AI lead handling. The routing layer helps those systems work together more cleanly.',
        },
        {
          question: 'Do all channels need to be handled the same way?',
          answer:
            'No. The point is not to force every message into an identical script. The point is to give each channel a clear route, owner, and next action.',
        },
        {
          question: 'Is this useful for smaller teams too?',
          answer:
            'Yes. Smaller teams often feel communication chaos more sharply because one missed or delayed response has a bigger impact. A simpler routing model can still make a meaningful difference.',
        },
      ],
      cssPrefix: 'unified-communication-faq',
    },
  },
  cta: {
    title: 'Make communication routing clearer',
    description:
      'If calls, forms, chat, and inbox messages are creating confusion, we can help define a clearer routing and ownership model.',
  },
} satisfies ServicePageData;
