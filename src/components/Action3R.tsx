'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { ShoppingBag, Sprout, Building2, Quote, ChevronUp, RefreshCw, Wrench, Lightbulb, Recycle, Leaf, Ban, Hammer, PackageOpen } from 'lucide-react';

const R8_ITEMS = [
  {
    n: '01',
    code: 'Rethink',
    title: 'Pikir Ulang',
    desc: 'Rencanakan belanja & porsi makan. Catat menu seminggu agar tidak over-buy.',
    example: 'Meal-prep Lebak Gede: masak sesuai porsi, sisa nasi langsung jadwal pakan ayam.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&auto=format&fit=crop&q=80',
    alt: 'Ibu mencatat menu belanja mingguan sebelum ke pasar',
    color: 'from-amber-500 to-orange-500',
    icon: Lightbulb,
  },
  {
    n: '02',
    code: 'Refuse',
    title: 'Tolak',
    desc: 'Tolak barang sekali pakai yang tidak perlu: kresek hitam, sedotan, sachet.',
    example: 'Bawa tote & tumbler, tolak sachet bumbu mie (pilih kemasan besar).',
    image: 'https://images.unsplash.com/photo-1597484662317-c93c0f5b9a8c?w=600&auto=format&fit=crop&q=80',
    alt: 'Tangan menolak kantong plastik di kasir',
    color: 'from-red-500 to-red-700',
    icon: Ban,
  },
  {
    n: '03',
    code: 'Reduce',
    title: 'Kurangi',
    desc: 'Ambil porsi secukupnya, habiskan makanan di piring.',
    example: 'Piring habis = sampah berkurang 30%. Sisa sedikit → Wadah Hijau.',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80',
    alt: 'Porsi makan secukupnya di piring',
    color: 'from-emerald-500 to-emerald-700',
    icon: ShoppingBag,
  },
  {
    n: '04',
    code: 'Reuse',
    title: 'Gunakan Kembali',
    desc: 'Pakai ulang botol, galon, jerigen. Jangan langsung buang.',
    example: 'Botol PET → pot cabai Buruan SAE. Jerigen → wadah jelantah.',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&auto=format&fit=crop&q=80',
    alt: 'Botol plastik bekas dijadikan pot tanaman cabai',
    color: 'from-blue-500 to-cyan-600',
    icon: RefreshCw,
  },
  {
    n: '05',
    code: 'Repair',
    title: 'Perbaiki',
    desc: 'Perbaiki ember, sandal, elektronik sebelum ganti baru.',
    example: 'Ember pecah → las plastik / tambal. Perpanjang umur 2 tahun.',
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&auto=format&fit=crop&q=80',
    alt: 'Tangan memperbaiki ember plastik dengan alat',
    color: 'from-slate-600 to-slate-800',
    icon: Wrench,
  },
  {
    n: '06',
    code: 'Repurpose',
    title: 'Alih Fungsi',
    desc: 'Kardus & kain perca jadi rak, tas, kotak penyimpanan.',
    example: 'Kardus paket → kotak mainan/rak bumbu. Kain → lap majun.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop&q=80',
    alt: 'Kardus bekas dilipat jadi kotak penyimpanan rapi',
    color: 'from-amber-600 to-yellow-600',
    icon: PackageOpen,
  },
  {
    n: '07',
    code: 'Recycle',
    title: 'Daur Ulang',
    desc: 'Pilah bersih & kering, setor ke Bank Sampah.',
    example: 'Botol bening, kardus, kaleng → Bank Sampah RW14 (jadi tabungan).',
    image: 'https://images.unsplash.com/photo-1591193686104-fddba4d0e4d8?w=600&auto=format&fit=crop&q=80',
    alt: 'Warga menimbang botol plastik di bank sampah',
    color: 'from-blue-600 to-indigo-600',
    icon: Building2,
  },
  {
    n: '08',
    code: 'Rot',
    title: 'Mbusukkan (Kompos & Pakan)',
    desc: 'Organik jadi pakan & kompos — bukan TPA.',
    example: 'Nasi+mie+telur → ayam kampung; Ampas tahu & sayur → lele & ikan mas kecil; Daun → kompos SAE.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&auto=format&fit=crop&q=80',
    alt: 'Ayam kampung makan sisa nasi dan lele di kolam makan ampas tahu',
    color: 'from-emerald-600 to-teal-700',
    icon: Leaf,
  },
];

