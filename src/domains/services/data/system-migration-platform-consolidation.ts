import { LayoutTemplate, Puzzle, ShieldCheck, Wrench } from 'lucide-react';

import { buildServiceSeo } from '../seo';
import type { ServicePageData } from '../types';

const slug = 'system-migration-platform-consolidation';

export const systemMigrationPlatformConsolidationPage = {
  slug,
  seo: buildServiceSeo({
    slug,
    title: 'System Migration & Platform Consolidation for Service Businesses',
    description:
      'You want off the old platform. Fair enough. But a new platform with the same missing pieces gives you the same results on a different login screen.',
  }),
  systems: ['smart-website-systems'],
  topics: ['website-infrastructure'],
  badge: 'Platform Migration',
  category: 'Migration Pathway Services',
  hero: {
    badge: 'System Migration & Platform Consolidation',
    title: 'New Platform. Same Quiet Phone.',
    description:
      "The old setup is a mess. Too many tools, too many logins, too many workarounds. So you want to move. That makes sense. But the platform was never the reason enquiries weren't coming. Moving everything to a cleaner system doesn't fix what was missing in the first place.",
    list: ['Platform feels outdated', 'Tools disconnected', 'Enquiries still not flowing'],
    cssPrefix: 'system-migration-hero',
    backgroundColor: 'bg-gradient-surface-muted',
  },
  sections: {
    foundation: {
      badge: "Why you're looking at migration",
      title: 'The platform frustration is real. The fix might not be what you expect.',
      description:
        "Something pushed you to search for this. Usually it's not one thing — it's the accumulation.",
      painPoints: [
        {
          before:
            'Five tools, five logins, five monthly invoices. Nothing talks to anything else. Every customer touchpoint requires manual work.',
          after:
            'One connected foundation where forms, follow-up, CRM, and visibility share information without manual syncing.',
        },
        {
          before:
            "The website builder limits what you can do. Want to change the layout? Can't. Need a custom form? Workaround. Want tracking? Another plugin.",
          after:
            'A platform that lets you build what the business actually needs — not what the template allows.',
        },
        {
          before:
            "You've outgrown the setup but every change feels risky. The team patches around problems instead of fixing them.",
          after:
            "A stable foundation where changes are straightforward and the team isn't afraid to touch anything.",
        },
      ],
    },
    migrationSignals: {
      badge: "What's actually wrong",
      title: "The platform is annoying. But it's probably not the real problem.",
      description:
        'Most businesses that search for migration are frustrated with their tools. The tools deserve some of that frustration. But the enquiry problem usually lives somewhere else.',
      items: [
        {
          icon: LayoutTemplate,
          title: 'The platform limits what you can build',
          description:
            "True. Wix, Squarespace, and similar builders cap what's possible. But the bigger issue is that even within those limits, the site isn't handling enquiries properly.",
          iconType: 'primary' as const,
        },
        {
          icon: Puzzle,
          title: 'Too many tools, nothing connected',
          description:
            "Also true. But moving to one platform doesn't automatically connect anything. You need the connections designed, not just fewer logins.",
          iconType: 'secondary' as const,
        },
        {
          icon: Wrench,
          title: 'Every change is a workaround',
          description:
            "That's exhausting. But rebuilding from scratch without fixing the visitor-to-enquiry path just gives you a neater system that still doesn't convert.",
          iconType: 'accent' as const,
        },
        {
          icon: ShieldCheck,
          title: 'The team has lost confidence in the setup',
          description:
            "Understandable. Confidence returns when the foundation is stable AND the business results follow. A clean migration alone doesn't produce either.",
          iconType: 'primary' as const,
        },
      ],
    },
    comparison: {
      header: {
        title: 'Platform swap vs. proper migration',
        description:
          'The difference between changing software and changing how the business actually works online.',
      },
      items: [
        {
          type: 'before' as const,
          title: 'Platform swap',
          items: [
            'Same pages on a new CMS — content moved over without rethinking what converts',
            'Fewer tools but the same gaps in follow-up and enquiry handling',
            'Migration focused on launch day — no plan for what happens after',
            "SEO drops because redirects and structure weren't planned",
            'Six months later, the new platform feels as neglected as the old one',
          ],
        },
        {
          type: 'after' as const,
          title: 'Proper migration',
          items: [
            'Pages rebuilt around how visitors actually find and contact you',
            'CRM, forms, and follow-up connected as part of the move',
            'The team trained and the system documented for long-term ownership',
            'SEO preserved and strengthened through better page structure',
            'A foundation the business can maintain, extend, and grow on',
          ],
        },
      ],
    },
    riskAreas: {
      badge: 'What most migrations get wrong',
      title: 'Moving platforms without fixing the gaps just relocates the problem',
      description:
        'A migration done well is a chance to fix everything at once. A migration done poorly is the same mess on new software.',
      lists: [
        {
          title: 'What gets carried forward by accident',
          issues: [
            {
              title: 'The old page structure moves over unchanged',
              description:
                "Pages that weren't converting before arrive on the new platform still not converting. Different CMS, same weak pages.",
            },
            {
              title: 'Nobody designs the enquiry path',
              description:
                "The migration focuses on moving content, not on building a visitor-to-customer journey. The new site looks better but still doesn't generate leads.",
            },
            {
              title: 'Consolidation stops at the platform level',
              description:
                "Fewer tools, same gaps. CRM isn't connected. Follow-up isn't automatic. The tools are tidier but the business process is identical.",
            },
          ],
        },
        {
          title: 'What gets missed entirely',
          issues: [
            {
              title: 'No follow-up system built into the new setup',
              description:
                'Enquiries arrive on the new platform and sit in the same inbox they sat in before. No CRM, no routing, no automation.',
            },
            {
              title: 'Visibility drops during and after the move',
              description:
                'SEO rankings, tracking, and analytics break during migration and never get properly restored.',
            },
            {
              title: 'The new platform launches without a maintenance plan',
              description:
                'Day one looks great. Six months later, the same neglect that killed the old platform starts killing this one.',
            },
          ],
        },
      ],
    },
    consolidationTargets: {
      badge: 'What should actually change',
      title: 'Migration is the chance to fix everything — not just change the login screen',
      description:
        'The platform move is the easy part. The valuable part is building what should have been there all along.',
      items: [
        {
          title: 'The visitor-to-enquiry path',
          desc: 'Not just pages moved over — an actual journey from landing to contact, designed to convert the people who are already visiting.',
        },
        {
          title: 'Enquiry handling and follow-up',
          desc: "CRM connected, routing automatic, follow-up triggered — so leads don't sit in an inbox waiting for someone to notice.",
        },
        {
          title: 'Visibility and search foundations',
          desc: "SEO preserved during migration and strengthened after — so the traffic you've built doesn't disappear with the old platform.",
        },
        {
          title: 'A foundation you can actually maintain',
          desc: "Documentation, training, and clear governance — so the new platform doesn't end up in the same state as the old one.",
        },
      ],
    },
    processSection: {
      badge: 'How it works',
      title: 'Migration that fixes the gaps, not just the platform',
      description:
        'The move is planned around what the business needs to work — not just what needs to be transferred.',
      steps: [
        {
          number: '1',
          title: "Map what's broken and what's missing",
          description:
            "Not just which tools you have — where enquiries are leaking, what's not connected, and why the current setup isn't producing results.",
        },
        {
          number: '2',
          title: 'Design the new foundation',
          description:
            'Pages, forms, CRM, follow-up, and visibility planned as one connected system — not content dumped onto a new platform.',
        },
        {
          number: '3',
          title: 'Build and migrate together',
          description:
            'Content moves over while the new enquiry handling, automation, and tracking are built in. Nothing launches half-finished.',
        },
        {
          number: '4',
          title: 'Stabilise and hand over',
          description:
            'The new system is tested, documented, and the team is trained. You own it completely — no ongoing dependency on whoever built it.',
        },
      ],
    },
    proof: {
      header: {
        title: 'What a proper migration actually changed',
        description:
          'A service business moved from Wix plus six disconnected tools to a connected WordPress foundation. The platform change was the smallest part of what improved.',
      },
      cards: [
        {
          title: 'Before: lots of tools, no enquiry system',
          description:
            'Website on Wix. Forms going to email. No CRM. No follow-up. Booking through a separate tool. Marketing through another. Every lead touched four systems before anyone responded.',
          points: [
            'Average response time to enquiries was over 24 hours — because nobody knew where leads were arriving',
            'No way to see which marketing channels produced actual customers — because tracking was fragmented across tools',
            'The team spent hours weekly on manual data entry between systems — because nothing was connected',
          ],
        },
        {
          title: 'What the migration actually built',
          description:
            "WordPress with forms, CRM, booking, and follow-up connected as one system. The migration wasn't just moving content — it was building the enquiry handling that never existed.",
          points: [
            'Every form submission routes to CRM with automatic follow-up — response time dropped from days to minutes',
            'Booking, enquiries, and customer data visible in one place — the team stopped guessing and started seeing the full picture',
            'Tools reduced from seven to three with clear ownership — maintenance time dropped, team confidence went up',
          ],
          featured: true,
        },
        {
          title: 'After: a business that runs differently',
          description:
            'The new platform mattered less than what was built on it. The team owns the system, understands it, and can extend it without calling the developer for every change.',
          points: [
            'Enquiry-to-response time under 5 minutes — because automation handles the routing humans used to forget',
            'Monthly enquiry volume visible and trackable — because every touchpoint feeds into one reporting system',
            'The team makes changes independently — because the system was documented and designed for their ownership',
          ],
        },
      ],
    },
    qualification: {
      title: 'Is migration actually what you need?',
      description:
        "Sometimes the platform is the problem. Sometimes it's just the most visible symptom of a bigger gap.",
      strongFitTitle: 'Migration makes sense when',
      notDesignedTitle: 'Probably not migration if',
      strongFitItems: [
        {
          title: 'The platform genuinely limits what you can build',
          description:
            "You need forms, automations, CRM connections, or page structures that the current platform physically can't support.",
        },
        {
          title: "You're ready to fix the gaps while you move",
          description:
            'You want the migration to include enquiry handling, follow-up, and visibility — not just content transferred to a new CMS.',
        },
        {
          title: "You're consolidating tools, not just swapping them",
          description:
            'The goal is fewer systems doing more — not the same number of systems with different names.',
        },
      ],
      notDesignedItems: [
        {
          title: 'The website just needs better content and forms',
          description:
            "If the platform works fine but the pages don't convert, migration is solving the wrong problem.",
        },
        {
          title: 'You want a visual refresh, not a structural change',
          description:
            "New colours and layout don't require a platform move. That's a redesign, not a migration.",
        },
        {
          title: 'You want to move everything exactly as it is',
          description:
            "If nothing changes in the process, the results won't change either. Migration is only valuable when it's also improvement.",
        },
      ],
    },
    faqSection: {
      badge: 'FAQ',
      title: 'Questions that come up before a migration',
      description:
        "Most of these come from businesses who've been burned before — or who sense that a straight platform swap won't fix the real issue.",
      faqs: [
        {
          question: "We're on Wix/Squarespace. Is WordPress actually better?",
          answer:
            "For a brochure site, probably not worth the move. For a business that needs forms, CRM, automation, and proper enquiry handling — WordPress gives you the flexibility those platforms don't. The value isn't the CMS. It's what you can build on it.",
        },
        {
          question: "What if the real problem isn't the platform?",
          answer:
            "Then we'll tell you that during the audit. Sometimes the platform is fine and the gaps are in content, follow-up, or CRM. Migration for the sake of migration wastes money.",
        },
        {
          question: 'Will we lose our Google rankings during the move?',
          answer:
            'Not if the migration is planned properly. Redirects, URL structure, and on-page SEO are handled as part of the move. Most businesses see rankings stabilise within weeks and improve within months because the new foundation supports better content structure.',
        },
        {
          question: 'How is this different from a website redesign?',
          answer:
            "A redesign rebuilds what's on your current platform. A migration moves you to a different platform and rebuilds the structure around it. If you're staying on the same CMS, you probably need a redesign. If the CMS itself is the constraint, you need migration.",
        },
      ],
      cssPrefix: 'system-migration-faq',
    },
  },
  cta: {
    heading: {
      title: 'Want to move platforms and actually fix things this time?',
      description:
        "Tell us what's frustrating you about the current setup. We'll tell you whether migration is the answer — and what else needs to change for the move to be worth it.",
    },
    actions: [{ label: 'Get Started', href: '/contact', primary: true }],
  },
} satisfies ServicePageData;
