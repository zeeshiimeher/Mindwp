import { Button, type ButtonProps, SectionIntro } from '@/components/reusable/single';
import { Card } from '@/components/reusable/single/Card';
import { cn } from '@/components/ui/utils';

const BLOCK = 'c-narrative-stats-section';

interface NarrativeStatItem {
  value: string;
  label: string;
}

export interface NarrativeStatsSectionProps {
  badge?: string;
  title: string;
  description?: string;
  tagline?: string;
  narrativeHeading: string;
  narrativeParagraphs: string[];
  primaryAction?: ButtonProps;
  secondaryAction?: ButtonProps;
  stats: NarrativeStatItem[];
  backgroundColor?: string;
  cssPrefix?: string;
}

export function NarrativeStatsSection({
  badge,
  title,
  description,
  tagline,
  narrativeHeading,
  narrativeParagraphs,
  primaryAction,
  secondaryAction,
  stats,
  backgroundColor = 'bg-white',
  cssPrefix = '',
}: NarrativeStatsSectionProps) {
  const backgroundClassName =
    backgroundColor === 'default' || backgroundColor === 'bg-background'
      ? `${BLOCK}--bg-default`
      : backgroundColor === 'bg-muted/30'
        ? `${BLOCK}--bg-muted`
        : `${BLOCK}--bg-white`;

  return (
    <section className={cn(BLOCK, 'l-section', backgroundClassName, cssPrefix)}>
      <div className='l-container'>
        <SectionIntro
          {...(badge !== undefined && { badge })}
          title={title}
          {...(description !== undefined && { description })}
          className={`${BLOCK}__header`}
        />

        <Card className={`${BLOCK}__card`}>
          <div className={`${BLOCK}__layout`}>
            <div className={`${BLOCK}__narrative`}>
              {tagline && <p className={`${BLOCK}__tagline`}>{tagline}</p>}
              <h3 className={`${BLOCK}__narrative-title`}>{narrativeHeading}</h3>
              <div className={`${BLOCK}__paragraphs`}>
                {narrativeParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              {(primaryAction || secondaryAction) && (
                <div className={`${BLOCK}__actions`}>
                  {primaryAction && <Button variant='secondary' {...primaryAction} />}
                  {secondaryAction && <Button variant='link' {...secondaryAction} />}
                </div>
              )}
            </div>

            <div className={`${BLOCK}__stats`}>
              {stats.map((stat, index) => (
                <div key={`${stat.value}-${index}`} className={`${BLOCK}__stat`}>
                  <p className={`${BLOCK}__stat-value`}>{stat.value}</p>
                  <p className={`${BLOCK}__stat-label`}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
