import { ProcessStepsSection } from '@/components/reusable/sections/core';

export interface CaseStudyProcessSectionProps {
  implementationBadgeLabel: string;
  implementationSectionTitle: string;
  implementationSectionSubtitle: string;
  howWeDidIt: {
    phase: string;
    title: string;
    description: string;
    duration: string;
  }[];
}

export function CaseStudyProcessSection({
  implementationBadgeLabel,
  implementationSectionTitle,
  implementationSectionSubtitle,
  howWeDidIt,
}: CaseStudyProcessSectionProps) {
  return (
    <ProcessStepsSection
      badge={implementationBadgeLabel}
      title={implementationSectionTitle}
      description={implementationSectionSubtitle}
      steps={howWeDidIt.map((phase, index) => ({
        number: (index + 1).toString(),
        title: phase.title,
        description: `${phase.phase}: ${phase.description}`,
      }))}
      backgroundColor='bg-section-muted'
      cssPrefix='case-study-detail-implementation'
    />
  );
}
