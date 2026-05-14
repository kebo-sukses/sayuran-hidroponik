import { notFound } from 'next/navigation';
import { getPostsByCategory, getAllPosts } from '@/lib/posts';
import { generateSEOMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/config';
import PostCard from '@/components/blog/PostCard';
import AdSlot from '@/components/ads/AdSlot';
import Breadcrumb from '@/components/blog/Breadcrumb';

interface PageParams {
  slug: string;
}

export async function generateStaticParams() {
  return siteConfig.categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: { params: Promise<PageParams> }) {
  const { slug } = await params;
  const category = siteConfig.categories.find((c) => c.slug === slug);
  if (!category) return {};
  return generateSEOMetadata({
    title: `${category.label} – Tips & Panduan Hidroponik`,
    description: `Kumpulan artikel tentang ${category.label}. Panduan praktis dan terpercaya untuk budidaya sayuran hidroponik.`,
    canonical: `/kategori/${slug}`,
  });
}

export default async function CategoryPage({ params }: { params: Promise<PageParams> }) {
  const { slug } = await params;
  const category = siteConfig.categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const posts = await getPostsByCategory(slug);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: category.label }]} />

      <div className="mt-4 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mt-2">{category.label}</h1>
        <p className="text-gray-500 mt-2">
          {posts.length} artikel ditemukan dalam kategori ini
        </p>
      </div>

      <AdSlot type="infeed" className="mb-8" />

      {posts.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <p className="text-lg">Belum ada artikel di kategori ini.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
