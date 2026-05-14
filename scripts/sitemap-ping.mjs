/* global console, fetch, URL, process */
/**
 * Submit sitemap ke Google Search Console via API.
 * 
 * CATATAN: Endpoint sitemap ping Google & Bing sudah DEPRECATED (Jan 2024).
 * Gunakan IndexNow (npm run indexnow) untuk submit URL ke Bing/Yandex.
 * Untuk Google: submit manual di https://search.google.com/search-console
 *
 * Script ini sekarang hanya submit ke IndexNow sebagai fallback tambahan.
 *
 * Cara pakai:
 *   node scripts/sitemap-ping.mjs
 */

const SITEMAP_URL = 'https://sayur-hidroponik.my.id/sitemap.xml';
const SITE_URL = 'https://sayur-hidroponik.my.id';
const INDEXNOW_KEY = '390fc12513adb6d3e44ca3c4bdfd1ce3';

async function notifyIndexNow() {
  const body = {
    host: new URL(SITE_URL).hostname,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: [SITEMAP_URL, SITE_URL + '/'],
  };

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  });

  const ok = res.status === 200 || res.status === 202;
  console.log(`[Sitemap] IndexNow (Bing) → HTTP ${res.status} ${ok ? '✓' : '✗'}`);
  return ok;
}

async function main() {
  console.log(`[Sitemap] Sitemap: ${SITEMAP_URL}\n`);
  console.log('[Sitemap] Info: Google sitemap ping deprecated Jan 2024.');
  console.log('[Sitemap] Menggunakan IndexNow sebagai alternatif...\n');

  await notifyIndexNow();

  console.log('\n[Sitemap] Untuk Google: submit manual di');
  console.log('  https://search.google.com/search-console/sitemaps');
}

main().catch(err => {
  console.error('[Sitemap] Fatal error:', err.message);
  process.exit(1);
});

