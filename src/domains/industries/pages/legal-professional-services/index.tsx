import {
    BriefcaseBusiness,
    Calculator,
    CheckCircle2,
    ClipboardList,
    Compass,
    EyeOff,
    HourglassIcon,
    Layers,
    MessageSquare,
    Scale,
    Search,
    ShieldCheck,
    Star,
} from 'lucide-react';

import type { IndustryPageData } from '@/domains/industries/types';

function buildLegalProfessionalServicesIndustryPageData(): IndustryPageData {
    const heroData = {
        badge: 'Legal & Professional Services',
        title: 'Professional Work Is Rarely Lost Loudly. It Is Lost In The Long, Quiet Middle.',
        description:
            'Solicitors, accountants, consultants — the work does not vanish on the call. It vanishes in the weeks afterwards, while clients deliberate, compare, postpone, and quietly choose whoever stayed in front of them. The firms that win are not faster. They are simply still in the room when the decision finally happens.',
        list: ['Slow decisions', 'Quiet drift', 'Comparison stalls', 'Invisible leaks'],
        cssPrefix: 'legal-professional-services-hero',
    };

    const operatingPatternsData = {
        badge: 'Three Patterns That Repeat Across The Category',
        title: 'Different practices, the same three failures',
        description:
            'A small law firm, a five-partner accountancy, and an independent consultant lose work in surprisingly similar ways. None of them are about the technical work itself.',
        benefits: [
            {
                icon: HourglassIcon,
                title: 'Slow decisions outlast the firm\'s memory',
                description:
                    'Buying decisions take weeks, sometimes months. By the time the client is ready, the firm has moved on to the next matter and forgotten to circle back.',
                iconType: 'primary' as const,
            },
            {
                icon: EyeOff,
                title: 'Drop-offs happen silently',
                description:
                    'Nobody emails to say "we went elsewhere." Proposals just stop being mentioned. Enquiries just stop replying. The leak is real but invisible until it is measured.',
                iconType: 'secondary' as const,
            },
            {
                icon: Compass,
                title: 'Comparison happens in rooms you are not in',
                description:
                    'Boards, partners, spouses, finance directors. The decision is made in a room without you. Whoever is easiest to summarise and forward usually wins.',
                iconType: 'accent' as const,
            },
        ],
        columns: 3 as const,
    };

    const decisionChecklistData = {
        badge: 'Quietly Familiar?',
        title: 'A few signs the leak is in consideration, not in marketing',
        description: 'If most of these ring true across the practice, the bottleneck is rarely lead generation. It is what happens to the leads you already have.',
        items: [
            'Discovery calls go well, but the close rate does not match the call quality',
            'Proposals get sent and then nobody knows what happened to them',
            'Enquiries take more than a day to acknowledge during busy periods',
            'Past clients who would refer are never asked, because nobody owns it',
            'Pipeline visibility lives in someone\'s head, not anywhere a partner can see it',
            'Reviews online do not reflect the actual quality of the work',
        ],
        columns: 2 as const,
        backgroundColor: 'bg-base',
        cssPrefix: 'legal-professional-services-decision-checklist',
    };

    const spectrumData = {
        badge: 'Where Practices Sit',
        title: 'Same category, three very different shapes of leak',
        description:
            'The category looks similar from the outside. The actual point where work is lost is different in each kind of practice.',
        cards: [
            {
                title: 'Trust-first practices',
                description:
                    'Small law firms where clients hesitate before they ever pick up the phone. The leak is at the door — half-typed forms, unmade calls, abandoned enquiries.',
                points: [
                    'Enquiries started but never sent',
                    'Cold first replies set the wrong tone',
                    'No safe, low-pressure first step',
                ],
            },
            {
                title: 'Proposal-driven practices',
                description:
                    'Accounting firms where the call goes well, the proposal goes out, and then the inbox goes silent for three weeks. The leak is in follow-up.',
                points: [
                    'Open proposals nobody owns',
                    'No structured nudge after sending',
                    'Decisions drift to whoever stayed present',
                ],
                featured: true,
            },
            {
                title: 'Decision-committee practices',
                description:
                    'Independent consultants whose buyers carry the decision into rooms the consultant is not in. The leak is in clarity and forward-ability.',
                points: [
                    'Offer too vague to repeat internally',
                    'No defined next step after discovery',
                    'Long buying cycles with no holding follow-up',
                ],
            },
        ],
        backgroundColor: 'bg-alt',
        cssPrefix: 'legal-professional-services-spectrum',
    };

    const systemLayersData = {
        badge: 'What We Put In Place',
        title: 'Stay in the room while the decision happens — without becoming a salesperson',
        description:
            'The work itself is yours. What we put around it is the quiet, professional follow-up that keeps the firm in front of clients while they think.',
        featureCategories: [
            {
                title: 'Acknowledge every enquiry like a partner would',
                description:
                    'A warm, human first reply inside the hour. It names the next step and the person. The client stops emailing other firms while they wait.',
                icon: MessageSquare,
                features: [
                    'Same-hour acknowledgement, in your voice',
                    'Names who will follow up and when',
                    'Captures only what is needed up front',
                ],
            },
            {
                title: 'Hold the open proposals and quotes',
                description:
                    'Every open proposal lives in one place. Two scheduled, polite check-ins close the ones that would otherwise drift.',
                icon: ClipboardList,
                features: [
                    'Pipeline visible to all partners',
                    'Day 5 and day 12 nudges, calm in tone',
                    'Stops the moment they reply or sign',
                ],
            },
            {
                title: 'Make the offer easy to forward',
                description:
                    'Whether it is a fee schedule, a scope, or an engagement summary — written so a client can repeat it inside their own organisation without needing you in the room.',
                icon: Layers,
                features: [
                    'Written in client language, not firm language',
                    'Outcome stated up front',
                    'Survives being passed to a board or partner',
                ],
            },
            {
                title: 'Turn finished work into the proof you have earned',
                description:
                    'Reviews, testimonials, and light-touch case studies, asked at the right moment so they actually get given.',
                icon: ShieldCheck,
                features: [
                    'Asked once, at the right point',
                    'Tone matched to a professional firm',
                    'Reviews catch up to the workload',
                ],
            },
            {
                title: 'Be findable for the work you actually want',
                description:
                    'Pages and search visibility lined up for sector, niche, matter type, or area — not generic professional services.',
                icon: Search,
                features: [
                    'Pages for the work you want more of',
                    'Found on the searches that bring real briefs',
                    'Less time on enquiries that are not a fit',
                ],
            },
        ],
        columns: 3 as const,
    };

    const processData = {
        badge: 'How We Start',
        title: 'A short, honest look at where the practice actually loses work',
        description:
            'No pitch. We sit with how the practice runs, listen to where it leaks, and put the missing piece in place in the order that helps most.',
        steps: [
            {
                number: '01',
                title: 'Look at the last twenty enquiries',
                description: 'Where they came from, who replied, who never replied, and what happened next.',
            },
            {
                number: '02',
                title: 'Map the silent drop-offs',
                description: 'Half-typed forms, unsent proposals, quiet quotes. The leak that nobody has been measuring.',
            },
            {
                number: '03',
                title: 'Fix the biggest leak first',
                description: 'Acknowledgement, follow-up, offer clarity, or proof — whichever is costing the practice the most work right now.',
            },
            {
                number: '04',
                title: 'Let it run while the partners do the work',
                description: 'Replies, reminders, reviews, follow-up. Quietly going in the background while fee earners do the actual practice.',
            },
        ],
        columns: 4 as const,
        backgroundColor: 'bg-base',
        cssPrefix: 'legal-professional-services-process',
    };

    const detailRoutesData = {
        badge: 'By Practice Type',
        title: 'Pick the one closest to how you actually run',
        description:
            'Same category, different leaks. Each page gets into the specifics for a different shape of practice.',
        items: [
            {
                title: 'Small Law Firms',
                description:
                    'For firms where worried clients hesitate before they ever ring, and half-typed enquiries quietly disappear.',
                href: '/industries/legal-professional-services/small-law-firms',
                icon: Scale,
            },
            {
                title: 'Accounting Firms',
                description:
                    'For practices where proposals go out and then go silent, and good prospects drift to whoever stayed in front of them.',
                href: '/industries/legal-professional-services/accounting-firms',
                icon: Calculator,
            },
            {
                title: 'Consultants',
                description:
                    'For independent consultants whose engagements stall in buying committees and "let us think about it" rooms.',
                href: '/industries/legal-professional-services/consultants',
                icon: BriefcaseBusiness,
            },
        ],
        backgroundColor: 'bg-muted/20',
        cssPrefix: 'legal-professional-services-detail-routes',
        styleVariant: 'style1' as const,
    };

    const exploreData = {
        badge: 'Related',
        description: 'The parts that come up most across legal, accounting, and consulting.',
        cards: [
            {
                icon: CheckCircle2,
                title: 'CRM & Follow-up Automation',
                description: 'Hold open proposals and decisions, nudge gracefully, stop the drift.',
                href: '/services/crm-infrastructure-implementation',
                gradient: 'teal',
                iconBg: 'teal',
            },
            {
                icon: MessageSquare,
                title: 'Smart Website Systems',
                description: 'Acknowledge enquiries the way a partner would, in the hour.',
                href: '/services/smart-website-systems',
                gradient: 'purple',
                iconBg: 'purple',
            },
            {
                icon: Star,
                title: 'Reputation & Review Systems',
                description: 'Make the proof match the quality of the work.',
                href: '/services/reputation-review-systems',
                gradient: 'amber',
                iconBg: 'amber',
            },
            {
                icon: Search,
                title: 'Local Authority & SEO Systems',
                description: 'Be findable for the kind of brief you actually want more of.',
                href: '/services/local-seo-authority',
                gradient: 'blue',
                iconBg: 'blue',
            },
        ],
        backgroundColor: 'bg-alt',
        columns: 2 as const,
    };

    return {
        slug: 'legal-professional-services',
        type: 'category',
        category: 'legal-professional-services',
        systems: [
            'crm-automation',
            'smart-website-systems',
            'reputation-review',
            'local-seo-authority',
        ],
        topics: [
            'follow-up',
            'lead-qualification',
            'pipeline-visibility',
            'review-generation',
        ],
        industries: ['accounting', 'consulting', 'law-firm'],
        seo: {
            title: 'Legal, Accounting & Consulting Practices — Stop Losing Work In The Quiet Middle | MindWP',
            description:
                'For law firms, accountants, and consultants where the leak is not in marketing but in the long, quiet middle — slow decisions, silent drop-offs, and rooms you are not in. We put the follow-up, clarity, and proof in place so the firm stays present while clients decide.',
            keywords: [
                'legal professional services follow-up system',
                'professional services proposal follow-up',
                'law firm consultation system',
                'accounting firm crm',
                'consulting buyer enablement',
            ],
            canonical: '/industries/legal-professional-services',
        },
        hero: heroData,
        operatingPatterns: operatingPatternsData,
        decisionChecklist: decisionChecklistData,
        spectrum: spectrumData,
        systemLayers: systemLayersData,
        process: processData,
        detailRoutes: detailRoutesData,
        explore: exploreData,
        sectionControls: {
            subIndustries: {
                enabled: false,
            },
            caseStudies: {
                enabled: false,
            },
        },
        cta: {
            title: 'Tell us where the practice quietly loses work',
            description:
                'If discovery calls go well but signed engagements do not match the call quality, or if proposals and enquiries quietly stop replying, walk us through the last few that went quiet. We will show you where the leak actually is.',
        },
    };
}

export const legalProfessionalServicesIndustryPageData: IndustryPageData =
    buildLegalProfessionalServicesIndustryPageData();
