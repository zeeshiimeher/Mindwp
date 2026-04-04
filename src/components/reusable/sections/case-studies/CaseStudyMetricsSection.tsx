import { SectionWrapper } from '@/components/reusable/primitives';
import { SectionIntro } from '@/components/reusable/single';
import { Card } from '@/components/reusable/single/Card';

import { caseStudyIcons } from './icons';

export interface CaseStudyMetricsSectionProps {
  resultsSectionTitle: string;
  keyMetrics: {
    label: string;
    value: string;
    icon: string;
    color?: string;
  }[];
}

export function CaseStudyMetricsSection({
  resultsSectionTitle,
  keyMetrics,
}: CaseStudyMetricsSectionProps) {
  return (
    <SectionWrapper container='none' className='case-study-detail-metrics'>
      <div className='case-study-detail-metrics-container-1 l-container'>
        <SectionIntro title={resultsSectionTitle} cssPrefix='case-study-detail-metrics-header' />

        <div className='case-study-detail-metrics-grid'>
          {keyMetrics.map((metric, index) => {
            const Icon = caseStudyIcons[metric.icon];
            const accentClass = metric.color || 'case-study-detail-metrics__accent';
            return (
              <Card key={index} className='case-study-detail-metrics__card'>
                {Icon ? (
                  <Icon className={`case-study-detail-metrics__icon ${accentClass}`} />
                ) : null}
                <div className={`case-study-detail-metrics__value ${accentClass}`}>
                  {metric.value}
                </div>
                <div className='case-study-detail-metrics__label'>{metric.label}</div>
              </Card>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
