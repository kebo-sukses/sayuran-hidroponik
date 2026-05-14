import Link from 'next/link';
import Image from 'next/image';
import { Clock, Tag, Calendar } from 'lucide-react';
import { Post } from '@/lib/posts';
import { siteConfig } from '@/lib/config';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';

interface PostCardProps {
  post: Post;
  variant?: 'default' | 'featured' | 'compact';
}

export default function PostCard({ post, variant = 'default' }: PostCardProps) {
  const categoryLabel =
    siteConfig.categories.find((c) => c.slug === post.category)?.label ?? post.category;

  const formattedDate = (() => {
    try {
      return format(new Date(post.date), 'd MMMM yyyy', { locale: id });
    } catch {
      return post.date;
    }
  })();

  if (variant === 'compact') {
    return (
      <article className="flex gap-3 group">
        <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            sizes="80px"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex-1 min-w-0">
          <Link href={post.href} className="font-medium text-gray-800 hover:text-primary-700 line-clamp-2 text-sm leading-snug">
            {post.title}
          </Link>
          <p className="text-xs text-gray-500 mt-1">{formattedDate}</p>
        </div>
      </article>
    );
  }

  if (variant === 'featured') {
    return (
      <article className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row">
        <div className="relative w-full md:w-1/2 aspect-video md:aspect-auto overflow-hidden bg-gray-100">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10" />
        </div>
        <div className="p-6 md:p-8 flex flex-col justify-center flex-1">
          <Link href={`/kategori/${post.category}`} className="tag-pill self-start mb-3">
            {categoryLabel}
          </Link>
          <Link href={post.href}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-primary-700 transition-colors leading-tight mb-3">
              {post.title}
            </h2>
          </Link>
          <p className="text-gray-600 line-clamp-3 mb-4">{post.description}</p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readingTime}
            </span>
          </div>
        </div>
      </article>
    );
  }

  // Default card
  return (
    <article className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col">
      <Link href={post.href} className="block relative aspect-video overflow-hidden bg-gray-100">
        <Image
          src={post.thumbnail}
          alt={post.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </Link>
      <div className="p-4 flex flex-col flex-1">
        <Link href={`/kategori/${post.category}`} className="tag-pill self-start mb-2 text-xs">
          {categoryLabel}
        </Link>
        <Link href={post.href} className="flex-1">
          <h3 className="font-semibold text-gray-900 group-hover:text-primary-700 transition-colors line-clamp-2 leading-snug mb-2">
            {post.title}
          </h3>
        </Link>
        <p className="text-gray-500 text-sm line-clamp-2 mb-3">{post.description}</p>
        <div className="flex items-center justify-between text-xs text-gray-400 mt-auto pt-3 border-t border-gray-100">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {formattedDate}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {post.readingTime}
          </span>
        </div>
      </div>
    </article>
  );
}
