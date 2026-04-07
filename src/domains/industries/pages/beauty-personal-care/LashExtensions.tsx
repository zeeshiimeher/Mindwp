import { Bell, Calendar, Clock3, MapPinned, Search, Sparkles, Star, Workflow } from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildLashExtensionsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'Expansion Lane',
    title: 'Smart Website Systems for Lash Booking, Visibility, and Follow-Up',
    description:
      'The website should make booking clear, protect the diary with reminders, and keep trust-building follow-up consistent — even when the provider works alone.',
    list: [
      'Direct booking path',
      'Diary protection',
      'Consistent review follow-up',
      'Visible local trust',
    ],
    cssPrefix: 'lash-extensions-hero',
  };

  const imageStripData = {
    badge: 'Service Environment',
    title: 'A lash workflow depends on clarity before the appointment even starts',
    description:
      'Consultation details, prep guidance, timing, deposits, reminders, aftercare, and review requests all shape the client experience. When those steps stay manual, the day gets noisier fast.',
    items: [
      {
        title: 'Consultation and eligibility',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing lash consultation and eligibility checks',
      },
      {
        title: 'Appointment preparation',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing appointment preparation guidance',
      },
      {
        title: 'Treatment-day timing',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing treatment-day timing and scheduling',
      },
      {
        title: 'Aftercare and rebooking',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing aftercare and rebooking for lash services',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'lash-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Operating Patterns',
    title: 'Where lash providers lose time and booking stability',
    description:
      'The pressure comes from repeat coordination work around one-to-one appointments. The issue is rarely effort — it is the lack of a reliable operating path around the appointment itself.',
    benefits: [
      {
        icon: Sparkles,
        title: 'Enquiries arrive outside working hours',
        description:
          'Potential clients often message in the evening or between appointments, which makes fast, consistent replies hard to maintain manually.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'No-shows and late changes disturb the diary',
        description:
          'A single missed appointment can affect income, timing, and the rest of the day when reminders, deposits, or policies are unclear.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'Prep, patch test, and aftercare steps get repeated manually',
        description:
          'The same explanations get sent again and again before and after appointments, adding admin pressure and inconsistency.',
        iconType: 'accent' as const,
      },
      {
        icon: MapPinned,
        title: 'Trust signals are present but not connected',
        description:
          'Photos, reviews, pricing, policies, and location visibility all exist — but they do not work together to support booking confidence.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'System Layers',
    title: 'The working layers behind a steadier lash business',
    description:
      'The system supports the whole lash workflow from enquiry to repeat booking — not just disconnected tools bolted on.',
    featureCategories: [
      {
        title: 'Enquiry and reply layer',
        description:
          'Handles questions about treatments, pricing, patch tests, and availability with a consistent first response.',
        icon: Sparkles,
        features: [
          'Faster first replies',
          'Consistent booking guidance',
          'After-hours response support',
        ],
      },
      {
        title: 'Booking and reminder layer',
        description:
          'Connects service selection, availability, deposits, confirmation, and reminders into one coordinated path.',
        icon: Calendar,
        features: ['Online booking flow', 'Reminder timing', 'Deposit and policy visibility'],
      },
      {
        title: 'Client preparation layer',
        description:
          'Delivers prep guidance, consultation questions, patch-test information, and aftercare content predictably.',
        icon: Bell,
        features: ['Pre-appointment guidance', 'Patch-test messaging', 'Aftercare follow-up'],
      },
      {
        title: 'Visibility and trust layer',
        description:
          'Ties service pages, local search, and review proof together so discovery turns into bookings.',
        icon: Search,
        features: [
          'Service-page clarity',
          'Google Business Profile support',
          'Local trust reinforcement',
        ],
      },
      {
        title: 'Retention and reputation layer',
        description:
          'Handles review requests and rebooking prompts so good experiences stay visible and repeat visits compound.',
        icon: Star,
        features: ['Review requests', 'Rebooking prompts', 'Longer-term trust building'],
      },
    ],
    columns: 3 as const,
  };

  const comparisonData = {
    badge: 'Operational Shift',
    title: 'From reactive booking management to a more predictable service flow',
    description:
      'The personal service stays. The repeatable friction around booking, reminders, and follow-up gets removed.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'Before the workflow is structured',
        items: [
          'Client questions sit in DMs until there is time to reply',
          'Deposits, preparation, and policies are explained repeatedly',
          'Reminders and follow-up happen when there is a gap between clients',
          'Trust depends on manual reassurance during every booking exchange',
        ],
      },
      {
        type: 'after' as const,
        title: 'After the workflow is aligned',
        items: [
          'Clients can understand services, pricing, and next steps sooner',
          'Booking and reminder flow protects the calendar more consistently',
          'Preparation and aftercare guidance can be delivered in a calmer way',
          'Reviews and rebooking prompts happen with less manual chasing',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Lead To Booking Flow',
    title: 'From enquiry to appointment and follow-up',
    description:
      'Each stage moves people through a different part of the journey — from first contact to appointment readiness to repeat booking.',
    packages: [
      {
        name: 'Enquiry to booking setup',
        description:
          'Gives the website enough structure that clients can understand services, pricing, and availability before reaching out.',
        price: 'Flow stage 1',
        priceDetail: 'Best when the main issue is clarity before booking',
        features: [
          'Service-page structure for lash treatments',
          'Pricing, FAQ, and policy clarity',
          'Basic enquiry capture and direction',
        ],
        buttonText: 'Talk Through Scope',
        buttonHref: '/contact',
      },
      {
        name: 'Booking protection setup',
        description:
          'Adds booking protection through reminders, deposit visibility, and post-visit follow-up.',
        price: 'Flow stage 2',
        priceDetail: 'Best when no-shows and follow-up consistency are the pressure points',
        features: [
          'Online booking with reminder support',
          'Deposit and rescheduling visibility',
          'Review and rebooking prompts',
        ],
        popular: true,
        buttonText: 'See the Setup',
        buttonHref: '/contact',
      },
      {
        name: 'Follow-up and retention setup',
        description:
          'Connects enquiry handling, preparation, reminders, reviews, and rebooking into one coordinated flow.',
        price: 'Flow stage 3',
        priceDetail: 'Best when multiple communication steps need to work together',
        features: [
          'Enquiry and reply workflow support',
          'Automations across prep, reminders, and follow-up',
          'Operational touchpoints for better predictability',
        ],
        buttonText: 'Request Details',
        buttonHref: '/contact',
      },
    ],
  };

  const workflowExamplesData = {
    badge: 'Follow-Up Examples',
    title: 'What the lead, booking, and follow-up flow looks like in practice',
    description:
      'Repeatable situations where the system removes friction while keeping the business personal.',
    workflows: [
      {
        trigger: 'A new client wants to know if a lash lift or extensions are the better fit.',
        actions: [
          'Send the right service explanation and booking path',
          'Collect any key consultation details early',
          'Move the client into the right appointment type',
        ],
      },
      {
        trigger:
          'An appointment is booked and the client needs prep guidance, timing, and policy details.',
        actions: [
          'Send preparation guidance automatically',
          'Confirm deposit, timing, or rescheduling expectations',
          'Reduce avoidable no-shows and day-of confusion',
        ],
      },
      {
        trigger: 'The appointment is done and the studio needs a review and a rebooking prompt.',
        actions: [
          'Send a well-timed review request',
          'Share aftercare or next-step guidance',
          'Create a cleaner path back to the next appointment',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'lash-workflow-examples',
  };

  const caseStudiesData = {
    category: 'beauty-personal-care' as const,
    title: 'Related Case Studies',
    description: 'Examples of how the system supports businesses in this category.',
    limit: 2,
  };

  const exploreData = {
    badge: 'Explore',
    description:
      'Relevant service layers for lash studios that want clearer booking, stronger trust, and steadier follow-up.',
    cards: [
      {
        icon: Workflow,
        title: 'Smart Website Systems',
        description: 'See the core system layer that holds booking, trust, and follow-up together.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Calendar,
        title: 'Booking & Scheduling System',
        description: 'Support online booking, reminders, and clearer appointment handling.',
        href: '/services/booking-scheduling-system',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description: 'Strengthen local visibility and treatment-page trust.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description: 'Turn client follow-up into stronger proof and review flow.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-alt',
    ctaLabel: 'View Service',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Common questions about lash studio systems',
    description: 'Common questions about MindWP for lash extension businesses',
    faqs: [
      {
        question: 'How can lash technicians improve their online presence?',
        answer:
          'Keep your Google Business Profile up to date with clear photos, accurate services, and consistent business details. On your website, use dedicated pages for key services (classic, volume, hybrid, lash lifts, infills) and make it easy for clients to understand pricing and availability. Collect reviews with a simple, repeatable process and post occasional updates so your profile stays active.',
      },
      {
        question: 'Should lash technicians take deposits when clients book online?',
        answer:
          'Deposits are often a good fit for appointment-based services because they set expectations and reduce last-minute cancellations. If you do take deposits, keep the policy simple and visible at booking (what it covers, rescheduling rules, and how it is applied to the final price). We can support deposit collection as part of the booking flow.\n\nThis is not financial or legal advice — use a policy that fits your local rules and your business model.',
      },
      {
        question: 'Can lash studios automate appointment reminders to reduce no-shows?',
        answer:
          'Yes. Automated SMS and email reminders can reduce missed appointments by keeping bookings top of mind. You can also add preparation reminders (for example: arrive with clean lashes) and follow-up messages with aftercare tips, so clients feel looked after and your day stays predictable.',
      },
      {
        question: "What's the best way for lash artists to get Google reviews?",
        answer:
          'Use a consistent review request process after appointments, with a direct review link and a short, polite message. The key is timing: send it soon enough that the experience is fresh, without making the client feel pressured. Our system can automate these requests with sensible defaults.\n\nAlways follow platform rules and keep requests genuine (no incentives).',
      },
      {
        question: 'How can mobile lash technicians rank on Google Maps without a salon address?',
        answer:
          'Set your Google Business Profile up as a service-area business and define the areas you serve. On your website, add clear service-area/location pages (only where you genuinely operate) and keep your business details consistent across listings. This helps Google understand where you work and what you offer.',
      },
      {
        question: 'Should lash technicians show pricing on their website?',
        answer:
          'Usually, yes. Clear pricing reduces back-and-forth messages and helps clients self-qualify. If your services vary, you can show a starting price and explain what affects the final cost (for example: fill level, time, or style), so expectations are aligned before booking.',
      },
      {
        question: 'Can lash technicians automate new client consultations and patch tests?',
        answer:
          'Yes. You can use forms and automated messages to collect consultation details, share preparation guidance, and handle any required patch test steps in a consistent way. The goal is to keep onboarding calm, reduce risk, and avoid manual chasing.\n\nHealth-related requirements vary — follow your local guidance and your insurer’s rules.',
      },
      {
        question: 'How can lash studios compete with beauty chains like Blink Brow Bar?',
        answer:
          'Focus on what you can do consistently: calm communication, clear expectations, reliable booking, and visible proof of work (before/after, reviews, and service pages). Local search visibility helps, but so does a smooth experience: quick answers, clear policies, and a predictable schedule.',
      },
      {
        question: 'Should lash technicians create separate pages for different lash styles?',
        answer:
          'It can help. Separate pages for key services (classic, volume, hybrid, lash lifts, infills) make it easier for clients to find the right option and understand what they’re booking. It also helps search engines match your pages to specific queries, as long as the content is genuinely useful.',
      },
      {
        question: 'How long does it take for a lash technician to get bookings from SEO?',
        answer:
          'It varies by location and competition. Profile cleanup and website improvements can start helping relatively quickly, but consistent results usually take time because search visibility compounds. If you need enquiries sooner, you can combine a solid SEO foundation with short-term channels while organic visibility builds.\n\nWe focus on the foundational work first: clear service pages, booking clarity, and trust signals (reviews and proof).',
      },
    ],
  };

  return {
    slug: 'lash-lift-and-extensions',
    industries: ['lash-extensions'],
    systems: [
      'smart-website-systems',
      'crm-automation',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['booking-automation', 'no-show-reduction', 'review-generation'],
    type: 'detail',
    parentSlug: 'beauty-personal-care',
    relatedContent: {
      enabled: false,
    },
    seo: {
      title: 'Lash Lift & Extensions — Calm Booking & Visibility | MindWP',
      description:
        'Support lash studios with calm booking flows, clear information, and trust-led reviews.',
      keywords: [
        'lash extension booking system',
        'lash salon crm automation',
        'lash no show reduction',
        'lash studio review automation',
        'lash business local seo',
      ],
      canonical: '/industries/beauty-personal-care/lash-lift-and-extensions',
    },
    hero: {
      ...heroData,
      primaryAction: { label: 'Fill More Lash Appointments', href: '/contact' },
      secondaryAction: {
        label: 'See Smart Website Systems',
        href: '/services/smart-website-systems',
      },
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
      title: 'Build a calmer lash booking system',
      description:
        'If enquiry gaps, booking friction, inconsistent reminders, or weak follow-up are slowing things down, we can map a practical setup around how the service runs.',
      primaryAction: { variant: 'white', label: 'Fill More Lash Appointments', href: '/contact' },
      secondaryAction: {
        label: 'See the Category Approach',
        href: '/industries/beauty-personal-care',
      },
    },
  };
}

export const lashExtensionsIndustryPageData: IndustryPageData =
  buildLashExtensionsIndustryPageData();
