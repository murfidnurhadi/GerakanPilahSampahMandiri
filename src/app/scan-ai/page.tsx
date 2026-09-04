'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const WasteClassifier = dynamic(() => import('@/components/WasteClassifier'), {
  ssr: false,
  loading: () => (
    <div className="py-20 text-center max-w-xl mx-auto text-emerald-800">
      <div className="w-9 h-9 border-2 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
      <p className="text-sm font-black">Menyiapkan Kamera & Model AI...</p>
    </div>
  ),
});

export default function ScanAiPage() {
  return (
    <div className="py-4">
      <WasteClassifier />
    </div>
  );
}
