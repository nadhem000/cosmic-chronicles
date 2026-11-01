// generate-article-pages.js
// Runs during Netlify build. Writes one prerendered HTML per article
// and per language, with article-specific OG/Twitter tags so social
// crawlers (facebookexternalhit) see the actual article.
//
// Output:
//   /explore/<id>/index.html        (English)
//   /explore/<id>/fr/index.html     (French)
//   /explore/<id>/ar/index.html     (Arabic)
//   /news/<id>/index.html
//   /news/<id>/fr/index.html
//   /news/<id>/ar/index.html
//   /sitemap.xml
//
// Also injects a per-deploy BUILD_ID into sw.js so the Service Worker
// version string auto-bumps on every deploy.

const fs   = require('fs');
const path = require('path');
const vm   = require('vm');

// ─── CONFIG ───
const SITE_URL = 'https://universe-chronicles.netlify.app'; // ← your domain
const LANGS    = ['en', 'fr', 'ar'];
const LOCALE_MAP = { en: 'en_US', fr: 'fr_FR', ar: 'ar_TN' };

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

function replaceMeta(html, attr, key, value) {
  const safeKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(`<meta[^>]*${attr}=["']${safeKey}["'][^>]*>`, 'i');
  const tag = `<meta ${attr}="${key}" content="${escHtml(value)}">`;
  if (pattern.test(html)) return html.replace(pattern, tag);
  return html.replace(/<\/head>/i, `  ${tag}\n</head>`);
}

// ─── INJECT BUILD ID INTO sw.js (Netlify builds only) ───
// The repo copy of sw.js contains the literal placeholder "__BUILD_ID__".
// On Netlify we replace it in the deployed artifact only, so:
//   • git status stays clean locally
//   • every deploy produces new bytes in /sw.js
//   • the browser sees the worker has changed and updates it reliably
//   • old versioned caches are deleted on activate
function injectSwBuildId() {
  if (process.env.NETLIFY !== 'true') {
    console.log('ℹ️  Local build — sw.js keeps __BUILD_ID__ placeholder.');
    return;
  }

  const swPath = path.join(process.cwd(), 'sw.js');
  let sw = fs.readFileSync(swPath, 'utf8');

  if (!sw.includes('__BUILD_ID__')) {
    console.warn('⚠️  sw.js has no __BUILD_ID__ placeholder; skipping injection.');
    return;
  }

  // Prefer Netlify's DEPLOY_ID (stable per build); fall back to a timestamp
  const rawId   = process.env.DEPLOY_ID || Date.now().toString(36);
  const buildId = String(rawId).replace(/[^a-zA-Z0-9]/g, '').slice(-10) || 'dev';

  sw = sw.split('__BUILD_ID__').join(buildId);
  fs.writeFileSync(swPath, sw);
  console.log(`✅ Injected build ID "${buildId}" into sw.js`);
}

// ─── BUILD ONE PAGE ───
function buildPage({ template, article, content, pageUrl, lang }) {
  const title       = content.title || 'Cosmic Chronicles';
  const description = truncate(
    content.subtitle || content.excerpt || content.introduction || content.body || '',
    200
  );
  const imageUrl = absoluteUrl(article.image);

  let html = template;

  // <html lang=".."> + dir
  html = html.replace(/<html\s+lang=["'][^"']*["']/i, `<html lang="${lang}"`);
  if (lang === 'ar') {
    html = html.replace(/<html\s+[^>]*>/i, (m) => {
      if (/dir=/.test(m)) return m.replace(/dir=["'][^"']*["']/, 'dir="rtl"');
      return m.replace(/>$/, ' dir="rtl">');
    });
  } else {
    html = html.replace(/<html\s+[^>]*>/i, (m) => {
      if (/dir=/.test(m)) return m.replace(/dir=["'][^"']*["']/, 'dir="ltr"');
      return m.replace(/>$/, ' dir="ltr">');
    });
  }

  if (!/<base\s/i.test(html)) {
    html = html.replace(
      /<meta\s+charset=["'][^"']+["']\s*>/i,
      (m) => `${m}\n    <base href="/">`
    );
  }

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
  html = replaceMeta(html, 'property', 'og:locale',      LOCALE_MAP[lang] || 'en_US');

  // Twitter
  html = replaceMeta(html, 'name', 'twitter:card',        'summary_large_image');
  html = replaceMeta(html, 'name', 'twitter:title',       `${title} | Cosmic Chronicles`);
  html = replaceMeta(html, 'name', 'twitter:description', description);
  html = replaceMeta(html, 'name', 'twitter:image',       imageUrl);

  html = html.replace(
    /<\/head>/i,
    `  <meta name="article-id" content="${escHtml(article.id)}">\n` +
    `  <meta name="article-lang" content="${escHtml(lang)}">\n  </head>`
  );

  return html;
}

// ─── WRITE ONE FILE ───
function writeOne({ template, article, content, urlPrefix, lang }) {
  const langSuffix = (lang === 'en') ? '' : `/${lang}`;
  const pageUrl    = `${SITE_URL}/${urlPrefix}/${article.id}${langSuffix}`;
  const html       = buildPage({ template, article, content, pageUrl, lang });

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

  // ─── Regenerate sitemap (all languages) ───
  const urls = [
    { loc: `${SITE_URL}/index.html`,      priority: '1.0', freq: 'daily' },
    { loc: `${SITE_URL}/AN_explore.html`, priority: '0.8', freq: 'weekly' },
    { loc: `${SITE_URL}/AN_news.html`,    priority: '0.8', freq: 'daily' },
  ];

  for (const a of exploreArticles) {
    for (const lang of LANGS) {
      if (!(a[lang] || a.en)) continue;
      const suffix = (lang === 'en') ? '' : `/${lang}`;
      urls.push({
        loc: `${SITE_URL}/explore/${a.id}${suffix}`,
        priority: '0.7', freq: 'monthly',
      });
    }
  }
  for (const a of newsArticles) {
    for (const lang of LANGS) {
      if (!(a[lang] || a.en)) continue;
      const suffix = (lang === 'en') ? '' : `/${lang}`;
      urls.push({
        loc: `${SITE_URL}/news/${a.id}${suffix}`,
        priority: '0.7', freq: 'monthly',
      });
    }
  }

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

  // ─── Inject build ID into sw.js ───
  injectSwBuildId();
}

main();