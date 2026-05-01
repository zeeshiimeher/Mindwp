import {
  Bell,
  Calendar,
  CheckCircle2,
  Clock4,
  HeartHandshake,
  MessageSquare,
  RefreshCw,
  Search,
  Sparkles,
  Star,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildBeautyPersonalCareIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'Beauty & Appointment Businesses',
    title:
      'A Booking Window Closes. A Refill Gets Forgotten. A Quiet Regular Tries Somewhere New. The Chair Stays Empty For The Same Reason Every Week.',
    description:
      'Salons, lash studios, med spas, and clinics all run on the same loop: quick reply, easy booking, timely return. The treatment changes, but the loss usually starts in the same place — someone looked, hesitated, then never came back to finish the booking.',
    list: ['Slow reply', 'Booking drag', 'Missed returns'],
    cssPrefix: 'beauty-personal-care-hero',
  };

  const operatingPatternsData = {
    badge: 'The Three Patterns Every Appointment Business Shares',
    title:
      'You are not losing clients to better treatments. You are losing them to faster, easier, more present ones.',
    description:
      'Across the category, the same three moments keep showing up: the first reply, the rebook timing, and what happens when availability opens up suddenly. When those moments are loose, clients move on quietly.',
    benefits: [
      {
        icon: Clock4,
        title: 'The first reply decides who books',
        description:
          'New enquiries usually message two or three places at once, then wait a short while before choosing. The place that replies with a clear next step, not more friction, usually gets the booking.',
        iconType: 'primary' as const,
      },
      {
        icon: RefreshCw,
        title: 'The rebook nudge decides who comes back',
        description:
          'Trims, refills, maintenance visits, treatment plans — all of them have a natural return point. Miss that timing by a few weeks and a regular can quietly fall out of the habit.',
        iconType: 'secondary' as const,
      },
      {
        icon: Bell,
        title: 'The empty chair decides what next month looks like',
        description:
          'Cancellations and no-shows are where the week starts slipping. The businesses that refill those gaps quickly rarely experience the same kind of sudden quiet patch.',
        iconType: 'accent' as const,
      },
    ],
    columns: 3 as const,
  };

  const decisionChecklistData = {
    badge: 'A Quick Self-Check',
    title: 'Three honest questions about your last booked week',
    description:
      'If more than one of these feels familiar, the issue is probably not the quality of the treatment itself. It is what happens around the booking, the return, and the follow-up.',
    items: [
      'New DMs wait until after closing for a real reply',
      'Regulars only rebook if the front desk remembers to ask',
      'Cancellations sit empty until next week, not next hour',
      "Refill or rebook windows are tracked in someone's head",
      'Reviews online do not match how full the chair actually is',
      'Past clients hear from you only when there is an offer',
    ],
    columns: 2 as const,
    backgroundColor: 'bg-base',
    cssPrefix: 'beauty-personal-care-decision-checklist',
  };

  const spectrumData = {
    badge: 'How The Loop Looks By Treatment',
    title: 'Same loop. Different breaking points.',
    description:
      'Every part of the category relies on booking, return timing, and trust. The difference is where the pressure shows up first depending on the treatment and how quickly the decision gets made.',
    cards: [
      {
        title: 'Walk-in & fast booking',
        description:
          'Nail salons, hair trims, brow bars. Friction in the first three taps loses the booking. Cancellations need filling the same hour. Speed and ease win.',
        points: [
          'Three-tap booking',
          'Same-hour cancellation fill',
          'Walk-in waitlist that actually fires',
        ],
      },
      {
        title: 'Cycle & refill',
        description:
          'Lash extensions, hair colour, regular maintenance. The booking is fine. The cycle nudge is the leak. Two weeks of silence loses a year of loyalty.',
        points: [
          'Cycle-aware refill nudges',
          'Quiet, single-touch win-backs',
          'Tech-led rebook prompts',
        ],
        featured: true,
      },
      {
        title: 'Considered & high-ticket',
        description:
          'Med spas, aesthetic clinics, treatment plans. The consult goes well. The follow-up does not. Day three and day seven decide if she comes back.',
        points: [
          'Written consult summaries',
          'Day-three and day-seven nurture',
          'Outcome-based reviews',
        ],
      },
    ],
    backgroundColor: 'bg-alt',
    cssPrefix: 'beauty-personal-care-spectrum',
  };

  const systemLayersData = {
    badge: 'What This Looks Like Across The Category',
    title: 'A small set of systems that fit every chair, room, and clinic',
    description:
      'The same four layers keep appearing across the category, just tuned differently by treatment. Salons need easier booking, lash studios need better timing, and clinics need steadier follow-up after interest shows up.',
    featureCategories: [
      {
        title: 'First reply with a real slot',
        description:
          'The first message back includes a real next step instead of another dead end. Availability can be reached from Instagram, Google, and the site without sending people in circles.',
        icon: MessageSquare,
        features: [
          'Live slots in the first reply',
          'Bookable from where she found you',
          'Holds her until you can confirm',
        ],
      },
      {
        title: 'Rebook on the right cycle, every time',
        description:
          'Each treatment type has its own return rhythm, and the reminder needs to match it. The prompt lands at the point where rebooking still feels natural instead of overdue.',
        icon: RefreshCw,
        features: [
          'Service-specific rebook timing',
          'Personal, named tone',
          'Stops the moment she rebooks',
        ],
      },
      {
        title: 'Reviews from the moments worth reviewing',
        description:
          'Review requests go out when the result still feels fresh, not at some random delay. That turns good experiences into visible proof in the places new clients already check.',
        icon: Star,
        features: [
          'Trigger-based review timing',
          'Asked once, never twice',
          'Stack on Google and Maps',
        ],
      },
      {
        title: 'Be findable for the actual search',
        description:
          'Your profile and treatment pages need to line up with the specific search someone actually types. That makes it easier to be found by intent, not just by being generally nearby.',
        icon: Search,
        features: [
          'Treatment + area pages',
          'Profile that matches the work',
          'Right-fit, not generic',
        ],
      },
    ],
    columns: 2 as const,
  };

  const detailRoutesData = {
    badge: 'Where Each Treatment Sits',
    title: 'Pick the page closest to your day',
    description:
      'Each detail page goes one step deeper on the treatment-specific weak spots without changing the overall pattern. Pick the one that sounds most like the way your bookings actually behave.',
    items: [
      {
        title: 'Hair Salons',
        description:
          'Saturday messages, repeat colour or cut timing, and the chair that stayed empty because nobody filled the opening fast enough.',
        href: '/industries/beauty-personal-care/hair-salons',
        icon: Sparkles,
      },
      {
        title: 'Nail Salons',
        description:
          'Fast booking, low-patience decisions, and cancellation gaps that need filling while someone is still looking for somewhere nearby.',
        href: '/industries/beauty-personal-care/nail-salons',
        icon: CheckCircle2,
      },
      {
        title: 'Lash Studios',
        description:
          'Refill timing, missed cycles, and the quiet drop-off that starts when a regular skips one appointment and never re-enters the pattern.',
        href: '/industries/beauty-personal-care/lash-lift-and-extensions',
        icon: HeartHandshake,
      },
      {
        title: 'Small Med Spas',
        description:
          'Consultation interest, calmer follow-up, and the gap between someone asking about treatment and actually choosing a time to come in.',
        href: '/industries/beauty-personal-care/small-med-spas',
        icon: Bell,
      },
      {
        title: 'Aesthetic & Cosmetic Clinics',
        description:
          'High-consideration enquiries, trust-sensitive follow-up, and the quiet hesitation that appears after a good consultation but before the booking is ever confirmed.',
        href: '/industries/beauty-personal-care/aesthetic-cosmetic-clinics',
        icon: Calendar,
      },
    ],
    backgroundColor: 'bg-muted/20',
    cssPrefix: 'beauty-personal-care-detail-routes',
    styleVariant: 'style1' as const,
  };

  const exploreData = {
    badge: 'Related',
    description:
      'These are the supporting services that keep showing up across the whole category. They all support the same booking, return, and review gaps from different angles.',
    cards: [
      {
        icon: MessageSquare,
        title: 'Smart Website Systems',
        description:
          'Handles first-reply availability, cleaner booking paths, and the simple next steps people need when they are ready to decide.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: RefreshCw,
        title: 'CRM & Rebook Automation',
        description:
          'Keeps rebook timing, calmer follow-up, and return prompts moving without relying on someone to remember each cycle manually.',
        href: '/services/crm-infrastructure-implementation',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description:
          'Gets reviews out at the right moment and helps the online proof match how full the diary feels in real life.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description:
          'Makes it easier to show up for the actual treatment search someone types when they want an appointment, not just a general category term.',
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
      title: 'Beauty & Appointment Businesses — Booking, Rebook, Retention | MindWP',
      description:
        'Salons, lash studios, med spas, and aesthetic clinics share the same loop — fastest reply, easiest booking, most remembered business. We put the systems in place that fix the loop where it actually breaks.',
      canonical: '/industries/beauty-personal-care',
    },
    slug: 'beauty-personal-care',
    industries: ['aesthetic-clinic', 'hair-salon', 'nail-salon', 'med-spa', 'lash-extensions'],
    category: 'beauty-personal-care',
    systems: [
      'smart-website-systems',
      'crm-automation',
      'reputation-review',
      'local-seo-authority',
    ],
    topics: ['lead-response-time', 'follow-up', 'booking-systems', 'review-generation'],
    type: 'category',
    hero: {
      ...heroData,
    },
    operatingPatterns: operatingPatternsData,
    decisionChecklist: decisionChecklistData,
    spectrum: spectrumData,
    systemLayers: systemLayersData,
    detailRoutes: detailRoutesData,
    explore: exploreData,
    sectionControls: {
      subIndustries: { enabled: false },
      caseStudies: { enabled: false },
    },
    faq: {
      title: 'Things owners ask before they pick a page',
      description:
        'A few common questions that come up before choosing the closest treatment page. These stay broad on purpose so you can decide where to go next quickly.',
      faqs: [
        {
          question: 'I run more than one of these — which page should I read?',
          answer:
            'Read the one closest to your highest-volume treatment. The patterns are shared, but the breaking points differ.',
        },
        {
          question: 'Is this only for owners with a team?',
          answer:
            'No. Solo lash techs, single-chair stylists, and small clinics feel the booking + rebook leak more, not less.',
        },
        {
          question: 'Will this replace our salon software?',
          answer:
            'No. It sits on top of your booking software and fills the bits it does not — first reply, cycle nudges, structured follow-up, reviews.',
        },
      ],
    },
    cta: {
      heading: {
        title: 'Pick the page closest to your chair',
        description:
          'Each detail page below shows where the booking or return loop usually breaks for that treatment. Start with the one that sounds closest to the way your week actually runs.',
      },
      actions: [{ label: 'Get Started', href: '/contact', primary: true }],
    },
  };
}

export const beautyPersonalCareIndustryPageData: IndustryPageData =
  buildBeautyPersonalCareIndustryPageData();
