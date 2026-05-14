import { getAllPosts } from '@/lib/posts';
import { generateSEOMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/config';
import PostCard from '@/components/blog/PostCard';
import AdSlot from '@/components/ads/AdSlot';
import Link from 'next/link';
import { ArrowRight, Leaf, Droplets, Sun } from 'lucide-react';

export const metadata = generateSEOMetadata({});

export default async function HomePage() {
  const allPosts = await getAllPosts();
  const featuredPost = allPosts[0];
  const latestPosts = allPosts.slice(1, 7);

  return (
    <div>
      {/* ── Hero Section ── */}
      <section className="bg-gradient-to-br from-primary-700 via-primary-600 to-emerald-500 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium mb-4">
              <Leaf className="w-4 h-4" />
              Panduan Hidroponik Terpercaya
            </span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              Mulai Bertanam Hidroponik <span className="text-yellow-300">di Rumah Anda</span>
            </h1>
            <p className="text-lg text-green-100 leading-relaxed mb-8">
              Pelajari cara menanam sayuran hidroponik dengan mudah. Dari sistem NFT, DFT,
              hingga rakit apung — semua ada di sini, gratis!
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/kategori/panduan-dasar" className="btn-primary bg-white text-primary-700 hover:bg-green-50">
                Mulai Belajar <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/kategori/sistem-hidroponik" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 hover:bg-white/30 rounded-lg font-medium transition-colors">
                Lihat Sistem
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Stats ── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-3 gap-4 text-center">
          {[
            { icon: <Leaf className="w-5 h-5 text-primary-600 mx-auto mb-1" />, label: '250+ Artikel', sub: 'Panduan lengkap' },
            { icon: <Droplets className="w-5 h-5 text-blue-500 mx-auto mb-1" />, label: '5 Sistem', sub: 'NFT, DFT, Rakit Apung, dll' },
            { icon: <Sun className="w-5 h-5 text-yellow-500 mx-auto mb-1" />, label: '10+ Sayuran', sub: 'Bisa ditanam di rumah' },
          ].map((stat, i) => (
            <div key={i} className="py-2">
              {stat.icon}
              <p className="font-bold text-gray-900 text-sm md:text-base">{stat.label}</p>
              <p className="text-xs text-gray-500">{stat.sub}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* ── Featured Post ── */}
        {featuredPost && (
          <section className="mb-12">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-bold text-gray-900">Artikel Terbaru</h2>
            </div>
            <PostCard post={featuredPost} variant="featured" />
          </section>
        )}

        {/* AdSense In-feed */}
        <AdSlot type="infeed" className="mb-10" />

        {/* ── Latest Posts Grid ── */}
        {latestPosts.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-bold text-gray-900">Artikel Pilihan</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        )}

        {/* ── Kategori Cards ── */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Jelajahi Topik</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {siteConfig.categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/kategori/${cat.slug}`}
                className="group bg-white rounded-xl p-4 border border-gray-100 hover:border-primary-300 hover:shadow-md transition-all text-center"
              >
                <Leaf className="w-6 h-6 text-primary-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-sm font-medium text-gray-800 group-hover:text-primary-700">
                  {cat.label}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* AdSense Footer */}
        <AdSlot type="footer" />
      </div>
    </div>
  );
}
