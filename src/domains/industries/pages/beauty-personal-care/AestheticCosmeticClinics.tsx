import {
  Bell,
  Calendar,
  Clock3,
  MapPinned,
  MessageSquare,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Workflow,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildAestheticCosmeticClinicsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Aesthetic Clinics',
    title: 'She Messaged You and Two Other Clinics. Whoever Replies First Usually Wins.',
    description:
      'Aesthetic patients research for weeks before they message anyone. By the time the enquiry lands, the decision is half made. The clinic that replies warmly the same day is usually the one she books.',
    list: ['Slow replies', 'Lost consultations', 'Missed aftercare', 'Few reviews'],
    cssPrefix: 'aesthetic-clinics-hero',
  };

  const imageStripData = {
    badge: 'How Patients Actually Decide',
    title: 'She has done the research. She is on a shortlist before she ever messages.',
    description:
      'The clinic that replies warmly and quickly is usually the one she books. The rest of it lives or dies in the follow-up.',
    items: [
      {
        title: 'Consultation enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing aesthetic clinic consultation flow',
      },
      {
        title: 'Treatment booking',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing aesthetic clinic booking',
      },
      {
        title: 'Pre-care and aftercare',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing aesthetic clinic aftercare',
      },
      {
        title: 'Reviews and trust',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing aesthetic clinic reviews',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'aesthetic-clinics-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where Patients Slip',
    title: 'The clinical work is fine. The bit before and after is where it leaks.',
    description: 'Same handful of gaps in nearly every clinic. None of them are about the treatments.',
    benefits: [
      {
        icon: Sparkles,
        title: 'A high-intent question sat for days',
        description: 'By the time anyone replied, she had already booked elsewhere.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'A consultation went well, then nothing',
        description: 'She said she would have a think. Nobody followed up. The momentum died.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Pre-care and aftercare get sent when somebody remembers',
        description: 'Sometimes it goes out. Sometimes it does not.',
        iconType: 'accent' as const,
      },
      {
        icon: MapPinned,
        title: 'The clinic across town has a wall of reviews. You do not.',
        description: 'You do better work. Online you look smaller because nobody was ever asked.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to turn enquiries into long-term patients',
    description: 'Each piece does one job. Together they hold the trust from first message to next visit.',
    featureCategories: [
      {
        title: 'Reply to every enquiry the same hour',
        description: 'A warm, professional reply goes out within minutes. The next step is in the same message.',
        icon: MessageSquare,
        features: [
          'Instant replies on DMs and forms',
          'Treatment questions handled professionally',
          'Consultation link in the same reply',
        ],
      },
      {
        title: 'Move consultations into treatments',
        description: 'If she did not book on the day, a personal follow-up goes out within a couple of days.',
        icon: Calendar,
        features: [
          'Booking flow after consultation',
          'Personal follow-up if she did not commit',
          'Reminders and reschedule options',
        ],
      },
      {
        title: 'Send pre-care and aftercare without remembering',
        description: 'Pre-care lands the day before. Aftercare lands soon after she leaves.',
        icon: Bell,
        features: [
          'Pre-care guidance the day before',
          'Aftercare sent right after treatment',
          'Check-in a week later',
        ],
      },
      {
        title: 'Build the trust aesthetics depends on',
        description: 'Reviews, treatment pages, and credentials lined up so she feels safe before she messages.',
        icon: ShieldCheck,
        features: [
          'Review requests after every treatment',
          'Treatment pages that answer real questions',
          'Credentials in the right places',
        ],
      },
      {
        title: 'Show up when local people search',
        description: 'Treatment pages and Google profile lined up so the right people find you first.',
        icon: Search,
        features: [
          'Pages for the treatments you offer',
          'Found on Maps for local searches',
          'Local visibility that compounds',
        ],
      },
    ],
    columns: 3 as const,
  };

  const comparisonData = {
    badge: 'What Actually Changes',
    title: 'A normal month, before and after',
    description: 'Clinical care stays the same. The trust-building bits stop being patchy.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'How it runs now',
        items: [
          'A high-intent question sat for days. She booked elsewhere.',
          'A great consultation. No follow-up. No treatment.',
          'Pre-care meant to send. Aftercare meant to send.',
          'Happy patients walk out. Reviews never get asked for.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How it runs after',
        items: [
          'Enquiries get a warm reply with a consultation link the same hour.',
          'A personal follow-up goes out if she did not book on the day.',
          'Pre-care lands the day before. Aftercare lands soon after.',
          'Every happy patient gets asked. Reviews catch up to the work.',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Where Most Clinics Start',
    title: 'Three stages, most clinics feel one more than the others',
    description: 'Pick whichever costs you the most treatments right now.',
    packages: [
      {
        name: 'Catch every enquiry while she is still researching',
        description: 'For when high-intent questions sit and the consultation goes elsewhere.',
        price: 'Stage 1',
        priceDetail: 'Start here if first-reply speed is the leak',
        features: [
          'Instant replies on DMs and forms',
          'Treatment questions handled professionally',
          'Consultation link in the same reply',
        ],
      },
      {
        name: 'Turn consultations into treatments',
        description: 'For when consultations happen but bookings drag.',
        price: 'Stage 2',
        priceDetail: 'Start here if consultation-to-treatment is the leak',
        features: [
          'Booking flow after consultation',
          'Personal follow-up if she did not book',
          'Pre-care and aftercare sent automatically',
        ],
        popular: true,
      },
      {
        name: 'Build the trust that fills the diary',
        description: 'For when results are great but reviews and repeat visits depend on luck.',
        price: 'Stage 3',
        priceDetail: 'Start here if reviews and retention are the weak spot',
        features: [
          'Review requests after every treatment',
          'Top-up nudges at the right interval',
          'Past patients warmed up for new treatments',
        ],
      },
    ],
  };

  const workflowExamplesData = {
    badge: 'Real Situations',
    title: 'A few moments where the difference shows up',
    description: 'Small moments in the clinic where things used to slip through.',
    workflows: [
      {
        trigger: 'A first-time enquirer messages on Instagram at lunchtime.',
        actions: [
          'She gets a warm reply within minutes with a consultation link',
          'Her question is handled professionally and without pressure',
          'A consultation lands on the books before the day is out',
        ],
      },
      {
        trigger: 'She has a consultation but does not book on the day.',
        actions: [
          'A personal follow-up goes out within a couple of days',
          'Any concerns get answered without pressure',
          'A booking link makes saying yes easy',
        ],
      },
      {
        trigger: 'A treatment is finished and she leaves happy.',
        actions: [
          'Aftercare guidance lands soon after',
          'A review request goes out a few days later',
          'A top-up nudge appears at the right interval',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'aesthetic-clinics-workflow-examples',
  };

  const caseStudiesData = {
    category: 'beauty-personal-care' as const,
    title: 'Related Case Studies',
    description: 'Examples of how the system supports clinics in this category.',
    limit: 2,
  };

  const exploreData = {
    badge: 'Related',
    description: 'The other parts of the system that come up most often for aesthetic clinics.',
    cards: [
      {
        icon: Workflow,
        title: 'Smart Website Systems',
        description: 'The core layer that holds consultation, booking, and follow-up together.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Calendar,
        title: 'Booking & Scheduling System',
        description: 'Support consultation booking, reminders, and clearer next steps.',
        href: '/services/crm-infrastructure-implementation',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description: 'Strengthen treatment visibility and local trust.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description: 'Turn completed treatments into reviews and proof.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Things clinics usually ask',
    description: 'Straight answers about how this fits a clinic that is already busy.',
    faqs: [
      {
        question: 'Will automated replies feel cold or off-brand?',
        answer:
          'No, they are written warmly and they buy time to follow up personally. The alternative is silence while she books elsewhere.',
      },
      {
        question: 'How does this help convert consultations into treatments?',
        answer:
          'A personal follow-up goes out a couple of days later if she did not book on the day, with a booking link and a chance to ask anything else.',
      },
      {
        question: 'Can it handle pre-care and aftercare without me remembering?',
        answer:
          'Yes. Pre-care goes out the day before, aftercare goes out soon after she leaves. You stop doing it from memory.',
      },
      {
        question: 'How do I get more reviews without it feeling transactional?',
        answer:
          'A polite request goes out a few days after treatment. Timing matters. Too early feels rushed, too late feels random.',
      },
      {
        question: 'Can past patients be brought back for top-ups automatically?',
        answer:
          'Yes. A friendly nudge at the right interval brings regulars back without anyone in the clinic chasing.',
      },
      {
        question: 'Do I need a brand new website?',
        answer:
          'Usually not. We look at what you have first. The leak is normally everything that happens after she enquires.',
      },
    ],
  };

  return {
    slug: 'aesthetic-cosmetic-clinics',
    industries: ['aesthetic-clinic'],
    systems: ['smart-website-systems', 'crm-automation', 'local-seo-authority', 'reputation-review'],
    topics: ['booking-systems', 'lead-qualification', 'review-generation'],
    type: 'detail',
    parentSlug: 'beauty-personal-care',
    seo: {
      title: 'Aesthetic & Cosmetic Clinics — Stop Losing Patients to a Slow Reply | MindWP',
      description:
        'For aesthetic clinics where high-intent enquiries go cold, consultations do not convert, and aftercare gets sent when somebody remembers. We put the system in place that turns enquiries into long-term patients.',
      keywords: [
        'aesthetic clinic website design',
        'cosmetic clinic lead generation website',
        'aesthetic clinic marketing system',
        'cosmetic clinic booking automation system',
        'aesthetic clinic reputation management system',
      ],
      canonical: '/industries/beauty-personal-care/aesthetic-cosmetic-clinics',
    },
    hero: {
      ...heroData,
    },
    imageStrip: imageStripData,
    operatingPatterns: operatingPatternsData,
    systemLayers: systemLayersData,
    comparison: comparisonData,
    pathways: pathwaysData,
    workflowExamples: workflowExamplesData,
    caseStudies: caseStudiesData,
    explore: exploreData,
    faq: faqData,
    cta: {
      title: 'Tell us where the trust is breaking',
      description:
        'If enquiries sit for days, if consultations do not turn into bookings, or if reviews do not reflect the work, walk us through how the clinic runs and we will show you the first thing worth fixing.',
    },
  };
}

export const aestheticCosmeticClinicsIndustryPageData: IndustryPageData =
  buildAestheticCosmeticClinicsIndustryPageData();
