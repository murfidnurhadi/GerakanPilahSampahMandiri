import React from 'react';
import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';

export const metadata: Metadata = {
  title: 'Krisis TPA Sarimukti & Darurat Sampah | Kelurahan Lebak Gede Coblong',
  description: 'Fakta overcapacity TPA Sarimukti 1000% dan pembatasan ritase penarikan sampah di Kota Bandung.',
};

export default function KrisisTpaPage() {
  return (
    <div className="py-2">
      <HeroSection />
    </div>
  );
}
