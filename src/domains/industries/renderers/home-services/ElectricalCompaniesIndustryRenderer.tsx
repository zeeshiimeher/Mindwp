import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { IndustryDetailRendererProps } from '@/domains/industries/types';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

export function ElectricalCompaniesIndustryRenderer({ data }: IndustryDetailRendererProps) {
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
          kicker: 'Three different operating tempos',
          title:
            'Commercial visits, residential quotes, and parts follow-up need different handling.',
          description:
            'A morning of commercial maintenance does not run like an afternoon of residential quotes. A parts-pending job does not run like either. The lane that mixes them is the lane where compliance certs go missing and projects quietly cool.',
        }}
        tone='mist'
      >
        <div className='hs-stack'>
          <div className='hs-kanban' role='figure' aria-label='Sample work board'>
            <section className='hs-kanban__col hs-kanban__col--commercial'>
              <header className='hs-kanban__col-head'>
                <span className='hs-kanban__col-name'>Commercial visits</span>
                <span className='hs-kanban__count'>06</span>
              </header>
              <article className='hs-kanban__card'>
                <span className='hs-kanban__card-id'>JOB-3318</span>
                <span className='hs-kanban__card-title'>Switchboard upgrade · Bayside FM</span>
                <span className='hs-kanban__card-meta'>
                  <span>Tue 09:00</span>
                  <span>Liam · Van 4</span>
                </span>
                <span className='hs-kanban__card-state hs-kanban__card-state--ok'>Cert filed</span>
              </article>
              <article className='hs-kanban__card'>
                <span className='hs-kanban__card-id'>JOB-3322</span>
                <span className='hs-kanban__card-title'>Quarterly RCD test · Carlton Plaza</span>
                <span className='hs-kanban__card-meta'>
                  <span>Wed 13:30</span>
                  <span>Site contact: J. Reed</span>
                </span>
                <span className='hs-kanban__card-state'>Booked</span>
              </article>
              <article className='hs-kanban__card'>
                <span className='hs-kanban__card-id'>JOB-3327</span>
                <span className='hs-kanban__card-title'>Emergency lighting audit · Vic Foods</span>
                <span className='hs-kanban__card-meta'>
                  <span>Fri 08:00</span>
                </span>
                <span className='hs-kanban__card-state hs-kanban__card-state--wait'>
                  Awaiting site induction
                </span>
              </article>
            </section>
            <section className='hs-kanban__col hs-kanban__col--residential'>
              <header className='hs-kanban__col-head'>
                <span className='hs-kanban__col-name'>Residential quotes</span>
                <span className='hs-kanban__count'>11</span>
              </header>
              <article className='hs-kanban__card'>
                <span className='hs-kanban__card-id'>QUO-1142</span>
                <span className='hs-kanban__card-title'>Kitchen rewire · 14 Marlow Cres</span>
                <span className='hs-kanban__card-meta'>
                  <span>Visited Mon</span>
                  <span>Quote out: Tue 16:40</span>
                </span>
                <span className='hs-kanban__card-state hs-kanban__card-state--ok'>
                  Sent · 1 nudge
                </span>
              </article>
              <article className='hs-kanban__card'>
                <span className='hs-kanban__card-id'>QUO-1148</span>
                <span className='hs-kanban__card-title'>EV charger · 22 Roseberry Ave</span>
                <span className='hs-kanban__card-meta'>
                  <span>Visited Wed</span>
                  <span>Quote due: today</span>
                </span>
                <span className='hs-kanban__card-state hs-kanban__card-state--wait'>
                  Quote pending
                </span>
              </article>
              <article className='hs-kanban__card'>
                <span className='hs-kanban__card-id'>QUO-1131</span>
                <span className='hs-kanban__card-title'>Lighting refit · 8 Hampton St</span>
                <span className='hs-kanban__card-meta'>
                  <span>Sent · 8 days ago</span>
                </span>
                <span className='hs-kanban__card-state hs-kanban__card-state--cold'>
                  Cooling · last nudge sent
                </span>
              </article>
            </section>
            <section className='hs-kanban__col hs-kanban__col--parts'>
              <header className='hs-kanban__col-head'>
                <span className='hs-kanban__col-name'>Parts pending</span>
                <span className='hs-kanban__count'>04</span>
              </header>
              <article className='hs-kanban__card'>
                <span className='hs-kanban__card-id'>JOB-3309</span>
                <span className='hs-kanban__card-title'>Stove iso. switch · 47 Sydney Rd</span>
                <span className='hs-kanban__card-meta'>
                  <span>Part ETA · Thu</span>
                </span>
                <span className='hs-kanban__card-state hs-kanban__card-state--wait'>
                  Customer notified
                </span>
              </article>
              <article className='hs-kanban__card'>
                <span className='hs-kanban__card-id'>JOB-3287</span>
                <span className='hs-kanban__card-title'>Ceiling fan motor · 3 Davies St</span>
                <span className='hs-kanban__card-meta'>
                  <span>Part landed · today</span>
                </span>
                <span className='hs-kanban__card-state hs-kanban__card-state--ok'>
                  Auto-nudge sent
                </span>
              </article>
            </section>
          </div>
          <p className='hs-body-lede'>
            Three streams. One board. The office reads where each job actually is — not where it was
            when someone last wrote it down.
          </p>
        </div>
      </SectionFrame>
      <SectionFrame
        heading={{
          kicker: 'How the work actually flows',
          title: 'Three streams. [[muted:Each with its own rhythm.]]',
        }}
        tone='white'
      >
        <div className='hs-electrical-streams'>
          <article className='hs-electrical-stream hs-electrical-stream--commercial'>
            <span className='hs-electrical-stream__index'>Stream 01</span>
            <h3 className='hs-electrical-stream__name'>Commercial visits</h3>
            <span className='hs-electrical-stream__rhythm'>Booked window · 1–3 days</span>
            <p className='hs-electrical-stream__body'>
              Scheduled work for site managers and facilities teams. Compliance certs and
              after-visit paperwork are the deliverable, not just the visit itself.
            </p>
            <ul className='hs-electrical-stream__needs'>
              <li>Cert attached to the job card on the spot</li>
              <li>Site contact notified the moment work signs off</li>
            </ul>
          </article>
          <article className='hs-electrical-stream hs-electrical-stream--residential'>
            <span className='hs-electrical-stream__index'>Stream 02</span>
            <h3 className='hs-electrical-stream__name'>Residential quotes</h3>
            <span className='hs-electrical-stream__rhythm'>Quote &amp; follow-up · 1–6 days</span>
            <p className='hs-electrical-stream__body'>
              Project work that lives or dies on a quote going out the same day and a follow-up that
              does not feel pushy. Most slip in the gap between site visit and quote.
            </p>
            <ul className='hs-electrical-stream__needs'>
              <li>Quote out within the day, not the week</li>
              <li>Two short follow-ups with an off switch</li>
            </ul>
          </article>
          <article className='hs-electrical-stream hs-electrical-stream--parts'>
            <span className='hs-electrical-stream__index'>Stream 03</span>
            <h3 className='hs-electrical-stream__name'>Parts pending</h3>
            <span className='hs-electrical-stream__rhythm'>Open ticket · until parts land</span>
            <p className='hs-electrical-stream__body'>
              Half-finished jobs waiting on supplier delivery. Easy to forget. The customer always
              remembers, and rings when nobody chased them.
            </p>
            <ul className='hs-electrical-stream__needs'>
              <li>One ticket per job, visible to the office</li>
              <li>Auto-nudge the moment the part lands</li>
            </ul>
          </article>
        </div>
      </SectionFrame>
      <SectionFrame
        heading={{
          kicker: 'Field-to-office handoff',
          title: 'Where compliance work usually goes missing.',
          description:
            'Three steps the cert has to survive. If any of them lives in a phone gallery, the cert is missing when the auditor asks.',
        }}
        tone='mist'
      >
        <div className='hs-trace'>
          <div className='hs-trace__node'>
            <span className='hs-trace__role'>Step 01 · Tech on site</span>
            <p className='hs-trace__what'>Job complete. Cert captured.</p>
            <p className='hs-trace__detail'>
              Cert and a photo recorded on the same app the office reads. No second system.
            </p>
            <span className='hs-trace__file'>cert-EL-2024-3318.pdf</span>
          </div>
          <span className='hs-trace__arrow' aria-hidden='true'>
            →
          </span>
          <div className='hs-trace__node'>
            <span className='hs-trace__role'>Step 02 · Job card</span>
            <p className='hs-trace__what'>Cert attaches to the customer record on the spot.</p>
            <p className='hs-trace__detail'>
              The office no longer has to chase the field for a paper copy. Audit-ready by default.
            </p>
            <span className='hs-trace__file'>JOB-3318 · attached</span>
          </div>
          <span className='hs-trace__arrow' aria-hidden='true'>
            →
          </span>
          <div className='hs-trace__node'>
            <span className='hs-trace__role'>Step 03 · Customer</span>
            <p className='hs-trace__what'>Sign-off email leaves before the truck.</p>
            <p className='hs-trace__detail'>
              Customer has the document before the truck leaves the street. Site contact CC’d on
              commercial work.
            </p>
            <span className='hs-trace__file'>email queued · 14:42</span>
          </div>
        </div>
      </SectionFrame>
      <SectionFrame
        heading={{
          kicker: 'What changes',
          title: 'Three streams that no longer fight for the same office time.',
        }}
        tone='white'
      >
        <ul className='hs-metrics'>
          <li className='hs-metric'>
            <span className='hs-metric__label'>Quotes out · day-of</span>
            <span className='hs-metric__value'>Most</span>
            <span className='hs-metric__delta hs-metric__delta--up'>Was inconsistent</span>
          </li>
          <li className='hs-metric'>
            <span className='hs-metric__label'>Compliance certs missing</span>
            <span className='hs-metric__value'>~0</span>
            <span className='hs-metric__delta hs-metric__delta--up'>Filed on site</span>
          </li>
          <li className='hs-metric'>
            <span className='hs-metric__label'>Parts-pending follow-up</span>
            <span className='hs-metric__value'>Auto</span>
            <span className='hs-metric__delta hs-metric__delta--up'>Was forgotten</span>
          </li>
          <li className='hs-metric'>
            <span className='hs-metric__label'>Streams in one view</span>
            <span className='hs-metric__value'>3 of 3</span>
            <span className='hs-metric__delta hs-metric__delta--up'>Single board</span>
          </li>
        </ul>
      </SectionFrame>
      <SectionFrame
        heading={{
          kicker: 'How this lands',
          title: 'AI Lead Handling answers the call. The other systems sit behind it.',
        }}
        tone='mist'
      >
        <div className='hs-bridge'>
          <div className='hs-bridge__copy'>
            <span className='hs-bridge__label'>Lead system for electrical</span>
            <h3 className='hs-bridge__title'>AI Lead Handling</h3>
            <p className='hs-bridge__note'>
              Lead handling answers fault calls and project enquiries with the same immediacy. CRM
              holds the streams and follow-up. Reputation runs after sign-off. The website routes
              intake into the same place.
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
