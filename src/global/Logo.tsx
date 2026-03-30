import { FooterLogoSvg } from './logos/FooterLogoSvg';
import { HeaderLogoSvg } from './logos/HeaderLogoSvg';

export function Logo({
  className = '',
  variant = 'dark',
}: {
  className?: string;
  variant?: 'dark' | 'light' | 'footer';
}) {
  if (variant === 'footer') {
    return <FooterLogoSvg className={className} />;
  }

  return <HeaderLogoSvg className={className} variant={variant} />;
}

// Simplified version for mobile
export function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      {/* Outer circle with gradient */}
      <circle cx='16' cy='16' r='14' fill='url(#logo-mark-gradient)' opacity='0.1' />

      {/* Brain/Circuit paths */}
      <path
        d='M12 10C12 10 14 8 16 8C18 8 20 10 20 10'
        stroke='url(#logo-mark-gradient-stroke)'
        strokeWidth='2'
        strokeLinecap='round'
      />
      <path
        d='M12 16C12 16 14 14 16 14C18 14 20 16 20 16'
        stroke='url(#logo-mark-gradient-stroke)'
        strokeWidth='2'
        strokeLinecap='round'
      />
      <path
        d='M12 22C12 22 14 20 16 20C18 20 20 22 20 22'
        stroke='url(#logo-mark-gradient-stroke)'
        strokeWidth='2'
        strokeLinecap='round'
      />

      {/* Connection dots */}
      <circle cx='11' cy='10' r='1.5' fill='var(--brand-primary)' />
      <circle cx='21' cy='10' r='1.5' fill='var(--brand-purple)' />
      <circle cx='11' cy='16' r='1.5' fill='var(--brand-purple)' />
      <circle cx='21' cy='16' r='1.5' fill='var(--brand-primary)' />
      <circle cx='11' cy='22' r='1.5' fill='var(--brand-primary)' />
      <circle cx='21' cy='22' r='1.5' fill='var(--brand-purple)' />

      {/* Center spark */}
      <circle cx='16' cy='16' r='2' fill='url(#logo-mark-gradient-stroke)' />

      {/* Gradients */}
      <defs>
        <linearGradient id='logo-mark-gradient' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop offset='0%' stopColor='var(--brand-primary)' />
          <stop offset='100%' stopColor='var(--brand-purple)' />
        </linearGradient>
        <linearGradient id='logo-mark-gradient-stroke' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop offset='0%' stopColor='var(--brand-primary)' />
          <stop offset='100%' stopColor='var(--brand-purple)' />
        </linearGradient>
      </defs>
    </svg>
  );
}
