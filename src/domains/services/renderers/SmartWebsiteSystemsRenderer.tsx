import { AlertTriangle, ArrowRight, FileText, Inbox, PhoneOff } from 'lucide-react';

import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionShell } from '@/components/layout/SectionShell';
import { StatusBadge } from '@/components/primitives/StatusBadge';
import type { ServicePageDataBySlug } from '@/domains/services/pageData';

interface Props {
  data: ServicePageDataBySlug['smart-website-systems'];
  slug: string;
}

const smartWebsiteMoments = [
  { name: 'Discovery', note: 'Found in search', state: 'ok' },
  { name: 'Capture', note: 'Form submitted', state: 'ok' },
  { name: 'Response', note: 'Hours pass before reply', state: 'leak', main: true },
  { name: 'Follow-up', note: 'Nobody owns the chase', state: 'weak' },
  { name: 'Visibility', note: 'Owner cannot see what happened', state: 'weak' },
];

export default function SmartWebsiteSystemsRenderer({ data }: Props) {
  const { hero, cta } = data;
  const faq = data.faq;
  return (
    <main>
      <SmartWebsiteHero hero={hero} ctaHref={cta.actions[0]?.href ?? '/contact'} />
      <SmartWebsiteRecognitionSection />
      {faq ? <SmartWebsiteFAQ faq={faq} /> : null}
      <SmartWebsiteDecisionPanel cta={cta} />
    </main>
  );
}

function SmartWebsiteHero({ hero, ctaHref }: { hero: Props['data']['hero']; ctaHref: string }) {
  return (
    <HeroFrame
      ariaLabel='Smart Website Systems hero'
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
      visual={<SmartWebsiteSignalPanel visual={hero.visual} />}
    />
  );
}

function SmartWebsiteSignalPanel({ visual }: { visual: Props['data']['hero']['visual'] }) {
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

function SmartWebsiteRecognitionSection() {
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
      <div className='rounded-[20px] bg-white border border-[#E6EEF3] p-10 lg:p-14 relative overflow-hidden'>
        <div className='grid grid-cols-12 gap-4 items-stretch'>
          {smartWebsiteMoments.map((m, i) => {
            const dom = m.main;
            const tone =
              m.state === 'leak' ? '#E76F6F' : m.state === 'weak' ? '#F4B740' : '#21B985';
            return (
              <div
                key={i}
                className={`${dom ? 'col-span-12 md:col-span-4' : 'col-span-6 md:col-span-2'} relative`}
              >
                <div
                  className={`h-full rounded-xl p-5 ${dom ? 'bg-gradient-to-br from-[#FDECEC] to-white border border-[#E76F6F]/30 shadow-[0_12px_40px_rgba(231,111,111,0.15)]' : 'bg-[#F6FAFC] border border-[#E6EEF3]'}`}
                >
                  <div className='flex items-center justify-between mb-3'>
                    <span
                      className='text-[#6F8190] tabular-nums'
                      style={{ fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.12em' }}
                    >
                      0{i + 1}
                    </span>
                    <span
                      className='w-1.5 h-1.5 rounded-full'
                      style={{ background: tone, boxShadow: dom ? `0 0 10px ${tone}` : 'none' }}
                    />
                  </div>
                  <div
                    className='text-[#08111F]'
                    style={{
                      fontSize: dom ? '24px' : '14.5px',
                      fontWeight: 600,
                      letterSpacing: '-0.015em',
                    }}
                  >
                    {m.name}
                  </div>
                  <div
                    className={`mt-2 ${dom ? 'text-[#08111F]' : 'text-[#6F8190]'}`}
                    style={{ fontSize: dom ? '14.5px' : '12px', lineHeight: 1.5 }}
                  >
                    {m.note}
                  </div>
                  {dom && (
                    <div
                      className='mt-5 pt-4 border-t border-[#E76F6F]/20 flex items-center gap-2 text-[#E76F6F]'
                      style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em' }}
                    >
                      <AlertTriangle size={12} /> MAIN LEAK
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div
          className='mt-8 pt-8 border-t border-[#E6EEF3] flex items-center justify-between text-[#6F8190]'
          style={{ fontSize: '12.5px' }}
        >
          <span>
            Discovery → Capture → <span className='text-[#E76F6F]'>Response</span> → Follow-up →
            Visibility
          </span>
          <span>Most enquiries die between Capture and Response.</span>
        </div>
      </div>
    </SectionShell>
  );
}

function SmartWebsiteFAQ({ faq }: { faq: NonNullable<Props['data']['faq']> }) {
  return (
    <FAQSection
      title={faq.header.title}
      description={faq.header.description}
      items={faq.items.map((item, index) => ({
        id: `smart-website-faq-${index}`,
        question: item.question,
        answer: item.answer,
      }))}
      tone='mist'
      variant='split'
      ariaLabel='Smart Website Systems FAQ'
    />
  );
}

function SmartWebsiteDecisionPanel({ cta }: { cta: Props['data']['cta'] }) {
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

export { SmartWebsiteSystemsRenderer };
