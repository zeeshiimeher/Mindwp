import { SmartCTA } from '@/components/system/SmartCTA';

interface RelatedSectionCTAProps {
  system?: string;
  slug?: string;
  text?: string;
}

const DEFAULTS = {
  text: 'See how this connects with other systems and use cases.',
} as const;

export function RelatedSectionCTA({
  system = 'smart-website-systems',
  slug = 'related-content',
  text = DEFAULTS.text,
}: RelatedSectionCTAProps) {
  return (
    <div className='related-section-cta l-container'>
      <div className='related-section-cta__inner'>
        <p className='related-section-cta__text'>{text}</p>
        <SmartCTA
          system={system}
          pageType='page'
          slug={slug}
          mode='actions-only'
          primaryButtonCssPrefix='related-section-cta__action'
        />
      </div>
    </div>
  );
}
