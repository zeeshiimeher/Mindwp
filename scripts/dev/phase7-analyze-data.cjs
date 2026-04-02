const data = require('../../reports/phase7-audit/visual-audit-data.json');
const pages = Object.keys(data);

// 1. Section backgrounds per page
console.log('=== SECTION BACKGROUNDS ===');
for (const page of pages) {
  const sections = data[page].sections || [];
  console.log(`\n${page.toUpperCase()} (${sections.length} sections):`);
  sections.forEach((s, i) => {
    const bg = s.bgImage !== 'none' ? 'gradient' : s.bgColor;
    const cls = (s.classes || '').split(' ').slice(0, 3).join(' ');
    console.log(`  [${i}] ${bg} | pad:${s.paddingTop}/${s.paddingBottom} | h:${s.height} | ${cls}`);
  });
}

// 2. Section bg sequence issues (same bg adjacent)
console.log('\n\n=== SECTION BG SEQUENCE ISSUES ===');
for (const page of pages) {
  const sections = data[page].sections || [];
  for (let i = 1; i < sections.length; i++) {
    const prev = sections[i - 1];
    const curr = sections[i];
    const prevBg = prev.bgImage !== 'none' ? 'gradient' : prev.bgColor;
    const currBg = curr.bgImage !== 'none' ? 'gradient' : curr.bgColor;
    if (prevBg === currBg && prevBg !== 'rgba(0, 0, 0, 0)') {
      console.log(`  ${page}: [${i - 1}] and [${i}] SAME bg → ${prevBg.substring(0, 40)}`);
    }
  }
}

// 3. Heading hierarchy per page
console.log('\n\n=== HEADING HIERARCHY ===');
for (const page of pages) {
  const headings = data[page].headings || [];
  console.log(`\n${page.toUpperCase()} (${headings.length} headings):`);
  headings.slice(0, 20).forEach(h => {
    console.log(`  ${h.tag} | ${h.fontSize} | w:${h.fontWeight} | lh:${h.lineHeight} | c:${h.color.substring(0, 30)} | "${(h.text || '').substring(0, 50)}"`);
  });
  if (headings.length > 20) console.log(`  ... +${headings.length - 20} more`);
}

// 4. Card consistency
console.log('\n\n=== CARD CONSISTENCY ===');
for (const page of pages) {
  const cards = data[page].cards || [];
  if (cards.length === 0) continue;
  console.log(`\n${page.toUpperCase()} (${cards.length} cards):`);
  const bgSet = new Set();
  const borderSet = new Set();
  const shadowSet = new Set();
  const padSet = new Set();
  const radiusSet = new Set();
  cards.forEach(c => {
    bgSet.add(c.bgColor);
    borderSet.add(c.border);
    shadowSet.add(c.boxShadow ? c.boxShadow.substring(0, 50) : 'none');
    padSet.add(c.padding);
    radiusSet.add(c.borderRadius);
  });
  if (bgSet.size > 1) console.log(`  ⚠ ${bgSet.size} different bg colors: ${[...bgSet].join(' | ')}`);
  if (borderSet.size > 1) console.log(`  ⚠ ${borderSet.size} different borders: ${[...borderSet].map(b => b.substring(0, 40)).join(' | ')}`);
  if (shadowSet.size > 1) console.log(`  ⚠ ${shadowSet.size} different shadows`);
  if (padSet.size > 1) console.log(`  ⚠ ${padSet.size} different paddings: ${[...padSet].join(' | ')}`);
  if (radiusSet.size > 1) console.log(`  ⚠ ${radiusSet.size} different border-radius: ${[...radiusSet].join(' | ')}`);
  if (bgSet.size === 1 && borderSet.size === 1 && padSet.size === 1 && radiusSet.size === 1) {
    console.log(`  ✓ All ${cards.length} cards consistent`);
  }
}

// 5. Gradient usage
console.log('\n\n=== GRADIENT USAGE ===');
for (const page of pages) {
  const gradients = data[page].gradients || [];
  if (gradients.length === 0) continue;
  console.log(`\n${page.toUpperCase()} (${gradients.length} gradient elements):`);
  const uniqueGrads = new Map();
  gradients.forEach(g => {
    const key = g.computedBgImage ? g.computedBgImage.substring(0, 80) : 'none';
    if (!uniqueGrads.has(key)) uniqueGrads.set(key, []);
    uniqueGrads.get(key).push((g.classes || '').split(' ').slice(0, 2).join(' '));
  });
  uniqueGrads.forEach((classes, grad) => {
    console.log(`  ${grad}`);
    console.log(`    used by: ${classes.slice(0, 5).join(', ')}${classes.length > 5 ? ` +${classes.length - 5} more` : ''}`);
  });
}

// 6. Contrast issues
console.log('\n\n=== CONTRAST ISSUES ===');
for (const page of pages) {
  const issues = data[page].contrastIssues || [];
  if (issues.length === 0) continue;
  console.log(`\n${page.toUpperCase()} (${issues.length} contrast issues):`);
  issues.slice(0, 10).forEach(c => {
    console.log(`  ${c.tag} "${(c.text || '').substring(0, 40)}" | bg:${c.bgColor} text:${c.textColor} | lum-bg:${c.bgLuminance?.toFixed(3)} lum-text:${c.textLuminance?.toFixed(3)}`);
  });
  if (issues.length > 10) console.log(`  ... +${issues.length - 10} more`);
}

// 7. Hover transition summary
console.log('\n\n=== HOVER TRANSITION PATTERNS ===');
const allTransitions = new Map();
for (const page of pages) {
  const hovers = data[page].hovers || [];
  hovers.forEach(h => {
    const t = h.transition || 'none';
    const short = t.length > 60 ? t.substring(0, 60) + '...' : t;
    if (!allTransitions.has(short)) allTransitions.set(short, 0);
    allTransitions.set(short, allTransitions.get(short) + 1);
  });
}
console.log(`\nUnique transition patterns: ${allTransitions.size}`);
[...allTransitions.entries()].sort((a, b) => b[1] - a[1]).slice(0, 15).forEach(([t, count]) => {
  console.log(`  [${count}x] ${t}`);
});

// 8. Padding consistency
console.log('\n\n=== SECTION PADDING CONSISTENCY ===');
const paddingPatterns = new Map();
for (const page of pages) {
  const sections = data[page].sections || [];
  sections.forEach(s => {
    const key = `${s.paddingTop}/${s.paddingBottom}`;
    if (!paddingPatterns.has(key)) paddingPatterns.set(key, 0);
    paddingPatterns.set(key, paddingPatterns.get(key) + 1);
  });
}
[...paddingPatterns.entries()].sort((a, b) => b[1] - a[1]).forEach(([p, count]) => {
  console.log(`  [${count}x] ${p}`);
});
