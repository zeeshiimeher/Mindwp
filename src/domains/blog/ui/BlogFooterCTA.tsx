import { CheckCircle2 } from 'lucide-react';

import { SectionWrapper } from '@/components/reusable/primitives';
import { SmartCTA } from '@/components/system/SmartCTA';

interface BlogFooterCTAProps {
  system: string;
  slug: string;
  title?: string;
  description?: string;
  features?: string[];
}

export function BlogFooterCTA({
  system,
  slug,
  title = 'Explore the Full System',
  description = 'See how MindWP connects website, automation, and local visibility into one integrated system.',
  features = [
    'End-to-end system overview',
    'Real implementation details',
    'Built for local businesses',
  ],
}: BlogFooterCTAProps) {
  return (
    <SectionWrapper className='footer-cta cta' padding='none'>
      <div className='cta__panel cta__content bg-gradient-primary'>
        <h2 className='cta-heading'>{title}</h2>

        <p className='cta__text'>{description}</p>

        <SmartCTA
          system={system}
          pageType='blog'
          slug={slug}
          intent='conversion'
          position='footer'
          primaryActionVariant='white'
          mode='actions-only'
        />

        <div className='cta__meta'>
          {features.map((feature, index) => (
            <div key={index} className='cta__meta-item'>
              <CheckCircle2 className='cta__icon' />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
