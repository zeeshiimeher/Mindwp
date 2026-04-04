const d = require('../../reports/phase7-audit/visual-audit-data.json');
Object.keys(d).forEach(p => {
  const pg = d[p];
  console.log('===', p.toUpperCase(), '===');
  if (pg.sections) {
    console.log('Sections:', pg.sections.length);
    pg.sections.forEach((s, i) => console.log('  ' + i + ': bg=' + s.bgColor + ' pad=' + s.paddingTop + '/' + s.paddingBottom + ' cls=' + (s.classes || '').substring(0, 90)));
  }
  if (pg.contrastIssues) {
    console.log('Contrast Issues:', pg.contrastIssues.length);
    pg.contrastIssues.slice(0, 6).forEach(c => console.log('  section=' + c.section + ' bgLum=' + c.bgLuminance + ' textLum=' + c.textLuminance + ' text="' + (c.textSample || '').substring(0, 40) + '"'));
  }
  if (pg.gradients) {
    console.log('Gradients:', pg.gradients.length);
    pg.gradients.forEach(g => console.log('  cls=' + (g.classes || '').substring(0, 60) + ' -> ' + (g.gradient || '').substring(0, 100)));
  }
  if (pg.hovers) {
    console.log('Hover elements:', pg.hovers.length);
    pg.hovers.slice(0, 5).forEach(h => console.log('  ' + JSON.stringify(h).substring(0, 120)));
  }
  if (pg.cards) {
    console.log('Cards:', pg.cards.length);
    pg.cards.slice(0, 3).forEach(c => console.log('  ' + JSON.stringify(c).substring(0, 120)));
  }
  if (pg.headings) {
    console.log('Headings:', pg.headings.length);
    pg.headings.slice(0, 5).forEach(h => console.log('  ' + JSON.stringify(h).substring(0, 120)));
  }
  console.log('');
});
