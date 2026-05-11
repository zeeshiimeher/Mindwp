import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { IndustryDetailRendererProps } from '@/domains/industries/types';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

export function PlumbingCompaniesIndustryRenderer({ data }: IndustryDetailRendererProps) {
  const primarySystem = data.systems[0];
  if (!primarySystem) {
    throw new Error(`[${data.slug}] Missing primary industry system.`);
  }
  const contactHref = buildIndustryContactHref({ system: primarySystem, slug: data.slug });
  const actions = [{ label: PRIMARY_CTA_LABEL, href: contactHref, variant: 'white' }] as const;
  return (
    <main className='industry-detail-page'>
      <HeroFrame
        badge={data.hero.badge}
        title={data.hero.title}
        description={data.hero.description}
        actions={actions}
        chips={data.hero.list}
        chipDotVariant='neutral'
      />
      <SectionFrame
        heading={{
          kicker: 'Two kinds of work, one phone',
          title: 'Emergency calls and quoted work should not land in the same holding pattern.',
          description:
            'A burst pipe at 9pm and a bathroom-renovation quote both arrive on the same line. They want different things. Treat them the same and the urgent customer rings someone else while the quote sits on a notepad.',
        }}
        tone='white'
      >
        <div className='hs-split-2'>
          <article className='hs-thread hs-thread--lost' aria-label='Emergency call lost'>
            <header className='hs-thread__head'>
              <span>Emergency intake · no playbook</span>
              <span>Outcome · lost</span>
            </header>
            <div className='hs-thread__msg hs-thread__msg--in'>
              <span className='hs-thread__time'>21:14</span>
              <div>
                <span className='hs-thread__author'>Customer</span>
                <p className='hs-thread__bubble'>
                  Hi — burst hot-water service in the laundry. Need someone tonight if possible.
                </p>
              </div>
            </div>
            <div className='hs-thread__msg hs-thread__msg--system'>
              <span className='hs-thread__time'>21:14</span>
              <div>
                <p className='hs-thread__bubble'>Voicemail · no callback queued</p>
              </div>
            </div>
            <div className='hs-thread__msg hs-thread__msg--in'>
              <span className='hs-thread__time'>21:31</span>
              <div>
                <span className='hs-thread__author'>Customer</span>
                <p className='hs-thread__bubble'>Are you guys able to come or not?</p>
              </div>
            </div>
            <div className='hs-thread__msg hs-thread__msg--in'>
              <span className='hs-thread__time'>21:48</span>
              <div>
                <span className='hs-thread__author'>Customer</span>
                <p className='hs-thread__bubble'>Got someone else. Cancel that.</p>
              </div>
            </div>
            <span className='hs-thread__verdict'>Job lost · 34 minutes silent</span>
          </article>
          <article className='hs-thread hs-thread--won' aria-label='Emergency call held'>
            <header className='hs-thread__head'>
              <span>Emergency intake · with playbook</span>
              <span>Outcome · held</span>
            </header>
            <div className='hs-thread__msg hs-thread__msg--in'>
              <span className='hs-thread__time'>21:14</span>
              <div>
                <span className='hs-thread__author'>Customer</span>
                <p className='hs-thread__bubble'>
                  Hi — burst hot-water service in the laundry. Need someone tonight if possible.
                </p>
              </div>
            </div>
            <div className='hs-thread__msg hs-thread__msg--out'>
              <span className='hs-thread__time'>21:18</span>
              <div>
                <span className='hs-thread__author'>Office · auto-ack</span>
                <p className='hs-thread__bubble'>
                  Got it. Marking emergency. Liam is on call — paging now with your address.
                </p>
              </div>
            </div>
            <div className='hs-thread__msg hs-thread__msg--out'>
              <span className='hs-thread__time'>21:32</span>
              <div>
                <span className='hs-thread__author'>Liam · on-call tech</span>
                <p className='hs-thread__bubble'>
                  En route. ETA 22:05. Bringing isolation valves. Reply STOP to cancel.
                </p>
              </div>
            </div>
            <div className='hs-thread__msg hs-thread__msg--in'>
              <span className='hs-thread__time'>21:33</span>
              <div>
                <span className='hs-thread__author'>Customer</span>
                <p className='hs-thread__bubble'>Brilliant, thanks. Door open, side gate.</p>
              </div>
            </div>
            <span className='hs-thread__verdict'>Job held · acknowledgement in 4 min</span>
          </article>
        </div>
      </SectionFrame>
      <SectionFrame
        heading={{
          kicker: 'After-hours, in detail',
          title: 'The leak that decides whether the customer stays a customer.',
          description:
            'Same call from above, traced as a system. Each step has an owner, a timestamp, and a written record the customer can see.',
        }}
        tone='gradient-mist'
      >
        <div className='hs-afterlog'>
          <header className='hs-afterlog__head'>
            <span>After-hours playbook · run #4128</span>
            <span>
              Status · <strong>Holding</strong>
            </span>
          </header>
          <div className='hs-afterlog__step'>
            <span className='hs-afterlog__t'>21:14:02</span>
            <span className='hs-afterlog__node' />
            <div className='hs-afterlog__what'>
              <span className='hs-afterlog__title'>Inbound call · ring-out</span>
              <p className='hs-afterlog__detail'>
                Voicemail captured. Transcript parsed. Tag <code>EMERGENCY · HWS</code>.
              </p>
            </div>
          </div>
          <div className='hs-afterlog__step'>
            <span className='hs-afterlog__t'>21:14:46</span>
            <span className='hs-afterlog__node' />
            <div className='hs-afterlog__what'>
              <span className='hs-afterlog__title'>Customer ack sent</span>
              <p className='hs-afterlog__detail'>
                SMS to caller: confirms receipt, names on-call tech, gives a reply path.
              </p>
            </div>
          </div>
          <div className='hs-afterlog__step hs-afterlog__step--alert'>
            <span className='hs-afterlog__t'>21:15:11</span>
            <span className='hs-afterlog__node' />
            <div className='hs-afterlog__what'>
              <span className='hs-afterlog__title'>Tech paged</span>
              <p className='hs-afterlog__detail'>
                On-call rotation hits Liam. Address, transcript, and a 1-tap accept land on his
                phone.
              </p>
            </div>
          </div>
          <div className='hs-afterlog__step hs-afterlog__step--ok'>
            <span className='hs-afterlog__t'>21:32:08</span>
            <span className='hs-afterlog__node' />
            <div className='hs-afterlog__what'>
              <span className='hs-afterlog__title'>ETA in writing</span>
              <p className='hs-afterlog__detail'>
                Tech accepts. ETA <code>22:05</code> sent to customer. Job card opens with full
                history attached.
              </p>
            </div>
          </div>
          <div className='hs-afterlog__step hs-afterlog__step--ok'>
            <span className='hs-afterlog__t'>22:48:30</span>
            <span className='hs-afterlog__node' />
            <div className='hs-afterlog__what'>
              <span className='hs-afterlog__title'>Sign-off captured</span>
              <p className='hs-afterlog__detail'>
                Photo, parts, signature on tech phone. Invoice queued. Review request scheduled for
                the morning, not the night.
              </p>
            </div>
          </div>
        </div>
      </SectionFrame>
      <SectionFrame
        heading={{
          kicker: 'The other lane',
          title: 'Quoted work [[muted:doesn’t lose to the next emergency.]]',
          description:
            'Bathroom rebuilds, hot-water replacements, commercial roughs — the lane that needs a quote and a date, kept in its own rhythm.',
        }}
        tone='white'
      >
        <div className='hs-split-2'>
          <div className='hs-prose'>
            <p>
              The quoted lane has its own intake board. Every enquiry opens with a
              <strong> quote-stage tag</strong> and a site-visit window the office can keep. Two
              short follow-ups, plainly written, with an off switch.
            </p>
            <p>
              The dispatcher stops being the bottleneck. Auto-routing carries the obvious cases.
              They override anything that needs judgement in one tap.
            </p>
          </div>
          <article className='hs-plumbing-lane hs-plumbing-lane--quoted'>
            <span className='hs-plumbing-lane__label'>Quoted lane</span>
            <h3 className='hs-plumbing-lane__headline'>The work that needs a quote and a date.</h3>
            <ol className='hs-plumbing-lane__steps'>
              <li>Enquiry lands. Captured into the same board with a quote-stage tag.</li>
              <li>Site visit is booked into a window the office can actually keep.</li>
              <li>Quote goes out the same day, not after the next emergency.</li>
              <li>Two short follow-ups, plainly written, with an off switch.</li>
            </ol>
          </article>
        </div>
      </SectionFrame>
      <SectionFrame
        heading={{
          kicker: 'What changes',
          title: 'A line that holds both kinds of work without one drowning the other.',
        }}
        tone='mist'
      >
        <ul className='hs-metrics'>
          <li className='hs-metric'>
            <span className='hs-metric__label'>After-hours ack</span>
            <span className='hs-metric__value'>~4 min</span>
            <span className='hs-metric__delta hs-metric__delta--up'>From silent voicemail</span>
          </li>
          <li className='hs-metric'>
            <span className='hs-metric__label'>ETA in writing</span>
            <span className='hs-metric__value'>Within 20 min</span>
            <span className='hs-metric__delta hs-metric__delta--up'>Stops the second call</span>
          </li>
          <li className='hs-metric'>
            <span className='hs-metric__label'>Quote follow-up</span>
            <span className='hs-metric__value'>Auto · 2 nudges</span>
            <span className='hs-metric__delta hs-metric__delta--up'>Was inconsistent</span>
          </li>
          <li className='hs-metric'>
            <span className='hs-metric__label'>Dispatcher overrides</span>
            <span className='hs-metric__value'>1 tap</span>
            <span className='hs-metric__delta hs-metric__delta--up'>Judgement preserved</span>
          </li>
        </ul>
      </SectionFrame>
      <SectionFrame
        heading={{
          kicker: 'How this lands',
          title: 'AI Lead Handling answers the call. The other systems hand off into it.',
        }}
        tone='white'
      >
        <div className='hs-bridge'>
          <div className='hs-bridge__copy'>
            <span className='hs-bridge__label'>Lead system for plumbing</span>
            <h3 className='hs-bridge__title'>AI Lead Handling</h3>
            <p className='hs-bridge__note'>
              Lead handling owns the first response. CRM holds the dispatch board and follow-up.
              Reputation triggers from sign-off. The website routes intake into the same place.
            </p>
          </div>
          <ul className='hs-bridge__systems'>
            <li>CRM &amp; Automation</li>
            <li>Smart Website Systems</li>
            <li>Reputation &amp; Reviews</li>
            <li>Local SEO Authority</li>
          </ul>
        </div>
      </SectionFrame>
      <FAQSection
        eyebrow={data.faq.header.kicker}
        title={data.faq.header.title}
        description={data.faq.header.description}
        items={data.faq.items}
        variant='split'
      />
      <DecisionPanel
        heading={data.cta.heading}
        actions={actions}
        expectations={data.cta.expectations}
        reassurance={data.cta.reassurance}
      />
    </main>
  );
}
