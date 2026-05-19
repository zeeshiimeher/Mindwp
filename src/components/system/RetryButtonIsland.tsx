'use client';

type RetryButtonIslandProps = {
  className?: string;
  label: string;
  type?: 'button' | 'submit' | 'reset';
};

export function RetryButtonIsland({
  className = 'mw-btn mw-btn--primary',
  label,
  type = 'button',
}: RetryButtonIslandProps) {
  return (
    <button type={type} onClick={() => window.location.reload()} className={className}>
      {label}
    </button>
  );
}
