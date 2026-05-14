import type { LucideIcon } from 'lucide-react';
import { ArrowRight, FileText, Inbox, PhoneOff, Repeat, Search } from 'lucide-react';

import { FAQSection as FAQSectionComponent } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import { StatusBadge } from '@/components/primitives/StatusBadge';
import { CTARegistryProvider } from '@/components/system/PageEnforcement';
import { type HomeIconKey, homepageData } from '@/domains/home/data/homepage';

const HOME_ICON_MAP: Record<HomeIconKey, LucideIcon> = {
  'local-search': Search,
  'service-page': FileText,
  'form-enquiry': Inbox,
  'missed-call': PhoneOff,
  'follow-up-due': Repeat,
};

export default function Homepage() {
  return (
    <CTARegistryProvider pageId='page:home' pageType='page' primarySystem='smart-website-systems'>
      <main>
        <HomeHero />
        <HomeRecognitionSection />
        <HomeFAQ />
        <HomeDecisionPanel />
      </main>
    </CTARegistryProvider>
  );
}

function HomeHero() {
  const { hero } = homepageData;

  return (
    <HeroFrame
      ariaLabel='Homepage hero'
      eyebrow={hero.eyebrow}
      title={hero.heading}
      description={hero.description}
      actions={[
        {
          label: hero.primaryAction.label,
          href: hero.primaryAction.href,
          variant: 'white',
          icon: <ArrowRight size={16} aria-hidden='true' />,
        },
        {
          label: hero.secondaryAction.label,
          href: hero.secondaryAction.href,
          variant: 'ghost',
          icon: <ArrowRight size={14} aria-hidden='true' />,
        },
      ]}
      chips={hero.chips.map(chip => ({ label: chip.label, accent: chip.accent }))}
      visual={<SignalSurface />}
    />
  );
}

function SignalSurface() {
  const { hero } = homepageData;

  return (
    <div className='rounded-[var(--mw-radius-2xl)] border border-[var(--mw-white-12)] bg-[var(--mw-white-06)] p-5 shadow-[var(--mw-shadow-dark-lg)]'>
      <div className='mb-5 flex items-start justify-between gap-4 border-b border-[var(--mw-white-10)] pb-4'>
        <div>
          <p className='mw-text-eyebrow mw-text-signal-cyan'>Signal Surface</p>
          <p className='mw-text-on-dark-muted'>What your business looks like today</p>
        </div>
        <div className='rounded-[var(--mw-radius-xl)] border border-[var(--mw-white-12)] bg-[var(--mw-white-08)] px-4 py-3 text-right'>
          <p className='mw-text-eyebrow mw-text-on-dark-muted'>{hero.signalCountLabel}</p>
          <strong className='mw-text-on-dark'>
            {String(hero.signals.length).padStart(2, '0')}
          </strong>
        </div>
      </div>

      <div className='grid gap-3'>
        {hero.signals.map((signal, index) => {
          const Icon = HOME_ICON_MAP[signal.iconKey];

          return (
            <div
              key={signal.label}
              className='grid grid-cols-[auto_auto_1fr_auto] items-center gap-3 rounded-[var(--mw-radius-lg)] border border-[var(--mw-white-08)] bg-[var(--mw-white-04)] px-3 py-3'
            >
              <span className='mw-text-on-dark-muted'>{String(index + 1).padStart(2, '0')}</span>
              <span className='grid size-8 place-items-center rounded-full border border-[var(--mw-white-12)] bg-[var(--mw-white-08)] text-[var(--mw-signal-cyan)]'>
                <Icon size={15} aria-hidden='true' />
              </span>
              <span>
                <strong className='block mw-text-on-dark'>{signal.label}</strong>
                <span className='mw-text-on-dark-muted'>{signal.note}</span>
              </span>
              <StatusBadge variant={signal.status} label={signal.status.toUpperCase()} />
            </div>
          );
        })}
      </div>

      <div className='mt-5 flex flex-wrap items-center gap-3 border-t border-[var(--mw-white-10)] pt-4'>
        <StatusBadge variant='leaking' label={hero.signalSummary.leaking} />
        <StatusBadge variant='unowned' label={hero.signalSummary.unowned} />
        <StatusBadge variant='handled' label={hero.signalSummary.pulling} />
      </div>
    </div>
  );
}

function HomeRecognitionSection() {
  return (
    <SectionFrame
      id='recognition'
      ariaLabel='What is actually happening'
      tone='mist'
      heading={{
        eyebrow: 'What is actually happening',
        title: 'The business is working. [[muted:The system around it is leaking.]]',
        description:
          'Not a dramatic failure. A steady drip across the path from someone searching online to a job done and a review captured. Each step works on its own. The handoffs between them do not.',
      }}
    >
      <div className='grid gap-5 lg:grid-cols-3'>
        <article className='rounded-[var(--mw-radius-xl)] border border-[var(--mw-border-light)] bg-[var(--mw-bg-page)] p-6 shadow-[var(--mw-shadow-sm)]'>
          <p className='mw-text-eyebrow mw-text-signal-cyan'>Demand exists</p>
          <h3>People are already showing intent</h3>
          <p>
            Searches, page visits, calls, forms, quote requests, and review checks are signals that
            someone is already moving toward a decision.
          </p>
        </article>

        <article className='rounded-[var(--mw-radius-xl)] border border-[var(--mw-border-light)] bg-[var(--mw-bg-page)] p-6 shadow-[var(--mw-shadow-sm)]'>
          <p className='mw-text-eyebrow mw-text-signal-cyan'>Ownership breaks</p>
          <h3>The handoff is where work slips</h3>
          <p>
            A visitor becomes an enquiry. An enquiry needs a response. A response needs follow-up.
            Each break looks small until the revenue is gone.
          </p>
        </article>

        <article className='rounded-[var(--mw-radius-xl)] border border-[var(--mw-border-light)] bg-[var(--mw-bg-page)] p-6 shadow-[var(--mw-shadow-sm)]'>
          <p className='mw-text-eyebrow mw-text-signal-cyan'>System needed</p>
          <h3>The fix is not one more page</h3>
          <p>
            The website needs a connected handling layer around it, so the right enquiry lands
            somewhere clear and nothing depends on someone remembering.
          </p>
        </article>
      </div>
    </SectionFrame>
  );
}

function HomeFAQ() {
  const { faq } = homepageData;
  const faqItems = faq.items.map((item, index) => ({
    id: `home-faq-${index}`,
    question: item.question,
    answer: item.answer,
  }));

  return (
    <FAQSectionComponent
      title={faq.heading}
      description={faq.description}
      items={faqItems}
      tone='mist'
      variant='split'
      ariaLabel='Homepage FAQ'
    />
  );
}

function HomeDecisionPanel() {
  const { cta } = homepageData;

  return (
    <DecisionPanel
      heading={{
        eyebrow: cta.eyebrow,
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
