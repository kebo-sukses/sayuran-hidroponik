import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-gray-500 flex-wrap">
      <Link href="/" className="flex items-center hover:text-primary-700 transition-colors">
        <Home className="w-3.5 h-3.5" />
        <span className="sr-only">Beranda</span>
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1">
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          {item.href ? (
            <Link href={item.href} className="hover:text-primary-700 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-700 font-medium" aria-current="page">
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
