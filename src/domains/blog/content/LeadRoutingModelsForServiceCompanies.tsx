import type { BlogPostData } from '@/domains/blog/types';

export const leadRoutingModelsForServiceCompanies: BlogPostData = {
  slug: 'lead-routing-models-for-service-companies',
  title: 'Lead Routing Models for Service Companies',
  metaTitle: 'Lead Routing Models for Service Companies',
  metaDescription:
    'Understand how lead routing models for service companies assign enquiries to the right team member based on service type, location, and urgency automatically.',
  seo: {
    title: 'Lead Routing Models for Service Companies',
    description:
      'Understand how lead routing models for service companies assign enquiries to the right team member based on service type, location, and urgency automatically.',
    canonical: '/blog/lead-routing-models-for-service-companies',
    keywords: [
      'lead routing models for service companies',
      'lead routing workflow',
      'routing enquiries by service',
      'lead assignment models',
    ],
    openGraph: {
      title: 'Lead Routing Models for Service Companies',
      description:
        'Understand how lead routing models for service companies assign enquiries to the right team member based on service type, location, and urgency automatically.',
    },
  },
  publishDate: '2024-10-22',
  authorKey: 'TECHNICAL',
  category: 'ai-lead-handling',
  industries: [],
  systems: ['ai-lead-handling'],
  topics: ['lead-routing'],
  primaryKeyword: 'lead routing models for service companies',
  supportingKeywords: [
    'lead routing workflow',
    'routing enquiries by service',
    'lead assignment models',
  ],
  tags: [
    'Lead Routing',
    'Service Business',
    'AI Lead Handling',
    'Workflow Automation',
    'Team Assignment',
  ],
  sections: [
    {
      type: 'introduction',
      content: [
        'An HVAC company receives an enquiry for an emergency boiler repair. The form submission lands in a shared inbox where the office manager sees it, reads it, decides it should go to the emergency dispatch team, and forwards it. By the time the right person sees the lead, forty minutes have passed.',
        'Lead routing is the process of assigning incoming enquiries to the correct person or team automatically. For service businesses with multiple service types, locations, or team members, routing determines how quickly a lead reaches someone who can actually help. Manual routing introduces delay. Automated routing eliminates it.',
      ],
    },
    {
      type: 'content',
      heading: 'Where Lead Routing Fits in the System',
      content: [
        'Lead routing belongs to the AI lead handling layer and operates after capture and qualification. Once a lead has been received and classified, routing rules determine who handles it. The routing decision is based on configurable criteria that reflect the structure of the business.',
        'The complete set of routing models for service businesses is defined in the lead routing models for service companies resource. This blog explains the principles behind effective routing and the models available.',
      ],
    },
    {
      type: 'checklist',
      heading: 'Routing Criteria for Service Businesses',
      content:
        'Effective lead routing requires clear criteria. These are the most common routing dimensions used by service businesses.',
      items: [
        'Service type — route plumbing enquiries to plumbers, electrical to electricians',
        'Geographic area — assign leads to the team or technician covering that postcode',
        'Urgency level — flag emergency requests for immediate dispatch',
        'Team capacity — distribute leads evenly to prevent overload on any individual',
        'Customer status — route returning customers to their previous contact',
        'Time of day — assign after-hours leads to on-call staff or automated response',
        'Lead value — direct high-value commercial enquiries to senior estimators',
        'Language preference — match leads to staff who speak the preferred language',
      ],
    },
    {
      type: 'content',
      heading: 'Common Routing Models',
      content: [
        'Service businesses typically use one of three routing models, or a combination of them. Round-robin routing distributes leads evenly across team members in sequence. This model works for businesses where all leads are roughly equal in type and value.',
        'Rules-based routing assigns leads based on attributes — service type to the relevant department, location to the nearest team, urgency to the fastest responder. This model is more sophisticated but requires clear data capture at the intake stage.',
        'Weighted routing combines round-robin with capacity limits. Senior estimators might receive more complex enquiries while junior staff handle standard requests. This model requires both lead classification and team profiling.',
      ],
    },
    {
      type: 'content',
      heading: 'The Cost of Manual Routing',
      content: [
        'Every minute a lead spends waiting for manual routing is a minute the prospect could spend contacting a competitor. Manual routing also introduces decision fatigue — the person doing the routing must evaluate each lead individually, and their decisions become less consistent as volume increases.',
        'More critically, manual routing creates a single point of failure. When the person who assigns leads is on holiday, in a meeting, or overwhelmed, the entire pipeline stalls.',
      ],
      callout:
        'Automated routing does not make better decisions than an experienced office manager. It makes the same decisions consistently, instantly, and without taking breaks.',
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      items: [
        'Lead routing models for service companies assign enquiries to the right person automatically.',
        'Routing criteria include service type, location, urgency, capacity, and customer history.',
        'Round-robin, rules-based, and weighted models address different business structures.',
        'Manual routing introduces delay and creates a single point of failure in the lead pipeline.',
        'Effective routing depends on data quality — the intake form must capture enough context.',
        'Automated routing delivers consistent assignment speed regardless of volume or staff availability.',
      ],
    },
    {
      type: 'cta',
      heading: 'Route Leads to the Right Person Automatically',
      content:
        'If your leads sit in a shared inbox waiting for someone to read and assign them, routing automation can eliminate that delay. See how AI lead handling routes enquiries instantly.',
      buttonText: 'Explore AI Lead Handling',
      buttonUrl: '/services',
    },
  ],
};
