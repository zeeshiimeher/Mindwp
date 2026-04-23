import {
    Building2,
    ClipboardList,
    Inbox,
    KeyRound,
    Mail,
    MessageCircle,
    Search,
    ShieldCheck,
    Users,
    Wrench,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildPropertyManagersIndustryPageData(): IndustryPageData {
    const heroData = {
        badge: 'For Property Managers',
        title: 'A Landlord With Eight Doors Emailed Three Agencies On Sunday Night. By Monday Lunchtime, Two Had Replied.',
        description:
            'Landlords do not change agency on a whim. They change because they got tired of chasing for updates, of tenants going quiet, of nobody owning the small things. The new agency rarely wins on price. They win because someone replied on Monday morning like it mattered.',
        list: ['Slow landlord reply', 'Tenant frustration', 'Silent portfolio', 'Lost door'],
        cssPrefix: 'property-managers-hero',
    };

    const operatingPatternsData = {
        badge: 'Where Doors Quietly Walk',
        title: 'Portfolios are not lost in a single moment. They erode in unanswered messages.',
        benefits: [
            {
                icon: Inbox,
                title: 'The landlord enquiry sat all weekend',
                description: 'They emailed Sunday night. You saw it Monday afternoon. They had already booked a call with the agency that replied at 9am.',
                iconType: 'primary' as const,
            },
            {
                icon: Wrench,
                title: 'A tenant issue went two days without an update',
                description: 'It was on someone\'s list. They were waiting for a contractor. Nobody told the tenant. The trust quietly broke.',
                iconType: 'secondary' as const,
            },
            {
                icon: ClipboardList,
                title: 'The landlord never hears unless something is wrong',
                description: 'Quiet months feel like neglect. A short, scheduled update keeps the relationship steady when there is genuinely nothing to report.',
                iconType: 'accent' as const,
            },
            {
                icon: KeyRound,
                title: 'A renewal slipped past the window',
                description: 'A tenant served notice. Nobody had had the renewal conversation in time. The void is on you.',
                iconType: 'primary' as const,
            },
        ],
        columns: 4 as const,
    };

    const comparisonData = {
        badge: 'Two Months In The Same Portfolio',
        title: 'Same doors. Same tenants. Two completely different landlord experiences.',
        description: 'The work is broadly the same. What differs is whether the landlord ever has to chase, and whether the tenant ever has to wonder.',
        comparisons: [
            {
                type: 'before' as const,
                title: 'How it feels now',
                items: [
                    'New landlord enquiries get a reply when someone has time, not by Monday morning.',
                    'Tenants log issues and then sit with no update for days.',
                    'Landlords only hear from you when there is bad news.',
                    'Renewals get noticed when the notice arrives, not before.',
                ],
            },
            {
                type: 'after' as const,
                title: 'How it feels with the basics held',
                items: [
                    'Every new landlord enquiry is acknowledged the same hour, by name.',
                    'Tenants get an automatic update the moment a contractor is booked.',
                    'Landlords get a short, scheduled portfolio note even in quiet months.',
                    'Renewal windows are flagged early, with a script for the conversation.',
                ],
            },
        ],
    };

    const systemLayersData = {
        badge: 'What We Put In Place',
        title: 'Reliability the landlord can feel, without growing the team',
        description: 'You keep running the portfolio. The bits that decide whether a door stays or walks stop relying on whoever happened to check the inbox.',
        featureCategories: [
            {
                title: 'Acknowledge new landlord enquiries the same hour',
                description: 'A warm, named reply within the hour, even on a Sunday evening enquiry. They stop emailing other agencies.',
                icon: MessageCircle,
                features: [
                    'Same-hour acknowledgement',
                    'Portfolio size and intent captured up front',
                    'Routed to the right portfolio manager',
                ],
            },
            {
                title: 'Keep tenants in the loop without extra calls',
                description: 'Status updates fire automatically as a maintenance ticket moves. The tenant stops wondering. The reviews start matching the work.',
                icon: Wrench,
                features: [
                    'Auto-update when a contractor is booked',
                    'Auto-update when work is completed',
                    'Tenant satisfaction tracked, not assumed',
                ],
            },
            {
                title: 'Send the landlord update they never had to ask for',
                description: 'A short, scheduled portfolio note — even in quiet months. The relationship stops needing rescuing.',
                icon: Mail,
                features: [
                    'Monthly or quarterly cadence per landlord',
                    'Standard template, personalised content',
                    'Quiet months feel held, not forgotten',
                ],
            },
            {
                title: 'See the renewal before the notice',
                description: 'Renewal windows surfaced 60 days out, with a structured conversation flow so voids stop being a surprise.',
                icon: ShieldCheck,
                features: [
                    'Renewal flag at the right point',
                    'Tenant and landlord conversation tracked',
                    'Voids reduced because nobody forgot',
                ],
            },
            {
                title: 'Be findable for the right kind of landlord',
                description: 'Pages and search visibility lined up for portfolio size, area, and property type — not generic letting.',
                icon: Search,
                features: [
                    'Found for area + portfolio profile',
                    'Pages that read as a specialist',
                    'Fewer enquiries that are not a fit',
                ],
            },
        ],
        columns: 3 as const,
    };

    const exploreData = {
        badge: 'Related',
        description: 'The other parts that come up most often for property managers.',
        cards: [
            {
                icon: Users,
                title: 'CRM & Tenant Communication',
                description: 'Auto-updates so tenants stop chasing and reviews stop suffering.',
                href: '/services/crm-infrastructure-implementation',
                gradient: 'teal',
                iconBg: 'teal',
            },
            {
                icon: Building2,
                title: 'Smart Website Systems',
                description: 'Catch landlord enquiries the same hour, even at the weekend.',
                href: '/services/smart-website-systems',
                gradient: 'purple',
                iconBg: 'purple',
            },
            {
                icon: ShieldCheck,
                title: 'Reputation & Review Systems',
                description: 'Build a review base that actually reflects how the portfolio runs.',
                href: '/services/reputation-review-systems',
                gradient: 'amber',
                iconBg: 'amber',
            },
            {
                icon: Search,
                title: 'Local Authority & SEO Systems',
                description: 'Be the agency landlords find for the area you actually serve.',
                href: '/services/local-seo-authority',
                gradient: 'blue',
                iconBg: 'blue',
            },
        ],
        backgroundColor: 'bg-alt',
        columns: 2 as const,
    };

    const faqData = {
        title: 'Things property managers usually ask',
        description: 'Honest answers about how this fits a busy lettings or block management team.',
        faqs: [
            {
                question: 'Will tenants feel they are getting robotic messages?',
                answer:
                    'No. Updates are short, named, and only fire when something has actually happened — a contractor booked, work completed, an inspection scheduled. The tone is human, not portal.',
            },
            {
                question: 'How does this work with our property management software?',
                answer:
                    'It sits alongside it. Maintenance tickets, renewals, and tenant comms feed in. The system of record stays where it is.',
            },
            {
                question: 'Will landlords actually open scheduled updates?',
                answer:
                    'They open them more than you think — because they are short, relevant, and arrive in quiet months when most agencies say nothing.',
            },
            {
                question: 'Can it handle portfolios of different sizes?',
                answer:
                    'Yes. Cadence and content can flex per landlord. A single-door owner does not get the same note as a thirty-door portfolio.',
            },
            {
                question: 'Do we need a new website?',
                answer:
                    'Usually not. The biggest lift is in landlord acknowledgement and tenant updates, not in the homepage.',
            },
        ],
    };

    return {
        slug: 'property-managers',
        industries: ['property-management'],
        systems: [
            'crm-automation',
            'smart-website-systems',
            'reputation-review',
            'local-seo-authority',
        ],
        topics: ['follow-up', 'lead-qualification', 'pipeline-visibility'],
        type: 'detail',
        parentSlug: 'real-estate-property-services',
        seo: {
            title: 'Property Managers — Stop Losing Doors To Slow Replies And Silent Months | MindWP',
            description:
                'For property managers where landlords leave because they got tired of chasing and tenants leave because nobody updated them. We put landlord acknowledgement, tenant updates, and renewal visibility in place so the portfolio stops eroding quietly.',
            keywords: [
                'property manager landlord enquiry',
                'tenant communication system',
                'property management crm',
                'landlord retention',
                'property management local seo',
            ],
            canonical: '/industries/real-estate-property-services/property-managers',
        },
        hero: {
            ...heroData,
        },
        operatingPatterns: operatingPatternsData,
        comparison: comparisonData,
        systemLayers: systemLayersData,
        explore: exploreData,
        faq: faqData,
        cta: {
            title: 'Tell us where the portfolio is leaking',
            description:
                'If landlords leave quietly or tenant reviews do not match how hard the team works, walk us through a normal month and we will show you which gap is costing the most doors.',
        },
    };
}

export const propertyManagersIndustryPageData: IndustryPageData = buildPropertyManagersIndustryPageData();
