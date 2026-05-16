import Image from 'next/image';
import { generateSEOMetadata, authorPersonSchema } from '@/lib/seo';
import { siteConfig } from '@/lib/config';
import { CheckCircle, BookOpen, Leaf, Calendar, Mail, ExternalLink } from 'lucide-react';

export const metadata = generateSEOMetadata({
  title: `Tentang ${siteConfig.author.name} – Praktisi Hidroponik`,
  description: siteConfig.author.bio,
  canonical: '/tentang',
});

export default function TentangPage() {
  const author = siteConfig.author;

  return (
    <>
      {/* Person JSON-LD – safe: source from seo.ts authorPersonSchema(), XSS-escaped */}
      {/* eslint-disable-next-line react/no-danger */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(authorPersonSchema()).replace(/<\/script>/gi, '<\\/script>'),
        }}
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
                {author.jobTitle}
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

        {/* Riwayat Pengalaman */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary-600" />
            Perjalanan Hidroponik
          </h2>
          <div className="space-y-5">
            {[
              {
                year: '2019',
                title: 'Memulai dari Nol',
                desc: 'Belajar hidroponik dari nol dengan sistem wick sederhana di balkon 3m\u00b2. Perjuangan awal: pakai kertas lakmus karena belum ada pH meter. Tanaman pertama: kangkung dan bayam.',
              },
              {
                year: '2020',
                title: 'Panen Pertama yang Konsisten',
                desc: 'Berhasil panen selada, kangkung, dan bayam setiap bulan. Mulai memahami pentingnya EC, pH, dan siklus pergantian nutrisi untuk hasil yang stabil.',
              },
              {
                year: '2021',
                title: 'Merakit Sistem NFT & Berbagi',
                desc: 'Merakit sistem NFT pertama dari pipa PVC. Aktif berbagi tips di forum dan grup komunitas hidroponik Indonesia.',
              },
              {
                year: '2022',
                title: 'Blog Sayur Hidroponik Diluncurkan',
                desc: 'Meluncurkan blog sebagai platform edukasi dengan misi: panduan praktis berbasis pengalaman nyata, bukan sekadar teori.',
              },
              {
                year: '2023',
                title: '50.000+ Pembaca per Bulan',
                desc: 'Blog tumbuh pesat. Mulai mengembangkan sistem drip untuk budidaya tomat dan cabai, serta menulis panduan komprehensif untuk pemula.',
              },
              {
                year: '2024\u20132026',
                title: '200+ Artikel Teknis Diterbitkan',
                desc: 'Konsisten menerbitkan panduan teknis mencakup seluruh aspek hidroponik. Rutin memperbarui konten berdasarkan perkembangan teknologi terbaru.',
              },
            ].map(({ year, title, desc }) => (
              <div key={year} className="flex gap-4">
                <div className="flex-shrink-0 pt-0.5">
                  <span className="inline-block bg-primary-600 text-white text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap">
                    {year}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tentang Blog */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
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

        {/* Kontak */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Mail className="w-5 h-5 text-primary-600" />
            Hubungi Saya
          </h2>
          <p className="text-gray-600 mb-5 leading-relaxed">
            Punya pertanyaan seputar hidroponik, saran konten, atau ingin berdiskusi? Jangan ragu
            untuk menghubungi saya.
          </p>
          <div className="space-y-3">
            <a
              href={`mailto:${author.email}`}
              className="flex items-center gap-3 text-primary-700 hover:text-primary-900 font-medium transition-colors"
            >
              <Mail className="w-4 h-4 flex-shrink-0" />
              {author.email}
            </a>
            {author.social.facebook && (
              <a
                href={author.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary-700 hover:text-primary-900 font-medium transition-colors"
              >
                <ExternalLink className="w-4 h-4 flex-shrink-0" />
                Facebook: Kebo Sukses
              </a>
            )}
          </div>
          <p className="mt-5 text-sm text-gray-500">Biasanya merespons dalam 1–2 hari kerja.</p>
        </div>
      </div>
    </>
  );
}
