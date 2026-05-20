/**
 * Homepage — MindWP
 *
 * Long-form homepage for established service businesses and specialist clinics.
 * Public anchor: "Work Comes In. Too Much Slips Away."
 *
 * Section arc:
 *   01  Hero — HeroFrame + custom signal surface in visual slot
 *   02  Leak diagnosis — 3-lane handoff board (Found / Captured / Proven)
 *   03  Foundation — 3-layer stacked website system (surface / underneath / foundation)
 *   04  Five protections — flagship SWS + 4 connected protections (2x2)
 *   05  Fit / Not for — diagnostic two-column panel
 *   06  FAQ — FAQSection
 *   07  Final CTA — DecisionPanel
 *
 * Design source: ports the Mindwp-Design Hero / LeakDiagnosis / Foundation /
 * SixSystemStack components, with sandbox inline hex converted to mw-* tokens
 * where matched. See docs/WORKFLOW.md for the cross-folder design loop.
 */
import {
  ArrowRight,
  Check,
  Clock,
  FileText,
  Globe,
  History,
  Inbox,
  type LucideIcon,
  MapPin,
  PhoneCall,
  PhoneOff,
  Repeat,
  Search,
  Star,
  Workflow,
} from 'lucide-react';

import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { CTARegistryProvider } from '@/components/system/PageEnforcement';
import { homepageData } from '@/domains/home/data/homepage';

// =============================================================================
// 01 · Hero signal surface (visual prop for HeroFrame)
// =============================================================================

type HeroSignalStatus = 'leaking' | 'unowned';

const HERO_SIGNALS: ReadonlyArray<{
  icon: LucideIcon;
  label: string;
  note: string;
  status: HeroSignalStatus;
}> = [
  { icon: Search, label: 'Local search', note: 'Postcode N6 — page 3', status: 'unowned' },
  {
    icon: FileText,
    label: 'Service page visit',
    note: 'Bathrooms — 02:14 dwell',
    status: 'unowned',
  },
  { icon: Inbox, label: 'Form enquiry', note: 'Sat 09:14 — unread', status: 'leaking' },
  { icon: PhoneOff, label: 'Missed call', note: '11:42 — no callback', status: 'leaking' },
  { icon: Clock, label: 'Follow-up due', note: 'Today — nobody owns it', status: 'unowned' },
];

