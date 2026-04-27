export interface OperationalRow {
  name: string;
  meta: string;
  status: 'good' | 'risk' | 'warn' | 'neutral';
  statusLabel: string;
}

interface OperationalStatusMockupProps {
  rows: readonly OperationalRow[];
  title: string;
  subtitle: string;
  brand: string;
  footerPrimary: string;
  footerSecondary: string;
}

export function OperationalStatusMockup({
  rows,
  title,
  subtitle,
  brand,
  footerPrimary,
  footerSecondary,
}: OperationalStatusMockupProps) {
  return (
    <div className='rd-sws-mockup rd-float-subtle' aria-hidden='true'>
      <div className='rd-sws-mockup__bar'>
        <div className='rd-sws-mockup__bar-left'>
          <span className='rd-sws-mockup__bar-dot' />
          <span className='rd-sws-mockup__bar-dot' />
          <span className='rd-sws-mockup__bar-dot' />
        </div>
        <span>{brand}</span>
      </div>

      <div className='rd-sws-mockup__title'>{title}</div>
      <div className='rd-sws-mockup__subtitle'>{subtitle}</div>

      <ul className='rd-sws-mockup__list rd-stagger'>
        {rows.map(row => (
          <li key={row.name} className='rd-sws-mockup__row'>
            <span className={`rd-dot rd-dot--${row.status} rd-pulse`} />
            <span>
              <span className='rd-sws-mockup__row-name'>{row.name}</span>
              <span className='rd-sws-mockup__row-meta'> · {row.meta}</span>
            </span>
            <span className={`rd-sws-mockup__row-status rd-sws-mockup__row-status--${row.status}`}>
              {row.statusLabel}
            </span>
          </li>
        ))}
      </ul>

      <div className='rd-sws-mockup__footer'>
        <span>{footerPrimary}</span>
        <span>{footerSecondary}</span>
      </div>
    </div>
  );
}
