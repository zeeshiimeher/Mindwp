/*
Brand tokens allowed in this file.
This is a brand-identity asset.
Do not replace with semantic tokens.
*/

type HeaderLogoSvgProps = {
  className?: string;
  variant?: 'dark' | 'light';
};

export function HeaderLogoSvg({ className = '', variant = 'dark' }: HeaderLogoSvgProps) {
  const isLight = variant === 'light';

  return (
    <svg
      width='140'
      height='32'
      viewBox='0 0 140 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <g>
        <circle cx='16' cy='16' r='14' fill='var(--brand-logo-ring)' opacity='1'></circle>
        <path
          d='M12 10C12 10 14 8 16 8C18 8 20 10 20 10'
          stroke='url(#logo-gradient-stroke-header)'
          strokeWidth='2'
          strokeLinecap='round'
        ></path>
        <path
          d='M12 16C12 16 14 14 16 14C18 14 20 16 20 16'
          stroke='url(#logo-gradient-stroke-header)'
          strokeWidth='2'
          strokeLinecap='round'
        ></path>
        <path
          d='M12 22C12 22 14 20 16 20C18 20 20 22 20 22'
          stroke='url(#logo-gradient-stroke-header)'
          strokeWidth='2'
          strokeLinecap='round'
        ></path>

        <circle cx='11' cy='10' r='1.5' fill='var(--brand-primary)'></circle>
        <circle cx='21' cy='10' r='1.5' fill='var(--brand-secondary)'></circle>
        <circle cx='11' cy='16' r='1.5' fill='var(--brand-secondary)'></circle>
        <circle cx='21' cy='16' r='1.5' fill='var(--brand-primary)'></circle>
        <circle cx='11' cy='22' r='1.5' fill='var(--brand-primary)'></circle>
        <circle cx='21' cy='22' r='1.5' fill='var(--brand-secondary)'></circle>

        <circle cx='16' cy='16' r='2' fill='url(#logo-gradient-stroke-header)'></circle>
      </g>

      <text
        x='38'
        y='21'
        fill={isLight ? 'var(--brand-white)' : 'var(--brand-dark)'}
        style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-0.5px' }}
      >
        Mind
      </text>
      <text
        x='82'
        y='21'
        fill={isLight ? 'var(--brand-white)' : 'var(--brand-primary)'}
        style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-0.5px' }}
      >
        WP
      </text>

      <defs>
        <linearGradient id='logo-gradient-header' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop
            offset='0%'
            stopColor={isLight ? 'var(--brand-white-80)' : 'var(--brand-primary)'}
          />
          <stop
            offset='100%'
            stopColor={isLight ? 'var(--brand-white-80)' : 'var(--brand-secondary)'}
          />
        </linearGradient>
        <linearGradient id='logo-gradient-stroke-header' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop offset='0%' stopColor={isLight ? 'var(--brand-white)' : 'var(--brand-primary)'} />
          <stop offset='100%' stopColor={isLight ? 'var(--brand-white)' : 'var(--brand-secondary)'} />
        </linearGradient>
      </defs>
    </svg>
  );
}
