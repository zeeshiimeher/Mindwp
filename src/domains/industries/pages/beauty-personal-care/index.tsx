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

function buildBeautyPersonalCareIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Salons, Clinics, and Solo Beauty Pros',
    title: 'You’re On The Floor. The Phone’s Ringing. The DMs Are Backing Up.',
    description:
      'Salons, nail bars, lash studios, med spas, aesthetic clinics — different services, same leaks. Late-night DMs nobody answered. Quiet midweek slots nobody filled. Reviews nobody asked for. We put the system in place that catches every booking before it walks past you.',
    list: [
      'DMs that go unanswered after hours',
      'No-shows nobody reminded',
      'Empty slots nobody offered out',
      'Regulars who quietly stopped rebooking',
    ],
    cssPrefix: 'beauty-personal-care-hero',
  };

  const imageStripData = {
    badge: 'How Bookings Actually Happen',
    title: 'The treatment is fine. The bit between the DM and the diary is where it goes wrong.',
    description:
      'A late-night Instagram DM. A missed call between clients. A WhatsApp asking about prices. People decide quickly. Whoever replies first usually gets the booking.',
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
    badge: 'Where The Bookings Slip',
    title: 'Same handful of leaks in nearly every beauty business',
    description:
      'Different services, similar gaps. Once you see them, you can’t unsee them.',
    benefits: [
      {
        icon: AlertCircle,
        title: 'A no-show on a peak Saturday slot',
        description:
          'Two hours of the chair, gone. No deposit, no reminder, no waitlist to fill it.',
        iconType: 'primary' as const,
      },
      {
        icon: Phone,
        title: 'The phone goes mid-treatment, ten times a day',
        description:
          'You can’t answer. They don’t leave a message. They book wherever they get through next.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Reviews and rebookings happen by accident',
        description:
          'Hundreds of happy clients, almost no one ever asked. Quiet weeks nobody nudged regulars about.',
        iconType: 'accent' as const,
      },
      {
        icon: MapPinned,
        title: 'The salon two streets over has 600 reviews. You have 38.',
        description:
          'Your work is better. Locally you look quieter than you actually are.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to catch enquiries, fill the diary, and bring clients back',
    description:
      'Each piece does one job. Together they keep the day running while the team is on the floor.',
    featureCategories: [
      {
        title: 'Let clients book themselves without phone tag',
        description:
          'They pick the service, the practitioner, the slot — and pay a deposit at the same time.',
        icon: Calendar,
        features: [
          'Online booking by service and provider',
          'Deposits taken at booking',
          'No more 20-message threads to lock in a slot',
        ],
      },
      {
        title: 'Send the reminders nobody has time to send',
        description:
          'A reminder the day before. A “see you in an hour” on the morning. No-shows drop without nagging.',
        icon: Bell,
        features: [
          'Reminders the day before and morning of',
          'Easy reschedule link instead of a no-show',
          'Cancellations re-offered to the waitlist',
        ],
      },
      {
        title: 'Keep client history without keeping it in your head',
        description:
          'Last visit, preferences, notes, allergies — there when you need them, without stopping the day.',
        icon: Users,
        features: [
          'Client notes and visit history',
          'Preferences saved automatically',
          'Repeat clients feel remembered',
        ],
      },
      {
        title: 'Reply to every DM and missed call inside a minute',
        description:
          'Late-night messages get an instant answer with prices, options, and a booking link.',
        icon: MessageSquare,
        features: [
          'Instant replies on Instagram, web, missed calls',
          'Pricing and service info answered up front',
          'Booking link in the same message',
        ],
      },
      {
        title: 'Turn finished appointments into reviews you can show',
        description:
          'A review request after every visit, at the moment people are most likely to leave one.',
        icon: Star,
        features: [
          'Review requests after every appointment',
          'Asked when clients are happiest',
          'Reviews that catch up to the work',
        ],
      },
      {
        title: 'Show up when local people search for what you do',
        description:
          'Service pages, Google profile, and local listings lined up so you appear before the salon up the road.',
        icon: Search,
        features: [
          'Pages for the services you actually offer',
          'Found on Maps for local searches',
          'Local visibility that compounds',
        ],
      },
    ],
    columns: 3 as const,
  };

  const decisionChecklistData = {
    badge: 'Sound Familiar?',
    title: 'A few signs this is worth looking at properly',
    description: 'If most of these ring true, the leak is bigger than another marketing tweak will fix.',
    items: [
      'DMs come in after hours and don’t get a reply until the next morning',
      'No-shows happen often enough that everybody has just accepted them',
      'The same questions get answered ten times a week across calls and messages',
      'Reviews online don’t reflect how the actual work compares locally',
      'Quiet midweek slots stay empty even though plenty of regulars would fill them',
      'More demand just makes the front desk feel worse, not better',
    ],
    columns: 2 as const,
    backgroundColor: 'bg-base',
    cssPrefix: 'beauty-personal-care-decision-checklist',
  };

  const serviceEnvironmentsData = {
    badge: 'How You Actually Work',
    title: 'A solo room, a busy salon floor, and a clinic each break in different places',
    description:
      'Different setups, different leaks. The bit that costs you the most work isn’t the same in a one-chair home studio as in a six-chair salon.',
    features: [
      {
        title: 'Solo room or home studio',
        description:
          'You’re working hands-on with one client at a time. The phone goes, the DMs back up, and there’s no front desk to catch it.',
        icon: Home,
      },
      {
        title: 'Salon team',
        description:
          'More chairs, more handoffs. Things slip in the gap between the booker, the practitioner, and the client.',
        icon: Store,
      },
      {
        title: 'Clinic or treatment-led',
        description:
          'Trust matters most. Pre-care, aftercare, and consultation follow-up have to land at the right moment.',
        icon: HeartPulse,
      },
    ],
    tagline: 'Same category, different bottlenecks',
    narrativeTitle: 'Why we look at the shape of the business first',
    narrativeParagraphs: [
      'Before any change is made, we look at how enquiries actually arrive, who handles them, and where they currently slip. That’s usually obvious within a short conversation.',
      'From there, the right next step — catching DMs, taking deposits, sending reminders, building reviews — becomes obvious instead of generic.',
    ],
    backgroundColor: 'bg-alt',
    cssPrefix: 'beauty-personal-care-service-environments',
  };

  const spectrumData = {
    badge: 'Different Shapes, Same Leaks',
    title: 'A solo room, a busy salon, and a clinic don’t look alike — but the gaps usually are',
    description:
      'Different setups, similar friction. Once you place yours, the right next step gets obvious.',
    cards: [
      {
        title: 'Solo practitioners',
        description:
          'One pair of hands. The phone going during a treatment is the single biggest leak.',
        points: [
          'DMs missed after hours',
          'Same prep info typed every week',
          'Reviews never asked for',
        ],
      },
      {
        title: 'Salon teams',
        description:
          'More hands, more handoffs. Things slip in the gap between front desk, practitioner, and client.',
        points: [
          'Bookings nobody confirmed',
          'No-shows on peak slots',
          '“Who was supposed to ring them?”',
        ],
        featured: true,
      },
      {
        title: 'Clinics and wellness',
        description:
          'Higher trust requirement. Consultation-to-treatment conversion is where most income leaks.',
        points: [
          'Consultations that never become treatments',
          'Aftercare sent when somebody remembers',
          'Review counts that don’t match the work',
        ],
      },
    ],
    backgroundColor: 'bg-alt',
    cssPrefix: 'beauty-personal-care-spectrum',
  };

  const processData = {
    badge: 'How We Get Started',
    title: 'How a typical conversation moves from “we’re losing bookings” to “we’ve stopped losing bookings”',
    description:
      'Nothing fancy. We look at how the business actually runs, then put the missing pieces in place in the order that helps most.',
    steps: [
      {
        number: '01',
        title: 'We look at how enquiries arrive now',
        description: 'DMs, calls, forms, walk-ins. Where they go, who sees them, who replies.',
      },
      {
        number: '02',
        title: 'We map where bookings are slipping',
        description: 'No pitch deck. A short, honest list of what’s breaking and what it’s costing.',
      },
      {
        number: '03',
        title: 'The biggest leak gets fixed first',
        description:
          'Missed DMs, no-shows, missing reviews, empty midweek — whichever is bleeding the most work.',
      },
      {
        number: '04',
        title: 'It runs while the team is on the floor',
        description:
          'Replies, reminders, reviews, follow-up. Going on their own while the salon runs the salon.',
      },
    ],
    columns: 4 as const,
    backgroundColor: 'bg-base',
    cssPrefix: 'beauty-personal-care-process',
  };

  const detailRoutesData = {
    badge: 'By Type Of Business',
    title: 'Pick the one closest to how you run',
    description:
      'Same category, different bottlenecks. These pages get into the specifics for each kind of business.',
    items: [
      {
        title: 'Aesthetic & Cosmetic Clinics',
        description:
          'For clinics where high-intent enquiries go cold and consultations don’t convert.',
        href: '/industries/beauty-personal-care/aesthetic-cosmetic-clinics',
        icon: HeartPulse,
      },
      {
        title: 'Hair Salons',
        description:
          'For salons whose late-night DMs sit until morning and Tuesdays sit empty.',
        href: '/industries/beauty-personal-care/hair-salons',
        icon: Store,
      },
      {
        title: 'Nail Salons',
        description:
          'For nail salons losing weekend bookings to whoever replied first.',
        href: '/industries/beauty-personal-care/nail-salons',
        icon: Sparkles,
      },
      {
        title: 'Small Med Spas',
        description:
          'For med spas where consultations don’t convert and aftercare gets sent when somebody remembers.',
        href: '/industries/beauty-personal-care/small-med-spas',
        icon: HeartPulse,
      },
      {
        title: 'Lash Lift & Extensions',
        description:
          'For lash artists working solo whose DMs sit until evening because their hands are full.',
        href: '/industries/beauty-personal-care/lash-lift-and-extensions',
        icon: Workflow,
      },
    ],
    backgroundColor: 'bg-muted/20',
    cssPrefix: 'beauty-detail-routes',
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
      title: 'Salons, Clinics & Beauty Businesses — Stop Losing DMs, No-Shows & Reviews | MindWP',
      description:
        'For salons, nail bars, lash studios, med spas, and aesthetic clinics where late-night DMs sit until morning, no-shows eat peak slots, and reviews don’t reflect the work. We put the system in place that catches every booking.',
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
      title: 'Tell us where the bookings are slipping',
      description:
        'If DMs go quiet overnight, if midweek sits empty, or if reviews never get asked for — walk us through how the salon runs and we’ll show you the first thing worth fixing.',
    },
  };
}

export const beautyPersonalCareIndustryPageData: IndustryPageData =
  buildBeautyPersonalCareIndustryPageData();
