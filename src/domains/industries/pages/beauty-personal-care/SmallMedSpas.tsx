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

function buildSmallMedSpasIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Small Med Spas',
    title: 'She Asked About Tear Trough Filler. Three Days Later She’s Booked Somewhere Cheaper.',
    description:
      'Most med spa enquiries don’t fail on the treatment — they fail in the consultation gap. The high-intent question that nobody answered. The consultation that didn’t lead to a booking. The aftercare that didn’t lead to her telling a friend. We put the system in place that turns curious enquiries into confident regulars.',
    list: [
      'High-intent enquiries that go cold',
      'Consultations that don’t convert',
      'Aftercare nobody had time to send',
      'Reviews that don’t reflect the work',
    ],
    cssPrefix: 'small-med-spas-hero',
  };

  const imageStripData = {
    badge: 'How Bookings Actually Happen',
    title: 'People research aesthetics for weeks before they message anyone',
    description:
      'By the time she’s in your inbox, she’s already read forums, watched twenty TikToks, and compared three clinics. The difference between her booking with you and booking somewhere else is usually how she’s treated in the next twenty-four hours.',
    items: [
      {
        title: 'Consultation and suitability',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing med spa consultation flow',
      },
      {
        title: 'Treatment booking and reminders',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing med spa booking reminders',
      },
      {
        title: 'Pre-care and aftercare guidance',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing med spa pre-care and aftercare guidance',
      },
      {
        title: 'Reviews and local trust',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing med spa reviews and trust signals',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'small-med-spas-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where The Bookings Slip',
    title: 'The injectables are great. The bit between her question and her chair is where it goes wrong.',
    description:
      'Aesthetics is a trust business. Most leaks happen quietly, in the days after the first message.',
    benefits: [
      {
        icon: Sparkles,
        title: '“Am I a candidate for tear trough filler?” sat for three days',
        description:
          'By the time you reply, she’s booked a consultation with the clinic that answered the same evening.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Consultations happen but treatment bookings don’t follow',
        description:
          'She loved the chat but never quite got round to booking. Nobody followed up. The momentum dies in a week.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Pre-care and aftercare get forgotten when the day is back-to-back',
        description:
          '“No alcohol 24 hours before” — sent sometimes. Aftercare instructions — sent if she asks.',
        iconType: 'accent' as const,
      },
      {
        icon: MapPinned,
        title: 'The clinic in town has 400 reviews. You have 19.',
        description:
          'Hundreds of brilliant results. Almost no one was ever asked to write anything.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to turn curious enquiries into confident, returning clients',
    description:
      'Each piece does one job. Together they keep the trust building from the first message all the way to her next appointment.',
    featureCategories: [
      {
        title: 'Reply to every consultation enquiry the same day',
        description:
          'High-intent questions get a warm, professional reply within minutes — with the next step ready.',
        icon: MessageSquare,
        features: [
          'Instant replies on DMs, web forms, calls',
          'Treatment information and pricing handled professionally',
          'Consultation booking link in the same reply',
        ],
      },
      {
        title: 'Move consultations into actual bookings',
        description:
          'After a consultation, the right next step is teed up automatically — not left to whoever has time.',
        icon: Calendar,
        features: [
          'Treatment booking flow after consultation',
          'Reminders and reschedule options',
          'Follow-up if she didn’t book on the day',
        ],
      },
      {
        title: 'Send pre-care and aftercare without remembering to',
        description:
          'No alcohol 24 hours before. No exercise the day after. Sent automatically at the right moment.',
        icon: Bell,
        features: [
          'Pre-care guidance the day before',
          'Aftercare sent right after treatment',
          'Check-in messages a week later',
        ],
      },
      {
        title: 'Build the trust that aesthetics depends on',
        description:
          'Reviews, before/afters, treatment pages and credentials — lined up so she feels confident before she even messages.',
        icon: ShieldCheck,
        features: [
          'Review requests after every treatment',
          'Treatment pages that answer her real questions',
          'Credentials and proof in the right places',
        ],
      },
      {
        title: 'Show up when local people search for aesthetic treatments',
        description:
          'Treatment pages, Google profile, and local search lined up so the right people find you.',
        icon: Search,
        features: [
          'Pages for the treatments you actually do',
          'Found on Maps for local searches',
          'Local visibility that compounds',
        ],
      },
    ],
    columns: 3 as const,
  };

  const comparisonData = {
    badge: 'What Actually Changes',
    title: 'A normal month at a small med spa, before and after',
    description: 'The clinical care stays. The trust-building bits that used to be patchy get steady.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'How it runs now',
        items: [
          'A high-intent filler enquiry sat in your inbox for three days. She booked elsewhere.',
          'A great consultation. No follow-up. Treatment never booked.',
          'Pre-care info “meant to send.” Aftercare “meant to send.”',
          '“Amazing results” — said by hundreds, written by 19.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How it runs after',
        items: [
          'The high-intent enquiry gets a warm reply with a consultation link inside the hour.',
          'After consultation, a personal follow-up goes out if she didn’t book on the day.',
          'Pre-care lands the day before. Aftercare lands an hour after she leaves.',
          'Every happy client gets asked. Reviews catch up to the work.',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Where Most Med Spas Start',
    title: 'Three stages — most clinics feel one of them more than the others',
    description: 'Pick whichever costs you the most treatments right now.',
    packages: [
      {
        name: 'Catch every enquiry while she’s still researching',
        description:
          'For when high-intent questions sit for days and the booking goes elsewhere.',
        price: 'Stage 1',
        priceDetail: 'Start here if first-reply speed is the biggest leak',
        features: [
          'Instant replies on DMs, forms, calls',
          'Treatment information handled professionally',
          'Consultation link in the same reply',
        ],
      },
      {
        name: 'Turn consultations into actual treatments',
        description: 'For when the consultations happen but bookings drag.',
        price: 'Stage 2',
        priceDetail: 'Start here if consultation-to-treatment conversion is the leak',
        features: [
          'Booking flow after consultation',
          'Personal follow-up if she didn’t book on the day',
          'Pre-care and aftercare sent automatically',
        ],
        popular: true,
      },
      {
        name: 'Build the trust that fills the diary on its own',
        description:
          'For when results are great but reviews and repeat visits depend on luck.',
        price: 'Stage 3',
        priceDetail: 'Start here if reviews and retention are the weak spot',
        features: [
          'Review requests after every treatment',
          'Top-up nudges at the right interval',
          'Past clients warmed up for new treatments',
        ],
      },
    ],
  };

  const workflowExamplesData = {
    badge: 'Real Situations',
    title: 'A few moments where the difference shows up',
    description: 'Small moments in the consultation room and after, where things used to slip.',
    workflows: [
      {
        trigger:
          'A first-time enquirer asks about lip filler on Instagram at lunchtime.',
        actions: [
          'She gets a warm reply within minutes with a consultation link',
          'Treatment options and pricing handled professionally',
          'A consultation is on the books before the end of the day',
        ],
      },
      {
        trigger:
          'She has a consultation but doesn’t book treatment on the day.',
        actions: [
          'A personal follow-up goes out within 48 hours',
          'Any concerns get answered without pressure',
          'A booking link makes saying yes easy',
        ],
      },
      {
        trigger:
          'A treatment is finished and she leaves happy.',
        actions: [
          'Aftercare guidance lands an hour later',
          'A review request goes out a few days after',
          'A top-up nudge appears at the right interval',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'small-med-spas-workflow-examples',
  };

  const caseStudiesData = {
    category: 'beauty-personal-care' as const,
    title: 'Related Case Studies',
    description:
      'Examples of how the system supports clinics and beauty-led businesses in this category.',
    limit: 2,
  };

  const exploreData = {
    badge: 'Related',
    description:
      'The other parts of the system that come up most often for small med spas trying to turn enquiries into long-term clients.',
    cards: [
      {
        icon: Workflow,
        title: 'Smart Website Systems',
        description:
          'See the core system layer that holds consultation, booking, and follow-up together.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Calendar,
        title: 'Booking & Scheduling System',
        description: 'Support consultation booking, reminder flow, and clearer next steps.',
        href: '/services/crm-infrastructure-implementation',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description: 'Strengthen treatment visibility, local trust, and med spa discovery.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description: 'Turn good treatment experiences into stronger trust and review flow.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Things small med spas usually ask',
    description: 'Straight answers about how this fits an aesthetics-first business.',
    faqs: [
      {
        question: 'Will automated replies feel cold or clinical?',
        answer:
          'No — they’re written warmly and professionally, and they buy you time to follow up personally. The alternative is silence for three days while she books elsewhere.',
      },
      {
        question: 'How does this help convert consultations into actual treatments?',
        answer:
          'A personal follow-up goes out within 48 hours if she didn’t book on the day, with a booking link and a chance to ask anything else. That alone changes consultation-to-treatment conversion noticeably.',
      },
      {
        question: 'Can it handle pre-care and aftercare without me remembering?',
        answer:
          'Yes — “no alcohol 24 hours before” goes out the day before, aftercare goes out within an hour of treatment. You stop doing it from memory.',
      },
      {
        question: 'How do I get more reviews without making it weird?',
        answer:
          'A polite request goes out a few days after treatment, when results are settling and she’s loving them. The timing matters — too early feels rushed, too late feels random.',
      },
      {
        question: 'Can past clients be brought back for top-ups automatically?',
        answer:
          'Yes — a friendly nudge at the right interval (filler, anti-wrinkle, etc.) brings regulars back without anyone in the clinic remembering to chase.',
      },
      {
        question: 'Do I need a brand new website?',
        answer:
          'Usually not. We look at what you have first. The leak is normally everything that happens after she enquires — not the site itself.',
      },
    ],
  };

  return {
    slug: 'small-med-spas',
    industries: ['med-spa'],
    systems: [
      'smart-website-systems',
      'crm-automation',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['booking-systems', 'client-reactivation', 'review-generation'],
    type: 'detail',
    parentSlug: 'beauty-personal-care',
    seo: {
      title: 'Small Med Spas — Stop Losing Filler Enquiries to a Three-Day Reply | MindWP',
      description:
        'For small med spas where high-intent treatment enquiries go cold, consultations don’t convert, and aftercare gets sent when somebody remembers. We put the system in place that turns curious enquiries into confident, returning clients.',
      keywords: [
        'med spa website design',
        'med spa consultation booking system',
        'small med spa marketing system',
        'med spa seo services',
        'med spa reputation management system',
      ],
      canonical: '/industries/beauty-personal-care/small-med-spas',
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
        'If high-intent enquiries sit for days, if consultations don’t turn into bookings, or if reviews don’t reflect the work — walk us through how the clinic runs and we’ll show you the first thing worth fixing.',
    },
  };
}

export const smallMedSpasIndustryPageData: IndustryPageData = buildSmallMedSpasIndustryPageData();
