import {
  BarChart3,
  CreditCard,
  Layers,
  Package,
  Search,
  Shield,
  ShoppingCart,
  Truck,
} from 'lucide-react';


import { buildServiceSeo } from '../seo';
import type { ServicePageData } from '../types';

const slug = 'ecommerce';

export const woocommercePage = {
  slug,
  systems: ['smart-website-systems'],
  topics: ['website-infrastructure'],
  keywords: [
    'ecommerce implementation',
    'web shop implementation',
    'ecommerce website',
    'online store',
    'woocommerce',
    'payment gateway',
  ],
  badge: 'E-commerce Implementation',
  category: 'Implementation Services',
  seo: buildServiceSeo({
    slug,
    title: 'E-commerce Implementation | WordPress & WooCommerce',
    description:
      'Structured e-commerce and web shop implementation on WordPress, using WooCommerce where appropriate for catalog logic, checkout flow, fulfilment, and reporting.',
    schemaName: 'E-commerce implementation on WordPress',
    schemaDescription:
      'E-commerce system built on WordPress with WooCommerce for product catalog management, checkout optimization, order fulfilment, and sales reporting.',
  }),
  hero: {
    badge: 'E-commerce Infrastructure on WordPress',
      title: 'WooCommerce Stores Built Around Real Selling Workflows',
    description:
      'We implement e-commerce systems on WordPress with WooCommerce where it fits. Catalog logic, checkout flow, fulfilment rules, and reporting are set up around your actual operating model — not just assembled to get a store online.',
    list: [
        'Structured product logic',
        'Defined checkout flow',
        'Fulfilment-ready setup',
    ],
    cssPrefix: 'woocommerce-hero',
  },
  sections: {
    benefitsSection: {
      badge: 'Infrastructure Approach',
      title: 'The store should match how you sell and fulfil — not the other way around',
      description:
        'This is not plugin-first delivery. Catalog management, checkout, fulfilment, and reporting are implemented as connected commerce layers rather than disconnected add-ons.',
      backgroundColor: 'bg-base' as const,
      cssPrefix: 'woocommerce-benefits',
      items: [
        {
          icon: ShoppingCart,
          title: 'Organised Store Logic',
          description:
            'Catalog, categories, product rules, and checkout are set up intentionally so the store reflects how the business actually operates.',
          iconType: 'primary' as const,
        },
        {
          icon: Layers,
          title: 'Operational Fit',
          description:
            'Shipping rules, tax logic, payment flows, and fulfilment steps are aligned to real workflows — reducing friction and internal confusion.',
          iconType: 'accent' as const,
        },
        {
          icon: Shield,
          title: 'Governed and Maintainable',
          description:
            'Security, updates, backups, and performance hygiene are part of the build — so the store stays stable over time.',
          iconType: 'secondary' as const,
        },
      ],
    },
    bridge: {
      title: 'Commerce within the Smart Website framework',
      description:
        'Commerce implementations sit within the wider Smart Website framework. That means catalog logic, checkout, and fulfilment stay connected to enquiry handling, CRM routing, and visibility foundations — instead of running in isolation.',
    },
    whySection: {
      badge: 'Infrastructure Principles',
      title: 'Why WordPress commerce fits a systems-led approach',
      description:
        'WordPress with WooCommerce supports ownership, adaptability, and integration. It works well for businesses that treat the store as part of their operating system rather than just a sales page.',
      columns: 4 as const,
      backgroundColor: 'bg-alt' as const,
      cssPrefix: 'woocommerce-why',
      items: [
        {
          title: 'Mature and Extensible',
          description:
            'Widely supported and deeply extendable, making it suitable for long-term implementations.',
        },
        {
          title: 'You Own Your Data',
          description:
            'Store data, customer records, and integration logic stay under your control.',
        },
        {
          title: 'Expandable Without Replacing',
          description: 'New capabilities can be added over time without rebuilding from scratch.',
        },
        {
          title: 'Shaped Around Your Model',
          description:
            'The store can be configured around your industry, fulfilment approach, and internal workflow.',
        },
      ],
    },
    featureSection: {
      badge: 'Implementation Scope',
      title: 'Structural Components of Commerce Infrastructure',
      columns: 3 as const,
      backgroundColor: 'bg-base' as const,
      cssPrefix: 'woocommerce-features',
      categories: [
        {
          title: 'Store Architecture & Structure',
          icon: ShoppingCart,
          features: [
            'Custom commerce build on WordPress',
            'Mobile-responsive design',
            'Product catalog design',
            'Category & navigation structure',
            'Shopping cart optimization',
            'Checkout page design',
            'Custom product pages',
            'Brand consistency',
          ],
        },
        {
          title: 'Transaction & Checkout Logic',
          icon: CreditCard,
          features: [
            'Multiple payment gateways (Stripe, PayPal, etc.)',
            'One-page checkout optimization',
            'Guest checkout option',
            'Saved payment methods',
            'SSL certificate setup',
            'PCI compliance',
            'Tax calculation automation',
            'Coupon & discount codes',
          ],
        },
        {
          title: 'Fulfilment & Logistics Logic',
          icon: Truck,
          features: [
            'Shipping zone configuration',
            'Real-time shipping rates',
            'Multiple shipping methods',
            'Free shipping rules',
            'Local pickup options',
            'Order tracking integration',
            'Printable shipping labels',
            'Fulfillment automation',
          ],
        },
        {
          title: 'Catalog Governance',
          icon: Package,
          features: [
            'Unlimited product uploads',
            'Product variations (size, color, etc.)',
            'Inventory management',
            'Stock notifications',
            'Bulk product import/export',
            'Product reviews & ratings',
            'Image galleries',
            'Digital download products',
          ],
        },
        {
          title: 'Visibility & Engagement Integration',
          icon: Search,
          features: [
            'Product SEO optimization',
            'Email marketing integration',
            'Abandoned cart recovery',
            'Cross-sell & upsell features',
            'Product recommendations',
            'Discount & promotion tools',
            'Google Shopping integration',
            'Social media integration',
          ],
        },
        {
          title: 'Commerce Reporting & Oversight',
          icon: BarChart3,
          features: [
            'Sales reports & reporting',
            'Customer behavior tracking',
            'Conversion rate monitoring',
            'Top products analysis',
            'Revenue forecasting',
            'Inventory reports',
            'Tax reports',
            'Custom reporting dashboard',
          ],
        },
      ],
    },
  },
  cta: {
    title: 'Planning to sell online through WordPress?',
    description:
      'Tell us what you\'re selling, how orders are handled, and what integrations matter. We\'ll outline what the e-commerce build actually needs.',
  },
} satisfies ServicePageData;
