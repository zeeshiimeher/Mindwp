import {
    Bell,
    Calculator,
    ClipboardCheck,
    Eye,
    FileText,
    MessageCircle,
    Search,
    ShieldCheck,
    Star,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildAccountingFirmsIndustryPageData(): IndustryPageData {
    const heroData = {
        badge: 'For Accounting Firms',
        title: 'The Proposal Was Sent Three Weeks Ago. Nobody Has Opened It Since.',
        description:
            'Most accounting firms do not lose business owners on the call. They lose them after the proposal lands. The owner reads it, puts it in a folder to "look at properly later", and quietly signs with whoever stayed in front of them.',
        list: ['Sent-not-signed', 'No nudge', 'Compared quietly', 'Decision drift'],
        cssPrefix: 'accounting-firms-hero',
    };

    const operatingPatternsData = {
        badge: 'Where Proposals Die',
        title: 'It is rarely a no. It is a maybe that nobody followed up.',
        benefits: [
            {
                icon: FileText,
                title: 'Sent on Tuesday. Forgotten by Friday.',
                description:
                    'The owner meant to read it on the train. Then payroll, a supplier issue, a bad week. The proposal sinks to the bottom of the inbox.',
                iconType: 'primary' as const,
            },
            {
                icon: Eye,
                title: 'Two other firms sent something too',
                description:
                    'They are quietly comparing. Whoever stays present looks like the firm that actually wants the work.',
                iconType: 'secondary' as const,
            },
            {
                icon: Bell,
                title: 'Nobody chased, because nobody had time',
                description:
                    'A polite check-in a week later would close half of these. It almost never gets sent.',
                iconType: 'accent' as const,
            },
        ],
        columns: 3 as const,
    };

    const comparisonData = {
        badge: 'A Proposal, Two Outcomes',
        title: 'Same firm. Same proposal. Two completely different close rates.',
        description: 'The work is the same. What changes is whether anyone stays in the conversation after the document is sent.',
        comparisons: [
            {
                type: 'before' as const,
                title: 'How proposals usually go',
                items: [
                    'Discovery call on Monday. Proposal sent Tuesday.',
                    'No reply by Friday. Nobody chases.',
                    'Two weeks later, the prospect signs with someone else.',
                    'You never find out which firm. Or why.',
                ],
            },
            {
                type: 'after' as const,
                title: 'How they go with a quiet follow-up',
                items: [
                    'A short check-in lands the next week. Friendly, not pushy.',
                    'A second nudge a week later if it stays quiet.',
                    'You can see who has opened it, who is warm, who has gone cold.',
                    'More signed engagements from the same number of proposals.',
                ],
            },
        ],
    };

    const workflowExamplesData = {
        badge: 'Real Moments',
        title: 'The points where a proposal usually decides itself',
        description: 'Small handoffs that used to depend on a partner remembering at the right moment.',
        workflows: [
            {
                trigger: 'A proposal has been sitting unopened for five days.',
                actions: [
                    'A polite, written-like-you check-in goes out',
                    'It references the call, not the document',
                    'It opens the door without pressure',
                ],
            },
            {
                trigger: 'The owner replied with a question and then went quiet.',
                actions: [
                    'The thread is held in one place, not lost in inboxes',
                    'A second short nudge goes out the following week',
                    'The partner sees who is warm before the next call block',
                ],
            },
            {
                trigger: 'The proposal stays quiet for a month.',
                actions: [
                    'A graceful close-out message goes out',
                    'It leaves the door open for next year-end',
                    'The lead is parked, not lost',
                ],
            },
        ],
        backgroundColor: 'bg-base',
        cssPrefix: 'accounting-firms-workflow-examples',
    };

    const systemLayersData = {
        badge: 'What We Put In Place',
        title: 'Quiet, scheduled follow-up so good prospects stop drifting after the proposal lands',
        description: 'You stay in client meetings. The follow-up runs underneath, in a tone that fits a professional firm.',
        featureCategories: [
            {
                title: 'See every open proposal in one place',
                description: 'No more "did anyone follow up with that builder?" The pipeline lives somewhere everyone can see.',
                icon: ClipboardCheck,
                features: [
                    'Open proposals visible at a glance',
                    'Status tracked without spreadsheets',
                    'Handoff between partners stops slipping',
                ],
            },
            {
                title: 'Nudge without nagging',
                description: 'Two short, friendly check-ins spread across a couple of weeks. The moment they reply, it stops.',
                icon: Bell,
                features: [
                    'Day 5 and day 12 follow-ups out of the box',
                    'Tone matched to a professional firm',
                    'Stops on reply or signature',
                ],
            },
            {
                title: 'Catch the enquiry before another firm does',
                description: 'A same-hour acknowledgement so the owner stops emailing other accountants while they wait.',
                icon: MessageCircle,
                features: [
                    'Instant acknowledgement on every enquiry',
                    'Service area and need captured up front',
                    'Holds the lead until a partner can call back',
                ],
            },
            {
                title: 'Turn signed clients into proof',
                description: 'A review request after the first quarter, when the relief of switching is still fresh.',
                icon: ShieldCheck,
                features: [
                    'Review request at the right moment',
                    'Asked once, never again',
                    'Reviews start to match the workload',
                ],
            },
            {
                title: 'Be findable for the work you actually want',
                description: 'Pages and Google profile lined up for niche, sector, and area — not generic accountancy.',
                icon: Search,
                features: [
                    'Pages for the work you want more of',
                    'Found for sector + area searches',
                    'Less time on enquiries that are not a fit',
                ],
            },
        ],
        columns: 3 as const,
    };

    const exploreData = {
        badge: 'Related',
        description: 'The other parts that come up most often for accounting firms.',
        cards: [
            {
                icon: Calculator,
                title: 'CRM & Proposal Follow-up',
                description: 'Hold open proposals, nudge at the right moment, stop the drift.',
                href: '/services/crm-infrastructure-implementation',
                gradient: 'teal',
                iconBg: 'teal',
            },
            {
                icon: MessageCircle,
                title: 'Smart Website Systems',
                description: 'Catch enquiries instantly so prospects stop emailing other firms.',
                href: '/services/smart-website-systems',
                gradient: 'purple',
                iconBg: 'purple',
            },
            {
                icon: Star,
                title: 'Reputation & Review Systems',
                description: 'Build the review base your firm has actually earned.',
                href: '/services/reputation-review-systems',
                gradient: 'amber',
                iconBg: 'amber',
            },
            {
                icon: Search,
                title: 'Local Authority & SEO Systems',
                description: 'Be the firm that shows up for the niche you actually want.',
                href: '/services/local-seo-authority',
                gradient: 'blue',
                iconBg: 'blue',
            },
        ],
        backgroundColor: 'bg-alt',
        columns: 2 as const,
    };

    const faqData = {
        title: 'Things accounting firms usually ask',
        description: 'Honest answers about how this fits a professional, deadline-driven practice.',
        faqs: [
            {
                question: 'Will the follow-up feel pushy or salesy?',
                answer:
                    'No. Two short, polite check-ins across a couple of weeks. The tone is calm and partner-like, not marketing. The moment they reply, the follow-up stops.',
            },
            {
                question: 'Will partners see what is going out under the firm name?',
                answer:
                    'Yes. The templates are agreed first and adjusted to fit the voice of the firm. Nothing goes out that the partners would not be comfortable signing.',
            },
            {
                question: 'How is this different from what our practice management tool does?',
                answer:
                    'Practice management is built for the work after the engagement is signed. This sits in front of it, on the bit between proposal and signature.',
            },
            {
                question: 'What about prospects who never had a proposal sent?',
                answer:
                    'Same logic. Enquiries get acknowledged the same hour and held until a partner can call. Most of the leak is in the gap, not the call itself.',
            },
            {
                question: 'Do we need a new website?',
                answer:
                    'Usually not. We start with proposal follow-up and enquiry response, because that is where the closed-won numbers actually move.',
            },
        ],
    };

    return {
        slug: 'accounting-firms',
        industries: ['accounting'],
        systems: [
            'crm-automation',
            'smart-website-systems',
            'reputation-review',
            'local-seo-authority',
        ],
        topics: ['follow-up', 'lead-qualification', 'review-generation'],
        type: 'detail',
        parentSlug: 'legal-professional-services',
        seo: {
            title: 'Accounting Firms — Stop Losing Owners In The Gap Between Proposal And Signature | MindWP',
            description:
                'For accounting firms where proposals get sent and then go quiet. We put quiet, scheduled follow-up, faster enquiry acknowledgement, and review prompts in place so good prospects stop drifting to whoever stayed in front of them.',
            keywords: [
                'accounting firm proposal follow-up',
                'accounting firm crm',
                'accounting firm lead handling',
                'accounting firm reputation system',
                'accounting firm local seo',
            ],
            canonical: '/industries/legal-professional-services/accounting-firms',
        },
        hero: {
            ...heroData,
        },
        operatingPatterns: operatingPatternsData,
        comparison: comparisonData,
        workflowExamples: workflowExamplesData,
        systemLayers: systemLayersData,
        explore: exploreData,
        faq: faqData,
        cta: {
            title: 'Tell us where the proposals are dying',
            description:
                'If discovery calls go well but proposals quietly stop converting, walk us through how the last few went and we will show you where the close rate is actually leaking.',
        },
    };
}

export const accountingFirmsIndustryPageData: IndustryPageData = buildAccountingFirmsIndustryPageData();
