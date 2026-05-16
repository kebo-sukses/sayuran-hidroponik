# 🗺️ Roadmap & Content Plan — Sayur Hidroponik
> Last updated: 15 Mei 2026  
> Domain: https://sayur-hidroponik.my.id  
> Sumber keyword: Google Keyword Planner (Apr 2025 – Mar 2026)

---

## 📊 Status Saat Ini

| Item | Status |
|------|--------|
| Next.js + Vercel deployment | ✅ Live |
| Google Analytics (G-V7RH4PLGD5) | ✅ Terpasang |
| Google AdSense (ca-pub-7911744590560254) | ✅ Approved & Terpasang |
| Slot ID AdSense (infeed, mid-article, sidebar, footer) | ✅ Real slot IDs |
| Sitemap dinamis | ✅ Submit ke GSC |
| Smart thumbnail system (PostThumbnail + Unsplash) | ✅ |
| remark-gfm untuk tabel Markdown | ✅ |
| Avatar author SVG | ✅ |
| **Total artikel live** | **8 artikel** |

---

## ✅ Artikel yang Sudah Dipublish

| # | Judul | Kategori | Keyword Utama | Volume |
|---|-------|----------|---------------|--------|
| 1 | Panduan Lengkap Tanaman Hidroponik | panduan-dasar | tanaman hidroponik | 5.000 |
| 2 | Cara Membuat Kebun Hidroponik di Rumah | cara-membuat | kebun hidroponik | 5.000 |
| 3 | Cara Menanam Selada Hidroponik | sayuran-hidroponik | selada hidroponik | 5.000 |
| 4 | Cara Menanam Kangkung Hidroponik | sayuran-hidroponik | cara menanam kangkung | 5.000 |
| 5 | Cara Menanam Bayam Hidroponik | sayuran-hidroponik | cara menanam bayam | 500 |
| 6 | Cara Menanam Pakchoy Hidroponik | sayuran-hidroponik | cara menanam pakchoy | 500 |
| 7 | Jenis-Jenis Sistem Hidroponik (NFT, DWC, Wick) | sistem-hidroponik | sistem hidroponik | 5.000 |
| 8 | Budidaya Tomat Hidroponik | budidaya | budidaya tomat hidroponik | 500 |

---

## 🔧 FASE 1 — Fondasi Teknis SEO / GEO / AEO
> Target selesai: 31 Mei 2026

Perbaikan teknis ini tidak membutuhkan artikel baru, tapi dampaknya langsung ke ranking dan kemunculan di Google AI Overviews serta ChatGPT Search.

### 1.1 Internal Linking (Prioritas TERTINGGI)
- [x] Tambah internal link di artikel #1 (Panduan Lengkap) → semua artikel lain
- [x] Tambah internal link di artikel #2 (Kebun Hidroponik) → #7 (Sistem), #3, #4
- [x] Tambah internal link di artikel #3 (Selada) → #1 (Panduan), #7 (Sistem)
- [x] Tambah internal link di artikel #4 (Kangkung) → #1 (Panduan), #7 (Sistem)
- [x] Tambah internal link di artikel #5 (Bayam) → #1 (Panduan), #3 (Selada)
- [x] Tambah internal link di artikel #6 (Pakchoy) → #1 (Panduan), #5 (Bayam)
- [x] Tambah internal link di artikel #7 (Sistem) → #2 (Kebun), #8 (Tomat)
- [x] Tambah internal link di artikel #8 (Tomat) → #7 (Sistem), #1 (Panduan)

### 1.2 FAQ Schema — AEO (Answer Engine Optimization)
> FAQ Schema membuat konten muncul di Google AI Overviews, ChatGPT Search, dan Perplexity sebagai sumber jawaban langsung.
- [x] Tambah FAQ Schema support di komponen `page.tsx`
- [x] Tambah section FAQ + frontmatter `faqs` di artikel #1 (Panduan Lengkap)
- [x] Tambah section FAQ di artikel #2 (Kebun Hidroponik)
- [x] Tambah section FAQ di artikel #3 (Selada)
- [x] Tambah section FAQ di artikel #4 (Kangkung)
- [x] Tambah section FAQ di artikel #5 (Bayam)
- [x] Tambah section FAQ di artikel #6 (Pakchoy)
- [x] Tambah section FAQ di artikel #7 (Sistem Hidroponik)
- [x] Tambah section FAQ di artikel #8 (Tomat)

