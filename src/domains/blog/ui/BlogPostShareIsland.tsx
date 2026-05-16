'use client';

import { useState } from 'react';
import { Check, Copy, Facebook, Linkedin, Mail, Share2, Twitter } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type BlogPostShareIslandProps = {
  title: string;
};

function openExternalShare(url: string) {
  const w = window.open(url, '_blank', 'noopener,noreferrer');
  if (w) w.opener = null;
}

export function BlogPostShareIsland({ title }: BlogPostShareIslandProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = (platform: 'linkedin' | 'twitter' | 'facebook' | 'email' | 'copy') => {
    const currentUrl = window.location.href;
    const encodedUrl = encodeURIComponent(currentUrl);
    const encodedTitle = encodeURIComponent(title);

    switch (platform) {
      case 'linkedin':
        openExternalShare(`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`);
        break;
      case 'twitter':
        openExternalShare(
          `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`
        );
        break;
      case 'facebook':
        openExternalShare(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`);
        break;
      case 'email':
        window.location.href = `mailto:?subject=${encodedTitle}&body=${currentUrl}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(currentUrl).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        });
        break;
    }
  };

  return (
    <div className='blog-post__share'>
      <span className='text-sm mw-text-secondary'>Share:</span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button type='button' className='mw-btn mw-btn--secondary'>
            <Share2 size={14} aria-hidden='true' />
            <span>Share Article</span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='start'>
          <DropdownMenuLabel>Share</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onSelect={() => handleShare('linkedin')}>
            <Linkedin aria-hidden='true' />
            LinkedIn
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => handleShare('twitter')}>
            <Twitter aria-hidden='true' />X (Twitter)
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => handleShare('facebook')}>
            <Facebook aria-hidden='true' />
            Facebook
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => handleShare('email')}>
            <Mail aria-hidden='true' />
            Email
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onSelect={() => handleShare('copy')}>
            {copied ? <Check aria-hidden='true' /> : <Copy aria-hidden='true' />}
            {copied ? 'Copied' : 'Copy link'}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
