/**
 * Runs after `vite build` and writes:
 *   out/sitemap.xml   — all indexable public routes
 *   out/robots.txt    — crawl rules + sitemap pointer
 *
 * Usage:  node scripts/generate-seo.mjs
 * Called automatically via `npm run build` (see package.json)
 */

import { writeFileSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const OUT = resolve(ROOT, "out");

const DOMAIN = "https://www.mrbean9.co";
const TODAY = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

// ─── Routes to include in sitemap ────────────────────────────────────────────
// changefreq / priority guidance:
//   weekly  + 1.0  → homepage (changes most)
//   monthly + 0.8  → key content pages
//   monthly + 0.7  → supporting guides
// Exclude: redirects (/strategy → /guides/strategy), catch-all (*), /members/vip alias
const ROUTES = [
  { path: "/",               changefreq: "weekly",  priority: "1.0" },
  { path: "/guides/strategy", changefreq: "monthly", priority: "0.8" },
  { path: "/vip",            changefreq: "monthly", priority: "0.8" },
];

// ─── sitemap.xml ─────────────────────────────────────────────────────────────
function buildSitemap() {
  const urls = ROUTES.map(
    ({ path, changefreq, priority }) => `
  <url>
    <loc>${DOMAIN}${path}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  ).join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
    http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls}
</urlset>
`;
}

// ─── robots.txt ──────────────────────────────────────────────────────────────
function buildRobots() {
  return `# robots.txt — www.mrbean9.co
# Generated: ${TODAY}

User-agent: *
Allow: /

# Block build artefacts (not normally served, but belt-and-braces)
Disallow: /assets/
Disallow: /*.js.map$

# Sitemap
Sitemap: ${DOMAIN}/sitemap.xml
`;
}

// ─── Write files ─────────────────────────────────────────────────────────────
mkdirSync(OUT, { recursive: true });

writeFileSync(resolve(OUT, "sitemap.xml"), buildSitemap(), "utf8");
console.log(`✔  sitemap.xml  → out/sitemap.xml  (${ROUTES.length} URLs, lastmod ${TODAY})`);

writeFileSync(resolve(OUT, "robots.txt"), buildRobots(), "utf8");
console.log(`✔  robots.txt   → out/robots.txt`);
