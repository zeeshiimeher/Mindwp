import { SectionWrapper } from '@/components/reusable/primitives';
import { Badge } from '@/components/reusable/single/Badge';
import { SmartCTA } from '@/components/system/SmartCTA';
import { Card } from '@/components/ui/card';

export function About() {
  return (
    <div className='about-page'>
      {/* Hero Section */}
      <SectionWrapper
        className='about-page-hero'
        background='bg-gradient-to-b from-blue-50 to-white'
      >
        <div className='text-center'>
          <Badge variant='secondary' context='hero'>
            About MindWP
          </Badge>
          <h1 className='mb-6'>Why MindWP Exists</h1>
          <p className='text-xl text-muted-foreground mb-8'>
            MindWP was built on a simple observation: many service businesses invest in websites
            that look modern but fail to support how the business actually operates.
          </p>
          <SmartCTA
            system='smart-website-systems'
            pageType='page'
            slug='about'
            mode='actions-only'
          />
        </div>
      </SectionWrapper>

      {/* Industry Problem */}
      <SectionWrapper>
        <div className='max-w-3xl'>
          <h2 className='mb-6'>The Problem We Saw</h2>
          <p className='text-muted-foreground mb-4'>
            Too often, websites are treated as visual projects rather than operational tools.
            Traffic is pursued without structure. Forms exist without routing logic. Follow-up is
            inconsistent. Visibility efforts operate in isolation.
          </p>
          <p className='text-muted-foreground'>
            The result is unnecessary manual work, missed enquiries, and fragmented systems that
            require constant patching instead of deliberate design.
          </p>
        </div>
      </SectionWrapper>

      {/* Our Approach */}
      <SectionWrapper background='bg-base'>
        <div className='max-w-3xl'>
          <h2 className='mb-6'>Our Approach</h2>
          <p className='text-muted-foreground mb-4'>
            We approach websites as digital infrastructure. A Smart Website is not a collection of
            pages — it is a connected system aligned to how a business receives, assigns, and
            handles enquiries day to day.
          </p>
          <p className='text-muted-foreground'>
            Visibility, structure, workflows, and tracking are considered together. Nothing is
            implemented in isolation. Every layer supports operational clarity and long-term
            reliability.
          </p>
        </div>
      </SectionWrapper>

      {/* What We Don’t Do */}
      <SectionWrapper>
        <div className='max-w-3xl'>
          <h2 className='mb-6'>What We Don’t Do</h2>
          <Card className='p-8'>
            <ul className='about-page__dont-list text-foreground'>
              <li>We don’t sell hype or promise rapid growth.</li>
              <li>We don’t position AI or automation as shortcuts.</li>
              <li>We don’t build websites based solely on design trends.</li>
              <li>We don’t implement tools without structural alignment.</li>
              <li>We don’t take projects that lack operational clarity.</li>
            </ul>
          </Card>
        </div>
      </SectionWrapper>

      {/* How We Work */}
      <SectionWrapper background='bg-alt'>
        <div className='max-w-3xl'>
          <h2 className='mb-6'>How We Work</h2>
          <p className='text-muted-foreground mb-4'>
            Every engagement begins with review and alignment. We look at how your website supports
            visibility, how enquiries are received, how responsibilities are assigned, and how
            follow-up is managed.
          </p>
          <p className='text-muted-foreground'>
            From there, we implement structured improvements through Smart Website infrastructure
            and supporting system layers. The objective is clarity — not complexity.
          </p>
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <SectionWrapper className='footer-cta cta' padding='none'>
        <div>
          <div className='cta__panel cta__content bg-gradient-primary'>
            <h2 className='cta-heading'>If this approach resonates, let’s talk.</h2>
            <p className='cta__text'>
              We work best with service businesses that value structure, clarity, and deliberate
              implementation.
            </p>
            <div className='cta__actions'>
              <SmartCTA
                system='smart-website-systems'
                pageType='page'
                slug='about'
                mode='actions-only'
                primaryActionVariant='white'
              />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
