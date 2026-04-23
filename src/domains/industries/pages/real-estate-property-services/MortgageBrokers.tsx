import {
    AlarmClock,
    Banknote,
    CalendarCheck,
    FileSignature,
    Handshake,
    MessageSquare,
    PhoneCall,
    Search,
    ShieldCheck,
    Star,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildMortgageBrokersIndustryPageData(): IndustryPageData {
    const heroData = {
        badge: 'For Mortgage Brokers',
        title: 'They Found A House On Saturday. They Needed A Decision In Principle By Monday. You Saw The Email Tuesday.',
        description:
            'Mortgage enquiries do not arrive when you are at your desk. They arrive after a viewing, after an offer is being drafted, after a lender call has spooked the buyer. The broker who answers in the next two hours is usually the broker who places the case.',
        list: ['Weekend miss', 'Late callback', 'Lost DIP', 'Cold case'],
        cssPrefix: 'mortgage-brokers-hero',
    };

    const operatingPatternsData = {
        badge: 'Where Cases Decide Themselves',
        title: 'Buyers do not shop around for weeks. They pick whoever picked up.',
        benefits: [
            {
                icon: AlarmClock,
                title: 'The enquiry came in on a weekend',
                description: 'They were viewing on Saturday. Asked Sunday. By Monday morning, they had a decision in principle from someone else.',
                iconType: 'primary' as const,
            },
            {
                icon: PhoneCall,
                title: 'They were ringing three brokers in the same hour',
                description: 'Whoever rang back first got the call. The other two never heard from them again.',
                iconType: 'secondary' as const,
            },
            {
                icon: FileSignature,
                title: 'A pre-approved buyer never came back to complete',
                description: 'A DIP went out. They went quiet. The case quietly stalled because nobody followed up at the right point in the cycle.',
                iconType: 'accent' as const,
            },
        ],
        columns: 3 as const,
    };

    const workflowExamplesData = {
        badge: 'Real Moments',
        title: 'The hours that decide whose name goes on the application',
        description: 'Small handoffs that decide whether a buyer becomes a placed case or a cold lead.',
        workflows: [
            {
                trigger: 'A new enquiry lands at 9pm on a Sunday.',
                actions: [
                    'They get a personal-feeling reply within minutes',
                    'It confirms a callback first thing Monday',
                    'They stop ringing other brokers in the meantime',
                ],
            },
            {
                trigger: 'A DIP went out two weeks ago and the buyer has gone quiet.',
                actions: [
                    'A short, written-like-you check-in goes out',
                    'It references where they were in the buying cycle',
                    'A second nudge fires only if needed',
                ],
            },
            {
                trigger: 'A completion just landed.',
                actions: [
                    'A review request goes out the day after',
                    'A note is parked for the remortgage window',
                    'They stay your client, not the next broker\'s',
                ],
            },
        ],
        backgroundColor: 'bg-base',
        cssPrefix: 'mortgage-brokers-workflow-examples',
    };

    const systemLayersData = {
        badge: 'What We Put In Place',
        title: 'Be the broker who replied first, and the broker who is still there at remortgage',
        description: 'You keep doing the cases. The two-hour window after an enquiry, and the two-year window before a remortgage, both stop relying on memory.',
        featureCategories: [
            {
                title: 'Reply in the first hour, even on a weekend',
                description: 'Web forms, missed calls, and out-of-hours enquiries all answered by a personal-feeling reply within minutes.',
                icon: MessageSquare,
                features: [
                    'Out-of-hours acknowledgement that holds the lead',
                    'Buyer status captured (looking, offer, exchanged)',
                    'Routed to the right broker',
                ],
            },
            {
                title: 'Hold cases through the buying cycle',
                description: 'DIPs, full applications, valuations, exchanges — every stage has a follow-up cadence so cases stop stalling silently.',
                icon: CalendarCheck,
                features: [
                    'Stage-aware nudges for stalled cases',
                    'Visibility on every open case',
                    'Stops the moment they move forward',
                ],
            },
            {
                title: 'Keep clients warm to remortgage',
                description: 'Two and five-year fixes flagged in advance, with a structured re-engagement before they Google another broker.',
                icon: Banknote,
                features: [
                    'Remortgage windows surfaced early',
                    'Personalised re-engagement at the right point',
                    'Repeat business stops being lost to a portal',
                ],
            },
            {
                title: 'Turn completed cases into proof',
                description: 'A review request the day after completion, when the relief is freshest.',
                icon: ShieldCheck,
                features: [
                    'Review request triggered by completion',
                    'Asked once, never twice',
                    'Reviews catch up to the case load',
                ],
            },
            {
                title: 'Be findable when the offer is being drafted',
                description: 'Pages and Google profile lined up for the kind of buyer and area you actually want to serve.',
                icon: Search,
                features: [
                    'Found for area + buyer type',
                    'Broker profile that builds trust',
                    'Less time on enquiries that are not a fit',
                ],
            },
        ],
        columns: 3 as const,
    };

    const exploreData = {
        badge: 'Related',
        description: 'The other parts that come up most often for mortgage brokers.',
        cards: [
            {
                icon: Handshake,
                title: 'Smart Website Systems',
                description: 'Be the first reply, even at 9pm on a Sunday.',
                href: '/services/smart-website-systems',
                gradient: 'purple',
                iconBg: 'purple',
            },
            {
                icon: CalendarCheck,
                title: 'CRM & Case Follow-up',
                description: 'Hold every open DIP and case through the buying cycle.',
                href: '/services/crm-infrastructure-implementation',
                gradient: 'teal',
                iconBg: 'teal',
            },
            {
                icon: Star,
                title: 'Reputation & Review Systems',
                description: 'Reviews from completed cases, where the next buyer is reading.',
                href: '/services/reputation-review-systems',
                gradient: 'amber',
                iconBg: 'amber',
            },
            {
                icon: Search,
                title: 'Local Authority & SEO Systems',
                description: 'Be the broker name buyers find when the offer is being drafted.',
                href: '/services/local-seo-authority',
                gradient: 'blue',
                iconBg: 'blue',
            },
        ],
        backgroundColor: 'bg-alt',
        columns: 2 as const,
    };

    const faqData = {
        title: 'Things mortgage brokers usually ask',
        description: 'Honest answers about how this fits a deadline-driven, regulated practice.',
        faqs: [
            {
                question: 'Will buyers feel they are getting an automated response?',
                answer:
                    'No. The first message is short, named, and signed by you. The point is to hold the lead until you can ring personally — usually first thing the next morning.',
            },
            {
                question: 'Is automated follow-up appropriate in a regulated context?',
                answer:
                    'Used sparingly, yes. Nudges are factual, not advisory. Anything that touches advice is held for the broker.',
            },
            {
                question: 'How does this work with our case management or sourcing tool?',
                answer:
                    'It sits alongside. Case stages can feed in so nudges fire at the right moment.',
            },
            {
                question: 'What about clients we placed two years ago?',
                answer:
                    'Their fix end date is flagged in advance and a structured re-engagement runs before they search elsewhere. Most brokers find a real lift in remortgage retention from this alone.',
            },
            {
                question: 'Do we need a new website?',
                answer:
                    'Usually not. The biggest lift is in the first hour after enquiry and the months before remortgage, not in the homepage.',
            },
        ],
    };

    return {
        slug: 'mortgage-brokers',
        industries: ['mortgage-broker'],
        systems: [
            'smart-website-systems',
            'crm-automation',
            'reputation-review',
            'local-seo-authority',
        ],
        topics: ['lead-response-time', 'follow-up', 'review-generation'],
        type: 'detail',
        parentSlug: 'real-estate-property-services',
        seo: {
            title: 'Mortgage Brokers — Win The First Hour, Then The Remortgage | MindWP',
            description:
                'For mortgage brokers where weekend enquiries go to whoever replied first and remortgages are quietly lost to a portal. We put first-hour response, stage-aware case follow-up, and remortgage retention in place.',
            keywords: [
                'mortgage broker lead response',
                'mortgage broker case follow-up',
                'mortgage broker crm',
                'remortgage retention system',
                'mortgage broker local seo',
            ],
            canonical: '/industries/real-estate-property-services/mortgage-brokers',
        },
        hero: {
            ...heroData,
        },
        operatingPatterns: operatingPatternsData,
        workflowExamples: workflowExamplesData,
        systemLayers: systemLayersData,
        explore: exploreData,
        faq: faqData,
        cta: {
            title: 'Tell us where the cases are going elsewhere',
            description:
                'If weekend enquiries are getting placed by other brokers, or remortgages are quietly going to a portal, walk us through how the last few cases ran and we will show you the first thing worth fixing.',
        },
    };
}

export const mortgageBrokersIndustryPageData: IndustryPageData = buildMortgageBrokersIndustryPageData();
