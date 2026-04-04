import { SectionWrapper } from '@/components/reusable/primitives';
import { IconBenefitCard, SectionIntro } from '@/components/reusable/single';

/* case study compoenent */
import { caseStudyIcons } from './icons';

export interface CaseStudySolutionSectionProps {
  solutionBadgeLabel: string;
  solutionHeading: string;
  solutionDescription: string;
  whatWeDid: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export function CaseStudySolutionSection({
  solutionBadgeLabel,
  solutionHeading,
  solutionDescription,
  whatWeDid,
}: CaseStudySolutionSectionProps) {
  return (
    <SectionWrapper className='case-study-detail-solution'>
      <SectionIntro
        badge={solutionBadgeLabel}
        title={solutionHeading}
        description={solutionDescription}
        cssPrefix='case-study-detail-solution-header'
      />

      <div className='case-study-detail-solution__grid'>
        {whatWeDid.map((item, index) => {
          const Icon = caseStudyIcons[item.icon] ?? caseStudyIcons.HelpCircle;
          return (
            <IconBenefitCard
              key={index}
              icon={Icon}
              title={item.title}
              description={item.description}
              iconType='primary'
              variant='left'
            />
          );
        })}
      </div>
    </SectionWrapper>
  );
}
