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
            'Lash work lives or dies on the refill cycle, and that cycle slips faster than people think. Miss the usual week-three or week-four moment, and the next booking often goes to whoever showed up in her feed or had a slot ready when she finally noticed the gap.',
        list: ['Missed refills', 'Cycle drift', 'Quiet gaps', 'Fragile loyalty'],
        cssPrefix: 'lash-extensions-hero',
    };

    const operatingPatternsData = {
        badge: 'How Loyal Lash Clients Drift',
        title: 'They do not leave you. They just stop hearing from you.',
        description:
            'Most lash clients do not make a big decision to leave. They miss a refill, go a week overdue, then choose the studio that appears at the exact moment they finally decide to sort it out.',
        benefits: [
            {
                icon: RefreshCw,
                title: 'Week three came and went',
                description: 'No nudge went out when her usual refill window opened. By week four her lashes were patchy, and by week five she had searched for a refill nearby and sat in somebody else\'s chair instead.',
                iconType: 'primary' as const,
            },
            {
                icon: AlertCircle,
                title: 'A new client came in once and never again',
                description: 'The full set went well, but nothing arrived after it to guide her into the refill rhythm. No follow-up and no warm "ready when you are" means the second appointment never gets anchored.',
                iconType: 'secondary' as const,
            },
            {
                icon: Eye,
                title: 'A regular booked elsewhere "just to try"',
                description: 'She was not trying to make a dramatic change. She just needed a refill that fit this week, missed her normal window, and took the first decent slot that appeared before yours did.',
                iconType: 'accent' as const,
            },
        ],
        columns: 3 as const,
    };

    const workflowExamplesData = {
        badge: 'Real Refill Moments',
        title: 'The handful of nudges that keep a lash client in your chair for a year',
        description: 'These are not broad campaigns or discount pushes. They are the small messages that hold the cycle together between a fresh set, the first refill, and the point where drift usually starts.',
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
        description: 'You stay focused on the lash line and the appointment in front of you. The cycle that decides whether she comes back stops depending on her memory, your memory, or a note buried in old messages.',
        featureCategories: [
            {
                title: 'Refill nudges that match her cycle',
                description: 'Two-week, three-week, four-week — the prompt lands in the right window for her actual cycle, not as part of a generic blast. That keeps the refill feeling timely instead of overdue.',
                icon: Bell,
                features: [
                    'Cycle-aware refill prompts',
                    'Personal tone, named tech',
                    'Stops the moment she rebooks',
                ],
            },
            {
                title: 'Win-backs that do not feel like a coupon',
                description: 'A single warm message sent at the right time does more than repeated discount pushes. It feels like a tech noticing the gap, not a studio throwing money at somebody already halfway out.',
                icon: HeartHandshake,
                features: [
                    'Two-cycle drift detection',
                    '"We miss you" tone, not "% off"',
                    'Direct rebook link to her usual tech',
                ],
            },
            {
                title: 'Reply with a slot, not "DM us"',
                description: 'New enquiries see real availability in the first reply, with the difference between refill and full set already accounted for. That stops a fragile new enquiry from stalling before the first booking happens.',
                icon: Calendar,
                features: [
                    'Live slots in the first reply',
                    'Service-aware (full set vs refill)',
                    'Bookable from Instagram and Google',
                ],
            },
            {
                title: 'Reviews from the look she loved',
                description: 'A review request goes out while the set still looks fresh and she is still looking at it in every mirror. That is the moment most likely to turn a good appointment into visible proof.',
                icon: Star,
                features: [
                    '24-hour review request',
                    'Photo-friendly prompt',
                    'Reviews stack where new clients scroll',
                ],
            },
            {
                title: 'Be findable for refill, not just lashes',
                description: 'Search intent for "lash refill near me" is usually stronger than a broad lashes search because it comes from someone already in cycle. We line the studio up for that higher-fit search instead of hoping generic visibility is enough.',
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
        description: 'These are the supporting services that come up most often once a lash studio sees how much hinges on cycle timing and rebook handling. They all support retention, trust, and refill visibility from different sides.',
        cards: [
            {
                icon: Bell,
                title: 'CRM & Rebook Automation',
                description: 'Keeps refill prompts matched to her actual cycle instead of dropping everyone into the same generic calendar reminder.',
                href: '/services/crm-infrastructure-implementation',
                gradient: 'teal',
                iconBg: 'teal',
            },
            {
                icon: Calendar,
                title: 'Smart Website Systems',
                description: 'Shows live refill and full-set slots in the first reply, so new enquiries do not cool off before the first appointment is even booked.',
                href: '/services/smart-website-systems',
                gradient: 'purple',
                iconBg: 'purple',
            },
            {
                icon: Star,
                title: 'Reputation & Review Systems',
                description: 'Gets reviews out while the set still feels fresh, so the online proof reflects the reactions clients actually have after the appointment.',
                href: '/services/reputation-review-systems',
                gradient: 'amber',
                iconBg: 'amber',
            },
            {
                icon: Search,
                title: 'Local Authority & SEO Systems',
                description: 'Helps the studio show up when someone searches specifically for a refill nearby, which is usually the highest-intent search in the whole cycle.',
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
        description: 'These are the practical questions that usually come up in a refill-led studio where loyalty looks strong until one missed cycle proves otherwise. Straight answers, written around that reality.',
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
                'If clients are slipping at week three or four, or a missed refill keeps turning into a lost regular, walk us through your last month and we will show you where the cycle is actually breaking.',
        },
    };
}

export const lashExtensionsIndustryPageData: IndustryPageData = buildLashExtensionsIndustryPageData();
