import { GitBranch, MapPin, Users } from 'lucide-react';


import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'lead-routing-models-for-service-companies';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'Lead routing is the system that decides which team member handles which lead. Effective routing matches leads to the right handler based on service type, location, urgency, and team capacity. Without routing, leads go to whoever checks the inbox first — which is rarely the best match.',
  problem:
    'All leads go to the same inbox or the same person, creating bottlenecks, mismatched assignments, and delayed responses for high-priority enquiries',
  promise:
    'You will understand the main lead routing models — round-robin, skill-based, territory-based, and priority-based — and how to implement the right model for your business',
};

const takeaways = [
  'Lead routing assigns the right lead to the right person based on rules, not inbox order',
  'Four common models: round-robin, skill-based, territory-based, and priority-based',
  'Most service businesses benefit from a hybrid model combining 2-3 routing criteria',
  'Proper routing reduces response time and improves conversion by matching expertise to need',
];

const problem = {
  description: [
    'In most service businesses, lead routing is informal. Enquiries go to a shared inbox, and whoever sees it first handles it. Or everything goes to the owner, who becomes the bottleneck. There are no rules about who should handle which type of enquiry.',
    'This creates predictable problems. The most responsive team member gets overloaded while others are underutilized. Leads needing specialist knowledge get handled by generalists. Urgent requests wait in the same queue as general enquiries. The business has no systematic way to match lead needs to team capabilities.',
  ],
  causes: [
    'All enquiries go to shared inbox with no assignment rules',
    'Owner acts as single routing point, creating bottleneck',
    'No distinction between lead types when assigning handlers',
    'Team capacity not considered — busy people still get new leads',
    'Emergency and routine enquiries sit in the same queue',
    'No feedback loop showing which handlers convert best for which lead types',
  ],
};

const comparison = {
  before: {
    title: 'No Routing System',
    items: [
      'All leads go to shared inbox',
      'First person to see it handles it',
      'No capacity management across team',
      'Specialist knowledge not matched to lead type',
      'Urgent leads wait in general queue',
      'No data on handler performance by lead type',
    ],
  },
  after: {
    title: 'Structured Lead Routing',
    items: [
      'Leads auto-assign based on routing rules',
      'Right person gets right lead immediately',
      'Capacity balancing prevents overload',
      'Specialists handle their expertise area',
      'Urgent leads escalate to priority handlers',
      'Conversion data by handler informs routing improvements',
    ],
  },
};

const solutions = [
  {
    title: 'Skill-Based Routing',
    description:
      'Leads route to team members based on their expertise. Boiler repair enquiries go to certified boiler engineers. Bathroom renovation leads go to the senior estimator. The CRM matches the service type on the lead to the skills assigned to each team member.',
    icon: Users,
  },
  {
    title: 'Territory-Based Routing',
    description:
      'For businesses covering large areas, leads route based on location. A customer in the north region goes to the north team. Postcode rules in CRM automatically assign the correct territory. This reduces travel time and improves local knowledge for each lead.',
    icon: MapPin,
  },
  {
    title: 'Priority-Based Escalation',
    description:
      'Urgent leads skip the standard queue. Emergency service requests trigger immediate SMS alerts to on-call handlers. High-value leads (identified by service type or qualification data) route to senior team members. Standard leads follow round-robin distribution.',
    icon: GitBranch,
  },
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Define Your Lead Categories',
      action:
        'List the 3-5 main types of leads your business receives: by service type (repair vs installation), by urgency (emergency vs scheduled), or by value (small job vs large project). These categories become your routing criteria.',
      expectedResult: 'A clear set of lead categories that form the basis of your routing rules.',
    },
    {
      step: 2,
      title: 'Assign Handlers to Categories',
      action:
        'For each lead category, assign the team member or team best suited to handle it. Consider expertise, availability, and current capacity. Document who handles what: "Emergency plumbing → John (on-call), Bathroom quotes → Sarah (estimator), General maintenance → round-robin."',
      expectedResult:
        'A routing map that defines who handles which type of lead, replacing the default of "whoever sees it first."',
    },
    {
      step: 3,
      title: 'Implement Basic CRM Routing Rules',
      action:
        'In your CRM, create automation rules that assign leads based on the service type captured in the form. When a lead enters the pipeline tagged as "emergency," it assigns to the on-call handler and sends an SMS alert. Standard leads rotate through the team via round-robin.',
      expectedResult:
        'Leads are automatically assigned to the right handler without manual sorting, reducing response time and improving match quality.',
    },
  ],
};

