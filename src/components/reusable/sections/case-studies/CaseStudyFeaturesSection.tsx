import { FeatureChecklistCardsSection } from '@/components/reusable/sections/core';

export interface CaseStudyFeaturesSectionProps {
  techStackBadgeLabel: string;
  techStackSectionTitle: string;
  techStackSectionSubtitle: string;
  featuresUsed: {
    category: string;
    features: string[];
  }[];
}

export function CaseStudyFeaturesSection({
  techStackBadgeLabel,
  techStackSectionTitle,
  techStackSectionSubtitle,
  featuresUsed,
}: CaseStudyFeaturesSectionProps) {
  return (
    <FeatureChecklistCardsSection
      badge={techStackBadgeLabel}
      title={techStackSectionTitle}
      description={techStackSectionSubtitle}
      featureCategories={featuresUsed.map(category => ({
        title: category.category,
        features: category.features,
      }))}
      columns={3}
      cssPrefix='case-study-detail-features'
    />
  );
}
