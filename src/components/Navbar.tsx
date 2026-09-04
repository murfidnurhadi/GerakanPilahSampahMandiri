'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Leaf,
  Menu,
  X,
  Camera,
  Home,
  AlertTriangle,
  ShieldAlert,
  Layers,
  BookOpen,
  Recycle,
  Phone,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

const NAV_LINKS = [
  { name: 'Beranda', href: '/', icon: Home, desc: 'Halaman utama' },
  { name: 'Krisis TPA', href: '/krisis-tpa', icon: AlertTriangle, desc: 'Darurat Sarimukti' },
  { name: 'Bahaya Penyakit', href: '/bahaya-penyakit', icon: ShieldAlert, desc: 'Ancaman tumpukan TPS' },
  { name: '3 Wadah', href: '/tiga-wadah', icon: Layers, desc: 'Panduan pemilahan' },
  { name: 'Katalog', href: '/katalog', icon: BookOpen, desc: '18 contoh sampah' },
  { name: 'Aksi 3R', href: '/aksi-3r', icon: Recycle, desc: 'Reduce • Reuse • Recycle' },
  { name: 'Solusi', href: '/posko-rw', icon: Phone, desc: '3 GASLAH Tiap RW & 1 Kontak' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-emerald-950/95 backdrop-blur-md text-white border-b border-emerald-800/80 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          
          {/* Brand Logo & Academic/Civic Identity */}
          <Link
            href="/"
            className="flex items-center gap-3 group shrink-0 focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded-xl p-1"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-emerald-950 flex items-center justify-center font-black shadow-md group-hover:scale-105 transition-transform">
              <Leaf className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-950" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-extrabold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                  Pilah Sampah
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider bg-emerald-900 text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-700/60 hidden sm:inline-block">
                  Lebak Gede
                </span>
              </div>
              <span className="text-[10px] sm:text-xs text-emerald-300/80 font-medium tracking-tight">
                KKN UNIKOM 2026 • Coblong Bandung
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Navigasi Utama"
            className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs xl:text-sm font-semibold text-emerald-100"
          >
            {NAV_LINKS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  prefetch={true}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={(e) => {
                    if (isActive) {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className={`px-3 py-2 rounded-xl transition-all duration-150 flex items-center gap-1.5 whitespace-nowrap ${
                    isActive
                      ? 'bg-emerald-800/90 text-white font-bold shadow-inner border border-emerald-600/60 pointer-events-auto'
                      : 'text-emerald-200/90 hover:text-white hover:bg-emerald-900/60'
                  }`}
                >
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Action CTA Desktop: Scan AI */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              href="/scan-ai"
              onClick={(e) => {
                if (pathname === '/scan-ai') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all shadow-md active:scale-95 ${
                pathname === '/scan-ai'
                  ? 'bg-emerald-300 text-emerald-950 ring-2 ring-emerald-100 shadow-emerald-900/50'
                  : 'bg-emerald-400 hover:bg-emerald-300 text-emerald-950 hover:shadow-emerald-900/40'
              }`}
            >
              <Camera className="w-4 h-4" />
              <span>Scan Foto AI</span>
            </Link>
          </div>

          {/* Mobile Right Controls: Mini Scan CTA + Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/scan-ai"
              className="inline-flex items-center gap-1.5 bg-emerald-400 hover:bg-emerald-300 text-emerald-950 text-xs font-black px-3 py-1.5 rounded-lg shadow-sm"
            >
              <Camera className="w-3.5 h-3.5" />
              <span>Scan AI</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-emerald-200 hover:text-white hover:bg-emerald-900/80 transition focus:outline-none focus:ring-2 focus:ring-emerald-400"
              aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer (Clean, Spaced, Organized) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-emerald-950 border-t border-emerald-800/80 px-4 py-4 space-y-3 shadow-2xl animate-in fade-in duration-200">
          <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider px-2">
            Menu Halaman
          </div>
          <div className="space-y-1">
            {NAV_LINKS.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    if (isActive) {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-xl transition ${
                    isActive
                      ? 'bg-emerald-800 text-white font-bold border border-emerald-600/50 shadow-sm'
                      : 'text-emerald-100 hover:bg-emerald-900/70'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        isActive
                          ? 'bg-emerald-700 text-white'
                          : 'bg-emerald-900/80 text-emerald-300'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{item.name}</div>
                      <div className="text-[11px] text-emerald-300/70 font-normal">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-emerald-400/60" />
                </Link>
              );
            })}
          </div>

          {/* Mobile Scan AI Big Button */}
          <div className="pt-2 border-t border-emerald-900/80">
            <Link
              href="/scan-ai"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-400 to-emerald-300 text-emerald-950 font-black py-3 px-4 rounded-xl shadow-md active:scale-98 transition"
            >
              <Camera className="w-5 h-5" />
              <span>Buka Kamera / Scan Foto Sampah</span>
            </Link>
          </div>

          {/* Civic Badge Note */}
          <div className="text-center pt-2">
            <p className="text-[11px] text-emerald-400/70 font-medium">
              Edukasi KKN UNIKOM 2026 • RW 04, 07, 14 Lebak Gede
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
