# Folder Gambar WebP — Gerakan Pilah Sampah Mandiri

> Tanpa database — semua gambar disimpan lokal sebagai `.webp` agar ringan & cepat di HP.

## Struktur Folder

```
public/images/
├── tpa/                      # Krisis TPA Sarimukti
│   ├── sarimukti-overload.webp   # gunungan sampah overload (hero)
│   ├── tps-meluap.webp           # TPS meluber ke jalan
│   └── hero-tpa.webp             # background hero beranda
├── bahaya-penyakit/          # Dampak kesehatan
│   ├── dbd-nyamuk-aedes.webp
│   ├── diare-lalat-hijau.webp
│   └── ispa-asap-bakar.webp
├── tiga-wadah/               # Panduan 3 Wadah
│   ├── organik.webp
│   ├── anorganik.webp
│   ├── residu.webp
│   └── kebun-sae.webp
├── aksi-3r/                  # Aksi 3R
│   ├── reduce.webp
│   ├── reuse.webp
│   └── recycle.webp
└── katalog/                  # Katalog 34 jenis sampah
    ├── organik/   (11 file)  # sisa-nasi.webp, nasi-mie-telur-campur.webp, ...
    ├── anorganik/ (9 file)   # botol-plastik-pet.webp, kardus-karton.webp, ...
    ├── residu/    (8 file)   # pampers-sachet.webp, styrofoam.webp, ...
    └── elektronik/ (6 file)  # baterai-bekas.webp, hp-kabel.webp, ...
```

## Cara Pakai

1. **Ganti placeholder** — file `.webp` saat ini adalah placeholder 1×1 px (42 byte). Ganti dengan foto asli lapangan:
   - Buka folder, hapus placeholder, taruh file baru **dengan nama sama** (mis. `public/images/tpa/sarimukti-overload.webp`)
   - Ukuran disarankan: **600–800px lebar, <150KB**, format **WebP** (export dari HP/Photoshop: Save As WebP, quality 75-80)

2. **Tanpa ubah kode** — komponen sudah mengarah ke `/images/.../*.webp`, otomatis terpakai setelah file diganti.

3. **Tambah item baru** — edit `src/data/wasteData.ts`, tambah objek baru dengan `imageUrl: "/images/katalog/organik/nama-baru.webp"` dan taruh file di folder sesuai kategori.

## Konversi ke WebP (jika foto masih JPG/PNG)

**Online (tanpa install):** https://squoosh.app — drag JPG → pilih WebP → quality 75 → download.

**Offline (Node):**
```bash
npm install -g sharp-cli
sharp -i foto.jpg -o foto.webp --webp quality 75
```

**PowerShell batch:**
```powershell
Get-ChildItem *.jpg | ForEach-Object { sharp -i $_.FullName -o ($_.BaseName + ".webp") }
```

## Catatan Next.js

- `next.config.mjs` sudah allow `remotePatterns` untuk fallback Unsplash, tapi prioritas adalah file lokal `/public`.
- `next/image` otomatis optimasi WebP, tidak perlu config tambahan.
- Jangan commit file `.jpg` besar — selalu convert ke `.webp` dulu agar deploy Vercel tetap ringan (<2 MB).

## Contoh Mapping Katalog

| ID (`wasteData.ts`) | File Lokal |
|---|---|
| `sisa-nasi` | `/images/katalog/organik/sisa-nasi.webp` |
| `nasi-mie-telur-campur` | `/images/katalog/organik/nasi-mie-telur-campur.webp` |
| `botol-plastik-pet` | `/images/katalog/anorganik/botol-plastik-pet.webp` |
| `baterai-bekas` | `/images/katalog/elektronik/baterai-bekas.webp` |

Ganti file, refresh `npm run dev` — gambar langsung update tanpa restart.

© KKN UNIKOM 2026 — Lebak Gede
