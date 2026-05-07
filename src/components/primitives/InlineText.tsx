// -- Types --------------------------------------------------------------------

export type InlineTextProps = {
  value: string;
  className?: string;
};

// -- Parser -------------------------------------------------------------------

type TextSegment = { text: string; muted: boolean };

/**
 * Parse a string with [[muted:...]] markers into segments.
 * Malformed markers render as plain text.
 * Supports multiple muted segments.
 */
function parseInlineText(value: string): TextSegment[] {
  const segments: TextSegment[] = [];
  // Match [[muted:...]] blocks — greedy match inside stops at first ]]
  const pattern = /\[\[muted:(.*?)\]\]/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(value)) !== null) {
    // Text before this match
    if (match.index > lastIndex) {
      segments.push({ text: value.slice(lastIndex, match.index), muted: false });
    }
    // The muted segment
    segments.push({ text: match[1] ?? '', muted: true });
    lastIndex = match.index + match[0].length;
  }

  // Remaining text after last match
  if (lastIndex < value.length) {
    segments.push({ text: value.slice(lastIndex), muted: false });
  }

  // Fallback: no markers found
  if (segments.length === 0) {
    segments.push({ text: value, muted: false });
  }

  return segments;
}

// -- Component ----------------------------------------------------------------

/**
 * InlineText — renders a string with optional [[muted:...]] segments.
 *
 * Usage:
 *   <InlineText value='Work Comes In. [[muted:Too Much Slips Away.]]' />
 *
 * Output:
 *   Work Comes In. <span class="mw-text-muted">Too Much Slips Away.</span>
 *
 * Rules:
 * - Only [[muted:...]] is supported.
 * - No HTML parsing. No dangerouslySetInnerHTML. No markdown.
 * - No forced line breaks.
 * - Malformed markers fall through as plain text.
 * - Preserves inline flow.
 */
export function InlineText({ value, className }: InlineTextProps) {
  const segments = parseInlineText(value);
  const first = segments[0];

  // Single plain segment — no wrapper needed
  if (segments.length === 1 && first && !first.muted) {
    return <>{first.text}</>;
  }

  return (
    <span className={className}>
      {segments.map((seg, i) =>
        seg.muted ? (
          <span key={i} className='mw-text-muted'>
            {seg.text}
          </span>
        ) : (
          <span key={i}>{seg.text}</span>
        )
      )}
    </span>
  );
}
