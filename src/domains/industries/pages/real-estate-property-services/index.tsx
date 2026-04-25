import {
  AlarmClock,
  Banknote,
  Building2,
  CalendarRange,
  ClipboardList,
  Clock,
  HardHat,
  Home,
  MessageSquare,
  RotateCcw,
  Search,
  ShieldCheck,
  Star,
  Timer,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildRealEstatePropertyServicesIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'Property Services',
    title: 'Property Work Is Won In Minutes And Lost In Months. Both Halves Are Pipeline.',
    description:
      "Realtors, property managers, mortgage brokers, and inspectors all work on somebody else's timing. The first reply opens the conversation, the later follow-up keeps it moving, and most of the loss happens in the long stretch between those two points.",
    list: ['Late replies', 'Cold follow-up', 'Silent updates'],
    cssPrefix: 'real-estate-property-services-hero',
  };

  const operatingPatternsData = {
    badge: 'Three Patterns Across The Category',
    title: 'Different roles, the same three windows that decide everything',
    description:
      'Whether the enquiry comes from a buyer, landlord, borrower, tenant, or agent, the same three timing windows keep deciding the result. The roles differ, but the leak usually appears in the same places.',
    benefits: [
      {
        icon: Timer,
        title: 'The first-response window is shorter than anyone admits',
        description:
          'Buyers, landlords, and borrowers usually contact more than one firm at once, even if they do not say so. The first reply that feels personal and timely usually holds the conversation before the rest can catch up.',
        iconType: 'primary' as const,
      },
      {
        icon: ClipboardList,
        title: "Pipeline memory lives in someone's head",
        description:
          '"Looking in spring" buyers, stalled approvals, agents who used you once, landlords who said "call me next month" — all too easy to lose by the next quiet week. A lot of repeat work goes to whoever remembered the moment, not whoever was better.',
        iconType: 'secondary' as const,
      },
      {
        icon: RotateCcw,
        title: 'Silence after the work breaks the next referral',
        description:
          'No update, no closing touch, no review request, no reason to remember you at the next decision point. The relationship that should pay back for years can go quiet the day the job is finished.',
        iconType: 'accent' as const,
      },
    ],
    columns: 3 as const,
  };

  const decisionChecklistData = {
    badge: 'Quietly Familiar?',
    title: 'A few signs the leak is timing and follow-up, not lead volume',
    description:
      'If most of these feel familiar, the issue is probably not raw lead volume on its own. It is what happens after the first contact and before the next decision gets made.',
    items: [
      'Enquiries arrive while you are mid-viewing, mid-inspection, or out of hours',
      'Portal or website forms get a reply slower than the buyer expects',
      'Old leads, stalled cases, or "looking later" buyers are never circled back to',
      'Past clients only hear from you when something is wrong',
      'Reviews online do not match the volume of completed work',
      "Pipeline visibility lives in a notebook, an inbox, or someone's memory",
    ],
    columns: 2 as const,
    backgroundColor: 'bg-base',
    cssPrefix: 'real-estate-property-services-decision-checklist',
  };

  const spectrumData = {
    badge: 'Where Property Firms Sit',
    title: 'Same category, four very different shapes of pipeline',
    description:
      'From the outside these businesses can look similar, but the timing pressure is not. Each practice loses work in a slightly different place once the first enquiry has arrived.',
    cards: [
      {
        title: 'Speed-of-response practices',
        description:
          'Estate agents and mortgage brokers where the seven-minute window after a portal lead decides the entire deal.',
        points: [
          'Portal leads going to whoever rings first',
          'Weekend enquiries lost by Monday morning',
          'Mid-viewing missed calls turning cold',
        ],
      },
      {
        title: 'Reliability-of-update practices',
        description:
          'Property managers where landlords and tenants leave because nobody told them what was happening, not because the work was bad.',
        points: [
          'Landlords chasing for portfolio updates',
          'Tenants left wondering on maintenance tickets',
          'Renewal windows missed before notice arrives',
        ],
        featured: true,
      },
      {
        title: 'Calendar-window practices',
        description:
          "Home inspectors and surveyors where the booking has to happen inside someone else's deadline or it disappears.",
        points: [
          'Booking windows that close in days',
          'Missed calls during on-site work',
          'Referring agents lost to silence after delivery',
        ],
      },
    ],
    backgroundColor: 'bg-alt',
    cssPrefix: 'real-estate-property-services-spectrum',
  };

  const systemLayersData = {
    badge: 'What We Put In Place',
    title: 'Win the first window, then hold the relationship through every quiet month',
    description:
      'You keep doing the work itself. The parts that decide whether an enquiry becomes a deal, and whether a deal turns into a referral or repeat instruction, stop depending on whoever happens to be free at the time.',
    featureCategories: [
      {
        title: 'Be the first response, every time',
        description:
          'Web forms, portal leads, missed calls, and out-of-hours enquiries all get a reply that feels personal within minutes. That holds the enquiry until the real conversation can start properly.',
        icon: MessageSquare,
        features: [
          'Same-hour acknowledgement, in your voice',
          'Out-of-hours and weekend coverage',
          'Lead held until a person can call back',
        ],
      },
      {
        title: 'Hold the pipeline you keep forgetting',
        description:
          'Old buyers, stalled cases, agents who used you once, and past landlords all stay visible instead of fading into memory. Nudges land on a sensible cycle so the next decision does not happen without you.',
        icon: Clock,
        features: [
          'Stale leads surfaced before competitors call them',
          'Stage-aware nudges for in-flight cases',
          'Past clients re-touched at the right moment',
        ],
      },
      {
        title: 'Keep clients and agents in the loop without extra calls',
        description:
          'Status updates go out as bookings, inspections, cases, or maintenance tickets move forward. That cuts down the chasing and makes the whole experience feel steadier to everyone involved.',
        icon: CalendarRange,
        features: [
          'Auto-updates on every status change',
          'Standard cadence per relationship type',
          'Tenant, landlord, and agent satisfaction tracked',
        ],
      },
      {
        title: 'Turn completed work into proof',
        description:
          'A review request lands at completion, exchange, or report delivery while the relief is still fresh. That helps the visible proof catch up to the number of deals and instructions already being completed.',
        icon: ShieldCheck,
        features: [
          'Asked once, at the right point',
          'Tone matched to the relationship',
          'Reviews catch up to the volume of work',
        ],
      },
      {
        title: 'Be findable for the work you actually want',
        description:
          'Your pages and Google profile line up around postcode, property type, buyer need, or inspection type instead of sounding generic. That makes it easier to be visible at the exact decision moment that matters most.',
        icon: Search,
        features: [
          'Found for area + service type',
          'Profiles vendors, landlords, and buyers trust',
          'Less time on enquiries that are not a fit',
        ],
      },
    ],
    columns: 3 as const,
  };

  const detailRoutesData = {
    badge: 'By Practice Type',
    title: 'Pick the one closest to how you actually run',
    description:
      'Same category, different timing windows. Each page stays close to a specific kind of property practice, so you can jump straight to the version that sounds most like your week.',
    items: [
      {
        title: 'Realtors & Estate Agents',
        description:
          'For agents where viewing requests, portal leads, and missed calls cool off fast if the reply slips even a little too far.',
        href: '/industries/real-estate-property-services/realtors',
        icon: Home,
      },
      {
        title: 'Property Managers',
        description:
          'For agencies where landlords lose confidence after slow replies or missing updates, and tenant communication starts breaking trust on both sides.',
        href: '/industries/real-estate-property-services/property-managers',
        icon: Building2,
      },
      {
        title: 'Mortgage Brokers',
        description:
          'For brokers where the case often goes to the person who answered fastest when an offer was live or an approval was needed the same day.',
        href: '/industries/real-estate-property-services/mortgage-brokers',
        icon: Banknote,
      },
      {
        title: 'Home Inspectors',
        description:
          'For inspectors where the booking window is tied to offer deadlines, survey dates, and agent coordination that can disappear inside a few days.',
        href: '/industries/real-estate-property-services/home-inspectors',
        icon: HardHat,
      },
    ],
    backgroundColor: 'bg-muted/20',
    cssPrefix: 'real-estate-property-services-detail-routes',
    styleVariant: 'style1' as const,
  };

  const exploreData = {
    badge: 'Related',
    description:
      'These are the supporting services that keep coming up across the whole category. They all reinforce timing, follow-up, and visibility from slightly different angles.',
    cards: [
      {
        icon: AlarmClock,
        title: 'Smart Website Systems',
        description:
          'Helps you be the first response even when somebody is mid-viewing, on-site, or away from the desk when the enquiry lands.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Clock,
        title: 'CRM & Pipeline Memory',
        description:
          'Keeps old buyers, stalled cases, and past clients visible so the next useful follow-up does not depend on memory or luck.',
        href: '/services/crm-infrastructure-implementation',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description:
          'Gets reviews out often enough that the visible proof starts matching the actual volume of completed work and satisfied clients.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description:
          'Makes it easier to be found for the area and service type you actually cover, not just as another generic property name in the results.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  return {
    seo: {
      title: 'Real Estate & Property Services — Win The First Minute, Hold The Pipeline | MindWP',
      description:
        'For realtors, property managers, mortgage brokers, and inspectors where the leak is in the first-response window and the long pipeline that follows. We put first-minute response, pipeline memory, and follow-up in place across the category.',
      canonical: '/industries/real-estate-property-services',
    },
    slug: 'real-estate-property-services',
    type: 'category',
    category: 'real-estate-property-services',
    systems: [
      'smart-website-systems',
      'crm-automation',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['lead-response-time', 'follow-up', 'pipeline-visibility', 'review-generation'],
    industries: ['home-inspection', 'mortgage-broker', 'property-management', 'realtor'],
    hero: heroData,
    operatingPatterns: operatingPatternsData,
    decisionChecklist: decisionChecklistData,
    spectrum: spectrumData,
    systemLayers: systemLayersData,
    detailRoutes: detailRoutesData,
    explore: exploreData,
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
        'If first responses slip, follow-up goes quiet, or old enquiries never get remembered at the right moment, walk us through the last few weeks and we will show you which window is costing the most work.',
    },
  };
}

export const realEstatePropertyServicesIndustryPageData: IndustryPageData =
  buildRealEstatePropertyServicesIndustryPageData();
