import {
  AlertCircle,
  Calendar,
  Clock3,
  Droplets,
  Home,
  MapPinned,
  MessageSquare,
  Phone,
  Search,
  Shovel,
  Star,
  Truck,
  Users,
  Workflow,
  Wrench,
  Zap,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';
import { buildContactHref } from '@/lib/contact/contactHref';

function buildHomeServicesIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'Primary Lane',
    title: 'Smart Website Systems for Home Service Teams',
    description:
      'Home service businesses run on fast response, clear estimate handling, and local trust — but most of those steps break before the job even starts. A Smart Website system holds the whole path together.',
    primaryAction: {
      label: 'Book More Qualified Jobs',
      href: buildContactHref({
        system: 'smart-website-systems',
        sourceType: 'industry',
        slug: 'home-services',
      }),
    },
    secondaryAction: {
      label: 'See Smart Website Systems',
      href: '/services/smart-website-systems',
    },
    list: [
      'Clearer enquiry capture',
      'Faster estimate booking',
      'Stronger local trust signals',
      'Consistent follow-up',
    ],
    cssPrefix: 'home-services-hero',
  };

  const imageStripData = {
    badge: 'Category Reality',
    title: 'The work happens in the field, but the friction starts before the job',
    description:
      'Calls arrive while crews are busy. Quote requests need sorting. Service areas need clarity. Reviews need follow-up. That operating layer shapes everything else.',
    items: [
      {
        title: 'Emergency and urgent enquiries',
        image: '/images/placeholders/service-card-1.svg',
        alt: 'Abstract placeholder image representing urgent home service enquiries',
      },
      {
        title: 'Estimate and inspection booking',
        image: '/images/placeholders/service-card-2.svg',
        alt: 'Abstract placeholder image representing estimate and inspection scheduling',
      },
      {
        title: 'Field team coordination',
        image: '/images/placeholders/service-card-3.svg',
        alt: 'Abstract placeholder image representing field team coordination',
      },
      {
        title: 'Review and referral follow-up',
        image: '/images/placeholders/service-card-4.svg',
        alt: 'Abstract placeholder image representing review and referral follow-up',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'home-services-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Operating Patterns',
    title: 'Where home service businesses feel the pressure first',
    description:
      'The gap is between incoming demand, response speed, quote handling, and visible trust across the areas you serve.',
    benefits: [
      {
        icon: Phone,
        title: 'Calls arrive when no one can answer',
        description:
          'Owners and crews are on jobs when new leads come in — urgent opportunities can cool off before anyone responds.',
        iconType: 'primary' as const,
      },
      {
        icon: Clock3,
        title: 'Estimate follow-up becomes uneven',
        description:
          'Inspections, quotes, reminders, and pending decisions rely on memory or manual chasing — the pipeline becomes harder to trust.',
        iconType: 'secondary' as const,
      },
      {
        icon: MapPinned,
        title: 'Service area visibility gets fragmented',
        description:
          'Google Business Profile, service-area pages, reviews, and trade-specific pages do not reinforce each other — especially across multiple towns or services.',
        iconType: 'accent' as const,
      },
      {
        icon: AlertCircle,
        title: 'Growth adds admin drag before clarity',
        description:
          'More leads, more trades, or more crew capacity can strain response and coordination if the core operating system is still loose.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'System Architecture',
    title: 'What the category operating system needs to hold together',
    description:
      'The system connects the first enquiry, the booking path, the estimate flow, the service-area trust layer, and the review loop into one practical setup.',
    featureCategories: [
      {
        title: 'Enquiry capture layer',
        description:
          'Routes phone calls, forms, and urgent service requests into qualified paths so the team can respond faster.',
        icon: MessageSquare,
        features: [
          'Clear service request forms',
          'Urgency and job-type capture',
          'Cleaner first-contact routing',
        ],
      },
      {
        title: 'Estimate and booking layer',
        description:
          'Moves site visits, callbacks, estimate requests, and appointment windows forward without loose handoffs.',
        icon: Calendar,
        features: [
          'Inspection scheduling',
          'Estimate follow-up triggers',
          'Appointment-window clarity',
        ],
      },
      {
        title: 'Dispatch and coordination layer',
        description:
          'Gives the team visibility around where demand is coming from and what stage each opportunity is in.',
        icon: Truck,
        features: [
          'Lead-stage visibility',
          'Area and route context',
          'Better internal handoff points',
        ],
      },
      {
        title: 'Trust and reputation layer',
        description:
          'Connects reviews, project proof, and reputation signals to the booking decision instead of leaving them disconnected.',
        icon: Star,
        features: [
          'Review request workflows',
          'Proof and credibility support',
          'Trust before estimate booking',
        ],
      },
      {
        title: 'Local visibility layer',
        description:
          'Aligns search, maps, service pages, and location coverage to reinforce the areas and jobs you actually want.',
        icon: Search,
        features: ['Service-area visibility', 'Trade-page clarity', 'Local search reinforcement'],
      },
      {
        title: 'Follow-up layer',
        description:
          'Handles pending quotes, unbooked leads, and completed jobs with calmer next steps so revenue does not leak.',
        icon: Workflow,
        features: [
          'Quote follow-up',
          'Missed-call recovery',
          'Post-job review and referral prompts',
        ],
      },
    ],
    columns: 3 as const,
  };

  const spectrumData = {
    badge: 'Business Shapes',
    title: 'The category covers different operating models, not one fixed company shape',
    description:
      'Home services businesses can look similar from the outside, but the workflow strain changes depending on crew size, trade mix, service area spread, and how estimates are handled.',
    cards: [
      {
        title: 'Owner-led trade businesses',
        description:
          'Fewer systems, but the same person handles jobs and new enquiries — first-response structure matters most.',
        points: ['Low admin capacity', 'High missed-call risk', 'Need for fast qualification'],
      },
      {
        title: 'Office and field teams',
        description:
          'Tighter handoffs between front-office response, estimate scheduling, and field delivery keep opportunities from going stale.',
        points: ['Shared workload', 'More scheduling pressure', 'Follow-up gaps become expensive'],
        featured: true,
      },
      {
        title: 'Multi-trade local companies',
        description:
          'Routing across services, locations, and trade-specific pages gets complex fast — the website should simplify, not add confusion.',
        points: [
          'Service routing complexity',
          'Location coverage complexity',
          'Trust has to scale across more offers',
        ],
      },
    ],
    backgroundColor: 'bg-alt',
    cssPrefix: 'home-services-spectrum',
  };

  const decisionChecklistData = {
    badge: 'When Category Work Matters',
    title: 'Signs the business needs category-level system thinking',
    description:
      'At some point, the business does not need one more page or one more tool — it needs the whole enquiry-to-job flow tightened at category level.',
    items: [
      'Different trades or services exist, but lead handling still runs through one unclear process',
      'Calls, forms, and estimate requests reach the business, but reply speed depends too much on who happens to be free',
      'Reviews and local visibility exist, but they are not strengthening the right service pages or areas',
      'Pending quotes or inspection bookings are hard to track consistently',
      'The company wants more trade-specific pages, but the category logic behind them is still weak',
      'Growth is creating admin pressure faster than it is creating operating clarity',
    ],
    columns: 2 as const,
    backgroundColor: 'bg-base',
    cssPrefix: 'home-services-decision-checklist',
  };

  const serviceEnvironmentsData = {
    badge: 'Service Environments',
    title: 'The same category can operate through very different service environments',
    description:
      'A roofing company, an HVAC team, and a multi-trade business do not break in the same places. That context matters before narrowing into single-industry workflows.',
    features: [
      {
        title: 'Single-trade operator environment',
        description:
          'Better first-response structure, clearer estimate capture, and less reliance on missed callbacks.',
        icon: Home,
      },
      {
        title: 'Office-supported field team environment',
        description:
          'Stronger handoffs between the person receiving enquiries and the people scheduling or delivering the work.',
        icon: Users,
      },
      {
        title: 'Multi-service local brand environment',
        description:
          'Better routing between services, locations, and trust signals so the website supports the right enquiry path.',
        icon: Wrench,
      },
    ],
    tagline: 'Category context before trade-level depth',
    narrativeTitle: 'Why this belongs on the category page',
    narrativeParagraphs: [
      'A category page should explain the operating environments inside home services before it narrows into one trade like roofing or HVAC.',
      'Once that context is clear, the single-industry page can go much deeper into estimate handling, service-area coverage, reminders, and review flow for that trade.',
    ],
    backgroundColor: 'bg-alt',
    cssPrefix: 'home-services-service-environments',
  };

  const processData = {
    badge: 'Tier 1 Layering',
    title: 'How Smart Website structure expands into trade-specific workflows',
    description:
      'Once the category system is clear, the page can route visitors into the right trade workflow while keeping Smart Website structure as the main operating layer.',
    steps: [
      {
        number: '01',
        title: 'Frame the Smart Website core',
        description:
          'Start with the enquiry, booking, and conversion structure that supports all home service demand before narrowing into one trade.',
      },
      {
        number: '02',
        title: 'Show the operating shapes',
        description:
          'Clarify how owner-led trades, office-supported teams, and multi-service brands differ so visitors can place themselves quickly.',
      },
      {
        number: '03',
        title: 'Layer the supporting systems',
        description:
          'Connect local visibility, missed-call handling, review flow, estimate follow-up, and coordination support around the Smart Website core.',
      },
      {
        number: '04',
        title: 'Route into trade pages',
        description:
          'Move the visitor into the right single-industry workflow page once the category context is clear.',
      },
    ],
    columns: 4 as const,
    backgroundColor: 'bg-base',
    cssPrefix: 'home-services-process',
  };

  const detailRoutesData = {
    badge: 'Sub-Industry Workflows',
    title: 'Explore the first mapped workflows in this category',
    description:
      'Start with roofing, HVAC, plumbing, electrical, and landscaping to see how Smart Website structure adapts to urgent enquiries, booked work, estimate handling, seasonal pressure, and local trust-building.',
    items: [
      {
        title: 'Roofing',
        description:
          'From storm or repair enquiry through inspection booking, estimate follow-up, and review collection.',
        href: '/industries/home-services/roofing-companies',
        icon: Home,
      },
      {
        title: 'HVAC',
        description:
          'From heating or cooling enquiry through service scheduling, reminder flow, maintenance follow-up, and repeat demand.',
        href: '/industries/home-services/hvac-companies',
        icon: Workflow,
      },
      {
        title: 'Plumbing',
        description:
          'From urgent or routine plumbing enquiry through booked visits, quote follow-up, and review collection.',
        href: '/industries/home-services/plumbing-companies',
        icon: Droplets,
      },
      {
        title: 'Electrical',
        description:
          'From faults and inspections through booked work, quote handling, and stronger local trust support.',
        href: '/industries/home-services/electrical-companies',
        icon: Zap,
      },
      {
        title: 'Landscaping',
        description:
          'From maintenance and project enquiries through estimate booking, seasonal follow-up, and stronger visual proof.',
        href: '/industries/home-services/landscaping-companies',
        icon: Shovel,
      },
    ],
    backgroundColor: 'bg-muted/20',
    cssPrefix: 'home-services-detail-routes',
    ctaLabel: 'View Page',
    styleVariant: 'style1' as const,
  };

  return {
    slug: 'home-services',
    type: 'category',
    category: 'home-services',
    systems: [
      'smart-website-systems',
      'ai-lead-handling',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['lead-management', 'follow-up', 'review-generation', 'missed-calls'],
    industries: ['roofing', 'hvac', 'plumbing', 'electrical', 'landscaping'],
    seo: {
      title: 'Home Services Systems | MindWP',
      description:
        'Smart Website systems for roofing, HVAC, plumbing, electrical, and landscaping businesses that need clearer enquiry handling and follow-up.',
      keywords: [
        'home services website systems',
        'roofing hvac booking systems',
        'home services lead handling',
        'estimate follow up system',
        'local service business infrastructure',
      ],
      canonical: '/industries/home-services',
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
      title: 'Map the system around how your team actually works',
      description:
        'If jobs are slipping between first contact and follow-up, we can show you how to turn more enquiries into booked work.',
      primaryAction: {
        label: 'Book More Qualified Jobs',
        href: buildContactHref({
          system: 'smart-website-systems',
          sourceType: 'industry',
          slug: 'home-services',
        }),
      },
      secondaryAction: {
        label: 'See Smart Website Systems',
        href: '/services/smart-website-systems',
      },
    },
  };
}

export const homeServicesIndustryPageData: IndustryPageData = buildHomeServicesIndustryPageData();
