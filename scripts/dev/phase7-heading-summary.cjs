const path = require('path');
const d = require(path.resolve(__dirname, '../../reports/phase7-audit/heading-audit-data.json'));
for (const [page, data] of Object.entries(d)) {
  const vp = data.desktop || data.mobile;
  if (vp && vp.error) { console.log(page + ': ERROR - ' + vp.error.substring(0, 60)); continue; }
  if (!vp) { console.log(page + ': NO DATA'); continue; }
  const tags = {};
  if (vp.sections) {
    for (const s of vp.sections) {
      for (const h of (s.headings || [])) {
        tags[h.tag] = (tags[h.tag] || 0) + 1;
      }
    }
  }
  console.log(page + ': H1=' + (vp.pageH1Count||0) + ' H2=' + (vp.pageH2Count||0) + ' all=' + JSON.stringify(tags));
}
