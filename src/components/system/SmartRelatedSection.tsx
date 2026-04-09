import RelatedContentSection, {
  type RelatedContentBlock,
} from '@/components/system/RelatedContentSection';
import { SECTION_BEHAVIOR } from '@/config/section-intelligence';

interface SmartRelatedSectionProps {
  blocks: RelatedContentBlock[];
  /** Show the recommendation CTA at the bottom */
  showCTA?: boolean;
  /** Section type — controls behavior via section-intelligence rules */
  sectionType?: string;
}

export function SmartRelatedSection({
  blocks,
  showCTA = true,
  sectionType,
}: SmartRelatedSectionProps) {
  const behavior = sectionType ? SECTION_BEHAVIOR[sectionType] : undefined;
  if (behavior && !behavior.allowLinks) return null;

  if (blocks.length === 0) return null;

  return (
    <RelatedContentSection blocks={blocks} showCTA={showCTA && behavior?.allowCTA !== false} />
  );
}
