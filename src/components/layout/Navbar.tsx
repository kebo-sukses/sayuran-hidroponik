import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { siteConfig } from '@/lib/config';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-gray-900 hover:text-primary-700 transition-colors">
          <Image
            src="/images/logo.png"
            alt={siteConfig.name}
            width={36}
            height={36}
            className="object-contain"
            priority
          />
          <span className="text-lg leading-tight">
            Sayur<span className="text-primary-600">Hidroponik</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Navigasi utama">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile: hamburger – pure CSS toggle */}
        <label
          htmlFor="mobile-menu-toggle"
          className="md:hidden cursor-pointer p-2 rounded-lg hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          <Menu className="w-5 h-5 text-gray-700" />
        </label>
      </div>

      {/* Mobile Menu (CSS-only, no JS required → Server Component friendly) */}
      <input type="checkbox" id="mobile-menu-toggle" className="hidden peer" />
      <nav
        className="peer-checked:block hidden md:hidden border-t border-gray-100 bg-white px-4 pb-4"
        aria-label="Navigasi mobile"
      >
        {siteConfig.navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block py-2.5 text-sm font-medium text-gray-700 hover:text-primary-700 border-b border-gray-50 last:border-0"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
