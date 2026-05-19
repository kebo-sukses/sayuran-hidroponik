# 🗺️ Roadmap & Content Plan — Sayur Hidroponik
> Last updated: 19 Mei 2026  
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
| **Total artikel live** | **30 artikel** |

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
- [x] Tambah HowTo Schema support di `seo.ts`
- [x] Implementasi HowTo di artikel #2 (Kebun) — sudah ada struktur langkah
- [x] Implementasi HowTo di artikel #3, #4, #5, #6 (semua artikel "cara menanam")
- [x] Implementasi HowTo di artikel #8 (Tomat)

### 1.4 Optimasi Halaman Tentang (E-E-A-T)
- [x] Perkuat halaman `/tentang` dengan riwayat lengkap, pengalaman, dan kontak

---

## 🏗️ Content Cluster Architecture (Topical Authority Strategy)
> Setiap artikel bukan berdiri sendiri — mereka saling terhubung dalam 5 cluster tematik.
> Google akan mengenali website ini sebagai **otoritas** di topik hidroponik Indonesia.

### Cluster 1 — Sistem Hidroponik
**Pillar:** Jenis-Jenis Sistem Hidroponik ✅
- Spoke: Sistem NFT dari Paralon ← Fase 4
- Spoke: Sistem Rakit Apung Styrofoam ← Fase 5
- Spoke: Sistem Irigasi Tetes DIY ← Fase 7
- Spoke: Sistem DWC Ember ← Fase 8

### Cluster 2 — Sayuran & Tanaman
**Pillar:** 15 Contoh Tanaman Hidroponik ✅
- Spoke: Selada ✅, Kangkung ✅, Bayam ✅, Pakchoy ✅, Cabe ✅, Tomat ✅, Selada Air ✅
- Spoke: Timun ← Fase 5
- Spoke: Strawberry ← Fase 5
- Spoke: Bawang Daun ← Fase 6
- Spoke: Sawi ← Fase 8

### Cluster 3 — Nutrisi & Teknis
**Pillar:** Cara Membuat Nutrisi AB Mix ✅
- Spoke: Cara Mengukur EC/pH ✅
- Spoke: Penyemaian Benih di Rockwool ← Fase 4 🔥 (+900% YoY)
- Spoke: Media Tanam Kangkung ← Fase 5 🔥 (+900% YoY)
- Spoke: Nutrisi Organik Hidroponik ← Fase 7

### Cluster 4 — Cara Membuat (DIY)
**Pillar:** Cara Membuat Kebun Hidroponik ✅
- Spoke: Botol Bekas ✅
- Spoke: NFT Paralon ← Fase 4
- Spoke: Rakit Apung Styrofoam ← Fase 5
- Spoke: Irigasi Tetes DIY ← Fase 7

### Cluster 5 — Masalah & Solusi *(Kosong = Monopoli!)*
**Pillar:** Hama & Penyakit Tanaman Hidroponik ← Fase 4
- Spoke: Daun Kuning — Penyebab & Solusi ← Fase 7
- Spoke: Akar Busuk Hidroponik ← Fase 7
- Spoke: Defisiensi Nutrisi ← Fase 8

### Peta Internal Link Wajib
- **Artikel budidaya sayuran** → selalu link ke: Panduan Lengkap, Sistem Hidroponik, AB Mix, EC/pH, Hama & Penyakit
- **Artikel DIY/cara membuat** → selalu link ke: Alat Perlengkapan, Botol Bekas, AB Mix, Penyemaian Benih
- **Artikel masalah/solusi** → selalu link ke: semua artikel budidaya yang relevan
- **Pillar pages** → wajib di-update setiap kali spoke baru ditambahkan

---

## 📅 FASE 2 — Content Sprint: Tier 1 (Volume Tinggi)
> Jun 2026 — Target: 4 artikel baru

Keyword dengan volume **5.000/bulan**, kompetisi Rendah–Menengah. Ini adalah artikel yang paling cepat mendapat traffic organik.

### Minggu 1–2 Juni 2026
- [x] **C1** — `cara menanam cabe` (5.000/bln, Rendah)
  - Judul: **Cara Menanam Cabe Hidroponik: Panduan Lengkap dari Semai sampai Panen**
  - Slug: `2026-06-cara-menanam-cabe-hidroponik`
  - Kategori: `sayuran-hidroponik`
  - Secondary keyword: `cabe hidroponik`, `tanam cabe hidroponik`, `tanaman cabe hidroponik sederhana`
  - Catatan: Termasuk varietas keriting, rawit, paprika. Sistem drip + cocopeat.

