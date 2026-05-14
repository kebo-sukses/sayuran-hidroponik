/* global process, console, fetch, URL */
/**
 * Submit semua URL artikel ke IndexNow (Bing, Yandex, dll.)
 *
 * Cara pakai:
 *   node scripts/indexnow-submit.mjs           → submit semua artikel
 *   node scripts/indexnow-submit.mjs [url]     → submit 1 URL spesifik
 *
 * IndexNow mendukung bulk submit hingga 10.000 URL sekaligus.
 */

import { readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const SITE_URL = 'https://sayur-hidroponik.my.id';
const INDEXNOW_KEY = '390fc12513adb6d3e44ca3c4bdfd1ce3';

// IndexNow endpoint — satu submit diteruskan ke semua mesin yang terdaftar
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';

function parseUrlFromFilename(filename) {
  const match = filename.match(/^(\d{4})-(\d{2})-(.+)\.md$/);
  if (!match) return null;
  const [, year, month, slug] = match;
  return `${SITE_URL}/${year}/${month}/${slug}.html`;
}

async function getAllPostUrls() {
  const postsDir = join(ROOT, 'content', 'posts');
  try {
    const files = readdirSync(postsDir).filter(f => f.endsWith('.md'));
    return files.map(parseUrlFromFilename).filter(Boolean);
  } catch {
    console.error('Folder content/posts tidak ditemukan');
    return [];
  }
}

async function submitToIndexNow(urls) {
  const body = {
    host: new URL(SITE_URL).hostname,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  };

  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  });

  return res.status;
}

async function main() {
  const specificUrl = process.argv[2];

  let urls;
  if (specificUrl) {
    urls = [specificUrl];
    console.log(`[IndexNow] Submit URL tunggal: ${specificUrl}`);
  } else {
    urls = await getAllPostUrls();
    // Tambahkan halaman statis penting
    urls.push(
      SITE_URL + '/',
      SITE_URL + '/tentang',
      SITE_URL + '/kebijakan-privasi',
      SITE_URL + '/disclaimer',
    );
    console.log(`[IndexNow] Submit ${urls.length} URL...`);
    urls.forEach(u => console.log('  -', u));
  }

  if (urls.length === 0) {
    console.log('[IndexNow] Tidak ada URL untuk disubmit.');
    return;
  }

  // IndexNow mendukung bulk hingga 10.000 URL per request
  const status = await submitToIndexNow(urls);

  const STATUS_MESSAGES = {
    200: 'OK — URL diterima',
    202: 'Accepted — URL diterima dan akan diproses',
    400: 'Bad Request — format request salah',
    403: 'Forbidden — key tidak valid atau keyLocation tidak bisa diakses',
    422: 'Unprocessable — URL tidak termasuk dalam host yang terdaftar',
    429: 'Too Many Requests — kuota terlampaui, coba lagi besok',
  };

  const msg = STATUS_MESSAGES[status] ?? `HTTP ${status}`;
  console.log(`\n[IndexNow] Status: ${status} — ${msg}`);

  if (status === 200 || status === 202) {
    console.log('[IndexNow] Berhasil! Bing & mesin lain akan crawl URL segera.');
  }
}

main().catch(err => {
  console.error('[IndexNow] Error:', err.message);
  process.exit(1);
});
