'use client';

import { useEffect, useRef } from 'react';
import { siteConfig } from '@/lib/config';

type AdSlotType = 'infeed' | 'mid-article' | 'sidebar' | 'footer';

interface AdConfig {
  slot: string;
  format: string;
  layoutKey?: string;
  layout?: string;
  style: React.CSSProperties;
  /** Reserved height (px) untuk mencegah CLS saat iklan belum dimuat */
  minHeight: number;
}

const adConfigs: Record<AdSlotType, AdConfig> = {
  'infeed': {
    slot: '2843463407',
    format: 'fluid',
    layoutKey: '-6f+ce+2u-x+6c',
    style: { display: 'block' },
    minHeight: 280,
  },
  'mid-article': {
    slot: '6763361262',
    format: 'fluid',
    layout: 'in-article',
    style: { display: 'block', textAlign: 'center' },
    minHeight: 100,
  },
  'sidebar': {
    slot: '1530381737',
    format: 'autorelaxed',
    style: { display: 'block' },
    minHeight: 250,
  },
  'footer': {
    slot: '2843463407',
    format: 'fluid',
    layoutKey: '-6f+ce+2u-x+6c',
    style: { display: 'block' },
    minHeight: 250,
  },
};

type WindowWithAds = typeof window & { adsbygoogle: unknown[] };

interface AdSlotProps {
  type: AdSlotType;
  className?: string;
}

export default function AdSlot({ type, className = '' }: AdSlotProps) {
  const initialized = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialized.current) return;
    const container = containerRef.current;
    if (!container) return;

    const pushAd = () => {
      if (initialized.current) return;
      try {
        const w = window as WindowWithAds;
        w.adsbygoogle = w.adsbygoogle || [];
        w.adsbygoogle.push({});
        initialized.current = true;
      } catch {
        // AdSense belum siap
      }
    };

    // Hanya muat iklan saat mendekati viewport (200px margin) untuk
    // mengurangi blocking main thread di awal halaman (TBT)
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observer.disconnect();
          pushAd();
        }
      },
      { threshold: 0, rootMargin: '200px 0px' }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const config = adConfigs[type];

  return (
    <div
      ref={containerRef}
      className={`ad-slot-wrapper my-4 ${className}`}
      style={{ minHeight: config.minHeight }}
    >
      <ins
        className="adsbygoogle"
        style={config.style}
        data-ad-client={siteConfig.adsenseId}
        data-ad-slot={config.slot}
        data-ad-format={config.format}
        {...(config.layoutKey ? { 'data-ad-layout-key': config.layoutKey } : {})}
        {...(config.layout ? { 'data-ad-layout': config.layout } : {})}
      />
    </div>
  );
}
