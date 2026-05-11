import type { CSSProperties } from 'react';

import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { IndustryDetailRendererProps } from '@/domains/industries/types';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

export function LandscapingCompaniesIndustryRenderer({ data }: IndustryDetailRendererProps) {
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
          kicker: 'In-season pressure',
          title: 'Spring quote requests arrive while the crew is already on site.',
          description:
            'The hedge is half-cut when the next quote enquiry lands. The truck is on the road when a new client tries to book a site visit. The week the operator is busiest is the same week the office is least able to answer.',
        }}
        tone='white'
      >
        <div className='hs-stack'>
          <div
            className='hs-monthbars'
            role='figure'
            aria-label='Sample year of intake versus conversion'
          >
            <ul className='hs-monthbars__legend'>
              <li>Intake</li>
              <li className='is-conv'>Quote → Booked</li>
              <li className='is-hold'>Off-season hold</li>
            </ul>
            <ol className='hs-monthbars__chart'>
              {[
                { m: 'Sep', intake: 95, conv: 38, hold: 0 },
                { m: 'Oct', intake: 88, conv: 52, hold: 0 },
                { m: 'Nov', intake: 74, conv: 64, hold: 0 },
                { m: 'Dec', intake: 56, conv: 78, hold: 0 },
                { m: 'Jan', intake: 48, conv: 70, hold: 0 },
                { m: 'Feb', intake: 42, conv: 60, hold: 0 },
                { m: 'Mar', intake: 36, conv: 32, hold: 22 },
                { m: 'Apr', intake: 28, conv: 18, hold: 34 },
                { m: 'May', intake: 22, conv: 12, hold: 44 },
                { m: 'Jun', intake: 18, conv: 8, hold: 56 },
                { m: 'Jul', intake: 16, conv: 6, hold: 64 },
                { m: 'Aug', intake: 28, conv: 12, hold: 48 },
              ].map(row => (
                <li key={row.m} className='hs-monthbars__col'>
                  <div className='hs-monthbars__stack'>
                    <span
                      className='hs-monthbars__bar'
                      style={{ ['--h' as string]: `${row.intake}%` } as CSSProperties}
                    />
                    <span
                      className='hs-monthbars__bar hs-monthbars__bar--conv'
                      style={{ ['--h' as string]: `${row.conv}%` } as CSSProperties}
                    />
                    {row.hold > 0 ? (
                      <span
                        className='hs-monthbars__bar hs-monthbars__bar--hold'
                        style={{ ['--h' as string]: `${row.hold}%` } as CSSProperties}
                      />
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
            <ol className='hs-monthbars__labels'>
              <li>Sep</li>
              <li>Oct</li>
              <li>Nov</li>
              <li>Dec</li>
              <li>Jan</li>
              <li>Feb</li>
              <li>Mar</li>
              <li>Apr</li>
              <li>May</li>
              <li>Jun</li>
              <li>Jul</li>
              <li>Aug</li>
            </ol>
          </div>
          <p className='hs-body-lede'>
            Intake spikes in spring. Conversion peaks in summer when the crew is already at full
            load. The hold rhythm in autumn-winter is what decides whether next spring starts hot or
            cold.
          </p>
        </div>
      </SectionFrame>
      <SectionFrame
        heading={{
          kicker: 'A landscaping year',
          title: 'Twelve months. [[muted:Four pressure shapes.]]',
        }}
        tone='gradient-mist'
      >
        <div className='hs-landscaping-arc'>
          <ol className='hs-landscaping-arc__seasons'>
            <li className='hs-landscaping-arc__season hs-landscaping-arc__season--spring'>
              <span className='hs-landscaping-arc__months'>Sep — Nov</span>
              <h3 className='hs-landscaping-arc__name'>Spring</h3>
              <p className='hs-landscaping-arc__shape'>
                Quote requests spike. Site visits stack up. Most lost work happens here, in the gap
                between an enquiry and a callback.
              </p>
              <span className='hs-landscaping-arc__pressure'>Intake pressure: high</span>
            </li>
            <li className='hs-landscaping-arc__season hs-landscaping-arc__season--summer'>
              <span className='hs-landscaping-arc__months'>Dec — Feb</span>
              <h3 className='hs-landscaping-arc__name'>Summer</h3>
              <p className='hs-landscaping-arc__shape'>
                The crew is at full load. Quotes from spring need to convert into work without the
                office stopping to chase them.
              </p>
              <span className='hs-landscaping-arc__pressure'>Conversion pressure: high</span>
            </li>
            <li className='hs-landscaping-arc__season hs-landscaping-arc__season--autumn'>
              <span className='hs-landscaping-arc__months'>Mar — May</span>
              <h3 className='hs-landscaping-arc__name'>Autumn</h3>
              <p className='hs-landscaping-arc__shape'>
                Maintenance contracts and clean-ups take over. The right re-contact in March is the
                difference between a steady winter and a quiet one.
              </p>
              <span className='hs-landscaping-arc__pressure'>Re-contact pressure: medium</span>
            </li>
            <li className='hs-landscaping-arc__season hs-landscaping-arc__season--winter'>
              <span className='hs-landscaping-arc__months'>Jun — Aug</span>
              <h3 className='hs-landscaping-arc__name'>Winter</h3>
              <p className='hs-landscaping-arc__shape'>
                The line is quiet. The system that holds last year’s clients now decides next
                spring. Old enquiries get one plain message, no offer, no countdown.
              </p>
              <span className='hs-landscaping-arc__pressure'>Hold pressure: low</span>
            </li>
          </ol>
        </div>
      </SectionFrame>
      <SectionFrame
        heading={{
          kicker: 'Where the season slips',
          title: 'A spring enquiry that landed [[muted:between hedge cuts.]]',
          description:
            'A real-shape moment. The phone, the form, and the message that should have arrived four minutes later but did not.',
        }}
        tone='white'
      >
        <div className='hs-split-2'>
          <article className='hs-thread hs-thread--lost' aria-label='Spring enquiry · lost'>
            <header className='hs-thread__head'>
              <span>Tue · Spring intake</span>
              <span>Outcome · lost</span>
            </header>
            <div className='hs-thread__msg hs-thread__msg--in'>
              <span className='hs-thread__time'>10:42</span>
              <div>
                <span className='hs-thread__author'>New caller · 0408…</span>
                <p className='hs-thread__bubble'>
                  Hi — looking for a quote on a hedge reshape and side-yard tidy. When could someone
                  come out?
                </p>
              </div>
            </div>
            <div className='hs-thread__msg hs-thread__msg--system'>
              <span className='hs-thread__time'>10:42</span>
              <div>
                <p className='hs-thread__bubble'>Voicemail · office closed for site morning</p>
              </div>
            </div>
            <div className='hs-thread__msg hs-thread__msg--in'>
              <span className='hs-thread__time'>11:51</span>
              <div>
                <span className='hs-thread__author'>Same caller · web form</span>
                <p className='hs-thread__bubble'>
                  Submitted via website. Free Wed afternoon or Thu morning.
                </p>
              </div>
            </div>
            <div className='hs-thread__msg hs-thread__msg--system'>
              <span className='hs-thread__time'>16:40</span>
              <div>
                <p className='hs-thread__bubble'>Truck back at yard · office staff already gone</p>
              </div>
            </div>
            <span className='hs-thread__verdict'>By Wed 9am, customer rang two competitors</span>
          </article>
          <div className='hs-stack'>
            <p className='hs-prose'>
              The same caller, same week, with one small change in the operating layer: an
              acknowledgement and a real callback window arrive while the crew is still on the
              hedge.
            </p>
            <div className='hs-phonemock' aria-label='Auto acknowledgement preview'>
              <div className='hs-phonemock__bar'>
                <span>10:46</span>
                <span>5G</span>
              </div>
              <div className='hs-phonemock__msg'>
                <p className='hs-phonemock__from'>From · Northwood Landscaping</p>
                <p>
                  Hi — got your message about the hedge reshape. Crew is on a job in Brunswick this
                  morning. Tara from the office will call you back between 1pm and 3pm with a
                  site-visit window. Reply STOP to opt out.
                </p>
                <p className='hs-phonemock__time'>SMS · 10:46</p>
              </div>
            </div>
          </div>
        </div>
      </SectionFrame>
      <SectionFrame
        heading={{
          kicker: 'What changes',
          title: 'A season the office can hold without depending on memory.',
        }}
        tone='mist'
      >
        <ul className='hs-metrics'>
          <li className='hs-metric'>
            <span className='hs-metric__label'>Spring ack time</span>
            <span className='hs-metric__value'>~4 min</span>
            <span className='hs-metric__delta hs-metric__delta--up'>From end-of-day callback</span>
          </li>
          <li className='hs-metric'>
            <span className='hs-metric__label'>Site visits booked · same week</span>
            <span className='hs-metric__value'>Most</span>
            <span className='hs-metric__delta hs-metric__delta--up'>Was hit-or-miss</span>
          </li>
          <li className='hs-metric'>
            <span className='hs-metric__label'>Off-season re-contact</span>
            <span className='hs-metric__value'>Calendar-driven</span>
            <span className='hs-metric__delta hs-metric__delta--up'>Was forgotten</span>
          </li>
          <li className='hs-metric'>
            <span className='hs-metric__label'>Owner evening admin</span>
            <span className='hs-metric__value'>Lower</span>
            <span className='hs-metric__delta hs-metric__delta--up'>Day closes itself</span>
          </li>
        </ul>
      </SectionFrame>
      <SectionFrame
        heading={{
          kicker: 'How this lands',
          title: 'The website is the hub. The other systems run from it.',
        }}
        tone='white'
      >
        <div className='hs-bridge'>
          <div className='hs-bridge__copy'>
            <span className='hs-bridge__label'>Lead system for landscaping</span>
            <h3 className='hs-bridge__title'>Smart Website Systems</h3>
            <p className='hs-bridge__note'>
              The website is where most landscaping enquiries decide to call. Lead handling answers
              them. CRM holds the seasonal calendar. Reputation runs after sign-off. Local SEO
              carries the visibility.
            </p>
          </div>
          <ul className='hs-bridge__systems'>
            <li>AI Lead Handling</li>
            <li>CRM &amp; Automation</li>
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
