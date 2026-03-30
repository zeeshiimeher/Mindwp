import React from 'react';
import Link from 'next/link';

type AnchorLikeProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

export type InternalLinkProps = AnchorLikeProps & {
  href: string;
  children: React.ReactNode;
};

export function InternalLink({ href, ...props }: InternalLinkProps) {
  return <Link href={href} {...props} />;
}

export default InternalLink;
