'use client';

import React from 'react';
import Image from 'next/image';
import { Camera, BookOpen, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="krisis-tpa"
      className="relative bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 text-white py-10 sm:py-16 overflow-hidden border-b border-emerald-800"
    >
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header Ringkas & Visual */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-emerald-800/80 border border-emerald-500/50 text-emerald-200 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Gerakan Kelurahan Lebak Gede Hijau & Bebas Sampah</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            Pilah Sampah dari Dapur,{' '}
            <span className="text-emerald-400 block sm:inline">Jaga Lingkungan Keluarga Kita.</span>
          </h1>

          <p className="text-emerald-100/90 text-sm sm:text-base max-w-xl mx-auto">
            TPA Sarimukti overload. Cukup pisahkan <strong>Organik (Mudah Membusuk)</strong> dan <strong>Bukan Organik</strong> agar sampah tidak menumpuk di depan rumah.
          </p>
        </div>

        {/* 2 FOTO UTAMA: PERBANDINGAN VISUAL NYATA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          
          {/* Foto Krisis Sarimukti (Merah) */}
          <div className="relative rounded-2xl overflow-hidden border-2 border-red-500/80 shadow-xl bg-slate-950 group">
            <div className="relative h-60 sm:h-72 w-full">
              <Image
                src="https://www.infobdg.com/v2/wp-content/uploads/2024/06/istockphoto-1424551739-612x612-1.jpg"
                alt="Gunungan sampah TPA Sarimukti overload di Bandung"
                fill
                priority
                className="object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-between p-4">
              <span className="self-start bg-red-600 text-white font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow">
                <AlertTriangle className="w-3.5 h-3.5" />
                Krisis Nyata: TPA Sarimukti Overload 1000%
              </span>
              <div className="bg-black/70 backdrop-blur-md p-3 rounded-xl border border-white/10 text-xs text-red-200">
                ⚠️ Jika sampah tercampur terus dibuang, pengangkutan ke Lebak Gede dibatasi ketat.
              </div>
            </div>
          </div>

          {/* Foto Solusi Hijau Lebak Gede (Hijau) */}
          <div className="relative rounded-2xl overflow-hidden border-2 border-emerald-400 shadow-xl bg-emerald-950 group">
            <div className="relative h-60 sm:h-72 w-full">
              <Image
                src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&auto=format&fit=crop&q=80"
                alt="Pekarangan hijau Buruan SAE Lebak Gede dengan tanaman subur hasil kompos"
                fill
                priority
                className="object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-between p-4">
              <span className="self-start bg-emerald-600 text-white font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow">
                <CheckCircle className="w-3.5 h-3.5" />
                Solusi Kita: Kebun Asri SAE RW 04 & 07
              </span>
              <div className="bg-black/70 backdrop-blur-md p-3 rounded-xl border border-white/10 text-xs text-emerald-200">
                🌿 Sampah organik diolah jadi pupuk subur pekarangan & pakan larva maggot.
              </div>
            </div>
          </div>

        </div>

        {/* Tombol Aksi Cepat Bergambar */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
          <a
            href="#scan-ai"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-400 hover:bg-emerald-300 active:scale-95 text-emerald-950 font-black text-base px-6 py-4 rounded-2xl shadow-xl transition"
          >
            <Camera className="w-5 h-5 text-emerald-900" />
            <span>Foto Sampah dengan AI</span>
          </a>

          <a
            href="#katalog-sampah"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-800/80 hover:bg-emerald-700 border border-emerald-600 text-white font-bold text-base px-5 py-4 rounded-2xl transition"
          >
            <BookOpen className="w-5 h-5 text-emerald-300" />
            <span>Galeri Foto Barang</span>
          </a>
        </div>

      </div>
    </section>
  );
}
