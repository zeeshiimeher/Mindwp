import { SectionWrapper } from '@/components/reusable/primitives';
import { PrimaryCTASection } from '@/components/sections/PrimaryCTASection';
import { buildContactHref } from '@/lib/contact/contactHref';

interface BlogFooterCTAProps {
  system: string;
  slug: string;
  title: string;
  description: string;
  features?: string[];
}
export function BlogFooterCTA({
  system: _system,
  slug: _slug,
  title,
  description,
  features: _features = [
    'Best-fit system path',
    'First-fix priority',
    'Built around service-business operations',
  ],
}: BlogFooterCTAProps) {
  return (
    <SectionWrapper className='footer-cta cta' padding='none'>
      <PrimaryCTASection
        heading={{
          title,
          description
        }}
        actions={[
          {
            label: 'Get Started',
            href: buildContactHref({ system: _system, sourceType: 'blog', slug: _slug }),
          },
        ]}
      />
    </SectionWrapper>
  );
}
