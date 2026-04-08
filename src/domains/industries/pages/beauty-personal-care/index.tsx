import {
  AlertCircle,
  Bell,
  Calendar,
  Clock3,
  HeartPulse,
  Home,
  MapPinned,
  MessageSquare,
  Phone,
  Search,
  Sparkles,
  Star,
  Store,
  Users,
  Workflow,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';
import { buildContactHref } from '@/lib/contact/contactHref';

function buildBeautyPersonalCareIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'Expansion Lane',
    title: 'Smart Website Systems for Beauty & Personal Care',
    description:
      'Beauty and personal care runs on timing, trust, and repeat visits. The system holds booking together first, then layers reminders, follow-up, visibility, and client records around it.',
    primaryAction: {
      label: 'Book More Client Appointments',
      href: buildContactHref({
        system: 'smart-website-systems',
        sourceType: 'industry',
        slug: 'beauty-personal-care',
      }),
    },
    secondaryAction: {
      label: 'See Smart Website Systems',
      href: '/services/smart-website-systems',
    },
    list: [
      'Booking flow clarity',
      'Fewer interruption points',
      'Stronger repeat follow-up',
      'Local trust support',
    ],
    cssPrefix: 'beauty-personal-care-hero',
  };

  const imageStripData = {
    badge: 'Category Reality',
    title: 'The day moves faster than the systems behind it',
    description:
      'Appointments, consultations, room turnover, client messages, reviews, and rebooking all compete for attention at once — and they rarely wait for the team to finish what they are doing.',
    items: [
      {
        title: 'Solo treatment rooms',
        image: '/images/placeholders/service-card-1.svg',
        alt: 'Abstract placeholder image representing a solo beauty treatment room',
      },
      {
        title: 'Growing salon teams',
        image: '/images/placeholders/service-card-2.svg',
        alt: 'Abstract placeholder image representing a growing salon team',
      },
      {
        title: 'High-frequency rebooking',
        image: '/images/placeholders/service-card-3.svg',
        alt: 'Abstract placeholder image representing recurring beauty appointments',
      },
      {
        title: 'Multi-step client journeys',
        image: '/images/placeholders/service-card-4.svg',
        alt: 'Abstract placeholder image representing a multi-step client journey',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'beauty-personal-care-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Operating Patterns',
    title: 'Where the pressure shows up first',
    description:
      'Day-to-day strain comes from coordination gaps, not effort. These patterns appear across salons, studios, spas, and treatment-led businesses.',
    benefits: [
      {
        icon: AlertCircle,
        title: 'No-show and late-change gaps',
        description:
          'Unconfirmed appointments and last-minute changes leave empty space in the calendar and make capacity harder to trust.',
        iconType: 'primary' as const,
      },
      {
        icon: Phone,
        title: 'Front-desk interruption loops',
        description:
          'Calls, DMs, and booking questions often hit while the team is already in session, creating broken attention and delayed responses.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Follow-up that depends on memory',
        description:
          'Review requests, rebooking nudges, consultation reminders, and check-ins often happen inconsistently when they rely on manual effort.',
        iconType: 'accent' as const,
      },
      {
        icon: MapPinned,
        title: 'Visibility split across too many channels',
        description:
          'Google Business Profile, service pages, reviews, socials, and maps presence often drift apart, which weakens trust and discovery.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'System Architecture',
    title: 'What the operating system needs to cover',
    description:
      'These are the working layers that keep beauty operations steady — from first enquiry through repeat visit.',
    featureCategories: [
      {
        title: 'Booking and intake layer',
        description:
          'Handles appointment requests, service selection, consultation forms, and calendar coordination.',
        icon: Calendar,
        features: [
          '24/7 booking access',
          'Service-specific intake',
          'Calendar sync and buffer control',
        ],
      },
      {
        title: 'Confirmation and reminder layer',
        description: 'Protects the diary with confirmation touchpoints and timely reminders.',
        icon: Bell,
        features: [
          'SMS and email reminders',
          'Confirmation touchpoints',
          'Late-change friction reduction',
        ],
      },
      {
        title: 'Client record layer',
        description:
          'Keeps preferences, visit history, notes, and consent details accessible without slowing the team.',
        icon: Users,
        features: [
          'Client notes and history',
          'Preference tracking',
          'Better repeat visit context',
        ],
      },
      {
        title: 'Response and enquiry layer',
        description:
          'Gives common questions and booking intent a faster response path when the team is mid-session.',
        icon: MessageSquare,
        features: [
          'FAQ and booking replies',
          'Missed-message recovery',
          'After-hours response support',
        ],
      },
      {
        title: 'Reputation and review layer',
        description: 'Turns good service into steady reviews so trust compounds between visits.',
        icon: Star,
        features: [
          'Review request automation',
          'Reputation monitoring',
          'Trust-building follow-up',
        ],
      },
      {
        title: 'Local visibility layer',
        description:
          'Connects maps, search, and service pages so they reinforce each other instead of drifting apart.',
        icon: Search,
        features: [
          'Google Business Profile support',
          'Service-page alignment',
          'Location-led discovery',
        ],
      },
    ],
    columns: 3 as const,
  };

  const decisionChecklistData = {
    badge: 'When Category Work Matters',
    title: 'Signs the business needs system-level thinking',
    description:
      'Isolated fixes stop helping at this stage. The business needs category-wide structure before individual workflows perform properly.',
    items: [
      'Different services are being promoted, but booking and follow-up still run through one unclear process',
      'The team answers the same questions across calls, messages, and forms every week',
      'Reviews, visibility, and repeat-booking efforts exist, but they are not reinforcing each other',
      'Growth is adding admin pressure faster than it is adding operating clarity',
      'New detail pages are needed, but the category logic behind them is still undefined',
      'The business needs one system direction that can support multiple treatment or service paths',
    ],
    columns: 2 as const,
    backgroundColor: 'bg-base',
    cssPrefix: 'beauty-personal-care-decision-checklist',
  };

  const serviceEnvironmentsData = {
    badge: 'Service Environments',
    title: 'Different environments, different system needs',
    description:
      'The operating environment changes what the system needs. A solo room, a busy salon floor, and a treatment-led care setting break in different places.',
    features: [
      {
        title: 'Solo studio environment',
        description:
          'Fewer tools, but booking, prep, and follow-up paths need to be tighter — the provider handles everything alone.',
        icon: Home,
      },
      {
        title: 'Multi-staff salon environment',
        description:
          'Role handoffs, calendar coordination, and client records become critical — the experience needs to stay consistent across multiple staff.',
        icon: Store,
      },
      {
        title: 'Treatment-led wellness environment',
        description:
          'Trust, suitability, and client education carry more weight here. The system needs to guide before and after the appointment, not just during booking.',
        icon: HeartPulse,
      },
    ],
    tagline: 'Category context before workflow depth',
    narrativeTitle: 'Environment shapes the system, not the other way around',
    narrativeParagraphs: [
      'Understanding which environment the business operates in helps define which system layers matter most. A solo lash artist and a multi-chair salon face different coordination problems.',
      'Once the environment is clear, the system can go deeper into specific workflows — booking, preparation, reminders, reviews, and repeat-visit handling.',
    ],
    backgroundColor: 'bg-alt',
    cssPrefix: 'beauty-personal-care-service-environments',
  };

  const spectrumData = {
    badge: 'Business Shapes',
    title: 'The category covers different operating models, not one fixed setup',
    description:
      'Beauty and personal care is a broad category. The system shape changes depending on booking volume, team structure, service complexity, and how much repeat care sits behind the appointment.',
    cards: [
      {
        title: 'Solo practitioners',
        description:
          'Service clarity and self-service booking matter most. Follow-up should happen without adding admin weight.',
        points: ['Low admin capacity', 'Fast reply pressure', 'Need for clear service information'],
      },
      {
        title: 'Growing salon teams',
        description:
          'Coordination pressure rises — staff calendars, front-desk interruptions, client records, and reviews all need tighter structure.',
        points: [
          'Shared scheduling logic',
          'More handoffs between people',
          'Repeat visit coordination',
        ],
        featured: true,
      },
      {
        title: 'Treatment-led wellness businesses',
        description:
          'Client journeys are longer. The system needs to build trust before and after each appointment, not just at the point of booking.',
        points: [
          'More education around services',
          'Longer nurture or follow-up cycles',
          'Higher trust requirement before booking',
        ],
      },
    ],
    backgroundColor: 'bg-alt',
    cssPrefix: 'beauty-personal-care-spectrum',
  };

  const processData = {
    badge: 'Tier 1 Layering',
    title: 'How Smart Website structure expands into category-specific workflows',
    description:
      'Once the category system is clear, the page can route visitors into the right workflow while keeping Smart Website structure as the main operating layer.',
    steps: [
      {
        number: '01',
        title: 'Frame the Smart Website core',
        description:
          'Establish the booking and conversion structure that holds the whole category together.',
      },
      {
        number: '02',
        title: 'Show the operating shapes',
        description:
          'Show how solo providers, team-led salons, and wellness environments differ so visitors place themselves quickly.',
      },
      {
        number: '03',
        title: 'Layer the supporting systems',
        description:
          'Connect communication, client records, reputation, and visibility support around the core layer.',
      },
      {
        number: '04',
        title: 'Route into detail pages',
        description:
          'Guide visitors into the specific treatment or service workflow that fits their situation.',
      },
    ],
    columns: 4 as const,
    backgroundColor: 'bg-base',
    cssPrefix: 'beauty-personal-care-process',
  };

  const detailRoutesData = {
    badge: 'Sub-Industry Workflow',
    title: 'Mapped workflows in this category',
    description:
      'Each detail page maps a specific operating path — consultation handling, booking, reminders, follow-up, and visibility — for a real service environment.',
    items: [
      {
        title: 'Aesthetic & Cosmetic Clinics',
        description:
          'Consultation flow, booking coordination, preparation, aftercare, and local trust for clinics offering aesthetic and cosmetic treatments.',
        href: '/industries/beauty-personal-care/aesthetic-cosmetic-clinics',
        icon: HeartPulse,
      },
      {
        title: 'Hair Salons',
        description:
          'Service selection, appointment handling, reminders, reviews, and repeat-visit support for salons.',
        href: '/industries/beauty-personal-care/hair-salons',
        icon: Store,
      },
      {
        title: 'Nail Salons',
        description:
          'Service options, appointment timing, reminders, reviews, and repeat-booking support for nail salons.',
        href: '/industries/beauty-personal-care/nail-salons',
        icon: Sparkles,
      },
      {
        title: 'Small Med Spas',
        description:
          'Consultation trust, treatment coordination, booking, aftercare, and review support for small med spas.',
        href: '/industries/beauty-personal-care/small-med-spas',
        icon: HeartPulse,
      },
      {
        title: 'Lash Lift & Extensions',
        description:
          'Appointment flow, consultation handling, reminders, review collection, and local discovery for lash providers.',
        href: '/industries/beauty-personal-care/lash-lift-and-extensions',
        icon: Workflow,
      },
    ],
    backgroundColor: 'bg-muted/20',
    cssPrefix: 'beauty-detail-routes',
    ctaLabel: 'View Page',
    styleVariant: 'style1' as const,
  };

  return {
    slug: 'beauty-personal-care',
    type: 'category',
    category: 'beauty-personal-care',
    systems: [
      'smart-website-systems',
      'crm-automation',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['booking-systems', 'review-generation', 'booking-automation', 'client-reactivation'],
    industries: ['aesthetic-clinic', 'hair-salon', 'nail-salon', 'med-spa', 'lash-extensions'],
    seo: {
      title: 'Beauty & Personal Care Operations Systems | MindWP',
      description:
        'Operational infrastructure for salons, clinics, spas, lash artists, and beauty teams covering booking, reminders, follow-up, reputation, and local visibility.',
      keywords: [
        'beauty personal care systems',
        'salon booking automation',
        'spa crm workflow',
        'beauty business operating systems',
        'wellness local visibility systems',
      ],
      canonical: '/industries/beauty-personal-care',
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
      title: 'Map the system around how your business runs',
      description:
        'If booking and follow-up feel inconsistent, we can show you how to turn more enquiries into repeat appointments.',
      primaryAction: {
        label: 'Book More Client Appointments',
        href: buildContactHref({
          system: 'smart-website-systems',
          sourceType: 'industry',
          slug: 'beauty-personal-care',
        }),
      },
      secondaryAction: {
        label: 'See Smart Website Systems',
        href: '/services/smart-website-systems',
      },
    },
  };
}

export const beautyPersonalCareIndustryPageData: IndustryPageData =
  buildBeautyPersonalCareIndustryPageData();
