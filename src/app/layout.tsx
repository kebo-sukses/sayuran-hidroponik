import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { GoogleTagScript, AdSenseScript } from '@/components/scripts/AnalyticsScripts';
import { siteConfig } from '@/lib/config';
import { generateSEOMetadata, websiteSchema } from '@/lib/seo';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
});

export const metadata: Metadata = generateSEOMetadata({});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={inter.variable}>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/images/logo.png" />

        {/* Website JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
        />
      </head>
      <body className={`min-h-screen flex flex-col bg-gray-50 ${inter.className}`}>
        {/* Analytics & AdSense – defer, tidak block render */}
        <GoogleTagScript />
        <AdSenseScript />

        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
