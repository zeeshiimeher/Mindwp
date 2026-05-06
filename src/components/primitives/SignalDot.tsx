import type { AccentKey } from '@/domains/home/data/homepage';

interface SignalDotProps {
  accent?: AccentKey;
  className?: string;
}

/**
 * SignalDot — a small colored dot that signals status or accent.
 * Uses `data-accent` for color resolution via CSS tokens.
 * Purely visual, always aria-hidden.
 */
export function SignalDot({ accent, className }: SignalDotProps) {
  return (
    <span
      className={['rd-signal-dot', className].filter(Boolean).join(' ')}
      data-accent={accent}
      aria-hidden='true'
    />
  );
}