const caseExample = {
  businessType: 'Electrical Contractor (Manchester)',
  problem:
    'An electrical contractor with a 6-person team had all leads going to the office manager, who manually assigned them based on who she thought was available. Response time averaged 3 hours. Emergency call-outs were delayed by the same routing bottleneck as routine enquiries. Two electricians were consistently overloaded while two were underutilised.',
  solution:
    'We implemented a hybrid routing model: emergency leads triggered immediate SMS to the on-call electrician, commercial enquiries routed to the commercial specialist, domestic jobs distributed round-robin with capacity balancing, and high-value projects routed to the senior estimator. All routing happened automatically on CRM entry.',
  result:
    'Emergency response time dropped from 3 hours to 8 minutes. Team utilisation balanced — no one was overloaded or idle. Conversion rate for commercial leads increased 45% because they consistently reached the specialist. The office manager reclaimed 2 hours per day previously spent on manual routing.',
  stat: '45% conversion improvement on specialist-routed leads',
};

const faqs = [
  {
    question: 'What if I am a solo operator with no team to route to?',
    answer:
      'Solo operators still benefit from routing logic — primarily priority-based. Emergency leads get immediate attention via SMS alert. General enquiries enter an automated sequence. The routing serves as prioritisation rather than team assignment.',
  },
  {
    question: 'How do I handle routing when my best handler is at capacity?',
    answer:
      'Configure overflow rules. When the primary handler has more than X active leads, the next lead routes to the secondary handler. Most CRMs support capacity-based routing where you set maximum active leads per handler.',
  },
  {
    question: 'Should routing rules be visible to the team?',
    answer:
      'Yes. Transparency prevents frustration. When team members understand why they receive certain leads, they handle them better. Share the routing logic and the data showing conversion rates by handler and lead type.',
  },
];

const finalCta = {
  title: 'Route Leads to the Right Person Automatically',
  description:
    'Our AI Lead Handling system routes leads based on service type, location, urgency, and team capacity. The right person handles every lead without manual sorting or bottlenecks.',
};

export const leadRoutingModelsForServiceCompanies: ResourceData = {
  slug,
  title: 'Lead Routing Models for Service Companies Guide',
  description:
    'Understand the four lead routing models — round-robin, skill-based, territory-based, and priority-based — and how to implement the right model for your service business.',
  category: 'ai-lead-handling',
  publishedAt: '2025-12-08',
  systems: ['ai-lead-handling'],
  industries: [],
  topics: ['lead-routing'],
  primaryService: 'ai-lead-handling',
  seo: {
    title: 'Lead Routing Models for Service Companies Guide',
    description:
      'Understand the four lead routing models — round-robin, skill-based, territory-based, and priority-based — and how to implement the right model for your service business.',
    canonical,
  },
  sections: [
    {
      type: 'hero',
      heading: 'Lead Routing Models for Service Companies',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['Core principles of effective lead routing:'],
      items: takeaways,
    },
    {
      type: 'problem',
      heading: 'What Happens Without Lead Routing',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'Signs Your Routing Is Broken:',
    },
    {
      type: 'case',
      heading: 'Real-World Example',
      content: ['How structured routing transformed an electrical contractor operation:'],
      caseExample,
      challengeHeading: 'The Problem',
      solutionHeading: 'The Routing Model',
      resultHeading: 'The Outcome',
    },
    {
      type: 'solution-cards',
      heading: 'Lead Routing Models Explained',
      content: [
        'Three Routing Approaches',
        'Most service businesses use a hybrid model combining elements from these routing approaches:',
      ],
      benefit:
        'Structured routing ensures every lead reaches the best available handler, improving both response time and conversion rate without adding team members.',
      solutions,
    },
    {
      type: 'comparison',
      heading: 'No Routing vs Structured Lead Routing',
      content: ['How structured routing changes lead handling across your team:'],
      before: comparison.before,
      after: comparison.after,
    },
    {
      type: 'diy',
      heading: 'Implement Lead Routing in Your Business',
      content: ['Start with these steps to add routing logic to your lead handling:'],
      steps: diy.steps,
    },
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      content: ['Common questions about lead routing:'],
      items: faqs,
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
  ],
};
