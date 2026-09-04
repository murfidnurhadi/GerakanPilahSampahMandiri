'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { ShoppingBag, Sprout, Building2, Quote } from 'lucide-react';

export default function Action3R() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const nodes = Array.from(el.querySelectorAll('.reveal')) as HTMLElement[];
    const obs = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) (e.target as HTMLElement).classList.add('active');
      else (e.target as HTMLElement).classList.remove('active');
    }), { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    nodes.forEach((n) => obs.observe(n));
    const t = setTimeout(() => nodes.forEach((n) => { const r = n.getBoundingClientRect(); if (r.top < window.innerHeight && r.bottom > 0) n.classList.add('active'); }), 600);
    return () => { clearTimeout(t); obs.disconnect(); };
  }, []);
  return (
    <section ref={ref} id="aksi-3r-section" className="py-12 sm:py-16 max-w-6xl mx-auto px-4 relative overflow-hidden">
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl animate-float-slow pointer-events-none" />
      
      <div className="text-center max-w-2xl mx-auto mb-8 reveal">
        <span className="text-xs font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 border border-emerald-300 px-3.5 py-1 rounded-full inline-block mb-2">
          Aksi Nyata Warga
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
          3 Langkah Mudah 3R di Rumah
        </h2>
        <p className="text-slate-600 text-sm mt-1">
          Cegah timbunan sampah sebelum sampai ke dapur kita:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        
        <div className="reveal bg-white rounded-2xl overflow-hidden border border-emerald-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition duration-500 group">
          <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
            <Image
              src="/images/aksi-3r/reduce.webp"
              alt="Tas belanja kain ramah lingkungan untuk mengurangi kresek"
              fill
              className="object-cover group-hover:scale-110 transition duration-700"
            />
            <span className="absolute top-2.5 left-2.5 bg-emerald-700 text-white text-[11px] font-black px-2.5 py-0.5 rounded uppercase">
              1. REDUCE (Kurangi)
            </span>
          </div>
          <div className="p-4 space-y-1 text-xs">
            <div className="font-extrabold text-slate-900 text-sm flex items-center gap-1.5">
              <ShoppingBag className="w-4 h-4 text-emerald-700" />
              Bawa Tas Belanja Sendiri
            </div>
            <p className="text-slate-600 leading-relaxed">
              Tolak kantong kresek saat ke warung/pasar dan ambil porsi makan secukupnya agar tidak bersisa di piring.
            </p>
          </div>
        </div>

        <div className="reveal reveal-delay-1 bg-white rounded-2xl overflow-hidden border border-emerald-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition duration-500 group">
          <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
            <Image
              src="/images/aksi-3r/reuse.webp"
              alt="Botol bekas dijadikan pot tanaman cabai pekarangan"
              fill
              className="object-cover group-hover:scale-110 transition duration-700"
            />
            <span className="absolute top-2.5 left-2.5 bg-emerald-700 text-white text-[11px] font-black px-2.5 py-0.5 rounded uppercase">
              2. REUSE (Pakai Ulang)
            </span>
          </div>
          <div className="p-4 space-y-1 text-xs">
            <div className="font-extrabold text-slate-900 text-sm flex items-center gap-1.5">
              <Sprout className="w-4 h-4 text-emerald-700" />
              Pot Botol Bekas Buruan SAE
            </div>
            <p className="text-slate-600 leading-relaxed">
              Ubah botol plastik & galon bekas menjadi pot cabai atau sayuran pekarangan teras rumah.
            </p>
          </div>
        </div>

        <div className="reveal reveal-delay-2 bg-white rounded-2xl overflow-hidden border border-emerald-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition duration-500 group">
          <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
            <Image
              src="/images/aksi-3r/recycle.webp"
              alt="Warga menimbang botol dan kardus di bank sampah"
              fill
              className="object-cover group-hover:scale-110 transition duration-700"
            />
            <span className="absolute top-2.5 left-2.5 bg-emerald-700 text-white text-[11px] font-black px-2.5 py-0.5 rounded uppercase">
              3. RECYCLE (Daur Ulang)
            </span>
          </div>
          <div className="p-4 space-y-1 text-xs">
            <div className="font-extrabold text-slate-900 text-sm flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-emerald-700" />
              Tabung ke Bank Sampah RW 14
            </div>
            <p className="text-slate-600 leading-relaxed">
              Kumpulkan botol bening, kardus, dan kaleng susu untuk ditabung menjadi saldo uang kas keluarga.
            </p>
          </div>
        </div>

      </div>

      <div className="reveal bg-gradient-to-r from-emerald-900 to-teal-900 text-white rounded-2xl p-6 text-center border border-emerald-800 shadow-md hover:shadow-lg hover:scale-[1.01] transition duration-300">
        <Quote className="w-6 h-6 text-emerald-300 mx-auto mb-2 opacity-70" />
        <blockquote className="text-base sm:text-xl font-extrabold leading-snug">
          "Memilah dari dapur cuma butuh 5 detik, namun menjaga anak-cucu kita dari wabah penyakit selamanya."
        </blockquote>
      </div>

    </section>
  );
}
