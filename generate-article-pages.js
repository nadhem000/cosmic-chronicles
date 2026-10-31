// generate-article-pages.js
// Runs during Netlify build. Writes one prerendered HTML per article
// with article-specific OG/Twitter meta tags, so bots like
// facebookexternalhit see the actual article instead of the app.
//
// Output:
//   /explore/<article-id>/index.html   (from AN_explore.html)
//   /news/<article-id>/index.html      (from AN_news.html)
//   /sitemap.xml

const fs   = require('fs');
const path = require('path');
const vm   = require('vm');

// ─── CONFIG ───
const SITE_URL = 'https://universe-chronicles.netlify.app'; // ← change if your domain differs
const LANGS    = ['en'];                                    // add 'fr','ar' for per-language OG tags

// ─── LOAD DATA (const-safe via vm) ───
function loadGlobal(file, globalName) {
  const code = fs.readFileSync(file, 'utf8') +
               `\n;globalThis.${globalName} = ${globalName};`;
  const context = vm.createContext({});
  vm.runInContext(code, context, { filename: file });
  return context[globalName];
}

const exploreArticles = loadGlobal('./data_explore.js', 'AN_explore_data');
const allNews         = loadGlobal('./data.js',         'AN_data');
const newsArticles    = allNews.filter(x => x.type === 'news');

// ─── HELPERS ───
function escHtml(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function absoluteUrl(imagePath) {
  if (!imagePath) return `${SITE_URL}/assets/icons/icon-512x512.png`;
  if (/^https?:\/\//i.test(imagePath)) return imagePath;
  return `${SITE_URL}/${imagePath.replace(/^\//, '')}`;
}

function truncate(s, n) {
  if (!s) return '';
  s = String(s).replace(/\s+/g, ' ').trim();
  return s.length <= n ? s : s.slice(0, n - 1).trimEnd() + '…';
}

// Replace <meta ...attr="key" ...> or inject one before </head> if absent.
function replaceMeta(html, attr, key, value) {
  const safeKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(
    `<meta[^>]*${attr}=["']${safeKey}["'][^>]*>`,
    'i'
  );
  const tag = `<meta ${attr}="${key}" content="${escHtml(value)}">`;
  if (pattern.test(html)) return html.replace(pattern, tag);
  return html.replace(/<\/head>/i, `  ${tag}\n</head>`);
}

// ─── BUILD ONE PAGE ───
function buildPage({ template, article, content, pageUrl }) {
  const title       = content.title || 'Cosmic Chronicles';
  const description = truncate(
    content.subtitle || content.excerpt || content.introduction || content.body || '',
    200
  );
  const imageUrl    = absoluteUrl(article.image);

  let html = template;

  // <base> so relative asset paths resolve from /explore/:id/ or /news/:id/
  if (!/<base\s/i.test(html)) {
    html = html.replace(
      /<meta\s+charset=["'][^"']+["']\s*>/i,
      (m) => `${m}\n    <base href="/">`
    );
  }

  // <title>
  html = html.replace(
    /<title>[^<]*<\/title>/i,
    `<title>${escHtml(title)} | Cosmic Chronicles</title>`
  );

  // Open Graph
  html = replaceMeta(html, 'property', 'og:title',       `${title} | Cosmic Chronicles`);
  html = replaceMeta(html, 'property', 'og:description', description);
  html = replaceMeta(html, 'property', 'og:image',       imageUrl);
  html = replaceMeta(html, 'property', 'og:url',         pageUrl);
  html = replaceMeta(html, 'property', 'og:type',        'article');
  html = replaceMeta(html, 'property', 'og:site_name',   'Cosmic Chronicles');

  // Twitter
  html = replaceMeta(html, 'name', 'twitter:card',        'summary_large_image');
  html = replaceMeta(html, 'name', 'twitter:title',       `${title} | Cosmic Chronicles`);
  html = replaceMeta(html, 'name', 'twitter:description', description);
  html = replaceMeta(html, 'name', 'twitter:image',       imageUrl);

  // Hint the SPA which article to open
  html = html.replace(
    /<\/head>/i,
    `  <meta name="article-id" content="${escHtml(article.id)}">\n  </head>`
  );

  return html;
}

// ─── WRITE ONE FILE ───
function writeOne({ template, article, content, urlPrefix, lang }) {
  const suffix = (lang === 'en') ? '' : `?lang=${lang}`;
  const pageUrl = `${SITE_URL}/${urlPrefix}/${article.id}${suffix}`;
  const html    = buildPage({ template, article, content, pageUrl });

  const dir = (lang === 'en')
    ? path.join(process.cwd(), urlPrefix, article.id)
    : path.join(process.cwd(), urlPrefix, article.id, lang);

  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html);
}

// ─── MAIN ───
function main() {
  console.log('🔨 Prerendering article pages…');

  const exploreTpl = fs.readFileSync('./AN_explore.html', 'utf8');
  const newsTpl    = fs.readFileSync('./AN_news.html',    'utf8');

  let count = 0;

  for (const article of exploreArticles) {
    for (const lang of LANGS) {
      const content = article[lang] || article.en;
      if (!content) continue;
      writeOne({ template: exploreTpl, article, content, urlPrefix: 'explore', lang });
      count++;
    }
  }

  for (const article of newsArticles) {
    for (const lang of LANGS) {
      const content = article[lang] || article.en;
      if (!content) continue;
      writeOne({ template: newsTpl, article, content, urlPrefix: 'news', lang });
      count++;
    }
  }

  console.log(`✅ Generated ${count} article pages.`);

  // ─── Regenerate sitemap ───
  const urls = [
    { loc: `${SITE_URL}/index.html`,      priority: '1.0', freq: 'daily' },
    { loc: `${SITE_URL}/AN_explore.html`, priority: '0.8', freq: 'weekly' },
    { loc: `${SITE_URL}/AN_news.html`,    priority: '0.8', freq: 'daily' },
    ...exploreArticles.map(a => ({
      loc: `${SITE_URL}/explore/${a.id}`, priority: '0.7', freq: 'monthly',
    })),
    ...newsArticles.map(a => ({
      loc: `${SITE_URL}/news/${a.id}`, priority: '0.7', freq: 'monthly',
    })),
  ];

  const today = new Date().toISOString().slice(0, 10);
  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls.map(u =>
      `  <url><loc>${u.loc}</loc><lastmod>${today}</lastmod>` +
      `<changefreq>${u.freq}</changefreq><priority>${u.priority}</priority></url>`
    ).join('\n') +
    '\n</urlset>\n';

  fs.writeFileSync(path.join(process.cwd(), 'sitemap.xml'), xml);
  console.log('✅ sitemap.xml regenerated.');
}

main();