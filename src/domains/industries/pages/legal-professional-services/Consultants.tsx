import {
  BriefcaseBusiness,
  Calendar,
  Clock3,
  FileText,
  MessageSquare,
  Search,
  ShieldCheck,
  Star,
  Workflow,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildConsultantsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Independent Consultants',
    title: 'A Founder Booked A Call With You And Two Other Consultants. Whoever Sounded Sharpest First Got The Project.',
    description:
      'Consulting work doesn’t walk in cold anymore. People shortlist three people on LinkedIn, send the same enquiry, and move on whoever replied with the clearest next step. We put the system in place that catches the right enquiries, books the discovery call, and keeps the proposal alive when the decision drags.',
    list: [
      'Enquiries that took two days to reply to',
      'Discovery calls lost in email tennis',
      'Proposals that went quiet for a month',
      'Past clients who would have referred if asked',
    ],
    cssPrefix: 'consultants-hero',
  };

  const imageStripData = {
    badge: 'How Consulting Enquiries Actually Land',
    title: 'It’s rarely “who’s the smartest” — it’s “who replied first and made the next step obvious”',
    description:
      'A founder shortlists three consultants from LinkedIn, sends the same DM Tuesday morning, and books a call with whoever replied first with a calendar link.',
    items: [
      {
        title: 'Qualification and fit enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing consulting qualification enquiries',
      },
      {
        title: 'Discovery-call booking',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing consultant discovery call booking',
      },
      {
        title: 'Scope clarity and next steps',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing consulting scope clarity and next steps',
      },
      {
        title: 'Proof and follow-up trust',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing consulting trust and follow-up',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'consultants-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where The Work Slips',
    title: 'You’re mid-delivery on a current project. The new enquiry waits two days. They booked someone else.',
    description: 'Same handful of leaks in nearly every solo or small consultancy. None of them are about the actual work.',
    benefits: [
      {
        icon: BriefcaseBusiness,
        title: 'A six-figure project enquiry sat in the inbox for two days',
        description:
          'You were heads-down delivering. By the time you replied, they’d already had a Zoom with somebody else.',
        iconType: 'primary' as const,
      },
      {
        icon: Calendar,
        title: 'Six emails to land one discovery call',
        description:
          '“Tuesday at 2?” “No good.” “Thursday morning?” The serious ones don’t stick around for that.',
        iconType: 'secondary' as const,
      },
      {
        icon: Clock3,
        title: 'A proposal went out and you never heard back',
        description:
          'Buying committee, board sign-off, summer holidays. One nudge after three weeks would have closed half of these.',
        iconType: 'accent' as const,
      },
      {
        icon: FileText,
        title: 'Past clients would refer if you asked. You haven’t.',
        description:
          'The work landed well three months ago. The thank-you was warm. Nobody ever asked for the testimonial.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to handle enquiries, run discovery calls, and keep proposals alive',
    description:
      'Each piece does one job. Together they keep the pipeline moving while you do the actual delivery.',
    featureCategories: [
      {
        title: 'Reply to enquiries the same hour, even mid-project',
        description:
          'Form lands, an instant acknowledgement goes out with what to expect next. Most prospects stop messaging other consultants.',
        icon: MessageSquare,
        features: [
          'Same-hour acknowledgement on every enquiry',
          'Project type and timing captured up front',
          'Holds the lead until you can call back',
        ],
      },
      {
        title: 'Book the discovery call without the email tennis',
        description:
          'Prospects pick a slot themselves. “When are you free?” gets replaced with a calendar link.',
        icon: Calendar,
        features: [
          'Self-serve discovery call booking',
          'Reminders the day before',
          'Reschedule link instead of a no-show',
        ],
      },
      {
        title: 'Set the scope before the call so the meeting is useful',
        description:
          'A short pre-call form goes out automatically — budget range, timeline, what good looks like. The conversation actually goes somewhere.',
        icon: FileText,
        features: [
          'Pre-call brief request automatically',
          'Sets the right expectations',
          'Discovery calls actually qualify',
        ],
      },
      {
        title: 'Keep proposals alive while the buying committee deliberates',
        description:
          'Proposal sent Monday, automatic check-in two weeks later, another a fortnight after that. Quietly closes more.',
        icon: Workflow,
        features: [
          'Proposal follow-up at the right intervals',
          'Pending engagements visible in one place',
          'Closing rate goes up without nagging',
        ],
      },
      {
        title: 'Turn finished projects into testimonials',
        description:
          'A polite request goes out the week after handover, when the result is freshest in their mind.',
        icon: ShieldCheck,
        features: [
          'Testimonial requests at the right moment',
          'Asked once, never again',
          'Proof catches up to the work',
        ],
      },
      {
        title: 'Show up for the right type of project online',
        description:
          'Service pages and authority content lined up so the right kind of company finds you first.',
        icon: Search,
        features: [
          'Pages for the niches you actually want',
          'Found on the searches that bring real briefs',
          'Less time on enquiries that aren’t a fit',
        ],
      },
    ],
    columns: 3 as const,
  };

  const comparisonData = {
    badge: 'What Actually Changes',
    title: 'A normal pipeline, before and after',
    description: 'The advisory work stays personal. The pipeline stops drifting between projects.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'How it runs now',
        items: [
          'A six-figure enquiry sat unread for two days. They picked someone else.',
          'Six emails to book one discovery call.',
          'A proposal went out and went quiet for a month.',
          '“We meant to ask for a testimonial” — said about every finished project.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How it runs after',
        items: [
          'Every enquiry gets an instant reply with the right next step.',
          'Discovery calls booked through one link. Pre-call brief in already.',
          'Proposals get followed up automatically at the right intervals.',
          'Testimonials get asked for the week after handover, every time.',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Where Most Consultants Start',
    title: 'Three stages — most consultants feel one of them more than the others',
    description: 'Pick whichever costs you the most projects right now.',
    packages: [
      {
        name: 'Stop losing the same-day enquiries',
        description: 'For when good prospects message three consultants and pick whoever replied first.',
        price: 'Stage 1',
        priceDetail: 'Start here if first-reply speed is the biggest leak',
        features: [
          'Instant acknowledgement on every enquiry',
          'Project type and timing captured up front',
          'Most prospects stop messaging the next consultant',
        ],
      },
      {
        name: 'Close the discovery calls and proposals that drift',
        description: 'For when discovery calls take six emails and proposals go quiet for a month.',
        price: 'Stage 2',
        priceDetail: 'Start here if booking and proposal follow-up is the leak',
        features: [
          'Self-serve discovery call booking',
          'Pre-call brief request automatically',
          'Proposal follow-up at the right intervals',
        ],
        popular: true,
      },
      {
        name: 'Build the proof that fills the pipeline on its own',
        description: 'For when finished projects deserve testimonials and referrals you never got.',
        price: 'Stage 3',
        priceDetail: 'Start here if proof and inbound is the weak spot',
        features: [
          'Testimonial requests after every project',
          'Service pages for the niches you want',
          'Less time on enquiries that aren’t a fit',
        ],
      },
    ],
  };

  const workflowExamplesData = {
    badge: 'Real Situations',
    title: 'A few moments where the difference shows up',
    description: 'Small moments in the week of an independent consultant where things used to drift.',
    workflows: [
      {
        trigger: 'A founder DMs on LinkedIn at 9am while you’re running a workshop.',
        actions: [
          'Instant acknowledgement goes out within minutes',
          'Project type, timing, and budget range captured up front',
          'They stop messaging the other two consultants',
        ],
      },
      {
        trigger: 'A discovery call is booked for next Thursday.',
        actions: [
          'Pre-call brief request goes out automatically',
          'Reminder lands the morning of the call',
          'The conversation actually qualifies',
        ],
      },
      {
        trigger: 'A proposal was sent two weeks ago and the buyer went silent.',
        actions: [
          'A friendly check-in goes out at the right interval',
          'Another a fortnight later if needed',
          'Proposal-to-engagement quietly improves',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'consultants-workflow-examples',
  };

  const caseStudiesData = {
    category: 'legal-professional-services' as const,
    title: 'Related Case Studies',
    description:
      'Examples of how the system supports professional service businesses in this category.',
    limit: 2,
  };

  const exploreData = {
    badge: 'Related',
    description:
      'The other parts of the system that come up most often for solo and small-team consultants.',
    cards: [
      {
        icon: Workflow,
        title: 'Smart Website Systems',
        description:
          'See the core system layer that holds consulting enquiry, discovery flow, and follow-up together.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Calendar,
        title: 'Booking & Scheduling System',
        description: 'Support discovery calls, reminders, and clearer next-step handling.',
        href: '/services/crm-infrastructure-implementation',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description: 'Strengthen area visibility, local credibility, and authority-led discovery.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description: 'Turn completed advisory work into stronger proof and review flow.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Things consultants usually ask',
    description: 'Straight answers about how this fits a solo or small consulting business.',
    faqs: [
      {
        question: 'I’m mostly delivering current projects. Will this need a marketing person?',
        answer:
          'No. The whole point is it runs while you’re in delivery. You’ll see what came in on your phone between calls, but nothing waits on you to operate it.',
      },
      {
        question: 'Can it really reply to enquiries faster than I can?',
        answer:
          'Yes — not with anything pretending to be you. Just an instant acknowledgement that captures what they need and tells them when you’ll be in touch. Most prospects stop messaging other consultants once they get that.',
      },
      {
        question: 'Will it integrate with my existing tools — Notion, HubSpot, whatever?',
        answer:
          'It sits in front of your existing stack. Whatever you already use stays. The system improves the public-facing side: enquiry, discovery, proposal follow-up, testimonials.',
      },
      {
        question: 'Can it help with proposal follow-up specifically?',
        answer:
          'Yes — friendly check-in messages go out at the right intervals after a proposal is sent. Proposal-to-engagement conversion changes noticeably without anybody chasing.',
      },
      {
        question: 'How do I get more testimonials and referrals without nagging?',
        answer:
          'A polite request goes out the week after handover, when the result is freshest in their mind. People who would have meant to leave one actually do.',
      },
      {
        question: 'Do I need to scrap my current website?',
        answer:
          'Usually not. We look at what you have first. The leak is normally the bit between the enquiry landing and the engagement starting — not the site itself.',
      },
    ],
  };

  return {
    slug: 'consultants',
    industries: ['consulting'],
    systems: [
      'smart-website-systems',
      'crm-automation',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['lead-qualification', 'crm-integration', 'pipeline-visibility'],
    type: 'detail',
    parentSlug: 'legal-professional-services',
    seo: {
      title: 'Consultants — Stop Losing Same-Day Enquiries, Discovery Calls & Proposals | MindWP',
      description:
        'For independent consultants where new enquiries get picked up by whoever replied first, discovery calls take six emails to book, and proposals go quiet for a month. We put the system in place that catches the right projects.',
      keywords: [
        'consultant website design',
        'consulting lead handling system',
        'discovery call booking workflow',
        'consulting seo services',
        'consulting review system',
      ],
      canonical: '/industries/legal-professional-services/consultants',
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
      title: 'Tell us where the pipeline is leaking',
      description:
        'If new enquiries take days to acknowledge, if discovery calls take a week of emails, or if proposals go quiet — walk us through how the work comes in and we’ll show you the first thing worth fixing.',
    },
  };
}

export const consultantsIndustryPageData: IndustryPageData = buildConsultantsIndustryPageData();
