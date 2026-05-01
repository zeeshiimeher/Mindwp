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
  seo: buildServiceSeo({
    slug,
    title: 'WooCommerce & E-commerce Implementation | MindWP',
    description:
      "WooCommerce gets your products online. But products listed doesn't mean orders flowing. Here's what most stores miss between the catalog and the sale.",
  }),
  systems: ['smart-website-systems'],
  topics: ['website-infrastructure'],
  badge: 'E-commerce & WooCommerce',
  category: 'Implementation Services',
  hero: {
    badge: 'WooCommerce & E-commerce',
    title: "Products Are Listed. Orders Aren't Coming.",
    description:
      "Your WooCommerce store is live. Products photographed, prices set, checkout working. People browse, add things to the cart, and... leave. The store is there. The sales aren't.",
    list: ['Store live', 'Low orders', 'Abandoned carts'],
    cssPrefix: 'woocommerce-hero',
  },
  sections: {
    benefitsSection: {
      badge: 'What Actually Drives Sales',
      title: "A product catalog isn't a selling machine. What happens around it is.",
      description:
        "WooCommerce handles the store mechanics fine. Products, cart, checkout — all working. But a store that gets traffic and doesn't convert has a problem that isn't the catalog.",
      backgroundColor: 'bg-base' as const,
      cssPrefix: 'woocommerce-benefits',
      items: [
        {
          icon: ShoppingCart,
          title: "People browse but don't buy",
          description:
            'Products are there. Navigation works. But nothing pushes the visitor from "looking" to "buying." No urgency, no social proof, no reason to act now.',
          iconType: 'primary' as const,
        },
        {
          icon: Layers,
          title: 'Abandoned carts outnumber completed orders',
          description:
            'Someone adds to cart and leaves. No reminder email. No follow-up. That sale disappears with no way to recover it.',
          iconType: 'accent' as const,
        },
        {
          icon: Shield,
          title: "Repeat customers don't come back automatically",
          description:
            'A customer buys once. No follow-up, no thank-you, no reason to return. One-time buyers stay one-time.',
          iconType: 'secondary' as const,
        },
      ],
    },
    bridge: {
      title: 'A store works best when the site around it works too',
      description:
        'WooCommerce handles the cart and checkout. But the buying decision happens before that — on the product pages, through the navigation, in the trust signals. When the whole site is connected — store, CRM, follow-up, tracking — browsing turns into buying.',
    },
    whySection: {
      badge: 'The real question',
      title: "Is the store the problem — or is it what's missing around it?",
      description:
        'WooCommerce is a solid e-commerce foundation. But a store without follow-up, recovery, and customer handling is just a catalog with a checkout button.',
      columns: 4 as const,
      backgroundColor: 'bg-alt' as const,
      cssPrefix: 'woocommerce-why',
      items: [
        {
          title: 'Cart recovery is missing',
          description:
            'Someone adds products and leaves. No email, no reminder. That revenue is gone with no attempt to bring it back.',
        },
        {
          title: 'No post-purchase follow-up',
          description:
            'Order ships. No check-in, no review request, no cross-sell. Every customer is a one-time buyer by default.',
        },
        {
          title: "You can't see what's working",
          description:
            "Traffic comes from somewhere. You don't know which channels produce actual orders.",
        },
        {
          title: 'The store runs in isolation',
          description:
            'No CRM, no customer data feeding back into marketing. Every sale is a standalone event.',
        },
      ],
    },
    featureSection: {
      badge: 'What The Build Covers',
      title: "What a WooCommerce store looks like when it's connected to the business",
      columns: 3 as const,
      backgroundColor: 'bg-base' as const,
      cssPrefix: 'woocommerce-features',
      categories: [
        {
          title: 'Store & Product Setup',
          icon: ShoppingCart,
          features: [
            'Products organised by how people shop',
            'Mobile-friendly browsing and checkout',
            'Clear product pages with real information',
            'Category structure that makes sense',
            'Search and filter that work',
            'Trust signals visible throughout',
          ],
        },
        {
          title: 'Checkout & Payment',
          icon: CreditCard,
          features: [
            'Stripe, PayPal, and other gateways',
            'Simplified checkout to reduce drop-off',
            'Guest checkout available',
            'SSL and security handled',
            'Tax and shipping calculated automatically',
            'Discount codes when you need them',
          ],
        },
        {
          title: 'Order Handling & Fulfilment',
          icon: Truck,
          features: [
            'Shipping zones and rates configured',
            'Order notifications to your team',
            'Tracking information sent to customers',
            'Local pickup where relevant',
            'Returns process defined',
            'Fulfilment workflow that matches how you work',
          ],
        },
        {
          title: 'Customer Follow-Up',
          icon: Package,
          features: [
            'Abandoned cart recovery emails',
            'Post-purchase thank-you and review requests',
            'Cross-sell and recommendation logic',
            'Customer data feeding into your CRM',
            'Repeat buyer encouragement',
            'Segmented email follow-up',
          ],
        },
        {
          title: 'Visibility & Tracking',
          icon: Search,
          features: [
            'Product pages written for search',
            'Tracking shows where buyers come from',
            'Conversion tracking on orders',
            'Google Shopping connection',
            'Social media integration',
            "Analytics that show what's actually selling",
          ],
        },
        {
          title: 'Reporting & Growth',
          icon: BarChart3,
          features: [
            'Sales dashboards you can act on',
            'Customer behaviour insights',
            'Top products and revenue trends',
            'Inventory alerts',
            'Channel performance comparison',
            'Data you own and control',
          ],
        },
      ],
    },
  },
  cta: {
    heading: {
      title: "Store live but sales aren't happening?",
      description:
        "Tell us what's not converting. We'll show you whether it's the store, the checkout, or what's missing around it.",
    },
    actions: [{ label: 'Get Started', href: '/contact', primary: true }],
  },
} satisfies ServicePageData;
