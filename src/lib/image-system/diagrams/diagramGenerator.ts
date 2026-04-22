// ─── Resource Diagram Generator ─────────────────────────────────────
// Generates clean SVG diagrams from workflow/pipeline steps

import { DIAGRAM_CONFIG } from '../config';
import type { DiagramData, DiagramNode } from '../types';

/** Extract workflow steps from section content */
export function extractDiagramSteps(
  sections: Array<{
    type: string;
    heading?: string;
    content?: string | string[];
    steps?: Array<{ label: string }>;
  }>
): DiagramData | null {
  // Look for steps sections first
  for (const section of sections) {
    if (section.type === 'steps' && section.steps && section.steps.length >= 3) {
      return {
        title: section.heading ?? 'Workflow',
        nodes: section.steps.map((step, i) => ({ label: step.label, index: i })),
      };
    }
  }

  // Look for numbered lists in content sections
  for (const section of sections) {
    if (!section.content) continue;

    const text = typeof section.content === 'string' ? section.content : section.content.join('\n');
    const lines = text.split('\n').filter(Boolean);

    const numberedSteps: DiagramNode[] = [];
    for (const line of lines) {
      const match = line.match(/^\d+\.\s+(.+)/);
      if (match) {
        numberedSteps.push({ label: match[1].trim(), index: numberedSteps.length });
      }
    }

    if (numberedSteps.length >= 3) {
      return {
        title: section.heading ?? 'Process Flow',
        nodes: numberedSteps,
      };
    }
  }

  return null;
}

/** Render a vertical flow diagram as SVG */
export function renderDiagramSvg(data: DiagramData): string {
  const c = DIAGRAM_CONFIG;
  const nodeCount = Math.min(data.nodes.length, 8); // Cap at 8 nodes
  const nodes = data.nodes.slice(0, nodeCount);

  const totalHeight =
    c.nodePadding +
    nodeCount * c.nodeHeight +
    (nodeCount - 1) * c.arrowLength +
    c.nodePadding * 2 +
    30; // title space

  const svgWidth = c.nodeWidth + c.nodePadding * 2;
  const centerX = svgWidth / 2;

  let svg = `<svg width="${svgWidth}" height="${totalHeight}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${svgWidth}" height="${totalHeight}" fill="${c.bgColor}" rx="12" />
  <text x="${centerX}" y="${c.nodePadding + 16}" text-anchor="middle" fill="${c.nodeColor}" font-size="16" font-weight="600" font-family="Inter, Arial, sans-serif">${escapeXml(data.title)}</text>`;

  let y = c.nodePadding + 36;

  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    const nodeX = centerX - c.nodeWidth / 2;

    // Draw node box
    svg += `
  <rect x="${nodeX}" y="${y}" width="${c.nodeWidth}" height="${c.nodeHeight}" rx="${c.cornerRadius}" fill="${c.nodeColor}" />
  <text x="${centerX}" y="${y + c.nodeHeight / 2 + 5}" text-anchor="middle" fill="${c.nodeTextColor}" font-size="${c.fontSize}" font-family="Inter, Arial, sans-serif">${escapeXml(truncateLabel(node.label, 28))}</text>`;

    y += c.nodeHeight;

    // Draw arrow between nodes
    if (i < nodes.length - 1) {
      const arrowStartY = y;
      const arrowEndY = y + c.arrowLength;

      svg += `
  <line x1="${centerX}" y1="${arrowStartY}" x2="${centerX}" y2="${arrowEndY - 6}" stroke="${c.arrowColor}" stroke-width="2" />
  <polygon points="${centerX - 5},${arrowEndY - 8} ${centerX + 5},${arrowEndY - 8} ${centerX},${arrowEndY}" fill="${c.arrowColor}" />`;

      y += c.arrowLength;
    }
  }

  svg += '\n</svg>';
  return svg;
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
