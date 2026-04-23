import {
    CheckCircle2,
    Clock,
    Hand,
    MessageCircle,
    MousePointerClick,
    Search,
    Sparkles,
    Star,
    Zap,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildNailSalonsIndustryPageData(): IndustryPageData {
    const heroData = {
        badge: 'For Nail Salons',
        title: 'She Tapped "Book Now" At 11:43. By 11:46 She Had Booked Somewhere Else.',
        description:
            'Nail clients do not wait. They want it done today, tomorrow morning, before the wedding. If your booking takes more than three taps or a phone call, they are already in the next salon\'s app.',
        list: ['Booking friction', 'Phone-only', 'Three-tap rule', 'No reminder'],
        cssPrefix: 'nail-salons-hero',
    };

    const comparisonData = {
        badge: 'Three Taps Vs Three Days',
        title: 'Same client. Two salons. The one that booked her in 30 seconds gets the loyalty.',
        description: 'She is not loyal yet. She will be — but only to the salon that did not make her work for the appointment.',
        comparisons: [
            {
                type: 'before' as const,
                title: 'How most salons take a booking',
                items: [
                    'Instagram says "DM to book". She DMs. Nobody replies until evening.',
                    'The website says "call us". She does not want to call.',
                    'A walk-in turns up. The chair is full. Nobody offers to text her when one frees up.',
                    'After the service, no rebook. No reminder. Hopes she remembers.',
                ],
            },
            {
                type: 'after' as const,
                title: 'How it goes when booking is three taps',
                items: [
                    '"Book now" leads to a slot list, not a form. She picks one. Done.',
                    'A reminder fires the morning of, with a tap-to-reschedule.',
                    'A walk-in who could not be seated gets a text the moment a slot opens.',
                    'A rebook nudge goes out at week three with her usual service.',
                ],
            },
        ],
    };

    const operatingPatternsData = {
        badge: 'Where Bookings Slip In Seconds',
        title: 'The friction is not in the nails. It is in the booking.',
        benefits: [
            {
                icon: MousePointerClick,
                title: '"DM to book" cost a same-day booking',
                description: 'She did not want to negotiate. She wanted to tap, pick, and go on with her day.',
                iconType: 'primary' as const,
            },
            {
                icon: Hand,
                title: 'Walk-ins came in, walked out',
                description: 'No way to text her when a chair frees up. She tried two more salons on the same street.',
                iconType: 'secondary' as const,
            },
            {
                icon: Clock,
                title: 'A repeat client never came back at three weeks',
                description: 'No nudge, no reminder. By week four her nails were grown out and she had tried somewhere new.',
                iconType: 'accent' as const,
            },
        ],
        columns: 3 as const,
    };

    const systemLayersData = {
        badge: 'What We Put In Place',
        title: 'Make booking a tap, make rebook a habit, fill the chair the moment it frees up',
        description: 'You stay focused on the set. The friction that costs same-day bookings stops being part of the day.',
        featureCategories: [
            {
                title: 'Three taps, not three messages',
                description: 'Live availability on Instagram, on the site, and inline in the first reply. She picks a slot without typing.',
                icon: Zap,
                features: [
                    'Live slot list in the first reply',
                    'Bookable from Instagram and Google',
                    'No phone call required',
                ],
            },
            {
                title: 'Fill cancellations the same hour',
                description: 'When a slot opens, the right waiting client gets a tap-to-claim text. The chair stops sitting empty.',
                icon: Sparkles,
                features: [
                    'Cancellation auto-fill list',
                    'First-to-claim text-back',
                    'Walk-ins logged for next-slot alerts',
                ],
            },
            {
                title: 'Rebook on a tap, not a memory',
                description: 'A rebook nudge goes out at the right interval for the service — gel, acrylic, BIAB — with her usual time.',
                icon: CheckCircle2,
                features: [
                    'Service-specific rebook timing',
                    'One-tap rebook with her usual tech',
                    'Stops the moment she books',
                ],
            },
            {
                title: 'Cut no-shows without sounding stern',
                description: 'A morning-of confirm tap and an easy reschedule beats a stern policy any day.',
                icon: MessageCircle,
                features: [
                    'Day-before reminder',
                    'Morning-of confirm tap',
                    'Reschedule link beats a no-show',
                ],
            },
            {
                title: 'Be findable when she searches "nails near me"',
                description: 'Pages and Google profile lined up for service, vibe, and street, not generic.',
                icon: Search,
                features: [
                    'Found for service + area',
                    'Profile that matches the actual work',
                    'More right-fit walk-ins',
                ],
            },
        ],
        columns: 3 as const,
    };

    const exploreData = {
        badge: 'Related',
        description: 'The other parts that come up most often for nail salons.',
        cards: [
            {
                icon: Zap,
                title: 'Smart Website Systems',
                description: 'Live slots in the first reply. Booking in three taps.',
                href: '/services/smart-website-systems',
                gradient: 'purple',
                iconBg: 'purple',
            },
            {
                icon: CheckCircle2,
                title: 'CRM & Rebook Automation',
                description: 'Service-specific rebook nudges before she Googles somewhere new.',
                href: '/services/crm-infrastructure-implementation',
                gradient: 'teal',
                iconBg: 'teal',
            },
            {
                icon: Star,
                title: 'Reputation & Review Systems',
                description: 'Reviews from happy sets, where the next client is scrolling.',
                href: '/services/reputation-review-systems',
                gradient: 'amber',
                iconBg: 'amber',
            },
            {
                icon: Search,
                title: 'Local Authority & SEO Systems',
                description: 'Be the nail salon people find for the street, not generic search.',
                href: '/services/local-seo-authority',
                gradient: 'blue',
                iconBg: 'blue',
            },
        ],
        backgroundColor: 'bg-alt',
        columns: 2 as const,
    };

    const faqData = {
        title: 'Things nail salons usually ask',
        description: 'Honest answers about how this fits a fast, walk-in-led day.',
        faqs: [
            {
                question: 'I run a small team. Is this overkill?',
                answer:
                    'No. The point is to remove the typing — for clients and for you. Most owners save more time on DMs than the system takes to set up.',
            },
            {
                question: 'Will clients still be able to DM us?',
                answer:
                    'Yes. The first DM reply offers slots. They tap, pick, and are booked. You only step in when you want to.',
            },
            {
                question: 'How does this handle different services and durations?',
                answer:
                    'Slot length flexes by service. Gel, acrylic, BIAB, pedicure all get the right window automatically.',
            },
            {
                question: 'What about no-shows?',
                answer:
                    'A morning-of confirm tap and an easy reschedule cut the bulk of them, without you having to police a deposit policy.',
            },
            {
                question: 'Do we need a new website?',
                answer:
                    'Usually not. The biggest lift is in making booking three taps from Instagram and Google.',
            },
        ],
    };

    return {
        slug: 'nail-salons',
        industries: ['nail-salon'],
        systems: [
            'smart-website-systems',
            'crm-automation',
            'reputation-review',
            'local-seo-authority',
        ],
        topics: ['booking-systems', 'lead-response-time', 'review-generation'],
        type: 'detail',
        parentSlug: 'beauty-personal-care',
        seo: {
            title: 'Nail Salons — Three-Tap Booking, Same-Hour Cancellation Fills | MindWP',
            description:
                'For nail salons where booking friction loses same-day clients. We make booking three taps, fill cancellations the same hour, and bring repeat clients back at the right interval.',
            keywords: [
                'nail salon booking system',
                'nail salon instagram booking',
                'nail salon rebook automation',
                'nail salon cancellation fill',
                'nail salon local seo',
            ],
            canonical: '/industries/beauty-personal-care/nail-salons',
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
            title: 'Tell us where booking is leaking',
            description:
                'If "DM to book" is costing same-day chairs, walk us through a typical Saturday and we will show you where three-tap booking would catch the most.',
        },
    };
}

export const nailSalonsIndustryPageData: IndustryPageData = buildNailSalonsIndustryPageData();
