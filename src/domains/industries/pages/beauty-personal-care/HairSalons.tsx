import {
    Bell,
    Calendar,
    Clock4,
    MessageSquare,
    RotateCcw,
    Scissors,
    Search,
    ShieldCheck,
    Sparkles,
    Star,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildHairSalonsIndustryPageData(): IndustryPageData {
    const heroData = {
        badge: 'For Hair Salons',
        title: 'She Wanted A Cut This Saturday. You Were Mid-Colour. Another Salon Replied In Two Minutes.',
        description:
            'Hair clients do not plan three weeks ahead. They want a chair this Saturday, after work, before a trip. They message two salons at once. Whoever shows availability first usually gets sat down.',
        list: ['Mid-service miss', 'Slow DM', 'Empty chair', 'Forgotten regular'],
        cssPrefix: 'hair-salons-hero',
    };

    const operatingPatternsData = {
        badge: 'Where Chairs Stay Empty',
        title: 'You are not losing clients to a better salon. You are losing them to a faster one.',
        benefits: [
            {
                icon: Scissors,
                title: 'The DM landed mid-foil',
                description: 'You were eyebrow-deep in a colour. By the time you put the bowl down, she had already booked across the street.',
                iconType: 'primary' as const,
            },
            {
                icon: Clock4,
                title: '"What slots do you have Saturday?" took an hour to answer',
                description: 'An hour is too long. She scrolled to the next salon while waiting, picked one with availability up front, and never came back.',
                iconType: 'secondary' as const,
            },
            {
                icon: RotateCcw,
                title: 'A regular has not been in for four months',
                description: 'She did not switch salons. She just forgot to rebook. Nobody nudged her. Eventually she will.',
                iconType: 'accent' as const,
            },
        ],
        columns: 3 as const,
    };

    const workflowExamplesData = {
        badge: 'Real Moments',
        title: 'The minutes that decide which chair gets filled',
        description: 'Tiny handoffs between client, phone, and chair that decide who gets the booking and who does not.',
        workflows: [
            {
                trigger: 'A new DM lands while you are mid-colour.',
                actions: [
                    'A short, friendly auto-reply goes out — "in a colour, will send slots in 20"',
                    'It links to live availability so she stops scrolling',
                    'You confirm the slot when you wash off',
                ],
            },
            {
                trigger: 'A regular has not booked her usual six-week trim.',
                actions: [
                    'A warm, named nudge goes out at week seven',
                    'It offers her usual stylist and her usual time band',
                    'She rebooks in a tap, not a phone call',
                ],
            },
            {
                trigger: 'A new client just left after a first visit.',
                actions: [
                    'A thank-you lands the same evening',
                    'A rebook prompt fires at the right interval for the service',
                    'A review request goes out when she is happiest with the look',
                ],
            },
        ],
        backgroundColor: 'bg-base',
        cssPrefix: 'hair-salons-workflow-examples',
    };

    const systemLayersData = {
        badge: 'What We Put In Place',
        title: 'Faster replies, easier rebooks, regulars who stop forgetting',
        description: 'You stay behind the chair. The bit that decides who fills it next stops depending on you putting the bowl down.',
        featureCategories: [
            {
                title: 'Reply with availability, not "let me check"',
                description: 'New enquiries see real slots within minutes, even when every chair is busy.',
                icon: Calendar,
                features: [
                    'Live availability shared in the first reply',
                    'Self-serve booking link by stylist',
                    'Holds the client until you can confirm',
                ],
            },
            {
                title: 'Bring back the regulars who drifted',
                description: 'Six-week, eight-week, twelve-week — clients get a warm nudge before they Google a new salon.',
                icon: Bell,
                features: [
                    'Rebook nudges by service interval',
                    'Personal tone, named stylist',
                    'Stops the moment she rebooks',
                ],
            },
            {
                title: 'Cut the no-shows without nagging',
                description: 'Reminders the day before and a tap-to-confirm the morning of. Empty chairs stop being a surprise.',
                icon: Sparkles,
                features: [
                    'Day-before reminder',
                    'Morning-of confirm tap',
                    'Easy reschedule beats a no-show',
                ],
            },
            {
                title: 'Turn happy looks into proof',
                description: 'A review request goes out the evening after the service, when the look is freshest.',
                icon: ShieldCheck,
                features: [
                    'Review request triggered by checkout',
                    'Asked once, never twice',
                    'Reviews stack where local clients search',
                ],
            },
            {
                title: 'Be findable when she searches "salon near me"',
                description: 'Pages and Google profile lined up for area, service, and stylist — not generic hair.',
                icon: Search,
                features: [
                    'Found on Maps for service + area',
                    'Stylist-led pages, not generic',
                    'More right-fit clients, fewer tyre-kickers',
                ],
            },
        ],
        columns: 3 as const,
    };

    const exploreData = {
        badge: 'Related',
        description: 'The other parts that come up most often for hair salons.',
        cards: [
            {
                icon: Calendar,
                title: 'Smart Website Systems',
                description: 'Show real slots in the first reply, even mid-service.',
                href: '/services/smart-website-systems',
                gradient: 'purple',
                iconBg: 'purple',
            },
            {
                icon: Bell,
                title: 'CRM & Rebook Automation',
                description: 'Bring regulars back before they forget you exist.',
                href: '/services/crm-infrastructure-implementation',
                gradient: 'teal',
                iconBg: 'teal',
            },
            {
                icon: Star,
                title: 'Reputation & Review Systems',
                description: 'Reviews that catch up to how full the salon actually is.',
                href: '/services/reputation-review-systems',
                gradient: 'amber',
                iconBg: 'amber',
            },
            {
                icon: Search,
                title: 'Local Authority & SEO Systems',
                description: 'Be the salon people find for the service and the street.',
                href: '/services/local-seo-authority',
                gradient: 'blue',
                iconBg: 'blue',
            },
        ],
        backgroundColor: 'bg-alt',
        columns: 2 as const,
    };

    const faqData = {
        title: 'Things hair salons usually ask',
        description: 'Honest answers about how this fits a busy chair-led day.',
        faqs: [
            {
                question: 'Will clients feel they are getting an automated DM?',
                answer:
                    'No. The first message is short, friendly, and signed by the salon. The point is to hold her attention until you can answer properly.',
            },
            {
                question: 'I am the stylist and the receptionist. Who runs this?',
                answer:
                    'It runs itself between services. You see new bookings on your phone, regulars rebook in a tap, and the rebook nudges go out without you remembering.',
            },
            {
                question: 'Can it route by stylist?',
                answer:
                    'Yes. Every stylist has their own availability and rebook tone, so regulars stay loyal to the person, not just the salon.',
            },
            {
                question: 'What about clients we have not seen in months?',
                answer:
                    'They get a single warm nudge with their usual service and time band. Most salons find a real chunk of their week refills from this alone.',
            },
            {
                question: 'Do we need a new website?',
                answer:
                    'Usually not. The leak is in the first DM and the missing rebook prompt, not in the homepage.',
            },
        ],
    };

    return {
        slug: 'hair-salons',
        industries: ['hair-salon'],
        systems: [
            'smart-website-systems',
            'crm-automation',
            'reputation-review',
            'local-seo-authority',
        ],
        topics: ['lead-response-time', 'follow-up', 'review-generation'],
        type: 'detail',
        parentSlug: 'beauty-personal-care',
        seo: {
            title: 'Hair Salons — Win The Saturday DM, Bring Back The Regulars | MindWP',
            description:
                'For hair salons where DMs go to the salon that replied first and regulars quietly forget to rebook. We put first-reply availability, rebook nudges, and review prompts in place so the chair stays full.',
            keywords: [
                'hair salon booking system',
                'hair salon rebook automation',
                'hair salon reputation system',
                'hair salon local seo',
                'hair salon dm response',
            ],
            canonical: '/industries/beauty-personal-care/hair-salons',
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
            title: 'Tell us where the chair sits empty',
            description:
                'If Saturday DMs go to a faster salon or regulars quietly drift, walk us through a normal week and we will show you where the chair is actually losing bookings.',
        },
    };
}

export const hairSalonsIndustryPageData: IndustryPageData = buildHairSalonsIndustryPageData();
