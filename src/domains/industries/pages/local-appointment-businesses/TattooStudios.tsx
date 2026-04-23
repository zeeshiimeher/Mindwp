import {
    Bookmark,
    Calendar,
    HandCoins,
    Heart,
    MessageSquare,
    Palette,
    Search,
    ShieldCheck,
    Star,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildTattooStudiosIndustryPageData(): IndustryPageData {
    const heroData = {
        badge: 'For Tattoo Studios',
        title: 'They Saved The Reference Months Ago. They Still Have Not Booked.',
        description:
            'Tattoo enquiries are emotional, not urgent. People sit with the idea for weeks. They DM, get quiet, come back, go quiet again. The studio that stays in their head, not the one that replies fastest, gets the deposit.',
        list: ['Saved-not-booked', 'Long thinking', 'No deposit', 'Idea-on-hold'],
        cssPrefix: 'tattoo-studios-hero',
    };

    const imageStripData = {
        badge: 'How Pieces Begin',
        title: 'A reference, a feeling, a half-formed idea',
        description:
            'They are not buying a thing. They are choosing a person. They want to know your style fits, the studio feels right, and the deposit is not the moment everything goes silent.',
        items: [
            {
                title: 'Custom piece enquiries',
                image: '/images/placeholders/service-card-5.svg',
                alt: 'Abstract placeholder image representing tattoo enquiries',
            },
            {
                title: 'Consultations and design chats',
                image: '/images/placeholders/service-card-6.svg',
                alt: 'Abstract placeholder image representing tattoo consultations',
            },
            {
                title: 'Deposits and booked sessions',
                image: '/images/placeholders/service-card-7.svg',
                alt: 'Abstract placeholder image representing tattoo bookings',
            },
            {
                title: 'Healed work and referrals',
                image: '/images/placeholders/service-card-8.svg',
                alt: 'Abstract placeholder image representing tattoo healed work',
            },
        ],
        backgroundColor: 'bg-base',
        cssPrefix: 'tattoo-studios-image-strip',
    };

    const operatingPatternsData = {
        badge: 'Where Pieces Stall',
        title: 'It is rarely a no. It is months of "I want to but not yet."',
        benefits: [
            {
                icon: Bookmark,
                title: 'They saved a reference and forgot to send it',
                description: 'Your work lives in their saved folder. The DM never gets typed.',
                iconType: 'primary' as const,
            },
            {
                icon: Heart,
                title: 'They DM, then go quiet for weeks',
                description: 'They are sitting with it. No artist stays in their head while they do.',
                iconType: 'secondary' as const,
            },
            {
                icon: HandCoins,
                title: 'The deposit is the moment they vanish',
                description: 'Conversation flows, then the deposit ask kills it. Often it is the way it gets asked.',
                iconType: 'accent' as const,
            },
        ],
        columns: 3 as const,
    };

    const systemLayersData = {
        badge: 'What We Put In Place',
        title: 'Stay in their head while they sit with the idea, without ever feeling pushy',
        description: 'You stay in the chair. The bit between the saved reference and the booked session stops depending on memory.',
        featureCategories: [
            {
                title: 'Catch the messy first message',
                description: 'A reference photo, a vague description, a half-formed idea — held in one place per artist.',
                icon: MessageSquare,
                features: [
                    'DMs, forms, and missed calls in one inbox',
                    'Reference image and notes saved together',
                    'Routed to the right artist',
                ],
            },
            {
                title: 'Make the deposit feel small',
                description: 'How and when the deposit is asked decides whether the conversation survives it.',
                icon: HandCoins,
                features: [
                    'Deposit link sent at the right moment',
                    'Tied to a specific consultation slot',
                    'Friendly written language, not a checkout',
                ],
            },
            {
                title: 'Stay in their head gently',
                description: 'A couple of soft nudges over the weeks they are thinking, then a graceful pause.',
                icon: Heart,
                features: [
                    'Spaced follow-ups, never spam',
                    'Stops the moment they reply or book',
                    'Different tone for first piece vs regular client',
                ],
            },
            {
                title: 'Turn healed work into the next booking',
                description: 'Healed photos, review asks, and a quiet door for the next piece.',
                icon: ShieldCheck,
                features: [
                    'Review request at the healed-photo moment',
                    'Past clients held warm, not chased',
                    'Referrals captured cleanly',
                ],
            },
            {
                title: 'Be findable when the urge finally lands',
                description: 'Pages and Google profile lined up for style + area, so the saved-reference person can find you again.',
                icon: Search,
                features: [
                    'Found on Maps for the work you do',
                    'Style-led pages, not generic',
                    'Artist profiles that build trust',
                ],
            },
        ],
        columns: 3 as const,
    };

    const exploreData = {
        badge: 'Related',
        description: 'The other parts that come up most often for tattoo studios.',
        cards: [
            {
                icon: Palette,
                title: 'Smart Website Systems',
                description: 'Style-led pages and artist profiles that hold attention.',
                href: '/services/smart-website-systems',
                gradient: 'purple',
                iconBg: 'purple',
            },
            {
                icon: MessageSquare,
                title: 'CRM & Follow-up Automation',
                description: 'Stay in their head while they think. Stop chasing manually.',
                href: '/services/crm-infrastructure-implementation',
                gradient: 'teal',
                iconBg: 'teal',
            },
            {
                icon: Star,
                title: 'Reputation & Review Systems',
                description: 'Healed photos and reviews that pull the next booking in.',
                href: '/services/reputation-review-systems',
                gradient: 'amber',
                iconBg: 'amber',
            },
            {
                icon: Calendar,
                title: 'Booking & Deposit Flow',
                description: 'Tie the deposit to a specific session so it does not kill the chat.',
                href: '/services/crm-infrastructure-implementation',
                gradient: 'blue',
                iconBg: 'blue',
            },
        ],
        backgroundColor: 'bg-alt',
        columns: 2 as const,
    };

    const faqData = {
        title: 'Things tattoo studios usually ask',
        description: 'Honest answers about how this fits an emotional, slow-burn enquiry.',
        faqs: [
            {
                question: 'Will the follow-up feel pushy?',
                answer:
                    'No. Two soft nudges spread across the weeks they are thinking. The moment they reply or book, it stops.',
            },
            {
                question: 'Is this trying to make tattoo enquiries more transactional?',
                answer:
                    'The opposite. The point is to keep the conversation feeling like a person, even when an artist is in the chair all day.',
            },
            {
                question: 'What about the deposit problem?',
                answer:
                    'Most lost deposits are about how the ask lands. A clear, friendly ask tied to a specific slot lands better than a cold link.',
            },
            {
                question: 'Can it route by artist?',
                answer:
                    'Yes. Enquiries land with the right artist, with the reference and notes attached.',
            },
            {
                question: 'Do we need a new website?',
                answer:
                    'Often not. The leak is in the slow weeks between the saved reference and the deposit, not in the homepage.',
            },
        ],
    };

    return {
        slug: 'tattoo-studios',
        industries: ['tattoo-studio'],
        systems: [
            'smart-website-systems',
            'crm-automation',
            'reputation-review',
            'local-seo-authority',
        ],
        topics: ['follow-up', 'booking-systems', 'review-generation'],
        type: 'detail',
        parentSlug: 'local-appointment-businesses',
        seo: {
            title: 'Tattoo Studios — Stay In Their Head Until The Deposit Lands | MindWP',
            description:
                'For tattoo studios where DMs come in, conversations stall, and the deposit moment kills the chat. We help hold the enquiry, soften the deposit ask, and turn healed work into the next booking.',
            keywords: [
                'tattoo studio enquiry follow-up',
                'tattoo studio booking deposit',
                'tattoo studio crm',
                'tattoo studio reputation system',
                'tattoo studio local seo',
            ],
            canonical: '/industries/local-appointment-businesses/tattoo-studios',
        },
        hero: {
            ...heroData,
        },
        imageStrip: imageStripData,
        operatingPatterns: operatingPatternsData,
        systemLayers: systemLayersData,
        explore: exploreData,
        faq: faqData,
        cta: {
            title: 'Tell us where the conversation goes quiet',
            description:
                'If DMs come in fine but the deposit is where everything stops, walk us through how a typical enquiry runs and we will show you the first thing worth fixing.',
        },
    };
}

export const tattooStudiosIndustryPageData: IndustryPageData = buildTattooStudiosIndustryPageData();
