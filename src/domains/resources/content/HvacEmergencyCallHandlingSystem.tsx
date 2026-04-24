import { AlertTriangle, Clock, PhoneCall } from 'lucide-react';

import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'hvac-emergency-call-handling-system';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'Emergency HVAC calls — no heat, no cooling, gas leaks, water damage from failed units — represent the highest-value, most time-sensitive work an HVAC company handles. These calls come at all hours and demand an immediate, structured response. A dedicated emergency call handling system ensures that life-safety and comfort-critical situations are routed, dispatched, and resolved without delay.',
  problem:
    'Your HVAC emergency calls are handled the same way as routine inquiries, which means critical situations get delayed while non-urgent requests clog the queue',
  promise:
    'You will see how HVAC companies implement dedicated emergency call handling that triages urgency, dispatches technicians immediately, and captures premium-rate emergency work around the clock',
};

const takeaways = [
  'HVAC emergencies (no heat in winter, gas leaks) are life-safety situations that require separate handling from routine service',
  'Emergency calls converted within 15 minutes have 3-4x higher close rates than those responded to in 1+ hour',
  'A tiered emergency system prevents non-urgent calls from blocking critical dispatches',
  'After-hours emergency handling at premium rates is among the highest-margin work in HVAC',
];

const problem = {
  description: [
    'When every HVAC call enters the same queue, genuine emergencies compete with routine maintenance requests for attention. A homeowner with a gas smell waits behind someone scheduling a filter change. A family with no heat in subzero temperatures gets the same voicemail as someone asking about a tune-up. This is not just a customer service failure — it is a safety risk and a massive revenue loss.',
    'Emergency HVAC work commands premium rates and has near-100% close rates when handled quickly. A homeowner with no heat at 10pm will pay whatever it takes to get warm. But without a system to identify, route, and dispatch emergency calls separately, these high-value jobs are treated like everything else — and often lost to competitors who have a dedicated emergency line or faster response.',
  ],
  causes: [
    'No triage system to separate emergencies from routine calls',
    'Emergency calls go to the same voicemail as all other inquiries',
    'No on-call technician rotation or dispatch system',
    'After-hours calls have no handling at all',
    'Office staff lack training to identify life-safety situations',
    'No premium pricing structure for emergency work',
  ],
};

const caseExample = {
  businessType: 'HVAC Service Company (Manchester area)',
  problem:
    'An HVAC company received an average of 8 after-hours calls per week during winter months. All went to a generic voicemail. The owner checked messages the next morning and called back — by which time most emergencies had been handled by competitors. They estimated losing 5-6 emergency jobs per week at an average value of £400 each (including emergency premium). That was £2,000-2,400 per week in peak season lost entirely.',
  solution:
    'We implemented a tiered emergency system. Callers heard: "Press 1 for no heat or gas emergency — we dispatch immediately. Press 2 for service within 24 hours. Press 3 for general inquiries." Option 1 routed to the on-call technician mobile with automated customer details via text. Option 2 triggered an instant text with next-day booking. Option 3 went to voicemail with next-business-day callback. The on-call rotation automated weekly among 4 senior technicians.',
  result:
    'Emergency call capture went from near-zero to 85% (average 5 emergency dispatches per week). At premium rates averaging £450 per call, this generated £2,250 per week — £9,000 per month — in previously lost revenue. Customer satisfaction for emergency calls was rated 4.9/5. The on-call technicians accepted the rotation because the premium pricing was shared: each earned an additional £200-400 per on-call week.',
  stat: 'Emergency call capture increased from near-zero to 85%, generating £9,000/month in recovered revenue',
};

