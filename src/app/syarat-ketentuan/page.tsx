import { generateSEOMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/config';

export const metadata = generateSEOMetadata({
  title: 'Syarat dan Ketentuan – Sayur Hidroponik',
  description:
    'Syarat dan ketentuan penggunaan situs sayur-hidroponik.my.id. Baca sebelum menggunakan layanan dan konten kami.',
  canonical: '/syarat-ketentuan',
});

const lastUpdated = '15 Mei 2026';
const siteUrl = siteConfig.url;
const siteName = siteConfig.name;
const contactEmail = 'admin@sayur-hidroponik.my.id';

export default function SyaratKetentuanPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Syarat dan Ketentuan</h1>
        <p className="text-sm text-gray-500 mb-8">Terakhir diperbarui: {lastUpdated}</p>

        <div className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline">

          <p>
            Dengan mengakses dan menggunakan situs web{' '}
            <strong>{siteName}</strong> (<a href={siteUrl}>{siteUrl}</a>), Anda menyetujui
            untuk terikat dengan Syarat dan Ketentuan berikut. Jika Anda tidak menyetujui
            salah satu ketentuan di bawah ini, harap hentikan penggunaan situs ini.
          </p>

          <h2>1. Penerimaan Syarat</h2>
          <p>
            Penggunaan situs ini menandakan bahwa Anda telah membaca, memahami, dan
            menyetujui Syarat dan Ketentuan ini secara penuh. Syarat ini berlaku untuk
            semua pengunjung, pengguna, dan pihak lain yang mengakses situs.
          </p>

          <h2>2. Deskripsi Layanan</h2>
          <p>
            {siteName} adalah platform konten edukasi seputar budidaya tanaman hidroponik.
            Kami menyediakan artikel, panduan, dan tips praktis secara gratis kepada pengunjung.
            Kami berhak mengubah, menangguhkan, atau menghentikan layanan kapan saja tanpa
            pemberitahuan sebelumnya.
          </p>

          <h2>3. Penggunaan yang Diizinkan</h2>
          <p>Anda diizinkan untuk:</p>
          <ul>
            <li>Mengakses dan membaca konten untuk keperluan pribadi dan non-komersial</li>
            <li>Berbagi tautan ke artikel kami melalui media sosial atau platform lain</li>
            <li>Mengutip bagian kecil konten dengan menyertakan atribusi jelas ke sumber asli</li>
          </ul>

          <h2>4. Penggunaan yang Dilarang</h2>
          <p>Anda <strong>dilarang</strong> untuk:</p>
          <ul>
            <li>Menyalin, memperbanyak, atau mendistribusikan ulang seluruh atau sebagian besar konten tanpa izin tertulis</li>
            <li>Menggunakan konten untuk tujuan komersial tanpa izin</li>
            <li>Mengubah, memodifikasi, atau membuat karya turunan dari konten kami</li>
            <li>Menggunakan situs ini untuk kegiatan ilegal atau yang melanggar hak pihak ketiga</li>
            <li>Melakukan scraping otomatis atau pengambilan data masif dari situs ini</li>
            <li>Mengunggah atau menyebarkan malware, virus, atau kode berbahaya lainnya</li>
          </ul>

          <h2>5. Hak Kekayaan Intelektual</h2>
          <p>
            Semua konten di situs ini — termasuk namun tidak terbatas pada teks, artikel,
            panduan, gambar, logo, dan desain grafis — adalah milik {siteName} dan dilindungi
            oleh hukum hak cipta Indonesia dan internasional.
          </p>
          <p>
            Anda tidak mendapatkan hak kepemilikan atas konten apa pun dengan mengakses
            situs ini.
          </p>

          <h2>6. Konten yang Dikirimkan Pengguna</h2>
          <p>
            Jika Anda mengirimkan konten kepada kami (misalnya melalui email atau formulir
            kontak), Anda memberikan kami hak non-eksklusif untuk menggunakan, mereproduksi,
            dan mempublikasikan konten tersebut. Anda menjamin bahwa konten yang dikirimkan
            tidak melanggar hak pihak ketiga.
          </p>

          <h2>7. Tautan ke Situs Eksternal</h2>
          <p>
            Situs ini dapat memuat tautan ke situs web pihak ketiga. Tautan ini disediakan
            untuk kemudahan referensi saja. Kami tidak mengendalikan konten situs-situs
            tersebut dan tidak bertanggung jawab atas konten, kebijakan privasi, atau
            praktik mereka.
          </p>

          <h2>8. Periklanan</h2>
          <p>
            Situs ini menampilkan iklan melalui Google AdSense dan mungkin melalui jaringan
            iklan pihak ketiga lainnya. Iklan-iklan ini ditayangkan oleh penyedia layanan
            iklan dan tunduk pada kebijakan masing-masing. Kami tidak bertanggung jawab
            atas konten iklan yang ditampilkan.
          </p>

          <h2>9. Penafian Jaminan</h2>
          <p>
            Situs ini disediakan <strong>&quot;sebagaimana adanya&quot;</strong> tanpa
            jaminan apa pun, baik tersurat maupun tersirat. Kami tidak menjamin bahwa:
          </p>
          <ul>
            <li>Situs akan selalu tersedia, bebas error, atau aman</li>
            <li>Informasi di situs akurat, lengkap, atau terkini</li>
            <li>Hasil yang Anda peroleh dari menggunakan informasi sesuai harapan</li>
          </ul>

          <h2>10. Batasan Tanggung Jawab</h2>
          <p>
            Sejauh diperbolehkan hukum, {siteName} tidak bertanggung jawab atas kerugian
            apa pun yang timbul dari:
          </p>
          <ul>
            <li>Penggunaan atau ketidakmampuan menggunakan situs</li>
            <li>Kepercayaan pada informasi yang tersedia di situs</li>
            <li>Akses tidak sah ke data Anda</li>
            <li>Gangguan atau penghentian layanan</li>
          </ul>

          <h2>11. Ganti Rugi</h2>
          <p>
            Anda setuju untuk membela, mengganti rugi, dan membebaskan {siteName} dari
            segala klaim, kerugian, atau biaya (termasuk biaya hukum) yang timbul dari
            pelanggaran Anda terhadap Syarat dan Ketentuan ini atau penggunaan situs yang
            tidak sah.
          </p>

          <h2>12. Modifikasi Syarat</h2>
          <p>
            Kami berhak memperbarui Syarat dan Ketentuan ini kapan saja. Perubahan akan
            berlaku segera setelah dipublikasikan. Penggunaan situs setelah perubahan
            menandakan penerimaan Anda atas syarat yang diperbarui.
          </p>

          <h2>13. Hukum yang Berlaku</h2>
          <p>
            Syarat dan Ketentuan ini diatur oleh hukum Republik Indonesia. Setiap
            perselisihan yang timbul akan diselesaikan secara musyawarah. Jika tidak
            tercapai kesepakatan, penyelesaian dilakukan melalui pengadilan yang berwenang
            di Indonesia.
          </p>

          <h2>14. Pemisahan Ketentuan</h2>
          <p>
            Jika salah satu ketentuan dalam syarat ini dinyatakan tidak sah atau tidak dapat
            ditegakkan, ketentuan tersebut akan dihapus tanpa memengaruhi ketentuan lainnya
            yang tetap berlaku penuh.
          </p>

          <h2>15. Hubungi Kami</h2>
          <p>
            Untuk pertanyaan mengenai Syarat dan Ketentuan ini:
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
