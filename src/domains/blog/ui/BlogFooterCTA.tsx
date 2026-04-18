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
  title = 'Get the best-fit service path behind the issue you just read about',
  description = 'We will turn the problem behind this article into a concrete next-step decision so you know the likely bottleneck, the right service path, and what would need fixing first.',
  features = [
    'Best-fit system path',
    'First-fix priority',
    'Built around service-business operations',
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
