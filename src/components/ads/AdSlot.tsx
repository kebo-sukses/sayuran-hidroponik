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
}

const adConfigs: Record<AdSlotType, AdConfig> = {
  'infeed': {
    slot: '2843463407',
    format: 'fluid',
    layoutKey: '-6f+ce+2u-x+6c',
    style: { display: 'block' },
  },
  'mid-article': {
    slot: '6763361262',
    format: 'fluid',
    layout: 'in-article',
    style: { display: 'block', textAlign: 'center' },
  },
  'sidebar': {
    slot: '1530381737',
    format: 'autorelaxed',
    style: { display: 'block' },
  },
  'footer': {
    slot: '2843463407',
    format: 'fluid',
    layoutKey: '-6f+ce+2u-x+6c',
    style: { display: 'block' },
  },
};

interface AdSlotProps {
  type: AdSlotType;
  className?: string;
}

export default function AdSlot({ type, className = '' }: AdSlotProps) {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    try {
      (window as typeof window & { adsbygoogle: unknown[] }).adsbygoogle =
        (window as typeof window & { adsbygoogle: unknown[] }).adsbygoogle || [];
      (window as typeof window & { adsbygoogle: unknown[] }).adsbygoogle.push({});
      initialized.current = true;
    } catch {
      // AdSense belum siap
    }
  }, []);

  const config = adConfigs[type];

  return (
    <div className={`ad-slot-wrapper my-4 ${className}`}>
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
