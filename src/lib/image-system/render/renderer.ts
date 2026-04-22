import { createElement } from 'react';
import { Resvg } from '@resvg/resvg-js';
import { readFile } from 'node:fs/promises';
import satori from 'satori';
import sharp from 'sharp';

import type {
  BrightnessResult,
  ContentDomain,
  OverlayDesignContext,
  TuneOverrides,
} from '../types';

import { CenterLayout } from './layouts/CenterLayout';
import { SplitLayout } from './layouts/SplitLayout';
import { getBrightness, getOverlayStrength, getTextColor, wrapTitle } from './contentAware';
import { resolveRenderCopy } from './renderCopy';

type LayoutType = 'split' | 'center';

const CANVAS = {
  width: 1200,
  height: 630,
  titleFontSize: 64,
  lineHeight: 70,
  splitTextWidth: 520,
  centerTextWidth: 810,
} as const;

export type RenderInput = {
  domain: 'blog' | 'case-study' | 'resource' | 'service' | 'feature';
  title: string;
  subtitle?: string;
  image?: string;
  type?: string;
};

export interface RenderMetrics {
  titleLines: string[];
  fontSize: number;
  lineHeight: number;
  maxTextWidth: number;
  layoutType: LayoutType;
  titleColor: string;
  subtitleColor: string;
  overlayColor: string;
  textAlign: 'left' | 'center';
}

export interface LayoutRenderProps {
  width: number;
  height: number;
  title: string;
  subtitle: string | null;
  label?: string;
  badge: string | null;
  imageSrc: string | null;
  brightness: BrightnessResult;
  design: OverlayDesignContext;
  metrics: RenderMetrics;
}

export interface RenderImageOptions {
  imageBuffer: Buffer;
  title: string;
  label?: string;
  brightness: BrightnessResult;
  design: OverlayDesignContext;
  outputWidth: number;
  outputHeight: number;
  tuneOverrides?: TuneOverrides;
}

export interface RenderImageResult {
  overlay: Buffer;
  metrics: RenderMetrics;
}

let fontCache: Promise<
  Array<{ name: string; data: Buffer; weight: 400 | 600; style: 'normal' }>
> | null = null;

function dataUri(buffer: Buffer, mimeType: string): string {
  return `data:${mimeType};base64,${buffer.toString('base64')}`;
}

function resolveLayout(domain: ContentDomain): LayoutType {
  switch (domain) {
    case 'services':
    case 'features':
      return 'split';
    case 'blog':
    case 'industries':
    case 'case-studies':
    case 'resources':
      return 'center';
    default:
      throw new Error(`Invalid domain for OG renderer: ${domain}`);
  }
}

function buildMetrics(
  title: string,
  domain: ContentDomain,
  brightness: BrightnessResult
): RenderMetrics {
  const layoutType = resolveLayout(domain);
  const tone = getBrightness(brightness);
  const textColors = getTextColor(layoutType);
  const fontSize =
    layoutType === 'split'
      ? 58
      : domain === 'case-studies'
        ? 56
        : domain === 'resources' || domain === 'industries'
          ? 60
          : CANVAS.titleFontSize;
  const lineHeight =
    layoutType === 'split'
      ? 62
      : domain === 'case-studies'
        ? 60
        : domain === 'resources' || domain === 'industries'
          ? 64
          : CANVAS.lineHeight;

  return {
    titleLines: wrapTitle(title, domain),
    fontSize,
    lineHeight,
    maxTextWidth: layoutType === 'split' ? CANVAS.splitTextWidth : CANVAS.centerTextWidth,
    layoutType,
    titleColor: textColors.title,
    subtitleColor: textColors.subtitle,
    overlayColor: getOverlayStrength(tone, domain),
    textAlign: layoutType === 'split' ? 'left' : 'center',
  };
}

async function loadFonts() {
  if (!fontCache) {
    fontCache = Promise.all([
      readFile(new URL('../../../assets/fonts/Inter-Regular.woff', import.meta.url)),
      readFile(new URL('../../../assets/fonts/Inter-SemiBold.woff', import.meta.url)),
    ]).then(([regular, semibold]) => [
      { name: 'Inter', data: regular, weight: 400 as const, style: 'normal' as const },
      { name: 'Inter', data: semibold, weight: 600 as const, style: 'normal' as const },
    ]);
  }

  return fontCache;
}

async function prepareImageSource(buffer: Buffer): Promise<string> {
  const prepared = await sharp(buffer)
    .resize(CANVAS.width, CANVAS.height, { fit: 'cover', position: sharp.strategy.attention })
    .blur(1.2)
    .modulate({ brightness: 0.82, saturation: 0.9 })
    .jpeg({ quality: 92, mozjpeg: true })
    .toBuffer();

  return dataUri(prepared, 'image/jpeg');
}

function renderLayout(layoutType: LayoutType, props: LayoutRenderProps) {
  return layoutType === 'split'
    ? createElement(SplitLayout, props)
    : createElement(CenterLayout, props);
}

export async function renderImage(options: RenderImageOptions): Promise<RenderImageResult> {
  void options.tuneOverrides;

  const renderCopy = resolveRenderCopy(options.title, options.design);
  const safeTitle = renderCopy.title.replace(/\s+/g, ' ').trim() || 'Untitled';
  const safeSubtitle = renderCopy.subtitle?.replace(/\s+/g, ' ').trim() || null;
  const layoutType = resolveLayout(options.design.domain);

  if (
    layoutType === 'center' &&
    options.design.visualMode === 'real' &&
    options.imageBuffer.length === 0
  ) {
    throw new Error(`Missing image for center layout domain: ${options.design.domain}`);
  }

  const metrics = buildMetrics(safeTitle, options.design.domain, options.brightness);
  const fonts = await loadFonts();
  const imageSrc =
    layoutType === 'center' && options.design.visualMode === 'real'
      ? await prepareImageSource(options.imageBuffer)
      : null;

  const svg = await satori(
    renderLayout(layoutType, {
      width: CANVAS.width,
      height: CANVAS.height,
      title: safeTitle,
      subtitle: safeSubtitle,
      label: options.label,
      badge: options.design.badge,
      imageSrc,
      brightness: options.brightness,
      design: options.design,
      metrics,
    }),
    {
      width: CANVAS.width,
      height: CANVAS.height,
      fonts,
    }
  );

  const pngBuffer = new Resvg(svg, {
    fitTo: { mode: 'width', value: CANVAS.width },
  })
    .render()
    .asPng();

  const overlay = await sharp(pngBuffer)
    .resize(options.outputWidth, options.outputHeight)
    .webp({ quality: 90 })
    .toBuffer();

  return { overlay, metrics };
}