### 1.3 HowTo Schema — GEO (Generative Engine Optimization)
> HowTo Schema membuat Google menampilkan langkah-langkah secara visual di SERP dan mengutip sebagai prosedur resmi di AI answers.
- [ ] Tambah HowTo Schema support di `seo.ts`
- [ ] Implementasi HowTo di artikel #2 (Kebun) — sudah ada struktur langkah
- [ ] Implementasi HowTo di artikel #3, #4, #5, #6 (semua artikel "cara menanam")
- [ ] Implementasi HowTo di artikel #8 (Tomat)

### 1.4 Optimasi Halaman Tentang (E-E-A-T)
- [ ] Perkuat halaman `/tentang` dengan riwayat lengkap, pengalaman, dan kontak

---

## 📅 FASE 2 — Content Sprint: Tier 1 (Volume Tinggi)
> Jun 2026 — Target: 4 artikel baru

Keyword dengan volume **5.000/bulan**, kompetisi Rendah–Menengah. Ini adalah artikel yang paling cepat mendapat traffic organik.

### Minggu 1–2 Juni 2026
- [ ] **C1** — `cara menanam cabe` (5.000/bln, Rendah)
  - Judul: **Cara Menanam Cabe Hidroponik: Panduan Lengkap dari Semai sampai Panen**
  - Slug: `2026-06-cara-menanam-cabe-hidroponik`
  - Kategori: `sayuran-hidroponik`
  - Secondary keyword: `cabe hidroponik`, `tanam cabe hidroponik`, `tanaman cabe hidroponik sederhana`
  - Catatan: Termasuk varietas keriting, rawit, paprika. Sistem drip + cocopeat.

- [ ] **M1** — `media tanam hidroponik` (5.000/bln, Tinggi)
  - Judul: **Media Tanam Hidroponik: Rockwool, Cocopeat, Perlite, dan Hydroton**
  - Slug: `2026-06-media-tanam-hidroponik`
  - Kategori: `panduan-dasar`
  - Secondary keyword: `media tanam`, `tempat tanam hidroponik`, `bahan tanam hidroponik`
  - Catatan: Artikel definitive — perbandingan lengkap semua media, kapan pakai yang mana.

### Minggu 3–4 Juni 2026
- [ ] **P3** — `contoh tanaman hidroponik` (5.000/bln, Rendah)
  - Judul: **15 Contoh Tanaman Hidroponik yang Paling Cocok untuk Pemula**
  - Slug: `2026-06-contoh-tanaman-hidroponik`
  - Kategori: `panduan-dasar`
  - Secondary keyword: `tanaman yang cocok untuk hidroponik`, `sayuran yang dapat ditanam secara hidroponik`
  - Catatan: Artikel listing — menjadi artikel penerima internal link terbanyak.

- [ ] **R4** — `hidroponik sederhana` (5.000/bln, Tinggi) + `hidroponik botol` (500/bln, Tinggi)
  - Judul: **Cara Membuat Hidroponik Sederhana dari Botol Bekas Modal di Bawah 50 Ribu**
  - Slug: `2026-06-hidroponik-sederhana-botol-bekas`
  - Kategori: `cara-membuat`
  - Secondary keyword: `hidroponik botol`, `cara buat tanaman hidroponik sederhana`, `tanaman hidroponik botol`
  - Catatan: ⭐ Artikel ini sangat viral di sosmed — potensi backlink organik tinggi.

---

## 📅 FASE 3 — Content Sprint: Tier 2 (Nutrisi, Alat, Teknis)
> Jul 2026 — Target: 4 artikel baru

