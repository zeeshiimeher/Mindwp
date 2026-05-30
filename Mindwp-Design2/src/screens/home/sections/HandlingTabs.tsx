'use client';

import { Inbox, PhoneCall, History, HeartPulse, Check } from 'lucide-react';
import { useState, type ReactNode } from 'react';

import { cn } from '@/lib/cn';
import { SignalDot, type SignalTone } from '@/components/primitives/SignalDot';

type PathKey = 'form' | 'call' | 'quote' | 'consultation';

const PATHS: {
  key: PathKey;
  label: string;
  qualifier: string;
  icon: typeof Inbox;
  tone: SignalTone;
}[] = [
  { key: 'form', label: 'Form enquiry', qualifier: 'From the website', icon: Inbox, tone: 'teal' },
  {
    key: 'call',
    label: 'Phone & missed calls',
    qualifier: 'Inbound calls',
    icon: PhoneCall,
    tone: 'red',
  },
  {
    key: 'quote',
    label: 'Quote follow-up',
    qualifier: 'After the quote',
    icon: History,
    tone: 'amber',
  },
  {
    key: 'consultation',
    label: 'Consultation request',
    qualifier: 'Consultation request',
    icon: HeartPulse,
    tone: 'purple',
  },
];

function Field({ k, v }: { k: string; v: string }) {
  return (
    <div className='flex flex-col gap-1 rounded-xl border border-[#e6eef3] bg-[#f9fcfd] px-4 py-3'>
      <span className='text-[11px] font-semibold uppercase tracking-[0.12em] text-[#6f8190]'>{k}</span>
      <span className='text-[13.5px] text-[#08111f]'>{v}</span>
    </div>
  );
}

function SurfaceFrame({
  eyebrow,
  tone,
  heading,
  sub,
  children,
  footnote,
}: {
  eyebrow: string;
  tone: SignalTone;
  heading: string;
  sub: string;
  children: ReactNode;
  footnote: string;
}) {
  return (
    <div className='mw-card overflow-hidden'>
      <div className='flex items-center justify-between border-b border-[#eef3f6] px-6 py-4'>
        <span className='inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#4c5e6f]'>
          <SignalDot tone={tone} glow='bloom' />
          {eyebrow}
        </span>
        <span className='text-[11px] font-medium uppercase tracking-[0.14em] text-[#9cb0bd]'>
          Same handling
        </span>
      </div>
      <div className='p-6'>
        <h3 className='text-[18px] font-bold tracking-tight text-[#08111f]'>{heading}</h3>
        <p className='mt-1 text-[13px] text-[#6f8190]'>{sub}</p>
        <div className='mt-5'>{children}</div>
        <p className='mt-5 border-t border-[#eef3f6] pt-4 text-[13px] leading-relaxed text-[#4c5e6f]'>
          {footnote}
        </p>
      </div>
    </div>
  );
}

function FormSurface() {
  return (
    <SurfaceFrame
      eyebrow='Form enquiry'
      tone='teal'
      heading='Repair enquiry — named local area'
      sub='Arrived during working hours from a service page'
      footnote='Where it came from, why they got in touch, and who’s replying — all attached to the enquiry, not sitting in a shared inbox.'
    >
      <div className='grid gap-2.5 sm:grid-cols-2'>
        <Field k='Source page' v='Service or treatment page' />
        <Field k='What they need' v='Quote request · time-sensitive' />
        <Field k='Area' v='Named local area' />
        <Field k='Replying' v='Service manager — owner attached' />
        <Field k='First reply' v='Acknowledged while still fresh' />
        <Field k='Next step' v='Chase visible if no reply' />
      </div>
    </SurfaceFrame>
  );
}

