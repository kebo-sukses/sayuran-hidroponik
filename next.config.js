/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pastikan trailing slash OFF agar URL /2022/08/slug match persis
  trailingSlash: false,

  images: {
    // Izinkan gambar dari Blogger CDN dan sumber eksternal lainnya
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blogger.googleusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.blogspot.com',
        pathname: '/**',
      },
      // Unsplash CDN — gambar bebas royalti berkualitas tinggi
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 2592000, // 30 hari cache untuk gambar yang dioptimasi
  },

  // Header keamanan dan performa
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // HSTS — paksa HTTPS minimal 1 tahun
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
          // COOP — allow-popups agar AdSense tetap berfungsi
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin-allow-popups' },
          // Permissions-Policy — batasi akses fitur yang tidak dipakai
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      {
        // Cache maksimal untuk aset statis Next.js (hash di filename = aman immutable)
        source: '/_next/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        // Cache untuk file public (gambar, favicon, dll)
        source: '/(.*)\\.(ico|png|jpg|jpeg|webp|avif|svg|woff2|woff|ttf)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },

  // Redirect untuk URL Blogger lama (contoh jika ada slug yang berubah)
  async redirects() {
    return [
      // Tambahkan redirect spesifik di sini jika diperlukan
      // Contoh: { source: '/p/about.html', destination: '/tentang', permanent: true }
    ];
  },
};

module.exports = nextConfig;
