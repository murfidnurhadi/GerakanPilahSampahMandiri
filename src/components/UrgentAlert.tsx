'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, X } from 'lucide-react';

export default function UrgentAlert() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <aside
      aria-label="Peringatan Darurat Sampah Kota Bandung"
      className="bg-red-800 text-white px-3 sm:px-4 py-2 border-b border-red-900 text-xs sm:text-sm font-medium transition-all"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <span className="flex-shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full bg-white text-red-850 font-black text-xs text-red-800 shadow-sm">
            !
          </span>
          <p className="truncate sm:overflow-visible sm:whitespace-normal leading-snug">
            <span className="font-extrabold uppercase tracking-wider text-red-200 mr-1.5">
              Darurat Sampah Sarimukti:
            </span>
            Kapasitas TPA kritis & ritase pengangkutan ke Lebak Gede dibatasi ketat!
          </p>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <Link
            href="/krisis-tpa"
            className="inline-flex items-center gap-1.5 bg-white text-red-800 hover:bg-red-50 text-xs px-2.5 py-1 rounded-lg font-bold transition shadow-sm"
          >
            <span>Lihat Krisis</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <button
            onClick={() => setDismissed(true)}
            className="p-1 text-red-200 hover:text-white rounded hover:bg-red-700/60 transition"
            aria-label="Tutup peringatan"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
