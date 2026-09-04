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
  Flame,
  ChevronRight,
  Bug,
  Leaf,
  Droplets,
  Trash2,
  Heart,
  HandHeart,
  Sprout,
  PackageCheck,
  Trash,
  Sparkles,
  ChevronUp,
  Zap,
  Users,
  MapPin,
  Clock3,
  ShoppingBag,
  Repeat2,
  Layers,
  BookOpen,
  Phone,
  CheckCircle2,
  XCircle,
  ArrowUp,
  Play,
} from 'lucide-react';

/* ============ Helpers: Reveal on Scroll & Counter ============ */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('active');
          }
        });
      },
      { threshold: 0.12 }
    );
    const reveals = el.querySelectorAll('.reveal');
    reveals.forEach((r) => obs.observe(r));
    return () => obs.disconnect();
  }, []);
  return ref;
}

function CountUp({ end, suffix = '', duration = 1600 }: { end: number; suffix?: string; duration?: number }) {
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
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => {
      obs.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [end, duration]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

const INFO_PAGES = [
  {
    title: 'Krisis TPA Sarimukti',
    desc: 'Fakta gunungan overload 1000% & ritase dibatasi ketat.',
    href: '/krisis-tpa',
    badge: 'Darurat Wilayah',
    badgeColor: 'bg-red-600 text-white',
    image: 'https://www.infobdg.com/v2/wp-content/uploads/2024/06/istockphoto-1424551739-612x612-1.jpg',
    btnText: 'Buka Halaman Krisis TPA',
  },
  {
    title: 'Bahaya Penyakit & TPS',
    desc: 'DBD, Diare, ISPA dari tumpukan sampah campur.',
    href: '/bahaya-penyakit',
    badge: 'Kesehatan Warga',
    badgeColor: 'bg-amber-500 text-slate-950',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXy0egh9hclMbqVT9hw-B3dNtvPw5ys_za3qTJzSdgjw&s=10',
    btnText: 'Pelajari Bahaya',
  },
  {
    title: 'Panduan 3 Wadah Praktis',
    desc: 'Hijau Organik • Biru Daur Ulang • Merah Residu.',
    href: '/tiga-wadah',
    badge: 'Panduan Utama',
    badgeColor: 'bg-emerald-500 text-slate-950',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&auto=format&fit=crop&q=80',
    btnText: 'Buka Panduan 3 Wadah',
  },
  {
    title: 'Scan Foto AI',
    desc: 'Kamera HP klasifikasi otomatis Organik/Bukan.',
    href: '/scan-ai',
    badge: 'Fitur Pintar AI',
    badgeColor: 'bg-emerald-400 text-emerald-950',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80',
    btnText: 'Scan Kamera Sekarang',
  },
  {
    title: 'Katalog 18 Jenis Sampah',
    desc: 'Foto lengkap dapur, kardus, botol, pampers.',
    href: '/katalog',
    badge: '18+ Foto Barang',
    badgeColor: 'bg-blue-600 text-white',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&auto=format&fit=crop&q=80',
    btnText: 'Buka Katalog Foto',
  },
  {
    title: 'Langkah Aksi 8R di Rumah',
    desc: 'Rethink s/d Rot: tolak kresek, pakai ulang, repair, & olah jadi pakan ayam/lele.',
    href: '/aksi-3r',
    badge: 'Aksi 8R Baru',
    badgeColor: 'bg-teal-500 text-slate-950',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&auto=format&fit=crop&q=80',
    btnText: 'Pelajari Solusi 8R',
  },
];

export default function Home() {
  const revealRef = useReveal();
  const [parallaxY, setParallaxY] = useState(0);
  useEffect(() => {
    const onScroll = () => setParallaxY(window.scrollY * 0.12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main ref={revealRef} className="space-y-0 pb-0 overflow-x-hidden">
      {/* ============ MARQUEE RUNNING ============ */}
      <div className="relative bg-red-700 text-white overflow-hidden border-y-2 border-red-800 py-2">
        <div className="animate-marquee whitespace-nowrap flex gap-8 text-xs font-black uppercase tracking-wider">
          <span className="flex items-center gap-8">
            <span>🚨 DARURAT TPA SARIMUKTI OVERLOAD 1000% • RITASE DIBATASI KETAT • SEWAKTU-WAKTU DITUTUP TOTAL •</span>
            <span>🏠 SAMPAH SELESAI DI SUMBER — PILAH DARI DAPUR • JANGAN BUANG CAMPUR KE TPS •</span>
            <span>💚 3 WADAH PRAKTIS: ORGANIK • ANORGANIK • RESIDU — WARGA LEBAK GEDE MANDIRI •</span>
            <span>🚨 DARURAT TPA SARIMUKTI OVERLOAD 1000% • RITASE DIBATASI KETAT • SEWAKTU-WAKTU DITUTUP TOTAL •</span>
            <span>🏠 SAMPAH SELESAI DI SUMBER — PILAH DARI DAPUR • JANGAN BUANG CAMPUR KE TPS •</span>
            <span>💚 3 WADAH PRAKTIS: ORGANIK • ANORGANIK • RESIDU — WARGA LEBAK GEDE MANDIRI •</span>
          </span>
        </div>
      </div>

      {/* ============ HERO WITH PARALLAX + SWIPE UP ============ */}
      <section className="relative min-h-[620px] sm:min-h-[700px] flex items-center justify-center overflow-hidden bg-slate-950 border-b border-emerald-900">
        <div
          className="absolute inset-0 parallax-slow"
          style={{ transform: `translateY(${parallaxY}px) scale(1.08)` }}
        >
          <Image
            src="https://www.infobdg.com/v2/wp-content/uploads/2024/06/istockphoto-1424551739-612x612-1.jpg"
            alt="TPA Sarimukti overload"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950/40" />
        {/* floating gradient orbs */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-float-slow pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-red-500/15 rounded-full blur-3xl animate-float pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 w-full">
          <div className="max-w-3xl space-y-5">
            <div className="flex flex-wrap items-center gap-2 reveal">
              <span className="inline-flex items-center gap-1.5 bg-red-600 text-white text-[11px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-lg border border-red-400 animate-pulse-glow">
                <AlertTriangle className="w-3.5 h-3.5 animate-wiggle" />
                Darurat Sarimukti Overload 1000%
              </span>
              <span className="text-xs text-emerald-300 font-semibold bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-800">
                KKN UNIKOM 2026 • Lebak Gede Coblong
              </span>
            </div>

            <h1 className="reveal reveal-delay-1 text-3xl sm:text-5xl md:text-6xl font-black text-white leading-[0.95] drop-shadow-md">
              Gunungan Sampah <span className="text-red-500">Meluap,</span>
              <span className="block bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent animate-gradient">Saatnya Kita Bertindak.</span>
            </h1>

            <p className="reveal reveal-delay-2 text-slate-200 text-sm sm:text-lg leading-relaxed max-w-2xl">
              Kapasitas TPA Sarimukti kritis, ritase dipotong ketat, sewaktu-waktu <b className="text-white">dapat ditutup total</b>. Jika tidak memilah dari dapur, sampah akan menumpuk di depan pintu rumah kita sendiri.
            </p>

            {/* Stats with CountUp */}
            <div className="reveal reveal-delay-3 grid grid-cols-3 gap-3 pt-2 max-w-lg">
              <div className="bg-black/60 backdrop-blur-md border border-red-500/50 rounded-2xl p-3.5 text-center shadow-lg hover:scale-105 transition duration-300">
                <div className="text-2xl sm:text-3xl font-black text-red-400">
                  <CountUp end={1000} suffix="%" />
                </div>
                <div className="text-[11px] sm:text-xs text-slate-300 font-medium">Overcapacity TPA</div>
              </div>
              <div className="bg-black/60 backdrop-blur-md border border-amber-500/50 rounded-2xl p-3.5 text-center shadow-lg hover:scale-105 transition duration-300 delay-100">
                <div className="text-2xl sm:text-3xl font-black text-amber-400">
                  -<CountUp end={50} suffix="%" />
                </div>
                <div className="text-[11px] sm:text-xs text-slate-300 font-medium">Ritase Angkut TPS</div>
              </div>
              <div className="bg-black/60 backdrop-blur-md border border-emerald-500/50 rounded-2xl p-3.5 text-center shadow-lg hover:scale-105 transition duration-300 delay-200">
                <div className="text-2xl sm:text-3xl font-black text-emerald-400">
                  <CountUp end={3} /> Wadah
                </div>
                <div className="text-[11px] sm:text-xs text-slate-300 font-medium">Solusi Mandiri</div>
              </div>
            </div>

            <div className="reveal reveal-delay-4 flex flex-wrap gap-3 pt-4">
              <Link
                href="/scan-ai"
                className="group inline-flex items-center gap-2 bg-emerald-400 hover:bg-emerald-300 text-emerald-950 text-sm font-black px-6 py-3.5 rounded-xl shadow-xl transition active:scale-95 animate-pulse-glow"
              >
                <Camera className="w-5 h-5 group-hover:rotate-12 transition" />
                <span>Scan Foto Sampah (Kamera AI)</span>
                <Sparkles className="w-4 h-4 opacity-60 group-hover:opacity-100 transition" />
              </Link>
              <Link
                href="/tiga-wadah"
                className="inline-flex items-center gap-2 bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white text-sm font-bold px-6 py-3.5 rounded-xl transition hover:scale-105"
              >
                <span>Pelajari 3 Wadah</span>
                <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition" />
              </Link>
            </div>
          </div>
        </div>

        {/* SWIPE UP INDICATOR */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/80 bg-black/40 backdrop-blur px-3 py-1 rounded-full border border-white/10">
            Swipe Up
          </span>
          <div className="flex flex-col items-center gap-0">
            <ChevronUp className="w-5 h-5 text-white animate-swipe-bounce" />
            <ChevronUp className="w-5 h-5 text-white/60 animate-swipe-bounce" style={{ animationDelay: '0.2s' }} />
            <ChevronUp className="w-4 h-4 text-white/30 animate-swipe-bounce" style={{ animationDelay: '0.4s' }} />
          </div>
          <div className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center pt-1.5 bg-black/20 backdrop-blur">
            <div className="w-1.5 h-3 bg-white rounded-full animate-swipe-bounce" />
          </div>
        </div>
      </section>

      {/* ============ CORE MESSAGE 4 PESAN KUNCI ============ */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.08),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3 reveal">
            <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 border border-emerald-300 px-4 py-1.5 rounded-full">
              <Zap className="w-3.5 h-3.5" /> Pesan Kunci Utama
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900">
              4 Kenyataan yang Wajib Warga Tahu
            </h2>
            <p className="text-slate-600 text-sm">Tanpa pemilahan, lingkungan kita terancam setiap hari.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                n: '01',
                title: 'Darurat TPA Sarimukti',
                desc: 'Overcapacity, ritase sangat ketat, sewaktu-waktu ditutup total.',
                icon: AlertTriangle,
                color: 'from-red-500 to-red-700',
                border: 'border-red-200 hover:border-red-400',
                delay: 'delay-0',
              },
              {
                n: '02',
                title: 'Cegah TPS Meluap',
                desc: 'Sampah campur di TPS pinggir jalan meluap, bau busuk, drainase mampet.',
                icon: Trash2,
                color: 'from-amber-500 to-orange-600',
                border: 'border-amber-200 hover:border-amber-400',
                delay: 'reveal-delay-1',
              },
              {
                n: '03',
                title: 'Sumber Penyakit',
                desc: 'Bibit DBD, Diare, ISPA dari lalat, nyamuk & asap bakaran liar.',
                icon: ShieldAlert,
                color: 'from-orange-500 to-red-600',
                border: 'border-orange-200 hover:border-orange-400',
                delay: 'reveal-delay-2',
              },
              {
                n: '04',
                title: 'Selesai di Rumah',
                desc: 'Masalah tuntas di tingkat rumah tangga & lingkungan RW. Jangan buang ke TPS!',
                icon: Heart,
                color: 'from-emerald-500 to-teal-700',
                border: 'border-emerald-200 hover:border-emerald-400',
                delay: 'reveal-delay-3',
              },
            ].map((c) => (
              <div
                key={c.n}
                className={`reveal ${c.delay} group relative bg-white rounded-3xl border-2 ${c.border} p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden`}
              >
                <div className={`absolute -right-6 -top-6 w-24 h-24 bg-gradient-to-br ${c.color} opacity-10 rounded-full group-hover:scale-125 transition duration-700`} />
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${c.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition duration-500`}>
                  <c.icon className="w-6 h-6" />
                </div>
                <div className="mt-4 space-y-1.5">
                  <div className="text-xs font-black text-slate-400 tracking-widest">0{c.n.slice(1)}</div>
                  <h3 className="text-base font-black text-slate-900 leading-tight">{c.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{c.desc}</p>
                </div>
                <div className="mt-4 flex items-center gap-1 text-xs font-bold opacity-0 group-hover:opacity-100 transition">
                  <span className="text-emerald-700">Pelajari</span>
                  <ChevronRight className="w-3 h-3 text-emerald-600 group-hover:translate-x-1 transition" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BROSUR / POSTER UTAMA ============ */}
      <section className="py-10 sm:py-16 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="reveal bg-gradient-to-br from-white to-slate-100 rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200">
            {/* Header brosur */}
            <div className="bg-gradient-to-r from-red-700 via-red-600 to-orange-600 text-white px-6 sm:px-10 py-6 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.08)_50%,transparent_75%)] bg-[length:200%_100%] animate-shimmer" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 bg-white text-red-700 text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow">
                  🚨 Poster Edukasi Warga • Sebarkan ke Grup RW
                </div>
                <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-black leading-tight">DARURAT SAMPAH! TPA SARIMUKTI SUDAH PENUH!</h2>
                <p className="mt-2 text-sm sm:text-base font-semibold text-red-100">&quot;Sampah Beres di Rumah Sendiri, Lingkungan Bersih, Keluarga Sehat&quot;</p>
              </div>
            </div>

            <div className="px-6 sm:px-10 py-8 space-y-8">
              <div className="text-center max-w-3xl mx-auto reveal">
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Wargi Lebak Gede yang peduli lingkungan, setiap hari ribuan ton sampah menumpuk di Bandung Raya. <b>Jika kita tidak memilah:</b>
                </p>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                  {[
                    { t: 'TPS RW cepat meluap', d: 'Sampah meluber ke jalan', c: 'bg-red-50 border-red-200 text-red-800', i: Trash2 },
                    { t: 'Bau busuk menyengat', d: 'Mencemari udara & drainase', c: 'bg-amber-50 border-amber-200 text-amber-800', i: Flame },
                    { t: 'Sarang penyakit', d: 'DBD, diare, ISPA keluarga', c: 'bg-orange-50 border-orange-200 text-orange-800', i: Bug },
                  ].map((x) => (
                    <div key={x.t} className={`reveal flex items-start gap-3 p-3.5 rounded-2xl border ${x.c} hover:scale-[1.02] transition`}>
                      <x.i className="w-5 h-5 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-xs font-black leading-tight">{x.t}</div>
                        <div className="text-[11px] opacity-80">{x.d}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="reveal bg-emerald-600 text-white rounded-2xl p-5 text-center shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 animate-gradient opacity-90" />
                <p className="relative text-sm sm:text-base font-black uppercase tracking-wider">🔑 Kuncinya Satu: Kelola di Rumah, Selesaikan di Tingkat RW!</p>
                <p className="relative text-xs sm:text-sm text-emerald-100 mt-1">Cukup sediakan <b>3 wadah/kantong sederhana di rumah:</b></p>
              </div>

              {/* Tabel 3 wadah brosur */}
              <div className="reveal overflow-hidden rounded-2xl border-2 border-slate-200">
                <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x-2 divide-slate-200">
                  {[
                    {
                      title: '1. Organik',
                      sub: 'Sampah Basah / Mudah Membusuk',
                      color: 'bg-emerald-600',
                      light: 'bg-emerald-50',
                      items: ['Sisa nasi, sayur, sisa lauk pauk', 'Kulit buah & potongan sayuran mentah', 'Daun kering halaman & sisa bunga', 'Cangkang telur, tulang ikan & duri'],
                    },
                    {
                      title: '2. Anorganik',
                      sub: 'Sampah Kering / Bernilai Daur Ulang',
                      color: 'bg-blue-600',
                      light: 'bg-blue-50',
                      items: ['Botol & gelas plastik bening (PET/PP)', 'Kardus, karton, buku & kertas bekas', 'Kaleng minuman, seng & besi bekas', 'Minyak jelantah (botol tertutup)'],
                    },
                    {
                      title: '3. Residu',
                      sub: 'Sampah Kotor / Sulit Diolah',
                      color: 'bg-red-600',
                      light: 'bg-red-50',
                      items: ['Popok bayi & pembalut', 'Tisu bekas & masker medis', 'Kantong kresek kotor & sachet', 'Styrofoam & puntung rokok'],
                    },
                  ].map((col) => (
                    <div key={col.title} className={`${col.light} p-5 space-y-3`}>
                      <div className={`${col.color} text-white rounded-xl p-3 text-center shadow`}>
                        <div className="text-sm font-black">{col.title}</div>
                        <div className="text-[11px] font-semibold opacity-90">{col.sub}</div>
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {col.items.map((it) => (
                          <li key={it} className="flex items-start gap-2 bg-white p-2 rounded-lg border border-slate-200 shadow-sm hover:shadow transition">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <p className="reveal text-center text-sm font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3 italic">
                &quot;Pilah sampah dari dapur, buang residu sedikit, namun menjaga kesehatan lingkungan selamanya.&quot; — Kelurahan Lebak Gede Bersih & Bebas Sampah Liar!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SOLUSI TUNTAS DI RW ============ */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-white to-emerald-50/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 reveal">
            <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 border border-emerald-300 px-4 py-1.5 rounded-full">
              <MapPin className="w-3.5 h-3.5" /> Solusi Tuntas di RW
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-black text-slate-900">Sampah Tuntas Tanpa ke TPA</h2>
            <p className="text-slate-600 text-sm mt-2">Setiap wadah punya jalur penyaluran jelas di Le bak Gede — tidak lagi campur ke TPS pinggir jalan.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                n: '01',
                title: 'ORGANIK',
                sub: 'Diolah jadi berkah',
                icon: Leaf,
                color: 'from-emerald-500 to-emerald-700',
                border: 'border-emerald-400',
                bg: 'bg-emerald-50',
                points: ['Daun kering halaman & sisa bunga', 'Cangkang telur, tulang ikan & duri', 'Sisa nasi & kulit buah'],
                solusi: 'Pupuk kompos Kebun SAE (RW 4) dan pakan larva Maggot BSF (RW 7).',
                cta: 'Antar ke Kebun SAE / Maggot',
              },
              {
                n: '02',
                title: 'ANORGANIK',
                sub: 'Bernilai ekonomi',
                icon: Recycle,
                color: 'from-blue-500 to-blue-700',
                border: 'border-blue-400',
                bg: 'bg-blue-50',
                points: ['Kaleng minuman, seng & besi bekas', 'Minyak jelantah (botol tertutup)', 'Botol PET, kardus, kertas'],
                solusi: 'Kering & bersih → Dropbox RW / Bank Sampah (jadi tabungan).',
                cta: 'Setor ke Bank Sampah RW 14',
              },
              {
                n: '03',
                title: 'RESIDU',
                sub: 'Hanya residu ke TPA',
                icon: Trash,
                color: 'from-red-500 to-red-700',
                border: 'border-red-400',
                bg: 'bg-red-50',
                points: ['Kantong kresek kotor & sachet', 'Styrofoam & puntung rokok', 'Popok, pembalut, tisu bekas'],
                solusi: 'Bungkus rapi kantong tertutup → diangkut petugas ke pembuangan akhir.',
                cta: 'Bungkus Rapat & Ikat',
              },
            ].map((card) => (
              <div
                key={card.title}
                className={`reveal group relative bg-white rounded-[1.8rem] border-2 ${card.border} overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col`}
              >
                <div className={`h-2 bg-gradient-to-r ${card.color}`} />
                <div className="p-6 pb-4 flex-1 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${card.color} text-white flex items-center justify-center shadow group-hover:scale-110 group-hover:rotate-6 transition duration-500`}>
                      <card.icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-black tracking-widest text-slate-400">{card.n}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900">{card.title}</h3>
                    <p className="text-xs font-semibold text-slate-500">{card.sub}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs font-black text-slate-700 uppercase tracking-wide">Contoh:</div>
                    <ul className="space-y-1.5">
                      {card.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-xs text-slate-600 bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5">
                          <span className="text-emerald-600 mt-0.5">•</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`${card.bg} border border-slate-200 rounded-2xl p-3.5`}>
                    <div className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                      <Sprout className="w-3.5 h-3.5 text-emerald-700" />
                      Solusi:
                    </div>
                    <p className="text-xs text-slate-700 mt-1 leading-relaxed">{card.solusi}</p>
                  </div>
                </div>
                <div className={`mx-6 mb-6 ${card.bg} border border-slate-200 rounded-xl px-3 py-2.5 text-center`}>
                  <div className="text-xs font-black text-slate-800 flex items-center justify-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    {card.cta}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TIGA LANGKAH MUDAH 3R ============ */}
      <section className="py-14 sm:py-20 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.18),transparent_60%)]" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-float" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-10 reveal">
            <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-300 bg-emerald-950 border border-emerald-800 px-4 py-1.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5" /> Prinsip 3R — Setiap Hari
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-black">Tiga Langkah Mudah Setiap Hari</h2>
            <p className="text-slate-400 text-sm mt-2">Kecil di rumah, besar dampaknya untuk lingkungan.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                k: '01',
                title: 'REDUCE',
                sub: 'Kurangi',
                desc: 'Habiskan makanan di piring, bawa kantong belanja dari rumah.',
                icon: ShoppingBag,
                grad: 'from-amber-400 to-orange-500',
                bg: 'bg-amber-500',
                delay: '',
              },
              {
                k: '02',
                title: 'REUSE',
                sub: 'Gunakan Kembali',
                desc: 'Manfaatkan botol bekas jadi pot tanaman / wadah serbaguna.',
                icon: Repeat2,
                grad: 'from-blue-400 to-cyan-500',
                bg: 'bg-blue-500',
                delay: 'reveal-delay-1',
              },
              {
                k: '03',
                title: 'RECYCLE',
                sub: 'Daur Ulang',
                desc: 'Kumpulkan botol/kardus dan masukkan ke Dropbox RW.',
                icon: Recycle,
                grad: 'from-emerald-400 to-teal-500',
                bg: 'bg-emerald-500',
                delay: 'reveal-delay-2',
              },
            ].map((r) => (
              <div
                key={r.title}
                className={`reveal ${r.delay} group relative bg-white/5 backdrop-blur border border-white/10 rounded-[1.8rem] p-6 sm:p-7 hover:bg-white hover:text-slate-900 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden`}
              >
                <div className={`absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br ${r.grad} opacity-20 rounded-full blur-2xl group-hover:scale-125 transition duration-700`} />
                <div className="flex items-center justify-between relative">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${r.grad} text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition duration-500`}>
                    <r.icon className="w-7 h-7" />
                  </div>
                  <span className="text-4xl font-black text-white/10 group-hover:text-slate-100 transition">{r.k}</span>
                </div>
                <div className="mt-5 space-y-1 relative">
                  <h3 className="text-xl font-black tracking-tight">{r.title}</h3>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-70 group-hover:text-emerald-700">{r.sub}</p>
                  <p className="text-sm leading-relaxed opacity-80 group-hover:text-slate-600 pt-2">{r.desc}</p>
                </div>
                <div className="mt-5 flex items-center gap-2 text-xs font-black group-hover:text-emerald-600 transition">
                  <span>Mulai Hari Ini</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </div>
              </div>
            ))}
          </div>

          <div className="reveal mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/aksi-3r" className="inline-flex items-center gap-2 bg-emerald-400 hover:bg-emerald-300 text-emerald-950 font-black px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition">
              <Leaf className="w-4 h-4" /> Lihat Aksi 3R Lengkap
            </Link>
            <Link href="/scan-ai" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold px-6 py-3 rounded-xl backdrop-blur transition hover:scale-105">
              <Camera className="w-4 h-4" /> Coba Scan AI Sekarang
            </Link>
          </div>
        </div>
      </section>

      {/* ============ TPS MELUAP STORY ============ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
        <div className="reveal relative rounded-[2rem] overflow-hidden min-h-[480px] sm:min-h-[520px] border-2 border-amber-400 shadow-2xl flex items-end group">
          <Image
            src="https://asset.kompas.com/crops/ke2DjUCsJaN0vuRcv-b1Jbve5nw=/0x0:0x0/1200x800/data/photo/2026/03/11/69b0f65b09442.jpg"
            alt="TPS meluap"
            fill
            className="object-cover object-center group-hover:scale-105 transition duration-[1.5s]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />
          <div className="absolute top-6 left-6 right-6 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 bg-amber-500 text-slate-950 text-[11px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow animate-pulse">
              <Trash2 className="w-4 h-4" /> Fakta Lapangan
            </span>
            <span className="bg-black/60 backdrop-blur text-white text-xs px-3 py-1.5 rounded-full border border-white/20">Ritase Terbatas • Pilah Dulu Baru Angkut</span>
          </div>
          <div className="relative z-10 p-6 sm:p-10 max-w-3xl space-y-4">
            <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">Ketika Sampah Dapur & Plastik Dicampur, TPS Meluber ke Jalan Raya.</h2>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Truk hanya bisa membawa sampah terpilah. Sampah basah + plastik campur dalam kresek tidak bisa disortir manual — tertahan berhari-hari, membusuk, meluber ke trotoar.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <div className="bg-black/60 backdrop-blur-md px-4 py-2.5 rounded-xl border border-amber-400/50 text-xs sm:text-sm text-amber-200 font-semibold flex items-center gap-2">
                ⚠️ Menumpuknya TPS bukan kurang armada, melainkan tidak dipilah di rumah!
              </div>
              <Link href="/tiga-wadah" className="inline-flex items-center gap-2 bg-emerald-400 hover:bg-emerald-300 text-emerald-950 text-xs sm:text-sm font-black px-5 py-2.5 rounded-xl shadow-md transition hover:scale-105">
                Lihat Panduan 3 Wadah <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ DAMPAK 3 KARTU ============ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2 reveal">
          <span className="text-xs font-black uppercase tracking-wider text-red-700 bg-red-100 border border-red-200 px-3.5 py-1 rounded-full inline-block">Dampak Langsung ke Keluarga</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900">Akibat Sampah Dibiarkan Menumpuk</h2>
          <p className="text-slate-600 text-sm sm:text-base">Bukan sekadar kotor — ini bencana kesehatan bagi anak & lansia:</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              badge: '1. Diare & Muntaber',
              icon: Bug,
              title: 'Lalat Hijau Bawa E. coli',
              desc: 'Sisa lauk membusuk undang lalat hijau. Kuman menempel di kaki lalat terbawa ke meja makan.',
              img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXy0egh9hclMbqVT9hw-B3dNtvPw5ys_za3qTJzSdgjw&s=10',
              border: 'border-amber-500',
              badgeC: 'bg-amber-500 text-slate-950',
              link: 'Bahaya Lalat Hijau',
              color: 'text-amber-300',
            },
            {
              badge: '2. Demam Berdarah (DBD)',
              icon: ShieldAlert,
              title: 'Sarang Jentik Aedes',
              desc: 'Gelas plastik & kaleng genang air hujan jadi sarang Aedes aegypti pembawa DBD.',
              img: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=700&auto=format&fit=crop&q=80',
              border: 'border-red-500',
              badgeC: 'bg-red-600 text-white',
              link: 'Bahaya Nyamuk DBD',
              color: 'text-red-300',
            },
            {
              badge: '3. Sesak Napas & ISPA',
              icon: Flame,
              title: 'Racun Asap Bakaran Liar',
              desc: 'Dioksin karsinogenik dari plastik dibakar merusak paru anak, bumil & lansia.',
              img: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=700&auto=format&fit=crop&q=80',
              border: 'border-cyan-500',
              badgeC: 'bg-cyan-600 text-white',
              link: 'Bahaya Asap Racun',
              color: 'text-cyan-300',
            },
          ].map((k, i) => (
            <div
              key={k.title}
              className={`reveal ${i === 1 ? 'reveal-delay-1' : i === 2 ? 'reveal-delay-2' : ''} relative rounded-3xl overflow-hidden min-h-[400px] sm:min-h-[430px] border-2 ${k.border} shadow-xl group flex flex-col justify-end p-6 hover:-translate-y-1 transition duration-500`}
            >
              <Image src={k.img} alt={k.title} fill className="object-cover object-center group-hover:scale-110 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />
              <div className="relative z-10 space-y-2">
                <span className={`inline-flex items-center gap-1.5 ${k.badgeC} text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider`}>
                  <k.icon className="w-3.5 h-3.5" />
                  {k.badge}
                </span>
                <h3 className="text-xl font-black text-white leading-snug">{k.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{k.desc}</p>
                <Link href="/bahaya-penyakit" className={`inline-flex items-center gap-1.5 text-xs font-black ${k.color} hover:text-white transition pt-1`}>
                  Pelajari {k.link} <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ GRID HALAMAN EDUKASI ============ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2 reveal">
          <span className="text-xs font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 border border-emerald-300 px-3.5 py-1 rounded-full inline-block">
            Jelajahi Lebih Dalam
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900">Pilih Halaman Informasi & Panduan</h2>
          <p className="text-slate-600 text-sm sm:text-base">Klik kartu poster untuk membuka halaman khusus sesuai kebutuhan Anda.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INFO_PAGES.map((item, idx) => (
            <Link
              key={item.href}
              href={item.href}
              className={`reveal ${idx % 3 === 1 ? 'reveal-delay-1' : idx % 3 === 2 ? 'reveal-delay-2' : ''} relative rounded-3xl overflow-hidden min-h-[320px] sm:min-h-[350px] border border-emerald-800/60 shadow-lg hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between p-5 bg-slate-950 hover:-translate-y-1.5 hover:border-emerald-500`}
            >
              <Image src={item.image} alt={item.title} fill className="object-cover object-center group-hover:scale-110 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30 group-hover:via-black/60 transition" />
              <div className="relative z-10 flex items-center justify-between">
                <span className={`text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-lg shadow-md ${item.badgeColor}`}>{item.badge}</span>
                <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-emerald-400 group-hover:text-slate-950 transition">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
                </span>
              </div>
              <div className="relative z-10 space-y-2">
                <h3 className="text-lg sm:text-xl font-black text-white group-hover:text-emerald-300 transition">{item.title}</h3>
                <p className="text-xs text-slate-200/90 leading-relaxed line-clamp-2">{item.desc}</p>
                <div className="pt-1 inline-flex items-center gap-1.5 text-xs font-black text-emerald-400 group-hover:text-emerald-300 transition">
                  <span>{item.btnText}</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
                </div>
              </div>
            </Link>
          ))}
          {/* Extra Solusi card */}
          <Link
            href="/posko-rw"
            className="reveal reveal-delay-3 relative rounded-3xl overflow-hidden min-h-[320px] border-2 border-emerald-400 shadow-lg hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between p-5 bg-gradient-to-br from-emerald-600 to-teal-700 hover:-translate-y-1.5"
          >
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/15 rounded-full blur-2xl group-hover:scale-125 transition duration-700" />
            <div className="relative z-10">
              <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-lg bg-white text-emerald-700 shadow">Solusi Wilayah</span>
            </div>
            <div className="relative z-10 space-y-2 text-white">
              <h3 className="text-xl font-black">Solusi: 3 GASLAH & Kontak</h3>
              <p className="text-xs text-emerald-100 leading-relaxed">3 Petugas GASLAH tiap RW + 1 nomor resmi hotline KKN UNIKOM untuk warga.</p>
              <div className="pt-2 inline-flex items-center gap-1.5 text-xs font-black text-white">
                <Phone className="w-4 h-4" /> Buka Halaman Solusi <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ============ SINERGI PENUTUP ============ */}
      <section className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-900 text-white py-14 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-[100px] animate-float" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-400 rounded-full blur-[100px] animate-float-slow" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-6 reveal">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold">
            <Users className="w-4 h-4 text-emerald-300" /> Sinergi KKN UNIKOM • Pengurus RW • Tim Gajah
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight">
            Kelurahan Lebak Gede <span className="text-emerald-300">Bersih & Bebas Sampah Liar!</span>
          </h2>
          <p className="text-emerald-100/90 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Mari wujudkan gerakan pilah sampah mandiri — mulai dari dapur, selesaikan di RW, jaga keluarga tetap sehat. Setiap wadah tepat, selangkah lebih dekat ke Lebak Gede asri.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <span className="bg-white text-emerald-900 font-black px-4 py-2.5 rounded-xl text-xs sm:text-sm shadow">RW 04 • Kebun SAE Kompos</span>
            <span className="bg-emerald-400 text-emerald-950 font-black px-4 py-2.5 rounded-xl text-xs sm:text-sm shadow">RW 07 • Maggot BSF</span>
            <span className="bg-white/10 backdrop-blur border border-white/20 text-white font-black px-4 py-2.5 rounded-xl text-xs sm:text-sm">RW 14 • Bank Sampah Berkah</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <Link href="/scan-ai" className="inline-flex items-center gap-2 bg-emerald-400 hover:bg-emerald-300 text-emerald-950 font-black px-7 py-3.5 rounded-xl shadow-xl hover:scale-105 transition active:scale-95">
              <Camera className="w-5 h-5" /> Mulai Pilah Sekarang
            </Link>
            <Link href="/katalog" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 text-white font-bold px-7 py-3.5 rounded-xl transition hover:scale-105">
              <BookOpen className="w-5 h-5" /> Lihat Katalog 18+ Jenis
            </Link>
          </div>
          <p className="text-[11px] text-emerald-300/70 font-medium pt-2 flex items-center justify-center gap-1.5">
            Dibuat dengan <Heart className="w-3 h-3 fill-red-400 text-red-400" /> oleh Mahasiswa KKN UNIKOM 2026 • #GerakanPilahSampahMandiri
          </p>
        </div>
      </section>

      {/* Floating Swipe Hint bottom-right for mobile scroll */}
      <div className="fixed bottom-20 right-4 sm:right-6 z-30 hidden md:flex flex-col items-center gap-1 bg-slate-900/80 backdrop-blur text-white px-3 py-3 rounded-2xl border border-white/10 shadow-xl">
        <span className="text-[9px] font-black uppercase tracking-widest opacity-70">Geser</span>
        <ArrowUp className="w-4 h-4 animate-swipe-bounce" />
        <span className="text-[9px] font-black uppercase tracking-widest opacity-70">Atas</span>
      </div>
    </main>
  );
}
