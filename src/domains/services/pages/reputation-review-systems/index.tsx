import { reputationReviewSystemsPage } from '@/domains/services/data/reputation-review-systems';
import { ReputationReviewSystemsRenderer } from '@/domains/services/renderers/ReputationReviewSystemsRenderer';

export default function ReputationReviewSystemsPage() {
  return (
    <ReputationReviewSystemsRenderer
      data={reputationReviewSystemsPage}
      slug='reputation-review-systems'
    />
  );
}
