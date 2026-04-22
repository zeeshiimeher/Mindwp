import {
  Calendar,
  Hand,
  HeartPulse,
  Home,
  Moon,
  Repeat,
  Scissors,
  Sparkles,
  Star,
  Store,
  Workflow,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildBeautyPersonalCareIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Salons, Clinics, And Solo Beauty Pros',
    title: 'Hands Are Full. Phone\u2019s Ringing. The DM Came In At 11pm.',
    description:
      'Bookings in beauty rarely break on the chair. They break in the four hours between the late-night DM and the next morning. They break on the Tuesday afternoon nobody filled. They break on the regular who quietly stopped rebooking and nobody chased. Different services, different chairs, almost always the same handful of leaks.',
    list: ['Late DMs', 'Quiet Tuesdays', 'Lost regulars'],
    cssPrefix: 'beauty-personal-care-hero',
  };

  const operatingPatternsData = {
    badge: 'Where The Bookings Slip',
    title: 'Four moments most beauty businesses know by heart',
    description:
      'Once you see them, the leak stops feeling like bad luck.',
    benefits: [
      {
        icon: Moon,
        title: 'A DM landed at 11:14pm. Nobody saw it until 9 the next morning.',
        description:
          'By breakfast they had asked two more salons and someone with worse work had already locked their slot.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'A no-show on a peak Saturday',
        description:
          'Two hours of the chair gone. No deposit, no reminder, no waitlist to fill the gap.',
        iconType: 'secondary' as const,
      },
      {
        icon: Repeat,
        title: 'A regular who used to come every six weeks. Hasn\u2019t booked in four months.',
        description:
          'Nobody remembered to nudge. They booked across the road without thinking.',
        iconType: 'accent' as const,
      },
      {
        icon: Star,
        title: 'A wall of beautiful work, almost no proof on Maps',
        description:
          'Hundreds of finished clients. A handful of reviews. The salon two streets over with worse work has triple the count.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const spectrumData = {
    badge: 'Different Shapes, Same Leaks',
    title: 'Solo room, salon team, clinic \u2014 the gaps almost always rhyme',
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
          'More chairs, more handoffs. Things slip in the gap between front desk, practitioner and client.',
        points: [
          'Bookings nobody confirmed',
          'No-shows on peak slots',
          '"Who was supposed to ring them?"',
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
          'Review counts that don\u2019t match the work',
        ],
      },
    ],
    backgroundColor: 'bg-alt',
    cssPrefix: 'beauty-personal-care-spectrum',
  };

  const serviceEnvironmentsData = {
    badge: 'How You Actually Work',
    title: 'A solo room and a six-chair salon break in different places',
    description:
      'The bit that costs you the most work is rarely the same in a one-chair home studio as in a six-chair salon or a clinic.',
    features: [
      {
        title: 'Solo room or home studio',
        description:
          'You are working hands-on with one client. The phone goes, the DMs back up, and there is no front desk to catch any of it.',
        icon: Home,
      },
      {
        title: 'Salon team',
        description:
          'More chairs, more handoffs. Things slip in the gap between booker, practitioner and client.',
        icon: Store,
      },
      {
        title: 'Clinic or treatment-led',
        description:
          'Trust matters most. Pre-care, aftercare and consultation follow-up have to land at the right moment or they don\u2019t land at all.',
        icon: HeartPulse,
      },
    ],
    tagline: 'Same category, different bottlenecks',
    narrativeTitle: 'Why we look at the shape of the business first',
    narrativeParagraphs: [
      'Before any change is made, we look at how enquiries actually arrive, who handles them and where they currently slip. That is usually obvious within a short conversation.',
      'From there, the right next step \u2014 catching DMs, taking deposits, sending reminders, building reviews \u2014 stops being generic and becomes obvious.',
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'beauty-personal-care-service-environments',
  };

  const processData = {
    badge: 'How We Get Started',
    title: 'How a typical conversation moves from "we keep losing bookings" to "we stopped losing bookings"',
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
        description: 'No pitch deck. A short, honest list of what is breaking and what it is costing.',
      },
      {
        number: '03',
        title: 'The biggest leak gets plugged first',
        description:
          'Missed DMs, no-shows, missing reviews, empty midweek \u2014 whichever is bleeding the most work.',
      },
      {
        number: '04',
        title: 'It runs while the team is on the floor',
        description:
          'Replies, reminders, reviews, follow-up. Going on their own while the salon runs the salon.',
      },
    ],
    columns: 4 as const,
    backgroundColor: 'bg-alt',
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
          'For clinics where high-intent consultations go cold and never become treatments.',
        href: '/industries/beauty-personal-care/aesthetic-cosmetic-clinics',
        icon: HeartPulse,
      },
      {
        title: 'Hair Salons',
        description:
          'For salons whose late-night DMs sit until morning and Tuesdays sit empty.',
        href: '/industries/beauty-personal-care/hair-salons',
        icon: Scissors,
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
          'For med spas where consultations drift and aftercare gets sent when somebody remembers.',
        href: '/industries/beauty-personal-care/small-med-spas',
        icon: Hand,
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
      title: 'Salons, Clinics & Beauty Businesses \u2014 Stop Losing DMs, No-Shows & Reviews | MindWP',
      description:
        'For salons, nail bars, lash studios, med spas and aesthetic clinics where late-night DMs sit until morning, no-shows eat peak slots and reviews never catch up to the work.',
      keywords: [
        'beauty business booking',
        'salon booking automation',
        'spa client reactivation',
        'aesthetic clinic consultation conversion',
        'beauty review automation',
      ],
      canonical: '/industries/beauty-personal-care',
    },
    hero: heroData,
    operatingPatterns: operatingPatternsData,
    spectrum: spectrumData,
    serviceEnvironments: serviceEnvironmentsData,
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
        'If DMs go quiet overnight, if midweek sits empty, or if reviews never get asked for \u2014 walk us through how the salon runs and we will show you the first thing worth plugging.',
    },
  };
}


export const beautyPersonalCareIndustryPageData: IndustryPageData =
  buildBeautyPersonalCareIndustryPageData();
