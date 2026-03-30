import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();

function getSourceBaseDir() {
  const rootSrc = path.join(root, 'src');
  const rootStaticPages = path.join(rootSrc, 'lib', 'site', 'staticPages.ts');
  if (fs.existsSync(rootStaticPages)) return rootSrc;

  throw new Error(
    'Could not locate source directory with lib/site/staticPages.ts. Expected src/.'
  );
}

const sourceBaseDir = getSourceBaseDir();

function sourceRel(...parts) {
  return path.relative(root, path.join(sourceBaseDir, ...parts));
}

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function uniq(arr) {
  return Array.from(new Set(arr));
}

function extractStaticPageUrls() {
  const rel = sourceRel('lib', 'site', 'staticPages.ts');
  const text = read(rel);
  const re = /url:\s*['"](\/[^'"\s]+)['"]/g;
  const out = [];
  let m;
  while ((m = re.exec(text))) out.push(m[1]);
  return uniq(out);
}

function extractResourceLastmodByUrl() {
  const resourceData = read(sourceRel('lib', 'resources', 'resources.ts'));

  const out = new Map();
  const re = /makeResource\(\{([\s\S]*?)\}\)/g;
  let m;
  while ((m = re.exec(resourceData))) {
    const block = m[1];
    const urlMatch = /url:\s*["']([^"']+)["']/.exec(block);
    if (!urlMatch) continue;
    const url = urlMatch[1];

    const updatedAtMatch = /updatedAt:\s*["'](\d{4}-\d{2}-\d{2})["']/.exec(block);
    const publishedAtMatch = /publishedAt:\s*["'](\d{4}-\d{2}-\d{2})["']/.exec(block);
    const lastmod = (updatedAtMatch && updatedAtMatch[1]) || (publishedAtMatch && publishedAtMatch[1]);
    if (lastmod) out.set(url, lastmod);
  }

  return out;
}

async function loadContentGraph() {
  const initFile = pathToFileURL(path.join(root, 'src', 'domains', 'init', 'ensureGraphInitialized.ts')).href;
  const { ensureGraphInitialized } = await import(initFile);
  await ensureGraphInitialized();
  const graphFile = pathToFileURL(path.join(root, 'src', 'lib', 'content-graph', 'registry.ts')).href;
  const module = await import(graphFile);
  const graph = module?.getContentGraph;

  if (!graph || typeof graph !== 'function') {
    throw new Error('Unable to load getContentGraph from src/lib/content-graph/registry.ts');
  }

  return graph();
}

function normalizeBaseUrl(url) {
  const trimmed = url.replace(/\/$/, "");
  if (!/^https?:\/\//.test(trimmed)) {
    throw new Error(`SITE_BASE_URL must include protocol, e.g. https://example.com (got: ${url})`);
  }
  return trimmed;
}

function getBaseUrl() {
  const env =
    process.env.SITE_BASE_URL ||
    process.env.VITE_SITE_BASE_URL ||
    process.env.VITE_SITE_URL;
  // Default to production domain to avoid emitting localhost URLs.
  return normalizeBaseUrl(env || "https://mindwp.com");
}

function buildPaths(contentGraph) {
  const paths = [];

  // Static pages (public-facing)
  paths.push(...extractStaticPageUrls());

  const includedTypes = new Set([
    'service',
    'industry-category',
    'industry-detail',
    'feature',
    'blog',
    'resource',
    'case-study',
  ]);

  const graphPaths = Object.values(contentGraph)
    .filter((node) => includedTypes.has(node?.type))
    .map((node) => node?.path)
    .filter((nodePath) => typeof nodePath === 'string' && nodePath.startsWith('/'));

  paths.push(...graphPaths);

  // De-dupe and exclude non-indexable/utility paths.
  return uniq(paths).filter((p) => {
    if (!p || p.includes(":") || p === "/sitemap.xml") return false;
    if (p === "/sitemap") return false; // utility page (keep crawlable for humans, but not indexed)
    if (p.startsWith("/docs")) return false;
    if (p.startsWith("/archive")) return false;
    return true;
  });
}

function toXml(urls, lastmodByPath = new Map()) {
  const lines = [];
  const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD (best-effort)
  lines.push('<?xml version="1.0" encoding="UTF-8"?>');
  lines.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
  for (const loc of urls) {
    let lastmod = today;
    try {
      const url = new URL(loc);
      lastmod = lastmodByPath.get(url.pathname) || today;
    } catch {
      // If loc isn't a valid URL for some reason, fall back to today's date.
      lastmod = today;
    }
    lines.push("  <url>");
    lines.push(`    <loc>${escapeXml(loc)}</loc>`);
    lines.push(`    <lastmod>${lastmod}</lastmod>`);
    lines.push("  </url>");
  }
  lines.push("</urlset>");
  lines.push("");
  return lines.join("\n");
}

function escapeXml(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

async function main() {
  const appSitemapRoute = path.join(sourceBaseDir, 'app', 'sitemap.ts');
  if (fs.existsSync(appSitemapRoute)) {
    // eslint-disable-next-line no-console
    console.log('[sitemap] Skipped: using app/sitemap.ts route output');
    return;
  }

  const contentGraph = await loadContentGraph();
  const base = getBaseUrl();
  const paths = buildPaths(contentGraph);
  const urls = paths.map((p) => `${base}${p}`);
  const resourceLastmodByPath = extractResourceLastmodByUrl();
  const xml = toXml(urls, resourceLastmodByPath);

  const publicDir = path.join(root, 'public');
  const outPath = path.join(publicDir, 'sitemap.xml');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, xml, "utf8");

  // eslint-disable-next-line no-console
  console.log(`[sitemap] Wrote ${paths.length} URLs to ${path.relative(root, outPath)} (base: ${base})`);
}

try {
  main();
} catch (err) {
  // eslint-disable-next-line no-console
  console.error(`[generate-sitemap] ${err instanceof Error ? err.message : String(err)}`);
  process.exitCode = 1;
}

