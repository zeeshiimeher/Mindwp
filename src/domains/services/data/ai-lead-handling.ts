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
    title: 'AI Lead Handling for Service Businesses | MindWP',
    description:
      "Enquiries come in at all hours. Nobody's always available. AI handles the first response — answers, captures details, hands off to the right person before interest dies.",
    schemaName: 'AI lead handling for service businesses',
    schemaDescription:
      'AI-powered first response covering website chat, call handling, booking support, and handoff into CRM for service businesses.',
  }),
  hero: {
    badge: 'AI Lead Handling',
    title: 'The Enquiry Came In After Hours. Nobody Picked It Up.',
    description:
      'Someone sends a message at 7pm, asks a booking question on the site, or calls after the team has finished. By morning, the conversation has already moved to a business that replied faster.',
    list: ['Slow replies', 'Dead by morning'],
  },
  sections: {
    foundation: {
      badge: 'The real problem',
      title: 'Add AI to a messy process and the mess just moves faster',
      description:
        "If enquiry paths are unclear and nobody owns the handoff, automation doesn't help. It just speeds up the confusion.",
      painPoints: [
        {
          before:
            'AI added. It answers. Then the conversation hits a wall because nothing picks up after.',
          after:
            'AI sits inside a path that actually goes somewhere. Answers, captures, hands off. With context.',
        },
        {
          before: 'The bot talks to people. Conversation dies. Nobody owns what comes next.',
          after:
            'Every conversation routes somewhere \u2014 CRM entry, booking step, named team member.',
        },
        {
          before: 'Sounds good in theory. Visitors end up going in circles.',
          after: "Four things: answer, capture, route, escalate. That's it.",
        },
      ],
    },
    featureCategoriesSection: {
      badge: 'What AI handles',
      title: 'Three channels where speed matters most',
      description:
        'Different businesses need different layers. Depends on how people reach you and where the delay hurts.',
      columns: 3 as const,
      variant: 'stacked' as const,
      items: [
        {
          title: 'Website chat',
          description:
            'Visitor lands. Has a question. AI answers, helps them find the right service, captures details if they want to go further.',
          icon: MessageSquare,
          label: 'Handles:',
          features: [
            'First questions answered',
            'Service guidance',
            'Booking support',
            'Detail capture',
          ],
          iconType: 'accent' as const,
        },
        {
          title: 'Phone and missed calls',
          description:
            'Calls answered or recovered. Common questions handled. Details captured. Complex ones handed to a person.',
          icon: Phone,
          label: 'Handles:',
          features: ['Call answering', 'Missed call recovery', 'Message capture', 'Call routing'],
          iconType: 'secondary' as const,
        },
        {
          title: 'Follow-up and repeat questions',
          description:
            "Handles the routine stuff — order updates, return queries, basic info. Escalates when it's something a person should deal with.",
          icon: Users,
          label: 'Handles:',
          features: [
            'Common repeat questions',
            'Order and update queries',
            'Knowledge lookups',
            'Escalation to your team',
          ],
          iconType: 'primary' as const,
        },
      ],
    },
    processSection: {
      badge: 'How it fits',
      title: 'AI at the front. Your team where it matters.',
      description:
        "Not replacing people. Making sure nobody waits for a reply that could've been instant.",
      steps: [
        {
          number: '1',
          title: 'Someone reaches out',
          description:
            'Website chat, phone call, missed call, booking page. They expect a response in seconds. Not tomorrow morning.',
        },
        {
          number: '2',
          title: 'AI handles the first step',
          description:
            "Answers the common questions. Collects what's needed. Moves the conversation forward even when nobody's at a desk.",
        },
        {
          number: '3',
          title: 'Something real happens next',
          description:
            'A booking. A CRM entry. A handoff to the right person. Not a dead end. Not a promise to "get back to you."',
        },
        {
          number: '4',
          title: 'Everything recorded',
          description:
            "Conversation details land where the team can see them. Nothing depends on someone's memory.",
        },
      ],
    },
    workflowExamples: {
      badge: 'In practice',
      title: 'What this looks like during a normal week',
      description: 'Not theory. Real moments where AI handles what would otherwise fall through.',
      items: [
        {
          trigger: 'A call comes in after hours from someone who needs a quote.',
          actions: [
            'Immediate text acknowledging the call',
            "Captures what they need and when they're free",
            'Queued for first thing next morning',
            'Team has context before they dial back',
          ],
        },
        {
          trigger: 'Visitor on the website asks if they can book a consultation.',
          actions: [
            'Chat answers the question straight away',
            'Offers the booking path',
            "Collects name, number, and what it's about",
            "Logged for follow-up if they don't complete",
          ],
        },
        {
          trigger: 'Someone calls with a question about pricing before deciding.',
          actions: [
            'AI provides the standard answer',
            'Checks whether the caller is a good fit',
            "Passes to a person if it's complex",
            'Conversation recorded for continuity',
          ],
        },
        {
          trigger: 'A lead starts chatting but drops off halfway.',
          actions: [
            'Partial details captured',
            'Moves into a follow-up queue',
            'Context preserved for whoever picks it up',
            'Better chance of restarting the conversation later',
          ],
        },
      ],
      alternatingItems: [
        {
          title: 'After-hours missed call',
          description: 'A call comes in after hours from someone who needs a quote.',
          points: [
            'Immediate text acknowledgement',
            'Details and availability captured',
            'Queued for morning follow-up',
            'Team has full context',
          ],
        },
        {
          title: 'Booking question on the site',
          description: 'Visitor on the website asks if they can book a consultation.',
          points: [
            'Question answered immediately',
            'Booking path offered',
            'Key details collected',
            'Follow-up if not completed',
          ],
        },
        {
          title: 'Pricing call before commitment',
          description: 'Someone calls with a question about pricing before deciding.',
          points: [
            'Standard answer provided',
            'Fit checked automatically',
            'Complex questions go to a person',
            'Conversation logged for continuity',
          ],
        },
        {
          title: 'Dropped conversation',
          description: 'A lead starts chatting but drops off halfway.',
          points: [
            'Partial details saved',
            'Routed to follow-up queue',
            'Context available for the team',
            'Chance to restart later',
          ],
        },
      ],
    },
    useCasesSection: {
      badge: 'Where it helps most',
      title: 'Businesses where reply speed directly affects revenue',
      description:
        'If winning the job depends on who replies first, this is where AI makes a real difference.',
      cards: [
        {
          title: 'Appointment-led businesses',
          description:
            'People ask the same five questions before booking. AI handles those instantly. Your team only steps in when judgement is needed.',
          points: [
            'Booking queries handled immediately',
            'Pre-booking questions answered around the clock',
            'Human involvement only when it matters',
          ],
          featured: true,
        },
        {
          title: 'Home and trade services',
          description:
            "Quote requests and calls come in during jobs. AI captures the details and routes them. Nothing goes unanswered just because the team's busy.",
          points: [
            'Missed calls recovered with instant text-back',
            'Quote requests captured properly',
            "After-hours enquiries don't vanish",
          ],
        },
        {
          title: 'Online shops and product businesses',
          description:
            "Simple questions — stock, shipping, returns — handled without waiting for a person. Escalation when it's something more.",
          points: [
            'Common questions answered fast',
            'Product guidance available instantly',
            'People only involved when needed',
          ],
        },
        {
          title: 'Professional services',
          description:
            'Initial qualification and consultation booking handled before the team gets involved. Saves time for both sides.',
          points: [
            'Qualification questions more consistent',
            'Consultation bookings organised upfront',
            'Right person gets the right conversation',
          ],
        },
      ],
    },
    positioning: {
      badge: 'What changes',
      title: 'The difference when first response is covered',
      description:
        'Respond faster. Route better. Lose fewer people. Your team handles the conversations that need a human.',
      tagline: 'Faster first reply. Fewer lost conversations.',
      narrativeTitle: 'AI takes the front. Your team takes the rest.',
      narrativeParagraphs: [
        'For most service businesses, AI should handle the repeatable front-end: answer common questions, collect details, support bookings, clean up the handoff.',
        "It shouldn't pretend to replace real judgement. Used well, it gives your team a better starting point instead of a cold conversation with no context.",
      ],
      features: [
        {
          icon: MessageSquare,
          title: 'Instant first response',
          description:
            'Visitors and callers get an answer immediately. They stay engaged instead of moving to whoever replies next.',
        },
        {
          icon: Phone,
          title: 'Clean handoff to a person',
          description:
            'AI knows when to stop. Complex or sensitive conversations go to someone on your team with full context attached.',
        },
        {
          icon: Users,
          title: 'Nothing starts from zero',
          description:
            'Details captured, conversation logged, CRM updated. Whoever picks up the lead knows what happened before them.',
        },
      ],
    },
    checklistSection: {
      badge: 'Included',
      title: "What's in the setup",
      description: 'Exact scope depends on your channels and volume. These are the common parts.',
      columns: 2 as const,
      items: [
        'AI trained on your services and business',
        'Knowledge base connected',
        'Conversation flows designed and tested',
        'Tone and language matched to your brand',
        'Chat widget designed and placed',
        'Testing and refinement before launch',
        'Natural language handling',
        'Multi-language if needed',
        'Booking integration',
        'CRM connection and data sync',
        'Handoff rules — when AI stops and a person takes over',
        'Escalation rules for urgent, sensitive, or high-value conversations',
        'Fallback rules for anything the AI is not confident answering',
        'Reporting on conversations and outcomes',
        'Ongoing learning and improvement',
      ],
    },
    comparison: {
      header: {
        title: 'Manual response vs AI-supported first response',
        description:
          'Every business relies on people eventually. The question is whether the first thirty seconds need to be one of them.',
      },
      items: [
        {
          type: 'before' as const,
          title: 'Fully manual',
          items: [
            'Missed calls sit in voicemail for hours. The caller hired someone who picked up.',
            "Website visitors leave because nobody's there to reply. The ad spend that brought them in is gone.",
            'Enquiry details scattered between inboxes, texts, and notes. Team works from fragments.',
            'Same first questions answered manually, over and over. Hours spent on work that adds nothing.',
            "After-hours messages wait until morning. By then the customer's already committed elsewhere.",
          ],
        },
        {
          type: 'after' as const,
          title: 'AI handling the front',
          items: [
            'Missed calls get an instant text-back. The caller stays engaged while the team catches up.',
            'Website chat responds in seconds. Details captured before interest fades.',
            'Every enquiry lands in CRM with full context. Team acts on facts, not fragments.',
            'Common questions handled automatically. Team focuses on the conversations that need them.',
            'After-hours enquiries captured and queued. Next morning starts with a list, not guesswork.',
          ],
        },
      ],
    },
    proof: {
      header: {
        title: 'What changed for an estate agent',
        description:
          "Three offices. Enquiries coming through website, phone, and social. Response time averaging four hours. Viewings were going to whoever replied first. Usually, it wasn't them.",
      },
      cards: [
        {
          title: 'Before: slow replies, lost viewings',
          description:
            'Most enquiries came in online or by phone. During busy periods, nobody free. By the time someone got back, the buyer had booked a viewing somewhere else.',
          points: [
            'Website enquiries sat for hours. People moved on.',
            'Calls during viewings went to voicemail. Half never returned.',
          ],
        },
        {
          title: 'What we put in place: chat, call handling, CRM handoff',
          description:
            'AI on the website answering property questions. Missed calls recovered with text-back. Everything into CRM with context. The team picked up leads that already had details attached.',
          points: [
            'Chat handling viewing questions, availability, area info. Name and contact captured.',
            'Missed calls triggering instant text. Property interest recorded.',
            'All of it landing in CRM \u2014 what the person asked about, where they came from. Feeds into the same follow-up path as everything else.',
          ],
          featured: true,
        },
        {
          title: 'After: faster replies, more viewings booked',
          description:
            'Response time dropped from hours to under a minute. Within six weeks, more viewings booked. Same traffic. Reached faster.',
          points: [
            "First response from four hours to under sixty seconds. The agents didn't change. The front end did.",
            'Viewing bookings up in six weeks. Nobody could say by exactly how much. But the diary was noticeably fuller.',
            'Team stopped doing first-response admin. Spent time on conversations that actually closed.',
          ],
        },
      ],
    },
    qualification: {
      title: 'Is this right for your business?',
      description:
        'Works when response speed matters, first questions repeat, and better routing would save real time.',
      strongFitTitle: 'Strong fit if',
      strongFitItems: [
        {
          title: 'You get regular incoming enquiries across more than one channel',
          description:
            'Chat, phone, bookings. Enough volume that handling every first response manually is costing time and losing people.',
        },
        {
          title: 'Slow replies are losing you work',
          description:
            'Customers have told you they went somewhere else. Or your team sees missed calls after the fact. Either way, speed is the issue.',
        },
        {
          title: 'You want AI connected to how you actually work',
          description:
            'CRM, booking, routing. Not a chatbot floating on the website. Something that feeds into what your team already does.',
        },
        {
          title: 'You want practical, not flashy',
          description:
            'You want faster responses, better capture, cleaner handoff. Not a talking robot for the sake of it.',
        },
      ],
      notDesignedTitle: 'Not the right fit if',
      notDesignedItems: [
        {
          title: 'Enquiry volume is very low',
          description:
            "If you get a handful of leads a week, the investment doesn't pay back. Get more enquiries coming in first.",
        },
        {
          title: 'You want to remove people entirely',
          description:
            'AI handles the repeatable front end. Sensitive conversations, complex judgement calls, real relationship building — those still need your team.',
        },
        {
          title: 'You want a standalone bot with no connection to anything',
          description:
            "A chatbot that doesn't route, book, or update your CRM is a dead end. Not what this is.",
        },
        {
          title: 'Your enquiry paths are undefined',
          description:
            "AI amplifies what's there. If there's nothing clear underneath, build that first. Same problem missed calls and routing have \u2014 basics before speed.",
        },
      ],
    },
    faqSection: {
      badge: 'Common Questions',
      title: 'Questions about AI lead handling',
      description: "Straight answers about what AI does and doesn't do.",
      faqs: [
        {
          question: 'Is this replacing my receptionist or team?',
          answer:
            'No. AI handles the repeatable first step. Anything that needs context, sensitivity, or real judgement still goes to a person.',
        },
        {
          question: 'Can it handle both website chat and phone calls?',
          answer:
            'Yes. Setup covers chat, missed call recovery, voice handling, booking support — or a combination. Depends on how your enquiries come in.',
        },
        {
          question: 'Do we need a CRM?',
          answer:
            'No, but we usually recommend connecting this to GoHighLevel so chat, calls, follow-up, and reporting stay in one place. If you already have a working setup, we can connect that instead.',
        },
        {
          question: 'What if the AI gives a wrong answer?',
          answer:
            "Managed through training, boundaries, and handoff rules. It answers what it's trained to. Anything else goes to your team.",
        },
        {
          question: 'Is this only for big businesses?',
          answer:
            "No. It's useful for smaller businesses too — especially when missed calls, slow replies, or the same first questions come up over and over.",
        },
        {
          question: 'What needs to be in place first?',
          answer:
            'Clear services, clear enquiry paths, and a sensible follow-up plan. If those are missing, fix them first. Same as missed calls or routing \u2014 the basics need to work before you add speed.',
        },
      ],
    },
  },
  inlineCta: {
    title: 'How slow is your first reply?',
    description:
      'Look at how calls, chat, and bookings are handled now. See where speed is costing you.',
  },
  cta: {
    title: 'Find out where speed is killing your pipeline',
    description:
      'How enquiries come in. How long they wait. Where faster response would change things.',
  },
} satisfies ServicePageData;
