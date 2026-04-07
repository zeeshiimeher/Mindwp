import { Code, FileText, Globe, Layers, LineChart, Link2, Settings, Workflow } from 'lucide-react';

import type { ServicePageData } from '../types';

export const localSeoAuthorityPage = {
  slug: 'local-seo-authority',
  systems: ['local-seo-authority', 'smart-website-systems'],
  topics: ['local-seo', 'local-visibility', 'google-business-profile'],
  keywords: [
    'local seo for service businesses',
    'local seo system for contractors',
    'google business profile optimization service',
    'local visibility system',
    'seo for home service companies',
  ],
  badge: 'Local Authority & SEO Systems',
  category: 'Visibility Systems',
  seo: {
    title: 'Local Authority & SEO Systems | Visibility and local SEO for service businesses',
    description:
      'Ongoing local SEO and visibility work for service businesses. Built on clear website foundations, consistent local presence, and steady refinement over time.',
    canonical: '/services/local-seo-authority',
    schema: {
      service: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Local Authority & SEO Systems for service businesses',
        description:
          'Ongoing visibility work for service businesses, covering website foundations, local presence, and disciplined refinement over time.',

        provider: {
          '@type': 'Organization',
          name: 'MindWP',
        },
        areaServed: 'UK',
        url: '/services/local-seo-authority',
      },
    },
  },
  hero: {
    badge: 'Local Authority & SEO Systems',
    title: 'Local SEO that starts with your website, not around it',
    description:
      'Most SEO work jumps straight to tactics. We start with the website, local presence, and enquiry path so visibility grows on a structure that already makes sense.',
    primaryAction: {
      label: 'Understand What Builds Local Authority',
      href: '/contact?system=local-seo-authority&source=service/local-seo-authority',
    },
    cssPrefix: 'website-seo-hero',
    backgroundColor: 'bg-gradient-surface-muted',
    list: [
      'Website reviewed before optimisation begins',
      'Local presence maintained consistently over time',
      'Visibility tied to real services and real enquiry paths',
    ],
  },
  sections: {
    misconceptions: {
      badge: 'Why SEO often disappoints',
      title: 'Three common SEO assumptions that usually hide a structure problem',
      description:
        'This work usually starts by separating the visible request from the real issue underneath it. In many cases, the first fix is not more activity. It is better structure.',
      currentStateLabel: 'Common assumption',
      structuredStateLabel: 'What usually needs attention first',
      painPoints: [
        {
          before: '“We just need more traffic.”',
          after:
            'Traffic helps only when the website already has clear services, clear pages, and clear next steps for enquiries.',
        },
        {
          before: '“SEO should work even if the website is unclear.”',
          after:
            'If service structure is weak, SEO often amplifies confusion rather than improving enquiry quality.',
        },
        {
          before: '“We want rankings quickly.”',
          after:
            'The better path is steady structural refinement: technical clarity, local consistency, and useful service-page coverage over time.',
        },
      ],
    },
    why: {
      badge: 'How We Approach SEO',
      title: 'Visibility is maintained, not installed',
      description:
        'We treat local SEO as ongoing care for your website and local presence — not a one-off project. The goal is to keep your services easy to find, your local details accurate, and your technical foundations in good shape as things change.',
      tagline: 'The website comes first',
      narrativeTitle: 'Why the website has to make sense before SEO can work',
      narrativeParagraphs: [
        'If your service pages are vague, your business details are inconsistent across the web, or your enquiry paths are confusing, more optimisation will not help. It just draws more attention to a site that is not ready for it.',
        'That is why we start with the website. We make sure services are clearly presented, the technical basics are solid, and your local presence tells a consistent story. Then we refine and maintain that over time.',
      ],
      features: [
        {
          icon: Settings,
          title: 'Website foundations and technical health',
          description:
            'We review how the site is organised, whether it works well on mobile, how content is laid out, and whether the technical basics are in order.',
        },
        {
          icon: Globe,
          title: 'Local presence and accuracy',
          description:
            'We keep your business information, service details, and local signals consistent across the places that matter — Google, directories, and your own site.',
        },
        {
          icon: Workflow,
          title: 'Regular review and improvement',
          description:
            'We work in a steady rhythm so changes are reviewed, documented, and improved over time rather than forgotten after the first sprint.',
        },
      ],
    },
    integrations: {
      badge: 'Where SEO Fits In',
      title: 'Local SEO works as one layer inside a wider business system',
      description:
        'SEO brings people to the door. But it works far better when the website explains your services clearly, enquiry handling is reliable, and your local presence is accurate. These layers support each other.',
      cards: [
        {
          title: 'Smart Website foundation',
          description:
            'Your service pages, location relevance, and internal page organisation need to be in good shape before SEO work can deliver consistent results.',
          points: [
            'Services explained clearly and organised well',
            'Enquiry paths that lead to the right next step',
            'Technical foundations already solid',
          ],
          featured: true,
        },
        {
          title: 'Local presence layer',
          description:
            'Google Business Profile, directory listings, reviews, and location details all contribute to local visibility — but only when they are kept accurate and maintained regularly.',
          points: [
            'Google Business Profile kept up to date',
            'Directory and citation accuracy',
            'Service and location details aligned',
          ],
        },
        {
          title: 'Enquiry and response layer',
          description:
            'Visibility matters most when the business can respond well. Clear forms, reliable routing, and consistent follow-up turn visibility into real conversations.',
          points: [
            'Forms and calls reach the right person',
            'Follow-up happens reliably',
            'Visibility leads to real operational outcomes',
          ],
        },
      ],
    },
    processSection: {
      badge: 'How It Works',
      title: 'How ongoing visibility work is managed',
      description:
        'The work follows a repeating cycle. We check the foundations, make targeted improvements, maintain local consistency, and adjust as the business changes.',
      steps: [
        {
          number: '1',
          title: 'Review the foundations',
          description:
            'We assess your website, technical setup, and existing local signals to understand what is working and where the gaps are.',
        },
        {
          number: '2',
          title: 'Align services and local presence',
          description:
            'We make sure your pages, metadata, internal links, and local details reflect your actual services and operating areas.',
        },
        {
          number: '3',
          title: 'Maintain and strengthen',
          description:
            'We keep on-site content accurate, monitor your local presence, and address things like reviews, citations, and profile details on an ongoing basis.',
        },
        {
          number: '4',
          title: 'Adjust as things change',
          description:
            'When services change, locations shift, or search conditions move, we update and refine the visibility layer so it stays aligned.',
        },
      ],
    },
    scopeSection: {
      badge: 'What Is Covered',
      title: 'What ongoing visibility work typically includes',
      description:
        'The exact scope depends on the condition of your website and the complexity of your business, but it usually spans these areas.',
      services: [
        {
          icon: Code,
          title: 'Technical Foundations',
          items: [
            'Site organisation and crawlability',
            'Mobile performance and accessibility',
            'Schema markup and structured data',
            'Sitemap, robots, and indexing setup',
            'Security and connection reliability',
          ],
        },
        {
          icon: FileText,
          title: 'On-Page Content',
          items: [
            'Service page clarity and relevance',
            'Page titles and descriptions',
            'Heading hierarchy and readability',
            'Internal linking between related pages',
            'Image optimisation and alt text',
          ],
        },
        {
          icon: Link2,
          title: 'Local Presence',
          items: [
            'Google Business Profile management',
            'Citation and directory accuracy',
            'Review support and reputation care',
            'Local relevance signals',
            'Industry and community mentions',
          ],
        },
        {
          icon: Layers,
          title: 'Content Planning',
          items: [
            'Service and location page development',
            'FAQ and supporting content',
            'Topic planning tied to real services',
            'Content updates and freshness',
          ],
        },
        {
          icon: LineChart,
          title: 'Reporting and Awareness',
          items: [
            'Search Console monitoring and reporting',
            'Visibility trend tracking',
            'Competitor and market awareness',
            'Clear, plain-language updates',
          ],
        },
        {
          icon: Settings,
          title: 'Ongoing Refinement',
          items: [
            'Regular content and technical reviews',
            'Adaptation when search requirements change',
            'Updates when services or priorities shift',
            'Incremental improvements over time',
          ],
        },
      ],
    },
    qualification: {
      title: 'Who this works well for — and who it does not',
      description:
        'This service suits businesses that already have real services, understand that visibility takes time, and are willing to get the foundations right.',
      strongFitTitle: 'Strong fit',
      strongFitItems: [
        {
          title: 'Your website already has clear services',
          description:
            'You have a website with defined services, or you are prepared to sort that out before expecting stronger search performance.',
        },
        {
          title: 'You value steady, lasting improvement',
          description:
            'You are looking for something that compounds over time, not a quick spike followed by a decline.',
        },
        {
          title: 'Local accuracy matters to your business',
          description:
            'You want your website, Google profile, and directory listings to tell the same story — and stay that way.',
        },
        {
          title: 'You are comfortable with a long-term approach',
          description:
            'You understand that local SEO is maintained through consistency and care, not through a single project.',
        },
      ],
      notDesignedTitle: 'Not designed for',
      notDesignedItems: [
        {
          title: 'Businesses expecting specific ranking promises',
          description:
            'If the goal is a specific ranking position by a certain date, this is not the right approach.',
        },
        {
          title: 'Short-term traffic needs',
          description:
            'If you need a quick volume increase without laying down foundations, paid advertising is better suited.',
        },
        {
          title: 'Websites with fundamental problems',
          description:
            'If the website itself is unclear and there is no willingness to address that first, ongoing SEO work will underperform.',
        },
        {
          title: 'One-off checklist expectations',
          description:
            'If you want a single audit and a task list with no ongoing involvement, this is not the service being described here.',
        },
      ],
    },
    faqSection: {
      badge: 'Common Questions',
      title: 'Frequently Asked Questions',
      description:
        'Answers to common questions about how we handle local SEO and ongoing visibility work.',
      cssPrefix: 'seo-growth-faq',
      faqs: [
        {
          question: 'How is ongoing SEO different from a one-off SEO project?',
          answer:
            'A one-off project usually means running through a checklist and handing over a report. Ongoing SEO means we continuously look after your website and local presence — adapting to search changes, competitor activity, and shifts in your own business.',
        },
        {
          question: 'Do you guarantee ranking improvements?',
          answer:
            "No. Rankings depend on many factors outside anyone's control. What we focus on is making sure your website and local presence are consistently clear, technically sound, and well maintained — which gives search engines the best reason to show your business.",
        },
        {
          question: 'How long does it take to see results?',
          answer:
            'It depends on your starting point, industry, and competition. Some technical improvements show results within weeks. Broader ranking improvements usually develop over three to six months of consistent work.',
        },
        {
          question: 'What if I already have an SEO agency?',
          answer:
            'We can work alongside an existing agency or take over. Because our focus is on website foundations and local consistency rather than campaign tactics, the two often complement each other well.',
        },
        {
          question: 'Do you handle Google Ads or paid search?',
          answer:
            'No. We focus on organic search and local visibility. Paid search is a separate discipline and is not part of this service.',
        },
        {
          question: 'What industries do you work with?',
          answer:
            'Primarily established service businesses — especially in home services, beauty, automotive, and professional services. The approach works across industries because it is built around your actual services and operating area.',
        },
        {
          question: 'How is pricing determined?',
          answer:
            'Pricing is scoped based on the current condition of your website, the breadth of your services and locations, and how much ongoing refinement is needed. We define scope clearly before starting rather than offering generic packages.',
        },
        {
          question: 'What happens if Google changes their algorithm?',
          answer:
            'Algorithm changes are normal. Because the work is built around clear services, good technical foundations, and honest local signals, the site is more resilient to ranking shifts than one relying on short-term tactics.',
        },
        {
          question: 'Do you offer SEO training for our team?',
          answer:
            'Yes. We can include training so your team understands the key decisions and can maintain day-to-day consistency as the business evolves.',
        },
        {
          question: 'How do you measure progress?',
          answer:
            'We track practical indicators: whether the right pages are being found, whether local presence is consistent, whether technical health is improving, and whether enquiry patterns reflect the visibility work being done.',
        },
        {
          question: 'What if our website needs rebuilding first?',
          answer:
            'If the website has fundamental problems, we will say so. Sometimes the right first step is fixing the website before layering SEO on top. We can help with that directly or advise your team on what to prioritise.',
        },
      ],
    },
  },
  cta: {
    title: 'Discuss your local visibility',
    description:
      'Tell us which services and locations matter most. We will show you what is weakening visibility and what needs fixing first.',
    buttonText: 'Strengthen Your Local Authority',
    buttonHref: '/contact?system=local-seo-authority&source=service/local-seo-authority',
  },
} satisfies ServicePageData;
