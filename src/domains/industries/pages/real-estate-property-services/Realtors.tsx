import {
    Bell,
    Clock,
    Home,
    KeyRound,
    MessageSquare,
    PhoneMissed,
    Search,
    ShieldCheck,
    Star,
    Timer,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildRealtorsIndustryPageData(): IndustryPageData {
    const heroData = {
        badge: 'For Realtors & Estate Agents',
        title: 'You Were Mid-Viewing. Their Phone Rang Three Times. The Next Agent Picked Up On The First.',
        description:
            'Buyers and sellers do not wait. They scroll a portal, message four agents in eight minutes, and instruct whoever spoke to them like a person first. The deal is rarely lost on commission. It is lost in the seven minutes it took someone else to ring back.',
        list: ['Mid-viewing miss', 'Late callback', 'Cold portal lead', 'No nudge'],
        cssPrefix: 'realtors-hero',
    };

    const operatingPatternsData = {
        badge: 'Where Deals Decide Themselves',
        title: 'The first response wins the conversation. The last follow-up wins the instruction.',
        benefits: [
            {
                icon: PhoneMissed,
                title: 'The enquiry came in mid-viewing',
                description: 'You could not break the conversation in front of you. By the time you stepped out, they were on the phone with someone else.',
                iconType: 'primary' as const,
            },
            {
                icon: Timer,
                title: 'Portal leads went cold inside an hour',
                description: 'Rightmove or Zillow forwards an enquiry. So does your competitor. Whoever rings within ten minutes is the agent they remember.',
                iconType: 'secondary' as const,
            },
            {
                icon: Bell,
                title: 'Old leads were never circled back to',
                description: 'A buyer who was "looking in spring" never got a nudge in spring. They bought through whoever stayed in front of them.',
                iconType: 'accent' as const,
            },
        ],
        columns: 3 as const,
    };

    const workflowExamplesData = {
        badge: 'Real Moments',
        title: 'The minutes that decide who gets the call back',
        description: 'Tiny handoffs between portal, phone, and pipeline. They cost real instructions when they fail.',
        workflows: [
            {
                trigger: 'A portal enquiry lands while you are at a viewing.',
                actions: [
                    'They get a personal text inside a minute, not a portal auto-reply',
                    'It names you, confirms you have got it, and offers a callback window',
                    'They stop messaging the next three agents on the list',
                ],
            },
            {
                trigger: 'A missed call from an unknown mobile during a valuation.',
                actions: [
                    'A short SMS goes back automatically — "in a meeting, calling at 4"',
                    'The lead is held instead of going cold',
                    'You see the number with context before you ring',
                ],
            },
            {
                trigger: 'A buyer said "we will look again in autumn".',
                actions: [
                    'They get a nudge in autumn, not silence',
                    'It references the area and price they were looking at',
                    'You stay the agent they think of, not the one they have to search for',
                ],
            },
        ],
        backgroundColor: 'bg-base',
        cssPrefix: 'realtors-workflow-examples',
    };

    const systemLayersData = {
        badge: 'What We Put In Place',
        title: 'Be the first response, and the last follow-up, without being chained to the phone',
        description: 'You stay at viewings and valuations. The seven minutes that decide each enquiry stop depending on perfect timing.',
        featureCategories: [
            {
                title: 'Catch the enquiry in the first minute',
                description: 'Portal forms, web forms, missed calls — all answered by a personal-feeling reply within a minute.',
                icon: MessageSquare,
                features: [
                    'Missed-call text-back inside a minute',
                    'Portal leads acknowledged personally, not auto-replied',
                    'Buyer or seller intent captured up front',
                ],
            },
            {
                title: 'Hold the pipeline you keep forgetting',
                description: 'Old buyers, old vendors, old valuations — visible in one place, nudged on a sensible cycle.',
                icon: Clock,
                features: [
                    'Stale leads surfaced before they go to a competitor',
                    'Seasonal nudges for "looking in spring" buyers',
                    'Past valuations re-touched at the right moment',
                ],
            },
            {
                title: 'Make the callback a confirmed slot',
                description: 'A booked-in time beats "I will ring you back at some point". Vendors and buyers stop chasing.',
                icon: KeyRound,
                features: [
                    'Self-serve callback windows',
                    'Reminder before the call',
                    'Reschedule link instead of a no-answer',
                ],
            },
            {
                title: 'Turn completed deals into proof',
                description: 'A review request after exchange or completion, when the relief is freshest.',
                icon: ShieldCheck,
                features: [
                    'Review request triggered by completion',
                    'Asked when buyers or vendors are happiest',
                    'Reviews stack where local sellers actually look',
                ],
            },
            {
                title: 'Be findable for the streets you actually sell',
                description: 'Pages and Google profile lined up for the postcodes and price brackets you want more of.',
                icon: Search,
                features: [
                    'Found for area + property type',
                    'Agent profiles vendors trust',
                    'Less time on enquiries that are not a fit',
                ],
            },
        ],
        columns: 3 as const,
    };

    const exploreData = {
        badge: 'Related',
        description: 'The other parts that come up most often for estate agents and realtors.',
        cards: [
            {
                icon: MessageSquare,
                title: 'Smart Website Systems',
                description: 'Be the first response, even when you are mid-viewing.',
                href: '/services/smart-website-systems',
                gradient: 'purple',
                iconBg: 'purple',
            },
            {
                icon: Home,
                title: 'CRM & Pipeline Memory',
                description: 'Hold old buyers and vendors so they come back to you, not a competitor.',
                href: '/services/crm-infrastructure-implementation',
                gradient: 'teal',
                iconBg: 'teal',
            },
            {
                icon: Star,
                title: 'Reputation & Review Systems',
                description: 'Reviews from completed sales, where the next vendor is looking.',
                href: '/services/reputation-review-systems',
                gradient: 'amber',
                iconBg: 'amber',
            },
            {
                icon: Search,
                title: 'Local Authority & SEO Systems',
                description: 'Be the agent for the area, not just on the portal.',
                href: '/services/local-seo-authority',
                gradient: 'blue',
                iconBg: 'blue',
            },
        ],
        backgroundColor: 'bg-alt',
        columns: 2 as const,
    };

    const faqData = {
        title: 'Things agents usually ask',
        description: 'Honest answers about how this fits a phone-driven, viewing-led week.',
        faqs: [
            {
                question: 'Will buyers feel they are getting an automated response?',
                answer:
                    'No. The first message is short, written like you would text someone, and signed by you. The point is to hold them until you can ring back personally.',
            },
            {
                question: 'Can it tell a buyer enquiry from a vendor enquiry?',
                answer:
                    'Yes. The first reply asks one short question that splits buyer from vendor and routes accordingly.',
            },
            {
                question: 'I am out of the office most days. Who runs this?',
                answer:
                    'It runs itself. You see who is warm, who has booked a callback, and who needs a real call. You step in only when you want to.',
            },
            {
                question: 'What about buyers who said "not yet"?',
                answer:
                    'They get a nudge at the right point in the year — most agents find a real chunk of new instructions come from this alone.',
            },
            {
                question: 'Do we need a new website?',
                answer:
                    'Usually not. The leak is in the seven minutes after a portal enquiry, not in the homepage.',
            },
        ],
    };

    return {
        slug: 'realtors',
        industries: ['realtor'],
        systems: [
            'smart-website-systems',
            'crm-automation',
            'local-seo-authority',
            'reputation-review',
        ],
        topics: ['lead-response-time', 'follow-up', 'review-generation'],
        type: 'detail',
        parentSlug: 'real-estate-property-services',
        seo: {
            title: 'Realtors & Estate Agents — Win The Seven-Minute Window, Then The Pipeline | MindWP',
            description:
                'For estate agents and realtors where deals are decided in the minutes after a portal enquiry. We put first-minute response, callback booking, and pipeline memory in place so you stop losing instructions to whoever rang back fastest.',
            keywords: [
                'estate agent lead response',
                'realtor crm pipeline',
                'estate agent reputation system',
                'realtor local seo',
                'estate agent missed call follow-up',
            ],
            canonical: '/industries/real-estate-property-services/realtors',
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
            title: 'Tell us where the calls are going elsewhere',
            description:
                'If portal leads cool off before you can ring, or "looking in spring" buyers never come back, walk us through how the last few enquiries went and we will show you where the seven-minute window is being lost.',
        },
    };
}

export const realtorsIndustryPageData: IndustryPageData = buildRealtorsIndustryPageData();
