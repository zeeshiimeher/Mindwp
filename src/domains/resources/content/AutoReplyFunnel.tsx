import { Clock, MessageSquare, Zap } from 'lucide-react';

import { primaryCta } from '@/config/primaryCta';

import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'auto-reply-funnel';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'The faster you respond to enquiries, the higher your conversion rate. Instant auto-replies keep leads warm, set expectations, and start the booking journey—even when you are busy with customers.',
  problem:
    'Leads contact you and hear nothing for hours, so they assume you are not interested and book competitors instead',
  promise:
    'You will create a simple 3-message auto-reply sequence that converts 40% more enquiries without any manual work',
};

const problem = {
  description: [
    'Research shows leads contacted within 5 minutes convert 9x better than those contacted after 30 minutes. But you cannot respond instantly to every enquiry—you are working. Auto-reply funnels solve this by sending instant, personalised responses that feel human but are 100% automated.',
    'The winning formula is simple: Message 1 (instant confirmation), Message 2 (value/next steps at 1 hour), Message 3 (call-to-action at 24 hours). This keeps you top-of-mind, builds trust, and moves leads toward booking without you lifting a finger.',
  ],
  causes: [
    'No auto-reply set up, so enquiries sit unanswered for hours or days',
    "Generic auto-replies that say 'We will get back to you' with no value or next steps",
    'You only auto-reply via email but ignore SMS (where 98% open rate lives)',
    'Auto-replies are robotic and impersonal, making people think you do not care',
    'No follow-up after the initial auto-reply, so leads forget about you',
    'You do not segment auto-replies by enquiry type (quote vs booking vs question)',
  ],
};

const businessCosts = [
  'Lost conversions: Delayed responses reduce conversion rates by 400-900% compared to instant replies',
  'Wasted marketing spend: You pay to generate leads then lose them due to slow follow-up',
  'Competitor advantage: Rivals with instant auto-replies capture your leads while you are silent',
  'Customer frustration: No confirmation creates anxiety and makes people assume their message failed',
];

const diy = {
  timeToComplete: '15 minutes (3-message sequence)',
  steps: [
    {
      step: 1,
      title: 'Message 1: Instant Confirmation (5 mins)',
      action:
        "Set up an auto-reply that sends within 30 seconds of enquiry. Template: 'Hi [Name], thanks for contacting [Business]! We have got your message about [topic]. We will send you [what they asked for] within the next 2 hours. In the meantime, here is [helpful link/resource]. — [Your Name]'. Use SMS for phone enquiries, email for form submissions.",
      expectedResult:
        'Leads get instant confirmation, reducing anxiety and stopping them from contacting competitors while waiting.',
    },
    {
      step: 2,
      title: 'Message 2: Value + Next Steps (5 mins)',
      action:
        "Send this 1 hour after enquiry if you have not responded personally yet. Template: 'Hi [Name], quick follow-up from [Business]. While you wait, here is what happens next: 1) We review your request. 2) You get a [quote/call/booking link] within 24 hours. 3) You decide if we are a good fit. Quick question: [qualifying question]?'. This keeps engagement high.",
      expectedResult:
        'Leads stay engaged, get educated about your process, and start self-qualifying before you even speak to them.',
    },
    {
      step: 3,
      title: 'Message 3: CTA at 24 Hours (5 mins)',
      action:
        "If you have not closed the lead in 24 hours, send this: 'Hi [Name], [Your Name] from [Business]. I wanted to personally follow up on your [service] enquiry. I have a few slots open this week. Would [Day] at [Time] work for a quick call? Book here: [calendar link].' Direct CTA with specific time drives action.",
      expectedResult:
        'Leads who need more time get a personal nudge with a frictionless booking option, increasing conversion by 40%.',
    },
    {
      step: 4,
      title: 'Segment by Enquiry Type (Bonus)',
      action:
        "Create different auto-reply flows for different enquiry types. 'Quote Request' → send pricing guide + qualification questions. 'Booking Request' → send calendar link immediately. 'General Question' → send FAQ link + offer to book a call. Relevance increases conversion.",
      expectedResult:
        'Each lead gets a tailored response that matches their intent, dramatically improving conversion rates.',
    },
  ],
};

const automation = {
  benefit:
    'Managing auto-reply sequences manually across SMS and email is tedious and error-prone. Our Smart Website platform creates intelligent multi-channel auto-reply funnels that adapt to enquiry type.',
  solutions: [
    {
      title: 'Multi-Channel Auto-Reply (SMS + Email + WhatsApp)',
      description:
        'Enquiries trigger automatic responses across all channels the lead used. SMS for phone enquiries, email for form submissions, WhatsApp for WhatsApp messages. One system, all channels covered.',
      icon: MessageSquare,
    },
    {
      title: 'Smart Segmentation & Personalisation',
      description:
        'Auto-replies adapt based on: service requested, enquiry source (Google, Facebook, website), time of day, lead quality score. High-value leads get immediate personal outreach, routine enquiries get standard sequence.',
      icon: Zap,
    },
    {
      title: 'Automatic Follow-Up Escalation',
      description:
        'If a lead does not respond to auto-replies within 48 hours, they are automatically escalated to your personal task list with context: source, history, value estimate. You focus on warm leads, automation handles the rest.',
      icon: Clock,
    },
  ],
};

