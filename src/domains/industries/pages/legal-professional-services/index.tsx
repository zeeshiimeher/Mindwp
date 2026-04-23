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
            'Solicitors, accountants, and consultants rarely lose work in one obvious moment. It usually fades out over days or weeks while the prospect compares firms, sits on the proposal, and hears nothing useful enough to keep the conversation moving.',
        list: ['Slow decisions', 'Quiet drop-offs', 'Weak follow-up', 'Trust drift'],
        cssPrefix: 'legal-professional-services-hero',
    };

    const operatingPatternsData = {
        badge: 'Three Patterns That Repeat Across The Category',
        title: 'Different practices, the same three failures',
        description:
            'A small law firm, a five-partner accountancy, and an independent consultant can look very different day to day. The way work slips away is often far more similar than most firms realise.',
        benefits: [
            {
                icon: HourglassIcon,
                title: 'Slow decisions outlast the firm\'s memory',
                description:
                    'Decisions often take weeks, sometimes longer, especially when more than one person is involved. By the time the prospect is ready to talk again, the firm has usually moved on and nobody has picked the thread back up.',
                iconType: 'primary' as const,
            },
            {
                icon: EyeOff,
                title: 'Drop-offs happen silently',
                description:
                    'Almost nobody writes back to say they chose another firm or decided to wait. Proposals sit in inboxes, enquiries stop replying, and the loss only becomes visible when somebody bothers to trace what happened.',
                iconType: 'secondary' as const,
            },
            {
                icon: Compass,
                title: 'Comparison happens in rooms you are not in',
                description:
                    'Partners, spouses, finance leads, directors, or internal buyers all shape the decision without speaking to you directly. The firm that stays easiest to trust and easiest to forward usually has the advantage in that room.',
                iconType: 'accent' as const,
            },
        ],
        columns: 3 as const,
    };

    const decisionChecklistData = {
        badge: 'Quietly Familiar?',
        title: 'A few signs the leak is in consideration, not in marketing',
        description:
            'If most of these feel familiar, the problem is probably not getting attention in the first place. It is what happens after the enquiry arrives and before the prospect makes up their mind.',
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
            'From the outside, these practices can sound similar. In reality, each one loses work in a different part of the decision cycle once the first contact has happened.',
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
            'The legal, financial, or advisory work stays yours. What changes is the quiet follow-up, clearer next step, and steady trust signals that stop a live prospect from drifting away while they think it over.',
        featureCategories: [
            {
                title: 'Acknowledge every enquiry like a partner would',
                description:
                    'A warm first reply goes back quickly and sounds like it came from a real person in the firm. It names the next step and who owns it, so the prospect is not left wondering whether to keep looking elsewhere.',
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
                    'Every open proposal stays visible instead of living in somebody\'s inbox and fading out. Two calm, well-timed follow-ups catch the decisions that would otherwise disappear without a clear no.',
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
                    'Whether it is a fee schedule, scope, or engagement summary, it is written clearly enough to survive being forwarded internally. That matters when the real decision happens somewhere you are not present to explain it again.',
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
                    'Reviews, testimonials, and light-touch proof are requested at the point they are most likely to be given. That helps trust stay visible for the next prospect who is still deciding whether to make contact.',
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
                    'Your pages and search visibility line up around sector, niche, matter type, or area instead of generic professional-services wording. That makes it easier for the right kind of brief to recognise itself quickly.',
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
            'No pitch and no long theory session. We look at how the practice actually runs, where prospects go quiet, and which missing follow-up or clarity step is costing the most work first.',
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
            'Same category, different decision patterns. Each page stays closer to one type of practice so the examples feel more like your actual week.',
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
        description:
            'These are the supporting services that keep coming up across law, accounting, and consulting. Each one helps hold trust, follow-up, and visibility together without changing how the firm actually delivers the work.',
        cards: [
            {
                icon: CheckCircle2,
                title: 'CRM & Follow-up Automation',
                description: 'Keeps open proposals and slower decisions visible so nobody has to rely on memory to send the next follow-up.',
                href: '/services/crm-infrastructure-implementation',
                gradient: 'teal',
                iconBg: 'teal',
            },
            {
                icon: MessageSquare,
                title: 'Smart Website Systems',
                description: 'Helps new enquiries get a prompt, grounded first reply so the prospect does not sit there wondering what happens next.',
                href: '/services/smart-website-systems',
                gradient: 'purple',
                iconBg: 'purple',
            },
            {
                icon: Star,
                title: 'Reputation & Review Systems',
                description: 'Makes the visible proof feel closer to the standard of work the firm is already delivering behind the scenes.',
                href: '/services/reputation-review-systems',
                gradient: 'amber',
                iconBg: 'amber',
            },
            {
                icon: Search,
                title: 'Local Authority & SEO Systems',
                description: 'Helps the firm show up for the kind of brief, niche, or local search that is actually worth taking seriously.',
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
                'If enquiries are acknowledged late, proposals sit untouched, or prospects quietly stop replying after a good first conversation, walk us through the last few that went quiet. We will show you where the leak actually sits.',
        },
    };
}

export const legalProfessionalServicesIndustryPageData: IndustryPageData =
    buildLegalProfessionalServicesIndustryPageData();
