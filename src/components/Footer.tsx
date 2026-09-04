'use client';

import React from 'react';
import { Leaf, Heart, Camera, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <>
      <footer className="bg-emerald-950 text-emerald-200 py-10 pb-24 sm:pb-10 border-t border-emerald-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-emerald-900/80">
            
            {/* Logo & Identitas */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center font-black">
                <Leaf className="w-5 h-5 fill-slate-950" />
              </div>
              <div>
                <div className="text-white font-extrabold text-sm sm:text-base leading-tight">
                  KKN TEMATIK UNIKOM 2026
                </div>
                <div className="text-emerald-400 text-xs font-semibold">
                  Kelurahan Lebak Gede, Coblong, Kota Bandung
                </div>
              </div>
            </div>

            {/* Mitra & Kolaborasi */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="bg-emerald-900/80 text-emerald-300 px-3 py-1 rounded-lg border border-emerald-800">
                Pemerintah Provinsi Jawa Barat
              </span>
              <span className="bg-emerald-900/80 text-emerald-300 px-3 py-1 rounded-lg border border-emerald-800">
                Kecamatan Coblong
              </span>
              <span className="bg-emerald-900/80 text-emerald-300 px-3 py-1 rounded-lg border border-emerald-800">
                RW 04 • RW 07 • RW 14
              </span>
            </div>

          </div>

          {/* Copyright & Closing */}
          <div className="pt-5 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-400/80 gap-2 text-center sm:text-left">
            <p>© 2026 Tim Mahasiswa KKN UNIKOM Bandung. Didukung oleh Kelurahan Lebak Gede.</p>
            <p className="flex items-center justify-center gap-1">
              <span>Bersama wujudkan Lebak Gede asri, bersih & mandiri sampah</span>
              <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" />
            </p>
          </div>
        </div>
      </footer>

      {/* Floating CTA Khusus Layar Smartphone (Mobile Bottom Bar) */}
      <div className="fixed bottom-3 inset-x-3 sm:hidden z-40">
        <a
          href="#scan-ai"
          className="flex items-center justify-center gap-2 bg-emerald-500 active:bg-emerald-600 text-slate-950 font-black py-3.5 px-4 rounded-2xl shadow-2xl border border-emerald-300 active:scale-95 transition"
        >
          <Camera className="w-5 h-5 text-slate-950" />
          <span>Foto Sampah Sekarang (AI)</span>
        </a>
      </div>
    </>
  );
}
