import {
    Calendar,
    FileSignature,
    Lock,
    MessageSquare,
    Phone,
    Scale,
    Search,
    ShieldCheck,
    UserRound,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildSmallLawFirmsIndustryPageData(): IndustryPageData {
    const heroData = {
        badge: 'For Small Law Firms',
        title: 'They Started The Enquiry Form Twice. They Closed It Both Times.',
        description:
            'Most legal enquiries are not lost to another firm. They are lost before the firm hears about them at all. The person needed help, sat with the form open, and quietly decided it was not the right moment. Whoever felt easiest to contact eventually got the call.',
        list: ['Half-typed forms', 'Silent worry', 'Comparing quietly', 'No reply'],
        cssPrefix: 'small-law-firms-hero',
    };

    const imageStripData = {
        badge: 'How Clients Reach Out',
        title: 'They are nervous before they ever pick up the phone',
        description:
            'A dispute, a will, a property, a separation. They are not shopping. They are working up the courage to ring a firm at all. Whoever feels approachable, clear, and human wins the call.',
        items: [
            {
                title: 'Sensitive first enquiries',
                image: '/images/placeholders/service-card-5.svg',
                alt: 'Abstract placeholder image representing legal first enquiries',
            },
            {
                title: 'Initial consultations',
                image: '/images/placeholders/service-card-6.svg',
                alt: 'Abstract placeholder image representing legal consultations',
            },
            {
                title: 'Quotes and engagement letters',
                image: '/images/placeholders/service-card-7.svg',
                alt: 'Abstract placeholder image representing legal engagement letters',
            },
            {
                title: 'Reviews and word of mouth',
                image: '/images/placeholders/service-card-8.svg',
                alt: 'Abstract placeholder image representing legal reputation',
            },
        ],
        backgroundColor: 'bg-base',
        cssPrefix: 'small-law-firms-image-strip',
    };

    const operatingPatternsData = {
        badge: 'Where Clients Hold Back',
        title: 'They are not silent because they have decided. They are silent because it feels heavy.',
        benefits: [
            {
                icon: Lock,
                title: 'They started the form. They did not finish it.',
                description: 'Halfway through, they realised they were not ready to put the situation in writing to a stranger.',
                iconType: 'primary' as const,
            },
            {
                icon: UserRound,
                title: 'They want to know who they will actually speak to',
                description: 'Anonymous "Contact Us" pages do not unlock the call. A name, a face, a tone does.',
                iconType: 'secondary' as const,
            },
            {
                icon: Phone,
                title: 'The first reply set the tone for everything',
                description: 'A cold or slow first response confirmed the worry. They did not call back.',
                iconType: 'accent' as const,
            },
        ],
        columns: 3 as const,
    };

    const comparisonData = {
        badge: 'Two Versions Of The Same Enquiry',
        title: 'Same person. Same situation. Two firms. Only one ever hears from them.',
        description: 'The barrier is not legal expertise. It is whether the firm feels safe enough to talk to before they have committed to anything.',
        comparisons: [
            {
                type: 'before' as const,
                title: 'How it usually goes',
                items: [
                    'Form requires too much detail up front. They close the tab.',
                    'A generic auto-reply lands hours later. It reads like a portal.',
                    'No clear way to book a short, low-pressure first conversation.',
                    'Half-completed enquiries are never followed up because nobody knows they exist.',
                ],
            },
            {
                type: 'after' as const,
                title: 'How it goes when the door is easier to open',
                items: [
                    'A short first step that asks only what is needed to call back.',
                    'A warm, human acknowledgement that names the next step.',
                    'A small, low-stakes initial conversation, not a full consultation up front.',
                    'Started-but-not-sent enquiries get a single, gentle nudge.',
                ],
            },
        ],
    };

    const systemLayersData = {
        badge: 'What We Put In Place',
        title: 'Lower the barrier to the first conversation, then handle it like a professional firm should',
        description: 'The legal work is yours. The bit that decides whether a worried person ever rings at all stops being left to chance.',
        featureCategories: [
            {
                title: 'Make the first step small',
                description: 'A short, low-pressure way to start the conversation, not a full case summary up front.',
                icon: FileSignature,
                features: [
                    'Short initial form, asking only what is needed',
                    'Clear next step shown on submission',
                    'Optional callback slot they can pick themselves',
                ],
            },
            {
                title: 'Reply in a way that reassures',
                description: 'A first response that sounds like a person at the firm, not a portal. Calm, clear, dated.',
                icon: MessageSquare,
                features: [
                    'Warm acknowledgement inside the hour',
                    'Names who will be in touch and when',
                    'Sets a calm tone for the relationship',
                ],
            },
            {
                title: 'Catch the half-typed and the unsent',
                description: 'Started-but-abandoned forms and missed calls held in one place, with one polite follow-up offered.',
                icon: ShieldCheck,
                features: [
                    'Started-not-submitted enquiries flagged',
                    'Missed-call follow-up handled with care',
                    'A single, gentle nudge — never more',
                ],
            },
            {
                title: 'Book the consultation without the back-and-forth',
                description: 'A short slot they can pick themselves, with a reminder so the appointment actually happens.',
                icon: Calendar,
                features: [
                    'Self-serve consultation slots',
                    'Day-before reminders',
                    'Reschedule link instead of a no-show',
                ],
            },
            {
                title: 'Be findable when the moment finally comes',
                description: 'Pages and Google profile lined up for the kind of matter and area you actually want.',
                icon: Search,
                features: [
                    'Found for matter type + area',
                    'Solicitor profiles that build trust',
                    'Reviews where worried people quietly check',
                ],
            },
        ],
        columns: 3 as const,
    };

    const exploreData = {
        badge: 'Related',
        description: 'The other parts that come up most often for small law firms.',
        cards: [
            {
                icon: Scale,
                title: 'Smart Website Systems',
                description: 'Pages and replies that lower the barrier to the first call.',
                href: '/services/smart-website-systems',
                gradient: 'purple',
                iconBg: 'purple',
            },
            {
                icon: ShieldCheck,
                title: 'Reputation & Review Systems',
                description: 'Build the trust signals worried people quietly check.',
                href: '/services/reputation-review-systems',
                gradient: 'amber',
                iconBg: 'amber',
            },
            {
                icon: MessageSquare,
                title: 'CRM & Follow-up Automation',
                description: 'Catch the half-typed enquiries and missed calls without dropping any.',
                href: '/services/crm-infrastructure-implementation',
                gradient: 'teal',
                iconBg: 'teal',
            },
            {
                icon: Search,
                title: 'Local Authority & SEO Systems',
                description: 'Show up for matter type and area, not generic legal search.',
                href: '/services/local-seo-authority',
                gradient: 'blue',
                iconBg: 'blue',
            },
        ],
        backgroundColor: 'bg-alt',
        columns: 2 as const,
    };

    const faqData = {
        title: 'Things small law firms usually ask',
        description: 'Honest answers about how this fits a careful, regulated practice.',
        faqs: [
            {
                question: 'Will the messages feel too marketing for a legal context?',
                answer:
                    'No. The tone is calm, professional, and human. The aim is to reassure a worried person, not to sell. Anything that goes out under the firm name is reviewed first.',
            },
            {
                question: 'Is automated follow-up appropriate for sensitive matters?',
                answer:
                    'Used sparingly, yes. Half-typed forms and missed calls get a single polite nudge. Anything beyond that goes to a human at the firm.',
            },
            {
                question: 'How does this work with our case management software?',
                answer:
                    'It sits in front of it. Enquiries are caught, reassured, and booked. Matter and case records stay where they belong.',
            },
            {
                question: 'We are concerned about regulatory and confidentiality issues.',
                answer:
                    'Templates and storage are reviewed against the firm\'s requirements. Nothing about a matter is shared in automated messages.',
            },
            {
                question: 'Do we need a new website?',
                answer:
                    'Often not. Most of the leak is in the half-finished enquiry and the cold first reply, not in the homepage.',
            },
        ],
    };

    return {
        slug: 'small-law-firms',
        industries: ['law-firm'],
        systems: [
            'smart-website-systems',
            'reputation-review',
            'crm-automation',
            'local-seo-authority',
        ],
        topics: ['lead-qualification', 'follow-up', 'review-generation'],
        type: 'detail',
        parentSlug: 'legal-professional-services',
        seo: {
            title: 'Small Law Firms — Lower The Barrier To The First Call, Without Losing Trust | MindWP',
            description:
                'For small law firms where worried clients hesitate to reach out and half-typed enquiries quietly disappear. We help make the first step small, the first reply warm, and the consultation easy to book.',
            keywords: [
                'small law firm enquiry follow-up',
                'law firm consultation booking',
                'law firm reputation system',
                'law firm crm',
                'law firm local seo',
            ],
            canonical: '/industries/legal-professional-services/small-law-firms',
        },
        hero: {
            ...heroData,
        },
        imageStrip: imageStripData,
        operatingPatterns: operatingPatternsData,
        comparison: comparisonData,
        systemLayers: systemLayersData,
        explore: exploreData,
        faq: faqData,
        cta: {
            title: 'Tell us where worried clients are dropping off',
            description:
                'If enquiries get started but rarely finished, or first calls feel cold before the firm even hears about them, walk us through the journey and we will show you where the door is actually closing.',
        },
    };
}

export const smallLawFirmsIndustryPageData: IndustryPageData = buildSmallLawFirmsIndustryPageData();
