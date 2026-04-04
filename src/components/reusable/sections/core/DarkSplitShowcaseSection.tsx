import { SectionWrapper } from '@/components/reusable/primitives';
import { Button, type ButtonProps, ChecklistRow, SectionIntro } from '@/components/reusable/single';
import { Card } from '@/components/reusable/single/Card';
import { cn } from '@/components/ui/utils';

const BLOCK = 'c-dark-split-showcase-section';

interface DarkShowcasePanel {
  eyebrow?: string;
  title: string;
  description: string;
  checklist: string[];
  primaryAction?: ButtonProps;
  secondaryAction?: ButtonProps;
}

export interface DarkSplitShowcaseSectionProps {
  badge?: string;
  title: string;
  description?: string;
  headerPrimaryAction?: ButtonProps;
  headerSecondaryAction?: ButtonProps;
  introHeading: string;
  introDescription: string;
  primaryAction?: ButtonProps;
  secondaryAction?: ButtonProps;
  panels: [DarkShowcasePanel, DarkShowcasePanel];
  cssPrefix?: string;
}

export function DarkSplitShowcaseSection({
  badge,
  title,
  description,
  headerPrimaryAction,
  headerSecondaryAction,
  introHeading,
  introDescription,
  primaryAction,
  secondaryAction,
  panels,
  cssPrefix = '',
}: DarkSplitShowcaseSectionProps) {
  return (
    <SectionWrapper className={cn(BLOCK, cssPrefix)}>
      <SectionIntro
        {...(badge !== undefined && { badge })}
        title={title}
        {...(description !== undefined && { description })}
        {...(headerPrimaryAction !== undefined && { primaryAction: headerPrimaryAction })}
        {...(headerSecondaryAction !== undefined && { secondaryAction: headerSecondaryAction })}
        className={`${BLOCK}__header`}
      />

      <div className={`${BLOCK}__intro`}>
        <div>
          <h3 className={`${BLOCK}__intro-title`}>{introHeading}</h3>
          <p className={`${BLOCK}__intro-description`}>{introDescription}</p>
        </div>
        {(primaryAction || secondaryAction) && (
          <div className={`${BLOCK}__intro-actions`}>
            {primaryAction && <Button variant='white' {...primaryAction} />}
            {secondaryAction && <Button variant='outline-light' {...secondaryAction} />}
          </div>
        )}
      </div>

      <div className={`${BLOCK}__panels`}>
        {panels.map((panel, index) => (
          <Card
            key={`${panel.title}-${index}`}
            className={cn(`${BLOCK}__panel`, index === 1 && `${BLOCK}__panel--raised`)}
          >
            {panel.eyebrow && <p className={`${BLOCK}__panel-eyebrow`}>{panel.eyebrow}</p>}
            <h3 className={`${BLOCK}__panel-title`}>{panel.title}</h3>
            <p className={`${BLOCK}__panel-description`}>{panel.description}</p>

            <ul className={`${BLOCK}__panel-checklist`}>
              {panel.checklist.map((item, itemIndex) => (
                <ChecklistRow key={itemIndex}>{item}</ChecklistRow>
              ))}
            </ul>

            {(panel.primaryAction || panel.secondaryAction) && (
              <div className={`${BLOCK}__panel-actions`}>
                {panel.primaryAction && <Button variant='white' {...panel.primaryAction} />}
                {panel.secondaryAction && (
                  <Button variant='outline-light' {...panel.secondaryAction} />
                )}
              </div>
            )}
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
