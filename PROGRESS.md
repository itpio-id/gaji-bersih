# Progress Kalkulator Gaji Bersih

## Struktur proyek

- `index.html` — halaman utama, input gaji dan status PTKP, ringkasan hasil, serta rincian perhitungan.
- `style.css` — gaya visual dan tata letak responsif untuk layar desktop maupun ponsel.
- `app.js` — format input Rupiah, pemetaan status PTKP, tabel TER, perhitungan BPJS, PPh 21, dan gaji bersih.
- `tarif-ter.md` — tabel TER kategori A, B, dan C beserta sumber resmi.
- `snake-game.html` — file permainan Snake yang ada di folder yang sama; terpisah dari kalkulator gaji.

Kalkulator berjalan sebagai halaman statis dengan HTML, CSS, dan JavaScript biasa. Tidak memakai framework, npm, atau proses build.

## Fitur yang sudah selesai

- Input gaji kotor bulanan otomatis diformat sebagai Rupiah saat diketik dan hasil diperbarui langsung.
- Pilihan status PTKP: TK/0, TK/1, TK/2, TK/3, K/0, K/1, K/2, dan K/3.
- Kategori TER otomatis dipetakan dari status PTKP: kategori A untuk TK/0, TK/1, K/0; B untuk TK/2, TK/3, K/1, K/2; dan C untuk K/3.
- Kartu hasil menampilkan gaji kotor, potongan PPh 21, dan gaji bersih; hasil juga mencantumkan status, kategori, serta tarif TER yang dipakai.
- Rincian kontribusi perusahaan yang menambah bruto PPh 21 dan potongan BPJS karyawan ditampilkan terpisah.
- Tampilan mengikuti palet ITPIO dan menyesuaikan ukuran layar ponsel.

## Aturan hitung yang dipakai

Semua nilai kontribusi dan PPh 21 dibulatkan ke Rupiah terdekat dengan `Math.round`.

### Tambahan bruto dari perusahaan

- JKK = 0,24% × gaji kotor.
- JKM = 0,3% × gaji kotor.
- BPJS Kesehatan perusahaan = 4% × nilai terendah antara gaji kotor dan Rp12.000.000.
- Bruto PPh 21 = gaji kotor + JKK + JKM + BPJS Kesehatan perusahaan.

### TER dan PPh 21

- Status PTKP memilih kategori A, B, atau C secara otomatis.
- Tarif dipilih dari rentang TER kategori terkait berdasarkan bruto PPh 21 di atas.
- PPh 21 bulanan = bruto PPh 21 × tarif TER.

### Potongan karyawan dan gaji bersih

- JHT = 2% × gaji kotor.
- JP = 1% × nilai terendah antara gaji kotor dan Rp11.086.300.
- BPJS Kesehatan karyawan = 1% × nilai terendah antara gaji kotor dan Rp12.000.000.
- Gaji bersih = gaji kotor − JHT − JP − BPJS Kesehatan karyawan − PPh 21.

### Contoh verifikasi

Untuk TK/0 dengan gaji kotor Rp10.000.000, hasilnya bruto PPh 21 Rp10.454.000, TER kategori A sebesar 2,5%, PPh 21 Rp261.350, dan gaji bersih Rp9.338.650.

## Sumber tarif TER

- [PP 58 Tahun 2023 — PDF resmi JDIH Kementerian Keuangan](https://jdih.kemenkeu.go.id/api/download/e47c3fc4-a912-4bf1-bcad-335fee3f71f8/2023pp058.pdf)
- [PP 58 Tahun 2023 — Direktorat Jenderal Pajak](https://www.pajak.go.id/id/peraturan/tarif-pemotongan-pajak-penghasiian-pasal-21-atas-penghasilan)

## Link proyek

- GitHub: [itpio-id/gaji-bersih](https://github.com/itpio-id/gaji-bersih)
- Vercel: [gaji-bersih-wheat.vercel.app](https://gaji-bersih-wheat.vercel.app/)

## Catatan saat ini

Disclaimer pada halaman menyebut perhitungan sebagai estimasi TER bulanan sesuai status PTKP, menyatakan batas upah berlaku untuk perhitungan iuran terkait, dan menyebut penyesuaian masa pajak Desember belum dihitung.

## Ide fitur berikutnya

1. Tambahkan simulasi rekonsiliasi PPh 21 tahunan pada masa pajak Desember.
2. Pisahkan tarif dan batas iuran ke konfigurasi berdasarkan tahun efektif agar lebih mudah diperbarui.
3. Tambahkan tombol untuk mengunduh atau mencetak ringkasan perhitungan.
4. Tambahkan pengujian otomatis untuk batas TER, batas upah BPJS, dan semua pemetaan status PTKP.
