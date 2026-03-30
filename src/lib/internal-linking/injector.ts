import { isAnchorMatch } from './anchor';
import { splitContentBlocks } from './blockParser';
import { placeLinks } from './placement';
import type { InternalLink } from './types';

/**
 * LINK INJECTOR
 *
 * Purpose:
 * Injects internal links into content text as HTML anchor tags.
 * Two injection modes: flat (full text) and zone-aware (intro/body/conclusion).
 *
 * Anti-spam rules:
 * - Max 1 link per sentence
 * - Max 1 link per paragraph
 * - No duplicate targets across entire content
 * - Skip text already inside an <a> tag
 * - Case-insensitive anchor matching
 * - Replace only first occurrence per sentence
 */

// --- Helpers ---

function replaceFirstOccurrence(text: string, search: string, replacement: string): string {
  const index = text.toLowerCase().indexOf(search.toLowerCase());
  if (index === -1) return text;

  return text.slice(0, index) + replacement + text.slice(index + search.length);
}

function splitSentences(paragraph: string): string[] {
  return paragraph.split(/(?<=[.!?])\s+/);
}

function isAlreadyLinked(sentence: string, anchor: string): boolean {
  const lowerSentence = sentence.toLowerCase();
  const lowerAnchor = anchor.toLowerCase();
  const anchorPos = lowerSentence.indexOf(lowerAnchor);
  if (anchorPos === -1) return false;

  const before = sentence.slice(0, anchorPos);
  const openTags = (before.match(/<a[\s>]/g) ?? []).length;
  const closeTags = (before.match(/<\/a>/g) ?? []).length;

  return openTags > closeTags;
}

// --- Flat Injection (full-text, no zone awareness) ---

export function injectLinksIntoText(text: string, links: InternalLink[]): string {
  let output = text;
  const usedTargets = new Set<string>();
  const linkedSentences = new Set<number>();

  for (const link of links) {
    if (usedTargets.has(link.targetSlug)) continue;
    if (!isAnchorMatch(output, link.anchor)) continue;

    const sentences = output.split(/(?<=[.!?])\s+/);
    let sentenceIndex = -1;

    for (let i = 0; i < sentences.length; i++) {
      if (
        sentenceIndex === -1 &&
        isAnchorMatch(sentences[i], link.anchor) &&
        !linkedSentences.has(i) &&
        !isAlreadyLinked(sentences[i], link.anchor)
      ) {
        sentenceIndex = i;
      }
    }

    if (sentenceIndex === -1) continue;

    linkedSentences.add(sentenceIndex);
    usedTargets.add(link.targetSlug);

    output = replaceFirstOccurrence(
      output,
      link.anchor,
      `<a href="/${link.targetSlug}">${link.anchor}</a>`
    );
  }

  return output;
}

// --- Zone-Aware Smart Injection ---
// Splits content into zones, applies placement rules, then injects.
export function injectLinksSmart(text: string, links: InternalLink[]): string {
  const blocks = splitContentBlocks(text);
  const placed = placeLinks(blocks, links);
  const usedTargets = new Set<string>();

  const injectInto = (paragraphs: string[], zoneLinks: InternalLink[]): string[] => {
    return paragraphs.map(p => {
      const sentences = splitSentences(p);
      let linkUsed = false;

      return sentences
        .map(s => {
          if (linkUsed) return s;

          for (const link of zoneLinks) {
            if (usedTargets.has(link.targetSlug)) continue;
            if (isAnchorMatch(s, link.anchor) && !isAlreadyLinked(s, link.anchor)) {
              linkUsed = true;
              usedTargets.add(link.targetSlug);
              return replaceFirstOccurrence(
                s,
                link.anchor,
                `<a href="/${link.targetSlug}">${link.anchor}</a>`
              );
            }
          }

          return s;
        })
        .join(' ');
    });
  };

  return [
    ...injectInto(blocks.intro, placed.intro),
    ...injectInto(blocks.body, placed.body),
    ...injectInto(blocks.conclusion, placed.conclusion),
  ].join('\n\n');
}
