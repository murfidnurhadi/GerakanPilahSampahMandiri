import React from 'react';
import type { Metadata } from 'next';
import CrisisImpact from '@/components/CrisisImpact';

export const metadata: Metadata = {
  title: 'Bahaya Vektor Penyakit Sampah Tercampur | Kelurahan Lebak Gede Coblong',
  description: 'Ancaman DBD dari genangan sampah plastik, diare dari lalat, dan ISPA dari asap polusi bakaran sampah.',
};

export default function BahayaPenyakitPage() {
  return (
    <div className="py-2">
      <CrisisImpact />
    </div>
  );
}
