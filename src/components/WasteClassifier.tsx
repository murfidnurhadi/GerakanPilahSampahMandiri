'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import {
  Camera,
  Upload,
  RefreshCw,
  CheckCircle2,
  XCircle,
  Info,
  Sparkles,
  Leaf,
  Recycle,
  AlertTriangle,
  HelpCircle,
} from 'lucide-react';
import { classifyWasteImage, buildResult, ClassificationResult } from '@/lib/classifier';
import { WasteCategory } from '@/data/wasteData';

const PRESET_SAMPLES = [
  {
    name: 'Sisa Nasi & Sayuran',
    type: 'Organik',
    badgeColor: 'bg-emerald-600',
    url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&auto=format&fit=crop&q=80',
    icon: 'leaf',
  },
  {
    name: 'Kulit Buah & Jeruk',
    type: 'Organik',
    badgeColor: 'bg-emerald-600',
    url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80',
    icon: 'leaf',
  },
  {
    name: 'Botol Plastik PET',
    type: 'Anorganik',
    badgeColor: 'bg-blue-600',
    url: 'https://images.unsplash.com/photo-1528323273322-d81458248d40?w=600&auto=format&fit=crop&q=80',
    icon: 'recycle',
  },
  {
    name: 'Kemasan Sachet & Residu',
    type: 'Residu',
    badgeColor: 'bg-red-600',
    url: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?w=600&auto=format&fit=crop&q=80',
    icon: 'ban',
  },
];

