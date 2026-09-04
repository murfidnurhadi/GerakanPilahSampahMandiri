'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { AlertTriangle, ShieldAlert } from 'lucide-react';

export default function CrisisImpact() {
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
    <section ref={ref} id="dampak-bahaya-section" className="py-12 sm:py-16 max-w-6xl mx-auto px-4 relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-red-500/5 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl animate-float-slow pointer-events-none" />
      
      {/* Header Visual */}
      <div className="text-center max-w-2xl mx-auto mb-8 reveal">
        <span className="text-xs font-black uppercase tracking-wider text-red-700 bg-red-100 border border-red-200 px-3.5 py-1 rounded-full inline-block mb-2 animate-pulse">
          Peringatan Bahaya
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
          Akibat Sampah Tercampur yang Dibiarkan Menumpuk
        </h2>
        <p className="text-slate-600 text-sm mt-1">
          Genangan air di wadah plastik dan bau busuk sisa makanan mengundang 3 ancaman penyakit ini:
        </p>
      </div>

      {/* 3 KARTU FOTO PENYAKIT (VISUAL DOMINAN) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        
        {/* Foto 1: Nyamuk Aedes & Genangan Plastik -> DBD */}
        <div className="reveal bg-white rounded-2xl overflow-hidden border-2 border-red-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition duration-500 group">
          <div className="relative h-48 w-full bg-slate-900">
            <Image
              src="https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=600&auto=format&fit=crop&q=80"
              alt="Nyamuk Aedes berkembang biak di genangan sampah plastik terbuka"
              fill
              className="object-cover group-hover:scale-110 transition duration-700"
            />
            <span className="absolute top-2.5 left-2.5 bg-red-600 text-white text-[11px] font-black px-2.5 py-0.5 rounded uppercase shadow">
              1. DBD (Demam Berdarah)
            </span>
          </div>
          <div className="p-4 space-y-1 text-xs">
            <div className="font-extrabold text-slate-900 text-sm">Vektor: Nyamuk Aedes</div>
            <p className="text-slate-600 leading-relaxed">
              Botol, cup boba, dan kaleng terbuka yang tergenang air hujan jadi sarang jentik nyamuk.
            </p>
          </div>
        </div>

        {/* Foto 2: Lalat & Sisa Makanan Busuk -> Diare */}
        <div className="reveal reveal-delay-1 bg-white rounded-2xl overflow-hidden border-2 border-amber-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition duration-500 group">
          <div className="relative h-48 w-full bg-slate-900">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXy0egh9hclMbqVT9hw-B3dNtvPw5ys_za3qTJzSdgjw&s=10"
              alt="Lalat hijau mengerubungi sampah basah dan membawa bakteri penyakit"
              fill
              className="object-cover group-hover:scale-110 transition duration-700"
            />
            <span className="absolute top-2.5 left-2.5 bg-amber-600 text-white text-[11px] font-black px-2.5 py-0.5 rounded uppercase shadow">
              2. Diare & Muntaber (Lalat Hijau)
            </span>
          </div>
          <div className="p-4 space-y-1 text-xs">
            <div className="font-extrabold text-slate-900 text-sm">Vektor: Lalat Hijau & Bakteri</div>
            <p className="text-slate-600 leading-relaxed">
              Sisa lauk dan sayur busuk yang tercecer mengundang lalat membawa kuman <em>E. coli</em> ke makanan keluarga.
            </p>
          </div>
        </div>

        {/* Foto 3: Asap Bakaran Sampah -> ISPA */}
        <div className="reveal reveal-delay-2 bg-white rounded-2xl overflow-hidden border-2 border-cyan-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition duration-500 group">
          <div className="relative h-48 w-full bg-slate-900">
            <Image
              src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600&auto=format&fit=crop&q=80"
              alt="Polusi asap pembakaran sampah plastik liar merusak pernapasan"
              fill
              className="object-cover group-hover:scale-110 transition duration-700"
            />
            <span className="absolute top-2.5 left-2.5 bg-cyan-700 text-white text-[11px] font-black px-2.5 py-0.5 rounded uppercase shadow">
              3. ISPA & Sesak Napas
            </span>
          </div>
          <div className="p-4 space-y-1 text-xs">
            <div className="font-extrabold text-slate-900 text-sm">Polusi Racun Asap</div>
            <p className="text-slate-600 leading-relaxed">
              Gas pembusukan metana dan asap bakaran plastik liar merusak saluran napas anak dan lansia.
            </p>
          </div>
        </div>

      </div>

      {/* Banner Ringkas Pesan Hijau */}
      <div className="reveal bg-gradient-to-r from-emerald-800 to-teal-800 text-white p-4 rounded-2xl text-center shadow-md flex items-center justify-center gap-2 text-sm sm:text-base font-bold hover:shadow-lg hover:scale-[1.01] transition duration-300">
        <span>Solusinya: Jangan biarkan sampah keluar rumah dalam keadaan campur aduk!</span>
      </div>

    </section>
  );
}
