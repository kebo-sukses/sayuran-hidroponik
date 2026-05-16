import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

// Direktori konten
const postsDirectory = path.join(process.cwd(), 'content/posts');

// Tipe data untuk frontmatter post
export interface PostFrontmatter {
  title: string;
  date: string;             // Format: YYYY-MM-DD
  lastModified?: string;    // Format: YYYY-MM-DD
  description: string;
  thumbnail: string;
  category: string;         // Slug kategori (panduan-dasar, sistem-hidroponik, dll)
  tags: string[];
  author: string;
  factCheckedBy?: string;
  canonicalUrl?: string;
  noindex?: boolean;
  faqs?: { q: string; a: string }[];
  howTo?: {
    name: string;
    description: string;
    totalTime: string;
    estimatedCost?: string;
    steps: { name: string; text: string }[];
  };
}

export interface Post extends PostFrontmatter {
  slug: string;
  year: string;
  month: string;
  content: string;
  readingTime: string;
  // URL yang dihasilkan: /YYYY/MM/slug
  href: string;
}

// Ambil semua slug post dari folder content/posts/
export function getAllPostSlugs(): { year: string; month: string; slug: string }[] {
  if (!fs.existsSync(postsDirectory)) return [];
  
  const filenames = fs.readdirSync(postsDirectory);
  
  return filenames
    .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
    .map((filename) => {
      // Nama file format: YYYY-MM-slug-artikel.md
      const parts = filename.replace(/\.(md|mdx)$/, '').split('-');
      const year = parts[0];
      const month = parts[1];
      const slug = parts.slice(2).join('-');
      return { year, month, slug };
    });
}

// Ambil satu post berdasarkan year/month/slug
export async function getPostBySlug(
  year: string,
  month: string,
  slug: string
): Promise<Post | null> {
  const fullPath = path.join(postsDirectory, `${year}-${month}-${slug}.md`);
  const fullPathMdx = path.join(postsDirectory, `${year}-${month}-${slug}.mdx`);
  
  let fileContent: string;
  try {
    fileContent = fs.readFileSync(
      fs.existsSync(fullPath) ? fullPath : fullPathMdx,
      'utf8'
    );
  } catch {
    return null;
  }

  const { data, content } = matter(fileContent);
  const frontmatter = data as PostFrontmatter;
  const stats = readingTime(content);

  return {
    ...frontmatter,
    slug,
    year,
    month,
    content,
    readingTime: `${Math.ceil(stats.minutes)} menit baca`,
    href: `/${year}/${month}/${slug}`,
  };
}

// Ambil semua post (untuk halaman listing)
export async function getAllPosts(): Promise<Post[]> {
  const slugs = getAllPostSlugs();
  
  const posts = await Promise.all(
    slugs.map(({ year, month, slug }) => getPostBySlug(year, month, slug))
  );

  return posts
    .filter((post): post is Post => post !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1)); // Terbaru dulu
}

// Ambil post berdasarkan kategori
export async function getPostsByCategory(categorySlug: string): Promise<Post[]> {
  const all = await getAllPosts();
  return all.filter((post) => post.category === categorySlug);
}

// Ambil post terkait (sama kategori, exclude current)
export async function getRelatedPosts(
  currentSlug: string,
  category: string,
  limit = 4
): Promise<Post[]> {
  const all = await getAllPosts();
  return all
    .filter((p) => p.slug !== currentSlug && p.category === category)
    .slice(0, limit);
}
