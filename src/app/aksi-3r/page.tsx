import React from 'react';
import type { Metadata } from 'next';
import Action3R from '@/components/Action3R';

export const metadata: Metadata = {
  title: 'Panduan Aksi 8R di Rumah | Kelurahan Lebak Gede Coblong',
  description: 'Framework 8R: Rethink, Refuse, Reduce, Reuse, Repair, Repurpose, Recycle, Rot — dengan saran pakan ayam (nasi+mie+telur) dan lele/ikan mas (ampas tahu & sayur).',
};

export default function Aksi3RPage() {
  return (
    <div className="py-2">
      <Action3R />
    </div>
  );
}