const caseExample = {
  businessType: 'Landscaping Company (Surrey)',
  problem:
    'A landscaping company received 30-40 quote requests per week but converted only 12-15 because they took 24-48 hours to respond personally. By then, 60% had already booked competitors.',
  solution:
    'We built a 3-message auto-reply funnel: instant SMS confirmation, 1-hour email with portfolio link + pricing guide, 24-hour SMS with calendar booking link. High-value enquiries (£5k+) got immediate personal calls.',
  result:
    'Quote-to-booking conversion increased from 40% to 68%. They closed 27 jobs/week instead of 15 with the same enquiry volume. Revenue increased £8,000/month.',
  stat: '+70% conversion increase with automated reply funnel',
  challengeHeading: 'The Problem',
  solutionHeading: 'Our Solution',
  resultHeading: 'The Results',
};

const faqs = [
  {
    question: 'Will auto-replies make me seem robotic or impersonal?',
    answer:
      "Not if written well. Use personal language, first names, and helpful information. Most customers prefer instant helpful responses over waiting hours for a 'personal' reply that says the same thing.",
  },
  {
    question: 'Should I use SMS or email for auto-replies?',
    answer:
      'Use both. SMS for urgent enquiries and phone leads (98% open rate), email for form submissions and detailed information. Multi-channel beats single-channel every time.',
  },
  {
    question: 'How many messages should I include in the auto-reply sequence?',
    answer:
      '3-5 messages over 3 days is optimal. Too few and you lose touch, too many and you annoy people. Tailor frequency to your industry: urgent services need faster cadence.',
  },
  {
    question: 'Can I still respond personally if I have auto-replies set up?',
    answer:
      'Yes. Auto-replies fill the gap until you can respond personally. Once you reply manually, the automation stops. Think of it as a safety net, not a replacement.',
  },
];

const finalCta = {
  title: 'Automate Your Enquiry Follow-Up and Book More Jobs',
  description:
    'Our Smart Website platform includes intelligent auto-reply funnels across SMS, email, and WhatsApp with smart segmentation and escalation. Never lose a lead to slow response times again.',
};

export const autoReplyFunnel: ResourceData = {
  slug,
  title: 'Build a 5-Minute Auto-Reply Funnel (SMS + Email Template)',
  description:
    'Set up automatic replies for enquiries in 5 minutes. Get more bookings with instant SMS and email responses that feel personal but run on autopilot.',
  category: 'crm-automation',
  publishedAt: '2026-01-28',
  systems: ['ai-lead-handling'],
  topics: ['lead-response-time'],
  seo: {
    title: 'Build a 5-Minute Auto-Reply Funnel (SMS + Email Template)',
    description:
      'Set up automatic replies for enquiries in 5 minutes. Get more bookings with instant SMS and email responses that feel personal but run on autopilot.',
    canonical,
  },
  sections: [
    {
      type: 'hero',
      heading: 'Auto-Reply Funnels: Convert More Leads While You Sleep',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'problem',
      heading: "What's Going Wrong (and Why)",
      content: problem.description,
      items: problem.causes,
      causesHeading: 'Key Issues Identified:',
    },
    {
      type: 'business-costs',
      heading: 'What This Costs Your Business',
      content: ["Every day this problem persists, you're losing:"],
      items: businessCosts,
    },
    {
      type: 'diy',
      heading: 'Quick DIY Fix (You Can Do Today)',
      content: [
        'Follow these steps to start fixing the issue right now:',
        '💡 Pro Tip: These steps will help, but they require ongoing manual effort. Keep reading to learn how to automate this completely.',
      ],
      timeToComplete: diy.timeToComplete,
      steps: diy.steps,
      proTipHeading: '💡 Important Note:',
    },
    {
      type: 'solution-cards',
      heading: 'Make It Automatic (So It Stays Fixed)',
      content: [
        'The MindWP Difference',
        'Our Smart Website platform combines all these solutions into one automated system. Set it up once, and it works 24/7 without you lifting a finger.',
      ],
      benefit: automation.benefit,
      solutions: automation.solutions,
    },
    {
      type: 'case',
      heading: 'Real-World Example',
      content: ['See how another service business solved this exact problem'],
      caseExample,
    },
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      content: ['Common questions about solving this problem'],
      items: faqs,
    },
    {
      type: 'cta',
      heading: finalCta.title,
      content: [finalCta.description],
      button: {
        text: primaryCta.label,
        url: primaryCta.href,
      },
    },
    {
      type: 'related-resources',
      heading: getRelatedResourcesHeading('crm-automation'),
      content: getRelatedResourcesContent('crm-automation'),
      resources: getRelatedResources('crm-automation', canonical),
    },
  ],
};
