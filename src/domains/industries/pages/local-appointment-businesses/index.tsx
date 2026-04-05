import {
  AlertCircle,
  Calendar,
  Car,
  Clock3,
  HeartPulse,
  MessageSquare,
  PenTool,
  Search,
  Shield,
  Star,
  Users,
  Wrench,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildLocalAppointmentBusinessesIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'Coverage Lane',
    title: 'Smart Website Systems for Local Appointment Businesses',
    description:
      'Local appointment businesses run on qualification, scheduling, and trust — but those steps break when staff have to hold every handoff together manually. A Smart Website system structures the whole path from enquiry to follow-up.',
    primaryAction: {
      label: 'Start a Conversation',
      href: '/contact',
    },
    secondaryAction: {
      label: 'See Smart Website Systems',
      href: '/services/smart-website-systems',
    },
    list: [
      'Clearer appointment qualification',
      'Better booking flow',
      'Stronger local trust signals',
      'Consistent follow-up',
    ],
    cssPrefix: 'local-appointment-businesses-hero',
  };

  const imageStripData = {
    badge: 'Category Reality',
    title:
      'The work happens in person, but the friction starts before the appointment is confirmed',
    description:
      'New enquiries, service questions, booking timing, preparation steps, review signals, and follow-up all shape whether the next step happens smoothly. That operating layer matters before narrowing into one appointment-led workflow.',
    items: [
      {
        title: 'New enquiry and fit questions',
        image: '/images/placeholders/service-card-1.svg',
        alt: 'Abstract placeholder image representing local appointment business enquiries',
      },
      {
        title: 'Booking and scheduling pressure',
        image: '/images/placeholders/service-card-2.svg',
        alt: 'Abstract placeholder image representing appointment booking pressure',
      },
      {
        title: 'Preparation and next-step guidance',
        image: '/images/placeholders/service-card-3.svg',
        alt: 'Abstract placeholder image representing preparation guidance and next-step clarity',
      },
      {
        title: 'Reviews and repeat-visit follow-up',
        image: '/images/placeholders/service-card-4.svg',
        alt: 'Abstract placeholder image representing reviews and repeat-visit follow-up',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'local-appointment-businesses-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Operating Patterns',
    title: 'Where local appointment businesses feel the pressure first',
    description:
      'The gap is between first enquiry, qualification, booking clarity, trust proof, and follow-up after the visit or session.',
    benefits: [
      {
        icon: AlertCircle,
        title: 'Different service requests arrive through one loose path',
        description:
          'Tattoo consultations, driving lessons, repair visits, and clinic appointments all have different needs, but intake starts in the same unclear way.',
        iconType: 'primary' as const,
      },
      {
        icon: Clock3,
        title: 'Booking flow breaks when readiness is unclear',
        description:
          'Availability, preparation steps, service fit, and next steps rely on manual clarification when the workflow is not structured.',
        iconType: 'secondary' as const,
      },
      {
        icon: Shield,
        title: 'Trust and booking confidence do not support each other',
        description:
          'Reviews, local credibility, service pages, and staff proof all exist but do not reinforce the booking decision before the appointment happens.',
        iconType: 'accent' as const,
      },
      {
        icon: MessageSquare,
        title: 'Growth adds communication drag before clarity',
        description:
          'More enquiries, more service variants, or more booking volume create admin pressure if the core enquiry-to-appointment path is still loose.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'System Architecture',
    title: 'What the category operating system needs to hold together',
    description:
      'A strong local appointment setup connects first contact, qualification, booking support, trust signals, and follow-up into one practical system rather than disconnected tasks.',
    featureCategories: [
      {
        title: 'Qualification layer',
        description:
          'Routes calls, forms, and booking requests through a clearer first step so the business can identify fit and respond with better context.',
        icon: MessageSquare,
        features: ['Service-path capture', 'Fit qualification', 'Cleaner first-response routing'],
      },
      {
        title: 'Booking layer',
        description:
          'Moves sessions, visits, and consultations forward without loose handoffs or unclear next steps.',
        icon: Calendar,
        features: ['Appointment scheduling', 'Readiness guidance', 'Next-step clarity'],
      },
      {
        title: 'Service visibility layer',
        description:
          'Gives teams visibility around which booking stage, preparation state, or follow-up path each enquiry sits inside.',
        icon: Users,
        features: [
          'Lead-stage visibility',
          'Preparation context',
          'Better internal handoff points',
        ],
      },
      {
        title: 'Trust and proof layer',
        description:
          'Connects reviews, work proof, and local credibility to the booking decision before the appointment starts.',
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
          'Aligns search visibility, service pages, and area language to reinforce the clients and locations you want.',
        icon: Search,
        features: ['Service-page clarity', 'Local authority support', 'Search reinforcement'],
      },
      {
        title: 'Follow-up layer',
        description:
          'Handles pending bookings, open decisions, and post-visit next steps with calmer follow-through.',
        icon: Shield,
        features: ['Lead nurture', 'Missed-enquiry recovery', 'Post-visit follow-up prompts'],
      },
    ],
    columns: 3 as const,
  };

  const spectrumData = {
    badge: 'Business Shapes',
    title:
      'The category covers different appointment-led operating models, not one fixed business shape',
    description:
      'Tattoo studios, driving schools, repair shops, dental clinics, and small private clinics can all look similar from the outside because they depend on bookings, but the workflow strain changes depending on preparation, urgency, trust, and repeat-visit behavior.',
    cards: [
      {
        title: 'Creative appointment environments',
        description:
          'Trust and fit matter before a session is booked — clearer consultation and preparation flow makes the difference.',
        points: [
          'Trust carries more weight',
          'Preparation clarity matters',
          'No-show risk is expensive',
        ],
      },
      {
        title: 'Training or structured-session environments',
        description:
          'Tighter handoffs between first enquiry, package or lesson selection, booking cadence, and repeat scheduling.',
        points: [
          'Shared scheduling pressure',
          'Recurring booking paths',
          'Follow-up gaps become expensive',
        ],
        featured: true,
      },
      {
        title: 'Service or care-led environments',
        description:
          'Routing between service types, clearer trust signals, and stronger explanation of what the next step looks like.',
        points: ['Service-path complexity', 'Local trust matters', 'Repeat-visit logic differs'],
      },
    ],
    backgroundColor: 'bg-alt',
    cssPrefix: 'local-appointment-businesses-spectrum',
  };

  const decisionChecklistData = {
    badge: 'When Category Work Matters',
    title: 'Signs the business needs category-level system thinking',
    description:
      'At some point the business does not need one more booking button or one more profile page — it needs the whole enquiry-to-appointment flow tightened at category level.',
    items: [
      'Different services or appointment types exist, but new bookings still enter through one unclear process',
      'Requests reach the business, but response quality depends too much on who happens to be free',
      'Reviews and local trust signals exist, but they are not strengthening the right service pages or booking decisions',
      'Pending bookings or follow-up actions are hard to track consistently',
      'The business wants more service-specific pages, but the category logic behind them is still weak',
      'Growth is creating admin pressure faster than it is creating operational clarity',
    ],
    columns: 2 as const,
    backgroundColor: 'bg-base',
    cssPrefix: 'local-appointment-businesses-decision-checklist',
  };

  const serviceEnvironmentsData = {
    badge: 'Service Environments',
    title: 'The same category can operate through very different service environments',
    description:
      'A tattoo studio, a driving school, a repair shop, and a small private clinic do not break in the same places. That context matters before narrowing into one single-industry workflow.',
    features: [
      {
        title: 'Creative booking environment',
        description:
          'Better consultation structure, clearer expectation setting, and less reliance on loose manual messaging.',
        icon: PenTool,
      },
      {
        title: 'Training and lesson environment',
        description:
          'Stronger handoffs between enquiry capture, scheduling cadence, and repeat-session flow.',
        icon: Car,
      },
      {
        title: 'Service and care environment',
        description:
          'Better routing between appointment types, clearer trust signals, and stronger explanation of what happens next.',
        icon: HeartPulse,
      },
    ],
    tagline: 'Category context before service-level depth',
    narrativeTitle: 'Why this belongs on the category page',
    narrativeParagraphs: [
      'A category page should explain the operating environments inside local appointment businesses before it narrows into one workflow like a tattoo studio or a driving school.',
      'Once that context is clear, the single-industry page can go much deeper into qualification handling, booking flow, trust support, and follow-up for that business type.',
    ],
    backgroundColor: 'bg-alt',
    cssPrefix: 'local-appointment-businesses-service-environments',
  };

  const processData = {
    badge: 'Tier 1 Layering',
    title: 'How Smart Website structure expands into local appointment workflows',
    description:
      'Once the category system is clear, the page can route visitors into the right appointment-led workflow while keeping Smart Website structure as the main operating layer.',
    steps: [
      {
        number: '01',
        title: 'Frame the Smart Website core',
        description:
          'Start with the enquiry, booking, and conversion structure that supports appointment demand before narrowing into one service type.',
      },
      {
        number: '02',
        title: 'Show the operating shapes',
        description:
          'Clarify how creative, training, repair, and care-led operators differ so visitors can place themselves quickly.',
      },
      {
        number: '03',
        title: 'Layer the supporting systems',
        description:
          'Connect local visibility, trust proof, booking flow, preparation guidance, and follow-up support around the Smart Website core.',
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
    cssPrefix: 'local-appointment-businesses-process',
  };

  const detailRoutesData = {
    badge: 'Approved Sub-Industry Workflows',
    title: 'The next mapped workflows in this category',
    description:
      'Local Appointment Businesses is now live as a category page. The next workflow pages in this lane are Tattoo Studios, Driving Schools, Repair Shops, Small Private Clinics, and Dental Clinics. Each one turns this category logic into a more specific operating path.',
    items: [
      {
        title: 'Tattoo Studios',
        description:
          'From consultation enquiries through artist-fit clarity, booking preparation, and trust-led follow-up.',
        href: '/industries/local-appointment-businesses/tattoo-studios',
        icon: PenTool,
      },
      {
        title: 'Driving Schools',
        description:
          'From lesson-fit enquiries through package clarity, scheduling cadence, and ongoing learner follow-up.',
        href: '/industries/local-appointment-businesses/driving-schools',
        icon: Car,
      },
      {
        title: 'Repair Shops',
        description:
          'From service qualification through booking, expectation setting, and local trust reinforcement.',
        href: '/industries/local-appointment-businesses/repair-shops',
        icon: Wrench,
      },
      {
        title: 'Small Private Clinics',
        description:
          'From appointment qualification through booking, preparation guidance, and trust-sensitive follow-up.',
        href: '/industries/local-appointment-businesses/small-private-clinics',
        icon: HeartPulse,
      },
      {
        title: 'Dental Clinics',
        description:
          'From treatment-fit enquiries through booking readiness, trust reinforcement, and measured follow-up.',
        href: '/industries/local-appointment-businesses/dental-clinics',
        icon: HeartPulse,
      },
    ],
    backgroundColor: 'bg-muted/20',
    cssPrefix: 'local-appointment-businesses-detail-routes',
    ctaLabel: 'View Workflow',
    styleVariant: 'style1' as const,
  };

  return {
    slug: 'local-appointment-businesses',
    type: 'category',
    category: 'local-appointment-businesses',
    seo: {
      title: 'Local Appointment Business Systems | MindWP',
      description:
        'Smart Website systems for local appointment businesses that need clearer qualification, booking flow, and stronger local trust support.',
      keywords: [
        'local appointment business website systems',
        'appointment booking system',
        'local service lead handling',
        'booking follow up system',
        'local appointment business infrastructure',
      ],
      canonical: '/industries/local-appointment-businesses',
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
      title: 'Map the system around how your appointment business actually works',
      description:
        'If your business is dealing with loose qualification, inconsistent booking flow, follow-up friction, or scattered trust signals, we can help structure the right system around it.',
      primaryAction: { label: 'Start a Conversation', href: '/contact' },
      secondaryAction: {
        label: 'See Smart Website Systems',
        href: '/services/smart-website-systems',
      },
    },
  };
}

export const localAppointmentBusinessesIndustryPageData: IndustryPageData =
  buildLocalAppointmentBusinessesIndustryPageData();
