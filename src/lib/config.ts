// Konfigurasi situs - ubah sesuai kebutuhan
export const siteConfig = {
  name: 'Sayur Hidroponik',
  title: 'Budidaya Sayur Hidroponik – Panduan Lengkap Pemula',
  description:
    'Panduan lengkap hidroponik untuk pemula: cara menanam sayur hidroponik di rumah, sistem pipa & rakit apung, nutrisi, dan tips sukses bertani modern.',
  url: 'https://sayur-hidroponik.my.id',
  ogImage: 'https://sayur-hidroponik.my.id/og-default.jpg',
  
  // Kode Google Analytics & AdSense
  gtag: 'G-V7RH4PLGD5',
  gads: 'AW-11463366373',
  adsenseId: 'ca-pub-7911744590560254',
  
  // Informasi author untuk E-E-A-T
  author: {
    name: 'Kebo Sukses',
    jobTitle: 'Penulis & Praktisi Hidroponik',
    bio: 'Praktisi hidroponik dengan pengalaman 5+ tahun. Telah membantu ribuan pemula memulai kebun hidroponik di rumah.',
    image: '/images/author-kebo-sukses.svg',
    email: 'kontak@sayur-hidroponik.my.id',
    social: {
      facebook: 'https://facebook.com/kebosukses',
    },
  },

  // Kategori utama (mapping dari label Blogger)
  categories: [
    { slug: 'panduan-dasar', label: 'Panduan Dasar', bloggerLabel: 'BLOG HIDROPONIK' },
    { slug: 'sistem-hidroponik', label: 'Sistem Hidroponik', bloggerLabel: 'HIDROPONIK SISTEM' },
    { slug: 'sayuran-hidroponik', label: 'Sayuran Hidroponik', bloggerLabel: 'SAYURAN HIDROPONIK' },
    { slug: 'cara-membuat', label: 'Cara Membuat', bloggerLabel: 'CARA MEMBUAT TANAMAN HIDROPONIK' },
    { slug: 'budidaya', label: 'Budidaya', bloggerLabel: 'BUDIDAYA HIDROPONIK' },
  ],

  // Navigasi utama
  navLinks: [
    { href: '/', label: 'Beranda' },
    { href: '/kategori/panduan-dasar', label: 'Panduan Dasar' },
    { href: '/kategori/sistem-hidroponik', label: 'Sistem' },
    { href: '/kategori/sayuran-hidroponik', label: 'Sayuran' },
    { href: '/tentang', label: 'Tentang' },
  ],
};
