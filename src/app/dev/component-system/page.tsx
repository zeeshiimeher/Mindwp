import { notFound } from 'next/navigation';

import {
  AccordionFAQSection,
  AuthoritySignalMapSection,
  BeforeAfterSection,
  CriteriaComparisonSection,
  GridCardsSection,
  HeroSplitSection,
  ImageStorySection,
  LayerStackSection,
  PrimaryCTASection,
  ProcessStepsSection,
  ProofStorySection,
  QualificationSection,
  RelatedContentSection,
  ScopeSection,
  type SectionIconKey,
  ServiceBridgeSection,
} from '@/components/sections';
import { localSeoAuthorityPage } from '@/domains/services/data/local-seo-authority';
import { smartWebsiteSystemsPage } from '@/domains/services/data/smart-website-systems';
import { resolveSEO } from '@/lib/seo/seoResolver';
import { getIsSystemEnabled } from '@/system/isSystemEnabled';

export async function generateMetadata() {
  return resolveSEO({ path: '/dev/component-system', type: 'static', slug: 'component-system' });
}

const LOCAL_MISCONCEPTION_ICON_KEYS: readonly SectionIconKey[] = ['alert', 'eye', 'clock'];
const LAYER_ICON_KEYS: readonly SectionIconKey[] = ['target', 'search', 'route', 'repeat'];
const PROOF_ICON_KEYS: readonly SectionIconKey[] = ['minus', 'sparkles', 'check'];
const SCOPE_ICON_KEYS: readonly SectionIconKey[] = [
  'database',
  'clipboard',
  'shield',
  'route',
  'line-chart',
  'workflow',
];

function label(component: string, variant: string) {
  return `[${component} — ${variant}]`;
}

function requireDescription(description: string | undefined, section: string) {
  if (!description || description.trim().length === 0) {
    throw new Error(`[component visualizer:${section}] Invalid data`);
  }

  return description;
}

