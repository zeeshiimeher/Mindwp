import { Sparkles } from 'lucide-react';

import { SectionWrapper } from '@/components/reusable/primitives';
import { ChecklistRow, SectionIntro } from '@/components/reusable/single';
import { Card } from '@/components/reusable/single/Card';
import { cn } from '@/components/ui/utils';

const BLOCK = 'c-feature-stats-mockup-section';

interface PerformanceMetric {
  label: string;
  value: string;
  tone?: 'primary' | 'accent';
}

export interface FeatureStatsMockupSectionProps {
  badge?: string;
  title: string;
  description?: string;
  narrativeTitle: string;
  narrativeParagraph: string;
  checklist: string[];
  panelTitle: string;
  panelPrimaryMetric: PerformanceMetric;
  panelSecondaryMetric: PerformanceMetric;
  panelNoteTitle: string;
  panelNoteDescription: string;
  backgroundColor?: string;
  cssPrefix?: string;
}

export function FeatureStatsMockupSection({
  badge,
  title,
  description,
  narrativeTitle,
  narrativeParagraph,
  checklist,
  panelTitle,
  panelPrimaryMetric,
  panelSecondaryMetric,
  panelNoteTitle,
  panelNoteDescription,
  backgroundColor = '',
  cssPrefix = '',
}: FeatureStatsMockupSectionProps) {
  return (
    <SectionWrapper background={backgroundColor} className={cn(BLOCK, cssPrefix)}>
      <SectionIntro
        {...(badge !== undefined && { badge })}
        title={title}
        {...(description !== undefined && { description })}
        className={`${BLOCK}__header`}
      />

      <Card className={`${BLOCK}__shell`}>
        <div className={`${BLOCK}__layout`}>
          <div className={`${BLOCK}__content`}>
            <h3 className={`${BLOCK}__narrative-title`}>{narrativeTitle}</h3>
            <p className={`${BLOCK}__narrative-description`}>{narrativeParagraph}</p>

            <ul className={`${BLOCK}__checklist`}>
              {checklist.map((item, index) => (
                <ChecklistRow key={index}>{item}</ChecklistRow>
              ))}
            </ul>
          </div>

          <div className={`${BLOCK}__visual`} aria-label='Performance visual'>
            <Card className={`${BLOCK}__mockup`}>
              <div className={`${BLOCK}__mockup-head`}>
                <div className={`${BLOCK}__mockup-title-wrap`}>
                  <Sparkles className={`${BLOCK}__mockup-icon`} aria-hidden='true' />
                  <p className={`${BLOCK}__mockup-title`}>{panelTitle}</p>
                </div>
                <span className={`${BLOCK}__mockup-chip`}>Details</span>
              </div>

              <div className={`${BLOCK}__metrics`}>
                <div>
                  <p className={`${BLOCK}__metric-value`}>{panelPrimaryMetric.value}</p>
                  <p className={`${BLOCK}__metric-label`}>{panelPrimaryMetric.label}</p>
                </div>
                <div>
                  <p className={`${BLOCK}__metric-value`}>{panelSecondaryMetric.value}</p>
                  <p className={`${BLOCK}__metric-label`}>{panelSecondaryMetric.label}</p>
                </div>
              </div>

              <div className={`${BLOCK}__bars`} aria-hidden='true'>
                <div className={`${BLOCK}__bars-column ${BLOCK}__bars-column--left`}>
                  {Array.from({ length: 8 }).map((_, index) => (
                    <span key={index} />
                  ))}
                </div>
                <div className={`${BLOCK}__bars-column ${BLOCK}__bars-column--right`}>
                  {Array.from({ length: 8 }).map((_, index) => (
                    <span key={index} />
                  ))}
                </div>
              </div>

              <div className={`${BLOCK}__note`}>
                <p className={`${BLOCK}__note-title`}>{panelNoteTitle}</p>
                <p className={`${BLOCK}__note-description`}>{panelNoteDescription}</p>
              </div>
            </Card>
          </div>
        </div>
      </Card>
    </SectionWrapper>
  );
}
