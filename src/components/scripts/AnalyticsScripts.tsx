import { siteConfig } from '@/lib/config';
import Script from 'next/script';

/**
 * GoogleTagScript – inject G-Tag dengan strategy="afterInteractive"
 * Tidak memblokir rendering → LCP tetap cepat
 */
export function GoogleTagScript() {
  if (!siteConfig.gtag) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.gtag}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${siteConfig.gtag}', { page_path: window.location.pathname });
          gtag('config', '${siteConfig.gads}');
        `}
      </Script>
    </>
  );
}

/**
 * AdSenseScript – inject AdSense dengan strategy="afterInteractive"
 * Dipasang sekali di layout root
 */
export function AdSenseScript() {
  if (!siteConfig.adsenseId) return null;

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${siteConfig.adsenseId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}
