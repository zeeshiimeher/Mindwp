import { SectionIntro } from '@/components/reusable/single';
import { Card } from '@/components/reusable/single/Card';
import { cn } from '@/components/ui/utils';

const BLOCK = 'c-image-stats-services-section';

interface SectionStatItem {
  value: string;
  label: string;
  description: string;
}

interface SectionServiceItem {
  title: string;
  description: string;
}

interface SectionImage {
  src: string;
  alt: string;
}

export interface ImageStatsServicesSectionProps {
  badge?: string;
  title: string;
  description?: string;
  image: SectionImage;
  narrativeTitle: string;
  narrativeParagraphs: string[];
  stats: SectionStatItem[];
  services: SectionServiceItem[];
  backgroundColor?: string;
  cssPrefix?: string;
}

export function ImageStatsServicesSection({
  badge,
  title,
  description,
  image,
  narrativeTitle,
  narrativeParagraphs,
  stats,
  services,
  backgroundColor = 'bg-muted/30',
  cssPrefix = '',
}: ImageStatsServicesSectionProps) {
  const backgroundClassName =
    backgroundColor === 'default' || backgroundColor === 'bg-background'
      ? `${BLOCK}--bg-default`
      : backgroundColor === 'bg-white'
        ? `${BLOCK}--bg-white`
        : `${BLOCK}--bg-muted`;

  return (
    <section className={cn(BLOCK, 'l-section', backgroundClassName, cssPrefix)}>
      <div className='l-container'>
        <div className={`${BLOCK}__top`}>
          <Card className={`${BLOCK}__image-card`}>
            <img src={image.src} alt={image.alt} className={`${BLOCK}__image`} loading='lazy' />
          </Card>

          <div className={`${BLOCK}__content`}>
            <SectionIntro
              {...(badge !== undefined && { badge })}
              title={title}
              {...(description !== undefined && { description })}
              className={`${BLOCK}__header`}
            />

            <h3 className={`${BLOCK}__narrative-title`}>{narrativeTitle}</h3>
            <div className={`${BLOCK}__narrative`}>
              {narrativeParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className={`${BLOCK}__stats`}>
              {stats.map((stat, index) => (
                <div key={`${stat.value}-${index}`} className={`${BLOCK}__stat`}>
                  <p className={`${BLOCK}__stat-value`}>{stat.value}</p>
                  <p className={`${BLOCK}__stat-label`}>{stat.label}</p>
                  <p className={`${BLOCK}__stat-description`}>{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`${BLOCK}__services`}>
          {services.map((service, index) => (
            <article key={`${service.title}-${index}`} className={`${BLOCK}__service`}>
              <h3 className={`${BLOCK}__service-title`}>{service.title}</h3>
              <p className={`${BLOCK}__service-description`}>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
