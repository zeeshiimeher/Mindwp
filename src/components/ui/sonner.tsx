'use client';

import React from 'react';
import { Toaster as Sonner, ToasterProps } from 'sonner';

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      className='toaster group'
      style={
        {
          '--normal-bg': 'var(--c-surface)',
          '--normal-text': 'var(--c-dark)',
          '--normal-border': 'var(--c-border-alpha)',
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
