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
    badge: 'For Automotive Service Businesses',
    title: 'The Bay Is Full. The Phone Is Ringing. The Quote Hasn’t Been Chased.',
    description:
      'Repair shops, mobile mechanics, body shops, detailers — most don’t lose work because the work is bad. They lose it in the gaps. Calls that go to voicemail. Quotes that go quiet. Reviews nobody asked for. We put the system in place that catches it.',
    list: [
      'Calls missed during jobs',
      'Quotes that go cold',
      'Out-of-area enquiries that waste the day',
      'Reviews that never get asked for',
    ],
    cssPrefix: 'automotive-services-hero',
  };

  const imageStripData = {
    badge: 'How The Work Comes In',
    title: 'The hands-on work is fine. The mess is everything around it.',
    description:
      'Calls land mid-job. Estimates need a chase. Bookings need a confirmation. Reviews need an ask. Most automotive businesses already have the demand — they just need a way to stop it slipping through while the team is on the tools.',
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
    badge: 'Where The Work Slips',
    title: 'The same handful of leaks shows up in nearly every automotive business',
    description:
      'Different shops, same patterns — the bay’s full, the phone goes, and somebody quietly gets booked elsewhere.',
    benefits: [
      {
        icon: AlertCircle,
        title: 'The phone rings while everyone’s under a bonnet',
        description:
          'Three missed calls before lunch. Two of them already booked someone who answered.',
        iconType: 'primary' as const,
      },
      {
        icon: Clock3,
        title: 'Quotes go out and never get chased',
        description:
          'Estimate sent Tuesday. By Friday nobody’s rung them back. The job either rings you or quietly goes elsewhere.',
        iconType: 'secondary' as const,
      },
      {
        icon: MapPinned,
        title: 'The competitor down the road has eighty reviews. You have eleven.',
        description:
          'Plenty of happy customers. Almost none of them ever wrote anything. Locally you look quieter than you actually are.',
        iconType: 'accent' as const,
      },
      {
        icon: MessageSquare,
        title: 'More work coming in just makes the admin worse',
        description:
          'The marketing works. Then the front desk drowns. Reply times get worse, not better.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to catch every enquiry, book the work, and turn jobs into proof',
    description:
      'Each piece does one job. Together they stop work from slipping while the team is on the tools.',
    featureCategories: [
      {
        title: 'Catch every call and message in one place',
        description:
          'Calls, forms, web chat, missed calls, DMs — all land somewhere the team actually checks.',
        icon: MessageSquare,
        features: [
          'Missed-call text-back inside a minute',
          'One inbox for every channel',
          'Vehicle and fault captured up front',
        ],
      },
      {
        title: 'Get the booking confirmed without phone tag',
        description:
          'Slots customers can pick. Confirmations and reminders that fire on their own. Cars that actually turn up.',
        icon: Calendar,
        features: [
          'Self-serve booking that fits how you run',
          'Reminders the day before',
          'Cleaner front-desk-to-workshop handover',
        ],
      },
      {
        title: 'Keep the workshop and the office in sync',
        description:
          'Everyone sees what’s booked, what’s waiting on a quote, and what’s ready for handover.',
        icon: Wrench,
        features: [
          'Live view of every open job',
          'Service path attached to each enquiry',
          'Less “did anyone ring them back?”',
        ],
      },
      {
        title: 'Turn finished jobs into reviews you can show',
        description:
          'A review request goes out at the right moment. Your reputation finally catches up to the work.',
        icon: Star,
        features: [
          'Review requests after every job',
          'Asked when customers are happiest',
          'More five-stars where local people search',
        ],
      },
      {
        title: 'Show up when local drivers search for the work you do',
        description:
          'Service pages, Google profile, local listings — lined up so the right people find you instead of the next garage.',
        icon: Search,
        features: [
          'Pages for the work you actually do',
          'Found on Maps for local searches',
          'Service-area visibility that compounds',
        ],
      },
      {
        title: 'Stop quotes from going cold',
        description:
          'Pending estimates, missed enquiries, and old leads get a polite chase on their own.',
        icon: Shield,
        features: [
          'Quotes followed up automatically',
          'Old enquiries warmed up instead of forgotten',
          'Repeat-service nudges at the right interval',
        ],
      },
    ],
    columns: 3 as const,
  };

  const spectrumData = {
    badge: 'Different Shapes, Same Leaks',
    title: 'A workshop, a van, and a detailing unit don’t look the same — but the gaps usually are',
    description:
      'Owner-led garages, team workshops, mobile operators — different setups, but the friction lives in similar places.',
    cards: [
      {
        title: 'Owner-led garages',
        description:
          'One pair of hands does most of it. The phone going during a brake job is the single biggest leak.',
        points: [
          'Calls missed mid-job',
          'Quotes never followed up',
          'Reviews barely asked for',
        ],
      },
      {
        title: 'Workshop teams',
        description:
          'More hands, more handoffs. Things slip in the gap between the front desk, the workshop, and the customer.',
        points: [
          'Bookings that nobody confirmed',
          'Quotes sitting in someone’s email',
          '“Who was supposed to ring them?”',
        ],
        featured: true,
      },
      {
        title: 'Mobile and specialist operators',
        description:
          'No workshop sign on the road, so the website and Google profile are the storefront — and they have to do real work.',
        points: [
          'Out-of-area enquiries that eat the day',
          'Trust that has to be built before the call',
          'Arrival timing that depends on memory',
        ],
      },
    ],
    backgroundColor: 'bg-alt',
    cssPrefix: 'automotive-services-spectrum',
  };

  const decisionChecklistData = {
    badge: 'Sound Familiar?',
    title: 'A few signs this is worth looking at properly',
    description:
      'If most of these ring true, the leak is bigger than another marketing tweak will fix.',
    items: [
      'Calls go to voicemail more days than not, and the callback happens hours later',
      'Estimates go out and you don’t really know which ones got chased',
      'Reviews online don’t reflect how the actual work compares to the competition',
      '“Did anyone ring them back?” gets asked more than once a week',
      'You’ve spent on ads or SEO before but enquiries still drop on the floor',
      'More demand just makes the front desk feel worse, not better',
    ],
    columns: 2 as const,
    backgroundColor: 'bg-base',
    cssPrefix: 'automotive-services-decision-checklist',
  };

  const serviceEnvironmentsData = {
    badge: 'How You Actually Work',
    title: 'A workshop, a team, and a van each break in different places',
    description:
      'A repair shop and a mobile mechanic and a detailer all do good work — but the moment things slip is different in each one. That’s where the system has to be shaped.',
    features: [
      {
        title: 'Workshop-led repair',
        description:
          'Calls land mid-job, quotes need chasing, the front desk gets buried when the bays are full.',
        icon: Car,
      },
      {
        title: 'Team-based operation',
        description:
          'Handoffs between the person taking the call, the person quoting, and the person doing the work.',
        icon: Users,
      },
      {
        title: 'Mobile or appearance-led',
        description:
          'No shopfront. The website and Google profile do the trust work — plus arrival timing matters.',
        icon: Sparkles,
      },
    ],
    tagline: 'Same category, different bottlenecks',
    narrativeTitle: 'Why we look at the shape of the business first',
    narrativeParagraphs: [
      'Before any change is made, we look at how enquiries actually arrive, who handles them, and where they currently slip. That’s usually obvious within a short conversation.',
      'From there, the right next step — catching calls, sorting bookings, chasing quotes, building reviews — becomes obvious instead of generic.',
    ],
    backgroundColor: 'bg-alt',
    cssPrefix: 'automotive-services-service-environments',
  };

  const processData = {
    badge: 'How We Get Started',
    title: 'How a typical conversation moves from “we’re losing work” to “we’ve stopped losing work”',
    description:
      'Nothing fancy. We look at how the business actually runs, then put the missing pieces in place in the order that helps most.',
    steps: [
      {
        number: '01',
        title: 'We look at how enquiries arrive now',
        description:
          'Calls, forms, DMs, walk-ins. Where they go, who sees them, who replies.',
      },
      {
        number: '02',
        title: 'We map where work is slipping',
        description:
          'No pitch deck. A short, honest list of what’s breaking and what it’s costing.',
      },
      {
        number: '03',
        title: 'The biggest leak gets fixed first',
        description:
          'Missed calls, dead quotes, no-shows, missing reviews — whichever is bleeding the most work.',
      },
      {
        number: '04',
        title: 'It runs while the team is on the tools',
        description:
          'Replies, reminders, reviews, follow-up. Going on their own while the workshop runs the workshop.',
      },
    ],
    columns: 4 as const,
    backgroundColor: 'bg-base',
    cssPrefix: 'automotive-services-process',
  };

  const detailRoutesData = {
    badge: 'By Type Of Shop',
    title: 'Pick the one closest to how you run',
    description:
      'Same category, different bottlenecks. These pages get into the specifics for each kind of automotive business.',
    items: [
      {
        title: 'Auto Repair',
        description:
          'For shops where calls go missing mid-job, estimates go quiet, and reviews never get asked for.',
        href: '/industries/automotive-services/auto-repair',
        icon: Wrench,
      },
      {
        title: 'Car Detailing',
        description:
          'For detailers losing Saturdays to slow DMs, no-shows, and regulars who quietly stopped coming.',
        href: '/industries/automotive-services/car-detailing',
        icon: Sparkles,
      },
      {
        title: 'Mobile Mechanics',
        description:
          'For van-based mechanics whose day is run from the glovebox — missed calls, out-of-area enquiries, arrival texts.',
        href: '/industries/automotive-services/mobile-mechanics',
        icon: Car,
      },
      {
        title: 'Body Shops',
        description:
          'For body shops losing quotes to whoever replies first — photos sat unread, estimates that went cold.',
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
      title: 'Automotive Service Businesses — Stop Losing Calls, Quotes, and Reviews | MindWP',
      description:
        'For repair shops, mobile mechanics, body shops, and detailers where calls get missed, quotes go quiet, and reviews never get asked for. We put the routing, follow-up, and local visibility in place so the work already coming in actually books.',
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
      title: 'Tell us where the work is slipping',
      description:
        'If calls go missing, quotes go quiet, or reviews never get asked for — walk us through how the shop runs and we’ll show you the first thing worth fixing.',
    },
  };
}

export const automotiveServicesIndustryPageData: IndustryPageData =
  buildAutomotiveServicesIndustryPageData();
