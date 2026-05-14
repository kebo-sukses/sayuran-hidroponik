import Image from 'next/image';
import { generateSEOMetadata, authorPersonSchema } from '@/lib/seo';
import { siteConfig } from '@/lib/config';
import { CheckCircle, BookOpen, Leaf } from 'lucide-react';

export const metadata = generateSEOMetadata({
  title: `Tentang ${siteConfig.author.name} – Praktisi Hidroponik`,
  description: siteConfig.author.bio,
  canonical: '/tentang',
});

export default function TentangPage() {
  const author = siteConfig.author;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorPersonSchema()) }}
      />

      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="relative w-28 h-28 rounded-full overflow-hidden ring-4 ring-primary-200 flex-shrink-0">
              <Image
                src={author.image}
                alt={author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{author.name}</h1>
              <span className="inline-flex items-center gap-1.5 mt-1 px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
                <Leaf className="w-4 h-4" />
                Praktisi Hidroponik
              </span>
              <p className="mt-3 text-gray-600 leading-relaxed">{author.bio}</p>
            </div>
          </div>
        </div>

        {/* Kredensial E-E-A-T */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-primary-600" />
            Keahlian & Pengalaman
          </h2>
          <ul className="space-y-3 text-gray-700">
            {[
              'Lebih dari 5 tahun pengalaman praktis dalam budidaya hidroponik',
              'Telah menulis lebih dari 200+ artikel panduan teknis dan praktis',
              'Mengelola kebun hidroponik skala rumah tangga dan semi-komersial',
              'Memahami berbagai sistem: NFT, DFT, Rakit Apung, Wick, Drip Irrigation',
              'Fokus pada varietas sayuran lokal Indonesia: kangkung, selada, bayam, pak choi',
              'Konten diverifikasi oleh sesama praktisi dengan pengalaman lapangan',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tentang Blog */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary-600" />
            Tentang Blog Ini
          </h2>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              <strong>Sayur Hidroponik</strong> adalah blog edukasi pertanian hidroponik yang
              didedikasikan untuk membantu masyarakat Indonesia mulai bertanam sayuran sendiri
              di rumah — tanpa tanah, hemat tempat, dan lebih efisien.
            </p>
            <p>
              Semua konten ditulis berdasarkan pengalaman langsung di lapangan, bukan sekadar
              teori. Setiap artikel melalui proses penelitian dan verifikasi faktual sebelum
              dipublikasikan.
            </p>
            <p>
              Blog ini berkomitmen pada standar <strong>E-E-A-T</strong> (Experience, Expertise,
              Authoritativeness, Trustworthiness) — memastikan setiap pembaca mendapatkan
              informasi yang akurat, jujur, dan bermanfaat.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
