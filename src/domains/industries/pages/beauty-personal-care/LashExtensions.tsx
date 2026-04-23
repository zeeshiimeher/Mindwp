import {
    AlertCircle,
    Bell,
    Calendar,
    Eye,
    HeartHandshake,
    MessageSquare,
    RefreshCw,
    Search,
    Sparkles,
    Star,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildLashExtensionsIndustryPageData(): IndustryPageData {
    const heroData = {
        badge: 'For Lash Techs & Studios',
        title: 'Her Refill Was Due Three Weeks Ago. She Did Not Switch — She Just Got Tired Of Remembering.',
        description:
            'Lash work lives or dies on the refill cycle. Miss week three, and you are competing with the home Instagram ad she just scrolled past. The tech who remembers her cycle keeps her. The tech who waits for her to message rarely sees her again.',
        list: ['Refill missed', 'Cycle drift', 'Silent gap', 'Quiet switch'],
        cssPrefix: 'lash-extensions-hero',
    };

    const operatingPatternsData = {
        badge: 'How Loyal Lash Clients Drift',
        title: 'They do not leave you. They just stop hearing from you.',
        benefits: [
            {
                icon: RefreshCw,
                title: 'Week three came and went',
                description: 'No nudge. By week four her lashes were sparse. By week five she had Googled "lash refill near me" and someone else had her in the chair.',
                iconType: 'primary' as const,
            },
            {
                icon: AlertCircle,
                title: 'A new client came in once and never again',
                description: 'The full set was perfect. But there was no follow-up, no refill prompt, and no warm "ready when you are". Loyalty needs a first nudge.',
                iconType: 'secondary' as const,
            },
            {
                icon: Eye,
                title: 'A regular booked elsewhere "just to try"',
                description: 'She was not looking to switch. She was looking for a slot that fit her week. Yours did not show up in time.',
                iconType: 'accent' as const,
            },
        ],
        columns: 3 as const,
    };

    const workflowExamplesData = {
        badge: 'Real Refill Moments',
        title: 'The handful of nudges that keep a lash client in your chair for a year',
        description: 'These are not campaigns. They are the small, named messages that sit between sets and refills.',
        workflows: [
            {
                trigger: 'A new full set just left the studio.',
                actions: [
                    'A warm aftercare message lands the same evening',
                    'A refill prompt is queued for her ideal cycle, not a generic one',
                    'A review request goes out at 24 hours when she is loving the look',
                ],
            },
            {
                trigger: 'A regular is approaching her usual refill week.',
                actions: [
                    'A friendly nudge offers her usual time band with her usual tech',
                    'She rebooks in a tap, no DM thread',
                    'If she does not, a single follow-up nudge goes out — never more',
                ],
            },
            {
                trigger: 'A client has not been in for two cycles.',
                actions: [
                    'A personal "we miss you" goes out, not a coupon blast',
                    'It offers a fresh full set slot, not a refill she cannot use',
                    'It stops the moment she replies or rebooks',
                ],
            },
        ],
        backgroundColor: 'bg-base',
        cssPrefix: 'lash-extensions-workflow-examples',
    };

    const systemLayersData = {
        badge: 'What We Put In Place',
        title: 'A refill cycle the studio remembers, not the client',
        description: 'You stay focused on the lash line. The cycle that decides whether she comes back stops depending on her memory.',
        featureCategories: [
            {
                title: 'Refill nudges that match her cycle',
                description: 'Two-week, three-week, four-week — the nudge fires at the right window for her, not a generic blast.',
                icon: Bell,
                features: [
                    'Cycle-aware refill prompts',
                    'Personal tone, named tech',
                    'Stops the moment she rebooks',
                ],
            },
            {
                title: 'Win-backs that do not feel like a coupon',
                description: 'A single warm message at the right moment outperforms three discount blasts every time.',
                icon: HeartHandshake,
                features: [
                    'Two-cycle drift detection',
                    '"We miss you" tone, not "% off"',
                    'Direct rebook link to her usual tech',
                ],
            },
            {
                title: 'Reply with a slot, not "DM us"',
                description: 'New enquiries see real availability in the first reply, including refill vs full set.',
                icon: Calendar,
                features: [
                    'Live slots in the first reply',
                    'Service-aware (full set vs refill)',
                    'Bookable from Instagram and Google',
                ],
            },
            {
                title: 'Reviews from the look she loved',
                description: 'A review request goes out at the moment the lashes look freshest.',
                icon: Star,
                features: [
                    '24-hour review request',
                    'Photo-friendly prompt',
                    'Reviews stack where new clients scroll',
                ],
            },
            {
                title: 'Be findable for refill, not just lashes',
                description: 'Search intent for "lash refill near me" is the highest-fit search you can show up for. We line the studio up for it.',
                icon: Search,
                features: [
                    'Found for refill + area',
                    'Profile that matches your style',
                    'Right-fit clients, fewer one-offs',
                ],
            },
        ],
        columns: 3 as const,
    };

    const exploreData = {
        badge: 'Related',
        description: 'The other parts that come up most often for lash studios.',
        cards: [
            {
                icon: Bell,
                title: 'CRM & Rebook Automation',
                description: 'Refill nudges that match her cycle, not a generic calendar.',
                href: '/services/crm-infrastructure-implementation',
                gradient: 'teal',
                iconBg: 'teal',
            },
            {
                icon: Calendar,
                title: 'Smart Website Systems',
                description: 'First reply with live refill and full-set slots.',
                href: '/services/smart-website-systems',
                gradient: 'purple',
                iconBg: 'purple',
            },
            {
                icon: Star,
                title: 'Reputation & Review Systems',
                description: 'Reviews from the look she loved most.',
                href: '/services/reputation-review-systems',
                gradient: 'amber',
                iconBg: 'amber',
            },
            {
                icon: Search,
                title: 'Local Authority & SEO Systems',
                description: 'Found by people searching "lash refill near me".',
                href: '/services/local-seo-authority',
                gradient: 'blue',
                iconBg: 'blue',
            },
        ],
        backgroundColor: 'bg-alt',
        columns: 2 as const,
    };

    const faqData = {
        title: 'Things lash techs usually ask',
        description: 'Honest answers about how this fits a refill-led studio.',
        faqs: [
            {
                question: 'Will the nudges feel like spam?',
                answer:
                    'No. They are single, warm, named messages timed to her cycle. They stop the moment she rebooks. The point is to feel like the tech remembered her, not a system.',
            },
            {
                question: 'Can it tell refill from full set?',
                answer:
                    'Yes. The nudge offers what fits her last service, with the right slot length. She does not have to think.',
            },
            {
                question: 'I work on my own. Is this overkill?',
                answer:
                    'Solo techs feel this the most. The biggest leak is forgetting to nudge a regular at week three, and that is exactly what this fixes.',
            },
            {
                question: 'What if she has gone quiet for months?',
                answer:
                    'A single, warm win-back goes out — not a discount blast. If she does not respond, it does not chase. It respects her.',
            },
            {
                question: 'Do we need a full website?',
                answer:
                    'Not always. Many lash studios get the biggest lift from booking + refill nudges + a Google profile that is actually set up for the search she runs.',
            },
        ],
    };

    return {
        slug: 'lash-lift-and-extensions',
        industries: ['lash-extensions'],
        systems: [
            'crm-automation',
            'smart-website-systems',
            'reputation-review',
            'local-seo-authority',
        ],
        topics: ['follow-up', 'booking-systems', 'review-generation'],
        type: 'detail',
        parentSlug: 'beauty-personal-care',
        seo: {
            title: 'Lash Studios — Refill-Cycle Rebooks, Quiet Win-Backs | MindWP',
            description:
                'For lash techs and studios where loyalty turns on the refill nudge nobody sent. We put cycle-aware rebook prompts, warm win-backs, and reviews from the look she loved in place.',
            keywords: [
                'lash studio rebook system',
                'lash refill nudge automation',
                'lash extension client retention',
                'lash studio reviews',
                'lash refill near me seo',
            ],
            canonical: '/industries/beauty-personal-care/lash-lift-and-extensions',
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
            title: 'Tell us where the cycle is breaking',
            description:
                'If clients are drifting at week three or four, walk us through your last month and we will show you where a single nudge would have kept the chair full.',
        },
    };
}

export const lashExtensionsIndustryPageData: IndustryPageData = buildLashExtensionsIndustryPageData();
