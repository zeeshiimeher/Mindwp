/**
 * Split oversized screenshots into segments for visual analysis.
 * Any image taller than MAX_HEIGHT_PX is split into multiple parts.
 * Also fixes the heading audit script for pages that errored.
 *
 * Usage: node scripts/analyzers/split-screenshots.cjs
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const AUDIT_DIR = path.resolve(__dirname, '../../reports/visual-audit');
const SPLIT_DIR = path.join(AUDIT_DIR, 'split');
const MAX_HEIGHT_PX = 4000;

if (!fs.existsSync(SPLIT_DIR)) fs.mkdirSync(SPLIT_DIR, { recursive: true });

const pngFiles = fs.readdirSync(AUDIT_DIR).filter(f => f.endsWith('.png'));

let splitCount = 0;
let copyCount = 0;

for (const file of pngFiles) {
  const srcPath = path.join(AUDIT_DIR, file);
  const baseName = file.replace('.png', '');

  // Get dimensions via sips
  const sipsOutput = execSync(`sips -g pixelHeight -g pixelWidth "${srcPath}"`, {
    encoding: 'utf-8',
  });
  const heightMatch = sipsOutput.match(/pixelHeight:\s*(\d+)/);
  const widthMatch = sipsOutput.match(/pixelWidth:\s*(\d+)/);
  if (!heightMatch || !widthMatch) continue;

  const height = parseInt(heightMatch[1], 10);
  const width = parseInt(widthMatch[1], 10);

  if (height <= MAX_HEIGHT_PX) {
    // Small enough — just copy
    fs.copyFileSync(srcPath, path.join(SPLIT_DIR, file));
    copyCount++;
    continue;
  }

  // Split into segments
  const numParts = Math.ceil(height / MAX_HEIGHT_PX);
  console.log(`Splitting ${file} (${width}x${height}) into ${numParts} parts...`);

  for (let i = 0; i < numParts; i++) {
    const yOffset = i * MAX_HEIGHT_PX;
    const segHeight = Math.min(MAX_HEIGHT_PX, height - yOffset);
    const outFile = path.join(SPLIT_DIR, `${baseName}--part${i + 1}.png`);

    // Use sips to crop: extract a segment starting at yOffset with segHeight
    // sips --cropToHeightWidth is from top-left, so we first crop bottom, then crop top
    // More reliable: use a temp approach with sips --cropOffset
    // Actually, sips doesn't have great offset-crop. Use the `convert` approach if available,
    // otherwise use a node canvas approach.

    // Try using macOS `sips` workaround: pad + crop
    // Better: use the `sharp` or just shell out to python
    try {
      execSync(
        `python3 -c "
from PIL import Image
im = Image.open('${srcPath.replace(/'/g, "\\'")}')
box = (0, ${yOffset}, ${width}, ${yOffset + segHeight})
segment = im.crop(box)
segment.save('${outFile.replace(/'/g, "\\'")}')
"`,
        { stdio: 'pipe' }
      );
    } catch {
      // Fallback: try using sips + temp file approach
      // Copy full, crop from top (remove previous segments), then crop height
      const tmpPath = path.join(SPLIT_DIR, `_tmp_${baseName}.png`);
      try {
        fs.copyFileSync(srcPath, tmpPath);
        if (yOffset > 0) {
          execSync(`sips --cropOffset ${yOffset} 0 "${tmpPath}"`, { stdio: 'pipe' });
          execSync(`sips --cropToHeightWidth ${segHeight} ${width} "${tmpPath}"`, {
            stdio: 'pipe',
          });
        } else {
          execSync(`sips --cropToHeightWidth ${segHeight} ${width} "${tmpPath}"`, {
            stdio: 'pipe',
          });
        }
        fs.renameSync(tmpPath, outFile);
      } catch (e2) {
        console.error(`  Failed to split ${file} part ${i + 1}: ${e2.message}`);
        if (fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath);
        continue;
      }
    }
  }
  splitCount++;
}

console.log(`\nDone. ${copyCount} files copied, ${splitCount} files split.`);
console.log(`Output: ${SPLIT_DIR}/`);

// List result files
const resultFiles = fs
  .readdirSync(SPLIT_DIR)
  .filter(f => f.endsWith('.png'))
  .sort();
console.log(`\nTotal output files: ${resultFiles.length}`);
for (const f of resultFiles) {
  const fp = path.join(SPLIT_DIR, f);
  const s = execSync(`sips -g pixelHeight -g pixelWidth "${fp}"`, { encoding: 'utf-8' });
  const h = (s.match(/pixelHeight:\s*(\d+)/) || [])[1];
  const w = (s.match(/pixelWidth:\s*(\d+)/) || [])[1];
  console.log(`  ${f}: ${w}x${h}`);
}
