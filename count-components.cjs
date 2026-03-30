const fs = require('fs');
const path = require('path');

const workspaceRoot = process.cwd();
const reusableRoot = path.join(workspaceRoot, 'src', 'components', 'reusable');
const singleRoot = path.join(reusableRoot, 'single');
const sectionsRoot = path.join(reusableRoot, 'sections');
const utilsRoot = path.join(workspaceRoot, 'src', 'utils');

const scanDir = (dir, category) => {
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx') && !f.startsWith('index'));

  return files.map(f => ({
    name: f.replace('.tsx', ''),
    category,
    importPath: path
      .relative(utilsRoot, dir)
      .split(path.sep)
      .join('/') + '/' + f,
    filePath: path
      .relative(workspaceRoot, dir)
      .split(path.sep)
      .join('/') + '/' + f,
  }));
};

const components = scanDir(singleRoot, 'components');
const serviceSections = scanDir(path.join(sectionsRoot, 'service'), 'service');
const featureSections = scanDir(path.join(sectionsRoot, 'features'), 'features');
const industrySections = scanDir(path.join(sectionsRoot, 'industries'), 'industries');
const resourceSections = scanDir(path.join(sectionsRoot, 'resources'), 'resources');
const caseStudySections = scanDir(path.join(sectionsRoot, 'case-studies'), 'case-studies');
const coreSections = scanDir(path.join(sectionsRoot, 'core'), 'core');
const blogSections = scanDir(path.join(sectionsRoot, 'blog'), 'blog');
const homepageSections = scanDir(path.join(sectionsRoot, 'homepage'), 'homepage');

const rootSections = scanDir(sectionsRoot, 'sections');

const all = [
  ...components,
  ...serviceSections,
  ...featureSections,
  ...industrySections,
  ...resourceSections,
  ...caseStudySections,
  ...coreSections,
  ...blogSections,
  ...homepageSections,
  ...rootSections,
];

console.log('Total components found:', all.length);
console.log('Components:', components.length);
console.log('Service sections:', serviceSections.length);
console.log('Feature sections:', featureSections.length);
console.log('Industry sections:', industrySections.length);
console.log('Resource sections:', resourceSections.length);
console.log('Case study sections:', caseStudySections.length);
console.log('Core sections:', coreSections.length);
console.log('Blog sections:', blogSections.length);
console.log('Homepage sections:', homepageSections.length);
console.log('Root sections:', rootSections.length);