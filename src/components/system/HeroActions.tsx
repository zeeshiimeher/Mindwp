'use client';

import { ActionButtons, type ActionButtonsProps } from '@/components/system/ActionButtons';

export interface HeroActionsProps extends ActionButtonsProps {}

export function HeroActions(props: HeroActionsProps) {
  return <ActionButtons {...props} />;
}
