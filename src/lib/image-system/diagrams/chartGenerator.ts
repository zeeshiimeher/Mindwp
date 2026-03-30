// ─── Resource Chart Generator ───────────────────────────────────────
// Generates SVG bar/line charts from numeric data in content

import { CHART_CONFIG } from '../config';
import type { ChartData, ChartDataPoint } from '../types';

/** Extract numeric data points from section content */
export function extractChartData(
  sections: Array<{ type: string; heading?: string; content?: string | string[] }>
): ChartData | null {
  for (const section of sections) {
    if (!section.content) continue;

    const text = typeof section.content === 'string' ? section.content : section.content.join(' ');

    // Look for percentage patterns (e.g., "5 minutes → 85%" or "80% of leads")
    const percentMatches = [
      ...text.matchAll(/(\d+)\s*(minutes?|hours?|days?|seconds?)?\s*[→\-–:]\s*(\d+)%/gi),
    ];
    if (percentMatches.length >= 2) {
      const points: ChartDataPoint[] = percentMatches.map(m => ({
        label: `${m[1]}${m[2] ? ' ' + m[2] : ''}`,
        value: parseInt(m[3], 10),
        unit: '%',
      }));

      return {
        title: section.heading ?? 'Performance Data',
        points,
        chartType: 'bar',
      };
    }

    // Look for comparison patterns
    const compMatches = [
      ...text.matchAll(/(\w[\w\s]{2,20})\s*[:\-–]\s*(\d+(?:\.\d+)?)\s*(%|minutes?|hours?|x)/gi),
    ];
    if (compMatches.length >= 2) {
      const points: ChartDataPoint[] = compMatches.map(m => ({
        label: m[1].trim(),
        value: parseFloat(m[2]),
        unit: m[3],
      }));

      return {
        title: section.heading ?? 'Comparison',
        points,
        chartType: 'comparison',
      };
    }
  }

  return null;
}

/** Render a bar chart as SVG */
export function renderBarChart(data: ChartData): string {
  const c = CHART_CONFIG;
  const { points, title } = data;
  if (points.length === 0) return '';

  const maxVal = Math.max(...points.map(p => p.value));
  const barWidth = Math.min(80, (c.width - c.padding * 2) / points.length - 20);
  const chartHeight = c.height - c.padding * 2 - 40; // Space for labels
  const chartWidth = c.width - c.padding * 2;

  let svg = `<svg width="${c.width}" height="${c.height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${c.width}" height="${c.height}" fill="${c.bgColor}" rx="12" />
  <text x="${c.width / 2}" y="${c.padding - 10}" text-anchor="middle" fill="${c.labelColor}" font-size="16" font-weight="600" font-family="Inter, Arial, sans-serif">${escapeXml(title)}</text>`;

  // Y axis
  svg += `
  <line x1="${c.padding}" y1="${c.padding + 20}" x2="${c.padding}" y2="${c.padding + chartHeight}" stroke="${c.axisColor}" stroke-width="1" />`;

  // X axis
  svg += `
  <line x1="${c.padding}" y1="${c.padding + chartHeight}" x2="${c.padding + chartWidth}" y2="${c.padding + chartHeight}" stroke="${c.axisColor}" stroke-width="1" />`;

  const barSpacing = chartWidth / points.length;

  for (let i = 0; i < points.length; i++) {
    const point = points[i];
    const barHeight = (point.value / maxVal) * (chartHeight - 30);
    const x = c.padding + i * barSpacing + barSpacing / 2 - barWidth / 2;
    const y = c.padding + chartHeight - barHeight;

    // Bar
    svg += `
  <rect x="${x}" y="${y}" width="${barWidth}" height="${barHeight}" fill="${c.barColor}" rx="4" opacity="0.85" />`;

    // Value label on top of bar
    svg += `
  <text x="${x + barWidth / 2}" y="${y - 8}" text-anchor="middle" fill="${c.labelColor}" font-size="${c.fontSize}" font-weight="600" font-family="Inter, Arial, sans-serif">${point.value}${point.unit}</text>`;

    // X axis label
    svg += `
  <text x="${x + barWidth / 2}" y="${c.padding + chartHeight + 18}" text-anchor="middle" fill="${c.axisColor}" font-size="${c.fontSize - 1}" font-family="Inter, Arial, sans-serif">${escapeXml(truncateLabel(point.label, 12))}</text>`;
  }

  svg += '\n</svg>';
  return svg;
}

/** Render a line chart as SVG */
export function renderLineChart(data: ChartData): string {
  const c = CHART_CONFIG;
  const { points, title } = data;
  if (points.length < 2) return '';

  const maxVal = Math.max(...points.map(p => p.value));
  const chartHeight = c.height - c.padding * 2 - 40;
  const chartWidth = c.width - c.padding * 2;

  let svg = `<svg width="${c.width}" height="${c.height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${c.width}" height="${c.height}" fill="${c.bgColor}" rx="12" />
  <text x="${c.width / 2}" y="${c.padding - 10}" text-anchor="middle" fill="${c.labelColor}" font-size="16" font-weight="600" font-family="Inter, Arial, sans-serif">${escapeXml(title)}</text>`;

  // Axes
  svg += `
  <line x1="${c.padding}" y1="${c.padding + 20}" x2="${c.padding}" y2="${c.padding + chartHeight}" stroke="${c.axisColor}" stroke-width="1" />
  <line x1="${c.padding}" y1="${c.padding + chartHeight}" x2="${c.padding + chartWidth}" y2="${c.padding + chartHeight}" stroke="${c.axisColor}" stroke-width="1" />`;

  const spacing = chartWidth / (points.length - 1);
  const coords: Array<{ x: number; y: number }> = [];

  for (let i = 0; i < points.length; i++) {
    const x = c.padding + i * spacing;
    const y = c.padding + chartHeight - (points[i].value / maxVal) * (chartHeight - 30);
    coords.push({ x, y });
  }

  // Draw line
  const pathD = coords.map((c, i) => `${i === 0 ? 'M' : 'L'} ${c.x} ${c.y}`).join(' ');
  svg += `
  <path d="${pathD}" fill="none" stroke="${c.lineColor}" stroke-width="2.5" />`;

  // Draw points and labels
  for (let i = 0; i < points.length; i++) {
    const { x, y } = coords[i];
    svg += `
  <circle cx="${x}" cy="${y}" r="4" fill="${c.lineColor}" />
  <text x="${x}" y="${y - 12}" text-anchor="middle" fill="${c.labelColor}" font-size="${c.fontSize}" font-weight="600" font-family="Inter, Arial, sans-serif">${points[i].value}${points[i].unit}</text>
  <text x="${x}" y="${c.padding + chartHeight + 18}" text-anchor="middle" fill="${c.axisColor}" font-size="${c.fontSize - 1}" font-family="Inter, Arial, sans-serif">${escapeXml(truncateLabel(points[i].label, 12))}</text>`;
  }

  svg += '\n</svg>';
  return svg;
}

/** Render chart based on type */
export function renderChart(data: ChartData): string {
  switch (data.chartType) {
    case 'bar':
    case 'comparison':
      return renderBarChart(data);
    case 'line':
      return renderLineChart(data);
    default:
      return renderBarChart(data);
  }
}

function truncateLabel(label: string, maxLen: number): string {
  if (label.length <= maxLen) return label;
  return label.slice(0, maxLen - 1) + '…';
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
