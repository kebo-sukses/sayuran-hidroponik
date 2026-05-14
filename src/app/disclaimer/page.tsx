import { generateSEOMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/config';

export const metadata = generateSEOMetadata({
  title: 'Disclaimer – Sayur Hidroponik',
  description:
    'Disclaimer sayur-hidroponik.my.id. Pernyataan batasan tanggung jawab atas penggunaan informasi yang tersedia di situs ini.',
  canonical: '/disclaimer',
});

const lastUpdated = '15 Mei 2026';
const siteUrl = siteConfig.url;
const siteName = siteConfig.name;
const contactEmail = 'admin@sayur-hidroponik.my.id';

export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Disclaimer</h1>
        <p className="text-sm text-gray-500 mb-8">Terakhir diperbarui: {lastUpdated}</p>

        <div className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline">

          <h2>1. Tujuan Konten</h2>
          <p>
            Seluruh konten yang dipublikasikan di{' '}
            <strong>{siteName}</strong> (<a href={siteUrl}>{siteUrl}</a>) disediakan
            semata-mata untuk tujuan <strong>edukasi dan informasi umum</strong>. Konten ini
            mencakup panduan, artikel, tips, dan petunjuk seputar budidaya tanaman hidroponik.
          </p>

          <h2>2. Bukan Pengganti Saran Profesional</h2>
          <p>
            Informasi di situs ini <strong>bukan</strong> pengganti saran dari ahli pertanian,
            ahli hortikultura, atau konsultan profesional berlisensi. Hasil yang diperoleh dari
            praktik hidroponik sangat bergantung pada kondisi lingkungan, kualitas benih,
            ketersediaan air, dan faktor lain yang berada di luar kendali kami.
          </p>
          <p>
            Untuk keputusan pertanian berskala komersial atau investasi bisnis, kami sangat
            menyarankan Anda berkonsultasi dengan profesional yang relevan.
          </p>

          <h2>3. Akurasi dan Kelengkapan Informasi</h2>
          <p>
            Kami berusaha menyajikan informasi yang akurat, terkini, dan bermanfaat. Namun,
            kami <strong>tidak memberikan jaminan</strong> atas keakuratan, kelengkapan, atau
            kesesuaian informasi untuk tujuan tertentu. Praktik pertanian terus berkembang,
            dan beberapa informasi mungkin tidak lagi relevan seiring berjalannya waktu.
          </p>

          <h2>4. Hasil yang Tidak Dijamin</h2>
          <p>
            Setiap contoh hasil panen, estimasi pendapatan, atau angka yang tercantum dalam
            artikel merupakan <strong>ilustrasi perkiraan</strong> berdasarkan kondisi ideal.
            Hasil nyata dapat berbeda secara signifikan tergantung pada:
          </p>
          <ul>
            <li>Kondisi iklim dan cuaca setempat</li>
            <li>Kualitas air dan sumber nutrisi yang digunakan</li>
            <li>Pengalaman dan keterampilan pembudidaya</li>
            <li>Jenis varietas tanaman yang dipilih</li>
            <li>Faktor hama, penyakit, dan kondisi lingkungan lainnya</li>
          </ul>

          <h2>5. Tautan Afiliasi dan Iklan</h2>
          <p>
            Situs ini menampilkan iklan melalui <strong>Google AdSense</strong>. Kami juga
            mungkin memuat tautan afiliasi atau tautan ke produk dan layanan pihak ketiga.
            Jika Anda membeli produk melalui tautan afiliasi, kami mungkin mendapatkan
            komisi kecil tanpa biaya tambahan bagi Anda.
          </p>
          <p>
            Kami hanya merekomendasikan produk atau layanan yang kami yakini bermanfaat.
            Namun, kami tidak bertanggung jawab atas kualitas, ketersediaan, atau kepuasan
            terhadap produk/layanan pihak ketiga tersebut.
          </p>

          <h2>6. Hak Kekayaan Intelektual</h2>
          <p>
            Seluruh konten di situs ini — termasuk teks, gambar, ilustrasi, dan grafis —
            adalah hak milik <strong>{siteName}</strong> kecuali dinyatakan lain.
            Penggandaan, penyebaran, atau penggunaan ulang konten tanpa izin tertulis dari
            kami <strong>tidak diperbolehkan</strong>.
          </p>
          <p>
            Kutipan singkat dengan atribusi yang jelas ke sumber asli diperbolehkan sesuai
            dengan prinsip penggunaan wajar (<em>fair use</em>).
          </p>

          <h2>7. Batasan Tanggung Jawab</h2>
          <p>
            Sejauh diizinkan oleh hukum yang berlaku, {siteName} dan pengelolanya{' '}
            <strong>tidak bertanggung jawab</strong> atas:
          </p>
          <ul>
            <li>Kerugian langsung, tidak langsung, atau konsekuensial yang timbul dari penggunaan informasi di situs ini</li>
            <li>Kerusakan tanaman, kehilangan hasil panen, atau kerugian finansial akibat mengikuti panduan di situs ini</li>
            <li>Konten, kebijakan, atau layanan situs pihak ketiga yang ditautkan dari situs ini</li>
            <li>Gangguan, kesalahan, atau ketidaktersediaan situs</li>
          </ul>

          <h2>8. Perubahan Konten</h2>
          <p>
            Kami berhak mengubah, memperbarui, atau menghapus konten kapan saja tanpa
            pemberitahuan sebelumnya. Penggunaan situs setelah perubahan dibuat berarti
            Anda menyetujui perubahan tersebut.
          </p>

          <h2>9. Yurisdiksi Hukum</h2>
          <p>
            Disclaimer ini diatur oleh hukum yang berlaku di Indonesia. Setiap sengketa
            yang timbul dari penggunaan situs ini akan diselesaikan sesuai dengan hukum
            Indonesia.
          </p>

          <h2>10. Hubungi Kami</h2>
          <p>
            Jika Anda memiliki pertanyaan mengenai disclaimer ini, silakan hubungi kami:
          </p>
          <ul>
            <li>
              <strong>Email:</strong>{' '}
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </li>
            <li>
              <strong>Website:</strong>{' '}
              <a href={siteUrl}>{siteName}</a>
            </li>
          </ul>

        </div>
      </div>
    </div>
  );
}
