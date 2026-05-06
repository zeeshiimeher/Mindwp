import type { AccentKey, StatusTone } from '@/types/ui';

interface StatusBadgeProps {
  variant: StatusTone;
  label?: string;
  accent?: AccentKey;
  className?: string;
}

const VARIANT_LABELS: Record<StatusTone, string> = {
  active: 'Active',
  unowned: 'Unowned',
  leaking: 'Leaking',
  handled: 'Handled',
  scattered: 'Scattered',
  controlled: 'Controlled',
};

/**
 * StatusBadge — a dot + label badge for operational status display.
 * Used in signal rows, structure layers, shift panels.
 * Resolves color via `data-variant` + CSS tokens.
 */
export function StatusBadge({ variant, label, accent, className }: StatusBadgeProps) {
  return (
    <span
      className={['rd-status-badge', className].filter(Boolean).join(' ')}
      data-variant={variant}
      data-accent={accent}
    >
      <span className='rd-status-badge__dot' aria-hidden='true' />
      {label ?? VARIANT_LABELS[variant]}
    </span>
  );
}
