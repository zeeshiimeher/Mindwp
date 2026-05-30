import Link from 'next/link';
import type { ReactNode } from 'react';

import { cn } from '@/lib/cn';
import { SignalDot } from '@/components/primitives/SignalDot';

type Variant = 'primary' | 'secondary';

const VARIANTS: Record<Variant, string> = {
  primary: 'bg-[#061323] text-white hover:bg-[#0e2740]',
  secondary: 'border border-[#e6eef3] bg-white text-[#08111f] hover:bg-[#f6fafc]',
};

/** Pill CTA. Renders an <a>/Link when href is given, otherwise a <button>. */
export function Button({
  href,
  variant = 'primary',
  withDot = false,
  className,
  children,
  onClick,
  type,
}: {
  href?: string;
  variant?: Variant;
  withDot?: boolean;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
}) {
  const classes = cn(
    'inline-flex items-center gap-2 rounded-full px-5 py-2.5 transition-colors',
    VARIANTS[variant],
    className
  );
  const style = { fontSize: '13.5px', fontWeight: 500 } as const;
  const content = (
    <>
      {children}
      {withDot && <SignalDot tone='cyan' />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} style={style} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type ?? 'button'} className={classes} style={style} onClick={onClick}>
      {content}
    </button>
  );
}
