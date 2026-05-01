import { buildServiceSeo } from '../seo';

import { crmAutomationPage } from './crm-automation';

const slug = 'website-crm-integration-vs-manual-lead-handling';

export const websiteCrmIntegrationVsManualLeadHandlingPage = {
  ...crmAutomationPage,
  slug,
  seo: buildServiceSeo({
    slug,
    title: 'Website CRM Integration vs Manual Lead Handling | MindWP',
    description:
      'A decision page for service businesses comparing manual lead handling against integrated CRM infrastructure. See where manual follow-up breaks and what connected CRM systems fix.',
  }),
  badge: 'CRM Setup',
  category: crmAutomationPage.category,
  hero: {
    ...crmAutomationPage.hero,
    badge: 'CRM Decision Page',
    title: 'Website CRM Integration vs Manual Lead Handling',
    description:
      'If leads move from forms to inboxes to sticky notes before anyone follows up, the problem is not effort. It is infrastructure. This page shows the difference between keeping lead handling manual and turning the website into the front door of a controlled CRM system.',
    list: ['Manual handoffs', 'Lead loss', 'CRM visibility'],
  },
  sections: {
    ...crmAutomationPage.sections,
    positioning: {
      ...crmAutomationPage.sections.positioning,
      badge: 'Problem',
      title: 'Manual lead handling fails exactly where response speed matters most',
      description:
        'Website forms, calls, texts, and chat messages do not fail because your team does not care. They fail because every handoff depends on someone noticing, remembering, and acting fast enough.',
    },
    comparison: {
      ...crmAutomationPage.sections.comparison,
      header: {
        ...crmAutomationPage.sections.comparison.header,
        title: 'Website CRM integration vs manual lead handling',
        description:
          'Both approaches can look acceptable at low volume. The difference shows up when enquiries arrive across channels and the next action has to happen immediately.',
      },
      items: [
        {
          type: 'before',
          title: 'Manual lead handling',
          items: [
            'Website forms land in inboxes, call notes sit in notebooks, and chat messages stay in separate apps. No single owner sees the full queue.',
            'Follow-up timing depends on who is free. On busy days, hot enquiries wait behind everything else the team is already handling.',
            'Nobody can see which source generated which opportunity, where each lead stands, or which prospects are now stalled.',
          ],
        },
        {
          type: 'after',
          title: 'Integrated CRM infrastructure',
          items: [
            'Website, phone, SMS, and chat enquiries enter one pipeline with ownership, timestamps, and next-step visibility from the first touch.',
            'Immediate confirmations, routing rules, and follow-up tasks start without anyone copying details by hand.',
            'Pipeline stages, source attribution, and stalled opportunities stay visible so management can see where revenue is slowing down.',
          ],
        },
      ],
    },
    proof: {
      ...crmAutomationPage.sections.proof,
      header: {
        ...crmAutomationPage.sections.proof.header,
        title: 'RoofingWebsiteRebuildWithCrm shows what changes when the handoff is connected',
        description:
          'The website rebuild mattered because the enquiry path changed with it. Before vs after only made sense once the CRM handoff was part of the same system.',
      },
    },
    useCasesSection: crmAutomationPage.sections.useCasesSection,
    featuresSection: crmAutomationPage.sections.featuresSection,
    workflowsSection: crmAutomationPage.sections.workflowsSection,
    governance: crmAutomationPage.sections.governance,
    connection: crmAutomationPage.sections.connection,
    qualification: {
      ...crmAutomationPage.sections.qualification,
      title: 'Decision section: when CRM infrastructure is the right move',
      description:
        'Choose infrastructure when demand exists, enquiries arrive from multiple channels, and the business can no longer afford lead handling to depend on memory and inbox habits.',
    },
    faqSection: crmAutomationPage.sections.faqSection,
  },
  cta: {
    heading: {
      title: 'See where manual lead handling is still breaking revenue control',
      description:
        'We will map the website, call, inbox, and follow-up handoffs that are still manual, then show what a connected CRM system would stabilise first.',
    },
    actions: [{ label: 'Get Started', href: '/contact', primary: true }],
  },
} satisfies typeof crmAutomationPage;
