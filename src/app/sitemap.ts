import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/posts';
import { siteConfig } from '@/lib/config';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteConfig.url}${post.href}`,
    lastModified: post.lastModified ?? post.date,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const categoryEntries: MetadataRoute.Sitemap = siteConfig.categories.map((cat) => ({
    url: `${siteConfig.url}/kategori/${cat.slug}`,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${siteConfig.url}/tentang`,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  return [...staticEntries, ...categoryEntries, ...postEntries];
}
