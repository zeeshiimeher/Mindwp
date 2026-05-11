import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { IndustryDetailRendererProps } from '@/domains/industries/types';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

export function RoofingCompaniesIndustryRenderer({ data }: IndustryDetailRendererProps) {
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

      {/* 1 — Storm pressure recognition */}
      <SectionFrame
        heading={{
          kicker: 'After a storm',
          title:
            'Inspection calls arrive faster [[muted:than most roofing teams can sort them.]]',
          description:
            'A storm passes overnight. By breakfast the line is full, the form inbox is stacking up and the crew is already on a roof somewhere across town.',
        }}
        tone='white'
      >
        <div className='hs-roofing-pressure'>
          <div className='hs-roofing-pressure__copy'>
            <p>
              The first 72 hours after a storm decides the month. Inspection requests come in
              through three or four channels at once. Every one of them is somebody&rsquo;s house.
            </p>
            <p>
              The office tries to triage by ear. The crew tries to fit inspections between booked
              jobs. Nothing slows the rain down.
            </p>
          </div>
          <aside className='hs-roofing-pressure__scene' aria-hidden='true'>
            <div className='hs-roofing-pressure__sky'>
              <span className='hs-roofing-pressure__bolt'>storm front</span>
              <span className='hs-roofing-pressure__count'>
                <strong>47</strong>
                <em>intake events · 12h</em>
              </span>
            </div>
            <ul className='hs-roofing-pressure__rows'>
              <li>
                <span>06:11</span>Inbound · 14 Marlow Cres
              </li>
              <li>
                <span>06:24</span>Web form · 8 Hampton St
              </li>
              <li>
                <span>06:33</span>Referral · 22 Roseberry Ave
              </li>
              <li>
                <span>06:38</span>Inbound · 47 Sydney Rd · tarp
              </li>
              <li className='is-risk'>
                <span>06:42</span>Voicemail · no callback in 38 min
              </li>
            </ul>
          </aside>
        </div>
      </SectionFrame>

      {/* 2 — Dominant: storm-to-inspection path */}
      <SectionFrame
        heading={{
          kicker: 'Storm to inspection to quote',
          title: 'The route every job has to travel — [[muted:and where it stalls.]]',
        }}
        tone='dark'
      >
        <div className='hs-roofing-route'>
          <ol className='hs-roofing-route__stops'>
            <li className='hs-roofing-route__stop' data-tone='intake'>
              <span className='hs-roofing-route__num'>01</span>
              <h3>Intake</h3>
              <p>Calls, forms, referrals, insurer follow-ups. All landing inside one hour.</p>
              <span className='hs-roofing-route__count'>47 / 12h</span>
            </li>
            <li className='hs-roofing-route__stop' data-tone='triage'>
              <span className='hs-roofing-route__num'>02</span>
              <h3>Triage</h3>
              <p>Tarp now, inspect tomorrow, quote later. Sorting happens in someone&rsquo;s head.</p>
              <span className='hs-roofing-route__count'>by ear</span>
            </li>
            <li className='hs-roofing-route__stop hs-roofing-route__stop--stall' data-tone='inspect'>
              <span className='hs-roofing-route__num'>03</span>
              <h3>Inspection</h3>
              <p>Crew on roof. Twelve photos. A voice note. The next address is waiting.</p>
              <span className='hs-roofing-route__count'>photos on phones</span>
            </li>
            <li className='hs-roofing-route__stop hs-roofing-route__stop--stall' data-tone='quote'>
              <span className='hs-roofing-route__num'>04</span>
              <h3>Quote</h3>
              <p>Written tonight, sent tomorrow, chased Friday. Insurer bundle still pending.</p>
              <span className='hs-roofing-route__count'>2&ndash;4 days</span>
            </li>
            <li className='hs-roofing-route__stop' data-tone='callback'>
              <span className='hs-roofing-route__num'>05</span>
              <h3>Callback</h3>
              <p>Homeowner rings to ask where the quote is. The office checks the notebook.</p>
              <span className='hs-roofing-route__count'>at risk</span>
            </li>
          </ol>
          <p className='hs-roofing-route__note'>
            Two of those five stops are where the storm week stops being a system and starts being
            a memory game.
          </p>
        </div>
      </SectionFrame>

      {/* 3 — Quote / follow-up gap */}
      <SectionFrame
        heading={{
          kicker: 'Where it slips',
          title: 'Photos pile up on phones [[muted:while quotes wait for a clear hour.]]',
        }}
        tone='mist'
        layout='split'
        ratio='40-60'
      >
        <div className='hs-roofing-gap'>
          <div className='hs-roofing-gap__phones' aria-hidden='true'>
            <article className='hs-roofing-gap__phone'>
              <header>JOB-3318</header>
              <ul>
                <li>roof-front.jpg</li>
                <li>ridge-detail.jpg</li>
                <li>scope.txt</li>
                <li>tile-count.jpg</li>
              </ul>
              <footer>tech phone · Tue 14:38</footer>
            </article>
            <article className='hs-roofing-gap__phone'>
              <header>JOB-3322</header>
              <ul>
                <li>flashing.jpg</li>
                <li>gutter.jpg</li>
                <li>voice-note.m4a</li>
              </ul>
              <footer>tech phone · Tue 16:02</footer>
            </article>
            <article className='hs-roofing-gap__phone'>
              <header>JOB-3325</header>
              <ul>
                <li>front-elev.jpg</li>
                <li>damage-1.jpg</li>
                <li>damage-2.jpg</li>
                <li>damage-3.jpg</li>
                <li>aami-form.pdf</li>
              </ul>
              <footer>tech phone · Wed 08:11</footer>
            </article>
          </div>
          <div className='hs-roofing-gap__copy'>
            <p>
              The tech says <strong>tomorrow</strong>. The truck rolls to the next job. The photos
              stay on the phone. The office writes the callback into a notebook.
            </p>
            <p>
              By Friday afternoon two more storms-worth of work is on top of it. The customer
              rings on Monday for a quote that never went out.
            </p>
            <p className='hs-roofing-gap__pull'>
              Three jobs that should have been job cards from minute one are still notebook lines
              behind eleven other notebook lines.
            </p>
          </div>
        </div>
      </SectionFrame>

      {/* 4 — Photos & details handoff */}
      <SectionFrame
        heading={{
          kicker: 'Where it stops slipping',
          title:
            'Photos and scope land in the job card [[muted:before the truck reaches the next address.]]',
        }}
        tone='white'
      >
        <div className='hs-roofing-handoff'>
          <article className='hs-roofing-handoff__side hs-roofing-handoff__side--field'>
            <header>
              <span className='hs-roofing-handoff__tag'>On the roof</span>
              <h3>Tech finishes the inspection</h3>
            </header>
            <ul>
              <li>Photos attach to JOB-3318 from the phone</li>
              <li>Scope ticked from the standard list</li>
              <li>Voice note captured for the office</li>
              <li>Customer signature requested on phone</li>
            </ul>
          </article>
          <div className='hs-roofing-handoff__bridge' aria-hidden='true'>
            <span className='hs-roofing-handoff__arrow' />
            <span className='hs-roofing-handoff__time'>under 2 minutes</span>
          </div>
          <article className='hs-roofing-handoff__side hs-roofing-handoff__side--office'>
            <header>
              <span className='hs-roofing-handoff__tag'>In the office</span>
              <h3>The job card opens itself</h3>
            </header>
            <ul>
              <li>Photos and scope visible on the dispatch board</li>
              <li>Quote draft generated against the priced template</li>
              <li>Insurer bundle ready in one click</li>
              <li>Callback scheduled, not remembered</li>
            </ul>
          </article>
        </div>
      </SectionFrame>

      {/* 5 — Handled storm week */}
      <SectionFrame
        heading={{
          kicker: 'A handled storm week',
          title: 'Five days the office can actually run.',
        }}
        tone='gradient-mist'
      >
        <div className='hs-roofing-week'>
          <ol className='hs-roofing-week__days'>
            <li>
              <span className='hs-roofing-week__label'>Mon</span>
              <span className='hs-roofing-week__count'>14</span>
              <span className='hs-roofing-week__type'>storm intake · triage</span>
              <span className='hs-roofing-week__bar' data-load='heavy' />
            </li>
            <li>
              <span className='hs-roofing-week__label'>Tue</span>
              <span className='hs-roofing-week__count'>11</span>
              <span className='hs-roofing-week__type'>inspection · quote</span>
              <span className='hs-roofing-week__bar' data-load='heavy' />
            </li>
            <li>
              <span className='hs-roofing-week__label'>Wed</span>
              <span className='hs-roofing-week__count'>9</span>
              <span className='hs-roofing-week__type'>insurer bundles · callbacks</span>
              <span className='hs-roofing-week__bar' data-load='steady' />
            </li>
            <li>
              <span className='hs-roofing-week__label'>Thu</span>
              <span className='hs-roofing-week__count'>7</span>
              <span className='hs-roofing-week__type'>quotes accepted · scheduling</span>
              <span className='hs-roofing-week__bar' data-load='steady' />
            </li>
            <li>
              <span className='hs-roofing-week__label'>Fri</span>
              <span className='hs-roofing-week__count'>5</span>
              <span className='hs-roofing-week__type'>completed · review request</span>
              <span className='hs-roofing-week__bar' data-load='light' />
            </li>
          </ol>
          <p className='hs-roofing-week__note'>
            The week stays busy. It just stops being a guess about what got missed.
          </p>
        </div>
      </SectionFrame>

      {/* 6 — Homeowner update timing */}
      <SectionFrame
        heading={{
          kicker: 'After the work is done',
          title: 'The homeowner hears from you [[muted:before they have to chase.]]',
        }}
        tone='white'
        layout='split'
        ratio='40-60'
      >
        <div className='hs-roofing-loop'>
          <ol className='hs-roofing-loop__steps'>
            <li>
              <span className='hs-roofing-loop__when'>Same hour</span>
              <h3>Inspection booked</h3>
              <p>SMS confirmation with the window. Nobody waits to find out if the call landed.</p>
            </li>
            <li>
              <span className='hs-roofing-loop__when'>Same day</span>
              <h3>Quote and photos sent</h3>
              <p>Scope, photos, insurer bundle. One link the homeowner can forward.</p>
            </li>
            <li>
              <span className='hs-roofing-loop__when'>Day before work</span>
              <h3>Reminder + crew name</h3>
              <p>Time, address, who&rsquo;s arriving. No mystery van in the driveway.</p>
            </li>
            <li>
              <span className='hs-roofing-loop__when'>After completion</span>
              <h3>Photos + review ask</h3>
              <p>Before-and-after photos. Review request the day the job feels like it landed.</p>
            </li>
          </ol>
        </div>
      </SectionFrame>

      {/* 7 — Short system bridge */}
      <SectionFrame
        heading={{
          kicker: 'How this lands',
          title: 'Three systems hold the storm week. [[muted:The rest stays roofing.]]',
        }}
        tone='dark'
      >
        <div className='hs-roofing-bridge'>
          <article>
            <h3>AI Lead Handling</h3>
            <p>
              First touch on every storm enquiry, day or night. Nothing sits as a voicemail until
              the office opens.
            </p>
          </article>
          <article>
            <h3>CRM &amp; Automation</h3>
            <p>
              One job card. Photos, scope, quote and insurer bundle live together instead of on a
              tech&rsquo;s phone.
            </p>
          </article>
          <article>
            <h3>Reputation &amp; Reviews</h3>
            <p>
              The review ask goes out the day the job lands well. Storm work compounds into proof
              for the next storm.
            </p>
          </article>
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
