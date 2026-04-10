import {
  GitBranch,
  Layers,
  LayoutTemplate,
  MessageSquare,
  RefreshCcw,
  Search,
  Settings,
  Waypoints,
  Wrench,
} from 'lucide-react';


import { buildServiceSeo } from '../seo';
import type { ServicePageData } from '../types';

const slug = 'website-redesign-system-rebuild';

export const websiteRedesignSystemRebuildPage = {
  slug,
  systems: ['smart-website-systems'],
  topics: ['website-infrastructure', 'service-page-architecture'],
  keywords: [
    'website redesign and rebuild',
    'wordpress system rebuild',
    'website restructuring service',
    'website architecture redesign',
    'service business website rebuild',
  ],
  badge: 'Website Redesign & System Rebuild',
  category: 'Structural Rebuild Services',
  seo: buildServiceSeo({
    slug,
    title:
      'Website Redesign & System Rebuild | For Service Businesses',
    description:
      'Website redesign and system rebuild work for service businesses whose current site no longer matches their services, enquiry flow, integrations, or operational needs.',
    schemaName: 'Website redesign and system rebuild for service businesses',
    schemaDescription:
      'A structural website redesign and rebuild pathway for service businesses needing clearer architecture, better enquiry flow, reduced technical clutter, and stronger long-term maintainability.',
  }),
  hero: {
    badge: 'Structural Realignment Pathway',
    title: 'When the website no longer matches the business, a visual refresh is not enough',
    description:
      'This service is for businesses whose current site has drifted too far from their services, enquiry flow, integrations, or operating reality. The work is structural correction and rebuild logic, not cosmetic redesign for its own sake.',
    list: [
      'Clearer structure and service architecture',
      'Stronger message-to-enquiry flow',
      'Reduced clutter and better future maintainability',
    ],
    cssPrefix: 'website-redesign-rebuild-hero',
    backgroundColor: 'bg-gradient-surface-muted',
  },
  sections: {
    foundation: {
      badge: 'Why rebuild work becomes necessary',
      title:
        'A rebuild becomes necessary when the website is carrying structural decisions that no longer fit the business',
      description:
        'The signal for rebuild work is usually operational, not cosmetic. The site may still function, but the structure underneath no longer supports the current business properly.',
      currentStateLabel: 'What the current site is carrying',
      structuredStateLabel: 'What the rebuild corrects',
      painPoints: [
        {
          before:
            'The site reflects an older version of the business, so services, navigation, and message flow feel misaligned.',
          after:
            'The structure can be rebuilt around the current business model and the real path to enquiry.',
        },
        {
          before:
            'Technical clutter, patchwork pages, and builder shortcuts make change slower and less reliable over time.',
          after:
            'The rebuild reduces clutter so the site becomes easier to maintain, extend, and govern properly.',
        },
        {
          before:
            'Integrations, forms, tracking, and follow-up behaviour were added in fragments instead of as one system.',
          after:
            'The new build can align service architecture, enquiry flow, and integrations as one working structure.',
        },
      ],
    },
    structuralSignals: {
      badge: 'Strong signals for rebuild work',
      title: 'These patterns point to structural realignment rather than small-page tweaking',
      description:
        'The issue is not always that the site looks old. More often, the website no longer behaves like a clear operating layer for the business.',
      items: [
        {
          icon: LayoutTemplate,
          title: 'The site looks organised, but the service structure is not',
          description:
            'Pages exist, but they do not reflect the current offer hierarchy, enquiry priorities, or decision path clearly enough.',
        },
        {
          icon: Layers,
          title: 'Too many layers were added without a governing structure',
          description:
            'New tools, builders, plugins, and page types were added over time, but the site lost coherence underneath.',
        },
        {
          icon: Waypoints,
          title: 'The enquiry journey breaks between page visit and next action',
          description:
            'The site may still get visits, but the flow into contact, booking, CRM, or follow-up no longer feels connected.',
        },
        {
          icon: Settings,
          title: 'Routine updates feel risky or unnecessarily slow',
          description:
            'The business avoids change because the current build is fragile, unclear, or too dependent on one-off workarounds.',
        },
      ],
    },
    rebuildScenarios: {
      badge: 'Common rebuild scenarios',
      title: 'A rebuild should solve the structural problem behind the redesign request',
      description:
        'These are common situations where the right answer is not just a visual redesign but a more deliberate rebuild pathway.',
      scenarioLabel: 'Current problem',
      solutionLabel: 'Rebuild logic',
      items: [
        {
          icon: RefreshCcw,
          title: 'Outdated brochure site that no longer matches the business',
          scenario:
            'The website still reflects an older service mix, weak messaging, or a simpler business model that has now outgrown it.',
          solution:
            'Restructure the site around the current services, enquiry pathways, and operational priorities before redesign decisions are finalised.',
          result:
            'The new website supports the real business instead of preserving the old one in a cleaner visual shell.',
        },
        {
          icon: Wrench,
          title: 'Patchwork rebuild needs caused by accumulated technical clutter',
          scenario:
            'Builder layers, plugins, templates, and manual fixes have piled up to the point where routine improvement is slow and fragile.',
          solution:
            'Strip back the clutter and rebuild with a cleaner architecture that supports maintenance, performance, and controlled expansion.',
          result: 'The site becomes easier to manage, change, and trust operationally over time.',
        },
        {
          icon: GitBranch,
          title: 'Enquiry, follow-up, and integrations no longer connect cleanly',
          scenario:
            'Forms, tracking, CRM behaviour, and follow-up steps were added in separate stages and now feel disconnected.',
          solution:
            'Treat the rebuild as a system correction so service architecture, conversion paths, and integrations work together more cleanly.',
          result:
            'The website stops acting like a disconnected front end and starts behaving like a structured operating layer again.',
        },
      ],
    },
    processSection: {
      badge: 'Rebuild sequence',
      title: 'How the redesign and rebuild is approached',
      description:
        'The work moves through structural clarification first so the redesign decisions support the system instead of hiding old problems under new visuals.',
      steps: [
        {
          number: '1',
          title: 'Assess what is actually broken',
          description:
            'Review service structure, page flow, integrations, and maintainability before deciding how much needs to change.',
        },
        {
          number: '2',
          title: 'Define the corrected architecture',
          description:
            'Clarify how services are organised, navigation, conversion paths, and operational requirements for the rebuilt site.',
        },
        {
          number: '3',
          title: 'Rebuild around the new structure',
          description:
            'Implement the website so the page model, content flow, and system behaviour match the corrected architecture.',
        },
        {
          number: '4',
          title: 'Launch with cleaner continuity',
          description:
            'Ensure the rebuilt site is easier to manage, extend, and connect into the wider business workflow after launch.',
        },
      ],
    },
    implementationLayers: {
      badge: 'What the rebuild usually needs',
      title: 'Rebuild work usually touches several connected layers, not one design file alone',
      description:
        'The exact scope varies, but these are the structural areas that usually matter most when the website needs realignment rather than surface polish.',
      items: [
        {
          icon: Search,
          title: 'Service and page architecture',
          description:
            'Clarify what the business sells, how those services should be structured publicly, and how the pages should support enquiry flow.',
        },
        {
          icon: MessageSquare,
          title: 'Message and conversion flow',
          description:
            'Reshape the page sequence so value, relevance, proof, and action feel more coherent from first visit to enquiry.',
        },
        {
          icon: Settings,
          title: 'System and integration cleanup',
          description:
            'Reduce clutter in forms, tracking, plugins, routing, and connected tools so the rebuilt site behaves more reliably.',
        },
        {
          icon: Layers,
          title: 'Maintainability and governance',
          description:
            'Make future updates, new pages, and operational changes easier to manage without repeating the same drift.',
        },
      ],
    },
    qualification: {
      title: 'Who this is designed for',
      description:
        'This works best where the current website no longer supports the business model cleanly and the next step needs to be structural realignment, not surface-level design effort.',
      strongFitTitle: 'Strong fit',
      notDesignedTitle: 'Not designed for',
      strongFitItems: [
        {
          title: 'Businesses whose site has drifted from reality',
          description:
            'A strong fit when the website reflects old services, weak page flow, or outdated assumptions about how enquiries should happen.',
        },
        {
          title: 'Teams carrying technical clutter and fragile updates',
          description:
            'Useful when routine change is slow or risky because the build underneath is too messy, layered, or poorly governed.',
        },
        {
          title: 'Businesses needing structural correction before further growth work',
          description:
            'Especially useful when SEO, automation, or follow-up improvements will keep underperforming until the website itself is rebuilt on better foundations.',
        },
      ],
      notDesignedItems: [
        {
          title: 'Businesses that only want a cosmetic refresh',
          description:
            'If the structure is already sound and only surface styling needs attention, a system rebuild may be more than is necessary.',
        },
        {
          title: 'Sites with only one isolated page problem',
          description:
            'If the issue is limited to one campaign page or one service page, targeted refinement may be better than a broader rebuild.',
        },
        {
          title: 'Cases where the traffic problem is still primary',
          description:
            'If the site is not being found at all, visibility and demand work may need to lead before a full rebuild is the best first investment.',
        },
      ],
    },
    faqSection: {
      badge: 'FAQ',
      title: 'Common questions about website rebuild work',
      description:
        'Questions that come up when a business senses the website problem is structural, not purely visual.',
      faqs: [
        {
          question: 'Does a rebuild always mean starting from zero?',
          answer:
            'No. Some content, assets, and structural decisions can often be retained. The key question is whether the underlying architecture is worth preserving or whether it is slowing the business down.',
        },
        {
          question: 'Can this sit alongside WordPress Website Development?',
          answer:
            'Yes. WordPress Website Development is the broader implementation pathway. This page focuses more specifically on the redesign and rebuild decision when structural realignment is needed first.',
        },
        {
          question: 'Can you rebuild around existing SEO or content priorities?',
          answer:
            'Yes. Where useful, the rebuild can preserve and improve important content, SEO structure, and operational pathways rather than discarding them blindly.',
        },
      ],
      cssPrefix: 'website-redesign-rebuild-faq',
    },
  },
  cta: {
    title: 'Rebuild the website around how the business actually works',
    description:
      'If the current site no longer supports your services, enquiry flow, or maintainability, we can help define a clearer rebuild pathway.',
  },
} satisfies ServicePageData;