export default function Action3R() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('active')), { threshold: 0.12 });
    el.querySelectorAll('.reveal').forEach((r) => obs.observe(r));
    return () => obs.disconnect();
  }, []);
  return (
    <section ref={ref} id="aksi-8r-section" className="py-12 sm:py-16 max-w-6xl mx-auto px-4 relative overflow-hidden">
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl animate-float-slow pointer-events-none" />
      
      <div className="text-center max-w-3xl mx-auto mb-10 reveal">
        <span className="text-xs font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 border border-emerald-300 px-3.5 py-1 rounded-full inline-block mb-2">
          Framework Baru • Dari 3R ke 8R
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900">
          8 Langkah 8R di Rumah Lebak Gede
        </h2>
        <p className="text-slate-600 text-sm mt-2">
          Lebih lengkap dari 3R: pikir ulang sampai busukkan. Setiap R punya aksi & saran pakan spesifik lapangan.
        </p>
        <div className="mt-3 inline-flex items-center gap-2 text-xs bg-amber-50 border border-amber-200 rounded-xl px-3 py-1.5 text-amber-800">
          <span className="font-bold">Highlight lapangan:</span> Nasi+mie+telur → ayam kampung • Ampas tahu + sayur → lele & ikan mas kecil
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {R8_ITEMS.map((item, idx) => {
          const Icon = item.icon;
          const delay = idx % 4 === 1 ? 'reveal-delay-1' : idx % 4 === 2 ? 'reveal-delay-2' : idx % 4 === 3 ? 'reveal-delay-3' : '';
          return (
            <div key={item.n} className={`reveal ${delay} bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition duration-500 group flex flex-col`}>
              <div className="relative h-40 w-full bg-slate-100 overflow-hidden">
                <Image src={item.image} alt={item.alt} fill className="object-cover group-hover:scale-110 transition duration-700" unoptimized />
                <div className={`absolute top-2.5 left-2.5 bg-gradient-to-r ${item.color} text-white text-[11px] font-black px-2.5 py-1 rounded-full shadow flex items-center gap-1.5`}>
                  <Icon className="w-3.5 h-3.5" />
                  {item.n}. {item.code}
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <div className="text-white font-black text-sm leading-tight">{item.title}</div>
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col gap-2">
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-2.5 text-xs">
                  <div className="font-bold text-emerald-900 flex items-center gap-1"><Sprout className="w-3 h-3" /> Contoh Lebak Gede:</div>
                  <p className="text-emerald-800 mt-1 leading-snug">{item.example}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="reveal bg-gradient-to-r from-emerald-900 to-teal-900 text-white rounded-2xl p-6 border border-emerald-800 shadow-md overflow-hidden relative">
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
        <Quote className="w-6 h-6 text-emerald-300 mb-2 opacity-70" />
        <blockquote className="text-base sm:text-lg font-extrabold leading-snug relative">
          "8R bukan teori — di RW 04/07, nasi campur jadi telur ayam, ampas tahu jadi lele, daun jadi kompos. Pilah 5 detik, panen seminggu."
        </blockquote>
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
          <div className="bg-white/10 border border-white/20 rounded-xl p-2.5 text-center">
            <div className="font-black text-amber-200">R8 — Rot</div>
            <div className="text-emerald-100">Nasi+mie+telur → <b>Ayam Kampung</b></div>
          </div>
          <div className="bg-white/10 border border-white/20 rounded-xl p-2.5 text-center">
            <div className="font-black text-cyan-200">R8 — Rot</div>
            <div className="text-emerald-100">Ampas tahu & sayur → <b>Lele Dumbo</b></div>
          </div>
          <div className="bg-white/10 border border-white/20 rounded-xl p-2.5 text-center">
            <div className="font-black text-emerald-200">R7 — Recycle</div>
            <div className="text-emerald-100">Botol & kardus → <b>Bank Sampah RW14</b></div>
          </div>
        </div>
      </div>
      <div className="reveal flex flex-col items-center gap-1 mt-6 opacity-60">
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Geser untuk solusi RW</span>
        <ChevronUp className="w-4 h-4 text-slate-400 rotate-180 animate-swipe-bounce" />
      </div>
    </section>
  );
}
