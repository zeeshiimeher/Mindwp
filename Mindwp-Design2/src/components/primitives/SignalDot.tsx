import { cn } from '@/lib/cn';

export type SignalTone = 'cyan' | 'teal' | 'amber' | 'green' | 'purple' | 'red';

const COLOR: Record<SignalTone, string> = {
  cyan: '#35c7d8',
  teal: '#14b8a6',
  amber: '#f4b740',
  green: '#21b985',
  purple: '#9b7de0',
  red: '#e76f6f',
};

const BLOOM: Record<SignalTone, string> = {
  cyan: 'var(--mw-bloom-cyan)',
  teal: 'var(--mw-bloom-teal)',
  amber: 'var(--mw-bloom-amber)',
  green: 'var(--mw-bloom-green)',
  purple: 'var(--mw-bloom-purple)',
  red: 'var(--mw-bloom-red)',
};

/**
 * Small status dot in a signal color.
 * - glow="flat": simple soft blur (default, lightweight)
 * - glow="bloom": layered ring + halo (premium "lit" cue)
 */
export function SignalDot({
  tone = 'cyan',
  glow = 'flat',
  pulse = false,
  size = 6,
  className,
}: {
  tone?: SignalTone;
  glow?: 'none' | 'flat' | 'bloom';
  pulse?: boolean;
  size?: number;
  className?: string;
}) {
  const color = COLOR[tone];
  const boxShadow =
    glow === 'bloom' ? BLOOM[tone] : glow === 'flat' ? `0 0 8px ${color}` : 'none';
  return (
    <span
      className={cn('inline-block shrink-0 rounded-full', pulse && 'mw-pulse', className)}
      style={{ width: size, height: size, background: color, boxShadow }}
    />
  );
}