Keyword 500/bulan tapi **sangat strategis** — artikel-artikel ini menjawab pertanyaan yang ditanyakan semua pemula hidroponik.

### Minggu 1–2 Juli 2026
- [ ] **N1** — `cara membuat nutrisi ab mix` (500/bln, Rendah) + `ab mix` (5.000/bln, Tinggi)
  - Judul: **Cara Membuat Nutrisi AB Mix Sendiri: Resep, Takaran, dan Cara Mencampur**
  - Slug: `2026-07-cara-membuat-nutrisi-ab-mix`
  - Kategori: `panduan-dasar`
  - Secondary keyword: `pupuk hidroponik`, `nutrisi hidroponik`, `ab mix hidroponik`
  - Catatan: ⭐ AB Mix = 5.000 vol/bln Tinggi. Artikel ini menyerang dari angle low-competition "cara buat sendiri".

- [ ] **A1** — `perlengkapan hidroponik` (500/bln, Tinggi) + `alat2 hidroponik` (500/bln, Tinggi)
  - Judul: **Alat dan Perlengkapan Hidroponik Pemula: Daftar Lengkap + Estimasi Harga**
  - Slug: `2026-07-alat-perlengkapan-hidroponik`
  - Kategori: `panduan-dasar`
  - Secondary keyword: `tempat tanam hidroponik`, `tempat untuk menanam hidroponik`
  - Catatan: Artikel tipe "listicle" — cocok untuk AdSense (banyak scroll, banyak tayangan).

### Minggu 3–4 Juli 2026
- [ ] **T1** — `cara mengatur ph dan ec` (turunan dari `pupuk hidroponik` 500/bln)
  - Judul: **Cara Mengukur dan Mengatur EC dan pH Nutrisi Hidroponik dengan Benar**
  - Slug: `2026-07-cara-mengukur-ec-ph-nutrisi-hidroponik`
  - Kategori: `panduan-dasar`
  - Secondary keyword: `nutrisi tanaman hidroponik`, `cara hidroponik`
  - Catatan: Artikel teknis — E-E-A-T tinggi, sangat dicari oleh yang sudah mulai.

- [ ] **S3** — `selada air hidroponik` (500/bln, **+900% pertumbuhan YoY** 🔥)
  - Judul: **Cara Menanam Selada Air Hidroponik: Tren Sayuran dengan Permintaan Meroket**
  - Slug: `2026-07-cara-menanam-selada-air-hidroponik`
  - Kategori: `sayuran-hidroponik`
  - Secondary keyword: `selada hijau hidroponik`, `cara tanam selada`
  - Catatan: ⭐⭐ Keyword dengan pertumbuhan +900% YoY — ini tren yang harus dimanfaatkan SEGERA.

---

## 📅 FASE 4 — Content Sprint: Tier 3 (Bisnis & Long Tail)
> Agu 2026 — Target: 4 artikel baru

### Minggu 1–2 Agustus 2026
- [ ] **R5** — `sistem hidroponik nft` (500/bln, Menengah)
  - Judul: **Cara Membuat Sistem NFT Hidroponik dari Pipa Paralon: Panduan Step-by-Step**
  - Slug: `2026-08-cara-membuat-sistem-nft-hidroponik-paralon`
  - Kategori: `sistem-hidroponik`
  - Secondary keyword: `hidroponik nft`, `teknik nft hidroponik`, `sistem hidroponik irigasi`

- [ ] **H1** — Hama & Penyakit (turunan dari semua artikel, long tail beragam)
  - Judul: **Hama dan Penyakit Tanaman Hidroponik: Cara Mengatasi dan Mencegahnya**
  - Slug: `2026-08-hama-penyakit-tanaman-hidroponik`
  - Kategori: `panduan-dasar`
  - Secondary keyword: `masalah tanaman hidroponik`, `tips hidroponik`
  - Catatan: Artikel ini akan menerima banyak internal link dari semua artikel budidaya.

