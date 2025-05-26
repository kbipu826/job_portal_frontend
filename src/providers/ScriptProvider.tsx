'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

// Declare jQuery types
declare global {
  interface Window {
    jQuery: any;
    $: any;
  }
}

export default function ScriptProvider() {
  const [isMounted, setIsMounted] = useState(false);
  const [jQueryReady, setJQueryReady] = useState(false);
  const [pluginsReady, setPluginsReady] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle jQuery initialization
  const handleJQueryLoad = () => {
    if (typeof window !== 'undefined' && window.jQuery) {
      window.jQuery.noConflict();
      setJQueryReady(true);
      console.log('✅ jQuery loaded and initialized');
    }
  };

  // Handle plugin initialization
  const handlePluginsLoad = () => {
    if (typeof window !== 'undefined' && window.jQuery) {
      setPluginsReady(true);
      console.log('✅ All plugins loaded');
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {/* Load jQuery first */}
      <Script
        src="/js/jquery-3.6.0.min.js"
        strategy="lazyOnload"
        onLoad={handleJQueryLoad}
        onError={(e) => console.error('❌ Failed to load jQuery', e)}
      />

      {/* Load core dependencies after jQuery */}
      {jQueryReady && (
        <>
          <Script
            src="/js/popper.min.js"
            strategy="lazyOnload"
            onError={(e) => console.error('❌ Failed to load Popper', e)}
          />
          <Script
            src="/js/bootstrap.min.js"
            strategy="lazyOnload"
            onError={(e) => console.error('❌ Failed to load Bootstrap', e)}
          />
        </>
      )}

      {/* Load jQuery plugins after core dependencies */}
      {jQueryReady && (
        <>
          <Script
            src="/js/owl.carousel.min.js"
            strategy="lazyOnload"
            onError={(e) => console.error('❌ Failed to load Owl Carousel', e)}
          />
          <Script
            src="/js/jquery.magnific-popup.min.js"
            strategy="lazyOnload"
            onError={(e) => console.error('❌ Failed to load Magnific Popup', e)}
          />
          <Script
            src="/js/lc_lightbox.lite.js"
            strategy="lazyOnload"
            onError={(e) => console.error('❌ Failed to load Lightbox', e)}
          />
          <Script
            src="/js/bootstrap-select.min.js"
            strategy="lazyOnload"
            onError={(e) => console.error('❌ Failed to load Bootstrap Select', e)}
          />
          <Script
            src="/js/jquery.dataTables.min.js"
            strategy="lazyOnload"
            onError={(e) => console.error('❌ Failed to load DataTables', e)}
          />
          <Script
            src="/js/dataTables.bootstrap5.min.js"
            strategy="lazyOnload"
            onError={(e) => console.error('❌ Failed to load DataTables Bootstrap', e)}
          />
          <Script
            src="/js/select.bootstrap5.min.js"
            strategy="lazyOnload"
            onError={(e) => console.error('❌ Failed to load Select Bootstrap', e)}
          />
          <Script
            src="/js/waypoints.min.js"
            strategy="lazyOnload"
            onError={(e) => console.error('❌ Failed to load Waypoints', e)}
          />
          <Script
            src="/js/jquery.waypoints.min.js"
            strategy="lazyOnload"
            onError={(e) => console.error('❌ Failed to load jQuery Waypoints', e)}
          />
          <Script
            src="/js/waypoints-sticky.min.js"
            strategy="lazyOnload"
            onError={(e) => console.error('❌ Failed to load Waypoints Sticky', e)}
          />
          <Script
            src="/js/counterup.min.js"
            strategy="lazyOnload"
            onError={(e) => console.error('❌ Failed to load CounterUp', e)}
          />
          <Script
            src="/js/isotope.pkgd.min.js"
            strategy="lazyOnload"
            onError={(e) => console.error('❌ Failed to load Isotope', e)}
          />
          <Script
            src="/js/imagesloaded.pkgd.min.js"
            strategy="lazyOnload"
            onError={(e) => console.error('❌ Failed to load ImagesLoaded', e)}
          />
          <Script
            src="/js/theia-sticky-sidebar.js"
            strategy="lazyOnload"
            onError={(e) => console.error('❌ Failed to load Theia Sticky Sidebar', e)}
          />
          <Script
            src="/js/dropzone.js"
            strategy="lazyOnload"
            onError={(e) => console.error('❌ Failed to load Dropzone', e)}
          />
          <Script
            src="/js/jquery.scrollbar.min.js"
            strategy="lazyOnload"
            onError={(e) => console.error('❌ Failed to load Scrollbar', e)}
          />
          <Script
            src="/js/bootstrap-datepicker.js"
            strategy="lazyOnload"
            onError={(e) => console.error('❌ Failed to load Datepicker', e)}
          />
          <Script
            src="/js/chart.js"
            strategy="lazyOnload"
            onError={(e) => console.error('❌ Failed to load Chart', e)}
          />
          <Script
            src="/js/anm.js"
            strategy="lazyOnload"
            onError={(e) => console.error('❌ Failed to load ANM', e)}
          />
          <Script
            src="/js/bootstrap-slider.min.js"
            strategy="lazyOnload"
            onError={(e) => console.error('❌ Failed to load Bootstrap Slider', e)}
          />
          <Script
            src="/js/swiper-bundle.min.js"
            strategy="lazyOnload"
            onError={(e) => console.error('❌ Failed to load Swiper', e)}
          />
          <Script
            src="/js/switcher.js"
            strategy="lazyOnload"
            onLoad={handlePluginsLoad}
            onError={(e) => console.error('❌ Failed to load Switcher', e)}
          />
        </>
      )}

      {/* Load custom.js last */}
      {pluginsReady && (
        <Script
          src="/js/custom.js"
          strategy="lazyOnload"
          onError={(e) => console.error('❌ Failed to load custom.js', e)}
        />
      )}
    </>
  );
}
