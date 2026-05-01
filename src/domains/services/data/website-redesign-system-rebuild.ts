import {
  GitBranch,
  Layers,
  LayoutTemplate,
  MessageSquare,
  RefreshCcw,
  Search,
  Settings,
  Waypoints,
  Wrench,
} from 'lucide-react';

import { buildServiceSeo } from '../seo';
import type { ServicePageData } from '../types';

const slug = 'website-redesign-system-rebuild';

export const websiteRedesignSystemRebuildPage = {
  slug,
  seo: buildServiceSeo({
    slug,
    title: 'Website Redesign & Rebuild for Service Businesses | MindWP',
    description:
      'Thinking about redesigning your website? Before you invest, make sure the problem is actually the design. Most service business websites fail at handling enquiries, not at looking good.',
  }),
  systems: ['smart-website-systems'],
  topics: ['website-infrastructure', 'service-page-architecture'],
  badge: 'Website Redesign',
  category: 'Structural Rebuild Services',
  hero: {
    badge: 'Website Redesign',
    title: "A New Look Won't Fix a Quiet Phone.",
    description:
      "You're thinking about a redesign because the site feels outdated, or it doesn't represent the business anymore. Fair enough. But the visitors you're losing aren't leaving because of the colours. They're leaving because they can't find what they need, or nobody follows up.",
    list: ['Dated design', 'Low enquiries', 'No follow-up'],
    cssPrefix: 'website-redesign-rebuild-hero',
    backgroundColor: 'bg-gradient-surface-muted',
  },
  sections: {
    foundation: {
      badge: 'Where the real problem is',
      title: "The website looks outdated. But the design isn't what's costing you work.",
      description:
        "Most redesign requests come from a feeling that the site is 'letting the business down.' That's usually true — but the problem is what happens after someone visits, not how the site looks.",
      currentStateLabel: "What you're seeing",
      structuredStateLabel: "What's actually going wrong",
      painPoints: [
        {
          before:
            "The homepage looks tired and the content is stale. You assume that's why enquiries are low.",
          after:
            "But visitors who do arrive can't find the service they need. Everything is lumped together. They leave because the path is unclear, not because the font is wrong.",
        },
        {
          before:
            'Competitors have shinier sites and seem to get more work. A redesign feels like the obvious next step.',
          after:
            'But those competitors might just be handling enquiries faster. Their form goes to a CRM, yours goes to an inbox nobody checks.',
        },
        {
          before:
            'The site was built years ago and has been patched repeatedly. A fresh start feels overdue.',
          after:
            'A fresh design over the same broken structure will feel new for a month, then the same problems return. What needs changing is what the site does, not how it looks.',
        },
      ],
    },
    structuralSignals: {
      badge: "Signs the problem isn't the design",
      title: 'These patterns point to something deeper than a visual refresh',
      description:
        "If you recognise these, a redesign alone won't solve them. The issue is what the site does with visitors — not how it presents itself.",
      items: [
        {
          icon: LayoutTemplate,
          title: 'Traffic is decent but enquiries are low',
          description:
            "People are finding you. They're just not reaching out. The site doesn't make the next step obvious enough.",
        },
        {
          icon: Layers,
          title: 'Services are hard to find individually',
          description:
            "Everything is on one page or buried in dropdowns. Someone looking for one thing can't find it without scrolling through everything else.",
        },
        {
          icon: Waypoints,
          title: 'Enquiries go to a generic inbox',
          description:
            "Forms land in a shared email nobody owns. Leads wait hours or days. By then they've already called someone else.",
        },
        {
          icon: Settings,
          title: "There's no follow-up after someone reaches out",
          description:
            'No confirmation, no reminder, no next step. Just silence until someone on the team remembers to check.',
        },
      ],
    },
    comparison: {
      header: {
        title: 'Visual redesign vs fixing what actually matters',
        description:
          "Most redesigns focus on how the site looks. Here's what that costs compared to fixing what the site does.",
      },
      items: [
        {
          type: 'before' as const,
          title: 'Visual redesign only',
          items: [
            'New colours and layout over the same broken structure. Looks fresh for a month, then the same problems return.',
            "Services still bundled together. Visitors looking for one thing still can't find it.",
            'Same generic contact form going to the same inbox nobody checks regularly.',
            'No CRM, no tracking, no follow-up. Every lead still depends on someone remembering.',
            "Same maintenance headaches within months because the foundation didn't change.",
          ],
        },
        {
          type: 'after' as const,
          title: 'Redesign + rebuild around how the business works',
          items: [
            'Services listed individually. Visitors find what they came for and act.',
            'Enquiries routed to the right person with context. Response in minutes, not days.',
            'Follow-up runs automatically. Confirmations, reminders, and check-ins happen without anyone chasing.',
            'CRM and tracking connected from day one. You can see where work comes from.',
            'Foundation built for what comes next — SEO, reviews, automation all connect cleanly.',
          ],
        },
      ],
    },
    rebuildScenarios: {
      badge: 'What really needs to change',
      title: "A redesign handles the surface. Here's what actually moves the needle.",
      description:
        'Each of these situations looks like a design problem from the outside. Underneath, the fix is always about what happens between the visit and the enquiry.',
      scenarioLabel: 'What it looks like',
      solutionLabel: 'What actually needs to change',
      items: [
        {
          icon: RefreshCcw,
          title: 'The site feels outdated and the phone is quiet',
          scenario:
            "The business has grown but the website still reflects the old version. New services aren't listed. Content is stale.",
          solution:
            'List each service individually. Write them the way people search. Add a clear next step to every page. Connect the form to your CRM.',
          result:
            'Visitors find what they came for and reach out. Nothing sits unread in an inbox.',
        },
        {
          icon: Wrench,
          title: 'Competitors seem to get more work from their websites',
          scenario:
            'Their sites look newer, more polished. It feels like the design is the difference.',
          solution:
            'Usually the difference is handling speed. Their forms route to a real person. Confirmations go out instantly. Follow-up runs without anyone remembering.',
          result: 'Matching their handling speed matters more than matching their homepage.',
        },
        {
          icon: GitBranch,
          title: 'Enquiries come through but nothing happens quickly enough',
          scenario:
            'Leads arrive via form, call, or message. Someone replies eventually. Some get missed entirely.',
          solution:
            "Route every enquiry to the right person with context. Automate the first response. Build follow-up into the site, not into someone's memory.",
          result: 'The team handles real work while the site handles the chasing.',
        },
      ],
    },
    processSection: {
      badge: 'How we approach this',
      title: "We don't start with the design. We start with the problem.",
      description:
        "Before any redesign work, we figure out whether the issue is actually the design or whether the site just isn't connected to anything useful.",
      steps: [
        {
          number: '1',
          title: "Find what's actually not working",
          description:
            'Is it the design? The structure? The enquiry handling? We look at what happens when someone visits and where things fall apart.',
        },
        {
          number: '2',
          title: 'Plan around the real problem',
          description:
            'Which services need their own page, how enquiries should be handled, and what needs connecting. The design follows the solution, not the other way around.',
        },
        {
          number: '3',
          title: 'Build and connect',
          description:
            'The site goes live with services clearly listed, forms routed properly, CRM connected, and follow-up running automatically.',
        },
        {
          number: '4',
          title: 'Handover',
          description:
            'Your team gets documentation and a walkthrough. They manage content updates and check enquiries from there.',
        },
      ],
    },
    implementationLayers: {
      badge: 'What actually gets fixed',
      title: 'Design is one layer. These are the ones that drive results.',
      description:
        'A redesign touches the surface. These are the layers underneath that determine whether the site brings in work.',
      items: [
        {
          icon: Search,
          title: 'Service clarity',
          description:
            'Each service listed individually, written the way people search. Visitors find what they need and act — instead of scrolling through everything.',
        },
        {
          icon: MessageSquare,
          title: 'Enquiry handling',
          description:
            'Forms capture the right details and route them to the right person. No more generic inboxes. No more waiting.',
        },
        {
          icon: Settings,
          title: 'Follow-up and routing',
          description:
            'Confirmations go out immediately. Follow-up runs on its own. Your team does the work while the site handles the chasing.',
        },
        {
          icon: Layers,
          title: 'Connected foundations',
          description:
            'CRM, booking, review requests, local SEO — built into the site from day one instead of bolted on later.',
        },
      ],
    },
    proof: {
      header: {
        title: 'What happened when we fixed the right problem',
        description:
          "An electrical contractor wanted a redesign because the site looked dated. Enquiries were low. When we looked closer, the design wasn't the issue at all.",
      },
      cards: [
        {
          title: "Before: the site looked old, but that wasn't the problem",
          description:
            "Professional business, steady referrals, decent Google traffic. But the website wasn't converting any of it. The owner assumed it needed a facelift.",
          points: [
            'Every service on one page. Someone needing a specific thing had to scroll through everything.',
            'Contact form went to a Gmail account. The team checked it when they remembered.',
            'No tracking, no CRM, no automated follow-up. Leads went cold in the gap between enquiry and response.',
          ],
        },
        {
          title: 'What we actually fixed: enquiry handling, not colours',
          description:
            'Yes, the design got updated. But that was the smallest change. Services split out. Forms connected to CRM. Follow-up automated.',
          points: [
            'Each service got its own page. Visitors landed on what they needed and acted.',
            'Enquiries went to the CRM with name, service, and number. The right person picked it up in minutes.',
            'Confirmation went out immediately. Follow-up ran without the team doing anything.',
          ],
          featured: true,
        },
        {
          title: 'After: same visitors, completely different outcome',
          description:
            'The redesign looked good. But the results came from handling speed and service clarity — not from the new colours.',
          points: [
            'Enquiries tripled from the same traffic. People could finally find the service they needed.',
            "Response time went from days to minutes. The CRM did what the inbox couldn't.",
            'The business could see which channels brought real enquiries for the first time. Marketing spend stopped being a guess.',
          ],
        },
      ],
    },
    qualification: {
      title: 'Is a redesign what you actually need?',
      description: "Sometimes yes. But often the problem isn't the design. Here's how to tell.",
      strongFitTitle: 'Redesign + rebuild makes sense if',
      notDesignedTitle: "A redesign alone won't help if",
      strongFitItems: [
        {
          title: "The site doesn't represent what you do anymore",
          description:
            'Services have changed, the business has grown, and the website still shows the old version. That needs fixing — but how it looks is the smaller half.',
        },
        {
          title: "Traffic is there but enquiries aren't",
          description:
            "People find the site. They browse. They leave. The problem isn't visibility — it's that nothing on the site gives them a reason to act.",
        },
        {
          title: 'You want everything connected from the start',
          description:
            'CRM, booking, follow-up, tracking — you want it wired in from day one instead of bolted on after the redesign.',
        },
      ],
      notDesignedItems: [
        {
          title: 'The site converts well — it just looks dated',
          description:
            'If enquiries are strong and nothing is slipping, a visual refresh without restructuring might be enough.',
        },
        {
          title: 'The problem is one page, not the whole site',
          description:
            'If a single landing page or service page is underperforming, a targeted fix is faster and cheaper.',
        },
        {
          title: "Nobody's finding the site at all",
          description:
            "If visibility is the problem, redesigning a site nobody visits won't help. Visibility work comes first.",
        },
      ],
    },
    faqSection: {
      badge: 'FAQ',
      title: 'Questions about website redesign',
      description: "What business owners ask when they're weighing up a redesign.",
      faqs: [
        {
          question: 'Do we always need a full rebuild?',
          answer:
            "No. Sometimes what you have is structurally sound and just needs connecting to CRM, follow-up, and proper routing. We'll tell you which.",
        },
        {
          question: 'How is this different from just getting a new design?',
          answer:
            'A new design changes how the site looks. This changes what it does. Services listed properly, enquiries handled, follow-up automated. The design is one part of it.',
        },
        {
          question: 'Will we keep our search rankings?',
          answer:
            "We preserve and improve what's working. Redirects, content migration, and SEO structure are handled as part of the project.",
        },
        {
          question: 'How long does it take?',
          answer:
            "Depends on scope. Straightforward rebuilds take a few weeks. Larger projects with CRM and automation connections take longer. You'll know the timeline before we start.",
        },
      ],
      cssPrefix: 'website-redesign-rebuild-faq',
    },
  },
  cta: {
    heading: {
      title: "Show us what's not working",
      description:
        "Drop your URL and tell us what you think the problem is. We'll come back with what's actually costing you enquiries.",
    },
    actions: [{ label: 'Get Started', href: '/contact', primary: true }],
  },
} satisfies ServicePageData;