### Minggu 3–4 Agustus 2026
- [ ] **B2** — `bisnis sayuran hidroponik` (50/bln tapi CPM sangat tinggi)
  - Judul: **Bisnis Sayuran Hidroponik: Simulasi Modal, Sistem, dan Perhitungan Untung Rugi**
  - Slug: `2026-08-bisnis-sayuran-hidroponik`
  - Kategori: `budidaya`
  - Secondary keyword: `usaha hidroponik`, `usaha tanaman hidroponik`, `usaha sayuran hidroponik`
  - Catatan: ⭐ CPM iklan topik bisnis/usaha = 2–5x lebih tinggi dari topik cara tanam biasa.

- [ ] **P4** — `penyemaian benih` (500/bln, Rendah)
  - Judul: **Cara Penyemaian Benih Hidroponik di Rockwool: Panduan dari Nol**
  - Slug: `2026-08-cara-penyemaian-benih-hidroponik-rockwool`
  - Kategori: `panduan-dasar`
  - Secondary keyword: `pembibitan hidroponik`, `pembibitan tanaman`, `penyemaian hidroponik`

---

## 📅 FASE 5 — Content Sprint: Tier 4 (Expansion)
> Sep 2026 — Target: 4 artikel baru

- [ ] **B3** — Strawberry Hidroponik (trend buah premium)
  - Judul: **Cara Menanam Strawberry Hidroponik di Rumah: Sistem, Nutrisi, dan Tips Panen**
  - Slug: `2026-09-cara-menanam-strawberry-hidroponik`
  - Kategori: `budidaya`

- [ ] **S4** — Timun/Mentimun Hidroponik
  - Judul: **Cara Menanam Timun Hidroponik: Sistem Drip, Nutrisi, dan Jadwal Panen**
  - Slug: `2026-09-cara-menanam-timun-hidroponik`
  - Kategori: `sayuran-hidroponik`

- [ ] **R6** — Rakit Apung DIY
  - Judul: **Cara Membuat Rakit Apung Hidroponik dari Styrofoam Bekas Modal 100 Ribu**
  - Slug: `2026-09-cara-membuat-rakit-apung-styrofoam`
  - Kategori: `cara-membuat`
  - Secondary keyword: `sistem rakit apung`, `rakit apung adalah`, `cara menanam sayur hidroponik sederhana`

- [ ] **K3** — Kangkung di Paralon (long tail spesifik)
  - Judul: **Cara Menanam Kangkung di Paralon Sistem Hidroponik: Panen dalam 2 Minggu**
  - Slug: `2026-09-cara-menanam-kangkung-di-paralon`
  - Kategori: `sayuran-hidroponik`
  - Secondary keyword: `sayuran di paralon`, `tanam sayur di paralon`, `hidroponik sayur kangkung`

---

## 🎯 Ringkasan Target per Fase

| Fase | Periode | Aksi Utama | Artikel Baru | Total Artikel |
|------|---------|------------|-------------|---------------|
| Fase 1 | 15–31 Mei 2026 | Internal Linking + FAQ + HowTo Schema | 0 | 8 |
| Fase 2 | Jun 2026 | Tier 1 Keywords (5K volume) | 4 | 12 |
| Fase 3 | Jul 2026 | Nutrisi, Alat, Teknis | 4 | 16 |
| Fase 4 | Agu 2026 | Bisnis + Long Tail | 4 | 20 |
| Fase 5 | Sep 2026 | Expansion | 4 | 24 |
| Review | Okt 2026 | Evaluasi traffic, update artikel lama, planning Q4 | — | 24 |

---

## 🔑 Keyword Prioritas dari Data (Volume ≥ 5.000/bln)

