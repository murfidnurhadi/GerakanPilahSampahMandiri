import React from 'react';
import type { Metadata } from 'next';
import ThreeBinsGuide from '@/components/ThreeBinsGuide';

export const metadata: Metadata = {
  title: 'Panduan 3 Wadah Praktis Bergambar | Kelurahan Lebak Gede Coblong',
  description: 'Contoh foto barang nyata untuk Wadah Hijau (Organik), Wadah Biru (Anorganik Daur Ulang), dan Wadah Merah (Residu).',
};

export default function TigaWadahPage() {
  return (
    <div className="py-2">
      <ThreeBinsGuide />
    </div>
  );
}
