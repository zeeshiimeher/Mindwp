import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import { getCategoryIndexIndustries } from '@/domains/industries/catalog';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

const GROUP_BY_SLUG: Record<string, string> = {
  'home-services': 'home',
  'automotive-services': 'auto',
  'beauty-personal-care': 'beauty',
  'local-appointment-businesses': 'appt',
  'real-estate-property-services': 'realestate',
  'legal-professional-services': 'legal',
};

const LEAD_SYSTEM_BY_SLUG: Record<string, string> = {
  'home-services': 'AI Lead Handling',
  'automotive-services': 'AI Lead Handling',
  'beauty-personal-care': 'CRM & Automation',
  'local-appointment-businesses': 'CRM & Automation',
  'real-estate-property-services': 'CRM & Automation',
  'legal-professional-services': 'AI Lead Handling',
};

export default function IndustriesLanding() {
  const categories = getCategoryIndexIndustries();

  const ctaHref = buildIndustryContactHref({
    system: 'smart-website-systems',
    slug: 'industries-overview',
  });

  return (
    <div className='industry-category-page'>
      <main>
        <HeroFrame
          eyebrow='Industries · Overview'
          title='The same enquiries get lost. [[muted:By industry, the same way every week.]]'
          description='Six operating shapes. Each opens with where the week actually breaks for that kind of business — and the system that holds it.'
          actions={[
            { label: PRIMARY_CTA_LABEL, href: ctaHref, variant: 'primary' },
            { label: 'Read where it leaks', href: '#categories', variant: 'ghost' },
          ]}
          chips={[
            { label: 'Home Services' },
            { label: 'Automotive' },
            { label: 'Beauty' },
            { label: 'Appointment' },
            { label: 'Real Estate' },
            { label: 'Legal & Professional' },
          ]}
          tone='gradient-hero'
        />

        <div id='categories'>
          <SectionFrame
            heading={{
              eyebrow: 'Six operating shapes',
              title: 'Find the closest working reality',
              description:
                'Each card opens a category page tuned to that industry’s week — the leaks, the pattern, the systems that hold.',
            }}
            tone='white'
          >
            <ul className='icp-routes'>
              {categories.map(cat => {
                const group = GROUP_BY_SLUG[cat.slug] ?? 'home';
                const lead = LEAD_SYSTEM_BY_SLUG[cat.slug] ?? 'CRM & Automation';
                return (
                  <li key={cat.slug} className={`icp-routes__item icp-routes__item--${group}`}>
                    <a className='icp-routes__card' href={cat.href}>
                      <div className='icp-routes__head'>
                        <span className='icp-routes__label'>{cat.name}</span>
                      </div>
                      <p className='icp-routes__one'>{cat.landingSubtitle ?? cat.description}</p>
                      <span className='icp-routes__system'>
                        Lead system · {lead}
                        <span aria-hidden='true'>→</span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </SectionFrame>
        </div>

        <SectionFrame
          heading={{
            eyebrow: 'How to read these',
            title: 'Same six systems. [[muted:Different operating shapes.]]',
            description:
              'Every category uses the same six systems underneath. The difference is which one leads, which support, and which come later.',
          }}
          tone='mist'
        >
          <ul className='icp-routes'>
            <li className='icp-routes__item'>
              <div className='icp-routes__card'>
                <div className='icp-routes__head'>
                  <span className='icp-routes__label'>Speed-led</span>
                </div>
                <p className='icp-routes__one'>
                  Urgent or after-hours work where first reply decides the job. Lead with AI Lead
                  Handling.
                </p>
                <span className='icp-routes__system'>Examples · Home, Auto, Legal intake</span>
              </div>
            </li>
            <li className='icp-routes__item'>
              <div className='icp-routes__card'>
                <div className='icp-routes__head'>
                  <span className='icp-routes__label'>Booking-led</span>
                </div>
                <p className='icp-routes__one'>
                  Appointment shapes where rebook cadence and reminders carry the revenue. Lead with
                  CRM &amp; Automation.
                </p>
                <span className='icp-routes__system'>Examples · Beauty, Appointment</span>
              </div>
            </li>
            <li className='icp-routes__item'>
              <div className='icp-routes__card'>
                <div className='icp-routes__head'>
                  <span className='icp-routes__label'>Cycle-led</span>
                </div>
                <p className='icp-routes__one'>
                  Long engagements with documents, milestones, and past-client recall. Lead with CRM
                  cadences.
                </p>
                <span className='icp-routes__system'>Examples · Real Estate, Accounting</span>
              </div>
            </li>
          </ul>
        </SectionFrame>

        <FAQSection
          eyebrow='Honest questions'
          title='What owners usually ask before opening a category'
          description='Direct answers. No hedging.'
          items={[
            {
              id: 'fit',
              question: 'Is the build the same across every industry?',
              answer:
                'No. The shape is similar. The lead system and cadence differ by how that industry’s week actually moves.',
            },
            {
              id: 'starting',
              question: 'Where do most businesses actually start?',
              answer:
                'Where the leak hurts most. For most, that is first-reply speed or follow-up reliability.',
            },
            {
              id: 'tools',
              question: 'We already use a booking or CRM tool. Do we drop it?',
              answer:
                'Usually no. The operating layer sits beside what already works and holds the gaps the tool does not cover.',
            },
            {
              id: 'price',
              question: 'How is this priced?',
              answer: 'Per build. We tell you when a build is not the right move yet.',
            },
          ]}
          tone='white'
        />

        <DecisionPanel
          heading={{
            eyebrow: 'Next step',
            title: 'Tell us how the week actually runs.',
            description:
              'A short read of where enquiries, follow-up, and bookings sit today — and the first system likely to hold the worst gap.',
          }}
          actions={[{ label: PRIMARY_CTA_LABEL, href: ctaHref, variant: 'primary' }]}
          expectations={[
            { num: '1', text: 'A short read of how a normal week moves today' },
            { num: '2', text: 'The system most likely to hold the worst gap first' },
            {
              num: '3',
              text: 'A clear next move if the fit is right — or none if it isn’t',
            },
          ]}
          reassurance={{
            noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
            tone: 'Direct, specific to a working service business.',
          }}
        />
      </main>
    </div>
  );
}
