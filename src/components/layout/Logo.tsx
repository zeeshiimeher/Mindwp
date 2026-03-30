import { FooterLogoSvg } from './FooterLogoSvg';
import { HeaderLogoSvg } from './HeaderLogoSvg';

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
