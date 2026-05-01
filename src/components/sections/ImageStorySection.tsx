import { SectionShell } from './SectionShell';
import type { MediaSource, SectionDensity, SectionHeading, SectionTone } from './types';

export type ImageStoryVariant = 'operational-photo' | 'visual-panel' | 'split-evidence';

export interface ImageStoryHighlight {
  label: string;
  value: string;
}

export interface ImageStorySectionProps {
  variant?: ImageStoryVariant;
  tone?: SectionTone;
  density?: SectionDensity;
  /** Place visual on the left (default false → visual on the right). */
  reverse?: boolean;
  heading: SectionHeading;
  body?: string;
  bullets?: readonly string[];
  /** Optional metric chips beneath the body. */
  highlights?: readonly ImageStoryHighlight[];
  image: MediaSource;
  /** Optional caption rendered under the image (small text). */
  caption?: string;
}

/**
 * ImageStorySection — image-led story column paired with copy.
 *
 * New production component. No generic stock images: callers must
 * supply meaningful operational photos or designed visual panels.
 */
export function ImageStorySection({
  variant = 'operational-photo',
  tone = 'light',
  density = 'default',
  reverse = false,
  heading,
  body,
  bullets,
  highlights,
  image,
  caption,
}: ImageStorySectionProps) {
  if (heading.title.trim().length === 0 || heading.description.trim().length === 0) {
    throw new Error('[ImageStorySection] Invalid data');
  }

  if (image.src.trim().length === 0 || image.alt.trim().length === 0) {
    throw new Error('[ImageStorySection] Invalid data');
  }

  if (body !== undefined && body.trim().length === 0) {
    throw new Error('[ImageStorySection] Invalid data');
  }

  if (caption !== undefined && caption.trim().length === 0) {
    throw new Error('[ImageStorySection] Invalid data');
  }

  if (bullets?.some(item => item.trim().length === 0)) {
    throw new Error('[ImageStorySection] Invalid data');
  }

  if (
    highlights?.some(
      highlight => highlight.label.trim().length === 0 || highlight.value.trim().length === 0
    )
  ) {
    throw new Error('[ImageStorySection] Invalid data');
  }

  return (
    <SectionShell
      tone={tone}
      density={density}
      sectionClassName={`image-story image-story--${variant}${reverse ? ' image-story--reverse' : ''}`}
      bare
    >
      <div className='image-story__inner'>
        <div className='image-story__visual rd-animate-panel'>
          {/* Use a plain <img> to avoid coupling to next/image at this layer. */}
          <img
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className='image-story__image'
            loading='lazy'
            decoding='async'
          />
          {caption ? <p className='image-story__caption'>{caption}</p> : null}
        </div>

        <div className='image-story__content rd-animate-up'>
          {heading.kicker ? <span className='rd-section-kicker'>{heading.kicker}</span> : null}
          <h2 className='image-story__title'>{heading.title}</h2>
          <p className='image-story__lede'>{heading.description}</p>
          {body ? <p className='image-story__body'>{body}</p> : null}

          {bullets && bullets.length > 0 ? (
            <ul className='image-story__bullets rd-animate-stagger'>
              {bullets.map(item => (
                <li key={item} className='image-story__bullet'>
                  <span className='rd-dot rd-dot--info' aria-hidden='true' />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}

          {highlights && highlights.length > 0 ? (
            <dl className='image-story__highlights'>
              {highlights.map(highlight => (
                <div key={highlight.label} className='image-story__highlight'>
                  <dt className='image-story__highlight-label'>{highlight.label}</dt>
                  <dd className='image-story__highlight-value'>{highlight.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>
      </div>
    </SectionShell>
  );
}
