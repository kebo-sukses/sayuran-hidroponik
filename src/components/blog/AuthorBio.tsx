import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Award, BookOpen } from 'lucide-react';
import { siteConfig } from '@/lib/config';

interface AuthorBioProps {
  authorName?: string;
  factCheckedBy?: string;
  showFullBio?: boolean;
}

/**
 * AuthorBio – section E-E-A-T di bawah artikel.
 * Menampilkan keahlian, pengalaman, dan kredensial author.
 */
export default function AuthorBio({
  authorName = siteConfig.author.name,
  factCheckedBy,
  showFullBio = true,
}: AuthorBioProps) {
  return (
    <section className="mt-10 border-t border-gray-200 pt-8">
      {/* Author Card */}
      <div className="bg-primary-50 rounded-2xl p-6 flex gap-5 items-start">
        <div className="relative w-16 h-16 flex-shrink-0">
          <Image
            src={siteConfig.author.image}
            alt={`Foto ${authorName}`}
            fill
            unoptimized
            className="rounded-full object-cover ring-2 ring-primary-300"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <Link href="/tentang" className="font-bold text-gray-900 hover:text-primary-700">
              {authorName}
            </Link>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">
              <Award className="w-3 h-3" />
              Praktisi Hidroponik
            </span>
          </div>
          {showFullBio && (
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              {siteConfig.author.bio}
            </p>
          )}
          {/* Bukti keahlian (E-E-A-T) */}
          <ul className="mt-3 flex flex-wrap gap-3 text-xs text-gray-500">
            <li className="flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5 text-primary-500" />
              5+ tahun budidaya hidroponik
            </li>
            <li className="flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-primary-500" />
              200+ artikel diterbitkan
            </li>
          </ul>
        </div>
      </div>

      {/* Fact-checked label */}
      {factCheckedBy && (
        <div className="mt-4 flex items-center gap-2 text-sm text-gray-500 bg-gray-50 rounded-lg px-4 py-2 border border-gray-200">
          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
          <span>
            Artikel ini telah diperiksa faktanya oleh{' '}
            <strong className="text-gray-700">{factCheckedBy}</strong>
          </span>
        </div>
      )}
    </section>
  );
}
