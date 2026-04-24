import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'client-reactivation-systems';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'A client reactivation system is an automated workflow that identifies past customers who have not returned for a defined period and re-engages them with targeted outreach. It is significantly more cost-effective to reactivate a past customer than to acquire a new one — reactivation campaigns typically achieve 3-5x the ROI of new customer acquisition campaigns.',
  problem:
    'You have hundreds of past customers in your CRM who have not returned, but you have no system to identify them, reach out, or give them a reason to come back',
  promise:
    'You will learn how to build an automated reactivation system that identifies lapsed customers, sends targeted re-engagement campaigns, and recovers revenue from your existing customer base',
};

const takeaways = [
  'Past customers are your highest-value marketing audience — they already trust you',
  'Reactivation costs a fraction of new customer acquisition and converts at higher rates',
  'CRM data identifies lapsed customers automatically based on last service date',
  'Tiered outreach (reminder, incentive, final attempt) maximises recovery rate',
];

const problem = {
  description: [
    'Every service business has a database of past customers who used the service once or a few times and then stopped. These customers did not necessarily leave because of a bad experience — they simply forgot, found no reason to return, or were never asked. They sit in CRM databases doing nothing.',
    'Acquiring a new customer typically costs 5-7x more than retaining or reactivating an existing one. Yet most service businesses spend 90% of their marketing budget on new customer acquisition and 0% on systematically reaching out to past customers. The revenue sitting dormant in your CRM database is substantial.',
  ],
  causes: [
    'No system to identify which customers have lapsed',
    'No definition of "lapsed" — no clear timeframe triggering reactivation',
    'Past customers only contacted when they reach out themselves',
    'No automated outreach for customers past their expected return date',
    'Marketing budget entirely focused on new customer acquisition',
    'CRM data not used strategically — just a historical record',
  ],
};

const diy = {
  steps: [
    {
      step: 1,
      title: 'Define Your Reactivation Window',
      action:
        'Determine how long the typical gap is between repeat purchases for your service. If customers normally return every 12 months (e.g., annual boiler service), set your reactivation trigger at 14 months — 2 months past the expected return date. If it is every 6 months (e.g., dental cleaning), trigger at 8 months. This becomes your "lapsed" definition.',
      expectedResult:
        'A clear, data-based definition of when a customer becomes lapsed and eligible for reactivation outreach.',
    },
    {
      step: 2,
      title: 'Build a Three-Touch Reactivation Sequence',
      action:
        'Create three automated messages triggered when a customer passes the lapsed threshold. Touch 1 (at threshold): friendly reminder that their service is due, easy booking link. Touch 2 (2 weeks later): add a time-limited incentive (10% discount, free add-on). Touch 3 (2 weeks later): final message — "We miss you" with the incentive expiring. Use SMS for Touch 1 and 3, email for Touch 2.',
      expectedResult:
        'An automated sequence that gives lapsed customers three chances to re-engage with escalating reasons to come back.',
    },
    {
      step: 3,
      title: 'Track and Optimise Recovery Rate',
      action:
        'Track: how many customers enter the reactivation sequence each month, how many book at each touch point, total revenue recovered, and cost of any incentives offered. Calculate: recovery rate (reactivated ÷ entered), revenue per reactivated customer, ROI of the campaign. Optimise messaging based on which touch point converts best.',
      expectedResult:
        'Measurable reactivation performance that you can optimise month by month, recovering increasing revenue from your existing database.',
    },
  ],
};

const checklist = [
  'Lapsed customer definition set (time since last service)',
  'CRM automation triggers when customer passes lapsed threshold',
  'Touch 1: Friendly reminder with booking link (SMS)',
  'Touch 2: Incentive offer with deadline (email, 2 weeks later)',
  'Touch 3: Final attempt with expiring incentive (SMS, 2 weeks later)',
  'Booking link tracks source as "reactivation" for attribution',
  'Reactivated customers tagged in CRM for performance tracking',
  'Monthly report: customers entered, reactivated, revenue recovered',
  'Incentive costs tracked against recovered revenue for ROI',
  'Sequence tested with a small batch before full database rollout',
];

