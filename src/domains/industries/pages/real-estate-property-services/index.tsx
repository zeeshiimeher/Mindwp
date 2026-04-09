import {
  AlertCircle,
  Calendar,
  Clock3,
  FileSearch,
  Home,
  Landmark,
  MapPinned,
  MessageSquare,
  Search,
  Shield,
  Star,
  Users,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';
import { buildContactHref } from '@/lib/contact/contactHref';

function buildRealEstatePropertyServicesIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'Coverage Lane',
    title: 'Smart Website Systems for Real Estate & Property Services',
    description:
      'A real estate or property service website should support enquiry qualification, appointment or valuation booking, trust-building, and follow-up — without making the team manage every handoff manually.',
    primaryAction: {
      label: 'Capture More Qualified Enquiries',
      href: buildContactHref({
        system: 'smart-website-systems',
        sourceType: 'industry',
        slug: 'real-estate-property-services',
      }),
    },
    secondaryAction: {
      label: 'See Smart Website Systems',
      href: '/services/smart-website-systems',
    },
    list: [
      'Clearer enquiry routing',
      'Better valuation and viewing flow',
      'Stronger trust signals',
      'More reliable follow-up',
    ],
    cssPrefix: 'real-estate-services-hero',
  };

  const imageStripData = {
    badge: 'Category Reality',
    title:
      'The property work happens through trust, timing, and next-step clarity before any deal moves',
    description:
      'Valuation requests, listing interest, viewing coordination, inspection enquiries, financing questions, and follow-up all compete for attention at once. That operating layer needs to be clear before narrowing into one property workflow.',
    items: [
      {
        title: 'Valuation and seller enquiries',
        image: '/images/placeholders/service-card-1.svg',
        alt: 'Abstract placeholder image representing real estate valuation enquiries',
      },
      {
        title: 'Viewing and appointment coordination',
        image: '/images/placeholders/service-card-2.svg',
        alt: 'Abstract placeholder image representing property viewing coordination',
      },
      {
        title: 'Inspection and service follow-through',
        image: '/images/placeholders/service-card-3.svg',
        alt: 'Abstract placeholder image representing property service follow-through',
      },
      {
        title: 'Reviews and nurture follow-up',
        image: '/images/placeholders/service-card-4.svg',
        alt: 'Abstract placeholder image representing real estate reviews and nurture follow-up',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'real-estate-services-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Operating Patterns',
    title: 'Where real estate and property businesses feel the pressure first',
    description:
      'The gap is rarely just lead volume — it sits between first enquiry, qualification, appointment handling, and the trust proof people need before moving forward.',
    benefits: [
      {
        icon: AlertCircle,
        title: 'Different enquiry types arrive through one loose path',
        description:
          'Buyers, sellers, landlords, tenants, borrowers, and property owners often enter through the same contact path — first-response quality drops when everything routes the same way.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Appointments and next steps create friction',
        description:
          'Viewings, valuations, inspections, consultations, and paperwork steps do not always move through one clean booking path.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Follow-up depends too much on memory',
        description:
          'Nurture, review requests, reminder flow, and pending-decision follow-up often happen inconsistently when the team is busy.',
        iconType: 'accent' as const,
      },
      {
        icon: MapPinned,
        title: 'Trust and local credibility stay fragmented',
        description:
          'Service pages, reviews, local area pages, and brand credibility exist in different places — they rarely work together to support confident next-step decisions.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'System Architecture',
    title: 'What the category operating system needs to hold together',
    description:
      'A strong property setup connects first enquiry, qualification, appointment flow, local trust, and follow-up into one practical system instead of treating them as isolated tasks.',
    featureCategories: [
      {
        title: 'Enquiry and qualification layer',
        description:
          'Different property journeys need a cleaner first-contact path so the business can route people into the right next step faster.',
        icon: MessageSquare,
        features: ['Intent capture', 'Lead qualification', 'Cleaner first-contact routing'],
      },
      {
        title: 'Booking and appointment layer',
        description:
          'Viewings, valuations, inspections, and consultations need clearer scheduling and reminder structure.',
        icon: Calendar,
        features: ['Appointment scheduling', 'Reminder timing', 'Cleaner next-step guidance'],
      },
      {
        title: 'Documentation and process layer',
        description:
          'Property and finance workflows often need better clarity around what information is needed and what happens next.',
        icon: FileSearch,
        features: ['Information capture', 'Process visibility', 'Smoother handoffs'],
      },
      {
        title: 'Trust and proof layer',
        description:
          'Reviews, case credibility, and service-page structure need to support confident decisions before the appointment happens.',
        icon: Star,
        features: [
          'Review request workflows',
          'Proof and credibility support',
          'Trust-led page structure',
        ],
      },
      {
        title: 'Local visibility layer',
        description:
          'Area pages, maps visibility, and service pages need to reinforce the locations and enquiries you actually want.',
        icon: Search,
        features: [
          'Area-page clarity',
          'Google Business Profile support',
          'Local search reinforcement',
        ],
      },
      {
        title: 'Follow-up layer',
        description:
          'Pending decisions, unbooked leads, and post-service review requests all need calmer next steps.',
        icon: Shield,
        features: ['Lead nurture', 'Missed-enquiry recovery', 'Review and next-step prompts'],
      },
    ],
    columns: 3 as const,
  };

  const spectrumData = {
    badge: 'Business Shapes',
    title: 'The category covers different property operating models, not one fixed business shape',
    description:
      'Realtors, property managers, inspectors, and mortgage brokers can look related from the outside, but the workflow strain changes depending on trust threshold, appointment style, and how long decisions take.',
    cards: [
      {
        title: 'Lead-driven advisors',
        description:
          'Clearer qualification, stronger trust signals, and calmer nurture needed — because the sales cycle is rarely immediate.',
        points: [
          'Higher trust threshold',
          'Longer follow-up cycles',
          'Need for clearer next steps',
        ],
      },
      {
        title: 'Appointment-led teams',
        description:
          'Need tighter handoffs between enquiry capture, scheduling, reminders, and the next action after the appointment.',
        points: ['Shared workload', 'Coordination pressure', 'Follow-up gaps become expensive'],
        featured: true,
      },
      {
        title: 'Location-led service operators',
        description:
          'Need better area visibility, stronger credibility, and clearer explanation of what the service actually covers.',
        points: [
          'Area-specific trust',
          'Location clarity matters',
          'Credibility carries more weight',
        ],
      },
    ],
    backgroundColor: 'bg-alt',
    cssPrefix: 'real-estate-services-spectrum',
  };

  const decisionChecklistData = {
    badge: 'When Category Work Matters',
    title: 'Signs the business needs category-level system thinking before another isolated fix',
    description:
      'This is the point where one more page or tool does not solve the problem. The whole enquiry-to-appointment flow needs tightening at category level first.',
    items: [
      'Different property services exist, but lead handling still runs through one unclear process',
      'Valuation, viewing, or consultation requests arrive, but reply speed depends too much on who happens to be free',
      'Reviews and local visibility exist, but they are not strengthening the right service pages or locations',
      'Pending leads or next-step decisions are hard to track consistently',
      'The business wants more property-specific pages, but the category logic behind them is still weak',
      'Growth is creating admin pressure faster than it is creating operating clarity',
    ],
    columns: 2 as const,
    backgroundColor: 'bg-base',
    cssPrefix: 'real-estate-services-decision-checklist',
  };

  const serviceEnvironmentsData = {
    badge: 'Service Environments',
    title: 'The same category can operate through very different service environments',
    description:
      'A realtor, a property manager, a home inspector, and a mortgage broker do not break in the same places. That difference needs to be visible before narrowing into one single-industry workflow.',
    features: [
      {
        title: 'Transaction-led environment',
        description:
          'Better first-response structure, clearer qualification, and more visible trust before appointments happen.',
        icon: Landmark,
      },
      {
        title: 'Ongoing service environment',
        description:
          'Stronger handoffs between enquiry capture, scheduling, follow-up, and longer-term communication.',
        icon: Users,
      },
      {
        title: 'Inspection and advisory environment',
        description:
          'Better routing between service types, stronger local credibility, and clearer explanation of what happens next.',
        icon: Home,
      },
    ],
    tagline: 'Category context before property-level depth',
    narrativeTitle: 'Why this belongs on the category page',
    narrativeParagraphs: [
      'A category page should explain the operating environments inside real estate and property services before it narrows into one workflow like realtors or inspections.',
      'Once that context is clear, the single-industry page can go much deeper into enquiry handling, appointment flow, nurture, and trust support for that service type.',
    ],
    backgroundColor: 'bg-alt',
    cssPrefix: 'real-estate-services-service-environments',
  };

  const processData = {
    badge: 'Tier 1 Layering',
    title: 'How Smart Website structure expands into property-specific workflows',
    description:
      'Once the category system is clear, the page can route visitors into the right property workflow while keeping Smart Website structure as the main operating layer.',
    steps: [
      {
        number: '01',
        title: 'Frame the Smart Website core',
        description:
          'Start with the enquiry, booking, and conversion structure that supports property demand before narrowing into one service type.',
      },
      {
        number: '02',
        title: 'Show the operating shapes',
        description:
          'Clarify how transaction-led, ongoing-service, and inspection-led operators differ so visitors can place themselves quickly.',
      },
      {
        number: '03',
        title: 'Layer the supporting systems',
        description:
          'Connect local visibility, trust proof, appointment flow, nurture, and process support around the Smart Website core.',
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
    cssPrefix: 'real-estate-services-process',
  };

  const detailRoutesData = {
    badge: 'Approved Sub-Industry Workflows',
    title: 'The next mapped workflows in this category',
    description:
      'Real Estate & Property Services is live as a category page. The workflow pages in this lane — Realtors, Property Managers, Home Inspectors, and Mortgage Brokers — each turn this category logic into a more specific operating path.',
    items: [
      {
        title: 'Realtors',
        description:
          'From buyer and seller enquiries through appointment coordination, trust support, and nurture follow-up.',
        href: '/industries/real-estate-property-services/realtors',
        icon: Landmark,
      },
      {
        title: 'Property Managers',
        description:
          'From owner enquiries and tenant requests through maintenance coordination, communication flow, and follow-up.',
        href: '/industries/real-estate-property-services/property-managers',
        icon: Users,
      },
      {
        title: 'Home Inspectors',
        description:
          'From inspection enquiries through scheduling, preparation steps, reporting follow-up, and local trust support.',
        href: '/industries/real-estate-property-services/home-inspectors',
        icon: Home,
      },
      {
        title: 'Mortgage Brokers',
        description:
          'From qualification enquiries through consultation booking, document-readiness guidance, and trust-building follow-up.',
        href: '/industries/real-estate-property-services/mortgage-brokers',
        icon: Shield,
      },
    ],
    backgroundColor: 'bg-muted/20',
    cssPrefix: 'real-estate-services-detail-routes',
    styleVariant: 'style1' as const,
  };

  return {
    slug: 'real-estate-property-services',
    type: 'category',
    category: 'real-estate-property-services',
    systems: [
      'smart-website-systems',
      'crm-automation',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['lead-qualification', 'follow-up', 'review-generation', 'pipeline-visibility'],
    industries: ['home-inspection', 'mortgage-broker', 'property-management', 'realtor'],
    seo: {
      title: 'Real Estate & Property Services Systems | MindWP',
      description:
        'Smart Website systems for real estate and property businesses that need clearer enquiry handling, appointment flow, and stronger local trust.',
      keywords: [
        'real estate website systems',
        'property services booking system',
        'real estate lead handling',
        'property appointment follow up system',
        'local property business infrastructure',
      ],
      canonical: '/industries/real-estate-property-services',
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
      title: 'Map the property category around how your business actually works',
      description:
        'If property enquiries feel inconsistent, we can show you how to turn more of them into qualified conversations.',
      primaryAction: {
        label: 'Capture More Qualified Enquiries',
        href: buildContactHref({
          system: 'smart-website-systems',
          sourceType: 'industry',
          slug: 'real-estate-property-services',
        }),
      },
      secondaryAction: {
        label: 'See Smart Website Systems',
        href: '/services/smart-website-systems',
      },
    },
  };
}

export const realEstatePropertyServicesIndustryPageData: IndustryPageData =
  buildRealEstatePropertyServicesIndustryPageData();
