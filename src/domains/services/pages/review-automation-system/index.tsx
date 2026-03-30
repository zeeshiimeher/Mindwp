import { reviewAutomationSystemPage } from '@/domains/services/data/review-automation-system';
import { ReviewAutomationSystemRenderer } from '@/domains/services/renderers/ReviewAutomationSystemRenderer';

export default function ReviewAutomationSystemPage() {
  return (
    <ReviewAutomationSystemRenderer
      data={reviewAutomationSystemPage}
      slug='review-automation-system'
    />
  );
}
