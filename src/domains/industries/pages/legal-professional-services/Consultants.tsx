import {
    ArrowRightCircle,
    BriefcaseBusiness,
    Compass,
    HelpCircle,
    Layers,
    Mail,
    Search,
    Sparkles,
    Target,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildConsultantsIndustryPageData(): IndustryPageData {
    const heroData = {
        badge: 'For Independent Consultants',
        title: 'The Discovery Call Went Well. Then "Let Us Think About It." Then Nothing.',
        description:
            'Most consulting work is not lost on price. It is lost on clarity. The client liked you, agreed the problem mattered, and then could not explain to their team what they would actually be buying. The conversation just quietly stopped.',
        list: ['Unclear scope', 'No next step', 'Internal stall', 'Slow drift'],
        cssPrefix: 'consultants-hero',
    };

    const operatingPatternsData = {
        badge: 'Where Engagements Stall',
        title: 'They did not pick a competitor. They just could not pick anything at all.',
        benefits: [
            {
                icon: HelpCircle,
                title: '"What exactly do we get?" never got answered cleanly',
                description: 'The call covered the problem. Nobody nailed the deliverable. Internally it sounds vague, so it dies.',
                iconType: 'primary' as const,
            },
            {
                icon: Compass,
                title: 'No clear next step after the discovery call',
                description: 'A "we will be in touch" closes the meeting and opens a void. Whoever defines the next move usually wins.',
                iconType: 'secondary' as const,
            },
            {
                icon: ArrowRightCircle,
                title: 'It went quiet inside the buying committee',
                description: 'A champion took it to a board, a partner, a CFO. With no clear summary, it lost momentum in someone else\'s meeting.',
                iconType: 'accent' as const,
            },
        ],
        columns: 3 as const,
    };

    const systemLayersData = {
        badge: 'What We Put In Place',
        title: 'Make the offer easy to repeat, the next step obvious, and the follow-up quietly automatic',
        description: 'You keep delivering the work. The bit that used to depend on the client perfectly explaining you to their team stops being a coin flip.',
        featureCategories: [
            {
                title: 'Make the offer easy to forward',
                description: 'A clear, plain-English summary of what they get and why it is worth it — built to survive being passed around inside a buying committee.',
                icon: Layers,
                features: [
                    'Scope written in client language, not consultant language',
                    'Outcome stated up front, not buried',
                    'Easy for a champion to forward without rewriting',
                ],
            },
            {
                title: 'Define the next step on every call',
                description: 'Discovery does not end on "we will think about it." It ends on a specific, dated next move that lives somewhere both sides can see.',
                icon: Target,
                features: [
                    'Standard "next step" template per call type',
                    'Sent within an hour while the call is fresh',
                    'Holds the conversation while they decide internally',
                ],
            },
            {
                title: 'Follow up the quiet ones gracefully',
                description: 'Two short, written-like-you nudges over the weeks they are deciding internally. Calm, not chasing.',
                icon: Mail,
                features: [
                    'Spaced follow-ups that survive a buying committee',
                    'Stops the moment they reply or commit',
                    'Different cadence for retainer vs project',
                ],
            },
            {
                title: 'Position for the work you want more of',
                description: 'Pages, case studies, and search visibility lined up for the kind of brief you actually want, not generic consulting.',
                icon: Search,
                features: [
                    'Found for the niche you actually serve',
                    'Pages that read as a specialist, not a generalist',
                    'Fewer enquiries that are not a fit',
                ],
            },
            {
                title: 'Turn finished engagements into proof',
                description: 'A short, structured ask after delivery so testimonials and case studies stop being something you mean to do.',
                icon: Sparkles,
                features: [
                    'Testimonial request at the right moment',
                    'Light-touch case study capture',
                    'Proof that does the qualifying for you',
                ],
            },
        ],
        columns: 3 as const,
    };

    const workflowExamplesData = {
        badge: 'Real Moments',
        title: 'The points where consulting deals usually decide themselves',
        description: 'Small handoffs that decide whether the engagement happens or quietly dies in someone else\'s inbox.',
        workflows: [
            {
                trigger: 'A discovery call just ended.',
                actions: [
                    'A short summary lands within the hour',
                    'It states the outcome, the scope, and the next step in plain language',
                    'It is forwardable as-is to a partner or board',
                ],
            },
            {
                trigger: 'A champion is taking it internal and has gone quiet.',
                actions: [
                    'A polite check-in lands the following week',
                    'It offers to join a short call with the wider team',
                    'It removes the burden of explaining you for them',
                ],
            },
            {
                trigger: 'An engagement just wrapped.',
                actions: [
                    'A structured testimonial ask goes out',
                    'A light case-study capture is offered',
                    'The next piece of work is opened without a sales feel',
                ],
            },
        ],
        backgroundColor: 'bg-base',
        cssPrefix: 'consultants-workflow-examples',
    };

    const exploreData = {
        badge: 'Related',
        description: 'The other parts that come up most often for independent consultants.',
        cards: [
            {
                icon: BriefcaseBusiness,
                title: 'Smart Website Systems',
                description: 'Pages that read as a specialist, not a generic consultant.',
                href: '/services/smart-website-systems',
                gradient: 'purple',
                iconBg: 'purple',
            },
            {
                icon: Mail,
                title: 'CRM & Follow-up Automation',
                description: 'Hold open conversations and nudge gracefully through buying committees.',
                href: '/services/crm-infrastructure-implementation',
                gradient: 'teal',
                iconBg: 'teal',
            },
            {
                icon: Search,
                title: 'Authority & SEO Systems',
                description: 'Be findable for the niche brief you actually want.',
                href: '/services/local-seo-authority',
                gradient: 'blue',
                iconBg: 'blue',
            },
            {
                icon: Sparkles,
                title: 'Reputation & Proof Systems',
                description: 'Capture testimonials and case studies before they slip away.',
                href: '/services/reputation-review-systems',
                gradient: 'amber',
                iconBg: 'amber',
            },
        ],
        backgroundColor: 'bg-alt',
        columns: 2 as const,
    };

    const faqData = {
        title: 'Things consultants usually ask',
        description: 'Honest answers about how this fits a relationship-led, longer-cycle practice.',
        faqs: [
            {
                question: 'Will this make my work feel productised?',
                answer:
                    'Only the offer summary, and only enough that a busy buyer can repeat it. The actual delivery stays as bespoke as it has always been.',
            },
            {
                question: 'My buying cycles are months long. Does that work?',
                answer:
                    'Yes. The follow-up cadence is built for buying committees, board sign-offs, and quiet quarters. It paces, it does not chase.',
            },
            {
                question: 'What if I do not want to send templated follow-ups?',
                answer:
                    'They are written like you would write them. You can review or pause anything. The point is to stop missing the moment, not to remove your judgement.',
            },
            {
                question: 'Will this help with referrals and past clients?',
                answer:
                    'Directly. A structured testimonial ask after delivery, plus a quiet door for the next piece of work, is where most independent consultants find unexpected revenue.',
            },
            {
                question: 'Do I need a new website?',
                answer:
                    'Sometimes. Often the bigger lift is in the offer itself — making it easy for a buyer to repeat — before any redesign.',
            },
        ],
    };

    return {
        slug: 'consultants',
        industries: ['consulting'],
        systems: [
            'smart-website-systems',
            'crm-automation',
            'reputation-review',
            'local-seo-authority',
        ],
        topics: ['lead-qualification', 'follow-up', 'pipeline-visibility'],
        type: 'detail',
        parentSlug: 'legal-professional-services',
        seo: {
            title: 'Independent Consultants — Stop Losing Engagements To "Let Us Think About It" | MindWP',
            description:
                'For independent consultants where discovery calls go well but engagements quietly die in buying committees. We help sharpen the offer, define the next step, and follow up gracefully through long decisions.',
            keywords: [
                'consulting proposal follow-up',
                'consulting buyer enablement',
                'consulting crm',
                'consulting lead conversion',
                'consulting positioning system',
            ],
            canonical: '/industries/legal-professional-services/consultants',
        },
        hero: {
            ...heroData,
        },
        operatingPatterns: operatingPatternsData,
        systemLayers: systemLayersData,
        workflowExamples: workflowExamplesData,
        explore: exploreData,
        faq: faqData,
        cta: {
            title: 'Tell us where the conversations stall',
            description:
                'If discovery calls go well but engagements rarely turn into signed work, walk us through the last few that went quiet and we will show you where the offer or the follow-up is actually breaking.',
        },
    };
}

export const consultantsIndustryPageData: IndustryPageData = buildConsultantsIndustryPageData();