const faqs = [
  {
    question: 'How much should I offer as a reactivation incentive?',
    answer:
      'A 10-15% discount or a free add-on service is typically sufficient. The incentive needs to feel meaningful but should not devalue your service. Many businesses find that the reminder alone (Touch 1, no incentive) recovers 30-40% of reactivations — the incentive catches additional customers who need an extra reason.',
  },
  {
    question: 'Should I reactivate customers who left because of a bad experience?',
    answer:
      'Only if the issue has been resolved. Review any feedback or complaint history in the CRM before including them. If the issue is fixable (e.g., a specific technician who has been retrained), a personalised message acknowledging the issue and explaining what has changed can be remarkably effective.',
  },
  {
    question: 'What reactivation rate should I expect?',
    answer:
      'For a well-designed three-touch sequence, 10-20% reactivation rate is typical. Businesses with strong original service quality and recognisable brand names can see 25%+. Even a 10% rate is highly profitable because the cost per reactivation is a fraction of new customer acquisition cost.',
  },
  {
    question: 'How long should a customer be inactive before entering reactivation?',
    answer:
      'Use the normal buying cycle of your service as the baseline. If most customers buy every 3 months, reactivation should start shortly after that window is missed. For annual services, the inactivity window may be 12-15 months. The trigger should feel like a timely reminder, not a message sent years after the relationship has gone cold.',
  },
];

const finalCta = {
  title: 'Automate Client Reactivation and Recover Lost Revenue',
  description:
    'Our CRM Infrastructure systems identify lapsed customers automatically and run targeted reactivation campaigns that recover revenue from your existing database.',
};

export const clientReactivationSystems: ResourceData = {
    slug,
    seo: {
    title: 'Client Reactivation Systems',
    description:
      'Build an automated reactivation system that identifies lapsed customers, sends targeted re-engagement campaigns, and recovers revenue from your existing customer base.',
    canonical,
  },
    title: 'Client Reactivation Systems',
    description:
    'Build an automated reactivation system that identifies lapsed customers, sends targeted re-engagement campaigns, and recovers revenue from your existing customer base.',
    category: 'revenue-growth',
    publishedAt: '2025-11-29',
    systems: ['crm-automation'],
    industries: [],
    topics: ['client-reactivation'],
    primaryService: 'crm-automation',
    sections: [
    {
      type: 'hero',
      heading: 'Client Reactivation Systems',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['Core principles of client reactivation:'],
      items: takeaways,
    },
    {
      type: 'problem',
      heading: 'The Revenue Sitting Dormant in Your Customer Database',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'Signs You Need a Reactivation System:',
    },
    {
      type: 'business-costs',
      heading: 'The Cost of Ignoring Past Customers',
      content: ['What lapsed customers cost your business:'],
      items: [
        'Acquiring a new customer costs 5-7x more than reactivating a past one. Every month without a reactivation system, you pay premium prices for new customers who could have been recovered at a fraction of the cost.',
        'A service business with 500 past customers and a 12-month service cycle has approximately 100 customers lapsing per year. At a 15% reactivation rate, that is 15 recovered customers. At an average job value of £800, that is £12,000 in recovered revenue per year from a system that costs almost nothing to run.',
        'Every lapsed customer is also a lost referral source. Active customers refer an average of 1-2 new customers per year. Losing a customer means losing not just their revenue but the referrals they would have generated.',
      ],
    },
    {
      type: 'diy',
      heading: 'Build Your Reactivation System',
      content: ['Steps to start recovering lapsed customers:'],
      steps: diy.steps,
    },
    {
      type: 'checklist',
      heading: 'Reactivation System Checklist',
      content: ['Ensure every component is in place:'],
      items: checklist,
    },
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      content: ['Common questions about client reactivation:'],
      items: faqs,
    },
    {
      type: 'cta',
      heading: finalCta.title,
      content: [finalCta.description],
    },
    {
      type: 'related-resources',
      heading: getRelatedResourcesHeading('revenue-growth'),
      content: getRelatedResourcesContent('revenue-growth'),
      resources: getRelatedResources('revenue-growth', canonical),
    },
  ]
};
