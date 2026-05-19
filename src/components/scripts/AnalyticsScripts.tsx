import { siteConfig } from '@/lib/config';
import Script from 'next/script';

/**
 * GoogleTagScript – inject G-Tag dengan strategy="lazyOnload"
 * Dimuat setelah window.onload → mengurangi blocking main thread (TBT)
 */
export function GoogleTagScript() {
  if (!siteConfig.gtag) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.gtag}`}
        strategy="lazyOnload"
      />
      <Script id="gtag-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${siteConfig.gtag}');
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
      strategy="lazyOnload"
    />
  );
}