function HeroSignalSurface() {
  const leakingCount = HERO_SIGNALS.filter(s => s.status === 'leaking').length;
  const unownedCount = HERO_SIGNALS.filter(s => s.status === 'unowned').length;

  return (
    <div className='relative w-full'>
      <div
        className='rounded-2xl border p-6 backdrop-blur-sm'
        style={{
          borderColor: 'var(--mw-white-12)',
          backgroundImage:
            'linear-gradient(to bottom right, var(--mw-white-06), var(--mw-white-02))',
          boxShadow: 'var(--mw-shadow-dark-lg)',
        }}
      >
        <div
          className='flex items-center justify-between mb-5 pb-5 border-b'
          style={{ borderColor: 'var(--mw-white-10)' }}
        >
          <div>
            <div
              className='mw-text-eyebrow'
              style={{ color: 'var(--mw-white-45)', fontWeight: 700 }}
            >
              Signal Surface
            </div>
            <div
              className='mt-1'
              style={{
                color: 'var(--mw-brand-white)',
                fontSize: '21px',
                fontWeight: 600,
                letterSpacing: '-0.01em',
              }}
            >
              What your business looks like today
            </div>
          </div>
          <div className='text-right'>
            <div
              className='mw-text-eyebrow mb-0.5'
              style={{ color: 'var(--mw-white-40)', fontWeight: 600 }}
            >
              Signals
            </div>
            <div
              className='tabular-nums'
              style={{
                color: 'var(--mw-brand-white)',
                fontSize: '34px',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1,
              }}
            >
              {String(HERO_SIGNALS.length).padStart(2, '0')}
            </div>
          </div>
        </div>

        <ul className='space-y-2'>
          {HERO_SIGNALS.map((s, i) => {
            const Icon = s.icon;
            const isLeaking = s.status === 'leaking';
            return (
              <li
                key={s.label}
                className='grid grid-cols-12 items-center gap-3 px-4 py-4 rounded-lg border transition-colors'
                style={
                  isLeaking
                    ? {
                        borderColor: 'var(--mw-signal-red-25)',
                        backgroundColor:
                          'color-mix(in oklch, var(--mw-signal-red) 4%, transparent)',
                      }
                    : {
                        borderColor: 'var(--mw-white-08)',
                        backgroundColor: 'var(--mw-white-02)',
                      }
                }
              >
                <div className='col-span-1'>
                  <span
                    className='tabular-nums'
                    style={{
                      color: 'var(--mw-white-30)',
                      fontSize: '10.5px',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className='col-span-1'>
                  <div
                    className='w-9 h-9 rounded-md border flex items-center justify-center'
                    style={
                      isLeaking
                        ? {
                            backgroundColor: 'var(--mw-signal-red-10)',
                            borderColor: 'var(--mw-signal-red-30)',
                            color: 'var(--mw-signal-red)',
                          }
                        : {
                            backgroundColor: 'var(--mw-white-06)',
                            borderColor: 'var(--mw-white-12)',
                            color: 'var(--mw-white-80)',
                          }
                    }
                  >
                    <Icon size={15} strokeWidth={1.5} aria-hidden='true' />
                  </div>
                </div>
                <div className='col-span-7 min-w-0'>
                  <div
                    className='truncate'
                    style={{
                      color: 'var(--mw-brand-white)',
                      fontSize: '15.5px',
                      fontWeight: 600,
                    }}
                  >
                    {s.label}
                  </div>
                  <div
                    className='truncate mt-0.5'
                    style={{
                      color: isLeaking
                        ? 'color-mix(in oklch, var(--mw-signal-red) 65%, transparent)'
                        : 'var(--mw-white-60)',
                      fontSize: '13px',
                    }}
                  >
                    {s.note}
                  </div>
                </div>
                <div className='col-span-3 flex justify-end'>
                  {isLeaking ? (
                    <span
                      className='inline-flex items-center gap-1 px-2 py-1 rounded-full border'
                      style={{
                        backgroundColor: 'var(--mw-signal-red-10)',
                        color: 'var(--mw-signal-red)',
                        borderColor: 'var(--mw-signal-red-30)',
                        fontSize: '9.5px',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                      }}
                    >
                      <span
                        className='w-1 h-1 rounded-full'
                        style={{
                          backgroundColor: 'var(--mw-signal-red)',
                          boxShadow: 'var(--mw-glow-red)',
                        }}
                      />
                      LEAKING
                    </span>
                  ) : (
                    <span
                      className='inline-flex items-center gap-1 px-2 py-1 rounded-full border'
                      style={{
                        backgroundColor: 'var(--mw-signal-amber-10)',
                        color: 'var(--mw-signal-amber)',
                        borderColor: 'var(--mw-signal-amber-25)',
                        fontSize: '9.5px',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                      }}
                    >
                      <span
                        className='w-1 h-1 rounded-full'
                        style={{ backgroundColor: 'var(--mw-signal-amber)' }}
                      />
                      UNOWNED
                    </span>
                  )}
                </div>
              </li>
            );
          })}
        </ul>

        <div
          className='mt-5 pt-4 border-t grid grid-cols-3 gap-3'
          style={{ borderColor: 'var(--mw-white-08)' }}
        >
          <div className='flex items-center gap-1.5'>
            <span
              className='w-1.5 h-1.5 rounded-full'
              style={{ backgroundColor: 'var(--mw-signal-red)' }}
            />
            <span style={{ color: 'var(--mw-signal-red)', fontSize: '12px', fontWeight: 600 }}>
              {leakingCount} leaking
            </span>
          </div>
          <div className='text-center' style={{ color: 'var(--mw-white-50)', fontSize: '12px' }}>
            {unownedCount} unowned
          </div>
          <div
            className='flex items-center justify-end gap-1.5'
            style={{ color: 'var(--mw-signal-cyan)', fontSize: '12px', fontWeight: 600 }}
          >
            <span
              className='w-1.5 h-1.5 rounded-full animate-pulse'
              style={{
                backgroundColor: 'var(--mw-signal-cyan)',
                boxShadow: 'var(--mw-glow-cyan)',
              }}
            />
            Pulled toward system
          </div>
        </div>
      </div>

      <div
        className='mw-glow-halo mw-glow-halo--cyan'
        style={{ bottom: '-1.5rem', left: '-1rem', right: '3rem', height: '3rem' }}
        aria-hidden='true'
      />
    </div>
  );
}

// =============================================================================
// 02 · Leak diagnosis — 3-lane handoff board
// =============================================================================

const LEAK_LANES: ReadonlyArray<{
  label: string;
  accent: string;
  stageSummary: string;
  mainLeak: string;
  moments: ReadonlyArray<{ icon: LucideIcon; title: string; note: string }>;
}> = [
  {
    label: 'Found',
    accent: 'var(--mw-signal-teal)',
    stageSummary: 'Demand arrives. Not all of it lands.',
    mainLeak: 'Found by some. Missed by the rest.',
    moments: [
      {
        icon: Search,
        title: 'Local search incomplete',
        note: 'A competitor shows first. The right business sits on page two — or not at all.',
      },
      {
        icon: FileText,
        title: "Service pages don't answer the question",
        note: "Visitor lands, reads a paragraph, can't tell if it's the right team. Closes the tab.",
      },
    ],
  },
  {
    label: 'Captured',
    accent: 'var(--mw-signal-amber)',
    stageSummary: 'Enquiries arrive. The handoffs break.',
    mainLeak: 'Comes in. Nobody owns the full picture.',
    moments: [
      {
        icon: Inbox,
        title: 'Enquiries land in the wrong place',
        note: 'Form to one inbox. Call to a phone. Message somewhere else.',
      },
      {
        icon: Clock,
        title: 'First response is too slow',
        note: 'The lead cools before anyone picks it up.',
      },
      {
        icon: History,
        title: 'Follow-up depends on memory',
        note: 'Old quotes go quiet. Jobs go to whoever replies first.',
      },
    ],
  },
  {
    label: 'Proven',
    accent: 'var(--mw-signal-purple)',
    stageSummary: 'Good work happens. Evidence disappears.',
    mainLeak: 'Job done. Proof never captured.',
    moments: [
      {
        icon: Star,
        title: 'Review moment passes unused',
        note: 'Job complete, customer happy — nobody asked at the right moment.',
      },
      {
        icon: Repeat,
        title: 'No loop back into the system',
        note: 'Completed work and patient experience never become visible proof.',
      },
    ],
  },
];

function HomeLeakDiagnosis() {
  return (
    <section
      id='recognition'
      className='py-24'
      style={{ backgroundColor: 'var(--mw-bg-mist)' }}
      aria-label='Where work usually slips'
    >
      <div className='max-w-[1240px] mx-auto px-8'>
        <div className='grid grid-cols-12 gap-10 mb-16'>
          <div className='col-span-12 lg:col-span-6'>
            <div
              className='mw-text-eyebrow uppercase mb-5'
              style={{
                color: 'var(--mw-text-subtle)',
                letterSpacing: '0.16em',
                fontSize: '11.5px',
                fontWeight: 600,
              }}
            >
              What is actually happening
            </div>
            <h2
              style={{
                color: 'var(--mw-text-primary)',
                fontSize: '52px',
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
              }}
            >
              The business is working.
              <br />
              <span style={{ color: 'var(--mw-text-secondary)' }}>
                The system around it is leaking.
              </span>
            </h2>
            <p
              className='mt-6 max-w-[480px]'
              style={{ color: 'var(--mw-text-subtle)', fontSize: '15.5px', lineHeight: 1.7 }}
            >
              None of these gaps looks dramatic alone. Together, they decide whether demand becomes
              booked work, kept appointments, proof, and repeat enquiries.
            </p>
          </div>
          <div className='col-span-12 lg:col-span-5 lg:col-start-8 flex items-end'>
            <p style={{ color: 'var(--mw-text-secondary)', fontSize: '17px', lineHeight: 1.65 }}>
              Not a dramatic failure. A steady drip across the path from someone searching online to
              a job done and a review captured. Each step works on its own. The handoffs between
              them do not.
            </p>
          </div>
        </div>

        <div
          className='relative rounded-2xl overflow-hidden border'
          style={{
            backgroundColor: 'var(--mw-bg-page)',
            borderColor: 'var(--mw-border-light)',
            boxShadow: 'var(--mw-shadow-card-soft-lg)',
          }}
        >
          {/* Lane header strip */}
          <div
            className='hidden lg:grid grid-cols-3 border-b'
            style={{ borderColor: 'var(--mw-border-light)' }}
          >
            {LEAK_LANES.map((lane, i) => (
              <div
                key={lane.label}
                className='flex items-center gap-3 px-10 py-4'
                style={{
                  borderRight:
                    i < LEAK_LANES.length - 1 ? '1px solid var(--mw-border-light)' : 'none',
                  background: `color-mix(in oklch, ${lane.accent} 3%, transparent)`,
                }}
              >
                <span
                  className='w-2 h-2 rounded-full shrink-0'
                  style={{
                    background: lane.accent,
                    boxShadow: `0 0 8px color-mix(in oklch, ${lane.accent} 60%, transparent)`,
                  }}
                />
                <span
                  style={{
                    color: lane.accent,
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                  }}
                >
                  {lane.label.toUpperCase()}
                </span>
                <span
                  className='truncate ml-1'
                  style={{ color: 'var(--mw-text-subtle)', fontSize: '12px' }}
                >
                  — {lane.stageSummary}
                </span>
              </div>
            ))}
          </div>

          {/* Three lanes */}
          <div
            className='grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x'
            style={{ borderColor: 'var(--mw-border-light)' }}
          >
            {LEAK_LANES.map((lane, i) => (
              <div key={lane.label} className='relative p-6 lg:p-10 flex flex-col'>
                {/* Top accent stripe */}
                <div
                  className='mw-lane-accent absolute top-0 left-0 right-0'
                  style={{ ['--mw-lane-color' as string]: lane.accent }}
                />

                {/* Stage label — mobile only */}
                <div className='flex items-center gap-2 mb-5 lg:hidden'>
                  <span className='w-2 h-2 rounded-full' style={{ background: lane.accent }} />
                  <span
                    style={{
                      color: lane.accent,
                      fontSize: '12px',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                    }}
                  >
                    {lane.label.toUpperCase()}
                  </span>
                </div>

                <div
                  className='mb-7'
                  style={{
                    color: 'var(--mw-text-primary)',
                    fontSize: '22px',
                    fontWeight: 700,
                    lineHeight: 1.25,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {lane.mainLeak}
                </div>

                <div className='space-y-5 flex-1'>
                  {lane.moments.map(m => {
                    const Icon = m.icon;
                    return (
                      <div key={m.title} className='flex gap-3.5'>
                        <div
                          className='w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5'
                          style={{
                            background: `color-mix(in oklch, ${lane.accent} 7%, transparent)`,
                            border: `1px solid color-mix(in oklch, ${lane.accent} 16%, transparent)`,
                            color: lane.accent,
                          }}
                        >
                          <Icon size={14} strokeWidth={1.5} aria-hidden='true' />
                        </div>
                        <div>
                          <div
                            style={{
                              color: 'var(--mw-text-primary)',
                              fontSize: '15px',
                              fontWeight: 600,
                              lineHeight: 1.3,
                            }}
                          >
                            {m.title}
                          </div>
                          <div
                            className='mt-1'
                            style={{
                              color: 'var(--mw-text-subtle)',
                              fontSize: '13.5px',
                              lineHeight: 1.55,
                            }}
                          >
                            {m.note}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className='mt-8 flex items-center gap-2'>
                  <span className='w-1.5 h-1.5 rounded-full' style={{ background: lane.accent }} />
                  <span style={{ color: lane.accent, fontSize: '11.5px', fontWeight: 700 }}>
                    {lane.moments.length} gaps in this stage
                  </span>
                </div>

                {/* Handoff arrow chip between lanes */}
                {i < LEAK_LANES.length - 1 && (
                  <div
                    className='mw-handoff-chip hidden lg:flex absolute z-10'
                    style={{ right: '-1.25rem', top: '50%', transform: 'translateY(-50%)' }}
                    aria-hidden='true'
                  >
                    →
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom strip */}
          <div
            className='border-t px-6 lg:px-10 py-7 lg:py-8'
            style={{
              borderColor: 'var(--mw-border-light)',
              backgroundImage:
                'linear-gradient(to right, color-mix(in oklch, var(--mw-bg-mist) 50%, var(--mw-bg-page)), var(--mw-bg-page))',
            }}
          >
            <div className='grid grid-cols-12 gap-6 items-center'>
              <div className='col-span-12 lg:col-span-8'>
                <div
                  style={{
                    color: 'var(--mw-text-primary)',
                    fontSize: '22px',
                    fontWeight: 700,
                    lineHeight: 1.3,
                    letterSpacing: '-0.02em',
                  }}
                >
                  Seven gaps. Three handoffs. Together they decide how much of what comes in
                  actually becomes paid work or kept appointments.
                </div>
                <div
                  className='mt-3'
                  style={{
                    color: 'var(--mw-text-secondary)',
                    fontSize: '15px',
                    lineHeight: 1.65,
                  }}
                >
                  This is the shape of the leak. Not a dramatic failure — it is the space between
                  each step where the handoff breaks.
                </div>
              </div>
              <div className='col-span-12 lg:col-span-4 flex lg:justify-end'>
                <div
                  className='inline-flex items-center gap-2.5 px-5 py-3.5 rounded-xl border'
                  style={{
                    backgroundImage:
                      'linear-gradient(to right, color-mix(in oklch, var(--mw-signal-cyan) 12%, transparent), color-mix(in oklch, var(--mw-signal-teal) 8%, transparent))',
                    borderColor: 'var(--mw-signal-cyan-30)',
                    color: 'var(--mw-brand-secondary)',
                    fontSize: '14px',
                    fontWeight: 700,
                  }}
                >
                  <span
                    className='w-2 h-2 rounded-full'
                    style={{
                      background: 'var(--mw-signal-cyan)',
                      boxShadow: 'var(--mw-glow-cyan)',
                    }}
                  />
                  The fix is the system between the steps
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// 03 · Foundation — 3-layer stacked website system
// =============================================================================

const FOUNDATION_MIDDLE: ReadonlyArray<{ icon: LucideIcon; label: string; note: string }> = [
  { icon: Inbox, label: 'Capture', note: 'All channels in' },
  { icon: Workflow, label: 'Routing', note: 'Right person, right time' },
  { icon: Repeat, label: 'Follow-up', note: 'On schedule, not memory' },
  { icon: History, label: 'Tracking', note: "What's working" },
  { icon: Star, label: 'Proof', note: 'Reviews at the moment' },
];

function HomeFoundation() {
  return (
    <section
      className='py-28'
      style={{ backgroundColor: 'var(--mw-bg-page)' }}
      aria-label='The website is the surface; the structure underneath catches the work'
    >
      <div className='max-w-[1240px] mx-auto px-8'>
        <div className='grid grid-cols-12 gap-10 items-center'>
          <div className='col-span-12 lg:col-span-5'>
            <div
              className='mw-text-eyebrow uppercase mb-5'
              style={{
                color: 'var(--mw-signal-teal)',
                letterSpacing: '0.16em',
                fontSize: '11.5px',
                fontWeight: 600,
              }}
            >
              Foundation
            </div>
            <h2
              style={{
                color: 'var(--mw-text-primary)',
                fontSize: '48px',
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
              }}
            >
              The website is the surface.
              <br />
              <span style={{ color: 'var(--mw-text-secondary)' }}>
                The structure underneath is what catches the work.
              </span>
            </h2>
            <p
              className='mt-7 max-w-[460px]'
              style={{
                color: 'var(--mw-text-secondary)',
                fontSize: '16px',
                lineHeight: 1.65,
              }}
            >
              A website alone does not fix missed calls, slow replies, scattered forms, or invisible
              follow-up. But it is often the first place those problems show up.
            </p>
          </div>

          <div className='col-span-12 lg:col-span-7'>
            {/* Top — visible surface */}
            <div
              className='rounded-2xl p-6'
              style={{
                backgroundColor: 'var(--mw-bg-page)',
                border: '2px solid var(--mw-border-light)',
                boxShadow: 'var(--mw-shadow-card)',
              }}
            >
              <div className='flex items-center gap-4 mb-5'>
                <div
                  className='w-12 h-12 rounded-xl flex items-center justify-center'
                  style={{
                    backgroundColor: 'var(--mw-bg-mist)',
                    border: '1px solid var(--mw-border-light)',
                    color: 'var(--mw-text-secondary)',
                  }}
                >
                  <Globe size={20} strokeWidth={1.5} aria-hidden='true' />
                </div>
                <div className='flex-1'>
                  <div
                    className='mw-text-eyebrow uppercase'
                    style={{
                      color: 'var(--mw-text-subtle)',
                      letterSpacing: '0.14em',
                      fontSize: '10.5px',
                      fontWeight: 600,
                    }}
                  >
                    Surface
                  </div>
                  <div
                    className='mt-0.5'
                    style={{
                      color: 'var(--mw-text-primary)',
                      fontSize: '16px',
                      fontWeight: 600,
                    }}
                  >
                    Visible website
                  </div>
                </div>
                <div style={{ color: 'var(--mw-text-subtle)', fontSize: '12.5px' }}>
                  What the visitor sees
                </div>
              </div>
              <div className='grid grid-cols-3 gap-2'>
                {['Service pages', 'Local coverage', 'Contact & enquiry'].map(item => (
                  <div
                    key={item}
                    className='rounded-lg px-3 py-2.5 text-center'
                    style={{
                      backgroundColor: 'var(--mw-bg-mist)',
                      border: '1px solid var(--mw-border-light)',
                      color: 'var(--mw-text-secondary)',
                      fontSize: '12px',
                      fontWeight: 500,
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* connector */}
            <div className='flex flex-col items-center gap-1 my-2'>
              <div
                className='w-px h-5'
                style={{
                  backgroundColor: 'color-mix(in oklch, var(--mw-border-light) 80%, transparent)',
                }}
              />
              <div
                className='mw-text-eyebrow uppercase'
                style={{
                  color: 'var(--mw-text-subtle)',
                  letterSpacing: '0.12em',
                  fontSize: '9px',
                  fontWeight: 700,
                }}
              >
                underneath
              </div>
              <div
                className='w-px h-5'
                style={{
                  backgroundColor: 'color-mix(in oklch, var(--mw-border-light) 80%, transparent)',
                }}
              />
            </div>

            {/* Middle — working layers */}
            <div
              className='rounded-2xl p-6'
              style={{
                backgroundImage:
                  'linear-gradient(to bottom, color-mix(in oklch, var(--mw-signal-cyan) 8%, var(--mw-bg-page)), var(--mw-bg-mist))',
                border: '2px solid var(--mw-signal-cyan-30)',
                boxShadow: '0 4px 20px color-mix(in oklch, var(--mw-signal-cyan) 10%, transparent)',
              }}
            >
              <div
                className='mw-text-eyebrow uppercase mb-4'
                style={{
                  color: 'color-mix(in oklch, var(--mw-signal-cyan) 70%, var(--mw-brand-primary))',
                  letterSpacing: '0.14em',
                  fontSize: '10.5px',
                  fontWeight: 700,
                }}
              >
                What runs underneath
              </div>
              <div className='grid grid-cols-2 sm:grid-cols-5 gap-3'>
                {FOUNDATION_MIDDLE.map(m => {
                  const Icon = m.icon;
                  return (
                    <div
                      key={m.label}
                      className='rounded-xl p-4 flex flex-col items-center text-center gap-2'
                      style={{
                        backgroundColor: 'var(--mw-bg-page)',
                        border:
                          '1px solid color-mix(in oklch, var(--mw-signal-cyan) 18%, transparent)',
                        boxShadow: '0 2px 8px rgba(8, 17, 31, 0.04)',
                      }}
                    >
                      <div
                        className='w-11 h-11 rounded-lg flex items-center justify-center'
                        style={{
                          backgroundColor:
                            'color-mix(in oklch, var(--mw-signal-cyan) 14%, transparent)',
                          color:
                            'color-mix(in oklch, var(--mw-signal-cyan) 50%, var(--mw-brand-primary))',
                        }}
                      >
                        <Icon size={18} strokeWidth={1.5} aria-hidden='true' />
                      </div>
                      <div
                        style={{
                          color: 'var(--mw-brand-secondary)',
                          fontSize: '12.5px',
                          fontWeight: 600,
                        }}
                      >
                        {m.label}
                      </div>
                      <div
                        style={{
                          color: 'var(--mw-text-secondary)',
                          fontSize: '11px',
                          lineHeight: 1.35,
                        }}
                      >
                        {m.note}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* connector */}
            <div className='flex flex-col items-center gap-1 my-2'>
              <div
                className='w-px h-5'
                style={{
                  backgroundColor: 'color-mix(in oklch, var(--mw-border-light) 80%, transparent)',
                }}
              />
              <div
                className='w-1.5 h-1.5 rounded-full'
                style={{
                  backgroundColor: 'var(--mw-signal-cyan)',
                  boxShadow: 'var(--mw-glow-cyan)',
                }}
              />
              <div
                className='w-px h-5'
                style={{
                  backgroundColor: 'color-mix(in oklch, var(--mw-border-light) 80%, transparent)',
                }}
              />
            </div>

            {/* Bottom — foundation */}
            <div
              className='relative rounded-2xl p-7 overflow-hidden'
              style={{
                backgroundImage:
                  'linear-gradient(135deg, var(--mw-brand-primary), var(--mw-brand-secondary))',
                border:
                  '1px solid var(--mw-signal-cyan-20, color-mix(in oklch, var(--mw-signal-cyan) 20%, transparent))',
                boxShadow: 'var(--mw-shadow-foundation)',
              }}
            >
              <div className='mw-grid-texture-32 absolute inset-0' aria-hidden='true' />
              <div className='relative flex items-center gap-4'>
                <div
                  className='w-12 h-12 rounded-xl flex items-center justify-center'
                  style={{
                    backgroundColor: 'var(--mw-white-08)',
                    border: '1px solid var(--mw-white-15)',
                  }}
                >
                  <div
                    className='w-2.5 h-2.5 rounded-full'
                    style={{
                      backgroundColor: 'var(--mw-signal-cyan)',
                      boxShadow: '0 0 12px var(--mw-signal-cyan)',
                    }}
                  />
                </div>
                <div className='flex-1'>
                  <div
                    className='mw-text-eyebrow uppercase'
                    style={{
                      color: 'var(--mw-white-50)',
                      letterSpacing: '0.14em',
                      fontSize: '10.5px',
                      fontWeight: 600,
                    }}
                  >
                    Foundation
                  </div>
                  <div
                    className='mt-0.5'
                    style={{
                      color: 'var(--mw-brand-white)',
                      fontSize: '16px',
                      fontWeight: 600,
                    }}
                  >
                    Smart Website Systems
                  </div>
                </div>
                <div style={{ color: 'var(--mw-white-55)', fontSize: '12.5px' }}>
                  The working business structure
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// 04 · Five protections — flagship SWS + 4 connected protections (2x2)
// =============================================================================

const FLAGSHIP = {
  icon: Globe,
  name: 'Smart Website Systems',
  role: 'The operating surface',
  role_note: 'Where work lands, routes, and converts',
  handles:
    'Visitors, service questions, enquiry capture, page clarity — the central surface everything else connects to',
  state: 'Foundation',
  accent: 'var(--mw-signal-cyan)',
  slug: 'smart-website-systems',
};

const PROTECTIONS: ReadonlyArray<{
  icon: LucideIcon;
  name: string;
  journeyStage: string;
  handles: string;
  state: string;
  accent: string;
  slug: string;
}> = [
  {
    icon: MapPin,
    name: 'Local SEO Authority Systems',
    journeyStage: 'Found',
    handles: 'Local search presence, service-area relevance, signal trust',
    state: 'Broadcasting',
    accent: 'var(--mw-signal-teal)',
    slug: 'local-seo-authority',
  },
  {
    icon: PhoneCall,
    name: 'Lead Response & Handling Systems',
    journeyStage: 'Answered',
    handles: 'Calls, forms, missed calls, messages, after-hours response',
    state: 'First response',
    accent: 'var(--mw-signal-amber)',
    slug: 'lead-response-handling',
  },
  {
    icon: Workflow,
    name: 'Follow-Up & CRM Systems',
    journeyStage: 'Followed Up',
    handles: 'Owner, status, next step, quote and consultation follow-up',
    state: 'Tracking',
    accent: 'var(--mw-signal-green)',
    slug: 'follow-up-crm',
  },
  {
    icon: Star,
    name: 'Reputation & Review Systems',
    journeyStage: 'Proven',
    handles: 'Review request timing, feedback routing, completed work as proof',
    state: 'Accumulating',
    accent: 'var(--mw-signal-purple)',
    slug: 'reputation-review-systems',
  },
];

function HomeProtections() {
  return (
    <section
      className='py-20'
      style={{
        backgroundColor: 'var(--mw-bg-page)',
        borderTop: '1px solid var(--mw-bg-page-hover)',
      }}
      aria-label='One website system, four connected protections around it'
    >
      <div className='max-w-[1240px] mx-auto px-8'>
        <div className='grid grid-cols-12 gap-10 mb-14'>
          <div className='col-span-12 lg:col-span-6'>
            <div
              className='mw-text-eyebrow uppercase mb-5'
              style={{
                color: 'var(--mw-text-subtle)',
                letterSpacing: '0.16em',
                fontSize: '11.5px',
                fontWeight: 600,
              }}
            >
              The handling system
            </div>
            <h2
              style={{
                color: 'var(--mw-text-primary)',
                fontSize: '52px',
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
              }}
            >
              One website system.
              <br />
              <span style={{ color: 'var(--mw-text-secondary)' }}>
                Four connected protections around it.
              </span>
            </h2>
          </div>
          <div className='col-span-12 lg:col-span-5 lg:col-start-8 flex items-end'>
            <p style={{ color: 'var(--mw-text-secondary)', fontSize: '17px', lineHeight: 1.65 }}>
              Smart Website Systems is the flagship — where decisions form. The four protections
              around it handle what happens before, during, and after the enquiry. None depends on
              someone remembering.
            </p>
          </div>
        </div>

        {/* Flagship — Smart Website Systems anchors the grid */}
        <div className='mb-5'>
          <div
            className='relative rounded-2xl p-7'
            style={{
              backgroundImage:
                'linear-gradient(to right, color-mix(in oklch, var(--mw-signal-cyan) 4%, var(--mw-bg-page)), var(--mw-bg-page))',
              border: '2px solid var(--mw-signal-cyan-30)',
              boxShadow: '0 4px 30px color-mix(in oklch, var(--mw-signal-cyan) 8%, transparent)',
            }}
          >
            <div
              className='absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl'
              style={{
                backgroundImage:
                  'linear-gradient(to bottom, var(--mw-signal-cyan), var(--mw-signal-teal))',
              }}
            />
            <div className='flex items-start justify-between gap-6 flex-wrap'>
              <div className='flex items-start gap-5'>
                <div
                  className='w-14 h-14 rounded-xl flex items-center justify-center shrink-0'
                  style={{
                    backgroundColor: 'color-mix(in oklch, var(--mw-signal-cyan) 10%, transparent)',
                    border: '1px solid var(--mw-signal-cyan-30)',
                    color: 'var(--mw-signal-cyan)',
                  }}
                >
                  <FLAGSHIP.icon size={22} strokeWidth={1.5} aria-hidden='true' />
                </div>
                <div>
                  <div className='flex items-center gap-3 mb-1'>
                    <span
                      className='inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border'
                      style={{
                        backgroundColor: 'var(--mw-signal-cyan-10)',
                        borderColor: 'var(--mw-signal-cyan-30)',
                        color: 'var(--mw-brand-secondary)',
                        fontSize: '10.5px',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                      }}
                    >
                      <span
                        className='w-1.5 h-1.5 rounded-full'
                        style={{
                          backgroundColor: 'var(--mw-signal-cyan)',
                          boxShadow: 'var(--mw-glow-cyan)',
                        }}
                      />
                      Flagship · {FLAGSHIP.state}
                    </span>
                  </div>
                  <div
                    style={{
                      color: 'var(--mw-text-primary)',
                      fontSize: '22px',
                      fontWeight: 700,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {FLAGSHIP.name}
                  </div>
                  <div
                    className='mt-1'
                    style={{
                      color: 'var(--mw-text-secondary)',
                      fontSize: '14px',
                      fontWeight: 500,
                    }}
                  >
                    {FLAGSHIP.role} ·{' '}
                    <span style={{ color: 'var(--mw-text-subtle)' }}>{FLAGSHIP.role_note}</span>
                  </div>
                </div>
              </div>
              <div className='max-w-[440px]'>
                <div
                  className='mw-text-eyebrow uppercase mb-1.5'
                  style={{
                    color: 'var(--mw-text-subtle)',
                    letterSpacing: '0.14em',
                    fontSize: '9.5px',
                    fontWeight: 700,
                  }}
                >
                  What it handles
                </div>
                <div
                  style={{
                    color: 'var(--mw-text-primary)',
                    fontSize: '14.5px',
                    lineHeight: 1.6,
                  }}
                >
                  {FLAGSHIP.handles}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer / patient journey rail */}
        <div
          className='mb-4 hidden lg:flex items-center rounded-xl px-6 py-3.5 overflow-hidden'
          style={{
            backgroundImage:
              'linear-gradient(to right, var(--mw-bg-mist), var(--mw-bg-page), var(--mw-bg-mist))',
            border: '1px solid var(--mw-border-light)',
          }}
        >
          {['Found', 'Understood', 'Captured', 'Answered', 'Followed up', 'Proven'].map(
            (step, i) => (
              <div key={step} className='flex items-center shrink-0'>
                <span
                  style={{
                    color: 'var(--mw-text-secondary)',
                    fontSize: '12.5px',
                    fontWeight: 600,
                  }}
                >
                  {step}
                </span>
                {i < 5 && (
                  <span
                    className='mx-3'
                    style={{ color: 'var(--mw-border-light)', fontSize: '12px' }}
                  >
                    →
                  </span>
                )}
              </div>
            )
          )}
          <span
            className='ml-auto shrink-0 pl-6'
            style={{
              color: 'var(--mw-text-subtle)',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.08em',
            }}
          >
            Customer or patient journey
          </span>
        </div>

        {/* Four protections — 2x2 grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {PROTECTIONS.map((s, i) => {
            const Icon = s.icon;
            return (
              <a
                key={s.name}
                href={`/services/${s.slug}`}
                className='group relative rounded-2xl p-7 overflow-hidden transition-all hover:shadow-[0_8px_30px_rgba(8,17,31,0.06)]'
                style={{
                  backgroundImage:
                    'linear-gradient(to bottom, var(--mw-bg-page), color-mix(in oklch, var(--mw-bg-mist) 50%, var(--mw-bg-page)))',
                  border: '1px solid var(--mw-border-light)',
                }}
              >
                <div
                  className='absolute left-0 top-0 bottom-0 w-0.5 rounded-l-2xl'
                  style={{ background: s.accent }}
                />

                <div className='flex items-start justify-between mb-5'>
                  <span
                    className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full'
                    style={{
                      background: `color-mix(in oklch, ${s.accent} 7%, transparent)`,
                      border: `1px solid color-mix(in oklch, ${s.accent} 18%, transparent)`,
                      color: s.accent,
                      fontSize: '10px',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                    }}
                  >
                    <span className='w-1 h-1 rounded-full' style={{ background: s.accent }} />
                    {s.journeyStage}
                  </span>
                  <span
                    className='tabular-nums'
                    style={{
                      color: 'var(--mw-text-subtle)',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                    }}
                  >
                    0{i + 2}
                  </span>
                </div>

                <div className='flex items-start gap-4'>
                  <div
                    className='w-12 h-12 rounded-xl flex items-center justify-center shrink-0'
                    style={{
                      background: `color-mix(in oklch, ${s.accent} 8%, transparent)`,
                      border: `1px solid color-mix(in oklch, ${s.accent} 20%, transparent)`,
                      color: s.accent,
                    }}
                  >
                    <Icon size={20} strokeWidth={1.5} aria-hidden='true' />
                  </div>
                  <div>
                    <div
                      style={{
                        color: 'var(--mw-text-primary)',
                        fontSize: '17px',
                        fontWeight: 600,
                        lineHeight: 1.3,
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {s.name}
                    </div>
                    <div
                      className='mt-2'
                      style={{
                        color: 'var(--mw-text-secondary)',
                        fontSize: '14.5px',
                        lineHeight: 1.6,
                      }}
                    >
                      {s.handles}
                    </div>
                  </div>
                </div>

                <div className='mt-5 flex items-center gap-1.5'>
                  <span className='w-1.5 h-1.5 rounded-full' style={{ background: s.accent }} />
                  <span style={{ color: s.accent, fontSize: '11px', fontWeight: 600 }}>
                    {s.state}
                  </span>
                </div>

                <div
                  className='absolute left-5 right-5 bottom-0 h-px'
                  style={{
                    backgroundImage: `linear-gradient(90deg, transparent, color-mix(in oklch, ${s.accent} 50%, transparent), transparent)`,
                  }}
                />
              </a>
            );
          })}
        </div>

        <div className='mt-10 flex items-center justify-between flex-wrap gap-4 px-2'>
          <div style={{ color: 'var(--mw-text-secondary)', fontSize: '14px' }}>
            Most businesses already have parts of this. The work is connecting them.
          </div>
          <a
            href='#cta'
            className='inline-flex items-center gap-2 pb-1 transition-colors'
            style={{
              color: 'var(--mw-text-primary)',
              borderBottom:
                '1px solid color-mix(in oklch, var(--mw-text-primary) 30%, transparent)',
              fontSize: '13.5px',
              fontWeight: 600,
            }}
          >
            See where your stack is incomplete
            <ArrowRight size={14} strokeWidth={1.5} aria-hidden='true' />
          </a>
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// 05 · Fit / Not for — diagnostic two-column panel
// =============================================================================

const FIT_FOR: ReadonlyArray<string> = [
  'Established service business or specialist clinic',
  'Real enquiries, jobs, appointments, or consultations already exist',
  'Quote, booking, or follow-up handling has visible gaps',
  'Owner wants practical structure, not a prettier website',
  'Long-term stability and compounding trust matter more than a launch event',
];

const FIT_NOT_FOR: ReadonlyArray<string> = [
  'Cheapest possible website package',
  'Guaranteed rankings or "dominate Google" expectations',
  'AI chatbot framed as the offer instead of practical handling',
  'Looks-only redesign with no business context',
  'Healthcare buyer expecting EMR, compliance, or treatment-outcome claims',
];

function HomeFit() {
  return (
    <section
      className='py-24'
      style={{ backgroundColor: 'var(--mw-bg-mist)' }}
      aria-label='Who this is built for'
    >
      <div className='max-w-[1240px] mx-auto px-8'>
        <div className='grid grid-cols-12 gap-10 mb-12'>
          <div className='col-span-12 lg:col-span-6'>
            <div
              className='mw-text-eyebrow uppercase mb-5'
              style={{
                color: 'var(--mw-text-subtle)',
                letterSpacing: '0.16em',
                fontSize: '11.5px',
                fontWeight: 600,
              }}
            >
              Built for
            </div>
            <h2
              style={{
                color: 'var(--mw-text-primary)',
                fontSize: '44px',
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
              }}
            >
              Established service businesses.
              <br />
              <span style={{ color: 'var(--mw-text-secondary)' }}>
                Specialist clinics that take their practice seriously.
              </span>
            </h2>
          </div>
          <div className='col-span-12 lg:col-span-5 lg:col-start-8 flex items-end'>
            <p
              style={{
                color: 'var(--mw-text-secondary)',
                fontSize: '16px',
                lineHeight: 1.65,
              }}
            >
              The work suits operators where moving parts already exist and the cost of leakage is
              real. It does not suit looks-only, rankings-only, or AI-hype buyers.
            </p>
          </div>
        </div>

        <div className='grid gap-5 lg:grid-cols-2'>
          <div
            className='rounded-2xl p-6 lg:p-8'
            style={{
              backgroundColor: 'var(--mw-signal-teal-10)',
              border: '1px solid var(--mw-signal-teal-30)',
            }}
          >
            <p
              className='mw-text-eyebrow uppercase'
              style={{
                color: 'var(--mw-signal-teal)',
                letterSpacing: '0.16em',
                fontSize: '11.5px',
                fontWeight: 700,
              }}
            >
              For
            </p>
            <ul className='mt-4 space-y-3'>
              {FIT_FOR.map(item => (
                <li
                  key={item}
                  className='flex items-start gap-3'
                  style={{
                    color: 'var(--mw-text-primary)',
                    fontSize: '14.5px',
                    lineHeight: 1.55,
                  }}
                >
                  <span
                    className='mt-0.5 grid size-5 shrink-0 place-items-center rounded-full'
                    style={{
                      backgroundColor: 'var(--mw-signal-teal-30)',
                      color: 'var(--mw-signal-teal)',
                    }}
                  >
                    <Check size={11} strokeWidth={2.25} aria-hidden='true' />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div
            className='rounded-2xl p-6 lg:p-8'
            style={{
              backgroundColor: 'var(--mw-bg-page)',
              border: '1px solid var(--mw-border-light)',
            }}
          >
            <p
              className='mw-text-eyebrow uppercase'
              style={{
                color: 'var(--mw-signal-red)',
                letterSpacing: '0.16em',
                fontSize: '11.5px',
                fontWeight: 700,
              }}
            >
              Not for
            </p>
            <ul className='mt-4 space-y-3'>
              {FIT_NOT_FOR.map(item => (
                <li
                  key={item}
                  className='flex items-start gap-3'
                  style={{
                    color: 'var(--mw-text-secondary)',
                    fontSize: '14.5px',
                    lineHeight: 1.55,
                  }}
                >
                  <span
                    className='mw-text-eyebrow mt-0.5 grid size-5 shrink-0 place-items-center rounded-full tabular-nums'
                    style={{
                      backgroundColor: 'var(--mw-signal-red-10)',
                      border: '1px solid var(--mw-signal-red-30)',
                      color: 'var(--mw-signal-red)',
                    }}
                  >
                    ×
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// 06 · FAQ
// =============================================================================

function HomeFAQ() {
  const { faq } = homepageData;
  return (
    <FAQSection
      ariaLabel='Frequently asked questions'
      eyebrow='Questions'
      title={faq.heading}
      description={faq.description}
      items={faq.items.map((item, index) => ({
        id: `home-faq-${index + 1}`,
        question: item.question,
        answer: item.answer,
      }))}
      tone='mist'
      variant='split'
    />
  );
}

// =============================================================================
// 07 · Final diagnostic CTA
// =============================================================================

function HomeCTA() {
  const { cta } = homepageData;
  return (
    <DecisionPanel
      heading={{
        eyebrow: cta.eyebrow,
        title: cta.heading.title,
        subtitle: cta.heading.muted,
        description: cta.heading.description,
      }}
      actions={cta.actions.map(action => ({ label: action.label, href: action.href }))}
      expectations={cta.expectations}
      expectationsLabel='What we will look at'
      reassurance={cta.footer}
    />
  );
}

// =============================================================================
// Hero
// =============================================================================

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
          icon: <ArrowRight size={16} strokeWidth={1.5} aria-hidden='true' />,
        },
        {
          label: hero.secondaryAction.label,
          href: hero.secondaryAction.href,
          variant: 'ghost',
          icon: <ArrowRight size={14} strokeWidth={1.5} aria-hidden='true' />,
        },
      ]}
      chips={hero.chips.map(chip => ({ label: chip.label, accent: chip.accent }))}
      visual={<HeroSignalSurface />}
    />
  );
}

// =============================================================================
// Page
// =============================================================================

export default function Homepage() {
  return (
    <CTARegistryProvider pageId='page:home' pageType='page' primarySystem='smart-website-systems'>
      <main>
        <HomeHero />
        <HomeLeakDiagnosis />
        <HomeFoundation />
        <HomeProtections />
        <HomeFit />
        <HomeFAQ />
        <HomeCTA />
      </main>
    </CTARegistryProvider>
  );
}
