import {
    CalendarCheck,
    ClipboardList,
    FileSearch,
    MessageSquare,
    PhoneCall,
    Search,
    ShieldCheck,
    Sparkles,
    Star,
    UserCheck,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildSmallMedSpasIndustryPageData(): IndustryPageData {
    const heroData = {
        badge: 'For Small Med Spas',
        title: 'She Filled In The Consultation Form On Tuesday Night. By Friday She Had Booked The Clinic That Replied On Wednesday.',
        description:
            'Med spa clients rarely book on impulse, but they do notice quickly when interest goes cold. If the enquiry sits too long, the consult happens with no clear next step, or the plan is never followed up calmly, the booking quietly falls away before treatment ever starts.',
        list: ['Cold enquiries', 'Slow consults', 'Dropped plans'],
        cssPrefix: 'small-med-spas-hero',
    };

    const decisionChecklistData = {
        badge: 'How A Med Spa Enquiry Actually Decides',
        title: 'Three things she is quietly checking before she books',
        description: 'She is not only comparing prices or treatment menus. She is checking whether the clinic feels safe, organised, and steady enough to trust with something she is still slightly nervous about.',
        items: [
            'A same-day, named reply with two suggested consult times',
            'A short pre-consult intake that respects her time',
            'A written plan within 24 hours of the consult, in her words',
            'Recent, real reviews from completed treatment journeys',
            'A Google profile that matches the work she actually wants',
            'Practitioner credentials surfaced calmly, not buried',
        ],
        columns: 2 as const,
        backgroundColor: 'bg-base',
        cssPrefix: 'small-med-spas-decision-checklist',
    };

    const operatingPatternsData = {
        badge: 'Where Consults Become Bookings — Or Don\'t',
        title: 'The treatment is not the sale. The follow-up is.',
        description:
            'The consult may go well and the practitioner may feel right, but that does not finish the decision. The booking usually depends on what happens in the quiet day or two after she leaves thinking it over.',
        benefits: [
            {
                icon: MessageSquare,
                title: 'The form sat in an inbox until Wednesday',
                description: 'By the time anyone replied, she had already taken a Friday consult somewhere that felt more responsive. The enquiry itself was fine. What failed was the speed and tone of the first reply.',
                iconType: 'primary' as const,
            },
            {
                icon: FileSearch,
                title: 'The consult went well. Then nothing.',
                description: 'No written plan arrived and no calm follow-up came in the window where she was still thinking hard about it. She liked the practitioner, but the silence made the whole decision easier to postpone.',
                iconType: 'secondary' as const,
            },
            {
                icon: CalendarCheck,
                title: 'The treatment plan stalled at session two',
                description: 'Series-based treatments need steady rebook timing or the plan starts slipping after the early momentum. Without that structure, a four-session plan can quietly turn into one or two visits and then stop.',
                iconType: 'accent' as const,
            },
        ],
        columns: 3 as const,
    };

    const systemLayersData = {
        badge: 'What We Put In Place',
        title: 'Calm, fast, structured follow-up — from first enquiry to plan completion',
        description: 'You stay focused on assessment and treatment. The part that turns an enquiry into a booked consult and a consult into a completed plan stops depending on someone remembering to chase it later.',
        featureCategories: [
            {
                title: 'Same-day, named reply to every enquiry',
                description: 'No web form sits untouched into the next day. The first reply offers two consult times and sounds like a real person in the clinic, not an empty portal message.',
                icon: PhoneCall,
                features: [
                    'Same-day acknowledgement',
                    'Two consult slots in the first reply',
                    'Tone matched to the treatment area',
                ],
            },
            {
                title: 'Pre-consult intake, post-consult plan',
                description: 'A short structured intake arrives before the consult, then a written plan follows after it. She can see the clinic has taken her goals seriously instead of leaving her to remember everything herself.',
                icon: ClipboardList,
                features: [
                    'Pre-consult intake form',
                    'Written plan within 24 hours',
                    'References her actual goals, not a template',
                ],
            },
            {
                title: 'Treatment plan rebooks, not loose ends',
                description: 'Series-based treatments get rebook prompts at the right interval, before the plan loses momentum. That keeps a treatment journey moving instead of leaving it to stall after session one or two.',
                icon: CalendarCheck,
                features: [
                    'Scheduled rebook prompts per plan',
                    'Reminders before each session',
                    'Pause and resume without losing the thread',
                ],
            },
            {
                title: 'Reviews from completed plans, not first sessions',
                description: 'Review requests go out when results are visible and the client feels settled in the choice she made. That is very different from asking after session one when she may still be unsure and watching closely.',
                icon: Star,
                features: [
                    'Outcome-based review timing',
                    'Asked once, never twice',
                    'Reviews that read like real journeys',
                ],
            },
            {
                title: 'Trust-led local presence',
                description: 'Your Google profile and treatment pages line up around the actual treatments, real reviews, and practitioner credentials. The tone stays calm and confident, which matters more here than sounding loud or salesy.',
                icon: Search,
                features: [
                    'Found for the treatments you actually offer',
                    'Practitioner-led trust signals',
                    'Profile reflects the clinic, not a template',
                ],
            },
        ],
        columns: 3 as const,
    };

    const exploreData = {
        badge: 'Related',
        description: 'These are the supporting services that come up most often once a med spa sees where enquiries and plans are quietly dropping. They all support the same trust, reply, and completion gaps from different sides.',
        cards: [
            {
                icon: PhoneCall,
                title: 'Smart Website Systems',
                description: 'Keeps same-day replies, consult booking, and written next steps moving without leaving the clinic to carry the whole load in the inbox.',
                href: '/services/smart-website-systems',
                gradient: 'purple',
                iconBg: 'purple',
            },
            {
                icon: CalendarCheck,
                title: 'CRM & Treatment Plan Automation',
                description: 'Keeps series rebooks, follow-ups, and plan completion moving so a treatment journey does not quietly stall after the first signs of hesitation.',
                href: '/services/crm-infrastructure-implementation',
                gradient: 'teal',
                iconBg: 'teal',
            },
            {
                icon: Star,
                title: 'Reputation & Review Systems',
                description: 'Collects reviews from completed plans so the proof seen by comparison-minded clients matches the quality of the journeys you are already delivering.',
                href: '/services/reputation-review-systems',
                gradient: 'amber',
                iconBg: 'amber',
            },
            {
                icon: Search,
                title: 'Local Authority & SEO Systems',
                description: 'Helps the clinic show up for the treatments it actually offers and read as safe, credible, and organised from the first search impression.',
                href: '/services/local-seo-authority',
                gradient: 'blue',
                iconBg: 'blue',
            },
        ],
        backgroundColor: 'bg-alt',
        columns: 2 as const,
    };

    const faqData = {
        title: 'Things small med spas usually ask',
        description: 'These are the practical questions that usually come up in a clinic-led business where the decision is slower, more cautious, and easier to lose in the follow-up. Straight answers, no sales gloss.',
        faqs: [
            {
                question: 'We do not want to feel pushy. Will follow-up sound like sales?',
                answer:
                    'No. The whole point is calm. Same-day reply, structured plan, and one warm follow-up at the right moment. No discount chasing.',
            },
            {
                question: 'Our practitioner does the consults. Who handles the admin?',
                answer:
                    'The system does the routine bits — acknowledgement, reminders, rebook prompts — so the practitioner only steps in for the parts that need them.',
            },
            {
                question: 'Can it handle different treatment journeys?',
                answer:
                    'Yes. Single-session, three-session, and longer plans each get the right rebook cadence and review timing.',
            },
            {
                question: 'What about clients who went quiet after a consult?',
                answer:
                    'A single, calm follow-up references the plan she discussed. It either reopens the conversation or respectfully ends it.',
            },
            {
                question: 'Will this affect compliance or how we present treatments?',
                answer:
                    'No. Tone, claims, and copy stay aligned with what your practitioners are comfortable saying. We do not introduce claims.',
            },
        ],
    };

    return {
        slug: 'small-med-spas',
        industries: ['med-spa'],
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
            title: 'Small Med Spas — Calm Consult Follow-Up, Plan Completion | MindWP',
            description:
                'For small med spas where enquiries cool overnight and treatment plans stall at session two. We put same-day replies, written plans, scheduled rebooks, and outcome-based reviews in place.',
            canonical: '/industries/beauty-personal-care/small-med-spas',
        },
        hero: {
            ...heroData,
        },
        operatingPatterns: operatingPatternsData,
        decisionChecklist: decisionChecklistData,
        systemLayers: systemLayersData,
        explore: exploreData,
        faq: faqData,
        cta: {
            title: 'Tell us where the consult goes quiet',
            description:
                'If enquiries cool before anyone calls back or treatment plans keep fading after the consult, walk us through a recent month and we will show you where calm follow-up would have closed the loop.',
        },
    };
}

export const smallMedSpasIndustryPageData: IndustryPageData = buildSmallMedSpasIndustryPageData();