function CallSurface() {
  return (
    <SurfaceFrame
      eyebrow='Missed call recovery'
      tone='red'
      heading='Weekend missed call — recovered with context'
      sub='After-hours · service line tracked'
      footnote='Weekend and after-hours calls don’t disappear into voicemail. They come back into the same handling, with the right person calling back.'
    >
      <div className='flex flex-col gap-3'>
        <div className='rounded-xl border border-[#f3d6d6] bg-[#fdf4f4] p-4'>
          <div className='flex items-center justify-between'>
            <span className='inline-flex items-center gap-2 text-[12px] font-semibold text-[#b9534f]'>
              <SignalDot tone='red' glow='bloom' /> Inbound call — missed
            </span>
            <span className='text-[11px] uppercase tracking-[0.12em] text-[#c08a8a]'>After-hours</span>
          </div>
          <p className='mt-1.5 text-[13px] text-[#6f8190]'>
            Caller logged · service line tracked · area attached.
          </p>
        </div>
        <div className='rounded-xl border border-[#cfeae6] bg-[#f0fbf9] p-4'>
          <div className='flex items-center justify-between'>
            <span className='inline-flex items-center gap-2 text-[12px] font-semibold text-[#0e7d8c]'>
              <SignalDot tone='teal' glow='bloom' /> Text sent back · same line, every time
            </span>
            <span className='text-[11px] uppercase tracking-[0.12em] text-[#6fb3ab]'>Acknowledged</span>
          </div>
          <p className='mt-2 rounded-lg bg-white/70 px-3 py-2 text-[13px] italic text-[#4c5e6f]'>
            “Sorry we missed you — someone on the team has been notified and will follow up.”
          </p>
        </div>
        <div className='rounded-xl border border-[#cdeadd] bg-[#f1fbf6] p-4'>
          <div className='flex items-center justify-between'>
            <span className='inline-flex items-center gap-2 text-[12px] font-semibold text-[#0f7a57]'>
              <SignalDot tone='green' glow='bloom' /> Callback ownership attached
            </span>
            <span className='text-[11px] uppercase tracking-[0.12em] text-[#6fb597]'>Owned</span>
          </div>
          <p className='mt-1.5 text-[13px] text-[#6f8190]'>
            Service team owns the call route · the right person follows up with context.
          </p>
        </div>
      </div>
    </SurfaceFrame>
  );
}

function QuoteSurface() {
  const steps = [
    { label: 'Sent', note: 'Owner attached', state: 'done' as const },
    { label: 'Soft chase', note: 'Scheduled', state: 'done' as const },
    { label: 'Owner check', note: 'This week', state: 'active' as const },
    { label: 'Decision', note: 'Pending', state: 'pending' as const },
  ];
  return (
    <SurfaceFrame
      eyebrow='Quote follow-up'
      tone='amber'
      heading='Quote sent — chase path visible'
      sub='Sent during working hours · quote owner attached'
      footnote='Quotes don’t drift into the weekend. Someone picks up the chase on a known pace, and the status stays visible to the owner.'
    >
      <div className='relative grid grid-cols-4 gap-2'>
        <div className='absolute left-[12%] right-[12%] top-[11px] h-px bg-[#e0e9ef]' />
        {steps.map(s => (
          <div key={s.label} className='relative flex flex-col items-center text-center'>
            <span
              className='relative z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 bg-white'
              style={{
                borderColor:
                  s.state === 'pending' ? '#c8d8e4' : s.state === 'active' ? '#f4b740' : '#21b985',
              }}
            >
              {s.state === 'done' ? (
                <Check size={12} strokeWidth={3} color='#21b985' />
              ) : (
                <SignalDot
                  tone={s.state === 'active' ? 'amber' : 'cyan'}
                  glow={s.state === 'active' ? 'bloom' : 'none'}
                  size={s.state === 'active' ? 7 : 5}
                  pulse={s.state === 'active'}
                  className={s.state === 'pending' ? 'opacity-30' : ''}
                />
              )}
            </span>
            <span className='mt-2 text-[12.5px] font-semibold text-[#08111f]'>{s.label}</span>
            <span className='text-[11px] text-[#6f8190]'>{s.note}</span>
          </div>
        ))}
      </div>
      <div className='mt-5 rounded-xl border border-[#f0e2c2] bg-[#fdf9ee] p-4'>
        <span className='text-[11px] font-bold uppercase tracking-[0.14em] text-[#9a6f12]'>
          Owner note · this week
        </span>
        <p className='mt-1.5 text-[13px] leading-relaxed text-[#4c5e6f]'>
          Spoke briefly — they are waiting on a decision. Re-scheduled the next check-in on a defined
          cadence. Quote stays open, not silently lost.
        </p>
      </div>
    </SurfaceFrame>
  );
}

