import type { BlogPostData } from '@/domains/blog/types';

export const serviceBusinessFollowUpAutomation: BlogPostData = {
  slug: 'service-business-follow-up-automation',
  title: 'Service Business Follow Up Automation',
  intent: 'SYSTEM',
  metaTitle: 'Service Business Follow Up Automation Guide',
  metaDescription:
    'Discover how service business follow up automation ensures no lead goes cold with timely sequences that nurture enquiries through to booked jobs automatically.',
  seo: {
    title: 'Service Business Follow Up Automation Guide',
    description:
      'Discover how service business follow up automation ensures no lead goes cold with timely sequences that nurture enquiries through to booked jobs automatically.',
    canonical: '/blog/service-business-follow-up-automation',
    keywords: [
      'service business follow up automation',
      'follow up automation for leads',
      'crm follow up workflow',
      'service business nurture automation',
    ],
    openGraph: {
      title: 'Service Business Follow Up Automation Guide',
      description:
        'Discover how service business follow up automation ensures no lead goes cold with timely sequences that nurture enquiries through to booked jobs automatically.',
    },
  },
  publishDate: '2024-11-15',
  authorKey: 'TECHNICAL',
  category: 'crm-automation',
  industries: [],
  systems: ['ai-lead-handling'],
  topics: ['follow-up'],
  primaryKeyword: 'service business follow up automation',
  supportingKeywords: [
    'follow up automation for leads',
    'crm follow up workflow',
    'service business nurture automation',
  ],
  tags: ['Follow Up', 'Automation', 'Service Business', 'CRM', 'Lead Nurture'],
  sections: [
    {
      type: 'introduction',
      content: [
        'A homeowner requests a quote for a kitchen renovation. The contractor sends the estimate within two days. The homeowner does not respond immediately — they are comparing three quotes. A week passes. The contractor never follows up. Two weeks later, the homeowner books the competitor who sent a polite check-in email on day five.',
        'Follow-up is where most service businesses lose deals they have already invested time in creating. The estimate has been sent, the initial conversation has happened, and then silence. Without a systematic follow-up process, leads go cold not because the customer chose someone else, but because nobody reminded them to choose at all.',
      ],
    },
    {
      type: 'content',
      heading: 'Where Follow-Up Fits in the Pipeline',
      content: [
        'Follow-up automation belongs to the post-qualification stage of the lead pipeline. After a lead has been captured, acknowledged, qualified, and routed, the responding team member takes action — usually sending a quote or scheduling a consultation. Follow-up automation handles what happens next.',
        'The complete follow-up architecture is defined in the service business follow up automation guide resource. This blog covers the operational principles that make follow-up sequences effective.',
      ],
    },
    {
      type: 'image',
      heading: 'The Follow-Up Timeline',
      src: '/images/placeholders/follow-up-timeline.svg',
      alt: 'Diagram showing a follow-up sequence timeline from initial quote to final check-in across two weeks',
      caption:
        'Effective follow-up follows a declining frequency pattern — frequent early contact tapering to periodic check-ins over time.',
    },
    {
      type: 'content',
      heading: 'Why Manual Follow-Up Fails',
      content: [
        "The problem with manual follow-up is not that people forget. It is that follow-up is a low-urgency task competing against high-urgency operational demands. When a technician is on a job site and three new enquiries arrive, following up on last week's quote drops to the bottom of the priority list.",
        'Manual follow-up also lacks consistency. Some leads receive three follow-ups. Others receive none. The decision of who to follow up with and when depends on whoever happens to remember, and memory is not a reliable business system.',
      ],
    },
    {
      type: 'content',
      heading: 'Designing Effective Follow-Up Sequences',
      content:
        'Automated follow-up sequences should be designed around the decision timeline of the customer, not the availability of the team. For service businesses, this typically means a structured cadence over two to three weeks.',
      list: [
        'Day 1 — Quote or proposal delivered with a clear next step and timeline for decision.',
        'Day 3 — Friendly check-in asking if the customer has questions about the quote.',
        'Day 7 — Value-add message sharing relevant information such as project examples or warranty details.',
        'Day 14 — Final follow-up offering to revise the quote or discuss alternatives.',
        'Day 21 — Graceful close message noting the quote will expire and inviting future contact.',
      ],
    },
    {
      type: 'steps',
      heading: 'Implementing Follow-Up Automation',
      steps: [
        {
          label: 'Map your current follow-up process',
          description:
            'Document what currently happens after a quote is sent. Identify gaps where leads receive no follow-up at all.',
        },
        {
          label: 'Define follow-up triggers',
          description:
            'Set the CRM event that starts the sequence — typically moving a lead to the "quote sent" pipeline stage.',
        },
        {
          label: 'Write the sequence messages',
          description:
            'Create templates for each follow-up touchpoint that are professional, relevant, and progressively direct.',
        },
        {
          label: 'Set exit conditions',
          description:
            'Define what stops the sequence — a reply, a booked job, an explicit decline, or reaching the final message.',
        },
      ],
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      items: [
        'Service business follow up automation ensures every lead receives consistent post-quote contact.',
        'Most deals are lost not to competitors but to silence — leads go cold when nobody follows up.',
        'Manual follow-up fails because it competes against higher-urgency operational demands.',
        'Automated sequences follow a declining frequency from the first check-in to a graceful close.',
        'CRM triggers start follow-up sequences automatically when leads reach the right pipeline stage.',
        'Exit conditions prevent automation from continuing after a lead has responded or declined.',
      ],
    },
    {
      type: 'cta',
      heading: 'Automate Your Follow-Up Process',
      content:
        'If leads go quiet after receiving a quote and nobody follows up consistently, automation can close that gap. See how CRM-connected follow-up keeps your pipeline moving.',
      buttonText: 'Explore CRM Automation',
      buttonUrl: '/services/ai-lead-handling',
    },
  ],
};
