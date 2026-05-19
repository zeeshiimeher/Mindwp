import { followUpCrmPage } from '@/domains/services/data/follow-up-crm';
import FollowUpCRMRenderer from '@/domains/services/renderers/FollowUpCRMRenderer';

export default function FollowUpCrmPage() {
  return <FollowUpCRMRenderer data={followUpCrmPage} slug='follow-up-crm' />;
}
