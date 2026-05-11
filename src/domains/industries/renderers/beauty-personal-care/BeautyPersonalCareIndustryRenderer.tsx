import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { IndustryCategoryRendererProps } from '@/domains/industries/types';
import { InternalLink } from '@/global/InternalLink';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

/**
 * BeautyPersonalCareIndustryRenderer — page-owned composition.
 *
 * Category page. Signature visual: beauty appointment-shape selector
 * (chair-led / appointment-led / DM-led / consultation-led) routing
 * into the five detail pages.
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
    id: 'chair-led',
    tag: 'Chair-led',
    name: 'Stylists, basins, and a busy desk',
    cue: 'The chair is full. The phone keeps ringing. Rebooks decide the next six weeks.',
    routes: [{ href: '/industries/beauty-personal-care/hair-salons', label: 'Hair Salons' }],
  },
  {
    id: 'appointment-led',
    tag: 'Appointment-led',
    name: 'Walk-ins, slots, and short refill cycles',
    cue: 'The grid fills and empties fast. Refill reminders quietly carry the week.',
    routes: [{ href: '/industries/beauty-personal-care/nail-salons', label: 'Nail Salons' }],
  },
  {
    id: 'dm-led',
    tag: 'DM-led',
    name: 'Instagram, prep questions, fill windows',
    cue: 'The artist is hands-on. DMs and fill questions stack up and need a real reply.',
    routes: [
      {
        href: '/industries/beauty-personal-care/lash-lift-and-extensions',
        label: 'Lash Lift & Extensions',
      },
    ],
  },
  {
    id: 'consultation-led',
    tag: 'Consultation-led',
    name: 'Long-form enquiries, careful follow-up',
    cue: 'The enquiry is considered. Trust is built between question and consult — quietly.',
    routes: [
      { href: '/industries/beauty-personal-care/small-med-spas', label: 'Small Med Spas' },
      {
        href: '/industries/beauty-personal-care/aesthetic-cosmetic-clinics',
        label: 'Aesthetic & Cosmetic Clinics',
      },
    ],
  },
];

export function BeautyPersonalCareIndustryRenderer({ data }: IndustryCategoryRendererProps) {
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
    <main className='beauty-cat-page'>
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
            kicker: 'Where beauty work slips',
            title: 'Beauty work slips between DMs, appointments, and return visits',
            description: 'Most operators see at least three of these.',
          }}
          tone='white'
        >
          <ul className='beauty-leakboard beauty-leakboard--four'>
            {leaks.map(l => (
              <li
                key={l.id}
                className={`beauty-leakboard__tile beauty-leakboard__tile--${l.state}`}
              >
                <div className='beauty-leakboard__head'>
                  <p className='beauty-leakboard__leak'>{l.leak}</p>
                  <span className={`beauty-pill beauty-pill--${l.state}`}>
                    <span className={`beauty-dot beauty-dot--${l.state}`} aria-hidden='true' />
                    {l.state}
                  </span>
                </div>
                <p className='beauty-leakboard__observed'>{l.observed}</p>
              </li>
            ))}
          </ul>
        </SectionFrame>
      ) : null}

      <SectionFrame
        heading={{
          kicker: 'Choose the closest path',
          title: 'Which beauty business shape looks like yours?',
          description:
            'Four operating shapes. Each one opens the detail page tuned to that working week.',
        }}
        tone='dark'
      >
        <div className='beauty-cat-appointment-shape-selector'>
          <ul className='beauty-cat-appointment-shape-selector__grid'>
            {SHAPES.map(shape => (
              <li key={shape.id} className='beauty-cat-appointment-shape-selector__shape'>
                <span className='beauty-cat-appointment-shape-selector__tag'>{shape.tag}</span>
                <p className='beauty-cat-appointment-shape-selector__name'>{shape.name}</p>
                <p className='beauty-cat-appointment-shape-selector__cue'>{shape.cue}</p>
                <ul className='beauty-cat-appointment-shape-selector__routes'>
                  {shape.routes.map(r => (
                    <li key={r.href} className='beauty-cat-appointment-shape-selector__route'>
                      <InternalLink href={r.href}>{r.label} detail</InternalLink>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <p className='beauty-cat-appointment-shape-selector__caption'>
            Chair-led routes to hair salons. Appointment-led to nail salons. DM-led to lash &amp;
            extensions. Consultation-led to med spas and aesthetic clinics.
          </p>
        </div>
      </SectionFrame>

      {breaks.length ? (
        <SectionFrame
          heading={{
            kicker: 'Moments that need an owner',
            title: 'Four places beauty / personal-care work usually leaks',
            description: 'These are the moments the system has to hold automatically.',
          }}
          tone='mist'
        >
          <ul className='beauty-cat-breaks'>
            {breaks.map((item, i) => (
              <li key={i} className='beauty-cat-breaks__chip'>
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
            title: 'Chair-led, appointment-led, DM-led, consultation-led',
            description: 'Most operators tilt toward one of the two broader shapes below.',
          }}
          tone='white'
        >
          <ul className='beauty-cat-models'>
            {models.map(m => (
              <li key={m.id} className='beauty-cat-models__card'>
                <span className='beauty-cat-models__label'>{m.label}</span>
                <p className='beauty-cat-models__title'>{m.label}</p>
                <ul className='beauty-cat-models__traits'>
                  {m.traits.map((t, i) => (
                    <li key={`${m.id}-${i}`} className='beauty-cat-models__trait'>
                      {t}
                    </li>
                  ))}
                </ul>
                {m.differentiator ? (
                  <p className='beauty-cat-models__diff'>{m.differentiator}</p>
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
            title: 'What changes when bookings and follow-up are owned',
            description: 'Same chairs. Same hours. Less manual chasing.',
          }}
          tone='mist'
        >
          <ul className='beauty-cat-handled'>
            {handled.map(h => (
              <li key={h.id} className='beauty-cat-handled__card'>
                <span className='beauty-cat-handled__label'>{h.label}</span>
                <p className='beauty-cat-handled__note'>{h.note}</p>
              </li>
            ))}
          </ul>
        </SectionFrame>
      ) : null}

      {routes.length ? (
        <SectionFrame
          heading={{
            kicker: 'Detail pages',
            title: 'Explore the five beauty paths',
            description:
              'Each route opens a page tuned to the way that work is booked and handled.',
          }}
          tone='white'
        >
          <ul className='beauty-cat-routes'>
            {routes.map(r => (
              <li key={r.detailHref} className='beauty-cat-routes__route'>
                <InternalLink href={r.detailHref}>
                  <div className='beauty-cat-routes__head'>
                    <p className='beauty-cat-routes__label'>{r.label}</p>
                  </div>
                  <p className='beauty-cat-routes__one'>{r.oneLine}</p>
                  <span className='beauty-cat-routes__system'>{r.leadingSystem}</span>
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
