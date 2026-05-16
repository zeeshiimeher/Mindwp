import { leadResponseHandlingPage } from '@/domains/services/data/lead-response-handling';
import LeadResponseHandlingRenderer from '@/domains/services/renderers/LeadResponseHandlingRenderer';

export default function LeadResponseHandlingPage() {
  return (
    <LeadResponseHandlingRenderer data={leadResponseHandlingPage} slug='lead-response-handling' />
  );
}