- [x] **M1** — `media tanam hidroponik` (5.000/bln, Tinggi)
  - Judul: **Media Tanam Hidroponik: Rockwool, Cocopeat, Perlite, dan Hydroton**
  - Slug: `2026-06-media-tanam-hidroponik`
  - Kategori: `panduan-dasar`
  - Secondary keyword: `media tanam`, `tempat tanam hidroponik`, `bahan tanam hidroponik`
  - Catatan: Artikel definitive — perbandingan lengkap semua media, kapan pakai yang mana.

### Minggu 3–4 Juni 2026
- [x] **P3** — `contoh tanaman hidroponik` (5.000/bln, Rendah)
  - Judul: **15 Contoh Tanaman Hidroponik yang Paling Cocok untuk Pemula**
  - Slug: `2026-06-contoh-tanaman-hidroponik`
  - Kategori: `panduan-dasar`
  - Secondary keyword: `tanaman yang cocok untuk hidroponik`, `sayuran yang dapat ditanam secara hidroponik`
  - Catatan: Artikel listing — menjadi artikel penerima internal link terbanyak.

- [x] **R4** — `hidroponik sederhana` (5.000/bln, Tinggi) + `hidroponik botol` (500/bln, Tinggi)
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
- [x] **N1** — `cara membuat nutrisi ab mix` (500/bln, Rendah) + `ab mix` (5.000/bln, Tinggi)
  - Judul: **Cara Membuat Nutrisi AB Mix Sendiri: Resep, Takaran, dan Cara Mencampur**
  - Slug: `2026-07-cara-membuat-nutrisi-ab-mix`
  - Kategori: `panduan-dasar`
  - Secondary keyword: `pupuk hidroponik`, `nutrisi hidroponik`, `ab mix hidroponik`
  - Catatan: ⭐ AB Mix = 5.000 vol/bln Tinggi. Artikel ini menyerang dari angle low-competition "cara buat sendiri".

- [x] **A1** — `perlengkapan hidroponik` (500/bln, Tinggi) + `alat2 hidroponik` (500/bln, Tinggi)
  - Judul: **Alat dan Perlengkapan Hidroponik Pemula: Daftar Lengkap + Estimasi Harga**
  - Slug: `2026-07-alat-perlengkapan-hidroponik`
  - Kategori: `panduan-dasar`
  - Secondary keyword: `tempat tanam hidroponik`, `tempat untuk menanam hidroponik`
  - Catatan: Artikel tipe "listicle" — cocok untuk AdSense (banyak scroll, banyak tayangan).

### Minggu 3–4 Juli 2026
- [x] **T1** — `cara mengatur ph dan ec` (turunan dari `pupuk hidroponik` 500/bln)
  - Judul: **Cara Mengukur dan Mengatur EC dan pH Nutrisi Hidroponik dengan Benar**
  - Slug: `2026-07-cara-mengukur-ec-ph-nutrisi-hidroponik`
  - Kategori: `panduan-dasar`
  - Secondary keyword: `nutrisi tanaman hidroponik`, `cara hidroponik`
  - Catatan: Artikel teknis — E-E-A-T tinggi, sangat dicari oleh yang sudah mulai.

- [x] **S3** — `selada air hidroponik` (500/bln, **+900% pertumbuhan YoY** 🔥)
  - Judul: **Cara Menanam Selada Air Hidroponik: Tren Sayuran dengan Permintaan Meroket**
  - Slug: `2026-07-cara-menanam-selada-air-hidroponik`
  - Kategori: `sayuran-hidroponik`
  - Secondary keyword: `selada hijau hidroponik`, `cara tanam selada`
  - Catatan: ⭐⭐ Keyword dengan pertumbuhan +900% YoY — ini tren yang harus dimanfaatkan SEGERA.

---

## 📅 FASE 4 — Cluster Expansion + Quick Win Attack
> Agu 2026 — Target: 4 artikel baru | Total setelah fase ini: **20 artikel**

