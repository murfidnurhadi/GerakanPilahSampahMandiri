'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Search, X, MapPin, ChevronUp } from 'lucide-react';
import { WASTE_ITEMS, WasteCategory } from '@/data/wasteData';

export default function WasteCatalog() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('active')), { threshold: 0.08 });
    el.querySelectorAll('.reveal').forEach((r) => obs.observe(r));
    return () => obs.disconnect();
  }, []);
  const [selectedCategory, setSelectedCategory] = useState<WasteCategory | 'semua'>('semua');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter items
  const filteredItems = useMemo(() => {
    return WASTE_ITEMS.filter((item) => {
      const matchCat = selectedCategory === 'semua' || item.category === selectedCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchQuery =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.subCategory.toLowerCase().includes(query) ||
        item.preparationTip.toLowerCase().includes(query) ||
        item.destination.toLowerCase().includes(query) ||
        item.tags.some((t) => t.toLowerCase().includes(query));

      return matchCat && matchQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section ref={ref} id="katalog-sampah" className="py-12 sm:py-16 bg-white border-t border-emerald-100 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 relative">
        
        {/* Header Seksi Hijau */}
        <div className="text-center max-w-2xl mx-auto mb-8 reveal">
          <span className="text-xs font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 border border-emerald-300 px-3.5 py-1 rounded-full inline-block mb-2">
            Galeri Foto Barang Nyata
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Katalog Sampah Bergambar
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            Lihat langsung foto barangnya di bawah ini untuk mengetahui wadah dan cara penanganannya:
          </p>
        </div>

        {/* Kontrol Pencarian & Filter Kategori */}
        <div className="max-w-2xl mx-auto mb-8 space-y-3 reveal reveal-delay-1">
          {/* Kolom Pencarian */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-emerald-700">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari foto barang... (misal: Nasi, Botol Aqua, Pampers, Daun, Minyak)"
              className="w-full pl-12 pr-10 py-3 sm:py-3.5 rounded-2xl border-2 border-emerald-200 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 outline-none text-sm sm:text-base font-medium text-slate-900 placeholder:text-slate-400 transition"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Tombol Tab Kategori */}
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              type="button"
              onClick={() => setSelectedCategory('semua')}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition ${
                selectedCategory === 'semua'
                  ? 'bg-emerald-800 text-white shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              Semua Foto ({WASTE_ITEMS.length})
            </button>

            <button
              type="button"
              onClick={() => setSelectedCategory('organik')}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition ${
                selectedCategory === 'organik'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200'
              }`}
            >
              🥬 Organik (Hijau)
            </button>

            <button
              type="button"
              onClick={() => setSelectedCategory('anorganik')}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition ${
                selectedCategory === 'anorganik'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-blue-50 hover:bg-blue-100 text-blue-800 border border-blue-200'
              }`}
            >
              ♻️ Anorganik (Biru)
            </button>

            <button
              type="button"
              onClick={() => setSelectedCategory('residu')}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition ${
                selectedCategory === 'residu'
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'bg-red-50 hover:bg-red-100 text-red-800 border border-red-200'
              }`}
            >
              ⚠️ Residu (Merah)
            </button>
          </div>
        </div>

        {/* Grid Gambar Kartu */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, idx) => {
            const isOrganik = item.category === 'organik';
            const isAnorganik = item.category === 'anorganik';
            const delay = idx % 4 === 1 ? 'reveal-delay-1' : idx % 4 === 2 ? 'reveal-delay-2' : idx % 4 === 3 ? 'reveal-delay-3' : '';

            return (
              <div
                key={item.id}
                className={`reveal ${delay} bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-emerald-500 shadow-subtle hover:shadow-lg hover:-translate-y-1 transition duration-300 flex flex-col justify-between group`}
              >
                {/* Foto Barang */}
                <div className="relative h-36 sm:h-40 w-full bg-slate-100 overflow-hidden">
                    <Image
                     src={item.imageUrl}
                     alt={item.name}
                     fill
                     className="object-cover group-hover:scale-110 transition duration-500"
                   />
                  {/* Badge Kategori */}
                  <span
                    className={`absolute top-2 left-2 text-[10px] font-black uppercase px-2 py-0.5 rounded shadow-sm ${
                      isOrganik
                        ? 'bg-emerald-700 text-white'
                        : isAnorganik
                        ? 'bg-blue-700 text-white'
                        : 'bg-red-700 text-white'
                    }`}
                  >
                    {item.binName}
                  </span>
                </div>

                {/* Info Singkat */}
                <div className="p-3 flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <h3 className="font-extrabold text-xs sm:text-sm text-slate-900 leading-snug line-clamp-2">
                      {item.name}
                    </h3>
                    <p className="text-[11px] text-slate-500 mt-1 leading-tight line-clamp-2">
                      {item.preparationTip}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 text-[10px] font-semibold text-emerald-800 flex items-center gap-1">
                    <MapPin className="w-3 h-3 flex-shrink-0" />
                    <span className="truncate">{item.destination}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="reveal flex flex-col items-center gap-1 mt-8 opacity-60">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Geser untuk lihat aksi 3R</span>
          <ChevronUp className="w-4 h-4 text-slate-400 rotate-180 animate-swipe-bounce" />
        </div>

      </div>
    </section>
  );
}
