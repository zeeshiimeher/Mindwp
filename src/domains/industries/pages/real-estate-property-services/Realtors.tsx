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
            'Buyers and sellers do not sit on an enquiry for long, especially when they are halfway through comparing agents on a portal. A viewing request, missed call, or late reply can turn into a booked valuation or a different agent before you have even got back to the car.',
        list: ['Viewing gaps', 'Late calls', 'Missed follow-up'],
        cssPrefix: 'realtors-hero',
    };

    const operatingPatternsData = {
        badge: 'Where Deals Decide Themselves',
        title: 'The first response wins the conversation. The last follow-up wins the instruction.',
        description:
            'Most agency work slips in two places: the first few minutes after contact, and the quiet stretch after the first conversation ends. If either one goes loose, the instruction often moves without any dramatic warning.',
        benefits: [
            {
                icon: PhoneMissed,
                title: 'The enquiry came in mid-viewing',
                description: 'You could not break the viewing conversation in front of you to answer a fresh call or viewing request. By the time you stepped outside and listened back, another agent had already got the first proper conversation.',
                iconType: 'primary' as const,
            },
            {
                icon: Timer,
                title: 'Portal leads went cold inside an hour',
                description: 'A portal lead comes through, and the same lead likely goes through to two or three other agents nearby. The one who rings inside ten minutes usually becomes the name they remember when the instruction gets serious later that day.',
                iconType: 'secondary' as const,
            },
            {
                icon: Bell,
                title: 'Old leads were never circled back to',
                description: 'A buyer who said "we are probably looking again in spring" never heard from you in spring. A vendor who wanted to wait until summer never got the second call. The deal did not vanish overnight. It just moved to the person who replied again.',
                iconType: 'accent' as const,
            },
        ],
        columns: 3 as const,
    };

    const workflowExamplesData = {
        badge: 'Real Moments',
        title: 'The minutes that decide who gets the call back',
        description: 'These are the small handoffs between portal, phone, and follow-up that decide who stays in the frame. When they fail, the instruction often slips before anybody even says they have moved on.',
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
        description: 'You stay at viewings, valuations, and negotiations. The minutes that decide each enquiry, plus the later follow-up that keeps it alive, stop depending on you being perfectly free at exactly the right second.',
        featureCategories: [
            {
                title: 'Catch the enquiry in the first minute',
                description: 'Portal forms, website forms, viewing requests, and missed calls all get a reply that feels personal within a minute. That keeps the lead warm until you can give it proper attention.',
                icon: MessageSquare,
                features: [
                    'Missed-call text-back inside a minute',
                    'Portal leads acknowledged personally, not auto-replied',
                    'Buyer or seller intent captured up front',
                ],
            },
            {
                title: 'Hold the pipeline you keep forgetting',
                description: 'Old buyers, old vendors, and old valuations stay visible instead of dropping into an old spreadsheet or somebody\'s memory. Nudges go out on a sensible cycle so the next decision does not happen without you.',
                icon: Clock,
                features: [
                    'Stale leads surfaced before they go to a competitor',
                    'Seasonal nudges for "looking in spring" buyers',
                    'Past valuations re-touched at the right moment',
                ],
            },
            {
                title: 'Make the callback a confirmed slot',
                description: 'A booked-in callback time works better than "I will ring you back later" because it gives the buyer or seller something concrete to wait for. That cuts down the drift that happens when they hear nothing and call the next agent instead.',
                icon: KeyRound,
                features: [
                    'Self-serve callback windows',
                    'Reminder before the call',
                    'Reschedule link instead of a no-answer',
                ],
            },
            {
                title: 'Turn completed deals into proof',
                description: 'A review request goes out after exchange or completion, when the relief is still fresh and the work is easy to describe. That helps the online proof catch up to the amount of business you are already getting through.',
                icon: ShieldCheck,
                features: [
                    'Review request triggered by completion',
                    'Asked when buyers or vendors are happiest',
                    'Reviews stack where local sellers actually look',
                ],
            },
            {
                title: 'Be findable for the streets you actually sell',
                description: 'Your pages and Google profile line up around the postcodes, property types, and buyer or seller intent you actually want more of. That makes it easier to be visible when the instruction is still being decided.',
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
        description: 'These are the supporting services that come up most often once an agency sees how much is being lost in speed and follow-up. They reinforce first response, memory, proof, and local visibility from different angles.',
        cards: [
            {
                icon: MessageSquare,
                title: 'Smart Website Systems',
                description: 'Helps you be the first response even when you are mid-viewing, on a valuation, or away from the desk when the lead lands.',
                href: '/services/smart-website-systems',
                gradient: 'purple',
                iconBg: 'purple',
            },
            {
                icon: Home,
                title: 'CRM & Pipeline Memory',
                description: 'Keeps old buyers and vendors visible so the next useful follow-up comes from you, not the agent who simply remembered them first.',
                href: '/services/crm-infrastructure-implementation',
                gradient: 'teal',
                iconBg: 'teal',
            },
            {
                icon: Star,
                title: 'Reputation & Review Systems',
                description: 'Gets reviews out after completed sales so the next vendor sees proof that feels current, local, and grounded in real outcomes.',
                href: '/services/reputation-review-systems',
                gradient: 'amber',
                iconBg: 'amber',
            },
            {
                icon: Search,
                title: 'Local Authority & SEO Systems',
                description: 'Helps you read as the trusted agent for the area itself, not just one more listing on the portal with the same stock language.',
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
        description: 'These are the practical questions that usually come up in a phone-driven, viewing-led week where speed matters early and follow-up matters later. Straight answers, no padding.',
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
                'If viewing requests cool off before you can ring back or old buyers never hear from you again when their timing changes, walk us through the last few enquiries and we will show you where the seven-minute window is being lost.',
        },
    };
}

export const realtorsIndustryPageData: IndustryPageData = buildRealtorsIndustryPageData();
