import { CTA_LABELS } from '@/config/ctaLabels';

export const CTA_CONFIG = {
  primary: {
    label: CTA_LABELS.PRIMARY,
    type: 'contact',
  },
  demo: {
    label: CTA_LABELS.DEMO,
    type: 'demo',
  },
  booking: {
    label: CTA_LABELS.REVIEW_BOOKING,
    type: 'contact',
  },
} as const;