| Keyword | Volume | Kompetisi | Status |
|---------|--------|-----------|--------|
| media tanam | 50.000 | Menengah | Dicover via M1 (Jun) |
| tanaman air | 50.000 | Menengah | Turunan, dicover di artikel umum |
| tanaman hidroponik | 5.000 | Rendah | ✅ Artikel #1 |
| sayur hidroponik | 5.000 | Rendah | ✅ Artikel #1 |
| selada hidroponik | 5.000 | Rendah | ✅ Artikel #3 |
| sistem hidroponik | 5.000 | Rendah | ✅ Artikel #7 |
| kebun hidroponik | 5.000 | Rendah | ✅ Artikel #2 |
| cara menanam kangkung | 5.000 | Rendah | ✅ Artikel #4 |
| media tanam hidroponik | 5.000 | Tinggi | 🔄 M1 (Jun 2026) |
| cara menanam cabe | 5.000 | Rendah | 🔄 C1 (Jun 2026) |
| ab mix | 5.000 | Tinggi | 🔄 N1 (Jul 2026) via angle rendah |
| contoh tanaman hidroponik | 5.000 | Rendah | 🔄 P3 (Jun 2026) |
| hidroponik sederhana | 5.000 | Tinggi | 🔄 R4 (Jun 2026) via angle botol |

---

## ⭐ Keyword Tren Khusus yang Harus Dikejar

| Keyword | Volume | Pertumbuhan YoY | Target Artikel |
|---------|--------|-----------------|----------------|
| selada air hidroponik | 500 | **+900%** 🔥 | S3 — Juli 2026 |
| tanah untuk menanam | 500 | **+900%** | Dicover di M1 |
| cara menanam sayuran yang mudah | 50 | **∞ (baru)** | P3 — Juni 2026 |

---

## 📋 Checklist Teknis Ongoing

### Core Web Vitals & Technical SEO
- [ ] Verifikasi LCP < 2.5s di semua halaman (cek PageSpeed Insights sebulan sekali)
- [ ] Monitor Google Search Console untuk crawl errors setiap 2 minggu
- [ ] Update `lastModified` di artikel yang di-edit

### AdSense Optimization
- [ ] Monitor RPM per artikel setelah 2 minggu live
- [ ] Evaluasi penempatan AdSlot mid-article — apakah perlu digeser
- [ ] Target RPM: Rp 3.000–8.000 per 1.000 tayangan untuk niche ini

### Backlink Building (Mulai Fase 3)
- [ ] Daftar dan posting di forum hidroponik Indonesia (tautan natural)
- [ ] Jawab pertanyaan di Quora Indonesia, Kaskus, dan Facebook Group Hidroponik
- [ ] Kirim 1 guest post per bulan ke blog pertanian/kebun Indonesia

---

## 📈 KPI & Target Traffic

| Periode | Target Artikel | Target Session/Bulan | Target AdSense/Bulan |
|---------|---------------|----------------------|----------------------|
| Jun 2026 | 12 | 500–1.000 | Rp 50.000–150.000 |
| Jul 2026 | 16 | 1.500–3.000 | Rp 150.000–400.000 |
| Agu 2026 | 20 | 3.000–6.000 | Rp 300.000–800.000 |
| Sep 2026 | 24 | 6.000–12.000 | Rp 600.000–1.500.000 |
| Des 2026 | 28–30 | 15.000–25.000 | Rp 1.500.000–4.000.000 |

> Angka di atas adalah estimasi konservatif. Aktual bisa lebih tinggi jika ada artikel yang viral atau masuk Featured Snippet.

---

## 🗒️ Catatan Teknis Penting

- **MDX**: Karakter `<` diikuti angka di teks inline harus ditulis "di bawah X" (MDX memparsing `<` sebagai JSX tag)
- **Tabel**: remark-gfm v4.0.1 sudah terpasang, tabel aman
- **Gambar**: Thumbnail Unsplash via CDN `images.unsplash.com` — tambahkan `?w=1200&q=80`
- **Schema**: Setiap artikel perlu Article + FAQ + (HowTo jika tutorial) JSON-LD
- **Kategori slug yang valid**: `panduan-dasar`, `sistem-hidroponik`, `sayuran-hidroponik`, `cara-membuat`, `budidaya`
- **URL format artikel**: `content/posts/YYYY-MM-slug.md` → URL: `/YYYY/MM/slug`
