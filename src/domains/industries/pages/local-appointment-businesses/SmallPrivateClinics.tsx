import {
  Calendar,
  HeartPulse,
  Lock,
  MessageCircle,
  Search,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserCheck,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildSmallPrivateClinicsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'Private Clinics',
    title: 'They Sent The Enquiry. Read Your Reply Twice. Still Did Not Book.',
    description:
      'Most private clinic enquiries do not disappear because the person was never interested. They hesitate, read the reply twice, check reviews, wait a few days, and often never book because the next step felt unclear and nobody followed up while the decision was still open.',
    list: ['Trust hesitation', 'Booking delay', 'No follow-up'],
    cssPrefix: 'small-private-clinics-hero',
  };

  const operatingPatternsData = {
    badge: 'Where Patients Hold Back',
    title: 'They are not shopping price. They are checking whether you feel safe.',
    description:
      'Most private clinic decisions happen slowly and quietly. The person enquiring is often weighing trust, timing, and whether the clinic feels careful enough to take the next step with, even when the treatment itself sounds right.',
    benefits: [
      {
        icon: HeartPulse,
        title: 'The first reply has to do reassurance, not just info',
        description:
          'A clinical answer to a nervous question can read as colder than it means to. When that happens, people usually do not argue with it or ask for more. They just take longer to decide and often never come back.',
        iconType: 'primary' as const,
      },
      {
        icon: Lock,
        title: 'Reviews are read more than the website',
        description:
          'They often look you up on Google before they ever ring or confirm anything. If the reviews feel sparse or old, the trust takes longer to form and the booking often gets delayed while they keep comparing.',
        iconType: 'secondary' as const,
      },
      {
        icon: UserCheck,
        title: 'They want to know who they will see',
        description:
          'They want a name, a face, and a tone they can picture before they commit to anything. Anonymous brochure-style pages rarely unlock the booking because the decision still feels too exposed or uncertain.',
        iconType: 'accent' as const,
      },
    ],
    columns: 3 as const,
  };

  const comparisonData = {
    badge: 'Two Versions Of The Same Enquiry',
    title: 'Same patient. Two very different clinics. Only one gets booked.',
    description:
      'The difference is rarely the treatment itself. It is what the person feels in the days between asking and booking, while they are still deciding whether this clinic feels safe enough to trust properly.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'The hesitant journey',
        items: [
          'Form sent. Generic reply 24 hours later. Tone reads as admin.',
          'Reviews are sparse and old. They Google you and feel uncertain.',
          'No clear next step. They are left to book themselves up to the courage.',
          'No follow-up. The enquiry quietly dies inside a week.',
        ],
      },
      {
        type: 'after' as const,
        title: 'The reassured journey',
        items: [
          'A short, warm reply lands quickly. It addresses the worry, not just the question.',
          'Recent reviews are visible. The clinic feels lived-in and looked-after.',
          'A clear way to book a short consultation, not a leap straight to treatment.',
          'A gentle follow-up if they go quiet. No pressure. Just a door left open.',
        ],
      },
    ],
  };

  const systemLayersData = {
    badge: 'What We Put In Place',
    title: 'Quiet trust signals from the first message to the booked consultation',
    description:
      'The clinical work stays entirely yours. What changes is that the messages, booking step, reviews, and follow-up stop feeling like cold admin while the person is still trying to make up their mind.',
    featureCategories: [
      {
        title: 'Reply in a way that reassures',
        description:
          'The first replies sound like a real person in the clinic rather than a portal or admin desk. That matters because the first message often decides whether the person feels calmer or more hesitant after enquiring.',
        icon: MessageCircle,
        features: [
          'Warm first replies that address the worry',
          'Captured details so reception is not asking twice',
          'Triage notes in one place for the clinician',
        ],
      },
      {
        title: 'Make booking feel like a small step',
        description:
          'A short consultation slot feels easier to say yes to than a bigger treatment commitment when someone is still feeling cautious. That lowers the pressure around booking without making the clinic feel vague or passive.',
        icon: Calendar,
        features: [
          'Self-serve consultation slots',
          'Reminders so the appointment actually happens',
          'You see the day at a glance',
        ],
      },
      {
        title: 'Build the trust the website cannot',
        description:
          'A steady flow of recent reviews helps Google look the way the clinic actually feels when someone visits or calls. That matters because people often need that extra proof while they are still deciding whether to book.',
        icon: ShieldCheck,
        features: [
          'Review request at the right moment',
          'Replies handled with the right tone',
          'Reviews stack where patients look',
        ],
      },
      {
        title: 'Hold the patient who went quiet',
        description:
          'A short, polite follow-up goes out if an enquiry stalls while the decision is still open, then closes off gracefully if nothing moves. That matters because a lot of bookings are lost in silence, not in a clear rejection.',
        icon: Sparkles,
        features: [
          'Two gentle nudges, never more',
          'Stops the moment they reply',
          'Different tone for clinical vs cosmetic',
        ],
      },
      {
        title: 'Show up when local patients search',
        description:
          'Your pages and Google profile line up around the treatments you actually offer and the questions people really search. That helps the clinic look clearer and more trustworthy before the first enquiry is even sent.',
        icon: Search,
        features: [
          'Found on Maps for treatment + area',
          'Pages that match real questions',
          'Clinician profiles that build confidence',
        ],
      },
    ],
    columns: 3 as const,
  };

  const exploreData = {
    badge: 'Related',
    description:
      'These are the supporting services that come up most often once a clinic sees how much trust and booking delay sit in the gap after the first enquiry. Each one helps reinforce reassurance, proof, or a clearer next step.',
    cards: [
      {
        icon: Stethoscope,
        title: 'Smart Website Systems',
        description:
          'Helps pages and first replies read warm and clear instead of too clinical or too distant when someone is already hesitating.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: ShieldCheck,
        title: 'Reputation & Review Systems',
        description:
          'Builds a steadier flow of recent reviews so the visible trust matches the care and attention people actually get from the clinic.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
      {
        icon: Calendar,
        title: 'Booking & Scheduling System',
        description:
          'Makes the first consultation feel like a smaller, safer step when someone is not ready to jump straight into a larger commitment.',
        href: '/services/crm-infrastructure-implementation',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description:
          'Helps you show up for treatment and area searches with clearer trust signals instead of relying on paid noise to fill the gap.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Things private clinics usually ask',
    description:
      'These are the practical questions that usually come up in a careful clinical setting where hesitation is normal and trust takes time to build. Straight answers, written for that pace.',
    faqs: [
      {
        question: 'Will the messages feel too marketing?',
        answer:
          'No. The tone is calm and human. The aim is to reassure a nervous patient, not to pitch.',
      },
      {
        question: 'Is automated follow-up appropriate for a clinical context?',
        answer:
          'Used sparingly, yes. Two short, polite nudges if an enquiry goes quiet. The moment the patient replies, the follow-up stops.',
      },
      {
        question: 'How does this work alongside our practice software?',
        answer:
          'It sits in front of it. Enquiries are caught, reassured, and booked. Clinical records stay where they belong.',
      },
      {
        question: 'We do not want pressure tactics.',
        answer: 'Neither do we. Nothing here pushes for urgency. The patient sets the pace.',
      },
      {
        question: 'Do we need a brand new website?',
        answer:
          'Usually not. We start with the gap between enquiry and booking, because that is where most clinics quietly lose patients.',
      },
    ],
  };

  return {
    seo: {
      title: 'Small Private Clinics — Turn Hesitant Enquiries Into Booked Consultations | MindWP',
      description:
        'For small private clinics where enquiries are warm but never seem to book. We help reply in a way that reassures, build the trust signals patients quietly check, and hold the door open without pressure.',
      canonical: '/industries/local-appointment-businesses/small-private-clinics',
    },
    slug: 'small-private-clinics',
    industries: ['private-clinic'],
    systems: [
      'smart-website-systems',
      'reputation-review',
      'crm-automation',
      'local-seo-authority',
    ],
    topics: ['follow-up', 'review-generation', 'booking-systems'],
    type: 'detail',
    parentSlug: 'local-appointment-businesses',
    hero: {
      ...heroData,
    },
    operatingPatterns: operatingPatternsData,
    comparison: comparisonData,
    systemLayers: systemLayersData,
    explore: exploreData,
    faq: faqData,
    cta: {
      heading: {
        title: 'Tell us where patients are hesitating',
        description:
          'If enquiries come in but the booking keeps getting delayed or quietly disappears, walk us through the patient journey and we will show you where the trust gap actually is.',
      },
      actions: [{ label: 'Get Started', href: '/contact', primary: true }],
    },
  };
}

export const smallPrivateClinicsIndustryPageData: IndustryPageData =
  buildSmallPrivateClinicsIndustryPageData();
