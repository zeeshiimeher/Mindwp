import type { IllustrationVariant } from '../../types';

import { CalendarUI } from './CalendarUI';
import { ChatUI } from './ChatUI';
import { DashboardUI } from './DashboardUI';
import { FlowUI } from './FlowUI';
import { PipelineUI } from './PipelineUI';

export function getIllustration(type: IllustrationVariant) {
  switch (type) {
    case 'calendar':
      return <CalendarUI />;
    case 'pipeline':
      return <PipelineUI />;
    case 'chat':
      return <ChatUI />;
    case 'flow':
      return <FlowUI />;
    case 'dashboard':
    default:
      return <DashboardUI />;
  }
}
