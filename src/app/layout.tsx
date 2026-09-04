import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import UrgentAlert from '@/components/UrgentAlert';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Gerakan Pilah Sampah Mandiri - Kelurahan Lebak Gede Coblong | KKN UNIKOM 2026',
  description:
    'Portal edukasi dan katalog pemilahan 3 jenis sampah (Organik, Anorganik, Residu) serta pemindai AI foto sampah mandiri warga RW 04, RW 07, dan RW 14 Kelurahan Lebak Gede Coblong, Kota Bandung.',
  keywords: [
    'pemilahan sampah',
    'kkn unikom 2026',
    'lebak gede',
    'coblong bandung',
    'tpa sarimukti',
    'sampah organik',
    'daur ulang',
    'residu',
    'kebun sae',
    'maggot bsf',
  ],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#064e3b',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`scroll-smooth ${plusJakartaSans.variable}`}>
      <body className="font-sans min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
        <UrgentAlert />
        <Navbar />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
