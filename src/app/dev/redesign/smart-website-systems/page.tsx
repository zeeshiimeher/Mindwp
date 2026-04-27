import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import {
  type SmartWebsitePrototypeData,
  SmartWebsitePrototypePage,
} from '@/components/redesign/smart-website/SmartWebsitePrototypePage';
import type { SystemLayer } from '@/components/redesign/smart-website/SystemLayerStack';
import { smartWebsiteSystemsPage } from '@/domains/services/data/smart-website-systems';
import { buildContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL, SECONDARY_CTA_LABEL } from '@/lib/cta/primaryAction';
import { resolveSEO } from '@/lib/seo/seoResolver';
import { getIsSystemEnabled } from '@/system/isSystemEnabled';

const ROUTE_PATH = '/dev/redesign/smart-website-systems';
const SOURCE_SLUG = 'redesign-smart-website-systems-prototype';

export async function generateMetadata(): Promise<Metadata> {
  return resolveSEO({ path: ROUTE_PATH, type: 'static', slug: SOURCE_SLUG });
}

function buildPrototypeData(): SmartWebsitePrototypeData {
  const source = smartWebsiteSystemsPage;
  const beforeBlock = source.sections.comparison.items.find(item => item.type === 'before');
  const afterBlock = source.sections.comparison.items.find(item => item.type === 'after');

  if (!beforeBlock || !afterBlock) {
    throw new Error('Smart Website prototype expects before/after comparison data.');
  }

  const includedItems = source.sections.included.items;
  const pickByIndex = (indexes: readonly number[]) =>
    indexes.map(i => includedItems[i]).filter((item): item is string => Boolean(item));

  const layers: SystemLayer[] = [
    {
      key: 'visibility',
      index: 'L1',
      title: 'Visibility',
      meta: 'service pages · search',
      iconKey: 'visibility',
      bullets: pickByIndex([0, 8, 9]),
    },
    {
      key: 'capture',
      index: 'L2',
      title: 'Capture',
      meta: 'forms · calls · book',
      iconKey: 'capture',
      bullets: pickByIndex([1, 5]),
    },
    {
      key: 'routing',
      index: 'L3',
      title: 'Routing',
      meta: 'right person, no inbox',
      iconKey: 'routing',
      bullets: pickByIndex([2, 10]),
    },
    {
      key: 'follow-up',
      index: 'L4',
      title: 'Follow-up',
      meta: 'auto · until handled',
      iconKey: 'follow-up',
      bullets: pickByIndex([3, 4]),
    },
    {
      key: 'proof',
      index: 'L5',
      title: 'Proof',
      meta: 'tracking · monitoring',
      iconKey: 'proof',
      bullets: pickByIndex([6, 7]),
    },
  ];

  const ctaPanelItems = [
    'Where leads stop on the page',
    'Which forms never confirm',
    'Where follow-up never starts',
    'Which channels actually pay back',
  ] as const;

  const heroMockupRows = [
    {
      name: 'Roof repair · Mark T.',
      meta: '07·12 · web form',
      status: 'good' as const,
      statusLabel: 'Assigned',
    },
    {
      name: 'Quote request · Sara P.',
      meta: '07·08 · missed call',
      status: 'warn' as const,
      statusLabel: 'Follow-up',
    },
    {
      name: 'Booking · Lina R.',
      meta: '06·54 · service page',
      status: 'good' as const,
      statusLabel: 'Confirmed',
    },
    {
      name: 'Old enquiry · Tom W.',
      meta: '— · shared inbox',
      status: 'risk' as const,
      statusLabel: 'Lost',
    },
  ] as const;

  const contactHref = buildContactHref({
    system: source.slug,
    sourceType: 'page',
    slug: SOURCE_SLUG,
  });

  return {
    hero: {
      badge: source.hero.badge,
      title: source.hero.title,
      description: source.hero.description,
      chips: source.hero.list,
      mockup: {
        title: 'Live enquiry feed',
        subtitle: 'Last 24 hours · auto-routed',
        brand: 'mindwp · operations',
        footerPrimary: 'auto-assigned · CRM logged',
        footerSecondary: 'uptime 99.98%',
      },
    },
    diagnostic: {
      eyebrow: 'Where it leaks',
      title: source.sections.value.header.title,
      description: source.sections.value.header.description,
      items: source.sections.value.items.map(item => ({
        icon: item.icon,
        title: item.title,
        description: item.description,
      })),
    },
    comparison: {
      eyebrow: 'Broken vs Fixed',
      title: source.sections.comparison.header.title,
      description: source.sections.comparison.header.description,
      beforeLabel: 'Broken',
      beforeTitle: beforeBlock.title,
      beforeItems: beforeBlock.items,
      afterLabel: 'Fixed',
      afterTitle: afterBlock.title,
      afterItems: afterBlock.items,
    },
    layerStack: {
      eyebrow: 'System layers',
      title: source.sections.included.header.title,
      description: source.sections.included.header.description,
      layers,
    },
    flow: {
      eyebrow: source.sections.process.header.badge ?? 'Operational flow',
      title: source.sections.process.header.title,
      description: source.sections.process.header.description,
      steps: source.sections.process.steps,
    },
    proof: {
      eyebrow: 'Real outcome',
      title: source.sections.proof.header.title,
      description: source.sections.proof.header.description,
      cards: source.sections.proof.cards.map((card, index) => ({
        label: ['Before', 'What changed', 'After'][index] ?? `Stage ${index + 1}`,
        title: card.title,
        description: card.description,
        points: card.points,
        featured: card.featured ?? false,
      })),
    },
    fit: {
      eyebrow: 'Fit check',
      title: source.sections.qualification.header.title,
      description: source.sections.qualification.header.description,
      goodLabel: 'Strong fit',
      goodTitle: source.sections.qualification.strongFitTitle,
      goodItems: source.sections.qualification.strongFit,
      notLabel: 'Probably not for you',
      notTitle: source.sections.qualification.notForTitle,
      notItems: source.sections.qualification.notFor,
    },
    faq: {
      eyebrow: 'FAQ',
      title: source.sections.faq.header.title,
      description: source.sections.faq.header.description,
      items: source.sections.faq.items,
    },
    cta: {
      eyebrow: 'Final step',
      title: source.cta.title,
      description: source.cta.description,
      panelTitle: 'What you walk away knowing',
      panelItems: ctaPanelItems,
    },
    primaryCtaLabel: PRIMARY_CTA_LABEL,
    primaryCtaHref: contactHref,
    secondaryCtaLabel: SECONDARY_CTA_LABEL,
    secondaryCtaHref: contactHref,
    heroMockupRows,
  };
}

export default function SmartWebsiteRedesignPrototypeRoute() {
  if (!getIsSystemEnabled()) {
    notFound();
  }

  return <SmartWebsitePrototypePage data={buildPrototypeData()} />;
}
