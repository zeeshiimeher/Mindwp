import Image from 'next/image';

import { SectionWrapper, SplitLayout } from '@/components/reusable/primitives';
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
  backgroundColor = '',
  cssPrefix = '',
}: ImageStatsServicesSectionProps) {
  return (
    <SectionWrapper background={backgroundColor} className={cn(BLOCK, cssPrefix)}>
      <SplitLayout breakpoint='lg' gap={8}>
        <Card className={`${BLOCK}__image-card`}>
          <Image
            src={image.src}
            alt={image.alt}
            width={800}
            height={600}
            className={`${BLOCK}__image`}
          />
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
      </SplitLayout>

      <div className={`${BLOCK}__services`}>
        {services.map((service, index) => (
          <article key={`${service.title}-${index}`} className={`${BLOCK}__service`}>
            <h3 className={`${BLOCK}__service-title`}>{service.title}</h3>
            <p className={`${BLOCK}__service-description`}>{service.description}</p>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
