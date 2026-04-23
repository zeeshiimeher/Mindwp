import {
    Calendar,
    ClipboardList,
    MessageSquare,
    RotateCcw,
    Search,
    ShieldCheck,
    Star,
    Users,
    Wrench,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildRepairShopsIndustryPageData(): IndustryPageData {
    const heroData = {
        badge: 'For Repair Shops',
        title: 'They Came In Once, Loved The Job, And Never Came Back.',
        description:
            'Walk-ins fix the day. They never fix the year. The repeat customers you fixed up six months ago drifted to whoever they thought of next, because nobody stayed in their inbox.',
        list: ['One-and-done', 'No recall', 'Walk-in lottery', 'Small jobs ignored'],
        cssPrefix: 'repair-shops-hero',
    };

    const imageStripData = {
        badge: 'How Work Comes In',
        title: 'Most shops live off whoever walks through the door today',
        description:
            'A device, an appliance, a part that gave up. The shop that gets remembered next time wins. The one that just took the cash usually does not.',
        items: [
            {
                title: 'Walk-ins and quick jobs',
                image: '/images/placeholders/service-card-5.svg',
                alt: 'Abstract placeholder image representing repair shop walk-ins',
            },
            {
                title: 'Booked drop-offs',
                image: '/images/placeholders/service-card-6.svg',
                alt: 'Abstract placeholder image representing repair shop drop-offs',
            },
            {
                title: 'Repeat customers',
                image: '/images/placeholders/service-card-7.svg',
                alt: 'Abstract placeholder image representing repair shop repeat customers',
            },
            {
                title: 'Reviews and local search',
                image: '/images/placeholders/service-card-8.svg',
                alt: 'Abstract placeholder image representing repair shop reviews',
            },
        ],
        backgroundColor: 'bg-base',
        cssPrefix: 'repair-shops-image-strip',
    };

    const operatingPatternsData = {
        badge: 'Where Repeat Work Slips',
        title: 'The bench is busy. The customer base is shrinking quietly.',
        benefits: [
            {
                icon: Wrench,
                title: 'Walk-ins and bookings collide',
                description: 'Someone drops something off mid-job. The diary and the bench fight each other.',
                iconType: 'primary' as const,
            },
            {
                icon: RotateCcw,
                title: 'Past customers are never recalled',
                description: 'You fixed it. They paid. Six months later they Google somewhere else.',
                iconType: 'secondary' as const,
            },
            {
                icon: ClipboardList,
                title: 'Small jobs get dropped',
                description: 'Quick fixes feel not worth the admin, so they get put off and forgotten.',
                iconType: 'accent' as const,
            },
            {
                icon: ShieldCheck,
                title: 'Reviews never get asked for',
                description: 'Plenty of happy customers leaving the counter. Almost no proof of it online.',
                iconType: 'primary' as const,
            },
        ],
        columns: 4 as const,
    };

    const systemLayersData = {
        badge: 'What We Put In Place',
        title: 'A steadier base of repeat customers, not just whoever walks in today',
        description: 'You keep doing the bench work. The relationship with past customers stops depending on memory.',
        featureCategories: [
            {
                title: 'Stop the walk-in vs booking clash',
                description: 'A clear way to take drop-offs without burning the bench.',
                icon: Calendar,
                features: [
                    'Slots customers can pick themselves',
                    'Walk-ins logged in the same place as bookings',
                    'You see what is actually coming in',
                ],
            },
            {
                title: 'Bring past customers back',
                description: 'Quiet recall messages so the people you already fixed up come to you next.',
                icon: RotateCcw,
                features: [
                    'Recall on a sensible cycle, not spam',
                    'Service-specific reminders',
                    'Stops the moment they reply',
                ],
            },
            {
                title: 'Catch the small jobs',
                description: 'A short reply path so quick fixes do not get dropped.',
                icon: ClipboardList,
                features: [
                    'One inbox for messages, forms, missed calls',
                    'Customer and item captured up front',
                    'Small jobs queued without admin',
                ],
            },
            {
                title: 'Turn finished repairs into proof',
                description: 'A review ask after collection, when the customer is happiest.',
                icon: ShieldCheck,
                features: [
                    'Review request after pickup',
                    'Asked at the right moment',
                    'Reviews where local people search',
                ],
            },
            {
                title: 'Show up when locals search',
                description: 'Pages and Google profile lined up for the kinds of repairs you actually do.',
                icon: Search,
                features: [
                    'Found on Maps for the work you do',
                    'Pages that match real searches',
                    'Local area coverage that is visible',
                ],
            },
        ],
        columns: 3 as const,
    };

    const workflowExamplesData = {
        badge: 'Real Situations',
        title: 'A few moments where the difference shows up',
        description: 'The handoffs that decide whether someone becomes a repeat customer or a one-off.',
        workflows: [
            {
                trigger: 'A walk-in drops something off mid-job.',
                actions: [
                    'Logged in the same place as bookings',
                    'Customer and item noted in seconds',
                    'They get a text when it is ready',
                ],
            },
            {
                trigger: 'A past customer has not been seen in six months.',
                actions: [
                    'A quiet recall message goes out',
                    'It is short and written like you',
                    'Most replies come from people who had simply forgotten',
                ],
            },
            {
                trigger: 'A repair gets collected.',
                actions: [
                    'Receipt and follow-up in one go',
                    'Review request fires the next morning',
                    'You stay in their inbox without effort',
                ],
            },
        ],
        backgroundColor: 'bg-base',
        cssPrefix: 'repair-shops-workflow-examples',
    };

    const exploreData = {
        badge: 'Related',
        description: 'The other parts of the system that come up most often for repair shops.',
        cards: [
            {
                icon: Users,
                title: 'CRM & Follow-up Automation',
                description: 'Recall past customers and keep small jobs from getting dropped.',
                href: '/services/crm-infrastructure-implementation',
                gradient: 'teal',
                iconBg: 'teal',
            },
            {
                icon: MessageSquare,
                title: 'Smart Website Systems',
                description: 'Hold enquiries, walk-ins, and bookings in one place.',
                href: '/services/smart-website-systems',
                gradient: 'purple',
                iconBg: 'purple',
            },
            {
                icon: Search,
                title: 'Local Authority & SEO Systems',
                description: 'Show up when local people search for the repair you do.',
                href: '/services/local-seo-authority',
                gradient: 'blue',
                iconBg: 'blue',
            },
            {
                icon: Star,
                title: 'Reputation & Review Systems',
                description: 'Turn finished repairs into proof on Google.',
                href: '/services/reputation-review-systems',
                gradient: 'amber',
                iconBg: 'amber',
            },
        ],
        backgroundColor: 'bg-alt',
        columns: 2 as const,
    };

    const faqData = {
        title: 'Things repair shops usually ask',
        description: 'Honest answers about how this fits a busy bench.',
        faqs: [
            {
                question: 'Will customers feel spammed by recall messages?',
                answer:
                    'No. They are short, friendly, and on a sensible cycle. The moment they reply, the follow-up stops.',
            },
            {
                question: 'How is this different from just answering the phone better?',
                answer:
                    'The phone is one channel. This pulls walk-ins, missed calls, messages, and past customers into one place so nobody slips out the side.',
            },
            {
                question: 'Do small jobs really matter?',
                answer:
                    'They are how loyalty is built. The shop that fixes the small thing is the shop that gets called for the big one.',
            },
            {
                question: 'Do I need a new website?',
                answer:
                    'Usually not. The work is in everything that happens after someone first reaches out.',
            },
            {
                question: 'How long until repeat work shows up?',
                answer:
                    'Recall messages tend to bring people back inside the first month, because most past customers had simply forgotten.',
            },
        ],
    };

    return {
        slug: 'repair-shops',
        industries: ['repair-shop'],
        systems: [
            'smart-website-systems',
            'crm-automation',
            'local-seo-authority',
            'reputation-review',
        ],
        topics: ['follow-up', 'review-generation', 'lead-response-time'],
        type: 'detail',
        parentSlug: 'local-appointment-businesses',
        seo: {
            title: 'Repair Shops — Stop Living Off Walk-Ins, Build A Repeat Customer Base | MindWP',
            description:
                'For repair shops where the bench is busy but past customers never come back. We put recall, easy booking, and review prompts in place so today fixes the year, not just the day.',
            keywords: [
                'repair shop customer recall',
                'repair shop booking system',
                'repair shop crm',
                'repair shop local seo',
                'repair shop reputation system',
            ],
            canonical: '/industries/local-appointment-businesses/repair-shops',
        },
        hero: {
            ...heroData,
        },
        imageStrip: imageStripData,
        operatingPatterns: operatingPatternsData,
        systemLayers: systemLayersData,
        workflowExamples: workflowExamplesData,
        explore: exploreData,
        faq: faqData,
        cta: {
            title: 'Tell us where the repeat work disappears',
            description:
                'If the bench is busy but the same customers do not come back, walk us through how the month runs and we will show you the first thing worth fixing.',
        },
    };
}

export const repairShopsIndustryPageData: IndustryPageData = buildRepairShopsIndustryPageData();
