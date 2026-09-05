'use client';

import { useEffect, useState } from 'react';
import { Leaf, CheckCircle2, X, Sparkles } from 'lucide-react';

export default function QrSuccessBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Tampilkan sekali per sesi saat user buka via QR (atau kunjungan pertama)
    // Deteksi QR: cek ?qr=1 atau ?source=qr atau referrer kosong (khas scan kamera HP)
    const params = new URLSearchParams(window.location.search);
    const isQrParam = params.has('qr') || params.get('source') === 'qr';
    const isFirstVisit = !sessionStorage.getItem('qrWelcomeShown');
    const isLikelyQrScan = isQrParam || isFirstVisit;

    if (isLikelyQrScan && !sessionStorage.getItem('qrWelcomeDismissed')) {
      // tunda 600ms agar tidak bentrok dengan loading
      const t = setTimeout(() => setShow(true), 600);
      // auto hide setelah 3 detik (sesuai request)
      const t2 = setTimeout(() => {
        setShow(false);
        sessionStorage.setItem('qrWelcomeShown', '1');
      }, 3600);
      return () => {
        clearTimeout(t);
        clearTimeout(t2);
      };
    } else if (isFirstVisit) {
      sessionStorage.setItem('qrWelcomeShown', '1');
    }
  }, []);

  if (!show) return null;

  return (
    <div className="fixed top-16 sm:top-20 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-lg pointer-events-none">
      <div className="pointer-events-auto bg-white border-2 border-emerald-500 rounded-2xl shadow-2xl overflow-hidden animate-reveal flex flex-col">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-xs font-black">
            <CheckCircle2 className="w-4 h-4" />
            Scan QR Berhasil
          </span>
          <button
            onClick={() => {
              setShow(false);
              sessionStorage.setItem('qrWelcomeDismissed', '1');
            }}
            className="p-1 rounded-lg bg-white/20 hover:bg-white/30 text-white"
            aria-label="Tutup"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="px-5 py-4 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0">
            <Leaf className="w-6 h-6" />
          </div>
          <div className="min-w-0">
            <div className="text-sm font-black text-slate-900 leading-tight">Gerakan Pilah Sampah Mandiri</div>
            <div className="text-xs font-semibold text-emerald-700">Kelurahan Lebak Gede • KKN UNIKOM 2026</div>
            <div className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
              <Sparkles className="w-3 h-3 text-emerald-500" />
              gerakan-pilah-sampah-mandiri-6nuf.vercel.app
            </div>
          </div>
        </div>
        <div className="px-4 pb-3">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl px-3 py-2 text-xs text-emerald-800 text-center font-medium">
            Selamat datang! Scan QR Anda berhasil — silakan jelajahi edukasi pilah 3 wadah.
          </div>
        </div>
      </div>
    </div>
  );
}