function ConsultationSurface() {
  return (
    <SurfaceFrame
      eyebrow='Consultation request'
      tone='purple'
      heading='Consultation request — pre-visit context attached'
      sub='From a treatment page · practice enquiry route'
      footnote='Consultation requests don’t sit in a shared inbox waiting to be spotted. They reach the right person on the practice team with context attached.'
    >
      <div className='flex flex-col gap-3'>
        <div className='rounded-xl border border-[#e1d8f3] bg-[#f7f4fd] p-4'>
          <span className='text-[11px] font-bold uppercase tracking-[0.14em] text-[#6b4fb8]'>
            Request arrived · during practice hours
          </span>
          <p className='mt-1.5 text-[13px] text-[#4c5e6f]'>
            From the treatment page, with the pre-visit form filled in.
          </p>
        </div>
        <div className='rounded-xl border border-[#e6eef3] bg-[#f9fcfd] p-4'>
          <div className='flex items-center justify-between'>
            <span className='text-[11px] font-bold uppercase tracking-[0.14em] text-[#6f8190]'>
              Briefed by the practice team
            </span>
            <span className='text-[12px] font-semibold text-[#08111f]'>Practice clinician</span>
          </div>
          <p className='mt-1.5 text-[13px] text-[#4c5e6f]'>
            The right person on the practice team is briefed before scheduling — without sitting in a
            shared inbox.
          </p>
        </div>
        <div className='rounded-xl border border-[#cdeadd] bg-[#f1fbf6] p-4'>
          <span className='inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#0f7a57]'>
            <SignalDot tone='green' glow='bloom' /> Pre-visit reminder · day before
          </span>
          <p className='mt-1.5 text-[13px] text-[#4c5e6f]'>
            Appointment reminder and prep notes go out the day before the visit.
          </p>
        </div>
      </div>
    </SurfaceFrame>
  );
}

const SURFACES: Record<PathKey, () => ReactNode> = {
  form: FormSurface,
  call: CallSurface,
  quote: QuoteSurface,
  consultation: ConsultationSurface,
};

export function HandlingTabs() {
  const [active, setActive] = useState<PathKey>('form');
  const ActiveSurface = SURFACES[active];

  return (
    <div className='grid gap-6 lg:grid-cols-[300px_1fr] lg:gap-10'>
      <div>
        <div className='mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-[#6f8190]'>
          Contact paths
        </div>
        <div className='flex flex-col gap-2.5'>
          {PATHS.map(p => {
            const isActive = active === p.key;
            const Icon = p.icon;
            return (
              <button
                key={p.key}
                type='button'
                onClick={() => setActive(p.key)}
                aria-pressed={isActive}
                className={cn(
                  'flex items-center gap-3.5 rounded-2xl border px-4 py-3.5 text-left transition-all',
                  isActive
                    ? 'mw-card border-transparent'
                    : 'border-[#e6eef3] bg-white/40 hover:bg-white'
                )}
              >
                <span
                  className='flex h-10 w-10 shrink-0 items-center justify-center rounded-xl'
                  style={{
                    background: isActive ? `var(--mw-bloom-${p.tone})` : '#f1f6f9',
                    color: '#fff',
                  }}
                >
                  <span
                    className='flex h-10 w-10 items-center justify-center rounded-xl'
                    style={{
                      background:
                        p.tone === 'red'
                          ? '#e76f6f'
                          : p.tone === 'amber'
                            ? '#f4b740'
                            : p.tone === 'purple'
                              ? '#9b7de0'
                              : '#14b8a6',
                    }}
                  >
                    <Icon size={17} color='#fff' />
                  </span>
                </span>
                <span className='min-w-0'>
                  <span className='block text-[14px] font-semibold text-[#08111f]'>{p.label}</span>
                  <span className='block text-[12px] text-[#6f8190]'>{p.qualifier}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className='min-w-0'>
        <ActiveSurface />
      </div>
    </div>
  );
}
