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
            'Tattoo enquiries are emotional and comparison-heavy, not urgent. People sit with the idea for weeks, browse multiple artists, and the booking often cools off when the reply is slow or the style match never gets made clear enough to keep them moving.',
        list: ['Saved ideas', 'Slow replies', 'Deposit drop-off'],
        cssPrefix: 'tattoo-studios-hero',
    };

    const imageStripData = {
        badge: 'How Pieces Begin',
        title: 'A reference, a feeling, a half-formed idea',
        description:
            'They are not choosing a product. They are choosing an artist, a style, and whether the studio feels right for something personal. The booking usually moves when the fit feels obvious and the conversation does not go cold in between messages.',
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
        description:
            'Most tattoo enquiries do not end with a clean rejection. They drift while the person compares artists, sits with the idea, and waits to feel certain enough to send the next message or pay the deposit.',
        benefits: [
            {
                icon: Bookmark,
                title: 'They saved a reference and forgot to send it',
                description: 'Your work lives in their saved folder beside three other artists they are considering. The DM never gets typed because the timing slips or another profile feels easier to message when they come back to it later.',
                iconType: 'primary' as const,
            },
            {
                icon: Heart,
                title: 'They DM, then go quiet for weeks',
                description: 'They are sitting with it, checking other artists, and deciding whether the style really feels like the right fit. If the reply was slow or the conversation felt thin, you stop being the studio they keep coming back to in their head.',
                iconType: 'secondary' as const,
            },
            {
                icon: HandCoins,
                title: 'The deposit is the moment they vanish',
                description: 'The conversation can feel warm right up until the deposit ask lands too abruptly or too vaguely. When that happens, the booking often goes quiet rather than turning into an actual no.',
                iconType: 'accent' as const,
            },
        ],
        columns: 3 as const,
    };

    const systemLayersData = {
        badge: 'What We Put In Place',
        title: 'Stay in their head while they sit with the idea, without ever feeling pushy',
        description:
            'You stay in the chair and keep doing the work. The part between the saved reference, the first DM, and the booked session stops depending on memory, delayed replies, or whether the person happened to come back at the right moment.',
        featureCategories: [
            {
                title: 'Catch the messy first message',
                description: 'A reference photo, a vague description, and a half-formed idea all stay held together in one place per artist. That makes it easier to reply in a way that feels specific enough to keep the conversation alive.',
                icon: MessageSquare,
                features: [
                    'DMs, forms, and missed calls in one inbox',
                    'Reference image and notes saved together',
                    'Routed to the right artist',
                ],
            },
            {
                title: 'Make the deposit feel small',
                description: 'How and when the deposit is asked often decides whether the conversation survives it. A clearer, friendlier ask tied to a real next step usually lands better than dropping a cold payment link into the chat.',
                icon: HandCoins,
                features: [
                    'Deposit link sent at the right moment',
                    'Tied to a specific consultation slot',
                    'Friendly written language, not a checkout',
                ],
            },
            {
                title: 'Stay in their head gently',
                description: 'A couple of soft nudges go out over the weeks they are thinking it through, comparing artists, or waiting for the right timing. That helps the studio stay in the frame without turning the whole thing into a hard sell.',
                icon: Heart,
                features: [
                    'Spaced follow-ups, never spam',
                    'Stops the moment they reply or book',
                    'Different tone for first piece vs regular client',
                ],
            },
            {
                title: 'Turn healed work into the next booking',
                description: 'Healed photos, review asks, and a quiet door for the next piece all happen while the work still feels current and worth sharing. That makes it easier for one good experience to turn into the next booking or referral.',
                icon: ShieldCheck,
                features: [
                    'Review request at the healed-photo moment',
                    'Past clients held warm, not chased',
                    'Referrals captured cleanly',
                ],
            },
            {
                title: 'Be findable when the urge finally lands',
                description: 'Your pages and Google profile line up around style and area, so the person who saved a reference three months ago can actually find you again when they are finally ready to book. That matters more than most studios realise.',
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
        description:
            'These are the supporting services that come up most often once a studio sees how much of the booking lives in reply speed, style match, and the quieter weeks between messages. Each one helps hold attention, proof, or booking momentum together.',
        cards: [
            {
                icon: Palette,
                title: 'Smart Website Systems',
                description: 'Helps style-led pages and artist profiles hold attention long enough for the right person to feel the match and send the next message.',
                href: '/services/smart-website-systems',
                gradient: 'purple',
                iconBg: 'purple',
            },
            {
                icon: MessageSquare,
                title: 'CRM & Follow-up Automation',
                description: 'Keeps the studio in their head while they think, compare artists, and decide whether to book, without anyone having to chase manually.',
                href: '/services/crm-infrastructure-implementation',
                gradient: 'teal',
                iconBg: 'teal',
            },
            {
                icon: Star,
                title: 'Reputation & Review Systems',
                description: 'Uses healed photos and reviews to pull the next booking in, especially from people still deciding which artist feels safest to trust.',
                href: '/services/reputation-review-systems',
                gradient: 'amber',
                iconBg: 'amber',
            },
            {
                icon: Calendar,
                title: 'Booking & Deposit Flow',
                description: 'Ties the deposit to a specific session and next step so it does not kill the chat right when the person was almost ready to commit.',
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
        description:
            'These are the practical questions that usually come up in an emotional, slow-burn enquiry where style fit and timing matter as much as price. Straight answers, written for that pace.',
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
                'If DMs come in fine but slow replies or the deposit step keep cooling the booking off, walk us through how a typical enquiry runs and we will show you the first thing worth fixing.',
        },
    };
}

export const tattooStudiosIndustryPageData: IndustryPageData = buildTattooStudiosIndustryPageData();
