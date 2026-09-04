import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Camera,
  BookOpen,
  Leaf,
  AlertTriangle,
  Recycle,
  MapPin,
  ArrowRight,
  ShieldAlert,
  Flame,
  Droplets,
  ChevronRight,
  Bug,
} from 'lucide-react';

const INFO_PAGES = [
  {
    title: 'Krisis TPA Sarimukti',
    desc: 'Fakta gunungan sampah overload 1000% dan pembatasan ritase truk sampah Kota Bandung.',
    href: '/krisis-tpa',
    badge: 'Darurat Wilayah',
    badgeColor: 'bg-red-600 text-white',
    image: 'https://www.infobdg.com/v2/wp-content/uploads/2024/06/istockphoto-1424551739-612x612-1.jpg',
    btnText: 'Buka Halaman Krisis TPA',
  },
  {
    title: 'Bahaya Penyakit & TPS',
    desc: 'Ancaman nyata jentik nyamuk DBD, lalat hijau diare, dan infeksi saluran pernapasan (ISPA).',
    href: '/bahaya-penyakit',
    badge: 'Kesehatan Warga',
    badgeColor: 'bg-amber-500 text-slate-950',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXy0egh9hclMbqVT9hw-B3dNtvPw5ys_za3qTJzSdgjw&s=10',
    btnText: 'Pelajari Bahaya Penyakit',
  },
  {
    title: 'Panduan 3 Wadah Praktis',
    desc: 'Pisahkan Wadah Hijau (Organik), Biru (Daur Ulang), dan Merah (Residu B3) di rumah.',
    href: '/tiga-wadah',
    badge: 'Panduan Utama',
    badgeColor: 'bg-emerald-500 text-slate-950',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&auto=format&fit=crop&q=80',
    btnText: 'Buka Panduan 3 Wadah',
  },
  {
    title: 'Scan Foto AI (Organik/Bukan)',
    desc: 'Arahkan kamera HP ke sampah untuk klasifikasi otomatis instan: Organik atau Bukan.',
    href: '/scan-ai',
    badge: 'Fitur Pintar AI',
    badgeColor: 'bg-emerald-400 text-emerald-950',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80',
    btnText: 'Scan Kamera Sekarang',
  },
  {
    title: 'Katalog 18 Jenis Sampah',
    desc: 'Galeri foto lengkap sisa dapur, kardus, botol plastik, minyak jelantah, hingga popok bayi.',
    href: '/katalog',
    badge: '18+ Foto Barang',
    badgeColor: 'bg-blue-600 text-white',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&auto=format&fit=crop&q=80',
    btnText: 'Buka Katalog Foto',
  },
  {
    title: 'Langkah Aksi 3R di Rumah',
    desc: 'Kurangi kantong kresek (Reduce), buat pot botol (Reuse), dan tabung ke bank sampah (Recycle).',
    href: '/aksi-3r',
    badge: 'Aksi Nyata',
    badgeColor: 'bg-teal-500 text-slate-950',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80',
    btnText: 'Pelajari Solusi 3R',
  },
  {
    title: 'Solusi: 3 GASLAH & Kontak Kelompok',
    desc: 'Solusi penuntasan sampah di wilayah: 3 Petugas GASLAH tiap RW dan 1 nomor resmi hotline KKN UNIKOM untuk bantuan warga.',
    href: '/posko-rw',
    badge: 'Solusi Wilayah',
    badgeColor: 'bg-emerald-600 text-white',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&auto=format&fit=crop&q=80',
    btnText: 'Buka Halaman Solusi',
  },
];

