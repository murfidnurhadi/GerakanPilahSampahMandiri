# Gerakan Pilah Sampah Mandiri - Kelurahan Lebak Gede Coblong
### Program KKN UNIKOM 2026 x Pemprov Jabar x Pengurus RW 04, 07, 14

Aplikasi web modern berbasis **Next.js (App Router, TypeScript, Tailwind CSS)** untuk edukasi warga mengenai pemilahan 3 jenis sampah (Organik, Anorganik, Residu), dilengkapi dengan **Katalog Sampah Lengkap** dan fitur **AI Image Classifier (Hugging Face ONNX)** yang berjalan langsung di browser tanpa butuh biaya server.

---

## 🌟 Fitur Utama

1. **Top Urgent Banner & Krisis TPA Sarimukti**: Gugahan kesadaran warga mengenai pembatasan ritase penarikan sampah Kota Bandung dan kondisi overcapacity TPA Sarimukti (1000%+).
2. **Katalog 40+ Sampah Rumah Tangga**:
   - Filter tab kategori: *Semua*, *🥬 Organik (Hijau)*, *♻️ Anorganik (Biru)*, *⚠️ Residu (Merah)*.
   - Pencarian instan berdasarkan nama barang, tag, atau jenis bahan.
   - Panduan persiapan praktis (e.g. tiriskan kuah, bilas kaleng, bungkus rapat popok).
   - Jalur penyaluran spesifik lokal: Kebun SAE (RW 04), Maggot BSF (RW 07), Bank Sampah Berkah (RW 14), dan Truk Terjadwal DLHK.
3. **Scan Foto AI (Hugging Face ONNX)**:
   - Pengguna dapat memotret sampah langsung dari kamera ponsel atau memilih dari galeri.
   - Menggunakan model vision ringan `@huggingface/transformers` (`mobilenet_v4_conv_small`) yang di-download sekali dan berjalan di WebAssembly browser client.
   - **100% Gratis Selamanya**: Tidak membutuhkan GPU berbayar atau server inference bulanan.
4. **Desain Civic & Non AI-Slop**:
   - Tipografi editorial bersih (*Plus Jakarta Sans*).
   - Menghindari gradien neon murahan; warna kontras tinggi yang ramah lansia saat memindai QR code brosur fisik.
   - Ramah perangkat mobile (mobile-first 360px - 414px).

---

## 🚀 Panduan Menjalankan di Lokal (Development)

1. **Pastikan Node.js terpasang** (versi 18.x atau lebih baru).
2. **Instal dependensi**:
   ```bash
   npm install
   ```
3. **Jalankan server pengembangan**:
   ```bash
   npm run dev
   ```
4. Buka peramban di [http://localhost:3000](http://localhost:3000).

---

## ☁️ Panduan Deploy Cloud Gratis & Tahan Lama (Vercel)

Platform terbaik untuk Next.js adalah **Vercel (Hobby Tier)**:
- **Biaya**: Rp 0 / Gratis Permanen (selamanya).
- **Keunggulan**:
  - Dibuat langsung oleh tim pembuat Next.js.
  - Tanpa *cold-start sleep* (tidak lemot atau tertidur seperti hosting gratisan lain).
  - Bandwidth 100 GB / bulan (sangat cukup untuk seluruh warga kelurahan).
  - Sertifikat SSL (HTTPS) otomatis dan gratis.
  - Terhubung otomatis ke GitHub: setiap kali Anda *push*, web otomatis ter-update dalam 1 menit.

### Langkah Deploy ke Vercel (Hanya 3 Menit):

1. **Unggah Proyek ke GitHub**:
   ```bash
   git init
   git add .
   git commit -m "feat: inisialisasi web pemilahan sampah KKN UNIKOM"
   git remote add origin https://github.com/yusuf-analytics/web-edukasi-sampah.git
   git push -u origin main
   ```

2. **Daftar / Masuk ke Vercel**:
   - Buka [vercel.com](https://vercel.com) dan masuk menggunakan akun GitHub Anda.

3. **Impor Proyek**:
   - Klik tombol **"Add New..."** -> **"Project"**.
   - Pilih repositori `web-pemilahan-sampah` dari daftar GitHub Anda.
   - Vercel akan otomatis mendeteksi konfigurasi Next.js (`Framework Preset: Next.js`).
   - Klik **"Deploy"**.

4. **Selesai**:
   - Dalam ~60 detik, web Anda sudah online dengan URL resmi cepat (misal: `https://web-pemilahan-sampah.vercel.app`).
   - Tautan URL ini bisa langsung Anda ubah menjadi QR Code untuk dicetak di selebaran, brosur, atau slide presentasi warga RW Kelurahan Lebak Gede!
