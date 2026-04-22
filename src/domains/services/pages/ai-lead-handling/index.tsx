import { aiLeadHandlingPage } from '@/domains/services/data/ai-lead-handling';
import { AiLeadHandlingRenderer } from '@/domains/services/renderers/AiLeadHandlingRenderer';

export default function AILeadHandlingPage() {
  return <AiLeadHandlingRenderer data={aiLeadHandlingPage} slug='ai-lead-handling' />;
}
