import Link from 'next/link';

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Features', href: '/features' },
  { label: 'Industries', href: '/industries' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
];

type NavProps = {
  className?: string;
  mobile?: boolean;
};

export function Nav({ className = '', mobile = false }: NavProps) {
  return (
    <nav className={className}>
      {navLinks.map((link, index) => (
        <Link
          key={link.label}
          href={link.href}
          className={
            mobile
              ? `link-primary header-mobile-link-${index + 1} py-2 transition-colors`
              : `link-primary header-nav-link-${index + 1} transition-colors`
          }
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