export default function ComponentSystemVisualizerPage() {
  if (!getIsSystemEnabled()) {
    notFound();
  }

  const smart = smartWebsiteSystemsPage;
  const local = localSeoAuthorityPage;

  return (
    <main role='main'>
      <HeroSplitSection
        visualType='system-feed'
        kicker={label('HeroSplitSection', 'system-feed')}
        heading={{ title: smart.hero.title, description: smart.hero.description }}
        chips={smart.hero.list}
        actions={[smart.cta.actions[0]]}
        visual={smart.hero.visual}
      />

      <HeroSplitSection
        visualType='signal-grid'
        kicker={label('HeroSplitSection', 'signal-grid')}
        heading={{ title: local.hero.title, description: local.hero.description }}
        chips={local.hero.list}
        actions={[local.cta.actions[0]]}
        visual={{ title: 'Local Presence', subtitle: 'Signal audit', rows: [{ label: 'Map pack', value: 'Missing', status: 'risk' as const }, { label: 'Citations', value: '62%', status: 'warn' as const }] }}
      />

      <GridCardsSection
        variant='signal-board'
        tone='soft'
        columns={3}
        heading={{
          kicker: label('GridCardsSection', 'signal-board'),
          title: 'What stops local visibility from building',
          description: 'Three signal failures that keep businesses hidden in local search.',
        }}
        items={[
          { id: 'lsa-mc-0', iconKey: 'alert' as const, badge: 'Current state', title: 'Profile incomplete', description: 'Services and hours missing from Google Business Profile.', status: 'risk' as const },
          { id: 'lsa-mc-1', iconKey: 'eye' as const, badge: 'Current state', title: 'Citations inconsistent', description: 'Name, address and phone number varies across directories.', status: 'risk' as const },
          { id: 'lsa-mc-2', iconKey: 'clock' as const, badge: 'Current state', title: 'No review activity', description: 'No new reviews in the last 90 days.', status: 'risk' as const },
        ]}
      />

      <GridCardsSection
        variant='feature-grid'
        tone='light'
        columns={2}
        heading={{
          kicker: label('GridCardsSection', 'feature-grid'),
          title: smart.sections.environmentRoster.header.title,
          description: requireDescription(
            smart.sections.environmentRoster.header.description,
            'smart environment roster'
          ),
        }}
        items={smart.sections.environmentRoster.rows.map((row, index) => ({
          id: `smart-env-${index}`,
          iconKey: 'check-circle' as const,
          title: row.name,
          description: row.operationalNeed,
        }))}
      />

      <BeforeAfterSection
        variant='split-panel'
        heading={{
          kicker: label('BeforeAfterSection', 'split-panel'),
          title: 'Package SEO vs local authority system',
          description: 'The difference between buying activity and building signals Google can verify.',
        }}
        before={{
          label: 'Package SEO',
          title: 'Activity without compounding',
          items: ['Monthly reports on work done', 'No signal consistency checks', 'Rankings drift when activity stops'],
        }}
        after={{
          label: 'Authority system',
          title: 'Signals that compound',
          items: ['Verified citations across directories', 'Review cadence built in', 'Rank stability through consistent signals'],
        }}
      />

      <LayerStackSection
        variant='stack'
        heading={{
          kicker: label('LayerStackSection', 'stack'),
          title: smart.sections.handledPath.header.title,
          description: requireDescription(
            smart.sections.handledPath.header.description,
            'smart handled path'
          ),
        }}
        layers={smart.sections.handledPath.stages.map((stage, index) => ({
          key: `smart-layer-${index}`,
          index: String(index + 1).padStart(2, '0'),
          iconKey: LAYER_ICON_KEYS[index % LAYER_ICON_KEYS.length],
          title: stage.name,
          summary: stage.description,
          bullets: stage.proofPoints,
        }))}
      />

      <ProcessStepsSection
        variant='timeline'
        tone='light'
        heading={{
          kicker: label('ProcessStepsSection', 'timeline'),
          title: 'How it works',
          description: 'From first conversation to a site that earns its place.',
        }}
        steps={[
          {
            index: '01',
            iconKey: 'compass' as const,
            title: 'We learn how your business runs',
            description: 'What you offer, how people find you, where things drop off.',
          },
          {
            index: '02',
            iconKey: 'workflow' as const,
            title: 'We plan around your services',
            description:
              'Which services need their own listing and how someone moves from arriving to enquiring.',
          },
          {
            index: '03',
            iconKey: 'check-circle' as const,
            title: 'We build it and connect everything',
            description:
              'Live on WordPress. Forms feed into your CRM. Follow-up runs automatically.',
          },
          {
            index: '04',
            iconKey: 'trending' as const,
            title: 'Handover and training',
            description:
              'Everything tested. Your team handles content, checks leads, and manages updates independently.',
          },
        ]}
      />

      <ProofStorySection
        variant='before-change-after'
        tone='soft'
        heading={{
          kicker: label('ProofStorySection', 'before-change-after'),
          title: 'Plumbing company — North London',
          description: 'Scenario study showing how local signal work shifted map pack visibility over four months.',
        }}
        before={{
          label: 'Before',
          title: 'Not in map pack for main service terms',
          body: 'Three competitors ranked consistently. Profile incomplete, citations inconsistent, no recent reviews.',
          iconKey: PROOF_ICON_KEYS[0],
        }}
        change={{
          label: 'What changed',
          title: 'Signal audit, profile rebuild, citation clean-up',
          body: 'Profile completed with all service areas. Citations standardised across 40 directories. Review request process added.',
          iconKey: PROOF_ICON_KEYS[1],
        }}
        after={{
          label: 'After',
          title: 'Appearing in map pack for primary terms',
          body: 'Ranking improved across service area. Call volume from Google up. Profile impressions increased.',
          iconKey: PROOF_ICON_KEYS[2],
        }}
      />

      <ImageStorySection
        variant='evidence-photo'
        tone='light'
        heading={{
          kicker: label('ImageStorySection', 'evidence-photo'),
          title: 'What changes when the site actually works',
          description:
            'Not about how it looks. About what happens when every interested person can reach you.',
        }}
        body="You're running ads. Posting on social. People click through — nothing happens. The site isn't catching what arrives."
        bullets={[
          'Ad spend starts paying for itself',
          'Your team stops chasing and starts delivering',
          'Search traffic has somewhere to land',
        ]}
        highlights={[
          { label: 'Ad spend pays for itself', value: 'Less waste' },
          { label: 'Less chasing, more delivering', value: 'Less admin' },
          { label: 'Search picks up', value: 'Organic traffic' },
        ]}
        image={{
          src: '/images/services/smart-website-systems.webp',
          alt: 'Operations dashboard view of a smart website system',
          width: 960,
          height: 720,
        }}
        caption='Get the site right. Everything after it starts working.'
      />

      <ImageStorySection
        variant='system-visual'
        tone='soft'
        heading={{
          kicker: label('ImageStorySection', 'system-visual'),
          title: 'What changes when the site actually works',
          description:
            'Not about how it looks. About what happens when every interested person can reach you.',
        }}
        body="You're running ads. Posting on social. People click through — nothing happens. The site isn't catching what arrives."
        bullets={[
          'Ad spend starts paying for itself',
          'Your team stops chasing and starts delivering',
          'Search traffic has somewhere to land',
        ]}
        highlights={[
          { label: 'Ad spend pays for itself', value: 'Less waste' },
          { label: 'Less chasing, more delivering', value: 'Less admin' },
          { label: 'Search picks up', value: 'Organic traffic' },
        ]}
        image={{
          src: '/images/services/smart-website-systems.webp',
          alt: 'Operations dashboard view of a smart website system',
          width: 960,
          height: 720,
        }}
        caption='Get the site right. Everything after it starts working.'
      />

      <ScopeSection
        variant='grouped-scope'
        tone='light'
        heading={{
          kicker: label('ScopeSection', 'grouped-scope'),
          title: 'What the local authority system covers',
          description: 'Eight signal families — from profile to citation to content coverage.',
        }}
        groups={[
          { label: 'Google Business Profile', description: 'Complete, verified, active.', iconKey: 'database' as const, items: ['All services listed', 'Hours and area correct', 'Posts active'] },
          { label: 'Citation consistency', description: 'Name, address and phone standardised across directories.', iconKey: 'clipboard' as const, items: ['40+ directories checked', 'Inconsistencies corrected', 'Ongoing monitoring'] },
          { label: 'Review signals', description: 'Recent, relevant, replied to.', iconKey: 'shield' as const, items: ['Review request process', 'Negative routing', 'Response templates'] },
          { label: 'Service page coverage', description: 'Each service indexed and linked.', iconKey: 'route' as const, items: ['Service pages built', 'Local schema added', 'Internal linking correct'] },
        ]}
      />

      <ScopeSection
        variant='service-map'
        tone='soft'
        heading={{
          kicker: label('ScopeSection', 'service-map'),
          title: 'What the local authority system covers',
          description: 'Eight signal families — from profile to citation to content coverage.',
        }}
        groups={[
          { label: 'Google Business Profile', description: 'Complete, verified, active.', iconKey: 'database' as const, items: ['All services listed', 'Hours and area correct', 'Posts active'] },
          { label: 'Citation consistency', description: 'Name, address and phone standardised across directories.', iconKey: 'clipboard' as const, items: ['40+ directories checked', 'Inconsistencies corrected', 'Ongoing monitoring'] },
          { label: 'Review signals', description: 'Recent, relevant, replied to.', iconKey: 'shield' as const, items: ['Review request process', 'Negative routing', 'Response templates'] },
          { label: 'Service page coverage', description: 'Each service indexed and linked.', iconKey: 'route' as const, items: ['Service pages built', 'Local schema added', 'Internal linking correct'] },
        ]}
      />

      <QualificationSection
        variant='fit-filter'
        tone='light'
        heading={{
          kicker: label('QualificationSection', 'fit-filter'),
          title: smart.sections.fitFilter.header.title,
          description: requireDescription(
            smart.sections.fitFilter.header.description,
            'smart fit filter'
          ),
        }}
        good={{
          label: smart.sections.fitFilter.strongFit.label,
          title: smart.sections.fitFilter.strongFit.title,
          items: smart.sections.fitFilter.strongFit.scenarios.map(item => ({
            text: item.title,
            note: item.description,
          })),
        }}
        not={{
          label: smart.sections.fitFilter.notFit.label,
          title: smart.sections.fitFilter.notFit.title,
          items: smart.sections.fitFilter.notFit.scenarios.map(item => ({
            text: item.title,
            note: item.description,
          })),
        }}
      />

      <AccordionFAQSection
        variant='single-column'
        tone='soft'
        heading={{
          kicker: label('AccordionFAQSection', 'single-column'),
          title: smart.sections.faq.header.title,
          description: requireDescription(smart.sections.faq.header.description, 'smart faq'),
        }}
        items={smart.sections.faq.items.map((item, index) => ({
          id: `smart-faq-${index}`,
          question: item.question,
          answer: item.answer,
        }))}
      />

      <RelatedContentSection
        variant='progression'
        tone='light'
        heading={{
          kicker: label('RelatedContentSection', 'progression'),
          title: smart.seo.title,
          description: local.seo.description,
        }}
        items={[
          {
            id: smart.slug,
            step: smart.badge,
            iconKey: 'workflow' as const,
            title: smart.seo.title,
            summary: smart.category,
            href: `/services/${smart.slug}`,
            description: smart.seo.description,
            cta: smart.cta.actions[0].label,
          },
          {
            id: local.slug,
            step: local.badge,
            iconKey: 'map-pin' as const,
            title: local.seo.title,
            summary: local.category,
            href: `/services/${local.slug}`,
            description: local.seo.description,
            cta: local.cta.actions[0].label,
          },
        ]}
      />

      <ServiceBridgeSection
        tone='soft'
        heading={{
          kicker: label('ServiceBridgeSection', 'single pattern'),
          title: 'How the smart website system connects to other systems',
          description:
            'Smart Website Systems owns lead capture and qualification. Every other system depends on it working reliably.',
        }}
        bridges={[
          {
            id: 'ai-lead-handling',
            from: 'Smart Website Systems',
            to: 'AI Lead Handling',
            handoff: 'Qualified leads routed instantly — no voicemail, no delay.',
            boundary: 'Smart Website Systems captures. AI Lead Handling responds and qualifies.',
          },
          {
            id: 'crm-automation',
            from: 'Smart Website Systems',
            to: 'CRM Automation',
            handoff: 'Every form submission enters the pipeline with full context.',
            boundary: 'Smart Website Systems feeds. CRM Automation owns follow-up.',
          },
          {
            id: 'local-seo-authority',
            from: 'Smart Website Systems',
            to: 'Local SEO Authority',
            handoff: 'Service pages signal intent to search. Rankings build on structural clarity.',
            boundary: 'Smart Website Systems structures. Local SEO Authority amplifies.',
          },
        ]}
      />

      <CriteriaComparisonSection
        tone='light'
        heading={{
          kicker: label('CriteriaComparisonSection', 'single pattern'),
          title: 'SEO package thinking vs. authority system thinking',
          description:
            'Why the typical SEO approach and the authority system approach are not equivalent — across five decision criteria.',
        }}
        leftLabel='Package approach'
        rightLabel='Authority system'
        criteria={[
          { id: 'lsa-cc-1', label: 'Signal type', currentApproach: 'Activity reported (links built, posts written)', systemApproach: 'Signals Google can independently verify', decisionSignal: 'Verified signals compound. Reported activity does not.' },
          { id: 'lsa-cc-2', label: 'Ranking stability', currentApproach: 'Drops when activity pauses', systemApproach: 'Holds because underlying signals remain', decisionSignal: 'Stability requires signals, not continuous spend.' },
          { id: 'lsa-cc-3', label: 'Citation consistency', currentApproach: 'Rarely checked or corrected', systemApproach: 'Audited and standardised across directories', decisionSignal: 'Inconsistent citations directly suppress local rankings.' },
          { id: 'lsa-cc-4', label: 'Review signals', currentApproach: 'Not part of typical package', systemApproach: 'Review cadence built into the system', decisionSignal: 'Review recency is a direct local ranking factor.' },
          { id: 'lsa-cc-5', label: 'Profile completeness', currentApproach: 'Set up once, rarely maintained', systemApproach: 'Monitored and updated as services change', decisionSignal: 'Google rewards profiles that stay accurate and complete.' },
        ]}
      />

      <AuthoritySignalMapSection
        tone='soft'
        heading={{
          kicker: label('AuthoritySignalMapSection', 'single pattern'),
          title: 'Where the authority signals are weak or missing',
          description:
            'The four signal families that determine local visibility — and the typical state before the system is in place.',
        }}
        families={[
          { id: 'lsa-sf-1', title: 'Website foundation', signals: [{ id: 'lsa-s-1', label: 'Service pages indexed', state: 'weak' as const, note: 'Only 2 of 7 services have dedicated pages.' }, { id: 'lsa-s-2', label: 'Local schema markup', state: 'missing' as const, note: 'No structured data present.' }, { id: 'lsa-s-3', label: 'Page load speed', state: 'weak' as const }] },
          { id: 'lsa-sf-2', title: 'Google Business Profile', signals: [{ id: 'lsa-s-4', label: 'Profile completeness', state: 'weak' as const, note: 'Services section incomplete.' }, { id: 'lsa-s-5', label: 'Review recency', state: 'missing' as const, note: 'No reviews in last 90 days.' }, { id: 'lsa-s-6', label: 'Post activity', state: 'missing' as const }] },
          { id: 'lsa-sf-3', title: 'Citation signals', signals: [{ id: 'lsa-s-7', label: 'NAP consistency', state: 'weak' as const, note: 'Phone number varies across 12 directories.' }, { id: 'lsa-s-8', label: 'Directory coverage', state: 'weak' as const, metric: '18 of 40' }] },
          { id: 'lsa-sf-4', title: 'Content coverage', signals: [{ id: 'lsa-s-9', label: 'Service area pages', state: 'missing' as const }, { id: 'lsa-s-10', label: 'Location-specific content', state: 'missing' as const, note: 'No suburb or area pages.' }] },
        ]}
      />

      <PrimaryCTASection
        variant='soft-panel'
        heading={{
          kicker: label('PrimaryCTASection', 'soft-panel'),
          title: smart.cta.heading.title,
          description: smart.cta.heading.description,
        }}
        actions={smart.cta.actions}
        supports={smart.hero.list}
      />
    </main>
  );
}
