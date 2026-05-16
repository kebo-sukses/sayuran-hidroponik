// Halaman artikel: /[year]/[month]/[slug]
// Contoh: /2025/06/panduan-lengkap-tanaman-hidroponik

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import { Calendar, Clock, Tag, RefreshCw } from 'lucide-react';
import { format } from 'date-fns';
import { id as idLocale } from 'date-fns/locale';

import { getAllPostSlugs, getPostBySlug, getRelatedPosts } from '@/lib/posts';
import { generateSEOMetadata, blogPostingSchema, breadcrumbSchema, faqSchema } from '@/lib/seo';
import { siteConfig } from '@/lib/config';
import AuthorBio from '@/components/blog/AuthorBio';
import Breadcrumb from '@/components/blog/Breadcrumb';
import PostCard from '@/components/blog/PostCard';
import PostThumbnail from '@/components/blog/PostThumbnail';
import AdSlot from '@/components/ads/AdSlot';

interface PageParams {
  year: string;
  month: string;
  slug: string;
}

// ─── Static Generation ──────────────────────────────────────────────────────

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map(({ year, month, slug }) => ({
    year,
    month,
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<PageParams> }) {
  const { year, month, slug } = await params;
  const post = await getPostBySlug(year, month, slug);
  if (!post) return {};

  return generateSEOMetadata({
    title: post.title,
    description: post.description,
    canonical: post.href,
    ogImage: post.thumbnail,
    ogType: 'article',
    publishedTime: post.date,
    modifiedTime: post.lastModified,
    author: post.author,
    tags: post.tags,
  });
}

// ─── Page Component ──────────────────────────────────────────────────────────

export default async function BlogPostPage({ params }: { params: Promise<PageParams> }) {
  const { year, month, slug } = await params;
  const post = await getPostBySlug(year, month, slug);

  if (!post) notFound();

  const relatedPosts = await getRelatedPosts(slug, post.category);
  const categoryLabel =
    siteConfig.categories.find((c) => c.slug === post.category)?.label ?? post.category;

  const formattedDate = (() => {
    try { return format(new Date(post.date), 'd MMMM yyyy', { locale: idLocale }); }
    catch { return post.date; }
  })();

  const formattedLastModified = post.lastModified
    ? (() => {
        try { return format(new Date(post.lastModified!), 'd MMMM yyyy', { locale: idLocale }); }
        catch { return post.lastModified; }
      })()
    : null;

  return (
    <>
      {/* JSON-LD Schema – safe: content from internal seo.ts, XSS-escaped with replace(/<\/script>/gi) */}
      {/* eslint-disable-next-line react/no-danger */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingSchema({
            title: post.title,
            description: post.description,
            thumbnail: post.thumbnail,
            date: post.date,
            lastModified: post.lastModified,
            author: post.author,
            href: post.href,
            tags: post.tags,
            readingTime: post.readingTime,
          })).replace(/<\/script>/gi, '<\\/script>'),
        }}
      />
      {/* eslint-disable-next-line react/no-danger */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([
            { name: 'Beranda', href: '/' },
            { name: categoryLabel, href: `/kategori/${post.category}` },
            { name: post.title, href: post.href },
          ])).replace(/<\/script>/gi, '<\\/script>'),
        }}
      />
      {/* FAQ JSON-LD – safe: source from seo.ts faqSchema(), XSS-escaped with replace(/<\/script>/gi) */}
      {post.faqs && post.faqs.length > 0 && (
        <>
          {/* eslint-disable-next-line react/no-danger */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(faqSchema(post.faqs)).replace(/<\/script>/gi, '<\\/script>'),
            }}
          />
        </>
      )}

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Layout: artikel (kiri) + sidebar (kanan) */}
        <div className="flex gap-8 items-start">
          {/* ── Main Article ── */}
          <article className="flex-1 min-w-0 bg-white rounded-2xl shadow-sm overflow-hidden">
            {/* Thumbnail hero */}
            <div className="relative w-full aspect-video bg-gray-100">
              <PostThumbnail
                src={post.thumbnail}
                alt={post.title}
                category={post.category}
                title={post.title}
                priority
                sizes="(max-width: 768px) 100vw, 75vw"
                className="object-cover"
              />
            </div>

            <div className="p-6 md:p-10">
              {/* Breadcrumb */}
              <Breadcrumb
                items={[
                  { label: categoryLabel, href: `/kategori/${post.category}` },
                  { label: post.title },
                ]}
              />

              {/* Meta */}
              <div className="flex flex-wrap gap-3 mt-4 mb-6 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-primary-500" />
                  {formattedDate}
                </span>
                {formattedLastModified && (
                  <span className="flex items-center gap-1.5">
                    <RefreshCw className="w-4 h-4 text-blue-400" />
                    Diperbarui: {formattedLastModified}
                  </span>
                )}
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-primary-500" />
                  {post.readingTime}
                </span>
              </div>

              {/* Judul */}
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
                {post.title}
              </h1>

              {/* Deskripsi */}
              <p className="text-lg text-gray-600 leading-relaxed mb-8 border-l-4 border-primary-400 pl-4 italic">
                {post.description}
              </p>

              {/* AdSense – Mid sebelum konten */}
              <AdSlot type="mid-article" className="mb-8" />

              {/* Konten MDX */}
              <div className="prose-article">
                <MDXRemote
                  source={post.content}
                  options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
                />
              </div>

              {/* AdSense – Mid setelah konten */}
              <AdSlot type="mid-article" className="mt-8" />

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-2 items-center">
                  <Tag className="w-4 h-4 text-gray-400" />
                  {post.tags.map((tag) => (
                    <span key={tag} className="tag-pill">{tag}</span>
                  ))}
                </div>
              )}

              {/* FAQ Section – AEO + visible accordion */}
              {post.faqs && post.faqs.length > 0 && (
                <section className="mt-10 border-t border-gray-200 pt-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">
                    Pertanyaan yang Sering Ditanya
                  </h2>
                  <div className="space-y-3">
                    {post.faqs.map((faq, i) => (
                      <details
                        key={i}
                        className="group bg-primary-50 rounded-xl overflow-hidden"
                      >
                        <summary className="flex justify-between items-start gap-3 px-5 py-4 font-semibold text-gray-900 cursor-pointer list-none">
                          <span>{faq.q}</span>
                          <span className="text-primary-500 text-xl flex-shrink-0 mt-0.5 transition-transform duration-200 group-open:rotate-45">
                            +
                          </span>
                        </summary>
                        <p className="px-5 pb-4 text-gray-700 text-sm leading-relaxed">
                          {faq.a}
                        </p>
                      </details>
                    ))}
                  </div>
                </section>
              )}

              {/* Author Bio – E-E-A-T */}
              <AuthorBio
                authorName={post.author}
                factCheckedBy={post.factCheckedBy}
              />
            </div>
          </article>

          {/* ── Sidebar ── */}
          <aside className="hidden lg:block w-72 flex-shrink-0 space-y-6 sticky top-24">
            {/* AdSense Sidebar */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Advertisement
              </p>
              <AdSlot type="sidebar" />
            </div>

            {/* Artikel terkait di sidebar */}
            {relatedPosts.length > 0 && (
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 text-sm">
                  Artikel Terkait
                </h3>
                <div className="space-y-4">
                  {relatedPosts.map((p) => (
                    <PostCard key={p.slug} post={p} variant="compact" />
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>

        {/* Related Posts – Mobile/Bottom */}
        {relatedPosts.length > 0 && (
          <section className="mt-12">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Artikel Terkait
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedPosts.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