> **Quick Win Strategy** (terinspirasi dari `cara campuran ab mix` yang pernah page 1 selama 6 bulan):
> Gunakan angle **sangat spesifik** di judul dan H2. Bukan "sistem NFT" tapi "cara membuat sistem NFT dari pipa paralon ukuran 2,5 inch". Bukan "penyemaian benih" tapi "cara semai benih selada di rockwool agar berkecambah 100%".

- [x] **R5** — `hidroponik nft` (500/bln, Menengah) 🔵 CLUSTER 1 + 4
  - Judul: **Cara Membuat Sistem NFT Hidroponik dari Pipa Paralon: Panduan Step-by-Step**
  - Slug: `2026-08-cara-membuat-sistem-nft-hidroponik-paralon`
  - Kategori: `sistem-hidroponik`
  - Quick win keywords: `cara membuat hidroponik nft dari pipa paralon`, `sistem nft paralon sederhana`, `biaya buat nft hidroponik`
  - HowTo: ✅ 6 langkah | Internal link keluar → AB Mix ✅, EC/pH ✅, Alat ✅, Hama ←
  - Internal link masuk dari → Jenis Sistem ✅, Kebun Hidroponik ✅, Alat Perlengkapan ✅

- [x] **H1** — long tail cluster hama (50/bln × 30+ variasi) 🟣 CLUSTER 5 PILLAR
  - Judul: **Hama dan Penyakit Tanaman Hidroponik: Panduan Identifikasi, Pencegahan, dan Pengobatan**
  - Slug: `2026-08-hama-penyakit-tanaman-hidroponik`
  - Kategori: `panduan-dasar`
  - Quick win keywords: `hama kutu daun tanaman hidroponik`, `cara mengatasi kutu putih hidroponik`, `tanaman hidroponik layu`, `akar tanaman hidroponik berlendir`
  - HowTo: ❌ (referensi/troubleshooting)
  - Internal link masuk dari → SEMUA artikel budidaya: kangkung, bayam, cabe, tomat, selada, pakchoy, selada air
  - Internal link keluar → Panduan Lengkap ✅, EC/pH ✅, AB Mix ✅, Penyemaian ←

- [x] **B2** — `bisnis hidroponik pemula` (50/bln, CPM 3–7×) 💰 HIGH CPM
  - Judul: **Bisnis Sayuran Hidroponik: Simulasi Modal, Pilihan Sistem, dan Proyeksi Keuntungan**
  - Slug: `2026-08-bisnis-sayuran-hidroponik`
  - Kategori: `budidaya`
  - Quick win keywords: `modal usaha hidroponik selada`, `perhitungan untung rugi hidroponik`, `bisnis hidroponik pemula modal kecil`, `usaha sayuran hidroponik rumahan`
  - HowTo: ❌ (simulasi kalkulasi) | CPM topik bisnis = 3–7× lebih tinggi dari "cara menanam"
  - Internal link keluar → NFT Paralon ←, AB Mix ✅, Alat ✅, EC/pH ✅, Selada ✅, Penyemaian ←

- [x] **P4** — `penyemaian benih` (500/bln, +900% YoY 🔥, Rendah) 🟠 CLUSTER 3
  - Judul: **Cara Penyemaian Benih Hidroponik di Rockwool: Panduan Lengkap dari Nol**
  - Slug: `2026-08-cara-penyemaian-benih-hidroponik-rockwool`
  - Kategori: `panduan-dasar`
  - Quick win keywords: `cara semai benih selada di rockwool`, `cara penyemaian kangkung hidroponik`, `benih tidak berkecambah di rockwool`, `cara merendam benih sebelum semai hidroponik`
  - HowTo: ✅ 6 langkah (+900% YoY — HARUS komprehensif)
  - Internal link masuk dari → semua artikel "cara menanam" + Media Tanam ✅
  - Internal link keluar → Media Tanam ✅, AB Mix ✅, Alat ✅, Kangkung ✅, Selada ✅, Hama ←

---

## 📅 FASE 5 — Cluster 2 Expansion + Quick Win YoY
> Sep 2026 — Target: 4 artikel baru | Total setelah fase ini: **24 artikel**