const solutions = [
  {
    title: 'Tiered Call Triage',
    description:
      'An automated system classifies every incoming call: Tier 1 (Life Safety) — gas leaks, CO alarms, no heat in dangerous cold → immediate dispatch. Tier 2 (Comfort Emergency) — no cooling in extreme heat, major water leak from unit → priority callback within 15 minutes. Tier 3 (Urgent Service) — reduced heating/cooling, unusual noises → same-day booking. Tier 4 (Routine) — maintenance, estimates, general questions → next-available slot.',
    icon: AlertTriangle,
  },
  {
    title: 'Automated On-Call Dispatch',
    description:
      'When an emergency call is identified, the system automatically contacts the on-call technician. A text with customer details (name, address, issue description) arrives simultaneously with a phone alert. The technician confirms acceptance or the system escalates to the backup. This removes the office as a bottleneck — emergencies reach a technician in under 2 minutes regardless of time of day.',
    icon: PhoneCall,
  },
  {
    title: 'Premium Pricing and Scheduling Structure',
    description:
      'Emergency handling connects to premium pricing automation. After-hours and emergency calls are automatically quoted at the premium rate with transparent communication: "Our emergency rate is £X for evenings/weekends, which includes diagnostic and first-hour labour." The CRM tracks emergency job revenue separately, showing the true value of the emergency handling system and justifying the on-call compensation.',
    icon: Clock,
  },
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Separate Emergency from Routine Calls',
      action:
        'Set up an IVR (interactive voice response) on your phone system. Minimum: "Press 1 for heating or cooling emergency, Press 2 for all other inquiries." Option 1 should route to a dedicated mobile or on-call number — never to voicemail. Option 2 can go to voicemail or scheduling during after-hours. Even this simple split dramatically improves emergency capture.',
      expectedResult:
        'Emergency calls are immediately separated from routine inquiries and routed to a live person or on-call number.',
    },
    {
      step: 2,
      title: 'Establish an On-Call Rotation',
      action:
        'Create a weekly on-call schedule among your senior technicians. The on-call technician carries a dedicated phone or has calls forwarded to their mobile. Compensation: either a flat on-call fee plus job earnings at premium rate, or a percentage of emergency job revenue. Publish the rotation a month in advance. Set up a backup: if on-call does not answer within 3 rings, calls forward to the backup technician.',
      expectedResult:
        'A reliable on-call system where a qualified technician is always reachable for emergencies, with fair compensation and backup coverage.',
    },
    {
      step: 3,
      title: 'Track Emergency Revenue Separately',
      action:
        'In your CRM or invoicing system, tag all emergency/after-hours jobs separately. Track: number of emergency calls per week, conversion rate, average job value, revenue per on-call period. Compare emergency revenue to the cost of on-call compensation. This data proves the ROI and helps you decide whether to expand emergency coverage hours.',
      expectedResult:
        'Clear visibility into emergency revenue as a distinct revenue stream, with data to optimise coverage hours and technician compensation.',
    },
  ],
};

const finalCta = {
  title: 'Build an Emergency Handling System for Your HVAC Business',
  description:
    'Our AI Lead Handling and CRM systems create tiered emergency triage that routes critical HVAC calls to on-call technicians immediately — capturing premium-rate work around the clock.',
};

export const hvacEmergencyCallHandlingSystem: ResourceData = {
    slug,
    seo: {
    title: 'HVAC Emergency Call Handling System',
    description:
      'See how HVAC companies implement dedicated emergency call handling with tiered triage, automated dispatch, and premium pricing to capture high-value work around the clock.',
    canonical,
  },
    title: 'HVAC Emergency Call Handling System',
    description:
    'See how HVAC companies implement dedicated emergency call handling with tiered triage, automated dispatch, and premium pricing to capture high-value work around the clock.',
    category: 'ai-lead-handling',
    publishedAt: '2026-02-18',
    systems: ['ai-lead-handling', 'crm-automation'],
    industries: ['hvac'],
    topics: ['emergency-handling'],
    primaryService: 'ai-lead-handling',
    sections: [
    {
      type: 'hero',
      heading: 'HVAC Emergency Call Handling System',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['Key lessons for HVAC emergency call handling:'],
      items: takeaways,
    },
    {
      type: 'problem',
      heading: 'Why Standard Call Handling Fails for HVAC Emergencies',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'Common Emergency Handling Failures:',
    },
    {
      type: 'case',
      heading: 'Real-World HVAC Example',
      content: ['How dedicated emergency handling captured premium revenue:'],
      caseExample,
      challengeHeading: 'The Problem',
      solutionHeading: 'The System',
      resultHeading: 'The Outcome',
    },
    {
      type: 'diy',
      heading: 'Set Up HVAC Emergency Call Handling',
      content: ['Steps specific to HVAC emergency systems:'],
      steps: diy.steps,
    },
    {
      type: 'solution-cards',
      heading: 'The HVAC Emergency Call Architecture',
      content: [
        'Dedicated Emergency Handling for HVAC',
        'A system that separates life-safety and comfort emergencies from routine service:',
      ],
      benefit:
        'When HVAC emergencies are triaged, routed, and dispatched through a dedicated system, you capture premium-rate work that would otherwise be lost to voicemail or competitors.',
      solutions,
    },
    {
      type: 'cta',
      heading: finalCta.title,
      content: [finalCta.description],
    },
    {
      type: 'related-resources',
      heading: getRelatedResourcesHeading('ai-lead-handling'),
      content: getRelatedResourcesContent('ai-lead-handling'),
      resources: getRelatedResources('ai-lead-handling', canonical),
    },
  ]
};
