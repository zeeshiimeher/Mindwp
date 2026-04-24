import type { BlogPostData } from '@/domains/blog/types';

export const crmPipelineArchitectureForServiceBusinesses: BlogPostData = {
  slug: 'crm-pipeline-architecture-for-service-businesses',
  title: 'CRM Pipeline Architecture for Service Businesses',
  seo: {
    title: 'CRM Pipeline Architecture for Service Businesses',
    description:
      'Explore the CRM pipeline architecture for service businesses that structures lead stages from first enquiry through to completed job and follow-up automation.',
    canonical: '/blog/crm-pipeline-architecture-for-service-businesses',
    openGraph: {
      title: 'CRM Pipeline Architecture for Service Businesses',
      description:
        'Explore the CRM pipeline architecture for service businesses that structures lead stages from first enquiry through to completed job and follow-up automation.',
    },
  },
  publishDate: '2025-02-20',
  authorKey: 'TECHNICAL',
  category: 'crm-automation',
  industries: [],
  systems: ['crm-automation'],
  topics: ['crm-pipeline', 'pipeline-architecture'],
  tags: [
    'CRM Pipeline',
    'Service Business',
    'Pipeline Architecture',
    'Lead Management',
    'Automation',
  ],
  sections: [
    {
      type: 'introduction',
      content: [
        'An HVAC company uses a CRM. Leads enter the system, some receive quotes, some become jobs, and some disappear. The pipeline has two stages: "New" and "Done." Between those stages, the entire sales process happens informally — in email threads, phone calls, and sticky notes on a desk.',
        'CRM pipeline architecture defines the structured stages that leads pass through from first enquiry to completed job. Without defined stages, the CRM is a contact database. With defined stages, it becomes an operational system that shows where every lead sits, what action is required next, and where the pipeline is leaking.',
      ],
    },
    {
      type: 'content',
      heading: 'Where Pipeline Architecture Fits in the System',
      content: [
        'Pipeline architecture is the structural foundation of the CRM automation layer. It defines the framework within which leads are managed, tracked, and progressed. Every automation — follow-up sequences, task assignments, reporting — depends on a well-defined pipeline structure.',
        'The complete pipeline model is documented in the CRM pipeline architecture resource. This blog covers the design principles that make pipeline architecture effective for service businesses.',
      ],
    },
    {
      type: 'checklist',
      heading: 'Pipeline Stages for Service Businesses',
      content:
        'A well-designed service business pipeline typically includes these stages. Each stage represents a distinct operational state with clear entry and exit criteria.',
      items: [
        'New Enquiry — lead has been received and acknowledged but not yet evaluated',
        'Qualified — lead has been assessed and confirmed as a genuine service opportunity',
        'Site Visit Scheduled — an appointment has been booked to assess the work',
        'Quote Sent — a formal estimate has been delivered to the customer',
        'Follow-Up — the customer has received the quote and the follow-up sequence is active',
        'Accepted — the customer has accepted the quote and the job is confirmed',
        'In Progress — the work is currently being performed',
        'Completed — the job is finished and the invoice has been issued',
        'Lost — the lead declined or went silent after the follow-up sequence completed',
      ],
    },
    {
      type: 'content',
      heading: 'Why Stage Definition Matters',
      content: [
        'Well-defined stages create visibility into the pipeline. The business can see how many leads are at each stage, how long they spend there, and where the biggest drop-offs occur. If thirty leads receive quotes but only five accept, the quoting process needs attention. If leads spend an average of twelve days in the follow-up stage, the sequence may be too slow.',
        'Without defined stages, these patterns are invisible. The pipeline is a black box where leads enter and either become jobs or disappear — and nobody can explain why.',
      ],
    },
    {
      type: 'content',
      heading: 'Connecting Stages to Automation',
      content: [
        'Each pipeline stage should trigger appropriate automation. When a lead moves to "Quote Sent," the follow-up sequence begins. When a lead moves to "Completed," the review request fires. When a lead sits in "New Enquiry" for more than two hours, an escalation alert reminds the team.',
        'These stage-triggered automations ensure that every lead receives consistent treatment regardless of how busy the team is. The pipeline architecture becomes the operating system for customer relationship management.',
      ],
      callout:
        'A CRM without pipeline architecture is an expensive address book. Stage definitions transform it into an operational system that manages leads, triggers actions, and reveals where the process is working and where it is failing.',
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      items: [
        'CRM pipeline architecture for service businesses defines structured stages from enquiry to completion.',
        'Without defined stages, leads move through an informal process that cannot be measured or improved.',
        'Each stage should have clear entry criteria, exit criteria, and time-in-stage targets.',
        'Stage transitions trigger automation — follow-up sequences, task assignments, and review requests.',
        'Pipeline visibility reveals conversion rates at each stage and identifies where leads are lost.',
        'A well-defined pipeline transforms a CRM from a contact database into an operational system.',
      ],
    },
    {
      type: 'cta',
      heading: 'Structure Your Sales Pipeline',
      content:
        'If your CRM has leads in it but you cannot see where they sit in the sales process, pipeline architecture can fix that. Explore how CRM automation structures your lead-to-job workflow.',
    },
  ],
};
