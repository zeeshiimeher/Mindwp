import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { IndustryCategoryRendererProps } from '@/domains/industries/types';
import { InternalLink } from '@/global/InternalLink';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

/**
 * LocalAppointmentBusinessesIndustryRenderer — page-owned composition.
 *
 * Category page. Signature visual: appointment operating-shape selector
 * with four shapes (clinic-led / lesson-led / repair-led / studio-led)
 * routing into the five detail pages.
 * Sections (9): hero · category leaks · shape selector · breakpoints ·
 * operating models · handled state · detail routes · FAQ · CTA.
 */

type ShapeBlock = {
  id: string;
  tag: string;
  name: string;
  cue: string;
  routes: { href: string; label: string }[];
};

const SHAPES: ShapeBlock[] = [
  {
    id: 'clinic',
    tag: 'Clinic-led',
    name: 'Considered enquiries · long recall',
    cue: 'Patients compare clinics. Recall and reminders hold most of the rhythm.',
    routes: [
      {
        href: '/industries/local-appointment-businesses/dental-clinics',
        label: 'Dental Clinics',
      },
      {
        href: '/industries/local-appointment-businesses/small-private-clinics',
        label: 'Small Private Clinics',
      },
    ],
  },
  {
    id: 'lesson',
    tag: 'Lesson-led',
    name: 'Phone-led · instructors out',
    cue: 'Calls land while staff are with the customer. Block ends and test prep need follow-up.',
    routes: [
      {
        href: '/industries/local-appointment-businesses/driving-schools',
        label: 'Driving Schools',
      },
    ],
  },
  {
    id: 'repair',
    tag: 'Repair-led',
    name: 'Counter-led · status updates matter',
    cue: 'Bench full, customers waiting on status. Pickup and review timing are the leaks.',
    routes: [
      {
        href: '/industries/local-appointment-businesses/repair-shops',
        label: 'Repair Shops',
      },
    ],
  },
  {
    id: 'studio',
    tag: 'Studio-led',
    name: 'DM-led · multi-session',
    cue: 'DMs pile while the artist works. Consult, deposit, and aftercare drive repeat work.',
    routes: [
      {
        href: '/industries/local-appointment-businesses/tattoo-studios',
        label: 'Tattoo Studios',
      },
    ],
  },
];