- [ ] **B3** — Strawberry Hidroponik (premium fruit, CPM tinggi) 🔵 CLUSTER 2
  - Judul: **Cara Menanam Strawberry Hidroponik di Rumah: Sistem, Nutrisi, dan Rahasia Buah Manis**
  - Slug: `2026-09-cara-menanam-strawberry-hidroponik`
  - Kategori: `budidaya`
  - Quick win keywords: `strawberry hidroponik sistem nft`, `cara agar strawberry hidroponik berbuah lebat`, `nutrisi strawberry hidroponik`
  - HowTo: ✅ 6 langkah | Internal link → NFT Paralon ←, AB Mix ✅, EC/pH ✅, Hama ←

- [ ] **MK1** — `media tanam kangkung` (500/bln, +900% YoY 🔥, Rendah) 🟠 CLUSTER 2 + 3
  - Judul: **Media Tanam Kangkung Hidroponik: Rockwool, Cocopeat, atau Hidroton?**
  - Slug: `2026-09-media-tanam-kangkung-hidroponik`
  - Kategori: `sayuran-hidroponik`
  - Quick win keywords: `media tanam kangkung paling bagus`, `kangkung hidroponik pakai apa`, `cocopeat untuk kangkung hidroponik`
  - HowTo: ✅ | Internal link → Kangkung ✅, Media Tanam ✅, Penyemaian ←, Alat ✅

- [ ] **S4** — Timun Hidroponik 🔵 CLUSTER 2
  - Judul: **Cara Menanam Timun Hidroponik: Sistem Drip, Nutrisi EC, dan Jadwal Panen Optimal**
  - Slug: `2026-09-cara-menanam-timun-hidroponik`
  - Kategori: `sayuran-hidroponik`
  - Quick win keywords: `timun hidroponik sistem drip`, `berapa lama timun hidroponik berbuah`, `nutrisi timun hidroponik`
  - HowTo: ✅ | Internal link → Contoh Tanaman ✅, AB Mix ✅, EC/pH ✅, Hama ←

- [ ] **R6** — Rakit Apung Styrofoam (DIY viral) 🔵 CLUSTER 1 + 4
  - Judul: **Cara Membuat Rakit Apung Hidroponik dari Styrofoam: Modal Rp 100 Ribu, Panen Melimpah**
  - Slug: `2026-09-cara-membuat-rakit-apung-styrofoam`
  - Kategori: `cara-membuat`
  - Quick win keywords: `cara buat rakit apung dari styrofoam bekas`, `rakit apung hidroponik sederhana`, `ukuran styrofoam untuk hidroponik`
  - HowTo: ✅ 6 langkah | Internal link → Jenis Sistem ✅, Botol Bekas ✅, Alat ✅, Penyemaian ←

---

## 📅 FASE 6 — High CPM Attack + Commercial Intent
> Okt 2026 — Target: 4 artikel baru | Total setelah fase ini: **28 artikel**

> **Strategi:** Keyword commercial intent = CPC & CPM iklan 3–10× lebih tinggi. Pembaca yang mencari "biaya", "harga", "perbandingan" adalah calon pembeli, bukan sekadar pembaca.

- [ ] **COM1** — `biaya membuat hidroponik paralon` (Tinggi 100! Zero artikel saingan)
  - Judul: **Biaya Membuat Hidroponik Paralon: Rincian Modal, Harga Komponen, dan Tips Hemat**
  - Slug: `2026-10-biaya-membuat-hidroponik-paralon`
  - Kategori: `cara-membuat`
  - Quick win keywords: `rincian biaya buat hidroponik nft paralon`, `modal awal hidroponik paralon 20 lubang`, `berapa biaya membuat hidroponik sederhana`
  - HowTo: ❌ (kalkulasi biaya) | Catatan: Competition score 100 = CPC ads sangat tinggi!
  - Internal link → NFT Paralon ←, Alat ✅, Bisnis ←

- [ ] **COM2** — `harga sayuran hidroponik di pasaran` (Tinggi 70, +∞ trend)
  - Judul: **Harga Sayuran Hidroponik di Pasaran 2026: Panduan Jual Beli untuk Pemula**
  - Slug: `2026-10-harga-sayuran-hidroponik-di-pasaran`
  - Kategori: `budidaya`
  - Quick win keywords: `harga selada hidroponik per kg`, `harga kangkung hidroponik di supermarket`, `jual sayuran hidroponik ke mana`
  - Internal link → Bisnis ←, Selada ✅, Kangkung ✅, Tomat ✅

