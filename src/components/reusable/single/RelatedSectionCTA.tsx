import Link from 'next/link';

interface RelatedSectionCTAProps {
  text?: string;
  actionLabel?: string;
  actionHref?: string;
}

const DEFAULTS = {
  text: 'See how this connects with other systems and use cases.',
  actionLabel: 'Explore Related Solutions',
  actionHref: '/contact',
} as const;

export function RelatedSectionCTA({
  text = DEFAULTS.text,
  actionLabel = DEFAULTS.actionLabel,
  actionHref = DEFAULTS.actionHref,
}: RelatedSectionCTAProps) {
  return (
    <div className='related-section-cta l-container'>
      <div className='related-section-cta__inner'>
        <p className='related-section-cta__text'>{text}</p>
        <Link href={actionHref} className='related-section-cta__action btn btn--primary'>
          {actionLabel}
        </Link>
      </div>
    </div>
  );
}
