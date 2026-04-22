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

function buildRealEstatePropertyServicesIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Property Businesses',
    title: 'They Enquired With Three Of You On Sunday Night. Whoever Replied With A Calendar Slot Got The Booking.',
    description:
      'Property decisions happen on portal enquiries at 9pm, valuation requests on Saturday morning, and broker comparisons during a lunch break. The buyer, vendor, landlord, or borrower picks whoever replied first with a clear next step. We put the system in place that catches them while you’re on a viewing, in a loft, or packaging a case.',
    list: [
      'Portal enquiries that came in while you were on a viewing',
      'Valuation, viewing, or inspection bookings that took five emails',
      'Vendors, landlords, or borrowers who went silent for months',
      'Reviews from happy clients you never asked for',
    ],
    cssPrefix: 'real-estate-services-hero',
  };

  const imageStripData = {
    badge: 'How Property Enquiries Actually Land',
    title: 'Sunday-night portal enquiries. Saturday valuations. Lunchtime broker comparisons.',
    description:
      'It’s out-of-hours timing across the whole category. Decisions get made within hours of the first reply.',
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
    badge: 'Where Property Businesses Lose Deals',
    title: 'You’re showing a flat. They’re booking with somebody else.',
    description: 'Same handful of leaks across nearly every property business. None of them are about how good you actually are at the job.',
    benefits: [
      {
        icon: AlertCircle,
        title: 'Buyers, vendors, landlords, tenants — all in one inbox',
        description:
          'Different urgencies, completely different next steps. Everything waits behind everything else.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Bookings take half a week of email tennis',
        description:
          'Viewings, valuations, inspections, broker discovery calls — all stuck in five-email confirmation threads.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Pipelines go silent for six months at a time',
        description:
          'Vendor enquired in March. Borrower searching since spring. Landlord weighing options. No nurture, no check-in.',
        iconType: 'accent' as const,
      },
      {
        icon: MapPinned,
        title: 'You’ve done the work for years. The reviews don’t show it.',
        description:
          'Online you look smaller than the new entrants because nobody asked at the right moment.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to catch enquiries while you’re on the road',
    description:
      'Each piece does one job. Together they keep the pipeline moving while the team handles the actual property work.',
    featureCategories: [
      {
        title: 'Sort the enquiry by intent automatically',
        description:
          'Buyer, vendor, landlord, tenant, borrower, owner — the website asks one question and routes them to the right path. Nothing waits behind something else.',
        icon: MessageSquare,
        features: ['Intent-specific intake', 'Priority enquiries flagged', 'No more shared inbox chaos'],
      },
      {
        title: 'Take the booking without phone tag',
        description:
          'Viewings, valuations, inspections, discovery calls — booked online with the right context captured up front.',
        icon: Calendar,
        features: ['Self-serve booking', 'Property and access details captured', 'Reminders the day before'],
      },
      {
        title: 'Capture the documents and information up front',
        description:
          'Whatever the next step needs — access details, mortgage documents, vendor questionnaires — captured at booking, not after five emails.',
        icon: FileSearch,
        features: ['Document checklists at booking', 'Less email tennis', 'Cleaner internal handoff'],
      },
      {
        title: 'Turn finished work into reviews',
        description:
          'Polite review requests go out at the right moment — the week after completion, the day after the report, after a smooth renewal.',
        icon: Star,
        features: ['Review requests timed automatically', 'Asked when clients are happiest', 'Reviews catch up to the work'],
      },
      {
        title: 'Show up first when local people search',
        description:
          'Pages and Google profile lined up so the right people in the right area find you first.',
        icon: Search,
        features: ['Pages for the streets, postcodes, and services that matter', 'Found on Maps for local searches', 'Less time on enquiries from outside your area'],
      },
      {
        title: 'Nurture the slow-burn pipeline',
        description:
          'Vendors not selling yet, borrowers not buying yet, landlords still weighing options. Useful sequences keep you top of mind until the moment arrives.',
        icon: Shield,
        features: ['Nurture for not-yet-ready leads', 'Past-client check-ins automated', 'Pipeline visible by stage'],
      },
    ],
    columns: 3 as const,
  };

  const spectrumData = {
    badge: 'Different Property Businesses, Different Leaks',
    title: 'A realtor, a property manager, an inspector, and a broker do not lose deals in the same place',
    description:
      'They look related from outside. Inside, the leak is somewhere different for each.',
    cards: [
      {
        title: 'Estate agents and brokers',
        description:
          'The leak is usually first-reply speed on portal enquiries and vendor nurture between valuation and instruction.',
        points: ['Portal enquiry response time', 'Vendor nurture between valuation and listing', 'Past-client sphere staying warm'],
      },
      {
        title: 'Property managers',
        description:
          'The leak is usually landlord enquiries getting buried behind tenant complaints, and owner reports eating half a day.',
        points: ['Separating landlord and tenant intake', 'Maintenance request acknowledgement', 'Automated owner reporting'],
        featured: true,
      },
      {
        title: 'Inspectors and on-site advisors',
        description:
          'The leak is usually agent calls going to voicemail mid-inspection, and post-report remediation work going cold.',
        points: ['Missed-call text-back for agents', 'Booking with access details captured', 'Post-report remediation follow-up'],
      },
    ],
    backgroundColor: 'bg-alt',
    cssPrefix: 'real-estate-services-spectrum',
  };

  const decisionChecklistData = {
    badge: 'Sound Familiar?',
    title: 'A few signs the leak isn’t in the property work itself',
    description:
      'If three or four of these ring true, the next thing worth fixing isn’t another listing or another fee tweak.',
    items: [
      'Portal or website enquiries get replied to hours — sometimes days — after they land',
      'Bookings take three to five emails before a slot is confirmed',
      'You’re a landlord/buyer/borrower magnet on weekends, but only check Monday morning',
      'Pipeline leads go silent for months and then instruct elsewhere',
      'Reviews don’t reflect the years of work or the size of the operation',
      'You’re losing to firms with newer offices or smaller patches because they reply first',
    ],
    columns: 2 as const,
    backgroundColor: 'bg-base',
    cssPrefix: 'real-estate-services-decision-checklist',
  };

  const serviceEnvironmentsData = {
    badge: 'How Different Property Businesses Run',
    title: 'Same category, completely different operating rhythms',
    description:
      'A realtor lives on portal enquiries. A property manager juggles two audiences. An inspector is on-site all day. A broker is on lender calls. The system fits the rhythm.',
    features: [
      {
        title: 'Transaction-led: agents and brokers',
        description:
          'Portal enquiries at midnight, valuations on Saturday, discovery calls on rate windows. Speed of reply decides who gets instructed.',
        icon: Landmark,
      },
      {
        title: 'Ongoing service: property managers',
        description:
          'Landlord enquiries vs tenant requests vs owner reporting — three different audiences in one inbox. Separating them is the whole game.',
        icon: Users,
      },
      {
        title: 'On-site advisory: inspectors',
        description:
          'You’re in a loft when the agent calls. By the time you climb down, they’ve booked the next inspector. Catching the call is the leak.',
        icon: Home,
      },
    ],
    tagline: 'Pick the rhythm closest to yours',
    narrativeTitle: 'Why this matters before picking a workflow',
    narrativeParagraphs: [
      'It’s tempting to fix the website. The actual leak is usually somewhere upstream — the bit between the enquiry coming in and the booking landing in the diary.',
      'Once you know which rhythm matches your business, the right detail page tells you exactly which leaks to plug first.',
    ],
    backgroundColor: 'bg-alt',
    cssPrefix: 'real-estate-services-service-environments',
  };

  const processData = {
    badge: 'How It Gets Put In Place',
    title: 'No big rebuild. Plug the worst leak first.',
    description:
      'We don’t arrive with a six-month plan. We find the bit costing you the most deals right now and start there.',
    steps: [
      {
        number: '01',
        title: 'Walk us through how the business runs',
        description:
          'A short conversation. Where the enquiries come in, what happens when you’re on a viewing or in a loft, where the silence sits.',
      },
      {
        number: '02',
        title: 'We point at the worst leak',
        description:
          'Sometimes it’s portal enquiries. Sometimes it’s the booking thread. Sometimes it’s vendor nurture. We tell you which.',
      },
      {
        number: '03',
        title: 'We plug it without scrapping anything',
        description:
          'Your CRM, your portals, your reporting tool stays. We add the bits that catch what’s currently slipping through.',
      },
      {
        number: '04',
        title: 'We move to the next leak',
        description:
          'When the first one is steady, we look at the next. Each step pays for the one after it.',
      },
    ],
    columns: 4 as const,
    backgroundColor: 'bg-base',
    cssPrefix: 'real-estate-services-process',
  };

  const detailRoutesData = {
    badge: 'Pick The One Closest To You',
    title: 'Each one shows the specific leaks for that kind of business',
    description:
      'Same category logic. Different rhythms, different leaks, different first fix.',
    items: [
      {
        title: 'Estate agents',
        description:
          'Where Friday-night Rightmove enquiries go to whoever booked the Saturday viewing first. Where vendor leads go quiet for six months.',
        href: '/industries/real-estate-property-services/realtors',
        icon: Landmark,
      },
      {
        title: 'Property managers',
        description:
          'Where landlord portfolio enquiries get buried behind tenant complaints. Where owner reports eat half a day.',
        href: '/industries/real-estate-property-services/property-managers',
        icon: Users,
      },
      {
        title: 'Home inspectors',
        description:
          'Where agent calls go to voicemail while you’re in a loft. Where post-report remediation work goes cold.',
        href: '/industries/real-estate-property-services/home-inspectors',
        icon: Home,
      },
      {
        title: 'Mortgage brokers',
        description:
          'Where rate-window enquiries go to whoever replied first. Where remortgage clients drift to comparison sites.',
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
      title: 'Real Estate & Property Services — Stop Losing Enquiries, Bookings & Vendor Trust | MindWP',
      description:
        'For estate agents, property managers, home inspectors, and mortgage brokers where Sunday-night enquiries go to whoever replied first, where bookings take five emails, and where pipeline leads instruct elsewhere. We put the system in place that catches them.',
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
      title: 'Tell us where the pipeline is leaking',
      description:
        'If portal enquiries get late replies, if bookings take five emails to confirm, or if vendor and borrower leads go silent for months — walk us through how the business runs and we’ll show you the first thing worth fixing.',
    },
  };
}

export const realEstatePropertyServicesIndustryPageData: IndustryPageData =
  buildRealEstatePropertyServicesIndustryPageData();
