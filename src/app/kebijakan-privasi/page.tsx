import { generateSEOMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/config';

export const metadata = generateSEOMetadata({
  title: 'Kebijakan Privasi – Sayur Hidroponik',
  description:
    'Kebijakan privasi sayur-hidroponik.my.id. Informasi tentang cara kami mengumpulkan, menggunakan, dan melindungi data pribadi pengunjung.',
  canonical: '/kebijakan-privasi',
});

const lastUpdated = '15 Mei 2026';
const siteUrl = siteConfig.url;
const siteName = siteConfig.name;
const contactEmail = 'admin@sayur-hidroponik.my.id';

export default function KebijakanPrivasiPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Kebijakan Privasi</h1>
        <p className="text-sm text-gray-500 mb-8">Terakhir diperbarui: {lastUpdated}</p>

        <div className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline">

          <p>
            Selamat datang di <strong>{siteName}</strong> (<a href={siteUrl}>{siteUrl}</a>).
            Kami berkomitmen untuk melindungi privasi Anda. Kebijakan ini menjelaskan jenis
            informasi yang kami kumpulkan, bagaimana kami menggunakannya, dan hak-hak Anda
            sebagai pengguna.
          </p>

          <h2>1. Informasi yang Kami Kumpulkan</h2>

          <h3>a. Informasi yang Diberikan Secara Langsung</h3>
          <p>
            Saat ini kami tidak memiliki formulir registrasi atau kolom komentar. Jika Anda
            menghubungi kami melalui email, kami hanya menyimpan alamat email dan pesan yang
            Anda kirimkan untuk keperluan balasan.
          </p>

          <h3>b. Informasi yang Dikumpulkan Secara Otomatis</h3>
          <p>
            Ketika Anda mengunjungi situs ini, sistem kami secara otomatis dapat merekam
            informasi berikut:
          </p>
          <ul>
            <li>Alamat IP (diproses secara anonim)</li>
            <li>Jenis browser dan sistem operasi</li>
            <li>Halaman yang dikunjungi dan durasi kunjungan</li>
            <li>Sumber kunjungan (mesin pencari, media sosial, dll.)</li>
          </ul>

          <h2>2. Penggunaan Cookie dan Teknologi Pelacakan</h2>
          <p>
            Situs ini menggunakan cookie dan teknologi serupa untuk meningkatkan pengalaman
            pengguna. Cookie adalah file teks kecil yang disimpan di perangkat Anda.
          </p>

          <h3>a. Google Analytics</h3>
          <p>
            Kami menggunakan Google Analytics untuk memahami bagaimana pengunjung berinteraksi
            dengan situs. Data yang dikumpulkan bersifat agregat dan anonim. Google Analytics
            menggunakan cookie untuk melacak kunjungan. Informasi lebih lanjut:{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kebijakan Privasi Google
            </a>
            .
          </p>

          <h3>b. Google AdSense</h3>
          <p>
            Situs ini menggunakan Google AdSense untuk menampilkan iklan. Google dan mitra
            pihak ketiga menggunakan cookie untuk menampilkan iklan berdasarkan kunjungan
            sebelumnya ke situs ini atau situs lain. Anda dapat melihat atau menyesuaikan
            preferensi iklan di{' '}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
            >
              Setelan Iklan Google
            </a>
            .
          </p>

          <h3>c. Menonaktifkan Cookie</h3>
          <p>
            Anda dapat menonaktifkan cookie melalui pengaturan browser. Namun, beberapa fitur
            situs mungkin tidak berfungsi dengan optimal jika cookie dinonaktifkan.
          </p>

          <h2>3. Bagaimana Kami Menggunakan Informasi</h2>
          <p>Informasi yang dikumpulkan digunakan untuk:</p>
          <ul>
            <li>Menganalisis dan meningkatkan performa situs</li>
            <li>Memahami preferensi pengunjung untuk konten yang lebih relevan</li>
            <li>Menampilkan iklan yang relevan melalui Google AdSense</li>
            <li>Menjaga keamanan dan mencegah penyalahgunaan situs</li>
          </ul>

          <h2>4. Berbagi Data dengan Pihak Ketiga</h2>
          <p>
            Kami <strong>tidak menjual</strong> data pribadi Anda kepada pihak ketiga. Data
            dapat dibagikan hanya dalam kondisi berikut:
          </p>
          <ul>
            <li>
              <strong>Penyedia layanan:</strong> Google Analytics dan Google AdSense untuk
              tujuan analitik dan periklanan sebagaimana dijelaskan di atas.
            </li>
            <li>
              <strong>Kewajiban hukum:</strong> Jika diwajibkan oleh hukum atau otoritas yang
              berwenang.
            </li>
          </ul>

          <h2>5. Tautan ke Situs Pihak Ketiga</h2>
          <p>
            Artikel kami mungkin memuat tautan ke situs web pihak ketiga. Kami tidak
            bertanggung jawab atas praktik privasi atau konten situs-situs tersebut. Kami
            menyarankan Anda membaca kebijakan privasi setiap situs yang Anda kunjungi.
          </p>

          <h2>6. Keamanan Data</h2>
          <p>
            Kami menerapkan langkah-langkah keamanan yang wajar untuk melindungi data Anda,
            termasuk penggunaan HTTPS. Namun, tidak ada metode transmisi data melalui internet
            yang 100% aman. Kami tidak dapat menjamin keamanan absolut.
          </p>

          <h2>7. Privasi Anak-Anak</h2>
          <p>
            Situs ini tidak ditujukan untuk anak-anak di bawah usia 13 tahun. Kami tidak
            secara sengaja mengumpulkan informasi pribadi dari anak-anak. Jika Anda percaya
            bahwa anak Anda telah memberikan informasi pribadi kepada kami, silakan hubungi
            kami segera.
          </p>

          <h2>8. Perubahan Kebijakan Privasi</h2>
          <p>
            Kami dapat memperbarui kebijakan privasi ini sewaktu-waktu. Perubahan akan
            berlaku segera setelah dipublikasikan di halaman ini disertai tanggal pembaruan
            terbaru. Kami menyarankan Anda meninjau halaman ini secara berkala.
          </p>

          <h2>9. Hak Anda</h2>
          <p>
            Sesuai dengan peraturan perlindungan data yang berlaku, Anda memiliki hak untuk:
          </p>
          <ul>
            <li>Mengetahui data apa yang kami miliki tentang Anda</li>
            <li>Meminta penghapusan data Anda</li>
            <li>Memilih keluar dari pelacakan analitik</li>
          </ul>

          <h2>10. Hubungi Kami</h2>
          <p>
            Jika Anda memiliki pertanyaan mengenai kebijakan privasi ini, silakan hubungi
            kami:
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
