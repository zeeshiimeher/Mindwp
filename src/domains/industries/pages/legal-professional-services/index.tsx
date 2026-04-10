import {
  AlertCircle,
  BriefcaseBusiness,
  Calculator,
  Calendar,
  Clock3,
  FileText,
  MessageSquare,
  Scale,
  Search,
  Shield,
  Star,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildLegalProfessionalServicesIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'Coverage Lane',
    title: 'Smart Website Systems for Legal & Professional Services',
    description:
      'A legal or professional service website should support qualification, consultation booking, document-readiness, and follow-up — without making every new matter depend on manual chasing.',
    list: [
      'Clearer enquiry qualification',
      'Better consultation flow',
      'Stronger trust signals',
      'More reliable follow-up',
    ],
    cssPrefix: 'legal-professional-services-hero',
  };

  const imageStripData = {
    badge: 'Category Reality',
    title:
      'The work is advisory and trust-led, but the friction starts before the consultation happens',
    description:
      'Prospects arrive with uncertainty, urgency, and incomplete context. Qualification, consultation timing, document-readiness, credibility signals, and follow-up all shape whether the conversation moves forward. That operating layer needs to be visible before narrowing into one professional workflow.',
    items: [
      {
        title: 'Qualification and fit enquiries',
        image: '/images/placeholders/service-card-1.svg',
        alt: 'Abstract placeholder image representing professional services qualification enquiries',
      },
      {
        title: 'Consultation booking pressure',
        image: '/images/placeholders/service-card-2.svg',
        alt: 'Abstract placeholder image representing consultation booking pressure',
      },
      {
        title: 'Documents and next-step clarity',
        image: '/images/placeholders/service-card-3.svg',
        alt: 'Abstract placeholder image representing document-readiness and next-step guidance',
      },
      {
        title: 'Proof and follow-up trust',
        image: '/images/placeholders/service-card-4.svg',
        alt: 'Abstract placeholder image representing professional services trust and follow-up',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'legal-professional-services-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Operating Patterns',
    title: 'Where legal and professional service businesses feel pressure first',
    description:
      'The gap is rarely visibility alone — it sits between first enquiry, qualification, consultation readiness, trust proof, and consistent follow-up after the first conversation.',
    benefits: [
      {
        icon: AlertCircle,
        title: 'Prospects enquire before the business knows whether the fit is right',
        description:
          'Different matter types, service scopes, urgency levels, and budgets arrive through one loose path — first-response quality drops when everything routes the same way.',
        iconType: 'primary' as const,
      },
      {
        icon: Clock3,
        title: 'Consultation flow becomes uneven when readiness is unclear',
        description:
          'Initial calls, document requests, scope clarification, and next steps often depend on manual back-and-forth when the workflow is not structured clearly.',
        iconType: 'secondary' as const,
      },
      {
        icon: Shield,
        title: 'Trust signals exist, but they do not always support the decision path properly',
        description:
          'Reviews, authority signals, service pages, and advisor credibility exist in different places — they rarely reinforce one another before the consultation happens.',
        iconType: 'accent' as const,
      },
      {
        icon: MessageSquare,
        title: 'Growth adds communication drag faster than it adds clarity',
        description:
          'More enquiries or more service types can create intake pressure if qualification and follow-up still rely too heavily on memory.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'System Architecture',
    title: 'What the category operating system needs to hold together',
    description:
      'A strong legal or professional services setup connects first contact, qualification, consultation booking, trust support, and follow-up into one practical system rather than separate disconnected tasks.',
    featureCategories: [
      {
        title: 'Qualification layer',
        description:
          'Calls, forms, and service requests need a clearer first step so the business can identify fit and respond with better context.',
        icon: MessageSquare,
        features: ['Service-path capture', 'Fit qualification', 'Cleaner first-response routing'],
      },
      {
        title: 'Consultation layer',
        description:
          'Initial calls and advisory appointments should move forward without loose handoffs or unclear next steps.',
        icon: Calendar,
        features: ['Consultation scheduling', 'Readiness guidance', 'Next-step clarity'],
      },
      {
        title: 'Workflow visibility layer',
        description:
          'Teams need better visibility around which enquiry stage, document state, or follow-up path each prospect currently sits inside.',
        icon: FileText,
        features: [
          'Lead-stage visibility',
          'Document-readiness context',
          'Better internal handoff points',
        ],
      },
      {
        title: 'Trust and proof layer',
        description:
          'Proof of competence, reviews, and credibility signals need to support the consultation decision before the conversation starts.',
        icon: Star,
        features: [
          'Review request workflows',
          'Proof and credibility support',
          'Trust before booking',
        ],
      },
      {
        title: 'Local visibility layer',
        description:
          'Search visibility, authority pages, and service-area language need to reinforce the matters and clients you actually want.',
        icon: Search,
        features: ['Service-page clarity', 'Local authority support', 'Search reinforcement'],
      },
      {
        title: 'Follow-up layer',
        description:
          'Pending consultations, open decisions, and post-consultation next steps all need calmer follow-through.',
        icon: Shield,
        features: [
          'Lead nurture',
          'Missed-enquiry recovery',
          'Post-consultation follow-up prompts',
        ],
      },
    ],
    columns: 3 as const,
  };

  const spectrumData = {
    badge: 'Business Shapes',
    title: 'The category covers different advisory operating models, not one fixed firm shape',
    description:
      'Small law firms, accounting firms, and consultants can look similar from the outside, but the workflow strain changes depending on urgency, qualification depth, document-readiness, and how trust is established before the first meeting.',
    cards: [
      {
        title: 'Owner-led specialist firms',
        description:
          'Fewer systems needed, but much stronger intake structure — because the same people are delivering the work and qualifying new matters.',
        points: [
          'Low admin capacity',
          'High first-response pressure',
          'Need for clearer fit qualification',
        ],
      },
      {
        title: 'Team-based professional practices',
        description:
          'Need tighter handoffs between intake, advisory staff, and the person managing the next step after the first consultation.',
        points: ['Shared workload', 'Scheduling pressure', 'Follow-up gaps become expensive'],
        featured: true,
      },
      {
        title: 'Relationship-led consultants',
        description:
          'Need clearer service-path explanation, stronger trust proof, and better guidance around what the first conversation should look like.',
        points: [
          'Trust has to carry more weight',
          'Service-path clarity matters',
          'Nurture can be longer',
        ],
      },
    ],
    backgroundColor: 'bg-alt',
    cssPrefix: 'legal-professional-services-spectrum',
  };

  const decisionChecklistData = {
    badge: 'When Category Work Matters',
    title: 'Signs the business needs category-level system thinking before another isolated fix',
    description:
      'This is the point where one more brochure page or one more intake tweak is not the answer. The whole qualification-to-consultation flow needs tightening at category level first.',
    items: [
      'Different service types exist, but new matters still enter through one unclear process',
      'Consultation requests reach the business, but response quality depends too much on who happens to be free',
      'Trust signals exist, but they are not strengthening the right service pages or consultation decisions',
      'Pending consultations or follow-up actions are hard to track consistently',
      'The business wants more service-specific pages, but the category logic behind them is still weak',
      'Growth is creating intake pressure faster than it is creating operational clarity',
    ],
    columns: 2 as const,
    backgroundColor: 'bg-base',
    cssPrefix: 'legal-professional-services-decision-checklist',
  };

  const serviceEnvironmentsData = {
    badge: 'Service Environments',
    title: 'The same category can operate through very different service environments',
    description:
      'A small law firm, an accounting practice, and a consulting business do not break in the same places. That difference needs to be visible before narrowing into one single-industry workflow.',
    features: [
      {
        title: 'Matter-led legal environment',
        description:
          'Better first-response structure, clearer qualification, and less reliance on loose manual intake.',
        icon: Scale,
      },
      {
        title: 'Recurring advisory environment',
        description:
          'Stronger handoffs between enquiry capture, consultation scheduling, and the ongoing client relationship.',
        icon: Calculator,
      },
      {
        title: 'Project-led consulting environment',
        description:
          'Better routing between service types, clearer trust signals, and stronger explanation of how the advisory process works.',
        icon: BriefcaseBusiness,
      },
    ],
    tagline: 'Category context before service-level depth',
    narrativeTitle: 'Why this belongs on the category page',
    narrativeParagraphs: [
      'A category page should explain the operating environments inside legal and professional services before it narrows into one workflow like a law firm or an accounting practice.',
      'Once that context is clear, the single-industry page can go much deeper into qualification handling, consultation flow, trust support, and follow-up for that service type.',
    ],
    backgroundColor: 'bg-alt',
    cssPrefix: 'legal-professional-services-service-environments',
  };

  const processData = {
    badge: 'Tier 1 Layering',
    title: 'How Smart Website structure expands into legal and professional workflows',
    description:
      'Once the category system is clear, the page can route visitors into the right advisory workflow while keeping Smart Website structure as the main operating layer.',
    steps: [
      {
        number: '01',
        title: 'Frame the Smart Website core',
        description:
          'Start with the enquiry, qualification, and consultation structure that supports advisory demand before narrowing into one service type.',
      },
      {
        number: '02',
        title: 'Show the operating shapes',
        description:
          'Clarify how legal, accounting, and consulting operators differ so visitors can place themselves quickly.',
      },
      {
        number: '03',
        title: 'Layer the supporting systems',
        description:
          'Connect local visibility, trust proof, qualification flow, consultation booking, and follow-up support around the Smart Website core.',
      },
      {
        number: '04',
        title: 'Route into service pages',
        description:
          'Move the visitor into the right single-industry workflow page once the category context is clear.',
      },
    ],
    columns: 4 as const,
    backgroundColor: 'bg-base',
    cssPrefix: 'legal-professional-services-process',
  };

  const detailRoutesData = {
    badge: 'Approved Sub-Industry Workflows',
    title: 'The next mapped workflows in this category',
    description:
      'Legal & Professional Services is live as a category page. The workflow pages in this lane — Small Law Firms, Accounting Firms, and Consultants — each turn this category logic into a more specific operating path.',
    items: [
      {
        title: 'Small Law Firms',
        description:
          'From matter qualification through consultation booking, document-readiness, and trust-led follow-up.',
        href: '/industries/legal-professional-services/small-law-firms',
        icon: Scale,
      },
      {
        title: 'Accounting Firms',
        description:
          'From service-fit enquiries through consultation booking, information readiness, and ongoing client confidence.',
        href: '/industries/legal-professional-services/accounting-firms',
        icon: Calculator,
      },
      {
        title: 'Consultants',
        description:
          'From qualification and discovery through advisory booking, trust reinforcement, and measured nurture follow-up.',
        href: '/industries/legal-professional-services/consultants',
        icon: BriefcaseBusiness,
      },
    ],
    backgroundColor: 'bg-muted/20',
    cssPrefix: 'legal-professional-services-detail-routes',
    styleVariant: 'style1' as const,
  };

  return {
    slug: 'legal-professional-services',
    type: 'category',
    category: 'legal-professional-services',
    systems: [
      'smart-website-systems',
      'crm-automation',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: [
      'lead-qualification',
      'crm-integration',
      'reputation-monitoring',
      'pipeline-visibility',
    ],
    industries: ['accounting', 'consulting', 'law-firm'],
    seo: {
      title: 'Legal & Professional Services Systems | MindWP',
      description:
        'Smart Website systems for legal and professional service businesses that need clearer qualification, consultation flow, and stronger trust support.',
      keywords: [
        'legal professional services website systems',
        'law firm consultation booking system',
        'professional services lead handling',
        'consultation follow up system',
        'local advisory business infrastructure',
      ],
      canonical: '/industries/legal-professional-services',
    },
    hero: heroData,
    imageStrip: imageStripData,
    operatingPatterns: operatingPatternsData,
    spectrum: spectrumData,
    decisionChecklist: decisionChecklistData,
    serviceEnvironments: serviceEnvironmentsData,
    systemLayers: systemLayersData,
    process: processData,
    detailRoutes: detailRoutesData,
    sectionControls: {
      subIndustries: {
        enabled: false,
      },
      caseStudies: {
        enabled: false,
      },
    },
    cta: {
      title: 'Map the legal or professional category around how your business actually works',
      description:
        'If consultations feel inconsistent, we can show you how to turn more qualified enquiries into booked calls.',
    },
  };
}

export const legalProfessionalServicesIndustryPageData: IndustryPageData =
  buildLegalProfessionalServicesIndustryPageData();
