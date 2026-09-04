import React from 'react';
import type { Metadata } from 'next';
import PoskoRWSection from '@/components/PoskoRWSection';

export const metadata: Metadata = {
  title: 'Solusi Sampah di Wilayah: 3 GASLAH & 1 Kontak Kelompok | Lebak Gede Coblong',
  description: 'Solusi penuntasan sampah: 3 Petugas GASLAH tiap RW (04, 07, 14) dan 1 nomor resmi hotline kelompok KKN UNIKOM untuk bantuan warga.',
};

export default function PoskoRwPage() {
  return (
    <div className="py-2">
      <PoskoRWSection />
    </div>
  );
}
