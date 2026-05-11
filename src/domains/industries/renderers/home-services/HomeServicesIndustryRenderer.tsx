import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { IndustryCategoryRendererProps } from '@/domains/industries/types';
import { InternalLink } from '@/global/InternalLink';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

export function HomeServicesIndustryRenderer({ data }: IndustryCategoryRendererProps) {
  const primarySystem = data.systems[0];
  if (!primarySystem) {
    throw new Error(`[${data.slug}] Missing primary industry system.`);
  }
  const contactHref = buildIndustryContactHref({ system: primarySystem, slug: data.slug });
  const actions = [{ label: PRIMARY_CTA_LABEL, href: contactHref, variant: 'white' }] as const;
  return (
    <main className='industry-category-page'>
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
          kicker: 'Where the work actually happens',
          title: 'Field, office, after-hours. [[muted:Three places. One business.]]',
          description:
            'Home services share one operating geography. Most leaks happen at the seam between these three places.',
        }}
        tone='white'
      >
        <div className='hs-zonemap' role='figure' aria-label='Home services operating geography'>
          <article className='hs-zonemap__zone hs-zonemap__zone--field'>
            <span className='hs-zonemap__zone-label'>Field</span>
            <h3 className='hs-zonemap__zone-title'>Where the crew is</h3>
            <p className='hs-zonemap__zone-shape'>
              Trucks, jobs, customer doors. Most of the day’s actual work happens here. Photos,
              parts, and sign-offs live on phones until the office sees them.
            </p>
            <ul className='hs-zonemap__signals'>
              <li>
                <span>09:42</span>Photo bundle filed · JOB-3318
              </li>
              <li>
                <span>10:11</span>Parts noted · awaiting supplier
              </li>
              <li>
                <span>11:04</span>Sign-off captured on tech phone
              </li>
            </ul>
          </article>
          <article className='hs-zonemap__zone hs-zonemap__zone--office'>
            <span className='hs-zonemap__zone-label'>Office</span>
            <h3 className='hs-zonemap__zone-title'>One or two people deep</h3>
            <p className='hs-zonemap__zone-shape'>
              Inbound calls, dispatch, quotes, supplier follow-up, invoices. The office is small and
              constantly being interrupted by whichever channel rings loudest.
            </p>
            <ul className='hs-zonemap__signals'>
              <li>
                <span>09:18</span>3 inbound calls · 1 voicemail
              </li>
              <li>
                <span>10:42</span>Quote sent · QUO-1142
              </li>
              <li>
                <span>14:00</span>Dispatch board · 1 urgent insert
              </li>
            </ul>
          </article>
          <article className='hs-zonemap__zone hs-zonemap__zone--after'>
            <span className='hs-zonemap__zone-label'>After hours</span>
            <h3 className='hs-zonemap__zone-title'>Nobody is at the office</h3>
            <p className='hs-zonemap__zone-shape'>
              Evenings, weekends, public holidays. Demand still arrives. The customer who picks
              another operator at 9pm rarely comes back in the morning.
            </p>
            <ul className='hs-zonemap__signals'>
              <li>
                <span>21:14</span>Burst HWS · ack sent in 4 min
              </li>
              <li>
                <span>21:32</span>On-call tech ETA confirmed
              </li>
              <li>
                <span>22:48</span>Sign-off · review queued for am
              </li>
            </ul>
          </article>
        </div>
      </SectionFrame>
      <SectionFrame
        heading={{
          kicker: 'Three places where every trade leaks',
          title: 'Different trades. [[muted:Same three failure points.]]',
        }}
        tone='mist'
      >
        <div className='hs-category-shared'>
          <article className='hs-category-shared__item'>
            <h4>The first response</h4>
            <p>
              Whether the call is a burst pipe, a storm-damage roof, or a spring quote, the operator
              who acknowledges first is the one who books the work.
            </p>
          </article>
          <article className='hs-category-shared__item'>
            <h4>The handoff to the field</h4>
            <p>
              Every trade has a moment where a job leaves the office for a truck. The trades that
              hold that handoff in writing keep the work clean.
            </p>
          </article>
          <article className='hs-category-shared__item'>
            <h4>The follow-up nobody owns</h4>
            <p>
              Quote follow-up, service-plan reminders, seasonal re-contact. The work that is
              nobody’s job at 4:30 on a Friday is the work that decides next quarter.
            </p>
          </article>
        </div>
      </SectionFrame>
      <SectionFrame
        heading={{
          kicker: 'Choose your trade',
          title: 'Five operating shapes. [[muted:Pick the one that matches your week.]]',
          description:
            'Each detail page is written for that trade specifically — not a re-skin of the same template.',
        }}
        tone='white'
      >
        <div className='hs-category-routes'>
          <InternalLink
            href='/industries/home-services/roofing-companies'
            className='hs-category-route hs-category-route--roofing'
          >
            <span className='hs-category-route__trade'>Roofing</span>
            <h3 className='hs-category-route__name'>Storm-week surge</h3>
            <p className='hs-category-route__cue'>
              When a weather event decides the next 72 hours and the inspection backlog.
            </p>
            <span className='hs-category-route__signal'>Lead system · CRM &amp; Automation</span>
            <span className='hs-category-route__go'>See the shape</span>
          </InternalLink>
          <InternalLink
            href='/industries/home-services/hvac-companies'
            className='hs-category-route hs-category-route--hvac'
          >
            <span className='hs-category-route__trade'>HVAC</span>
            <h3 className='hs-category-route__name'>Seasonal &amp; service plans</h3>
            <p className='hs-category-route__cue'>
              When the first hot week breaks the phone and renewals quietly age out.
            </p>
            <span className='hs-category-route__signal'>Lead system · CRM &amp; Automation</span>
            <span className='hs-category-route__go'>See the shape</span>
          </InternalLink>
          <InternalLink
            href='/industries/home-services/plumbing-companies'
            className='hs-category-route hs-category-route--plumbing'
          >
            <span className='hs-category-route__trade'>Plumbing</span>
            <h3 className='hs-category-route__name'>Emergency &amp; quoted lanes</h3>
            <p className='hs-category-route__cue'>
              When after-hours bursts and project quotes have to share one line without losing
              either.
            </p>
            <span className='hs-category-route__signal'>Lead system · AI Lead Handling</span>
            <span className='hs-category-route__go'>See the shape</span>
          </InternalLink>
          <InternalLink
            href='/industries/home-services/electrical-companies'
            className='hs-category-route hs-category-route--electrical'
          >
            <span className='hs-category-route__trade'>Electrical</span>
            <h3 className='hs-category-route__name'>Three-stream operating day</h3>
            <p className='hs-category-route__cue'>
              When commercial visits, residential quotes, and parts-pending tickets need different
              handling in the same office.
            </p>
            <span className='hs-category-route__signal'>Lead system · AI Lead Handling</span>
            <span className='hs-category-route__go'>See the shape</span>
          </InternalLink>
          <InternalLink
            href='/industries/home-services/landscaping-companies'
            className='hs-category-route hs-category-route--landscaping'
          >
            <span className='hs-category-route__trade'>Landscaping</span>
            <h3 className='hs-category-route__name'>Seasonal arc</h3>
            <p className='hs-category-route__cue'>
              When spring intake, summer conversion, and winter re-contact all run from the same
              small office.
            </p>
            <span className='hs-category-route__signal'>Lead system · Smart Website Systems</span>
            <span className='hs-category-route__go'>See the shape</span>
          </InternalLink>
        </div>
      </SectionFrame>
      <SectionFrame
        heading={{
          kicker: 'How this lands',
          title: 'Lead handling answers the call. The other systems hand off into it.',
        }}
        tone='mist'
      >
        <div className='hs-bridge'>
          <div className='hs-bridge__copy'>
            <span className='hs-bridge__label'>Lead system for home services</span>
            <h3 className='hs-bridge__title'>AI Lead Handling</h3>
            <p className='hs-bridge__note'>
              Across every trade, the first leak is the call that nobody got to. Lead handling
              answers it. CRM holds dispatch and follow-up. Reputation runs after sign-off. The
              website routes intake into the same place. Local SEO carries the visibility.
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