- [ ] **COM3** — `alat hidroponik lengkap` (Tinggi 96, -90% YoY = persaingan drop)
  - Judul: **Perbandingan Alat Hidroponik Pemula: Dari Yang Gratis Sampai Yang Profesional**
  - Slug: `2026-10-perbandingan-alat-hidroponik-pemula`
  - Kategori: `panduan-dasar`
  - Quick win keywords: `rekomendasi alat hidroponik untuk pemula 2026`, `pompa air terbaik untuk hidroponik`, `tds meter vs ec meter hidroponik`
  - Internal link → Alat Perlengkapan ✅, EC/pH ✅, NFT Paralon ←, Rakit Apung ←

- [ ] **COM4** — `bawang daun hidroponik` (expansion sayuran premium)
  - Judul: **Cara Menanam Bawang Daun Hidroponik: Sistem, Nutrisi, dan Panen Berulang**
  - Slug: `2026-10-cara-menanam-bawang-daun-hidroponik`
  - Kategori: `sayuran-hidroponik`
  - Quick win keywords: `bawang daun hidroponik sistem nft`, `bawang daun hidroponik jual mahal`, `cara panen bawang daun hidroponik berulang`
  - HowTo: ✅ | Internal link → Contoh Tanaman ✅, AB Mix ✅, EC/pH ✅

---

## 📅 FASE 7 — Long Tail Sweep + Cluster 5 Expansion
> Nov 2026 — Target: 4 artikel baru | Total setelah fase ini: **32 artikel**

> **Strategi:** Targetkan keyword dengan Competition Score 77–97 tapi ZERO artikel Indonesia — ini adalah lubang besar yang bisa diisi dengan cepat.

- [ ] **LT1** — `cara membuat irigasi tetes` (Competition Score 97! ZERO artikel saingan)
  - Judul: **Cara Membuat Sistem Irigasi Tetes Hidroponik DIY: Hemat Air, Efisien Nutrisi**
  - Slug: `2026-11-cara-membuat-irigasi-tetes-hidroponik`
  - Kategori: `cara-membuat`
  - Quick win keywords: `cara membuat irigasi tetes dari botol`, `cara membuat pengairan sistem tetes hidroponik`, `drip system hidroponik sederhana`
  - HowTo: ✅ 6 langkah | Mega long tail sweep: 3 keyword Competition Score 77–97
  - Internal link → Jenis Sistem ✅, Cabe ✅, Tomat ✅, NFT Paralon ←

- [ ] **P5** — `bertanam di rumah` (Competition Score 100, volume cluster besar)
  - Judul: **Panduan Bertanam di Rumah Tanpa Lahan: Dari Balkon, Rooftop, sampai Dapur**
  - Slug: `2026-11-panduan-bertanam-di-rumah-tanpa-lahan`
  - Kategori: `panduan-dasar`
  - Quick win keywords: `berkebun di apartemen`, `bertanam di balkon tanpa tanah`, `cara berkebun di halaman sempit`
  - Internal link → Panduan Lengkap ✅, Botol Bekas ✅, Rakit Apung ←, Contoh Tanaman ✅

- [ ] **C5A** — Daun Kuning (Cluster 5 Spoke) 🟣 CLUSTER 5
  - Judul: **Daun Tanaman Hidroponik Menguning: 8 Penyebab dan Cara Mengatasinya**
  - Slug: `2026-11-daun-kuning-tanaman-hidroponik`
  - Kategori: `panduan-dasar`
  - Quick win keywords: `kenapa daun selada hidroponik kuning`, `daun kangkung hidroponik pucat`, `defisiensi nitrogen hidroponik gejala`
  - Internal link → Hama ←, EC/pH ✅, AB Mix ✅, semua artikel budidaya

- [ ] **C5B** — Akar Busuk (Cluster 5 Spoke) 🟣 CLUSTER 5
  - Judul: **Akar Busuk pada Tanaman Hidroponik: Penyebab, Pencegahan, dan Cara Mengobati**
  - Slug: `2026-11-akar-busuk-tanaman-hidroponik`
  - Kategori: `panduan-dasar`
  - Quick win keywords: `akar tanaman hidroponik cokelat berlendir`, `cara mengatasi akar busuk hidroponik`, `pythium hidroponik`
  - Internal link → Hama ←, Daun Kuning ←, EC/pH ✅, NFT Paralon ←

