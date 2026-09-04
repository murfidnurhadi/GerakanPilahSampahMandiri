'use client';

import React from 'react';
import Link from 'next/link';
import {
  Phone,
  MessageSquare,
  Users,
  CheckCircle2,
  Sprout,
  Bug,
  Scale,
  Clock,
  MapPin,
  Building,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

const GASLAH_RW_DATA = [
  {
    rw: 'RW 04',
    title: 'GASLAH RW 04 - Kompos Kebun SAE',
    badge: 'Organik Sayur & Daun',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    icon: Sprout,
    iconColor: 'bg-emerald-100 text-emerald-800',
    borderColor: 'border-emerald-400',
    desc: 'Fokus pada pengolahan sampah daun pekarangan dan potongan sayuran mentah menjadi pupuk organik subur tanaman warga.',
    officers: [
      { name: 'Petugas GASLAH 1', role: 'Koordinator Edukasi & Pemilahan Rumah Tangga' },
      { name: 'Petugas GASLAH 2', role: 'Pengelola Komposter Takakura & Lodong Sesa Dapur' },
      { name: 'Petugas GASLAH 3', role: 'Distribusi Pupuk Kompos Taman SAE Warga' },
    ],
    schedule: 'Setiap Hari (08.00 - 15.00 WIB)',
    location: 'Taman Ketahanan Pangan SAE RW 04',
  },
  {
    rw: 'RW 07',
    title: 'GASLAH RW 07 - Biokonversi Maggot BSF',
    badge: 'Sisa Makanan Basah',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
    icon: Bug,
    iconColor: 'bg-amber-100 text-amber-800',
    borderColor: 'border-amber-400',
    desc: 'Fokus pada penanganan cepat sisa nasi basi, tulang, dan lauk berprotein tinggi menggunakan larva Maggot Black Soldier Fly.',
    officers: [
      { name: 'Petugas GASLAH 1', role: 'Koordinator Pengumpulan Sisa Makanan Dapur' },
      { name: 'Petugas GASLAH 2', role: 'Operator Perawatan Biopond Larva Maggot BSF' },
      { name: 'Petugas GASLAH 3', role: 'Penyalur Kasgot (Bekas Maggot) Pupuk Organik' },
    ],
    schedule: 'Pagi Hari (07.30 - 10.30 WIB)',
    location: 'Rumah Pengolahan Organik Maggot RW 07',
  },
  {
    rw: 'RW 14',
    title: 'GASLAH RW 14 - Bank Sampah Berkah',
    badge: 'Anorganik Daur Ulang',
    badgeColor: 'bg-blue-100 text-blue-900 border-blue-300',
    icon: Scale,
    iconColor: 'bg-blue-100 text-blue-800',
    borderColor: 'border-blue-400',
    desc: 'Fokus pada penimbangan dan pencatatan botol plastik PET, kardus, kaleng, dan minyak jelantah untuk dikonversi menjadi saldo rupiah.',
    officers: [
      { name: 'Petugas GASLAH 1', role: 'Petugas Sortir & Penimbangan Anorganik Kering' },
      { name: 'Petugas GASLAH 2', role: 'Pencatat Rekening Buku Tabungan Nasabah Sampah' },
      { name: 'Petugas GASLAH 3', role: 'Koordinator Pengepul & Distribusi Daur Ulang' },
    ],
    schedule: 'Setiap Minggu (08.00 - 11.30 WIB)',
    location: 'Balai Pertemuan Warga RW 14 Lebak Gede',
  },
];

export default function PoskoRWSection() {
  return (
    <section id="kontak-gaslah" className="py-10 sm:py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* ========================================================= */}
        {/* 1. SOLUSI HUBUNGI NOMOR KELOMPOK HANYA 1 (CALL CENTER)   */}
        {/* ========================================================= */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 text-white p-6 sm:p-10 border-2 border-emerald-600 shadow-xl mb-12">
          
          <div className="relative z-10 max-w-3xl space-y-4">
            
            <div className="inline-flex items-center gap-2 bg-emerald-800/90 border border-emerald-400/50 text-emerald-200 text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Satu Nomor Resmi Bantuan & Pendampingan Warga</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
              Solusi Mudah: Hubungi 1 Kontak Resmi Kelompok
            </h2>

            <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
              Warga Kelurahan Lebak Gede (khususnya RW 04, RW 07, dan RW 14) kini tidak perlu bingung mencari kontak yang berbeda-beda. Cukup hubungi <strong>satu nomor pusat koordinasi kelompok KKN UNIKOM 2026</strong> untuk segala pertanyaan seputar pemilahan sampah, konsultasi wadah, atau pendampingan petugas GASLAH:
            </p>

            {/* Kartu Tombol WhatsApp Tunggal Resmi */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              
              <a
                href="https://wa.me/6282123456789?text=Halo%20Tim%20KKN%20UNIKOM%20Kelurahan%20Lebak%20Gede,%20saya%20warga%20ingin%20konsultasi%20tentang%20pemilahan%20sampah."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-emerald-400 hover:bg-emerald-300 text-emerald-950 font-black text-base sm:text-lg px-7 py-4 rounded-2xl shadow-xl active:scale-95 transition-all group"
              >
                <MessageSquare className="w-6 h-6 text-emerald-950 group-hover:scale-110 transition-transform" />
                <div className="text-left leading-tight">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-900">
                    Hotline WhatsApp Resmi
                  </div>
                  <div>0821-2345-6789</div>
                </div>
              </a>

              <div className="text-xs text-emerald-200 space-y-1 bg-black/30 backdrop-blur-sm p-3.5 rounded-xl border border-emerald-700/60">
                <div className="flex items-center gap-2 font-bold text-white">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Layanan Cepat Tanggap Warga:</span>
                </div>
                <p>• Tanya kategori sampah yang membingungkan</p>
                <p>• Hubungi jadwal penjemputan sampah terpilah</p>
                <p>• Pendampingan dari petugas GASLAH wilayah Anda</p>
              </div>

            </div>

          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. PROGRAM 3 PETUGAS GASLAH DI SETIAP RW                  */}
        {/* ========================================================= */}
        <div className="mb-10 text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 border border-emerald-300 px-3.5 py-1 rounded-full inline-block">
            Inisiatif Pemkot Bandung 2026
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900">
            3 Petugas GASLAH di Tiap RW
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            <strong>GASLAH (Gerakan Sampah Kelar di Wilayah)</strong> adalah gerakan penempatan 3 petugas khusus di setiap RW untuk memastikan sampah selesai dan terolah langsung di tingkat pemukiman warga, tanpa harus dibuang ke TPA Sarimukti.
          </p>
        </div>

        {/* Grid 3 RW: Masing-masing Memiliki 3 Petugas GASLAH */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {GASLAH_RW_DATA.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.rw}
                className={`bg-white rounded-3xl overflow-hidden border-2 ${item.borderColor} shadow-md flex flex-col justify-between`}
              >
                <div className="p-6 space-y-4">
                  
                  {/* Header Kartu RW */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black ${item.iconColor}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded border ${item.badgeColor}`}>
                          {item.badge}
                        </span>
                        <h3 className="text-lg font-black text-slate-900 mt-1">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* 3 Petugas GASLAH Khusus */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-emerald-700" />
                      <span>3 Petugas GASLAH Terdaftar:</span>
                    </div>
                    <div className="space-y-2">
                      {item.officers.map((officer, idx) => (
                        <div
                          key={idx}
                          className="bg-slate-50 border border-slate-200 p-2.5 rounded-xl text-xs space-y-0.5"
                        >
                          <div className="font-extrabold text-slate-900 flex items-center gap-1.5">
                            <span className="w-4 h-4 rounded-full bg-emerald-600 text-white text-[10px] font-black flex items-center justify-center">
                              {idx + 1}
                            </span>
                            <span>{officer.name}</span>
                          </div>
                          <p className="text-[11px] text-slate-600 pl-5">
                            {officer.role}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Jadwal & Lokasi */}
                  <div className="space-y-1.5 pt-2 text-xs text-slate-600">
                    <div className="flex items-center gap-1.5 text-slate-800 font-semibold">
                      <Clock className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
                      <span>{item.schedule}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-800 font-semibold">
                      <MapPin className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                </div>

                {/* Footer Kartu RW */}
                <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-slate-700">
                  <span className="text-emerald-800">Wilayah {item.rw} Siaga</span>
                  <span className="bg-emerald-600 text-white px-2.5 py-1 rounded-lg text-[10px]">
                    3 Petugas Aktif
                  </span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Banner Kantor Kelurahan & Sinergi */}
        <div className="bg-white rounded-2xl p-5 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs shadow-sm">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-emerald-800 text-white flex items-center justify-center font-black flex-shrink-0">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <div className="font-extrabold text-slate-900 text-sm sm:text-base">
                Kelurahan Lebak Gede, Kecamatan Coblong
              </div>
              <div className="text-slate-500 text-xs">
                Program GASLAH didukung oleh Dinas Lingkungan Hidup Kota Bandung, Pemprov Jabar, dan Mahasiswa KKN UNIKOM 2026.
              </div>
            </div>
          </div>
          <a
            href="https://wa.me/6282123456789?text=Halo%20Tim%20KKN%20UNIKOM%20Lebak%20Gede,%20saya%20warga%20ingin%20konsultasi%20pemilahan%20sampah."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white font-bold px-4 py-2.5 rounded-xl transition"
          >
            <Phone className="w-4 h-4" />
            <span>Hubungi Hotline Kelompok</span>
          </a>
        </div>

      </div>
    </section>
  );
}
