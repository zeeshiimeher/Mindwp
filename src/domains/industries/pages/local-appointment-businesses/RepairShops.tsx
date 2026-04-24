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
            'Most repair-shop work is not panic work, but it still goes elsewhere when the timing feels easier somewhere else. A person wants to know when they can drop it off, how long it will take, and whether anyone got back to them quickly enough to make booking feel simple.',
        list: ['Slow replies', 'Unclear timing', 'Missed recalls'],
        cssPrefix: 'repair-shops-hero',
    };

    const imageStripData = {
        badge: 'How Work Comes In',
        title: 'Most shops live off whoever walks through the door today',
        description:
            'A phone, appliance, bike, tool, or small machine that is not working properly anymore. The shop that makes drop-off and follow-up feel easier usually gets remembered next time, not just the one that took the payment this time.',
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
                title: 'Repeat work',
                image: '/images/placeholders/service-card-7.svg',
                alt: 'Abstract placeholder image representing repeat repair work',
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
        title: 'The bench is busy. The repeat work is shrinking quietly.',
        description:
            'Most repair shops do not lose people because the repair was bad. They lose them because the booking felt slow, the timing felt vague, or nobody stayed in touch once the job was done.',
        benefits: [
            {
                icon: Wrench,
                title: 'Walk-ins and bookings collide',
                description: 'Someone turns up mid-job asking if you can look at it today, while another person is still waiting to confirm a drop-off time. The diary and the bench start fighting each other because nothing feels properly scheduled.',
                iconType: 'primary' as const,
            },
            {
                icon: RotateCcw,
                title: 'Past jobs are never followed back up',
                description: 'You fixed it, they paid, and the experience was fine. Six months later, when the next small problem shows up, they Google again because nobody reminded them they already had a shop they trusted.',
                iconType: 'secondary' as const,
            },
            {
                icon: ClipboardList,
                title: 'Small jobs get dropped',
                description: 'Quick fixes often feel too small for the admin, so they get pushed to later and then forgotten completely. That is exactly the kind of job that makes someone decide your shop feels hard to pin down next time.',
                iconType: 'accent' as const,
            },
            {
                icon: ShieldCheck,
                title: 'Reviews never get asked for',
                description: 'Plenty of happy people leave the counter with the repair sorted and almost no proof of it appears online afterwards. The next person searching locally only sees whichever shop remembered to ask.',
                iconType: 'primary' as const,
            },
        ],
        columns: 4 as const,
    };

    const systemLayersData = {
        badge: 'What We Put In Place',
        title: 'A steadier base of repeat work, not just whoever walks in today',
        description:
            'You keep doing the bench work and handling the day in front of you. The repeat business, scheduling clarity, and lighter follow-up stop depending on memory or whoever had five spare minutes that afternoon.',
        featureCategories: [
            {
                title: 'Stop the walk-in vs booking clash',
                description: 'A clearer way to take drop-offs without letting the bench get derailed by whoever happened to walk in next. That helps the day feel more organised for you and more predictable for the person booking.',
                icon: Calendar,
                features: [
                    'Slots people can pick themselves',
                    'Walk-ins logged in the same place as bookings',
                    'You see what is actually coming in',
                ],
            },
            {
                title: 'Bring past jobs back into view',
                description: 'Quiet recall messages go out on a sensible cycle so the people you already helped think of you first next time. That matters more than most shops realise because a lot of repeat work is lost through simple forgetfulness.',
                icon: RotateCcw,
                features: [
                    'Recall on a sensible cycle, not spam',
                    'Service-specific reminders',
                    'Stops the moment they reply',
                ],
            },
            {
                title: 'Catch the small jobs',
                description: 'A shorter reply path keeps quick fixes from getting dropped just because they felt too small to deal with right away. That helps the easier jobs get booked in without turning into a trail of half-finished admin.',
                icon: ClipboardList,
                features: [
                    'One inbox for messages, forms, missed calls',
                    'Caller and item captured up front',
                    'Small jobs queued without admin',
                ],
            },
            {
                title: 'Turn finished repairs into proof',
                description: 'A review ask goes out after collection, when the person has the item back and the fix still feels fresh. That is the point where they are most likely to leave something useful instead of forgetting once they get home.',
                icon: ShieldCheck,
                features: [
                    'Review request after pickup',
                    'Asked at the right moment',
                    'Reviews where local people search',
                ],
            },
            {
                title: 'Show up when locals search',
                description: 'Your pages and Google profile line up around the kinds of repairs you actually want more of. That helps more local people checking timing and convenience find you before they just default to the nearest name they recognise.',
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
        description:
            'These are the small handoffs that decide whether someone comes back or stays a one-off repair. None of them look dramatic in the moment, but they shape whether booking the next job feels easy or not.',
        workflows: [
            {
                trigger: 'A walk-in drops something off mid-job.',
                actions: [
                    'Logged in the same place as bookings',
                    'Caller and item noted in seconds',
                    'They get a text when it is ready',
                ],
            },
            {
                trigger: 'A past job has gone quiet for six months.',
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
        description:
            'These are the supporting services that come up most often once a repair shop sees how much work is being lost through slow replies, unclear timing, and weak recall. Each one helps hold repeat work, proof, or local visibility together more reliably.',
        cards: [
            {
                icon: Users,
                title: 'CRM & Follow-up Automation',
                description: 'Keeps past jobs warm and stops smaller repairs from disappearing just because nobody got back to them clearly enough.',
                href: '/services/crm-infrastructure-implementation',
                gradient: 'teal',
                iconBg: 'teal',
            },
            {
                icon: MessageSquare,
                title: 'Smart Website Systems',
                description: 'Helps enquiries, walk-ins, and bookings stay in one place so timing and drop-off handling feel clearer from the first contact.',
                href: '/services/smart-website-systems',
                gradient: 'purple',
                iconBg: 'purple',
            },
            {
                icon: Search,
                title: 'Local Authority & SEO Systems',
                description: 'Helps you show up when local people search for the repair you actually do and want booked in, not just generic repair terms.',
                href: '/services/local-seo-authority',
                gradient: 'blue',
                iconBg: 'blue',
            },
            {
                icon: Star,
                title: 'Reputation & Review Systems',
                description: 'Turns finished repairs into proof on Google, so the next person checking who feels trustworthy sees more than just a star count.',
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
        description:
            'These are the practical questions that usually come up in a busy repair shop where timing, drop-offs, and repeat work all compete with the bench. Straight answers, no extra polish.',
        faqs: [
            {
                question: 'Will people feel spammed by recall messages?',
                answer:
                    'No. They are short, friendly, and on a sensible cycle. The moment they reply, the follow-up stops.',
            },
            {
                question: 'How is this different from just answering the phone better?',
                answer:
                    'The phone is one channel. This pulls walk-ins, missed calls, messages, and past jobs into one place so nobody slips out the side.',
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
                    'Recall messages tend to bring people back inside the first month, because most past jobs had simply slipped their mind.',
            },
        ],
    };

    return {
            seo: {
                title: 'Repair Shops — Stop Living Off Walk-Ins, Build A Repeat Work Base | MindWP',
                description:
                    'For repair shops where the bench is busy but past jobs never come back. We put recall, easy booking, and review prompts in place so today fixes the year, not just the day.',
                canonical: '/industries/local-appointment-businesses/repair-shops',
            },
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
                    'If the bench stays busy but bookings still feel harder to pin down and past clients do not come back, walk us through how the month runs and we will show you the first thing worth fixing.',
            }
        };
}

export const repairShopsIndustryPageData: IndustryPageData = buildRepairShopsIndustryPageData();
