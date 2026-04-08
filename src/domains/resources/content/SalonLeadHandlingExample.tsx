import { Calendar, PhoneIncoming, TrendingUp } from 'lucide-react';

import { primaryCta } from '@/config/primaryCta';

import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'salon-lead-handling-example';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'Salons and barbershops operate on walk-ins and repeat bookings — but new client acquisition depends on handling inquiries fast. A potential client who messages about availability on Instagram, calls during a busy Saturday, or fills in a web form expects a response within minutes. Without automated lead handling, salon owners lose new clients to competitors who reply faster, while the team is too busy cutting and styling to check messages.',
  problem:
    'Your salon team is too busy with clients to answer calls and messages, which means potential new clients book elsewhere when they do not hear back quickly',
  promise:
    'You will see how salons implement automated lead handling that responds to every inquiry instantly, offers self-service booking, and converts new inquiries into first appointments — even during the busiest hours',
};

const takeaways = [
  'Salon leads come through multiple channels (phone, Instagram, Google, web) and need unified handling',
  'Self-service booking links in automated responses convert more leads than promising to call back',
  'New client inquiries need different handling than existing client rebooking',
  'Saturday and evening inquiries — the highest volume periods — are when staff are least available to respond',
];

const problem = {
  description: [
    'A salon chair generates revenue only when someone is in it. This creates a fundamental conflict: the time when stylists are busiest (and generating the most revenue) is also when the most potential clients are calling and messaging. A busy Saturday means 8 hours of non-stop appointments — and potentially dozens of missed calls and unanswered DMs from people looking to book.',
    'The financial impact compounds because salon clients have high lifetime value. A new client who books a first haircut at £45 may return every 4-6 weeks for years — representing £500-1,000+ in annual revenue. When that first inquiry goes unanswered and they book with a competitor, you lose not just £45 but potentially thousands over the relationship. Most salon owners know this but cannot solve it while their hands are in someone hair.',
  ],
  causes: [
    'Stylists physically cannot answer phones during appointments',
    'Inquiries arrive across phone, Instagram, Facebook, Google, and website — no unified inbox',
    'No automated response to acknowledge inquiries during busy periods',
    'Walk-in culture means many salons underinvest in digital lead handling',
    'New client inquiries mixed in with existing client rebooking creates noise',
    'Evening and weekend messages go unread until Monday morning',
  ],
};

const caseExample = {
  businessType: 'Hair Salon (North London, 6 stylists)',
  problem:
    'A 6-chair salon received an average of 35 new client inquiries per week across Instagram DMs, phone calls, and Google messages. With all stylists booked back-to-back, the receptionist (who also managed walk-ins and checkout) could respond to about 60% of inquiries within an hour. The remaining 40% — approximately 14 potential new clients per week — received responses 4+ hours later or not at all. At an average first-visit value of £55 and 65% conversion on timely responses, they estimated losing 9 bookings per week.',
  solution:
    'We implemented unified lead handling: all channels (Instagram, phone, web, Google) funnelled into a single system. Every inquiry received an instant automated response within 60 seconds: "Thanks for your interest! Here is our availability: [booking link]. New to us? We offer 20% off your first visit." The booking link connected to their scheduling system showing real-time availability. Inquiries requiring specific stylist requests were flagged for personal follow-up.',
  result:
    'New client bookings increased from 16/week to 24/week. The instant booking link was used by 70% of inquirers — removing the need for back-and-forth scheduling messages. The 20% new client offer created urgency. Saturday inquiry response time went from 3+ hours to under 1 minute. Monthly new client revenue increased by approximately £2,200. The receptionist was freed to focus on in-salon experience.',
  stat: 'New client bookings increased 50% (16 to 24 per week) with instant automated responses and booking links',
};

