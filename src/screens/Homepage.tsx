import type { LucideIcon } from 'lucide-react';
import { ArrowRight, FileText, Globe, GitBranch, BarChart3, Star, Inbox, PhoneOff, Repeat, Search } from 'lucide-react';

import { FAQSection as FAQSectionComponent } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionShell } from '@/components/layout/SectionShell';
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
const middle = [
  { icon: Inbox, label: "Capture", note: "All channels in" },
  { icon: GitBranch, label: "Routing", note: "Right person, right time" },
  { icon: Repeat, label: "Follow-up", note: "On schedule, not memory" },
  { icon: BarChart3, label: "Tracking", note: "What's working" },
  { icon: Star, label: "Proof", note: "Reviews at the moment" },
];
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
    <SectionShell
      id='recognition'
      ariaLabel='What is actually happening'
      tone='mist'
      layout='split'
      heading={{
        eyebrow: 'What is actually happening',
        title: 'The business is working. [[muted:The system around it is leaking.]]',
        description:
          'Not a dramatic failure. A steady drip across the path from someone searching online to a job done and a review captured. Each step works on its own. The handoffs between them do not.',
      }}
    >
      <div className="col-span-12 lg:col-span-7">
        {/* Top — visible surface */}
        <div className="rounded-2xl border-2 border-[#E6EEF3] bg-white p-6 shadow-[0_8px_32px_rgba(8,17,31,0.07)]">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-12 h-12 rounded-xl bg-[#F6FAFC] border border-[#D8E6EE] flex items-center justify-center text-[#4C5E6F]">
              <Globe size={20} />
            </div>
            <div className="flex-1">
              <div className="text-[#6F8190] uppercase tracking-[0.14em]" style={{ fontSize: '10.5px', fontWeight: 600 }}>Surface</div>
              <div className="text-[#08111F] mt-0.5" style={{ fontSize: '16px', fontWeight: 600 }}>Visible website</div>
            </div>
            <div className="text-[#6F8190]" style={{ fontSize: '12.5px' }}>What the visitor sees</div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {["Service pages", "Local coverage", "Contact & enquiry"].map((item) => (
              <div key={item} className="rounded-lg bg-[#F6FAFC] border border-[#E6EEF3] px-3 py-2.5 text-center">
                <div className="text-[#4C5E6F]" style={{ fontSize: '12px', fontWeight: 500 }}>{item}</div>
              </div>
            ))}
          </div>
        </div>

        {/* connector */}
        <div className="flex flex-col items-center gap-1 my-2">
          <div className="w-px h-5 bg-[#C8D8E4]" />
          <div className="text-[#6F8190] uppercase tracking-[0.12em]" style={{ fontSize: '9px', fontWeight: 700 }}>underneath</div>
          <div className="w-px h-5 bg-[#C8D8E4]" />
        </div>

        {/* Middle — working layers */}
        <div className="rounded-2xl border-2 border-[#35C7D8]/40 bg-gradient-to-b from-[#EBF9FB] to-[#F6FCFD] p-6 shadow-[0_4px_20px_rgba(53,199,216,0.10)]">
          <div className="text-[#0E7D8C] uppercase tracking-[0.14em] mb-4" style={{ fontSize: '10.5px', fontWeight: 700 }}>What runs underneath</div>
          <div className="grid grid-cols-5 gap-3">
            {middle.map((m) => (
              <div key={m.label} className="rounded-xl bg-white border border-[#D0EFF4] p-4 flex flex-col items-center text-center gap-2 shadow-[0_2px_8px_rgba(8,17,31,0.04)]">
                <div className="w-11 h-11 rounded-lg bg-[#35C7D8]/14 text-[#0E6879] flex items-center justify-center">
                  <m.icon size={18} />
                </div>
                <div className="text-[#0E2740]" style={{ fontSize: '12.5px', fontWeight: 600 }}>{m.label}</div>
                <div className="text-[#4C5E6F]" style={{ fontSize: '11px', lineHeight: 1.35 }}>{m.note}</div>
              </div>
            ))}
          </div>
        </div>

        {/* connector */}
        <div className="flex flex-col items-center gap-1 my-2">
          <div className="w-px h-5 bg-[#C8D8E4]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#35C7D8] shadow-[0_0_8px_#35C7D8]" />
          <div className="w-px h-5 bg-[#C8D8E4]" />
        </div>

        {/* Bottom — foundation */}
        <div className="rounded-2xl bg-gradient-to-br from-[#061323] to-[#103E5A] p-7 border border-[#35C7D8]/20 shadow-[0_24px_64px_rgba(8,17,31,0.28),0_0_40px_rgba(53,199,216,0.06)]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/8 border border-white/15 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#35C7D8] shadow-[0_0_12px_#35C7D8]" />
            </div>
            <div className="flex-1">
              <div className="text-white/50 uppercase tracking-[0.14em]" style={{ fontSize: '10.5px', fontWeight: 600 }}>Foundation</div>
              <div className="text-white mt-0.5" style={{ fontSize: '16px', fontWeight: 600 }}>Smart Website Systems</div>
            </div>
            <div className="text-white/55" style={{ fontSize: '12.5px' }}>The working business structure</div>
          </div>
        </div>
      </div>
    </SectionShell>
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
