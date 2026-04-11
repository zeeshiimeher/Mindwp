import { MessageSquare, Phone, Users } from 'lucide-react';


import { buildServiceSeo } from '../seo';
import type { ServicePageData } from '../types';

const slug = 'ai-lead-handling';

export const aiLeadHandlingPage = {
  slug,
  systems: ['ai-lead-handling'],
  topics: ['lead-response-time', 'missed-calls', 'lead-capture'],
  keywords: [
    'ai lead response system',
    'ai chatbot for service business',
    'automated lead handling system',
    'ai booking assistant for local business',
    'missed call text back automation',
  ],
  badge: 'AI Lead Handling Systems',
  category: 'AI Response Systems',
  seo: buildServiceSeo({
    slug,
    title: 'AI Lead Handling Systems for Service Businesses | MindWP',
    description:
      'Respond faster to every enquiry across chat, calls, and bookings. AI handles the first step, captures the right details, and hands off cleanly to your team.',
    schemaName: 'AI Lead Handling for Service Businesses',
    schemaDescription:
      'First-response automation covering website chat, call handling, booking support, and structured CRM handoff for service businesses.',
  }),
  hero: {
    badge: 'AI Lead Handling',
      title: 'AI First Response That Stops Leads Going Cold',
    description:
      'When someone contacts your business, they expect a fast reply. If nobody responds within minutes, they move on. AI handles the repeatable first step — answering, capturing details, and routing — so your team picks up where it matters.',
    list: [
        'Instant Replies',
        'Smart Routing',
        'CRM Handoff',
    ],
  },
  sections: {
    foundation: {
      badge: 'Before adding AI',
      title: 'What goes wrong when AI is added without clear routing underneath',
      description:
        'AI works when it is added to a system with clear services, clear routing, and clear ownership after first contact. Without that, it creates noise instead of value.',
      painPoints: [
        {
          before: 'AI is added on top of unclear services and messy enquiry routes.',
          after: 'AI works when services, enquiry paths, and next steps are already clear.',
        },
        {
          before: 'The bot answers questions but nobody owns the handoff after that.',
          after:
            'Conversations move into the right person, CRM, or booking workflow without confusion.',
        },
        {
          before: 'Automation sounds impressive but creates more friction for visitors.',
          after:
            'The response layer stays practical: answer, capture, route, and escalate when needed.',
        },
      ],
    },
    featureCategoriesSection: {
      badge: 'AI Response Components',
      title: 'The components of an AI lead-handling system',
      description:
        'Different businesses need different response layers. The right setup depends on how people contact you, what they ask, and where the conversation needs to go.',
      columns: 3 as const,
      variant: 'stacked' as const,
      items: [
        {
          title: 'Website Chat Assistant',
          description:
            'Handles first questions on the website, helps visitors find the right service, and supports enquiry or booking actions.',
          icon: MessageSquare,
          label: 'Capabilities:',
          features: [
            'Lead qualification',
            'FAQ answers',
            'Service guidance',
            'Appointment booking',
          ],
          iconType: 'accent' as const,
        },
        {
          title: 'Voice AI Receptionist',
          description:
            'Supports incoming calls, captures details, answers common questions, and routes conversations when your team needs to take over.',
          icon: Phone,
          label: 'Key Features:',
          features: ['Call answering', 'Appointment scheduling', 'Message taking', 'Call routing'],
          iconType: 'secondary' as const,
        },
        {
          title: 'Support and Follow-Up Assistant',
          description:
            'Supports repeat questions, follow-up tasks, and simple requests, with clear handoff when a person is needed.',
          icon: Users,
          label: 'Key Features:',
          features: ['Order tracking', 'Returns support', 'Knowledge base search', 'Human handoff'],
          iconType: 'primary' as const,
        },
      ],
    },
    processSection: {
      badge: 'System flow',
      title: 'How AI response fits into the wider system',
      description:
        'AI sits inside a clear response flow. The point is to respond faster, route better, and capture useful information — not to sound advanced.',
      steps: [
        {
          number: '1',
          title: 'A person gets in touch',
          description:
            'They arrive through website chat, a call, or a booking step and need a quick, clear response.',
        },
        {
          number: '2',
          title: 'AI handles the first step',
          description:
            'The system answers common questions, gathers the right details, and keeps the conversation moving.',
        },
        {
          number: '3',
          title: 'A clear action happens next',
          description:
            'That may mean booking, capturing an enquiry, sending information, or handing off to the right person.',
        },
        {
          number: '4',
          title: 'The system records and routes it',
          description:
            'Conversation data lands in the right workflow so follow-up stays organised instead of depending on memory.',
        },
      ],
    },
    workflowExamples: {
      badge: 'Workflow examples',
      title: 'A few simple examples of how this works in practice',
      description:
        'These examples show how AI helps with first response and routing. The goal is clarity, not complexity.',
      items: [
        {
          trigger: 'A missed call comes in after business hours from a potential customer.',
          actions: [
            'Send an immediate text acknowledgement',
            'Capture the enquiry details',
            'Route the lead into CRM',
            'Flag the team for next-day follow-up',
          ],
        },
        {
          trigger: 'A website visitor asks whether they can book a consultation.',
          actions: [
            'Answer the basic question',
            'Offer the correct booking path',
            'Collect the key details',
            'Log the conversation for follow-up if needed',
          ],
        },
        {
          trigger: 'A caller asks a common service question before deciding whether to enquire.',
          actions: [
            'Provide the approved first-response answer',
            'Identify whether the caller is a fit',
            'Pass the conversation to a human when needed',
            'Record the interaction for continuity',
          ],
        },
        {
          trigger: 'A lead starts a conversation but does not complete the next step.',
          actions: [
            'Capture the partial interaction',
            'Route it into the right follow-up workflow',
            'Keep the context available for the team',
            'Reduce the chance of the enquiry going cold',
          ],
        },
      ],
    },
    useCasesSection: {
      badge: 'Where it helps most',
      title: 'Where AI lead handling makes the biggest difference',
      description:
        'The best fit is where fast first response, booking support, and cleaner routing remove real friction for both the business and the customer.',
      cards: [
        {
          title: 'Appointment-led businesses',
          description:
            'People ask the same first questions and want help booking without waiting for office hours. AI handles that consistently.',
          points: [
            'Booking enquiries handled faster',
            'Common pre-booking questions answered immediately',
            'Team steps in only where judgement is needed',
          ],
          featured: true,
        },
        {
          title: 'Home and local service businesses',
          description:
            'Calls and quote requests come in during busy periods. AI captures details and routes them cleanly instead of letting them go unanswered.',
          points: [
            'Missed calls handled with instant text-back',
            'Quote and booking requests captured clearly',
            'Response quality maintained outside business hours',
          ],
        },
        {
          title: 'E-commerce and web shops',
          description:
            'Common questions and support requests are handled immediately. Escalation to a person happens only when needed.',
          points: [
            'Order and support questions answered faster',
            'Simple product guidance available immediately',
            'Escalation only when required',
          ],
        },
        {
          title: 'Consultation-led professional services',
          description:
            'Initial qualification and consultation booking are handled before the team gets involved, saving time on both sides.',
          points: [
            'Initial qualification more consistent',
            'Consultation requests better organised',
            'The right person gets the right conversation',
          ],
        },
      ],
    },
    positioning: {
      badge: 'What changes',
      title: 'What changes for your business when first response is handled',
      description:
        'The value is in responding clearly, routing better, and reducing missed opportunities — while your team stays in control of the important decisions.',
      tagline: 'Faster response, fewer missed leads',
      narrativeTitle: 'AI handles the first step so your team handles what matters',
      narrativeParagraphs: [
        'For most service businesses, AI should handle the repeatable first-response work: answer common questions, collect details, support bookings, and make handoff cleaner.',
        'It should not pretend to replace real judgement or relationship building. When used well, it gives your team a better starting point for the real conversation.',
      ],
      features: [
        {
          icon: MessageSquare,
          title: 'First-response support',
          description:
            'Visitors and callers are not left waiting. AI handles the first layer so response time drops from hours to seconds.',
        },
        {
          icon: Phone,
          title: 'Clear human handoff',
          description:
            'The system knows when to pass the conversation to a person rather than forcing every interaction through automation.',
        },
        {
          icon: Users,
          title: 'Better workflow continuity',
          description:
            'Captured context, routing, and CRM updates help the team continue the conversation without starting from zero.',
        },
      ],
    },
    checklistSection: {
      badge: 'Included',
      title: 'What is included',
      description:
        'The exact setup depends on your channels, enquiry volume, and workflow needs. These are the common parts of a structured AI lead-handling implementation.',
      columns: 2 as const,
      items: [
        'Custom AI training on your business and services',
        'Knowledge base integration',
        'Conversation flow design',
        'Brand voice customisation',
        'Widget design and placement',
        'Testing and optimisation',
        'Natural language processing',
        'Multi-language support where needed',
        'Appointment booking integration',
        'CRM integration and data sync',
        'Human handoff rules and routing',
        'Analytics and reporting',
        'Continuous learning and improvement',
      ],
    },
    comparison: {
      header: {
        title: 'Manual response vs AI-supported first response',
        description:
          'Most businesses rely on manual handling for every enquiry. Here is what that costs compared to a structured AI response layer.',
      },
      items: [
        {
          type: 'before' as const,
          title: 'Manual first response',
          items: [
            'Missed calls go unanswered until someone checks voicemail hours later',
            'Website visitors leave because nobody responds to chat in time',
            'Enquiry details get lost between inbox, text, and memory',
            'Team spends time answering the same first questions repeatedly',
            'After-hours enquiries wait until the next business day',
          ],
        },
        {
          type: 'after' as const,
          title: 'AI-supported first response',
          items: [
            'Missed calls trigger an instant text-back with acknowledgement and next steps',
            'Website chat responds in seconds, captures details, and routes properly',
            'Every enquiry lands in CRM with full context and clear ownership',
            'Common questions handled automatically — team focuses on real conversations',
            'After-hours enquiries captured, qualified, and queued for follow-up',
          ],
        },
      ],
    },
    proof: {
      header: {
        title: 'What this looks like when it is running',
        description:
          'A home services business was losing enquiries because calls went unanswered during busy periods and website visitors left without a response.',
      },
      cards: [
        {
          title: 'Before: missed calls, slow replies, lost leads',
          description: 'The business received most enquiries by phone and website form. During busy periods, calls went to voicemail. Website chat had no automated response. Follow-up depended on whoever remembered.',
          points: [
            'Missed calls during work hours went unreturned for hours',
            'Website visitors waited for replies that often never came',
            'No consistent capture or routing of enquiry details',
          ],
        },
        {
          title: 'What we built: AI first response with structured handoff',
          description: 'We set up AI chat on the website, missed-call text-back automation, and connected everything to the CRM so the team could see and act on every enquiry.',
          points: [
            'Website chat responding to visitors in seconds',
            'Missed calls triggering immediate text acknowledgement',
            'All enquiries routed into CRM with full context',
          ],
          featured: true,
        },
        {
          title: 'After: faster response, fewer missed leads, cleaner handoff',
          description: 'Within the first month, the business captured enquiries that would have been lost. Response time dropped from hours to seconds. The team spent less time on first-contact admin and more on actual work.',
          points: [
            'First response time dropped from hours to under a minute',
            'Missed-call recovery captured leads that were previously lost',
            'Team workload on first-response admin reduced significantly',
          ],
        },
      ],
    },
    qualification: {
      title: 'Is this the right fit for your business?',
      description:
        'This is a strong fit when response speed matters, conversations repeat, and better routing would reduce missed opportunities.',
      strongFitTitle: 'Strong fit if',
      strongFitItems: [
        {
          title: 'You receive regular incoming enquiries across channels',
          description:
            'You get enough chat, phone, or booking conversations that first-response support would save time and reduce missed leads.',
        },
        {
          title: 'Missed calls or slow replies are costing you business',
          description:
            'You know that slow response or inconsistent handling is losing you opportunities you should be winning.',
        },
        {
          title: 'You want enquiries routed into your existing workflows',
          description:
            'You want AI connected to CRM, booking, or routing so conversations land where your team can act on them.',
        },
        {
          title: 'You want practical support, not a gimmick',
          description:
            'You want automation that improves response quality without pretending to replace your team.',
        },
      ],
      notDesignedTitle: 'Not the right fit if',
      notDesignedItems: [
        {
          title: 'You have very low enquiry volume',
          description: 'If enquiries are rare, the added system layer may not be worth implementing yet.',
        },
        {
          title: 'You prefer fully manual handling',
          description:
            'If the business does not want any automation in first response, this service is not the right fit.',
        },
        {
          title: 'You want to replace your team entirely',
          description:
            'This is not about removing people from important conversations or complex decisions.',
        },
        {
          title: 'You want a standalone bot with no integration',
          description:
            'A chatbot with no routing, booking, or workflow connection is not the model described here.',
        },
      ],
    },
    faqSection: {
      badge: 'Common Questions',
      title: 'Questions about AI lead handling',
      description:
        'Straight answers about AI lead handling, missed-call support, handoff, and where this system fits.',
      faqs: [
        {
          question: 'Is this replacing my receptionist or team?',
          answer:
            'No. The goal is to support first response, reduce missed enquiries, and make handoff cleaner. Human judgement still matters where the conversation needs context or care.',
        },
        {
          question: 'Can this work for both website chat and phone calls?',
          answer:
            'Yes. The setup supports website chat, missed-call recovery, voice handling, booking support, or a combination depending on how your business receives enquiries.',
        },
        {
          question: 'Do I need a CRM for this to be useful?',
          answer:
            'A CRM helps because it keeps conversation history, routing, and follow-up organised. If you do not have one, we can review what the right structure should be.',
        },
        {
          question: 'What if the AI gives the wrong answer?',
          answer:
            'That risk is managed through training, boundaries, and clear handoff rules. The system answers what it is trained to answer and escalates when the conversation needs a person.',
        },
        {
          question: 'Is this only for large businesses?',
          answer:
            'No. It is useful for smaller service businesses too, especially when missed calls, delayed replies, or repeated first questions are already losing you work.',
        },
        {
          question: 'What should be in place before adding AI?',
          answer:
            'Clear service pages, clear enquiry paths, and a sensible follow-up process. If those are missing, the underlying system should be fixed before adding more automation on top.',
        },
      ],
    },
  },
  inlineCta: {
    title: 'Not sure how many enquiries you are losing to slow response?',
    description:
      'Tell us how calls, chat, and bookings are handled now. We will show you where response speed and handoff are breaking down — and what AI could realistically improve.',
  },
  cta: {
    title: 'See where AI response would make a real difference for your business',
    description:
      'Tell us how your enquiries come in and how they are handled. We will identify where speed, routing, and follow-up are costing you leads.',
  },
} satisfies ServicePageData;
