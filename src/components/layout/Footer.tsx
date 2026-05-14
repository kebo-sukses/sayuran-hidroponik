import Link from 'next/link';
import { Leaf, Facebook, Mail } from 'lucide-react';
import { siteConfig } from '@/lib/config';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-2 text-white font-bold text-lg mb-3">
            <Leaf className="w-5 h-5 text-primary-400" />
            SayurHidroponik
          </Link>
          <p className="text-sm leading-relaxed text-gray-400">
            Panduan lengkap budidaya sayur hidroponik untuk pemula dan profesional.
          </p>
          <div className="flex gap-3 mt-4">
            <a
              href={siteConfig.author.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-2 rounded-lg bg-gray-800 hover:bg-primary-700 transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Kategori */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
            Kategori
          </h3>
          <ul className="space-y-2 text-sm">
            {siteConfig.categories.map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/kategori/${cat.slug}`}
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  {cat.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Link Penting */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
            Informasi
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/tentang" className="text-gray-400 hover:text-primary-400 transition-colors">
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link href="/kebijakan-privasi" className="text-gray-400 hover:text-primary-400 transition-colors">
                Kebijakan Privasi
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" className="text-gray-400 hover:text-primary-400 transition-colors">
                Disclaimer
              </Link>
            </li>
            <li>
              <a
                href="/ads.txt"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                ads.txt
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© {year} {siteConfig.name}. Hak cipta dilindungi.</p>
          <p>
            Dibuat dengan ❤ menggunakan{' '}
            <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              Next.js
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
