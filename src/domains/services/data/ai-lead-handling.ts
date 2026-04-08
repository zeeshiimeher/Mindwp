import { MessageSquare, Phone, Users } from 'lucide-react';

import { buildContactHref } from '@/lib/contact/contactHref';

import type { ServicePageData } from '../types';

export const aiLeadHandlingPage = {
  slug: 'ai-lead-handling',
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
  seo: {
    title: 'AI Lead Handling Systems | Structured first-response systems for service businesses',
    description:
      'AI lead handling for service businesses, including website chat, call support, booking assistance, and structured handoff into CRM and follow-up systems.',
    canonical: '/services/ai-lead-handling',
    schema: {
      service: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'AI Lead Handling integrated into a structured service-business system',
        description:
          'AI lead handling systems for service businesses, including chat, call support, booking assistance, and structured handoff into CRM and follow-up workflows.',
        provider: {
          '@type': 'Organization',
          name: 'MindWP',
        },
        areaServed: 'UK',
        url: '/services/ai-lead-handling',
      },
    },
  },
  hero: {
    badge: 'AI Lead Handling',
    title: 'AI can support first response without replacing the judgement that matters',
    description:
      'This service helps businesses respond faster across website chat, phone, and booking flows. AI handles the repeatable first step, captures the right details, and hands off cleanly when a person should step in.',
    primaryAction: {
      label: 'Find Out How AI Lead Handling Works',
      href: buildContactHref({
        system: 'ai-lead-handling',
        sourceType: 'service',
        slug: 'ai-lead-handling',
      }),
    },
    list: [
      'Faster first response across chat and calls',
      'Clear handoff into CRM, booking, or team workflows',
      'Practical automation without trying to replace people',
    ],
  },
  sections: {
    foundation: {
      badge: 'Before adding AI',
      title: 'What goes wrong when AI is added without clear structure underneath',
      description:
        'AI works best when the response layer is being added to a system that already has clear services, clear routing, and clear ownership after first contact.',
      painPoints: [
        {
          before: 'AI is added on top of unclear services and messy enquiry routes.',
          after: 'AI works better when services, enquiry paths, and next steps are already clear.',
        },
        {
          before: 'The bot answers questions but nobody owns the handoff after that.',
          after:
            'Conversations move into the right person, team, CRM, or booking workflow with less confusion.',
        },
        {
          before: 'Automation sounds impressive but creates more friction for real visitors.',
          after:
            'The response layer stays practical: answer, capture, route, and escalate when needed.',
        },
      ],
    },
    featureCategoriesSection: {
      badge: 'AI Response Components',
      title: 'The main parts of an AI lead-handling system',
      description:
        'Different businesses need different response layers. The right setup depends on how people contact you, what they ask first, and where the conversation needs to go next.',
      columns: 3 as const,
      variant: 'stacked' as const,
      items: [
        {
          title: 'Website Chat Assistant',
          description:
            'Handles first questions on the website, helps visitors find the right service, and supports enquiry or booking actions.',
          icon: MessageSquare,
          label: 'Structured Capabilities:',
          features: [
            'Lead qualification',
            'FAQ answers',
            'Product guidance',
            'Appointment booking',
          ],
          iconType: 'accent' as const,
        },
        {
          title: 'Voice AI Receptionist',
          description:
            'Supports incoming calls, captures details, answers simple questions, and routes conversations when your team needs to take over.',
          icon: Phone,
          label: 'Key Features:',
          features: ['Call answering', 'Appointment scheduling', 'Message taking', 'Call routing'],
          iconType: 'secondary' as const,
        },
        {
          title: 'Support and follow-up assistant',
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
      title: 'How the AI response layer fits into the wider system',
      description:
        'AI should sit inside a clear response flow. The point is not to sound advanced. It is to respond faster, route better, and capture useful information cleanly.',
      steps: [
        {
          number: '1',
          title: 'A person gets in touch',
          description:
            'They arrive through website chat, a call, or a booking step and need quick, clear help.',
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
            'The conversation data lands in the right workflow so follow-up stays organised instead of depending on memory.',
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
      title: 'Where AI lead handling is usually most useful',
      description:
        'The best fit is where fast first response, booking support, and cleaner routing can remove avoidable friction for both the business and the customer.',
      cards: [
        {
          title: 'Appointment-led businesses',
          description:
            'Useful where people ask the same first questions and want help booking without waiting for office hours.',
          points: [
            'Booking enquiries handled faster',
            'Common pre-booking questions answered clearly',
            'Team only steps in where judgement is needed',
          ],
          featured: true,
        },
        {
          title: 'Home and local service businesses',
          description:
            'Useful when calls and quote requests come in during busy periods and need a cleaner handoff into the team.',
          points: [
            'Missed calls handled better',
            'Quote and booking requests captured more clearly',
            'Response quality improves outside business hours',
          ],
        },
        {
          title: 'E-commerce and web shops',
          description:
            'Useful for common questions, support requests, and simple product guidance before the issue needs human attention.',
          points: [
            'Order and support questions handled faster',
            'Simple product guidance available immediately',
            'Escalation happens only when needed',
          ],
        },
        {
          title: 'Consultation-led professional services',
          description:
            'Useful where first qualification and consultation booking can be structured before the team gets involved.',
          points: [
            'Initial qualification becomes more consistent',
            'Consultation requests are better organised',
            'The right person gets the right conversation',
          ],
        },
      ],
    },
    positioning: {
      badge: 'Positioning',
      title: 'AI is a support layer, not a replacement for real judgement',
      description:
        'The value is in responding clearly, routing better, and reducing avoidable missed opportunities — while people stay in control of the important decisions.',
      tagline: 'Useful automation, clear boundaries',
      narrativeTitle: 'The best AI setups feel practical, not impressive for the sake of it',
      narrativeParagraphs: [
        'For most service businesses, AI should handle the repeatable first-response work: answer simple questions, collect useful details, support bookings, and make handoff cleaner.',
        'It should not pretend to replace real judgement, relationship building, or complex decision-making. When used well, it gives the team a better starting point for the real conversation.',
      ],
      features: [
        {
          icon: MessageSquare,
          title: 'First-response support',
          description:
            'AI helps with the first layer of the conversation so visitors and callers are not left waiting unnecessarily.',
        },
        {
          icon: Phone,
          title: 'Clear human handoff',
          description:
            'The system should know when to pass the conversation on rather than forcing every interaction through automation.',
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
      title: "What's Included",
      description:
        'The exact setup depends on channel mix, enquiry volume, and workflow needs, but these are the common parts of a structured AI lead-handling implementation.',
      columns: 2 as const,
      items: [
        'Custom AI training on your business',
        'Knowledge base integration',
        'Conversation flow design',
        'Brand voice customization',
        'Widget design and placement',
        'Testing and optimization',
        'Natural language processing',
        'Multi-language support',
        'Appointment booking integration',
        'CRM integration and data sync',
        'Human handoff when needed',
        'Analytics and reporting',
        'Continuous learning and improvement',
      ],
    },
    qualification: {
      title: 'Who this is designed for',
      description:
        'This is usually a strong fit when response speed matters, conversations repeat, and better routing would reduce missed opportunities.',
      strongFitTitle: 'Strong fit',
      strongFitItems: [
        {
          title: 'Regular incoming enquiries',
          description:
            'You receive enough chat, phone, or booking conversations that first-response support would save time and reduce missed leads.',
        },
        {
          title: 'Missed calls or delays are a real problem',
          description:
            'You know that slow response or inconsistent handling is costing opportunities.',
        },
        {
          title: 'You want structured handoff',
          description:
            'You want AI connected to CRM, booking, or routing workflows rather than acting like a disconnected bot.',
        },
        {
          title: 'You want support, not gimmicks',
          description:
            'You want practical automation that improves response quality without pretending to replace your team.',
        },
      ],
      notDesignedTitle: 'Not designed for',
      notDesignedItems: [
        {
          title: 'Very low enquiry volume',
          description: 'If enquiries are rare, the added system layer may not be worth it yet.',
        },
        {
          title: 'Fully manual preference',
          description:
            'If the business does not want any automation in first response, this is not the right service.',
        },
        {
          title: 'Replacing humans completely',
          description:
            'This is not about removing people from important conversations or complex decisions.',
        },
        {
          title: 'Disconnected bots',
          description:
            'A standalone bot with no routing, booking, or workflow integration is not the model described here.',
        },
      ],
    },
    faqSection: {
      badge: 'AI Lead Handling Questions',
      title: 'Common Questions',
      description:
        'Questions about AI lead handling, missed-call support, handoff, and where this kind of system fits.',
      faqs: [
        {
          question: 'Is this replacing my receptionist or team?',
          answer:
            'No. The goal is to support first response, reduce missed enquiries, and make handoff cleaner. Human judgement still matters where the conversation needs context or care.',
        },
        {
          question: 'Can this work for both website chat and phone calls?',
          answer:
            'Yes. The setup can support website chat, missed-call recovery, voice handling, booking support, or a mix of those depending on how your business receives enquiries.',
        },
        {
          question: 'Do I need a CRM for this to be useful?',
          answer:
            'A CRM helps a lot because it keeps the conversation history, routing, and follow-up organised. If you do not have one yet, we can still review what the right structure should be.',
        },
        {
          question: 'What if the AI gives the wrong answer?',
          answer:
            'That risk is managed through training, boundaries, and clear handoff rules. The system should answer what it is meant to answer and escalate when the conversation needs a person.',
        },
        {
          question: 'Is this only for large businesses?',
          answer:
            'No. It can be useful for smaller service businesses too, especially when missed calls, delayed replies, or repeated first questions are already creating friction.',
        },
        {
          question: 'What should be in place before adding AI?',
          answer:
            'The most important things are clear service structure, clear enquiry paths, and a sensible follow-up process. If those are missing, the system should be fixed before adding more automation.',
        },
      ],
    },
  },
  cta: {
    title: 'See where AI response would actually help',
    description:
      'Tell us how calls, chat, and bookings are handled now. We will show you where response speed and handoff are breaking down.',
    buttonText: 'Automate Your Lead Handling',
    buttonHref: buildContactHref({
      system: 'ai-lead-handling',
      sourceType: 'service',
      slug: 'ai-lead-handling',
    }),
  },
} satisfies ServicePageData;
