import { leadReactivationSystemPage } from '@/domains/services/data/lead-reactivation-system';
import { LeadReactivationSystemRenderer } from '@/domains/services/renderers/LeadReactivationSystemRenderer';

export default function LeadReactivationSystemPage() {
  return (
    <LeadReactivationSystemRenderer
      data={leadReactivationSystemPage}
      slug='lead-reactivation-system'
    />
  );
}
