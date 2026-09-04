import React from 'react';
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-16">
      <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-black text-2xl mb-4 shadow-sm">
        404
      </div>
      <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
        Halaman Tidak Ditemukan
      </h1>
      <p className="text-slate-600 text-sm max-w-md mb-6">
        Halaman yang Anda cari mungkin telah dipindahkan atau tautan yang Anda tuju kurang tepat.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow transition"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Kembali ke Beranda</span>
      </Link>
    </div>
  );
}
