import type { ReactNode } from 'react';

import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroActions } from '@/components/system/HeroActions';
import { Card } from '@/components/ui/card';
import { buildContactHref } from '@/lib/contact/contactHref';

function SectionWrapper({
  background,
  className,
  padding,
  children,
}: {
  background?: string;
  className?: string;
  padding?: 'none';
  children: ReactNode;
}) {
  return (
    <section
      className={[background, padding === 'none' ? 'p-0' : 'py-16', className]
        .filter(Boolean)
        .join(' ')}
    >
      <div className='mw-container'>{children}</div>
    </section>
  );
}

export function About() {
  return (
    <div className='about-page'>
      {/* SECTION 1 — REALITY (OPENING) */}
      <SectionWrapper
        className='about-page-hero'
        background='bg-gradient-to-b from-blue-50 to-white'
      >
        <div className='text-center'>
          <span className='mw-text-eyebrow mw-text-signal-cyan'>About MindWP</span>
          <h1 className='mb-6'>The work is already coming in. It just keeps slipping out.</h1>
          <p className='text-xl text-muted-foreground mb-8'>
            A roofer misses three calls during a job and never hears back from any of them. A salon
            owner sees a no-show on the morning before payroll. A law firm watches a qualified
            enquiry sit in someone&rsquo;s inbox until the prospect signs with the next firm. None
            of this looks like a marketing problem from the inside. It looks like a busy week.
          </p>
          <HeroActions allowSecondaryAction />
        </div>
      </SectionWrapper>

      {/* SECTION 2 — WHAT WE ACTUALLY DO */}
      <SectionWrapper>
        <div className='max-w-3xl'>
          <h2 className='mb-6'>What we actually do</h2>
          <p className='text-muted-foreground mb-4'>
            We fix what breaks between an enquiry and a paying customer. The phone that rings while
            you&rsquo;re on a roof. The form that arrives at 9pm and gets read on Monday. The quote
            that gets sent and never followed up. The five-star job that never asked for a review.
          </p>
          <p className='text-muted-foreground'>
            None of that is a website problem on its own, and none of it is an SEO problem on its
            own. We treat it as one connected job: the website, the routing, the follow-up, the
            visibility, the proof.
          </p>
        </div>
      </SectionWrapper>

      {/* SECTION 3 — HOW WE THINK (DIFFERENTIATION) */}
      <SectionWrapper background='bg-base'>
        <div className='max-w-3xl'>
          <h2 className='mb-6'>How we think about this</h2>
          <p className='text-muted-foreground mb-4'>
            Most agencies sell one piece of the problem. A website. A pack of leads. A new tool. The
            piece works. The business still leaks money in the same places it did before, because
            the gap was never the piece — it was the seam between pieces.
          </p>
          <p className='text-muted-foreground'>
            We work the whole flow: how a customer finds you, what they hit when they land, where
            their enquiry actually ends up, who replies and how fast, and what happens after the
            job. Strong businesses are built when those steps stop dropping each other.
          </p>
        </div>
      </SectionWrapper>

      {/* SECTION 4 — WHO THIS IS FOR */}
      <SectionWrapper>
        <div className='max-w-3xl'>
          <h2 className='mb-6'>Who this is for</h2>
          <Card className='p-8'>
            <ul className='about-page__dont-list text-foreground'>
              <li>Service businesses where the work is real and the demand is already there.</li>
              <li>
                Operators who know exactly which calls and follow-ups are slipping, and want it
                fixed.
              </li>
              <li>Owners who want fewer dropped enquiries, not a louder marketing campaign.</li>
              <li>
                Teams that have outgrown the &ldquo;build a site and hope&rdquo; stage and need
                something that runs reliably.
              </li>
            </ul>
          </Card>
        </div>
      </SectionWrapper>

      {/* SECTION 5 — WHO THIS IS NOT FOR */}
      <SectionWrapper background='bg-alt'>
        <div className='max-w-3xl'>
          <h2 className='mb-6'>Who this is not for</h2>
          <Card className='p-8'>
            <ul className='about-page__dont-list text-foreground'>
              <li>Anyone shopping for the cheapest template website.</li>
              <li>DIY operators who just need login access to another tool to try.</li>
              <li>Buyers who want a single SaaS product to install and walk away from.</li>
              <li>
                Businesses that haven&rsquo;t yet figured out what they sell or who they sell it to.
              </li>
            </ul>
          </Card>
        </div>
      </SectionWrapper>

      {/* SECTION 6 — CTA → Smart Website Systems */}
      <SectionWrapper className='footer-cta cta' padding='none'>
        <DecisionPanel
          heading={{
            title: "Ready to stop losing the work that's already coming in?",
            description:
              'See how Smart Website Systems closes the gap between an enquiry and a paying customer for service businesses.',
          }}
          actions={[
            {
              label: 'Get Started',
              href: buildContactHref({
                system: 'smart-website-systems',
                sourceType: 'page',
                slug: 'about-footer',
              }),
              variant: 'primary',
            },
          ]}
        />
      </SectionWrapper>
    </div>
  );
}
