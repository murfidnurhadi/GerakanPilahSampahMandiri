'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Camera,
  AlertTriangle,
  Recycle,
  ArrowRight,
  ShieldAlert,
  ChevronRight,
  Bug,
  Leaf,
  Trash2,
  Heart,
  Sprout,
  PackageCheck,
  Trash,
  Sparkles,
  ChevronUp,
  Zap,
  Users,
  MapPin,
  Layers,
  BookOpen,
  Phone,
  CheckCircle2,
  ArrowUp,
  Droplets,
} from 'lucide-react';

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (e.target as HTMLElement).classList.add('active')),
      { threshold: 0.06, rootMargin: '0px 0px -30px 0px' }
    );
    const nodes = Array.from(el.querySelectorAll('.reveal')) as HTMLElement[];
    nodes.forEach((n) => obs.observe(n));
    const t = setTimeout(() => nodes.forEach((n) => n.classList.add('active')), 800);
    return () => {
      clearTimeout(t);
      obs.disconnect();
    };
  }, []);
  return ref;
}

function CountUp({ end, suffix = '', duration = 1400 }: { end: number; suffix?: string; duration?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    let raf: number;
    let started = false;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started) {
          started = true;
          const t0 = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - t0) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.floor(eased * end));
            if (p < 1) raf = requestAnimationFrame(tick);
          };
          raf = requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => {
      obs.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [end, duration]);
  return <span ref={ref}>{val}{suffix}</span>;
}

