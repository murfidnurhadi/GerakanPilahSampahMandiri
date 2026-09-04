'use client';

import React from 'react';
import Image from 'next/image';
import { Leaf, Recycle, AlertTriangle, ArrowRight } from 'lucide-react';

export default function ThreeBinsGuide() {
  return (
    <section id="tiga-wadah" className="py-12 sm:py-16 bg-emerald-50/60 border-y border-emerald-200">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 border border-emerald-300 px-3.5 py-1 rounded-full inline-block mb-2">
            Panduan Wadah Bergambar
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            3 Wadah Praktis: Pilah Berdasarkan Foto Ini
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            Lihat contoh foto barang di bawah untuk memasukkannya ke wadah yang tepat:
          </p>
        </div>

        {/* 3 KARTU BERGAMBAR */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* ================= 1. WADAH HIJAU (ORGANIK) ================= */}
          <div className="bg-white rounded-3xl overflow-hidden border-2 border-emerald-500 shadow-md flex flex-col">
            {/* Header Hijau */}
            <div className="bg-emerald-700 text-white p-4 text-center">
              <div className="text-[11px] font-black uppercase tracking-widest text-emerald-200">Wadah 01</div>
              <h3 className="text-xl font-black flex items-center justify-center gap-1.5">
                <Leaf className="w-5 h-5" /> WADAH HIJAU
              </h3>
              <p className="text-xs font-semibold text-emerald-100">Sampah Organik (Bisa Membusuk)</p>
            </div>

            {/* Foto Utama */}
            <div className="relative h-48 w-full bg-slate-900">
              <Image
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=700&auto=format&fit=crop&q=80"
                alt="Contoh sampah organik: sisa sayur dan kulit buah"
                fill
                className="object-cover"
              />
            </div>

            {/* Grid Mini Contoh Benda Nyata Bergambar */}
            <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <div className="text-xs font-black text-emerald-900 mb-2 uppercase tracking-wide">
                  Contoh Benda Nyata:
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs font-bold text-slate-700">
                  <span className="bg-emerald-50 border border-emerald-200 p-2 rounded-lg">🍚 Sisa Nasi & Lauk</span>
                  <span className="bg-emerald-50 border border-emerald-200 p-2 rounded-lg">🥬 Sayuran Mentah</span>
                  <span className="bg-emerald-50 border border-emerald-200 p-2 rounded-lg">🍊 Kulit & Biji Buah</span>
                  <span className="bg-emerald-50 border border-emerald-200 p-2 rounded-lg">🥚 Cangkang Telur</span>
                </div>
              </div>

              {/* Solusi Ringkas Lebak Gede */}
              <div className="bg-emerald-100/80 border border-emerald-300 p-3 rounded-xl text-xs space-y-1">
                <div className="font-extrabold text-emerald-900">📍 Penyaluran Lebak Gede:</div>
                <p className="text-emerald-800">
                  Pupuk Kompos <strong>Kebun SAE (RW 04)</strong> & pakan larva <strong>Maggot (RW 07)</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* ================= 2. WADAH BIRU (ANORGANIK) ================= */}
          <div className="bg-white rounded-3xl overflow-hidden border-2 border-blue-500 shadow-md flex flex-col">
            {/* Header Biru */}
            <div className="bg-blue-700 text-white p-4 text-center">
              <div className="text-[11px] font-black uppercase tracking-widest text-blue-200">Wadah 02</div>
              <h3 className="text-xl font-black flex items-center justify-center gap-1.5">
                <Recycle className="w-5 h-5" /> WADAH BIRU
              </h3>
              <p className="text-xs font-semibold text-blue-100">Anorganik Bernilai (Daur Ulang)</p>
            </div>

            {/* Foto Utama */}
            <div className="relative h-48 w-full bg-slate-900">
              <Image
                src="https://images.unsplash.com/photo-1528323273322-d81458248d40?w=700&auto=format&fit=crop&q=80"
                alt="Contoh sampah anorganik botol plastik dan kardus"
                fill
                className="object-cover"
              />
            </div>

            {/* Grid Mini Contoh Benda Nyata Bergambar */}
            <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <div className="text-xs font-black text-blue-900 mb-2 uppercase tracking-wide">
                  Contoh Benda Nyata:
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs font-bold text-slate-700">
                  <span className="bg-blue-50 border border-blue-200 p-2 rounded-lg">🧴 Botol Plastik PET</span>
                  <span className="bg-blue-50 border border-blue-200 p-2 rounded-lg">📦 Kardus Paket Lipat</span>
                  <span className="bg-blue-50 border border-blue-200 p-2 rounded-lg">🥫 Kaleng Minuman / Susu</span>
                  <span className="bg-blue-50 border border-blue-200 p-2 rounded-lg">📰 Kertas & Koran Kering</span>
                </div>
              </div>

              {/* Solusi Ringkas Lebak Gede */}
              <div className="bg-blue-100/80 border border-blue-300 p-3 rounded-xl text-xs space-y-1">
                <div className="font-extrabold text-blue-900">📍 Penyaluran Lebak Gede:</div>
                <p className="text-blue-800">
                  Disetor ke <strong>Bank Sampah Berkah RW 14</strong> atau <strong>Dropbox RW 04/07</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* ================= 3. WADAH MERAH (RESIDU) ================= */}
          <div className="bg-white rounded-3xl overflow-hidden border-2 border-red-500 shadow-md flex flex-col">
            {/* Header Merah */}
            <div className="bg-red-700 text-white p-4 text-center">
              <div className="text-[11px] font-black uppercase tracking-widest text-red-200">Wadah 03</div>
              <h3 className="text-xl font-black flex items-center justify-center gap-1.5">
                <AlertTriangle className="w-5 h-5" /> WADAH MERAH
              </h3>
              <p className="text-xs font-semibold text-red-100">Residu Kotor (Bukan Daur Ulang)</p>
            </div>

            {/* Foto Utama */}
            <div className="relative h-48 w-full bg-slate-900">
              <Image
                src="https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?w=700&auto=format&fit=crop&q=80"
                alt="Contoh sampah residu popok dan sachet multilayer"
                fill
                className="object-cover"
              />
            </div>

            {/* Grid Mini Contoh Benda Nyata Bergambar */}
            <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <div className="text-xs font-black text-red-900 mb-2 uppercase tracking-wide">
                  Contoh Benda Nyata:
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs font-bold text-slate-700">
                  <span className="bg-red-50 border border-red-200 p-2 rounded-lg">👶 Popok Bayi (Pampers)</span>
                  <span className="bg-red-50 border border-red-200 p-2 rounded-lg">☕ Sachet Kopi / Snack</span>
                  <span className="bg-red-50 border border-red-200 p-2 rounded-lg">🧻 Tisu Basah & Kotor</span>
                  <span className="bg-red-50 border border-red-200 p-2 rounded-lg">🍱 Styrofoam Makanan</span>
                </div>
              </div>

              {/* Solusi Ringkas Lebak Gede */}
              <div className="bg-red-100/80 border border-red-300 p-3 rounded-xl text-xs space-y-1">
                <div className="font-extrabold text-red-900">📍 Penyaluran Lebak Gede:</div>
                <p className="text-red-800">
                  Bungkus rapat kantong, diangkut oleh <strong>Truk DLHK ke TPA Sarimukti</strong>.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