const solutions = [
  {
    title: 'Unified Multi-Channel Response',
    description:
      'Phone calls, Instagram DMs, Google messages, Facebook inquiries, and website forms all funnel into a single system with instant automated responses. The response is channel-appropriate: Instagram gets a DM reply, phone gets an SMS, web forms get email and SMS. Every response includes a direct booking link. No inquiry waits for a human to be available — the system responds in seconds.',
    icon: PhoneIncoming,
  },
  {
    title: 'Self-Service Booking Integration',
    description:
      'The automated response includes a booking link showing real-time availability. Clients can see open slots, select their preferred stylist (or "any available"), choose their service, and book — all without a phone call or message exchange. For salons, this is transformative: it converts a multi-step booking conversation into a one-click action. Most clients prefer this, and it eliminates scheduling back-and-forth entirely.',
    icon: Calendar,
  },
  {
    title: 'New Client Conversion Optimization',
    description:
      'New client inquiries are tagged and handled differently from existing client rebooking. New clients receive a welcome offer (first-visit discount, free consultation, or added service). Their booking triggers a pre-appointment message with parking info, what to expect, and service menu. Post-visit, they enter a retention sequence. This systematic new client journey converts more first inquiries into long-term clients.',
    icon: TrendingUp,
  },
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Audit Your Inquiry Channels',
      action:
        'List every way potential clients contact your salon: phone, Instagram DM, Facebook message, Google Business message, website form, email, walk-in inquiries, referral messages. For one week, track how many inquiries come through each channel and how quickly they receive a response. Most salons discover that Instagram and phone are their top channels, with the slowest response times during peak hours.',
      expectedResult:
        'A clear map of where your salon inquiries come from and which channels have the worst response times.',
    },
    {
      step: 2,
      title: 'Set Up Instant Responses with Booking Links',
      action:
        'For each channel, configure an automated response. Instagram: auto-reply to DMs with "Thanks for reaching out! Book your appointment here: [link]." Phone: missed call auto-text with the same booking link. Google: auto-reply enabled. Website: instant confirmation email with booking link. The booking link should show real-time availability and allow service selection. Add a new client offer to the automated message.',
      expectedResult:
        'Every inquiry channel has an instant automated response that includes a direct booking link and new client offer.',
    },
    {
      step: 3,
      title: 'Track and Optimize',
      action:
        'Monitor which channels produce the most bookings, which automated responses have the highest click-through rates, and what percentage of inquiries convert to first appointments. Adjust your messaging based on data: if Instagram produces twice the leads of Google, invest more in Instagram content. If the new client offer converts at 30%, test a different offer to see if you can improve it.',
      expectedResult:
        'Data-driven insight into your best lead sources and automated response performance, with continuous optimization.',
    },
  ],
};

const finalCta = {
  title: 'Automate Lead Handling for Your Salon',
  description:
    'Our AI Lead Handling systems unify every inquiry channel, respond instantly with self-service booking, and convert more new client inquiries into first appointments — even during your busiest hours.',
};

export const salonLeadHandlingExample: ResourceData = {
  slug,
  title: 'Salon Lead Handling Example',
  description:
    'See how salons use automated lead handling to respond instantly across Instagram, phone, and web, convert inquiries into self-service bookings, and grow new client acquisition by 50%.',
  category: 'ai-lead-handling',
  publishedAt: '2026-01-21',
  systems: ['ai-lead-handling'],
  industries: ['salon'],
  topics: ['lead-management'],
  primaryService: 'ai-lead-handling',
  seo: {
    title: 'Salon Lead Handling Example',
    description:
      'See how salons use automated lead handling to respond instantly across Instagram, phone, and web, convert inquiries into self-service bookings, and grow new client acquisition by 50%.',
    canonical,
  },
  sections: [
    {
      type: 'hero',
      heading: 'Salon Lead Handling Example',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['Key lessons for salon lead handling:'],
      items: takeaways,
    },
    {
      type: 'problem',
      heading: 'Why Busy Salons Lose New Clients They Could Easily Win',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'Common Salon Lead Handling Failures:',
    },
    {
      type: 'case',
      heading: 'Real-World Salon Example',
      content: ['How automated lead handling transformed new client acquisition:'],
      caseExample,
      challengeHeading: 'The Problem',
      solutionHeading: 'The System',
      resultHeading: 'The Outcome',
    },
    {
      type: 'diy',
      heading: 'Set Up Salon Lead Handling',
      content: ['Steps specific to salon businesses:'],
      steps: diy.steps,
    },
    {
      type: 'solution-cards',
      heading: 'The Salon Lead Handling Architecture',
      content: [
        'Automated Lead Handling for Salons',
        'A system designed for high-volume, multi-channel salon inquiries:',
      ],
      benefit:
        'When every salon inquiry across every channel receives an instant response with a booking link, you convert inquiries into appointments without interrupting your team during busy service hours.',
      solutions,
    },
    {
      type: 'cta',
      heading: finalCta.title,
      content: [finalCta.description],
      button: {
        text: primaryCta.label,
        url: '/services/ai-lead-handling',
      },
    },
    {
      type: 'related-resources',
      heading: getRelatedResourcesHeading('ai-lead-handling'),
      content: getRelatedResourcesContent('ai-lead-handling'),
      resources: getRelatedResources('ai-lead-handling', canonical),
    },
  ],
};
