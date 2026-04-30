import { SectionWrapper } from '@/components/reusable/primitives';
import { PrimaryCTASection } from '@/components/sections/PrimaryCTASection';

interface BlogFooterCTAProps {
  system: string;
  slug: string;
  title?: string;
  description?: string;
  features?: string[];
}

export function BlogFooterCTA({
  system: _system,
  slug: _slug,
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
      <PrimaryCTASection
        title={title}
        description={description}
        actions={[{ label: 'Get Started', href: '/contact' }]}
      />
    </SectionWrapper>
  );
}