export default function WasteClassifier() {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState<number>(0);
  const [result, setResult] = useState<ClassificationResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = sectionRef.current;
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

  const handleFile = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      setError('Mohon unggah file berupa gambar (JPG, PNG, WebP).');
      return;
    }

    setError(null);
    const reader = new FileReader();
    reader.onload = async (e) => {
      const dataUrl = e.target?.result as string;
      setImageSrc(dataUrl);
      await runClassification(dataUrl);
    };
    reader.readAsDataURL(file);
  };

  const runClassification = async (imageInput: string) => {
    setLoading(true);
    setProgress(20);
    setResult(null);

    try {
      const res = await classifyWasteImage(imageInput, (pct) => {
        setProgress(Math.max(20, pct));
      });
      setProgress(100);
      setResult(res);
    } catch (err) {
      console.error(err);
      setError('Terjadi kendala saat menganalisis gambar. Silakan gunakan katalog manual.');
    } finally {
      setLoading(false);
    }
  };

  const handlePresetClick = async (url: string) => {
    setImageSrc(url);
    setError(null);
    await runClassification(url);
  };

  const handleManualOverride = (targetCategory: WasteCategory) => {
    if (!result) return;
    const overrides: Record<WasteCategory, { name: string; en: string }> = {
      organik: {
        name: 'Sampah Makanan / Dapur Organik (Koreksi Pengguna)',
        en: 'Organic Food Waste (User Corrected)',
      },
      anorganik: {
        name: 'Barang Plastik / Logam / Kardus Daur Ulang (Koreksi Pengguna)',
        en: 'Recyclable Material (User Corrected)',
      },
      residu: {
        name: 'Sampah Residu / Sachet Kotor (Koreksi Pengguna)',
        en: 'Residual Waste (User Corrected)',
      },
      elektronik: {
        name: 'Sampah Elektronik / B3 (Koreksi Pengguna)',
        en: 'E-Waste B3 (User Corrected)',
      },
    };

    const info = overrides[targetCategory];
    const newRes = buildResult(targetCategory, info.name, info.en, 99, result.candidateScores);
    setResult(newRes);
  };

  const resetScanner = () => {
    setImageSrc(null);
    setResult(null);
    setError(null);
    setProgress(0);
  };

  return (
    <section ref={sectionRef} id="scan-ai-section" className="py-8 sm:py-12 md:py-16 max-w-5xl mx-auto px-4 relative overflow-hidden">
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-float-slow pointer-events-none" />
      
      {/* Header Pengenal 3 Kategori */}
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-3 reveal">
        <div className="inline-flex items-center gap-1.5 bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
          <span>Klasifikasi AI 3 Kategori + E-Waste: Organik • Anorganik • Residu • Elektronik</span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
          Cek Sampah: Organik, Anorganik, atau Residu?
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Ambil foto sampah atau unggah gambar. Model AI akan mengidentifikasi apakah sampah ini termasuk <strong>Organik (Wadah Hijau)</strong>, <strong>Anorganik (Wadah Biru)</strong>, atau <strong>Residu (Wadah Merah)</strong>.
        </p>
        {/* Disclaimer akurasi */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3.5 text-left flex gap-3">
          <div className="w-8 h-8 rounded-lg bg-amber-100 border border-amber-200 flex items-center justify-center shrink-0">
            <Info className="w-4 h-4 text-amber-700" />
          </div>
          <div className="text-xs leading-relaxed text-slate-700">
            <span className="font-bold text-amber-900">Batasan akurasi scanner:</span> AI hanya mengenali <b>kategori wadah kasar</b> (Hijau/Biru/Merah), bukan rincian bahan. Untuk piring campur seperti <b>nasi + bubuk mie + telur dadar</b>, AI tidak bisa membedakan bumbu/merk satu per satu — tetap masuk <b>Wadah Hijau (Organik)</b>. Pisahkan sachet/kresek bumbu ke Wadah Merah dan gunakan tombol koreksi di bawah hasil jika perlu.
          </div>
        </div>
      </div>

      {/* Kotak Scanner Utama */}
      <div className="reveal reveal-delay-1 bg-white rounded-3xl border border-slate-200 shadow-xl p-5 sm:p-8 hover:shadow-2xl transition duration-500">
        
        {/* Hidden Inputs */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          className="hidden"
          onChange={(e) => {
            if (e.target.files?.[0]) handleFile(e.target.files[0]);
          }}
        />
        <input
          type="file"
          accept="image/*"
          capture="environment"
          ref={cameraInputRef}
          className="hidden"
          onChange={(e) => {
            if (e.target.files?.[0]) handleFile(e.target.files[0]);
          }}
        />

        {/* State 1: Belum Memilih Gambar */}
        {!imageSrc && (
          <div className="space-y-6">
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                if (e.dataTransfer.files?.[0]) handleFile(e.dataTransfer.files[0]);
              }}
              className="border-2 border-dashed border-slate-300 hover:border-emerald-500 bg-slate-50 hover:bg-emerald-50/40 rounded-2xl p-8 sm:p-12 text-center transition flex flex-col items-center justify-center cursor-pointer"
              onClick={() => fileInputRef.current?.click()}
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4 shadow-sm">
                <Camera className="w-8 h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-800">
                Ambil Foto Sampah atau Pilih dari Galeri
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm mt-1 max-w-md">
                Arahkan kamera ke sisa makanan dapur, botol plastik, kardus, atau popok untuk mengetahui kategori wadah yang benar.
              </p>

              {/* Tombol Aksi Kamera & Unggah */}
              <div
                className="mt-6 flex flex-wrap gap-3 justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => cameraInputRef.current?.click()}
                  className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 active:scale-95 text-white text-sm font-bold px-6 py-3.5 rounded-xl shadow-md transition"
                >
                  <Camera className="w-4 h-4" />
                  <span>Buka Kamera HP</span>
                </button>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 text-sm font-semibold px-6 py-3.5 rounded-xl shadow-sm transition"
                >
                  <Upload className="w-4 h-4" />
                  <span>Pilih dari Galeri</span>
                </button>
              </div>
            </div>

            {/* Presets Contoh Gambar 3 Kategori */}
            <div className="pt-2">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                Atau Uji Contoh Sampah Nyata di Bawah Ini:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {PRESET_SAMPLES.map((sample) => (
                  <button
                    key={sample.name}
                    type="button"
                    onClick={() => handlePresetClick(sample.url)}
                    className="group relative rounded-2xl overflow-hidden border border-slate-200 hover:border-emerald-500 text-left transition shadow-sm hover:shadow-md bg-slate-50"
                  >
                    <div className="relative h-28 w-full bg-slate-200">
                      <Image
                        src={sample.url}
                        alt={sample.name}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-500"
                      />
                      <span
                        className={`absolute top-2 left-2 text-[10px] font-black uppercase px-2 py-0.5 rounded shadow ${sample.badgeColor} text-white`}
                      >
                        {sample.type}
                      </span>
                    </div>
                    <div className="p-2.5">
                      <div className="text-xs font-bold text-slate-800 truncate">{sample.name}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Petunjuk Foto yang Baik */}
            <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-4 text-xs text-slate-700 flex items-start gap-3">
              <HelpCircle className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-extrabold text-emerald-950 block mb-0.5">
                  Tips Mengambil Foto Sampah Agar Akurat:
                </span>
                <ul className="list-disc list-inside space-y-0.5 text-slate-600">
                  <li>Dekatkan kamera HP langsung ke objek sampah (jarak 20-30 cm).</li>
                  <li>Pastikan pencahayaan cukup terang dan gambar tidak buram.</li>
                  <li>Hindari latar belakang meja atau lantai yang terlalu ramai.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* State 2: Ada Foto yang Dianalisis */}
        {imageSrc && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              
              {/* Kolom Kiri: Pratinjau Foto */}
              <div className="md:col-span-5 space-y-3">
                <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden border-2 border-slate-300 bg-slate-950 shadow-inner">
                  <Image
                    src={imageSrc}
                    alt="Sampah yang dipindai"
                    fill
                    className="object-cover"
                  />
                  {loading && (
                    <div className="absolute inset-0 bg-black/75 backdrop-blur-sm flex flex-col items-center justify-center p-4 text-white text-center">
                      <RefreshCw className="w-9 h-9 animate-spin text-emerald-400 mb-2" />
                      <div className="text-sm font-bold">Menganalisis Kategori Sampah...</div>
                      <div className="text-xs text-slate-300 mt-1">
                        Memproses via Hugging Face Vision AI
                      </div>
                      <div className="w-40 bg-slate-700 rounded-full h-1.5 mt-3 overflow-hidden">
                        <div
                          className="bg-emerald-400 h-1.5 transition-all duration-300"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  onClick={resetScanner}
                  className="w-full py-2.5 px-3 rounded-xl border border-slate-300 hover:bg-slate-100 text-xs font-bold text-slate-700 transition flex items-center justify-center gap-1.5"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Foto Sampah Lainnya</span>
                </button>
              </div>

              {/* Kolom Kanan: Hasil 3 Kategori AI */}
              <div className="md:col-span-7">
                {loading && (
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center text-slate-500 space-y-2">
                    <p className="text-sm font-medium">
                      Model AI sedang memproses apakah objek ini termasuk <strong>Organik</strong>, <strong>Anorganik</strong>, atau <strong>Residu</strong>...
                    </p>
                  </div>
                )}

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-2xl p-4 text-xs sm:text-sm text-red-800 flex items-start gap-2.5">
                    <AlertTriangle className="w-5 h-5 flex-shrink-0 text-red-600 mt-0.5" />
                    <div>
                      <div className="font-bold">Gagal Menganalisis</div>
                      <p>{error}</p>
                    </div>
                  </div>
                )}

                {result && !loading && (
                  <div className="space-y-4">
                    
                    {/* BANNER UTAMA HASIL KEPUTUSAN: ORGANIK, ANORGANIK, ATAU RESIDU */}
                    <div
                      className={`rounded-2xl p-5 border-2 shadow-md transition ${
                        result.category === 'organik'
                          ? 'bg-emerald-700 text-white border-emerald-800'
                          : result.category === 'anorganik'
                          ? 'bg-blue-700 text-white border-blue-800'
                          : 'bg-red-700 text-white border-red-800'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 bg-white ${
                              result.category === 'organik'
                                ? 'text-emerald-700'
                                : result.category === 'anorganik'
                                ? 'text-blue-700'
                                : 'text-red-700'
                            }`}
                          >
                            {result.category === 'organik' ? (
                              <Leaf className="w-6 h-6" />
                            ) : result.category === 'anorganik' ? (
                              <Recycle className="w-6 h-6" />
                            ) : (
                              <AlertTriangle className="w-6 h-6" />
                            )}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="text-lg sm:text-xl font-black tracking-tight">
                                {result.verdictTitle}
                              </h3>
                              <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-white/20">
                                {result.confidence}% Yakin
                              </span>
                            </div>
                            <p className="text-xs sm:text-sm text-slate-100 mt-0.5 leading-snug">
                              {result.verdictSubtitle}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Baris Objek Terdeteksi */}
                      <div className="mt-3 pt-3 border-t border-white/15 flex items-center justify-between text-xs">
                        <span className="text-slate-200">Karakteristik Materi:</span>
                        <span className="font-extrabold text-white bg-black/25 px-2.5 py-0.5 rounded border border-white/10">
                          {result.detectedObjectIndonesian}
                        </span>
                      </div>
                      {result.confidence < 75 && (
                        <div className="mt-3 bg-amber-100 text-amber-900 border border-amber-300 rounded-xl p-2.5 text-xs flex gap-2">
                          <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                          <span><b>Keyakinan rendah ({result.confidence}%)</b> — foto piring campur / pencahayaan kurang. AI tidak dapat mendeteksi rincian seperti bubuk mie atau potongan telur satu per satu. Hasil menunjukkan kategori wadah kasar saja. Silakan pisahkan sachet/kresek ke Wadah Merah dan gunakan koreksi 1-klik di bawah.</span>
                        </div>
                      )}
                    </div>

                    {/* Breakdown Probabilitas 3 Skor Kategori */}
                    {result.candidateScores && (
                      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 text-xs space-y-2">
                        <div className="font-bold text-slate-700 text-[11px] uppercase tracking-wider">
                          Distribusi Keyakinan AI (3 Kategori):
                        </div>
                        <div className="space-y-1.5">
                          <div>
                            <div className="flex justify-between text-[11px] mb-0.5">
                              <span className="font-semibold text-emerald-800">1. Organik (Mudah Membusuk)</span>
                              <span className="font-bold">{result.candidateScores.organic}%</span>
                            </div>
                            <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-emerald-500 rounded-full"
                                style={{ width: `${result.candidateScores.organic}%` }}
                              />
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-[11px] mb-0.5">
                              <span className="font-semibold text-blue-800">2. Anorganik (Plastik / Kardus / Logam)</span>
                              <span className="font-bold">{result.candidateScores.recyclable}%</span>
                            </div>
                            <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-blue-500 rounded-full"
                                style={{ width: `${result.candidateScores.recyclable}%` }}
                              />
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-[11px] mb-0.5">
                              <span className="font-semibold text-red-800">3. Residu (Kresek / Popok / Sachet)</span>
                              <span className="font-bold">{result.candidateScores.residual}%</span>
                            </div>
                            <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-red-500 rounded-full"
                                style={{ width: `${result.candidateScores.residual}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* KOTAK ARAHAN WADAH & TINDAKAN LANJUTAN */}
                    <div
                      className={`rounded-2xl p-4 sm:p-5 border-2 ${
                        result.binColor === 'emerald'
                          ? 'bg-emerald-50 border-emerald-400 text-emerald-950'
                          : result.binColor === 'blue'
                          ? 'bg-blue-50 border-blue-400 text-blue-950'
                          : 'bg-red-50 border-red-400 text-red-950'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Masukkan ke Wadah:
                        </div>
                        <span
                          className={`text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-sm ${
                            result.binColor === 'emerald'
                              ? 'bg-emerald-700 text-white'
                              : result.binColor === 'blue'
                              ? 'bg-blue-700 text-white'
                              : 'bg-red-700 text-white'
                          }`}
                        >
                          {result.binName}
                        </span>
                      </div>

                      <div className="space-y-2.5 text-xs sm:text-sm">
                        <div className="bg-white/85 p-3 rounded-xl border border-black/5">
                          <div className="font-bold text-slate-900 mb-0.5 flex items-center gap-1.5">
                            <Info className="w-4 h-4 text-slate-600" />
                            <span>Instruksi Penanganan di Rumah:</span>
                          </div>
                          <p className="text-slate-700 leading-relaxed">{result.recommendation}</p>
                        </div>

                        <div className="bg-white/85 p-3 rounded-xl border border-black/5">
                          <div className="font-bold text-slate-900 mb-0.5 flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                            <span>Penyaluran di Kelurahan Lebak Gede:</span>
                          </div>
                          <p className="text-slate-700 leading-relaxed">{result.actionGuide}</p>
                        </div>
                      </div>

                      {/* FITUR KOREKSI CEPAT 1-KLIK (JIKA HASIL FOTO KURANG TEPAT) */}
                      <div className="mt-4 pt-3 border-t border-black/10">
                        <div className="text-[11px] font-bold text-slate-600 mb-2 flex items-center gap-1">
                          <HelpCircle className="w-3.5 h-3.5 text-slate-500" />
                          <span>Hasil kurang pas? Pilih kategori langsung:</span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          <button
                            type="button"
                            onClick={() => handleManualOverride('organik')}
                            className={`py-1.5 px-2 rounded-lg text-[11px] font-bold transition flex items-center justify-center gap-1 ${
                              result.category === 'organik'
                                ? 'bg-emerald-700 text-white ring-2 ring-emerald-400'
                                : 'bg-white hover:bg-emerald-100 text-emerald-900 border border-emerald-300'
                            }`}
                          >
                            <Leaf className="w-3 h-3" />
                            <span>Organik</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => handleManualOverride('anorganik')}
                            className={`py-1.5 px-2 rounded-lg text-[11px] font-bold transition flex items-center justify-center gap-1 ${
                              result.category === 'anorganik'
                                ? 'bg-blue-700 text-white ring-2 ring-blue-400'
                                : 'bg-white hover:bg-blue-100 text-blue-900 border border-blue-300'
                            }`}
                          >
                            <Recycle className="w-3 h-3" />
                            <span>Anorganik</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => handleManualOverride('residu')}
                            className={`py-1.5 px-2 rounded-lg text-[11px] font-bold transition flex items-center justify-center gap-1 ${
                              result.category === 'residu'
                                ? 'bg-red-700 text-white ring-2 ring-red-400'
                                : 'bg-white hover:bg-red-100 text-red-900 border border-red-300'
                            }`}
                          >
                            <AlertTriangle className="w-3 h-3" />
                            <span>Residu</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => handleManualOverride('elektronik')}
                            className={`py-1.5 px-2 rounded-lg text-[11px] font-bold transition flex items-center justify-center gap-1 ${
                              result.category === 'elektronik'
                                ? 'bg-zinc-700 text-white ring-2 ring-zinc-400'
                                : 'bg-white hover:bg-zinc-100 text-zinc-800 border border-zinc-300'
                            }`}
                          >
                            <span className="w-3 h-3 rounded-full bg-amber-500 border border-amber-600" />
                            <span>E-Waste</span>
                          </button>
                        </div>
                      </div>

                    </div>

                  </div>
                )}
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
