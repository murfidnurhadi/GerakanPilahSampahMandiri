'use client';

import React from 'react';
import { Leaf, Camera } from 'lucide-react';

export default function Footer() {
  return (
    <>
      <footer className="bg-emerald-950 text-emerald-200 py-10 pb-24 sm:pb-10 border-t border-emerald-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-emerald-900/80">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center">
                <Leaf className="w-5 h-5" />
              </div>
              <div>
                <div className="text-white font-extrabold text-sm sm:text-base leading-tight">
                  KKN TEMATIK UNIKOM 2026
                </div>
                <div className="text-emerald-400 text-xs font-medium">
                  Kelurahan Lebak Gede, Coblong, Kota Bandung
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
              <span className="bg-emerald-900/80 text-emerald-300 px-3 py-1.5 rounded-lg border border-emerald-800">
                Pemerintah Provinsi Jawa Barat
              </span>
              <span className="bg-emerald-900/80 text-emerald-300 px-3 py-1.5 rounded-lg border border-emerald-800">
                Kecamatan Coblong
              </span>
              <span className="bg-emerald-900/80 text-emerald-300 px-3 py-1.5 rounded-lg border border-emerald-800">
                RW 04 • RW 07 • RW 14
              </span>
            </div>
          </div>

          <div className="pt-5 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-400/70 gap-2 text-center sm:text-left">
            <p>© 2026 Tim Mahasiswa KKN UNIKOM Bandung. Didukung oleh Kelurahan Lebak Gede.</p>
            <p className="text-emerald-300/80 font-medium">Bersama wujudkan Lebak Gede asri, bersih dan mandiri sampah</p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-3 inset-x-3 sm:hidden z-40">
        <a
          href="/scan-ai"
          className="flex items-center justify-center gap-2 bg-emerald-500 active:bg-emerald-600 text-slate-950 font-bold py-3.5 px-4 rounded-2xl shadow-2xl border border-emerald-300 active:scale-95 transition"
        >
          <Camera className="w-5 h-5 text-slate-950" />
          <span>Foto Sampah Sekarang</span>
        </a>
      </div>
    </>
  );
}
