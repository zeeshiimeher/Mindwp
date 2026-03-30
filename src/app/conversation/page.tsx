import { buildMetadata } from '@/lib/seo/metadata';
import { ConversationPage } from '@/screens/Conversation';

export const dynamic = 'force-static';
export const revalidate = false;

export const metadata = buildMetadata({
  title: 'Strategy Conversation',
  description:
    'Book a structured strategy conversation to review website foundations, enquiry handling, and system alignment.',
  path: '/conversation',
});

export default function Page() {
  return <ConversationPage />;
}
