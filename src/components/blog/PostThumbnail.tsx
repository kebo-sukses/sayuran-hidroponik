/**
 * PostThumbnail — Komponen thumbnail cerdas dengan dua mode:
 *
 * 1. GAMBAR NYATA: Jika `src` adalah URL valid (http/https) atau path lokal,
 *    render menggunakan next/image — mendukung Unsplash, Blogger, dsb.
 *
 * 2. FALLBACK OTOMATIS: Jika `src` kosong, placeholder, atau error,
 *    otomatis generate gradient + ikon + judul artikel berbasis kategori.
 *    Tidak butuh upload gambar apapun.
 *
 * Cara pakai di frontmatter artikel:
 *   thumbnail: ""                                          → fallback otomatis
 *   thumbnail: "https://images.unsplash.com/photo-xxx"    → gambar Unsplash
 *   thumbnail: "/images/posts/nama-gambar.jpg"            → gambar lokal
 */

'use client';

import Image from 'next/image';
import { useState } from 'react';

// Palet warna per kategori (gradient Tailwind-compatible)
const CATEGORY_THEMES: Record<
  string,
  { from: string; to: string; icon: string; label: string }
> = {
  'panduan-dasar': {
    from: '#16a34a',
    to: '#15803d',
    icon: '🌱',
    label: 'Panduan Dasar',
  },
  'sistem-hidroponik': {
    from: '#0891b2',
    to: '#0e7490',
    icon: '💧',
    label: 'Sistem Hidroponik',
  },
  'sayuran-hidroponik': {
    from: '#65a30d',
    to: '#4d7c0f',
    icon: '🥬',
    label: 'Sayuran',
  },
  'cara-membuat': {
    from: '#d97706',
    to: '#b45309',
    icon: '🔧',
    label: 'Cara Membuat',
  },
  budidaya: {
    from: '#7c3aed',
    to: '#6d28d9',
    icon: '🌿',
    label: 'Budidaya',
  },
  _default: {
    from: '#16a34a',
    to: '#15803d',
    icon: '🌿',
    label: 'Hidroponik',
  },
};

// Cek apakah URL gambar valid (bukan placeholder/kosong)
function isValidImageSrc(src: string): boolean {
  if (!src || src.trim() === '') return false;
  if (src.includes('placeholder')) return false;
  if (src.includes('sayur-hidroponik-placeholder')) return false;
  return true;
}

interface PostThumbnailProps {
  src: string;
  alt: string;
  category?: string;
  title?: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
}

export default function PostThumbnail({
  src,
  alt,
  category = '_default',
  title,
  fill = true,
  priority = false,
  sizes,
  className = 'object-cover',
}: PostThumbnailProps) {
  const [imgError, setImgError] = useState(false);

  const theme = CATEGORY_THEMES[category] ?? CATEGORY_THEMES['_default'];
  const showFallback = !isValidImageSrc(src) || imgError;

  if (showFallback) {
    return (
      <FallbackThumbnail
        theme={theme}
        title={title}
        fill={fill}
        className={className}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      priority={priority}
      sizes={sizes}
      className={className}
      onError={() => setImgError(true)}
    />
  );
}

// ── Komponen Fallback Gradient ──────────────────────────────────────────────

interface FallbackProps {
  theme: { from: string; to: string; icon: string; label: string };
  title?: string;
  fill?: boolean;
  className?: string;
}

function FallbackThumbnail({ theme, title, fill, className }: FallbackProps) {
  const containerClass = fill ? 'absolute inset-0' : 'w-full h-full';

  return (
    <div
      className={`${containerClass} flex flex-col items-center justify-center select-none`}
      style={{
        background: `linear-gradient(135deg, ${theme.from} 0%, ${theme.to} 100%)`,
      }}
    >
      {/* Pattern overlay halus */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px),
                            radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />

      {/* Konten tengah */}
      <div className="relative z-10 text-center px-4 py-3 max-w-full">
        <span
          className="text-5xl block mb-2 drop-shadow-sm"
          role="img"
          aria-hidden="true"
        >
          {theme.icon}
        </span>
        {title ? (
          <p className="text-white font-semibold text-sm leading-tight line-clamp-3 drop-shadow">
            {title}
          </p>
        ) : (
          <p className="text-white/80 text-xs font-medium tracking-wide uppercase">
            {theme.label}
          </p>
        )}
      </div>

      {/* Badge kategori pojok kanan bawah */}
      <div className="absolute bottom-2 right-2">
        <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-0.5 rounded-full font-medium">
          {theme.label}
        </span>
      </div>
    </div>
  );
}
