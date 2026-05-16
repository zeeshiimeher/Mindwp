import { followUpCrmPage } from '@/domains/services/data/follow-up-crm';
import FollowUpCrmRenderer from '@/domains/services/renderers/FollowUpCrmRenderer';

export default function FollowUpCrmPage() {
  return <FollowUpCrmRenderer data={followUpCrmPage} slug='follow-up-crm' />;
}
