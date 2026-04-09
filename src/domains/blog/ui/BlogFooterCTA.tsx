import { ArrowRight, CheckCircle2 } from 'lucide-react';

import { SectionWrapper } from '@/components/reusable/primitives';
import { Button } from '@/components/reusable/single/Button';
import { primaryCta } from '@/config/primaryCta';

const GOVERNED_LABEL = primaryCta.label;

interface BlogFooterCTAProps {
  title?: string;
  description?: string;
  buttonUrl?: string;
  features?: string[];
}

export function BlogFooterCTA({
  title = 'Explore the Full System',
  description = 'See how MindWP connects website, automation, and local visibility into one integrated system.',
  buttonUrl,
  features = [
    'End-to-end system overview',
    'Real implementation details',
    'Built for local businesses',
  ],
}: BlogFooterCTAProps) {
  const primaryAction =
    buttonUrl === undefined ? (
      <Button
        {...(primaryCta.type !== 'chat' ? { href: primaryCta.href } : {})}
        variant='white'
        label={primaryCta.label}
        icon={ArrowRight}
        showDefaultIcon
        {...(primaryCta.type === 'external'
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
        {...(primaryCta.type === 'chat' ? { onClick: () => {} } : {})}
      />
    ) : (
      <Button
        href={buttonUrl}
        variant='white'
        label={GOVERNED_LABEL}
        icon={ArrowRight}
        showDefaultIcon
      />
    );

  return (
    <SectionWrapper className='footer-cta cta' padding='none'>
      <div className='cta__panel cta__content bg-gradient-primary'>
        <h2 className='cta-heading'>{title}</h2>

        <p className='cta__text'>{description}</p>

        <div className='cta__actions'>{primaryAction}</div>

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
