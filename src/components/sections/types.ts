import type { ReactNode } from 'react';

/**
 * Shared types used across the production section component family.
 *
 * - These types are pure data contracts. Renderers/data adapters in
 *   `src/domains/...` should map their domain shapes to these props
 *   rather than importing data files into `src/components/**` (forbidden
 *   by validate-ui-purity.mjs).
 */

export type SectionTone = 'light' | 'soft' | 'dark' | 'gradient-blue' | 'gradient-cta';
export type SectionDensity = 'default' | 'compact' | 'spacious';
export type SectionAlign = 'left' | 'center' | 'split';

export interface SectionHeading {
  /** Eyebrow / kicker label. Optional. */
  kicker?: string;
  /** Heading text. */
  title: string;
  /** Supporting paragraph. */
  description: string;
}

export interface SectionLink {
  label: string;
  href: string;
  /** When true the link should render as the primary action button. */
  primary?: boolean;
}

export interface MediaSource {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface SectionFootnote {
  text: ReactNode;
}
