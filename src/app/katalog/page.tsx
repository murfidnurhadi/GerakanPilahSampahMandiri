import React from 'react';
import type { Metadata } from 'next';
import WasteCatalog from '@/components/WasteCatalog';

export const metadata: Metadata = {
  title: 'Katalog Foto Sampah Rumah Tangga Lengkap | Kelurahan Lebak Gede Coblong',
  description: 'Galeri foto lengkap sampah organik, anorganik daur ulang, dan residu kotor beserta cara penanganan praktisnya.',
};

export default function KatalogPage() {
  return (
    <div className="py-2">
      <WasteCatalog />
    </div>
  );
}
