import {
  AlertCircle,
  Calendar,
  Car,
  Clock3,
  MapPinned,
  MessageSquare,
  Search,
  Shield,
  Sparkles,
  Star,
  Users,
  Wrench,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildAutomotiveServicesIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'Coverage Lane',
    title: 'Smart Website Systems for Automotive Service Businesses',
    description:
      'An automotive service website should support service clarity, estimate handling, appointment booking, trust signals, and follow-up — without making the front desk carry every gap manually.',
    secondaryAction: {
      label: 'See Smart Website Systems',
      href: '/services/smart-website-systems',
    },
    list: [
      'Clearer service routing',
      'Better estimate and booking flow',
      'Stronger local trust signals',
      'More reliable follow-up',
    ],
    cssPrefix: 'automotive-services-hero',
  };

  const imageStripData = {
    badge: 'Category Reality',
    title: 'The workshop work happens offline, but the friction starts before the vehicle arrives',
    description:
      'Calls arrive while the team is busy. Estimates need context. Diagnostics need clearer next steps. Reviews and repeat service reminders happen too loosely. That operating layer needs to be visible before narrowing into one automotive workflow.',
    items: [
      {
        title: 'Urgent repair and fault enquiries',
        image: '/images/placeholders/service-card-1.svg',
        alt: 'Abstract placeholder image representing urgent automotive repair enquiries',
      },
      {
        title: 'Estimate and inspection requests',
        image: '/images/placeholders/service-card-2.svg',
        alt: 'Abstract placeholder image representing automotive inspection scheduling',
      },
      {
        title: 'Workshop scheduling pressure',
        image: '/images/placeholders/service-card-3.svg',
        alt: 'Abstract placeholder image representing workshop scheduling pressure',
      },
      {
        title: 'Review and return-visit follow-up',
        image: '/images/placeholders/service-card-4.svg',
        alt: 'Abstract placeholder image representing automotive review and return-visit follow-up',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'automotive-services-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Operating Patterns',
    title: 'Where automotive service businesses feel the pressure first',
    description:
      'The gap is rarely demand alone — it sits between incoming vehicle problems, response speed, appointment clarity, trust proof, and follow-up after the visit.',
    benefits: [
      {
        icon: AlertCircle,
        title: 'Urgent enquiries arrive without enough qualification',
        description:
          'Repair, inspection, detailing, and bodywork requests come in through one loose path — first-response quality drops when everything routes the same way.',
        iconType: 'primary' as const,
      },
      {
        icon: Clock3,
        title: 'Estimates and next steps become uneven',
        description:
          'Diagnostics, inspection findings, quote follow-up, and booking decisions often rely on manual chasing when the day gets busy.',
        iconType: 'secondary' as const,
      },
      {
        icon: MapPinned,
        title: 'Trust and service visibility drift apart',
        description:
          'Google Business Profile, service pages, reviews, and workshop credibility exist in different places — they rarely reinforce one another properly.',
        iconType: 'accent' as const,
      },
      {
        icon: MessageSquare,
        title: 'Growth adds communication drag before it adds clarity',
        description:
          'More enquiries, more service types, or more booking volume can create front-desk pressure if the core operating path is still loose.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'System Architecture',
    title: 'What the category operating system needs to hold together',
    description:
      'A strong automotive setup connects the first enquiry, service qualification, estimate or booking path, local trust layer, and review loop into one practical system.',
    featureCategories: [
      {
        title: 'Enquiry and diagnosis layer',
        description:
          'Calls, forms, and service requests need a cleaner first step so the business can qualify vehicle issues and respond faster.',
        icon: MessageSquare,
        features: [
          'Service request capture',
          'Vehicle issue qualification',
          'Cleaner first-contact routing',
        ],
      },
      {
        title: 'Estimate and booking layer',
        description:
          'Inspections, diagnostics, quotes, and appointment windows should move forward without loose handoffs.',
        icon: Calendar,
        features: [
          'Inspection scheduling',
          'Estimate follow-up triggers',
          'Appointment-window clarity',
        ],
      },
      {
        title: 'Workshop coordination layer',
        description:
          'Teams need better visibility around which service type, booking stage, or follow-up path each job sits inside.',
        icon: Wrench,
        features: [
          'Lead-stage visibility',
          'Service-path context',
          'Better internal handoff points',
        ],
      },
      {
        title: 'Trust and reputation layer',
        description:
          'Proof of work, reviews, and workshop credibility need to support the booking decision before the vehicle arrives.',
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
          'Search, maps, service pages, and area coverage need to reinforce the jobs and locations you actually want.',
        icon: Search,
        features: [
          'Service-page clarity',
          'Google Business Profile support',
          'Local search reinforcement',
        ],
      },
      {
        title: 'Follow-up layer',
        description:
          'Pending quotes, unbooked inspections, completed jobs, and return-visit prompts all need calmer next steps.',
        icon: Shield,
        features: [
          'Quote follow-up',
          'Missed-enquiry recovery',
          'Post-visit review and return-service prompts',
        ],
      },
    ],
    columns: 3 as const,
  };

  const spectrumData = {
    badge: 'Business Shapes',
    title: 'The category covers different automotive operating models, not one fixed shop shape',
    description:
      'Auto repair shops, mobile mechanics, detailers, and body shops can look related from the outside, but the workflow strain changes depending on urgency, booking style, service complexity, and how estimates are handled.',
    cards: [
      {
        title: 'Owner-led garages',
        description:
          'Fewer systems needed, but stronger first-response structure — because the same people are handling vehicles and new enquiries.',
        points: ['Low admin capacity', 'High missed-call risk', 'Need for fast qualification'],
      },
      {
        title: 'Workshop teams',
        description:
          'Need tighter handoffs between the person receiving enquiries, the person quoting, and the person delivering the work.',
        points: ['Shared workload', 'Scheduling pressure', 'Follow-up gaps become expensive'],
        featured: true,
      },
      {
        title: 'Specialist or mobile operators',
        description:
          'Clearer service routing, more visible trust, and stronger explanation of how the booking path actually works.',
        points: [
          'Service-path complexity',
          'Trust has to carry more weight',
          'Location context matters',
        ],
      },
    ],
    backgroundColor: 'bg-alt',
    cssPrefix: 'automotive-services-spectrum',
  };

  const decisionChecklistData = {
    badge: 'When Category Work Matters',
    title: 'Signs the business needs category-level system thinking before another isolated fix',
    description:
      'This is the point where one more page or one more tool is not the answer. The whole enquiry-to-booking flow needs tightening at category level first.',
    items: [
      'Different automotive services exist, but lead handling still runs through one unclear process',
      'Calls, forms, and estimate requests reach the business, but reply speed depends too much on who happens to be free',
      'Reviews and local visibility exist, but they are not strengthening the right service pages or workshop trust signals',
      'Pending quotes or inspection bookings are hard to track consistently',
      'The business wants more service-specific pages, but the category logic behind them is still weak',
      'Growth is creating admin pressure faster than it is creating operating clarity',
    ],
    columns: 2 as const,
    backgroundColor: 'bg-base',
    cssPrefix: 'automotive-services-decision-checklist',
  };

  const serviceEnvironmentsData = {
    badge: 'Service Environments',
    title: 'The same category can operate through very different service environments',
    description:
      'An auto repair shop, a mobile mechanic, a detailing business, and a body shop do not break in the same places. That difference needs to be visible before narrowing into one single-industry workflow.',
    features: [
      {
        title: 'Workshop-led repair environment',
        description:
          'Better first-response structure, clearer inspection or repair capture, and less reliance on missed callbacks.',
        icon: Car,
      },
      {
        title: 'Team-based service environment',
        description:
          'Stronger handoffs between the person receiving enquiries and the people scheduling or delivering the work.',
        icon: Users,
      },
      {
        title: 'Specialist or appearance-led environment',
        description:
          'Better routing between services, clearer trust signals, and stronger explanation of what the customer should do next.',
        icon: Sparkles,
      },
    ],
    tagline: 'Category context before service-level depth',
    narrativeTitle: 'Why this belongs on the category page',
    narrativeParagraphs: [
      'A category page should explain the operating environments inside automotive services before it narrows into one workflow like auto repair or detailing.',
      'Once that context is clear, the single-industry page can go much deeper into inspection handling, appointment flow, estimate follow-up, and review support for that service type.',
    ],
    backgroundColor: 'bg-alt',
    cssPrefix: 'automotive-services-service-environments',
  };

  const processData = {
    badge: 'Tier 1 Layering',
    title: 'How Smart Website structure expands into automotive-specific workflows',
    description:
      'Once the category system is clear, the page can route visitors into the right automotive workflow while keeping Smart Website structure as the main operating layer.',
    steps: [
      {
        number: '01',
        title: 'Frame the Smart Website core',
        description:
          'Start with the enquiry, booking, and conversion structure that supports automotive demand before narrowing into one service type.',
      },
      {
        number: '02',
        title: 'Show the operating shapes',
        description:
          'Clarify how workshop-led, team-based, and specialist operators differ so visitors can place themselves quickly.',
      },
      {
        number: '03',
        title: 'Layer the supporting systems',
        description:
          'Connect local visibility, trust proof, estimate handling, booking flow, and follow-up support around the Smart Website core.',
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
    cssPrefix: 'automotive-services-process',
  };

  const detailRoutesData = {
    badge: 'Approved Sub-Industry Workflows',
    title: 'The next mapped workflows in this category',
    description:
      'Automotive Services is live as a category page. The workflow pages in this lane — Auto Repair, Car Detailing, Mobile Mechanics, and Body Shops — each turn this category logic into a more specific operating path.',
    items: [
      {
        title: 'Auto Repair',
        description:
          'From fault enquiries through diagnostics, booking coordination, estimate handling, and review follow-up.',
        href: '/industries/automotive-services/auto-repair',
        icon: Wrench,
      },
      {
        title: 'Car Detailing',
        description:
          'From package clarity through appointment scheduling, preparation guidance, and repeat-visit support.',
        href: '/industries/automotive-services/car-detailing',
        icon: Sparkles,
      },
      {
        title: 'Mobile Mechanics',
        description:
          'From service-area qualification through call handling, mobile booking, and local trust support.',
        href: '/industries/automotive-services/mobile-mechanics',
        icon: Car,
      },
      {
        title: 'Body Shops',
        description:
          'From damage-assessment enquiries through estimate steps, booking coordination, and trust reinforcement.',
        href: '/industries/automotive-services/body-shops',
        icon: Shield,
      },
    ],
    backgroundColor: 'bg-muted/20',
    cssPrefix: 'automotive-services-detail-routes',
    styleVariant: 'style1' as const,
  };

  return {
    slug: 'automotive-services',
    type: 'category',
    category: 'automotive-services',
    systems: [
      'smart-website-systems',
      'ai-lead-handling',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['lead-management', 'missed-calls', 'review-generation', 'booking-systems'],
    industries: ['auto-repair', 'body-shop', 'car-detailing', 'mobile-mechanic'],
    seo: {
      title: 'Automotive Services Systems | MindWP',
      description:
        'Smart Website systems for automotive service businesses that need clearer enquiry handling, estimate flow, booking support, and stronger local trust.',
      keywords: [
        'automotive service website systems',
        'auto repair booking system',
        'automotive lead handling',
        'automotive estimate follow up system',
        'local automotive business infrastructure',
      ],
      canonical: '/industries/automotive-services',
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
      title: 'Map the automotive category around how your business actually works',
      description:
        'If your automotive business is dealing with loose enquiry handling, inconsistent estimate follow-up, or booking friction — we can help map the right system around it.',
      secondaryAction: {
        label: 'See Smart Website Systems',
        href: '/services/smart-website-systems',
      },
    },
  };
}

export const automotiveServicesIndustryPageData: IndustryPageData =
  buildAutomotiveServicesIndustryPageData();
