import {
  Bell,
  Calendar,
  Home,
  MessageSquare,
  Search,
  ShieldCheck,
  Star,
  Users,
  Workflow,
  Wrench,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildPropertyManagersIndustryPageData(): IndustryPageData {
  const heroData = {
    badge: 'For Property Managers',
    title: 'A Landlord With 12 Units Got Three Quotes On Sunday Night. Whoever Sent A Clear Fee Breakdown Monday Morning Got The Portfolio.',
    description:
      'Owner enquiries land in the same inbox as tenant maintenance requests, and both wait. Landlords compare three managers in a weekend. Tenants send the same boiler complaint twice because nobody acknowledged the first one. We put the system in place that separates the two flows, gives owners visibility, and stops requests from disappearing.',
    list: [
      'Owner enquiries that sat with tenant complaints in the same inbox',
      'Maintenance requests that took three follow-ups before being logged',
      'Owner reports that took half a day to compile manually',
      'Reviews from happy landlords you never asked for',
    ],
    cssPrefix: 'property-managers-hero',
  };

  const imageStripData = {
    badge: 'How Property Enquiries Actually Land',
    title: 'Landlord with 12 units got three quotes on Sunday. Clearest fee breakdown wins.',
    description:
      'It’s landlord portfolio enquiries, urgent boiler failures, vacancy windows, owner reports the morning of a board meeting. Two completely different audiences competing for the same inbox.',
    items: [
      {
        title: 'Owner and management enquiries',
        image: '/images/placeholders/service-card-5.svg',
        alt: 'Abstract placeholder image representing property management owner enquiries',
      },
      {
        title: 'Tenant requests and communication',
        image: '/images/placeholders/service-card-6.svg',
        alt: 'Abstract placeholder image representing tenant communication and requests',
      },
      {
        title: 'Maintenance and scheduling flow',
        image: '/images/placeholders/service-card-7.svg',
        alt: 'Abstract placeholder image representing property maintenance coordination',
      },
      {
        title: 'Trust, reviews, and follow-up',
        image: '/images/placeholders/service-card-8.svg',
        alt: 'Abstract placeholder image representing property management follow-up and trust signals',
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'property-managers-image-strip',
  };

  const operatingPatternsData = {
    badge: 'Where Portfolios Get Lost',
    title: 'You’re sorting a leak in flat 4. The new portfolio enquiry sits unread.',
    description: 'Same handful of leaks across nearly every management business. None of them are about how well you actually manage properties.',
    benefits: [
      {
        icon: Users,
        title: 'A 12-unit portfolio enquiry sat in the inbox behind 14 maintenance complaints',
        description:
          'By the time it was spotted on Monday afternoon, the landlord had already booked a meeting with another firm.',
        iconType: 'primary' as const,
      },
      {
        icon: Wrench,
        title: 'A tenant submitted the same boiler complaint three times',
        description:
          'No acknowledgement on the first two. By the third, they’d already complained to the landlord and Trustpilot.',
        iconType: 'secondary' as const,
      },
      {
        icon: Bell,
        title: 'Monthly owner reports took half a day to compile manually',
        description:
          'Spreadsheets, screenshots, copy-paste. Owners still rang to ask when the report was coming.',
        iconType: 'accent' as const,
      },
      {
        icon: Home,
        title: 'You manage 180 properties. You have 14 reviews.',
        description:
          'Your owners are happy. Online you look like a two-flat operation because nobody asked for the review at the right moment.',
        iconType: 'primary' as const,
      },
    ],
    columns: 4 as const,
  };

  const systemLayersData = {
    badge: 'What Gets Put In Place',
    title: 'A steadier way to separate landlord enquiries from tenant requests',
    description:
      'Each piece does one job. Together they keep portfolios coming in while tenant requests stop slipping through the cracks.',
    featureCategories: [
      {
        title: 'Send landlord enquiries down a different path to tenants',
        description:
          'A landlord enquiring about portfolio management goes one place. A tenant reporting a leak goes another. Neither waits behind the other.',
        icon: MessageSquare,
        features: [
          'Separate intake for landlords vs tenants',
          'Portfolio enquiries flagged as priority',
          'Maintenance requests captured with photos and urgency',
        ],
      },
      {
        title: 'Acknowledge every tenant request automatically',
        description:
          'Tenant submits a request. Within seconds they get a reference number and an update. The same complaint stops being submitted three times.',
        icon: Calendar,
        features: [
          'Instant acknowledgement with reference number',
          'Status updates as the job progresses',
          'Repeat-complaint loops stop',
        ],
      },
      {
        title: 'Send owners their reports without compiling them by hand',
        description:
          'Monthly owner statements, occupancy stats, maintenance summaries — sent automatically on the same date every month. The phone stops ringing about reports.',
        icon: Workflow,
        features: [
          'Owner reports sent on schedule',
          'Occupancy and maintenance summaries automated',
          'Owners stop chasing the report',
        ],
      },
      {
        title: 'Win the landlord portfolio with a clear fee breakdown',
        description:
          'Landlord enquires Sunday night. They get a clear fee breakdown and a calendar link Monday morning. Most stop comparing.',
        icon: ShieldCheck,
        features: [
          'Fast response with fee transparency',
          'Calendar link for portfolio review meetings',
          'Stops the comparison shopping',
        ],
      },
      {
        title: 'Turn happy landlords into reviews',
        description:
          'A polite review request goes out after a successful renewal or a smooth maintenance episode. Owners who would have meant to leave one actually do.',
        icon: Star,
        features: [
          'Review requests timed to good moments',
          'Asked when landlords are most satisfied',
          'Reviews finally match the size of your portfolio',
        ],
      },
      {
        title: 'Show up first when local landlords search',
        description:
          'Pages and Google profile lined up so landlords in your patch find you first — not the corporate firm with a London office.',
        icon: Search,
        features: [
          'Pages for the property types you actually manage',
          'Found on Maps for local management searches',
          'Less time on enquiries from outside your area',
        ],
      },
    ],
    columns: 3 as const,
  };

  const comparisonData = {
    badge: 'What Actually Changes',
    title: 'A normal week, before and after',
    description: 'The relationships stay personal. The chasing stops.',
    comparisons: [
      {
        type: 'before' as const,
        title: 'How it runs now',
        items: [
          'Portfolio enquiry sat behind tenant complaints. Landlord booked elsewhere.',
          'Same boiler complaint submitted three times because nobody acknowledged it.',
          'Half a day spent compiling owner reports manually.',
          '“Meant to ask for a Google review” — said about every successful renewal.',
        ],
      },
      {
        type: 'after' as const,
        title: 'How it runs after',
        items: [
          'Landlord and tenant intake flow separately. Portfolio enquiries flagged as priority.',
          'Tenants get instant acknowledgement and a reference number.',
          'Owner reports sent automatically on the same date every month.',
          'Reviews get asked for after every good moment.',
        ],
      },
    ],
  };

  const pathwaysData = {
    badge: 'Where Most Property Managers Start',
    title: 'Three stages — most management firms feel one of them more than the others',
    description: 'Pick whichever costs you the most peace of mind right now.',
    packages: [
      {
        name: 'Stop losing the landlord enquiries',
        description: 'For when portfolio enquiries get buried behind tenant complaints.',
        price: 'Stage 1',
        priceDetail: 'Start here if landlord acquisition is the biggest leak',
        features: [
          'Separate intake for landlords vs tenants',
          'Fast response with fee breakdown',
          'Calendar link for portfolio review meetings',
        ],
      },
      {
        name: 'Sort the maintenance request chaos',
        description: 'For when tenants submit the same complaint three times.',
        price: 'Stage 2',
        priceDetail: 'Start here if maintenance coordination is the leak',
        features: [
          'Instant acknowledgement with reference number',
          'Status updates as the job progresses',
          'Repeat-complaint loops stop',
        ],
        popular: true,
      },
      {
        name: 'Automate owner reporting and reviews',
        description: 'For when owner reports take half a day and reviews never get asked for.',
        price: 'Stage 3',
        priceDetail: 'Start here if owner retention and proof are the weak spot',
        features: [
          'Owner reports sent on schedule',
          'Review requests timed to good moments',
          'Pages for the property types you actually manage',
        ],
      },
    ],
  };

  const workflowExamplesData = {
    badge: 'Real Situations',
    title: 'A few moments where the difference shows up',
    description: 'Small moments in the week of a property manager where things used to slip through.',
    workflows: [
      {
        trigger: 'A landlord with a 12-unit portfolio enquires Sunday night.',
        actions: [
          'They get a clear fee breakdown and calendar link Monday morning',
          'They book a portfolio review meeting before the week starts',
          'They stop comparing the other two firms',
        ],
      },
      {
        trigger: 'A tenant reports a leaking boiler at 9pm.',
        actions: [
          'They get an instant acknowledgement with a reference number',
          'A contractor is dispatched and the tenant gets status updates',
          'The same complaint stops being submitted three times',
        ],
      },
      {
        trigger: 'It’s the first of the month — owner report day.',
        actions: [
          'Reports compile and send automatically with occupancy and maintenance summaries',
          'Owners stop ringing to ask when the report is coming',
          'You spend the morning on actual work instead of spreadsheets',
        ],
      },
    ],
    backgroundColor: 'bg-base',
    cssPrefix: 'property-managers-workflow-examples',
  };

  const caseStudiesData = {
    category: 'real-estate-property-services' as const,
    title: 'Related Case Studies',
    description: 'Examples of how the system supports property businesses in this category.',
    limit: 2,
  };

  const exploreData = {
    badge: 'Related',
    description:
      'The other parts of the system that come up most often for property managers.',
    cards: [
      {
        icon: Workflow,
        title: 'Smart Website Systems',
        description:
          'See the core system layer that holds property enquiries, coordination flow, and follow-up together.',
        href: '/services/smart-website-systems',
        gradient: 'purple',
        iconBg: 'purple',
      },
      {
        icon: Calendar,
        title: 'Booking & Scheduling System',
        description: 'Support inspections, visits, reminders, and clearer next-step handling.',
        href: '/services/crm-infrastructure-implementation',
        gradient: 'teal',
        iconBg: 'teal',
      },
      {
        icon: Search,
        title: 'Local Authority & SEO Systems',
        description:
          'Strengthen service-area visibility, location credibility, and property discovery support.',
        href: '/services/local-seo-authority',
        gradient: 'blue',
        iconBg: 'blue',
      },
      {
        icon: Star,
        title: 'Reputation & Review Systems',
        description:
          'Turn completed service coordination into stronger trust proof and review flow.',
        href: '/services/reputation-review-systems',
        gradient: 'amber',
        iconBg: 'amber',
      },
    ],
    backgroundColor: 'bg-alt',
    columns: 2 as const,
  };

  const faqData = {
    title: 'Things property managers usually ask',
    description: 'Straight answers about how this fits a management firm.',
    faqs: [
      {
        question: 'My team is small. Will this need someone new in the office?',
        answer:
          'No. The whole point is it runs while the team handles actual properties. Tenant acknowledgements, owner reports, landlord enquiries — all automatic. The team handles the work that needs a human.',
      },
      {
        question: 'Will it work alongside my management software (Arthur, PayProp, Reapit, etc)?',
        answer:
          'Yes. Whatever you use stays. The system improves the bit between the enquiry coming in and the job sitting in your management software ready to be worked on.',
      },
      {
        question: 'How does separating landlord and tenant enquiries actually work?',
        answer:
          'The website asks one question up front — “Are you a landlord or a tenant?”. Landlords go to a portfolio enquiry flow. Tenants go to a maintenance request flow. Neither waits behind the other.',
      },
      {
        question: 'What about repeat tenant complaints?',
        answer:
          'Every request gets an instant acknowledgement with a reference number and a status update as it progresses. Tenants stop submitting the same complaint because they can see it’s been received and what’s happening.',
      },
      {
        question: 'How do I stop owners ringing for their monthly reports?',
        answer:
          'Owner reports compile and send automatically on the same date every month — occupancy stats, maintenance summaries, financials. The phone stops ringing about reports.',
      },
      {
        question: 'Do I need to scrap my current website?',
        answer:
          'Usually not. We look at what you have first. The leak is normally the bit between an enquiry and the job sitting in your management software — not the site itself.',
      },
    ],
  };

  return {
    slug: 'property-managers',
    industries: ['property-management'],
    systems: [
      'smart-website-systems',
      'crm-automation',
      'local-seo-authority',
      'reputation-review',
    ],
    topics: ['lead-routing', 'crm-pipeline', 'pipeline-visibility'],
    type: 'detail',
    parentSlug: 'real-estate-property-services',
    seo: {
      title: 'Property Managers — Stop Losing Landlord Enquiries, Tenant Requests & Owner Trust | MindWP',
      description:
        'For property managers where landlord portfolio enquiries get buried behind tenant complaints, where the same boiler request is submitted three times, and where owner reports take half a day to compile. We put the system in place that catches them.',
      keywords: [
        'property management website design',
        'property management lead handling system',
        'tenant maintenance request workflow',
        'property management seo services',
        'property management review system',
      ],
      canonical: '/industries/real-estate-property-services/property-managers',
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
      title: 'Tell us where the portfolio is leaking',
      description:
        'If landlord enquiries get buried behind tenant complaints, if maintenance requests get submitted three times, or if owner reports take half a day to compile — walk us through how the firm runs and we’ll show you the first thing worth fixing.',
    },
  };
}

export const propertyManagersIndustryPageData: IndustryPageData =
  buildPropertyManagersIndustryPageData();
