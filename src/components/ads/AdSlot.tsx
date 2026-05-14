'use client';

import { useEffect, useRef } from 'react';
import { siteConfig } from '@/lib/config';

type AdSlotType = 'infeed' | 'mid-article' | 'sidebar' | 'footer';

const adSlotIds: Record<AdSlotType, string> = {
  'infeed': '1234567890',      // Ganti dengan slot ID AdSense Anda
  'mid-article': '0987654321', // Ganti dengan slot ID AdSense Anda
  'sidebar': '1122334455',     // Ganti dengan slot ID AdSense Anda
  'footer': '5544332211',      // Ganti dengan slot ID AdSense Anda
};

const adSizes: Record<AdSlotType, { width: number; height: number; className: string }> = {
  'infeed': { width: 728, height: 90, className: 'w-full max-w-[728px] h-[90px]' },
  'mid-article': { width: 336, height: 280, className: 'w-full max-w-[336px] h-[280px] mx-auto' },
  'sidebar': { width: 300, height: 250, className: 'w-[300px] h-[250px]' },
  'footer': { width: 728, height: 90, className: 'w-full max-w-[728px] h-[90px]' },
};

interface AdSlotProps {
  type: AdSlotType;
  className?: string;
}

/**
 * AdSlot – komponen iklan AdSense yang reusable.
 * 
 * Strategi:
 * - useEffect memastikan adsbygoogle.push() hanya di client side
 * - Placeholder ditampilkan saat AdSense belum load (hindari CLS)
 * - Hanya render jika adsenseId sudah dikonfigurasi
 */
export default function AdSlot({ type, className = '' }: AdSlotProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    if (!siteConfig.adsenseId || siteConfig.adsenseId === 'ca-pub-XXXXXXXXXX') return;

    try {
      (window as any).adsbygoogle = (window as any).adsbygoogle || [];
      (window as any).adsbygoogle.push({});
      initialized.current = true;
    } catch {
      // AdSense belum siap, akan retry saat komponen re-mount
    }
  }, []);

  // Jangan render di development jika belum konfigurasi
  if (!siteConfig.adsenseId || siteConfig.adsenseId === 'ca-pub-XXXXXXXXXX') {
    const size = adSizes[type];
    return (
      <div
        className={`ad-slot-container ${size.className} ${className}`}
        aria-hidden="true"
      >
        <span className="text-xs text-gray-400">Iklan – {type}</span>
      </div>
    );
  }

  const size = adSizes[type];

  return (
    <div className={`ad-slot-wrapper text-center my-4 ${className}`}>
      <ins
        ref={adRef as any}
        className="adsbygoogle"
        style={{ display: 'block', width: size.width, height: size.height }}
        data-ad-client={siteConfig.adsenseId}
        data-ad-slot={adSlotIds[type]}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