---

## 📅 FASE 8 — Topical Authority Selesai
> Des 2026 — Target: 4 artikel baru | Total setelah fase ini: **36 artikel**

- [ ] **TA1** — Sawi Hidroponik (Cluster 2 completion)
  - Judul: **Cara Menanam Sawi Hidroponik: Panduan Cepat Panen 20 Hari**
  - Slug: `2026-12-cara-menanam-sawi-hidroponik`
  - Kategori: `sayuran-hidroponik`
  - Quick win keywords: `sawi hidroponik 20 hari panen`, `cara tanam sawi di sistem nft`, `sawi hiroponik vs tanah lebih cepat mana`
  - HowTo: ✅ | Internal link → Contoh Tanaman ✅, Kangkung ✅, Penyemaian ←, Hama ←

- [ ] **TA2** — Nutrisi Organik (Cluster 3 alternative angle)
  - Judul: **Nutrisi Organik untuk Hidroponik: Alternatif AB Mix yang Lebih Ramah Lingkungan**
  - Slug: `2026-12-nutrisi-organik-untuk-hidroponik`
  - Kategori: `panduan-dasar`
  - Quick win keywords: `pupuk organik cair untuk hidroponik`, `hidroponik organik tanpa ab mix`, `nutrisi hidroponik dari bahan alami`
  - Internal link → AB Mix ✅, EC/pH ✅, Contoh Tanaman ✅

- [ ] **TA3** — Kangkung di Paralon (ultra long tail spesifik)
  - Judul: **Cara Menanam Kangkung di Paralon Sistem NFT: Panen Berulang Tiap 2 Minggu**
  - Slug: `2026-12-cara-menanam-kangkung-di-paralon-nft`
  - Kategori: `sayuran-hidroponik`
  - Quick win keywords: `kangkung di pipa paralon nft`, `kangkung hidroponik paralon panen 2 minggu`, `ukuran paralon untuk kangkung hidroponik`
  - HowTo: ✅ | Internal link → Kangkung ✅, NFT Paralon ←, Media Tanam Kangkung ←

- [ ] **TA4** — Glossary Hidroponik (authority signal)
  - Judul: **Kamus Istilah Hidroponik: 60+ Istilah yang Wajib Diketahui Pemula**
  - Slug: `2026-12-kamus-istilah-hidroponik`
  - Kategori: `panduan-dasar`
  - Quick win keywords: `istilah hidroponik dan artinya`, `apa itu ec dalam hidroponik`, `arti nft dft dwc hidroponik`
  - Catatan: Artikel ini menjadi *reference hub* yang dikutip oleh semua artikel lain → boosts E-E-A-T

---

## 🎯 Ringkasan Target per Fase

| Fase | Periode | Strategi Utama | +Artikel | Total |
|------|---------|----------------|----------|-------|
| Fase 1 | Mei 2026 | Fondasi Teknis: Internal Link + FAQ + HowTo + E-E-A-T | 0 | 8 |
| Fase 2 | Jun 2026 | Tier 1 Volume (5K/bln): Cabe, Media Tanam, Contoh, Botol Bekas | 4 | 12 |
| Fase 3 | Jul 2026 | Nutrisi & Teknis: AB Mix, Alat, EC/pH, Selada Air (+900% YoY) | 4 | 16 |
| Fase 4 | Agu 2026 | Cluster Expansion: NFT, Hama (Pillar C5), Bisnis, Penyemaian (+900% YoY) | 4 | 20 |
| Fase 5 | Sep 2026 | YoY Growth + Cluster 2: Strawberry, Media Kangkung (+900%), Timun, Rakit Apung | 4 | 24 |
| Fase 6 | Okt 2026 | High CPM Attack: Biaya, Harga, Perbandingan Alat, Bawang Daun | 4 | 28 |
| Fase 7 | Nov 2026 | Long Tail Sweep + Cluster 5: Irigasi Tetes, Bertanam di Rumah, Daun Kuning, Akar Busuk | 4 | 32 |
| Fase 8 | Des 2026 | Topical Authority: Sawi, Nutrisi Organik, Kangkung Paralon, Glossary | 4 | 36 |
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
