import {
  CalendarRange,
  Eye,
  FileText,
  HeartHandshake,
  Search,
  ShieldCheck,
  Star,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildAestheticCosmeticClinicsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'Aesthetic Clinics',
    title:
      'She Sat Through The Consult, Took The Brochure Home, Talked To Her Sister, And Then Heard Nothing From You.',
    description:
      'High-ticket aesthetic decisions are rarely made in the consult room itself. They get made over the next few days at home, in the mirror, in messages with family, and in moments of doubt where a calm follow-up can either steady the decision or lose it completely.',
    list: ['Consult silence', 'Doubt window', 'Weak follow-up'],
    cssPrefix: 'aesthetic-cosmetic-clinics-hero',
  };

  const operatingPatternsData = {
    badge: 'Where High-Ticket Goes Quiet',
    title: 'You did the consult well. The next ten days decided whether she came back.',
    description:
      'The consult can feel strong and the treatment can still go nowhere afterwards. In higher-ticket work, trust is fragile after the appointment, and silence gets interpreted faster than most clinics realise.',
    benefits: [
      {
        icon: FileText,
        title: 'No written summary after the consult',
        description:
          'She remembered the room and how the consult felt, but not the numbers, recovery timing, or which option you actually leaned toward. By day three the detail had blurred and doubt had filled the gaps.',
        iconType: 'primary' as const,
      },
      {
        icon: HeartHandshake,
        title: 'No structured follow-up at day three or day seven',
        description:
          'Not a discount and not a hard close. Just a calm, real "we are here when you are ready" with the plan attached. Without that, she can read the silence as distance, busyness, or uncertainty.',
        iconType: 'secondary' as const,
      },
      {
        icon: Eye,
        title: 'She compared three clinics — and yours read quietest',
        description:
          'The credentials may have been similar across all three clinics, but one looked more current, more trusted, and more present. Sparse reviews and a thin profile make hesitation heavier, especially when the treatment carries fear with it.',
        iconType: 'accent' as const,
      },
    ],
    columns: 3 as const,
  };

  const workflowExamplesData = {
    badge: 'Real Decision Moments',
    title: 'The ten days after the consult — done well',
    description:
      'This is not a campaign and it does not need to sound like one. It is a small set of calm touches that hold trust steady between the consult, the questions at home, and the final decision.',
    workflows: [
      {
        trigger: 'A consultation just finished.',
        actions: [
          'A written summary lands within 24 hours — her actual options, in her words',
          'It includes timing, recovery, and what to think about — not pricing as a banner',
          'Routed in her preferred channel — email, WhatsApp, portal',
        ],
      },
      {
        trigger: 'Day three after the consult.',
        actions: [
          'A short, calm "any questions come up?" message goes out',
          'It is signed by the practitioner, not the clinic',
          'It opens a real reply, not a booking link',
        ],
      },
      {
        trigger: 'Day seven, no booking yet.',
        actions: [
          'A final, gentle "we are here whenever you are ready" message lands',
          'It includes one quiet trust signal — a recent outcome, a relevant review',
          'It does not chase. If she does not reply, it stops.',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'aesthetic-cosmetic-clinics-workflow-examples',
  };

  const systemLayersData = {
    badge: 'What We Put In Place',
    title:
      'Calm, considered follow-up that matches how high-ticket aesthetic decisions actually get made',
    description:
      'You stay focused on the consult, the work, and the outcome. The part that keeps trust alive between the consult and the booking stops depending on someone remembering to send the right email a few days later.',
    featureCategories: [
      {
        title: 'Written consult summaries — every time',
        description:
          'Within 24 hours, in her words, with the options she actually discussed. Recovery, timing, and what to think about are laid out clearly, while pricing is handled with care instead of being pushed to the top.',
        icon: FileText,
        features: [
          'Practitioner-signed summary',
          'Her actual options, not a brochure',
          'Sent in her preferred channel',
        ],
      },
      {
        title: 'Day-three and day-seven nurture',
        description:
          'Two calm, named follow-ups land in the exact window where second thoughts usually appear. They stop the moment she replies or books, so the contact feels present rather than pressing.',
        icon: CalendarRange,
        features: [
          'Practitioner tone, not marketing',
          'No discount chasing',
          'Stops the moment she engages',
        ],
      },
      {
        title: 'Quiet trust at every comparison moment',
        description:
          'Recent reviews, real outcomes, and credentials are visible where comparison happens, not hidden behind extra clicks. That matters when someone is actively looking for reasons to feel reassured before saying yes.',
        icon: ShieldCheck,
        features: [
          'Recent reviews kept fresh',
          'Outcomes presented with care',
          'Credentials in the right place',
        ],
      },
      {
        title: 'A profile that reads as a real, current clinic',
        description:
          'Google profile, pages, and proof all line up with the treatments you actually perform instead of sounding like a generic clinic template. That makes the whole clinic feel more current and more trustworthy before contact even starts.',
        icon: Search,
        features: [
          'Treatment-led pages, not generic',
          'Profile reflects real practitioners',
          'Found by considered, right-fit clients',
        ],
      },
      {
        title: 'Reviews from outcomes, not first impressions',
        description:
          'Review prompts go out when outcomes are visible and the client feels settled in what she chose. That produces reviews that read like real treatment journeys rather than shallow first impressions.',
        icon: Star,
        features: [
          'Outcome-based timing',
          'Consent-aware prompts',
          'Stack where comparison clients look',
        ],
      },
    ],
    columns: 3 as const,
  };

  const exploreData = {
    badge: 'Related',
    description:
      'These are the supporting services that come up most often once a clinic sees how much of the decision happens after the consult. They all support trust, follow-up, and comparison moments from different angles.',
    cards: [
      {
        icon: FileText,
        title: 'Smart Website Systems',
        description:
          'Keeps consult summaries, calm follow-ups, and trust signals moving in the channel she actually reads when she goes home to think it through.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: CalendarRange,
        title: 'CRM & Nurture Automation',
        description:
          'Handles day-three and day-seven nurture in a way that feels steady and personal instead of sounding like a sales sequence.',
        href: '/services/crm-infrastructure-implementation',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description:
          'Collects reviews from real outcomes in the places where high-consideration comparison decisions are usually being made.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description:
          'Helps the clinic show up and read as calm, current, and credible for the considered searches most likely to turn into the right kind of enquiry.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Things aesthetic clinics usually ask',
    description:
      'These are the practical questions that usually come up in a high-ticket clinic where trust, fear, and hesitation all sit in the follow-up window after the consult. Straight answers, kept calm.',
    faqs: [
      {
        question: 'Will follow-up feel like marketing?',
        answer:
          'No. The tone is practitioner-led and calm. Day three and day seven are real, named messages, not sequences with offers attached.',
      },
      {
        question: 'How does this handle pricing in the follow-up?',
        answer:
          'Pricing sits in the written consult summary, in context. It does not appear as banners or discounts in nurture messages.',
      },
      {
        question: 'What about clients who go quiet for months?',
        answer:
          'A single, respectful re-open at the right moment — referencing the original plan, not a generic offer. If she does not respond, it does not chase.',
      },
      {
        question: 'Will this affect how we present treatments and outcomes?',
        answer:
          'No. Tone, claims, and copy stay aligned with what your practitioners are comfortable saying. We do not introduce claims.',
      },
      {
        question: 'Can it sit alongside our existing patient management software?',
        answer:
          'Yes. The systems live on top of your clinic software, handling the bits it does not — first reply, written summaries, structured nurture, reviews.',
      },
    ],
  };

  return {
    seo: {
      title: 'Aesthetic & Cosmetic Clinics — Considered Follow-Up, Calm Conversion',
      description:
        'For aesthetic and cosmetic clinics where consults go well and then quietly disappear. We put written summaries, day-three and day-seven nurture, and outcome-based reviews in place — calmly.',
      canonical: '/industries/beauty-personal-care/aesthetic-cosmetic-clinics',
    },
    slug: 'aesthetic-cosmetic-clinics',
    industries: ['aesthetic-clinic'],
    systems: [
      'crm-automation',
      'smart-website-systems',
      'reputation-review',
      'local-seo-authority',
    ],
    topics: ['follow-up', 'lead-response-time', 'review-generation'],
    type: 'detail',
    parentSlug: 'beauty-personal-care',
    hero: {
      ...heroData,
    },
    operatingPatterns: operatingPatternsData,
    workflowExamples: workflowExamplesData,
    systemLayers: systemLayersData,
    explore: exploreData,
    faq: faqData,
    cta: {
      heading: {
        title: 'Tell us where the ten days go quiet',
        description:
          'If considered enquiries keep cooling between consult and decision, walk us through your last few weeks and we will show you where calm, named follow-up would have kept trust alive.',
      },
      actions: [{ label: 'Get Started', href: '/contact', primary: true }],
    },
  };
}

export const aestheticCosmeticClinicsIndustryPageData: IndustryPageData =
  buildAestheticCosmeticClinicsIndustryPageData();