const QUICK_NAV = [
  { title: 'Krisis TPA', desc: 'Overload 1000%', href: '/krisis-tpa', icon: AlertTriangle, color: 'from-red-500 to-red-700', bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-700' },
  { title: 'Bahaya Penyakit', desc: 'DBD • Diare • ISPA', href: '/bahaya-penyakit', icon: ShieldAlert, color: 'from-amber-500 to-orange-600', bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-800' },
  { title: '3 Wadah', desc: 'Hijau • Biru • Merah', href: '/tiga-wadah', icon: Layers, color: 'from-emerald-500 to-teal-600', bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-800' },
  { title: 'Katalog', desc: '34 foto barang', href: '/katalog', icon: BookOpen, color: 'from-blue-500 to-indigo-600', bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-800' },
  { title: 'Aksi 3R', desc: 'Reduce • Reuse • Recycle', href: '/aksi-3r', icon: Recycle, color: 'from-teal-500 to-emerald-600', bg: 'bg-teal-50', border: 'border-teal-200', text: 'text-teal-800' },
  { title: 'Solusi RW', desc: 'GASLAH • Hotline', href: '/posko-rw', icon: Phone, color: 'from-slate-600 to-slate-800', bg: 'bg-slate-50', border: 'border-slate-200', text: 'text-slate-800' },
];

const WADAH_DETAIL = [
  {
    title: 'Organik',
    sub: 'Sampah Basah • Mudah Membusuk',
    color: 'bg-emerald-600',
    light: 'bg-emerald-50',
    border: 'border-emerald-200',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500&auto=format&fit=crop&q=80',
    items: [
      { name: 'Sisa nasi + mie + telur', img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&auto=format&fit=crop&q=80', note: 'Pakan ayam kampung' },
      { name: 'Sayur mentah & ampas tahu', img: 'https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?w=200&auto=format&fit=crop&q=80', note: 'Pakan lele & nila' },
      { name: 'Daun kering', img: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=200&auto=format&fit=crop&q=80', note: 'Kompos' },
      { name: 'Cangkang telur', img: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=200&auto=format&fit=crop&q=80', note: 'Kalsium kompos' },
    ],
  },
  {
    title: 'Anorganik',
    sub: 'Kering • Bernilai Daur Ulang',
    color: 'bg-blue-600',
    light: 'bg-blue-50',
    border: 'border-blue-200',
    image: 'https://images.unsplash.com/photo-1528323273322-d81458248d40?w=500&auto=format&fit=crop&q=80',
    items: [
      { name: 'Botol PET bening', img: 'https://images.unsplash.com/photo-1528323273322-d81458248d40?w=200&auto=format&fit=crop&q=80', note: 'Bank Sampah' },
      { name: 'Kardus & karton', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=200&auto=format&fit=crop&q=80', note: 'Rp 1.500/kg' },
      { name: 'Kaleng aluminium', img: 'https://images.unsplash.com/photo-1584282479905-eb8b22a012cf?w=200&auto=format&fit=crop&q=80', note: 'Rp 10.000/kg' },
      { name: 'Minyak jelantah', img: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=200&auto=format&fit=crop&q=80', note: 'Biodiesel' },
    ],
  },
  {
    title: 'Residu',
    sub: 'Kotor • Sulit Diolah',
    color: 'bg-red-600',
    light: 'bg-red-50',
    border: 'border-red-200',
    image: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?w=500&auto=format&fit=crop&q=80',
    items: [
      { name: 'Popok & pembalut', img: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=200&auto=format&fit=crop&q=80', note: 'Gulung rapat' },
      { name: 'Sachet & kresek kotor', img: 'https://images.unsplash.com/photo-1589365278144-c9e705f843ba?w=200&auto=format&fit=crop&q=80', note: 'Multilayer' },
      { name: 'Tisu & masker', img: 'https://images.unsplash.com/photo-1584483766114-2cea6facdf57?w=200&auto=format&fit=crop&q=80', note: 'Mikroplastik' },
      { name: 'Styrofoam', img: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?w=200&auto=format&fit=crop&q=80', note: 'Jangan dibakar' },
    ],
  },
];

export default function Home() {
  const revealRef = useReveal();
  const [parallaxY, setParallaxY] = useState(0);
  // disable parallax di HP agar tidak berat
  useEffect(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    if (isMobile) return;
    const onScroll = () => setParallaxY(window.scrollY * 0.12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main ref={revealRef} className="space-y-0 pb-0 overflow-x-hidden">
      {/* Marquee */}
      <div className="relative bg-red-700 text-white overflow-hidden border-y-2 border-red-800 py-1.5 sm:py-2">
        <div className="animate-marquee whitespace-nowrap flex gap-8 text-[11px] sm:text-xs font-black uppercase tracking-wider">
          <span className="flex items-center gap-8">
            <span>DARURAT TPA SARIMUKTI OVERLOAD 1000% • RITASE DIBATASI • SEWAKTU-WAKTU DITUTUP •</span>
            <span>SAMPAH SELESAI DI SUMBER — PILAH DARI DAPUR •</span>
            <span>3 WADAH: ORGANIK • ANORGANIK • RESIDU — WARGA MANDIRI •</span>
            <span>DARURAT TPA SARIMUKTI OVERLOAD 1000% • RITASE DIBATASI • SEWAKTU-WAKTU DITUTUP •</span>
          </span>
        </div>
      </div>

      {/* Hero - tinggi dikurangi di HP agar tidak perlu scroll panjang */}
      <section className="relative min-h-[500px] sm:min-h-[560px] flex items-center justify-center overflow-hidden bg-slate-950 border-b border-emerald-900">
        <div className="absolute inset-0" style={{ transform: `translateY(${parallaxY}px) scale(1.06)` }}>
          <Image src="https://www.infobdg.com/v2/wp-content/uploads/2024/06/istockphoto-1424551739-612x612-1.jpg" alt="TPA Sarimukti" fill priority className="object-cover object-center" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/30" />
        <div className="absolute -top-10 -right-10 w-48 h-48 sm:w-72 sm:h-72 bg-emerald-500/15 rounded-full blur-3xl animate-float-slow pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-48 h-48 sm:w-80 sm:h-80 bg-red-500/10 rounded-full blur-3xl animate-float pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
          <div className="max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2 reveal">
              <span className="inline-flex items-center gap-1.5 bg-red-600 text-white text-[10px] sm:text-[11px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full shadow border border-red-400">
                <AlertTriangle className="w-3 h-3" />
                Darurat Overload 1000%
              </span>
              <span className="text-[11px] sm:text-xs text-emerald-200 font-semibold bg-black/60 backdrop-blur px-3 py-1 rounded-full border border-emerald-800">
                KKN UNIKOM 2026 • Lebak Gede
              </span>
            </div>

            <h1 className="reveal reveal-delay-1 text-[28px] leading-[1.05] sm:text-5xl md:text-6xl font-black text-white drop-shadow">
              Gunungan Sampah <span className="text-red-400">Meluap,</span>
              <span className="block bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent" style={{ backgroundSize: '200% 200%' }}>Saatnya Bertindak.</span>
            </h1>

            <p className="reveal reveal-delay-2 text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl">
              TPA Sarimukti kritis, ritase dipotong, sewaktu-waktu ditutup. Jika tidak pilah dari dapur, sampah menumpuk di depan rumah.
            </p>

            <div className="reveal reveal-delay-3 grid grid-cols-3 gap-2 sm:gap-3 pt-1 max-w-lg">
              <div className="bg-black/60 backdrop-blur border border-red-500/40 rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 text-center">
                <div className="text-lg sm:text-2xl font-black text-red-400"><CountUp end={1000} suffix="%" /></div>
                <div className="text-[10px] sm:text-xs text-slate-300">Overcapacity</div>
              </div>
              <div className="bg-black/60 backdrop-blur border border-amber-500/40 rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 text-center">
                <div className="text-lg sm:text-2xl font-black text-amber-400">-<CountUp end={50} suffix="%" /></div>
                <div className="text-[10px] sm:text-xs text-slate-300">Ritase</div>
              </div>
              <div className="bg-black/60 backdrop-blur border border-emerald-500/40 rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 text-center">
                <div className="text-lg sm:text-2xl font-black text-emerald-400"><CountUp end={3} /> Wadah</div>
                <div className="text-[10px] sm:text-xs text-slate-300">Solusi</div>
              </div>
            </div>

            <div className="reveal reveal-delay-4 flex flex-wrap gap-2.5 pt-2">
              <Link href="/scan-ai" className="group inline-flex items-center gap-2 bg-emerald-400 hover:bg-emerald-300 text-emerald-950 text-xs sm:text-sm font-black px-5 py-3 rounded-xl shadow-lg active:scale-95 transition">
                <Camera className="w-4 h-4 group-hover:rotate-6 transition" />
                Scan Foto Sampah
                <Sparkles className="w-3 h-3 opacity-60" />
              </Link>
              <Link href="/tiga-wadah" className="inline-flex items-center gap-1.5 bg-black/60 hover:bg-black/70 backdrop-blur border border-white/20 text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-xl transition">
                Panduan 3 Wadah <ArrowRight className="w-4 h-4 text-emerald-400" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pesan Kunci 4 */}
      <section className="py-8 sm:py-12 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 reveal">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 border border-emerald-300 px-3 py-1 rounded-full">
              <Zap className="w-3 h-3" /> Pesan Kunci
            </span>
            <h2 className="mt-2 text-xl sm:text-3xl font-black text-slate-900">4 Kenyataan Wajib Tahu</h2>
          </div>
          <div className="flex gap-3 sm:gap-4 overflow-x-auto snap-x snap-mandatory pb-4 no-scrollbar scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0">
            {[
              { n: '01', title: 'TPA Overload', desc: 'Overload, ritase ketat, bisa tutup total.', icon: AlertTriangle, grad: 'from-red-500 to-red-700' },
              { n: '02', title: 'TPS Meluap', desc: 'Campur = meluber, bau, drainase mampet.', icon: Trash2, grad: 'from-amber-500 to-orange-600' },
              { n: '03', title: 'Sumber Penyakit', desc: 'DBD, diare, ISPA dari lalat & asap.', icon: ShieldAlert, grad: 'from-orange-500 to-red-600' },
              { n: '04', title: 'Selesai di Rumah', desc: 'Tuntas di RW, jangan ke TPS.', icon: Heart, grad: 'from-emerald-500 to-teal-700' },
            ].map((c, i) => (
              <div key={c.n} className={`reveal ${i ? `reveal-delay-${i}` : ''} shrink-0 snap-start w-[72%] sm:w-[260px] bg-white rounded-2xl border border-slate-200 p-4 shadow-sm hover:shadow-md transition duration-300`}>
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br ${c.grad} text-white flex items-center justify-center`}>
                  <c.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="mt-3">
                  <div className="text-[10px] font-black text-slate-400">{c.n}</div>
                  <div className="text-sm font-black text-slate-900 leading-tight">{c.title}</div>
                  <div className="text-xs text-slate-600 leading-snug mt-1">{c.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brosur - Kuncinya Satu */}
      <section className="py-8 sm:py-12 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-red-600 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-emerald-600 rounded-full blur-[80px]" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="reveal bg-white text-slate-900 rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-r from-red-700 to-red-600 text-white px-4 sm:px-8 py-5 text-center">
              <div className="inline-flex items-center gap-2 bg-white text-red-700 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                Poster Edukasi Warga
              </div>
              <h2 className="mt-2 text-xl sm:text-3xl font-black leading-tight">DARURAT SAMPAH! TPA SARIMUKTI SUDAH PENUH!</h2>
              <p className="mt-1 text-xs sm:text-sm font-semibold text-red-100">Sampah Beres di Rumah Sendiri, Lingkungan Bersih, Keluarga Sehat</p>
            </div>

            <div className="px-4 sm:px-8 py-6 space-y-5">
              <div className="text-center max-w-2xl mx-auto reveal">
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                  Jika tidak memilah: <b>TPS meluap</b> • <b>bau busuk</b> • <b>sarang penyakit</b>
                </p>
                <div className="mt-3 grid grid-cols-3 gap-2 text-[11px] sm:text-xs">
                  <div className="bg-red-50 border border-red-200 rounded-xl p-2.5 text-red-800 font-semibold">TPS Meluber ke Jalan</div>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-2.5 text-amber-800 font-semibold">Bau & Drainase Mampet</div>
                  <div className="bg-orange-50 border border-orange-200 rounded-xl p-2.5 text-orange-800 font-semibold">DBD • Diare • ISPA</div>
                </div>
              </div>

              <div className="reveal bg-emerald-600 text-white rounded-xl p-3 sm:p-4 text-center">
                <div className="text-xs sm:text-sm font-black uppercase tracking-wider">Kuncinya Satu: Kelola di Rumah, Selesaikan di Tingkat RW</div>
                <div className="text-[11px] sm:text-xs text-emerald-100 mt-1">Cukup sediakan 3 wadah sederhana di rumah:</div>
              </div>

              <div className="reveal flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 no-scrollbar scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0">
                {WADAH_DETAIL.map((col, idx) => (
                  <div key={col.title} className={`${col.light} shrink-0 snap-start w-[86%] sm:w-[340px] rounded-2xl border ${col.border} overflow-hidden ${idx ? `reveal-delay-${idx}` : ''}`}>
                    <div className={`${col.color} text-white p-3 text-center`}>
                      <div className="text-sm font-black">{col.title}</div>
                      <div className="text-[11px] opacity-90">{col.sub}</div>
                    </div>
                    <div className="relative h-28 w-full">
                      <Image src={col.image} alt={col.title} fill className="object-cover" unoptimized />
                    </div>
                    <div className="p-3 grid grid-cols-2 gap-2">
                      {col.items.map((it) => (
                        <div key={it.name} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                          <div className="relative h-16 w-full">
                            <Image src={it.img} alt={it.name} fill className="object-cover" unoptimized />
                          </div>
                          <div className="p-1.5">
                            <div className="text-[10px] font-bold leading-tight line-clamp-2">{it.name}</div>
                            <div className="text-[9px] text-emerald-700 font-semibold">{it.note}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <p className="reveal text-center text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-xl px-3 py-2">
                Pilah dari dapur, residu sedikit, lingkungan sehat selamanya — Kelurahan Lebak Gede Bersih!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigasi Cepat — Button saja, tanpa gambar besar */}
      <section className="py-8 sm:py-12 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6 reveal">
            <span className="text-[11px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 border border-emerald-300 px-3 py-1 rounded-full">Jelajahi Menu</span>
            <h2 className="mt-2 text-xl sm:text-3xl font-black text-slate-900">Pilih Informasi Lengkap</h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">Tap tombol untuk buka halaman edukasi sesuai kebutuhan.</p>
          </div>

          <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-4 no-scrollbar scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0">
            {QUICK_NAV.map((item, idx) => (
              <Link key={item.href} href={item.href} className={`reveal ${idx ? `reveal-delay-${idx % 3}` : ''} shrink-0 snap-start w-[46%] sm:w-[180px] group ${item.bg} border ${item.border} rounded-2xl p-4 hover:shadow-md transition duration-300 flex flex-col gap-3`}>
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className={`text-sm font-black ${item.text} leading-tight`}>{item.title}</div>
                  <div className="text-xs text-slate-600">{item.desc}</div>
                </div>
                <div className={`inline-flex items-center gap-1 text-xs font-bold ${item.text}`}>
                  Buka <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition" />
                </div>
              </Link>
            ))}
          </div>

          <div className="reveal flex flex-wrap justify-center gap-2.5 mt-6">
            <Link href="/scan-ai" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-3 rounded-xl text-sm transition hover:scale-105">
              <Camera className="w-4 h-4" /> Scan Foto Sampah
            </Link>
            <Link href="/katalog" className="inline-flex items-center gap-2 bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-bold px-5 py-3 rounded-xl text-sm transition">
              <BookOpen className="w-4 h-4" /> Lihat Katalog
            </Link>
          </div>
        </div>
      </section>

      {/* Penutup */}
      <section className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-900 text-white py-10 sm:py-14 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-48 h-48 bg-white rounded-full blur-[60px] animate-float" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-4 reveal">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 px-3 py-1.5 rounded-full text-xs font-bold">
            <Users className="w-4 h-4 text-emerald-300" /> KKN UNIKOM • RW 04 • 07 • 14
          </div>
          <h2 className="text-xl sm:text-3xl font-black leading-tight">
            Lebak Gede <span className="text-emerald-300">Bersih & Bebas Sampah Liar!</span>
          </h2>
          <p className="text-emerald-100/90 text-xs sm:text-sm max-w-2xl mx-auto">
            Mulai dari dapur, selesaikan di RW, jaga keluarga sehat. Setiap wadah tepat — selangkah lebih dekat ke Lebak Gede asri.
          </p>
          <div className="flex flex-wrap justify-center gap-2 pt-1">
            <span className="bg-white text-emerald-900 font-black px-3 py-1.5 rounded-lg text-xs">RW 04 Kebun SAE</span>
            <span className="bg-emerald-400 text-emerald-950 font-black px-3 py-1.5 rounded-lg text-xs">RW 07 Maggot BSF</span>
            <span className="bg-white/10 border border-white/20 text-white font-black px-3 py-1.5 rounded-lg text-xs">RW 14 Bank Sampah</span>
          </div>
          <p className="text-[11px] text-emerald-300/70 pt-1">Sinergi Mahasiswa KKN UNIKOM, Pengurus RW, dan Tim Gajah</p>
        </div>
      </section>
    </main>
  );
}