export default function Home() {
  return (
    <main className="space-y-12 sm:space-y-16 pb-16">

      {/* ========================================================= */}
      {/* 1. BAGIAN ATAS: HERO FOTO TPA SARIMUKTI SEBAGAI BACKGROUND */}
      {/* ========================================================= */}
      <section className="relative min-h-[520px] sm:min-h-[600px] flex items-center justify-center overflow-hidden border-b border-emerald-900 bg-slate-950">
        {/* Gambar Latar Belakang Penuh: TPA Sarimukti */}
        <Image
          src="https://www.infobdg.com/v2/wp-content/uploads/2024/06/istockphoto-1424551739-612x612-1.jpg"
          alt="Latar belakang gunungan sampah TPA Sarimukti overload Bandung Barat"
          fill
          priority
          className="object-cover object-center scale-105"
        />

        {/* Lapisan Gradient Gelap agar Teks Terbaca Jelas & Sinematik */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60 sm:bg-gradient-to-r sm:from-slate-950 sm:via-slate-950/85 sm:to-black/60" />

        {/* Konten Hero di atas Background */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 w-full">
          <div className="max-w-3xl space-y-5">
            
            {/* Tag Darurat */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 bg-red-600 text-white text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-lg border border-red-400">
                <AlertTriangle className="w-3.5 h-3.5" />
                Darurat Sampah Sarimukti Overload 1000%
              </span>
              <span className="text-xs text-emerald-300 font-semibold bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-800">
                KKN UNIKOM 2026 • Kelurahan Lebak Gede Coblong
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight drop-shadow-md">
              Gunungan Sampah Meluap, <span className="text-red-500">Saatnya Kita Bertindak.</span>
            </h1>

            <p className="text-slate-200 text-sm sm:text-lg leading-relaxed max-w-2xl drop-shadow">
              Kapasitas penampungan TPA Sarimukti kritis dan ritase truk pengangkut ke Lebak Gede dipotong ketat. Jika kita tidak memilah sampah dari dapur, sampah akan menumpuk di depan pintu rumah kita sendiri.
            </p>

            {/* Panel Statistik Cepat */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg">
              <div className="bg-black/60 backdrop-blur-md border border-red-500/50 rounded-2xl p-3.5 text-center shadow-lg">
                <div className="text-2xl sm:text-3xl font-black text-red-400">1000%</div>
                <div className="text-[11px] sm:text-xs text-slate-300 font-medium">Overcapacity TPA</div>
              </div>
              <div className="bg-black/60 backdrop-blur-md border border-amber-500/50 rounded-2xl p-3.5 text-center shadow-lg">
                <div className="text-2xl sm:text-3xl font-black text-amber-400">-50%</div>
                <div className="text-[11px] sm:text-xs text-slate-300 font-medium">Ritase Angkut TPS</div>
              </div>
              <div className="bg-black/60 backdrop-blur-md border border-emerald-500/50 rounded-2xl p-3.5 text-center shadow-lg">
                <div className="text-2xl sm:text-3xl font-black text-emerald-400">3 Wadah</div>
                <div className="text-[11px] sm:text-xs text-slate-300 font-medium">Solusi Warga Mandiri</div>
              </div>
            </div>

            {/* Tombol Aksi */}
            <div className="flex flex-wrap gap-3 pt-4">
              <Link
                href="/scan-ai"
                className="inline-flex items-center gap-2 bg-emerald-400 hover:bg-emerald-300 text-emerald-950 text-sm font-black px-6 py-3.5 rounded-xl shadow-xl transition active:scale-95"
              >
                <Camera className="w-5 h-5" />
                <span>Scan Foto Sampah (Kamera AI)</span>
              </Link>
              <Link
                href="/krisis-tpa"
                className="inline-flex items-center gap-2 bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white text-sm font-bold px-6 py-3.5 rounded-xl transition"
              >
                <span>Fakta Krisis Sarimukti</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. BAGIAN KEDUA: FOTO TPS MENUMPUK SEBAGAI BACKGROUND      */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden min-h-[480px] sm:min-h-[540px] border-2 border-amber-400 shadow-2xl flex items-end">
          
          {/* Gambar Background Penuh: TPS Menumpuk (Kompas) */}
          <Image
            src="https://asset.kompas.com/crops/ke2DjUCsJaN0vuRcv-b1Jbve5nw=/0x0:0x0/1200x800/data/photo/2026/03/11/69b0f65b09442.jpg"
            alt="Latar belakang tumpukan sampah TPS meluap meluber ke jalan raya"
            fill
            className="object-cover object-center"
          />

          {/* Lapisan Gradient Gelap Kuat */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/30" />

          {/* Teks & Keterangan Melayang di Atas Background TPS */}
          <div className="relative z-10 p-6 sm:p-12 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 bg-amber-500 text-slate-950 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow">
              <AlertTriangle className="w-4 h-4" />
              Kenyataan Nyata: TPS Lingkungan Menumpuk & Meluap
            </span>

            <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight drop-shadow-md">
              Ketika Sampah Dapur & Plastik Dicampur, TPS Meluber ke Jalan Raya.
            </h2>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed drop-shadow">
              Truk pengangkut sampah hanya bisa membawa sampah yang terpilah. Ketika sampah basah organik dan anorganik terbungkus campur aduk di dalam kantong kresek, petugas tidak sanggup menyortir manual. Akibatnya, sampah tertahan berhari-hari, membusuk, dan meluber mengotori trotoar dan jalan warga.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="bg-black/60 backdrop-blur-md px-4 py-2.5 rounded-xl border border-amber-400/50 text-xs sm:text-sm text-amber-200 font-semibold">
                ⚠️ Menumpuknya TPS bukan karena kurang armada, melainkan karena sampah tidak dipilah di rumah!
              </div>
              <Link
                href="/tiga-wadah"
                className="inline-flex items-center gap-2 bg-emerald-400 hover:bg-emerald-300 text-emerald-950 text-xs sm:text-sm font-black px-5 py-2.5 rounded-xl shadow-md transition"
              >
                <span>Lihat Panduan 3 Wadah</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. BAGIAN KETIGA: AKIBAT MENUMPUK (KARTU BACKGROUND PENUH) */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
          <span className="text-xs font-black uppercase tracking-wider text-red-700 bg-red-100 border border-red-200 px-3.5 py-1 rounded-full inline-block">
            Dampak Langsung ke Keluarga
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900">
            Akibat Sampah Dibiarkan Menumpuk
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Sampah yang membusuk di luar rumah bukan sekadar pemandangan kotor, melainkan sumber bencana kesehatan bagi anak-anak dan orang tua kita:
          </p>
        </div>

        {/* 3 Kartu Berukuran Penuh dengan Foto sebagai Background */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Kartu 1: Lalat Hijau & Diare (Foto Lalat Hijau Pengguna) */}
          <div className="relative rounded-3xl overflow-hidden min-h-[380px] sm:min-h-[420px] border-2 border-amber-500 shadow-xl group flex flex-col justify-end p-6">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXy0egh9hclMbqVT9hw-B3dNtvPw5ys_za3qTJzSdgjw&s=10"
              alt="Latar belakang lalat hijau hinggap di sisa makanan membawa bakteri"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />
            
            <div className="relative z-10 space-y-2">
              <span className="inline-flex items-center gap-1.5 bg-amber-500 text-slate-950 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                <Bug className="w-3.5 h-3.5" />
                1. Diare & Muntaber
              </span>
              <h3 className="text-xl font-black text-white leading-snug">
                Lalat Hijau Membawa Kuman E. coli
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Sisa lauk dan sayur yang membusuk di kantong sampah mengundang kawanan lalat hijau. Kuman menempel di kaki lalat dan terbawa masuk ke meja makan keluarga.
              </p>
              <div className="pt-2">
                <Link
                  href="/bahaya-penyakit"
                  className="inline-flex items-center gap-1.5 text-xs font-black text-amber-300 hover:text-white transition"
                >
                  <span>Pelajari Bahaya Lalat Hijau</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Kartu 2: Nyamuk Aedes & DBD */}
          <div className="relative rounded-3xl overflow-hidden min-h-[380px] sm:min-h-[420px] border-2 border-red-500 shadow-xl group flex flex-col justify-end p-6">
            <Image
              src="https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=700&auto=format&fit=crop&q=80"
              alt="Latar belakang nyamuk Aedes aegypti berkembang biak di genangan wadah plastik"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />

            <div className="relative z-10 space-y-2">
              <span className="inline-flex items-center gap-1.5 bg-red-600 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                <ShieldAlert className="w-3.5 h-3.5" />
                2. Demam Berdarah (DBD)
              </span>
              <h3 className="text-xl font-black text-white leading-snug">
                Sarang Jentik Nyamuk Aedes
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Gelas plastik, kaleng, dan wadah terbuka yang tergenang air hujan menjadi sarang berkembang biak jentik nyamuk <em>Aedes aegypti</em> pembawa virus DBD mematikan.
              </p>
              <div className="pt-2">
                <Link
                  href="/bahaya-penyakit"
                  className="inline-flex items-center gap-1.5 text-xs font-black text-red-300 hover:text-white transition"
                >
                  <span>Pelajari Bahaya Nyamuk DBD</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Kartu 3: Asap Racun & ISPA */}
          <div className="relative rounded-3xl overflow-hidden min-h-[380px] sm:min-h-[420px] border-2 border-cyan-500 shadow-xl group flex flex-col justify-end p-6">
            <Image
              src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=700&auto=format&fit=crop&q=80"
              alt="Latar belakang kabut asap pembakaran sampah plastik liar"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />

            <div className="relative z-10 space-y-2">
              <span className="inline-flex items-center gap-1.5 bg-cyan-600 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                <Flame className="w-3.5 h-3.5" />
                3. Sesak Napas & ISPA
              </span>
              <h3 className="text-xl font-black text-white leading-snug">
                Racun Asap Bakaran Plastik Liar
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Tumpukan sampah yang dibakar sembarangan melepaskan gas dioksin karsinogenik yang merusak paru-paru anak-anak, ibu hamil, dan lansia.
              </p>
              <div className="pt-2">
                <Link
                  href="/bahaya-penyakit"
                  className="inline-flex items-center gap-1.5 text-xs font-black text-cyan-300 hover:text-white transition"
                >
                  <span>Pelajari Bahaya Asap Racun</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. BAGIAN KEEMPAT: PILIHAN HALAMAN DENGAN FOTO BACKGROUND  */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
          <span className="text-xs font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 border border-emerald-300 px-3.5 py-1 rounded-full inline-block">
            Navigasi Halaman Edukasi
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900">
            Pilih Halaman Informasi & Panduan
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Klik kartu poster di bawah ini untuk membuka halaman informasi khusus sesuai kebutuhan Anda:
          </p>
        </div>

        {/* Grid Kartu Poster Halaman (Setiap Kartu Menjadikan Fotonya sebagai Background) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INFO_PAGES.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative rounded-3xl overflow-hidden min-h-[300px] sm:min-h-[340px] border border-emerald-800/80 shadow-lg hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between p-5 bg-slate-950"
            >
              {/* Foto Halaman Sebagai Background Penuh */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
              />

              {/* Lapisan Gradient Gelap */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/30 group-hover:via-black/65 transition-all duration-300" />

              {/* Bagian Atas: Badge */}
              <div className="relative z-10 flex items-center justify-between">
                <span
                  className={`text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-lg shadow-md ${item.badgeColor}`}
                >
                  {item.badge}
                </span>
                <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-emerald-400 group-hover:text-slate-950 transition-colors">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>

              {/* Bagian Bawah: Judul, Deskripsi & Tombol Aksi */}
              <div className="relative z-10 space-y-2">
                <h3 className="text-lg sm:text-xl font-black text-white group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-200/90 leading-relaxed line-clamp-2">
                  {item.desc}
                </p>
                <div className="pt-2">
                  <div className="inline-flex items-center gap-1.5 text-xs font-black text-emerald-400 group-hover:text-emerald-300 transition-colors">
                    <span>{item.btnText}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

            </Link>
          ))}
        </div>

      </section>

    </main>
  );
}
