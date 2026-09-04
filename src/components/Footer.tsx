'use client';

import React, { useState, useEffect } from 'react';
import { Leaf, Camera, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  const [showMobileCta, setShowMobileCta] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // hanya tampil di beranda dan setelah scroll sedikit, agar tidak mengganggu di menu lain
    if (pathname !== '/' || dismissed) {
      setShowMobileCta(false);
      return;
    }
    const onScroll = () => {
      // tampil hanya setelah user scroll 300px agar hero bebas
      setShowMobileCta(window.scrollY > 300);
    };
    // cek localStorage dismiss
    const isDismissed = typeof window !== 'undefined' && localStorage.getItem('footerCtaDismissed') === '1';
    if (isDismissed) {
      setDismissed(true);
      return;
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname, dismissed]);

  const handleDismiss = () => {
    setDismissed(true);
    setShowMobileCta(false);
    try { localStorage.setItem('footerCtaDismissed', '1'); } catch {}
  };

  return (
    <>
      <footer className="bg-emerald-950 text-emerald-200 py-10 sm:pb-10 border-t border-emerald-900">
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

      {showMobileCta && (
        <div className="fixed bottom-3 inset-x-3 sm:hidden z-40 flex gap-2">
          <a
            href="/scan-ai"
            className="flex-1 flex items-center justify-center gap-2 bg-emerald-500 active:bg-emerald-600 text-slate-950 font-bold py-3 px-4 rounded-2xl shadow-2xl border border-emerald-300 active:scale-95 transition text-sm"
          >
            <Camera className="w-4 h-4 text-slate-950" />
            <span>Foto Sampah Sekarang</span>
          </a>
          <button
            onClick={handleDismiss}
            aria-label="Tutup"
            className="w-11 h-11 flex items-center justify-center bg-slate-900/90 text-white rounded-2xl border border-white/20 backdrop-blur"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </>
  );
}
