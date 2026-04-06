import { readFile } from 'node:fs/promises';

import { Resvg } from '@resvg/resvg-js';
import { createElement } from 'react';
import sharp from 'sharp';
import satori from 'satori';

import type { BrightnessResult, OverlayDesignContext, TuneOverrides } from '../types';
import { calculateTitleLayout } from '../pipeline/titleLayout';

import { L2Focused } from './layouts/L2Focused';
import { L3Bold } from './layouts/L3Bold';
import { Split } from './layouts/Split';
import { resolveRenderCopy } from './renderCopy';

type LayoutName = 'L2Focused' | 'L3Bold' | 'Split';

interface LayoutTokens {
  layoutName: LayoutName;
  textBlockXPercent: number;
  textBlockYPercent: number;
  maxTextWidth: number;
  fontScale: number;
  lineHeight: number;
  letterSpacing: number;
  gradientStrength: number;
  vignetteStrength: number;
}

export interface RenderMetrics {
  titleLines: string[];
  fontSize: number;
  lineHeight: number;
  textBlockWidth: number;
  textX: number;
  titleY: number;
  maxTextWidth: number;
  textBlockXPercent: number;
  gradientStrength: number;
  vignetteStrength: number;
  letterSpacing: number;
  layoutName: LayoutName;
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

function getLayoutTokens(
  design: OverlayDesignContext,
  tuneOverrides?: TuneOverrides
): LayoutTokens {
  const base: Record<LayoutName, LayoutTokens> = {
    L2Focused: {
      layoutName: 'L2Focused',
      textBlockXPercent: 0.42,
      textBlockYPercent: 0.54,
      maxTextWidth: 780,
      fontScale: 1.54,
      lineHeight: 1.02,
      letterSpacing: -0.7,
      gradientStrength: 1.14,
      vignetteStrength: 1.28,
    },
    L3Bold: {
      layoutName: 'L3Bold',
      textBlockXPercent: 0.36,
      textBlockYPercent: 0.57,
      maxTextWidth: 820,
      fontScale: 1.7,
      lineHeight: 1.0,
      letterSpacing: -0.9,
      gradientStrength: 1.22,
      vignetteStrength: 1.42,
    },
    Split: {
      layoutName: 'Split',
      textBlockXPercent: 0.34,
      textBlockYPercent: 0.54,
      maxTextWidth: 480,
      fontScale: 1.45,
      lineHeight: 1.03,
      letterSpacing: -0.65,
      gradientStrength: 1.08,
      vignetteStrength: 1.18,
    },
  };

  const layoutName =
    design.domain === 'services' && design.layout === 3
      ? 'L2Focused'
      : design.layout === 3
        ? 'L3Bold'
        : design.layout === 2
          ? 'L2Focused'
          : 'Split';
  const tokens = { ...base[layoutName] };

  if (tuneOverrides?.titleScale) tokens.fontScale *= tuneOverrides.titleScale;
  if (tuneOverrides?.maxTextWidth) tokens.maxTextWidth = tuneOverrides.maxTextWidth;
  if (tuneOverrides?.gradientStrength) tokens.gradientStrength = tuneOverrides.gradientStrength;
  if (tuneOverrides?.vignetteStrength) tokens.vignetteStrength = tuneOverrides.vignetteStrength;
  if (tuneOverrides?.textBlockXPercent) tokens.textBlockXPercent = tuneOverrides.textBlockXPercent;

  return tokens;
}

function buildMetrics(
  title: string,
  width: number,
  height: number,
  design: OverlayDesignContext,
  tuneOverrides?: TuneOverrides
): RenderMetrics {
  const tokens = { ...getLayoutTokens(design, tuneOverrides) };

  if (design.visualMode === 'illustration' && tokens.layoutName === 'L2Focused') {
    tokens.textBlockXPercent = 0.29;
    tokens.textBlockYPercent = 0.33;
    tokens.maxTextWidth = 500;
    tokens.fontScale = Math.min(tokens.fontScale, 1.18);
    tokens.lineHeight = 1.1;
    tokens.letterSpacing = -0.5;
  }

  if (tokens.layoutName === 'L3Bold' && (design.domain === 'services' || title.length > 46)) {
    tokens.fontScale *= 0.74;
    tokens.maxTextWidth = Math.min(tokens.maxTextWidth, 660);
    tokens.textBlockXPercent = Math.min(tokens.textBlockXPercent + 0.02, 0.39);
    tokens.lineHeight = 0.96;
  }

  const preScaleMaxWidth = Math.round(tokens.maxTextWidth / tokens.fontScale);
  const rawLayout = calculateTitleLayout(title, width, preScaleMaxWidth);
  const fontSize = Math.round(rawLayout.fontSize * tokens.fontScale);
  const lineHeight = Math.round(fontSize * tokens.lineHeight);
  const textBlockWidth = Math.max(...rawLayout.lineWidths) * tokens.fontScale;

  let textX = Math.round(width * tokens.textBlockXPercent - textBlockWidth / 2);
  if (textX < 72) textX = 72;

  return {
    titleLines: rawLayout.lines,
    fontSize,
    lineHeight,
    textBlockWidth,
    textX,
    titleY: Math.round(height * tokens.textBlockYPercent),
    maxTextWidth: tokens.maxTextWidth,
    textBlockXPercent: tokens.textBlockXPercent,
    gradientStrength: tokens.gradientStrength,
    vignetteStrength: tokens.vignetteStrength,
    letterSpacing: tokens.letterSpacing,
    layoutName: tokens.layoutName,
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

async function prepareImageSource(buffer: Buffer, width: number, height: number): Promise<string> {
  const prepared = await sharp(buffer)
    .resize(width, height, { fit: 'cover', position: sharp.strategy.attention })
    .modulate({ brightness: 0.94, saturation: 0.96 })
    .jpeg({ quality: 92, mozjpeg: true })
    .toBuffer();

  return dataUri(prepared, 'image/jpeg');
}

function renderLayout(props: LayoutRenderProps) {
  switch (props.metrics.layoutName) {
    case 'L3Bold':
      return createElement(L3Bold, props);
    case 'Split':
      return createElement(Split, props);
    case 'L2Focused':
    default:
      return createElement(L2Focused, props);
  }
}

export async function renderImage(options: RenderImageOptions): Promise<RenderImageResult> {
  const renderCopy = resolveRenderCopy(options.title, options.design);
  const metrics = buildMetrics(
    renderCopy.title,
    options.outputWidth,
    options.outputHeight,
    options.design,
    options.tuneOverrides
  );
  const fonts = await loadFonts();
  const imageSrc = options.design.visualMode === 'real'
    ? await prepareImageSource(options.imageBuffer, options.outputWidth, options.outputHeight)
    : null;

  const svg = await satori(
    renderLayout({
      width: options.outputWidth,
      height: options.outputHeight,
      title: renderCopy.title,
      subtitle: renderCopy.subtitle,
      label: options.label,
      badge: options.design.badge,
      imageSrc,
      brightness: options.brightness,
      design: options.design,
      metrics,
    }),
    {
      width: options.outputWidth,
      height: options.outputHeight,
      fonts,
    }
  );

  const pngBuffer = new Resvg(svg, {
    fitTo: { mode: 'width', value: options.outputWidth },
  }).render().asPng();

  const overlay = await sharp(pngBuffer).webp({ quality: 90 }).toBuffer();

  return { overlay, metrics };
}