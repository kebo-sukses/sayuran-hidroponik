import { Metadata } from 'next';
import { siteConfig } from '@/lib/config';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  noindex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  tags?: string[];
}

/**
 * generateSEOMetadata – dipanggil di setiap page untuk generate metadata dinamis.
 * Mengikuti best practice Next.js App Router.
 */
export function generateSEOMetadata(props: SEOProps): Metadata {
  const {
    title,
    description = siteConfig.description,
    canonical,
    ogImage = siteConfig.ogImage,
    ogType = 'website',
    noindex = false,
    publishedTime,
    modifiedTime,
    author = siteConfig.author.name,
    tags = [],
  } = props;

  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.title;

  const canonicalUrl = canonical
    ? `${siteConfig.url}${canonical}`
    : siteConfig.url;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl,
    },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      type: ogType,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(tags.length > 0 && { tags }),
      authors: [author],
      locale: 'id_ID',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
      creator: '@sayurhidroponik',
    },
    authors: [{ name: author }],
    keywords: tags.join(', '),
  };
}

// ─── JSON-LD Generators ───────────────────────────────────────────────────────

/** Schema BlogPosting – untuk halaman artikel */
export function blogPostingSchema(post: {
  title: string;
  description: string;
  thumbnail: string;
  date: string;
  lastModified?: string;
  author: string;
  href: string;
  tags: string[];
  readingTime: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.thumbnail,
    datePublished: post.date,
    dateModified: post.lastModified ?? post.date,
    author: {
      '@type': 'Person',
      name: post.author,
      url: `${siteConfig.url}/tentang`,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}${post.href}`,
    },
    keywords: post.tags.join(', '),
    timeRequired: post.readingTime,
  };
}

/** Schema BreadcrumbList */
export function breadcrumbSchema(
  crumbs: { name: string; href: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${siteConfig.url}${crumb.href}`,
    })),
  };
}

/** Schema Person – untuk halaman Author/Tentang (E-E-A-T) */
export function authorPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.author.name,
    description: siteConfig.author.bio,
    image: `${siteConfig.url}${siteConfig.author.image}`,
    url: `${siteConfig.url}/tentang`,
    sameAs: Object.values(siteConfig.author.social),
    knowsAbout: [
      'Hidroponik',
      'Budidaya Sayuran',
      'Pertanian Modern',
      'Sistem NFT',
      'Sistem DFT',
      'Nutrisi Hidroponik',
    ],
  };
}

/** Schema WebSite – untuk homepage */
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/cari?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}
