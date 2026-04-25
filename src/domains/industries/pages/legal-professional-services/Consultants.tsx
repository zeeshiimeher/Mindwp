import {
  ArrowRightCircle,
  BriefcaseBusiness,
  Compass,
  HelpCircle,
  Layers,
  Mail,
  Search,
  Sparkles,
  Target,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildConsultantsIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Independent Consultants',
    title: 'The Discovery Call Went Well. Then "Let Us Think About It." Then Nothing.',
    description:
      'Most consulting work is not lost in the call itself. It is lost afterwards, when the buyer cannot clearly repeat the offer internally, there is no obvious next step, and the conversation slowly disappears into "we are still discussing it" silence.',
    list: ['Unclear offer', 'No next step', 'Quiet stall'],
    cssPrefix: 'consultants-hero',
  };

  const operatingPatternsData = {
    badge: 'Where Engagements Stall',
    title: 'They did not pick a competitor. They just could not pick anything at all.',
    description:
      'Most consulting opportunities do not end with a clean rejection. They slow down after a promising first conversation, then get harder to recover because nobody turned the value into something simple to carry forward internally.',
    benefits: [
      {
        icon: HelpCircle,
        title: '"What exactly do we get?" never got answered cleanly',
        description:
          'The call covered the problem well enough, but the offer still sounded broad when the buyer tried to repeat it later. Once it sounds vague inside the business, the engagement usually slows down without anyone saying no outright.',
        iconType: 'primary' as const,
      },
      {
        icon: Compass,
        title: 'No clear next step after the discovery call',
        description:
          'The call ended with "we will be in touch" instead of a defined next move, date, or decision point. That creates a gap where momentum drops and the prospect has nothing concrete to carry forward on your behalf.',
        iconType: 'secondary' as const,
      },
      {
        icon: ArrowRightCircle,
        title: 'It went quiet inside the buying committee',
        description:
          "A champion took it to a board, a partner group, or a CFO meeting and had to explain it from memory. Without a clear summary or structured follow-up after the discovery call, the engagement lost shape in someone else's conversation.",
        iconType: 'accent' as const,
      },
    ],
    columns: 3 as const,
  };

  const systemLayersData = {
    badge: 'What We Put In Place',
    title:
      'Make the offer easy to repeat, the next step obvious, and the follow-up quietly automatic',
    description:
      'You keep delivering the consulting work itself. What changes is the part that used to depend on the buyer remembering your offer clearly, explaining it well internally, and then deciding to come back without any structured follow-up.',
    featureCategories: [
      {
        title: 'Make the offer easy to forward',
        description:
          'A clear, plain-English summary explains what they get, why it matters, and what shape the engagement takes. It is built to survive being passed around internally without you needing to jump back in and translate it again.',
        icon: Layers,
        features: [
          'Scope written in client language, not consultant language',
          'Outcome stated up front, not buried',
          'Easy for a champion to forward without rewriting',
        ],
      },
      {
        title: 'Define the next step on every call',
        description:
          'Discovery does not end on "we will think about it" and then silence. It ends on a specific next move, date, or follow-up point that both sides can see clearly once the call is over.',
        icon: Target,
        features: [
          'Standard "next step" template per call type',
          'Sent within an hour while the call is fresh',
          'Holds the conversation while they decide internally',
        ],
      },
      {
        title: 'Follow up the quiet ones gracefully',
        description:
          'Two short nudges go out during the weeks they are discussing it internally and deciding who needs to sign it off. They read like you wrote them, stay calm in tone, and stop the moment a real reply comes back.',
        icon: Mail,
        features: [
          'Spaced follow-ups that survive a buying committee',
          'Stops the moment they reply or commit',
          'Different cadence for retainer vs project',
        ],
      },
      {
        title: 'Position for the work you want more of',
        description:
          'Your pages, case studies, and search visibility line up around the kind of brief you actually want to win. That makes the offer easier to recognise before the buyer ever reaches the discovery-call stage.',
        icon: Search,
        features: [
          'Found for the niche you actually serve',
          'Pages that read as a specialist, not a generalist',
          'Fewer enquiries that are not a fit',
        ],
      },
      {
        title: 'Turn finished engagements into proof',
        description:
          'A short, structured ask goes out after delivery so testimonials and case studies stop living on the "we should do that later" list. That proof then helps the next buyer trust the engagement more quickly.',
        icon: Sparkles,
        features: [
          'Testimonial request at the right moment',
          'Light-touch case study capture',
          'Proof that does the qualifying for you',
        ],
      },
    ],
    columns: 3 as const,
  };

  const workflowExamplesData = {
    badge: 'Real Moments',
    title: 'The points where consulting deals usually decide themselves',
    description:
      "These are the small handoffs that usually decide whether the engagement keeps moving or quietly dies in someone else's inbox. They tend to look minor at the time, but they are where most of the drift actually starts.",
    workflows: [
      {
        trigger: 'A discovery call just ended.',
        actions: [
          'A short summary lands within the hour',
          'It states the outcome, the scope, and the next step in plain language',
          'It is forwardable as-is to a partner or board',
        ],
      },
      {
        trigger: 'A champion is taking it internal and has gone quiet.',
        actions: [
          'A polite check-in lands the following week',
          'It offers to join a short call with the wider team',
          'It removes the burden of explaining you for them',
        ],
      },
      {
        trigger: 'An engagement just wrapped.',
        actions: [
          'A structured testimonial ask goes out',
          'A light case-study capture is offered',
          'The next piece of work is opened without a sales feel',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'consultants-workflow-examples',
  };

  const exploreData = {
    badge: 'Related',
    description:
      'These are the supporting services that come up most often once a consultant sees how much is being lost in clarity and follow-up after the first call. Each one strengthens recognition, follow-through, proof, or visibility.',
    cards: [
      {
        icon: BriefcaseBusiness,
        title: 'Smart Website Systems',
        description:
          'Helps your pages read like a specialist offer with a clear next step, not a broad consulting promise that is hard to pin down.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Mail,
        title: 'CRM & Follow-up Automation',
        description:
          'Keeps open conversations visible and sends the right follow-up while the buyer is still carrying your offer through internal discussions.',
        href: '/services/crm-infrastructure-implementation',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Authority & SEO Systems',
        description:
          'Helps you get found for the niche brief you actually want, so the right kind of buyer is seeing a clearer offer from the start.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Sparkles,
        title: 'Reputation & Proof Systems',
        description:
          'Captures testimonials and case studies before they slip away, so the next buyer has something solid to trust when the decision gets discussed internally.',
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
    description:
      'These are the practical questions that usually come up in a relationship-led, longer-cycle consulting practice where the work is serious and the decision still needs holding together afterwards. Straight answers, no consultancy fluff.',
    faqs: [
      {
        question: 'Will this make my work feel productised?',
        answer:
          'Only the offer summary, and only enough that a busy buyer can repeat it. The actual delivery stays as bespoke as it has always been.',
      },
      {
        question: 'My buying cycles are months long. Does that work?',
        answer:
          'Yes. The follow-up cadence is built for buying committees, board sign-offs, and quiet quarters. It paces, it does not chase.',
      },
      {
        question: 'What if I do not want to send templated follow-ups?',
        answer:
          'They are written like you would write them. You can review or pause anything. The point is to stop missing the moment, not to remove your judgement.',
      },
      {
        question: 'Will this help with referrals and past clients?',
        answer:
          'Directly. A structured testimonial ask after delivery, plus a quiet door for the next piece of work, is where most independent consultants find unexpected revenue.',
      },
      {
        question: 'Do I need a new website?',
        answer:
          'Sometimes. Often the bigger lift is in the offer itself — making it easy for a buyer to repeat — before any redesign.',
      },
    ],
  };

  return {
    seo: {
      title:
        'Independent Consultants — Stop Losing Engagements To "Let Us Think About It" | MindWP',
      description:
        'For independent consultants where discovery calls go well but engagements quietly die in buying committees. We help sharpen the offer, define the next step, and follow up gracefully through long decisions.',
      canonical: '/industries/legal-professional-services/consultants',
    },
    slug: 'consultants',
    industries: ['consulting'],
    systems: [
      'smart-website-systems',
      'crm-automation',
      'reputation-review',
      'local-seo-authority',
    ],
    topics: ['lead-qualification', 'follow-up', 'pipeline-visibility'],
    type: 'detail',
    parentSlug: 'legal-professional-services',
    hero: {
      ...heroData,
    },
    operatingPatterns: operatingPatternsData,
    systemLayers: systemLayersData,
    workflowExamples: workflowExamplesData,
    explore: exploreData,
    faq: faqData,
    cta: {
      title: 'Tell us where the conversations stall',
      description:
        'If discovery calls go well but the prospect stops responding afterwards, walk us through the last few that went quiet and we will show you whether the offer, next step, or follow-up is where it is breaking down.',
    },
  };
}

export const consultantsIndustryPageData: IndustryPageData = buildConsultantsIndustryPageData();
