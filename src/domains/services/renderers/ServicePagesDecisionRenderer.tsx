import { ArrowRight, FileText, Inbox, PhoneOff } from 'lucide-react';

import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionShell } from '@/components/layout/SectionShell';
import { StatusBadge } from '@/components/primitives/StatusBadge';
import type { ServicePageDataBySlug } from '@/domains/services/pageData';

interface Props {
  data: ServicePageDataBySlug['service-pages-vs-one-generic-services-page'];
  slug: string;
}

export default function ServicePagesDecisionRenderer({ data }: Props) {
  const { hero, cta } = data;
  const faq = data.faq;

  return (
    <main>
      <ServicePagesDecisionHero hero={hero} ctaHref={cta.actions[0]?.href ?? '/contact'} />
      <ServicePagesDecisionRecognitionSection />
      {faq ? <ServicePagesDecisionFAQ faq={faq} /> : null}
      <ServicePagesDecisionPanel cta={cta} />
    </main>
  );
}

function ServicePagesDecisionHero({
  hero,
  ctaHref,
}: {
  hero: Props['data']['hero'];
  ctaHref: string;
}) {
  return (
    <HeroFrame
      ariaLabel='Service Pages vs One Generic Services Page Decision hero'
      eyebrow={hero.eyebrow}
      title={hero.title}
      description={hero.description}
      actions={[
        {
          label: 'Start a Conversation',
          href: ctaHref,
          variant: 'white',
          icon: <ArrowRight size={16} aria-hidden='true' />,
        },
      ]}
      chips={Array.isArray(hero.list) ? hero.list.map(label => ({ label })) : undefined}
      chipDotVariant='subtle'
      visual={<ServicePagesDecisionSignalPanel visual={hero.visual} />}
    />
  );
}

function ServicePagesDecisionSignalPanel({ visual }: { visual: Props['data']['hero']['visual'] }) {
  if (!visual) return null;

  return (
    <div className='rounded-[var(--mw-radius-2xl)] border border-[var(--mw-white-12)] bg-[var(--mw-white-06)] p-5 shadow-[var(--mw-shadow-dark-lg)]'>
      <div className='mb-5 flex items-start justify-between gap-4 border-b border-[var(--mw-white-10)] pb-4'>
        <div>
          <p className='mw-text-eyebrow mw-text-signal-cyan'>{visual.title}</p>
          <p className='mw-text-on-dark-muted'>{visual.subtitle}</p>
        </div>
        <StatusBadge variant='active' label='Live' />
      </div>

      <div className='grid gap-3'>
        {visual.rows.map(row => {
          const status = String(row.status);
          const Icon =
            status === 'leaking' || status === 'risk'
              ? PhoneOff
              : status === 'unowned' || status === 'warn'
                ? FileText
                : Inbox;
          const badgeVariant =
            status === 'leaking' || status === 'risk'
              ? 'leaking'
              : status === 'unowned' || status === 'warn'
                ? 'unowned'
                : 'handled';

          return (
            <div
              key={row.label}
              className='grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-[var(--mw-radius-lg)] border border-[var(--mw-white-08)] bg-[var(--mw-white-04)] px-3 py-3'
            >
              <span className='grid size-8 place-items-center rounded-full border border-[var(--mw-white-12)] bg-[var(--mw-white-08)] text-[var(--mw-signal-cyan)]'>
                <Icon size={15} aria-hidden='true' />
              </span>
              <strong className='mw-text-on-dark'>{row.label}</strong>
              <StatusBadge variant={badgeVariant} label={row.value} />
            </div>
          );
        })}
      </div>

      <div className='mt-5 flex flex-wrap items-center gap-3 border-t border-[var(--mw-white-10)] pt-4'>
        <StatusBadge variant='handled' label={visual.footerPrimary} />
        <StatusBadge variant='active' label={visual.footerSecondary} />
      </div>
    </div>
  );
}

function ServicePagesDecisionRecognitionSection() {
  return (
    <SectionShell
      id='website-handoff'
      ariaLabel='Where websites usually fail'
      tone='mist'
      heading={{
        eyebrow: 'Where websites usually fail',
        title: 'The page looks fine. [[muted:The enquiry has nowhere reliable to go.]]',
        description:
          'A smart website does more than present services. It gives each enquiry a place to land, enough context to be handled, and a clear next step after contact.',
      }}
    >
      <div className='grid gap-5 lg:grid-cols-3'>
        <article className='mw-surface-card p-6'>
          <p className='mw-text-eyebrow mw-text-signal-cyan'>Visitor clarity</p>
          <h3>The visitor understands the offer</h3>
          <p>
            Service pages should answer what the visitor came to check: what you do, who it is for,
            where it is available, and what happens next.
          </p>
        </article>

        <article className='mw-surface-card p-6'>
          <p className='mw-text-eyebrow mw-text-signal-cyan'>Captured with context</p>
          <h3>The enquiry lands somewhere useful</h3>
          <p>
            A form or call should not arrive as a loose message. It should carry source, service,
            location, and enough context for the next person to act.
          </p>
        </article>

        <article className='mw-surface-card p-6'>
          <p className='mw-text-eyebrow mw-text-signal-cyan'>Owned follow-up</p>
          <h3>The next step has an owner</h3>
          <p>
            The difference is not more decoration. It is a visible path from website visit to
            enquiry, response, follow-up, and booked work.
          </p>
        </article>
      </div>
    </SectionShell>
  );
}

function ServicePagesDecisionFAQ({ faq }: { faq: NonNullable<Props['data']['faq']> }) {
  return (
    <FAQSection
      title={faq.header.title}
      description={faq.header.description}
      items={faq.items.map((item, index) => ({
        id: `service-pages-decision-faq-${index}`,
        question: item.question,
        answer: item.answer,
      }))}
      tone='mist'
      variant='split'
      ariaLabel='Service Pages vs One Generic Services Page Decision FAQ'
    />
  );
}

function ServicePagesDecisionPanel({ cta }: { cta: Props['data']['cta'] }) {
  return (
    <DecisionPanel
      heading={{
        title: cta.heading.title,
        subtitle: cta.heading.muted,
        description: cta.heading.description,
      }}
      actions={cta.actions}
      expectations={cta.expectations}
      reassurance={cta.footer}
    />
  );
}

export { ServicePagesDecisionRenderer };
