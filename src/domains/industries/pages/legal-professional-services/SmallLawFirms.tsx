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
            'Most legal enquiries do not disappear because somebody made a fast decision. They disappear because the person hesitated, waited another week, delayed making contact, and only reached out when one firm finally felt safe enough to trust with something serious.',
        list: ['Quiet hesitation', 'Delayed contact', 'Trust barrier', 'Cold replies'],
        cssPrefix: 'small-law-firms-hero',
    };

    const imageStripData = {
        badge: 'How Clients Reach Out',
        title: 'They are nervous before they ever pick up the phone',
        description:
            'A dispute, a will, a property matter, a separation. They are not browsing casually. They are working up the courage to contact a firm at all, and the one that feels most approachable and clear usually gets the first real conversation.',
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
        description:
            'Most people contacting a small law firm are dealing with something they do not want to explain twice. The hesitation is often emotional before it is practical, which is why small moments of friction can stop the contact altogether.',
        benefits: [
            {
                icon: Lock,
                title: 'They started the form. They did not finish it.',
                description: 'Halfway through, they realised they were not ready to put the situation in writing to a stranger just yet. They closed the tab, told themselves they would come back tomorrow, and often did not.',
                iconType: 'primary' as const,
            },
            {
                icon: UserRound,
                title: 'They want to know who they will actually speak to',
                description: 'Anonymous contact pages rarely do enough when the issue feels personal or high-stakes. A name, a face, and a tone that feels steady can be what finally makes someone decide to get in touch.',
                iconType: 'secondary' as const,
            },
            {
                icon: Phone,
                title: 'The first reply set the tone for everything',
                description: 'A cold or delayed first response can confirm the prospect\'s worry that the whole process will feel difficult or impersonal. They do not usually argue with that feeling. They just do not proceed.',
                iconType: 'accent' as const,
            },
        ],
        columns: 3 as const,
    };

    const comparisonData = {
        badge: 'Two Versions Of The Same Enquiry',
        title: 'Same person. Same situation. Two firms. Only one ever hears from them.',
        description:
            'The difference here is rarely legal expertise on paper. It is whether the firm feels safe enough to contact before the person has fully committed to saying the whole situation out loud.',
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
        description:
            'The legal work stays exactly where it belongs. What changes is the part that decides whether a worried person ever makes contact at all, whether they get a reassuring first reply, and whether they feel safe enough to continue.',
        featureCategories: [
            {
                title: 'Make the first step small',
                description: 'The first step stays short and low-pressure instead of asking for a full case summary upfront. That matters when the person is still deciding whether they are ready to explain the issue to anybody at all.',
                icon: FileSignature,
                features: [
                    'Short initial form, asking only what is needed',
                    'Clear next step shown on submission',
                    'Optional callback slot they can pick themselves',
                ],
            },
            {
                title: 'Reply in a way that reassures',
                description: 'The first response sounds like a real person at the firm rather than a cold portal acknowledgement. It stays calm, clear, and dated so the prospect knows exactly what happens next and when.',
                icon: MessageSquare,
                features: [
                    'Warm acknowledgement inside the hour',
                    'Names who will be in touch and when',
                    'Sets a calm tone for the relationship',
                ],
            },
            {
                title: 'Catch the half-typed and the unsent',
                description: 'Started-but-abandoned forms and missed calls stay visible in one place instead of disappearing without trace. One polite, carefully judged follow-up gives the person a second chance to continue when the moment feels easier.',
                icon: ShieldCheck,
                features: [
                    'Started-not-submitted enquiries flagged',
                    'Missed-call follow-up handled with care',
                    'A single, gentle nudge — never more',
                ],
            },
            {
                title: 'Book the consultation without the back-and-forth',
                description: 'A short consultation slot can be picked without the usual back-and-forth that makes people put it off again. Reminders help the appointment still happen once they have finally built up to booking it.',
                icon: Calendar,
                features: [
                    'Self-serve consultation slots',
                    'Day-before reminders',
                    'Reschedule link instead of a no-show',
                ],
            },
            {
                title: 'Be findable when the moment finally comes',
                description: 'Your pages and Google profile line up around the matter types and areas you actually want to handle. That helps someone recognise the fit quickly when they finally decide they are ready to contact a firm.',
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
        description:
            'These are the supporting services that come up most often once a small law firm sees how much trust is being won or lost before the first real conversation. Each one helps lower friction, strengthen reassurance, or make the firm easier to trust quietly.',
        cards: [
            {
                icon: Scale,
                title: 'Smart Website Systems',
                description: 'Helps pages and first replies lower the barrier to the first call so a worried prospect does not back out before the firm even hears from them.',
                href: '/services/smart-website-systems',
                gradient: 'purple',
                iconBg: 'purple',
            },
            {
                icon: ShieldCheck,
                title: 'Reputation & Review Systems',
                description: 'Builds the trust signals worried people quietly check before they decide whether this firm feels safe enough to contact.',
                href: '/services/reputation-review-systems',
                gradient: 'amber',
                iconBg: 'amber',
            },
            {
                icon: MessageSquare,
                title: 'CRM & Follow-up Automation',
                description: 'Keeps half-typed enquiries and missed calls from disappearing completely, while handling follow-up with the right level of care.',
                href: '/services/crm-infrastructure-implementation',
                gradient: 'teal',
                iconBg: 'teal',
            },
            {
                icon: Search,
                title: 'Local Authority & SEO Systems',
                description: 'Helps the firm show up for the right matter type and area instead of blending into broad, generic legal search results.',
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
        description:
            'These are the practical questions that usually come up in a careful, regulated firm where trust matters before a client is even ready to speak. Straight answers, written for that context.',
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
                'If people start making contact but do not complete it, or if first replies feel too cold for a serious legal decision, walk us through the journey and we will show you where the door is actually closing.',
        },
    };
}

export const smallLawFirmsIndustryPageData: IndustryPageData = buildSmallLawFirmsIndustryPageData();
