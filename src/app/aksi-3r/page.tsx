import React from 'react';
import type { Metadata } from 'next';
import Action3R from '@/components/Action3R';

export const metadata: Metadata = {
  title: 'Panduan Aksi 3R di Rumah | Kelurahan Lebak Gede Coblong',
  description: 'Langkah nyata Reduce, Reuse, dan Recycle untuk memangkas timbunan sampah dari dapur keluarga.',
};

export default function Aksi3RPage() {
  return (
    <div className="py-2">
      <Action3R />
    </div>
  );
}