export function LocalAppointmentBusinessesIndustryRenderer({
  data,
}: IndustryCategoryRendererProps) {
  const primarySystem = data.systems[0];
  if (!primarySystem) {
    throw new Error(`[${data.slug}] Missing primary industry system.`);
  }

  const contactHref = buildIndustryContactHref({ system: primarySystem, slug: data.slug });
  const actions = [{ label: PRIMARY_CTA_LABEL, href: contactHref, variant: 'white' }] as const;

  const leaks = data.categoryLeaks.leaks ?? [];
  const breaks = data.breakpoints.items ?? [];
  const models = data.operatingModels.models ?? [];
  const handled = data.handledState.handled ?? [];
  const routes = data.detailRoutes.routeEntries ?? [];

  return (
    <main className='appt-cat-page'>
      <HeroFrame
        badge={data.hero.badge}
        title={data.hero.title}
        description={data.hero.description}
        actions={actions}
        chips={data.hero.list}
        chipDotVariant='neutral'
      />

      {leaks.length ? (
        <SectionFrame
          heading={{
            kicker: 'Where appointment work slips',
            title: 'Appointment work slips between the booking, the arrival, and the follow-up',
            description: 'Most operators see at least three of these.',
          }}
          tone='white'
        >
          <ul className='appt-leakboard appt-leakboard--four'>
            {leaks.map(l => (
              <li key={l.id} className={`appt-leakboard__tile appt-leakboard__tile--${l.state}`}>
                <div className='appt-leakboard__head'>
                  <p className='appt-leakboard__leak'>{l.leak}</p>
                  <span className={`appt-pill appt-pill--${l.state}`}>
                    <span className={`appt-dot appt-dot--${l.state}`} aria-hidden='true' />
                    {l.state}
                  </span>
                </div>
                <p className='appt-leakboard__observed'>{l.observed}</p>
              </li>
            ))}
          </ul>
        </SectionFrame>
      ) : null}

      <SectionFrame
        heading={{
          kicker: 'Choose the closest path',
          title: 'Which appointment business shape looks like yours?',
          description:
            'Four operating shapes. Each one opens the detail page tuned to that working week.',
        }}
        tone='dark'
      >
        <div className='appt-cat-business-shape-selector'>
          <ul className='appt-cat-business-shape-selector__grid'>
            {SHAPES.map(shape => (
              <li key={shape.id} className='appt-cat-business-shape-selector__shape'>
                <span className='appt-cat-business-shape-selector__tag'>{shape.tag}</span>
                <p className='appt-cat-business-shape-selector__name'>{shape.name}</p>
                <p className='appt-cat-business-shape-selector__cue'>{shape.cue}</p>
                <ul className='appt-cat-business-shape-selector__routes'>
                  {shape.routes.map(r => (
                    <li key={r.href} className='appt-cat-business-shape-selector__route'>
                      <InternalLink href={r.href}>{r.label}</InternalLink>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <p className='appt-cat-business-shape-selector__caption'>
            Clinic-led routes split into dental and private clinics. Lesson, repair, and studio open
            one detail page each.
          </p>
        </div>
      </SectionFrame>

      {breaks.length ? (
        <SectionFrame
          heading={{
            kicker: 'Moments that need an owner',
            title: 'Four places local appointment work usually leaks',
            description: 'These are the moments the system has to hold automatically.',
          }}
          tone='mist'
        >
          <ul className='appt-cat-breaks'>
            {breaks.map((item, i) => (
              <li key={i} className='appt-cat-breaks__chip'>
                {item}
              </li>
            ))}
          </ul>
        </SectionFrame>
      ) : null}

      {models.length ? (
        <SectionFrame
          heading={{
            kicker: 'How operators differ',
            title: 'Booking-led vs lesson-led vs intake-led vs studio-led',
            description: 'Most operators tilt toward one of the two broader shapes below.',
          }}
          tone='white'
        >
          <ul className='appt-cat-models'>
            {models.map(m => (
              <li key={m.id} className='appt-cat-models__card'>
                <span className='appt-cat-models__label'>{m.label}</span>
                <p className='appt-cat-models__title'>{m.label}</p>
                <ul className='appt-cat-models__traits'>
                  {m.traits.map((t, i) => (
                    <li key={`${m.id}-${i}`} className='appt-cat-models__trait'>
                      {t}
                    </li>
                  ))}
                </ul>
                {m.differentiator ? (
                  <p className='appt-cat-models__diff'>{m.differentiator}</p>
                ) : null}
              </li>
            ))}
          </ul>
        </SectionFrame>
      ) : null}

      {handled.length ? (
        <SectionFrame
          heading={{
            kicker: 'When the layer holds',
            title: 'What changes when appointments and follow-up are owned',
            description: 'Same diary. Same hours. Less manual chasing.',
          }}
          tone='mist'
        >
          <ul className='appt-cat-handled'>
            {handled.map(h => (
              <li key={h.id} className='appt-cat-handled__card'>
                <span className='appt-cat-handled__label'>{h.label}</span>
                <p className='appt-cat-handled__note'>{h.note}</p>
              </li>
            ))}
          </ul>
        </SectionFrame>
      ) : null}

      {routes.length ? (
        <SectionFrame
          heading={{
            kicker: 'Detail pages',
            title: 'Explore the five appointment paths',
            description: 'Each route opens a page tuned to the way that work is booked and held.',
          }}
          tone='white'
        >
          <ul className='appt-cat-routes'>
            {routes.map(r => (
              <li key={r.detailHref} className='appt-cat-routes__route'>
                <InternalLink href={r.detailHref}>
                  <div className='appt-cat-routes__head'>
                    <p className='appt-cat-routes__label'>{r.label}</p>
                  </div>
                  <p className='appt-cat-routes__one'>{r.oneLine}</p>
                  <span className='appt-cat-routes__system'>{r.leadingSystem}</span>
                </InternalLink>
              </li>
            ))}
          </ul>
        </SectionFrame>
      ) : null}

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
